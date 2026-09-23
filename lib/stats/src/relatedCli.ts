import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getLibsqlDb } from '@deadlog/db';
import { fetchAbilityOrder, fetchBuyerSeries, fetchSeries } from './fetchSeries';
import { readRelatedPatches, runRelatedItems } from './runRelatedItems';

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

const args = process.argv.slice(2);
const unknown = args.filter((arg) => arg !== '--rebuild' && !arg.startsWith('--patch='));
if (unknown.length > 0) {
	console.error(`Unknown argument ${unknown[0]}. Use --patch=<patch id> or --rebuild.`);
	process.exit(1);
}

try {
	await runRelatedItems({
		changelogsDir: process.env.CHANGELOGS_DIR ?? defaultChangelogsDir,
		now: Math.floor(Date.now() / 1000),
		rebuild: args.includes('--rebuild'),
		patchId: args.find((arg) => arg.startsWith('--patch='))?.slice('--patch='.length),
		loadPatches: () => readRelatedPatches(getLibsqlDb()),
		fetchHeroes: async (range) => (await fetchSeries('hero', 'all', range)).rows,
		fetchBuyers: fetchBuyerSeries,
		fetchAbilityOrder
	});
} catch (error) {
	console.error(error);
	process.exit(1);
}
