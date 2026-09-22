import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { DAY_S } from './constants';

interface HeroRow {
	hero_id: number;
	bucket: number;
	wins: number;
	losses: number;
	matches: number;
	matches_per_bucket: number;
}

interface ItemRow {
	item_id: number;
	bucket: number;
	wins: number;
	losses: number;
	matches: number;
	players: number;
}

interface Association {
	requested: { from: string; to: string; heroes: number[]; items: number[] };
	heroDaily: HeroRow[];
	buyers: Record<string, HeroRow[]>;
	buyersOfBoth: HeroRow[];
	itemDaily: Record<string, ItemRow[]>;
	itemNoBucket: Record<string, ItemRow[]>;
	itemByHeroBucket: ItemRow[];
}

interface MinMatches {
	requested: { from: string; to: string };
	itemDefault: ItemRow[];
	itemMin1: ItemRow[];
	hero: HeroRow[];
}

const load = <T>(name: string): T =>
	JSON.parse(
		readFileSync(new URL(`./fixtures/enrichment/${name}.json`, import.meta.url), 'utf8')
	) as T;

const dayStart = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / 1000;
const sum = (rows: { matches: number }[]) => rows.reduce((n, row) => n + row.matches, 0);

describe('hero-item association evidence (2026-09-13 to 2026-09-15)', () => {
	const fixture = load<Association>('hero-item-association');
	const { heroes, items } = fixture.requested;
	const from = dayStart(fixture.requested.from);
	const to = dayStart(fixture.requested.to);
	const requestedDays = [from, from + DAY_S, to];

	const appearances = (hero: number, day: number) =>
		fixture.heroDaily.find((row) => row.hero_id === hero && row.bucket === day);
	const buyers = (hero: number, item: number, day: number) =>
		fixture.buyers[item].find((row) => row.hero_id === hero && row.bucket === day);
	const purchases = (hero: number, item: number, day: number) =>
		fixture.itemDaily[hero].find((row) => row.item_id === item && row.bucket === day);

	it('splits every count into wins and losses', () => {
		const rows = [
			...fixture.heroDaily,
			...Object.values(fixture.buyers).flat(),
			...Object.values(fixture.itemDaily).flat()
		];
		for (const row of rows) expect(row.wins + row.losses).toBe(row.matches);
	});

	it('keeps buyers within item-stats matches, and both within hero appearances', () => {
		for (const hero of heroes) {
			for (const item of items) {
				for (const day of requestedDays) {
					const bought = buyers(hero, item, day)?.matches ?? NaN;
					const rows = purchases(hero, item, day)?.matches ?? NaN;
					const played = appearances(hero, day)?.matches ?? NaN;

					expect(bought).toBeLessThanOrEqual(rows);
					expect(rows).toBeLessThanOrEqual(played);
					expect(rows - bought).toBeLessThanOrEqual(rows * 0.02);
				}
			}
		}
	});

	it('reports buyer slots, not the denominator, in a filtered matches_per_bucket', () => {
		for (const item of items) {
			for (const day of requestedDays) {
				const filtered = buyers(heroes[0], item, day)?.matches_per_bucket ?? NaN;
				const unfiltered = appearances(heroes[0], day)?.matches_per_bucket ?? NaN;
				expect(filtered).toBeLessThan(unfiltered / 5);
			}
		}
	});

	it('over-returns the day after the range in every daily response', () => {
		const extra = to + DAY_S;
		expect(fixture.heroDaily.some((row) => row.bucket === extra)).toBe(true);
		for (const hero of heroes) {
			expect(fixture.itemDaily[hero].some((row) => row.bucket === extra)).toBe(true);
		}
	});

	it('folds that extra day into aggregate buckets, where it cannot be trimmed', () => {
		for (const hero of heroes) {
			for (const item of items) {
				const daily = fixture.itemDaily[hero].filter((row) => row.item_id === item);
				const requested = daily.filter((row) => row.bucket <= to);
				const aggregate = fixture.itemNoBucket[hero].find((row) => row.item_id === item);
				const byHero = fixture.itemByHeroBucket.find(
					(row) => row.item_id === item && row.bucket === hero
				);

				expect(aggregate?.matches).toBe(sum(daily));
				expect(byHero?.matches).toBe(sum(daily));
				expect(aggregate?.matches).toBeGreaterThan(sum(requested));
			}
		}
	});

	it('treats several include_item_ids as all of them', () => {
		for (const row of fixture.buyersOfBoth) {
			for (const item of items) {
				const single = buyers(row.hero_id, item, row.bucket)?.matches ?? NaN;
				expect(row.matches).toBeLessThan(single);
			}
		}
	});
});

describe('default min_matches at a rank reset (2026-07-29 to 2026-08-04, badge 91)', () => {
	const fixture = load<MinMatches>('min-matches-rank-reset');
	const key = (row: ItemRow) => `${row.item_id}:${row.bucket}`;
	const kept = new Map(fixture.itemDefault.map((row) => [key(row), row]));

	it('drops whole rows under 20 matches and leaves the rest unchanged', () => {
		const dropped = fixture.itemMin1.filter((row) => !kept.has(key(row)));

		expect(dropped.length).toBeGreaterThan(0);
		for (const row of dropped) expect(row.matches).toBeLessThan(20);
		for (const row of fixture.itemMin1) {
			const twin = kept.get(key(row));
			if (twin) expect(twin).toEqual(row);
			else expect(row.matches).toBeLessThan(20);
		}
		expect(fixture.itemDefault.every((row) => row.matches >= 20)).toBe(true);
	});

	it('removes the reset day entirely, though matches were played', () => {
		const resetDay = dayStart('2026-07-31');

		expect(fixture.itemDefault.some((row) => row.bucket === resetDay)).toBe(false);
		expect(fixture.itemMin1.some((row) => row.bucket === resetDay)).toBe(true);
		expect(fixture.hero.some((row) => row.bucket === resetDay)).toBe(true);
	});
});
