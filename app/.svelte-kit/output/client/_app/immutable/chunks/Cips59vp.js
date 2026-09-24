import {
	J as e,
	K as t,
	Y as n,
	ft as r,
	ht as i,
	q as a,
	r as o,
	t as s,
	ut as c
} from './CSrylp8p.js';
var l = class {
		constructor(e, t) {
			((this.status = e),
				(this.body =
					typeof t == `string` ? { message: t } : t || { message: `Error: ${e}` }));
		}
		toString() {
			return JSON.stringify(this.body);
		}
	},
	u = class {
		constructor(e, t) {
			try {
				new Headers({ location: t });
			} catch {
				throw Error(
					`Invalid redirect location ${JSON.stringify(t)}: this string contains characters that cannot be used in HTTP headers`
				);
			}
			((this.status = e), (this.location = t));
		}
	},
	d = class extends Error {
		constructor(e, t, n) {
			(super(n), (this.status = e), (this.text = t));
		}
	};
new URL(`sveltekit-internal://`);
function f(e, t) {
	return e === `/` || t === `ignore`
		? e
		: t === `never`
			? e.endsWith(`/`)
				? e.slice(0, -1)
				: e
			: t === `always` && !e.endsWith(`/`)
				? e + `/`
				: e;
}
function p(e) {
	return e.split(`%25`).map(decodeURI).join(`%25`);
}
function ee(e) {
	for (let t in e) e[t] = decodeURIComponent(e[t]);
	return e;
}
function m({ href: e }) {
	return e.split(`#`)[0];
}
function h(e, t, n, r = !1) {
	let i = new URL(e);
	Object.defineProperty(i, 'searchParams', {
		value: new Proxy(i.searchParams, {
			get(e, r) {
				if (r === `get` || r === `getAll` || r === `has`)
					return (t, ...i) => (n(t), e[r](t, ...i));
				t();
				let i = Reflect.get(e, r);
				return typeof i == `function` ? i.bind(e) : i;
			}
		}),
		enumerable: !0,
		configurable: !0
	});
	let a = [`href`, `pathname`, `search`, `toString`, `toJSON`];
	r && a.push(`hash`);
	for (let n of a)
		Object.defineProperty(i, n, {
			get() {
				return (t(), e[n]);
			},
			enumerable: !0,
			configurable: !0
		});
	return i;
}
function g() {}
function _(...e) {
	let t = 5381;
	for (let n of e)
		if (typeof n == `string`) {
			let e = n.length;
			for (; e; ) t = (t * 33) ^ n.charCodeAt(--e);
		} else if (ArrayBuffer.isView(n)) {
			let e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
				r = e.length;
			for (; r; ) t = (t * 33) ^ e[--r];
		} else throw TypeError(`value must be a string or TypedArray`);
	return (t >>> 0).toString(36);
}
new TextEncoder();
function te(e) {
	let t = atob(e),
		n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return n;
}
var v = window.fetch;
window.fetch = (e, t) => (
	(e instanceof Request ? e.method : t?.method || `GET`) !== `GET` && y.delete(ie(e)),
	v(e, t)
);
var y = new Map();
function ne(e, t) {
	let n = ie(e, t),
		r = document.querySelector(n);
	if (r?.textContent) {
		r.remove();
		let { body: e, ...t } = JSON.parse(r.textContent);
		r.getAttribute(`data-b64`) !== null && (e = te(e));
		let i = r.getAttribute(`data-ttl`);
		return (
			i && y.set(n, { body: e, init: t, ttl: 1e3 * Number(i) }),
			Promise.resolve(new Response(e, t))
		);
	}
	return window.fetch(e, t);
}
function re(e, t, n) {
	if (y.size > 0) {
		let t = ie(e, n),
			r = y.get(t);
		if (r) {
			if (
				performance.now() < r.ttl &&
				[`default`, `force-cache`, `only-if-cached`, void 0].includes(n?.cache)
			)
				return new Response(r.body, r.init);
			y.delete(t);
		}
	}
	return window.fetch(t, n);
}
function ie(e, t) {
	let n = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
	if (t?.headers || t?.body) {
		let e = [];
		(t.headers && e.push([...new Headers(t.headers)].join(`,`)),
			t.body &&
				(typeof t.body == `string` || ArrayBuffer.isView(t.body)) &&
				e.push(t.body),
			(n += `[data-hash="${_(...e)}"]`));
	}
	return n;
}
var ae = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/,
	oe = /^\/\((?:[^)]+)\)$/;
function se(e) {
	let t = [];
	return {
		pattern:
			e === `/` || oe.test(e)
				? /^\/$/
				: RegExp(
						`^${le(e)
							.map((e) => {
								let n = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);
								if (n)
									return (
										t.push({
											name: n[1],
											matcher: n[2],
											optional: !1,
											rest: !0,
											chained: !0
										}),
										`(?:/([^]*))?`
									);
								let r = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);
								if (r)
									return (
										t.push({
											name: r[1],
											matcher: r[2],
											optional: !0,
											rest: !1,
											chained: !0
										}),
										`(?:/([^/]+))?`
									);
								if (!e) return;
								let i = e.split(/\[(.+?)\](?!\])/);
								return (
									`/` +
									i
										.map((e, n) => {
											if (n % 2) {
												if (e.startsWith(`x+`))
													return de(String.fromCharCode(parseInt(e.slice(2), 16)));
												if (e.startsWith(`u+`))
													return de(
														String.fromCharCode(
															...e
																.slice(2)
																.split(`-`)
																.map((e) => parseInt(e, 16))
														)
													);
												let [, r, a, o, s] = ae.exec(e);
												return (
													t.push({
														name: o,
														matcher: s,
														optional: !!r,
														rest: !!a,
														chained: a ? n === 1 && i[0] === `` : !1
													}),
													a ? `([^]*?)` : r ? `([^/]*)?` : `([^/]+?)`
												);
											}
											return de(e);
										})
										.join(``)
								);
							})
							.join(``)}/?$`
					),
		params: t
	};
}
function ce(e) {
	return e !== `` && !/^\([^)]+\)$/.test(e);
}
function le(e) {
	return e.slice(1).split(`/`).filter(ce);
}
function ue(e, t, n) {
	let r = {},
		i = e.slice(1),
		a = i.filter((e) => e !== void 0),
		o = 0;
	for (let e = 0; e < t.length; e += 1) {
		let s = t[e],
			c = i[e - o];
		if (
			(s.chained &&
				s.rest &&
				o &&
				((c = i
					.slice(e - o, e + 1)
					.filter((e) => e)
					.join(`/`)),
				(o = 0)),
			c === void 0)
		) {
			if (s.rest) c = ``;
			else continue;
		}
		if (!s.matcher || n[s.matcher](c)) {
			r[s.name] = c;
			let n = t[e + 1],
				l = i[e + 1];
			(n && !n.rest && n.optional && l && s.chained && (o = 0),
				!n && !l && Object.keys(r).length === a.length && (o = 0));
			continue;
		}
		if (s.optional && s.chained) {
			o++;
			continue;
		}
		return;
	}
	if (!o) return r;
}
function de(e) {
	return e
		.normalize()
		.replace(/[[\]]/g, `\\$&`)
		.replace(/%/g, `%25`)
		.replace(/\//g, `%2[Ff]`)
		.replace(/\?/g, `%3[Ff]`)
		.replace(/#/g, `%23`)
		.replace(/[.*+?^${}()|\\]/g, `\\$&`);
}
function fe({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
	let i = new Set(t);
	return Object.entries(n).map(([t, [n, i, s]]) => {
		let { pattern: c, params: l } = se(t),
			u = {
				id: t,
				exec: (e) => {
					let t = c.exec(e);
					if (t) return ue(t, l, r);
				},
				errors: [1, ...(s || [])].map((t) => e[t]),
				layouts: [0, ...(i || [])].map(o),
				leaf: a(n)
			};
		return (
			(u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length)),
			u
		);
	});
	function a(t) {
		let n = t < 0;
		return (n && (t = ~t), [n, e[t]]);
	}
	function o(t) {
		return t === void 0 ? t : [i.has(t), e[t]];
	}
}
function pe(e, t = JSON.parse) {
	try {
		return t(sessionStorage[e]);
	} catch {}
}
function me(e, t, n = JSON.stringify) {
	let r = n(t);
	try {
		sessionStorage[e] = r;
	} catch {}
}
var b = globalThis.__sveltekit_12mnjzq?.base ?? ``,
	he = globalThis.__sveltekit_12mnjzq?.assets ?? b ?? ``,
	ge = `1790203988477`,
	_e = !1,
	ve = `sveltekit:snapshot`,
	ye = `sveltekit:scroll`,
	be = `sveltekit:states`,
	xe = `sveltekit:pageurl`,
	x = `sveltekit:history`,
	S = `sveltekit:navigation`,
	C = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	w = location.origin;
function Se(e) {
	if (e instanceof URL) return e;
	let t = document.baseURI;
	if (!t) {
		let e = document.getElementsByTagName(`base`);
		t = e.length ? e[0].href : document.URL;
	}
	return new URL(e, t);
}
function T() {
	return { x: pageXOffset, y: pageYOffset };
}
function E(e, t) {
	return e.getAttribute(`data-sveltekit-${t}`);
}
var Ce = { ...C, '': C.hover };
function we(e) {
	let t = e.assignedSlot ?? e.parentNode;
	return (t?.nodeType === 11 && (t = t.host), t);
}
function Te(e, t) {
	for (; e && e !== t; ) {
		if (e.nodeName.toUpperCase() === `A` && e.hasAttribute(`href`)) return e;
		e = we(e);
	}
}
function Ee(e, t, n) {
	let r;
	try {
		if (
			((r = new URL(
				e instanceof SVGAElement ? e.href.baseVal : e.href,
				document.baseURI
			)),
			n && r.hash.match(/^#[^/]/))
		) {
			let e = location.hash.split(`#`)[1] || `/`;
			r.hash = `#${e}${r.hash}`;
		}
	} catch {}
	let i = e instanceof SVGAElement ? e.target.baseVal : e.target,
		a =
			!r ||
			!!i ||
			Ae(r, t, n) ||
			(e.getAttribute(`rel`) || ``).split(/\s+/).includes(`external`),
		o = r?.origin === w && e.hasAttribute(`download`);
	return { url: r, external: a, target: i, download: o };
}
function D(e) {
	let t = null,
		n = null,
		r = null,
		i = null,
		a = null,
		o = null,
		s = e;
	for (; s && s !== document.documentElement; )
		(r === null && (r = E(s, `preload-code`)),
			i === null && (i = E(s, `preload-data`)),
			t === null && (t = E(s, `keepfocus`)),
			n === null && (n = E(s, `noscroll`)),
			a === null && (a = E(s, `reload`)),
			o === null && (o = E(s, `replacestate`)),
			(s = we(s)));
	function c(e) {
		switch (e) {
			case ``:
			case `true`:
				return !0;
			case `off`:
			case `false`:
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: Ce[r ?? `off`],
		preload_data: Ce[i ?? `off`],
		keepfocus: c(t),
		noscroll: c(n),
		reload: c(a),
		replace_state: c(o)
	};
}
function De(e) {
	let t = i(e),
		n = !0;
	function r() {
		((n = !0), t.update((e) => e));
	}
	function a(e) {
		((n = !1), t.set(e));
	}
	function o(e) {
		let r;
		return t.subscribe((t) => {
			(r === void 0 || (n && t !== r)) && e((r = t));
		});
	}
	return { notify: r, set: a, subscribe: o };
}
var Oe = { v: g };
function ke() {
	let { set: e, subscribe: t } = i(!1),
		n;
	async function r() {
		clearTimeout(n);
		try {
			let t = await fetch(`${he}/_app/version.json`, {
				headers: { pragma: `no-cache`, 'cache-control': `no-cache` }
			});
			if (!t.ok) return !1;
			let r = (await t.json()).version !== ge;
			return (r && (e(!0), Oe.v(), clearTimeout(n)), r);
		} catch {
			return !1;
		}
	}
	return { subscribe: t, check: r };
}
function Ae(e, t, n) {
	return e.origin !== w || !e.pathname.startsWith(t)
		? !0
		: n
			? e.pathname !== location.pathname
			: !1;
}
function je(e) {}
var Me = 2 ** 32 - 1,
	Ne = Me - 1,
	Pe = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
function Fe(e) {
	let t = Object.getPrototypeOf(e);
	return (
		t === Object.prototype ||
		t === null ||
		Object.getPrototypeOf(t) === null ||
		Object.getOwnPropertyNames(t).sort().join(`\0`) === Pe
	);
}
function Ie(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function Le(e) {
	return Object.getOwnPropertySymbols(e).filter(
		(t) => Object.getOwnPropertyDescriptor(e, t).enumerable
	);
}
function Re(e) {
	return !(!Number.isInteger(e) || e < 0 || e > Ne);
}
function ze(e) {
	return !(!Number.isInteger(e) || e < 0 || e > Me);
}
function Be(e) {
	if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (n < 48 || n > 57) return !1;
	}
	return Re(+e);
}
function Ve(e) {
	for (var t = e.length - 1; t >= 0 && !Be(e[t]); t--);
	return t + 1;
}
function He(e) {
	let t = Object.keys(e);
	return ((t.length = Ve(t)), t);
}
function Ue(e) {
	return Uint8Array.fromBase64(e).buffer;
}
function We(e) {
	return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Ge(e) {
	let t = atob(e),
		n = t.length,
		r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
	return r.buffer;
}
var Ke = typeof Uint8Array.fromBase64 == `function`,
	qe = typeof process == `object` && process.versions?.node !== void 0,
	Je = Ke ? Ue : qe ? We : Ge;
function Ye(e, t) {
	if (!t) return e;
	let n = {};
	for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
	return n;
}
var Xe = Object.freeze({ kind: `not-plain` }),
	Ze = Object.freeze({ kind: `symbol-keys` });
Object.freeze({
	identify: (e) => e,
	typeOf: (e) => (e === null ? `null` : typeof e),
	toPrimitive: (e) => e,
	tagOf: (e) => Ie(e),
	isThenable: (e) => typeof e.then == `function`,
	toPromise: (e) => Promise.resolve(e),
	unbox: (e) => e.valueOf(),
	toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
	toStringValue: (e) => e.toString(),
	regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
	valuesOf: (e) => e,
	entriesOf: (e) => e,
	viewInfo: (e) => ({
		buffer: e.buffer,
		byteOffset: e.byteOffset,
		byteLength: e.byteLength,
		length: e.length,
		bufferByteLength: e.buffer.byteLength
	}),
	toArrayBuffer: (e) => e,
	lengthOf: (e) => e.length,
	hasOwn: (e, t) => Object.hasOwn(e, t),
	indicesOf: (e) => He(e),
	shapeOf: (e) =>
		Fe(e)
			? Le(e).length > 0
				? Ze
				: {
						kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
						keys: Object.keys(e)
					}
			: Xe,
	get: (e, t) => e[t]
});
var Qe = Object.freeze({
	fromPrimitive: (e) => e,
	fromISOString: (e) => new Date(e),
	fromStringValue: (e, t) =>
		e === `URL`
			? new URL(t)
			: e === `URLSearchParams`
				? new URLSearchParams(t)
				: Temporal[e.slice(9)].from(t),
	fromArrayBuffer: (e) => e,
	fromRegExpInfo: (e, t) => new RegExp(e, t),
	fromViewInfo: (e, t, n, r) => {
		let i = globalThis[e];
		return n === void 0 ? new i(t) : new i(t, n, r);
	},
	box: (e) => Object(e),
	createArray: (e) => Array(e),
	createSparseArray: (e) => {
		let t = [];
		return ((t[Ne] = void 0), delete t[Ne], (t.length = e), t);
	},
	createObject: () => ({}),
	createNullPrototypeObject: () => Object.create(null),
	createSet: () => new Set(),
	createMap: () => new Map(),
	set: (e, t, n) => {
		e[t] = n;
	},
	addValue: (e, t) => {
		e.add(t);
	},
	addEntry: (e, t, n) => {
		e.set(t, n);
	}
});
function $e(e, t, n) {
	let r = Ye(Qe, n?.operations);
	if (typeof e == `number`) return s(e, !0);
	if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
	let i = e,
		a = Array(i.length),
		o = null;
	function s(e, n = !1) {
		if (e === -1) return r.fromPrimitive(void 0);
		if (e === -3) return r.fromPrimitive(NaN);
		if (e === -4) return r.fromPrimitive(1 / 0);
		if (e === -5) return r.fromPrimitive(-1 / 0);
		if (e === -6) return r.fromPrimitive(-0);
		if (n || typeof e != `number`) throw Error(`Invalid input`);
		if (e in a) return a[e];
		if (e >= i.length) throw Error(`Invalid input`);
		let c = i[e];
		if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
		else if (Array.isArray(c)) {
			if (typeof c[0] == `string`) {
				let n = c[0],
					l = t && Object.hasOwn(t, n) ? t[n] : void 0;
				if (l) {
					let t = c[1];
					if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
						return (a[e] = l(a[t]));
					if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
					return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
				}
				switch (n) {
					case `Date`:
						a[e] = r.fromISOString(c[1]);
						break;
					case `Set`:
						let t = r.createSet();
						a[e] = t;
						for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
						break;
					case `Map`:
						let o = r.createMap();
						a[e] = o;
						for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
						break;
					case `RegExp`:
						a[e] = r.fromRegExpInfo(c[1], c[2]);
						break;
					case `Object`: {
						let t = c[1];
						if (typeof i[t] == `object` && i[t][0] !== `BigInt`)
							throw Error(`Invalid input`);
						a[e] = r.box(s(t));
						break;
					}
					case `BigInt`:
						a[e] = r.fromPrimitive(BigInt(c[1]));
						break;
					case `null`:
						let l = r.createNullPrototypeObject();
						a[e] = l;
						for (let e = 1; e < c.length; e += 2) {
							if (c[e] === `__proto__`)
								throw Error('Cannot parse an object with a `__proto__` property');
							r.set(l, c[e], s(c[e + 1]));
						}
						break;
					case `Int8Array`:
					case `Uint8Array`:
					case `Uint8ClampedArray`:
					case `Int16Array`:
					case `Uint16Array`:
					case `Float16Array`:
					case `Int32Array`:
					case `Uint32Array`:
					case `Float32Array`:
					case `Float64Array`:
					case `BigInt64Array`:
					case `BigUint64Array`:
					case `DataView`: {
						if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
						let t = s(c[1]);
						a[e] = r.fromViewInfo(n, t, c[2], c[3]);
						break;
					}
					case `ArrayBuffer`: {
						let t = c[1];
						if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
						a[e] = r.fromArrayBuffer(Je(t));
						break;
					}
					case `URL`:
					case `URLSearchParams`:
					case `Temporal.Duration`:
					case `Temporal.Instant`:
					case `Temporal.PlainDate`:
					case `Temporal.PlainTime`:
					case `Temporal.PlainDateTime`:
					case `Temporal.PlainMonthDay`:
					case `Temporal.PlainYearMonth`:
					case `Temporal.ZonedDateTime`:
						a[e] = r.fromStringValue(n, c[1]);
						break;
					default:
						throw Error(`Unknown type ${n}`);
				}
			} else if (c[0] === -7) {
				let t = c[1];
				if (!ze(t)) throw Error(`Invalid input`);
				let n = r.createSparseArray(t);
				a[e] = n;
				for (let e = 2; e < c.length; e += 2) {
					let i = c[e];
					if (!Re(i) || i >= t) throw Error(`Invalid input`);
					r.set(n, i, s(c[e + 1]));
				}
			} else {
				let t = r.createArray(c.length);
				a[e] = t;
				for (let e = 0; e < c.length; e += 1) {
					let n = c[e];
					n !== -2 && r.set(t, e, s(n));
				}
			}
		} else {
			let t = r.createObject();
			a[e] = t;
			for (let e of Object.keys(c)) {
				if (e === `__proto__`)
					throw Error('Cannot parse an object with a `__proto__` property');
				r.set(t, e, s(c[e]));
			}
		}
		return a[e];
	}
	return s(0);
}
var et = new Set([`load`, `prerender`, `csr`, `ssr`, `trailingSlash`, `config`]);
([...et], [...new Set([...et])]);
function tt(e) {
	return e.filter((e) => e != null);
}
var nt = `x-sveltekit-invalidated`,
	rt = `x-sveltekit-trailing-slash`;
function it(e, t) {
	return e + `/` + t;
}
function at(e) {
	return e instanceof l || e instanceof d ? e.status : 500;
}
function ot(e) {
	return e instanceof d ? e.text : `Internal Error`;
}
var O,
	k,
	st,
	ct = o.toString().includes(`$$`) || /function \w+\(\) \{\}/.test(o.toString()),
	lt = `a:`;
ct
	? ((O = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL(lt)
		}),
		(k = { current: null }),
		(st = { current: !1 }))
	: ((O = new (class {
			#e = r({});
			get data() {
				return t(this.#e);
			}
			set data(e) {
				c(this.#e, e);
			}
			#t = r(null);
			get form() {
				return t(this.#t);
			}
			set form(e) {
				c(this.#t, e);
			}
			#n = r(null);
			get error() {
				return t(this.#n);
			}
			set error(e) {
				c(this.#n, e);
			}
			#r = r({});
			get params() {
				return t(this.#r);
			}
			set params(e) {
				c(this.#r, e);
			}
			#i = r({ id: null });
			get route() {
				return t(this.#i);
			}
			set route(e) {
				c(this.#i, e);
			}
			#a = r({});
			get state() {
				return t(this.#a);
			}
			set state(e) {
				c(this.#a, e);
			}
			#o = r(-1);
			get status() {
				return t(this.#o);
			}
			set status(e) {
				c(this.#o, e);
			}
			#s = r(new URL(lt));
			get url() {
				return t(this.#s);
			}
			set url(e) {
				c(this.#s, e);
			}
		})()),
		(k = new (class {
			#e = r(null);
			get current() {
				return t(this.#e);
			}
			set current(e) {
				c(this.#e, e);
			}
		})()),
		(st = new (class {
			#e = r(!1);
			get current() {
				return t(this.#e);
			}
			set current(e) {
				c(this.#e, e);
			}
		})()),
		(Oe.v = () => (st.current = !0)));
function ut(e) {
	Object.assign(O, e);
}
var dt = `/__data.json`,
	ft = `.html__data.json`;
function pt(e) {
	return e.endsWith(`.html`) ? e.replace(/\.html$/, ft) : e.replace(/\/$/, ``) + dt;
}
var mt = {
		spanContext() {
			return ht;
		},
		setAttribute() {
			return this;
		},
		setAttributes() {
			return this;
		},
		addEvent() {
			return this;
		},
		setStatus() {
			return this;
		},
		updateName() {
			return this;
		},
		end() {
			return this;
		},
		isRecording() {
			return !1;
		},
		recordException() {
			return this;
		},
		addLink() {
			return this;
		},
		addLinks() {
			return this;
		}
	},
	ht = { traceId: ``, spanId: ``, traceFlags: 0 };
async function* gt(e, t) {
	let n = !1,
		r = ``,
		i = new TextDecoder();
	for (;;) {
		let a = r.indexOf(t);
		for (; a !== -1; )
			(yield r.slice(0, a), (r = r.slice(a + t.length)), (a = r.indexOf(t)));
		if (n) {
			r && (yield r);
			return;
		}
		let o = await e.read();
		((n = o.done),
			o.value && (r += i.decode(o.value, { stream: !0 })),
			n && (r += i.decode()));
	}
}
async function* _t(e) {
	for await (let t of gt(
		e,
		`
`
	)) {
		let e = t.trim();
		e && (yield JSON.parse(e));
	}
}
var { onMount: vt, tick: yt } = s,
	bt = n ?? ((e) => e()),
	xt = new Set([`icon`, `shortcut icon`, `apple-touch-icon`]),
	A = null,
	j = pe(`sveltekit:scroll`) ?? {},
	M = pe(`sveltekit:snapshot`) ?? {},
	N = { url: De({}), page: De({}), navigating: i(null), updated: ke() };
function St(e) {
	j[e] = T();
}
function Ct(e, t) {
	let n = e + 1;
	for (; j[n]; ) (delete j[n], (n += 1));
	for (n = t + 1; M[n]; ) (delete M[n], (n += 1));
}
function P(e, t = !1) {
	return (t ? location.replace(e.href) : (location.href = e.href), new Promise(g));
}
async function wt() {
	if (`serviceWorker` in navigator) {
		let e = await navigator.serviceWorker.getRegistration(b || `/`);
		e && (await e.update());
	}
}
var Tt,
	Et,
	F,
	I,
	Dt,
	L,
	Ot = {},
	kt = {},
	R = [],
	z = [],
	B = null;
function At() {
	(B?.fork?.then((e) => e?.discard()),
		(B = null),
		(Z = { element: void 0, href: void 0 }));
}
var jt = new Map(),
	Mt = new Set(),
	Nt = new Set(),
	V = new Set(),
	H = { branch: [], error: null, url: null, nav: null },
	Pt = !1,
	Ft = !1,
	It = !0,
	U = !1,
	W = !1,
	Lt = !1,
	Rt = !1,
	zt,
	G,
	K,
	q,
	J = new Set(),
	Bt = new Map(),
	Vt = new Map();
async function Ht(e, t, n) {
	if (globalThis.__sveltekit_12mnjzq.data) {
		let {
			q: e = {},
			p: t = {},
			l: n = {},
			f: r = {}
		} = globalThis.__sveltekit_12mnjzq.data;
		for (let t in e) Ot[t] = e[t];
		for (let e in n) Ot[e] = n[e];
		for (let e in r) Ot[e] = r[e];
		for (let e in t) kt[e] = t[e];
	}
	(document.URL !== location.href && (location.href = location.href),
		(L = e),
		await e.hooks.init?.(),
		(Tt = fe(e)),
		(I = document.documentElement),
		(Dt = t),
		(Et = e.nodes[0]),
		(F = e.nodes[1]),
		Et(),
		F(),
		(G = history.state?.[x]),
		(K = history.state?.[S]),
		G ||
			((G = K = Date.now()),
			history.replaceState({ ...history.state, [x]: G, [S]: K }, ``)));
	let r = j[G];
	function i() {
		r && ((history.scrollRestoration = `manual`), scrollTo(r.x, r.y));
	}
	(n
		? (i(), await vn(Dt, n))
		: (await X({
				type: `enter`,
				url: Se(L.hash ? Tn(new URL(location.href)) : location.href),
				replace_state: !0
			}),
			i()),
		_n());
}
function Ut() {
	((R.length = 0), (Rt = !1));
}
function Wt(e) {
	z.some((e) => e?.snapshot) && (M[e] = z.map((e) => e?.snapshot?.capture()));
}
function Gt(e) {
	M[e]?.forEach((e, t) => {
		z[t]?.snapshot?.restore(e);
	});
}
function Kt() {
	(St(G), me(ye, j), Wt(K), me(ve, M));
}
async function qt(t, n, r, i) {
	let a, o;
	(n.invalidateAll && At(),
		await X({
			type: `goto`,
			url: Se(t),
			keepfocus: n.keepFocus,
			noscroll: n.noScroll,
			replace_state: n.replaceState,
			state: n.state,
			redirect_count: r,
			nav_token: i,
			accept: () => {
				if (n.invalidateAll) {
					((Rt = !0), (a = new Set()));
					for (let [e, t] of Bt)
						for (let [n, r] of t) (r.resource?.reset(), a.add(it(e, n)));
					o = new Set();
					for (let [e, t] of Vt) for (let n of t.keys()) o.add(it(e, n));
				}
				n.invalidate && n.invalidate.forEach(hn);
			}
		}),
		n.invalidateAll &&
			e()
				.then(e)
				.then(() => {
					for (let [e, t] of Bt)
						for (let [n, { resource: r }] of t) a?.has(it(e, n)) && r.start();
					for (let [e, t] of Vt)
						for (let [n, { resource: r }] of t) o?.has(it(e, n)) && r.reconnect();
				}));
}
async function Jt(e) {
	if (e.id !== B?.id) {
		At();
		let t = {};
		(J.add(t),
			(B = {
				id: e.id,
				token: t,
				promise: an({ ...e, preload: t }).then(
					(e) => (J.delete(t), e.type === `loaded` && e.state.error && At(), e)
				),
				fork: null
			}));
	}
	return B.promise;
}
async function Yt(e) {
	let t = (await Y(e, !1))?.route;
	t && (await Promise.all([...t.layouts, t.leaf].filter(Boolean).map((e) => e[1]())));
}
async function Xt(e, t, n) {
	let r = {
		params: H.params,
		route: { id: H.route?.id ?? null },
		url: new URL(location.href)
	};
	if (
		((H = { ...e.state, nav: r }),
		ut(e.props.page),
		(zt = new L.root({
			target: t,
			props: { ...e.props, stores: N, components: z },
			hydrate: n,
			sync: !1,
			transformError: void 0
		})),
		await Promise.resolve(),
		n)
	) {
		let e = {
			from: null,
			to: { ...r, scroll: j[G] ?? T() },
			willUnload: !1,
			type: `enter`,
			complete: Promise.resolve()
		};
		V.forEach((t) => t(e));
	}
	(Gt(K), (Ft = !0));
}
async function Zt({
	url: e,
	params: t,
	branch: n,
	errors: r,
	status: i,
	error: a,
	route: o,
	form: s
}) {
	let c = `never`;
	if (b && (e.pathname === b || e.pathname === b + `/`)) c = `always`;
	else for (let e of n) e?.slash !== void 0 && (c = e.slash);
	((e.pathname = f(e.pathname, c)), (e.search = e.search));
	let l = {
		type: `loaded`,
		state: { url: e, params: t, branch: n, error: a, route: o },
		props: { constructors: tt(n).map((e) => e.node.component), page: $(O) }
	};
	s !== void 0 && (l.props.form = s);
	let u = {},
		d = !O,
		p = 0;
	for (let e = 0; e < Math.max(n.length, H.branch.length); e += 1) {
		let t = n[e],
			r = H.branch[e];
		(t?.data !== r?.data && (d = !0),
			t && ((u = { ...u, ...t.data }), d && (l.props[`data_${p}`] = u), (p += 1)));
	}
	return (
		(!H.url ||
			e.href !== H.url.href ||
			H.error !== a ||
			(s !== void 0 && s !== O.form) ||
			d) &&
			(l.props.page = {
				error: a,
				params: t,
				route: { id: o?.id ?? null },
				state: {},
				status: i,
				url: new URL(e),
				form: s ?? null,
				data: d ? u : O.data
			}),
		l
	);
}
async function Qt({
	loader: e,
	parent: t,
	url: n,
	params: r,
	route: i,
	server_data_node: a
}) {
	let o = null,
		s = !0,
		c = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set()
		},
		l = await e();
	if (l.universal?.load) {
		function e(...e) {
			for (let t of e) {
				let { href: e } = new URL(t, n);
				c.dependencies.add(e);
			}
		}
		let u = {
			tracing: { enabled: !1, root: mt, current: mt },
			route: new Proxy(i, { get: (e, t) => (s && (c.route = !0), e[t]) }),
			params: new Proxy(r, { get: (e, t) => (s && c.params.add(t), e[t]) }),
			data: a?.data ?? null,
			url: h(
				n,
				() => {
					s && (c.url = !0);
				},
				(e) => {
					s && c.search_params.add(e);
				},
				L.hash
			),
			async fetch(t, r) {
				t instanceof Request &&
					(r = {
						body: t.method === `GET` || t.method === `HEAD` ? void 0 : await t.blob(),
						cache: t.cache,
						credentials: t.credentials,
						headers: [...t.headers].length > 0 ? t?.headers : void 0,
						integrity: t.integrity,
						keepalive: t.keepalive,
						method: t.method,
						mode: t.mode,
						redirect: t.redirect,
						referrer: t.referrer,
						referrerPolicy: t.referrerPolicy,
						signal: t.signal,
						...r
					});
				let { resolved: i, promise: a } = $t(t, r, n);
				return (s && e(i.href), a);
			},
			setHeaders: g,
			depends: e,
			parent() {
				return (s && (c.parent = !0), t());
			},
			untrack(e) {
				s = !1;
				try {
					return e();
				} finally {
					s = !0;
				}
			}
		};
		o = (await l.universal.load.call(null, u)) ?? null;
	}
	return {
		node: l,
		loader: e,
		server: a,
		universal: l.universal?.load ? { type: `data`, data: o, uses: c } : null,
		data: o ?? a?.data ?? null,
		slash: l.universal?.trailingSlash ?? a?.slash
	};
}
function $t(e, t, n) {
	let r = e instanceof Request ? e.url : e,
		i = new URL(r, n);
	return (
		i.origin === n.origin && (r = i.href.slice(n.origin.length)),
		{ resolved: i, promise: Ft ? re(r, i.href, t) : ne(r, t) }
	);
}
function en(e, t, n, r, i, a) {
	if (Rt) return !0;
	if (!i) return !1;
	if ((i.parent && e) || (i.route && t) || (i.url && n)) return !0;
	for (let e of i.search_params) if (r.has(e)) return !0;
	for (let e of i.params) if (a[e] !== H.params[e]) return !0;
	for (let e of i.dependencies) if (R.some((t) => t(new URL(e)))) return !0;
	return !1;
}
function tn(e, t) {
	return e?.type === `data` ? e : e?.type === `skip` ? (t ?? null) : null;
}
function nn(e, t) {
	if (!e) return new Set(t.searchParams.keys());
	let n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
	for (let r of n) {
		let i = e.searchParams.getAll(r),
			a = t.searchParams.getAll(r);
		i.every((e) => a.includes(e)) && a.every((e) => i.includes(e)) && n.delete(r);
	}
	return n;
}
function rn({ error: e, url: t, route: n, params: r }) {
	return {
		type: `loaded`,
		state: { error: e, url: t, route: n, params: r, branch: [] },
		props: { page: $(O), constructors: [] }
	};
}
async function an({ id: e, invalidating: t, url: n, params: r, route: i, preload: a }) {
	if (B?.id === e) return (J.delete(B.token), B.promise);
	let { errors: o, layouts: s, leaf: c } = i,
		d = [...s, c];
	(o.forEach((e) => e?.().catch(g)), d.forEach((e) => e?.[1]().catch(g)));
	let f = null,
		p = H.url ? e !== un(H.url) : !1,
		ee = H.route ? i.id !== H.route.id : !1,
		m = nn(H.url, n),
		h = !1;
	{
		let t = d.map((e, t) => {
			let n = H.branch[t],
				i = !!e?.[0] && (n?.loader !== e[1] || en(h, ee, p, m, n.server?.uses, r));
			return (i && (h = !0), i);
		});
		if (t.some(Boolean)) {
			try {
				f = await yn(n, t);
			} catch (t) {
				let o = await Q(t, { url: n, params: r, route: { id: e } });
				return a && J.has(a)
					? rn({ error: o, url: n, params: r, route: i })
					: sn({ status: at(t), error: o, url: n, route: i });
			}
			if (f.type === `redirect`) return f;
		}
	}
	let _ = f?.nodes,
		te = !1,
		v = d.map(async (e, t) => {
			if (!e) return;
			let a = H.branch[t],
				o = _?.[t];
			if (
				(!o || o.type === `skip`) &&
				e[1] === a?.loader &&
				!en(te, ee, p, m, a.universal?.uses, r)
			)
				return a;
			if (((te = !0), o?.type === `error`)) throw o;
			return Qt({
				loader: e[1],
				url: n,
				params: r,
				route: i,
				parent: async () => {
					let e = {};
					for (let n = 0; n < t; n += 1) Object.assign(e, (await v[n])?.data);
					return e;
				},
				server_data_node: tn(
					o === void 0 && e[0] ? { type: `skip` } : (o ?? null),
					e[0] ? a?.server : void 0
				)
			});
		});
	for (let e of v) e.catch(g);
	let y = [];
	for (let e = 0; e < d.length; e += 1)
		if (d[e])
			try {
				y.push(await v[e]);
			} catch (t) {
				if (t instanceof u) return { type: `redirect`, location: t.location };
				if (a && J.has(a))
					return rn({
						error: await Q(t, { params: r, url: n, route: { id: i.id } }),
						url: n,
						params: r,
						route: i
					});
				let s = at(t),
					c;
				if (_?.includes(t)) ((s = t.status ?? s), (c = t.error));
				else if (t instanceof l) c = t.body;
				else {
					if (await N.updated.check()) return (await wt(), await P(n));
					c = await Q(t, { params: r, url: n, route: { id: i.id } });
				}
				let d = await on(e, y, o);
				return d
					? Zt({
							url: n,
							params: r,
							branch: y.slice(0, d.idx).concat(d.node),
							errors: o,
							status: s,
							error: c,
							route: i
						})
					: await fn(n, { id: i.id }, c, s);
			}
		else y.push(void 0);
	return Zt({
		url: n,
		params: r,
		branch: y,
		errors: o,
		status: 200,
		error: null,
		route: i,
		form: t ? void 0 : null
	});
}
async function on(e, t, n) {
	for (; e--; )
		if (n[e]) {
			let r = e;
			for (; !t[r]; ) --r;
			try {
				return {
					idx: r + 1,
					node: {
						node: await n[e](),
						loader: n[e],
						data: {},
						server: null,
						universal: null
					}
				};
			} catch {
				continue;
			}
		}
}
async function sn({ status: e, error: t, url: n, route: r }) {
	let i = {},
		a = null;
	if (L.server_loads[0] === 0)
		try {
			let e = await yn(n, [!0]);
			if (e.type !== `data` || (e.nodes[0] && e.nodes[0].type !== `data`)) throw 0;
			a = e.nodes[0] ?? null;
		} catch (e) {
			if (
				!(e instanceof l && e.status === 404) &&
				(n.origin !== w || n.pathname !== location.pathname || Pt)
			)
				return await P(n);
		}
	try {
		return Zt({
			url: n,
			params: i,
			branch: [
				await Qt({
					loader: Et,
					url: n,
					params: i,
					route: r,
					parent: () => Promise.resolve({}),
					server_data_node: tn(a)
				}),
				{ node: await F(), loader: F, universal: null, server: null, data: null }
			],
			status: e,
			error: t,
			errors: [],
			route: null
		});
	} catch (t) {
		if (t instanceof u) {
			await qt(new URL(t.location, location.href), {}, 0);
			return;
		}
		let a = await L.get_error_template(),
			o = await Q(t, { url: n, params: i, route: r }),
			s = a({
				status: e,
				message: String(o?.message ?? ``)
					.replace(/&/g, `&amp;`)
					.replace(/</g, `&lt;`)
					.replace(/>/g, `&gt;`)
			}),
			c = new DOMParser().parseFromString(s, `text/html`);
		throw (
			document.documentElement.replaceChild(document.adoptNode(c.head), document.head),
			document.documentElement.replaceChild(document.adoptNode(c.body), document.body),
			t
		);
	}
}
async function cn(e) {
	let t = e.href;
	if (jt.has(t)) return jt.get(t);
	let n;
	try {
		let r = (async () => {
			let t =
				(await L.hooks.reroute({
					url: new URL(e),
					fetch: async (t, n) => $t(t, n, e).promise
				})) ?? e;
			if (typeof t == `string`) {
				let n = new URL(e);
				(L.hash ? (n.hash = t) : (n.pathname = t), (t = n));
			}
			return t;
		})();
		(jt.set(t, r), (n = await r));
	} catch {
		jt.delete(t);
		return;
	}
	return n;
}
async function Y(e, t) {
	if (e && !Ae(e, b, L.hash)) {
		let n = await cn(e);
		if (!n) return;
		let r = ln(n);
		for (let n of Tt) {
			let i = n.exec(r);
			if (i) return { id: un(e), invalidating: t, route: n, params: ee(i), url: e };
		}
	}
}
function ln(e) {
	return (
		p(
			L.hash ? e.hash.replace(/^#/, ``).replace(/[?#].+/, ``) : e.pathname.slice(b.length)
		) || `/`
	);
}
function un(e) {
	return (L.hash ? e.hash.replace(/^#/, ``) : e.pathname) + e.search;
}
function dn({ url: e, type: t, intent: n, delta: r, event: i, scroll: a }) {
	let o = !1,
		s = wn(H, n, e, t, a ?? null);
	(r !== void 0 && (s.navigation.delta = r), i !== void 0 && (s.navigation.event = i));
	let c = {
		...s.navigation,
		cancel: () => {
			((o = !0), s.reject(Error(`navigation cancelled`)));
		}
	};
	return (U || Mt.forEach((e) => e(c)), o ? null : s);
}
async function X({
	type: t,
	url: n,
	popped: r,
	keepfocus: i,
	noscroll: o,
	replace_state: s,
	state: c = {},
	redirect_count: l = 0,
	nav_token: u = {},
	accept: f = g,
	block: p = g,
	event: ee
}) {
	let m = q;
	q = u;
	let h = await Y(n, !1),
		_ =
			t === `enter`
				? wn(H, h, n, t)
				: dn({
						url: n,
						type: t,
						delta: r?.delta,
						intent: h,
						scroll: r?.scroll,
						event: ee
					});
	if (!_) {
		(p(), q === u && (q = m));
		return;
	}
	let te = G,
		v = K;
	(f(),
		(U = !0),
		Ft && _.navigation.type !== `enter` && N.navigating.set((k.current = _.navigation)));
	let y = h && (await an(h));
	if (!y) {
		if (Ae(n, b, L.hash)) return await P(n, s);
		y = await fn(
			n,
			{ id: null },
			await Q(new d(404, `Not Found`, `Not found: ${n.pathname}`), {
				url: n,
				params: {},
				route: { id: null }
			}),
			404,
			s
		);
	}
	if (((n = h?.url || n), q !== u)) {
		_.reject(Error(`navigation aborted`));
		return;
	}
	if (!y) return;
	if (y.type === `redirect`) {
		if (l < 20) {
			(await X({
				type: t,
				url: new URL(y.location, n),
				popped: r,
				keepfocus: i,
				noscroll: o,
				replace_state: s,
				state: c,
				redirect_count: l + 1,
				nav_token: u
			}),
				_.fulfil(void 0));
			return;
		}
		if (
			((y = await sn({
				status: 500,
				error: await Q(Error(`Redirect loop`), {
					url: n,
					params: {},
					route: { id: null }
				}),
				url: n,
				route: { id: null }
			})),
			!y)
		)
			return;
	} else if (y.props.page.status >= 400 && (await N.updated.check()))
		return (await wt(), await P(n, s));
	if (
		(Ut(),
		St(te),
		Wt(v),
		y.props.page.url.pathname !== n.pathname && (n.pathname = y.props.page.url.pathname),
		(c = r ? r.state : c),
		!r)
	) {
		let e = +!s,
			t = { [x]: (G += e), [S]: (K += e), [be]: c };
		((s ? history.replaceState : history.pushState).call(history, t, ``, n),
			s || Ct(G, K));
	}
	let ne = h && B?.id === h.id ? B.fork : null;
	(B?.fork && !ne ? At() : ((B = null), (Z = { element: void 0, href: void 0 })),
		(y.props.page.state = c));
	let re;
	if (Ft) {
		let e = (await Promise.all(Array.from(Nt, (e) => e(_.navigation)))).filter(
			(e) => typeof e == `function`
		);
		if (e.length > 0) {
			function t() {
				e.forEach((e) => {
					V.delete(e);
				});
			}
			(e.push(t),
				e.forEach((e) => {
					V.add(e);
				}));
		}
		let t = _.navigation.to;
		((H = { ...y.state, nav: { params: t.params, route: t.route, url: t.url } }),
			y.props.page && (y.props.page.url = n),
			!i &&
				document.activeElement instanceof HTMLElement &&
				document.activeElement !== document.body &&
				document.activeElement.blur());
		let r = ne && (await ne);
		(r
			? (re = r.commit())
			: ((A = null),
				zt.$set(y.props),
				A && Object.assign(y.props.page, A),
				ut(y.props.page),
				(re = a?.())),
			(Lt = !0));
	} else await Xt(y, Dt, !1);
	let { activeElement: ie } = document;
	if ((await re, await e(), await e(), q !== u)) {
		_.reject(Error(`navigation aborted`));
		return;
	}
	y.props.page && A && Object.assign(y.props.page, A);
	let ae = null;
	if (It) {
		let e = r ? r.scroll : o ? T() : null;
		e
			? scrollTo(e.x, e.y)
			: (ae = n.hash && document.getElementById(En(n)))
				? ae.scrollIntoView()
				: scrollTo(0, 0);
	}
	let oe = document.activeElement !== ie && document.activeElement !== document.body;
	(!i && !oe && Cn(n, !ae),
		(It = !0),
		(U = !1),
		_.fulfil(void 0),
		_.navigation.to && (_.navigation.to.scroll = T()),
		V.forEach((e) => e(_.navigation)),
		t === `popstate` && Gt(K),
		N.navigating.set((k.current = null)));
}
async function fn(e, t, n, r, i) {
	return e.origin === w && e.pathname === location.pathname && !Pt
		? await sn({ status: r, error: n, url: e, route: t })
		: await P(e, i);
}
var Z = { element: void 0, href: void 0 };
function pn() {
	let e, t;
	I.addEventListener(`mousemove`, (t) => {
		let n = t.target;
		(clearTimeout(e),
			(e = setTimeout(() => {
				i(n, C.hover);
			}, 20)));
	});
	function n(e) {
		e.defaultPrevented || i(e.composedPath()[0], C.tap);
	}
	(I.addEventListener(`mousedown`, n),
		I.addEventListener(`touchstart`, n, { passive: !0 }));
	let r = new IntersectionObserver(
		(e) => {
			for (let t of e)
				t.isIntersecting && (Yt(new URL(t.target.href)), r.unobserve(t.target));
		},
		{ threshold: 0 }
	);
	async function i(e, n) {
		let r = Te(e, I),
			i = r === Z.element && r?.href === Z.href && n >= t;
		if (!r || i) return;
		let { url: a, external: o, download: s } = Ee(r, b, L.hash);
		if (o || s) return;
		let c = D(r),
			l = a && un(H.url) === un(a);
		if (!(c.reload || l)) {
			if (n <= c.preload_data) {
				((Z = { element: r, href: r.href }), (t = C.tap));
				let e = await Y(a, !1);
				if (!e) return;
				Jt(e);
			} else n <= c.preload_code && ((Z = { element: r, href: r.href }), (t = n), Yt(a));
		}
	}
	function a() {
		r.disconnect();
		for (let e of I.querySelectorAll(`a`)) {
			let { url: t, external: n, download: i } = Ee(e, b, L.hash);
			if (n || i) continue;
			let a = D(e);
			a.reload ||
				(a.preload_code === C.viewport && r.observe(e),
				a.preload_code === C.eager && Yt(t));
		}
	}
	(V.add(a), a());
}
function Q(e, t) {
	if (e instanceof l) return e.body;
	let n = at(e),
		r = ot(e);
	return (
		L.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r }
	);
}
function mn(e, t = {}) {
	return (
		(e = new URL(Se(e))),
		e.origin === w ? qt(e, t, 0) : Promise.reject(Error(`goto: invalid URL`))
	);
}
function hn(e) {
	if (typeof e == `function`) R.push(e);
	else {
		let { href: t } = new URL(e, location.href);
		R.push((e) => e.href === t);
	}
}
function gn(e, t) {
	let n = { [x]: G, [S]: K, [xe]: O.url.href, [be]: t };
	(history.replaceState(n, ``, Se(e)), (O.state = t), zt.$set({ page: bt(() => $(O)) }));
}
function _n() {
	((history.scrollRestoration = `manual`),
		addEventListener(`beforeunload`, (e) => {
			let t = !1;
			if ((Kt(), !U)) {
				let e = wn(H, void 0, null, `leave`),
					n = {
						...e.navigation,
						cancel: () => {
							((t = !0), e.reject(Error(`navigation cancelled`)));
						}
					};
				Mt.forEach((e) => e(n));
			}
			t
				? (e.preventDefault(), (e.returnValue = ``))
				: (history.scrollRestoration = `auto`);
		}),
		addEventListener(`visibilitychange`, () => {
			document.visibilityState === `hidden` && Kt();
		}),
		navigator.connection?.saveData || pn(),
		I.addEventListener(`click`, async (t) => {
			if (
				t.button ||
				t.which !== 1 ||
				t.metaKey ||
				t.ctrlKey ||
				t.shiftKey ||
				t.altKey ||
				t.defaultPrevented
			)
				return;
			let n = Te(t.composedPath()[0], I);
			if (!n) return;
			let { url: r, external: i, target: a, download: o } = Ee(n, b, L.hash);
			if (!r) return;
			if (a === `_parent` || a === `_top`) {
				if (window.parent !== window) return;
			} else if (a && a !== `_self`) return;
			let s = D(n);
			if (
				(!(n instanceof SVGAElement) &&
					r.protocol !== location.protocol &&
					r.protocol !== `https:` &&
					r.protocol !== `http:`) ||
				o
			)
				return;
			let [c, l] = (L.hash ? r.hash.replace(/^#/, ``) : r.href).split(`#`),
				u = c === m(location);
			if (i || (s.reload && (!u || !l))) {
				dn({ url: r, type: `link`, event: t }) ? (U = !0) : t.preventDefault();
				return;
			}
			if (l !== void 0 && u) {
				let [, i] = H.url.href.split(`#`);
				if (i === l) {
					if (
						(t.preventDefault(),
						l === `` || (l === `top` && n.ownerDocument.getElementById(`top`) === null))
					)
						scrollTo({ top: 0 });
					else {
						let e = n.ownerDocument.getElementById(decodeURIComponent(l));
						e && (e.scrollIntoView(), e.focus());
					}
					return;
				}
				if (((W = !0), St(G), e(r), !s.replace_state)) return;
				W = !1;
			}
			(t.preventDefault(),
				await new Promise((e) => {
					(requestAnimationFrame(() => {
						setTimeout(e, 0);
					}),
						setTimeout(e, 100));
				}),
				await X({
					type: `link`,
					url: r,
					keepfocus: s.keepfocus,
					noscroll: s.noscroll,
					replace_state: s.replace_state ?? r.href === location.href,
					event: t
				}));
		}),
		I.addEventListener(`submit`, (e) => {
			if (e.defaultPrevented) return;
			let t = HTMLFormElement.prototype.cloneNode.call(e.target),
				n = e.submitter;
			if (
				(n?.formTarget || t.target) === `_blank` ||
				(n?.formMethod || t.method) !== `get`
			)
				return;
			let r = new URL((n?.hasAttribute(`formaction`) && n?.formAction) || t.action);
			if (Ae(r, b, !1)) return;
			let i = e.target,
				a = D(i);
			if (a.reload) return;
			(e.preventDefault(), e.stopPropagation());
			let o = new FormData(i, n);
			((r.search = new URLSearchParams(o).toString()),
				X({
					type: `form`,
					url: r,
					keepfocus: a.keepfocus,
					noscroll: a.noscroll,
					replace_state: a.replace_state ?? r.href === location.href,
					event: e
				}));
		}),
		addEventListener(`popstate`, async (t) => {
			if (!Sn) {
				if (t.state?.[`sveltekit:history`]) {
					let n = t.state[x];
					if (((q = {}), n === G)) return;
					let r = j[n],
						i = t.state[`sveltekit:states`] ?? {},
						a = new URL(t.state[`sveltekit:pageurl`] ?? location.href),
						o = t.state[S],
						s = H.url ? m(location) === m(H.url) : !1;
					if (o === K && (Lt || s)) {
						(i !== O.state && (O.state = i),
							e(a),
							(j[G] = T()),
							r && scrollTo(r.x, r.y),
							(G = n));
						return;
					}
					let c = n - G;
					await X({
						type: `popstate`,
						url: a,
						popped: { state: i, scroll: r, delta: c },
						accept: () => {
							((G = n), (K = o));
						},
						block: () => {
							history.go(-c);
						},
						nav_token: q,
						event: t
					});
				} else W || (e(new URL(location.href)), L.hash && location.reload());
			}
		}),
		addEventListener(`hashchange`, () => {
			W &&
				((W = !1),
				history.replaceState({ ...history.state, [x]: ++G, [S]: K }, ``, location.href));
		}));
	for (let e of document.querySelectorAll(`link`)) xt.has(e.rel) && (e.href = e.href);
	addEventListener(`pageshow`, (e) => {
		e.persisted && N.navigating.set((k.current = null));
	});
	function e(e) {
		((H.url = O.url = e), N.page.set($(O)), N.page.notify());
	}
}
async function vn(
	e,
	{
		status: t = 200,
		error: n,
		node_ids: r,
		params: i,
		route: a,
		server_route: o,
		data: s,
		form: c
	}
) {
	Pt = !0;
	let l = new URL(location.href),
		d;
	(({ params: i = {}, route: a = { id: null } } = (await Y(l, !1)) || {}),
		(d = Tt.find(({ id: e }) => e === a.id)));
	let f,
		p = !0;
	try {
		let e = r.map(async (t, n) => {
				let r = s[n];
				return (
					r?.uses && (r.uses = xn(r.uses)),
					Qt({
						loader: L.nodes[t],
						url: l,
						params: i,
						route: a,
						parent: async () => {
							let t = {};
							for (let r = 0; r < n; r += 1) Object.assign(t, (await e[r]).data);
							return t;
						},
						server_data_node: tn(r)
					})
				);
			}),
			o = await Promise.all(e);
		if (d) {
			let e = d.layouts;
			for (let t = 0; t < e.length; t++) e[t] || o.splice(t, 0, void 0);
		}
		f = await Zt({
			url: l,
			params: i,
			branch: o,
			status: t,
			error: n,
			errors: d?.errors,
			form: c,
			route: d ?? null
		});
	} catch (t) {
		if (t instanceof u) return await P(new URL(t.location, location.href));
		((f = await sn({
			status: at(t),
			error: await Q(t, { url: l, params: i, route: a }),
			url: l,
			route: a
		})),
			(e.textContent = ``),
			(p = !1));
	}
	f && (f.props.page && (f.props.page.state = {}), await Xt(f, e, p));
}
async function yn(e, t) {
	let n = new URL(e);
	((n.pathname = pt(e.pathname)),
		e.pathname.endsWith(`/`) && n.searchParams.append(rt, `1`),
		n.searchParams.append(nt, t.map((e) => (e ? `1` : `0`)).join(``)));
	let r = await (0, window.fetch)(n.href, {});
	if (!r.ok) {
		let e;
		throw (
			r.headers.get(`content-type`)?.includes(`application/json`)
				? (e = await r.json())
				: r.status === 404
					? (e = `Not Found`)
					: r.status === 500 && (e = `Internal Error`),
			new l(r.status, e)
		);
	}
	return new Promise((e, t) => {
		bn(e, r).catch(t);
	});
}
async function bn(e, t) {
	let n = t.body.getReader(),
		r = new Map();
	function i(e) {
		return $e(e, {
			...L.decoders,
			Promise: (e) =>
				new Promise((t, n) => {
					r.set(e, { fulfil: t, reject: n });
				})
		});
	}
	for await (let t of _t(n)) {
		if (t.type === `redirect`) return e(t);
		if (t.type === `data`)
			(t.nodes?.forEach((e) => {
				e?.type === `data` && ((e.uses = xn(e.uses)), (e.data = i(e.data)));
			}),
				e(t));
		else if (t.type === `chunk`) {
			let { id: e, data: n, error: a } = t,
				o = r.get(e);
			(r.delete(e), a ? o.reject(i(a)) : o.fulfil(i(n)));
		}
	}
}
function xn(e) {
	return {
		dependencies: new Set(e?.dependencies ?? []),
		params: new Set(e?.params ?? []),
		parent: !!e?.parent,
		route: !!e?.route,
		url: !!e?.url,
		search_params: new Set(e?.search_params ?? [])
	};
}
var Sn = !1;
function Cn(e, t = !0) {
	let n = document.querySelector(`[autofocus]`);
	if (n) n.focus();
	else {
		let n = En(e);
		if (n && document.getElementById(n)) {
			let { x: r, y: i } = T();
			setTimeout(() => {
				let a = history.state;
				((Sn = !0),
					location.replace(new URL(`#${n}`, location.href)),
					history.replaceState(a, ``, e),
					t && scrollTo(r, i),
					(Sn = !1));
			});
		} else {
			let e = document.body,
				t = e.getAttribute(`tabindex`);
			((e.tabIndex = -1),
				e.focus({ preventScroll: !0, focusVisible: !1 }),
				t === null ? e.removeAttribute(`tabindex`) : e.setAttribute(`tabindex`, t));
		}
		let r = getSelection();
		if (r && r.type !== `None`) {
			let e = [];
			for (let t = 0; t < r.rangeCount; t += 1) e.push(r.getRangeAt(t));
			setTimeout(() => {
				if (r.rangeCount === e.length) {
					for (let t = 0; t < r.rangeCount; t += 1) {
						let n = e[t],
							i = r.getRangeAt(t);
						if (
							n.commonAncestorContainer !== i.commonAncestorContainer ||
							n.startContainer !== i.startContainer ||
							n.endContainer !== i.endContainer ||
							n.startOffset !== i.startOffset ||
							n.endOffset !== i.endOffset
						)
							return;
					}
					r.removeAllRanges();
				}
			});
		}
	}
}
function wn(e, t, n, r, i = null) {
	let a,
		o,
		s = new Promise((e, t) => {
			((a = e), (o = t));
		});
	return (
		s.catch(g),
		{
			navigation: {
				from: {
					params: e.params,
					route: { id: e.route?.id ?? null },
					url: e.url,
					scroll: T()
				},
				to: n && {
					params: t?.params ?? null,
					route: { id: t?.route?.id ?? null },
					url: n,
					scroll: i
				},
				willUnload: !t,
				type: r,
				complete: s
			},
			fulfil: a,
			reject: o
		}
	);
}
function $(e) {
	return {
		data: e.data,
		error: e.error,
		form: e.form,
		params: e.params,
		route: e.route,
		state: e.state,
		status: e.status,
		url: e.url
	};
}
function Tn(e) {
	let t = new URL(e);
	return ((t.hash = decodeURIComponent(e.hash)), t);
}
function En(e) {
	let t;
	if (L.hash) {
		let [, , n] = e.hash.split(`#`, 3);
		t = n ?? ``;
	} else t = e.hash.slice(1);
	return decodeURIComponent(t);
}
export { O as a, k as i, gn as n, je as o, Ht as r, _e as s, mn as t };
