import { DAY_S } from './constants';
import type { AllSeries, DailyRow, DailyTotals } from './types';

export const DAY_1 = 1788825600;
export const day = (n: number) => DAY_1 + n * DAY_S;
export const DAY_2 = day(1);
export const DAY_3 = day(2);

export interface HeroPart {
	rows: DailyRow[];
	totals: DailyTotals;
}

export function allSeries(parts: {
	heroAll?: HeroPart;
	heroHigh?: HeroPart;
	itemAll?: DailyRow[];
	itemHigh?: DailyRow[];
}): AllSeries {
	return {
		rows: {
			hero: { all: parts.heroAll?.rows ?? [], high: parts.heroHigh?.rows ?? [] },
			item: { all: parts.itemAll ?? [], high: parts.itemHigh ?? [] }
		},
		totals: {
			all: parts.heroAll?.totals ?? new Map(),
			high: parts.heroHigh?.totals ?? new Map()
		}
	};
}

export const heroRow = (
	hero_id: number,
	bucket: number,
	wins: number,
	matches: number
) => ({
	hero_id,
	bucket,
	wins,
	losses: matches - wins,
	matches,
	matches_per_bucket: 515_328,
	total_kills: 110_927,
	total_deaths: 105_635
});

export const itemRow = (
	item_id: number,
	bucket: number,
	wins: number,
	matches: number
) => ({
	item_id,
	bucket,
	wins,
	losses: matches - wins,
	matches,
	players: Math.round(matches * 0.6),
	avg_buy_time_s: 857.67
});
