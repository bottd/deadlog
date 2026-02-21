import { scrapeChangelogs } from './pipeline';
import { buildDatabaseFromNorg } from './buildDatabase';

async function main() {
	const args = process.argv.slice(2);
	const overwrite = args.includes('--overwrite');

	const outputDir = process.env.OUTPUT_DIR || './app/static';
	const changelogsDir = process.env.CHANGELOGS_DIR || './app/changelogs';

	// Step 1: Scrape forum and write .norg files
	console.log('📝 Step 1: Scraping changelogs from forum...\n');
	await scrapeChangelogs({ overwrite });

	// Step 2: Build database from .norg files
	console.log('\n🗄️  Step 2: Building database...\n');

	const result = await buildDatabaseFromNorg({
		outputDir,
		changelogsDir
	});

	console.log('\n✅ Build complete!');
	console.log(`   Database: ${result.path}`);
	console.log(`   Changelogs: ${result.patchCount}`);
	console.log(`   Hero refs: ${result.heroMatches}`);
	console.log(`   Item refs: ${result.itemMatches}`);
}

main().catch((err) => {
	console.error('\n❌ Build failed:', err);
	process.exit(1);
});
