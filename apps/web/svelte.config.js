import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Use Cloudflare adapter when CLOUDFLARE env var is set, otherwise use Node adapter
const adapter =
	process.env.CLOUDFLARE === 'true'
		? adapterCloudflare({ platformProxy: {} })
		: adapterNode({ out: '../../dist/apps/web' });

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter,
		alias: {
			'@deadlog/scraper': '../../libs/scraper/src/index.ts',
			'@deadlog/meta': '../../libs/meta/src/index.ts',
			'@deadlog/db': '../../libs/db/src/index.ts',
			'@deadlog/utils': '../../libs/utils/src/index.ts'
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
