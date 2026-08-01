import { describe, it, expect, vi } from 'vitest';
import {
	NO_MATCH_ENTITY_ID,
	resolveEntityIds,
	parseApiParams,
	splitPage,
	enrichChangelogs
} from './changelog-utils';
import { parseCSV } from '$lib/utils/csv';

vi.mock('@deadlog/scraper', () => ({
	getChangelogIcons: async () => ({}),
	getUpdatesForChangelogs: async () => [
		makeRow({ id: 'hotfix', parentChange: 'patch', contentText: 'Hotfix prose.' })
	]
}));

function makeRow(overrides: Record<string, unknown> = {}) {
	return {
		id: 'patch',
		title: 'A patch',
		slug: '2026/01-01-patch',
		author: 'Yoshi',
		authorImage: '',
		previewImage: null,
		category: 'patch',
		pubDate: '2026-01-01T00:00:00.000Z',
		majorUpdate: false,
		parentChange: null,
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

describe('enrichChangelogs', () => {
	// Cards render the summary only, but the load functions serialize whatever comes
	// back into the page payload — contentText leaking here ships the whole patch body
	// to every client.
	it('summarizes contentText without passing it through', async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const [entry] = await enrichChangelogs({} as any, [makeRow() as any]);

		expect(entry.summary).toBe('The full prose of the patch body.');
		expect(entry).not.toHaveProperty('contentText');

		const [update] = entry.updates ?? [];
		expect(update.summary).toBe('Hotfix prose.');
		expect(update).not.toHaveProperty('contentText');
	});
});
