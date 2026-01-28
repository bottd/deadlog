import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { norgPlugin } from 'vite-plugin-norg';
import tsconfigPaths from 'vite-tsconfig-paths';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';

const changelogsDir = path.resolve(__dirname, 'changelogs');

export default defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ['../../tsconfig.base.json']
		}),
		norgPlugin({
			mode: 'svelte',
			include: [`${changelogsDir}/**/*.norg`],
			arboriumConfig: {
				themes: { light: 'github-light', dark: 'github-dark' }
			}
		}),
		tailwindcss(),
		sveltekit()
	],
	server: {
		fs: {
			allow: ['../..']
		},
		watch: {
			ignored: [
				'**/.direnv/**',
				'**/node_modules/**',
				'**/.nx/**',
				'**/.svelte-kit/**',
				'**/dist/**',
				'**/build/**',
				'**/.github/**'
			],
			usePolling: true,
			interval: 1000
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib'),
			$changelogs: changelogsDir
		}
	},
	ssr: {
		noExternal: [
			'@deadlog/changelog',
			'@deadlog/scraper',
			'@deadlog/db',
			'@deadlog/meta',
			'@deadlog/utils',
			'runed',
			'@lucide/svelte',
			'bits-ui',
			'svelte-toolbelt',
			'@tanstack/svelte-query',
			/^@floating-ui/,
			'nanoid',
			'mode-watcher',
			'svelte-sonner'
		]
	},
	test: {
		expect: { requireAssertions: true },
		ui: false,
		projects: [
			{
				plugins: [tsconfigPaths({ projects: ['../../tsconfig.base.json'] })],
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }],
						headless: true
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: [],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				plugins: [tsconfigPaths({ projects: ['../../tsconfig.base.json'] })],
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
