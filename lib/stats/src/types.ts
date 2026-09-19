export type EntityKind = 'hero' | 'item';
export type RankTier = 'all' | 'high';

export interface DailyRow {
	entityId: number;
	day: number;
	wins: number;
	matches: number;
}

export interface DailySeries {
	rows: DailyRow[];
	totalMatches: Map<number, number>;
}

export type AllSeries = Record<EntityKind, Record<RankTier, DailySeries>>;

export interface TimeRange {
	from: number;
	to: number;
}

export interface ImpactWindow {
	winRate: number | null;
	pickRate: number | null;
	matches: number;
	days: number;
	closed: boolean;
}

export interface TierImpact {
	before: ImpactWindow;
	after: ImpactWindow;
}

export type EntityImpact = Record<RankTier, TierImpact>;

export interface ImpactSnapshot {
	generatedAt: string;
	highRankMinBadge: number;
	minWindowMatches: number;
	impact: Record<string, Record<string, EntityImpact>>;
}
