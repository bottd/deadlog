import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@deadlog/changelog': resolve(import.meta.dirname, '../changelog/src/index.ts'),
			'@deadlog/db': resolve(import.meta.dirname, '../db/src/index.ts'),
			'@deadlog/utils': resolve(import.meta.dirname, '../utils/src/index.ts')
		}
	},
	test: {
		globals: true,
		environment: 'node',
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
