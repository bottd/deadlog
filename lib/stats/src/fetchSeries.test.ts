import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DAY_S, HIGH_RANK_MIN_BADGE, dayOf } from './constants';
import {
	chunkRange,
	fetchAllSeries,
	fetchBuyerSeries,
	fetchSeries,
	setRetryDelayForTests
} from './fetchSeries';
import { DAY_1, DAY_2, DAY_3, heroRow, itemRow } from './fixtures';

type Responder = (url: URL) => unknown;

function stubFetch(responder: Responder, status = 200) {
	const calls: URL[] = [];
	vi.stubGlobal(
		'fetch',
		vi.fn(async (input: string) => {
			const url = new URL(input);
			calls.push(url);
			return new Response(JSON.stringify(responder(url)), {
				status,
				statusText: status === 200 ? 'OK' : 'Internal Server Error'
			});
		})
	);
	return calls;
}

beforeEach(() => setRetryDelayForTests(0));
afterEach(() => vi.unstubAllGlobals());

describe('chunkRange', () => {
	it('covers whole days in consecutive, non-overlapping chunks', () => {
		const chunks = chunkRange({ from: DAY_1 + 500, to: DAY_1 + 130 * DAY_S + 9 });

		expect(chunks).toHaveLength(3);
		expect(chunks[0].from).toBe(DAY_1);
		expect(chunks.at(-1)?.to).toBe(DAY_1 + 131 * DAY_S - 1);
		for (let i = 1; i < chunks.length; i++) {
			expect(chunks[i].from).toBe(chunks[i - 1].to + 1);
			expect(dayOf(chunks[i].from)).toBe(chunks[i].from);
		}
	});

	it('returns one chunk for a range within the limit', () => {
		expect(chunkRange({ from: DAY_1, to: DAY_2 })).toEqual([
			{ from: DAY_1, to: DAY_3 - 1 }
		]);
	});
});

describe('fetchSeries', () => {
	it('normalises hero rows and reads totals from matches_per_bucket', async () => {
		const calls = stubFetch(() => [
			heroRow(1, DAY_1, 60, 100),
			heroRow(2, DAY_1, 40, 90)
		]);

		const series = await fetchSeries('hero', 'all', { from: DAY_1, to: DAY_1 });

		expect(series.rows).toEqual([
			{ entityId: 1, day: DAY_1, wins: 60, matches: 100 },
			{ entityId: 2, day: DAY_1, wins: 40, matches: 90 }
		]);
		expect(series.totals).toEqual(new Map([[DAY_1, 515_328]]));
		expect(calls[0].pathname).toBe('/v1/analytics/hero-stats');
		expect(calls[0].searchParams.get('bucket')).toBe('start_time_day');
		expect(calls[0].searchParams.has('min_average_badge')).toBe(false);
	});

	it('normalises item rows, which carry no totals', async () => {
		const calls = stubFetch(() => [itemRow(7409189, DAY_1, 194, 367)]);

		const series = await fetchSeries('item', 'all', { from: DAY_1, to: DAY_1 });

		expect(series.rows).toEqual([
			{ entityId: 7409189, day: DAY_1, wins: 194, matches: 367 }
		]);
		expect(series.totals.size).toBe(0);
		expect(calls[0].pathname).toBe('/v1/analytics/item-stats');
	});

	it('pins the population on both endpoints and the row minimum on items only', async () => {
		const calls = stubFetch(() => []);

		await fetchSeries('hero', 'all', { from: DAY_1, to: DAY_1 });
		await fetchSeries('item', 'high', { from: DAY_1, to: DAY_1 });

		for (const url of calls) {
			expect(url.searchParams.get('game_mode')).toBe('normal');
			expect(url.searchParams.get('match_mode')).toBe('ranked,unranked');
			expect(url.searchParams.get('min_unix_timestamp')).toBe(String(DAY_1));
			expect(url.searchParams.get('max_unix_timestamp')).toBe(String(DAY_2 - 1));
		}
		expect(calls[0].searchParams.has('min_matches')).toBe(false);
		expect(calls[1].searchParams.get('min_matches')).toBe('1');
		expect(calls[1].searchParams.get('min_average_badge')).toBe('91');
	});

	it('sends the badge floor only for the high tier', async () => {
		const calls = stubFetch(() => []);

		await fetchSeries('hero', 'high', { from: DAY_1, to: DAY_1 });

		expect(calls[0].searchParams.get('min_average_badge')).toBe(
			String(HIGH_RANK_MIN_BADGE)
		);
	});

	it('drops buckets the API returns beyond the requested range', async () => {
		stubFetch(() => [heroRow(1, DAY_1, 60, 100), heroRow(1, DAY_2, 55, 100)]);

		const series = await fetchSeries('hero', 'all', { from: DAY_1, to: DAY_1 });

		expect(series.rows.map((row) => row.day)).toEqual([DAY_1]);
		expect([...series.totals.keys()]).toEqual([DAY_1]);
	});

	it('requests consecutive chunks and never counts a day twice', async () => {
		const to = DAY_1 + 100 * DAY_S;
		const calls = stubFetch((url) => {
			const from = Number(url.searchParams.get('min_unix_timestamp'));
			const max = Number(url.searchParams.get('max_unix_timestamp'));
			return [
				heroRow(1, from, 1, 2),
				heroRow(1, dayOf(max), 1, 2),
				heroRow(1, max + 1, 1, 2)
			];
		});

		const series = await fetchSeries('hero', 'all', { from: DAY_1, to });

		expect(calls).toHaveLength(2);
		expect(Number(calls[1].searchParams.get('min_unix_timestamp'))).toBe(
			Number(calls[0].searchParams.get('max_unix_timestamp')) + 1
		);
		const days = series.rows.map((row) => row.day);
		expect(new Set(days).size).toBe(days.length);
	});

	it('throws on a server error', async () => {
		stubFetch(
			() => ({ status: 500, error: 'Internal server error: Database error.' }),
			500
		);

		await expect(fetchSeries('item', 'all', { from: DAY_1, to: DAY_1 })).rejects.toThrow(
			/500/
		);
	});

	it('throws when the response does not match the schema', async () => {
		stubFetch(() => [{ hero_id: 1, bucket: DAY_1 }]);

		await expect(fetchSeries('hero', 'all', { from: DAY_1, to: DAY_1 })).rejects.toThrow(
			/Invalid hero-stats response/
		);
	});
});

describe('fetchSeries against recorded responses', () => {
	const recorded = JSON.parse(
		readFileSync(
			new URL('./fixtures/enrichment/min-matches-rank-reset.json', import.meta.url),
			'utf8'
		)
	) as { itemDefault: unknown[]; itemMin1: unknown[]; hero: { bucket: number }[] };
	const range = {
		from: Date.parse('2026-07-29T00:00:00Z') / 1000,
		to: Date.parse('2026-08-04T00:00:00Z') / 1000
	};
	const resetDay = Date.parse('2026-07-31T00:00:00Z') / 1000;

	it('leaves a day the API omitted absent instead of inventing a zero row', async () => {
		stubFetch(() => recorded.itemDefault);

		const series = await fetchSeries('item', 'high', range);

		expect(series.rows.length).toBeGreaterThan(0);
		expect(series.rows.some((row) => row.day === resetDay)).toBe(false);
		expect(series.rows.every((row) => row.day <= range.to)).toBe(true);
	});

	it('reads player slots, which exceed any one hero, as the daily total', async () => {
		stubFetch(() => recorded.hero);

		const series = await fetchSeries('hero', 'high', range);

		expect(series.totals.has(range.to + DAY_S)).toBe(false);
		for (const row of series.rows) {
			expect(series.totals.get(row.day)).toBeGreaterThanOrEqual(row.matches);
		}
	});
});

describe('retries', () => {
	it('tries a failing request three times, then gives up', async () => {
		const calls = stubFetch(() => ({ error: 'Database error.' }), 500);

		await expect(fetchSeries('item', 'all', { from: DAY_1, to: DAY_1 })).rejects.toThrow(
			/500/
		);
		expect(calls).toHaveLength(3);
	});

	it('does not retry a request the API rejected outright', async () => {
		const calls = stubFetch(() => ({ error: 'bad request' }), 400);

		await expect(fetchSeries('hero', 'all', { from: DAY_1, to: DAY_1 })).rejects.toThrow(
			/400/
		);
		expect(calls).toHaveLength(1);
	});
});

describe('fetchBuyerSeries', () => {
	it('asks hero-stats for one item and drops the filtered slot total', async () => {
		const calls = stubFetch(() => [
			{ ...heroRow(1, DAY_1, 60, 100), matches_per_bucket: 50_662 },
			heroRow(1, DAY_2, 55, 90)
		]);

		const rows = await fetchBuyerSeries(3696726732, { from: DAY_1, to: DAY_1 });

		expect(rows).toEqual([{ entityId: 1, day: DAY_1, wins: 60, matches: 100 }]);
		expect(calls[0].pathname).toBe('/v1/analytics/hero-stats');
		expect(calls[0].searchParams.get('include_item_ids')).toBe('3696726732');
		expect(calls[0].searchParams.get('game_mode')).toBe('normal');
		expect(calls[0].searchParams.has('min_matches')).toBe(false);
	});
});

describe('fetchAllSeries', () => {
	it("takes each tier's totals from the hero series", async () => {
		stubFetch((url) => {
			const high = url.searchParams.has('min_average_badge');
			if (url.pathname.endsWith('hero-stats')) {
				return [
					{ ...heroRow(1, DAY_1, 6, 10), matches_per_bucket: high ? 1200 : 120_000 }
				];
			}
			return [itemRow(7409189, DAY_1, 3, 5)];
		});

		const all = await fetchAllSeries({ from: DAY_1, to: DAY_1 });

		expect(all.totals.all.get(DAY_1)).toBe(120_000);
		expect(all.totals.high.get(DAY_1)).toBe(1200);
		expect(all.rows.item.all).toEqual(all.rows.item.high);
		expect(all.rows.item.all[0].entityId).toBe(7409189);
	});
});
