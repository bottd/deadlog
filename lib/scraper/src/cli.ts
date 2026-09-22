import { scrapeChangelogs } from './pipeline';
import { buildDatabaseFromMog } from './buildDatabase';
import { fetchClientVersion, loadEntitySnapshot } from './api';
import { appendFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function runPipeline(args = process.argv.slice(2)) {
	const snapshot = await loadEntitySnapshot();

	// `--db-only` rebuilds from the .mg files already on disk (pnpm build:db).
	if (!args.includes('--db-only')) {
		console.log('📝 Step 1: Scraping changelogs from forum...\n');
		const clientVersion = await fetchClientVersion().catch(() => null);
		const scrape = await scrapeChangelogs({
			overwrite: args.includes('--overwrite'),
			snapshot,
			...(clientVersion !== null && {
				capture: { clientVersion, capturedAt: new Date().toISOString() }
			})
		});
		if (args.includes('--if-changed') && !scrape.changed) {
			console.log('No changelog changes; skipping the database build.');
			return { changed: false };
		}
		console.log('\n🗄️  Step 2: Building database...\n');
	}

	const result = await buildDatabaseFromMog({
		snapshot,
		outputDir: process.env.OUTPUT_DIR || './app/static',
		changelogsDir: process.env.CHANGELOGS_DIR || './app/changelogs'
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
