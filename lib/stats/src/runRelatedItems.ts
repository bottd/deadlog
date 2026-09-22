import { existsSync } from 'node:fs';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spliceEntityBlocks } from '@deadlog/changelog';
import { schema, type DrizzleDB } from '@deadlog/db';
import { findEntityName, type PatchStats, type RelatedItems } from '@deadlog/utils';
import { DAY_S, METHOD_VERSION, RELATED_RETRY_DAYS, dayOf } from './constants';
import type { NamedEntity, StatsPatch } from './readPatches';
import { indexEntities } from './rewriteMog';
import { isCurrentRelated, selectRelatedItems } from './selectRelatedItems';
import { patchBounds, windowDays } from './sliceWindows';
import type { DailyRow, TimeRange } from './types';

export interface RelatedHero {
	id: number;
	recorded: RelatedItems | null;
}

export interface RelatedPatch extends StatsPatch {
	heroes: RelatedHero[];
	candidates: number[];
}

export interface RelatedInputs {
	patches: RelatedPatch[];
	heroes: NamedEntity[];
}

export interface RelatedRunOptions {
	changelogsDir: string;
	now: number;
	rebuild: boolean;
	patchId?: string;
	loadPatches: () => Promise<RelatedInputs>;
	fetchHeroes: (range: TimeRange) => Promise<DailyRow[]>;
	fetchBuyers: (itemId: number, range: TimeRange) => Promise<DailyRow[]>;
	log?: (message: string) => void;
}

const hasBullets = (groups: { bullets: string[] }[] | null): boolean =>
	!!groups?.some((group) => group.bullets.length > 0);

export async function readRelatedPatches(db: DrizzleDB): Promise<RelatedInputs> {
	const [changelogs, heroLinks, itemLinks, heroes] = await Promise.all([
		db
			.select({
				id: schema.changelogs.id,
				slug: schema.changelogs.slug,
				pubDate: schema.changelogs.pubDate,
				stats: schema.changelogs.stats
			})
			.from(schema.changelogs)
			.all(),
		db.select().from(schema.changelogHeroes).all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				itemId: schema.changelogItems.itemId,
				changeGroups: schema.changelogItems.changeGroups
			})
			.from(schema.changelogItems)
			.all(),
		db
			.select({ id: schema.heroes.id, name: schema.heroes.name })
			.from(schema.heroes)
			.all()
	]);

	const patches = changelogs
		.map(({ id, slug, pubDate, stats }) => ({
			id,
			slug,
			stats,
			at: Math.floor(Date.parse(pubDate) / 1000),
			heroes: heroLinks
				.filter((link) => link.changelogId === id && hasBullets(link.changeGroups))
				.map((link) => ({ id: link.heroId, recorded: link.relatedItems })),
			candidates: itemLinks
				.filter((link) => link.changelogId === id && hasBullets(link.changeGroups))
				.map((link) => link.itemId)
		}))
		.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : 1));

	return { patches, heroes };
}

export function patchesInScope(
	patches: RelatedPatch[],
	options: Pick<RelatedRunOptions, 'now' | 'rebuild' | 'patchId'>
): RelatedPatch[] {
	const eligible = patches.filter(
		(patch) => patch.heroes.length > 0 && patch.candidates.length > 0
	);
	if (options.patchId !== undefined) {
		const match = eligible.filter((patch) => patch.id === options.patchId);
		if (match.length === 0) {
			throw new Error(
				`Patch "${options.patchId}" is unknown or has no hero and item changes to relate`
			);
		}
		return match;
	}
	if (options.rebuild) return eligible;

	const newestDay = Math.max(...eligible.map((patch) => dayOf(patch.at)));
	const retryFrom = options.now - RELATED_RETRY_DAYS * DAY_S;
	return eligible.filter(
		(patch) =>
			dayOf(patch.at) === newestDay ||
			(patch.at >= retryFrom && patch.heroes.some((hero) => !hero.recorded))
	);
}

export async function runRelatedItems(options: RelatedRunOptions): Promise<void> {
	const { changelogsDir, now, rebuild, log = console.log } = options;
	const { patches, heroes } = await options.loadPatches();
	const scope = patchesInScope(patches, options);
	const heroIndex = indexEntities({ hero: heroes, item: [] }).hero;

	const cache = new Map<string, Promise<DailyRow[]>>();
	const once = (key: string, load: () => Promise<DailyRow[]>) => {
		let pending = cache.get(key);
		if (!pending) {
			pending = load();
			cache.set(key, pending);
		}
		return pending;
	};
	const span = (range: TimeRange) => `${range.from}:${range.to}`;
	const heroSeries = (range: TimeRange) =>
		once(`hero:${span(range)}`, () => options.fetchHeroes(range));
	const buyers = (itemId: number, range: TimeRange) =>
		once(`${itemId}:${span(range)}`, () => options.fetchBuyers(itemId, range));

	let files = 0;
	const failed: string[] = [];
	for (const patch of scope) {
		const stale = patch.heroes.filter(
			(hero) => rebuild || !isCurrentRelated(hero.recorded, patch.candidates)
		);
		if (stale.length === 0) continue;

		const index = patches.indexOf(patch);
		const { before } = windowDays(patches, index, now);
		const results = new Map<number, RelatedItems>();
		try {
			const range = before.length
				? { from: before[0], to: before[before.length - 1] }
				: null;
			const heroRows = range ? await heroSeries(range) : [];
			const series = new Map<number, DailyRow[]>();
			if (range) {
				for (const itemId of patch.candidates) {
					series.set(itemId, await buyers(itemId, range));
				}
			}
			for (const hero of stale) {
				results.set(
					hero.id,
					selectRelatedItems({
						heroId: hero.id,
						days: before,
						heroRows,
						candidates: patch.candidates,
						buyers: series
					})
				);
			}
		} catch (error) {
			failed.push(patch.slug);
			console.error(`   Related: ${patch.slug} left untouched:`, error);
			continue;
		}

		const path = join(changelogsDir, `${patch.slug}.mg`);
		if (!existsSync(path)) throw new Error(`Changelog file not found: ${path}`);
		const source = await readFile(path, 'utf8');
		const stats: PatchStats | undefined = patch.stats
			? undefined
			: {
					schemaVersion: 2,
					methodVersion: METHOD_VERSION,
					collectedAt: new Date(now * 1000).toISOString(),
					...patchBounds(patches, index, now)
				};
		const pending = new Map(results);
		const next = await spliceEntityBlocks(
			source,
			(block) => {
				if (block.type !== 'hero') return undefined;
				const id = findEntityName(heroIndex, block.name)?.id;
				const related = id === undefined ? undefined : pending.get(id);
				if (id === undefined || !related) return undefined;
				pending.delete(id);
				return { related };
			},
			stats
		);
		if (pending.size > 0) {
			throw new Error(
				`${path}: no hero block found for ${[...pending.keys()].join(', ')}`
			);
		}
		if (next === source) continue;

		await writeFile(`${path}.tmp`, next);
		await rename(`${path}.tmp`, path);
		files++;
	}

	log(
		`   Related: ${scope.length} patches in scope, ${files} changelogs updated${
			failed.length ? `, ${failed.length} failed (${failed.join(', ')})` : ''
		}`
	);
}
