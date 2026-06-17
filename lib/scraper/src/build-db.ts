/**
 * Rebuilds the SQLite database from the committed `.norg` changelog files
 * (no forum scrape). Hero/item metadata is fetched fresh from the Deadlock API.
 *
 *   OUTPUT_DIR=./app/static tsx --tsconfig=tsconfig.base.json lib/scraper/src/build-db.ts
 */
import { buildDatabaseFromNorg } from './buildDatabase';

const outputDir = process.env.OUTPUT_DIR || './app/static';
const changelogsDir = process.env.CHANGELOGS_DIR || './app/changelogs';

buildDatabaseFromNorg({ outputDir, changelogsDir })
	.then((result) => {
		console.log('\n✅ Database rebuilt from .norg files');
		console.log(`   ${result.path} — ${result.patchCount} patches`);
	})
	.catch((err) => {
		console.error('\n❌ Build failed:', err);
		process.exit(1);
	});
