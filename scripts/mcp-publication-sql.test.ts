import { createClient } from '@libsql/client';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { expect, it } from 'vitest';
import { exportFixture, repositoryRoot } from './export-mcp-fixture';
import { fixtureSql, parseD1Output } from './mcp-publication-sql';

it('parses Wrangler upload progress without mistaking it for JSON results', () => {
	expect(
		parseD1Output('├ Checking if file needs uploading\n[{"success":true,"results":[]}]\n')
	).toEqual([{ success: true, results: [] }]);
	expect(() => parseD1Output('[{"success":false,"results":[]}]')).toThrow();
});

it('escapes source text in staging SQL and leaves activation to verified readback', async () => {
	const fixture = await exportFixture();
	fixture.patches[0].title = "Synthetic '); DROP TABLE changelogs; --";
	const client = createClient({ url: ':memory:' });
	try {
		await client.executeMultiple(
			await readFile(
				resolve(repositoryRoot, 'mcp/migrations/0001_patch_fixture.sql'),
				'utf8'
			)
		);
		await client.executeMultiple(fixtureSql(fixture));
		const rows = await client.execute('SELECT title FROM changelogs ORDER BY id');
		expect(rows.rows).toHaveLength(2);
		expect(rows.rows[0].title).toBe(fixture.patches[0].title);
		const metadata = await client.execute(
			"SELECT value FROM metadata WHERE key='mcp:dataset'"
		);
		expect(String(metadata.rows[0].value)).toContain('"ready":false');
	} finally {
		client.close();
	}
});
