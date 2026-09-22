import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { parse } from 'svelte/compiler';

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

/** @param {string} html @param {{ seenTopLevelImage: boolean, blocks: Array<'entity' | 'ability' | undefined> }} state */
function transformMogHtml(html, state) {
	const { blocks } = state;

	return (
		html
			// The Mog parser suffixes every internal link with `.html`; these are SvelteKit
			// routes, not files. Keep this alternation in step with the routes the notes link.
			.replace(/href="(\/(?:hero|item|ability)\/[a-z0-9-]+)\.html/g, 'href="$1')
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
			})
	);
}

// Mog emits serialized HTML fragments. Normalize app routes and enrich the markup
// before Svelte compiles it, so the SSR response and hydrated page stay identical.
/** @type {import('svelte/compiler').PreprocessorGroup} */
const transformMogOutput = {
	name: 'transform-mog-output',
	markup({ content, filename }) {
		if (!filename || !/\.mg(?:$|\?)/.test(filename)) return;
		/** @type {{ seenTopLevelImage: boolean, blocks: Array<'entity' | 'ability' | undefined> }} */
		const state = { seenTopLevelImage: false, blocks: [] };
		/** @type {Array<{ start: number, end: number, code: string }>} */
		const replacements = [];
		// Embeds lift their ancestors into real Svelte elements. Walk both those and
		// raw HTML fragments so heading levels and image sizes keep their entity scope.
		/** @param {import('svelte/compiler').AST.Fragment['nodes']} nodes */
		function visit(nodes) {
			for (const node of nodes) {
				if (
					node.type === 'HtmlTag' &&
					node.expression.type === 'Literal' &&
					typeof node.expression.value === 'string'
				) {
					const html = transformMogHtml(node.expression.value, state);
					replacements.push({
						start: node.start,
						end: node.end,
						code: `{@html ${JSON.stringify(html).replace(/</g, '\\u003c')}}`
					});
				} else if (node.type === 'RegularElement') {
					if (node.name === 'div') {
						const attr = node.attributes.find(
							(attr) => attr.type === 'Attribute' && attr.name === 'class'
						);
						const value = attr?.type === 'Attribute' ? attr.value : undefined;
						const classes =
							value &&
							typeof value === 'object' &&
							!Array.isArray(value) &&
							value.expression.type === 'Literal'
								? String(value.expression.value)
								: '';
						state.blocks.push(mogBlockKind(`<div class="${classes}">`));
					}
					visit(node.fragment.nodes);
					if (node.name === 'div') state.blocks.pop();
				}
			}
		}
		visit(parse(content, { modern: true }).fragment.nodes);
		for (const { start, end, code } of replacements.reverse()) {
			content = content.slice(0, start) + code + content.slice(end);
		}
		return { code: content };
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
			'@deadlog/db': '../lib/db/src/index.ts',
			'@deadlog/stats': '../lib/stats/src/index.ts',
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
