import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { getPlatformProxy, unstable_dev } from 'wrangler';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@deadlog/db/schema';
import { publishFixture } from '@deadlog/db/publication';
import { exportFixture, repositoryRoot } from '../../scripts/export-mcp-fixture';

export async function startLocalWorker(port = 0) {
	const state = await mkdtemp(resolve(tmpdir(), 'deadlog-mcp-'));
	try {
		const config = resolve(repositoryRoot, 'mcp/wrangler.toml');
		const proxy = await getPlatformProxy<{ DB: D1Database }>({
			configPath: config,
			persist: { path: resolve(state, 'v3') },
			remoteBindings: false
		});
		try {
			const ddl = await readFile(
				resolve(repositoryRoot, 'mcp/migrations/0001_patch_fixture.sql'),
				'utf8'
			);
			for (const statement of ddl.split(';').filter((sql) => sql.trim()))
				await proxy.env.DB.prepare(statement).run();
			await publishFixture(drizzle(proxy.env.DB, { schema }), await exportFixture());
		} finally {
			await proxy.dispose();
		}
		const worker = await unstable_dev(resolve(repositoryRoot, 'mcp/src/index.ts'), {
			config,
			port,
			persist: true,
			persistTo: state,
			logLevel: 'error',
			experimental: {
				disableExperimentalWarning: true,
				watch: false,
				disableDevRegistry: true
			}
		});
		return {
			worker,
			url: `http://${worker.address}:${worker.port}/mcp`,
			async stop() {
				await worker.stop();
				await rm(state, { recursive: true, force: true });
			}
		};
	} catch (error) {
		await rm(state, { recursive: true, force: true });
		throw error;
	}
}
