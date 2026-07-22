import { buildDatabaseFromNorg } from './buildDatabase';

async function main() {
	const result = await buildDatabaseFromNorg({
		outputDir: process.env.OUTPUT_DIR || './app/static',
		changelogsDir: process.env.CHANGELOGS_DIR || './app/changelogs'
	});

	console.log(`Database: ${result.path}`);
	console.log(`Changelogs: ${result.patchCount}`);
	console.log(`Hero refs: ${result.heroMatches}`);
	console.log(`Item refs: ${result.itemMatches}`);
}

main().catch((error) => {
	console.error('Database build failed:', error);
	process.exitCode = 1;
});
