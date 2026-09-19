import { z } from 'zod';
import {
	ANALYTICS_API_BASE,
	DAY_S,
	HIGH_RANK_MIN_BADGE,
	MAX_RANGE_DAYS,
	REQUEST_TIMEOUT_MS
} from './constants';
import type {
	AllSeries,
	DailyRow,
	DailySeries,
	EntityKind,
	RankTier,
	TimeRange
} from './types';

const heroRowSchema = z.object({
	hero_id: z.number(),
	bucket: z.number(),
	wins: z.number(),
	matches: z.number(),
	matches_per_bucket: z.number()
});

const itemRowSchema = z.object({
	item_id: z.number(),
	bucket: z.number(),
	wins: z.number(),
	matches: z.number()
});

const ENDPOINTS: Record<EntityKind, string> = {
	hero: 'hero-stats',
	item: 'item-stats'
};

export const dayOf = (t: number): number => Math.floor(t / DAY_S) * DAY_S;

export function chunkRange(range: TimeRange, maxDays = MAX_RANGE_DAYS): TimeRange[] {
	const chunks: TimeRange[] = [];
	const end = dayOf(range.to) + DAY_S - 1;
	for (let from = dayOf(range.from); from <= end; from += maxDays * DAY_S) {
		chunks.push({ from, to: Math.min(from + maxDays * DAY_S - 1, end) });
	}
	return chunks;
}

async function fetchRows<T>(
	kind: EntityKind,
	tier: RankTier,
	chunk: TimeRange,
	schema: z.ZodType<T>
): Promise<T[]> {
	const params = new URLSearchParams({
		bucket: 'start_time_day',
		min_unix_timestamp: String(chunk.from),
		max_unix_timestamp: String(chunk.to)
	});
	if (tier === 'high') params.set('min_average_badge', String(HIGH_RANK_MIN_BADGE));

	const url = `${ANALYTICS_API_BASE}/${ENDPOINTS[kind]}?${params}`;
	const response = await fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}

	const result = z.array(schema).safeParse(await response.json());
	if (!result.success) {
		throw new Error(`Invalid ${ENDPOINTS[kind]} response: ${result.error.message}`);
	}
	return result.data;
}

export async function fetchSeries(
	kind: EntityKind,
	tier: RankTier,
	range: TimeRange
): Promise<DailySeries> {
	const rows = new Map<string, DailyRow>();
	const totalMatches = new Map<number, number>();

	for (const chunk of chunkRange(range)) {
		const inChunk = (day: number) => day >= chunk.from && day <= chunk.to;
		const add = (entityId: number, day: number, wins: number, matches: number) =>
			rows.set(`${entityId}:${day}`, { entityId, day, wins, matches });

		if (kind === 'hero') {
			for (const row of await fetchRows(kind, tier, chunk, heroRowSchema)) {
				if (!inChunk(row.bucket)) continue;
				add(row.hero_id, row.bucket, row.wins, row.matches);
				totalMatches.set(row.bucket, row.matches_per_bucket);
			}
		} else {
			for (const row of await fetchRows(kind, tier, chunk, itemRowSchema)) {
				if (!inChunk(row.bucket)) continue;
				add(row.item_id, row.bucket, row.wins, row.matches);
			}
		}
	}

	return {
		rows: [...rows.values()].sort((a, b) => a.day - b.day || a.entityId - b.entityId),
		totalMatches
	};
}

export async function fetchAllSeries(range: TimeRange): Promise<AllSeries> {
	const heroAll = await fetchSeries('hero', 'all', range);
	const heroHigh = await fetchSeries('hero', 'high', range);
	const itemAll = await fetchSeries('item', 'all', range);
	const itemHigh = await fetchSeries('item', 'high', range);

	return {
		hero: { all: heroAll, high: heroHigh },
		item: {
			all: { rows: itemAll.rows, totalMatches: heroAll.totalMatches },
			high: { rows: itemHigh.rows, totalMatches: heroHigh.totalMatches }
		}
	};
}
