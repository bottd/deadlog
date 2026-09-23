export type CoverageStatus = 'complete' | 'incomplete';

export interface ImpactWindow {
	win: number | null;
	pick: number | null;
	matches: number;
	days: number;
	total: number;
	covered: number;
	coverage: CoverageStatus;
	buy?: number | null;
}

export interface TierImpact {
	before: ImpactWindow;
	after: ImpactWindow;
}

export interface EntityImpact {
	closed: boolean;
	all: TierImpact;
	high: TierImpact;
}

export interface DayInterval {
	from: string;
	to: string;
}

export interface PatchStats {
	schemaVersion: 2;
	methodVersion: number;
	collectedAt: string;
	before: DayInterval | null;
	after: DayInterval | null;
	siblings: string[];
}

export function intervalDays(interval: DayInterval | null): number {
	if (!interval) return 0;
	return Math.round((Date.parse(interval.to) - Date.parse(interval.from)) / 86_400_000);
}
