import { describe, expect, it } from 'vitest';
import { DAY_S } from './constants';
import { indexSeries, sliceWindows, summarise, windowDays } from './sliceWindows';
import type { AllSeries, DailyRow, DailySeries } from './types';

const D0 = 1788825600;
const day = (n: number) => D0 + n * DAY_S;
const NOON = DAY_S / 2;
const patchAt = (id: string, n: number, offset = NOON) => ({ id, at: day(n) + offset });
const offsets = (days: number[]) => days.map((d) => (d - D0) / DAY_S);
const range = (from: number, to: number) =>
	Array.from({ length: to - from + 1 }, (_, i) => from + i);

const FAR_FUTURE = day(1000);

function uniformSeries(
	entityIds: number[],
	from: number,
	to: number,
	perDay: { wins: number; matches: number },
	totalPerDay: number
): DailySeries {
	const rows: DailyRow[] = [];
	const totalMatches = new Map<number, number>();
	for (const n of range(from, to)) {
		totalMatches.set(day(n), totalPerDay);
		for (const entityId of entityIds) rows.push({ entityId, day: day(n), ...perDay });
	}
	return { rows, totalMatches };
}

const EMPTY: DailySeries = { rows: [], totalMatches: new Map() };

function allSeries(
	parts: Partial<Record<'heroAll' | 'heroHigh' | 'itemAll' | 'itemHigh', DailySeries>>
): AllSeries {
	return {
		hero: { all: parts.heroAll ?? EMPTY, high: parts.heroHigh ?? EMPTY },
		item: { all: parts.itemAll ?? EMPTY, high: parts.itemHigh ?? EMPTY }
	};
}

describe('windowDays', () => {
	it('gives a lone patch 14 days on each side', () => {
		const { before, after, closed } = windowDays([patchAt('p', 20)], 0, FAR_FUTURE);

		expect(offsets(before)).toEqual(range(6, 19));
		expect(offsets(after)).toEqual(range(21, 34));
		expect(closed).toBe(true);
	});

	it('applies the cap when neighbours are far away', () => {
		const patches = [patchAt('a', 0), patchAt('b', 40), patchAt('c', 80)];

		const { before, after } = windowDays(patches, 1, FAR_FUTURE);

		expect(offsets(before)).toEqual(range(26, 39));
		expect(offsets(after)).toEqual(range(41, 54));
	});

	it('leaves no days between hotfixes one day apart', () => {
		const patches = [patchAt('a', 10), patchAt('b', 11), patchAt('c', 12)];

		const { before, after, closed } = windowDays(patches, 1, FAR_FUTURE);

		expect(before).toEqual([]);
		expect(after).toEqual([]);
		expect(closed).toBe(true);
	});

	it('keeps the days strictly between hotfixes three days apart', () => {
		const patches = [patchAt('a', 10), patchAt('b', 13), patchAt('c', 16)];

		const { before, after } = windowDays(patches, 1, FAR_FUTURE);

		expect(offsets(before)).toEqual([11, 12]);
		expect(offsets(after)).toEqual([14, 15]);
	});

	it('never includes the patch day or a neighbour day, whatever the time of day', () => {
		const patches = [
			patchAt('a', 10, 1),
			patchAt('b', 15, DAY_S - 1),
			patchAt('c', 20, 0)
		];

		const { before, after } = windowDays(patches, 1, FAR_FUTURE);

		expect(offsets(before)).toEqual([11, 12, 13, 14]);
		expect(offsets(after)).toEqual([16, 17, 18, 19]);
	});

	it('gives two patches on the same day the same windows', () => {
		const patches = [
			patchAt('a', 5),
			patchAt('b', 10, 100),
			patchAt('c', 10, 5000),
			patchAt('d', 14)
		];

		const first = windowDays(patches, 1, FAR_FUTURE);
		const second = windowDays(patches, 2, FAR_FUTURE);

		expect(first).toEqual(second);
		expect(offsets(first.before)).toEqual([6, 7, 8, 9]);
		expect(offsets(first.after)).toEqual([11, 12, 13]);
	});

	it('stays open and excludes today while the after-window is filling', () => {
		const { after, closed } = windowDays([patchAt('p', 20)], 0, day(24) + 3600);

		expect(offsets(after)).toEqual([21, 22, 23]);
		expect(closed).toBe(false);
	});

	it('closes once the cap plus one day has passed with no next patch', () => {
		const patch = patchAt('p', 20);

		expect(windowDays([patch], 0, patch.at + 15 * DAY_S - 1).closed).toBe(false);
		expect(windowDays([patch], 0, patch.at + 15 * DAY_S).closed).toBe(true);
	});

	it('closes as soon as a later patch exists', () => {
		const patches = [patchAt('a', 20), patchAt('b', 22)];

		expect(windowDays(patches, 0, day(22) + NOON + 1).closed).toBe(true);
	});
});

describe('summarise', () => {
	const hero = indexSeries(uniformSeries([1], 0, 9, { wins: 110, matches: 200 }, 24_000));

	it('sums the window and scales hero pick rate to share of matches', () => {
		const window = summarise(hero, 'hero', 1, range(0, 9).map(day), true);

		expect(window).toEqual({
			winRate: 0.55,
			pickRate: 0.1,
			matches: 2000,
			days: 10,
			closed: true
		});
	});

	it('leaves item pick rate as share of players', () => {
		const window = summarise(hero, 'item', 1, range(0, 9).map(day), true);

		expect(window.pickRate).toBe(0.0083);
	});

	it('nulls the rates under the match floor but keeps the count', () => {
		const window = summarise(hero, 'hero', 1, range(0, 3).map(day), false);

		expect(window).toEqual({
			winRate: null,
			pickRate: null,
			matches: 800,
			days: 4,
			closed: false
		});
	});

	it('counts only days the entity has a row, but every day in the denominator', () => {
		const series = uniformSeries([1], 0, 9, { wins: 150, matches: 300 }, 24_000);
		series.rows = series.rows.filter((row) => row.day !== day(4));

		const window = summarise(indexSeries(series), 'hero', 1, range(0, 9).map(day), true);

		expect(window.days).toBe(9);
		expect(window.matches).toBe(2700);
		expect(window.pickRate).toBe(0.135);
	});

	it('returns an empty window for an unknown entity or no days', () => {
		expect(summarise(hero, 'hero', 99, range(0, 9).map(day), true).matches).toBe(0);
		expect(summarise(hero, 'hero', 1, [], true)).toEqual({
			winRate: null,
			pickRate: null,
			matches: 0,
			days: 0,
			closed: true
		});
	});

	it('rounds rates to four decimal places', () => {
		const series = indexSeries(
			uniformSeries([1], 0, 0, { wins: 1234, matches: 3000 }, 36_001)
		);

		const window = summarise(series, 'hero', 1, [day(0)], true);

		expect(window.winRate).toBe(0.4113);
		expect(window.pickRate).toBe(1);
	});
});

describe('sliceWindows', () => {
	const heroAll = uniformSeries([1, 2], 0, 60, { wins: 100, matches: 200 }, 24_000);
	const heroHigh = uniformSeries([1, 2], 0, 60, { wins: 12, matches: 20 }, 2400);
	const itemAll = uniformSeries([500], 0, 60, { wins: 300, matches: 500 }, 1);
	const series = allSeries({
		heroAll,
		heroHigh,
		itemAll: { ...itemAll, totalMatches: heroAll.totalMatches }
	});

	const patches = [patchAt('p1', 20), patchAt('p2', 40)];

	it('emits only the entities each patch touched', () => {
		const impact = sliceWindows({
			patches,
			touched: new Map([
				['p1', [{ kind: 'hero', id: 1 }]],
				['p2', [{ kind: 'item', id: 500 }]]
			]),
			series,
			now: FAR_FUTURE
		});

		expect(Object.keys(impact)).toEqual(['p1', 'p2']);
		expect(Object.keys(impact.p1)).toEqual(['hero:1']);
		expect(Object.keys(impact.p2)).toEqual(['item:500']);
	});

	it('reports both tiers, nulling the thin one', () => {
		const impact = sliceWindows({
			patches,
			touched: new Map([['p1', [{ kind: 'hero', id: 1 }]]]),
			series,
			now: FAR_FUTURE
		});

		const entry = impact.p1['hero:1'];
		expect(entry.all.before).toEqual({
			winRate: 0.5,
			pickRate: 0.1,
			matches: 2800,
			days: 14,
			closed: true
		});
		expect(entry.all.after.matches).toBe(2800);
		expect(entry.high.before).toMatchObject({
			winRate: null,
			pickRate: null,
			matches: 280
		});
	});

	it('divides item picks by the hero player-slot totals', () => {
		const impact = sliceWindows({
			patches,
			touched: new Map([['p2', [{ kind: 'item', id: 500 }]]]),
			series,
			now: FAR_FUTURE
		});

		expect(impact.p2['item:500'].all.before.pickRate).toBe(0.0208);
		expect(impact.p2['item:500'].all.before.winRate).toBe(0.6);
	});

	it('skips entities with no data and patches left with no entries', () => {
		const impact = sliceWindows({
			patches,
			touched: new Map([
				['p1', [{ kind: 'hero', id: 77 }]],
				[
					'p2',
					[
						{ kind: 'hero', id: 77 },
						{ kind: 'hero', id: 2 }
					]
				]
			]),
			series,
			now: FAR_FUTURE
		});

		expect(Object.keys(impact)).toEqual(['p2']);
		expect(Object.keys(impact.p2)).toEqual(['hero:2']);
	});

	it('marks the newest patch open and closes the ones before it', () => {
		const impact = sliceWindows({
			patches,
			touched: new Map([
				['p1', [{ kind: 'hero', id: 1 }]],
				['p2', [{ kind: 'hero', id: 1 }]]
			]),
			series,
			now: day(44) + NOON
		});

		expect(impact.p1['hero:1'].all.after.closed).toBe(true);
		expect(impact.p2['hero:1'].all.after).toMatchObject({
			closed: false,
			days: 3,
			matches: 600
		});
		expect(impact.p2['hero:1'].all.before.closed).toBe(true);
	});

	it('tolerates a day missing from one tier only', () => {
		const gappy = {
			...heroHigh,
			rows: heroHigh.rows.filter((row) => row.day !== day(25))
		};
		gappy.totalMatches = new Map(heroHigh.totalMatches);
		gappy.totalMatches.delete(day(25));

		const impact = sliceWindows({
			patches,
			touched: new Map([['p1', [{ kind: 'hero', id: 1 }]]]),
			series: allSeries({ heroAll, heroHigh: gappy }),
			now: FAR_FUTURE
		});

		expect(impact.p1['hero:1'].all.after.days).toBe(14);
		expect(impact.p1['hero:1'].high.after.days).toBe(13);
	});
});
