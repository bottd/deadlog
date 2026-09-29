import { z } from 'zod';

export const HeroDailyRowSchema = z
	.object({
		hero_id: z.number().int().nonnegative().safe(),
		bucket: z.number().int().nonnegative().safe(),
		wins: z.number().int().nonnegative().safe(),
		losses: z.number().int().nonnegative().safe(),
		matches: z.number().int().nonnegative().safe(),
		matches_per_bucket: z.number().int().nonnegative().safe()
	})
	.refine((row) => row.wins + row.losses === row.matches, 'Counts disagree');
export const HeroDailyRowsSchema = z.array(HeroDailyRowSchema).max(10_000);
export type HeroDailyRow = z.infer<typeof HeroDailyRowSchema>;

export function normalizeDailyEvidence(
	input: unknown,
	heroIds: number[],
	start: number,
	end: number
) {
	if (start % 86400 || end % 86400 || end <= start || end - start > 90 * 86400)
		throw new Error('Only bounded UTC day windows are verified');
	if (!heroIds.length || heroIds.length > 3 || new Set(heroIds).size !== heroIds.length)
		throw new Error('Select one to three unique heroes');
	const rows = HeroDailyRowsSchema.parse(input);
	const keys = new Set<string>();
	for (const row of rows) {
		const key = `${row.hero_id}:${row.bucket}`;
		if (row.bucket % 86400 || keys.has(key))
			throw new Error('Invalid or duplicate daily buckets');
		keys.add(key);
	}
	const selected = rows.filter((row) => row.bucket >= start && row.bucket < end);
	return {
		period: {
			start: new Date(start * 1000).toISOString(),
			end: new Date(end * 1000).toISOString(),
			interval: '[start,end)'
		},
		observationUnit: 'hero-player appearances in provider-tracked matches',
		excludedBucketDays: [
			...new Set(
				rows
					.filter((row) => row.bucket < start || row.bucket >= end)
					.map((row) => row.bucket)
			)
		],
		rows: heroIds.map((heroId) => {
			const observations = selected.filter((row) => row.hero_id === heroId);
			if (!observations.length)
				return {
					heroId,
					games: null,
					wins: null,
					winRate: null,
					availability: 'unavailable'
				};
			const games = observations.reduce((sum, row) => sum + row.matches, 0);
			const wins = observations.reduce((sum, row) => sum + row.wins, 0);
			if (!Number.isSafeInteger(games) || !Number.isSafeInteger(wins))
				throw new Error('Aggregate counts exceed safe integer precision');
			return {
				heroId,
				games,
				wins,
				winRate: games ? wins / games : null,
				availability: games ? 'observed' : 'no_observations'
			};
		})
	};
}

export async function fetchProviderEvidence(url: string, fetcher: typeof fetch = fetch) {
	const started = Date.now();
	try {
		const response = await fetcher(url, { signal: AbortSignal.timeout(6000) });
		const body = response.ok
			? ((await response.json()) as unknown)
			: (await response.text()).slice(0, 2048);
		return {
			kind: 'live-response' as const,
			sourceUrl: url,
			retrievedAt: new Date().toISOString(),
			status: response.status,
			durationMs: Date.now() - started,
			retryAfter: response.headers.get('retry-after'),
			sourceUpdatedAt: null,
			coveredThrough: null,
			body
		};
	} catch {
		return {
			kind: 'request-failure' as const,
			sourceUrl: url,
			retrievedAt: new Date().toISOString(),
			status: null,
			durationMs: Date.now() - started,
			retryAfter: null,
			sourceUpdatedAt: null,
			coveredThrough: null,
			body: null
		};
	}
}
