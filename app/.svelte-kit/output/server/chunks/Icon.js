import { t as index_server_exports } from './index-server.js';
import { x as noop } from './shared.js';
import './server.js';
import './internal.js';
import './exports.js';
import {
	Gt as to_array,
	Ht as noop$1,
	Vt as fallback,
	a as derived,
	o as element,
	r as attributes,
	s as ensure_array_like,
	x as getContext
} from './server2.js';
import './internal2.js';
import '@sveltejs/kit/internal';
import '@sveltejs/kit/internal/server';
var PRELOAD_PRIORITIES = {
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1,
	false: -1
};
(({ ...PRELOAD_PRIORITIES }), PRELOAD_PRIORITIES.hover);
var updated_listener = { v: noop };
var updated;
var is_legacy =
	noop$1.toString().includes('$$') || /function \w+\(\) \{\}/.test(noop$1.toString());
var placeholder_url = 'a:';
if (is_legacy) {
	new URL(placeholder_url);
	updated = { current: false };
} else {
	new (class Page {
		data = {};
		form = null;
		error = null;
		params = {};
		route = { id: null };
		state = {};
		status = -1;
		url = new URL(placeholder_url);
	})();
	new (class Navigating {
		current = null;
	})();
	updated = new (class Updated {
		current = false;
	})();
	updated_listener.v = () => (updated.current = true);
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/client/client.js
/** @import { RemoteFunctionDataNode, ServerNodesResponse, ServerRedirectNode } from 'types' */
/** @import { CacheEntry } from './remote-functions/cache.svelte.js' */
/** @import { Query } from './remote-functions/query/instance.svelte.js' */
/** @import { LiveQuery } from './remote-functions/query-live/instance.svelte.js' */
var { onMount, tick } = index_server_exports;
/**
 * Allows you to navigate programmatically to a given route, with options such as keeping the current element focused.
 * Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified `url`.
 *
 * For external URLs, use `window.location = url` instead of calling `goto(url)`.
 *
 * @param {string | URL} url Where to navigate to. Note that if you've set [`config.kit.paths.base`](https://svelte.dev/docs/kit/configuration#paths) and the URL is root-relative, you need to prepend the base path if you want to navigate within the app.
 * @param {Object} [opts] Options related to the navigation
 * @param {boolean} [opts.replaceState] If `true`, will replace the current `history` entry rather than creating a new one with `pushState`
 * @param {boolean} [opts.noScroll] If `true`, the browser will maintain its scroll position rather than scrolling to the top of the page after navigation
 * @param {boolean} [opts.keepFocus] If `true`, the currently focused element will retain focus after navigation. Otherwise, focus will be reset to the body
 * @param {boolean} [opts.invalidateAll] If `true`, all `load` functions of the page will be rerun. See https://svelte.dev/docs/kit/load#rerunning-load-functions for more info on invalidation.
 * @param {Array<string | URL | ((url: URL) => boolean)>} [opts.invalidate] Causes any load functions to re-run if they depend on one of the urls
 * @param {App.PageState} [opts.state] An optional object that will be available as `page.state`
 * @returns {Promise<void>}
 */
function goto(url, opts = {}) {
	throw new Error('Cannot call goto(...) on the server');
}
/**
 * Programmatically replace the current history entry with the given `page.state`. To use the current URL, you can pass `''` as the first argument. Used for [shallow routing](https://svelte.dev/docs/kit/shallow-routing).
 *
 * @param {string | URL} url
 * @param {App.PageState} state
 * @returns {void}
 */
function replaceState(url, state) {
	throw new Error('Cannot call replaceState(...) on the server');
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/app/state/server.js
function context() {
	return getContext('__request__');
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/app/state/index.js
/**
 * A read-only reactive object with information about the current page, serving several use cases:
 * - retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see [loading data](https://svelte.dev/docs/kit/load))
 * - retrieving the current value of the `form` prop anywhere in your component tree (also see [form actions](https://svelte.dev/docs/kit/form-actions))
 * - retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see [goto](https://svelte.dev/docs/kit/$app-navigation#goto) and [shallow routing](https://svelte.dev/docs/kit/shallow-routing))
 * - retrieving metadata such as the URL you're on, the current route and its parameters, and whether or not there was an error
 *
 * ```svelte
 * <!--- file: +layout.svelte --->
 * <script>
 * 	import { page } from '$app/state';
 * <\/script>
 *
 * <p>Currently at {page.url.pathname}</p>
 *
 * {#if page.error}
 * 	<span class="red">Problem detected</span>
 * {:else}
 * 	<span class="small">All systems operational</span>
 * {/if}
 * ```
 *
 * Changes to `page` are available exclusively with runes. (The legacy reactivity syntax will not reflect any changes)
 *
 * ```svelte
 * <!--- file: +page.svelte --->
 * <script>
 * 	import { page } from '$app/state';
 * 	const id = $derived(page.params.id); // This will correctly update id for usage on this page
 * 	$: badId = page.params.id; // Do not use; will never update after initial load
 * <\/script>
 * ```
 *
 * On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
 *
 * @type {import('@sveltejs/kit').Page}
 */
var page = {
	get data() {
		return context().page.data;
	},
	get error() {
		return context().page.error;
	},
	get form() {
		return context().page.form;
	},
	get params() {
		return context().page.params;
	},
	get route() {
		return context().page.route;
	},
	get state() {
		return context().page.state;
	},
	get status() {
		return context().page.status;
	},
	get url() {
		return context().page.url;
	}
};
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/utils/defaultAttributes.js
/**
 * @file
 * @license @lucide/svelte v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	'stroke-width': 2,
	'stroke-linecap': 'round',
	'stroke-linejoin': 'round'
};
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/utils/mergeClasses.js
/**
 * @file
 * @license @lucide/svelte v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/**
 * Merges classes into a single string
 *
 * @param {array} classes
 * @returns {string} A string of classes
 */
var mergeClasses = (...classes) =>
	classes
		.filter((className, index, array) => {
			return (
				Boolean(className) &&
				className.trim() !== '' &&
				array.indexOf(className) === index
			);
		})
		.join(' ')
		.trim();
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/utils/buildLucideIconNode.js
/**
 * @file
 * @license @lucide/svelte v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function isDefined(value) {
	return value !== null && value !== void 0;
}
/**
 * Creates a Lucide icon node (an svgson-like format) from a Lucide icon object.
 *
 * @param icon The icon to build.
 * @param params Additional build parameters.
 */
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) =>
		attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes['width'];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes['height'];
	const aliasClassNames =
		icon.aliases
			?.filter((alias) => typeof alias === 'string' && alias.trim() !== '')
			.map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [
		...(icon.name ? [`lucide-${icon.name}`] : []),
		...aliasClassNames
	];
	const classNamesFromClassName = params.className?.split(' ').filter(Boolean) ?? [];
	const className =
		params.includeDefaultClasses === false
			? mergeClasses(...classNamesFromClassName)
			: mergeClasses('lucide', ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth
		? (Number(params.strokeWidth ?? defaultAttributes['stroke-width']) *
				Number(icon.size ?? icon.width ?? defaultAttributes['width'])) /
			Number(params.size ?? params.width ?? defaultAttributes['width'])
		: (params.strokeWidth ?? defaultAttributes['stroke-width']);
	return [
		'svg',
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			...('color' in params &&
				params.color && { [getAttributeName('stroke')]: params.color }),
			...('size' in params &&
				isDefined(params.size) && {
					[getAttributeName('width')]: params.size,
					[getAttributeName('height')]: params.size
				}),
			...('width' in params &&
				isDefined(params.width) && { [getAttributeName('width')]: params.width }),
			...('height' in params &&
				isDefined(params.height) && { [getAttributeName('height')]: params.height }),
			[getAttributeName('stroke-width')]: calculatedStrokeWidth,
			...(className && { [getAttributeName('class')]: className }),
			[getAttributeName('viewBox')]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...(params.hasA11yProp === false
				? { [getAttributeName('aria-hidden')]: 'true' }
				: {}),
			...('attributes' in params && params.attributes)
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke
				? {
						[getAttributeName('vector-effect')]: 'non-scaling-stroke',
						...attrs
					}
				: attrs;
			return children ? [name, nextAttrs, children] : [name, nextAttrs];
		})
	];
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/utils/hasA11yProp.js
/**
 * @file
 * @license @lucide/svelte v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/**
 * Check if a component has an accessibility prop
 *
 * @param {object} props
 * @returns {boolean} Whether the component has an accessibility prop
 */
var hasA11yProp = (props) => {
	for (const prop in props)
		if (prop.startsWith('aria-') || prop === 'role' || prop === 'title') return true;
	return false;
};
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/context.js
/**
 * @file
 * @license @lucide/svelte v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LucideContext = Symbol('lucide-context');
var getLucideContext = () => getContext(LucideContext);
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/Icon.svelte
function Icon($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const globalProps = getLucideContext() ?? {};
		const {
			color = globalProps.color ?? 'currentColor',
			size = globalProps.size ?? 24,
			width = size,
			height = size,
			strokeWidth = globalProps.strokeWidth ?? 2,
			absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false,
			nonScalingStroke = globalProps.nonScalingStroke ?? false,
			iconNode = [],
			icon = {
				node: iconNode,
				aliases: [],
				size: 24
			},
			class: propsClass,
			children,
			$$slots,
			$$events,
			...props
		} = $$props;
		const hasAccessibleProp = derived(() => Boolean(children) || hasA11yProp(props));
		const $$d = derived(() =>
				buildLucideIconNode(icon, {
					color,
					width,
					height,
					strokeWidth,
					absoluteStrokeWidth,
					nonScalingStroke,
					className: mergeClasses('lucide-icon', globalProps.class),
					hasA11yProp: hasAccessibleProp(),
					attributes: props
				})
			),
			$$derived_array = derived(() => to_array($$d(), 3)),
			svgAttributes = derived(() => $$derived_array()[1]),
			builtIconNode = derived(() => fallback($$derived_array()[2], () => [], true));
		const iconAttributes = derived(() => ({
			...svgAttributes(),
			class: [...svgAttributes().class.split(' '), propsClass]
		}));
		$$renderer.push(
			`<svg${attributes({ ...iconAttributes() }, void 0, void 0, void 0, 3)}><!--[-->`
		);
		const each_array = ensure_array_like(builtIconNode());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [tag, attrs] = each_array[$$index];
			element($$renderer, tag, () => {
				$$renderer.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
			});
		}
		$$renderer.push(`<!--]-->`);
		children?.($$renderer);
		$$renderer.push(`<!----></svg>`);
	});
}
//#endregion
export { replaceState as i, page as n, goto as r, Icon as t };
