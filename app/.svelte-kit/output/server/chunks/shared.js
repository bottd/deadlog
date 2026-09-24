import {
	a as is_plain_object$1,
	c as stringify_key,
	d as MAX_ARRAY_INDEX,
	i as get_type,
	l as stringify_string,
	n as DevalueError,
	o as is_valid_array_index,
	r as enumerable_symbols,
	s as is_valid_array_len,
	u as valid_array_indices
} from './uneval.js';
import { HttpError, SvelteKitError } from '@sveltejs/kit/internal';
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/utils/functions.js
function noop() {}
/**
 * @template T
 * @param {() => T} fn
 */
function once(fn) {
	let done = false;
	/** @type T */
	let result;
	return () => {
		if (done) return result;
		done = true;
		return (result = fn());
	};
}
//#endregion
//#region ../node_modules/.pnpm/devalue@5.9.2/node_modules/devalue/src/base64.js
/**	@type {(array_buffer: ArrayBuffer) => string} */
function encode_native(array_buffer) {
	return new Uint8Array(array_buffer).toBase64();
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_native(base64) {
	return Uint8Array.fromBase64(base64).buffer;
}
/** @type {(array_buffer: ArrayBuffer) => string} */
function encode_buffer(array_buffer) {
	return Buffer.from(array_buffer).toString('base64');
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_buffer(base64) {
	return Uint8Array.from(Buffer.from(base64, 'base64')).buffer;
}
/** @type {(array_buffer: ArrayBuffer) => string} */
function encode_legacy(array_buffer) {
	const array = new Uint8Array(array_buffer);
	let binary = '';
	const chunk_size = 32768;
	for (let i = 0; i < array.length; i += chunk_size) {
		const chunk = array.subarray(i, i + chunk_size);
		binary += String.fromCharCode.apply(null, chunk);
	}
	return btoa(binary);
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_legacy(base64) {
	const binary_string = atob(base64);
	const len = binary_string.length;
	const array = new Uint8Array(len);
	for (let i = 0; i < len; i++) array[i] = binary_string.charCodeAt(i);
	return array.buffer;
}
var native = typeof Uint8Array.fromBase64 === 'function';
var buffer = typeof process === 'object' && process.versions?.node !== void 0;
var encode64 = native ? encode_native : buffer ? encode_buffer : encode_legacy;
var decode64 = native ? decode_native : buffer ? decode_buffer : decode_legacy;
//#endregion
//#region ../node_modules/.pnpm/devalue@5.9.2/node_modules/devalue/src/operations.js
/**
 * Merges caller-provided operation overrides over the defaults. Iterating the
 * default keys (rather than the override's own keys) means nullish members
 * fall back to the default, and inherited members — e.g. from a class
 * instance — are picked up.
 *
 * @template {Record<string, any>} T
 * @param {T} defaults
 * @param {Partial<T> | undefined} overrides
 * @returns {T}
 */
function merge_operations(defaults, overrides) {
	if (!overrides) return defaults;
	const merged = {};
	for (const key of Object.keys(defaults)) merged[key] = overrides[key] ?? defaults[key];
	return merged;
}
/** @type {{ kind: 'not-plain' }} */
var NOT_PLAIN = Object.freeze({ kind: 'not-plain' });
/** @type {{ kind: 'symbol-keys' }} */
var SYMBOL_KEYS = Object.freeze({ kind: 'symbol-keys' });
var default_stringify_operations = Object.freeze({
	identify: (value) => value,
	typeOf: (value) => (value === null ? 'null' : typeof value),
	toPrimitive: (value) => value,
	tagOf: (value) => get_type(value),
	isThenable: (value) => typeof value.then === 'function',
	toPromise: (thenable) => Promise.resolve(thenable),
	unbox: (boxed) => boxed.valueOf(),
	toISOString: (date) => (isNaN(date.getDate()) ? '' : date.toISOString()),
	toStringValue: (value) => value.toString(),
	regExpInfo: (regexp) => ({
		source: regexp.source,
		flags: regexp.flags
	}),
	valuesOf: (set) => set,
	entriesOf: (map) => map,
	viewInfo: (view) => ({
		buffer: view.buffer,
		byteOffset: view.byteOffset,
		byteLength: view.byteLength,
		length: view.length,
		bufferByteLength: view.buffer.byteLength
	}),
	toArrayBuffer: (buffer) => buffer,
	lengthOf: (array) => array.length,
	hasOwn: (value, key) => Object.hasOwn(value, key),
	indicesOf: (array) => valid_array_indices(array),
	shapeOf: (value) => {
		if (!is_plain_object$1(value)) return NOT_PLAIN;
		if (enumerable_symbols(value).length > 0) return SYMBOL_KEYS;
		return {
			kind: Object.getPrototypeOf(value) === null ? 'null-proto' : 'plain',
			keys: Object.keys(value)
		};
	},
	get: (value, key) => value[key]
});
var default_parse_operations = Object.freeze({
	fromPrimitive: (primitive) => primitive,
	fromISOString: (iso) => new Date(iso),
	fromStringValue: (tag, text) => {
		if (tag === 'URL') return new URL(text);
		if (tag === 'URLSearchParams') return new URLSearchParams(text);
		return Temporal[tag.slice(9)].from(text);
	},
	fromArrayBuffer: (buffer) => buffer,
	fromRegExpInfo: (source, flags) => new RegExp(source, flags),
	fromViewInfo: (tag, buffer, byteOffset, length) => {
		const Constructor = globalThis[tag];
		return byteOffset !== void 0
			? new Constructor(buffer, byteOffset, length)
			: new Constructor(buffer);
	},
	box: (value) => Object(value),
	createArray: (length) => new Array(length),
	createSparseArray: (length) => {
		/** @type {any[]} */
		const array = [];
		array[MAX_ARRAY_INDEX] = void 0;
		delete array[MAX_ARRAY_INDEX];
		array.length = length;
		return array;
	},
	createObject: () => ({}),
	createNullPrototypeObject: () => Object.create(null),
	createSet: () => /* @__PURE__ */ new Set(),
	createMap: () => /* @__PURE__ */ new Map(),
	set: (target, key, value) => {
		target[key] = value;
	},
	addValue: (set, value) => {
		set.add(value);
	},
	addEntry: (map, key, value) => {
		map.set(key, value);
	}
});
//#endregion
//#region ../node_modules/.pnpm/devalue@5.9.2/node_modules/devalue/src/parse.js
/**
 * Revive a value serialized with `devalue.stringify`
 * @param {string} serialized
 * @param {Record<string, (value: any) => any>} [revivers]
 * @param {import('./types.js').ParseOptions} [options]
 */
function parse(serialized, revivers, options) {
	return unflatten(JSON.parse(serialized), revivers, options);
}
/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 * @param {import('./types.js').ParseOptions} [options]
 */
function unflatten(parsed, revivers, options) {
	/** @type {import('./types.js').ParseOperations} */
	const ops = merge_operations(default_parse_operations, options?.operations);
	if (typeof parsed === 'number') return hydrate(parsed, true);
	if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Invalid input');
	const values = parsed;
	const hydrated = Array(values.length);
	/**
	 * A set of values currently being hydrated with custom revivers,
	 * used to detect invalid cyclical dependencies
	 * @type {Set<number> | null}
	 */
	let hydrating = null;
	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === -1) return ops.fromPrimitive(void 0);
		if (index === -3) return ops.fromPrimitive(NaN);
		if (index === -4) return ops.fromPrimitive(Infinity);
		if (index === -5) return ops.fromPrimitive(-Infinity);
		if (index === -6) return ops.fromPrimitive(-0);
		if (standalone || typeof index !== 'number') throw new Error(`Invalid input`);
		if (index in hydrated) return hydrated[index];
		if (index >= values.length) throw new Error(`Invalid input`);
		const value = values[index];
		if (!value || typeof value !== 'object') hydrated[index] = ops.fromPrimitive(value);
		else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];
				const reviver =
					revivers && Object.hasOwn(revivers, type) ? revivers[type] : void 0;
				if (reviver) {
					let i = value[1];
					if (typeof i !== 'number') i = values.push(value[1]) - 1;
					if (Object.hasOwn(hydrated, i)) return (hydrated[index] = reviver(hydrated[i]));
					hydrating ??= /* @__PURE__ */ new Set();
					if (hydrating.has(i)) throw new Error('Invalid circular reference');
					hydrating.add(i);
					hydrated[index] = reviver(hydrate(i));
					hydrating.delete(i);
					return hydrated[index];
				}
				switch (type) {
					case 'Date':
						hydrated[index] = ops.fromISOString(value[1]);
						break;
					case 'Set':
						const set = ops.createSet();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1)
							ops.addValue(set, hydrate(value[i]));
						break;
					case 'Map':
						const map = ops.createMap();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2)
							ops.addEntry(map, hydrate(value[i]), hydrate(value[i + 1]));
						break;
					case 'RegExp':
						hydrated[index] = ops.fromRegExpInfo(value[1], value[2]);
						break;
					case 'Object': {
						const wrapped_index = value[1];
						if (
							typeof values[wrapped_index] === 'object' &&
							values[wrapped_index][0] !== 'BigInt'
						)
							throw new Error('Invalid input');
						hydrated[index] = ops.box(hydrate(wrapped_index));
						break;
					}
					case 'BigInt':
						hydrated[index] = ops.fromPrimitive(BigInt(value[1]));
						break;
					case 'null':
						const obj = ops.createNullPrototypeObject();
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							if (value[i] === '__proto__')
								throw new Error('Cannot parse an object with a `__proto__` property');
							ops.set(obj, value[i], hydrate(value[i + 1]));
						}
						break;
					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Float16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array':
					case 'DataView': {
						if (values[value[1]][0] !== 'ArrayBuffer') throw new Error('Invalid data');
						const buffer = hydrate(value[1]);
						hydrated[index] = ops.fromViewInfo(type, buffer, value[2], value[3]);
						break;
					}
					case 'ArrayBuffer': {
						const base64 = value[1];
						if (typeof base64 !== 'string')
							throw new Error('Invalid ArrayBuffer encoding');
						hydrated[index] = ops.fromArrayBuffer(decode64(base64));
						break;
					}
					case 'URL':
					case 'URLSearchParams':
					case 'Temporal.Duration':
					case 'Temporal.Instant':
					case 'Temporal.PlainDate':
					case 'Temporal.PlainTime':
					case 'Temporal.PlainDateTime':
					case 'Temporal.PlainMonthDay':
					case 'Temporal.PlainYearMonth':
					case 'Temporal.ZonedDateTime':
						hydrated[index] = ops.fromStringValue(type, value[1]);
						break;
					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else if (value[0] === -7) {
				const len = value[1];
				if (!is_valid_array_len(len)) throw new Error('Invalid input');
				const array = ops.createSparseArray(len);
				hydrated[index] = array;
				for (let i = 2; i < value.length; i += 2) {
					const idx = value[i];
					if (!is_valid_array_index(idx) || idx >= len) throw new Error('Invalid input');
					ops.set(array, idx, hydrate(value[i + 1]));
				}
			} else {
				const array = ops.createArray(value.length);
				hydrated[index] = array;
				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === -2) continue;
					ops.set(array, i, hydrate(n));
				}
			}
		} else {
			const object = ops.createObject();
			hydrated[index] = object;
			for (const key of Object.keys(value)) {
				if (key === '__proto__')
					throw new Error('Cannot parse an object with a `__proto__` property');
				ops.set(object, key, hydrate(value[key]));
			}
		}
		return hydrated[index];
	}
	return hydrate(0);
}
//#endregion
//#region ../node_modules/.pnpm/devalue@5.9.2/node_modules/devalue/src/stringify.js
/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 * @param {import('./types.js').StringifyOptions} [options]
 */
function stringify$1(value, reducers, options) {
	const stringified = run(false, value, reducers, options);
	return typeof stringified === 'string' ? stringified : `[${stringified.join(',')}]`;
}
/**
 * @param {boolean} async
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 * @param {import('./types.js').StringifyOptions} [options]
 */
function run(async, value, reducers, options) {
	const ops = merge_operations(default_stringify_operations, options?.operations);
	/** @type {any[]} */
	const stringified = [];
	/** @type {Map<any, number>} */
	const indexes = /* @__PURE__ */ new Map();
	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	if (reducers)
		for (const key of Object.getOwnPropertyNames(reducers))
			custom.push({
				key,
				fn: reducers[key]
			});
	/** @type {string[]} */
	const keys = [];
	let p = 0;
	/**
	 * @param {any} thing
	 * @param {number} [index]
	 */
	function flatten(thing, index) {
		const type = ops.typeOf(thing);
		if (type === 'undefined') return -1;
		/** @type {number | undefined} */
		let number;
		if (type === 'number') {
			number = ops.toPrimitive(thing);
			if (Number.isNaN(number)) return -3;
			if (number === Infinity) return -4;
			if (number === -Infinity) return -5;
			if (number === 0 && 1 / number < 0) return -6;
		}
		const id = ops.identify(thing);
		if (indexes.has(id)) return indexes.get(id);
		index ??= p++;
		indexes.set(id, index);
		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}
		if (type === 'function')
			throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
		else if (type === 'symbol')
			throw new DevalueError(`Cannot stringify a Symbol primitive`, keys, thing, value);
		/** @type {string | Promise<any>} */
		let str = '';
		if (type !== 'object')
			str = stringify_primitive(type === 'number' ? number : ops.toPrimitive(thing));
		else if (ops.isThenable(thing)) {
			if (!async)
				throw new DevalueError(
					`Cannot stringify a Promise or thenable — use stringifyAsync instead`,
					keys,
					thing,
					value
				);
			str = ops.toPromise(thing).then((value) => {
				const i = flatten(value, index);
				if (i < 0) stringified[index] = i;
			});
		} else {
			const tag = ops.tagOf(thing);
			switch (tag) {
				case 'Number':
				case 'String':
				case 'Boolean':
				case 'BigInt':
					str = `["Object",${flatten(ops.unbox(thing))}]`;
					break;
				case 'Date':
					str = `["Date","${ops.toISOString(thing)}"]`;
					break;
				case 'URL':
					str = `["URL",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				case 'URLSearchParams':
					str = `["URLSearchParams",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				case 'RegExp':
					const { source, flags } = ops.regExpInfo(thing);
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;
				case 'Array': {
					let mostly_dense = false;
					const length = ops.lengthOf(thing);
					str = '[';
					for (let i = 0; i < length; i += 1) {
						if (i > 0) str += ',';
						if (ops.hasOwn(thing, i)) {
							keys.push(`[${i}]`);
							str += flatten(ops.get(thing, i));
							keys.pop();
						} else if (mostly_dense) str += -2;
						else {
							const populated_keys = ops.indicesOf(thing);
							const population = populated_keys.length;
							const d = String(length).length;
							if ((length - population) * 3 > 4 + d + population * (d + 1)) {
								str = '[-7,' + length;
								for (let j = 0; j < populated_keys.length; j++) {
									const key = populated_keys[j];
									keys.push(`[${key}]`);
									str += ',' + key + ',' + flatten(ops.get(thing, key));
									keys.pop();
								}
								break;
							} else {
								mostly_dense = true;
								str += -2;
							}
						}
					}
					str += ']';
					break;
				}
				case 'Set':
					str = '["Set"';
					for (const value of ops.valuesOf(thing)) str += `,${flatten(value)}`;
					str += ']';
					break;
				case 'Map':
					str = '["Map"';
					for (const [key, value] of ops.entriesOf(thing)) {
						const key_type = ops.typeOf(key);
						const key_is_primitive =
							key_type !== 'object' && key_type !== 'function' && key_type !== 'symbol';
						keys.push(
							`.get(${key_is_primitive ? stringify_primitive(ops.toPrimitive(key)) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
						keys.pop();
					}
					str += ']';
					break;
				case 'Int8Array':
				case 'Uint8Array':
				case 'Uint8ClampedArray':
				case 'Int16Array':
				case 'Uint16Array':
				case 'Float16Array':
				case 'Int32Array':
				case 'Uint32Array':
				case 'Float32Array':
				case 'Float64Array':
				case 'BigInt64Array':
				case 'BigUint64Array': {
					const info = ops.viewInfo(thing);
					str = '["' + tag + '",' + flatten(info.buffer);
					if (info.byteLength !== info.bufferByteLength)
						str += `,${info.byteOffset},${info.length}`;
					str += ']';
					break;
				}
				case 'DataView': {
					const info = ops.viewInfo(thing);
					str = '["' + tag + '",' + flatten(info.buffer);
					if (info.byteLength !== info.bufferByteLength)
						str += `,${info.byteOffset},${info.byteLength}`;
					str += ']';
					break;
				}
				case 'ArrayBuffer':
					str = `["ArrayBuffer","${encode64(ops.toArrayBuffer(thing))}"]`;
					break;
				case 'Temporal.Duration':
				case 'Temporal.Instant':
				case 'Temporal.PlainDate':
				case 'Temporal.PlainTime':
				case 'Temporal.PlainDateTime':
				case 'Temporal.PlainMonthDay':
				case 'Temporal.PlainYearMonth':
				case 'Temporal.ZonedDateTime':
					str = `["${tag}",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				default: {
					const shape = ops.shapeOf(thing);
					if (shape.kind === 'not-plain')
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys,
							thing,
							value
						);
					if (shape.kind === 'symbol-keys')
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys,
							thing,
							value
						);
					if (shape.kind === 'null-proto') {
						str = '["null"';
						for (const key of shape.keys) {
							if (key === '__proto__')
								throw new DevalueError(
									`Cannot stringify objects with __proto__ keys`,
									keys,
									thing,
									value
								);
							keys.push(stringify_key(key));
							str += `,${stringify_string(key)},${flatten(ops.get(thing, key))}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key of shape.keys) {
							if (key === '__proto__')
								throw new DevalueError(
									`Cannot stringify objects with __proto__ keys`,
									keys,
									thing,
									value
								);
							if (started) str += ',';
							started = true;
							keys.push(stringify_key(key));
							str += `${stringify_string(key)}:${flatten(ops.get(thing, key))}`;
							keys.pop();
						}
						str += '}';
					}
				}
			}
		}
		stringified[index] = str;
		return index;
	}
	const index = flatten(value);
	if (index < 0) return `${index}`;
	return stringified;
}
/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing === void 0) return (-1).toString();
	if (thing === 0 && 1 / thing < 0) return (-6).toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/utils.js
var text_encoder = new TextEncoder();
/**
 * Like node's path.relative, but without using node
 * @param {string} from
 * @param {string} to
 */
function get_relative_path(from, to) {
	const from_parts = from.split(/[/\\]/);
	const to_parts = to.split(/[/\\]/);
	from_parts.pop();
	while (from_parts[0] === to_parts[0]) {
		from_parts.shift();
		to_parts.shift();
	}
	let i = from_parts.length;
	while (i--) from_parts[i] = '..';
	return from_parts.concat(to_parts).join('/');
}
/**
 * @param {Uint8Array} bytes
 * @returns {string}
 */
function base64_encode(bytes) {
	if (globalThis.Buffer) return globalThis.Buffer.from(bytes).toString('base64');
	let binary = '';
	for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
	return btoa(binary);
}
/**
 * @param {string} encoded
 * @returns {Uint8Array}
 */
function base64_decode(encoded) {
	if (globalThis.Buffer) {
		const buffer = globalThis.Buffer.from(encoded, 'base64');
		return new Uint8Array(buffer);
	}
	const binary = atob(encoded);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/utils/error.js
/**
 * @param {unknown} err
 * @return {Error}
 */
function coalesce_to_error(err) {
	return err instanceof Error || (err && err.name && err.message)
		? err
		: new Error(JSON.stringify(err));
}
/**
 * This is an identity function that exists to make TypeScript less
 * paranoid about people throwing things that aren't errors, which
 * frankly is not something we should care about
 * @param {unknown} error
 */
function normalize_error(error) {
	return error;
}
/**
 * @param {unknown} error
 */
function get_status(error) {
	return error instanceof HttpError || error instanceof SvelteKitError
		? error.status
		: 500;
}
/**
 * @param {unknown} error
 */
function get_message(error) {
	return error instanceof SvelteKitError ? error.text : 'Internal Error';
}
//#endregion
//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/shared.js
/** @import { Transport } from '@sveltejs/kit' */
/**
 * @param {string} route_id
 * @param {string} dep
 */
function validate_depends(route_id, dep) {
	const match = /^(moz-icon|view-source|jar):/.exec(dep);
	if (match)
		console.warn(
			`${route_id}: Calling \`depends('${dep}')\` will throw an error in Firefox because \`${match[1]}\` is a special URI scheme`
		);
}
var INVALIDATED_PARAM = 'x-sveltekit-invalidated';
var TRAILING_SLASH_PARAM = 'x-sveltekit-trailing-slash';
/**
 * @param {any} data
 * @param {string} [location_description]
 */
function validate_load_response(data, location_description) {
	if (data != null && Object.getPrototypeOf(data) !== Object.prototype)
		throw new Error(
			`a load function ${location_description} returned ${typeof data !== 'object' ? `a ${typeof data}` : data instanceof Response ? 'a Response object' : Array.isArray(data) ? 'an array' : 'a non-plain object'}, but must return a plain object at the top level (i.e. \`return {...}\`)`
		);
}
/**
 * Try to `devalue.stringify` the data object using the provided transport encoders.
 * @param {any} data
 * @param {Transport} transport
 */
function stringify(data, transport) {
	return stringify$1(
		data,
		Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.encode]))
	);
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype)
	.sort()
	.join('\0');
/**
 * @param {unknown} thing
 * @returns {thing is Record<PropertyKey, unknown>}
 */
function is_plain_object(thing) {
	if (typeof thing !== 'object' || thing === null) return false;
	const proto = Object.getPrototypeOf(thing);
	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getPrototypeOf(proto) === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}
/**
 * @param {Record<string, any>} value
 * @param {Map<object, any>} clones
 */
function to_sorted(value, clones) {
	const clone = Object.getPrototypeOf(value) === null ? Object.create(null) : {};
	clones.set(value, clone);
	Object.defineProperty(clone, remote_arg_marker, { value: true });
	for (const key of Object.keys(value).sort()) {
		const property = value[key];
		Object.defineProperty(clone, key, {
			value: clones.get(property) ?? property,
			enumerable: true,
			configurable: true,
			writable: true
		});
	}
	return clone;
}
var remote_object = '__skrao';
var remote_map = '__skram';
var remote_set = '__skras';
var remote_file = '__skraf';
var remote_regex_guard = '__skrag';
var remote_arg_marker = Symbol(remote_object);
/**
 * @param {Transport} transport
 * @param {boolean} sort
 * @param {Map<any, any>} remote_arg_clones
 */
function create_remote_arg_reducers(transport, sort, remote_arg_clones) {
	/** @type {Record<string, (value: unknown) => unknown>} */
	const remote_fns_reducers = {
		/** @param {unknown} value */
		[remote_regex_guard]: (value) => {
			if (value instanceof RegExp)
				throw new Error('Regular expressions are not valid remote function arguments');
		}
	};
	if (sort) {
		/** @type {(value: unknown) => Array<[unknown, unknown]> | undefined} */
		remote_fns_reducers[remote_map] = (value) => {
			if (!(value instanceof Map)) return;
			/** @type {Array<[string, string]>} */
			const entries = [];
			for (const [key, val] of value) entries.push([stringify(key), stringify(val)]);
			return entries.sort(([a1, a2], [b1, b2]) => {
				if (a1 < b1) return -1;
				if (a1 > b1) return 1;
				if (a2 < b2) return -1;
				if (a2 > b2) return 1;
				return 0;
			});
		};
		/** @type {(value: unknown) => unknown[] | undefined} */
		remote_fns_reducers[remote_set] = (value) => {
			if (!(value instanceof Set)) return;
			/** @type {string[]} */
			const items = [];
			for (const item of value) items.push(stringify(item));
			items.sort();
			return items;
		};
		/** @type {(value: unknown) => Record<PropertyKey, unknown> | undefined} */
		remote_fns_reducers[remote_object] = (value) => {
			if (!is_plain_object(value)) return;
			if (Object.hasOwn(value, remote_arg_marker)) return;
			if (remote_arg_clones.has(value)) return remote_arg_clones.get(value);
			return to_sorted(value, remote_arg_clones);
		};
	}
	const all_reducers = {
		...Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.encode])),
		...remote_fns_reducers
	};
	/** @type {(value: unknown) => string} */
	const stringify = (value) => stringify$1(value, all_reducers);
	return all_reducers;
}
/** @param {Transport} transport */
function create_remote_arg_revivers(transport) {
	const remote_fns_revivers = {
		/** @type {(value: unknown) => unknown} */
		[remote_object]: (value) => value,
		/** @type {(value: unknown) => Map<unknown, unknown>} */
		[remote_map]: (value) => {
			if (!Array.isArray(value)) throw new Error('Invalid data for Map reviver');
			const map = /* @__PURE__ */ new Map();
			for (const item of value) {
				if (
					!Array.isArray(item) ||
					item.length !== 2 ||
					typeof item[0] !== 'string' ||
					typeof item[1] !== 'string'
				)
					throw new Error('Invalid data for Map reviver');
				const [key, val] = item;
				map.set(parse$1(key), parse$1(val));
			}
			return map;
		},
		/** @type {(value: unknown) => Set<unknown>} */
		[remote_set]: (value) => {
			if (!Array.isArray(value)) throw new Error('Invalid data for Set reviver');
			const set = /* @__PURE__ */ new Set();
			for (const item of value) {
				if (typeof item !== 'string') throw new Error('Invalid data for Set reviver');
				set.add(parse$1(item));
			}
			return set;
		},
		/** @type {(value: any) => File} */
		[remote_file]: (value) => {
			if (
				!value ||
				typeof value !== 'object' ||
				typeof value.name !== 'string' ||
				typeof value.type !== 'string' ||
				typeof value.size !== 'number' ||
				typeof value.lastModified !== 'number' ||
				!(value.data instanceof ArrayBuffer)
			)
				throw new Error('Invalid data for File reviver');
			const { data, name, ...meta } = value;
			return new File([data], name, meta);
		}
	};
	const all_revivers = {
		...Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.decode])),
		...remote_fns_revivers
	};
	/** @type {(data: string) => unknown} */
	const parse$1 = (data) => parse(data, all_revivers);
	return all_revivers;
}
/**
 * Stringifies the argument (if any) for a remote function in such a way that
 * it is both a valid URL and a valid file name (necessary for prerendering).
 * @param {any} value
 * @param {Transport} transport
 */
function stringify_remote_arg(value, transport) {
	if (value === void 0) return '';
	return url_friendly_base64_encode(
		stringify$1(
			value,
			create_remote_arg_reducers(transport, true, /* @__PURE__ */ new Map())
		)
	);
}
/**
 * Base64-encodes `string` in such a way that the result is safe to use
 * as both a URI component and a filename
 * @param {string} string
 */
function url_friendly_base64_encode(string) {
	return base64_encode(text_encoder.encode(string))
		.replaceAll('=', '')
		.replaceAll('+', '-')
		.replaceAll('/', '_');
}
/**
 * Parses the argument (if any) for a remote function
 * @param {string} string
 * @param {Transport} transport
 */
function parse_remote_arg(string, transport) {
	if (!string) return void 0;
	return parse(
		new TextDecoder().decode(
			base64_decode(string.replaceAll('-', '+').replaceAll('_', '/'))
		),
		create_remote_arg_revivers(transport)
	);
}
/**
 * @param {string} id
 * @param {string} payload
 */
function create_remote_key(id, payload) {
	return id + '/' + payload;
}
/**
 * @param {string} key
 * @returns {{ id: string; payload: string }}
 */
function split_remote_key(key) {
	const i = key.lastIndexOf('/');
	if (i === -1) throw new Error(`Invalid remote key: ${key}`);
	return {
		id: key.slice(0, i),
		payload: key.slice(i + 1)
	};
}
//#endregion
export {
	once as S,
	text_encoder as _,
	split_remote_key as a,
	unflatten as b,
	validate_depends as c,
	get_message as d,
	get_status as f,
	get_relative_path as g,
	base64_encode as h,
	parse_remote_arg as i,
	validate_load_response as l,
	base64_decode as m,
	TRAILING_SLASH_PARAM as n,
	stringify as o,
	normalize_error as p,
	create_remote_key as r,
	stringify_remote_arg as s,
	INVALIDATED_PARAM as t,
	coalesce_to_error as u,
	stringify$1 as v,
	noop as x,
	parse as y
};
