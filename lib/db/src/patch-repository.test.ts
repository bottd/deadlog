import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createClient } from '@libsql/client';
import { drizzle as sqliteDrizzle } from 'drizzle-orm/libsql';
import { drizzle as d1Drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import { getPlatformProxy } from 'wrangler';
import { describe, expect, it } from 'vitest';
import { exportFixture, repositoryRoot } from '../../../scripts/export-mcp-fixture';
import { createD1PatchRepository } from './d1';
import { createSqlitePatchRepository } from './sqlite';
import { publishFixture } from './publication';
import { getPatch } from '@deadlog/core';
import * as schema from './schema';

describe('real SQLite/D1 publication parity', () => {
	it('round-trips both adapters, repeats publication, and scopes latest to coverage', async () => {
		const client = createClient({ url: ':memory:' });
		const proxy = await getPlatformProxy<{ DB: D1Database }>({
			configPath: resolve(repositoryRoot, 'mcp/wrangler.toml'),
			persist: false,
			remoteBindings: false
		});
		try {
			const ddl = await readFile(
				resolve(repositoryRoot, 'mcp/migrations/0001_patch_fixture.sql'),
				'utf8'
			);
			await client.executeMultiple(ddl);
			for (const statement of ddl.split(';').filter((sql) => sql.trim()))
				await proxy.env.DB.prepare(statement).run();
			const fixture = await exportFixture();
			const sqlite = sqliteDrizzle(client, { schema });
			const d1 = d1Drizzle(proxy.env.DB, { schema });
			await publishFixture(sqlite, fixture);
			await publishFixture(d1, fixture);
			await publishFixture(d1, fixture);
			const sqliteRepo = createSqlitePatchRepository(client);
			const d1Repo = createD1PatchRepository(proxy.env.DB);
			expect(await d1Repo.getPatch('162572')).toEqual(
				await sqliteRepo.getPatch('162572')
			);
			expect((await d1Repo.getLatest())?.id).toBe('162572');
			expect(await d1Repo.getPatch("' OR 1=1 --")).toBeNull();
			expect((await getPatch(d1Repo, { latest: true })).status).toBe('success');
			await d1
				.update(schema.metadata)
				.set({
					value: JSON.stringify({
						revision: fixture.patches[1].revision,
						aliases: fixture.patches[1].aliases,
						sourceUrl: 'https://forums.playdeadlock.com/threads/9999/'
					})
				})
				.where(eq(schema.metadata.key, 'mcp:patch:162572'))
				.run();
			const corrupted = await getPatch(d1Repo, { latest: true });
			expect(corrupted.status === 'error' && corrupted.error.code).toBe(
				'storage_failure'
			);
			await publishFixture(d1, fixture);
			await d1
				.update(schema.metadata)
				.set({ value: JSON.stringify({ ...fixture.dataset, ready: false }) })
				.run();
			const unavailable = await getPatch(d1Repo, { latest: true });
			expect(unavailable.status === 'error' && unavailable.error.code).toBe(
				'dataset_unavailable'
			);
		} finally {
			client.close();
			await proxy.dispose();
		}
	}, 30_000);
});
