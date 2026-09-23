export type EntityKind = 'hero' | 'item';
export type RankTier = 'all' | 'high';

export interface DailyRow {
	entityId: number;
	day: number;
	wins: number;
	matches: number;
	buyTime?: number;
}

export interface AbilityOrderRow {
	abilities: number[];
	matches: number;
}

export type DailyTotals = Map<number, number>;

export interface AllSeries {
	rows: Record<EntityKind, Record<RankTier, DailyRow[]>>;
	totals: Record<RankTier, DailyTotals>;
}

export interface TimeRange {
	from: number;
	to: number;
}
