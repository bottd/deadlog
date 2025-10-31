import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ['../../tsconfig.base.json']
		}),
		tailwindcss(),
		sveltekit()
	],
	server: {
		fs: {
			allow: ['../..']
		}
	},
	resolve: {
		alias: {
			// SvelteKit's $lib alias for tests - mirrors kit.alias in svelte.config.js
			$lib: path.resolve(__dirname, './src/lib')
		}
	},
	ssr: {
		noExternal: [
			'@deadlog/scraper',
			'@deadlog/db',
			'@deadlog/meta',
			'runed',
			'@lucide/svelte',
			'bits-ui',
			'svelte-toolbelt',
			'@tanstack/svelte-query',
			/^@floating-ui/,
			'nanoid',
			'mode-watcher'
		]
	},
	test: {
		expect: { requireAssertions: true },
		ui: false,
		projects: [
			{
				plugins: [
					tsconfigPaths({
						projects: ['../../tsconfig.base.json']
					})
				],
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }],
						headless: true
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: [],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				plugins: [
					tsconfigPaths({
						projects: ['../../tsconfig.base.json']
					})
				],
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					setupFiles: ['./src/lib/test/setup.ts']
				},
				resolve: {
					alias: {
						$lib: path.resolve(__dirname, './src/lib')
					}
				}
			}
		]
	}
});
