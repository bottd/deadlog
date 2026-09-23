import {
	BOUGHT_BY_LIMIT,
	RELATED_ITEMS_LIMIT,
	type BoughtBy,
	type RelatedItems
} from '@deadlog/utils';
import {
	BOUGHT_METHOD_VERSION,
	RELATED_METHOD_VERSION,
	RELATED_MIN_APPEARANCES,
	RELATED_MIN_BUYERS
} from './constants';
import type { DailyRow } from './types';

export interface WindowSeries {
	days: number[];
	heroRows: DailyRow[];
	buyers: ReadonlyMap<number, DailyRow[]>;
}

export interface RelatedInput extends WindowSeries {
	heroId: number;
	candidates: number[];
	after?: WindowSeries;
}

const candidateFingerprint = (candidates: number[]): number[] =>
	[...new Set(candidates)].sort((a, b) => a - b);

export function isCurrentRelated(
	recorded: RelatedItems | null | undefined,
	candidates: number[]
): boolean {
	return (
		!!recorded &&
		recorded.methodVersion === RELATED_METHOD_VERSION &&
		recorded.candidates.join(',') === candidateFingerprint(candidates).join(',')
	);
}

function dailyMatches(rows: DailyRow[], heroId: number, days: Set<number>) {
	const byDay = new Map<number, number>();
	for (const row of rows) {
		if (row.entityId === heroId && days.has(row.day)) byDay.set(row.day, row.matches);
	}
	return byDay;
}

interface HeroWindow {
	series: WindowSeries;
	heroId: number;
	days: Set<number>;
	played: Map<number, number>;
	appearances: number;
}

function heroWindow(series: WindowSeries, heroId: number): HeroWindow {
	const days = new Set(series.days);
	const played = dailyMatches(series.heroRows, heroId, days);
	const appearances = [...played.values()].reduce((sum, matches) => sum + matches, 0);
	return { series, heroId, days, played, appearances };
}

function buyerSum(window: HeroWindow, itemId: number): number | null {
	const rows = window.series.buyers.get(itemId);
	if (!rows) throw new Error(`No buyer series was fetched for item ${itemId}`);
	let buyers = 0;
	for (const [day, matches] of dailyMatches(rows, window.heroId, window.days)) {
		if (matches > (window.played.get(day) ?? 0)) return null;
		buyers += matches;
	}
	return buyers;
}

function afterCounts(
	series: WindowSeries,
	heroId: number,
	itemIds: number[]
): { appearances: number; buyers: number[] } | null {
	const window = heroWindow(series, heroId);
	if (window.appearances < RELATED_MIN_APPEARANCES) return null;
	const buyers: number[] = [];
	for (const id of itemIds) {
		const sum = buyerSum(window, id);
		if (sum === null) return null;
		buyers.push(sum);
	}
	return { appearances: window.appearances, buyers };
}

export function selectRelatedItems(input: RelatedInput): RelatedItems {
	const candidates = candidateFingerprint(input.candidates);
	const result = (
		status: RelatedItems['status'],
		appearances: number,
		items: RelatedItems['items'] = []
	): RelatedItems => ({
		methodVersion: RELATED_METHOD_VERSION,
		status,
		appearances,
		candidates,
		items
	});

	if (input.days.length === 0) return result('no-window', 0);

	const window = heroWindow(input, input.heroId);
	if (window.appearances < RELATED_MIN_APPEARANCES)
		return result('insufficient-sample', window.appearances);

	const items = candidates.flatMap((id) => {
		const buyers = buyerSum(window, id);
		return buyers !== null && buyers >= RELATED_MIN_BUYERS ? [{ id, buyers }] : [];
	});

	items.sort((a, b) => b.buyers - a.buyers || a.id - b.id);
	const selected = items.slice(0, RELATED_ITEMS_LIMIT);
	const after =
		input.after &&
		afterCounts(
			input.after,
			input.heroId,
			selected.map((item) => item.id)
		);
	if (!after) return result('complete', window.appearances, selected);
	return {
		...result(
			'complete',
			window.appearances,
			selected.map((item, index) => ({ ...item, after: after.buyers[index] }))
		),
		afterAppearances: after.appearances
	};
}

export function selectBoughtBy(input: {
	itemId: number;
	before: WindowSeries;
	after?: WindowSeries;
}): BoughtBy | null {
	const rows = input.before.buyers.get(input.itemId) ?? [];
	const heroIds = [...new Set(rows.map((row) => row.entityId))];

	const ranked = heroIds.flatMap((heroId) => {
		const window = heroWindow(input.before, heroId);
		if (window.appearances < RELATED_MIN_APPEARANCES) return [];
		const buyers = buyerSum(window, input.itemId);
		if (buyers === null || buyers < RELATED_MIN_BUYERS) return [];
		return [{ id: heroId, buyers, appearances: window.appearances }];
	});
	if (ranked.length === 0) return null;
	ranked.sort(
		(a, b) => b.buyers / b.appearances - a.buyers / a.appearances || a.id - b.id
	);

	const heroes = ranked.slice(0, BOUGHT_BY_LIMIT).map((hero) => {
		const after = input.after && afterCounts(input.after, hero.id, [input.itemId]);
		return after
			? {
					...hero,
					afterBuyers: after.buyers[0],
					afterAppearances: after.appearances
				}
			: hero;
	});
	return { methodVersion: BOUGHT_METHOD_VERSION, heroes };
}
