import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getLibsqlDb } from '@deadlog/db';
import { fetchAllSeries } from './fetchSeries';
import { readPatches } from './readPatches';
import { run } from './run';

const defaultChangelogsDir = fileURLToPath(
	new URL('../../../app/changelogs', import.meta.url)
);
const defaultDbPath = fileURLToPath(
	new URL('../../../app/static/deadlog.db', import.meta.url)
);

process.env.DATABASE_URL ??= `file:${defaultDbPath}`;

const dbFile = process.env.DATABASE_URL.startsWith('file:')
	? process.env.DATABASE_URL.slice('file:'.length)
	: null;
if (dbFile && !existsSync(dbFile)) {
	console.error(`Database not found at ${dbFile}. Run pnpm run build:db first.`);
	process.exit(1);
}

try {
	await run({
		changelogsDir: process.env.CHANGELOGS_DIR ?? defaultChangelogsDir,
		rebuild: process.argv.includes('--rebuild'),
		now: Math.floor(Date.now() / 1000),
		loadPatches: () => readPatches(getLibsqlDb()),
		fetchAll: fetchAllSeries
	});
} catch (error) {
	console.error(error);
	process.exit(1);
}
