import { readFile, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { z } from 'zod';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPlatformProxy } from 'wrangler';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@deadlog/db/schema';
import { publishFixture } from '@deadlog/db/publication';
import { PatchRecordSchema, PublicationSchema } from '@deadlog/contracts';
import { repositoryRoot } from './export-mcp-fixture';
import { datasetSql, fixtureSql, sqlString, parseD1Output } from './mcp-publication-sql';

const run = promisify(execFile);
async function readFixture() {
	return PublicationSchema.parse(
		JSON.parse(
			await readFile(resolve(repositoryRoot, 'mcp/.generated/fixture.json'), 'utf8')
		)
	);
}

export async function publishLocalFixture() {
	const fixture = await readFixture();
	const proxy = await getPlatformProxy<{ DB: D1Database }>({
		configPath: resolve(repositoryRoot, 'mcp/wrangler.toml'),
		persist: { path: resolve(repositoryRoot, 'mcp/.wrangler/state/v3') },
		remoteBindings: false
	});
	try {
		const dataset = await publishFixture(drizzle(proxy.env.DB, { schema }), fixture);
		console.log(`Verified local dataset ${dataset.revision}`);
	} finally {
		await proxy.dispose();
	}
}

export async function publishStagingFixture() {
	const fixture = await readFixture();
	fixture.dataset.publishedAt = new Date().toISOString();
	const path = resolve(repositoryRoot, 'mcp/.generated/staging-fixture.sql');
	await writeFile(path, fixtureSql(fixture));
	const execute = async (args: string[]) => {
		const result = await run(
			'pnpm',
			[
				'exec',
				'wrangler',
				'd1',
				'execute',
				'DB',
				'--remote',
				'--env',
				'staging',
				'--config',
				'mcp/wrangler.toml',
				'--json',
				...args
			],
			{ cwd: repositoryRoot, maxBuffer: 2 * 1024 * 1024 }
		);
		return parseD1Output(result.stdout);
	};
	await execute(['--file', path]);
	const ids = fixture.dataset.patchIds.map(sqlString).join(',');
	const response = await execute([
		'--command',
		`SELECT c.id,c.title,c.slug,c.source_url AS sourceUrl,c.pub_date AS publishedAt,c.author,c.content_text AS text,m.value AS extra FROM changelogs c JOIN metadata m ON m.key='mcp:patch:'||c.id WHERE c.id IN (${ids}) ORDER BY c.id`
	]);
	const records = response
		.flatMap((part) => part.results)
		.map((row) => {
			const { extra, ...fields } = z
				.object({ extra: z.string() })
				.passthrough()
				.parse(row);
			const metadata = PatchRecordSchema.pick({ revision: true, aliases: true }).parse(
				JSON.parse(extra)
			);
			return PatchRecordSchema.parse({ ...fields, ...metadata });
		});
	if (JSON.stringify(records) !== JSON.stringify(fixture.patches))
		throw new Error('Staging readback verification failed; dataset remains unavailable');
	await execute(['--command', datasetSql(fixture, true)]);
	console.log(`Verified and activated staging dataset ${fixture.dataset.revision}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const args = process.argv.slice(2);
	if (!args.length || JSON.stringify(args) === JSON.stringify(['--target', 'local']))
		await publishLocalFixture();
	else if (JSON.stringify(args) === JSON.stringify(['--target', 'staging']))
		await publishStagingFixture();
	else
		throw new Error(
			'Select exactly --target local or --target staging. Production publication is not supported by M0.'
		);
}
