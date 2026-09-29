import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { repositoryRoot } from './export-mcp-fixture';
import { fetchProviderEvidence, normalizeDailyEvidence } from './mcp-stats-evidence';

describe('statistics capability evidence', () => {
	it('matches captured provider counts for both heroes under one daily query', async () => {
		const capture = z
			.object({
				body: z.unknown(),
				heroes: z.array(z.object({ id: z.number() })),
				normalized: z.unknown()
			})
			.parse(
				JSON.parse(
					await readFile(
						resolve(repositoryRoot, 'fixtures/mcp/provider/hero-stats-daily.json'),
						'utf8'
					)
				)
			);
		expect(
			normalizeDailyEvidence(
				capture.body,
				capture.heroes.map((hero) => hero.id),
				Date.parse('2026-09-17T00:00:00Z') / 1000,
				Date.parse('2026-09-18T00:00:00Z') / 1000
			)
		).toEqual(capture.normalized);
	});
	it('weights underlying counts and keeps absent rows distinct from zero denominators', () => {
		const day = Date.parse('2026-09-17T00:00:00Z') / 1000;
		const row = (bucket: number, wins: number, matches: number) => ({
			hero_id: 1,
			bucket,
			wins,
			losses: matches - wins,
			matches,
			matches_per_bucket: matches
		});
		const weighted = normalizeDailyEvidence(
			[row(day, 1, 2), row(day + 86400, 9, 90)],
			[1],
			day,
			day + 172800
		);
		expect(weighted.rows[0].winRate).toBe(10 / 92);
		expect(
			normalizeDailyEvidence([row(day, 0, 0)], [1], day, day + 86400).rows[0].winRate
		).toBeNull();
		expect(normalizeDailyEvidence([], [1], day, day + 86400).rows[0].games).toBeNull();
		expect(() => normalizeDailyEvidence([], [1], day + 1, day + 86400)).toThrow(
			'UTC day'
		);
	});
	it('returns an explicit provider failure without retries during synthetic outage', async () => {
		let calls = 0;
		const result = await fetchProviderEvidence(
			'https://api.deadlock-api.com/v1/analytics/hero-stats',
			async () => {
				calls++;
				throw new Error('Synthetic outage');
			}
		);
		expect(result.kind).toBe('request-failure');
		expect(result.status).toBeNull();
		expect(calls).toBe(1);
	});
});
