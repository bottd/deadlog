import { describe, it, expect, beforeAll } from 'vitest';
import {
	getEntityNames,
	getFeedIndex,
	getFeedGroups,
	getFeedText,
	getLibsqlDb,
	queryChangelogs,
	type DrizzleDB,
	type FeedIndex,
	type FeedGroups,
	type FeedText
} from '@deadlog/db';
import { assembleSummaries, queryFeed, resolveEntityIds, splitPage } from './assemble';
import { parseFilters } from '$lib/queries/keys';

let db: DrizzleDB;
let index: FeedIndex;
let text: FeedText;
let groups: FeedGroups;
let allHeroes: { id: number; name: string }[];
let allItems: { id: number; name: string }[];

beforeAll(async () => {
	db = getLibsqlDb();
	index = await getFeedIndex(db);
	text = await getFeedText(db);
	groups = await getFeedGroups(db);
	allHeroes = await getEntityNames(db, 'hero');
	allItems = await getEntityNames(db, 'item');
});

const QUERIES = [
	'',
	'hero=Abrams',
	'hero=Bebop,Abrams',
	'item=Decay',
	'hero=Bebop&item=Decay',
	'major=true',
	'q=cooldown',
	'q=Bebop',
	'q=COOLDOWN',
	'q=spirit',
	'q=%',
	'hero=NonExistentHero12345',
	'hero=Bebop,NonExistentHero12345',
	'hero=The Bebop',
	'hero=Abrams&major=true',
	'item=Decay&q=damage'
];

const PAGES = [
	{ limit: 8, offset: 0 },
	{ limit: 15, offset: 0 },
	{ limit: 8, offset: 15 },
	{ limit: 12, offset: 27 },
	{ limit: 15, offset: 100 }
];

const cases = QUERIES.flatMap((query) =>
	PAGES.map((page) => ({
		query,
		...page,
		label: `${query || '(unfiltered)'} @${page.offset}/${page.limit}`
	}))
);

async function viaSql(query: string, limit: number, offset: number) {
	const filters = parseFilters(new URLSearchParams(query));
	const heroIds = resolveEntityIds(
		filters.hero,
		filters.hero.length > 0 ? allHeroes : []
	);
	const itemIds = resolveEntityIds(filters.item, filters.item.length > 0 ? allItems : []);
	const rows = await queryChangelogs(db, {
		heroIds,
		itemIds,
		searchQuery: filters.q,
		majorOnly: filters.major,
		limit: limit + 1,
		offset
	});
	return { ...splitPage(rows, limit), heroIds, itemIds, filters };
}

function viaIndex(query: string, limit: number, offset: number) {
	const filters = parseFilters(new URLSearchParams(query));
	const heroIds = resolveEntityIds(filters.hero, index.heroes);
	const itemIds = resolveEntityIds(filters.item, index.items);
	const page = queryFeed(
		index,
		text,
		{ heroIds, itemIds, q: filters.q, majorOnly: filters.major },
		{ limit, offset }
	);
	return { ...page, heroIds, itemIds, filters };
}

describe('feed parity: SQL predicate vs static index', () => {
	it.each(cases)('$label selects the same rows', async ({ query, limit, offset }) => {
		const sql = await viaSql(query, limit, offset);
		const idx = viaIndex(query, limit, offset);

		expect(idx.rows.map((row) => row.id)).toEqual(sql.rows.map((row) => row.id));
		expect(idx.hasMore).toBe(sql.hasMore);
	});

	it.each(cases)(
		'$label assembles an identical payload',
		async ({ query, limit, offset }) => {
			const sql = await viaSql(query, limit, offset);
			const idx = viaIndex(query, limit, offset);

			const byId = new Map(index.rows.map((row) => [row.id, row]));
			const sqlRows = sql.rows.flatMap((row) => {
				const match = byId.get(row.id);
				return match ? [match] : [];
			});

			const shape = (rows: typeof idx.rows, heroIds: number[], itemIds: number[]) =>
				JSON.stringify(
					assembleSummaries(
						rows,
						index,
						{ text, groups },
						{
							heroIds,
							itemIds,
							q: idx.filters.q,
							isFirstPage: offset === 0
						}
					)
				);

			expect(shape(idx.rows, idx.heroIds, idx.itemIds)).toBe(
				shape(sqlRows, sql.heroIds, sql.itemIds)
			);
		}
	);
});

describe('bounded entity payloads', () => {
	it('keeps a single-hero page scoped and small', () => {
		const heroIds = resolveEntityIds(['Abrams'], index.heroes);
		const page = queryFeed(
			index,
			text,
			{ heroIds, itemIds: [], q: '', majorOnly: false },
			{ limit: 15, offset: 0 }
		);
		const summaries = assembleSummaries(
			page.rows,
			index,
			{ text, groups },
			{
				heroIds,
				isFirstPage: true
			}
		);

		expect(summaries.length).toBeGreaterThan(0);
		expect(Buffer.byteLength(JSON.stringify(summaries))).toBeLessThan(40_000);
		for (const patch of summaries) {
			expect(patch.matches.map((entity) => entity.name)).toEqual(['Abrams']);
			expect(patch).not.toHaveProperty('updates');
			expect(patch).not.toHaveProperty('pubDate');
		}
	});
});
