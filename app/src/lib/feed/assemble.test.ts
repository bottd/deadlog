import { describe, it, expect } from 'vitest';
import type { FeedEntity, FeedIndex, FeedRow } from '@deadlog/db';
import {
	NO_MATCH_ENTITY_ID,
	assembleSummaries,
	queryFeed,
	resolveEntityIds,
	searchExcerpt,
	splitPage
} from './assemble';

function makeRow(overrides: Partial<FeedRow> = {}): FeedRow {
	return {
		id: 'patch',
		title: 'A patch',
		slug: '2026/01-01-patch',
		author: 'Yoshi',
		authorImage: '',
		previewImage: null,
		date: '2026-01-01T00:00:00.000Z',
		majorUpdate: false,
		summary: 'The full prose of the patch body.',
		heroes: [],
		items: [],
		...overrides
	};
}

function hero(id: number, name: string): FeedEntity {
	return {
		id,
		type: 'hero',
		name,
		slug: name.toLowerCase().replace(/\s+/g, '-'),
		src: `/${name.toLowerCase().replace(/\s+/g, '-')}.webp`,
		heroType: null
	};
}

const NO_SOURCES = { text: null, groups: null };

function makeIndex(rows: FeedRow[], heroes: FeedEntity[] = []): FeedIndex {
	return { rows, heroes, items: [] };
}

describe('resolveEntityIds', () => {
	const entities = [
		{ id: 1, name: 'Bebop' },
		{ id: 2, name: 'Abrams' },
		{ id: 3, name: 'Warden' }
	];

	it('resolves known names', () => {
		expect(resolveEntityIds(['Bebop', 'Warden'], entities)).toEqual([1, 3]);
	});

	it('resolves case-insensitively', () => {
		expect(resolveEntityIds(['bebop', 'ABRAMS'], entities)).toEqual([1, 2]);
	});

	it('resolves article aliases', () => {
		expect(resolveEntityIds(['The Bebop'], entities)).toEqual([1]);
	});

	it('marks unknown names so a mixed filter cannot silently widen', () => {
		expect(resolveEntityIds(['Bebop', 'NonExistent'], entities)).toEqual([
			1,
			NO_MATCH_ENTITY_ID
		]);
	});

	it('returns empty for no names', () => {
		expect(resolveEntityIds([], entities)).toEqual([]);
	});

	it('collapses repeated unknown names', () => {
		expect(resolveEntityIds(['Foo', 'Bar'], entities)).toEqual([NO_MATCH_ENTITY_ID]);
	});

	it('deduplicates', () => {
		expect(resolveEntityIds(['Bebop', 'bebop'], entities)).toEqual([1]);
	});
});

describe('splitPage', () => {
	it('reports no more when the page is exactly full', () => {
		expect(splitPage([1, 2, 3], 3)).toEqual({ rows: [1, 2, 3], hasMore: false });
	});

	it('trims the probe row and reports more', () => {
		expect(splitPage([1, 2, 3, 4], 3)).toEqual({ rows: [1, 2, 3], hasMore: true });
	});
});

describe('queryFeed', () => {
	const rows = [
		makeRow({ id: 'a', title: 'Alpha', date: '2026-03-01', majorUpdate: true }),
		makeRow({
			id: 'b',
			title: 'Bravo',
			date: '2026-02-01',
			heroes: [{ id: 1, changeCount: null }]
		}),
		makeRow({
			id: 'c',
			title: 'Charlie',
			date: '2026-01-01',
			heroes: [
				{ id: 1, changeCount: null },
				{ id: 2, changeCount: null }
			]
		})
	];
	const index = makeIndex(rows);
	const none = { heroIds: [], itemIds: [], q: '', majorOnly: false };

	it('preserves index order without re-sorting', () => {
		const page = queryFeed(index, null, none, { limit: 10 });
		expect(page.rows.map((row) => row.id)).toEqual(['a', 'b', 'c']);
	});

	it('requires every named entity, matching the HAVING COUNT subquery', () => {
		expect(
			queryFeed(index, null, { ...none, heroIds: [1] }, { limit: 10 }).rows.map(
				(r) => r.id
			)
		).toEqual(['b', 'c']);
		expect(
			queryFeed(index, null, { ...none, heroIds: [1, 2] }, { limit: 10 }).rows.map(
				(r) => r.id
			)
		).toEqual(['c']);
	});

	it('returns nothing when an unresolved entity joins the filter', () => {
		const page = queryFeed(
			index,
			null,
			{ ...none, heroIds: [1, NO_MATCH_ENTITY_ID] },
			{ limit: 10 }
		);
		expect(page.rows).toEqual([]);
	});

	it('filters to major updates', () => {
		expect(
			queryFeed(index, null, { ...none, majorOnly: true }, { limit: 10 }).rows.map(
				(r) => r.id
			)
		).toEqual(['a']);
	});

	it('matches title or text case-insensitively', () => {
		const text = { a: 'nothing here', b: 'Cooldown reduced', c: 'nothing here' };
		expect(
			queryFeed(index, text, { ...none, q: 'cooldown' }, { limit: 10 }).rows.map(
				(r) => r.id
			)
		).toEqual(['b']);
		expect(
			queryFeed(index, text, { ...none, q: 'ALPHA' }, { limit: 10 }).rows.map((r) => r.id)
		).toEqual(['a']);
	});

	it('treats LIKE wildcards as literal characters', () => {
		const text = { a: '100% crit', b: 'no wildcard', c: 'no wildcard' };
		expect(
			queryFeed(index, text, { ...none, q: '100%' }, { limit: 10 }).rows.map((r) => r.id)
		).toEqual(['a']);
		expect(queryFeed(index, text, { ...none, q: '%' }, { limit: 10 }).rows).toHaveLength(
			1
		);
	});

	it('paginates and reports more', () => {
		const page = queryFeed(index, null, none, { limit: 2 });
		expect(page.rows.map((r) => r.id)).toEqual(['a', 'b']);
		expect(page.hasMore).toBe(true);
		const next = queryFeed(index, null, none, { limit: 2, offset: 2 });
		expect(next.rows.map((r) => r.id)).toEqual(['c']);
		expect(next.hasMore).toBe(false);
	});

	it.each([
		['negative limit', -1],
		['infinite limit', Infinity],
		['oversized limit', 101]
	])('clamps %s into range', (_label, limit) => {
		expect(() => queryFeed(index, null, none, { limit })).not.toThrow();
		expect(queryFeed(index, null, none, { limit }).rows.length).toBeGreaterThan(0);
	});

	it('refuses to search without the text tier', () => {
		expect(() => queryFeed(index, null, { ...none, q: 'parry' })).toThrow();
	});
});

describe('feed summaries', () => {
	it('keeps the wire payload explicit and JSON-native', () => {
		const [entry] = assembleSummaries([makeRow()], makeIndex([]), NO_SOURCES);

		expect(entry.summary).toBe('The full prose of the patch body.');
		expect(entry.date).toBe('2026-01-01T00:00:00.000Z');
		for (const field of ['contentText', 'pubDate', 'updates', 'sourceUrl']) {
			expect(entry).not.toHaveProperty(field);
		}
	});

	it('bounds preview icons while preserving the full patch counts', () => {
		const heroes = Array.from({ length: 20 }, (_, id) => hero(id, `Hero ${id}`));
		const row = makeRow({
			heroes: heroes.map((entity) => ({ id: entity.id, changeCount: 4 }))
		});
		const index = makeIndex([row], heroes);

		const [entry] = assembleSummaries([row], index, NO_SOURCES);
		expect(entry.icons.heroes).toHaveLength(6);
		expect(entry.counts.heroes).toBe(20);

		const [featured] = assembleSummaries([row], index, NO_SOURCES, { isFirstPage: true });
		expect(featured.icons.heroes).toHaveLength(14);

		// A searching first page shows matches, not a widened preview row.
		const [searched] = assembleSummaries(
			[row],
			index,
			{ text: { patch: '' }, groups: null },
			{ isFirstPage: true, q: 'parry' }
		);
		expect(searched.icons.heroes).toHaveLength(0);
	});

	it('returns only the selected entity excerpts and avoids unrelated preview icons', () => {
		const heroes = [hero(1, 'Abrams'), hero(2, 'Bebop')];
		const row = makeRow({
			heroes: [
				{ id: 1, changeCount: 1 },
				{ id: 2, changeCount: 8 }
			]
		});
		const groups = {
			'patch:hero:1': [
				{ ability: 'Siphon Life', bullets: ['Radius reduced from 3m to 2m'] }
			],
			'patch:hero:2': [
				{ ability: null, bullets: Array.from({ length: 8 }, () => 'change') }
			]
		};
		const [entry] = assembleSummaries(
			[row],
			makeIndex([row], heroes),
			{ text: null, groups },
			{ heroIds: [1] }
		);
		expect(entry.matches).toEqual([
			{
				id: 1,
				type: 'hero',
				name: 'Abrams',
				slug: 'abrams',
				changeCount: 1,
				changes: [{ ability: 'Siphon Life', text: 'Radius reduced from 3m to 2m' }]
			}
		]);
		expect(entry.summary).toBe('');
		expect(entry.icons).toEqual({ heroes: [], items: [] });
		expect(entry.counts.heroes).toBe(2);
	});

	it('refuses to assemble selected-entity excerpts without the groups tier', () => {
		const row = makeRow({ heroes: [{ id: 1, changeCount: 1 }] });
		expect(() =>
			assembleSummaries([row], makeIndex([row], [hero(1, 'Abrams')]), NO_SOURCES, {
				heroIds: [1]
			})
		).toThrow();
	});

	it('orders icons by entity name, not by reference order', () => {
		const heroes = [hero(1, 'Zeus'), hero(2, 'Abrams')];
		const row = makeRow({
			heroes: [
				{ id: 1, changeCount: null },
				{ id: 2, changeCount: null }
			]
		});
		const [entry] = assembleSummaries([row], makeIndex([row], heroes), NO_SOURCES);
		expect(entry.icons.heroes.map((icon) => icon.alt)).toEqual(['Abrams', 'Zeus']);
	});

	it('centers keyword excerpts on the actual match, including long search terms', () => {
		const text = `${'Unrelated opening notes. '.repeat(30)}Parry cooldown reduced to 4s. More changes.`;
		expect(searchExcerpt(text, 'parry')).toContain('Parry cooldown reduced to 4s');
		expect(searchExcerpt(text, 'parry')).toMatch(/^…/);
		const longQuery = 'a'.repeat(200);
		expect(
			searchExcerpt(`${'context '.repeat(30)}${longQuery} ending`, longQuery)
		).toContain(longQuery);
		expect(searchExcerpt(`${'x'.repeat(100)}parry`, 'parry')).toContain('parry');
	});
});
