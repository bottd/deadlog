import { buildDatabase } from './builder';

async function main() {
	const outputDir = process.env.OUTPUT_DIR || './dist/data';

	console.log('🗄️  Building static database...\n');

	try {
		const result = await buildDatabase({ outputDir });

		console.log('\n✅ Database built successfully!');
		console.log(`   Path: ${result.path}`);
		console.log(`   Patches: ${result.patchCount}`);
	} catch (error) {
		console.error('\n❌ Database build failed:', error);
		process.exit(1);
	}
}

main();
