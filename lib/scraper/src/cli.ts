import { scrapeChangelogs } from './pipeline';
import { buildDatabaseFromMog } from './buildDatabase';
import { loadEntitySnapshot, readEntitySnapshot } from './api';
import { recordEntityRenames, rewriteRenamedLinks } from './entityRenames';
import { appendFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function runPipeline(args = process.argv.slice(2)) {
	const changelogsDir = process.env.CHANGELOGS_DIR || './app/changelogs';
	const previous = await readEntitySnapshot();
	const snapshot = await loadEntitySnapshot();
	const renamed = previous ? recordEntityRenames(previous, snapshot, changelogsDir) : 0;
	const relinked = rewriteRenamedLinks(changelogsDir, snapshot);
	if (relinked > 0)
		console.log(`🔗 Rewrote renamed entity links in ${relinked} changelogs`);

	// `--db-only` rebuilds from the .mg files already on disk (pnpm build:db).
	if (!args.includes('--db-only')) {
		console.log('📝 Step 1: Scraping changelogs from forum...\n');
		const scrape = await scrapeChangelogs({
			overwrite: args.includes('--overwrite'),
			snapshot
		});
		if (args.includes('--if-changed') && !scrape.changed && renamed + relinked === 0) {
			console.log('No changelog changes; skipping the database build.');
			return { changed: false };
		}
		console.log('\n🗄️  Step 2: Building database...\n');
	}

	const result = await buildDatabaseFromMog({
		snapshot,
		outputDir: process.env.OUTPUT_DIR || './app/static',
		changelogsDir
	});

	console.log('\n✅ Build complete!');
	console.log(`   Database: ${result.path}`);
	console.log(`   Changelogs: ${result.patchCount}`);
	console.log(`   Hero refs: ${result.heroMatches}`);
	console.log(`   Item refs: ${result.itemMatches}`);
	return { changed: true, result };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	void runPipeline()
		.then(({ changed }) => {
			if (process.env.GITHUB_OUTPUT)
				appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
		})
		.catch((error) => {
			console.error('\n❌ Build failed:', error);
			process.exitCode = 1;
		});
}
