import type { ChangelogEntityIcon, PatchSummary } from '$lib/types';
import type {
	FeedEntity,
	FeedFilters,
	FeedGroups,
	FeedIndex,
	FeedRow,
	FeedText
} from '@deadlog/db';
import { findEntityName, indexEntityNames, makeSummary } from '@deadlog/utils';

export interface FeedSources {
	text: FeedText | null;
	groups: FeedGroups | null;
}

export const NO_MATCH_ENTITY_ID = -1;
const MAX_PAGE_SIZE = 100;
const MAX_OFFSET = 100_000;

export function resolveEntityIds(
	names: string[],
	entities: { id: number; name: string }[]
): number[] {
	const byName = indexEntityNames(entities, (entity) => entity.name);
	return [
		...new Set(
			names.map((name) => findEntityName(byName, name)?.id ?? NO_MATCH_ENTITY_ID)
		)
	];
}

export function splitPage<T>(rows: T[], limit: number) {
	return {
		rows: rows.slice(0, limit),
		hasMore: rows.length > limit
	};
}

/** Preserve the matching passage rather than always taking the beginning of a patch. */
export function searchExcerpt(text: string | null, query: string, max = 240): string {
	const clean = (text ?? '').replace(/\s+/g, ' ').trim();
	const match = clean.toLowerCase().indexOf(query.toLowerCase());
	if (match < 0) return makeSummary(clean, max);
	const context = Math.min(60, Math.max(0, Math.floor((max - query.length) / 2)));
	const start = Math.max(0, match - context);
	const wordBoundary = clean.indexOf(' ', start);
	const boundary =
		start > 0 && wordBoundary >= 0 && wordBoundary < match ? wordBoundary + 1 : start;
	return `${boundary > 0 ? '…' : ''}${makeSummary(clean.slice(boundary), max)}`;
}

function clamp(value: number, minimum: number, maximum: number): number {
	if (!Number.isFinite(value)) return minimum;
	return Math.min(maximum, Math.max(minimum, Math.trunc(value)));
}

function matchesText(row: FeedRow, text: FeedText, q: string): boolean {
	const needle = q.toLowerCase();
	return (
		row.title.toLowerCase().includes(needle) ||
		(text[row.id] ?? '').toLowerCase().includes(needle)
	);
}

function matchesEntities(refs: { id: number }[], required: number[]): boolean {
	if (required.length === 0) return true;
	const present = new Set(refs.map((ref) => ref.id));
	return required.every((id) => present.has(id));
}

export function queryFeed(
	index: FeedIndex,
	text: FeedText | null,
	filters: FeedFilters,
	{ limit = 5, offset = 0 }: { limit?: number; offset?: number } = {}
) {
	const { heroIds, itemIds, q, majorOnly } = filters;
	if (q && !text) {
		throw new Error('queryFeed needs the text tier when a search query is set');
	}

	const size = clamp(limit, 1, MAX_PAGE_SIZE);
	const start = clamp(offset, 0, MAX_OFFSET);

	const matched = index.rows.filter(
		(row) =>
			(!q || matchesText(row, text ?? {}, q)) &&
			(!majorOnly || row.majorUpdate) &&
			matchesEntities(row.heroes, heroIds) &&
			matchesEntities(row.items, itemIds)
	);

	return splitPage(matched.slice(start, start + size + 1), size);
}

function byName(left: ChangelogEntityIcon, right: ChangelogEntityIcon): number {
	return left.alt < right.alt ? -1 : left.alt > right.alt ? 1 : 0;
}

function iconsFor(row: FeedRow, entities: EntityLookup) {
	const heroes: ChangelogEntityIcon[] = [];
	for (const ref of row.heroes) {
		const hero = entities.heroes.get(ref.id);
		if (!hero) continue;
		heroes.push({
			id: hero.id,
			src: hero.src,
			alt: hero.name,
			slug: hero.slug,
			heroType: hero.heroType,
			changeCount: ref.changeCount,
			type: 'hero'
		});
	}

	const items: ChangelogEntityIcon[] = [];
	for (const ref of row.items) {
		const item = entities.items.get(ref.id);
		if (!item) continue;
		items.push({
			id: item.id,
			src: item.src,
			alt: item.name,
			slug: item.slug,
			changeCount: ref.changeCount,
			type: 'item',
			itemCategory: item.itemCategory
		});
	}

	return { heroes: heroes.sort(byName), items: items.sort(byName) };
}

interface EntityLookup {
	heroes: Map<number, FeedEntity>;
	items: Map<number, FeedEntity>;
}

function lookupFor(index: FeedIndex): EntityLookup {
	return {
		heroes: new Map(index.heroes.map((entity) => [entity.id, entity])),
		items: new Map(index.items.map((entity) => [entity.id, entity]))
	};
}

function groupsFor(groups: FeedGroups, row: FeedRow, icon: ChangelogEntityIcon) {
	return groups[`${row.id}:${icon.type}:${icon.id}`] ?? [];
}

export function assembleSummaries(
	rows: FeedRow[],
	index: FeedIndex,
	sources: FeedSources,
	{
		heroIds = [],
		itemIds = [],
		q = '',
		isFirstPage = false
	}: {
		heroIds?: number[];
		itemIds?: number[];
		q?: string;
		/** Only the top of an unfiltered feed gets the wide treatment. */
		isFirstPage?: boolean;
	} = {}
): PatchSummary[] {
	const { text, groups } = sources;
	if (heroIds.length + itemIds.length > 0 && !groups) {
		throw new Error('assembleSummaries needs the groups tier when entities are selected');
	}

	const entities = lookupFor(index);
	const selected = (icon: ChangelogEntityIcon) =>
		(icon.type === 'hero' ? heroIds : itemIds).includes(icon.id);
	const searching = heroIds.length + itemIds.length > 0 || q !== '';
	const featureFirst = isFirstPage && !searching;

	return rows.map((entry, index_) => {
		const all = iconsFor(entry, entities);
		const limit = featureFirst && index_ === 0 ? 14 : 6;
		let remainingExcerpts = 6;
		const matches = [...all.heroes, ...all.items].filter(selected).map((icon) => {
			const changes = groupsFor(groups ?? {}, entry, icon)
				.flatMap((group) =>
					group.bullets.map((text_) => ({ ability: group.ability, text: text_ }))
				)
				.slice(0, Math.min(3, remainingExcerpts))
				.map((change) => ({ ...change, text: makeSummary(change.text, 320) }));
			remainingExcerpts -= changes.length;
			return {
				id: icon.id,
				type: icon.type,
				name: icon.alt,
				slug: icon.slug,
				changeCount: icon.changeCount,
				changes
			};
		});
		return {
			id: entry.id,
			slug: entry.slug,
			title: entry.title,
			date: entry.date,
			author: entry.author,
			authorImage: entry.authorImage,
			previewImage: entry.previewImage,
			majorUpdate: entry.majorUpdate,
			summary: q
				? searchExcerpt(text?.[entry.id] ?? '', q)
				: matches.length
					? ''
					: entry.summary,
			icons: {
				heroes: searching ? [] : all.heroes.slice(0, limit),
				items: searching ? [] : all.items.slice(0, limit)
			},
			counts: { heroes: all.heroes.length, items: all.items.length },
			matches
		};
	});
}
