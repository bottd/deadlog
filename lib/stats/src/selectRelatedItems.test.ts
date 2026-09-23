import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
	isCurrentRelated,
	selectBoughtBy,
	selectRelatedItems
} from './selectRelatedItems';
import type { DailyRow } from './types';

interface HeroRow {
	hero_id: number;
	bucket: number;
	wins: number;
	matches: number;
}

const fixture = JSON.parse(
	readFileSync(
		new URL('./fixtures/enrichment/hero-item-association.json', import.meta.url),
		'utf8'
	)
) as { heroDaily: HeroRow[]; buyers: Record<string, HeroRow[]> };

const rows = (list: HeroRow[]): DailyRow[] =>
	list.map((row) => ({
		entityId: row.hero_id,
		day: row.bucket,
		wins: row.wins,
		matches: row.matches
	}));

const TOXIC = 3696726732;
const RITE = 1710079648;
const day = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / 1000;
const days = [day('2026-09-13'), day('2026-09-14'), day('2026-09-15')];
const heroRows = rows(fixture.heroDaily);
const buyers = new Map([
	[TOXIC, rows(fixture.buyers[TOXIC])],
	[RITE, rows(fixture.buyers[RITE])]
]);

const hero = (matches: number, at = days[0]): DailyRow => ({
	entityId: 1,
	day: at,
	wins: 0,
	matches
});

describe('selectRelatedItems on recorded responses', () => {
	it('divides buyer player-matches by the hero appearances of the same days', () => {
		const result = selectRelatedItems({
			heroId: 1,
			days,
			heroRows,
			candidates: [TOXIC, RITE],
			buyers
		});

		expect(result).toEqual({
			methodVersion: 2,
			status: 'complete',
			appearances: 20_988 + 17_490 + 16_590,
			candidates: [RITE, TOXIC],
			items: [
				{ id: TOXIC, buyers: 13_941 + 11_405 + 10_904 },
				{ id: RITE, buyers: 781 + 664 + 654 }
			]
		});
	});

	it('ignores the day the API over-returned', () => {
		const twoDays = selectRelatedItems({
			heroId: 13,
			days: days.slice(0, 2),
			heroRows,
			candidates: [TOXIC],
			buyers
		});

		expect(twoDays.appearances).toBe(20_428 + 17_482);
		expect(twoDays.items).toEqual([{ id: TOXIC, buyers: 2768 + 2269 }]);
	});
});

describe('selectRelatedItems thresholds', () => {
	const one = (id: number, matches: number): [number, DailyRow[]] => [
		id,
		[hero(matches)]
	];

	it('needs no data for an empty window', () => {
		expect(
			selectRelatedItems({
				heroId: 1,
				days: [],
				heroRows: [],
				candidates: [5],
				buyers: new Map()
			})
		).toMatchObject({ status: 'no-window', appearances: 0, items: [] });
	});

	it('stops at 999 hero appearances and proceeds at 1,000', () => {
		const at = (matches: number) =>
			selectRelatedItems({
				heroId: 1,
				days: [days[0]],
				heroRows: [hero(matches)],
				candidates: [5],
				buyers: new Map([one(5, 500)])
			});

		expect(at(999)).toMatchObject({ status: 'insufficient-sample', items: [] });
		expect(at(1000)).toMatchObject({
			status: 'complete',
			items: [{ id: 5, buyers: 500 }]
		});
	});

	it('drops a candidate under 100 buyers and keeps an empty result explicit', () => {
		const result = selectRelatedItems({
			heroId: 1,
			days: [days[0]],
			heroRows: [hero(5000)],
			candidates: [5, 6],
			buyers: new Map([one(5, 99), one(6, 100)])
		});

		expect(result.items).toEqual([{ id: 6, buyers: 100 }]);
		expect(
			selectRelatedItems({
				heroId: 1,
				days: [days[0]],
				heroRows: [hero(5000)],
				candidates: [5],
				buyers: new Map([one(5, 99)])
			})
		).toMatchObject({ status: 'complete', items: [] });
	});

	it('takes three by share, breaking ties by item id', () => {
		const result = selectRelatedItems({
			heroId: 1,
			days: [days[0]],
			heroRows: [hero(5000)],
			candidates: [9, 4, 7, 2],
			buyers: new Map([one(9, 300), one(4, 300), one(7, 900), one(2, 200)])
		});

		expect(result.items.map((item) => item.id)).toEqual([7, 4, 9]);
		expect(result.candidates).toEqual([2, 4, 7, 9]);
	});

	it('rejects a candidate whose buyers exceed the hero appearances that day', () => {
		const result = selectRelatedItems({
			heroId: 1,
			days: [days[0], days[1]],
			heroRows: [hero(3000), hero(3000, days[1])],
			candidates: [5, 6],
			buyers: new Map([
				[5, [hero(3001), hero(10, days[1])]],
				[6, [hero(400)]]
			])
		});

		expect(result.items).toEqual([{ id: 6, buyers: 400 }]);
	});

	it('does not read a missing buyer series as zero buyers', () => {
		expect(() =>
			selectRelatedItems({
				heroId: 1,
				days: [days[0]],
				heroRows: [hero(5000)],
				candidates: [5],
				buyers: new Map()
			})
		).toThrow(/No buyer series/);
	});
});

describe('isCurrentRelated', () => {
	const recorded = selectRelatedItems({
		heroId: 1,
		days: [],
		heroRows: [],
		candidates: [9, 4],
		buyers: new Map()
	});

	it('holds while the candidates and method are the same, in any order', () => {
		expect(isCurrentRelated(recorded, [4, 9])).toBe(true);
		expect(isCurrentRelated(recorded, [4, 9, 11])).toBe(false);
		expect(isCurrentRelated({ ...recorded, methodVersion: 0 }, [4, 9])).toBe(false);
		expect(isCurrentRelated(null, [4, 9])).toBe(false);
	});
});

describe('selectBoughtBy', () => {
	const DAY = 86_400;
	const rows = (entries: [number, number][], day = DAY) =>
		entries.map(([entityId, matches]) => ({ entityId, day, wins: 0, matches }));
	const window = (heroes: [number, number][], buyers: [number, number][], day = DAY) => ({
		days: [day],
		heroRows: rows(heroes, day),
		buyers: new Map([[7, rows(buyers, day)]])
	});

	it('ranks heroes by the share of their players who bought the item', () => {
		const bought = selectBoughtBy({
			itemId: 7,
			before: window(
				[
					[1, 10_000],
					[2, 2000],
					[3, 5000],
					[4, 900],
					[5, 4000]
				],
				[
					[1, 3000],
					[2, 1500],
					[3, 1000],
					[4, 800],
					[5, 90]
				]
			)
		});

		expect(bought).toEqual({
			methodVersion: 1,
			heroes: [
				{ id: 2, buyers: 1500, appearances: 2000 },
				{ id: 1, buyers: 3000, appearances: 10_000 },
				{ id: 3, buyers: 1000, appearances: 5000 }
			]
		});
	});

	it('adds the after window where the hero clears the floor there', () => {
		const bought = selectBoughtBy({
			itemId: 7,
			before: window(
				[
					[1, 10_000],
					[2, 10_000]
				],
				[
					[1, 5000],
					[2, 4000]
				]
			),
			after: window(
				[
					[1, 2000],
					[2, 500]
				],
				[
					[1, 600],
					[2, 400]
				],
				2 * DAY
			)
		});

		expect(bought?.heroes).toEqual([
			{
				id: 1,
				buyers: 5000,
				appearances: 10_000,
				afterBuyers: 600,
				afterAppearances: 2000
			},
			{ id: 2, buyers: 4000, appearances: 10_000 }
		]);
	});

	it('returns null when no hero clears the floors', () => {
		expect(
			selectBoughtBy({ itemId: 7, before: window([[1, 500]], [[1, 400]]) })
		).toBeNull();
	});
});
