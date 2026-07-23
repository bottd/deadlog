import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@deadlog/changelog': resolve(__dirname, '../changelog/src/index.ts'),
			'@deadlog/db': resolve(__dirname, '../db/src/index.ts'),
			'@deadlog/scraper': resolve(__dirname, '../scraper/src/index.ts'),
			'@deadlog/utils': resolve(__dirname, '../utils/src/index.ts')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/generate-previews.ts'),
			formats: ['es'],
			fileName: 'generate-previews'
		},
		rollupOptions: {
			external: [/^node:/, /^@deadlog\//]
		},
		target: 'node20',
		ssr: true
	},
	test: {
		globals: true,
		environment: 'node',
		include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
		exclude: ['src/generate-previews.test.ts', 'src/generate-previews.snapshot.test.ts'],
		passWithNoTests: true
	}
});
