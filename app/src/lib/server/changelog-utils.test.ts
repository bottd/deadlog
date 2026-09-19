import { beforeEach, describe, it, expect, vi } from 'vitest';
import type { DrizzleDB, ScrapedChangelog } from '@deadlog/db';
import {
	NO_MATCH_ENTITY_ID,
	resolveEntityIds,
	parseApiParams,
	splitPage,
	buildPatchSummaries,
	searchExcerpt
} from './changelog-utils';
import { parseCSV } from '$lib/utils/csv';

const mocks = vi.hoisted(() => ({ icons: vi.fn(), groups: vi.fn() }));
vi.mock('@deadlog/db', () => ({
	getChangelogIcons: mocks.icons,
	getSelectedChangeGroups: mocks.groups
}));

beforeEach(() => {
	mocks.icons.mockResolvedValue({});
	mocks.groups.mockResolvedValue(new Map());
});

function makeRow(overrides: Partial<ScrapedChangelog> = {}): ScrapedChangelog {
	return {
		id: 'patch',
		title: 'A patch',
		slug: '2026/01-01-patch',
		sourceUrl: 'https://forums.playdeadlock.com/threads/1/',
		author: 'Yoshi',
		authorImage: '',
		previewImage: null,
		pubDate: '2026-01-01T00:00:00.000Z',
		majorUpdate: false,
		contentText: 'The full prose of the patch body.',
		...overrides
	};
}

// makeSummary moved to @deadlog/utils — its tests live in lib/utils/src/index.test.ts.

describe('parseCSV', () => {
	it('returns empty array for null', () => {
		expect(parseCSV(null)).toEqual([]);
	});

	it('returns empty array for empty string', () => {
		expect(parseCSV('')).toEqual([]);
	});

	it('parses a single value', () => {
		expect(parseCSV('Bebop')).toEqual(['Bebop']);
	});

	it('parses multiple comma-separated values', () => {
		expect(parseCSV('Bebop,Abrams,Warden')).toEqual(['Bebop', 'Abrams', 'Warden']);
	});

	it('filters out empty entries from trailing commas', () => {
		expect(parseCSV('Bebop,,Warden,')).toEqual(['Bebop', 'Warden']);
	});

	it('trims entries', () => {
		expect(parseCSV(' Bebop, Warden ')).toEqual(['Bebop', 'Warden']);
	});
});

describe('resolveEntityIds', () => {
	const entities = [
		{ id: 1, name: 'Bebop' },
		{ id: 2, name: 'Abrams' },
		{ id: 3, name: 'Warden' }
	];

	it('resolves matching names to ids', () => {
		expect(resolveEntityIds(['Bebop', 'Warden'], entities)).toEqual([1, 3]);
	});

	it('resolves names case-insensitively', () => {
		expect(resolveEntityIds(['bebop', 'ABRAMS'], entities)).toEqual([1, 2]);
	});

	it('resolves names with optional articles', () => {
		expect(resolveEntityIds(['The Bebop'], entities)).toEqual([1]);
	});

	it('uses a non-matching id when any requested name is unknown', () => {
		expect(resolveEntityIds(['Bebop', 'NonExistent'], entities)).toEqual([
			1,
			NO_MATCH_ENTITY_ID
		]);
	});

	it('returns empty array for empty input', () => {
		expect(resolveEntityIds([], entities)).toEqual([]);
	});

	it('makes an entirely unknown filter impossible to match', () => {
		expect(resolveEntityIds(['Foo', 'Bar'], entities)).toEqual([NO_MATCH_ENTITY_ID]);
	});

	it('deduplicates repeated names', () => {
		expect(resolveEntityIds(['Bebop', 'bebop'], entities)).toEqual([1]);
	});
});

describe('splitPage', () => {
	it('does not report more rows for an exactly full page', () => {
		expect(splitPage([1, 2, 3], 3)).toEqual({ rows: [1, 2, 3], hasMore: false });
	});

	it('removes the lookahead row and reports more data', () => {
		expect(splitPage([1, 2, 3, 4], 3)).toEqual({ rows: [1, 2, 3], hasMore: true });
	});
});

describe('parseApiParams', () => {
	it('parses hero CSV from URL', () => {
		const url = new URL('http://localhost/api?hero=Bebop,Abrams');
		const params = parseApiParams(url);
		expect(params.hero).toEqual(['Bebop', 'Abrams']);
	});

	it('returns empty array for missing hero param', () => {
		const url = new URL('http://localhost/api');
		const params = parseApiParams(url);
		expect(params.hero).toEqual([]);
	});

	it('returns default limit and offset', () => {
		const url = new URL('http://localhost/api');
		const params = parseApiParams(url);
		expect(params.limit).toBe(8);
		expect(params.offset).toBe(0);
	});

	it('parses q param', () => {
		const url = new URL('http://localhost/api?q=General');
		const params = parseApiParams(url);
		expect(params.q).toBe('General');
	});

	it.each([
		['negative limit', 'limit=-1'],
		['fractional limit', 'limit=1.5'],
		['infinite limit', 'limit=Infinity'],
		['oversized limit', 'limit=101'],
		['negative offset', 'offset=-1'],
		['fractional offset', 'offset=1.5'],
		['oversized offset', 'offset=100001']
	])('rejects %s', (_label, query) => {
		expect(() => parseApiParams(new URL(`http://localhost/api?${query}`))).toThrow();
	});

	it('trims q and rejects oversized queries', () => {
		expect(parseApiParams(new URL('http://localhost/api?q=%20General%20')).q).toBe(
			'General'
		);
		expect(() =>
			parseApiParams(new URL(`http://localhost/api?q=${'x'.repeat(201)}`))
		).toThrow();
	});

	it('rejects excessive entity filters', () => {
		const heroes = Array.from({ length: 21 }, (_, index) => `Hero${index}`).join(',');
		expect(() =>
			parseApiParams(new URL(`http://localhost/api?hero=${heroes}`))
		).toThrow();
	});
});

describe('feed summaries', () => {
	const db = {} as DrizzleDB;
	it('keeps the wire payload explicit and JSON-native', async () => {
		const [entry] = await buildPatchSummaries(db, [makeRow()]);

		expect(entry.summary).toBe('The full prose of the patch body.');
		expect(entry.date).toBe('2026-01-01T00:00:00.000Z');
		for (const field of ['contentText', 'pubDate', 'updates', 'sourceUrl']) {
			expect(entry).not.toHaveProperty(field);
		}
	});

	it('bounds preview icons while preserving the full patch counts', async () => {
		const heroes = Array.from({ length: 20 }, (_, id) => ({
			id,
			type: 'hero',
			alt: `Hero ${id}`,
			slug: `hero-${id}`,
			src: `/hero-${id}.webp`,
			changeCount: 4
		}));
		mocks.icons.mockResolvedValue({ patch: { heroes, items: [] } });
		const [entry] = await buildPatchSummaries(db, [makeRow()]);
		expect(entry.icons.heroes).toHaveLength(6);
		expect(entry.counts.heroes).toBe(20);
		const [featured] = await buildPatchSummaries(db, [makeRow()], { isFirstPage: true });
		expect(featured.icons.heroes).toHaveLength(14);

		// A searching first page shows matches, not a widened preview row.
		const [searched] = await buildPatchSummaries(db, [makeRow()], {
			isFirstPage: true,
			q: 'parry'
		});
		expect(searched.icons.heroes).toHaveLength(0);
	});

	it('returns only the selected entity excerpts and avoids unrelated preview icons', async () => {
		mocks.icons.mockResolvedValue({
			patch: {
				heroes: [
					{
						id: 1,
						type: 'hero',
						alt: 'Abrams',
						slug: 'abrams',
						src: '/abrams.webp',
						changeCount: 2
					},
					{
						id: 2,
						type: 'hero',
						alt: 'Bebop',
						slug: 'bebop',
						src: '/bebop.webp',
						changeCount: 8
					}
				],
				items: []
			}
		});
		mocks.groups.mockResolvedValue(
			new Map([
				[
					'patch:hero:1',
					[{ ability: 'Siphon Life', bullets: ['Radius reduced from 3m to 2m'] }]
				]
			])
		);
		const [entry] = await buildPatchSummaries(db, [makeRow()], { heroIds: [1] });
		expect(entry.matches).toEqual([
			{
				id: 1,
				type: 'hero',
				name: 'Abrams',
				slug: 'abrams',
				changeCount: 2,
				changes: [{ ability: 'Siphon Life', text: 'Radius reduced from 3m to 2m' }]
			}
		]);
		expect(entry.summary).toBe('');
		expect(entry.icons).toEqual({ heroes: [], items: [] });
		expect(entry.counts.heroes).toBe(2);
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
