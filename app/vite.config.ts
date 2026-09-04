import UnoCSS from 'unocss/vite';
import { defineConfig, type Plugin } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { mogPlugin } from 'vite-plugin-mog';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';

const changelogsDir = path.resolve(import.meta.dirname, 'changelogs');

/**
 * The Mog parser reports malformed markup as a plugin warning — a dropped unsafe link,
 * an unclosed block. In a build that prints a hundred lines of chunk sizes those scroll
 * straight past while the page quietly loses content, so fail instead. Build only: in
 * dev the warning is visible next to the edit that caused it.
 */
const failOnMogDiagnostics: Plugin = {
	name: 'fail-on-mog-diagnostics',
	apply: 'build',
	onLog(level, log) {
		if (level === 'warn' && log.plugin === 'vite-plugin-mog') {
			this.error(`[mog] ${log.id ?? ''}: ${log.message}`.trim());
		}
	}
};

export default defineConfig({
	resolve: {
		tsconfigPaths: true
	},
	plugins: [
		mogPlugin({
			mode: 'svelte',
			include: [`${changelogsDir}/**/*.mg`],
			componentDir: path.resolve(import.meta.dirname, 'src/lib/components/changelog'),
			theme: { light: 'github-light', dark: 'github-dark' }
		}),
		failOnMogDiagnostics,
		UnoCSS(),
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
	ssr: {
		noExternal: [
			'@deadlog/changelog',
			'@deadlog/scraper',
			'@deadlog/db',
			'@deadlog/utils',
			'runed',
			'@lucide/svelte',
			'bits-ui',
			'svelte-toolbelt',
			'@tanstack/svelte-query',
			/^@floating-ui/,
			'nanoid',
			'svelte-sonner'
		]
	},
	test: {
		expect: { requireAssertions: true },
		ui: false,
		projects: [
			{
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
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					setupFiles: ['./src/lib/test/setup.ts']
				},
				resolve: {
					alias: {
						$lib: path.resolve(import.meta.dirname, './src/lib')
					}
				}
			}
		]
	}
});
