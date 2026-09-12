import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@deadlog/db': resolve(import.meta.dirname, 'src/index.ts'),
			'@deadlog/utils': resolve(import.meta.dirname, '../utils/src/index.ts')
		}
	},
	test: { environment: 'node', include: ['src/**/*.{test,spec}.{js,ts}'] }
});
