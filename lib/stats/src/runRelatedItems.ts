import { existsSync } from 'node:fs';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spliceEntityBlocks, type EnrichmentUpdate } from '@deadlog/changelog';
import { schema, type DrizzleDB } from '@deadlog/db';
import {
	findEntityName,
	type AbilityOrder,
	type BoughtBy,
	type PatchStats,
	type RelatedItems
} from '@deadlog/utils';
import { selectAbilityOrder } from './abilityOrder';
import {
	BOUGHT_METHOD_VERSION,
	DAY_S,
	METHOD_VERSION,
	ORDER_METHOD_VERSION,
	READING_SETTLE_DAYS,
	RELATED_RETRY_DAYS,
	dayOf
} from './constants';
import type { NamedEntity, StatsPatch } from './readPatches';
import { indexEntities } from './rewriteMog';
import {
	isCurrentRelated,
	selectBoughtBy,
	selectRelatedItems,
	type WindowSeries
} from './selectRelatedItems';
import { patchBounds, windowDays, type PatchRef } from './sliceWindows';
import type { AbilityOrderRow, DailyRow, TimeRange } from './types';

export interface RelatedHero {
	id: number;
	recorded: RelatedItems | null;
	abilityChanged: boolean;
	recordedOrder: AbilityOrder | null;
}

export interface RelatedItemLink {
	id: number;
	recorded: BoughtBy | null;
}

export interface RelatedPatch extends StatsPatch {
	heroes: RelatedHero[];
	candidates: number[];
	items: RelatedItemLink[];
}

export interface RelatedInputs {
	patches: RelatedPatch[];
	heroes: NamedEntity[];
	items: NamedEntity[];
	abilities: Map<number, number[]>;
}

export interface RelatedRunOptions {
	changelogsDir: string;
	now: number;
	rebuild: boolean;
	patchId?: string;
	loadPatches: () => Promise<RelatedInputs>;
	fetchHeroes: (range: TimeRange) => Promise<DailyRow[]>;
	fetchBuyers: (itemId: number, range: TimeRange) => Promise<DailyRow[]>;
	fetchAbilityOrder: (heroId: number, range: TimeRange) => Promise<AbilityOrderRow[]>;
	log?: (message: string) => void;
}

const hasBullets = (groups: { bullets: string[] }[] | null): boolean =>
	!!groups?.some((group) => group.bullets.length > 0);

const hasAbilityBullets = (
	groups: { ability: string | null; bullets: string[] }[] | null
): boolean => !!groups?.some((group) => group.ability && group.bullets.length > 0);

export async function readRelatedPatches(db: DrizzleDB): Promise<RelatedInputs> {
	const [changelogs, heroLinks, itemLinks, heroes, items, abilityRows] =
		await Promise.all([
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
					changeGroups: schema.changelogItems.changeGroups,
					boughtBy: schema.changelogItems.boughtBy
				})
				.from(schema.changelogItems)
				.all(),
			db
				.select({ id: schema.heroes.id, name: schema.heroes.name })
				.from(schema.heroes)
				.all(),
			db
				.select({ id: schema.items.id, name: schema.items.name })
				.from(schema.items)
				.all(),
			db
				.select({
					heroId: schema.heroAbilities.heroId,
					assetId: schema.heroAbilities.assetId,
					position: schema.heroAbilities.position
				})
				.from(schema.heroAbilities)
				.all()
		]);

	const abilities = new Map<number, number[]>();
	for (const row of abilityRows.sort((a, b) => a.position - b.position)) {
		if (row.assetId === null) continue;
		abilities.set(row.heroId, [...(abilities.get(row.heroId) ?? []), row.assetId]);
	}

	const patches = changelogs
		.map(({ id, slug, pubDate, stats }) => {
			const changedItems = itemLinks.filter(
				(link) => link.changelogId === id && hasBullets(link.changeGroups)
			);
			return {
				id,
				slug,
				stats,
				at: Math.floor(Date.parse(pubDate) / 1000),
				heroes: heroLinks
					.filter((link) => link.changelogId === id && hasBullets(link.changeGroups))
					.map((link) => ({
						id: link.heroId,
						recorded: link.relatedItems,
						abilityChanged: hasAbilityBullets(link.changeGroups),
						recordedOrder: link.abilityOrder
					})),
				candidates: changedItems.map((link) => link.itemId),
				items: changedItems.map((link) => ({ id: link.itemId, recorded: link.boughtBy }))
			};
		})
		.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : 1));

	return { patches, heroes, items, abilities };
}

export function isSettling(patches: PatchRef[], index: number, now: number): boolean {
	const { after, closed } = windowDays(patches, index, now);
	if (!closed) return true;
	const end = after.length ? after[after.length - 1] + DAY_S : dayOf(patches[index].at);
	return now < end + READING_SETTLE_DAYS * DAY_S;
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
			isSettling(patches, patches.indexOf(patch), options.now) ||
			(patch.at >= retryFrom && patch.heroes.some((hero) => !hero.recorded))
	);
}

const isCurrentOrder = (recorded: AbilityOrder | null | undefined): boolean =>
	recorded?.methodVersion === ORDER_METHOD_VERSION;

const isCurrentBought = (recorded: BoughtBy | null | undefined): boolean =>
	recorded?.methodVersion === BOUGHT_METHOD_VERSION;

export async function runRelatedItems(options: RelatedRunOptions): Promise<void> {
	const { changelogsDir, now, rebuild, log = console.log } = options;
	const { patches, heroes, items, abilities } = await options.loadPatches();
	const scope = patchesInScope(patches, options);
	const index = indexEntities({ hero: heroes, item: items });

	const cache = new Map<string, Promise<unknown>>();
	const once = <T>(key: string, load: () => Promise<T>): Promise<T> => {
		let pending = cache.get(key) as Promise<T> | undefined;
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
	const abilityOrder = (heroId: number, range: TimeRange) =>
		once(`order:${heroId}:${span(range)}`, () =>
			options.fetchAbilityOrder(heroId, range)
		);

	const windowSeries = async (
		days: number[],
		candidates: number[]
	): Promise<(WindowSeries & { range: TimeRange }) | undefined> => {
		if (days.length === 0) return undefined;
		const range = { from: days[0], to: days[days.length - 1] };
		const series = new Map<number, DailyRow[]>();
		for (const itemId of candidates) series.set(itemId, await buyers(itemId, range));
		return { days, range, heroRows: await heroSeries(range), buyers: series };
	};

	let files = 0;
	const failed: string[] = [];
	for (const patch of scope) {
		const position = patches.indexOf(patch);
		const refreshAll = rebuild || isSettling(patches, position, now);
		const orderable = (hero: RelatedHero) =>
			hero.abilityChanged && (abilities.get(hero.id)?.length ?? 0) > 0;
		const staleHeroes = patch.heroes.filter(
			(hero) =>
				refreshAll ||
				!isCurrentRelated(hero.recorded, patch.candidates) ||
				(orderable(hero) && !isCurrentOrder(hero.recordedOrder))
		);
		const staleItems = patch.items.filter(
			(item) => refreshAll || !isCurrentBought(item.recorded)
		);
		if (staleHeroes.length === 0 && staleItems.length === 0) continue;

		const { before, after } = windowDays(patches, position, now);
		const updates = {
			hero: new Map<number, EnrichmentUpdate>(),
			item: new Map<number, EnrichmentUpdate>()
		};
		try {
			const beforeSeries = await windowSeries(before, patch.candidates);
			const afterSeries = await windowSeries(after, patch.candidates);
			for (const hero of staleHeroes) {
				const update: EnrichmentUpdate = {
					related: selectRelatedItems({
						...(beforeSeries ?? { days: before, heroRows: [], buyers: new Map() }),
						heroId: hero.id,
						candidates: patch.candidates,
						after: afterSeries
					})
				};
				if (orderable(hero) && beforeSeries) {
					update.order = selectAbilityOrder({
						abilityIds: abilities.get(hero.id) ?? [],
						before: await abilityOrder(hero.id, beforeSeries.range),
						after: afterSeries && (await abilityOrder(hero.id, afterSeries.range))
					});
				}
				updates.hero.set(hero.id, update);
			}
			for (const item of staleItems) {
				updates.item.set(item.id, {
					bought: beforeSeries
						? selectBoughtBy({
								itemId: item.id,
								before: beforeSeries,
								after: afterSeries
							})
						: null
				});
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
					...patchBounds(patches, position, now)
				};
		const next = await spliceEntityBlocks(
			source,
			(block) => {
				const id = findEntityName(index[block.type], block.name)?.id;
				const update = id === undefined ? undefined : updates[block.type].get(id);
				if (id === undefined || !update) return undefined;
				updates[block.type].delete(id);
				return update;
			},
			stats
		);
		const missing = [...updates.hero.keys(), ...updates.item.keys()];
		if (missing.length > 0) {
			throw new Error(`${path}: no block found for ${missing.join(', ')}`);
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
