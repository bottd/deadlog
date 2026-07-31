import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@deadlog/changelog': resolve(__dirname, '../changelog/src/index.ts'),
			'@deadlog/db': resolve(__dirname, '../db/src/index.ts'),
			'@deadlog/utils': resolve(__dirname, '../utils/src/index.ts')
		}
	},
	test: {
		globals: true,
		environment: 'node',
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
