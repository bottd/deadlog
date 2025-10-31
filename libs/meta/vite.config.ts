import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ['../../tsconfig.base.json']
		})
	],
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
		exclude: ['src/generate-previews.test.ts', 'src/generate-previews.snapshot.test.ts']
	}
});
