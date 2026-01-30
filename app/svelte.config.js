import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Use Cloudflare adapter when CLOUDFLARE env var is set, otherwise use Node adapter
const adapter =
	process.env.CLOUDFLARE === 'true'
		? adapterCloudflare({ platformProxy: {} })
		: adapterNode({ out: '../dist/app' });

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.norg'],
	preprocess: vitePreprocess(),
	kit: {
		adapter,
		prerender: {
			handleHttpError: 'warn'
		},
		alias: {
			'@deadlog/changelog': '../lib/changelog/src/index.ts',
			'@deadlog/scraper': '../lib/scraper/src/index.ts',
			'@deadlog/meta': '../lib/meta/src/index.ts',
			'@deadlog/db': '../lib/db/src/index.ts',
			'@deadlog/utils': '../lib/utils/src/index.ts',
			$changelogs: './changelogs'
		}
	},
	vitePlugin: {
		inspector: false,
		// Compile .svelte files from dependencies
		dynamicCompileOptions({ filename }) {
			// Compile Svelte files from node_modules
			if (filename?.includes('node_modules')) {
				return { runes: undefined };
			}
		}
	}
};

export default config;
