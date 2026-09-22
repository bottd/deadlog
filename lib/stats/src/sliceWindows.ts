import {
	DAY_S,
	MIN_WINDOW_MATCHES,
	PLAYERS_PER_MATCH,
	WINDOW_CAP_DAYS,
	dayOf
} from './constants';
import type { DayInterval, EntityImpact, ImpactWindow } from '@deadlog/utils';
import type { AllSeries, DailyRow, DailyTotals, EntityKind, RankTier } from './types';

export interface PatchRef {
	id: string;
	at: number;
}

export interface TouchedEntity {
	kind: EntityKind;
	id: number;
}

export interface SlicedImpact extends TouchedEntity {
	impact: EntityImpact;
}

export interface IndexedSeries {
	byEntity: Map<number, Map<number, DailyRow>>;
	totals: DailyTotals;
	pickMultiplier: number;
}

const PICK_MULTIPLIER: Record<EntityKind, number> = {
	hero: PLAYERS_PER_MATCH,
	item: 1
};

const round4 = (value: number): number => Math.round(value * 1e4) / 1e4;

export function indexSeries(
	rows: DailyRow[],
	totals: DailyTotals,
	kind: EntityKind
): IndexedSeries {
	const byEntity = new Map<number, Map<number, DailyRow>>();
	for (const row of rows) {
		let days = byEntity.get(row.entityId);
		if (!days) {
			days = new Map();
			byEntity.set(row.entityId, days);
		}
		days.set(row.day, row);
	}
	return { byEntity, totals, pickMultiplier: PICK_MULTIPLIER[kind] };
}

function daysBetween(lower: number, upper: number): number[] {
	const days: number[] = [];
	for (let day = lower + DAY_S; day < upper; day += DAY_S) days.push(day);
	return days;
}

const isoDay = (day: number): string => new Date(day * 1000).toISOString().slice(0, 10);

const interval = (days: number[]): DayInterval | null =>
	days.length === 0
		? null
		: { from: isoDay(days[0]), to: isoDay(days[days.length - 1] + DAY_S) };

export interface PatchBounds {
	before: DayInterval | null;
	after: DayInterval | null;
	siblings: string[];
}

export function patchBounds(
	patches: PatchRef[],
	index: number,
	now: number
): PatchBounds {
	const { before, after } = windowDays(patches, index, now);
	const patchDay = dayOf(patches[index].at);
	return {
		before: interval(before),
		after: interval(after),
		siblings: patches
			.filter((other, at) => at !== index && dayOf(other.at) === patchDay)
			.map((other) => other.id)
	};
}

export function windowDays(
	patches: PatchRef[],
	index: number,
	now: number
): { before: number[]; after: number[]; closed: boolean } {
	const patch = patches[index];
	const patchDay = dayOf(patch.at);
	const reach = (WINDOW_CAP_DAYS + 1) * DAY_S;

	let previousDay = -Infinity;
	let nextDay = Infinity;
	for (const other of patches) {
		const day = dayOf(other.at);
		if (day < patchDay && day > previousDay) previousDay = day;
		if (day > patchDay && day < nextDay) nextDay = day;
	}

	return {
		before: daysBetween(Math.max(previousDay, patchDay - reach), patchDay),
		after: daysBetween(patchDay, Math.min(nextDay, patchDay + reach, dayOf(now))),
		closed: nextDay !== Infinity || now >= patch.at + reach
	};
}

export function summarise(
	series: IndexedSeries,
	entityId: number,
	days: number[]
): ImpactWindow {
	const entityDays = series.byEntity.get(entityId);
	let wins = 0;
	let matches = 0;
	let total = 0;
	let contributing = 0;
	let covered = 0;

	for (const day of days) {
		const slots = series.totals.get(day);
		if (slots !== undefined) covered++;
		total += slots ?? 0;
		const row = entityDays?.get(day);
		if (!row) continue;
		wins += row.wins;
		matches += row.matches;
		contributing++;
	}

	const coverage = covered === days.length ? 'complete' : 'incomplete';
	const reportable =
		matches >= MIN_WINDOW_MATCHES && total > 0 && coverage === 'complete';
	return {
		win: reportable ? round4(wins / matches) : null,
		pick: reportable ? round4((matches * series.pickMultiplier) / total) : null,
		matches,
		days: contributing,
		total,
		covered,
		coverage
	};
}

export function sliceWindows(input: {
	patches: PatchRef[];
	touched: Map<string, TouchedEntity[]>;
	series: AllSeries;
	now: number;
}): Map<string, SlicedImpact[]> {
	const { patches, touched, series, now } = input;
	const index = (kind: EntityKind, tier: RankTier) =>
		indexSeries(series.rows[kind][tier], series.totals[tier], kind);
	const indexed: Record<EntityKind, Record<RankTier, IndexedSeries>> = {
		hero: { all: index('hero', 'all'), high: index('hero', 'high') },
		item: { all: index('item', 'all'), high: index('item', 'high') }
	};

	const sliced = new Map<string, SlicedImpact[]>();

	patches.forEach((patch, index) => {
		const entities = touched.get(patch.id);
		if (!entities?.length) return;

		const { before, after, closed } = windowDays(patches, index, now);
		const entries: SlicedImpact[] = [];

		for (const { kind, id } of entities) {
			const tier = (name: RankTier) => ({
				before: summarise(indexed[kind][name], id, before),
				after: summarise(indexed[kind][name], id, after)
			});
			const impact: EntityImpact = { closed, all: tier('all'), high: tier('high') };

			const hasData = [impact.all, impact.high].some(
				(t) => t.before.matches > 0 || t.after.matches > 0
			);
			if (hasData) entries.push({ kind, id, impact });
		}

		if (entries.length > 0) sliced.set(patch.id, entries);
	});

	return sliced;
}
