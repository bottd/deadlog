import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { z } from 'zod';
import { repositoryRoot } from './export-mcp-fixture';
import {
	fetchProviderEvidence,
	HeroDailyRowsSchema,
	normalizeDailyEvidence
} from './mcp-stats-evidence';

const response = await fetch('https://api.deadlock-api.com/openapi.json', {
	signal: AbortSignal.timeout(6000)
});
if (!response.ok)
	throw new Error(`Provider documentation unavailable: HTTP ${response.status}`);
const document = z
	.object({
		paths: z.record(z.string(), z.unknown()),
		components: z.object({ schemas: z.record(z.string(), z.unknown()) })
	})
	.parse(await response.json());
const endpoint = '/v1/analytics/hero-stats';
const operation = document.paths[endpoint];
console.log(
	JSON.stringify(
		{ endpoint, operation, rowSchema: document.components.schemas.AnalyticsHeroStats },
		null,
		2
	)
);

if (process.argv.includes('--capture')) {
	const directory = resolve(repositoryRoot, 'fixtures/mcp/provider');
	await mkdir(directory, { recursive: true });
	await writeFile(
		resolve(directory, 'hero-stats-schema.json'),
		JSON.stringify(
			{
				retrievedAt: new Date().toISOString(),
				sourceUrl: 'https://api.deadlock-api.com/openapi.json',
				operation,
				rowSchema: document.components.schemas.AnalyticsHeroStats
			},
			null,
			'\t'
		) + '\n'
	);
	const assets = await fetch('https://api.deadlock-api.com/v1/assets/heroes', {
		signal: AbortSignal.timeout(6000)
	});
	if (!assets.ok) throw new Error(`Hero identity lookup failed: HTTP ${assets.status}`);
	const heroes = z
		.array(z.object({ id: z.number(), name: z.string() }))
		.parse(await assets.json())
		.filter((hero) => ['Haze', 'Wraith'].includes(hero.name));
	if (heroes.length !== 2) throw new Error('Could not verify both hero IDs');
	const start = Date.parse('2026-09-17T00:00:00Z') / 1000;
	const end = Date.parse('2026-09-18T00:00:00Z') / 1000;
	const common = `${endpoint}?bucket=start_time_day&game_mode=normal&match_mode=ranked%2Cunranked`;
	const url = `https://api.deadlock-api.com${common}&min_unix_timestamp=${start}&max_unix_timestamp=${end - 1}`;
	const comparison = await fetchProviderEvidence(url);
	if (comparison.status !== 200)
		throw new Error(`Comparison probe failed: ${comparison.status}`);
	const rows = HeroDailyRowsSchema.parse(comparison.body);
	const normalized = normalizeDailyEvidence(
		rows,
		heroes.map((hero) => hero.id),
		start,
		end
	);
	await writeFile(
		resolve(directory, 'hero-stats-daily.json'),
		JSON.stringify(
			{
				...comparison,
				body: rows,
				heroes,
				requestedPeriod: normalized.period,
				normalized
			},
			null,
			'\t'
		) + '\n'
	);
	const empty = await fetchProviderEvidence(
		`https://api.deadlock-api.com${common}&min_unix_timestamp=1893456000&max_unix_timestamp=1893542399`
	);
	await writeFile(
		resolve(directory, 'no-observations.json'),
		JSON.stringify(empty, null, '\t') + '\n'
	);
	const unsupported = await fetchProviderEvidence(
		`https://api.deadlock-api.com${endpoint}?game_mode=street_brawl&min_average_badge=50`
	);
	await writeFile(
		resolve(directory, 'unsupported-filter.json'),
		JSON.stringify(unsupported, null, '\t') + '\n'
	);
	console.log(
		JSON.stringify(
			{
				heroes,
				normalized,
				noObservationsStatus: empty.status,
				unsupportedStatus: unsupported.status
			},
			null,
			2
		)
	);
}
