import { z } from 'zod';
import {
	ANALYTICS_API_BASE,
	DAY_S,
	HIGH_RANK_MIN_BADGE,
	MAX_ATTEMPTS,
	MAX_RANGE_DAYS,
	METHODS,
	METHOD_VERSION,
	POPULATION,
	REQUEST_TIMEOUT_MS,
	dayOf
} from './constants';
import type {
	AbilityOrderRow,
	AllSeries,
	DailyRow,
	DailyTotals,
	EntityKind,
	RankTier,
	TimeRange
} from './types';

interface FetchedRow extends DailyRow {
	total?: number;
}

const SOURCES: Record<EntityKind, { endpoint: string; schema: z.ZodType<FetchedRow> }> = {
	hero: {
		endpoint: 'hero-stats',
		schema: z
			.object({
				hero_id: z.number(),
				bucket: z.number(),
				wins: z.number(),
				matches: z.number(),
				matches_per_bucket: z.number()
			})
			.transform((row) => ({
				entityId: row.hero_id,
				day: row.bucket,
				wins: row.wins,
				matches: row.matches,
				total: row.matches_per_bucket
			}))
	},
	item: {
		endpoint: 'item-stats',
		schema: z
			.object({
				item_id: z.number(),
				bucket: z.number(),
				wins: z.number(),
				matches: z.number(),
				avg_buy_time_s: z.number().optional()
			})
			.transform((row) => ({
				entityId: row.item_id,
				day: row.bucket,
				wins: row.wins,
				matches: row.matches,
				...(row.avg_buy_time_s !== undefined && { buyTime: row.avg_buy_time_s })
			}))
	}
};

const dayEnd = (t: number): number => dayOf(t) + DAY_S - 1;

export function chunkRange(range: TimeRange): TimeRange[] {
	const chunks: TimeRange[] = [];
	const span = MAX_RANGE_DAYS * DAY_S;
	const end = dayEnd(range.to);
	for (let from = dayOf(range.from); from <= end; from += span) {
		chunks.push({ from, to: Math.min(from + span - 1, end) });
	}
	return chunks;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function request(url: string): Promise<Response> {
	for (let attempt = 1; ; attempt++) {
		const response = await fetch(url, {
			signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
		});
		const retryable = response.status === 429 || response.status >= 500;
		if (response.ok || !retryable || attempt === MAX_ATTEMPTS) return response;
		const retryAfter = Number(response.headers.get('retry-after'));
		await sleep(Math.min(retryAfter > 0 ? retryAfter : 2 * attempt, 30) * retryDelayMs);
	}
}

let retryDelayMs = 1000;
export function setRetryDelayForTests(ms: number): void {
	retryDelayMs = ms;
}

async function fetchRows(
	kind: EntityKind,
	tier: RankTier,
	chunk: TimeRange,
	includeItemId?: number
): Promise<FetchedRow[]> {
	const { endpoint, schema } = SOURCES[kind];
	const params = new URLSearchParams({
		bucket: 'start_time_day',
		min_unix_timestamp: String(chunk.from),
		max_unix_timestamp: String(chunk.to),
		...POPULATION
	});
	if (kind === 'item') {
		params.set('min_matches', String(METHODS[METHOD_VERSION].itemMinMatches));
	}
	if (tier === 'high') params.set('min_average_badge', String(HIGH_RANK_MIN_BADGE));
	if (includeItemId !== undefined) params.set('include_item_ids', String(includeItemId));

	return getJson(endpoint, params, z.array(schema));
}

async function getJson<T extends z.ZodType>(
	endpoint: string,
	params: URLSearchParams,
	schema: T
): Promise<z.output<T>> {
	const url = `${ANALYTICS_API_BASE}/${endpoint}?${params}`;
	const response = await request(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}
	const result = schema.safeParse(await response.json());
	if (!result.success) {
		throw new Error(`Invalid ${endpoint} response: ${result.error.message}`);
	}
	return result.data;
}

export async function fetchSeries(
	kind: EntityKind,
	tier: RankTier,
	range: TimeRange
): Promise<{ rows: DailyRow[]; totals: DailyTotals }> {
	const rows: DailyRow[] = [];
	const totals: DailyTotals = new Map();

	for (const chunk of chunkRange(range)) {
		for (const { total, ...row } of await fetchRows(kind, tier, chunk)) {
			if (row.day < chunk.from || row.day > chunk.to) continue;
			rows.push(row);
			if (total !== undefined) totals.set(row.day, total);
		}
	}

	return { rows, totals };
}

export async function fetchBuyerSeries(
	itemId: number,
	range: TimeRange
): Promise<DailyRow[]> {
	const rows: DailyRow[] = [];
	for (const chunk of chunkRange(range)) {
		for (const row of await fetchRows('hero', 'all', chunk, itemId)) {
			if (row.day < chunk.from || row.day > chunk.to) continue;
			rows.push({
				entityId: row.entityId,
				day: row.day,
				wins: row.wins,
				matches: row.matches
			});
		}
	}
	return rows;
}

export async function fetchAllSeries(range: TimeRange): Promise<AllSeries> {
	const heroAll = await fetchSeries('hero', 'all', range);
	const heroHigh = await fetchSeries('hero', 'high', range);
	const itemAll = await fetchSeries('item', 'all', range);
	const itemHigh = await fetchSeries('item', 'high', range);

	return {
		rows: {
			hero: { all: heroAll.rows, high: heroHigh.rows },
			item: { all: itemAll.rows, high: itemHigh.rows }
		},
		totals: { all: heroAll.totals, high: heroHigh.totals }
	};
}

const abilityOrderSchema = z.array(
	z.object({ abilities: z.array(z.number()), matches: z.number() })
);

export function fetchAbilityOrder(
	heroId: number,
	range: TimeRange
): Promise<AbilityOrderRow[]> {
	const params = new URLSearchParams({
		hero_id: String(heroId),
		min_unix_timestamp: String(dayOf(range.from)),
		max_unix_timestamp: String(dayEnd(range.to)),
		min_matches: '1',
		...POPULATION
	});
	return getJson('ability-order-stats', params, abilityOrderSchema);
}
