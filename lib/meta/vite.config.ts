import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@deadlog/changelog': resolve(import.meta.dirname, '../changelog/src/index.ts'),
			'@deadlog/db': resolve(import.meta.dirname, '../db/src/index.ts'),
			'@deadlog/scraper': resolve(import.meta.dirname, '../scraper/src/index.ts'),
			'@deadlog/utils': resolve(import.meta.dirname, '../utils/src/index.ts')
		}
	},
	build: {
		lib: {
			entry: resolve(import.meta.dirname, 'src/generate-previews.ts'),
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
		passWithNoTests: true
	}
});
