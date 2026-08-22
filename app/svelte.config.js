import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const adapter =
	process.env.CLOUDFLARE === 'true'
		? adapterCloudflare({ config: 'wrangler.adapter.toml', platformProxy: {} })
		: adapterNode({ out: '../dist/app' });

/** @param {string} tag @param {string} name @param {string} value */
function addHtmlAttribute(tag, name, value) {
	if (new RegExp(`\\s${name}=`, 'i').test(tag)) return tag;
	const closing = tag.endsWith('/>') ? '/>' : '>';
	return `${tag.slice(0, -closing.length)} ${name}="${value}"${closing}`;
}

/** @param {string} tag */
function mogBlockKind(tag) {
	const match = tag.match(/\bclass=(?:"([^"]*)"|'([^']*)')/i);
	const classes = (match?.[1] ?? match?.[2] ?? '').split(/\s+/);
	if (classes.includes('ability')) return 'ability';
	if (classes.includes('hero') || classes.includes('item')) return 'entity';
}

/** @param {string} html @param {{ seenTopLevelImage: boolean }} state */
function transformMogHtml(html, state) {
	/** @type {Array<'entity' | 'ability' | undefined>} */
	const blocks = [];

	return html
		.replace(/href="(\/(?:hero|item)\/[a-z0-9-]+)\.html/g, 'href="$1')
		.replace(/<\/?([a-z][\w:-]*)\b[^>]*>/gi, (tag, rawName) => {
			const name = rawName.toLowerCase();
			const closing = tag.startsWith('</');

			if (name === 'div') {
				if (closing) blocks.pop();
				else blocks.push(mogBlockKind(tag));
				return tag;
			}

			const block = blocks.findLast((entry) => entry !== undefined);
			if (name === 'h1') {
				const heading = tag.replace(/^<(\/?)h1\b/i, '<$1h2');
				return closing ? heading : addHtmlAttribute(heading, 'data-mog-section', '');
			}
			if (name === 'h2' && block === 'entity') {
				return tag.replace(/^<(\/?)h2\b/i, '<$1h3');
			}
			if (name === 'h3' && block === 'ability') {
				return tag.replace(/^<(\/?)h3\b/i, '<$1h4');
			}
			if (name !== 'img' || closing) return tag;

			let image = addHtmlAttribute(tag, 'decoding', 'async');
			if (block === 'ability') {
				image = addHtmlAttribute(image, 'width', '24');
				image = addHtmlAttribute(image, 'height', '24');
				return addHtmlAttribute(image, 'loading', 'lazy');
			}
			if (block === 'entity') {
				image = addHtmlAttribute(image, 'width', '40');
				image = addHtmlAttribute(image, 'height', '40');
				return addHtmlAttribute(image, 'loading', 'lazy');
			}

			const loading = state.seenTopLevelImage ? 'lazy' : 'eager';
			state.seenTopLevelImage = true;
			return addHtmlAttribute(image, 'loading', loading);
		});
}

// Mog emits serialized HTML fragments. Normalize app routes and enrich the markup
// before Svelte compiles it, so the SSR response and hydrated page stay identical.
/** @type {import('svelte/compiler').PreprocessorGroup} */
const transformMogOutput = {
	name: 'transform-mog-output',
	markup({ content, filename }) {
		if (!filename || !/\.mg(?:$|\?)/.test(filename)) return;
		const state = { seenTopLevelImage: false };
		return {
			code: content.replace(/\{@html ("(?:\\.|[^"\\])*")\}/g, (_, serialized) => {
				const html = transformMogHtml(JSON.parse(serialized), state);
				return `{@html ${JSON.stringify(html)}}`;
			})
		};
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mg'],
	preprocess: [transformMogOutput, vitePreprocess()],
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
