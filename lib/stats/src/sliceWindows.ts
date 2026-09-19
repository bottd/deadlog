import {
	DAY_S,
	MIN_WINDOW_MATCHES,
	PLAYERS_PER_MATCH,
	WINDOW_CAP_DAYS
} from './constants';
import { dayOf } from './fetchSeries';
import type {
	AllSeries,
	DailyRow,
	DailySeries,
	EntityImpact,
	EntityKind,
	ImpactSnapshot,
	ImpactWindow,
	RankTier,
	TierImpact
} from './types';

export interface PatchRef {
	id: string;
	at: number;
}

export interface TouchedEntity {
	kind: EntityKind;
	id: number;
}

export interface IndexedSeries {
	byEntity: Map<number, Map<number, DailyRow>>;
	totalMatches: Map<number, number>;
}

const PICK_MULTIPLIER: Record<EntityKind, number> = {
	hero: PLAYERS_PER_MATCH,
	item: 1
};

const TIERS: RankTier[] = ['all', 'high'];

const round4 = (value: number): number => Math.round(value * 1e4) / 1e4;

export function indexSeries(series: DailySeries): IndexedSeries {
	const byEntity = new Map<number, Map<number, DailyRow>>();
	for (const row of series.rows) {
		let days = byEntity.get(row.entityId);
		if (!days) {
			days = new Map();
			byEntity.set(row.entityId, days);
		}
		days.set(row.day, row);
	}
	return { byEntity, totalMatches: series.totalMatches };
}

function daysBetween(lower: number, upper: number): number[] {
	const days: number[] = [];
	for (let day = lower + DAY_S; day < upper; day += DAY_S) days.push(day);
	return days;
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
	kind: EntityKind,
	entityId: number,
	days: number[],
	closed: boolean
): ImpactWindow {
	const entityDays = series.byEntity.get(entityId);
	let wins = 0;
	let matches = 0;
	let total = 0;
	let contributing = 0;

	for (const day of days) {
		total += series.totalMatches.get(day) ?? 0;
		const row = entityDays?.get(day);
		if (!row) continue;
		wins += row.wins;
		matches += row.matches;
		contributing++;
	}

	const reportable = matches >= MIN_WINDOW_MATCHES && total > 0;
	return {
		winRate: reportable ? round4(wins / matches) : null,
		pickRate: reportable ? round4((matches * PICK_MULTIPLIER[kind]) / total) : null,
		matches,
		days: contributing,
		closed
	};
}

export function sliceWindows(input: {
	patches: PatchRef[];
	touched: Map<string, TouchedEntity[]>;
	series: AllSeries;
	now: number;
}): ImpactSnapshot['impact'] {
	const { patches, touched, series, now } = input;
	const indexed: Record<EntityKind, Record<RankTier, IndexedSeries>> = {
		hero: { all: indexSeries(series.hero.all), high: indexSeries(series.hero.high) },
		item: { all: indexSeries(series.item.all), high: indexSeries(series.item.high) }
	};

	const impact: ImpactSnapshot['impact'] = {};

	patches.forEach((patch, index) => {
		const entities = touched.get(patch.id);
		if (!entities?.length) return;

		const { before, after, closed } = windowDays(patches, index, now);
		const entries: Record<string, EntityImpact> = {};

		for (const { kind, id } of entities) {
			const tierImpact = (tier: RankTier): TierImpact => ({
				before: summarise(indexed[kind][tier], kind, id, before, true),
				after: summarise(indexed[kind][tier], kind, id, after, closed)
			});
			const entity: EntityImpact = { all: tierImpact('all'), high: tierImpact('high') };

			const hasData = TIERS.some(
				(tier) => entity[tier].before.matches > 0 || entity[tier].after.matches > 0
			);
			if (hasData) entries[`${kind}:${id}`] = entity;
		}

		if (Object.keys(entries).length > 0) impact[patch.id] = entries;
	});

	return impact;
}
