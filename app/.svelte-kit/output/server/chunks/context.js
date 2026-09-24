import { a as tick, c as __exportAll, n as mount, o as unmount } from './index-server.js';
import { o as on } from './internal.js';
import {
	C as setContext,
	D as clsx,
	E as clsx$1,
	Nt as ATTACHMENT_KEY,
	O as escape_html,
	S as hasContext,
	T as attr,
	Wt as run,
	_t as snapshot,
	a as derived,
	b as getAllContexts,
	d as spread_props,
	f as stringify,
	i as bind_props,
	l as props_id,
	o as element,
	r as attributes,
	s as ensure_array_like,
	t as attr_class,
	x as getContext,
	y as createContext
} from './server2.js';
import { t as building } from './internal2.js';
import {
	_ as entityNamesMatch,
	f as plural,
	i as entityFragmentId,
	n as abilityFragmentId,
	v as findEntityName,
	y as indexEntityNames
} from './src2.js';
import {
	i as parseFilters,
	n as filtersToSearchParams,
	r as normalizeFilters
} from './keys.js';
import { u as changePath } from './seo.js';
import { n as page, r as goto, t as Icon } from './Icon.js';
import { t as Search } from './navigation.js';
import { n as getHeroCardImage, t as entityImage } from './entityImages2.js';
import { t as Arrow_right } from './arrow-right.js';
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/x.svelte
function X($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'x',
					size: 24,
					node: [
						['path', { d: 'M18 6 6 18' }],
						['path', { d: 'm6 6 12 12' }]
					]
				}
			}
		])
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/is.js
function isObject(value) {
	return value !== null && typeof value === 'object';
}
var CLASS_VALUE_PRIMITIVE_TYPES = ['string', 'number', 'bigint', 'boolean'];
function isClassValue(value) {
	if (value === null || value === void 0) return true;
	if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value)) return true;
	if (Array.isArray(value)) return value.every((item) => isClassValue(item));
	if (typeof value === 'object') {
		if (Object.getPrototypeOf(value) !== Object.prototype) return false;
		return true;
	}
	return false;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var BoxSymbol = Symbol('box');
var isWritableSymbol = Symbol('is-writable');
function boxWith(getter, setter) {
	const derived$1 = derived(getter);
	if (setter)
		return {
			[BoxSymbol]: true,
			[isWritableSymbol]: true,
			get current() {
				return derived$1();
			},
			set current(v) {
				setter(v);
			}
		};
	return {
		[BoxSymbol]: true,
		get current() {
			return getter();
		}
	};
}
/**
 * @returns Whether the value is a Box
 *
 * @see {@link https://runed.dev/docs/functions/box}
 */
function isBox(value) {
	return isObject(value) && BoxSymbol in value;
}
function simpleBox(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		}
	};
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
/**
 * Composes event handlers into a single function that can be called with an event.
 * If the previous handler cancels the event using `event.preventDefault()`, the handlers
 * that follow will not be called.
 */
function composeHandlers(...handlers) {
	return function (e) {
		for (const handler of handlers) {
			if (!handler) continue;
			if (e.defaultPrevented) return;
			if (typeof handler === 'function') handler.call(this, e);
			else handler.current?.call(this, e);
		}
	};
}
//#endregion
//#region ../node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/esm/index.mjs
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
function index(style, options) {
	if (typeof style !== 'string') throw new TypeError('First argument must be a string');
	if (!style) return [];
	options = options || {};
	/**
	 * Positional.
	 */
	var lineno = 1;
	var column = 1;
	/**
	 * Update lineno and column based on `str`.
	 *
	 * @param {String} str
	 */
	function updatePosition(str) {
		var lines = str.match(NEWLINE_REGEX);
		if (lines) lineno += lines.length;
		var i = str.lastIndexOf(NEWLINE);
		column = ~i ? str.length - i : column + str.length;
	}
	/**
	 * Mark position and patch `node.position`.
	 *
	 * @return {Function}
	 */
	function position() {
		var start = {
			line: lineno,
			column
		};
		return function (node) {
			node.position = new Position(start);
			whitespace();
			return node;
		};
	}
	/**
	 * Store position information for a node.
	 *
	 * @constructor
	 * @property {Object} start
	 * @property {Object} end
	 * @property {undefined|String} source
	 */
	function Position(start) {
		this.start = start;
		this.end = {
			line: lineno,
			column
		};
		this.source = options.source;
	}
	/**
	 * Non-enumerable source string.
	 */
	Position.prototype.content = style;
	/**
	 * Error `msg`.
	 *
	 * @param {String} msg
	 * @throws {Error}
	 */
	function error(msg) {
		var err = /* @__PURE__ */ new Error(
			options.source + ':' + lineno + ':' + column + ': ' + msg
		);
		err.reason = msg;
		err.filename = options.source;
		err.line = lineno;
		err.column = column;
		err.source = style;
		if (options.silent);
		else throw err;
	}
	/**
	 * Match `re` and return captures.
	 *
	 * @param {RegExp} re
	 * @return {undefined|Array}
	 */
	function match(re) {
		var m = re.exec(style);
		if (!m) return;
		var str = m[0];
		updatePosition(str);
		style = style.slice(str.length);
		return m;
	}
	/**
	 * Parse whitespace.
	 */
	function whitespace() {
		match(WHITESPACE_REGEX);
	}
	/**
	 * Parse comments.
	 *
	 * @param {Object[]} [rules]
	 * @return {Object[]}
	 */
	function comments(rules) {
		var c;
		rules = rules || [];
		while ((c = comment())) if (c !== false) rules.push(c);
		return rules;
	}
	/**
	 * Parse comment.
	 *
	 * @return {Object}
	 * @throws {Error}
	 */
	function comment() {
		var pos = position();
		if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
		var i = 2;
		while (
			EMPTY_STRING != style.charAt(i) &&
			(ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
		)
			++i;
		i += 2;
		if (EMPTY_STRING === style.charAt(i - 1)) return error('End of comment missing');
		var str = style.slice(2, i - 2);
		column += 2;
		updatePosition(str);
		style = style.slice(i);
		column += 2;
		return pos({
			type: TYPE_COMMENT,
			comment: str
		});
	}
	/**
	 * Parse declaration.
	 *
	 * @return {Object}
	 * @throws {Error}
	 */
	function declaration() {
		var pos = position();
		var prop = match(PROPERTY_REGEX);
		if (!prop) return;
		comment();
		if (!match(COLON_REGEX)) return error("property missing ':'");
		var val = match(VALUE_REGEX);
		var ret = pos({
			type: TYPE_DECLARATION,
			property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
			value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
		});
		match(SEMICOLON_REGEX);
		return ret;
	}
	/**
	 * Parse declarations.
	 *
	 * @return {Object[]}
	 */
	function declarations() {
		var decls = [];
		comments(decls);
		var decl;
		while ((decl = declaration()))
			if (decl !== false) {
				decls.push(decl);
				comments(decls);
			}
		return decls;
	}
	whitespace();
	return declarations();
}
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
	return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
//#endregion
//#region ../node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/esm/index.mjs
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
function StyleToObject(style, iterator) {
	let styleObject = null;
	if (!style || typeof style !== 'string') return styleObject;
	const declarations = index(style);
	const hasIterator = typeof iterator === 'function';
	declarations.forEach((declaration) => {
		if (declaration.type !== 'declaration') return;
		const { property, value } = declaration;
		if (hasIterator) iterator(property, value, declaration);
		else if (value) {
			styleObject = styleObject || {};
			styleObject[property] = value;
		}
	});
	return styleObject;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/strings.js
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = ['-', '_', '/', '.'];
function isUppercase(char = '') {
	if (NUMBER_CHAR_RE.test(char)) return void 0;
	return char !== char.toLowerCase();
}
function splitByCase(str) {
	const parts = [];
	let buff = '';
	let previousUpper;
	let previousSplitter;
	for (const char of str) {
		const isSplitter = STR_SPLITTERS.includes(char);
		if (isSplitter === true) {
			parts.push(buff);
			buff = '';
			previousUpper = void 0;
			continue;
		}
		const isUpper = isUppercase(char);
		if (previousSplitter === false) {
			if (previousUpper === false && isUpper === true) {
				parts.push(buff);
				buff = char;
				previousUpper = isUpper;
				continue;
			}
			if (previousUpper === true && isUpper === false && buff.length > 1) {
				const lastChar = buff.at(-1);
				parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
				buff = lastChar + char;
				previousUpper = isUpper;
				continue;
			}
		}
		buff += char;
		previousUpper = isUpper;
		previousSplitter = isSplitter;
	}
	parts.push(buff);
	return parts;
}
function pascalCase(str) {
	if (!str) return '';
	return splitByCase(str)
		.map((p) => upperFirst(p))
		.join('');
}
function camelCase(str) {
	return lowerFirst(pascalCase(str || ''));
}
function upperFirst(str) {
	return str ? str[0].toUpperCase() + str.slice(1) : '';
}
function lowerFirst(str) {
	return str ? str[0].toLowerCase() + str.slice(1) : '';
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function cssToStyleObj(css) {
	if (!css) return {};
	const styleObj = {};
	function iterator(name, value) {
		if (
			name.startsWith('-moz-') ||
			name.startsWith('-webkit-') ||
			name.startsWith('-ms-') ||
			name.startsWith('-o-')
		) {
			styleObj[pascalCase(name)] = value;
			return;
		}
		if (name.startsWith('--')) {
			styleObj[name] = value;
			return;
		}
		styleObj[camelCase(name)] = value;
	}
	StyleToObject(css, iterator);
	return styleObj;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
/**
 * Executes an array of callback functions with the same arguments.
 * @template T The types of the arguments that the callback functions take.
 * @param callbacks array of callback functions to execute.
 * @returns A new function that executes all of the original callback functions with the same arguments.
 */
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks)
			if (typeof callback === 'function') callback(...args);
	};
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function createParser(matcher, replacer) {
	const regex = RegExp(matcher, 'g');
	return (str) => {
		if (typeof str !== 'string')
			throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
		if (!str.match(regex)) return str;
		return str.replace(regex, replacer);
	};
}
var camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
	if (!styleObj || typeof styleObj !== 'object' || Array.isArray(styleObj))
		throw new TypeError(
			`expected an argument of type object, but got ${typeof styleObj}`
		);
	return Object.keys(styleObj)
		.map((property) => `${camelToKebab(property)}: ${styleObj[property]};`)
		.join('\n');
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/style.js
function styleToString(style = {}) {
	return styleToCSS(style).replace('\n', ' ');
}
var EVENT_LIST_SET = /* @__PURE__ */ new Set([
	'onabort',
	'onanimationcancel',
	'onanimationend',
	'onanimationiteration',
	'onanimationstart',
	'onauxclick',
	'onbeforeinput',
	'onbeforetoggle',
	'onblur',
	'oncancel',
	'oncanplay',
	'oncanplaythrough',
	'onchange',
	'onclick',
	'onclose',
	'oncompositionend',
	'oncompositionstart',
	'oncompositionupdate',
	'oncontextlost',
	'oncontextmenu',
	'oncontextrestored',
	'oncopy',
	'oncuechange',
	'oncut',
	'ondblclick',
	'ondrag',
	'ondragend',
	'ondragenter',
	'ondragleave',
	'ondragover',
	'ondragstart',
	'ondrop',
	'ondurationchange',
	'onemptied',
	'onended',
	'onerror',
	'onfocus',
	'onfocusin',
	'onfocusout',
	'onformdata',
	'ongotpointercapture',
	'oninput',
	'oninvalid',
	'onkeydown',
	'onkeypress',
	'onkeyup',
	'onload',
	'onloadeddata',
	'onloadedmetadata',
	'onloadstart',
	'onlostpointercapture',
	'onmousedown',
	'onmouseenter',
	'onmouseleave',
	'onmousemove',
	'onmouseout',
	'onmouseover',
	'onmouseup',
	'onpaste',
	'onpause',
	'onplay',
	'onplaying',
	'onpointercancel',
	'onpointerdown',
	'onpointerenter',
	'onpointerleave',
	'onpointermove',
	'onpointerout',
	'onpointerover',
	'onpointerup',
	'onprogress',
	'onratechange',
	'onreset',
	'onresize',
	'onscroll',
	'onscrollend',
	'onsecuritypolicyviolation',
	'onseeked',
	'onseeking',
	'onselect',
	'onselectionchange',
	'onselectstart',
	'onslotchange',
	'onstalled',
	'onsubmit',
	'onsuspend',
	'ontimeupdate',
	'ontoggle',
	'ontouchcancel',
	'ontouchend',
	'ontouchmove',
	'ontouchstart',
	'ontransitioncancel',
	'ontransitionend',
	'ontransitionrun',
	'ontransitionstart',
	'onvolumechange',
	'onwaiting',
	'onwebkitanimationend',
	'onwebkitanimationiteration',
	'onwebkitanimationstart',
	'onwebkittransitionend',
	'onwheel'
]);
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/merge-props.js
/**
 * Modified from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts (see NOTICE.txt for source)
 */
function isEventHandler(key) {
	return EVENT_LIST_SET.has(key);
}
/**
 * Given a list of prop objects, merges them into a single object.
 * - Automatically composes event handlers (e.g. `onclick`, `oninput`, etc.)
 * - Chains regular functions with the same name so they are called in order
 * - Merges class strings with `clsx`
 * - Merges style objects and converts them to strings
 * - Handles a bug with Svelte where setting the `hidden` attribute to `false` doesn't remove it
 * - Overrides other values with the last one
 */
function mergeProps(...args) {
	const result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		const props = args[i];
		if (!props) continue;
		for (const key of Object.keys(props)) {
			const a = result[key];
			const b = props[key];
			const aIsFunction = typeof a === 'function';
			const bIsFunction = typeof b === 'function';
			if (aIsFunction && typeof bIsFunction && isEventHandler(key))
				result[key] = composeHandlers(a, b);
			else if (aIsFunction && bIsFunction) result[key] = executeCallbacks(a, b);
			else if (key === 'class') {
				const aIsClassValue = isClassValue(a);
				const bIsClassValue = isClassValue(b);
				if (aIsClassValue && bIsClassValue) result[key] = clsx(a, b);
				else if (aIsClassValue) result[key] = clsx(a);
				else if (bIsClassValue) result[key] = clsx(b);
			} else if (key === 'style') {
				const aIsObject = typeof a === 'object';
				const bIsObject = typeof b === 'object';
				const aIsString = typeof a === 'string';
				const bIsString = typeof b === 'string';
				if (aIsObject && bIsObject)
					result[key] = {
						...a,
						...b
					};
				else if (aIsObject && bIsString) {
					const parsedStyle = cssToStyleObj(b);
					result[key] = {
						...a,
						...parsedStyle
					};
				} else if (aIsString && bIsObject)
					result[key] = {
						...cssToStyleObj(a),
						...b
					};
				else if (aIsString && bIsString) {
					const parsedStyleA = cssToStyleObj(a);
					const parsedStyleB = cssToStyleObj(b);
					result[key] = {
						...parsedStyleA,
						...parsedStyleB
					};
				} else if (aIsObject) result[key] = a;
				else if (bIsObject) result[key] = b;
				else if (aIsString) result[key] = a;
				else if (bIsString) result[key] = b;
			} else result[key] = b !== void 0 ? b : a;
		}
		for (const key of Object.getOwnPropertySymbols(props)) {
			const a = result[key];
			const b = props[key];
			result[key] = b !== void 0 ? b : a;
		}
	}
	if (typeof result.style === 'object')
		result.style = styleToString(result.style).replaceAll('\n', ' ');
	if (result.hidden === false) {
		result.hidden = void 0;
		delete result.hidden;
	}
	if (result.disabled === false) {
		result.disabled = void 0;
		delete result.disabled;
	}
	return result;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/sr-only-styles.js
var srOnlyStyles = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	borderWidth: '0',
	transform: 'translateX(-100%)'
};
styleToString(srOnlyStyles);
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = void 0;
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/internal/utils/dom.js
/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement$1(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
globalThis.Date;
var SvelteSet = globalThis.Set;
var SvelteMap = globalThis.Map;
globalThis.URL;
globalThis.URLSearchParams;
/**
 * @param {any} _
 */
function createSubscriber(_) {
	return () => {};
}
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/utilities/active-element/active-element.svelte.js
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber((update) => {
			const cleanupFocusIn = on(window, 'focusin', update);
			const cleanupFocusOut = on(window, 'focusout', update);
			return () => {
				cleanupFocusIn();
				cleanupFocusOut();
			};
		});
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement$1(this.#document);
	}
};
new ActiveElement();
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/internal/utils/is.js
function isFunction(value) {
	return typeof value === 'function';
}
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/utilities/context/context.js
var Context = class {
	#name;
	#key;
	/**
	 * @param name The name of the context.
	 * This is used for generating the context key and error messages.
	 */
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	 * The key used to get and set the context.
	 *
	 * It is not recommended to use this value directly.
	 * Instead, use the methods provided by this class.
	 */
	get key() {
		return this.#key;
	}
	/**
	 * Checks whether this has been set in the context of a parent component.
	 *
	 * Must be called during component initialisation.
	 */
	exists() {
		return hasContext(this.#key);
	}
	/**
	 * Retrieves the context that belongs to the closest parent component.
	 *
	 * Must be called during component initialisation.
	 *
	 * @throws An error if the context does not exist.
	 */
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	 * Retrieves the context that belongs to the closest parent component,
	 * or the given fallback value if the context does not exist.
	 *
	 * Must be called during component initialisation.
	 */
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	 * Associates the given value with the current component and returns it.
	 *
	 * Must be called during component initialisation.
	 */
	set(context) {
		return setContext(this.#key, context);
	}
};
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/utilities/watch/watch.svelte.js
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}
function watch(sources, effect, options) {
	runWatcher(sources, 'post', effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, 'pre', effect, options);
}
watch.pre = watchPre;
function watchOnce(source, effect) {}
function watchOncePre(source, effect) {}
watchOnce.pre = watchOncePre;
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/internal/utils/get.js
function get(value) {
	if (isFunction(value)) return value();
	return value;
}
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = false;
	#options;
	#node;
	#window;
	#width = derived(() => {
		this.#subscribe()?.();
		return this.getSize().width;
	});
	#height = derived(() => {
		this.#subscribe()?.();
		return this.getSize().height;
	});
	#subscribe = derived(() => {
		const node$ = get(this.#node);
		if (!node$) return;
		return createSubscriber((update) => {
			if (!this.#window) return;
			const observer = new this.#window.ResizeObserver((entries) => {
				this.#observed = true;
				for (const entry of entries) {
					const boxSize =
						this.#options.box === 'content-box'
							? entry.contentBoxSize
							: entry.borderBoxSize;
					const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
					this.#size.width = boxSizeArr.reduce(
						(acc, size) => Math.max(acc, size.inlineSize),
						0
					);
					this.#size.height = boxSizeArr.reduce(
						(acc, size) => Math.max(acc, size.blockSize),
						0
					);
				}
				update();
			});
			observer.observe(node$);
			return () => {
				this.#observed = false;
				observer.disconnect();
			};
		});
	});
	constructor(node, options = { box: 'border-box' }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		const element = get(this.#node);
		if (!element || !this.#window) return;
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === 'border-box')
			return {
				width: offsetWidth,
				height: offsetHeight
			};
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth =
			parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight =
			parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return {
			width: offsetWidth - paddingWidth - borderWidth,
			height: offsetHeight - paddingHeight - borderHeight
		};
	}
	getSize() {
		return this.#observed ? this.#size : (this.calculateSize() ?? this.#size);
	}
	get current() {
		this.#subscribe()?.();
		return this.getSize();
	}
	get width() {
		return this.#width();
	}
	get height() {
		return this.#height();
	}
};
//#endregion
//#region ../node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typ_331e9ca77b9d2c2f2dbd0c180af25fc7/node_modules/runed/dist/utilities/resource/resource.svelte.js
function debounce$1(fn, delay) {
	let timeoutId;
	let lastResolve = null;
	return (...args) => {
		return new Promise((resolve) => {
			if (lastResolve) lastResolve(void 0);
			lastResolve = resolve;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(async () => {
				const result = await fn(...args);
				if (lastResolve) {
					lastResolve(result);
					lastResolve = null;
				}
			}, delay);
		});
	};
}
function throttle(fn, delay) {
	let lastRun = 0;
	let lastPromise = null;
	return (...args) => {
		const now = Date.now();
		if (lastRun && now - lastRun < delay) return lastPromise ?? Promise.resolve(void 0);
		lastRun = now;
		lastPromise = fn(...args);
		return lastPromise;
	};
}
function runResource(source, fetcher, options = {}, effectFn) {
	const {
		lazy = false,
		once = false,
		initialValue,
		debounce: debounceTime,
		throttle: throttleTime
	} = options;
	let current = initialValue;
	let loading = false;
	let error = void 0;
	let cleanupFns = [];
	const runCleanup = () => {
		cleanupFns.forEach((fn) => fn());
		cleanupFns = [];
	};
	const onCleanup = (fn) => {
		cleanupFns = [...cleanupFns, fn];
	};
	const baseFetcher = async (value, previousValue, refetching = false) => {
		try {
			loading = true;
			error = void 0;
			runCleanup();
			const controller = new AbortController();
			onCleanup(() => controller.abort());
			const result = await fetcher(value, previousValue, {
				data: current,
				refetching,
				onCleanup,
				signal: controller.signal
			});
			current = result;
			return result;
		} catch (e) {
			if (!(e instanceof DOMException && e.name === 'AbortError')) error = e;
			return;
		} finally {
			loading = false;
		}
	};
	const runFetcher = debounceTime
		? debounce$1(baseFetcher, debounceTime)
		: throttleTime
			? throttle(baseFetcher, throttleTime)
			: baseFetcher;
	const sources = Array.isArray(source) ? source : [source];
	let prevValues;
	effectFn(
		(values, previousValues) => {
			if (once && prevValues) return;
			prevValues = values;
			runFetcher(
				Array.isArray(source) ? values : values[0],
				Array.isArray(source) ? previousValues : previousValues?.[0]
			);
		},
		{ lazy }
	);
	return {
		get current() {
			return current;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		mutate: (value) => {
			current = value;
		},
		refetch: (info) => {
			const values = sources.map((s) => s());
			return runFetcher(
				Array.isArray(source) ? values : values[0],
				Array.isArray(source) ? values : values[0],
				info ?? true
			);
		}
	};
}
function resource(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getters = () => sources.map((s) => s());
		watch(
			getters,
			(values, previousValues) => {
				fn(values, previousValues ?? []);
			},
			options
		);
	});
}
function resourcePre(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getter = () => sources.map((s) => s());
		watch.pre(
			getter,
			(values, previousValues) => {
				fn(values, previousValues ?? []);
			},
			options
		);
	});
}
resource.pre = resourcePre;
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function onDestroyEffect(fn) {}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/after-sleep.js
/**
 * A utility function that executes a callback after a specified number of milliseconds.
 */
function afterSleep(ms, cb) {
	return setTimeout(cb, ms);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function afterTick(fn) {
	/* @__PURE__ */ tick().then(fn);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/dom.js
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$1(node) {
	return (
		isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === 'string'
	);
}
function isDocument(node) {
	return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
	return isObject(node) && node.constructor?.name === 'VisualViewport';
}
function isNode(node) {
	return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
	return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && 'host' in node;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement$1(parent) || !isHTMLElement$1(child)) return false;
	const rootNode = child.getRootNode?.();
	if (parent === child) return true;
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(node) {
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	return node?.ownerDocument ?? document;
}
function getWindow(node) {
	if (isShadowRoot(node)) return getWindow(node.host);
	if (isDocument(node)) return node.defaultView ?? window;
	if (isHTMLElement$1(node)) return node.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var DOMContext = class {
	element;
	#root = derived(() => {
		if (!this.element.current) return document;
		return this.element.current.getRootNode() ?? document;
	});
	get root() {
		return this.#root();
	}
	set root($$value) {
		return this.#root($$value);
	}
	constructor(element) {
		if (typeof element === 'function') this.element = boxWith(element);
		else this.element = element;
	}
	getDocument = () => {
		return getDocument(this.root);
	};
	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};
	getActiveElement = () => {
		return getActiveElement(this.root);
	};
	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};
	getElementById(id) {
		return this.root.getElementById(id);
	}
	querySelector = (selector) => {
		if (!this.root) return null;
		return this.root.querySelector(selector);
	};
	querySelectorAll = (selector) => {
		if (!this.root) return [];
		return this.root.querySelectorAll(selector);
	};
	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};
	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
};
if (typeof HTMLElement === 'function');
//#endregion
//#region ../node_modules/.pnpm/svelte@5.57.0_@typescript-eslint+types@8.70.0/node_modules/svelte/src/attachments/index.js
/**
 * Creates an object key that will be recognised as an attachment when the object is spread onto an element,
 * as a programmatic alternative to using `{@attach ...}`. This can be useful for library authors, though
 * is generally not needed when building an app.
 *
 * ```svelte
 * <script>
 * 	import { createAttachmentKey } from 'svelte/attachments';
 *
 * 	const props = {
 * 		class: 'cool',
 * 		onclick: () => alert('clicked'),
 * 		[createAttachmentKey()]: (node) => {
 * 			node.textContent = 'attached!';
 * 		}
 * 	};
 * <\/script>
 *
 * <button {...props}>click me</button>
 * ```
 * @since 5.29
 */
function createAttachmentKey() {
	return Symbol(ATTACHMENT_KEY);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5_b59eea21697a3edcdda55c40c66a4824/node_modules/svelte-toolbelt/dist/utils/attach-ref.js
/**
 * Creates a Svelte Attachment that attaches a DOM element to a ref.
 * The ref can be either a WritableBox or a callback function.
 *
 * @param ref - Either a WritableBox to store the element in, or a callback function that receives the element
 * @param onChange - Optional callback that fires when the ref changes
 * @returns An object with a spreadable attachment key that should be spread onto the element
 *
 * @example
 * // Using with WritableBox
 * const ref = box<HTMLDivElement | null>(null);
 * <div {...attachRef(ref)}>Content</div>
 *
 * @example
 * // Using with callback
 * <div {...attachRef((node) => myNode = node)}>Content</div>
 *
 * @example
 * // Using with onChange
 * <div {...attachRef(ref, (node) => console.log(node))}>Content</div>
 */
function attachRef(ref, onChange) {
	return {
		[createAttachmentKey()]: (node) => {
			if (isBox(ref)) {
				ref.current = node;
				run(() => onChange?.(node));
				return () => {
					if ('isConnected' in node && node.isConnected) return;
					ref.current = null;
					onChange?.(null);
				};
			}
			ref(node);
			run(() => onChange?.(node));
			return () => {
				if ('isConnected' in node && node.isConnected) return;
				ref(null);
				onChange?.(null);
			};
		}
	};
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/attrs.js
function boolToStr(condition) {
	return condition ? 'true' : 'false';
}
function boolToEmptyStrOrUndef(condition) {
	return condition ? '' : void 0;
}
function getDataOpenClosed(condition) {
	return condition ? 'open' : 'closed';
}
function getDataTransitionAttrs(state) {
	if (state === 'starting') return { 'data-starting-style': '' };
	if (state === 'ending') return { 'data-ending-style': '' };
	return {};
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(config) {
		this.#variant = config.getVariant ? config.getVariant() : null;
		this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
		this.getAttr = this.getAttr.bind(this);
		this.selector = this.selector.bind(this);
		this.attrs = Object.fromEntries(
			config.parts.map((part) => [part, this.getAttr(part)])
		);
	}
	getAttr(part, variantOverride) {
		if (variantOverride) return `data-${variantOverride}-${part}`;
		return `${this.#prefix}${part}`;
	}
	selector(part, variantOverride) {
		return `[${this.getAttr(part, variantOverride)}]`;
	}
};
function createBitsAttrs(config) {
	const bitsAttrs = new BitsAttrs(config);
	return {
		...bitsAttrs.attrs,
		selector: bitsAttrs.selector,
		getAttr: bitsAttrs.getAttr
	};
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/kbd-constants.js
var ARROW_DOWN = 'ArrowDown';
var ARROW_LEFT = 'ArrowLeft';
var ARROW_RIGHT = 'ArrowRight';
var ARROW_UP = 'ArrowUp';
var ENTER = 'Enter';
var HOME = 'Home';
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/is.js
var isBrowser$1 = typeof document !== 'undefined';
var isIOS = getIsIOS();
function getIsIOS() {
	return (
		isBrowser$1 &&
		window?.navigator?.userAgent &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
			(window?.navigator?.maxTouchPoints > 2 &&
				/iPad|Macintosh/.test(window?.navigator.userAgent)))
	);
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isElement(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isFocusVisible(element) {
	return element.matches(':focus-visible');
}
function isNotNull(value) {
	return value !== null;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/animations-complete.js
var AnimationsComplete = class {
	#opts;
	#currentFrame = null;
	#observer = null;
	#runId = 0;
	constructor(opts) {
		this.#opts = opts;
	}
	#cleanup() {
		if (this.#currentFrame !== null) {
			window.cancelAnimationFrame(this.#currentFrame);
			this.#currentFrame = null;
		}
		this.#observer?.disconnect();
		this.#observer = null;
		this.#runId++;
	}
	run(fn) {
		this.#cleanup();
		const node = this.#opts.ref.current;
		if (!node) return;
		if (typeof node.getAnimations !== 'function') {
			this.#executeCallback(fn);
			return;
		}
		const runId = this.#runId;
		const executeIfCurrent = () => {
			if (runId !== this.#runId) return;
			this.#executeCallback(fn);
		};
		const waitForAnimations = () => {
			if (runId !== this.#runId) return;
			const animations = node.getAnimations();
			if (animations.length === 0) {
				executeIfCurrent();
				return;
			}
			Promise.all(animations.map((animation) => animation.finished))
				.then(() => {
					executeIfCurrent();
				})
				.catch(() => {
					if (runId !== this.#runId) return;
					if (
						node
							.getAnimations()
							.some(
								(animation) => animation.pending || animation.playState !== 'finished'
							)
					) {
						waitForAnimations();
						return;
					}
					executeIfCurrent();
				});
		};
		const requestWaitForAnimations = () => {
			this.#currentFrame = window.requestAnimationFrame(() => {
				this.#currentFrame = null;
				waitForAnimations();
			});
		};
		if (!this.#opts.afterTick.current) {
			requestWaitForAnimations();
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			this.#currentFrame = null;
			const startingStyleAttr = 'data-starting-style';
			if (!node.hasAttribute(startingStyleAttr)) {
				requestWaitForAnimations();
				return;
			}
			this.#observer = new MutationObserver(() => {
				if (runId !== this.#runId) return;
				if (node.hasAttribute(startingStyleAttr)) return;
				this.#observer?.disconnect();
				this.#observer = null;
				requestWaitForAnimations();
			});
			this.#observer.observe(node, {
				attributes: true,
				attributeFilter: [startingStyleAttr]
			});
		});
	}
	#executeCallback(fn) {
		const execute = () => {
			fn();
		};
		if (this.#opts.afterTick) afterTick(execute);
		else execute();
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/presence-manager.svelte.js
var PresenceManager = class {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = false;
	#transitionStatus = void 0;
	#hasMounted = false;
	#transitionFrame = null;
	constructor(opts) {
		this.#opts = opts;
		this.#shouldRender = opts.open.current;
		this.#enabled = opts.enabled ?? true;
		this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		});
		watch(
			() => this.#opts.open.current,
			(isOpen) => {
				if (!this.#hasMounted) {
					this.#hasMounted = true;
					return;
				}
				this.#clearTransitionFrame();
				if (!isOpen && this.#opts.shouldSkipExitAnimation?.()) {
					this.#shouldRender = false;
					this.#transitionStatus = void 0;
					this.#opts.onComplete?.();
					return;
				}
				if (isOpen) this.#shouldRender = true;
				this.#transitionStatus = isOpen ? 'starting' : 'ending';
				if (isOpen)
					this.#transitionFrame = window.requestAnimationFrame(() => {
						this.#transitionFrame = null;
						if (this.#opts.open.current) this.#transitionStatus = void 0;
					});
				if (!this.#enabled) {
					if (!isOpen) this.#shouldRender = false;
					this.#transitionStatus = void 0;
					this.#opts.onComplete?.();
					return;
				}
				this.#afterAnimations.run(() => {
					if (isOpen === this.#opts.open.current) {
						if (!this.#opts.open.current) this.#shouldRender = false;
						this.#transitionStatus = void 0;
						this.#opts.onComplete?.();
					}
				});
			}
		);
	}
	get shouldRender() {
		return this.#shouldRender;
	}
	get transitionStatus() {
		return this.#transitionStatus;
	}
	#clearTransitionFrame() {
		if (this.#transitionFrame === null) return;
		window.cancelAnimationFrame(this.#transitionFrame);
		this.#transitionFrame = null;
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/noop.js
/**
 * A no operation function (does nothing)
 */
function noop$1() {}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/create-id.js
function createId(prefixOrUid, uid) {
	if (uid === void 0) return `bits-${prefixOrUid}`;
	return `bits-${prefixOrUid}-${uid}`;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/dialog.svelte.js
var dialogAttrs = createBitsAttrs({
	component: 'dialog',
	parts: [
		'content',
		'trigger',
		'overlay',
		'title',
		'description',
		'close',
		'cancel',
		'action'
	]
});
var DialogRootContext = new Context('Dialog.Root | AlertDialog.Root');
var DialogRootState = class DialogRootState {
	static create(opts) {
		const parent = DialogRootContext.getOr(null);
		return DialogRootContext.set(new DialogRootState(opts, parent));
	}
	opts;
	triggerNode = null;
	contentNode = null;
	overlayNode = null;
	descriptionNode = null;
	contentId = void 0;
	titleId = void 0;
	triggerId = void 0;
	descriptionId = void 0;
	cancelNode = null;
	nestedOpenCount = 0;
	depth;
	parent;
	contentPresence;
	overlayPresence;
	constructor(opts, parent) {
		this.opts = opts;
		this.parent = parent;
		this.depth = parent ? parent.depth + 1 : 0;
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			enabled: true,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		this.overlayPresence = new PresenceManager({
			ref: boxWith(() => this.overlayNode),
			open: this.opts.open,
			enabled: true
		});
		watch(
			() => this.opts.open.current,
			(isOpen) => {
				if (!this.parent) return;
				if (isOpen) this.parent.incrementNested();
				else this.parent.decrementNested();
			},
			{ lazy: true }
		);
	}
	handleOpen() {
		if (this.opts.open.current) return;
		this.opts.open.current = true;
	}
	handleClose() {
		if (!this.opts.open.current) return;
		this.opts.open.current = false;
	}
	getBitsAttr = (part) => {
		return dialogAttrs.getAttr(part, this.opts.variant.current);
	};
	incrementNested() {
		this.nestedOpenCount++;
		this.parent?.incrementNested();
	}
	decrementNested() {
		if (this.nestedOpenCount === 0) return;
		this.nestedOpenCount--;
		this.parent?.decrementNested();
	}
	#sharedProps = derived(() => ({
		'data-state': getDataOpenClosed(this.opts.open.current)
	}));
	get sharedProps() {
		return this.#sharedProps();
	}
	set sharedProps($$value) {
		return this.#sharedProps($$value);
	}
};
var DialogTriggerState = class DialogTriggerState {
	static create(opts) {
		return new DialogTriggerState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.triggerNode = v;
			this.root.triggerId = v?.id;
		});
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button > 0) return;
		this.root.handleOpen();
	}
	onkeydown(e) {
		if (this.opts.disabled.current) return;
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			this.root.handleOpen();
		}
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		'aria-haspopup': 'dialog',
		'aria-expanded': boolToStr(this.root.opts.open.current),
		'aria-controls': this.root.contentId,
		[this.root.getBitsAttr('trigger')]: '',
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		disabled: this.opts.disabled.current ? true : void 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var DialogCloseState = class DialogCloseState {
	static create(opts) {
		return new DialogCloseState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button > 0) return;
		this.root.handleClose();
	}
	onkeydown(e) {
		if (this.opts.disabled.current) return;
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			this.root.handleClose();
		}
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr(this.opts.variant.current)]: '',
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		disabled: this.opts.disabled.current ? true : void 0,
		tabindex: 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var DialogTitleState = class DialogTitleState {
	static create(opts) {
		return new DialogTitleState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.root.titleId = this.opts.id.current;
		this.attachment = attachRef(this.opts.ref);
		watch.pre(
			() => this.opts.id.current,
			(id) => {
				this.root.titleId = id;
			}
		);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'heading',
		'aria-level': this.opts.level.current,
		[this.root.getBitsAttr('title')]: '',
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var DialogDescriptionState = class DialogDescriptionState {
	static create(opts) {
		return new DialogDescriptionState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.root.descriptionId = this.opts.id.current;
		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.descriptionNode = v;
		});
		watch.pre(
			() => this.opts.id.current,
			(id) => {
				this.root.descriptionId = id;
			}
		);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr('description')]: '',
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var DialogContentState = class DialogContentState {
	static create(opts) {
		return new DialogContentState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.contentNode = v;
			this.root.contentId = v?.id;
		});
	}
	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: this.root.opts.variant.current === 'alert-dialog' ? 'alertdialog' : 'dialog',
		'aria-modal': 'true',
		'aria-describedby': this.root.descriptionId,
		'aria-labelledby': this.root.titleId,
		[this.root.getBitsAttr('content')]: '',
		style: {
			pointerEvents: 'auto',
			outline: this.root.opts.variant.current === 'alert-dialog' ? 'none' : void 0,
			'--bits-dialog-depth': this.root.depth,
			'--bits-dialog-nested-count': this.root.nestedOpenCount,
			contain: 'layout style'
		},
		tabindex: this.root.opts.variant.current === 'alert-dialog' ? -1 : void 0,
		'data-nested-open': boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		'data-nested': boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
};
var DialogOverlayState = class DialogOverlayState {
	static create(opts) {
		return new DialogOverlayState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => (this.root.overlayNode = v));
	}
	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr('overlay')]: '',
		style: {
			pointerEvents: 'auto',
			'--bits-dialog-depth': this.root.depth,
			'--bits-dialog-nested-count': this.root.nestedOpenCount
		},
		'data-nested-open': boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		'data-nested': boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.overlayPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	get shouldRender() {
		return this.root.overlayPresence.shouldRender;
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-title.svelte
function Dialog_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			child,
			children,
			level = 2,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const titleState = DialogTitleState.create({
			id: boxWith(() => id),
			level: boxWith(() => level),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, titleState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Portal_consumer($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<!---->`);
	children?.($$renderer);
	$$renderer.push(`<!---->`);
	$$renderer.push(`<!---->`);
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var BitsConfigContext = new Context('BitsConfig');
/**
 * Gets the current Bits UI configuration state from the context.
 *
 * Returns a default configuration (where all values are `undefined`) if no configuration is found.
 */
function getBitsConfig() {
	const fallback = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(fallback).opts;
}
/**
 * Configuration state that inherits from parent configurations.
 *
 * @example
 * Config resolution:
 * ```
 * Level 1: { defaultPortalTo: "#some-element", theme: "dark" }
 * Level 2: { spacing: "large" } // inherits defaultPortalTo="#some-element", theme="dark"
 * Level 3: { theme: "light" }   // inherits defaultPortalTo="#some-element", spacing="large", overrides theme="light"
 * ```
 */
var BitsConfigState = class {
	opts;
	constructor(parent, opts) {
		const resolveConfigOption = createConfigResolver(parent, opts);
		this.opts = {
			defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
			defaultLocale: resolveConfigOption((config) => config.defaultLocale)
		};
	}
};
/**
 * Returns a config resolver that resolves a given config option's value.
 *
 * The resolver creates reactive boxes that resolve config option values using this priority:
 * 1. Current level's value (if defined)
 * 2. Parent level's value (if defined and current is undefined)
 * 3. `undefined` (if no value is found in either parent or child)
 *
 * @param parent - Parent configuration state (null if this is root level)
 * @param currentOpts - Current level's configuration options
 *
 * @example
 * ```typescript
 * // Given this hierarchy:
 * // Root: { defaultPortalTo: "#some-element" }
 * // Child: { someOtherProp: "value" } // no defaultPortalTo specified
 *
 * const resolveConfigOption = createConfigResolver(parent, opts);
 * const portalTo = resolveConfigOption(config => config.defaultPortalTo);
 *
 * // portalTo.current === "#some-element" (inherited from parent)
 * // even when child didn't specify `defaultPortalTo`
 * ```
 */
function createConfigResolver(parent, currentOpts) {
	return (getter) => {
		return boxWith(() => {
			const value = getter(currentOpts)?.current;
			if (value !== void 0) return value;
			if (parent === null) return void 0;
			return getter(parent.opts)?.current;
		});
	};
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
/**
 * Creates a generic prop resolver that follows a standard priority chain:
 * 1. The getter's prop value (if defined)
 * 2. The config default value (if no getter prop value is defined)
 * 3. The fallback value (if no config value found)
 */
function createPropResolver(configOption, fallback) {
	return (getProp) => {
		const config = getBitsConfig();
		return boxWith(() => {
			const propValue = getProp();
			if (propValue !== void 0) return propValue;
			const option = configOption(config).current;
			if (option !== void 0) return option;
			return fallback;
		});
	};
}
/**
 * Resolves a portal's `to` value using the prop, the config default, or a fallback.
 *
 * Default value: `"body"`
 */
var resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, 'body');
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Portal$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { to: toProp, children, disabled } = $$props;
		const to = resolvePortalToProp(() => toProp);
		const context = getAllContexts();
		let target = derived(getTarget);
		function getTarget() {
			if (!isBrowser$1 || disabled) return null;
			let localTarget = null;
			if (typeof to.current === 'string')
				localTarget = document.querySelector(to.current);
			else localTarget = to.current;
			return localTarget;
		}
		let instance;
		function unmountInstance() {
			if (instance) {
				unmount(instance);
				instance = null;
			}
		}
		watch([() => target(), () => disabled], ([target, disabled]) => {
			if (!target || disabled) {
				unmountInstance();
				return;
			}
			instance = mount(Portal_consumer, {
				target,
				props: { children },
				context
			});
			return () => {
				unmountInstance();
			};
		});
		if (disabled) {
			$$renderer.push('<!--[0-->');
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/events.js
/**
 * Creates a typed event dispatcher and listener pair for custom events
 * @template T - The type of data that will be passed in the event detail
 * @param eventName - The name of the custom event
 * @param options - CustomEvent options (bubbles, cancelable, etc.)
 */
var CustomEventDispatcher = class {
	eventName;
	options;
	constructor(
		eventName,
		options = {
			bubbles: true,
			cancelable: true
		}
	) {
		this.eventName = eventName;
		this.options = options;
	}
	createEvent(detail) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail
		});
	}
	dispatch(element, detail) {
		const event = this.createEvent(detail);
		element.dispatchEvent(event);
		return event;
	}
	listen(element, callback, options) {
		const handler = (event) => {
			callback(event);
		};
		return on(element, this.eventName, handler, options);
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/debounce.js
function debounce(fn, wait = 500) {
	let timeout = null;
	const debounced = (...args) => {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, wait);
	};
	debounced.destroy = () => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
	};
	return debounced;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/elements.js
function isOrContainsTarget(node, target) {
	return node === target || node.contains(target);
}
function getOwnerDocument(el) {
	return el?.ownerDocument ?? document;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/dom.js
function getFirstNonCommentChild(element) {
	if (!element) return null;
	for (const child of element.childNodes)
		if (child.nodeType !== Node.COMMENT_NODE) return child;
	return null;
}
/**
 * Determines if the click event truly occurred outside the content node.
 * This was added to handle password managers and other elements that may be injected
 * into the DOM but visually appear inside the content.
 */
function isClickTrulyOutside(event, contentNode) {
	const { clientX, clientY } = event;
	const rect = contentNode.getBoundingClientRect();
	return (
		clientX < rect.left ||
		clientX > rect.right ||
		clientY < rect.top ||
		clientY > rect.bottom
	);
}
//#endregion
//#region ../node_modules/.pnpm/tabbable@6.5.0/node_modules/tabbable/dist/index.esm.js
/*!
 * tabbable 6.5.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var candidateSelectors = [
	'input:not([inert]):not([inert] *)',
	'select:not([inert]):not([inert] *)',
	'textarea:not([inert]):not([inert] *)',
	'a[href]:not([inert]):not([inert] *)',
	'area[href]:not([inert]):not([inert] *)',
	'button:not([inert]):not([inert] *)',
	'[tabindex]:not(slot):not([inert]):not([inert] *)',
	'audio[controls]:not([inert]):not([inert] *)',
	'video[controls]:not([inert]):not([inert] *)',
	'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
	'details>summary:first-of-type:not([inert]):not([inert] *)',
	'details:not([inert]):not([inert] *)'
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement
	? function () {}
	: Element.prototype.matches ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
var getRootNode =
	!NoElement && Element.prototype.getRootNode
		? function (element) {
				var _element$getRootNode;
				return element === null || element === void 0
					? void 0
					: (_element$getRootNode = element.getRootNode) === null ||
						  _element$getRootNode === void 0
						? void 0
						: _element$getRootNode.call(element);
			}
		: function (element) {
				return element === null || element === void 0 ? void 0 : element.ownerDocument;
			};
/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Node} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var _isInert = function isInert(node, lookUp) {
	var _node$getAttribute;
	if (lookUp === void 0) lookUp = true;
	var inertAtt =
		node === null || node === void 0
			? void 0
			: (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0
				? void 0
				: _node$getAttribute.call(node, 'inert');
	return (
		inertAtt === '' ||
		inertAtt === 'true' ||
		(lookUp &&
			node &&
			(typeof node.closest === 'function'
				? node.closest('[inert]')
				: _isInert(node.parentNode)))
	);
};
/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
	var _node$getAttribute2;
	var attValue =
		node === null || node === void 0
			? void 0
			: (_node$getAttribute2 = node.getAttribute) === null ||
				  _node$getAttribute2 === void 0
				? void 0
				: _node$getAttribute2.call(node, 'contenteditable');
	return attValue === '' || attValue === 'true';
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
	if (_isInert(el)) return [];
	var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
	if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
	candidates = candidates.filter(filter);
	return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */
/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */
/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */
/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */
/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var _getCandidatesIteratively = function getCandidatesIteratively(
	elements,
	includeContainer,
	options
) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (_isInert(element, false)) continue;
		if (element.tagName === 'SLOT') {
			var assigned = element.assignedElements();
			var nestedCandidates = _getCandidatesIteratively(
				assigned.length ? assigned : element.children,
				true,
				options
			);
			if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
			else
				candidates.push({
					scopeParent: element,
					candidates: nestedCandidates
				});
		} else {
			if (
				matches.call(element, candidateSelector) &&
				options.filter(element) &&
				(includeContainer || !elements.includes(element))
			)
				candidates.push(element);
			var shadowRoot =
				element.shadowRoot ||
				(typeof options.getShadowRoot === 'function' && options.getShadowRoot(element));
			var validShadowRoot =
				!_isInert(shadowRoot, false) &&
				(!options.shadowRootFilter || options.shadowRootFilter(element));
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = _getCandidatesIteratively(
					shadowRoot === true ? element.children : shadowRoot.children,
					true,
					options
				);
				if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
				else
					candidates.push({
						scopeParent: element,
						candidates: _nestedCandidates
					});
			} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
		}
	}
	return candidates;
};
/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
	return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};
/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
	if (!node) throw new Error('No node provided');
	if (node.tabIndex < 0) {
		if (
			(/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) &&
			!hasTabIndex(node)
		)
			return 0;
	}
	return node.tabIndex;
};
/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
	var tabIndex = getTabIndex(node);
	if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
	return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	return a.tabIndex === b.tabIndex
		? a.documentOrder - b.documentOrder
		: a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
	return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
	return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
	return (
		node.tagName === 'DETAILS' &&
		Array.prototype.slice.apply(node.children).some(function (child) {
			return child.tagName === 'SUMMARY';
		})
	);
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
	for (var i = 0; i < nodes.length; i++)
		if (nodes[i].checked && nodes[i].form === form) return nodes[i];
};
var isTabbableRadio = function isTabbableRadio(node) {
	if (!node.name) return true;
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios(name) {
		return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
	};
	var radioSet;
	if (
		typeof window !== 'undefined' &&
		typeof window.CSS !== 'undefined' &&
		typeof window.CSS.escape === 'function'
	)
		radioSet = queryRadios(window.CSS.escape(node.name));
	else
		try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error(
				'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
				err.message
			);
			return false;
		}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio(node) {
	return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached(node) {
	var _nodeRoot;
	var nodeRoot = node && getRootNode(node);
	var nodeRootHost =
		(_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
	var attached = false;
	if (nodeRoot && nodeRoot !== node) {
		var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
		attached = !!(
			((_nodeRootHost = nodeRootHost) !== null &&
				_nodeRootHost !== void 0 &&
				(_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null &&
				_nodeRootHost$ownerDo !== void 0 &&
				_nodeRootHost$ownerDo.contains(nodeRootHost)) ||
			(node !== null &&
				node !== void 0 &&
				(_node$ownerDocument = node.ownerDocument) !== null &&
				_node$ownerDocument !== void 0 &&
				_node$ownerDocument.contains(node))
		);
		while (!attached && nodeRootHost) {
			var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
			nodeRoot = getRootNode(nodeRootHost);
			nodeRootHost =
				(_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0
					? void 0
					: _nodeRoot2.host;
			attached = !!(
				(_nodeRootHost2 = nodeRootHost) !== null &&
				_nodeRootHost2 !== void 0 &&
				(_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null &&
				_nodeRootHost2$ownerD !== void 0 &&
				_nodeRootHost2$ownerD.contains(nodeRootHost)
			);
		}
	}
	return attached;
};
var isZeroArea = function isZeroArea(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(),
		width = _node$getBoundingClie.width,
		height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
	var displayCheck = _ref.displayCheck,
		getShadowRoot = _ref.getShadowRoot;
	if (displayCheck === 'full-native') {
		if ('checkVisibility' in node)
			return !node.checkVisibility({
				checkOpacity: false,
				opacityProperty: false,
				contentVisibilityAuto: true,
				visibilityProperty: true,
				checkVisibilityCSS: true
			});
	}
	var visibility = getComputedStyle(node).visibility;
	if (visibility === 'hidden' || visibility === 'collapse') return true;
	var nodeUnderDetails = matches.call(node, 'details>summary:first-of-type')
		? node.parentElement
		: node;
	if (matches.call(nodeUnderDetails, 'details:not([open]) *')) return true;
	if (
		!displayCheck ||
		displayCheck === 'full' ||
		displayCheck === 'full-native' ||
		displayCheck === 'legacy-full'
	) {
		if (typeof getShadowRoot === 'function') {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (
					parentElement &&
					!parentElement.shadowRoot &&
					getShadowRoot(parentElement) === true
				)
					return isZeroArea(node);
				else if (node.assignedSlot) node = node.assignedSlot;
				else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
				else node = parentElement;
			}
			node = originalNode;
		}
		if (isNodeAttached(node)) return !node.getClientRects().length;
		if (displayCheck !== 'legacy-full') return true;
	} else if (displayCheck === 'non-zero-area') return isZeroArea(node);
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === 'LEGEND')
						return matches.call(parentNode, 'fieldset[disabled] *')
							? true
							: !child.contains(node);
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(
	options,
	node
) {
	if (
		node.disabled ||
		isHiddenInput(node) ||
		isHidden(node, options) ||
		isDetailsWithSummary(node) ||
		isDisabledFromFieldset(node)
	)
		return false;
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(
	options,
	node
) {
	if (
		isNonTabbableRadio(node) ||
		getTabIndex(node) < 0 ||
		!isNodeMatchingSelectorFocusable(options, node)
	)
		return false;
	return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
	var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) return true;
	return false;
};
/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var _sortByOrder = function sortByOrder(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function (item, i) {
		var isScope = !!item.scopeParent;
		var element = isScope ? item.scopeParent : item;
		var candidateTabindex = getSortOrderTabIndex(element, isScope);
		var elements = isScope ? _sortByOrder(item.candidates) : element;
		if (candidateTabindex === 0)
			isScope
				? regularTabbables.push.apply(regularTabbables, elements)
				: regularTabbables.push(element);
		else
			orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements
			});
	});
	return orderedTabbables
		.sort(sortOrderedTabbables)
		.reduce(function (acc, sortable) {
			sortable.isScope
				? acc.push.apply(acc, sortable.content)
				: acc.push(sortable.content);
			return acc;
		}, [])
		.concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot)
		candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isShadowRootTabbable
		});
	else
		candidates = getCandidates(
			container,
			options.includeContainer,
			isNodeMatchingSelectorTabbable.bind(null, options)
		);
	return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot)
		candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorFocusable.bind(null, options),
			flatten: true,
			getShadowRoot: options.getShadowRoot
		});
	else
		candidates = getCandidates(
			container,
			options.includeContainer,
			isNodeMatchingSelectorFocusable.bind(null, options)
		);
	return candidates;
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors
	.concat('iframe:not([inert]):not([inert] *)')
	.join(',');
var isFocusable = function isFocusable(node, options) {
	options = options || {};
	if (!node) throw new Error('No node provided');
	if (matches.call(node, focusableCandidateSelector) === false) return false;
	return isNodeMatchingSelectorFocusable(options, node);
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/menu/menu.svelte.js
var CONTEXT_MENU_TRIGGER_ATTR = 'data-context-menu-trigger';
var CONTEXT_MENU_CONTENT_ATTR = 'data-context-menu-content';
new Context('Menu.Root');
new Context('Menu.Root | Menu.Sub');
new Context('Menu.Content');
new Context('Menu.Group | Menu.RadioGroup');
new Context('Menu.RadioGroup');
new Context('Menu.CheckboxGroup');
new CustomEventDispatcher('bitsmenuopen', {
	bubbles: false,
	cancelable: true
});
createBitsAttrs({
	component: 'menu',
	parts: [
		'trigger',
		'content',
		'sub-trigger',
		'item',
		'group',
		'group-heading',
		'checkbox-group',
		'checkbox-item',
		'radio-group',
		'radio-item',
		'separator',
		'sub-content',
		'arrow'
	]
});
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class DismissibleLayerState {
	static create(opts) {
		return new DismissibleLayerState(opts);
	}
	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: false };
	#isResponsibleLayer = false;
	#isFocusInsideDOMTree = false;
	#documentObj = void 0;
	#onFocusOutside;
	#unsubClickListener = noop$1;
	/**
	 * Set once the layer is torn down. Deferred work scheduled before teardown can
	 * still run afterwards, so every such callback must short-circuit on this
	 * before reading `this.opts.ref.current` — reading a destroyed `$derived`
	 * triggers Svelte's `derived_inert` warning. A class field rather than a
	 * constructor local so the class-field handlers below can see it too.
	 */
	#destroyed = false;
	constructor(opts) {
		this.opts = opts;
		this.#behaviorType = opts.interactOutsideBehavior;
		this.#interactOutsideProp = opts.onInteractOutside;
		this.#onFocusOutside = opts.onFocusOutside;
		let unsubEvents = noop$1;
		let pendingTimer = null;
		const clearPendingTimer = () => {
			if (pendingTimer != null) {
				clearTimeout(pendingTimer);
				pendingTimer = null;
			}
		};
		const cleanup = () => {
			clearPendingTimer();
			this.#resetState();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			unsubEvents();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!this.opts.enabled.current || !this.opts.ref.current) return;
			clearPendingTimer();
			pendingTimer = afterSleep(1, () => {
				pendingTimer = null;
				if (this.#destroyed || !this.opts.ref.current) return;
				globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			});
			return cleanup;
		});
	}
	#handleFocus = (event) => {
		if (event.defaultPrevented) return;
		if (this.#destroyed || !this.opts.ref.current) return;
		afterTick(() => {
			if (this.#destroyed) return;
			if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
			if (event.target && !this.#isFocusInsideDOMTree)
				this.#onFocusOutside.current?.(event);
		});
	};
	#addEventListeners() {
		return executeCallbacks(
			/**
			 * CAPTURE INTERACTION START
			 * mark interaction-start event as intercepted.
			 * mark responsible layer during interaction start
			 * to avoid checking if is responsible layer during interaction end
			 * when a new floating element may have been opened.
			 */
			on(
				this.#documentObj,
				'pointerdown',
				executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer),
				{ capture: true }
			),
			/**
			 * BUBBLE INTERACTION START
			 * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
			 * to avoid prematurely checking if other events were intercepted.
			 */
			on(
				this.#documentObj,
				'pointerdown',
				executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)
			),
			/**
			 * HANDLE FOCUS OUTSIDE
			 */
			on(this.#documentObj, 'focusin', this.#handleFocus)
		);
	}
	#handleDismiss = (e) => {
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(e);
		this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		const isEventValid =
			this.opts.isValidEvent.current(e, this.opts.ref.current) ||
			isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
			this.#unsubClickListener();
			return;
		}
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(event);
		if (
			this.#behaviorType.current !== 'close' &&
			this.#behaviorType.current !== 'defer-otherwise-close'
		) {
			this.#unsubClickListener();
			return;
		}
		if (e.pointerType === 'touch') {
			this.#unsubClickListener();
			this.#unsubClickListener = on(this.#documentObj, 'click', this.#handleDismiss, {
				once: true
			});
		} else this.#interactOutsideProp.current(event);
	}, 10);
	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = true;
	};
	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = false;
	};
	#markResponsibleLayer = () => {
		if (!this.opts.ref.current) return;
		this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
	};
	#isTargetWithinLayer = (target) => {
		if (!this.opts.ref.current) return false;
		return isOrContainsTarget(this.opts.ref.current, target);
	};
	/**
	 * Resets the per-interaction state. Must stay synchronous.
	 *
	 * This was a `debounce(..., 20)` from when it was also wired to a capture-phase
	 * interaction-end listener and had to land after the 10ms `#handleInteractOutside`
	 * debounce. That listener is gone, but the debounce stayed on the `cleanup()` path —
	 * and because `watch` runs `cleanup()` once per open (`ref` goes null -> node), every
	 * layer scheduled a reset 20ms into its own lifetime. An outside `pointerdown` landing
	 * 10-20ms after that cleanup would have its `#isResponsibleLayer` flag cleared by the
	 * stale reset in the gap before the debounced `#handleInteractOutside` ran, which then
	 * bailed and left the layer open. `cleanup()` destroys `#handleInteractOutside` anyway,
	 * so nothing is left in flight that needs to observe the pre-reset state.
	 */
	#resetState = () => {
		for (const eventType in this.#interceptedEvents)
			this.#interceptedEvents[eventType] = false;
		this.#isResponsibleLayer = false;
	};
	#isAnyEventIntercepted() {
		return Object.values(this.#interceptedEvents).some(Boolean);
	}
	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = true;
	};
	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = false;
	};
	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture
	};
};
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
	return layersArr.findLast(
		([_, { current: behaviorType }]) =>
			behaviorType === 'close' || behaviorType === 'ignore'
	);
}
function isResponsibleLayer(node) {
	const layersArr = [...globalThis.bitsDismissableLayers];
	/**
	 * We first check if we can find a top layer with `close` or `ignore`.
	 * If that top layer was found and matches the provided node, then the node is
	 * responsible for the outside interaction. Otherwise, we know that all layers defer so
	 * the first layer is the responsible one.
	 */
	const topMostLayer = getTopMostDismissableLayer(layersArr);
	if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
	const target = e.target;
	if (!isElementOrSVGElement(target)) return false;
	const targetIsContextMenuTrigger = Boolean(
		target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`)
	);
	const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
	if ('button' in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
	if ('button' in e && e.button === 0 && targetIsContextMenuTrigger && nodeIsContextMenu)
		return true;
	if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
	return (
		getOwnerDocument(target).documentElement.contains(target) &&
		!isOrContainsTarget(node, target) &&
		isClickTrulyOutside(e, node)
	);
}
function createWrappedEvent(e) {
	const capturedCurrentTarget = e.currentTarget;
	const capturedTarget = e.target;
	let newEvent;
	if (e instanceof PointerEvent) newEvent = new PointerEvent(e.type, e);
	else newEvent = new PointerEvent('pointerdown', e);
	let isPrevented = false;
	return new Proxy(newEvent, {
		get: (target, prop) => {
			if (prop === 'currentTarget') return capturedCurrentTarget;
			if (prop === 'target') return capturedTarget;
			if (prop === 'preventDefault')
				return () => {
					isPrevented = true;
					if (typeof target.preventDefault === 'function') target.preventDefault();
				};
			if (prop === 'defaultPrevented') return isPrevented;
			if (prop in target) return target[prop];
			return e[prop];
		}
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function Dismissible_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			interactOutsideBehavior = 'close',
			onInteractOutside = noop$1,
			onFocusOutside = noop$1,
			id,
			children,
			enabled,
			isValidEvent = () => false,
			ref
		} = $$props;
		const dismissibleLayerState = DismissibleLayerState.create({
			id: boxWith(() => id),
			interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
			onInteractOutside: boxWith(() => onInteractOutside),
			enabled: boxWith(() => enabled),
			onFocusOutside: boxWith(() => onFocusOutside),
			isValidEvent: boxWith(() => isValidEvent),
			ref
		});
		children?.($$renderer, { props: dismissibleLayerState.props });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class EscapeLayerState {
	static create(opts) {
		return new EscapeLayerState(opts);
	}
	opts;
	domContext;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		let unsubEvents = noop$1;
		watch(
			() => opts.enabled.current,
			(enabled) => {
				if (enabled) {
					globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
					unsubEvents = this.#addEventListener();
				}
				return () => {
					unsubEvents();
					globalThis.bitsEscapeLayers.delete(this);
				};
			}
		);
	}
	#addEventListener = () => {
		return on(this.domContext.getDocument(), 'keydown', this.#onkeydown, {
			passive: false
		});
	};
	#onkeydown = (e) => {
		if (e.key !== 'Escape' || !isResponsibleEscapeLayer(this)) return;
		const clonedEvent = new KeyboardEvent(e.type, e);
		e.preventDefault();
		const behaviorType = this.opts.escapeKeydownBehavior.current;
		if (behaviorType !== 'close' && behaviorType !== 'defer-otherwise-close') return;
		this.opts.onEscapeKeydown.current(clonedEvent);
	};
};
function isResponsibleEscapeLayer(instance) {
	const layersArr = [...globalThis.bitsEscapeLayers];
	/**
	 * We first check if we can find a top layer with `close` or `ignore`.
	 * If that top layer was found and matches the provided node, then the node is
	 * responsible for the escape. Otherwise, we know that all layers defer so
	 * the first layer is the responsible one.
	 */
	const topMostLayer = layersArr.findLast(
		([_, { current: behaviorType }]) =>
			behaviorType === 'close' || behaviorType === 'ignore'
	);
	if (topMostLayer) return topMostLayer[0] === instance;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode === instance;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Escape_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			escapeKeydownBehavior = 'close',
			onEscapeKeydown = noop$1,
			children,
			enabled,
			ref
		} = $$props;
		EscapeLayerState.create({
			escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior),
			onEscapeKeydown: boxWith(() => onEscapeKeydown),
			enabled: boxWith(() => enabled),
			ref
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var FocusScopeManager = class FocusScopeManager {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		if (!this.instance) this.instance = new FocusScopeManager();
		return this.instance;
	}
	register(scope) {
		const current = this.getActive();
		if (current && current !== scope) current.pause();
		const activeElement = document.activeElement;
		if (activeElement && activeElement !== document.body)
			this.#preFocusHistory.set(scope, activeElement);
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		this.#scopeStack.current.unshift(scope);
	}
	unregister(scope) {
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		const next = this.getActive();
		if (next) next.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(scope, element) {
		this.#focusHistory.set(scope, element);
	}
	getFocusMemory(scope) {
		return this.#focusHistory.get(scope);
	}
	isActiveScope(scope) {
		return this.getActive() === scope;
	}
	setPreFocusMemory(scope, element) {
		this.#preFocusHistory.set(scope, element);
	}
	getPreFocusMemory(scope) {
		return this.#preFocusHistory.get(scope);
	}
	clearPreFocusMemory(scope) {
		this.#preFocusHistory.delete(scope);
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte.js
var FocusScope = class FocusScope {
	#paused = false;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(opts) {
		this.#opts = opts;
	}
	get paused() {
		return this.#paused;
	}
	pause() {
		this.#paused = true;
	}
	resume() {
		this.#paused = false;
	}
	#cleanup() {
		for (const fn of this.#cleanupFns) fn();
		this.#cleanupFns = [];
	}
	mount(container) {
		if (this.#container) this.unmount();
		this.#container = container;
		this.#manager.register(this);
		this.#setupEventListeners();
		this.#handleOpenAutoFocus();
	}
	unmount() {
		if (!this.#container) return;
		this.#cleanup();
		this.#handleCloseAutoFocus();
		this.#manager.unregister(this);
		this.#manager.clearPreFocusMemory(this);
		this.#container = null;
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		const event = new CustomEvent('focusScope.onOpenAutoFocus', {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onOpenAutoFocus.current(event);
		if (!event.defaultPrevented)
			requestAnimationFrame(() => {
				if (!this.#container) return;
				const firstTabbable = this.#getFirstTabbable();
				if (firstTabbable) {
					firstTabbable.focus();
					this.#manager.setFocusMemory(this, firstTabbable);
				} else this.#container.focus();
			});
	}
	#handleCloseAutoFocus() {
		const event = new CustomEvent('focusScope.onCloseAutoFocus', {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onCloseAutoFocus.current?.(event);
		if (!event.defaultPrevented) {
			const preFocusedElement = this.#manager.getPreFocusMemory(this);
			if (preFocusedElement && document.contains(preFocusedElement))
				try {
					preFocusedElement.focus();
				} catch {
					document.body.focus();
				}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		const container = this.#container;
		const doc = container.ownerDocument;
		const handleFocus = (e) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			const target = e.target;
			if (!target) return;
			if (container.contains(target)) this.#manager.setFocusMemory(this, target);
			else {
				const lastFocused = this.#manager.getFocusMemory(this);
				if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
					e.preventDefault();
					lastFocused.focus();
				} else {
					const firstTabbable = this.#getFirstTabbable();
					const firstFocusable = this.#getAllFocusables()[0];
					(firstTabbable || firstFocusable || container).focus();
				}
			}
		};
		const handleKeydown = (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== 'Tab') return;
			if (!this.#manager.isActiveScope(this)) return;
			const tabbables = this.#getTabbables();
			if (tabbables.length === 0) return;
			const first = tabbables[0];
			const last = tabbables[tabbables.length - 1];
			if (!e.shiftKey && doc.activeElement === last) {
				e.preventDefault();
				first.focus();
			} else if (e.shiftKey && doc.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		};
		this.#cleanupFns.push(
			on(doc, 'focusin', handleFocus, { capture: true }),
			on(container, 'keydown', handleKeydown)
		);
		const observer = new MutationObserver(() => {
			const lastFocused = this.#manager.getFocusMemory(this);
			if (lastFocused && !container.contains(lastFocused)) {
				const firstTabbable = this.#getFirstTabbable();
				const firstFocusable = this.#getAllFocusables()[0];
				const elementToFocus = firstTabbable || firstFocusable;
				if (elementToFocus) {
					elementToFocus.focus();
					this.#manager.setFocusMemory(this, elementToFocus);
				} else container.focus();
			}
		});
		observer.observe(container, {
			childList: true,
			subtree: true
		});
		this.#cleanupFns.push(() => observer.disconnect());
	}
	#getTabbables() {
		if (!this.#container) return [];
		return tabbable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	#getFirstTabbable() {
		return this.#getTabbables()[0] || null;
	}
	#getAllFocusables() {
		if (!this.#container) return [];
		return focusable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	static use(opts) {
		let scope = null;
		watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
			if (ref && enabled) {
				if (!scope) scope = new FocusScope(opts);
				scope.mount(ref);
			} else if (scope) {
				scope.unmount();
				scope = null;
			}
		});
		return {
			get props() {
				return { tabindex: -1 };
			}
		};
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Focus_scope($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			enabled = false,
			trapFocus = false,
			loop = false,
			onCloseAutoFocus = noop$1,
			onOpenAutoFocus = noop$1,
			focusScope,
			ref
		} = $$props;
		const focusScopeState = FocusScope.use({
			enabled: boxWith(() => enabled),
			trap: boxWith(() => trapFocus),
			loop,
			onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
			onOpenAutoFocus: boxWith(() => onOpenAutoFocus),
			ref
		});
		focusScope?.($$renderer, { props: focusScopeState.props });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var noopPointer = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class TextSelectionLayerState {
	static create(opts) {
		return new TextSelectionLayerState(opts);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop$1;
	#enabledSnapshot = false;
	#onPointerDownSnapshot = noopPointer;
	#onPointerUpSnapshot = noopPointer;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(opts.ref);
		let unsubEvents = noop$1;
		watch(
			() => [
				this.opts.enabled.current,
				this.opts.onPointerDown.current,
				this.opts.onPointerUp.current
			],
			([enabled, onPointerDown, onPointerUp]) => {
				this.#enabledSnapshot = enabled;
				this.#onPointerDownSnapshot = onPointerDown;
				this.#onPointerUpSnapshot = onPointerUp;
				if (enabled) {
					globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
					unsubEvents();
					unsubEvents = this.#addEventListeners();
				}
				return () => {
					this.#enabledSnapshot = false;
					unsubEvents();
					this.#resetSelectionLock();
					globalThis.bitsTextSelectionLayers.delete(this);
				};
			}
		);
	}
	#addEventListeners() {
		return executeCallbacks(
			on(this.domContext.getDocument(), 'pointerdown', this.#pointerdown),
			on(
				this.domContext.getDocument(),
				'pointerup',
				composeHandlers(this.#resetSelectionLock, this.#pointerupUserHandler)
			)
		);
	}
	#pointerupUserHandler = (e) => {
		this.#onPointerUpSnapshot(e);
	};
	#pointerdown = (e) => {
		if (!this.#enabledSnapshot) return;
		const node = this.opts.ref.current;
		const target = e.target;
		if (!isHTMLElement(node) || !isHTMLElement(target)) return;
		/**
		 * We only lock user-selection overflow if layer is the top most layer and
		 * pointerdown occurred inside the node. You are still allowed to select text
		 * outside the node provided pointerdown occurs outside the node.
		 */
		if (!isHighestLayer(this) || !contains(node, target)) return;
		this.#onPointerDownSnapshot(e);
		if (e.defaultPrevented) return;
		this.#unsubSelectionLock = preventTextSelectionOverflow(
			node,
			this.domContext.getDocument().body
		);
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock();
		this.#unsubSelectionLock = noop$1;
	};
};
var getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
	const originalBodyUserSelect = getUserSelect(body);
	const originalNodeUserSelect = getUserSelect(node);
	setUserSelect(body, 'none');
	setUserSelect(node, 'text');
	return () => {
		setUserSelect(body, originalBodyUserSelect);
		setUserSelect(node, originalNodeUserSelect);
	};
}
function setUserSelect(node, value) {
	node.style.userSelect = value;
	node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
	const layersArr = [...globalThis.bitsTextSelectionLayers];
	if (!layersArr.length) return false;
	const highestLayer = layersArr.at(-1);
	if (!highestLayer) return false;
	return highestLayer[0] === instance;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Text_selection_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			preventOverflowTextSelection = true,
			onPointerDown = noop$1,
			onPointerUp = noop$1,
			id,
			children,
			enabled,
			ref
		} = $$props;
		TextSelectionLayerState.create({
			id: boxWith(() => id),
			onPointerDown: boxWith(() => onPointerDown),
			onPointerUp: boxWith(() => onPointerUp),
			enabled: boxWith(() => enabled && preventOverflowTextSelection),
			ref
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
/**
 * Generates a unique ID based on a global counter.
 */
function useId(prefix = 'bits') {
	globalThis.bitsIdCounter.current++;
	return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/shared-state.svelte.js
var SharedState = class {
	#factory;
	#subscribers = 0;
	#state;
	#scope;
	constructor(factory) {
		this.#factory = factory;
	}
	#dispose() {
		this.#subscribers -= 1;
		if (this.#scope && this.#subscribers <= 0) {
			this.#scope();
			this.#state = void 0;
			this.#scope = void 0;
		}
	}
	get(...args) {
		this.#subscribers += 1;
		if (this.#state === void 0) this.#scope = () => {};
		return this.#state;
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/body-scroll-lock.svelte.js
var lockMap = new SvelteMap();
var initialBodyStyle = null;
var cleanupTimeoutId = null;
var isInCleanupTransition = false;
var anyLocked = boxWith(() => {
	for (const value of lockMap.values()) if (value) return true;
	return false;
});
/**
 * We track the time we scheduled the cleanup to prevent race conditions
 * when multiple locks are created/destroyed in the same tick, ensuring
 * only the last one to schedule the cleanup will run.
 *
 * reference: https://github.com/huntabyte/bits-ui/issues/1639
 */
var cleanupScheduledAt = null;
var bodyLockStackCount = new SharedState(() => {
	function resetBodyStyle(documentObj) {}
	function cancelPendingCleanup() {
		if (cleanupTimeoutId === null) return;
		window.clearTimeout(cleanupTimeoutId);
		cleanupTimeoutId = null;
	}
	function scheduleCleanupIfNoNewLocks(delay, callback) {
		cancelPendingCleanup();
		isInCleanupTransition = true;
		cleanupScheduledAt = Date.now();
		const currentCleanupId = cleanupScheduledAt;
		/**
		 * We schedule the cleanup to run after a delay to allow new locks to register
		 * that might have been added in the same tick as the current cleanup.
		 *
		 * If a new lock is added in the same tick, the cleanup will be cancelled and
		 * a new cleanup will be scheduled.
		 *
		 * This is to prevent the cleanup from running too early and resetting the body
		 * style before the new lock has had a chance to apply its styles.
		 */
		const cleanupFn = () => {
			cleanupTimeoutId = null;
			if (cleanupScheduledAt !== currentCleanupId) return;
			if (!isAnyLocked(lockMap)) {
				isInCleanupTransition = false;
				callback();
			} else isInCleanupTransition = false;
		};
		const actualDelay = delay === null ? 24 : delay;
		cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
	}
	function ensureInitialStyleCaptured() {
		if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition)
			initialBodyStyle = document.body.getAttribute('style');
	}
	watch(
		() => anyLocked.current,
		() => {
			if (!anyLocked.current) return;
			ensureInitialStyleCaptured();
			isInCleanupTransition = false;
			const htmlStyle = getComputedStyle(document.documentElement);
			const bodyStyle = getComputedStyle(document.body);
			const hasStableGutter =
				htmlStyle.scrollbarGutter?.includes('stable') ||
				bodyStyle.scrollbarGutter?.includes('stable');
			const verticalScrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			const config = {
				padding:
					Number.parseInt(bodyStyle.paddingRight ?? '0', 10) + verticalScrollbarWidth,
				margin: Number.parseInt(bodyStyle.marginRight ?? '0', 10)
			};
			if (verticalScrollbarWidth > 0 && !hasStableGutter) {
				document.body.style.paddingRight = `${config.padding}px`;
				document.body.style.marginRight = `${config.margin}px`;
				document.body.style.setProperty(
					'--scrollbar-width',
					`${verticalScrollbarWidth}px`
				);
			}
			document.body.style.overflow = 'hidden';
			if (isIOS)
				on(
					document,
					'touchmove',
					(e) => {
						if (e.target !== document.documentElement) return;
						if (e.touches.length > 1) return;
						e.preventDefault();
					},
					{ passive: false }
				);
			/**
			 * We ensure pointer-events: none is applied _after_ DOM updates, so that any focus/
			 * interaction changes from opening overlays/menus complete _before_ we block pointer
			 * events.
			 *
			 * this avoids race conditions where pointer-events could be set too early and break
			 * focus/interaction.
			 */
			afterTick(() => {
				document.body.style.pointerEvents = 'none';
				document.body.style.overflow = 'hidden';
			});
		}
	);
	return {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle,
		scheduleCleanupIfNoNewLocks,
		cancelPendingCleanup,
		ensureInitialStyleCaptured
	};
});
var BodyScrollLock = class {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(initialState, restoreScrollDelay = () => null) {
		this.#initialState = initialState;
		this.#restoreScrollDelay = restoreScrollDelay;
		this.#countState = bodyLockStackCount.get();
		if (!this.#countState) return;
		/**
		 * Since a new lock is being created, we cancel any pending cleanup to
		 * prevent the cleanup from running too early and resetting the body style
		 * before the new lock has had a chance to apply its styles.
		 *
		 * reference: https://github.com/huntabyte/bits-ui/issues/1639
		 */
		this.#countState.cancelPendingCleanup();
		this.#countState.ensureInitialStyleCaptured();
		this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
		this.locked = boxWith(
			() => this.#countState.lockMap.get(this.#id) ?? false,
			(v) => this.#countState.lockMap.set(this.#id, v)
		);
	}
};
function isAnyLocked(map) {
	for (const [_, value] of map) if (value) return true;
	return false;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Scroll_lock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { preventScroll = true, restoreScrollDelay = null } = $$props;
		if (preventScroll) new BodyScrollLock(preventScroll, () => restoreScrollDelay);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-overlay.svelte
function Dialog_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			forceMount = false,
			child,
			children,
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const overlayState = DialogOverlayState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, overlayState.props));
		if (overlayState.shouldRender || forceMount) {
			$$renderer.push('<!--[0-->');
			if (child) {
				$$renderer.push('<!--[0-->');
				child($$renderer, {
					props: mergeProps(mergedProps()),
					...overlayState.snippetProps
				});
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push(`<!--[-1--><div${attributes({ ...mergeProps(mergedProps()) })}>`);
				children?.($$renderer, overlayState.snippetProps);
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-trigger.svelte
function Dialog_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			children,
			child,
			disabled = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const triggerState = DialogTriggerState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			disabled: boxWith(() => Boolean(disabled))
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-description.svelte
function Dialog_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			children,
			child,
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const descriptionState = DialogDescriptionState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, descriptionState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/utils.js
function findNextSibling(el, selector) {
	let sibling = el.nextElementSibling;
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling;
	}
}
function findPreviousSibling(el, selector) {
	let sibling = el.previousElementSibling;
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.previousElementSibling;
	}
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/css-escape.js
/**
 * https://github.com/mathiasbynens/CSS.escape
 *
 * @param value - The value to escape for use as a CSS identifier
 * @returns The escaped CSS identifier string
 */
function cssEscape(value) {
	if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function')
		return CSS.escape(value);
	const length = value.length;
	let index = -1;
	let codeUnit;
	let result = '';
	const firstCodeUnit = value.charCodeAt(0);
	if (length === 1 && firstCodeUnit === 45) return '\\' + value;
	while (++index < length) {
		codeUnit = value.charCodeAt(index);
		if (codeUnit === 0) {
			result += '�';
			continue;
		}
		if (
			(codeUnit >= 1 && codeUnit <= 31) ||
			codeUnit === 127 ||
			(index === 0 && codeUnit >= 48 && codeUnit <= 57) ||
			(index === 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit === 45)
		) {
			result += '\\' + codeUnit.toString(16) + ' ';
			continue;
		}
		if (
			codeUnit >= 128 ||
			codeUnit === 45 ||
			codeUnit === 95 ||
			(codeUnit >= 48 && codeUnit <= 57) ||
			(codeUnit >= 65 && codeUnit <= 90) ||
			(codeUnit >= 97 && codeUnit <= 122)
		) {
			result += value.charAt(index);
			continue;
		}
		result += '\\' + value.charAt(index);
	}
	return result;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/command.svelte.js
var COMMAND_VALUE_ATTR = 'data-value';
var commandAttrs = createBitsAttrs({
	component: 'command',
	parts: [
		'root',
		'list',
		'input',
		'separator',
		'loading',
		'empty',
		'group',
		'group-items',
		'group-heading',
		'item',
		'viewport',
		'input-label'
	]
});
var COMMAND_GROUP_SELECTOR = commandAttrs.selector('group');
var COMMAND_GROUP_ITEMS_SELECTOR = commandAttrs.selector('group-items');
var COMMAND_GROUP_HEADING_SELECTOR = commandAttrs.selector('group-heading');
var COMMAND_ITEM_SELECTOR = commandAttrs.selector('item');
var COMMAND_VALID_ITEM_SELECTOR = `${commandAttrs.selector('item')}:not([aria-disabled="true"])`;
var CommandRootContext = new Context('Command.Root');
var CommandListContext = new Context('Command.List');
var CommandGroupContainerContext = new Context('Command.Group');
var defaultState = {
	search: '',
	value: '',
	filtered: {
		count: 0,
		items: /* @__PURE__ */ new Map(),
		groups: /* @__PURE__ */ new Set()
	}
};
var CommandRootState = class CommandRootState {
	static create(opts) {
		return CommandRootContext.set(new CommandRootState(opts));
	}
	opts;
	attachment;
	#updateScheduled = false;
	#isInitialMount = true;
	sortAfterTick = false;
	sortAndFilterAfterTick = false;
	allItems = /* @__PURE__ */ new Set();
	allGroups = /* @__PURE__ */ new Map();
	allIds = /* @__PURE__ */ new Map();
	key = 0;
	viewportNode = null;
	inputNode = null;
	labelNode = null;
	commandState = defaultState;
	_commandState = defaultState;
	#snapshot() {
		return snapshot(this._commandState);
	}
	#scheduleUpdate() {
		if (this.#updateScheduled) return;
		this.#updateScheduled = true;
		afterTick(() => {
			this.#updateScheduled = false;
			const currentState = this.#snapshot();
			if (!Object.is(this.commandState, currentState)) {
				this.commandState = currentState;
				this.opts.onStateChange?.current?.(currentState);
			}
		});
	}
	setState(key, value, preventScroll) {
		if (Object.is(this._commandState[key], value)) return;
		this._commandState[key] = value;
		if (key === 'search') {
			this.#filterItems();
			this.#sort();
		} else if (key === 'value') {
			if (!preventScroll) this.#scrollSelectedIntoView();
		}
		this.#scheduleUpdate();
	}
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		const defaults = {
			...this._commandState,
			value: this.opts.value.current ?? ''
		};
		this._commandState = defaults;
		this.commandState = defaults;
		this.onkeydown = this.onkeydown.bind(this);
	}
	/**
	 * Calculates score for an item based on search text and keywords.
	 * Higher score = better match.
	 *
	 * @param value - Item's display text
	 * @param keywords - Optional keywords to boost scoring
	 * @returns Score from 0-1, where 0 = no match
	 */
	#score(value, keywords) {
		const filter = this.opts.filter.current ?? computeCommandScore;
		return value ? filter(value, this._commandState.search, keywords) : 0;
	}
	/**
	 * Sorts items and groups based on search scores.
	 * Groups are sorted by their highest scoring item.
	 * When no search active, selects first item.
	 */
	#sort() {
		if (!this._commandState.search || this.opts.shouldFilter.current === false) {
			if (!this._commandState.value || !this.#isInitialMount) this.#selectFirstItem();
			else if (this.#isInitialMount && this._commandState.value)
				this.#scrollInitialValue();
			return;
		}
		const scores = this._commandState.filtered.items;
		const groups = [];
		for (const value of this._commandState.filtered.groups) {
			const items = this.allGroups.get(value);
			let max = 0;
			if (!items) {
				groups.push([value, max]);
				continue;
			}
			for (const item of items) {
				const score = scores.get(item);
				max = Math.max(score ?? 0, max);
			}
			groups.push([value, max]);
		}
		const listInsertionElement = this.viewportNode;
		const sorted = this.getValidItems().sort((a, b) => {
			const valueA = a.getAttribute('data-value');
			const valueB = b.getAttribute('data-value');
			const scoresA = scores.get(valueA) ?? 0;
			return (scores.get(valueB) ?? 0) - scoresA;
		});
		for (const item of sorted) {
			const group = item.closest(COMMAND_GROUP_ITEMS_SELECTOR);
			if (group) {
				const itemToAppend =
					item.parentElement === group
						? item
						: item.closest(`${COMMAND_GROUP_ITEMS_SELECTOR} > *`);
				if (itemToAppend) group.appendChild(itemToAppend);
			} else {
				const itemToAppend =
					item.parentElement === listInsertionElement
						? item
						: item.closest(`${COMMAND_GROUP_ITEMS_SELECTOR} > *`);
				if (itemToAppend) listInsertionElement?.appendChild(itemToAppend);
			}
		}
		const sortedGroups = groups.sort((a, b) => b[1] - a[1]);
		for (const group of sortedGroups) {
			const element = listInsertionElement?.querySelector(
				`${COMMAND_GROUP_SELECTOR}[${COMMAND_VALUE_ATTR}="${cssEscape(group[0])}"]`
			);
			element?.parentElement?.appendChild(element);
		}
		this.#selectFirstItem();
	}
	/**
	 * Sets current value and triggers re-render if cleared.
	 *
	 * @param value - New value to set
	 */
	setValue(value, opts) {
		if (value !== this.opts.value.current && value === '')
			afterTick(() => {
				this.key++;
			});
		this.setState('value', value, opts);
		this.opts.value.current = value;
	}
	/**
	 * Selects first non-disabled item on next tick.
	 */
	#selectFirstItem() {
		afterTick(() => {
			const value = this.getValidItems()
				.find((item) => item.getAttribute('aria-disabled') !== 'true')
				?.getAttribute(COMMAND_VALUE_ATTR);
			const shouldPreventScroll =
				this.#isInitialMount && this.opts.disableInitialScroll.current;
			this.setValue(value ?? '', shouldPreventScroll);
			this.#isInitialMount = false;
		});
	}
	/**
	 * Scrolls the initial value into view if it exists and is not the first item.
	 * Called during initial mount when a value is provided.
	 */
	#scrollInitialValue() {
		afterTick(() => {
			if (!this.opts.disableInitialScroll.current) this.#scrollSelectedIntoView();
			this.#isInitialMount = false;
		});
	}
	/**
	 * Updates filtered items/groups based on search.
	 * Recalculates scores and filtered count.
	 */
	#filterItems() {
		if (!this._commandState.search || this.opts.shouldFilter.current === false) {
			this._commandState.filtered.count = this.allItems.size;
			return;
		}
		this._commandState.filtered.groups = /* @__PURE__ */ new Set();
		let itemCount = 0;
		for (const id of this.allItems) {
			const value = this.allIds.get(id)?.value ?? '';
			const keywords = this.allIds.get(id)?.keywords ?? [];
			const rank = this.#score(value, keywords);
			this._commandState.filtered.items.set(id, rank);
			if (rank > 0) itemCount++;
		}
		for (const [groupId, group] of this.allGroups)
			for (const itemId of group) {
				const currItem = this._commandState.filtered.items.get(itemId);
				if (currItem && currItem > 0) {
					this._commandState.filtered.groups.add(groupId);
					break;
				}
			}
		this._commandState.filtered.count = itemCount;
	}
	/**
	 * Gets all non-disabled, visible command items.
	 *
	 * @returns Array of valid item elements
	 * @remarks Exposed for direct item access and bound checking
	 */
	getValidItems() {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(COMMAND_VALID_ITEM_SELECTOR)).filter(
			(el) => !!el
		);
	}
	/**
	 * Gets all visible command items.
	 *
	 * @returns Array of valid item elements
	 * @remarks Exposed for direct item access and bound checking
	 */
	getVisibleItems() {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(COMMAND_ITEM_SELECTOR)).filter((el) => !!el);
	}
	/** Returns all visible items in a matrix structure
	 *
	 * @remarks Returns empty if the command isn't configured as a grid
	 *
	 * @returns
	 */
	get itemsGrid() {
		if (!this.isGrid) return [];
		const columns = this.opts.columns.current ?? 1;
		const items = this.getVisibleItems();
		const grid = [[]];
		let currentGroup = items[0]?.getAttribute('data-group');
		let column = 0;
		let row = 0;
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const itemGroup = item?.getAttribute('data-group');
			if (currentGroup !== itemGroup) {
				currentGroup = itemGroup;
				column = 1;
				row++;
				grid.push([
					{
						index: i,
						firstRowOfGroup: true,
						ref: item
					}
				]);
			} else {
				column++;
				if (column > columns) {
					row++;
					column = 1;
					grid.push([]);
				}
				grid[row]?.push({
					index: i,
					firstRowOfGroup: grid[row]?.[0]?.firstRowOfGroup ?? i === 0,
					ref: item
				});
			}
		}
		return grid;
	}
	/**
	 * Gets currently selected command item.
	 *
	 * @returns Selected element or undefined
	 */
	#getSelectedItem() {
		const node = this.opts.ref.current;
		if (!node) return;
		const selectedNode = node.querySelector(
			`${COMMAND_VALID_ITEM_SELECTOR}[data-selected]`
		);
		if (!selectedNode) return;
		return selectedNode;
	}
	/**
	 * Scrolls selected item into view.
	 * Special handling for first items in groups.
	 */
	#scrollSelectedIntoView() {
		afterTick(() => {
			const item = this.#getSelectedItem();
			if (!item) return;
			const grandparent = item.parentElement?.parentElement;
			if (!grandparent) return;
			if (this.isGrid) {
				const isFirstRowOfGroup = this.#itemIsFirstRowOfGroup(item);
				item.scrollIntoView({ block: 'nearest' });
				if (isFirstRowOfGroup) {
					item
						?.closest(COMMAND_GROUP_SELECTOR)
						?.querySelector(COMMAND_GROUP_HEADING_SELECTOR)
						?.scrollIntoView({ block: 'nearest' });
					return;
				}
			} else {
				const firstChildOfParent = getFirstNonCommentChild(grandparent);
				if (
					firstChildOfParent &&
					firstChildOfParent.dataset?.value === item.dataset?.value
				) {
					item
						?.closest(COMMAND_GROUP_SELECTOR)
						?.querySelector(COMMAND_GROUP_HEADING_SELECTOR)
						?.scrollIntoView({ block: 'nearest' });
					return;
				}
			}
			item.scrollIntoView({ block: 'nearest' });
		});
	}
	#itemIsFirstRowOfGroup(item) {
		const grid = this.itemsGrid;
		if (grid.length === 0) return false;
		for (let r = 0; r < grid.length; r++) {
			const row = grid[r];
			if (row === void 0) continue;
			for (let c = 0; c < row.length; c++) {
				const column = row[c];
				if (column === void 0 || column.ref !== item) continue;
				return column.firstRowOfGroup;
			}
		}
		return false;
	}
	/**
	 * Sets selection to item at specified index in valid items array.
	 * If index is out of bounds, does nothing.
	 *
	 * @param index - Zero-based index of item to select
	 * @remarks
	 * Uses `getValidItems()` to get selectable items, filtering out disabled/hidden ones.
	 * Access valid items directly via `getValidItems()` to check bounds before calling.
	 *
	 * @example
	 * // get valid items length for bounds check
	 * const items = getValidItems()
	 * if (index < items.length) {
	 *   updateSelectedToIndex(index)
	 * }
	 */
	updateSelectedToIndex(index) {
		const item = this.getValidItems()[index];
		if (!item) return;
		this.setValue(item.getAttribute(COMMAND_VALUE_ATTR) ?? '');
	}
	/**
	 * Updates selected item by moving up/down relative to current selection.
	 * Handles wrapping when loop option is enabled.
	 *
	 * @param change - Direction to move: 1 for next item, -1 for previous item
	 * @remarks
	 * The loop behavior wraps:
	 * - From last item to first when moving next
	 * - From first item to last when moving previous
	 *
	 * Uses `getValidItems()` to get all selectable items, which filters out disabled/hidden items.
	 * You can call `getValidItems()` directly to get the current valid items array.
	 *
	 * @example
	 * // select next item
	 * updateSelectedByItem(1)
	 *
	 * // get all valid items
	 * const items = getValidItems()
	 */
	updateSelectedByItem(change) {
		const selected = this.#getSelectedItem();
		const items = this.getValidItems();
		const index = items.findIndex((item) => item === selected);
		let newSelected = items[index + change];
		if (this.opts.loop.current)
			newSelected =
				index + change < 0
					? items[items.length - 1]
					: index + change === items.length
						? items[0]
						: items[index + change];
		if (newSelected) this.setValue(newSelected.getAttribute(COMMAND_VALUE_ATTR) ?? '');
	}
	/**
	 * Moves selection to the first valid item in the next/previous group.
	 * If no group is found, falls back to selecting the next/previous item globally.
	 *
	 * @param change - Direction to move: 1 for next group, -1 for previous group
	 * @example
	 * // move to first item in next group
	 * updateSelectedByGroup(1)
	 *
	 * // move to first item in previous group
	 * updateSelectedByGroup(-1)
	 */
	updateSelectedByGroup(change) {
		let group = this.#getSelectedItem()?.closest(COMMAND_GROUP_SELECTOR);
		let item;
		while (group && !item) {
			group =
				change > 0
					? findNextSibling(group, COMMAND_GROUP_SELECTOR)
					: findPreviousSibling(group, COMMAND_GROUP_SELECTOR);
			item = group?.querySelector(COMMAND_VALID_ITEM_SELECTOR);
		}
		if (item) this.setValue(item.getAttribute(COMMAND_VALUE_ATTR) ?? '');
		else this.updateSelectedByItem(change);
	}
	/**
	 * Maps item id to display value and search keywords.
	 * Returns cleanup function to remove mapping.
	 *
	 * @param id - Unique item identifier
	 * @param value - Display text
	 * @param keywords - Optional search boost terms
	 * @returns Cleanup function
	 */
	registerValue(value, keywords) {
		if (!(value && value === this.allIds.get(value)?.value))
			this.allIds.set(value, {
				value,
				keywords
			});
		this._commandState.filtered.items.set(value, this.#score(value, keywords));
		if (!this.sortAfterTick) {
			this.sortAfterTick = true;
			afterTick(() => {
				this.#sort();
				this.sortAfterTick = false;
			});
		}
		return () => {
			this.allIds.delete(value);
		};
	}
	/**
	 * Registers item in command list and its group.
	 * Handles filtering, sorting and selection updates.
	 *
	 * @param id - Item identifier
	 * @param groupId - Optional group to add item to
	 * @returns Cleanup function that handles selection
	 */
	registerItem(id, groupId) {
		this.allItems.add(id);
		if (groupId) {
			if (!this.allGroups.has(groupId))
				this.allGroups.set(groupId, /* @__PURE__ */ new Set([id]));
			else this.allGroups.get(groupId).add(id);
		}
		if (!this.sortAndFilterAfterTick) {
			this.sortAndFilterAfterTick = true;
			afterTick(() => {
				this.#filterItems();
				this.#sort();
				this.sortAndFilterAfterTick = false;
			});
		}
		this.#scheduleUpdate();
		return () => {
			const selectedItem = this.#getSelectedItem();
			this.allItems.delete(id);
			this.commandState.filtered.items.delete(id);
			this.#filterItems();
			if (selectedItem?.getAttribute('id') === id) this.#selectFirstItem();
			this.#scheduleUpdate();
		};
	}
	/**
	 * Creates empty group if not exists.
	 *
	 * @param id - Group identifier
	 * @returns Cleanup function
	 */
	registerGroup(id) {
		if (!this.allGroups.has(id)) this.allGroups.set(id, /* @__PURE__ */ new Set());
		return () => {
			this.allIds.delete(id);
			this.allGroups.delete(id);
		};
	}
	get isGrid() {
		return this.opts.columns.current !== null;
	}
	/**
	 * Selects last valid item.
	 */
	#last() {
		return this.updateSelectedToIndex(this.getValidItems().length - 1);
	}
	/**
	 * Handles next item selection:
	 * - Meta: Jump to last
	 * - Alt: Next group
	 * - Default: Next item
	 *
	 * @param e - Keyboard event
	 */
	#next(e) {
		e.preventDefault();
		if (e.metaKey) this.#last();
		else if (e.altKey) this.updateSelectedByGroup(1);
		else this.updateSelectedByItem(1);
	}
	#down(e) {
		if (this.opts.columns.current === null) return;
		e.preventDefault();
		if (e.metaKey) this.updateSelectedByGroup(1);
		else this.updateSelectedByItem(this.#nextRowColumnOffset(e));
	}
	#getColumn(item, grid) {
		if (grid.length === 0) return null;
		for (let r = 0; r < grid.length; r++) {
			const row = grid[r];
			if (row === void 0) continue;
			for (let c = 0; c < row.length; c++) {
				const column = row[c];
				if (column === void 0 || column.ref !== item) continue;
				return {
					columnIndex: c,
					rowIndex: r
				};
			}
		}
		return null;
	}
	#nextRowColumnOffset(e) {
		const grid = this.itemsGrid;
		const selected = this.#getSelectedItem();
		if (!selected) return 0;
		const column = this.#getColumn(selected, grid);
		if (!column) return 0;
		let newItem = null;
		const skipRows = e.altKey ? 1 : 0;
		if (e.altKey && column.rowIndex === grid.length - 2 && !this.opts.loop.current)
			newItem = this.#findNextNonDisabledItem({
				start: grid.length - 1,
				end: grid.length,
				expectedColumnIndex: column.columnIndex,
				grid
			});
		else if (column.rowIndex === grid.length - 1) {
			if (!this.opts.loop.current) return 0;
			newItem = this.#findNextNonDisabledItem({
				start: 0 + skipRows,
				end: column.rowIndex,
				expectedColumnIndex: column.columnIndex,
				grid
			});
		} else {
			newItem = this.#findNextNonDisabledItem({
				start: column.rowIndex + 1 + skipRows,
				end: grid.length,
				expectedColumnIndex: column.columnIndex,
				grid
			});
			if (newItem === null && this.opts.loop.current)
				newItem = this.#findNextNonDisabledItem({
					start: 0,
					end: column.rowIndex,
					expectedColumnIndex: column.columnIndex,
					grid
				});
		}
		return this.#calculateOffset(selected, newItem);
	}
	/** Attempts to find the next non-disabled column that matches the expected column.
	 *
	 * @remarks
	 * - Skips over disabled columns
	 * - When a row is shorter than the expected column it defaults to the last item in the row
	 *
	 * @param param0
	 * @returns
	 */
	#findNextNonDisabledItem({ start, end, grid, expectedColumnIndex }) {
		let newItem = null;
		for (let r = start; r < end; r++) {
			const row = grid[r];
			newItem = row[expectedColumnIndex]?.ref ?? null;
			if (newItem !== null && itemIsDisabled(newItem)) {
				newItem = null;
				continue;
			}
			if (newItem === null)
				for (let i = row.length - 1; i >= 0; i--) {
					const item = row[row.length - 1];
					if (item === void 0 || itemIsDisabled(item.ref)) continue;
					newItem = item.ref;
					break;
				}
			break;
		}
		return newItem;
	}
	#calculateOffset(selected, newSelected) {
		if (newSelected === null) return 0;
		const items = this.getValidItems();
		const ogIndex = items.findIndex((item) => item === selected);
		return items.findIndex((item) => item === newSelected) - ogIndex;
	}
	#up(e) {
		if (this.opts.columns.current === null) return;
		e.preventDefault();
		if (e.metaKey) this.updateSelectedByGroup(-1);
		else this.updateSelectedByItem(this.#previousRowColumnOffset(e));
	}
	#previousRowColumnOffset(e) {
		const grid = this.itemsGrid;
		const selected = this.#getSelectedItem();
		if (selected === void 0) return 0;
		const column = this.#getColumn(selected, grid);
		if (column === null) return 0;
		let newItem = null;
		const skipRows = e.altKey ? 1 : 0;
		if (e.altKey && column.rowIndex === 1 && this.opts.loop.current === false)
			newItem = this.#findNextNonDisabledItemDesc({
				start: 0,
				end: 0,
				expectedColumnIndex: column.columnIndex,
				grid
			});
		else if (column.rowIndex === 0) {
			if (this.opts.loop.current === false) return 0;
			newItem = this.#findNextNonDisabledItemDesc({
				start: grid.length - 1 - skipRows,
				end: column.rowIndex + 1,
				expectedColumnIndex: column.columnIndex,
				grid
			});
		} else {
			newItem = this.#findNextNonDisabledItemDesc({
				start: column.rowIndex - 1 - skipRows,
				end: 0,
				expectedColumnIndex: column.columnIndex,
				grid
			});
			if (newItem === null && this.opts.loop.current)
				newItem = this.#findNextNonDisabledItemDesc({
					start: grid.length - 1,
					end: column.rowIndex + 1,
					expectedColumnIndex: column.columnIndex,
					grid
				});
		}
		return this.#calculateOffset(selected, newItem);
	}
	/**
	 * Attempts to find the next non-disabled column that matches the expected column.
	 *
	 * @remarks
	 * - Skips over disabled columns
	 * - When a row is shorter than the expected column it defaults to the last item in the row
	 */
	#findNextNonDisabledItemDesc({ start, end, grid, expectedColumnIndex }) {
		let newItem = null;
		for (let r = start; r >= end; r--) {
			const row = grid[r];
			if (row === void 0) continue;
			newItem = row[expectedColumnIndex]?.ref ?? null;
			if (newItem !== null && itemIsDisabled(newItem)) {
				newItem = null;
				continue;
			}
			if (newItem === null)
				for (let i = row.length - 1; i >= 0; i--) {
					const item = row[row.length - 1];
					if (item === void 0 || itemIsDisabled(item.ref)) continue;
					newItem = item.ref;
					break;
				}
			break;
		}
		return newItem;
	}
	/**
	 * Handles previous item selection:
	 * - Meta: Jump to first
	 * - Alt: Previous group
	 * - Default: Previous item
	 *
	 * @param e - Keyboard event
	 */
	#prev(e) {
		e.preventDefault();
		if (e.metaKey) this.updateSelectedToIndex(0);
		else if (e.altKey) this.updateSelectedByGroup(-1);
		else this.updateSelectedByItem(-1);
	}
	onkeydown(e) {
		const isVim = this.opts.vimBindings.current && e.ctrlKey;
		switch (e.key) {
			case 'n':
			case 'j':
				if (isVim) {
					if (this.isGrid) this.#down(e);
					else this.#next(e);
				}
				break;
			case 'l':
				if (isVim) {
					if (this.isGrid) this.#next(e);
				}
				break;
			case ARROW_DOWN:
				if (this.isGrid) this.#down(e);
				else this.#next(e);
				break;
			case ARROW_RIGHT:
				if (!this.isGrid) break;
				this.#next(e);
				break;
			case 'p':
			case 'k':
				if (isVim) {
					if (this.isGrid) this.#up(e);
					else this.#prev(e);
				}
				break;
			case 'h':
				if (isVim && this.isGrid) this.#prev(e);
				break;
			case ARROW_UP:
				if (this.isGrid) this.#up(e);
				else this.#prev(e);
				break;
			case ARROW_LEFT:
				if (!this.isGrid) break;
				this.#prev(e);
				break;
			case HOME:
				e.preventDefault();
				this.updateSelectedToIndex(0);
				break;
			case 'End':
				e.preventDefault();
				this.#last();
				break;
			case ENTER:
				/**
				 * Check if IME composition is finished before triggering the select event.
				 * This prevents unwanted triggering while user is still inputting text with IME.
				 * e.keyCode === 229 is for the Japanese IME && Safari as `isComposing` does not
				 * work with Japanese IME and Safari in combination.
				 */
				if (!e.isComposing && e.keyCode !== 229) {
					e.preventDefault();
					const item = this.#getSelectedItem();
					if (item) item?.click();
				}
		}
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'application',
		[commandAttrs.root]: '',
		tabindex: -1,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function itemIsDisabled(item) {
	return item.getAttribute('aria-disabled') === 'true';
}
var CommandEmptyState = class CommandEmptyState {
	static create(opts) {
		return new CommandEmptyState(opts, CommandRootContext.get());
	}
	opts;
	root;
	attachment;
	#shouldRender = derived(() => {
		return (
			(this.root._commandState.filtered.count === 0 && this.#isInitialRender === false) ||
			this.opts.forceMount.current
		);
	});
	get shouldRender() {
		return this.#shouldRender();
	}
	set shouldRender($$value) {
		return this.#shouldRender($$value);
	}
	#isInitialRender = true;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'presentation',
		[commandAttrs.empty]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandGroupContainerState = class CommandGroupContainerState {
	static create(opts) {
		return CommandGroupContainerContext.set(
			new CommandGroupContainerState(opts, CommandRootContext.get())
		);
	}
	opts;
	root;
	attachment;
	#shouldRender = derived(() => {
		if (this.opts.forceMount.current) return true;
		if (this.root.opts.shouldFilter.current === false) return true;
		if (!this.root.commandState.search) return true;
		return this.root._commandState.filtered.groups.has(this.trueValue);
	});
	get shouldRender() {
		return this.#shouldRender();
	}
	set shouldRender($$value) {
		return this.#shouldRender($$value);
	}
	headingNode = null;
	trueValue = '';
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		this.trueValue = opts.value.current ?? opts.id.current;
		watch(
			() => this.trueValue,
			() => {
				return this.root.registerGroup(this.trueValue);
			}
		);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'presentation',
		hidden: this.shouldRender ? void 0 : true,
		'data-value': this.trueValue,
		[commandAttrs.group]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandGroupHeadingState = class CommandGroupHeadingState {
	static create(opts) {
		return new CommandGroupHeadingState(opts, CommandGroupContainerContext.get());
	}
	opts;
	group;
	attachment;
	constructor(opts, group) {
		this.opts = opts;
		this.group = group;
		this.attachment = attachRef(this.opts.ref, (v) => (this.group.headingNode = v));
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[commandAttrs['group-heading']]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandGroupItemsState = class CommandGroupItemsState {
	static create(opts) {
		return new CommandGroupItemsState(opts, CommandGroupContainerContext.get());
	}
	opts;
	group;
	attachment;
	constructor(opts, group) {
		this.opts = opts;
		this.group = group;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'group',
		[commandAttrs['group-items']]: '',
		'aria-labelledby': this.group.headingNode?.id ?? void 0,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandItemState = class CommandItemState {
	static create(opts) {
		const group = CommandGroupContainerContext.getOr(null);
		return new CommandItemState(
			{
				...opts,
				group
			},
			CommandRootContext.get()
		);
	}
	opts;
	root;
	attachment;
	#group = null;
	#trueForceMount = derived(() => {
		return this.opts.forceMount.current || this.#group?.opts.forceMount.current === true;
	});
	#shouldRender = derived(() => {
		this.opts.ref.current;
		if (
			this.#trueForceMount() ||
			this.root.opts.shouldFilter.current === false ||
			!this.root.commandState.search
		)
			return true;
		const currentScore = this.root.commandState.filtered.items.get(this.trueValue);
		if (currentScore === void 0) return false;
		return currentScore > 0;
	});
	get shouldRender() {
		return this.#shouldRender();
	}
	set shouldRender($$value) {
		return this.#shouldRender($$value);
	}
	#isSelected = derived(
		() => this.root.opts.value.current === this.trueValue && this.trueValue !== ''
	);
	get isSelected() {
		return this.#isSelected();
	}
	set isSelected($$value) {
		return this.#isSelected($$value);
	}
	trueValue = '';
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.#group = CommandGroupContainerContext.getOr(null);
		this.trueValue = opts.value.current;
		this.attachment = attachRef(this.opts.ref);
		watch(
			[
				() => this.trueValue,
				() => this.#group?.trueValue,
				() => this.opts.forceMount.current
			],
			() => {
				if (this.opts.forceMount.current || !this.trueValue) return;
				return this.root.registerItem(this.trueValue, this.#group?.trueValue);
			}
		);
		watch([() => this.opts.value.current, () => this.opts.ref.current], () => {
			if (this.opts.value.current) this.trueValue = this.opts.value.current;
			else if (this.opts.ref.current?.textContent)
				this.trueValue = this.opts.ref.current.textContent.trim();
			if (this.trueValue) {
				this.root.registerValue(
					this.trueValue,
					opts.keywords.current.map((kw) => kw.trim())
				);
				this.opts.ref.current?.setAttribute(COMMAND_VALUE_ATTR, this.trueValue);
			}
		});
		this.onclick = this.onclick.bind(this);
		this.onpointermove = this.onpointermove.bind(this);
	}
	#onSelect() {
		if (this.opts.disabled.current) return;
		this.#select();
		this.opts.onSelect?.current();
	}
	#select() {
		if (this.opts.disabled.current) return;
		this.root.setValue(this.trueValue, true);
	}
	onpointermove(_) {
		if (this.opts.disabled.current || this.root.opts.disablePointerSelection.current)
			return;
		this.#select();
	}
	onclick(_) {
		if (this.opts.disabled.current) return;
		this.#onSelect();
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		'aria-disabled': boolToStr(this.opts.disabled.current),
		'aria-selected': boolToStr(this.isSelected),
		'data-disabled': boolToEmptyStrOrUndef(this.opts.disabled.current),
		'data-selected': boolToEmptyStrOrUndef(this.isSelected),
		'data-value': this.trueValue,
		'data-group': this.#group?.trueValue,
		[commandAttrs.item]: '',
		role: 'option',
		onpointermove: this.onpointermove,
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandListState = class CommandListState {
	static create(opts) {
		return CommandListContext.set(new CommandListState(opts, CommandRootContext.get()));
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: 'listbox',
		'aria-label': this.opts.ariaLabel.current,
		[commandAttrs.list]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CommandLabelState = class CommandLabelState {
	static create(opts) {
		return new CommandLabelState(opts, CommandRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => (this.root.labelNode = v));
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[commandAttrs['input-label']]: '',
		for: this.opts.for?.current,
		style: srOnlyStyles,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/_command-label.svelte
function _command_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const labelState = CommandLabelState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, labelState.props));
		$$renderer.push(`<label${attributes({ ...mergedProps() })}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></label>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command.svelte
function Command$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			value = '',
			onValueChange = noop$1,
			onStateChange = noop$1,
			loop = false,
			shouldFilter = true,
			filter = computeCommandScore,
			label = '',
			vimBindings = true,
			disablePointerSelection = false,
			disableInitialScroll = false,
			columns = null,
			children,
			child,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const rootState = CommandRootState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			filter: boxWith(() => filter),
			shouldFilter: boxWith(() => shouldFilter),
			loop: boxWith(() => loop),
			value: boxWith(
				() => value,
				(v) => {
					if (value !== v) {
						value = v;
						onValueChange(v);
					}
				}
			),
			vimBindings: boxWith(() => vimBindings),
			disablePointerSelection: boxWith(() => disablePointerSelection),
			disableInitialScroll: boxWith(() => disableInitialScroll),
			onStateChange: boxWith(() => onStateChange),
			columns: boxWith(() => columns)
		});
		/**
		 * Sets selection to item at specified index in valid items array.
		 * If index is out of bounds, does nothing.
		 *
		 * @param index - Zero-based index of item to select
		 * @remarks
		 * Uses `getValidItems()` to get selectable items, filtering out disabled/hidden ones.
		 * Access valid items directly via `getValidItems()` to check bounds before calling.
		 *
		 * @example
		 * // get valid items length for bounds check
		 * const items = getValidItems()
		 * if (index < items.length) {
		 *   updateSelectedToIndex(index)
		 * }
		 */
		const updateSelectedToIndex = (i) => rootState.updateSelectedToIndex(i);
		/**
		 * Moves selection to the first valid item in the next/previous group.
		 * If no group is found, falls back to selecting the next/previous item globally.
		 *
		 * @param change - Direction to move: 1 for next group, -1 for previous group
		 * @example
		 * // move to first item in next group
		 * updateSelectedByGroup(1)
		 *
		 * // move to first item in previous group
		 * updateSelectedByGroup(-1)
		 */
		const updateSelectedByGroup = (c) => rootState.updateSelectedByGroup(c);
		/**
		 * Updates selected item by moving up/down relative to current selection.
		 * Handles wrapping when loop option is enabled.
		 *
		 * @param change - Direction to move: 1 for next item, -1 for previous item
		 * @remarks
		 * The loop behavior wraps:
		 * - From last item to first when moving next
		 * - From first item to last when moving previous
		 *
		 * Uses `getValidItems()` to get all selectable items, which filters out disabled/hidden items.
		 * You can call `getValidItems()` directly to get the current valid items array.
		 *
		 * @example
		 * // select next item
		 * updateSelectedByItem(1)
		 *
		 * // get all valid items
		 * const items = getValidItems()
		 */
		const updateSelectedByItem = (c) => rootState.updateSelectedByItem(c);
		/**
		 * Gets all non-disabled, visible command items.
		 *
		 * @returns Array of valid item elements
		 * @remarks Exposed for direct item access and bound checking
		 */
		const getValidItems = () => rootState.getValidItems();
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		function Label($$renderer) {
			_command_label($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(label)}`);
				},
				$$slots: { default: true }
			});
		}
		if (child) {
			$$renderer.push('<!--[0-->');
			Label($$renderer);
			$$renderer.push(`<!----> `);
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			Label($$renderer);
			$$renderer.push(`<!----> `);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value,
			updateSelectedToIndex,
			updateSelectedByGroup,
			updateSelectedByItem,
			getValidItems
		});
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-empty.svelte
function Command_empty$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			children,
			child,
			forceMount = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const emptyState = CommandEmptyState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			forceMount: boxWith(() => forceMount)
		});
		const mergedProps = derived(() => mergeProps(emptyState.props, restProps));
		if (emptyState.shouldRender) {
			$$renderer.push('<!--[0-->');
			if (child) {
				$$renderer.push('<!--[0-->');
				child($$renderer, { props: mergedProps() });
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
				children?.($$renderer);
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-group.svelte
function Command_group$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			value = '',
			forceMount = false,
			children,
			child,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const groupState = CommandGroupContainerState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			forceMount: boxWith(() => forceMount),
			value: boxWith(() => value)
		});
		const mergedProps = derived(() => mergeProps(restProps, groupState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-group-heading.svelte
function Command_group_heading($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			children,
			child,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const headingState = CommandGroupHeadingState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, headingState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-group-items.svelte
function Command_group_items($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			children,
			child,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const groupItemsState = CommandGroupItemsState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, groupItemsState.props));
		$$renderer.push(`<div style="display: contents;">`);
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-item.svelte
function Command_item$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			value = '',
			disabled = false,
			children,
			child,
			onSelect = noop$1,
			forceMount = false,
			keywords = [],
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const itemState = CommandItemState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			value: boxWith(() => value),
			disabled: boxWith(() => disabled),
			onSelect: boxWith(() => onSelect),
			forceMount: boxWith(() => forceMount),
			keywords: boxWith(() => keywords)
		});
		const mergedProps = derived(() => mergeProps(restProps, itemState.props));
		$$renderer.push(`<!---->`);
		$$renderer.push(
			`<div style="display: contents;" data-item-wrapper=""${attr('data-value', itemState.trueValue)}>`
		);
		if (itemState.shouldRender) {
			$$renderer.push('<!--[0-->');
			if (child) {
				$$renderer.push('<!--[0-->');
				child($$renderer, { props: mergedProps() });
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
				children?.($$renderer);
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div>`);
		$$renderer.push(`<!---->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/components/command-list.svelte
function Command_list$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			ref = null,
			child,
			children,
			'aria-label': ariaLabel,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const listState = CommandListState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			ariaLabel: boxWith(() => ariaLabel ?? 'Suggestions...')
		});
		const mergedProps = derived(() => mergeProps(restProps, listState.props));
		$$renderer.push(`<!---->`);
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		$$renderer.push(`<!---->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/command/compute-command-score.js
var SCORE_CONTINUE_MATCH = 1;
var SCORE_SPACE_WORD_JUMP = 0.9;
var SCORE_NON_SPACE_WORD_JUMP = 0.8;
var SCORE_CHARACTER_JUMP = 0.17;
var SCORE_TRANSPOSITION = 0.1;
var PENALTY_SKIPPED = 0.999;
var PENALTY_CASE_MISMATCH = 0.9999;
var PENALTY_NOT_COMPLETE = 0.99;
var IS_GAP_REGEXP = /[\\/_+.#"@[({&]/;
var COUNT_GAPS_REGEXP = /[\\/_+.#"@[({&]/g;
var IS_SPACE_REGEXP = /[\s-]/;
var COUNT_SPACE_REGEXP = /[\s-]/g;
function computeCommandScoreInner(
	string,
	abbreviation,
	lowerString,
	lowerAbbreviation,
	stringIndex,
	abbreviationIndex,
	memoizedResults
) {
	if (abbreviationIndex === abbreviation.length) {
		if (stringIndex === string.length) return SCORE_CONTINUE_MATCH;
		return PENALTY_NOT_COMPLETE;
	}
	const memoizeKey = `${stringIndex},${abbreviationIndex}`;
	if (memoizedResults[memoizeKey] !== void 0) return memoizedResults[memoizeKey];
	const abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
	let index = lowerString.indexOf(abbreviationChar, stringIndex);
	let highScore = 0;
	let score, transposedScore, wordBreaks, spaceBreaks;
	while (index >= 0) {
		score = computeCommandScoreInner(
			string,
			abbreviation,
			lowerString,
			lowerAbbreviation,
			index + 1,
			abbreviationIndex + 1,
			memoizedResults
		);
		if (score > highScore) {
			if (index === stringIndex) score *= SCORE_CONTINUE_MATCH;
			else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
				score *= SCORE_NON_SPACE_WORD_JUMP;
				wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
				if (wordBreaks && stringIndex > 0) score *= PENALTY_SKIPPED ** wordBreaks.length;
			} else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
				score *= SCORE_SPACE_WORD_JUMP;
				spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);
				if (spaceBreaks && stringIndex > 0)
					score *= PENALTY_SKIPPED ** spaceBreaks.length;
			} else {
				score *= SCORE_CHARACTER_JUMP;
				if (stringIndex > 0) score *= PENALTY_SKIPPED ** (index - stringIndex);
			}
			if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex))
				score *= PENALTY_CASE_MISMATCH;
		}
		if (
			(score < SCORE_TRANSPOSITION &&
				lowerString.charAt(index - 1) ===
					lowerAbbreviation.charAt(abbreviationIndex + 1)) ||
			(lowerAbbreviation.charAt(abbreviationIndex + 1) ===
				lowerAbbreviation.charAt(abbreviationIndex) &&
				lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex))
		) {
			transposedScore = computeCommandScoreInner(
				string,
				abbreviation,
				lowerString,
				lowerAbbreviation,
				index + 1,
				abbreviationIndex + 2,
				memoizedResults
			);
			if (transposedScore * SCORE_TRANSPOSITION > score)
				score = transposedScore * SCORE_TRANSPOSITION;
		}
		if (score > highScore) highScore = score;
		index = lowerString.indexOf(abbreviationChar, index + 1);
	}
	memoizedResults[memoizeKey] = highScore;
	return highScore;
}
/**
 *
 * @param string
 * @returns
 */
function formatInput(string) {
	return string.toLowerCase().replace(COUNT_SPACE_REGEXP, ' ');
}
/**
 * Given a command, a search query, and (optionally) a list of keywords for the command,
 * computes a score between 0 and 1 that represents how well the search query matches the
 * abbreviation and keywords. 1 is a perfect match, 0 is no match.
 *
 * The score is calculated based on the following rules:
 * - The scores are arranged so that a continuous match of characters will result in a total
 * score of 1. The best case, this character is a match, and either this is the start of the string
 * or the previous character was also a match.
 * - A new match at the start of a word scores better than a new match elsewhere as it's more likely
 * that the user will type the starts of fragments.
 * - Word jumps between spaces are scored slightly higher than slashes, brackets, hyphens, etc.
 * - A continuous match of characters will result in a total score of 1.
 * - A new match at the start of a word scores better than a new match elsewhere as it's more likely that the user will type the starts of fragments.
 * - Any other match isn't ideal, but we include it for completeness.
 * - If the user transposed two letters, it should be significantly penalized.
 * - The goodness of a match should decay slightly with each missing character.
 * - Match higher for letters closer to the beginning of the word.
 *
 * @param command - The value to score against the search string (e.g. a command name like "Calculator")
 * @param search - The search string to score against the value/aliases
 * @param commandKeywords - An optional list of aliases/keywords to score against the search string - e.g. ["math", "add", "divide", "multiply", "subtract"]
 * @returns A score between 0 and 1 that represents how well the search string matches the
 * command (and keywords)
 */
function computeCommandScore(command, search, commandKeywords) {
	/**
	 * NOTE: We used to do lower-casing on each recursive call, but this meant that `toLowerCase()`
	 * was the dominating cost in the algorithm. Passing both is a little ugly, but considerably
	 * faster.
	 */
	command =
		commandKeywords && commandKeywords.length > 0
			? `${`${command} ${commandKeywords?.join(' ')}`}`
			: command;
	return computeCommandScoreInner(
		command,
		search,
		formatInput(command),
		formatInput(search),
		0,
		0,
		{}
	);
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog.svelte
function Dialog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			open = false,
			onOpenChange = noop$1,
			onOpenChangeComplete = noop$1,
			children
		} = $$props;
		DialogRootState.create({
			variant: boxWith(() => 'dialog'),
			open: boxWith(
				() => open,
				(v) => {
					open = v;
					onOpenChange(v);
				}
			),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
		bind_props($$props, { open });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-close.svelte
function Dialog_close($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			children,
			child,
			id = createId(uid),
			ref = null,
			disabled = false,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const closeState = DialogCloseState.create({
			variant: boxWith(() => 'close'),
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			disabled: boxWith(() => Boolean(disabled))
		});
		const mergedProps = derived(() => mergeProps(restProps, closeState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/components/dialog-content.svelte
function Dialog_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			id = createId(uid),
			children,
			child,
			ref = null,
			forceMount = false,
			onCloseAutoFocus = noop$1,
			onOpenAutoFocus = noop$1,
			onEscapeKeydown = noop$1,
			onInteractOutside = noop$1,
			trapFocus = true,
			preventScroll = true,
			restoreScrollDelay = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const contentState = DialogContentState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (contentState.shouldRender || forceMount) {
			$$renderer.push('<!--[0-->');
			{
				function focusScope($$renderer, { props: focusScopeProps }) {
					Escape_layer(
						$$renderer,
						spread_props([
							mergedProps(),
							{
								enabled: contentState.root.opts.open.current,
								ref: contentState.opts.ref,
								onEscapeKeydown: (e) => {
									onEscapeKeydown(e);
									if (e.defaultPrevented) return;
									contentState.root.handleClose();
								},
								children: ($$renderer) => {
									Dismissible_layer(
										$$renderer,
										spread_props([
											mergedProps(),
											{
												ref: contentState.opts.ref,
												enabled: contentState.root.opts.open.current,
												onInteractOutside: (e) => {
													onInteractOutside(e);
													if (e.defaultPrevented) return;
													contentState.root.handleClose();
												},
												children: ($$renderer) => {
													Text_selection_layer(
														$$renderer,
														spread_props([
															mergedProps(),
															{
																ref: contentState.opts.ref,
																enabled: contentState.root.opts.open.current,
																children: ($$renderer) => {
																	if (child) {
																		$$renderer.push('<!--[0-->');
																		if (contentState.root.opts.open.current) {
																			$$renderer.push('<!--[0-->');
																			Scroll_lock($$renderer, {
																				preventScroll,
																				restoreScrollDelay
																			});
																		} else $$renderer.push('<!--[-1-->');
																		$$renderer.push(`<!--]--> `);
																		child($$renderer, {
																			props: mergeProps(mergedProps(), focusScopeProps),
																			...contentState.snippetProps
																		});
																		$$renderer.push(`<!---->`);
																	} else {
																		$$renderer.push('<!--[-1-->');
																		Scroll_lock($$renderer, { preventScroll });
																		$$renderer.push(
																			`<!----> <div${attributes({ ...mergeProps(mergedProps(), focusScopeProps) })}>`
																		);
																		children?.($$renderer);
																		$$renderer.push(`<!----></div>`);
																	}
																	$$renderer.push(`<!--]-->`);
																},
																$$slots: { default: true }
															}
														])
													);
												},
												$$slots: { default: true }
											}
										])
									);
								},
								$$slots: { default: true }
							}
						])
					);
				}
				Focus_scope($$renderer, {
					ref: contentState.opts.ref,
					loop: true,
					trapFocus,
					enabled: contentState.root.opts.open.current,
					onOpenAutoFocus,
					onCloseAutoFocus,
					focusScope,
					$$slots: { focusScope: true }
				});
			}
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/dialog/exports.js
var exports_exports = /* @__PURE__ */ __exportAll({
	Close: () => Dialog_close,
	Content: () => Dialog_content,
	Description: () => Dialog_description,
	Overlay: () => Dialog_overlay,
	Portal: () => Portal$1,
	Root: () => Dialog,
	Title: () => Dialog_title,
	Trigger: () => Dialog_trigger
});
//#endregion
//#region src/lib/components/ui/sheet/sheet-overlay.svelte
function Sheet_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_overlay) {
				$$renderer.push('<!--[-->');
				Dialog_overlay(
					$$renderer,
					spread_props([
						{
							'data-slot': 'sheet-overlay',
							class: `overlay data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-content.svelte
function Sheet_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			portalProps,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Portal$1) {
				$$renderer.push('<!--[-->');
				Portal$1(
					$$renderer,
					spread_props([
						portalProps,
						{
							children: ($$renderer) => {
								Sheet_overlay($$renderer, {});
								$$renderer.push(`<!----> `);
								if (Dialog_content) {
									$$renderer.push('<!--[-->');
									Dialog_content(
										$$renderer,
										spread_props([
											{
												'data-slot': 'sheet-content',
												class: `sheet-bottom data-[state=open]:animate-slide-up-in data-[state=closed]:animate-slide-down-out ${stringify(className ?? '')}`
											},
											restProps,
											{
												get ref() {
													return ref;
												},
												set ref($$value) {
													ref = $$value;
													$$settled = false;
												},
												children: ($$renderer) => {
													children?.($$renderer);
													$$renderer.push(`<!----> `);
													if (Dialog_close) {
														$$renderer.push('<!--[-->');
														Dialog_close($$renderer, {
															class:
																'ui-focus-ring absolute end-2 top-2 z-10 flex size-11 items-center justify-center rounded-md op-70 transition-opacity hover:op-100 disabled:pointer-events-none',
															children: ($$renderer) => {
																X($$renderer, { class: 'size-4' });
																$$renderer.push(
																	`<!----> <span class="sr-only">Close</span>`
																);
															},
															$$slots: { default: true }
														});
														$$renderer.push('<!--]-->');
													} else {
														$$renderer.push('<!--[!-->');
														$$renderer.push('<!--]-->');
													}
												},
												$$slots: { default: true }
											}
										])
									);
									$$renderer.push('<!--]-->');
								} else {
									$$renderer.push('<!--[!-->');
									$$renderer.push('<!--]-->');
								}
							},
							$$slots: { default: true }
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-header.svelte
function Sheet_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		$$renderer.push(
			`<div${attributes({
				'data-slot': 'sheet-header',
				class: `flex flex-col gap-1.5 p-4 ${stringify(className ?? '')}`,
				...restProps
			})}>`
		);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-title.svelte
function Sheet_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_title) {
				$$renderer.push('<!--[-->');
				Dialog_title(
					$$renderer,
					spread_props([
						{
							'data-slot': 'sheet-title',
							class: `text-foreground font-semibold ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-description.svelte
function Sheet_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_description) {
				$$renderer.push('<!--[-->');
				Dialog_description(
					$$renderer,
					spread_props([
						{
							'data-slot': 'sheet-description',
							class: `text-muted-foreground text-sm ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/index.ts
var { Root, Trigger, Portal } = exports_exports;
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/internal/helpers.js
function cn(...classes) {
	return classes.filter(Boolean).join(' ');
}
var isBrowser = typeof document !== 'undefined';
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/toast-state.svelte.js
var toastsCounter = 0;
function getToastId(data) {
	return typeof data?.id === 'number' ||
		(typeof data?.id === 'string' && data.id.length > 0)
		? data.id
		: toastsCounter++;
}
var ToastState = class {
	toasts = [];
	heights = [];
	#pendingRemovals = /* @__PURE__ */ new Map();
	#findToastIdx = (id) => {
		const idx = this.toasts.findIndex((toast) => toast.id === id);
		if (idx === -1) return null;
		return idx;
	};
	#findHeightIdx = (toastId) =>
		this.heights.findIndex((height) => height.toastId === toastId);
	addToast = (data) => {
		if (!isBrowser) return;
		this.toasts.unshift(data);
	};
	updateToast = ({ id, data, type, message }) => {
		const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
		const toastToUpdate = this.toasts[toastIdx];
		this.toasts[toastIdx] = {
			...toastToUpdate,
			...data,
			id,
			title: message,
			type,
			dismiss: false,
			delete: false,
			updated: true
		};
	};
	markDismissed = (id) => {
		const toastIdx = this.#findToastIdx(id);
		if (toastIdx === null) return;
		const toast = this.toasts[toastIdx];
		if (!toast) return;
		if (!toast.dismiss || !toast.delete)
			this.toasts[toastIdx] = {
				...toast,
				dismiss: true,
				delete: true
			};
	};
	scheduleRemoval = (id, delay) => {
		this.cancelRemoval(id);
		this.#pendingRemovals.set(
			id,
			setTimeout(() => {
				this.#pendingRemovals.delete(id);
				this.remove(id);
			}, delay)
		);
	};
	cancelRemoval = (id) => {
		const timeout = this.#pendingRemovals.get(id);
		if (timeout !== void 0) {
			clearTimeout(timeout);
			this.#pendingRemovals.delete(id);
		}
	};
	create = (data) => {
		const { message, ...rest } = data;
		const id = getToastId(data);
		const dismissible =
			data.dismissible !== void 0
				? data.dismissible
				: data.dismissable !== void 0
					? data.dismissable
					: true;
		const type = data.type === void 0 ? 'default' : data.type;
		run(() => {
			this.cancelRemoval(id);
			const alreadyExists = this.toasts.find((toast) => toast.id === id);
			if (alreadyExists?.dismiss || alreadyExists?.delete) {
				this.remove(id);
				this.addToast({
					...rest,
					id,
					title: message,
					dismissible,
					type,
					updated: true
				});
			} else if (alreadyExists)
				this.updateToast({
					id,
					data,
					type,
					message,
					dismissible
				});
			else
				this.addToast({
					...rest,
					id,
					title: message,
					dismissible,
					type
				});
		});
		return id;
	};
	dismiss = (id) => {
		run(() => {
			if (id === void 0) {
				this.toasts = this.toasts.map((toast) =>
					toast.dismiss
						? toast
						: {
								...toast,
								dismiss: true
							}
				);
				return;
			}
			const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
			if (this.toasts[toastIdx])
				this.toasts[toastIdx] = {
					...this.toasts[toastIdx],
					dismiss: true
				};
		});
		return id;
	};
	remove = (id) => {
		if (id === void 0) {
			this.toasts = [];
			return;
		}
		const toastIdx = this.#findToastIdx(id);
		if (toastIdx === null) return;
		this.toasts.splice(toastIdx, 1);
		return id;
	};
	message = (message, data) => {
		return this.create({
			...data,
			type: 'default',
			message
		});
	};
	error = (message, data) => {
		return this.create({
			...data,
			type: 'error',
			message
		});
	};
	success = (message, data) => {
		return this.create({
			...data,
			type: 'success',
			message
		});
	};
	info = (message, data) => {
		return this.create({
			...data,
			type: 'info',
			message
		});
	};
	warning = (message, data) => {
		return this.create({
			...data,
			type: 'warning',
			message
		});
	};
	loading = (message, data) => {
		return this.create({
			...data,
			type: 'loading',
			message
		});
	};
	promise = (promise, data) => {
		if (!data) return;
		let id = void 0;
		if (data.loading !== void 0)
			id = this.create({
				...data,
				promise,
				type: 'loading',
				message: typeof data.loading === 'string' ? data.loading : data.loading()
			});
		const p = promise instanceof Promise ? promise : promise();
		let shouldDismiss = id !== void 0;
		p.then((response) => {
			if (
				typeof response === 'object' &&
				response &&
				'ok' in response &&
				typeof response.ok === 'boolean' &&
				!response.ok
			) {
				shouldDismiss = false;
				const message = constructPromiseErrorMessage(response);
				this.create({
					id,
					type: 'error',
					message
				});
			} else if (data.success !== void 0) {
				shouldDismiss = false;
				const message =
					typeof data.success === 'function' ? data.success(response) : data.success;
				this.create({
					id,
					type: 'success',
					message
				});
			}
		})
			.catch((error) => {
				if (data.error !== void 0) {
					shouldDismiss = false;
					const message =
						typeof data.error === 'function' ? data.error(error) : data.error;
					this.create({
						id,
						type: 'error',
						message
					});
				}
			})
			.finally(() => {
				if (shouldDismiss) {
					this.dismiss(id);
					id = void 0;
				}
				data.finally?.();
			});
		return id;
	};
	custom = (component, data) => {
		const id = getToastId(data);
		this.create({
			component,
			...data,
			id
		});
		return id;
	};
	removeHeight = (id) => {
		this.heights = this.heights.filter((height) => height.toastId !== id);
	};
	setHeight = (data) => {
		run(() => {
			const heightIdx = this.#findHeightIdx(data.toastId);
			if (heightIdx !== -1) {
				this.heights[heightIdx] = data;
				return;
			}
			const order = new Map(this.toasts.map((toast, idx) => [toast.id, idx]));
			const toastOrder = order.get(data.toastId) ?? -1;
			const insertIdx = this.heights.findIndex(
				(height) => (order.get(height.toastId) ?? Infinity) > toastOrder
			);
			if (insertIdx === -1) this.heights.push(data);
			else this.heights.splice(insertIdx, 0, data);
		});
	};
	reset = () => {
		this.toasts = [];
		this.heights = [];
		this.#pendingRemovals.forEach((timeout) => clearTimeout(timeout));
		this.#pendingRemovals.clear();
	};
};
function constructPromiseErrorMessage(response) {
	if (response && typeof response === 'object' && 'status' in response)
		return `HTTP error! Status: ${response.status}`;
	return `Error! ${response}`;
}
var toastState = new ToastState();
function toastFunction(message, data) {
	return toastState.message(message, data);
}
var SonnerState = class {
	/**
	 * A derived state of the toasts that are not dismissed.
	 */
	#activeToasts = derived(() => toastState.toasts.filter((toast) => !toast.dismiss));
	get toasts() {
		return this.#activeToasts();
	}
};
var toast = Object.assign(toastFunction, {
	success: toastState.success,
	info: toastState.info,
	warning: toastState.warning,
	error: toastState.error,
	custom: toastState.custom,
	message: toastState.message,
	promise: toastState.promise,
	dismiss: toastState.dismiss,
	loading: toastState.loading,
	getActiveToasts: () => {
		return toastState.toasts.filter((toast) => !toast.dismiss);
	}
});
//#endregion
//#region src/lib/stores/searchParams.svelte.ts
var GOTO_OPTS = {
	replaceState: false,
	keepFocus: true,
	noScroll: false
};
var SearchParamsStore = class {
	#pendingParams = null;
	#navigationId = 0;
	#pendingTarget = '';
	#hasReachedTarget = false;
	#getParams() {
		if (building) return new URLSearchParams();
		if (!this.#pendingParams) return page.url.searchParams;
		const current = `${page.url.pathname}${page.url.search}`;
		if (current === this.#pendingTarget) this.#hasReachedTarget = true;
		return this.#hasReachedTarget && current !== this.#pendingTarget
			? page.url.searchParams
			: this.#pendingParams;
	}
	get hero() {
		return this.filters.hero;
	}
	get item() {
		return this.filters.item;
	}
	get q() {
		return this.#q();
	}
	get major() {
		return this.filters.major;
	}
	/** How many filters are active — the one source for badges and is-filtered checks. */
	get activeFilterCount() {
		return this.hero.length + this.item.length + (this.q ? 1 : 0) + (this.major ? 1 : 0);
	}
	/** A filter navigation started by this store is still in flight. */
	get isPending() {
		return this.#pendingParams !== null;
	}
	get heroAtCap() {
		return this.hero.length >= 20;
	}
	/** `major` alone is not searching — it narrows the same feed. */
	get isSearching() {
		return this.hero.length > 0 || this.item.length > 0 || this.q !== '';
	}
	/** Parsed once per URL change; every other getter reads this. */
	#filters = derived(() => {
		const filters = parseFilters(this.#getParams());
		return {
			...filters,
			hero: filters.hero.slice(0, 20),
			item: filters.item.slice(0, 20)
		};
	});
	#q = derived(() => this.#filters().q);
	get filters() {
		return this.#filters();
	}
	update(values) {
		if (building) return;
		const next = normalizeFilters({
			...this.filters,
			...values
		});
		const dropped =
			Math.max(0, next.hero.length - 20) + Math.max(0, next.item.length - 20);
		next.hero = next.hero.slice(0, 20);
		next.item = next.item.slice(0, 20);
		next.q = next.q.slice(0, 200);
		if (dropped > 0)
			toast.error(
				`Filter limit reached — 20 heroes and 20 items max. ${dropped} ${plural(dropped, 'selection')} not applied.`
			);
		this.#navigate(filtersToSearchParams(next));
	}
	reset() {
		if (building) return;
		this.#navigate(new URLSearchParams());
	}
	#navigate(nextParams) {
		this.#pendingParams = nextParams;
		const navigationId = ++this.#navigationId;
		const query = nextParams.toString();
		this.#pendingTarget = query ? `/?${query}` : '/';
		this.#hasReachedTarget = false;
		const finish = () => {
			if (navigationId === this.#navigationId) this.#pendingParams = null;
		};
		goto(this.#pendingTarget, GOTO_OPTS).then(finish, finish);
	}
	toURLSearchParams() {
		return filtersToSearchParams(this.filters);
	}
};
var searchParams = new SearchParamsStore();
//#endregion
//#region src/lib/components/changelog/entityContext.ts
var [getEntityIcons, setEntityIcons] = createContext();
function resolveEntity(icons, type, name) {
	return (type === 'hero' ? icons.heroes : icons.items).find((entity) =>
		entityNamesMatch(entity.alt, name)
	);
}
/** Fragment only: a `?hero=`/`?item=` query would mint a crawlable duplicate of the
 * patch page for every entity that links to it.
 *
 * A hero or item heads its own section on the patch page, so its name is the anchor.
 * An ability does not: the notes head each group with the stat they changed
 * ("Affliction DPS", not "Affliction"), and the renderer derives the id from that
 * heading. So an ability anchors on the label of the group it matched, and falls back
 * to the patch itself when the patch mentions it without an attributed group. */
function entityPatchHref(patch, entity) {
	if (entity.type !== 'ability')
		return `${changePath(patch)}#${entityFragmentId(entity.name)}`;
	const label = patch.changeGroups?.find((group) => group.ability)?.ability ?? null;
	return label ? `${changePath(patch)}#${abilityFragmentId(label)}` : changePath(patch);
}
/** One wording for a patch's per-entity change count, shared by the card and the timeline. */
function changeCountLabel(count) {
	return count === null
		? 'change count unavailable'
		: `${count} ${plural(count, 'change')}`;
}
//#endregion
//#region src/lib/components/filter-bar/filterState.svelte.ts
var hasEntity = (names, name) =>
	names.some((candidate) => entityNamesMatch(candidate, name));
var toggleEntity = (names, name) =>
	hasEntity(names, name)
		? names.filter((candidate) => !entityNamesMatch(candidate, name))
		: [...names, name];
function toggleEntityFilter(kind, name) {
	const next = toggleEntity(
		kind === 'hero' ? searchParams.hero : searchParams.item,
		name
	);
	searchParams.update(kind === 'hero' ? { hero: next } : { item: next });
}
var FilterState = class {
	#inputValue = derived(() => searchParams.q);
	get inputValue() {
		return this.#inputValue();
	}
	set inputValue($$value) {
		return this.#inputValue($$value);
	}
	#getHeroes;
	#getItems;
	constructor(getHeroes, getItems) {
		this.#getHeroes = getHeroes;
		this.#getItems = getItems;
	}
	#mergedList = derived(() => {
		const needle = this.inputValue.toLowerCase();
		const matchesInput = (name) => !needle || name.toLowerCase().includes(needle);
		const selectedHeroes = indexEntityNames(searchParams.hero, (name) => name);
		const selectedItems = indexEntityNames(searchParams.item, (name) => name);
		const heroes = this.#getHeroes()
			.filter((hero) => hero.isReleased && matchesInput(hero.name))
			.map((hero) => ({
				type: 'hero',
				data: hero,
				key: `hero-${hero.id}`,
				isSelected: findEntityName(selectedHeroes, hero.name) !== void 0
			}));
		const items = this.#getItems()
			.filter(
				(item) =>
					item.isReleased &&
					item.name.trim() !== '' &&
					!item.name.includes('_') &&
					matchesInput(item.name)
			)
			.map((item) => ({
				type: 'item',
				data: item,
				key: `item-${item.id}`,
				isSelected: findEntityName(selectedItems, item.name) !== void 0
			}));
		return [...heroes, ...items].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});
	get mergedList() {
		return this.#mergedList();
	}
	set mergedList($$value) {
		return this.#mergedList($$value);
	}
	toggle(kind, name) {
		this.inputValue = searchParams.q;
		toggleEntityFilter(kind, name);
	}
	clearAll() {
		this.inputValue = '';
		searchParams.reset();
	}
	updateSearch() {
		searchParams.update({ q: this.inputValue.trim() });
	}
};
//#endregion
//#region src/lib/components/ui/badge/badge.svelte
function Badge($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/** Spelled out so UnoCSS's extractor sees the shortcut names as literals. */
		const variants = {
			default: 'badge-default',
			signal: 'badge-signal'
		};
		let {
			ref = null,
			href,
			class: className,
			variant = 'default',
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		element(
			$$renderer,
			href ? 'a' : 'span',
			() => {
				$$renderer.push(
					`${attributes({
						'data-slot': 'badge',
						href,
						class: `${stringify(variants[variant])} ${stringify(className ?? '')}`,
						...restProps
					})}`
				);
			},
			() => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			}
		);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/entityTone.ts
/**
 * Heroes read as `primary`, items as `signal`. Every badge, dot, count and directory
 * repeated that pairing inline; this is the one table they all read.
 *
 * Class names are spelled out as literals so UnoCSS's extractor still sees them.
 */
var ENTITY_TONE = {
	hero: {
		label: 'Hero',
		plural: 'heroes',
		text: 'text-primary',
		dot: 'bg-primary',
		subtle: 'bg-primary/10',
		chip: 'border border-primary/30 bg-primary/10',
		badgeVariant: 'default'
	},
	item: {
		label: 'Item',
		plural: 'items',
		text: 'text-signal',
		dot: 'bg-signal',
		subtle: 'bg-signal/10',
		chip: 'border border-signal/30 bg-signal/10',
		badgeVariant: 'signal'
	}
};
//#endregion
//#region src/lib/components/filter-bar/FilterBadge.svelte
function FilterBadge($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { name, icon, onRemove, kind = 'hero' } = $$props;
		const tone = derived(() => ENTITY_TONE[kind]);
		$$renderer.push(
			`<button type="button" rounded="md" class="group/badge min-h-11 shrink-0 focus-visible:outline-none"${attr('aria-label', `Remove ${stringify(tone().label)} filter: ${stringify(name)}`)}>`
		);
		Badge($$renderer, {
			variant: tone().badgeVariant,
			class:
				'group-focus-visible/badge:ring-signal/50 hover:shadow-primary/10 cursor-pointer transition-all duration-200 group-hover/badge:pr-2 group-hover/badge:shadow-md group-focus-visible/badge:ring-2',
			children: ($$renderer) => {
				if (icon)
					$$renderer.push(
						`<!--[0--><img${attr('src', icon)} alt="" width="18" height="18" loading="lazy" decoding="async" class="size-[18px] rounded object-cover transition-all duration-200 group-hover/badge:scale-110"/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(
					`<!--]--> <span font="mono" uppercase="" class="text-[11px] tracking-wide">${escape_html(tone().label)}</span> <span aria-hidden="true" op="50">/</span> <span text="xs" font="medium" class="tracking-tight">${escape_html(name)}</span> `
				);
				X($$renderer, {
					class:
						'size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100'
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></button>`);
	});
}
//#endregion
//#region src/lib/components/ui/command/command.svelte
function Command($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			value = '',
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command$1) {
				$$renderer.push('<!--[-->');
				Command$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'command',
							class: `flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground ${stringify(className ?? '')}`
						},
						restProps,
						{
							get value() {
								return value;
							},
							set value($$value) {
								value = $$value;
								$$settled = false;
							},
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/ui/command/command-empty.svelte
function Command_empty($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command_empty$1) {
				$$renderer.push('<!--[-->');
				Command_empty$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'command-empty',
							class: `py-6 text-center text-sm ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/command/command-group.svelte
function Command_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			heading,
			value,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command_group$1) {
				$$renderer.push('<!--[-->');
				Command_group$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'command-group',
							class: `overflow-hidden p-1 text-foreground ${stringify(className ?? '')}`,
							value: value ?? heading ?? `----${useId()}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							children: ($$renderer) => {
								if (heading) {
									$$renderer.push('<!--[0-->');
									if (Command_group_heading) {
										$$renderer.push('<!--[-->');
										Command_group_heading($$renderer, {
											class: 'text-muted-foreground px-2 py-1.5 text-xs font-medium',
											children: ($$renderer) => {
												$$renderer.push(`<!---->${escape_html(heading)}`);
											},
											$$slots: { default: true }
										});
										$$renderer.push('<!--]-->');
									} else {
										$$renderer.push('<!--[!-->');
										$$renderer.push('<!--]-->');
									}
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--> `);
								if (Command_group_items) {
									$$renderer.push('<!--[-->');
									Command_group_items($$renderer, { children });
									$$renderer.push('<!--]-->');
								} else {
									$$renderer.push('<!--[!-->');
									$$renderer.push('<!--]-->');
								}
							},
							$$slots: { default: true }
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/command/command-item.svelte
function Command_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			class: className,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command_item$1) {
				$$renderer.push('<!--[-->');
				Command_item$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'command-item',
							class: `menu-item ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							children: ($$renderer) => {
								if (children) {
									$$renderer.push('<!--[0-->');
									children($$renderer);
									$$renderer.push(`<!---->`);
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]-->`);
							},
							$$slots: { default: true }
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/command/command-list.svelte
function Command_list($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command_list$1) {
				$$renderer.push('<!--[-->');
				Command_list$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'command-list',
							class: `max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/filter-bar/EntityItem.svelte
function EntityItem($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id, value, name, imageSrc, isSelected, kind, onSelect } = $$props;
		const tone = derived(() => ENTITY_TONE[kind]);
		{
			function child($$renderer, { props }) {
				$$renderer.push(
					`<div${attributes({
						...props,
						'aria-selected': isSelected,
						'aria-label': `${stringify(name)}, ${stringify(tone().label)}, ${isSelected ? 'selected' : 'not selected'}`
					})}>`
				);
				if (imageSrc)
					$$renderer.push(
						`<!--[0--><img${attr('src', imageSrc)} alt="" width="32" height="32" loading="lazy" decoding="async" border="border ~" bg="card" class="size-8 rounded object-cover"/>`
					);
				else
					$$renderer.push(
						`<!--[-1--><div bg="secondary" class="size-8 rounded" aria-hidden="true"></div>`
					);
				$$renderer.push(
					`<!--]--> <span flex="1" class="min-w-0"><span${attr_class(`block truncate text-sm ${isSelected ? `font-medium ${tone().text}` : 'text-foreground'}`)}>${escape_html(name)}</span> <span text="muted-foreground" block="" font="mono" uppercase="" class="text-xs tracking-wide">${escape_html(tone().label)}</span></span> `
				);
				if (isSelected)
					$$renderer.push(
						`<!--[0--><span${attr_class(`font-mono text-xs tracking-wide ${stringify(tone().text)}`)}>Selected</span> <span${attr_class(`size-2 rounded-full ${stringify(tone().dot)}`)} aria-hidden="true"></span>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></div>`);
			}
			if (Command_item) {
				$$renderer.push('<!--[-->');
				Command_item($$renderer, {
					id,
					value,
					onSelect,
					class: `hover:bg-secondary data-[selected]:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors ${stringify(isSelected ? tone().subtle : '')}`,
					child,
					$$slots: { child: true }
				});
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
	});
}
//#endregion
//#region src/lib/components/filter-bar/SearchForm.svelte
function SearchForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { filterState, mobile = false, open = false, onsubmit, onclose } = $$props;
		let commandValue = '';
		const prefix = derived(() => (mobile ? 'mobile' : 'desktop'));
		const listId = derived(() => `${prefix()}-filter-options`);
		const shown = derived(() => mobile || open);
		const options = derived(() => filterState.mergedList.slice(0, 60));
		const histories = derived(() =>
			filterState.inputValue.trim() ? options().slice(0, 3) : []
		);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Command) {
				$$renderer.push('<!--[-->');
				Command($$renderer, {
					shouldFilter: false,
					loop: true,
					label: 'Search all patch notes',
					class: 'relative z-50 h-auto overflow-visible rounded-none bg-transparent',
					get value() {
						return commandValue;
					},
					set value($$value) {
						commandValue = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						$$renderer.push(
							`<form method="GET" action="/" class="border-border bg-card focus-within:border-signal flex min-h-11 items-center rounded-md border"><label${attr('for', `${prefix()}-filter-input`)} class="sr-only">${escape_html(mobile ? 'Hero, item, or keyword' : 'Search by hero, item, or keyword')}</label> <input${attr('id', `${prefix()}-filter-input`)} name="q" type="text" role="combobox" aria-autocomplete="list" aria-haspopup="listbox"${attr('aria-expanded', shown())}${attr('aria-controls', shown() ? listId() : void 0)}${attr('aria-activedescendant', shown() && commandValue ? `${prefix()}-option-${commandValue}` : void 0)} autocomplete="off"${attr('maxlength', 200)} placeholder="Search heroes, items, or patch text…"${attr('value', filterState.inputValue)} class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base outline-none"/> <button type="submit" aria-label="Search changelog" class="ui-focus-ring bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-r-md hover:opacity-90">`
						);
						Search($$renderer, { class: 'size-5' });
						$$renderer.push(`<!----></button></form> `);
						if (shown()) {
							$$renderer.push(
								`<!--[0--><div${attr_class(clsx$1(mobile ? 'mt-3 min-h-0 overflow-y-auto' : 'filter-dropdown bg-popover border-border absolute inset-x-0 top-full mt-2 max-h-[65vh] overflow-y-auto rounded-md border shadow-xl'))}>`
							);
							if (histories().length) {
								$$renderer.push(
									`<!--[0--><nav aria-label="Entity histories" class="border-subtle border-b p-3"><p class="text-muted-foreground mb-1 text-xs">Open full change history</p> <div class="flex flex-wrap gap-x-4 gap-y-1"><!--[-->`
								);
								const each_array = ensure_array_like(histories());
								for (
									let $$index = 0, $$length = each_array.length;
									$$index < $$length;
									$$index++
								) {
									let entity = each_array[$$index];
									$$renderer.push(
										`<a${attr('href', `/${stringify(entity.type)}/${stringify(entity.data.slug)}`)} class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 text-sm underline-offset-4 hover:underline">${escape_html(entity.data.name)} `
									);
									Arrow_right($$renderer, { class: 'size-3.5' });
									$$renderer.push(`<!----></a>`);
								}
								$$renderer.push(`<!--]--></div></nav>`);
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]--> `);
							if (Command_list) {
								$$renderer.push('<!--[-->');
								Command_list($$renderer, {
									id: listId(),
									'aria-label': 'Available hero and item filters',
									'aria-multiselectable': 'true',
									class: 'max-h-80 overflow-y-auto p-2',
									children: ($$renderer) => {
										if (options().length === 0) {
											$$renderer.push('<!--[0-->');
											if (Command_empty) {
												$$renderer.push('<!--[-->');
												Command_empty($$renderer, {
													class: 'text-muted-foreground px-3 py-5 text-sm',
													children: ($$renderer) => {
														$$renderer.push(
															`<!---->No matching heroes or items. Press Enter to search patch text.`
														);
													},
													$$slots: { default: true }
												});
												$$renderer.push('<!--]-->');
											} else {
												$$renderer.push('<!--[!-->');
												$$renderer.push('<!--]-->');
											}
										} else {
											$$renderer.push('<!--[-1-->');
											if (Command_group) {
												$$renderer.push('<!--[-->');
												Command_group($$renderer, {
													heading: 'Filter patches by hero or item',
													children: ($$renderer) => {
														$$renderer.push(`<!--[-->`);
														const each_array_1 = ensure_array_like(options());
														for (
															let $$index_1 = 0, $$length = each_array_1.length;
															$$index_1 < $$length;
															$$index_1++
														) {
															let entity = each_array_1[$$index_1];
															EntityItem($$renderer, {
																id: `${prefix()}-option-${stringify(entity.key)}`,
																value: entity.key,
																name: entity.data.name,
																imageSrc: entityImage(entity.data),
																isSelected: entity.isSelected,
																kind: entity.type,
																onSelect: () =>
																	filterState.toggle(entity.type, entity.data.name)
															});
														}
														$$renderer.push(`<!--]-->`);
													},
													$$slots: { default: true }
												});
												$$renderer.push('<!--]-->');
											} else {
												$$renderer.push('<!--[!-->');
												$$renderer.push('<!--]-->');
											}
										}
										$$renderer.push(`<!--]-->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push('<!--]-->');
							} else {
								$$renderer.push('<!--[!-->');
								$$renderer.push('<!--]-->');
							}
							$$renderer.push(
								` <p class="text-muted-foreground border-subtle border-t px-3 py-2.5 text-xs leading-relaxed">Patches must match every selected hero, item, and keyword. `
							);
							if (filterState.mergedList.length > 60)
								$$renderer.push(
									`<!--[0-->Type to narrow ${escape_html(filterState.mergedList.length)} matches.`
								);
							else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]--></p></div>`);
						} else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
//#endregion
//#region src/lib/components/filter-bar/FilterInput.svelte
function FilterInput($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const filterState = new FilterState(
			() => page.data.heroes ?? [],
			() => page.data.items ?? []
		);
		let open = false;
		let sheetOpen = false;
		const patchIcons = derived(() => page.data.changelog?.icons);
		const rosters = derived(() => ({
			hero: indexEntityNames(page.data.heroes ?? [], (hero) => hero.name),
			item: indexEntityNames(page.data.items ?? [], (item) => item.name)
		}));
		function selectedEntities(kind) {
			return (kind === 'hero' ? searchParams.hero : searchParams.item).map((name) => {
				const entity = findEntityName(rosters()[kind], name);
				const fallback = patchIcons() ? resolveEntity(patchIcons(), kind, name) : void 0;
				return {
					key: `${kind}:${name}`,
					kind,
					name: entity?.name ?? fallback?.alt ?? name,
					icon: entity ? entityImage(entity) : fallback?.src
				};
			});
		}
		const selected = derived(() => [
			...selectedEntities('hero'),
			...selectedEntities('item')
		]);
		function close() {
			open = false;
			sheetOpen = false;
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="js-only relative"><div class="hidden sm:block">`);
			SearchForm($$renderer, {
				filterState,
				onsubmit: close,
				onclose: close,
				get open() {
					return open;
				},
				set open($$value) {
					open = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			if (open)
				$$renderer.push(
					`<!--[0--><button type="button" class="fixed inset-0 z-40" aria-label="Close filter options" tabindex="-1"></button>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></div> <div class="sm:hidden">`);
			if (Root) {
				$$renderer.push('<!--[-->');
				Root($$renderer, {
					get open() {
						return sheetOpen;
					},
					set open($$value) {
						sheetOpen = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						{
							function child($$renderer, { props }) {
								$$renderer.push(
									`<button${attributes({
										...props,
										type: 'button',
										class:
											'ui-focus-ring border-border bg-card text-muted-foreground flex min-h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-base'
									})}>`
								);
								Search($$renderer, { class: 'text-signal size-4' });
								$$renderer.push(
									`<!----> <span class="flex-1">Search &amp; filter</span> `
								);
								if (searchParams.activeFilterCount > 0)
									$$renderer.push(
										`<!--[0--><span class="text-primary font-mono text-xs">${escape_html(searchParams.activeFilterCount)}</span>`
									);
								else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--></button>`);
							}
							if (Trigger) {
								$$renderer.push('<!--[-->');
								Trigger($$renderer, {
									child,
									$$slots: { child: true }
								});
								$$renderer.push('<!--]-->');
							} else {
								$$renderer.push('<!--[!-->');
								$$renderer.push('<!--]-->');
							}
						}
						$$renderer.push(` `);
						if (Sheet_content) {
							$$renderer.push('<!--[-->');
							Sheet_content($$renderer, {
								class: 'max-h-[85dvh] overflow-y-auto px-4 pb-6',
								style: 'padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));',
								children: ($$renderer) => {
									if (Sheet_header) {
										$$renderer.push('<!--[-->');
										Sheet_header($$renderer, {
											class: 'pr-12',
											children: ($$renderer) => {
												if (Sheet_title) {
													$$renderer.push('<!--[-->');
													Sheet_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->Search all patch notes`);
														},
														$$slots: { default: true }
													});
													$$renderer.push('<!--]-->');
												} else {
													$$renderer.push('<!--[!-->');
													$$renderer.push('<!--]-->');
												}
												$$renderer.push(` `);
												if (Sheet_description) {
													$$renderer.push('<!--[-->');
													Sheet_description($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(
																`<!---->Find a hero's history or combine filters to narrow the archive.`
															);
														},
														$$slots: { default: true }
													});
													$$renderer.push('<!--]-->');
												} else {
													$$renderer.push('<!--[!-->');
													$$renderer.push('<!--]-->');
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push('<!--]-->');
									} else {
										$$renderer.push('<!--[!-->');
										$$renderer.push('<!--]-->');
									}
									$$renderer.push(` `);
									SearchForm($$renderer, {
										filterState,
										mobile: true,
										onsubmit: close,
										onclose: close
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push('<!--]-->');
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push('<!--]-->');
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
			$$renderer.push(`</div> `);
			if (searchParams.activeFilterCount > 0) {
				$$renderer.push(
					`<!--[0--><div class="mt-2 flex items-center gap-2"><div class="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto" aria-label="Active filters"><!--[-->`
				);
				const each_array = ensure_array_like(selected());
				for (
					let $$index = 0, $$length = each_array.length;
					$$index < $$length;
					$$index++
				) {
					let entity = each_array[$$index];
					FilterBadge($$renderer, {
						name: entity.name,
						icon: entity.icon,
						kind: entity.kind,
						onRemove: () => filterState.toggle(entity.kind, entity.name)
					});
				}
				$$renderer.push(`<!--]--> `);
				if (searchParams.q) {
					$$renderer.push(
						`<!--[0--><button type="button" class="ui-focus-ring text-signal flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs"${attr('aria-label', `Remove keyword filter: ${stringify(searchParams.q)}`)}>Keyword: “${escape_html(searchParams.q)}” `
					);
					X($$renderer, { class: 'size-3.5' });
					$$renderer.push(`<!----></button>`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (searchParams.major) {
					$$renderer.push(
						`<!--[0--><button type="button" class="ui-focus-ring text-primary flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs" aria-label="Remove Major patches filter">Major patches `
					);
					X($$renderer, { class: 'size-3.5' });
					$$renderer.push(`<!----></button>`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(
					`<!--]--></div> <button type="button" class="ui-focus-ring text-muted-foreground min-h-11 shrink-0 rounded px-2 text-xs hover:text-foreground">Clear all</button></div>`
				);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--></div> <noscript><p class="text-muted-foreground text-sm leading-relaxed">Search needs JavaScript. Browse <a class="text-signal underline" href="/heroes">hero histories</a>, <a class="text-signal underline" href="/items">item histories</a>, or <a class="text-signal underline" href="/archive">all patches</a>.</p></noscript>`
			);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
//#region src/lib/components/filter-bar/HeroRail.svelte
function HeroRail($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const heroes = derived(() => {
			const selected = searchParams.hero;
			return (page.data.heroes ?? [])
				.filter((h) => h.isReleased)
				.map((hero) => ({
					hero,
					selected: hasEntity(selected, hero.name)
				}))
				.sort(
					(a, b) =>
						Number(b.selected) - Number(a.selected) ||
						a.hero.name.localeCompare(b.hero.name)
				);
		});
		const atCap = derived(() => searchParams.heroAtCap);
		if (heroes().length > 0) {
			$$renderer.push(
				`<!--[0--><div m="b-2" role="group" aria-labelledby="hero-rail-label"><span id="hero-rail-label" text="muted-foreground" m="b-2" block="" kicker-sm="">— Filter by hero <span text="muted-foreground">(${escape_html(heroes().length)})</span> `
			);
			if (atCap())
				$$renderer.push(
					`<!--[0--><span text="primary">— ${escape_html(20)} hero limit reached</span>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--></span> <div relative=""><div p="x-4 b-1" class="-mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:px-0"><div flex="~" w="max" gap="1.5" class="sm:w-auto sm:flex-wrap"><!--[-->`
			);
			const each_array = ensure_array_like(heroes());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let { hero, selected } = each_array[$$index];
				const blocked = !selected && atCap();
				$$renderer.push(
					`<button type="button"${attr('disabled', blocked, true)}${attr('title', blocked ? `${hero.name} — filter limit reached` : hero.name)}${attr('aria-label', blocked ? `${hero.name} — filter limit reached` : hero.name)}${attr('aria-pressed', selected)} class="clip-corner-sm border-border relative size-11 shrink-0 overflow-hidden border opacity-70 transition-colors disabled:cursor-not-allowed disabled:opacity-30 hover:z-10 idle-hover:border-primary/55 idle-hover:opacity-100 selected:border-primary selected:ring-primary/45 selected:opacity-100 selected:ring-2"><img${attr('src', getHeroCardImage(hero))}${attr('alt', hero.name)} width="36" height="36" loading="lazy" decoding="async" class="size-full object-cover"/></button>`
				);
			}
			$$renderer.push(
				`<!--]--></div></div> <div absolute="" aria-hidden="true" class="from-background pointer-events-none inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent sm:hidden"></div></div></div>`
			);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var defaultTimeoutProvider = {
	setTimeout: (callback, delay) => setTimeout(callback, delay),
	clearTimeout: (timeoutId) => clearTimeout(timeoutId),
	setInterval: (callback, delay) => setInterval(callback, delay),
	clearInterval: (intervalId) => clearInterval(intervalId)
};
/**
 * Allows customization of how timeouts are created.
 *
 * @tanstack/query-core makes liberal use of timeouts to implement `staleTime`
 * and `gcTime`. The default TimeoutManager provider uses the platform's global
 * `setTimeout` implementation, which is known to have scalability issues with
 * thousands of timeouts on the event loop.
 *
 * If you hit this limitation, consider providing a custom TimeoutProvider that
 * coalesces timeouts.
 */
var TimeoutManager = class {
	#provider = defaultTimeoutProvider;
	#providerCalled = false;
	/**
	 * `setTimeoutProvider` can be used to set a custom implementation of the
	 * `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval` functions,
	 * called a `TimeoutProvider`.
	 *
	 * This may be useful if you notice event loop performance issues with
	 * thousands of queries. A custom TimeoutProvider could also support timer
	 * delays longer than the global `setTimeout` maximum delay value of about
	 * 24 days.
	 *
	 * It is important to call `setTimeoutProvider` before creating a
	 * QueryClient or queries, so that the same provider is used consistently
	 * for all timers in the application, since different TimeoutProviders
	 * cannot cancel each others' timers.
	 *
	 * @example
	 * ```ts
	 * import { timeoutManager, QueryClient } from '@tanstack/query-core'
	 * import { CustomTimeoutProvider } from './CustomTimeoutProvider'
	 *
	 * timeoutManager.setTimeoutProvider(new CustomTimeoutProvider())
	 *
	 * export const queryClient = new QueryClient()
	 * ```
	 */
	setTimeoutProvider(provider) {
		if (process.env.NODE_ENV !== 'production') {
			if (this.#providerCalled && provider !== this.#provider)
				console.error(
					`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`,
					{
						previous: this.#provider,
						provider
					}
				);
		}
		this.#provider = provider;
		if (process.env.NODE_ENV !== 'production') this.#providerCalled = false;
	}
	/**
	 * `setTimeout` schedules a callback to run after approximately `delay`
	 * milliseconds, like the global `setTimeout` function. The callback can be
	 * canceled with `clearTimeout`.
	 *
	 * It returns a timer ID, which may be a number or an object that can be
	 * coerced to a number via `Symbol.toPrimitive`.
	 *
	 * @example
	 * ```ts
	 * import { timeoutManager } from '@tanstack/query-core'
	 *
	 * const timeoutId = timeoutManager.setTimeout(
	 *   () => console.log('ran at:', new Date()),
	 *   1000,
	 * )
	 *
	 * const timeoutIdNumber: number = Number(timeoutId)
	 * ```
	 */
	setTimeout(callback, delay) {
		if (process.env.NODE_ENV !== 'production') this.#providerCalled = true;
		return this.#provider.setTimeout(callback, delay);
	}
	/**
	 * `clearTimeout` cancels a timeout callback scheduled with `setTimeout`,
	 * like the global `clearTimeout` function. It should be called with a
	 * timer ID returned by `setTimeout`.
	 *
	 * @example
	 * ```ts
	 * import { timeoutManager } from '@tanstack/query-core'
	 *
	 * const timeoutId = timeoutManager.setTimeout(
	 *   () => console.log('ran at:', new Date()),
	 *   1000,
	 * )
	 *
	 * timeoutManager.clearTimeout(timeoutId)
	 * ```
	 */
	clearTimeout(timeoutId) {
		this.#provider.clearTimeout(timeoutId);
	}
	/**
	 * `setInterval` schedules a callback to be called approximately every
	 * `delay` milliseconds, like the global `setInterval` function.
	 *
	 * Like `setTimeout`, it returns a timer ID, which may be a number or an
	 * object that can be coerced to a number via `Symbol.toPrimitive`.
	 *
	 * @example
	 * ```ts
	 * import { timeoutManager } from '@tanstack/query-core'
	 *
	 * const intervalId = timeoutManager.setInterval(
	 *   () => console.log('ran at:', new Date()),
	 *   1000,
	 * )
	 * ```
	 */
	setInterval(callback, delay) {
		if (process.env.NODE_ENV !== 'production') this.#providerCalled = true;
		return this.#provider.setInterval(callback, delay);
	}
	/**
	 * `clearInterval` can be used to cancel an interval, like the global
	 * `clearInterval` function. It should be called with an interval ID
	 * returned by `setInterval`.
	 *
	 * @example
	 * ```ts
	 * import { timeoutManager } from '@tanstack/query-core'
	 *
	 * const intervalId = timeoutManager.setInterval(
	 *   () => console.log('ran at:', new Date()),
	 *   1000,
	 * )
	 *
	 * timeoutManager.clearInterval(intervalId)
	 * ```
	 */
	clearInterval(intervalId) {
		this.#provider.clearInterval(intervalId);
	}
};
/**
 * Singleton instance of {@link TimeoutManager}, used throughout TanStack Query to schedule and cancel timers.
 */
var timeoutManager = new TimeoutManager();
/**
 * In many cases code wants to delay to the next event loop tick; this is not
 * mediated by {@link timeoutManager}.
 *
 * This function is provided to make auditing the `tanstack/query-core` for
 * incorrect use of system `setTimeout` easier.
 */
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/utils.js
/** @deprecated
 * use `environmentManager.isServer()` instead.
 */
var isServer$1 = typeof window === 'undefined' || 'Deno' in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveQueryValue(value, query) {
	return typeof value === 'function' ? value(query) : value;
}
/**
 * Checks whether a query matches the given {@link QueryFilters}.
 * Every filter that is specified must match; filters that are left unspecified are ignored.
 *
 * @example
 * ```ts
 * const queryCache = queryClient.getQueryCache()
 *
 * const matchingQueries = queryCache
 *   .getAll()
 *   .filter((query) => matchQuery({ queryKey: ['posts'] }, query))
 * ```
 */
function matchQuery(filters, query) {
	const { type = 'all', exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options))
				return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== 'all') {
		const isActive = query.isActive();
		if (type === 'active' && !isActive) return false;
		if (type === 'inactive' && isActive) return false;
	}
	if (typeof stale === 'boolean' && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
/**
 * Checks whether a mutation matches the given {@link MutationFilters}.
 * Every filter that is specified must match; filters that are left unspecified are ignored.
 * If a `mutationKey` filter is provided but the mutation has no `mutationKey` of its own, it does not match.
 *
 * @example
 * ```ts
 * const mutationCache = queryClient.getMutationCache()
 *
 * const matchingMutations = mutationCache
 *   .getAll()
 *   .filter((mutation) => matchMutation({ mutationKey: ['addPost'] }, mutation))
 * ```
 */
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return (options?.queryKeyHashFn || hashKey)(queryKey);
}
/**
 * Default query & mutation keys hash function.
 * Hashes the value into a stable hash.
 *
 * @example
 * ```ts
 * // Object keys are sorted, so key order doesn't affect the hash:
 * hashKey(['todos', { page: 1, filter: 'done' }]) // === '["todos",{"filter":"done","page":1}]'
 * ```
 */
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) =>
		isPlainObject(val)
			? Object.keys(val)
					.sort()
					.reduce((result, key) => {
						result[key] = val[key];
						return result;
					}, {})
			: val
	);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === 'object' && typeof b === 'object') {
		if (Array.isArray(a) && Array.isArray(b)) {
			if (b.length > a.length) return false;
			for (let i = 0; i < b.length; i++) if (!partialMatchKey(a[i], b[i])) return false;
			return true;
		}
		const bKeys = Object.keys(b);
		for (const key of bKeys) if (!partialMatchKey(a[key], b[key])) return false;
		return true;
	}
	return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (
			aItem === null ||
			bItem === null ||
			typeof aItem !== 'object' ||
			typeof bItem !== 'object'
		) {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
/**
 * Shallow compare objects.
 */
function shallowEqualObjects(a, b) {
	if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (a[key] !== b[key]) return false;
	return true;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const objectPrototype = Object.getPrototypeOf(o);
	const ctor = objectPrototype?.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== 'function') return false;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty('isPrototypeOf')) return false;
	if (objectPrototype !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === '[object Object]';
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === 'function')
		return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) {
		if (process.env.NODE_ENV !== 'production')
			try {
				return replaceEqualDeep(prevData, data);
			} catch (error) {
				console.error(
					`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
				);
				throw error;
			}
		return replaceEqualDeep(prevData, data);
	}
	return data;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
/**
 * Sentinel value that can be passed as a query's `queryFn` to conditionally disable the query (equivalent
 * to `enabled: false`) while preserving full type inference for the query's data. Unlike `enabled: false`,
 * a query disabled via `skipToken` cannot be triggered with `refetch`.
 *
 * @example
 * ```ts
 * new QueryObserver(queryClient, {
 *   queryKey: ['post', postId],
 *   queryFn: postId != null ? () => fetchPost(postId) : skipToken,
 * })
 * ```
 */
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
	if (process.env.NODE_ENV !== 'production') {
		if (options.queryFn === skipToken)
			console.error(
				`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
			);
	}
	if (!options.queryFn && fetchOptions?.initialPromise)
		return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken)
		return () =>
			Promise.reject(
				/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`)
			);
	return options.queryFn;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, 'signal', {
		enumerable: true,
		get: () => {
			signal ??= getSignal();
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener('abort', onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/environmentManager.js
var isServerFn = () => isServer$1;
/**
 * Returns whether the current runtime should be treated as a server environment.
 */
var isServer = () => isServerFn();
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = this.subscribe.bind(this);
	}
	subscribe(listener) {
		this.listeners.add(listener);
		this.onSubscribe();
		return () => {
			this.listeners.delete(listener);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/focusManager.js
/**
 * The `FocusManager` manages the focus state within TanStack Query.
 *
 * It can be used to change the default event listeners or to manually change the focus state.
 */
var FocusManager = class extends Subscribable {
	#focused;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onFocus) => {
			if (typeof window !== 'undefined' && window.addEventListener) {
				const listener = () => onFocus();
				window.addEventListener('visibilitychange', listener, false);
				return () => {
					window.removeEventListener('visibilitychange', listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	/**
	 * `setEventListener` can be used to set a custom event listener that will
	 * be used to determine the focus state. The provided `setup` function
	 * receives a `setFocused` callback: call it with a `boolean` to manually
	 * set the focus state, or with no arguments to re-evaluate the current
	 * focus state and notify subscribers.
	 *
	 * @example
	 * ```ts
	 * import { focusManager } from '@tanstack/query-core'
	 *
	 * focusManager.setEventListener((handleFocus) => {
	 *   const listener = () => handleFocus()
	 *   // Listen to visibilitychange
	 *   if (typeof window !== 'undefined' && window.addEventListener) {
	 *     window.addEventListener('visibilitychange', listener, false)
	 *   }
	 *
	 *   return () => {
	 *     // Be sure to unsubscribe if a new handler is set
	 *     window.removeEventListener('visibilitychange', listener)
	 *   }
	 * })
	 * ```
	 */
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup((focused) => {
			if (typeof focused === 'boolean') this.setFocused(focused);
			else this.onFocus();
		});
	}
	/**
	 * `setFocused` can be used to manually set the focus state. Set `undefined`
	 * to fall back to the default focus check.
	 *
	 * @example
	 * ```ts
	 * import { focusManager } from '@tanstack/query-core'
	 *
	 * // Set focused
	 * focusManager.setFocused(true)
	 *
	 * // Set unfocused
	 * focusManager.setFocused(false)
	 *
	 * // Fallback to the default focus check
	 * focusManager.setFocused(undefined)
	 * ```
	 */
	setFocused(focused) {
		if (this.#focused !== focused) {
			this.#focused = focused;
			this.onFocus();
		}
	}
	/**
	 * `onFocus` notifies all subscribed listeners with the current focus state.
	 */
	onFocus() {
		const isFocused = this.isFocused();
		this.listeners.forEach((listener) => {
			listener(isFocused);
		});
	}
	/**
	 * `isFocused` can be used to get the current focus state.
	 */
	isFocused() {
		if (typeof this.#focused === 'boolean') return this.#focused;
		return globalThis.document?.visibilityState !== 'hidden';
	}
};
/**
 * Singleton instance of {@link FocusManager}, used to manage and observe the focus state within TanStack Query.
 */
var focusManager = new FocusManager();
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/notifyManager.js
/**
 * Default scheduling function used by the notify manager.
 * Schedules the callback with the system's `setTimeout(callback, 0)`.
 */
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else
			scheduleFn(() => {
				notifyFn(callback);
			});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length)
			scheduleFn(() => {
				batchNotifyFn(() => {
					originalQueue.forEach((callback) => {
						notifyFn(callback);
					});
				});
			});
	};
	return {
		/**
		 * Batches all updates scheduled inside the passed callback.
		 * This is mainly used internally to optimize query client updating.
		 * Batches can be nested; the queue is only flushed once the outermost `batch` call finishes.
		 * The return value of `callback` is passed through.
		 */
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		/**
		 * All calls to the wrapped function will be batched.
		 */
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		/**
		 * Schedules a function to be run on the next batch.
		 * By default, the batch is run with a `setTimeout`, but this can be configured via `setScheduler`.
		 */
		schedule,
		/**
		 * Use this method to set a custom notify function.
		 * This can be used to for example wrap notifications with `React.act` while running tests.
		 */
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		/**
		 * Use this method to set a custom function to batch notifications together into a single tick.
		 * Framework adapters use this to plug in their own batching primitive, so that a single query
		 * update only triggers one re-render instead of one per subscriber.
		 *
		 * @example
		 * ```ts
		 * import { notifyManager } from '@tanstack/query-core'
		 * import { batch } from 'solid-js'
		 *
		 * notifyManager.setBatchNotifyFunction(batch)
		 * ```
		 */
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		/**
		 * Configures a custom callback that schedules when the next batch runs.
		 * The default behavior is `setTimeout(callback, 0)`.
		 *
		 * @example
		 * ```ts
		 * import { notifyManager } from '@tanstack/query-core'
		 *
		 * // Schedule batches in the next microtask
		 * notifyManager.setScheduler(queueMicrotask)
		 *
		 * // Schedule batches before the next frame is rendered
		 * notifyManager.setScheduler(requestAnimationFrame)
		 *
		 * // Schedule batches some time in the future
		 * notifyManager.setScheduler((cb) => setTimeout(cb, 10))
		 * ```
		 */
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
/**
 * Handles scheduling and batching callbacks in TanStack Query.
 */
var notifyManager = createNotifyManager();
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/onlineManager.js
/**
 * The `OnlineManager` manages the online state within TanStack Query. It can
 * be used to change the default event listeners or to manually change the
 * online state.
 *
 * By default, the `onlineManager` assumes an active network connection, and
 * listens to the `online` and `offline` events on the `window` object to
 * detect changes.
 */
var OnlineManager = class extends Subscribable {
	#online = true;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onOnline) => {
			if (typeof window !== 'undefined' && window.addEventListener) {
				const onlineListener = () => onOnline(true);
				const offlineListener = () => onOnline(false);
				window.addEventListener('online', onlineListener, false);
				window.addEventListener('offline', offlineListener, false);
				return () => {
					window.removeEventListener('online', onlineListener);
					window.removeEventListener('offline', offlineListener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	/**
	 * `setEventListener` can be used to set a custom event listener that will
	 * be used to determine the online state. The provided `setup` function
	 * receives a `setOnline` callback that should be called with a `boolean`
	 * whenever the online state changes.
	 *
	 * @example
	 * ```ts
	 * import NetInfo from '@react-native-community/netinfo'
	 * import { onlineManager } from '@tanstack/query-core'
	 *
	 * onlineManager.setEventListener((setOnline) => {
	 *   return NetInfo.addEventListener((state) => {
	 *     setOnline(!!state.isConnected)
	 *   })
	 * })
	 * ```
	 */
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup(this.setOnline.bind(this));
	}
	/**
	 * `setOnline` can be used to manually set the online state.
	 *
	 * @example
	 * ```ts
	 * import { onlineManager } from '@tanstack/query-core'
	 *
	 * // Set to online
	 * onlineManager.setOnline(true)
	 *
	 * // Set to offline
	 * onlineManager.setOnline(false)
	 * ```
	 */
	setOnline(online) {
		if (this.#online !== online) {
			this.#online = online;
			this.listeners.forEach((listener) => {
				listener(online);
			});
		}
	}
	/**
	 * `isOnline` can be used to get the current online state.
	 */
	isOnline() {
		return this.#online;
	}
};
/**
 * Singleton instance of {@link OnlineManager}, used to manage and observe the online state within TanStack Query.
 */
var onlineManager = new OnlineManager();
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode ?? 'online') === 'online' ? onlineManager.isOnline() : true;
}
/**
 * The error thrown by a `Retryer` (and surfaced to `query.promise`/`mutation`) when a fetch is cancelled, e.g. via
 * `query.cancel()`. `revert`, if `true`, tells the caller to restore the state the query was in before the fetch
 * started instead of surfacing the error. `silent`, if `true`, tells the caller to suppress this error and instead
 * resolve with the promise of the fetch that triggered the cancellation.
 * @example
 * ```ts
 * query.cancel()
 *
 * try {
 *   await query.promise
 * } catch (error) {
 *   if (error instanceof CancelledError) {
 *     // the fetch was cancelled, e.g. via `query.cancel()`
 *   }
 * }
 * ```
 */
var CancelledError = class extends Error {
	constructor(options) {
		super('CancelledError');
		this.revert = options?.revert;
		this.silent = options?.silent;
	}
};
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	let status = 'pending';
	let promiseResolve;
	let promiseReject;
	const promise = new Promise((resolve, reject) => {
		promiseResolve = resolve;
		promiseReject = reject;
	});
	promise.catch(noop);
	const isResolved = () => status !== 'pending';
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			const error = new CancelledError(cancelOptions);
			reject(error);
			config.onCancel?.(error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () =>
		focusManager.isFocused() &&
		(config.networkMode === 'always' || onlineManager.isOnline()) &&
		config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn?.();
			status = 'resolved';
			promiseResolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn?.();
			status = 'rejected';
			promiseReject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			config.onPause?.();
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) config.onContinue?.();
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise ?? config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue)
			.then(resolve)
			.catch((error) => {
				if (isResolved()) return;
				const retry = config.retry ?? (isServer() ? 0 : 3);
				const retryDelay = config.retryDelay ?? defaultRetryDelay;
				const delay =
					typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
				const shouldRetry =
					retry === true ||
					(typeof retry === 'number' && failureCount < retry) ||
					(typeof retry === 'function' && retry(failureCount, error));
				if (isRetryCancelled || !shouldRetry) {
					reject(error);
					return;
				}
				failureCount++;
				config.onFail?.(failureCount, error);
				sleep(delay)
					.then(() => {
						return canContinue() ? void 0 : pause();
					})
					.then(() => {
						if (isRetryCancelled) reject(error);
						else run();
					});
			});
	};
	return {
		promise,
		status: () => status,
		cancel,
		continue: () => {
			continueFn?.();
			return promise;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return promise;
		}
	};
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/removable.js
var Removable = class {
	#gcTimeout;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout();
		if (isValidTimeout(this.gcTime))
			this.#gcTimeout = timeoutManager.setTimeout(() => {
				this.optionalRemove();
			}, this.gcTime);
	}
	updateGcTime(newGcTime) {
		this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (isServer() ? Infinity : 3e5));
	}
	clearGcTimeout() {
		if (this.#gcTimeout !== void 0) {
			timeoutManager.clearTimeout(this.#gcTimeout);
			this.#gcTimeout = void 0;
		}
	}
};
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
	return {
		onFetch: (context, query) => {
			const options = context.options;
			const direction = context.fetchOptions?.meta?.fetchMore?.direction;
			const oldPages = context.state.data?.pages || [];
			const oldPageParams = context.state.data?.pageParams || [];
			let result = {
				pages: [],
				pageParams: []
			};
			let currentPage = 0;
			const fetchFn = async () => {
				let cancelled = false;
				const addSignalProperty = (object) => {
					addConsumeAwareSignal(
						object,
						() => context.signal,
						() => (cancelled = true)
					);
				};
				const queryFn = ensureQueryFn(context.options, context.fetchOptions);
				const fetchPage = async (data, param, previous) => {
					if (cancelled) return Promise.reject(context.signal.reason);
					if (param == null && data.pages.length) return Promise.resolve(data);
					const createQueryFnContext = () => {
						const queryFnContext = {
							client: context.client,
							queryKey: context.queryKey,
							pageParam: param,
							direction: previous ? 'backward' : 'forward',
							meta: context.options.meta
						};
						addSignalProperty(queryFnContext);
						return queryFnContext;
					};
					const queryFnContext = createQueryFnContext();
					const page = await queryFn(queryFnContext);
					const { maxPages } = context.options;
					const addTo = previous ? addToStart : addToEnd;
					return {
						pages: addTo(data.pages, page, maxPages),
						pageParams: addTo(data.pageParams, param, maxPages)
					};
				};
				if (direction && oldPages.length) {
					const previous = direction === 'backward';
					const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
					const oldData = {
						pages: oldPages,
						pageParams: oldPageParams
					};
					result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
				} else {
					const remainingPages = pages ?? oldPages.length;
					do {
						const param =
							currentPage === 0
								? (oldPageParams[0] ?? options.initialPageParam)
								: getNextPageParam(options, result);
						if (currentPage > 0 && param == null) break;
						result = await fetchPage(result, param);
						currentPage++;
					} while (currentPage < remainingPages);
				}
				return result;
			};
			if (context.options.persister)
				context.fetchFn = () => {
					return context.options.persister?.(
						fetchFn,
						{
							client: context.client,
							queryKey: context.queryKey,
							meta: context.options.meta,
							signal: context.signal
						},
						query
					);
				};
			else context.fetchFn = fetchFn;
		}
	};
}
function getNextPageParam(options, { pages, pageParams }) {
	const lastIndex = pages.length - 1;
	return pages.length > 0
		? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams)
		: void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
	return pages.length > 0
		? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams)
		: void 0;
}
/**
 * Checks if there is a next page.
 */
function hasNextPage(options, data) {
	if (!data) return false;
	return getNextPageParam(options, data) != null;
}
/**
 * Checks if there is a previous page.
 */
function hasPreviousPage(options, data) {
	if (!data || !options.getPreviousPageParam) return false;
	return getPreviousPageParam(options, data) != null;
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/query.js
/**
 * Represents a single cached query. A `Query` holds the query's key, options,
 * state (data/error/status), and the observers currently subscribed to it.
 *
 * Instances are created and managed internally by `QueryCache`; application
 * code typically interacts with queries indirectly through `QueryClient` or
 * a framework hook like `useQuery`. Direct access to a `Query` instance is
 * possible via `queryCache.find()`/`findAll()` for inspecting cache state.
 *
 * @example
 * ```ts
 * const queryCache = queryClient.getQueryCache()
 * const query = queryCache.find({ queryKey: ['posts'] })
 *
 * if (query) {
 *   console.log(query.state.dataUpdatedAt)
 * }
 * ```
 */
var Query = class extends Removable {
	#queryType;
	#initialState;
	#revertState;
	#cache;
	#client;
	#retryer;
	#defaultOptions;
	#abortSignalConsumed;
	constructor(config) {
		super();
		this.#abortSignalConsumed = false;
		this.#defaultOptions = config.defaultOptions;
		this.setOptions(config.options);
		this.observers = [];
		this.#client = config.client;
		this.#cache = this.#client.getQueryCache();
		this.queryKey = config.queryKey;
		this.queryHash = config.queryHash;
		this.#initialState = getDefaultState(this.options);
		this.state = config.state ?? this.#initialState;
		this.scheduleGc();
	}
	/**
	 * The `meta` object passed in the query's options, if any.
	 */
	get meta() {
		return this.options.meta;
	}
	/** @internal */
	get queryType() {
		return this.#queryType;
	}
	/**
	 * The promise for the currently in-flight fetch, if the query is fetching.
	 * `undefined` when the query is not fetching.
	 */
	get promise() {
		return this.#retryer?.promise;
	}
	/** @internal */
	setOptions(options) {
		this.options = {
			...this.#defaultOptions,
			...options
		};
		if (options?._type) this.#queryType = options._type;
		this.updateGcTime(this.options.gcTime);
		if (this.state && this.state.data === void 0) {
			const defaultState = getDefaultState(this.options);
			if (defaultState.data !== void 0) {
				this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
				this.#initialState = defaultState;
			}
		}
	}
	optionalRemove() {
		if (!this.observers.length && this.state.fetchStatus === 'idle')
			this.#cache.remove(this);
	}
	/** @internal */
	setData(newData, options) {
		const data = replaceData(this.state.data, newData, this.options);
		this.#dispatch({
			data,
			type: 'success',
			dataUpdatedAt: options?.updatedAt,
			manual: options?.manual
		});
		return data;
	}
	/**
	 * Merges the given partial state directly into this query's state, notifying observers. Used
	 * by persistence and broadcast plugins to restore a state snapshot, and by devtools to let a
	 * user manually trigger a loading/error state or edit the cached data.
	 */
	setState(state) {
		this.#dispatch({
			type: 'setState',
			state
		});
	}
	/**
	 * Cancels the query's currently in-flight fetch, if any.
	 * - Returns a promise that resolves once the cancellation has settled.
	 * - If no fetch is in progress, resolves immediately.
	 *
	 * @example
	 * ```ts
	 * await query.cancel()
	 * ```
	 */
	cancel(options) {
		const promise = this.#retryer?.promise;
		this.#retryer?.cancel(options);
		return promise ? promise.then(noop).catch(noop) : Promise.resolve();
	}
	/**
	 * Clears the query's garbage collection timeout and silently cancels any
	 * in-flight fetch. Called by `QueryCache` when the query is removed from
	 * the cache.
	 *
	 * @see {@link Query#cancel}
	 */
	destroy() {
		super.destroy();
		this.cancel({ silent: true });
	}
	/** @internal */
	get resetState() {
		return this.#initialState;
	}
	/**
	 * Resets the query back to its initial state (the state it had when it was
	 * first created, e.g. any `initialData`), destroying it first to cancel any
	 * in-flight fetch.
	 */
	reset() {
		this.destroy();
		this.setState(this.resetState);
	}
	/**
	 * Returns `true` if the query has at least one observer for which `enabled`
	 * does not resolve to `false`.
	 */
	isActive() {
		return this.observers.some(
			(observer) => resolveQueryValue(observer.options.enabled, this) !== false
		);
	}
	/**
	 * Returns `true` if the query is disabled, meaning it will not fetch
	 * automatically.
	 * - If the query has observers, it is disabled when none of them are active
	 *   (see `isActive`).
	 * - If the query has no observers, it is disabled when its `queryFn` is
	 *   `skipToken` or it has never been fetched.
	 */
	isDisabled() {
		if (this.getObserversCount() > 0) return !this.isActive();
		return this.options.queryFn === skipToken || !this.isFetched();
	}
	/**
	 * Returns `true` if the query has been fetched, i.e. it has resolved with
	 * either data or an error at least once.
	 */
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	/**
	 * Returns `true` if the query has at least one observer configured with
	 * `staleTime: 'static'`, meaning it is treated as never stale.
	 */
	isStatic() {
		if (this.getObserversCount() > 0)
			return this.observers.some(
				(observer) => resolveQueryValue(observer.options.staleTime, this) === 'static'
			);
		return false;
	}
	/**
	 * Returns `true` if the query is stale.
	 * - If the query has observers, defers to whether any observer's current
	 *   result reports `isStale` (which accounts for each observer's own
	 *   `staleTime` and `enabled` state).
	 * - If the query has no observers, it is considered stale when it has no
	 *   data or has been invalidated.
	 *
	 * @see {@link Query#isStaleByTime}
	 * @example
	 * ```ts
	 * if (query.isStale()) {
	 *   // refetch or otherwise treat the cached data as outdated
	 * }
	 * ```
	 */
	isStale() {
		if (this.getObserversCount() > 0)
			return this.observers.some((observer) => observer.getCurrentResult().isStale);
		return this.state.data === void 0 || this.state.isInvalidated;
	}
	/**
	 * Returns `true` if the query's data is stale relative to the given
	 * `staleTime` (defaults to `0`).
	 * - A query with no data is always stale.
	 * - `staleTime: 'static'` is never stale.
	 * - An invalidated query is always stale.
	 * - Otherwise, staleness is based on elapsed time since `dataUpdatedAt`.
	 *
	 * @see {@link Query#isStale}
	 * @example
	 * ```ts
	 * const isStale = query.isStaleByTime(1000 * 60)
	 * ```
	 */
	isStaleByTime(staleTime = 0) {
		if (this.state.data === void 0) return true;
		if (staleTime === 'static') return false;
		if (this.state.isInvalidated) return true;
		return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
	}
	/** @internal */
	onFocus() {
		this.observers
			.find((x) => x.shouldFetchOnWindowFocus())
			?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	/** @internal */
	onOnline() {
		this.observers
			.find((x) => x.shouldFetchOnReconnect())
			?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	/** @internal */
	addObserver(observer) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			this.clearGcTimeout();
			this.#cache.notify({
				type: 'observerAdded',
				query: this,
				observer
			});
		}
	}
	/** @internal */
	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
			if (!this.observers.length) {
				if (this.#retryer) {
					if (
						this.#abortSignalConsumed ||
						(this.state.fetchStatus === 'paused' && this.state.status === 'pending')
					)
						this.#retryer.cancel({ revert: true });
					else this.#retryer.cancelRetry();
				}
				this.scheduleGc();
			}
			this.#cache.notify({
				type: 'observerRemoved',
				query: this,
				observer
			});
		}
	}
	/**
	 * Returns the number of observers currently subscribed to this query.
	 *
	 * @example
	 * ```ts
	 * if (query.getObserversCount() === 0) {
	 *   // no component is currently watching this query
	 * }
	 * ```
	 */
	getObserversCount() {
		return this.observers.length;
	}
	/**
	 * Marks the query as invalidated, unless it is already invalidated. This
	 * updates `state.isInvalidated` and notifies observers, but does not by
	 * itself trigger a refetch.
	 *
	 * @example
	 * ```ts
	 * query.invalidate()
	 * ```
	 */
	invalidate() {
		if (!this.state.isInvalidated) this.#dispatch({ type: 'invalidate' });
	}
	/**
	 * Fetches the query, i.e. runs its `queryFn` (through any configured
	 * retryer/behavior) and updates the query's state with the result.
	 * - If a fetch is already in flight, returns its promise instead of
	 *   starting a new one, unless `fetchOptions.cancelRefetch` is set and the
	 *   query already has data, in which case the current fetch is silently
	 *   cancelled first.
	 * - If `options` is passed, it replaces the query's current options
	 *   before fetching.
	 */
	async fetch(options, fetchOptions) {
		if (this.state.fetchStatus !== 'idle' && this.#retryer?.status() !== 'rejected') {
			if (this.state.data !== void 0 && fetchOptions?.cancelRefetch)
				this.cancel({ silent: true });
			else if (this.#retryer) {
				this.#retryer.continueRetry();
				return this.#retryer.promise;
			}
		}
		if (options) this.setOptions(options);
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) this.setOptions(observer.options);
		}
		if (process.env.NODE_ENV !== 'production') {
			if (!Array.isArray(this.options.queryKey))
				console.error(
					`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`
				);
		}
		const abortController = new AbortController();
		const addSignalProperty = (object) => {
			Object.defineProperty(object, 'signal', {
				enumerable: true,
				get: () => {
					this.#abortSignalConsumed = true;
					return abortController.signal;
				}
			});
		};
		const fetchFn = () => {
			const queryFn = ensureQueryFn(this.options, fetchOptions);
			const createQueryFnContext = () => {
				const queryFnContext = {
					client: this.#client,
					queryKey: this.queryKey,
					meta: this.meta
				};
				addSignalProperty(queryFnContext);
				return queryFnContext;
			};
			const queryFnContext = createQueryFnContext();
			this.#abortSignalConsumed = false;
			if (this.options.persister)
				return this.options.persister(queryFn, queryFnContext, this);
			return queryFn(queryFnContext);
		};
		const createFetchContext = () => {
			const context = {
				fetchOptions,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#client,
				state: this.state,
				fetchFn
			};
			addSignalProperty(context);
			return context;
		};
		const context = createFetchContext();
		(this.#queryType === 'infinite'
			? infiniteQueryBehavior(this.options.pages)
			: this.options.behavior
		)?.onFetch(context, this);
		this.#revertState = this.state;
		if (
			this.state.fetchStatus === 'idle' ||
			this.state.fetchMeta !== context.fetchOptions?.meta
		)
			this.#dispatch({
				type: 'fetch',
				meta: context.fetchOptions?.meta
			});
		const retryer = (this.#retryer = createRetryer({
			initialPromise: fetchOptions?.initialPromise,
			fn: context.fetchFn,
			onCancel: (error) => {
				if (error instanceof CancelledError && error.revert)
					this.setState({
						...this.#revertState,
						fetchStatus: 'idle'
					});
				abortController.abort();
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: 'failed',
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: 'pause' });
			},
			onContinue: () => {
				this.#dispatch({ type: 'continue' });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay,
			networkMode: context.options.networkMode,
			canRun: () => true
		}));
		try {
			const data = await retryer.start();
			if (data === void 0) {
				if (process.env.NODE_ENV !== 'production')
					console.error(
						`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
					);
				throw new Error(`${this.queryHash} data is undefined`);
			}
			this.setData(data);
			this.#cache.config.onSuccess?.(data, this);
			this.#cache.config.onSettled?.(data, this.state.error, this);
			return data;
		} catch (error) {
			if (error instanceof CancelledError) {
				if (error.silent) return this.#retryer.promise;
				else if (error.revert) {
					if (this.state.data === void 0) throw error;
					return this.state.data;
				}
			}
			this.#dispatch({
				type: 'error',
				error
			});
			this.#cache.config.onError?.(error, this);
			this.#cache.config.onSettled?.(this.state.data, error, this);
			throw error;
		} finally {
			if (this.#retryer === retryer) this.#retryer = void 0;
			this.scheduleGc();
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case 'failed':
					return {
						...state,
						fetchFailureCount: action.failureCount,
						fetchFailureReason: action.error
					};
				case 'pause':
					return {
						...state,
						fetchStatus: 'paused'
					};
				case 'continue':
					return {
						...state,
						fetchStatus: 'fetching'
					};
				case 'fetch':
					return {
						...state,
						...fetchState(state.data, this.options),
						fetchMeta: action.meta ?? null
					};
				case 'success':
					const newState = {
						...state,
						...successState(action.data, action.dataUpdatedAt),
						dataUpdateCount: state.dataUpdateCount + 1,
						...(!action.manual && {
							fetchStatus: 'idle',
							fetchFailureCount: 0,
							fetchFailureReason: null
						})
					};
					this.#revertState = action.manual ? newState : void 0;
					return newState;
				case 'error':
					const error = action.error;
					return {
						...state,
						error,
						errorUpdateCount: state.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: state.fetchFailureCount + 1,
						fetchFailureReason: error,
						fetchStatus: 'idle',
						status: 'error',
						isInvalidated: true
					};
				case 'invalidate':
					return {
						...state,
						isInvalidated: true
					};
				case 'setState':
					return {
						...state,
						...action.state
					};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.observers.slice().forEach((observer) => {
				observer.onQueryUpdate();
			});
			this.#cache.notify({
				query: this,
				type: 'updated',
				action
			});
		});
	}
};
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? 'fetching' : 'paused',
		...(data === void 0 && {
			error: null,
			status: 'pending'
		})
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt ?? Date.now(),
		error: null,
		isInvalidated: false,
		status: 'success'
	};
}
function getDefaultState(options) {
	const data =
		typeof options.initialData === 'function'
			? options.initialData()
			: options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData
		? typeof options.initialDataUpdatedAt === 'function'
			? options.initialDataUpdatedAt()
			: options.initialDataUpdatedAt
		: 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? (initialDataUpdatedAt ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? 'success' : 'pending',
		fetchStatus: 'idle'
	};
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/context.js
var _contextKey = Symbol('QueryClient');
/**
 * Retrieves the `QueryClient` set on Svelte's context by `QueryClientProvider` (or by
 * {@link setQueryClientContext} directly). This is what {@link useQueryClient} calls internally.
 *
 * @throws If no `QueryClient` was found in context.
 * @returns The `QueryClient` set on context, whether by `QueryClientProvider` or {@link setQueryClientContext}.
 */
var getQueryClientContext = () => {
	const client = getContext(_contextKey);
	if (!client)
		throw new Error(
			'No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?'
		);
	return client;
};
/**
 * Sets a `QueryClient` on Svelte's context, so it can be read with {@link getQueryClientContext} (or
 * {@link useQueryClient}) from any descendant component. `QueryClientProvider` wraps this — use it directly
 * only if you need to set the client from your own component instead.
 *
 * @param client - The `QueryClient` to make available to descendant components.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *   import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
 *
 *   const queryClient = new QueryClient()
 * <\/script>
 *
 * <QueryClientProvider client={queryClient}>
 *   ...
 * </QueryClientProvider>
 * ```
 */
var setQueryClientContext = (client) => {
	setContext(_contextKey, client);
};
var _isRestoringContextKey = Symbol('isRestoring');
/** Retrieves a `isRestoring` from Svelte's context */
var getIsRestoringContext = () => {
	try {
		return getContext(_isRestoringContextKey) ?? { current: false };
	} catch (error) {
		return { current: false };
	}
};
//#endregion
export {
	Dismissible_layer as $,
	FilterInput as A,
	toast as B,
	replaceData as C,
	boxWith as Ct,
	timeUntilStale as D,
	skipToken as E,
	getEntityIcons as F,
	Sheet_title as G,
	cn as H,
	resolveEntity as I,
	Scroll_lock as J,
	Sheet_header as K,
	setEntityIcons as L,
	hasEntity as M,
	changeCountLabel as N,
	timeoutManager as O,
	entityPatchHref as P,
	Escape_layer as Q,
	searchParams as R,
	partialMatchKey as S,
	cssToStyleObj as St,
	shallowEqualObjects as T,
	Root as U,
	toastState as V,
	Sheet_description as W,
	Text_selection_layer as X,
	useId as Y,
	Focus_scope as Z,
	hashQueryKeyByOptions as _,
	Context as _t,
	fetchState as a,
	isFocusVisible as at,
	matchQuery as b,
	mergeProps as bt,
	Removable as c,
	createBitsAttrs as ct,
	notifyManager as d,
	DOMContext as dt,
	Portal$1 as et,
	focusManager as f,
	getDocument as ft,
	hashKey as g,
	watch as gt,
	functionalUpdate as h,
	ElementSize as ht,
	Query as i,
	isElement as it,
	ENTITY_TONE as j,
	HeroRail as k,
	createRetryer as l,
	getDataTransitionAttrs as lt,
	isServer as m,
	onDestroyEffect as mt,
	getQueryClientContext as n,
	noop$1 as nt,
	hasNextPage as o,
	isNotNull as ot,
	Subscribable as p,
	getWindow as pt,
	Sheet_content as q,
	setQueryClientContext as r,
	PresenceManager as rt,
	hasPreviousPage as s,
	boolToEmptyStrOrUndef as st,
	getIsRestoringContext as t,
	createId as tt,
	onlineManager as u,
	attachRef as ut,
	isValidTimeout as v,
	SvelteSet as vt,
	resolveQueryValue as w,
	simpleBox as wt,
	noop as x,
	styleToString as xt,
	matchMutation as y,
	createSubscriber as yt,
	SonnerState as z
};
