import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const adapter =
	process.env.CLOUDFLARE === 'true'
		? adapterCloudflare({ platformProxy: {} })
		: adapterNode({ out: '../dist/app' });

// Mog rewrites bare document references to `.html`; entity targets are SvelteKit routes.
/** @type {import('svelte/compiler').PreprocessorGroup} */
const preserveMogAppRoutes = {
	name: 'preserve-mog-app-routes',
	markup({ content, filename }) {
		if (!filename || !/\.mg(?:$|\?)/.test(filename)) return;
		return {
			code: content.replace(/href=\\"(\/(?:hero|item)\/[a-z0-9-]+)\.html/g, 'href=\\"$1')
		};
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mg'],
	preprocess: [preserveMogAppRoutes, vitePreprocess()],
	kit: {
		adapter,
		prerender: {
			handleHttpError: 'fail',
			handleMissingId: 'warn'
		},
		alias: {
			'@deadlog/changelog': '../lib/changelog/src/index.ts',
			'@deadlog/scraper': '../lib/scraper/src/index.ts',
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
