import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
			handleHttpError: 'warn',
			handleMissingId: 'warn'
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
		dynamicCompileOptions({ filename }) {
			if (filename?.includes('node_modules')) {
				return { runes: undefined };
			}
		}
	}
};

export default config;
