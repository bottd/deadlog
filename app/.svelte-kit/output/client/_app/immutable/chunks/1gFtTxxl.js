import {
	$ as e,
	A as t,
	At as n,
	B as r,
	C as i,
	Dt as a,
	E as o,
	F as s,
	G as c,
	H as l,
	I as u,
	J as d,
	K as f,
	M as p,
	Mt as m,
	N as h,
	O as g,
	Ot as _,
	P as v,
	Q as y,
	R as b,
	St as x,
	Tt as ee,
	U as S,
	V as C,
	X as w,
	Y as T,
	_ as te,
	_t as ne,
	a as E,
	at as D,
	bt as O,
	ct as re,
	dt as ie,
	et as ae,
	f as k,
	ft as A,
	g as oe,
	gt as se,
	it as j,
	j as M,
	k as N,
	l as ce,
	lt as le,
	m as P,
	mt as F,
	o as I,
	ot as ue,
	p as de,
	s as L,
	st as R,
	tt as fe,
	u as pe,
	ut as z,
	v as me,
	vt as he,
	w as B,
	x as ge,
	xt as V,
	yt as _e,
	z as ve
} from './CSrylp8p.js';
import { s as ye, t as be } from './Cips59vp.js';
import './xihTtKlq.js';
import { n as H, t as xe } from './CfafoLPj.js';
import { i as Se, n as Ce, t as we } from './DQOGthuy.js';
import {
	_ as Te,
	f as Ee,
	g as De,
	h as Oe,
	i as ke,
	n as Ae,
	v as je
} from './bGGqeocG.js';
import { u as Me } from './BkQs74dv.js';
import { t as Ne } from './BZA8fNAE.js';
var Pe = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Fe(e, t) {
	let n = I(t, Pe),
		r = {
			name: `x`,
			size: 24,
			node: [
				[`path`, { d: `M18 6 6 18` }],
				[`path`, { d: `m6 6 12 12` }]
			]
		};
	xe(
		e,
		L(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
function Ie(e) {
	return typeof e == `object` && !!e;
}
var Le = [`string`, `number`, `bigint`, `boolean`];
function Re(e) {
	return e == null || Le.includes(typeof e)
		? !0
		: Array.isArray(e)
			? e.every((e) => Re(e))
			: typeof e == `object` && Object.getPrototypeOf(e) === Object.prototype;
}
var ze = Symbol(`box`),
	Be = Symbol(`is-writable`);
function U(e, t) {
	let n = F(e);
	return t
		? {
				[ze]: !0,
				[Be]: !0,
				get current() {
					return f(n);
				},
				set current(e) {
					t(e);
				}
			}
		: {
				[ze]: !0,
				get current() {
					return e();
				}
			};
}
function Ve(e) {
	return Ie(e) && ze in e;
}
function He(e) {
	let t = A(re(e));
	return {
		[ze]: !0,
		[Be]: !0,
		get current() {
			return f(t);
		},
		set current(e) {
			z(t, e, !0);
		}
	};
}
function Ue(...e) {
	return function (t) {
		for (let n of e)
			if (n) {
				if (t.defaultPrevented) return;
				typeof n == `function` ? n.call(this, t) : n.current?.call(this, t);
			}
	};
}
var We = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
	Ge = /\n/g,
	Ke = /^\s*/,
	qe = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
	Je = /^:\s*/,
	Ye = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
	Xe = /^[;\s]*/,
	Ze = /^\s+|\s+$/g,
	Qe = `
`,
	$e = `/`,
	et = `*`,
	tt = ``,
	nt = `comment`,
	rt = `declaration`;
function it(e, t) {
	if (typeof e != `string`) throw TypeError(`First argument must be a string`);
	if (!e) return [];
	t ||= {};
	var n = 1,
		r = 1;
	function i(e) {
		var t = e.match(Ge);
		t && (n += t.length);
		var i = e.lastIndexOf(Qe);
		r = ~i ? e.length - i : r + e.length;
	}
	function a() {
		var e = { line: n, column: r };
		return function (t) {
			return ((t.position = new o(e)), l(), t);
		};
	}
	function o(e) {
		((this.start = e), (this.end = { line: n, column: r }), (this.source = t.source));
	}
	o.prototype.content = e;
	function s(i) {
		var a = Error(t.source + `:` + n + `:` + r + `: ` + i);
		if (
			((a.reason = i),
			(a.filename = t.source),
			(a.line = n),
			(a.column = r),
			(a.source = e),
			!t.silent)
		)
			throw a;
	}
	function c(t) {
		var n = t.exec(e);
		if (n) {
			var r = n[0];
			return (i(r), (e = e.slice(r.length)), n);
		}
	}
	function l() {
		c(Ke);
	}
	function u(e) {
		var t;
		for (e ||= []; (t = d()); ) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if ($e == e.charAt(0) && et == e.charAt(1)) {
			for (var n = 2; tt != e.charAt(n) && (et != e.charAt(n) || $e != e.charAt(n + 1)); )
				++n;
			if (((n += 2), tt === e.charAt(n - 1))) return s(`End of comment missing`);
			var o = e.slice(2, n - 2);
			return ((r += 2), i(o), (e = e.slice(n)), (r += 2), t({ type: nt, comment: o }));
		}
	}
	function f() {
		var e = a(),
			t = c(qe);
		if (t) {
			if ((d(), !c(Je))) return s(`property missing ':'`);
			var n = c(Ye),
				r = e({
					type: rt,
					property: at(t[0].replace(We, tt)),
					value: n ? at(n[0].replace(We, tt)) : tt
				});
			return (c(Xe), r);
		}
	}
	function p() {
		var e = [];
		u(e);
		for (var t; (t = f()); ) t !== !1 && (e.push(t), u(e));
		return e;
	}
	return (l(), p());
}
function at(e) {
	return e ? e.replace(Ze, tt) : tt;
}
function ot(e, t) {
	let n = null;
	if (!e || typeof e != `string`) return n;
	let r = it(e),
		i = typeof t == `function`;
	return (
		r.forEach((e) => {
			if (e.type !== `declaration`) return;
			let { property: r, value: a } = e;
			i ? t(r, a, e) : a && ((n ||= {}), (n[r] = a));
		}),
		n
	);
}
var st = /\d/,
	ct = [`-`, `_`, `/`, `.`];
function lt(e = ``) {
	if (!st.test(e)) return e !== e.toLowerCase();
}
function ut(e) {
	let t = [],
		n = ``,
		r,
		i;
	for (let a of e) {
		let e = ct.includes(a);
		if (e === !0) {
			(t.push(n), (n = ``), (r = void 0));
			continue;
		}
		let o = lt(a);
		if (i === !1) {
			if (r === !1 && o === !0) {
				(t.push(n), (n = a), (r = o));
				continue;
			}
			if (r === !0 && o === !1 && n.length > 1) {
				let e = n.at(-1);
				(t.push(n.slice(0, Math.max(0, n.length - 1))), (n = e + a), (r = o));
				continue;
			}
		}
		((n += a), (r = o), (i = e));
	}
	return (t.push(n), t);
}
function dt(e) {
	return e
		? ut(e)
				.map((e) => pt(e))
				.join(``)
		: ``;
}
function ft(e) {
	return mt(dt(e || ``));
}
function pt(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : ``;
}
function mt(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : ``;
}
function ht(e) {
	if (!e) return {};
	let t = {};
	function n(e, n) {
		if (
			e.startsWith(`-moz-`) ||
			e.startsWith(`-webkit-`) ||
			e.startsWith(`-ms-`) ||
			e.startsWith(`-o-`)
		) {
			t[dt(e)] = n;
			return;
		}
		if (e.startsWith(`--`)) {
			t[e] = n;
			return;
		}
		t[ft(e)] = n;
	}
	return (ot(e, n), t);
}
function gt(...e) {
	return (...t) => {
		for (let n of e) typeof n == `function` && n(...t);
	};
}
function _t(e, t) {
	let n = RegExp(e, `g`);
	return (e) => {
		if (typeof e != `string`)
			throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var vt = _t(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function yt(e) {
	if (!e || typeof e != `object` || Array.isArray(e))
		throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${vt(t)}: ${e[t]};`).join(`
`);
}
function bt(e = {}) {
	return yt(e).replace(
		`
`,
		` `
	);
}
var xt = new Set(
	`onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel`.split(
		`.`
	)
);
function St(e) {
	return xt.has(e);
}
function W(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		if (r) {
			for (let e of Object.keys(r)) {
				let n = t[e],
					i = r[e],
					a = typeof n == `function`,
					o = typeof i == `function`;
				if (a && typeof o && St(e)) t[e] = Ue(n, i);
				else if (a && o) t[e] = gt(n, i);
				else if (e === `class`) {
					let r = Re(n),
						a = Re(i);
					r && a ? (t[e] = me(n, i)) : r ? (t[e] = me(n)) : a && (t[e] = me(i));
				} else if (e === `style`) {
					let r = typeof n == `object`,
						a = typeof i == `object`,
						o = typeof n == `string`,
						s = typeof i == `string`;
					if (r && a) t[e] = { ...n, ...i };
					else if (r && s) {
						let r = ht(i);
						t[e] = { ...n, ...r };
					} else if (o && a) t[e] = { ...ht(n), ...i };
					else if (o && s) {
						let r = ht(n),
							a = ht(i);
						t[e] = { ...r, ...a };
					} else r ? (t[e] = n) : a ? (t[e] = i) : o ? (t[e] = n) : s && (t[e] = i);
				} else t[e] = i === void 0 ? n : i;
			}
			for (let e of Object.getOwnPropertySymbols(r)) {
				let n = t[e],
					i = r[e];
				t[e] = i === void 0 ? n : i;
			}
		}
	}
	return (
		typeof t.style == `object` &&
			(t.style = bt(t.style).replaceAll(
				`
`,
				` `
			)),
		t.hidden === !1 && ((t.hidden = void 0), delete t.hidden),
		t.disabled === !1 && ((t.disabled = void 0), delete t.disabled),
		t
	);
}
var Ct = {
	position: `absolute`,
	width: `1px`,
	height: `1px`,
	padding: `0`,
	margin: `-1px`,
	overflow: `hidden`,
	clip: `rect(0, 0, 0, 0)`,
	whiteSpace: `nowrap`,
	borderWidth: `0`,
	transform: `translateX(-100%)`
};
bt(Ct);
var wt = typeof window < `u` ? window : void 0;
(typeof window < `u` && window.document,
	typeof window < `u` && window.navigator,
	typeof window < `u` && window.location);
function Tt(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot; ) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
var Et = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
	Dt = [`difference`, `intersection`, `symmetricDifference`, `union`],
	Ot = !1,
	kt = class e extends Set {
		#e = new Map();
		#t = A(0);
		#n = A(0);
		#r = w || -1;
		constructor(e) {
			if ((super(), e)) {
				for (var t of e) super.add(t);
				this.#n.v = super.size;
			}
			Ot || this.#a();
		}
		#i(e) {
			return w === this.#r ? A(e) : ie(e);
		}
		#a() {
			Ot = !0;
			var t = e.prototype,
				n = Set.prototype;
			for (let e of Et)
				t[e] = function (...t) {
					return (f(this.#t), n[e].apply(this, t));
				};
			for (let r of Dt)
				t[r] = function (...t) {
					f(this.#t);
					var i = n[r].apply(this, t);
					return new e(i);
				};
		}
		has(e) {
			var t = super.has(e),
				n = this.#e,
				r = n.get(e);
			if (r === void 0) {
				if (!t) return (f(this.#t), !1);
				((r = this.#i(!0)), n.set(e, r));
			}
			return (f(r), t);
		}
		add(e) {
			return (super.has(e) || (super.add(e), z(this.#n, super.size), le(this.#t)), this);
		}
		delete(e) {
			var t = super.delete(e),
				n = this.#e,
				r = n.get(e);
			return (
				r !== void 0 && (n.delete(e), z(r, !1)),
				t && (z(this.#n, super.size), le(this.#t)),
				t
			);
		}
		clear() {
			if (super.size !== 0) {
				super.clear();
				var e = this.#e;
				for (var t of e.values()) z(t, !1);
				(e.clear(), z(this.#n, 0), le(this.#t));
			}
		}
		keys() {
			return this.values();
		}
		values() {
			return (f(this.#t), super.values());
		}
		entries() {
			return (f(this.#t), super.entries());
		}
		[Symbol.iterator]() {
			return this.keys();
		}
		get size() {
			return f(this.#n);
		}
	},
	At = class extends Map {
		#e = new Map();
		#t = A(0);
		#n = A(0);
		#r = w || -1;
		constructor(e) {
			if ((super(), e)) {
				for (var [t, n] of e) super.set(t, n);
				this.#n.v = super.size;
			}
		}
		#i(e) {
			return w === this.#r ? A(e) : ie(e);
		}
		has(e) {
			var t = this.#e,
				n = t.get(e);
			if (n === void 0) {
				if (super.has(e)) ((n = this.#i(0)), t.set(e, n));
				else return (f(this.#t), !1);
			}
			return (f(n), !0);
		}
		forEach(e, t) {
			(this.#a(), super.forEach(e, t));
		}
		get(e) {
			var t = this.#e,
				n = t.get(e);
			if (n === void 0) {
				if (super.has(e)) ((n = this.#i(0)), t.set(e, n));
				else {
					f(this.#t);
					return;
				}
			}
			return (f(n), super.get(e));
		}
		getOrInsert(e, t) {
			return (super.has(e) || this.set(e, t), this.get(e));
		}
		getOrInsertComputed(e, t) {
			return (super.has(e) || this.set(e, t(e)), this.get(e));
		}
		set(e, t) {
			var n = this.#e,
				r = n.get(e),
				i = super.get(e),
				a = super.set(e, t),
				o = this.#t;
			if (r === void 0) ((r = this.#i(0)), n.set(e, r), z(this.#n, super.size), le(o));
			else if (i !== t) {
				le(r);
				var s = o.reactions === null ? null : new Set(o.reactions);
				(s === null || !r.reactions?.every((e) => s.has(e))) && le(o);
			}
			return a;
		}
		delete(e) {
			var t = this.#e,
				n = t.get(e),
				r = super.delete(e);
			return (
				n !== void 0 && (t.delete(e), z(n, -1)),
				r && (z(this.#n, super.size), le(this.#t)),
				r
			);
		}
		clear() {
			if (super.size !== 0) {
				super.clear();
				var e = this.#e;
				z(this.#n, 0);
				for (var t of e.values()) z(t, -1);
				(le(this.#t), e.clear());
			}
		}
		#a() {
			f(this.#t);
			var e = this.#e;
			if (this.#n.v !== e.size) {
				for (var t of super.keys())
					if (!e.has(t)) {
						var n = this.#i(0);
						e.set(t, n);
					}
			}
			for ([, n] of this.#e) f(n);
		}
		keys() {
			return (f(this.#t), super.keys());
		}
		values() {
			return (this.#a(), super.values());
		}
		entries() {
			return (this.#a(), super.entries());
		}
		[Symbol.iterator]() {
			return this.entries();
		}
		get size() {
			return (f(this.#n), super.size);
		}
	},
	jt = class {
		#e;
		#t;
		constructor(e, t) {
			((this.#e = e), (this.#t = h(t)));
		}
		get current() {
			return (this.#t(), this.#e());
		}
	};
new (class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = wt, document: n = t?.document } = e;
		t !== void 0 &&
			((this.#e = n),
			(this.#t = h((e) => {
				let n = S(t, `focusin`, e),
					r = S(t, `focusout`, e);
				return () => {
					(n(), r());
				};
			})));
	}
	get current() {
		return (this.#t?.(), this.#e ? Tt(this.#e) : null);
	}
})();
function Mt(e) {
	return typeof e == `function`;
}
var G = class {
	#e;
	#t;
	constructor(e) {
		((this.#e = e), (this.#t = Symbol(e)));
	}
	get key() {
		return this.#t;
	}
	exists() {
		return _e(this.#t);
	}
	get() {
		let e = he(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = he(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return x(this.#t, e);
	}
};
function Nt(e, t) {
	switch (e) {
		case `post`:
			ae(t);
			break;
		case `pre`:
			fe(t);
	}
}
function Pt(e, t, n, r = {}) {
	let { lazy: i = !1 } = r,
		a = !i,
		o = Array.isArray(e) ? [] : void 0;
	Nt(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			((a = !0), (o = t));
			return;
		}
		let r = T(() => n(t, o));
		return ((o = t), r);
	});
}
function K(e, t, n) {
	Pt(e, `post`, t, n);
}
function Ft(e, t, n) {
	Pt(e, `pre`, t, n);
}
K.pre = Ft;
function It(e) {
	return Mt(e) ? e() : e;
}
var Lt = class {
	#e = { width: 0, height: 0 };
	#t = !1;
	#n;
	#r;
	#i;
	#a = F(() => (f(this.#s)?.(), this.getSize().width));
	#o = F(() => (f(this.#s)?.(), this.getSize().height));
	#s = F(() => {
		let e = It(this.#r);
		if (e)
			return h((t) => {
				if (!this.#i) return;
				let n = new this.#i.ResizeObserver((e) => {
					this.#t = !0;
					for (let t of e) {
						let e = this.#n.box === `content-box` ? t.contentBoxSize : t.borderBoxSize,
							n = Array.isArray(e) ? e : [e];
						((this.#e.width = n.reduce((e, t) => Math.max(e, t.inlineSize), 0)),
							(this.#e.height = n.reduce((e, t) => Math.max(e, t.blockSize), 0)));
					}
					t();
				});
				return (
					n.observe(e),
					() => {
						((this.#t = !1), n.disconnect());
					}
				);
			});
	});
	constructor(e, t = { box: `border-box` }) {
		((this.#i = t.window ?? wt),
			(this.#n = t),
			(this.#r = e),
			(this.#e = { width: 0, height: 0 }));
	}
	calculateSize() {
		let e = It(this.#r);
		if (!e || !this.#i) return;
		let t = e.offsetWidth,
			n = e.offsetHeight;
		if (this.#n.box === `border-box`) return { width: t, height: n };
		let r = this.#i.getComputedStyle(e),
			i = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
			a = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
			o = parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth),
			s = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth);
		return { width: t - i - o, height: n - a - s };
	}
	getSize() {
		return this.#t ? this.#e : (this.calculateSize() ?? this.#e);
	}
	get current() {
		return (f(this.#s)?.(), this.getSize());
	}
	get width() {
		return f(this.#a);
	}
	get height() {
		return f(this.#o);
	}
};
function Rt(e) {
	ae(() => () => {
		e();
	});
}
function zt(e, t) {
	return setTimeout(t, e);
}
function q(e) {
	d().then(e);
}
var Bt = 1,
	Vt = 9,
	Ht = 11;
function Ut(e) {
	return Ie(e) && e.nodeType === Bt && typeof e.nodeName == `string`;
}
function Wt(e) {
	return Ie(e) && e.nodeType === Vt;
}
function Gt(e) {
	return Ie(e) && e.constructor?.name === `VisualViewport`;
}
function Kt(e) {
	return Ie(e) && e.nodeType !== void 0;
}
function qt(e) {
	return Kt(e) && e.nodeType === Ht && `host` in e;
}
function Jt(e, t) {
	if (!e || !t || !Ut(e) || !Ut(t)) return !1;
	let n = t.getRootNode?.();
	if (e === t || e.contains(t)) return !0;
	if (n && qt(n)) {
		let n = t;
		for (; n; ) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Yt(e) {
	return Wt(e) ? e : Gt(e) ? e.document : (e?.ownerDocument ?? document);
}
function Xt(e) {
	return qt(e)
		? Xt(e.host)
		: Wt(e)
			? (e.defaultView ?? window)
			: Ut(e)
				? (e.ownerDocument?.defaultView ?? window)
				: window;
}
function Zt(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot; ) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
var Qt = class {
	element;
	#e = F(() =>
		this.element.current ? (this.element.current.getRootNode() ?? document) : document
	);
	get root() {
		return f(this.#e);
	}
	set root(e) {
		z(this.#e, e);
	}
	constructor(e) {
		this.element = typeof e == `function` ? U(e) : e;
	}
	getDocument = () => Yt(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => Zt(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => (this.root ? this.root.querySelector(e) : null);
	querySelectorAll = (e) => (this.root ? this.root.querySelectorAll(e) : []);
	setTimeout = (e, t) => this.getWindow().setTimeout(e, t);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function J(e, t) {
	return {
		[c()]: (n) =>
			Ve(e)
				? ((e.current = n),
					T(() => t?.(n)),
					() => {
						(`isConnected` in n && n.isConnected) || ((e.current = null), t?.(null));
					})
				: (e(n),
					T(() => t?.(n)),
					() => {
						(`isConnected` in n && n.isConnected) || (e(null), t?.(null));
					})
	};
}
function $t(e) {
	return e ? `true` : `false`;
}
function en(e) {
	return e ? `` : void 0;
}
function tn(e) {
	return e ? `open` : `closed`;
}
function nn(e) {
	return e === `starting`
		? { 'data-starting-style': `` }
		: e === `ending`
			? { 'data-ending-style': `` }
			: {};
}
var rn = class {
	#e;
	#t;
	attrs;
	constructor(e) {
		((this.#e = e.getVariant ? e.getVariant() : null),
			(this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`),
			(this.getAttr = this.getAttr.bind(this)),
			(this.selector = this.selector.bind(this)),
			(this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]))));
	}
	getAttr(e, t) {
		return t ? `data-${t}-${e}` : `${this.#t}${e}`;
	}
	selector(e, t) {
		return `[${this.getAttr(e, t)}]`;
	}
};
function an(e) {
	let t = new rn(e);
	return { ...t.attrs, selector: t.selector, getAttr: t.getAttr };
}
var on = `ArrowDown`,
	sn = `ArrowLeft`,
	cn = `ArrowRight`,
	ln = `ArrowUp`,
	un = `Enter`,
	dn = `Home`,
	fn = typeof document < `u`,
	pn = mn();
function mn() {
	return (
		fn &&
		window?.navigator?.userAgent &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
			(window?.navigator?.maxTouchPoints > 2 &&
				/iPad|Macintosh/.test(window?.navigator.userAgent)))
	);
}
function hn(e) {
	return e instanceof HTMLElement;
}
function gn(e) {
	return e instanceof Element;
}
function _n(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function vn(e) {
	return e.matches(`:focus-visible`);
}
function yn(e) {
	return e !== null;
}
var bn = class {
		#e;
		#t = null;
		#n = null;
		#r = 0;
		constructor(e) {
			((this.#e = e), Rt(() => this.#i()));
		}
		#i() {
			(this.#t !== null && (window.cancelAnimationFrame(this.#t), (this.#t = null)),
				this.#n?.disconnect(),
				(this.#n = null),
				this.#r++);
		}
		run(e) {
			this.#i();
			let t = this.#e.ref.current;
			if (!t) return;
			if (typeof t.getAnimations != `function`) {
				this.#a(e);
				return;
			}
			let n = this.#r,
				r = () => {
					n === this.#r && this.#a(e);
				},
				i = () => {
					if (n !== this.#r) return;
					let e = t.getAnimations();
					if (e.length === 0) {
						r();
						return;
					}
					Promise.all(e.map((e) => e.finished))
						.then(() => {
							r();
						})
						.catch(() => {
							if (n === this.#r) {
								if (
									t.getAnimations().some((e) => e.pending || e.playState !== `finished`)
								) {
									i();
									return;
								}
								r();
							}
						});
				},
				a = () => {
					this.#t = window.requestAnimationFrame(() => {
						((this.#t = null), i());
					});
				};
			if (!this.#e.afterTick.current) {
				a();
				return;
			}
			this.#t = window.requestAnimationFrame(() => {
				this.#t = null;
				let e = `data-starting-style`;
				if (!t.hasAttribute(e)) {
					a();
					return;
				}
				((this.#n = new MutationObserver(() => {
					n === this.#r &&
						(t.hasAttribute(e) || (this.#n?.disconnect(), (this.#n = null), a()));
				})),
					this.#n.observe(t, { attributes: !0, attributeFilter: [e] }));
			});
		}
		#a(e) {
			let t = () => {
				e();
			};
			this.#e.afterTick ? q(t) : t();
		}
	},
	xn = class {
		#e;
		#t;
		#n;
		#r = A(!1);
		#i = A(void 0);
		#a = !1;
		#o = null;
		constructor(e) {
			((this.#e = e),
				z(this.#r, e.open.current, !0),
				(this.#t = e.enabled ?? !0),
				(this.#n = new bn({ ref: this.#e.ref, afterTick: this.#e.open })),
				Rt(() => this.#s()),
				K(
					() => this.#e.open.current,
					(e) => {
						if (!this.#a) {
							this.#a = !0;
							return;
						}
						if ((this.#s(), !e && this.#e.shouldSkipExitAnimation?.())) {
							(z(this.#r, !1), z(this.#i, void 0), this.#e.onComplete?.());
							return;
						}
						if (
							(e && z(this.#r, !0),
							z(this.#i, e ? `starting` : `ending`, !0),
							e &&
								(this.#o = window.requestAnimationFrame(() => {
									((this.#o = null), this.#e.open.current && z(this.#i, void 0));
								})),
							!this.#t)
						) {
							(e || z(this.#r, !1), z(this.#i, void 0), this.#e.onComplete?.());
							return;
						}
						this.#n.run(() => {
							e === this.#e.open.current &&
								(this.#e.open.current || z(this.#r, !1),
								z(this.#i, void 0),
								this.#e.onComplete?.());
						});
					}
				));
		}
		get shouldRender() {
			return f(this.#r);
		}
		get transitionStatus() {
			return f(this.#i);
		}
		#s() {
			this.#o !== null && (window.cancelAnimationFrame(this.#o), (this.#o = null));
		}
	};
function Y() {}
function X(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
var Sn = an({
		component: `dialog`,
		parts: [
			`content`,
			`trigger`,
			`overlay`,
			`title`,
			`description`,
			`close`,
			`cancel`,
			`action`
		]
	}),
	Cn = new G(`Dialog.Root | AlertDialog.Root`),
	wn = class e {
		static create(t) {
			let n = Cn.getOr(null);
			return Cn.set(new e(t, n));
		}
		opts;
		#e = A(null);
		get triggerNode() {
			return f(this.#e);
		}
		set triggerNode(e) {
			z(this.#e, e, !0);
		}
		#t = A(null);
		get contentNode() {
			return f(this.#t);
		}
		set contentNode(e) {
			z(this.#t, e, !0);
		}
		#n = A(null);
		get overlayNode() {
			return f(this.#n);
		}
		set overlayNode(e) {
			z(this.#n, e, !0);
		}
		#r = A(null);
		get descriptionNode() {
			return f(this.#r);
		}
		set descriptionNode(e) {
			z(this.#r, e, !0);
		}
		#i = A(void 0);
		get contentId() {
			return f(this.#i);
		}
		set contentId(e) {
			z(this.#i, e, !0);
		}
		#a = A(void 0);
		get titleId() {
			return f(this.#a);
		}
		set titleId(e) {
			z(this.#a, e, !0);
		}
		#o = A(void 0);
		get triggerId() {
			return f(this.#o);
		}
		set triggerId(e) {
			z(this.#o, e, !0);
		}
		#s = A(void 0);
		get descriptionId() {
			return f(this.#s);
		}
		set descriptionId(e) {
			z(this.#s, e, !0);
		}
		#c = A(null);
		get cancelNode() {
			return f(this.#c);
		}
		set cancelNode(e) {
			z(this.#c, e, !0);
		}
		#l = A(0);
		get nestedOpenCount() {
			return f(this.#l);
		}
		set nestedOpenCount(e) {
			z(this.#l, e, !0);
		}
		depth;
		parent;
		contentPresence;
		overlayPresence;
		constructor(e, t) {
			((this.opts = e),
				(this.parent = t),
				(this.depth = t ? t.depth + 1 : 0),
				(this.handleOpen = this.handleOpen.bind(this)),
				(this.handleClose = this.handleClose.bind(this)),
				(this.contentPresence = new xn({
					ref: U(() => this.contentNode),
					open: this.opts.open,
					enabled: !0,
					onComplete: () => {
						this.opts.onOpenChangeComplete.current(this.opts.open.current);
					}
				})),
				(this.overlayPresence = new xn({
					ref: U(() => this.overlayNode),
					open: this.opts.open,
					enabled: !0
				})),
				K(
					() => this.opts.open.current,
					(e) => {
						this.parent &&
							(e ? this.parent.incrementNested() : this.parent.decrementNested());
					},
					{ lazy: !0 }
				),
				Rt(() => {
					this.opts.open.current && this.parent?.decrementNested();
				}));
		}
		handleOpen() {
			this.opts.open.current || (this.opts.open.current = !0);
		}
		handleClose() {
			this.opts.open.current && (this.opts.open.current = !1);
		}
		getBitsAttr = (e) => Sn.getAttr(e, this.opts.variant.current);
		incrementNested() {
			(this.nestedOpenCount++, this.parent?.incrementNested());
		}
		decrementNested() {
			this.nestedOpenCount !== 0 &&
				(this.nestedOpenCount--, this.parent?.decrementNested());
		}
		#u = F(() => ({ 'data-state': tn(this.opts.open.current) }));
		get sharedProps() {
			return f(this.#u);
		}
		set sharedProps(e) {
			z(this.#u, e);
		}
	},
	Tn = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref, (e) => {
					((this.root.triggerNode = e), (this.root.triggerId = e?.id));
				})),
				(this.onclick = this.onclick.bind(this)),
				(this.onkeydown = this.onkeydown.bind(this)));
		}
		onclick(e) {
			this.opts.disabled.current || e.button > 0 || this.root.handleOpen();
		}
		onkeydown(e) {
			this.opts.disabled.current ||
				((e.key === ` ` || e.key === `Enter`) &&
					(e.preventDefault(), this.root.handleOpen()));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			'aria-haspopup': `dialog`,
			'aria-expanded': $t(this.root.opts.open.current),
			'aria-controls': this.root.contentId,
			[this.root.getBitsAttr(`trigger`)]: ``,
			onkeydown: this.onkeydown,
			onclick: this.onclick,
			disabled: this.opts.disabled.current ? !0 : void 0,
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	En = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref)),
				(this.onclick = this.onclick.bind(this)),
				(this.onkeydown = this.onkeydown.bind(this)));
		}
		onclick(e) {
			this.opts.disabled.current || e.button > 0 || this.root.handleClose();
		}
		onkeydown(e) {
			this.opts.disabled.current ||
				((e.key === ` ` || e.key === `Enter`) &&
					(e.preventDefault(), this.root.handleClose()));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			[this.root.getBitsAttr(this.opts.variant.current)]: ``,
			onclick: this.onclick,
			onkeydown: this.onkeydown,
			disabled: this.opts.disabled.current ? !0 : void 0,
			tabindex: 0,
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	Dn = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.root.titleId = this.opts.id.current),
				(this.attachment = J(this.opts.ref)),
				K.pre(
					() => this.opts.id.current,
					(e) => {
						this.root.titleId = e;
					}
				));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			role: `heading`,
			'aria-level': this.opts.level.current,
			[this.root.getBitsAttr(`title`)]: ``,
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	On = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.root.descriptionId = this.opts.id.current),
				(this.attachment = J(this.opts.ref, (e) => {
					this.root.descriptionNode = e;
				})),
				K.pre(
					() => this.opts.id.current,
					(e) => {
						this.root.descriptionId = e;
					}
				));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			[this.root.getBitsAttr(`description`)]: ``,
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	kn = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref, (e) => {
					((this.root.contentNode = e), (this.root.contentId = e?.id));
				})));
		}
		#e = F(() => ({ open: this.root.opts.open.current }));
		get snippetProps() {
			return f(this.#e);
		}
		set snippetProps(e) {
			z(this.#e, e);
		}
		#t = F(() => ({
			id: this.opts.id.current,
			role: this.root.opts.variant.current === `alert-dialog` ? `alertdialog` : `dialog`,
			'aria-modal': `true`,
			'aria-describedby': this.root.descriptionId,
			'aria-labelledby': this.root.titleId,
			[this.root.getBitsAttr(`content`)]: ``,
			style: {
				pointerEvents: `auto`,
				outline: this.root.opts.variant.current === `alert-dialog` ? `none` : void 0,
				'--bits-dialog-depth': this.root.depth,
				'--bits-dialog-nested-count': this.root.nestedOpenCount,
				contain: `layout style`
			},
			tabindex: this.root.opts.variant.current === `alert-dialog` ? -1 : void 0,
			'data-nested-open': en(this.root.nestedOpenCount > 0),
			'data-nested': en(this.root.parent !== null),
			...nn(this.root.contentPresence.transitionStatus),
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#t);
		}
		set props(e) {
			z(this.#t, e);
		}
		get shouldRender() {
			return this.root.contentPresence.shouldRender;
		}
	},
	An = class e {
		static create(t) {
			return new e(t, Cn.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref, (e) => (this.root.overlayNode = e))));
		}
		#e = F(() => ({ open: this.root.opts.open.current }));
		get snippetProps() {
			return f(this.#e);
		}
		set snippetProps(e) {
			z(this.#e, e);
		}
		#t = F(() => ({
			id: this.opts.id.current,
			[this.root.getBitsAttr(`overlay`)]: ``,
			style: {
				pointerEvents: `auto`,
				'--bits-dialog-depth': this.root.depth,
				'--bits-dialog-nested-count': this.root.nestedOpenCount
			},
			'data-nested-open': en(this.root.nestedOpenCount > 0),
			'data-nested': en(this.root.parent !== null),
			...nn(this.root.overlayPresence.transitionStatus),
			...this.root.sharedProps,
			...this.attachment
		}));
		get props() {
			return f(this.#t);
		}
		set props(e) {
			z(this.#t, e);
		}
		get shouldRender() {
			return this.root.overlayPresence.shouldRender;
		}
	},
	jn = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`child`,
		`children`,
		`level`
	]),
	Mn = u(`<div><!></div>`);
function Nn(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `level`, 3, 2),
		c = I(t, jn),
		l = Dn.create({
			id: U(() => i()),
			level: U(() => o()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		u = F(() => W(c, l.props));
	var d = s(),
		p = D(d),
		m = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(u) })
			),
				v(e, n));
		},
		h = (e) => {
			var r = Mn();
			k(r, () => ({ ...f(u) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}),
		v(e, d),
		O());
}
function Pn(e, t) {
	var r = s(),
		i = D(r);
	(g(
		i,
		() => t.children,
		(e) => {
			var r = s(),
				i = D(r);
			(B(i, () => t.children ?? n), v(e, r));
		}
	),
		v(e, r));
}
var Fn = new G(`BitsConfig`);
function In() {
	let e = new Ln(null, {});
	return Fn.getOr(e).opts;
}
var Ln = class {
	opts;
	constructor(e, t) {
		let n = Rn(e, t);
		this.opts = {
			defaultPortalTo: n((e) => e.defaultPortalTo),
			defaultLocale: n((e) => e.defaultLocale)
		};
	}
};
function Rn(e, t) {
	return (n) =>
		U(() => {
			let r = n(t)?.current;
			if (r !== void 0) return r;
			if (e !== null) return n(e.opts)?.current;
		});
}
function zn(e, t) {
	return (n) => {
		let r = In();
		return U(() => {
			let i = n();
			if (i !== void 0) return i;
			let a = e(r).current;
			return a === void 0 ? t : a;
		});
	};
}
var Bn = zn((e) => e.defaultPortalTo, `body`);
function Vn(e, r) {
	V(r, !0);
	let i = Bn(() => r.to),
		a = ne(),
		o = F(c);
	function c() {
		if (!fn || r.disabled) return null;
		let e = null;
		return (
			(e = typeof i.current == `string` ? document.querySelector(i.current) : i.current),
			e
		);
	}
	let l;
	function u() {
		l &&= (p(l), null);
	}
	K([() => f(o), () => r.disabled], ([e, n]) => {
		if (!e || n) {
			u();
			return;
		}
		return (
			(l = t(Pn, { target: e, props: { children: r.children }, context: a })),
			() => {
				u();
			}
		);
	});
	var d = s(),
		m = D(d),
		h = (e) => {
			var t = s(),
				i = D(t);
			(B(i, () => r.children ?? n), v(e, t));
		};
	(N(m, (e) => {
		r.disabled && e(h);
	}),
		v(e, d),
		O());
}
var Hn = class {
	eventName;
	options;
	constructor(e, t = { bubbles: !0, cancelable: !0 }) {
		((this.eventName = e), (this.options = t));
	}
	createEvent(e) {
		return new CustomEvent(this.eventName, { ...this.options, detail: e });
	}
	dispatch(e, t) {
		let n = this.createEvent(t);
		return (e.dispatchEvent(n), n);
	}
	listen(e, t, n) {
		return S(
			e,
			this.eventName,
			(e) => {
				t(e);
			},
			n
		);
	}
};
function Un(e, t = 500) {
	let n = null,
		r = (...r) => {
			(n !== null && clearTimeout(n),
				(n = setTimeout(() => {
					e(...r);
				}, t)));
		};
	return (
		(r.destroy = () => {
			n !== null && (clearTimeout(n), (n = null));
		}),
		r
	);
}
function Wn(e, t) {
	return e === t || e.contains(t);
}
function Gn(e) {
	return e?.ownerDocument ?? document;
}
function Kn(e) {
	if (!e) return null;
	for (let t of e.childNodes) if (t.nodeType !== Node.COMMENT_NODE) return t;
	return null;
}
function qn(e, t) {
	let { clientX: n, clientY: r } = e,
		i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
var Jn = [
		`input:not([inert]):not([inert] *)`,
		`select:not([inert]):not([inert] *)`,
		`textarea:not([inert]):not([inert] *)`,
		`a[href]:not([inert]):not([inert] *)`,
		`area[href]:not([inert]):not([inert] *)`,
		`button:not([inert]):not([inert] *)`,
		`[tabindex]:not(slot):not([inert]):not([inert] *)`,
		`audio[controls]:not([inert]):not([inert] *)`,
		`video[controls]:not([inert]):not([inert] *)`,
		`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,
		`details>summary:first-of-type:not([inert]):not([inert] *)`,
		`details:not([inert]):not([inert] *)`
	],
	Yn = Jn.join(`,`),
	Xn = typeof Element > `u`,
	Zn = Xn
		? function () {}
		: Element.prototype.matches ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector,
	Qn =
		!Xn && Element.prototype.getRootNode
			? function (e) {
					return e?.getRootNode?.call(e);
				}
			: function (e) {
					return e?.ownerDocument;
				},
	$n = function (e, t) {
		t === void 0 && (t = !0);
		var n = e?.getAttribute?.call(e, `inert`);
		return (
			n === `` ||
			n === `true` ||
			(t &&
				e &&
				(typeof e.closest == `function` ? e.closest(`[inert]`) : $n(e.parentNode)))
		);
	},
	er = function (e) {
		var t = e?.getAttribute?.call(e, `contenteditable`);
		return t === `` || t === `true`;
	},
	tr = function (e, t, n) {
		if ($n(e)) return [];
		var r = Array.prototype.slice.apply(e.querySelectorAll(Yn));
		return (t && Zn.call(e, Yn) && r.unshift(e), (r = r.filter(n)), r);
	},
	nr = function (e, t, n) {
		for (var r = [], i = Array.from(e); i.length; ) {
			var a = i.shift();
			if (!$n(a, !1)) {
				if (a.tagName === `SLOT`) {
					var o = a.assignedElements(),
						s = nr(o.length ? o : a.children, !0, n);
					n.flatten ? r.push.apply(r, s) : r.push({ scopeParent: a, candidates: s });
				} else {
					Zn.call(a, Yn) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
					var c =
							a.shadowRoot ||
							(typeof n.getShadowRoot == `function` && n.getShadowRoot(a)),
						l = !$n(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
					if (c && l) {
						var u = nr(c === !0 ? a.children : c.children, !0, n);
						n.flatten ? r.push.apply(r, u) : r.push({ scopeParent: a, candidates: u });
					} else i.unshift.apply(i, a.children);
				}
			}
		}
		return r;
	},
	rr = function (e) {
		return !isNaN(parseInt(e.getAttribute(`tabindex`), 10));
	},
	ir = function (e) {
		if (!e) throw Error(`No node provided`);
		return e.tabIndex < 0 &&
			(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || er(e)) &&
			!rr(e)
			? 0
			: e.tabIndex;
	},
	ar = function (e, t) {
		var n = ir(e);
		return n < 0 && t && !rr(e) ? 0 : n;
	},
	or = function (e, t) {
		return e.tabIndex === t.tabIndex
			? e.documentOrder - t.documentOrder
			: e.tabIndex - t.tabIndex;
	},
	sr = function (e) {
		return e.tagName === `INPUT`;
	},
	cr = function (e) {
		return sr(e) && e.type === `hidden`;
	},
	lr = function (e) {
		return (
			e.tagName === `DETAILS` &&
			Array.prototype.slice.apply(e.children).some(function (e) {
				return e.tagName === `SUMMARY`;
			})
		);
	},
	ur = function (e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
	},
	dr = function (e) {
		if (!e.name) return !0;
		var t = e.form || Qn(e),
			n = function (e) {
				return t.querySelectorAll(`input[type="radio"][name="` + e + `"]`);
			},
			r;
		if (
			typeof window < `u` &&
			window.CSS !== void 0 &&
			typeof window.CSS.escape == `function`
		)
			r = n(window.CSS.escape(e.name));
		else
			try {
				r = n(e.name);
			} catch (e) {
				return (
					console.error(
						`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,
						e.message
					),
					!1
				);
			}
		var i = ur(r, e.form);
		return !i || i === e;
	},
	fr = function (e) {
		return sr(e) && e.type === `radio`;
	},
	pr = function (e) {
		return fr(e) && !dr(e);
	},
	mr = function (e) {
		var t = e && Qn(e),
			n = t?.host,
			r = !1;
		if (t && t !== e) {
			var i, a, o;
			for (
				r = !!(
					((i = n) != null && (a = i.ownerDocument) != null && a.contains(n)) ||
					(e != null && (o = e.ownerDocument) != null && o.contains(e))
				);
				!r && n;
			) {
				var s, c;
				((t = Qn(n)),
					(n = t?.host),
					(r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n))));
			}
		}
		return r;
	},
	hr = function (e) {
		var t = e.getBoundingClientRect(),
			n = t.width,
			r = t.height;
		return n === 0 && r === 0;
	},
	gr = function (e, t) {
		var n = t.displayCheck,
			r = t.getShadowRoot;
		if (n === `full-native` && `checkVisibility` in e)
			return !e.checkVisibility({
				checkOpacity: !1,
				opacityProperty: !1,
				contentVisibilityAuto: !0,
				visibilityProperty: !0,
				checkVisibilityCSS: !0
			});
		var i = getComputedStyle(e).visibility;
		if (i === `hidden` || i === `collapse`) return !0;
		var a = Zn.call(e, `details>summary:first-of-type`) ? e.parentElement : e;
		if (Zn.call(a, `details:not([open]) *`)) return !0;
		if (!n || n === `full` || n === `full-native` || n === `legacy-full`) {
			if (typeof r == `function`) {
				for (var o = e; e; ) {
					var s = e.parentElement,
						c = Qn(e);
					if (s && !s.shadowRoot && r(s) === !0) return hr(e);
					e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
				}
				e = o;
			}
			if (mr(e)) return !e.getClientRects().length;
			if (n !== `legacy-full`) return !0;
		} else if (n === `non-zero-area`) return hr(e);
		return !1;
	},
	_r = function (e) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
			for (var t = e.parentElement; t; ) {
				if (t.tagName === `FIELDSET` && t.disabled) {
					for (var n = 0; n < t.children.length; n++) {
						var r = t.children.item(n);
						if (r.tagName === `LEGEND`)
							return Zn.call(t, `fieldset[disabled] *`) ? !0 : !r.contains(e);
					}
					return !0;
				}
				t = t.parentElement;
			}
		return !1;
	},
	vr = function (e, t) {
		return !(t.disabled || cr(t) || gr(t, e) || lr(t) || _r(t));
	},
	yr = function (e, t) {
		return !(pr(t) || ir(t) < 0 || !vr(e, t));
	},
	br = function (e) {
		var t = parseInt(e.getAttribute(`tabindex`), 10);
		return !!(isNaN(t) || t >= 0);
	},
	xr = function (e) {
		var t = [],
			n = [];
		return (
			e.forEach(function (e, r) {
				var i = !!e.scopeParent,
					a = i ? e.scopeParent : e,
					o = ar(a, i),
					s = i ? xr(e.candidates) : a;
				o === 0
					? i
						? t.push.apply(t, s)
						: t.push(a)
					: n.push({ documentOrder: r, tabIndex: o, item: e, isScope: i, content: s });
			}),
			n
				.sort(or)
				.reduce(function (e, t) {
					return (t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e);
				}, [])
				.concat(t)
		);
	},
	Sr = function (e, t) {
		return (
			(t ||= {}),
			xr(
				t.getShadowRoot
					? nr([e], t.includeContainer, {
							filter: yr.bind(null, t),
							flatten: !1,
							getShadowRoot: t.getShadowRoot,
							shadowRootFilter: br
						})
					: tr(e, t.includeContainer, yr.bind(null, t))
			)
		);
	},
	Cr = function (e, t) {
		return (
			(t ||= {}),
			t.getShadowRoot
				? nr([e], t.includeContainer, {
						filter: vr.bind(null, t),
						flatten: !0,
						getShadowRoot: t.getShadowRoot
					})
				: tr(e, t.includeContainer, vr.bind(null, t))
		);
	},
	wr = Jn.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),
	Tr = function (e, t) {
		if (((t ||= {}), !e)) throw Error(`No node provided`);
		return Zn.call(e, wr) !== !1 && vr(t, e);
	},
	Er = `data-context-menu-trigger`,
	Dr = `data-context-menu-content`;
(new G(`Menu.Root`),
	new G(`Menu.Root | Menu.Sub`),
	new G(`Menu.Content`),
	new G(`Menu.Group | Menu.RadioGroup`),
	new G(`Menu.RadioGroup`),
	new G(`Menu.CheckboxGroup`),
	new Hn(`bitsmenuopen`, { bubbles: !1, cancelable: !0 }),
	an({
		component: `menu`,
		parts: [
			`trigger`,
			`content`,
			`sub-trigger`,
			`item`,
			`group`,
			`group-heading`,
			`checkbox-group`,
			`checkbox-item`,
			`radio-group`,
			`radio-item`,
			`separator`,
			`sub-content`,
			`arrow`
		]
	}),
	(globalThis.bitsDismissableLayers ??= new Map()));
var Or = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	#e;
	#t;
	#n = { pointerdown: !1 };
	#r = !1;
	#i = !1;
	#a = void 0;
	#o;
	#s = Y;
	#c = !1;
	constructor(e) {
		((this.opts = e),
			(this.#t = e.interactOutsideBehavior),
			(this.#e = e.onInteractOutside),
			(this.#o = e.onFocusOutside),
			ae(() => {
				this.#a = Gn(this.opts.ref.current);
			}));
		let t = Y,
			n = null,
			r = () => {
				n != null && (clearTimeout(n), (n = null));
			},
			i = () => {
				(r(),
					this.#_(),
					globalThis.bitsDismissableLayers.delete(this),
					this.#f.destroy(),
					t());
			};
		(K([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (this.opts.enabled.current && this.opts.ref.current)
				return (
					r(),
					(n = zt(1, () => {
						((n = null),
							!(this.#c || !this.opts.ref.current) &&
								(globalThis.bitsDismissableLayers.set(this, this.#t),
								t(),
								(t = this.#u())));
					})),
					i
				);
		}),
			Rt(() => {
				((this.#c = !0),
					r(),
					this.#_(),
					globalThis.bitsDismissableLayers.delete(this),
					this.#f.destroy(),
					this.#s(),
					t());
			}));
	}
	#l = (e) => {
		e.defaultPrevented ||
			this.#c ||
			!this.opts.ref.current ||
			q(() => {
				this.#c ||
					(this.opts.ref.current &&
						!this.#g(e.target) &&
						e.target &&
						!this.#i &&
						this.#o.current?.(e));
			});
	};
	#u() {
		return gt(
			S(this.#a, `pointerdown`, gt(this.#p, this.#h), { capture: !0 }),
			S(this.#a, `pointerdown`, gt(this.#m, this.#f)),
			S(this.#a, `focusin`, this.#l)
		);
	}
	#d = (e) => {
		let t = e;
		(t.defaultPrevented && (t = Mr(e)), this.#e.current(e));
	};
	#f = Un((e) => {
		if (!this.opts.ref.current) {
			this.#s();
			return;
		}
		let t =
			this.opts.isValidEvent.current(e, this.opts.ref.current) ||
			jr(e, this.opts.ref.current);
		if (!this.#r || this.#v() || !t) {
			this.#s();
			return;
		}
		let n = e;
		if (
			(n.defaultPrevented && (n = Mr(n)),
			this.#t.current !== `close` && this.#t.current !== `defer-otherwise-close`)
		) {
			this.#s();
			return;
		}
		e.pointerType === `touch`
			? (this.#s(), (this.#s = S(this.#a, `click`, this.#d, { once: !0 })))
			: this.#e.current(n);
	}, 10);
	#p = (e) => {
		this.#n[e.type] = !0;
	};
	#m = (e) => {
		this.#n[e.type] = !1;
	};
	#h = () => {
		this.opts.ref.current && (this.#r = Ar(this.opts.ref.current));
	};
	#g = (e) => (this.opts.ref.current ? Wn(this.opts.ref.current, e) : !1);
	#_ = () => {
		for (let e in this.#n) this.#n[e] = !1;
		this.#r = !1;
	};
	#v() {
		return Object.values(this.#n).some(Boolean);
	}
	#y = () => {
		this.#i = !0;
	};
	#b = () => {
		this.#i = !1;
	};
	props = { onfocuscapture: this.#y, onblurcapture: this.#b };
};
function kr(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: t }]) => t === `close` || t === `ignore`);
}
function Ar(e) {
	let t = [...globalThis.bitsDismissableLayers],
		n = kr(t);
	if (n) return n[0].opts.ref.current === e;
	let [r] = t[0];
	return r.opts.ref.current === e;
}
function jr(e, t) {
	let n = e.target;
	if (!_n(n)) return !1;
	let r = !!n.closest(`[${Er}]`),
		i = !!t.closest(`[${Dr}]`);
	return `button` in e && e.button > 0 && !r
		? !1
		: `button` in e && e.button === 0 && r && i
			? !0
			: r && i
				? !1
				: Gn(n).documentElement.contains(n) && !Wn(t, n) && qn(e, t);
}
function Mr(e) {
	let t = e.currentTarget,
		n = e.target,
		r;
	r =
		e instanceof PointerEvent
			? new PointerEvent(e.type, e)
			: new PointerEvent(`pointerdown`, e);
	let i = !1;
	return new Proxy(r, {
		get: (r, a) =>
			a === `currentTarget`
				? t
				: a === `target`
					? n
					: a === `preventDefault`
						? () => {
								((i = !0), typeof r.preventDefault == `function` && r.preventDefault());
							}
						: a === `defaultPrevented`
							? i
							: a in r
								? r[a]
								: e[a]
	});
}
function Nr(e, t) {
	V(t, !0);
	let r = E(t, `interactOutsideBehavior`, 3, `close`),
		i = E(t, `onInteractOutside`, 3, Y),
		a = E(t, `onFocusOutside`, 3, Y),
		o = E(t, `isValidEvent`, 3, () => !1),
		c = Or.create({
			id: U(() => t.id),
			interactOutsideBehavior: U(() => r()),
			onInteractOutside: U(() => i()),
			enabled: U(() => t.enabled),
			onFocusOutside: U(() => a()),
			isValidEvent: U(() => o()),
			ref: t.ref
		});
	var l = s(),
		u = D(l);
	(B(
		u,
		() => t.children ?? n,
		() => ({ props: c.props })
	),
		v(e, l),
		O());
}
globalThis.bitsEscapeLayers ??= new Map();
var Pr = class e {
	static create(t) {
		return new e(t);
	}
	opts;
	domContext;
	constructor(e) {
		((this.opts = e), (this.domContext = new Qt(this.opts.ref)));
		let t = Y;
		K(
			() => e.enabled.current,
			(n) => (
				n &&
					(globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior),
					(t = this.#e())),
				() => {
					(t(), globalThis.bitsEscapeLayers.delete(this));
				}
			)
		);
	}
	#e = () => S(this.domContext.getDocument(), `keydown`, this.#t, { passive: !1 });
	#t = (e) => {
		if (e.key !== `Escape` || !Fr(this)) return;
		let t = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let n = this.opts.escapeKeydownBehavior.current;
		(n === `close` || n === `defer-otherwise-close`) &&
			this.opts.onEscapeKeydown.current(t);
	};
};
function Fr(e) {
	let t = [...globalThis.bitsEscapeLayers],
		n = t.findLast(([e, { current: t }]) => t === `close` || t === `ignore`);
	if (n) return n[0] === e;
	let [r] = t[0];
	return r === e;
}
function Ir(e, t) {
	V(t, !0);
	let r = E(t, `escapeKeydownBehavior`, 3, `close`),
		i = E(t, `onEscapeKeydown`, 3, Y);
	Pr.create({
		escapeKeydownBehavior: U(() => r()),
		onEscapeKeydown: U(() => i()),
		enabled: U(() => t.enabled),
		ref: t.ref
	});
	var a = s(),
		o = D(a);
	(B(o, () => t.children ?? n), v(e, a), O());
}
var Lr = class e {
		static instance;
		#e = He([]);
		#t = new WeakMap();
		#n = new WeakMap();
		static getInstance() {
			return ((this.instance ||= new e()), this.instance);
		}
		register(e) {
			let t = this.getActive();
			t && t !== e && t.pause();
			let n = document.activeElement;
			(n && n !== document.body && this.#n.set(e, n),
				(this.#e.current = this.#e.current.filter((t) => t !== e)),
				this.#e.current.unshift(e));
		}
		unregister(e) {
			this.#e.current = this.#e.current.filter((t) => t !== e);
			let t = this.getActive();
			t && t.resume();
		}
		getActive() {
			return this.#e.current[0];
		}
		setFocusMemory(e, t) {
			this.#t.set(e, t);
		}
		getFocusMemory(e) {
			return this.#t.get(e);
		}
		isActiveScope(e) {
			return this.getActive() === e;
		}
		setPreFocusMemory(e, t) {
			this.#n.set(e, t);
		}
		getPreFocusMemory(e) {
			return this.#n.get(e);
		}
		clearPreFocusMemory(e) {
			this.#n.delete(e);
		}
	},
	Rr = class e {
		#e = !1;
		#t = null;
		#n = Lr.getInstance();
		#r = [];
		#i;
		constructor(e) {
			this.#i = e;
		}
		get paused() {
			return this.#e;
		}
		pause() {
			this.#e = !0;
		}
		resume() {
			this.#e = !1;
		}
		#a() {
			for (let e of this.#r) e();
			this.#r = [];
		}
		mount(e) {
			(this.#t && this.unmount(),
				(this.#t = e),
				this.#n.register(this),
				this.#c(),
				this.#o());
		}
		unmount() {
			this.#t &&=
				(this.#a(),
				this.#s(),
				this.#n.unregister(this),
				this.#n.clearPreFocusMemory(this),
				null);
		}
		#o() {
			if (!this.#t) return;
			let e = new CustomEvent(`focusScope.onOpenAutoFocus`, {
				bubbles: !1,
				cancelable: !0
			});
			(this.#i.onOpenAutoFocus.current(e),
				e.defaultPrevented ||
					requestAnimationFrame(() => {
						if (!this.#t) return;
						let e = this.#u();
						e ? (e.focus(), this.#n.setFocusMemory(this, e)) : this.#t.focus();
					}));
		}
		#s() {
			let e = new CustomEvent(`focusScope.onCloseAutoFocus`, {
				bubbles: !1,
				cancelable: !0
			});
			if ((this.#i.onCloseAutoFocus.current?.(e), !e.defaultPrevented)) {
				let e = this.#n.getPreFocusMemory(this);
				if (e && document.contains(e))
					try {
						e.focus();
					} catch {
						document.body.focus();
					}
			}
		}
		#c() {
			if (!this.#t || !this.#i.trap.current) return;
			let e = this.#t,
				t = e.ownerDocument;
			this.#r.push(
				S(
					t,
					`focusin`,
					(t) => {
						if (this.#e || !this.#n.isActiveScope(this)) return;
						let n = t.target;
						if (n) {
							if (e.contains(n)) this.#n.setFocusMemory(this, n);
							else {
								let n = this.#n.getFocusMemory(this);
								if (n && e.contains(n) && Tr(n)) (t.preventDefault(), n.focus());
								else {
									let t = this.#u(),
										n = this.#d()[0];
									(t || n || e).focus();
								}
							}
						}
					},
					{ capture: !0 }
				),
				S(e, `keydown`, (e) => {
					if (!this.#i.loop || this.#e || e.key !== `Tab` || !this.#n.isActiveScope(this))
						return;
					let n = this.#l();
					if (n.length === 0) return;
					let r = n[0],
						i = n[n.length - 1];
					!e.shiftKey && t.activeElement === i
						? (e.preventDefault(), r.focus())
						: e.shiftKey && t.activeElement === r && (e.preventDefault(), i.focus());
				})
			);
			let n = new MutationObserver(() => {
				let t = this.#n.getFocusMemory(this);
				if (t && !e.contains(t)) {
					let t = this.#u(),
						n = this.#d()[0],
						r = t || n;
					r ? (r.focus(), this.#n.setFocusMemory(this, r)) : e.focus();
				}
			});
			(n.observe(e, { childList: !0, subtree: !0 }), this.#r.push(() => n.disconnect()));
		}
		#l() {
			return this.#t ? Sr(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
		}
		#u() {
			return this.#l()[0] || null;
		}
		#d() {
			return this.#t ? Cr(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
		}
		static use(t) {
			let n = null;
			return (
				K([() => t.ref.current, () => t.enabled.current], ([r, i]) => {
					r && i ? ((n ||= new e(t)), n.mount(r)) : (n &&= (n.unmount(), null));
				}),
				Rt(() => {
					n?.unmount();
				}),
				{
					get props() {
						return { tabindex: -1 };
					}
				}
			);
		}
	};
function zr(e, t) {
	V(t, !0);
	let r = E(t, `enabled`, 3, !1),
		i = E(t, `trapFocus`, 3, !1),
		a = E(t, `loop`, 3, !1),
		o = E(t, `onCloseAutoFocus`, 3, Y),
		c = E(t, `onOpenAutoFocus`, 3, Y),
		l = Rr.use({
			enabled: U(() => r()),
			trap: U(() => i()),
			loop: a(),
			onCloseAutoFocus: U(() => o()),
			onOpenAutoFocus: U(() => c()),
			ref: t.ref
		});
	var u = s(),
		d = D(u);
	(B(
		d,
		() => t.focusScope ?? n,
		() => ({ props: l.props })
	),
		v(e, u),
		O());
}
var Br = () => {};
globalThis.bitsTextSelectionLayers ??= new Map();
var Vr = class e {
		static create(t) {
			return new e(t);
		}
		opts;
		domContext;
		#e = Y;
		#t = !1;
		#n = Br;
		#r = Br;
		constructor(e) {
			((this.opts = e), (this.domContext = new Qt(e.ref)));
			let t = Y;
			K(
				() => [
					this.opts.enabled.current,
					this.opts.onPointerDown.current,
					this.opts.onPointerUp.current
				],
				([e, n, r]) => (
					(this.#t = e),
					(this.#n = n),
					(this.#r = r),
					e &&
						(globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled),
						t(),
						(t = this.#i())),
					() => {
						((this.#t = !1),
							t(),
							this.#s(),
							globalThis.bitsTextSelectionLayers.delete(this));
					}
				)
			);
		}
		#i() {
			return gt(
				S(this.domContext.getDocument(), `pointerdown`, this.#o),
				S(this.domContext.getDocument(), `pointerup`, Ue(this.#s, this.#a))
			);
		}
		#a = (e) => {
			this.#r(e);
		};
		#o = (e) => {
			if (!this.#t) return;
			let t = this.opts.ref.current,
				n = e.target;
			hn(t) &&
				hn(n) &&
				Gr(this) &&
				Jt(t, n) &&
				(this.#n(e),
				!e.defaultPrevented && (this.#e = Ur(t, this.domContext.getDocument().body)));
		};
		#s = () => {
			(this.#e(), (this.#e = Y));
		};
	},
	Hr = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Ur(e, t) {
	let n = Hr(t),
		r = Hr(e);
	return (
		Wr(t, `none`),
		Wr(e, `text`),
		() => {
			(Wr(t, n), Wr(e, r));
		}
	);
}
function Wr(e, t) {
	((e.style.userSelect = t), (e.style.webkitUserSelect = t));
}
function Gr(e) {
	let t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	let n = t.at(-1);
	return n ? n[0] === e : !1;
}
function Kr(e, t) {
	V(t, !0);
	let r = E(t, `preventOverflowTextSelection`, 3, !0),
		i = E(t, `onPointerDown`, 3, Y),
		a = E(t, `onPointerUp`, 3, Y);
	Vr.create({
		id: U(() => t.id),
		onPointerDown: U(() => i()),
		onPointerUp: U(() => a()),
		enabled: U(() => t.enabled && r()),
		ref: t.ref
	});
	var o = s(),
		c = D(o);
	(B(c, () => t.children ?? n), v(e, o), O());
}
globalThis.bitsIdCounter ??= { current: 0 };
function qr(e = `bits`) {
	return (globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`);
}
var Jr = class {
		#e;
		#t = 0;
		#n = A();
		#r;
		constructor(e) {
			this.#e = e;
		}
		#i() {
			(--this.#t,
				this.#r && this.#t <= 0 && (this.#r(), z(this.#n, void 0), (this.#r = void 0)));
		}
		get(...e) {
			return (
				(this.#t += 1),
				f(this.#n) === void 0 &&
					(this.#r = y(() => {
						z(this.#n, this.#e(...e), !0);
					})),
				ae(() => () => {
					this.#i();
				}),
				f(this.#n)
			);
		}
	},
	Yr = new At(),
	Xr = A(null),
	Zr = null,
	Qr = null,
	$r = !1,
	ei = U(() => {
		for (let e of Yr.values()) if (e) return !0;
		return !1;
	}),
	ti = null,
	ni = new Jr(() => {
		function e(e) {
			(e.body.setAttribute(`style`, f(Xr) ?? ``),
				e.body.style.removeProperty(`--scrollbar-width`),
				pn && Zr?.(),
				z(Xr, null));
		}
		function t() {
			Qr !== null && (window.clearTimeout(Qr), (Qr = null));
		}
		function n(e, n) {
			(t(), ($r = !0), (ti = Date.now()));
			let r = ti,
				i = () => {
					((Qr = null), ti === r && (ii(Yr) ? ($r = !1) : (($r = !1), n())));
				},
				a = e === null ? 24 : e;
			Qr = window.setTimeout(i, a);
		}
		function r() {
			f(Xr) === null &&
				Yr.size === 0 &&
				!$r &&
				z(Xr, document.body.getAttribute(`style`), !0);
		}
		return (
			K(
				() => ei.current,
				() => {
					if (!ei.current) return;
					(r(), ($r = !1));
					let e = getComputedStyle(document.documentElement),
						t = getComputedStyle(document.body),
						n =
							e.scrollbarGutter?.includes(`stable`) ||
							t.scrollbarGutter?.includes(`stable`),
						i = window.innerWidth - document.documentElement.clientWidth,
						a = {
							padding: Number.parseInt(t.paddingRight ?? `0`, 10) + i,
							margin: Number.parseInt(t.marginRight ?? `0`, 10)
						};
					(i > 0 &&
						!n &&
						((document.body.style.paddingRight = `${a.padding}px`),
						(document.body.style.marginRight = `${a.margin}px`),
						document.body.style.setProperty(`--scrollbar-width`, `${i}px`)),
						(document.body.style.overflow = `hidden`),
						pn &&
							(Zr = S(
								document,
								`touchmove`,
								(e) => {
									e.target === document.documentElement &&
										(e.touches.length > 1 || e.preventDefault());
								},
								{ passive: !1 }
							)),
						q(() => {
							((document.body.style.pointerEvents = `none`),
								(document.body.style.overflow = `hidden`));
						}));
				}
			),
			Rt(() => () => {
				Zr?.();
			}),
			{
				get lockMap() {
					return Yr;
				},
				resetBodyStyle: e,
				scheduleCleanupIfNoNewLocks: n,
				cancelPendingCleanup: t,
				ensureInitialStyleCaptured: r
			}
		);
	}),
	ri = class {
		#e = qr();
		#t;
		#n = () => null;
		#r;
		locked;
		constructor(e, t = () => null) {
			((this.#t = e),
				(this.#n = t),
				(this.#r = ni.get()),
				this.#r &&
					(this.#r.cancelPendingCleanup(),
					this.#r.ensureInitialStyleCaptured(),
					this.#r.lockMap.set(this.#e, this.#t ?? !1),
					(this.locked = U(
						() => this.#r.lockMap.get(this.#e) ?? !1,
						(e) => this.#r.lockMap.set(this.#e, e)
					)),
					Rt(() => {
						if ((this.#r.lockMap.delete(this.#e), ii(this.#r.lockMap))) return;
						let e = this.#n(),
							t = document;
						this.#r.scheduleCleanupIfNoNewLocks(e, () => {
							this.#r.resetBodyStyle(t);
						});
					})));
		}
	};
function ii(e) {
	for (let [t, n] of e) if (n) return !0;
	return !1;
}
function ai(e, t) {
	V(t, !0);
	let n = E(t, `preventScroll`, 3, !0),
		r = E(t, `restoreScrollDelay`, 3, null);
	(n() && new ri(n(), () => r()), O());
}
var oi = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`forceMount`,
		`child`,
		`children`,
		`ref`
	]),
	si = u(`<div><!></div>`);
function ci(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `forceMount`, 3, !1),
		o = E(t, `ref`, 15, null),
		c = I(t, oi),
		l = An.create({
			id: U(() => i()),
			ref: U(
				() => o(),
				(e) => o(e)
			)
		}),
		u = F(() => W(c, l.props));
	var d = s(),
		p = D(d),
		m = (e) => {
			var r = s(),
				i = D(r),
				a = (e) => {
					var n = s(),
						r = D(n);
					{
						let e = F(() => ({ props: W(f(u)), ...l.snippetProps }));
						B(
							r,
							() => t.child,
							() => f(e)
						);
					}
					v(e, n);
				},
				o = (e) => {
					var r = si();
					k(r, (e) => ({ ...e }), [() => W(f(u))]);
					var i = j(r);
					(B(
						i,
						() => t.children ?? n,
						() => l.snippetProps
					),
						_(r),
						v(e, r));
				};
			(N(i, (e) => {
				t.child ? e(a) : e(o, -1);
			}),
				v(e, r));
		};
	(N(p, (e) => {
		(l.shouldRender || a()) && e(m);
	}),
		v(e, d),
		O());
}
var li = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`children`,
		`child`,
		`disabled`
	]),
	ui = u(`<button><!></button>`);
function di(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `disabled`, 3, !1),
		c = I(t, li),
		l = Tn.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			),
			disabled: U(() => !!o())
		}),
		u = F(() => W(c, l.props));
	var d = s(),
		p = D(d),
		m = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(u) })
			),
				v(e, n));
		},
		h = (e) => {
			var r = ui();
			k(r, () => ({ ...f(u) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}),
		v(e, d),
		O());
}
var fi = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `children`, `child`, `ref`]),
	pi = u(`<div><!></div>`);
function mi(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = I(t, fi),
		c = On.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		l = F(() => W(o, c.props));
	var u = s(),
		d = D(u),
		p = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(l) })
			),
				v(e, n));
		},
		m = (e) => {
			var r = pi();
			k(r, () => ({ ...f(l) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}),
		v(e, u),
		O());
}
function hi(e, t) {
	let n = e.nextElementSibling;
	for (; n; ) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function gi(e, t) {
	let n = e.previousElementSibling;
	for (; n; ) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function _i(e) {
	if (typeof CSS < `u` && typeof CSS.escape == `function`) return CSS.escape(e);
	let t = e.length,
		n = -1,
		r,
		i = ``,
		a = e.charCodeAt(0);
	if (t === 1 && a === 45) return `\\` + e;
	for (; ++n < t; ) {
		if (((r = e.charCodeAt(n)), r === 0)) {
			i += `�`;
			continue;
		}
		if (
			(r >= 1 && r <= 31) ||
			r === 127 ||
			(n === 0 && r >= 48 && r <= 57) ||
			(n === 1 && r >= 48 && r <= 57 && a === 45)
		) {
			i += `\\` + r.toString(16) + ` `;
			continue;
		}
		if (
			r >= 128 ||
			r === 45 ||
			r === 95 ||
			(r >= 48 && r <= 57) ||
			(r >= 65 && r <= 90) ||
			(r >= 97 && r <= 122)
		) {
			i += e.charAt(n);
			continue;
		}
		i += `\\` + e.charAt(n);
	}
	return i;
}
var vi = `data-value`,
	Z = an({
		component: `command`,
		parts: [
			`root`,
			`list`,
			`input`,
			`separator`,
			`loading`,
			`empty`,
			`group`,
			`group-items`,
			`group-heading`,
			`item`,
			`viewport`,
			`input-label`
		]
	}),
	yi = Z.selector(`group`),
	bi = Z.selector(`group-items`),
	xi = Z.selector(`group-heading`),
	Si = Z.selector(`item`),
	Ci = `${Z.selector(`item`)}:not([aria-disabled="true"])`,
	wi = new G(`Command.Root`),
	Ti = new G(`Command.List`),
	Ei = new G(`Command.Group`),
	Di = {
		search: ``,
		value: ``,
		filtered: { count: 0, items: new Map(), groups: new Set() }
	},
	Oi = class e {
		static create(t) {
			return wi.set(new e(t));
		}
		opts;
		attachment;
		#e = !1;
		#t = !0;
		sortAfterTick = !1;
		sortAndFilterAfterTick = !1;
		allItems = new Set();
		allGroups = new Map();
		allIds = new Map();
		#n = A(0);
		get key() {
			return f(this.#n);
		}
		set key(e) {
			z(this.#n, e, !0);
		}
		#r = A(null);
		get viewportNode() {
			return f(this.#r);
		}
		set viewportNode(e) {
			z(this.#r, e, !0);
		}
		#i = A(null);
		get inputNode() {
			return f(this.#i);
		}
		set inputNode(e) {
			z(this.#i, e, !0);
		}
		#a = A(null);
		get labelNode() {
			return f(this.#a);
		}
		set labelNode(e) {
			z(this.#a, e, !0);
		}
		#o = A(Di);
		get commandState() {
			return f(this.#o);
		}
		set commandState(e) {
			z(this.#o, e);
		}
		#s = A(re(Di));
		get _commandState() {
			return f(this.#s);
		}
		set _commandState(e) {
			z(this.#s, e, !0);
		}
		#c() {
			return ee(this._commandState);
		}
		#l() {
			this.#e ||
				((this.#e = !0),
				q(() => {
					this.#e = !1;
					let e = this.#c();
					Object.is(this.commandState, e) ||
						((this.commandState = e), this.opts.onStateChange?.current?.(e));
				}));
		}
		setState(e, t, n) {
			Object.is(this._commandState[e], t) ||
				((this._commandState[e] = t),
				e === `search` ? (this.#m(), this.#d()) : e === `value` && (n || this.#g()),
				this.#l());
		}
		constructor(e) {
			((this.opts = e), (this.attachment = J(this.opts.ref)));
			let t = { ...this._commandState, value: this.opts.value.current ?? `` };
			((this._commandState = t),
				(this.commandState = t),
				(this.onkeydown = this.onkeydown.bind(this)));
		}
		#u(e, t) {
			let n = this.opts.filter.current ?? wa;
			return e ? n(e, this._commandState.search, t) : 0;
		}
		#d() {
			if (!this._commandState.search || this.opts.shouldFilter.current === !1) {
				!this._commandState.value || !this.#t
					? this.#f()
					: this.#t && this._commandState.value && this.#p();
				return;
			}
			let e = this._commandState.filtered.items,
				t = [];
			for (let n of this._commandState.filtered.groups) {
				let r = this.allGroups.get(n),
					i = 0;
				if (!r) {
					t.push([n, i]);
					continue;
				}
				for (let t of r) {
					let n = e.get(t);
					i = Math.max(n ?? 0, i);
				}
				t.push([n, i]);
			}
			let n = this.viewportNode,
				r = this.getValidItems().sort((t, n) => {
					let r = t.getAttribute(`data-value`),
						i = n.getAttribute(`data-value`),
						a = e.get(r) ?? 0;
					return (e.get(i) ?? 0) - a;
				});
			for (let e of r) {
				let t = e.closest(bi);
				if (t) {
					let n = e.parentElement === t ? e : e.closest(`${bi} > *`);
					n && t.appendChild(n);
				} else {
					let t = e.parentElement === n ? e : e.closest(`${bi} > *`);
					t && n?.appendChild(t);
				}
			}
			let i = t.sort((e, t) => t[1] - e[1]);
			for (let e of i) {
				let t = n?.querySelector(`${yi}[${vi}="${_i(e[0])}"]`);
				t?.parentElement?.appendChild(t);
			}
			this.#f();
		}
		setValue(e, t) {
			(e !== this.opts.value.current &&
				e === `` &&
				q(() => {
					this.key++;
				}),
				this.setState(`value`, e, t),
				(this.opts.value.current = e));
		}
		#f() {
			q(() => {
				let e = this.getValidItems()
						.find((e) => e.getAttribute(`aria-disabled`) !== `true`)
						?.getAttribute(vi),
					t = this.#t && this.opts.disableInitialScroll.current;
				(this.setValue(e ?? ``, t), (this.#t = !1));
			});
		}
		#p() {
			q(() => {
				(this.opts.disableInitialScroll.current || this.#g(), (this.#t = !1));
			});
		}
		#m() {
			if (!this._commandState.search || this.opts.shouldFilter.current === !1) {
				this._commandState.filtered.count = this.allItems.size;
				return;
			}
			this._commandState.filtered.groups = new Set();
			let e = 0;
			for (let t of this.allItems) {
				let n = this.allIds.get(t)?.value ?? ``,
					r = this.allIds.get(t)?.keywords ?? [],
					i = this.#u(n, r);
				(this._commandState.filtered.items.set(t, i), i > 0 && e++);
			}
			for (let [e, t] of this.allGroups)
				for (let n of t) {
					let t = this._commandState.filtered.items.get(n);
					if (t && t > 0) {
						this._commandState.filtered.groups.add(e);
						break;
					}
				}
			this._commandState.filtered.count = e;
		}
		getValidItems() {
			let e = this.opts.ref.current;
			return e ? Array.from(e.querySelectorAll(Ci)).filter((e) => !!e) : [];
		}
		getVisibleItems() {
			let e = this.opts.ref.current;
			return e ? Array.from(e.querySelectorAll(Si)).filter((e) => !!e) : [];
		}
		get itemsGrid() {
			if (!this.isGrid) return [];
			let e = this.opts.columns.current ?? 1,
				t = this.getVisibleItems(),
				n = [[]],
				r = t[0]?.getAttribute(`data-group`),
				i = 0,
				a = 0;
			for (let o = 0; o < t.length; o++) {
				let s = t[o],
					c = s?.getAttribute(`data-group`);
				r === c
					? (i++,
						i > e && (a++, (i = 1), n.push([])),
						n[a]?.push({
							index: o,
							firstRowOfGroup: n[a]?.[0]?.firstRowOfGroup ?? o === 0,
							ref: s
						}))
					: ((r = c), (i = 1), a++, n.push([{ index: o, firstRowOfGroup: !0, ref: s }]));
			}
			return n;
		}
		#h() {
			let e = this.opts.ref.current;
			if (!e) return;
			let t = e.querySelector(`${Ci}[data-selected]`);
			if (t) return t;
		}
		#g() {
			q(() => {
				let e = this.#h();
				if (!e) return;
				let t = e.parentElement?.parentElement;
				if (t) {
					if (this.isGrid) {
						let t = this.#_(e);
						if ((e.scrollIntoView({ block: `nearest` }), t)) {
							e?.closest(yi)?.querySelector(xi)?.scrollIntoView({ block: `nearest` });
							return;
						}
					} else {
						let n = Kn(t);
						if (n && n.dataset?.value === e.dataset?.value) {
							e?.closest(yi)?.querySelector(xi)?.scrollIntoView({ block: `nearest` });
							return;
						}
					}
					e.scrollIntoView({ block: `nearest` });
				}
			});
		}
		#_(e) {
			let t = this.itemsGrid;
			if (t.length === 0) return !1;
			for (let n = 0; n < t.length; n++) {
				let r = t[n];
				if (r !== void 0)
					for (let t = 0; t < r.length; t++) {
						let n = r[t];
						if (n !== void 0 && n.ref === e) return n.firstRowOfGroup;
					}
			}
			return !1;
		}
		updateSelectedToIndex(e) {
			let t = this.getValidItems()[e];
			t && this.setValue(t.getAttribute(vi) ?? ``);
		}
		updateSelectedByItem(e) {
			let t = this.#h(),
				n = this.getValidItems(),
				r = n.findIndex((e) => e === t),
				i = n[r + e];
			(this.opts.loop.current &&
				(i = r + e < 0 ? n[n.length - 1] : r + e === n.length ? n[0] : n[r + e]),
				i && this.setValue(i.getAttribute(vi) ?? ``));
		}
		updateSelectedByGroup(e) {
			let t = this.#h()?.closest(yi),
				n;
			for (; t && !n; ) ((t = e > 0 ? hi(t, yi) : gi(t, yi)), (n = t?.querySelector(Ci)));
			n ? this.setValue(n.getAttribute(vi) ?? ``) : this.updateSelectedByItem(e);
		}
		registerValue(e, t) {
			return (
				(e && e === this.allIds.get(e)?.value) ||
					this.allIds.set(e, { value: e, keywords: t }),
				this._commandState.filtered.items.set(e, this.#u(e, t)),
				this.sortAfterTick ||
					((this.sortAfterTick = !0),
					q(() => {
						(this.#d(), (this.sortAfterTick = !1));
					})),
				() => {
					this.allIds.delete(e);
				}
			);
		}
		registerItem(e, t) {
			return (
				this.allItems.add(e),
				t &&
					(this.allGroups.has(t)
						? this.allGroups.get(t).add(e)
						: this.allGroups.set(t, new Set([e]))),
				this.sortAndFilterAfterTick ||
					((this.sortAndFilterAfterTick = !0),
					q(() => {
						(this.#m(), this.#d(), (this.sortAndFilterAfterTick = !1));
					})),
				this.#l(),
				() => {
					let t = this.#h();
					(this.allItems.delete(e),
						this.commandState.filtered.items.delete(e),
						this.#m(),
						t?.getAttribute(`id`) === e && this.#f(),
						this.#l());
				}
			);
		}
		registerGroup(e) {
			return (
				this.allGroups.has(e) || this.allGroups.set(e, new Set()),
				() => {
					(this.allIds.delete(e), this.allGroups.delete(e));
				}
			);
		}
		get isGrid() {
			return this.opts.columns.current !== null;
		}
		#v() {
			return this.updateSelectedToIndex(this.getValidItems().length - 1);
		}
		#y(e) {
			(e.preventDefault(),
				e.metaKey
					? this.#v()
					: e.altKey
						? this.updateSelectedByGroup(1)
						: this.updateSelectedByItem(1));
		}
		#b(e) {
			this.opts.columns.current !== null &&
				(e.preventDefault(),
				e.metaKey
					? this.updateSelectedByGroup(1)
					: this.updateSelectedByItem(this.#S(e)));
		}
		#x(e, t) {
			if (t.length === 0) return null;
			for (let n = 0; n < t.length; n++) {
				let r = t[n];
				if (r !== void 0)
					for (let t = 0; t < r.length; t++) {
						let i = r[t];
						if (i !== void 0 && i.ref === e) return { columnIndex: t, rowIndex: n };
					}
			}
			return null;
		}
		#S(e) {
			let t = this.itemsGrid,
				n = this.#h();
			if (!n) return 0;
			let r = this.#x(n, t);
			if (!r) return 0;
			let i = null,
				a = +!!e.altKey;
			if (e.altKey && r.rowIndex === t.length - 2 && !this.opts.loop.current)
				i = this.#C({
					start: t.length - 1,
					end: t.length,
					expectedColumnIndex: r.columnIndex,
					grid: t
				});
			else if (r.rowIndex === t.length - 1) {
				if (!this.opts.loop.current) return 0;
				i = this.#C({
					start: 0 + a,
					end: r.rowIndex,
					expectedColumnIndex: r.columnIndex,
					grid: t
				});
			} else
				((i = this.#C({
					start: r.rowIndex + 1 + a,
					end: t.length,
					expectedColumnIndex: r.columnIndex,
					grid: t
				})),
					i === null &&
						this.opts.loop.current &&
						(i = this.#C({
							start: 0,
							end: r.rowIndex,
							expectedColumnIndex: r.columnIndex,
							grid: t
						})));
			return this.#w(n, i);
		}
		#C({ start: e, end: t, grid: n, expectedColumnIndex: r }) {
			let i = null;
			for (let a = e; a < t; a++) {
				let e = n[a];
				if (((i = e[r]?.ref ?? null), i !== null && ki(i))) {
					i = null;
					continue;
				}
				if (i === null)
					for (let t = e.length - 1; t >= 0; t--) {
						let t = e[e.length - 1];
						if (!(t === void 0 || ki(t.ref))) {
							i = t.ref;
							break;
						}
					}
				break;
			}
			return i;
		}
		#w(e, t) {
			if (t === null) return 0;
			let n = this.getValidItems(),
				r = n.findIndex((t) => t === e);
			return n.findIndex((e) => e === t) - r;
		}
		#T(e) {
			this.opts.columns.current !== null &&
				(e.preventDefault(),
				e.metaKey
					? this.updateSelectedByGroup(-1)
					: this.updateSelectedByItem(this.#E(e)));
		}
		#E(e) {
			let t = this.itemsGrid,
				n = this.#h();
			if (n === void 0) return 0;
			let r = this.#x(n, t);
			if (r === null) return 0;
			let i = null,
				a = +!!e.altKey;
			if (e.altKey && r.rowIndex === 1 && this.opts.loop.current === !1)
				i = this.#D({ start: 0, end: 0, expectedColumnIndex: r.columnIndex, grid: t });
			else if (r.rowIndex === 0) {
				if (this.opts.loop.current === !1) return 0;
				i = this.#D({
					start: t.length - 1 - a,
					end: r.rowIndex + 1,
					expectedColumnIndex: r.columnIndex,
					grid: t
				});
			} else
				((i = this.#D({
					start: r.rowIndex - 1 - a,
					end: 0,
					expectedColumnIndex: r.columnIndex,
					grid: t
				})),
					i === null &&
						this.opts.loop.current &&
						(i = this.#D({
							start: t.length - 1,
							end: r.rowIndex + 1,
							expectedColumnIndex: r.columnIndex,
							grid: t
						})));
			return this.#w(n, i);
		}
		#D({ start: e, end: t, grid: n, expectedColumnIndex: r }) {
			let i = null;
			for (let a = e; a >= t; a--) {
				let e = n[a];
				if (e !== void 0) {
					if (((i = e[r]?.ref ?? null), i !== null && ki(i))) {
						i = null;
						continue;
					}
					if (i === null)
						for (let t = e.length - 1; t >= 0; t--) {
							let t = e[e.length - 1];
							if (!(t === void 0 || ki(t.ref))) {
								i = t.ref;
								break;
							}
						}
					break;
				}
			}
			return i;
		}
		#O(e) {
			(e.preventDefault(),
				e.metaKey
					? this.updateSelectedToIndex(0)
					: e.altKey
						? this.updateSelectedByGroup(-1)
						: this.updateSelectedByItem(-1));
		}
		onkeydown(e) {
			let t = this.opts.vimBindings.current && e.ctrlKey;
			switch (e.key) {
				case `n`:
				case `j`:
					t && (this.isGrid ? this.#b(e) : this.#y(e));
					break;
				case `l`:
					t && this.isGrid && this.#y(e);
					break;
				case on:
					this.isGrid ? this.#b(e) : this.#y(e);
					break;
				case cn:
					if (!this.isGrid) break;
					this.#y(e);
					break;
				case `p`:
				case `k`:
					t && (this.isGrid ? this.#T(e) : this.#O(e));
					break;
				case `h`:
					t && this.isGrid && this.#O(e);
					break;
				case ln:
					this.isGrid ? this.#T(e) : this.#O(e);
					break;
				case sn:
					if (!this.isGrid) break;
					this.#O(e);
					break;
				case dn:
					(e.preventDefault(), this.updateSelectedToIndex(0));
					break;
				case `End`:
					(e.preventDefault(), this.#v());
					break;
				case un:
					if (!e.isComposing && e.keyCode !== 229) {
						e.preventDefault();
						let t = this.#h();
						t && t?.click();
					}
			}
		}
		#k = F(() => ({
			id: this.opts.id.current,
			role: `application`,
			[Z.root]: ``,
			tabindex: -1,
			onkeydown: this.onkeydown,
			...this.attachment
		}));
		get props() {
			return f(this.#k);
		}
		set props(e) {
			z(this.#k, e);
		}
	};
function ki(e) {
	return e.getAttribute(`aria-disabled`) === `true`;
}
var Ai = class e {
		static create(t) {
			return new e(t, wi.get());
		}
		opts;
		root;
		attachment;
		#e = F(
			() =>
				(this.root._commandState.filtered.count === 0 && this.#t === !1) ||
				this.opts.forceMount.current
		);
		get shouldRender() {
			return f(this.#e);
		}
		set shouldRender(e) {
			z(this.#e, e);
		}
		#t = !0;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref)),
				fe(() => {
					this.#t = !1;
				}));
		}
		#n = F(() => ({
			id: this.opts.id.current,
			role: `presentation`,
			[Z.empty]: ``,
			...this.attachment
		}));
		get props() {
			return f(this.#n);
		}
		set props(e) {
			z(this.#n, e);
		}
	},
	ji = class e {
		static create(t) {
			return Ei.set(new e(t, wi.get()));
		}
		opts;
		root;
		attachment;
		#e = F(() =>
			this.opts.forceMount.current ||
			this.root.opts.shouldFilter.current === !1 ||
			!this.root.commandState.search
				? !0
				: this.root._commandState.filtered.groups.has(this.trueValue)
		);
		get shouldRender() {
			return f(this.#e);
		}
		set shouldRender(e) {
			z(this.#e, e);
		}
		#t = A(null);
		get headingNode() {
			return f(this.#t);
		}
		set headingNode(e) {
			z(this.#t, e, !0);
		}
		#n = A(``);
		get trueValue() {
			return f(this.#n);
		}
		set trueValue(e) {
			z(this.#n, e, !0);
		}
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref)),
				(this.trueValue = e.value.current ?? e.id.current),
				K(
					() => this.trueValue,
					() => this.root.registerGroup(this.trueValue)
				),
				ae(() =>
					this.opts.value.current
						? ((this.trueValue = this.opts.value.current),
							this.root.registerValue(this.opts.value.current))
						: this.headingNode && this.headingNode.textContent
							? ((this.trueValue = this.headingNode.textContent.trim().toLowerCase()),
								this.root.registerValue(this.trueValue))
							: ((this.trueValue = `-----${this.opts.id.current}`),
								this.root.registerValue(this.trueValue))
				));
		}
		#r = F(() => ({
			id: this.opts.id.current,
			role: `presentation`,
			hidden: !this.shouldRender || void 0,
			'data-value': this.trueValue,
			[Z.group]: ``,
			...this.attachment
		}));
		get props() {
			return f(this.#r);
		}
		set props(e) {
			z(this.#r, e);
		}
	},
	Mi = class e {
		static create(t) {
			return new e(t, Ei.get());
		}
		opts;
		group;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.group = t),
				(this.attachment = J(this.opts.ref, (e) => (this.group.headingNode = e))));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			[Z[`group-heading`]]: ``,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	Ni = class e {
		static create(t) {
			return new e(t, Ei.get());
		}
		opts;
		group;
		attachment;
		constructor(e, t) {
			((this.opts = e), (this.group = t), (this.attachment = J(this.opts.ref)));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			role: `group`,
			[Z[`group-items`]]: ``,
			'aria-labelledby': this.group.headingNode?.id ?? void 0,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	Pi = class e {
		static create(t) {
			let n = Ei.getOr(null);
			return new e({ ...t, group: n }, wi.get());
		}
		opts;
		root;
		attachment;
		#e = null;
		#t = F(() => this.opts.forceMount.current || this.#e?.opts.forceMount.current === !0);
		#n = F(() => {
			if (
				(this.opts.ref.current,
				f(this.#t) ||
					this.root.opts.shouldFilter.current === !1 ||
					!this.root.commandState.search)
			)
				return !0;
			let e = this.root.commandState.filtered.items.get(this.trueValue);
			return e !== void 0 && e > 0;
		});
		get shouldRender() {
			return f(this.#n);
		}
		set shouldRender(e) {
			z(this.#n, e);
		}
		#r = F(
			() => this.root.opts.value.current === this.trueValue && this.trueValue !== ``
		);
		get isSelected() {
			return f(this.#r);
		}
		set isSelected(e) {
			z(this.#r, e);
		}
		#i = A(``);
		get trueValue() {
			return f(this.#i);
		}
		set trueValue(e) {
			z(this.#i, e, !0);
		}
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.#e = Ei.getOr(null)),
				(this.trueValue = e.value.current),
				(this.attachment = J(this.opts.ref)),
				K(
					[
						() => this.trueValue,
						() => this.#e?.trueValue,
						() => this.opts.forceMount.current
					],
					() => {
						if (!this.opts.forceMount.current && this.trueValue)
							return this.root.registerItem(this.trueValue, this.#e?.trueValue);
					}
				),
				K([() => this.opts.value.current, () => this.opts.ref.current], () => {
					(this.opts.value.current
						? (this.trueValue = this.opts.value.current)
						: this.opts.ref.current?.textContent &&
							(this.trueValue = this.opts.ref.current.textContent.trim()),
						this.trueValue &&
							(this.root.registerValue(
								this.trueValue,
								e.keywords.current.map((e) => e.trim())
							),
							this.opts.ref.current?.setAttribute(vi, this.trueValue)));
				}),
				(this.onclick = this.onclick.bind(this)),
				(this.onpointermove = this.onpointermove.bind(this)));
		}
		#a() {
			this.opts.disabled.current || (this.#o(), this.opts.onSelect?.current());
		}
		#o() {
			this.opts.disabled.current || this.root.setValue(this.trueValue, !0);
		}
		onpointermove(e) {
			this.opts.disabled.current ||
				this.root.opts.disablePointerSelection.current ||
				this.#o();
		}
		onclick(e) {
			this.opts.disabled.current || this.#a();
		}
		#s = F(() => ({
			id: this.opts.id.current,
			'aria-disabled': $t(this.opts.disabled.current),
			'aria-selected': $t(this.isSelected),
			'data-disabled': en(this.opts.disabled.current),
			'data-selected': en(this.isSelected),
			'data-value': this.trueValue,
			'data-group': this.#e?.trueValue,
			[Z.item]: ``,
			role: `option`,
			onpointermove: this.onpointermove,
			onclick: this.onclick,
			...this.attachment
		}));
		get props() {
			return f(this.#s);
		}
		set props(e) {
			z(this.#s, e);
		}
	},
	Fi = class e {
		static create(t) {
			return Ti.set(new e(t, wi.get()));
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e), (this.root = t), (this.attachment = J(this.opts.ref)));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			role: `listbox`,
			'aria-label': this.opts.ariaLabel.current,
			[Z.list]: ``,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	Ii = class e {
		static create(t) {
			return new e(t, wi.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = J(this.opts.ref, (e) => (this.root.labelNode = e))));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			[Z[`input-label`]]: ``,
			for: this.opts.for?.current,
			style: Ct,
			...this.attachment
		}));
		get props() {
			return f(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	},
	Li = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`]),
	Ri = u(`<label><!></label>`);
function zi(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = I(t, Li),
		s = Ii.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		c = F(() => W(o, s.props));
	var l = Ri();
	k(l, () => ({ ...f(c) }));
	var u = j(l);
	(B(u, () => t.children ?? n), _(l), v(e, l), O());
}
var Bi = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`value`,
		`onValueChange`,
		`onStateChange`,
		`loop`,
		`shouldFilter`,
		`filter`,
		`label`,
		`vimBindings`,
		`disablePointerSelection`,
		`disableInitialScroll`,
		`columns`,
		`children`,
		`child`
	]),
	Vi = u(`<!> <!>`, 1),
	Hi = u(`<div><!> <!></div>`);
function Ui(t, r) {
	let i = b();
	V(r, !0);
	let o = (t) => {
			zi(t, {
				children: (t, n) => {
					a();
					var r = ve();
					(e(() => M(r, y())), v(t, r));
				},
				$$slots: { default: !0 }
			});
		},
		c = E(r, `id`, 19, () => X(i)),
		l = E(r, `ref`, 15, null),
		u = E(r, `value`, 15, ``),
		d = E(r, `onValueChange`, 3, Y),
		p = E(r, `onStateChange`, 3, Y),
		m = E(r, `loop`, 3, !1),
		h = E(r, `shouldFilter`, 3, !0),
		g = E(r, `filter`, 3, wa),
		y = E(r, `label`, 3, ``),
		x = E(r, `vimBindings`, 3, !0),
		ee = E(r, `disablePointerSelection`, 3, !1),
		S = E(r, `disableInitialScroll`, 3, !1),
		C = E(r, `columns`, 3, null),
		w = I(r, Bi),
		T = Oi.create({
			id: U(() => c()),
			ref: U(
				() => l(),
				(e) => l(e)
			),
			filter: U(() => g()),
			shouldFilter: U(() => h()),
			loop: U(() => m()),
			value: U(
				() => u(),
				(e) => {
					u() !== e && (u(e), d()(e));
				}
			),
			vimBindings: U(() => x()),
			disablePointerSelection: U(() => ee()),
			disableInitialScroll: U(() => S()),
			onStateChange: U(() => p()),
			columns: U(() => C())
		}),
		te = (e) => T.updateSelectedToIndex(e),
		ne = (e) => T.updateSelectedByGroup(e),
		re = (e) => T.updateSelectedByItem(e),
		ie = () => T.getValidItems(),
		ae = F(() => W(w, T.props));
	var A = {
			updateSelectedToIndex: te,
			updateSelectedByGroup: ne,
			updateSelectedByItem: re,
			getValidItems: ie
		},
		oe = s(),
		se = D(oe),
		ce = (e) => {
			var t = Vi(),
				n = D(t);
			o(n);
			var i = R(n, 2);
			(B(
				i,
				() => r.child,
				() => ({ props: f(ae) })
			),
				v(e, t));
		},
		le = (e) => {
			var t = Hi();
			k(t, () => ({ ...f(ae) }));
			var i = j(t);
			o(i);
			var a = R(i, 2);
			(B(a, () => r.children ?? n), _(t), v(e, t));
		};
	return (
		N(se, (e) => {
			r.child ? e(ce) : e(le, -1);
		}),
		v(t, oe),
		O(A)
	);
}
var Wi = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`children`,
		`child`,
		`forceMount`
	]),
	Gi = u(`<div><!></div>`);
function Ki(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `forceMount`, 3, !1),
		c = I(t, Wi),
		l = Ai.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			),
			forceMount: U(() => o())
		}),
		u = F(() => W(l.props, c));
	var d = s(),
		p = D(d),
		m = (e) => {
			var r = s(),
				i = D(r),
				a = (e) => {
					var n = s(),
						r = D(n);
					(B(
						r,
						() => t.child,
						() => ({ props: f(u) })
					),
						v(e, n));
				},
				o = (e) => {
					var r = Gi();
					k(r, () => ({ ...f(u) }));
					var i = j(r);
					(B(i, () => t.children ?? n), _(r), v(e, r));
				};
			(N(i, (e) => {
				t.child ? e(a) : e(o, -1);
			}),
				v(e, r));
		};
	(N(p, (e) => {
		l.shouldRender && e(m);
	}),
		v(e, d),
		O());
}
var qi = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`value`,
		`forceMount`,
		`children`,
		`child`
	]),
	Ji = u(`<div><!></div>`);
function Yi(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `value`, 3, ``),
		c = E(t, `forceMount`, 3, !1),
		l = I(t, qi),
		u = ji.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			),
			forceMount: U(() => c()),
			value: U(() => o())
		}),
		d = F(() => W(l, u.props));
	var p = s(),
		m = D(p),
		h = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(d) })
			),
				v(e, n));
		},
		g = (e) => {
			var r = Ji();
			k(r, () => ({ ...f(d) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(m, (e) => {
		t.child ? e(h) : e(g, -1);
	}),
		v(e, p),
		O());
}
var Xi = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`, `child`]),
	Zi = u(`<div><!></div>`);
function Qi(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = I(t, Xi),
		c = Mi.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		l = F(() => W(o, c.props));
	var u = s(),
		d = D(u),
		p = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(l) })
			),
				v(e, n));
		},
		m = (e) => {
			var r = Zi();
			k(r, () => ({ ...f(l) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}),
		v(e, u),
		O());
}
var $i = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`, `child`]),
	ea = u(`<div><!></div>`),
	ta = u(`<div style="display: contents;"><!></div>`);
function na(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = I(t, $i),
		c = Ni.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		l = F(() => W(o, c.props));
	var u = ta(),
		d = j(u),
		p = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(l) })
			),
				v(e, n));
		},
		m = (e) => {
			var r = ea();
			k(r, () => ({ ...f(l) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(d, (e) => {
		t.child ? e(p) : e(m, -1);
	}),
		_(u),
		v(e, u),
		O());
}
var ra = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`value`,
		`disabled`,
		`children`,
		`child`,
		`onSelect`,
		`forceMount`,
		`keywords`
	]),
	ia = u(`<div><!></div>`),
	aa = u(`<div style="display: contents;" data-item-wrapper=""><!></div>`);
function oa(t, r) {
	let i = b();
	V(r, !0);
	let a = E(r, `id`, 19, () => X(i)),
		o = E(r, `ref`, 15, null),
		c = E(r, `value`, 3, ``),
		l = E(r, `disabled`, 3, !1),
		u = E(r, `onSelect`, 3, Y),
		d = E(r, `forceMount`, 3, !1),
		p = E(r, `keywords`, 19, () => []),
		m = I(r, ra),
		h = Pi.create({
			id: U(() => a()),
			ref: U(
				() => o(),
				(e) => o(e)
			),
			value: U(() => c()),
			disabled: U(() => l()),
			onSelect: U(() => u()),
			forceMount: U(() => d()),
			keywords: U(() => p())
		}),
		y = F(() => W(m, h.props));
	var x = s(),
		ee = D(x);
	(g(
		ee,
		() => h.root.key,
		(t) => {
			var i = aa(),
				a = j(i),
				o = (e) => {
					var t = s(),
						i = D(t),
						a = (e) => {
							var t = s(),
								n = D(t);
							(B(
								n,
								() => r.child,
								() => ({ props: f(y) })
							),
								v(e, t));
						},
						o = (e) => {
							var t = ia();
							k(t, () => ({ ...f(y) }));
							var i = j(t);
							(B(i, () => r.children ?? n), _(t), v(e, t));
						};
					(N(i, (e) => {
						r.child ? e(a) : e(o, -1);
					}),
						v(e, t));
				};
			(N(a, (e) => {
				h.shouldRender && e(o);
			}),
				_(i),
				e(() => P(i, `data-value`, h.trueValue)),
				v(t, i));
		}
	),
		v(t, x),
		O());
}
var sa = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`ref`,
		`child`,
		`children`,
		`aria-label`
	]),
	ca = u(`<div><!></div>`);
function la(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = I(t, sa),
		c = Fi.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			),
			ariaLabel: U(() => t[`aria-label`] ?? `Suggestions...`)
		}),
		l = F(() => W(o, c.props));
	var u = s(),
		d = D(u);
	(g(
		d,
		() => c.root._commandState.search === ``,
		(e) => {
			var r = s(),
				i = D(r),
				a = (e) => {
					var n = s(),
						r = D(n);
					(B(
						r,
						() => t.child,
						() => ({ props: f(l) })
					),
						v(e, n));
				},
				o = (e) => {
					var r = ca();
					k(r, () => ({ ...f(l) }));
					var i = j(r);
					(B(i, () => t.children ?? n), _(r), v(e, r));
				};
			(N(i, (e) => {
				t.child ? e(a) : e(o, -1);
			}),
				v(e, r));
		}
	),
		v(e, u),
		O());
}
var ua = 1,
	da = 0.9,
	fa = 0.8,
	pa = 0.17,
	ma = 0.1,
	ha = 0.999,
	ga = 0.9999,
	_a = 0.99,
	va = /[\\/_+.#"@[({&]/,
	ya = /[\\/_+.#"@[({&]/g,
	ba = /[\s-]/,
	xa = /[\s-]/g;
function Sa(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? ua : _a;
	let s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	let c = r.charAt(a),
		l = n.indexOf(c, i),
		u = 0,
		d,
		f,
		p,
		m;
	for (; l >= 0; )
		((d = Sa(e, t, n, r, l + 1, a + 1, o)),
			d > u &&
				(l === i
					? (d *= ua)
					: va.test(e.charAt(l - 1))
						? ((d *= fa),
							(p = e.slice(i, l - 1).match(ya)),
							p && i > 0 && (d *= ha ** p.length))
						: ba.test(e.charAt(l - 1))
							? ((d *= da),
								(m = e.slice(i, l - 1).match(xa)),
								m && i > 0 && (d *= ha ** m.length))
							: ((d *= pa), i > 0 && (d *= ha ** (l - i))),
				e.charAt(l) !== t.charAt(a) && (d *= ga)),
			((d < ma && n.charAt(l - 1) === r.charAt(a + 1)) ||
				(r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a))) &&
				((f = Sa(e, t, n, r, l + 1, a + 2, o)), f * ma > d && (d = f * ma)),
			d > u && (u = d),
			(l = n.indexOf(c, l + 1)));
	return ((o[s] = u), u);
}
function Ca(e) {
	return e.toLowerCase().replace(xa, ` `);
}
function wa(e, t, n) {
	return (
		(e = n && n.length > 0 ? `${`${e} ${n?.join(` `)}`}` : e),
		Sa(e, t, Ca(e), Ca(t), 0, 0, {})
	);
}
function Ta(e, t) {
	V(t, !0);
	let r = E(t, `open`, 15, !1),
		i = E(t, `onOpenChange`, 3, Y),
		a = E(t, `onOpenChangeComplete`, 3, Y);
	wn.create({
		variant: U(() => `dialog`),
		open: U(
			() => r(),
			(e) => {
				(r(e), i()(e));
			}
		),
		onOpenChangeComplete: U(() => a())
	});
	var o = s(),
		c = D(o);
	(B(c, () => t.children ?? n), v(e, o), O());
}
var Ea = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`children`,
		`child`,
		`id`,
		`ref`,
		`disabled`
	]),
	Da = u(`<button><!></button>`);
function Oa(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `disabled`, 3, !1),
		c = I(t, Ea),
		l = En.create({
			variant: U(() => `close`),
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			),
			disabled: U(() => !!o())
		}),
		u = F(() => W(c, l.props));
	var d = s(),
		p = D(d),
		m = (e) => {
			var n = s(),
				r = D(n);
			(B(
				r,
				() => t.child,
				() => ({ props: f(u) })
			),
				v(e, n));
		},
		h = (e) => {
			var r = Da();
			k(r, () => ({ ...f(u) }));
			var i = j(r);
			(B(i, () => t.children ?? n), _(r), v(e, r));
		};
	(N(p, (e) => {
		t.child ? e(m) : e(h, -1);
	}),
		v(e, d),
		O());
}
var ka = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`children`,
		`child`,
		`ref`,
		`forceMount`,
		`onCloseAutoFocus`,
		`onOpenAutoFocus`,
		`onEscapeKeydown`,
		`onInteractOutside`,
		`trapFocus`,
		`preventScroll`,
		`restoreScrollDelay`
	]),
	Aa = u(`<!> <!>`, 1),
	ja = u(`<!> <div><!></div>`, 1);
function Ma(e, t) {
	let r = b();
	V(t, !0);
	let i = E(t, `id`, 19, () => X(r)),
		a = E(t, `ref`, 15, null),
		o = E(t, `forceMount`, 3, !1),
		c = E(t, `onCloseAutoFocus`, 3, Y),
		l = E(t, `onOpenAutoFocus`, 3, Y),
		u = E(t, `onEscapeKeydown`, 3, Y),
		d = E(t, `onInteractOutside`, 3, Y),
		p = E(t, `trapFocus`, 3, !0),
		m = E(t, `preventScroll`, 3, !0),
		h = E(t, `restoreScrollDelay`, 3, null),
		g = I(t, ka),
		y = kn.create({
			id: U(() => i()),
			ref: U(
				() => a(),
				(e) => a(e)
			)
		}),
		x = F(() => W(g, y.props));
	var ee = s(),
		S = D(ee),
		C = (e) => {
			zr(e, {
				get ref() {
					return y.opts.ref;
				},
				loop: !0,
				get trapFocus() {
					return p();
				},
				get enabled() {
					return y.root.opts.open.current;
				},
				get onOpenAutoFocus() {
					return l();
				},
				get onCloseAutoFocus() {
					return c();
				},
				focusScope: (e, r) => {
					let i = () => (r?.()).props;
					Ir(
						e,
						L(() => f(x), {
							get enabled() {
								return y.root.opts.open.current;
							},
							get ref() {
								return y.opts.ref;
							},
							onEscapeKeydown: (e) => {
								(u()(e), !e.defaultPrevented && y.root.handleClose());
							},
							children: (e, r) => {
								Nr(
									e,
									L(() => f(x), {
										get ref() {
											return y.opts.ref;
										},
										get enabled() {
											return y.root.opts.open.current;
										},
										onInteractOutside: (e) => {
											(d()(e), !e.defaultPrevented && y.root.handleClose());
										},
										children: (e, r) => {
											Kr(
												e,
												L(() => f(x), {
													get ref() {
														return y.opts.ref;
													},
													get enabled() {
														return y.root.opts.open.current;
													},
													children: (e, r) => {
														var a = s(),
															o = D(a),
															c = (e) => {
																var n = Aa(),
																	r = D(n),
																	a = (e) => {
																		ai(e, {
																			get preventScroll() {
																				return m();
																			},
																			get restoreScrollDelay() {
																				return h();
																			}
																		});
																	};
																N(r, (e) => {
																	y.root.opts.open.current && e(a);
																});
																var o = R(r, 2);
																{
																	let e = F(() => ({
																		props: W(f(x), i()),
																		...y.snippetProps
																	}));
																	B(
																		o,
																		() => t.child,
																		() => f(e)
																	);
																}
																v(e, n);
															},
															l = (e) => {
																var r = ja(),
																	a = D(r);
																ai(a, {
																	get preventScroll() {
																		return m();
																	}
																});
																var o = R(a, 2);
																k(o, (e) => ({ ...e }), [() => W(f(x), i())]);
																var s = j(o);
																(B(s, () => t.children ?? n), _(o), v(e, r));
															};
														(N(o, (e) => {
															t.child ? e(c) : e(l, -1);
														}),
															v(e, a));
													},
													$$slots: { default: !0 }
												})
											);
										},
										$$slots: { default: !0 }
									})
								);
							},
							$$slots: { default: !0 }
						})
					);
				},
				$$slots: { focusScope: !0 }
			});
		};
	(N(S, (e) => {
		(y.shouldRender || o()) && e(C);
	}),
		v(e, ee),
		O());
}
var Na = m({
		Close: () => Oa,
		Content: () => Ma,
		Description: () => mi,
		Overlay: () => ci,
		Portal: () => Vn,
		Root: () => Ta,
		Title: () => Nn,
		Trigger: () => di
	}),
	Pa = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function Fa(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, Pa);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => ci,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `sheet-overlay`,
							get class() {
								return `overlay data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var Ia = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`ref`,
		`class`,
		`portalProps`,
		`children`
	]),
	La = u(`<!> <span class="sr-only">Close</span>`, 1),
	Ra = u(`<!> <!>`, 1);
function za(e, t) {
	V(t, !0);
	let r = E(t, `ref`, 15, null),
		o = I(t, Ia);
	var c = s(),
		l = D(c);
	(i(
		l,
		() => Vn,
		(e, s) => {
			s(
				e,
				L(() => t.portalProps, {
					children: (e, s) => {
						var c = Ra(),
							l = D(c);
						Fa(l, {});
						var u = R(l, 2);
						{
							let e = F(() => t.class ?? ``);
							i(
								u,
								() => Ma,
								(s, c) => {
									c(
										s,
										L(
											{
												'data-slot': `sheet-content`,
												get class() {
													return `sheet-bottom data-[state=open]:animate-slide-up-in data-[state=closed]:animate-slide-down-out ${f(e) ?? ``}`;
												}
											},
											() => o,
											{
												get ref() {
													return r();
												},
												set ref(e) {
													r(e);
												},
												children: (e, r) => {
													var o = Ra(),
														s = D(o);
													B(s, () => t.children ?? n);
													var c = R(s, 2);
													(i(
														c,
														() => Oa,
														(e, t) => {
															t(e, {
																class: `ui-focus-ring absolute end-2 top-2 z-10 flex size-11 items-center justify-center rounded-md op-70 transition-opacity hover:op-100 disabled:pointer-events-none`,
																children: (e, t) => {
																	var n = La();
																	(Fe(D(n), { class: `size-4` }), a(2), v(e, n));
																},
																$$slots: { default: !0 }
															});
														}
													),
														v(e, o));
												},
												$$slots: { default: !0 }
											}
										)
									);
								}
							);
						}
						v(e, c);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		v(e, c),
		O());
}
var Ba = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `children`]),
	Va = u(`<div><!></div>`);
function Ha(e, t) {
	V(t, !0);
	let r = E(t, `ref`, 15, null),
		i = I(t, Ba);
	var a = Va();
	k(a, () => ({
		'data-slot': `sheet-header`,
		class: `flex flex-col gap-1.5 p-4 ${t.class ?? `` ?? ``}`,
		...i
	}));
	var o = j(a);
	(B(o, () => t.children ?? n),
		_(a),
		ce(
			a,
			(e) => r(e),
			() => r()
		),
		v(e, a),
		O());
}
var Ua = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function Wa(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, Ua);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => Nn,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `sheet-title`,
							get class() {
								return `text-foreground font-semibold ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var Ga = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function Ka(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, Ga);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => mi,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `sheet-description`,
							get class() {
								return `text-muted-foreground text-sm ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var { Root: qa, Trigger: Ja, Portal: Ya } = Na;
function Xa(...e) {
	return e.filter(Boolean).join(` `);
}
var Za = typeof document < `u`,
	Qa = 0;
function $a(e) {
	return typeof e?.id == `number` || (typeof e?.id == `string` && e.id.length > 0)
		? e.id
		: Qa++;
}
var eo = class {
	#e = A(re([]));
	get toasts() {
		return f(this.#e);
	}
	set toasts(e) {
		z(this.#e, e, !0);
	}
	#t = A(re([]));
	get heights() {
		return f(this.#t);
	}
	set heights(e) {
		z(this.#t, e, !0);
	}
	#n = new Map();
	#r = (e) => {
		let t = this.toasts.findIndex((t) => t.id === e);
		return t === -1 ? null : t;
	};
	#i = (e) => this.heights.findIndex((t) => t.toastId === e);
	addToast = (e) => {
		Za && this.toasts.unshift(e);
	};
	updateToast = ({ id: e, data: t, type: n, message: r }) => {
		let i = this.toasts.findIndex((t) => t.id === e),
			a = this.toasts[i];
		this.toasts[i] = {
			...a,
			...t,
			id: e,
			title: r,
			type: n,
			dismiss: !1,
			delete: !1,
			updated: !0
		};
	};
	markDismissed = (e) => {
		let t = this.#r(e);
		if (t === null) return;
		let n = this.toasts[t];
		n &&
			(!n.dismiss || !n.delete) &&
			(this.toasts[t] = { ...n, dismiss: !0, delete: !0 });
	};
	scheduleRemoval = (e, t) => {
		(this.cancelRemoval(e),
			this.#n.set(
				e,
				setTimeout(() => {
					(this.#n.delete(e), this.remove(e));
				}, t)
			));
	};
	cancelRemoval = (e) => {
		let t = this.#n.get(e);
		t !== void 0 && (clearTimeout(t), this.#n.delete(e));
	};
	create = (e) => {
		let { message: t, ...n } = e,
			r = $a(e),
			i =
				e.dismissible === void 0
					? e.dismissable === void 0 || e.dismissable
					: e.dismissible,
			a = e.type === void 0 ? `default` : e.type;
		return (
			T(() => {
				this.cancelRemoval(r);
				let o = this.toasts.find((e) => e.id === r);
				o?.dismiss || o?.delete
					? (this.remove(r),
						this.addToast({
							...n,
							id: r,
							title: t,
							dismissible: i,
							type: a,
							updated: !0
						}))
					: o
						? this.updateToast({ id: r, data: e, type: a, message: t, dismissible: i })
						: this.addToast({ ...n, id: r, title: t, dismissible: i, type: a });
			}),
			r
		);
	};
	dismiss = (e) => (
		T(() => {
			if (e === void 0) {
				this.toasts = this.toasts.map((e) => (e.dismiss ? e : { ...e, dismiss: !0 }));
				return;
			}
			let t = this.toasts.findIndex((t) => t.id === e);
			this.toasts[t] && (this.toasts[t] = { ...this.toasts[t], dismiss: !0 });
		}),
		e
	);
	remove = (e) => {
		if (e === void 0) {
			this.toasts = [];
			return;
		}
		let t = this.#r(e);
		if (t !== null) return (this.toasts.splice(t, 1), e);
	};
	message = (e, t) => this.create({ ...t, type: `default`, message: e });
	error = (e, t) => this.create({ ...t, type: `error`, message: e });
	success = (e, t) => this.create({ ...t, type: `success`, message: e });
	info = (e, t) => this.create({ ...t, type: `info`, message: e });
	warning = (e, t) => this.create({ ...t, type: `warning`, message: e });
	loading = (e, t) => this.create({ ...t, type: `loading`, message: e });
	promise = (e, t) => {
		if (!t) return;
		let n;
		t.loading !== void 0 &&
			(n = this.create({
				...t,
				promise: e,
				type: `loading`,
				message: typeof t.loading == `string` ? t.loading : t.loading()
			}));
		let r = e instanceof Promise ? e : e(),
			i = n !== void 0;
		return (
			r
				.then((e) => {
					if (
						typeof e == `object` &&
						e &&
						`ok` in e &&
						typeof e.ok == `boolean` &&
						!e.ok
					) {
						i = !1;
						let t = to(e);
						this.create({ id: n, type: `error`, message: t });
					} else if (t.success !== void 0) {
						i = !1;
						let r = typeof t.success == `function` ? t.success(e) : t.success;
						this.create({ id: n, type: `success`, message: r });
					}
				})
				.catch((e) => {
					if (t.error !== void 0) {
						i = !1;
						let r = typeof t.error == `function` ? t.error(e) : t.error;
						this.create({ id: n, type: `error`, message: r });
					}
				})
				.finally(() => {
					(i && (this.dismiss(n), (n = void 0)), t.finally?.());
				}),
			n
		);
	};
	custom = (e, t) => {
		let n = $a(t);
		return (this.create({ component: e, ...t, id: n }), n);
	};
	removeHeight = (e) => {
		this.heights = this.heights.filter((t) => t.toastId !== e);
	};
	setHeight = (e) => {
		T(() => {
			let t = this.#i(e.toastId);
			if (t !== -1) {
				this.heights[t] = e;
				return;
			}
			let n = new Map(this.toasts.map((e, t) => [e.id, t])),
				r = n.get(e.toastId) ?? -1,
				i = this.heights.findIndex((e) => (n.get(e.toastId) ?? 1 / 0) > r);
			i === -1 ? this.heights.push(e) : this.heights.splice(i, 0, e);
		});
	};
	reset = () => {
		((this.toasts = []),
			(this.heights = []),
			this.#n.forEach((e) => clearTimeout(e)),
			this.#n.clear());
	};
};
function to(e) {
	return e && typeof e == `object` && `status` in e
		? `HTTP error! Status: ${e.status}`
		: `Error! ${e}`;
}
var Q = new eo();
function no(e, t) {
	return Q.message(e, t);
}
var ro = class {
		#e = F(() => Q.toasts.filter((e) => !e.dismiss));
		get toasts() {
			return f(this.#e);
		}
	},
	io = Object.assign(no, {
		success: Q.success,
		info: Q.info,
		warning: Q.warning,
		error: Q.error,
		custom: Q.custom,
		message: Q.message,
		promise: Q.promise,
		dismiss: Q.dismiss,
		loading: Q.loading,
		getActiveToasts: () => Q.toasts.filter((e) => !e.dismiss)
	});
function ao(e) {
	return e
		? e
				.split(`,`)
				.map((e) => e.trim())
				.filter(Boolean)
		: [];
}
function oo(e = []) {
	let t = new Set();
	return e
		.map((e) => e.trim().replace(/\s+/g, ` `))
		.filter((e) => {
			let n = Oe(e).at(-1) ?? ``;
			return !n || t.has(n) ? !1 : (t.add(n), !0);
		});
}
function so(e = {}) {
	return {
		hero: oo(e.hero),
		item: oo(e.item),
		q: e.q?.trim() ?? ``,
		major: e.major === !0
	};
}
function co(e) {
	return so({
		hero: ao(e.get(`hero`)),
		item: ao(e.get(`item`)),
		q: e.get(`q`) ?? ``,
		major: e.get(`major`) === `true`
	});
}
function lo(e) {
	e = so(e);
	let t = new URLSearchParams();
	return (
		e.hero?.length && t.set(`hero`, e.hero.join(`,`)),
		e.item?.length && t.set(`item`, e.item.join(`,`)),
		e.q && t.set(`q`, e.q),
		e.major && t.set(`major`, `true`),
		t
	);
}
function uo(e = {}) {
	let t = so(e),
		n = (e) => e.map((e) => Oe(e).at(-1) ?? ``).sort();
	return [`deadlog`, `changelogs`, `list`, { ...t, hero: n(t.hero), item: n(t.item) }];
}
var fo = { replaceState: !1, keepFocus: !0, noScroll: !1 },
	$ = new (class {
		#e = A(null);
		#t = 0;
		#n = ``;
		#r = !1;
		#i() {
			if (ye) return new URLSearchParams();
			if (!f(this.#e)) return H.url.searchParams;
			let e = `${H.url.pathname}${H.url.search}`;
			return (
				e === this.#n && (this.#r = !0),
				this.#r && e !== this.#n ? H.url.searchParams : f(this.#e)
			);
		}
		get hero() {
			return this.filters.hero;
		}
		get item() {
			return this.filters.item;
		}
		get q() {
			return f(this.#o);
		}
		get major() {
			return this.filters.major;
		}
		get activeFilterCount() {
			return this.hero.length + this.item.length + +!!this.q + +!!this.major;
		}
		get isPending() {
			return f(this.#e) !== null;
		}
		get heroAtCap() {
			return this.hero.length >= 20;
		}
		get isSearching() {
			return this.hero.length > 0 || this.item.length > 0 || this.q !== ``;
		}
		#a = F(() => {
			let e = co(this.#i());
			return { ...e, hero: e.hero.slice(0, 20), item: e.item.slice(0, 20) };
		});
		#o = F(() => f(this.#a).q);
		get filters() {
			return f(this.#a);
		}
		update(e) {
			if (ye) return;
			let t = so({ ...this.filters, ...e }),
				n = Math.max(0, t.hero.length - 20) + Math.max(0, t.item.length - 20);
			((t.hero = t.hero.slice(0, 20)),
				(t.item = t.item.slice(0, 20)),
				(t.q = t.q.slice(0, 200)),
				n > 0 &&
					io.error(
						`Filter limit reached — 20 heroes and 20 items max. ${n} ${Ee(n, `selection`)} not applied.`
					),
				this.#s(lo(t)));
		}
		reset() {
			ye || this.#s(new URLSearchParams());
		}
		#s(e) {
			z(this.#e, e, !0);
			let t = ++this.#t,
				n = e.toString();
			((this.#n = n ? `/?${n}` : `/`), (this.#r = !1));
			let r = () => {
				t === this.#t && z(this.#e, null);
			};
			be(this.#n, fo).then(r, r);
		}
		toURLSearchParams() {
			return lo(this.filters);
		}
	})(),
	[po, mo] = se();
function ho(e, t, n) {
	return (t === `hero` ? e.heroes : e.items).find((e) => De(e.alt, n));
}
function go(e, t) {
	if (t.type !== `ability`) return `${Me(e)}#${ke(t.name)}`;
	let n = e.changeGroups?.find((e) => e.ability)?.ability ?? null;
	return n ? `${Me(e)}#${Ae(n)}` : Me(e);
}
function _o(e) {
	return e === null ? `change count unavailable` : `${e} ${Ee(e, `change`)}`;
}
var vo = (e, t) => e.some((e) => De(e, t)),
	yo = (e, t) => (vo(e, t) ? e.filter((e) => !De(e, t)) : [...e, t]);
function bo(e, t) {
	let n = yo(e === `hero` ? $.hero : $.item, t);
	$.update(e === `hero` ? { hero: n } : { item: n });
}
var xo = class {
		#e = F(() => $.q);
		get inputValue() {
			return f(this.#e);
		}
		set inputValue(e) {
			z(this.#e, e);
		}
		#t;
		#n;
		constructor(e, t) {
			((this.#t = e), (this.#n = t));
		}
		#r = F(() => {
			let e = this.inputValue.toLowerCase(),
				t = (t) => !e || t.toLowerCase().includes(e),
				n = je($.hero, (e) => e),
				r = je($.item, (e) => e),
				i = this.#t()
					.filter((e) => e.isReleased && t(e.name))
					.map((e) => ({
						type: `hero`,
						data: e,
						key: `hero-${e.id}`,
						isSelected: Te(n, e.name) !== void 0
					})),
				a = this.#n()
					.filter(
						(e) =>
							e.isReleased && e.name.trim() !== `` && !e.name.includes(`_`) && t(e.name)
					)
					.map((e) => ({
						type: `item`,
						data: e,
						key: `item-${e.id}`,
						isSelected: Te(r, e.name) !== void 0
					}));
			return [...i, ...a].sort((e, t) =>
				e.isSelected && !t.isSelected
					? -1
					: !e.isSelected && t.isSelected
						? 1
						: e.data.name.localeCompare(t.data.name)
			);
		});
		get mergedList() {
			return f(this.#r);
		}
		set mergedList(e) {
			z(this.#r, e);
		}
		toggle(e, t) {
			((this.inputValue = $.q), bo(e, t));
		}
		clearAll() {
			((this.inputValue = ``), $.reset());
		}
		updateSearch() {
			$.update({ q: this.inputValue.trim() });
		}
	},
	So = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`ref`,
		`href`,
		`class`,
		`variant`,
		`children`
	]);
function Co(e, t) {
	V(t, !0);
	let r = { default: `badge-default`, signal: `badge-signal` },
		i = E(t, `ref`, 15, null),
		a = E(t, `variant`, 3, `default`),
		o = I(t, So);
	var c = s(),
		l = D(c);
	(ge(
		l,
		() => (t.href ? `a` : `span`),
		!1,
		(e, c) => {
			(ce(
				e,
				(e) => i(e),
				() => i()
			),
				k(e, () => ({
					'data-slot': `badge`,
					href: t.href,
					class: `${r[a()] ?? ``} ${t.class ?? `` ?? ``}`,
					...o
				})));
			var l = s(),
				u = D(l);
			(B(u, () => t.children ?? n), v(c, l));
		}
	),
		v(e, c),
		O());
}
var wo = {
		hero: {
			label: `Hero`,
			plural: `heroes`,
			text: `text-primary`,
			dot: `bg-primary`,
			subtle: `bg-primary/10`,
			chip: `border border-primary/30 bg-primary/10`,
			badgeVariant: `default`
		},
		item: {
			label: `Item`,
			plural: `items`,
			text: `text-signal`,
			dot: `bg-signal`,
			subtle: `bg-signal/10`,
			chip: `border border-signal/30 bg-signal/10`,
			badgeVariant: `signal`
		}
	},
	To = u(
		`<img alt="" width="18" height="18" loading="lazy" decoding="async" class="size-[18px] rounded object-cover transition-all duration-200 group-hover/badge:scale-110"/>`
	),
	Eo = u(
		`<!> <span font="mono" uppercase="" class="text-[11px] tracking-wide"> </span> <span aria-hidden="true" op="50">/</span> <span text="xs" font="medium" class="tracking-tight"> </span> <!>`,
		1
	),
	Do = u(
		`<button type="button" rounded="md" class="group/badge min-h-11 shrink-0 focus-visible:outline-none"><!></button>`
	);
function Oo(t, n) {
	V(n, !0);
	let r = E(n, `kind`, 3, `hero`),
		i = F(() => wo[r()]);
	function a(e) {
		(e.stopPropagation(),
			(e.key === `Enter` || e.key === ` `) && (e.preventDefault(), n.onRemove()));
	}
	var o = Do();
	(Co(j(o), {
		get variant() {
			return f(i).badgeVariant;
		},
		class: `group-focus-visible/badge:ring-signal/50 hover:shadow-primary/10 cursor-pointer transition-all duration-200 group-hover/badge:pr-2 group-hover/badge:shadow-md group-focus-visible/badge:ring-2`,
		children: (t, r) => {
			var a = Eo(),
				o = D(a),
				s = (t) => {
					var r = To();
					(e(() => P(r, `src`, n.icon)), v(t, r));
				};
			N(o, (e) => {
				n.icon && e(s);
			});
			var c = R(o, 2),
				l = ue(c, !0),
				u = R(c, 4),
				d = ue(u, !0);
			(Fe(R(u, 2), {
				class: `size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100`
			}),
				e(() => {
					(M(l, f(i).label), M(d, n.name));
				}),
				v(t, a));
		},
		$$slots: { default: !0 }
	}),
		_(o),
		e(() => P(o, `aria-label`, `Remove ${f(i).label ?? ``} filter: ${n.name ?? ``}`)),
		C(`click`, o, function (...e) {
			n.onRemove?.apply(this, e);
		}),
		C(`keydown`, o, a),
		v(t, o),
		O());
}
r([`click`, `keydown`]);
var ko = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `value`, `class`]);
function Ao(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = E(t, `value`, 15, ``),
		a = I(t, ko);
	var o = s(),
		c = D(o);
	{
		let e = F(() => t.class ?? ``);
		i(
			c,
			() => Ui,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `command`,
							get class() {
								return `flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground ${f(e) ?? ``}`;
							}
						},
						() => a,
						{
							get value() {
								return r();
							},
							set value(e) {
								r(e);
							},
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, o), O());
}
var jo = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function Mo(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, jo);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => Ki,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `command-empty`,
							get class() {
								return `py-6 text-center text-sm ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var No = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`ref`,
		`class`,
		`children`,
		`heading`,
		`value`
	]),
	Po = u(`<!> <!>`, 1);
function Fo(t, n) {
	V(n, !0);
	let r = E(n, `ref`, 15, null),
		o = I(n, No);
	var c = s(),
		l = D(c);
	{
		let t = F(() => n.class ?? ``),
			c = F(() => n.value ?? n.heading ?? `----${qr()}`);
		i(
			l,
			() => Yi,
			(l, u) => {
				u(
					l,
					L(
						{
							'data-slot': `command-group`,
							get class() {
								return `overflow-hidden p-1 text-foreground ${f(t) ?? ``}`;
							},
							get value() {
								return f(c);
							}
						},
						() => o,
						{
							get ref() {
								return r();
							},
							set ref(e) {
								r(e);
							},
							children: (t, r) => {
								var o = Po(),
									c = D(o),
									l = (t) => {
										var r = s(),
											o = D(r);
										(i(
											o,
											() => Qi,
											(t, r) => {
												r(t, {
													class: `text-muted-foreground px-2 py-1.5 text-xs font-medium`,
													children: (t, r) => {
														a();
														var i = ve();
														(e(() => M(i, n.heading)), v(t, i));
													},
													$$slots: { default: !0 }
												});
											}
										),
											v(t, r));
									};
								N(c, (e) => {
									n.heading && e(l);
								});
								var u = R(c, 2);
								(i(
									u,
									() => na,
									(e, t) => {
										t(e, {
											get children() {
												return n.children;
											}
										});
									}
								),
									v(t, o));
							},
							$$slots: { default: !0 }
						}
					)
				);
			}
		);
	}
	(v(t, c), O());
}
var Io = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `children`]);
function Lo(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, Io);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => oa,
			(i, a) => {
				a(
					i,
					L(
						{
							'data-slot': `command-item`,
							get class() {
								return `menu-item ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							},
							children: (e, n) => {
								var r = s(),
									i = D(r),
									a = (e) => {
										var n = s(),
											r = D(n);
										(B(r, () => t.children), v(e, n));
									};
								(N(i, (e) => {
									t.children && e(a);
								}),
									v(e, r));
							},
							$$slots: { default: !0 }
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var Ro = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function zo(e, t) {
	V(t, !0);
	let n = E(t, `ref`, 15, null),
		r = I(t, Ro);
	var a = s(),
		o = D(a);
	{
		let e = F(() => t.class ?? ``);
		i(
			o,
			() => la,
			(t, i) => {
				i(
					t,
					L(
						{
							'data-slot': `command-list`,
							get class() {
								return `max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto ${f(e) ?? ``}`;
							}
						},
						() => r,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(v(e, a), O());
}
var Bo = u(
		`<img alt="" width="32" height="32" loading="lazy" decoding="async" border="border ~" bg="card" class="size-8 rounded object-cover"/>`
	),
	Vo = u(`<div bg="secondary" class="size-8 rounded" aria-hidden="true"></div>`),
	Ho = u(`<span>Selected</span> <span aria-hidden="true"></span>`, 1),
	Uo = u(
		`<div><!> <span flex="1" class="min-w-0"><span> </span> <span text="muted-foreground" block="" font="mono" uppercase="" class="text-xs tracking-wide"> </span></span> <!></div>`
	);
function Wo(t, n) {
	V(n, !0);
	let r = F(() => wo[n.kind]);
	var a = s(),
		o = D(a);
	{
		let t = (t, i) => {
				let a = () => (i?.()).props;
				var o = Uo();
				k(o, () => ({
					...a(),
					'aria-selected': n.isSelected,
					'aria-label': `${n.name ?? ``}, ${f(r).label ?? ``}, ${n.isSelected ? `selected` : `not selected`}`
				}));
				var s = j(o),
					c = (t) => {
						var r = Bo();
						(e(() => P(r, `src`, n.imageSrc)), v(t, r));
					},
					l = (e) => {
						var t = Vo();
						v(e, t);
					};
				N(s, (e) => {
					n.imageSrc ? e(c) : e(l, -1);
				});
				var u = R(s, 2),
					d = j(u),
					p = ue(d, !0),
					m = R(d, 2),
					h = ue(m, !0);
				_(u);
				var g = R(u, 2),
					y = (t) => {
						var n = Ho(),
							i = D(n),
							a = R(i, 2);
						(e(() => {
							(oe(i, 1, `font-mono text-xs tracking-wide ${f(r).text ?? ``}`),
								oe(a, 1, `size-2 rounded-full ${f(r).dot ?? ``}`));
						}),
							v(t, n));
					};
				(N(g, (e) => {
					n.isSelected && e(y);
				}),
					_(o),
					e(() => {
						(oe(
							d,
							1,
							`block truncate text-sm ${n.isSelected ? `font-medium ${f(r).text}` : `text-foreground`}`
						),
							M(p, n.name),
							M(h, f(r).label));
					}),
					v(t, o));
			},
			a = F(() => (n.isSelected ? f(r).subtle : ``));
		i(
			o,
			() => Lo,
			(e, r) => {
				r(e, {
					get id() {
						return n.id;
					},
					get value() {
						return n.value;
					},
					get onSelect() {
						return n.onSelect;
					},
					get class() {
						return `hover:bg-secondary data-[selected]:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors ${f(a) ?? ``}`;
					},
					child: t,
					$$slots: { child: !0 }
				});
			}
		);
	}
	(v(t, a), O());
}
var Go = u(
		`<a class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 text-sm underline-offset-4 hover:underline"> <!></a>`
	),
	Ko = u(
		`<nav aria-label="Entity histories" class="border-subtle border-b p-3"><p class="text-muted-foreground mb-1 text-xs">Open full change history</p> <div class="flex flex-wrap gap-x-4 gap-y-1"></div></nav>`
	),
	qo = u(
		`<div><!> <!> <p class="text-muted-foreground border-subtle border-t px-3 py-2.5 text-xs leading-relaxed">Patches must match every selected hero, item, and keyword. <!></p></div>`
	),
	Jo = u(
		`<form method="GET" action="/" class="border-border bg-card focus-within:border-signal flex min-h-11 items-center rounded-md border"><label class="sr-only"> </label> <input name="q" type="text" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" autocomplete="off" placeholder="Search heroes, items, or patch text…" class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base outline-none"/> <button type="submit" aria-label="Search changelog" class="ui-focus-ring bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-r-md hover:opacity-90"><!></button></form> <!>`,
		1
	);
function Yo(t, n) {
	V(n, !0);
	let r = E(n, `filterState`, 7),
		c = E(n, `mobile`, 3, !1),
		u = E(n, `open`, 15, !1),
		d = A(``),
		p = F(() => (c() ? `mobile` : `desktop`)),
		m = F(() => `${f(p)}-filter-options`),
		h = F(() => c() || u()),
		g = F(() => r().mergedList.slice(0, 60)),
		y = F(() => (r().inputValue.trim() ? f(g).slice(0, 3) : []));
	function b(e) {
		(e?.preventDefault(), r().updateSearch(), n.onsubmit());
	}
	function x(e) {
		e.key === `Escape`
			? (e.preventDefault(), e.stopPropagation(), n.onclose())
			: e.key === `Enter` && f(g).length === 0
				? (e.preventDefault(), e.stopPropagation(), b())
				: (e.key === `ArrowDown` || e.key === `ArrowUp` || e.key.length === 1) && u(!0);
	}
	var ee = s(),
		S = D(ee);
	(i(
		S,
		() => Ao,
		(t, ee) => {
			ee(t, {
				shouldFilter: !1,
				loop: !0,
				label: `Search all patch notes`,
				class: `relative z-50 h-auto overflow-visible rounded-none bg-transparent`,
				get value() {
					return f(d);
				},
				set value(e) {
					z(d, e, !0);
				},
				children: (t, ee) => {
					var S = Jo(),
						w = D(S),
						T = j(w),
						ne = ue(T, !0),
						E = R(T, 2);
					de(E);
					var O = R(E, 2),
						re = j(O);
					(Se(re, { class: `size-5` }), _(O), _(w));
					var ie = R(w, 2),
						ae = (t) => {
							var l = qo(),
								u = j(l),
								d = (t) => {
									var r = Ko(),
										i = R(j(r), 2);
									(o(
										i,
										21,
										() => f(y),
										(e) => e.key,
										(t, r) => {
											var i = Go(),
												a = j(i),
												o = R(a);
											(Ne(o, { class: `size-3.5` }),
												_(i),
												e(() => {
													(P(i, `href`, `/${f(r).type ?? ``}/${f(r).data.slug ?? ``}`),
														M(a, `${f(r).data.name ?? ``} `));
												}),
												C(`click`, i, function (...e) {
													n.onclose?.apply(this, e);
												}),
												C(`keydown`, i, (e) => e.stopPropagation()),
												v(t, i));
										}
									),
										_(i),
										_(r),
										v(t, r));
								};
							N(u, (e) => {
								f(y).length && e(d);
							});
							var h = R(u, 2);
							i(
								h,
								() => zo,
								(e, t) => {
									t(e, {
										get id() {
											return f(m);
										},
										'aria-label': `Available hero and item filters`,
										'aria-multiselectable': `true`,
										class: `max-h-80 overflow-y-auto p-2`,
										children: (e, t) => {
											var n = s(),
												c = D(n),
												l = (e) => {
													var t = s(),
														n = D(t);
													(i(
														n,
														() => Mo,
														(e, t) => {
															t(e, {
																class: `text-muted-foreground px-3 py-5 text-sm`,
																children: (e, t) => {
																	a();
																	var n = ve(
																		`No matching heroes or items. Press Enter to search patch text.`
																	);
																	v(e, n);
																},
																$$slots: { default: !0 }
															});
														}
													),
														v(e, t));
												},
												u = (e) => {
													var t = s(),
														n = D(t);
													(i(
														n,
														() => Fo,
														(e, t) => {
															t(e, {
																heading: `Filter patches by hero or item`,
																children: (e, t) => {
																	var n = s(),
																		i = D(n);
																	(o(
																		i,
																		17,
																		() => f(g),
																		(e) => e.key,
																		(e, t) => {
																			{
																				let n = F(() => we(f(t).data));
																				Wo(e, {
																					get id() {
																						return `${f(p) ?? ``}-option-${f(t).key ?? ``}`;
																					},
																					get value() {
																						return f(t).key;
																					},
																					get name() {
																						return f(t).data.name;
																					},
																					get imageSrc() {
																						return f(n);
																					},
																					get isSelected() {
																						return f(t).isSelected;
																					},
																					get kind() {
																						return f(t).type;
																					},
																					onSelect: () =>
																						r().toggle(f(t).type, f(t).data.name)
																				});
																			}
																		}
																	),
																		v(e, n));
																},
																$$slots: { default: !0 }
															});
														}
													),
														v(e, t));
												};
											(N(c, (e) => {
												f(g).length === 0 ? e(l) : e(u, -1);
											}),
												v(e, n));
										},
										$$slots: { default: !0 }
									});
								}
							);
							var b = R(h, 2),
								x = R(j(b)),
								ee = (t) => {
									var n = ve();
									(e(() =>
										M(n, `Type to narrow ${r().mergedList.length ?? ``} matches.`)
									),
										v(t, n));
								};
							(N(x, (e) => {
								r().mergedList.length > 60 && e(ee);
							}),
								_(b),
								_(l),
								e(() =>
									oe(
										l,
										1,
										te(
											c()
												? `mt-3 min-h-0 overflow-y-auto`
												: `filter-dropdown bg-popover border-border absolute inset-x-0 top-full mt-2 max-h-[65vh] overflow-y-auto rounded-md border shadow-xl`
										)
									)
								),
								v(t, l));
						};
					(N(ie, (e) => {
						f(h) && e(ae);
					}),
						e(() => {
							(P(T, `for`, `${f(p) ?? ``}-filter-input`),
								M(
									ne,
									c() ? `Hero, item, or keyword` : `Search by hero, item, or keyword`
								),
								P(E, `id`, `${f(p) ?? ``}-filter-input`),
								P(E, `aria-expanded`, f(h)),
								P(E, `aria-controls`, f(h) ? f(m) : void 0),
								P(
									E,
									`aria-activedescendant`,
									f(h) && f(d) ? `${f(p)}-option-${f(d)}` : void 0
								),
								P(E, `maxlength`, 200));
						}),
						l(`submit`, w, b),
						l(`focus`, E, () => u(!0)),
						C(`input`, E, () => u(!0)),
						C(`keydown`, E, x),
						pe(
							E,
							() => r().inputValue,
							(e) => (r().inputValue = e)
						),
						C(`keydown`, O, (e) => e.stopPropagation()),
						v(t, S));
				},
				$$slots: { default: !0 }
			});
		}
	),
		v(t, ee),
		O());
}
r([`input`, `keydown`, `click`]);
var Xo = u(
		`<button type="button" class="fixed inset-0 z-40" aria-label="Close filter options" tabindex="-1"></button>`
	),
	Zo = u(`<span class="text-primary font-mono text-xs"> </span>`),
	Qo = u(`<button><!> <span class="flex-1">Search &amp; filter</span> <!></button>`),
	$o = u(`<!> <!>`, 1),
	es = u(
		`<button type="button" class="ui-focus-ring text-signal flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs"> <!></button>`
	),
	ts = u(
		`<button type="button" class="ui-focus-ring text-primary flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs" aria-label="Remove Major patches filter">Major patches <!></button>`
	),
	ns = u(
		`<div class="mt-2 flex items-center gap-2"><div class="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto" aria-label="Active filters"><!> <!> <!></div> <button type="button" class="ui-focus-ring text-muted-foreground min-h-11 shrink-0 rounded px-2 text-xs hover:text-foreground">Clear all</button></div>`
	),
	rs = u(
		`<div class="js-only relative"><div class="hidden sm:block"><!> <!></div> <div class="sm:hidden"><!></div> <!></div> <noscript></noscript>`,
		1
	);
function is(t, n) {
	V(n, !0);
	let r = new xo(
			() => H.data.heroes ?? [],
			() => H.data.items ?? []
		),
		s = A(!1),
		c = A(!1),
		l = F(() => H.data.changelog?.icons),
		u = F(() => ({
			hero: je(H.data.heroes ?? [], (e) => e.name),
			item: je(H.data.items ?? [], (e) => e.name)
		}));
	function d(e) {
		return (e === `hero` ? $.hero : $.item).map((t) => {
			let n = Te(f(u)[e], t),
				r = f(l) ? ho(f(l), e, t) : void 0;
			return {
				key: `${e}:${t}`,
				kind: e,
				name: n?.name ?? r?.alt ?? t,
				icon: n ? we(n) : r?.src
			};
		});
	}
	let p = F(() => [...d(`hero`), ...d(`item`)]);
	function m() {
		(z(s, !1), z(c, !1));
	}
	function h() {
		(m(), r.clearAll());
	}
	var g = rs(),
		y = D(g),
		b = j(y),
		x = j(b);
	Yo(x, {
		get filterState() {
			return r;
		},
		onsubmit: m,
		onclose: m,
		get open() {
			return f(s);
		},
		set open(e) {
			z(s, e, !0);
		}
	});
	var ee = R(x, 2),
		S = (e) => {
			var t = Xo();
			(C(`click`, t, m), v(e, t));
		};
	(N(ee, (e) => {
		f(s) && e(S);
	}),
		_(b));
	var w = R(b, 2),
		T = j(w);
	(i(
		T,
		() => qa,
		(t, n) => {
			n(t, {
				get open() {
					return f(c);
				},
				set open(e) {
					z(c, e, !0);
				},
				children: (t, n) => {
					var o = $o(),
						s = D(o);
					{
						let t = (t, n) => {
							let r = () => (n?.()).props;
							var i = Qo();
							k(i, () => ({
								...r(),
								type: `button`,
								class: `ui-focus-ring border-border bg-card text-muted-foreground flex min-h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-base`
							}));
							var a = j(i);
							Se(a, { class: `text-signal size-4` });
							var o = R(a, 4),
								s = (t) => {
									var n = Zo(),
										r = ue(n, !0);
									(e(() => M(r, $.activeFilterCount)), v(t, n));
								};
							(N(o, (e) => {
								$.activeFilterCount > 0 && e(s);
							}),
								_(i),
								v(t, i));
						};
						i(
							s,
							() => Ja,
							(e, n) => {
								n(e, { child: t, $$slots: { child: !0 } });
							}
						);
					}
					var c = R(s, 2);
					(i(
						c,
						() => za,
						(e, t) => {
							t(e, {
								class: `max-h-[85dvh] overflow-y-auto px-4 pb-6`,
								style: `padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));`,
								children: (e, t) => {
									var n = $o(),
										o = D(n);
									(i(
										o,
										() => Ha,
										(e, t) => {
											t(e, {
												class: `pr-12`,
												children: (e, t) => {
													var n = $o(),
														r = D(n);
													i(
														r,
														() => Wa,
														(e, t) => {
															t(e, {
																children: (e, t) => {
																	a();
																	var n = ve(`Search all patch notes`);
																	v(e, n);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var o = R(r, 2);
													(i(
														o,
														() => Ka,
														(e, t) => {
															t(e, {
																children: (e, t) => {
																	a();
																	var n = ve(
																		`Find a hero's history or combine filters to narrow the archive.`
																	);
																	v(e, n);
																},
																$$slots: { default: !0 }
															});
														}
													),
														v(e, n));
												},
												$$slots: { default: !0 }
											});
										}
									),
										Yo(R(o, 2), {
											get filterState() {
												return r;
											},
											mobile: !0,
											onsubmit: m,
											onclose: m
										}),
										v(e, n));
								},
								$$slots: { default: !0 }
							});
						}
					),
						v(t, o));
				},
				$$slots: { default: !0 }
			});
		}
	),
		_(w));
	var te = R(w, 2),
		ne = (t) => {
			var n = ns(),
				i = j(n),
				a = j(i);
			o(
				a,
				17,
				() => f(p),
				(e) => e.key,
				(e, t) => {
					Oo(e, {
						get name() {
							return f(t).name;
						},
						get icon() {
							return f(t).icon;
						},
						get kind() {
							return f(t).kind;
						},
						onRemove: () => r.toggle(f(t).kind, f(t).name)
					});
				}
			);
			var s = R(a, 2),
				c = (t) => {
					var n = es(),
						r = j(n);
					(Fe(R(r), { class: `size-3.5` }),
						_(n),
						e(() => {
							(P(n, `aria-label`, `Remove keyword filter: ${$.q ?? ``}`),
								M(r, `Keyword: “${$.q ?? ``}” `));
						}),
						C(`click`, n, () => $.update({ q: `` })),
						v(t, n));
				};
			N(s, (e) => {
				$.q && e(c);
			});
			var l = R(s, 2),
				u = (e) => {
					var t = ts();
					(Fe(R(j(t)), { class: `size-3.5` }),
						_(t),
						C(`click`, t, () => $.update({ major: !1 })),
						v(e, t));
				};
			(N(l, (e) => {
				$.major && e(u);
			}),
				_(i));
			var d = R(i, 2);
			(_(n), C(`click`, d, h), v(t, n));
		};
	(N(te, (e) => {
		$.activeFilterCount > 0 && e(ne);
	}),
		_(y),
		a(2),
		v(t, g),
		O());
}
r([`click`]);
var as = u(`<span text="primary"> </span>`),
	os = u(
		`<button type="button" class="clip-corner-sm border-border relative size-11 shrink-0 overflow-hidden border opacity-70 transition-colors disabled:cursor-not-allowed disabled:opacity-30 hover:z-10 idle-hover:border-primary/55 idle-hover:opacity-100 selected:border-primary selected:ring-primary/45 selected:opacity-100 selected:ring-2"><img width="36" height="36" loading="lazy" decoding="async" class="size-full object-cover"/></button>`
	),
	ss = u(
		`<div m="b-2" role="group" aria-labelledby="hero-rail-label"><span id="hero-rail-label" text="muted-foreground" m="b-2" block="" kicker-sm="">&mdash; Filter by hero <span text="muted-foreground"> </span> <!></span> <div relative=""><div p="x-4 b-1" class="-mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:px-0"><div flex="~" w="max" gap="1.5" class="sm:w-auto sm:flex-wrap"></div></div> <div absolute="" aria-hidden="true" class="from-background pointer-events-none inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent sm:hidden"></div></div></div>`
	);
function cs(t, n) {
	V(n, !0);
	let r = F(() => {
			let e = $.hero;
			return (H.data.heroes ?? [])
				.filter((e) => e.isReleased)
				.map((t) => ({ hero: t, selected: vo(e, t.name) }))
				.sort(
					(e, t) =>
						Number(t.selected) - Number(e.selected) ||
						e.hero.name.localeCompare(t.hero.name)
				);
		}),
		i = F(() => $.heroAtCap);
	var c = s(),
		l = D(c),
		u = (t) => {
			var n = ss(),
				s = j(n),
				c = R(j(s)),
				l = ue(c),
				u = R(c, 2),
				d = (t) => {
					var n = as(),
						r = ue(n);
					(e(() => M(r, `— 20 hero limit reached`)), v(t, n));
				};
			(N(u, (e) => {
				f(i) && e(d);
			}),
				_(s));
			var p = R(s, 2),
				m = j(p),
				h = j(m);
			(o(
				h,
				21,
				() => f(r),
				({ hero: e, selected: t }) => e.id,
				(t, n) => {
					let r = () => f(n).hero,
						a = () => f(n).selected,
						o = F(() => !a() && f(i));
					var s = os(),
						c = ue(s);
					(e(
						(e) => {
							((s.disabled = f(o)),
								P(s, `title`, f(o) ? `${r().name} — filter limit reached` : r().name),
								P(
									s,
									`aria-label`,
									f(o) ? `${r().name} — filter limit reached` : r().name
								),
								P(s, `aria-pressed`, a()),
								P(c, `src`, e),
								P(c, `alt`, r().name));
						},
						[() => Ce(r())]
					),
						C(`click`, s, () => bo(`hero`, r().name)),
						v(t, s));
				}
			),
				_(h),
				_(m),
				a(2),
				_(p),
				_(n),
				e(() => M(l, `(${f(r).length ?? ``})`)),
				v(t, n));
		};
	(N(l, (e) => {
		f(r).length > 0 && e(u);
	}),
		v(t, c),
		O());
}
r([`click`]);
var ls = {
		setTimeout: (e, t) => setTimeout(e, t),
		clearTimeout: (e) => clearTimeout(e),
		setInterval: (e, t) => setInterval(e, t),
		clearInterval: (e) => clearInterval(e)
	},
	us = new (class {
		#e = ls;
		setTimeoutProvider(e) {
			this.#e = e;
		}
		setTimeout(e, t) {
			return this.#e.setTimeout(e, t);
		}
		clearTimeout(e) {
			this.#e.clearTimeout(e);
		}
		setInterval(e, t) {
			return this.#e.setInterval(e, t);
		}
		clearInterval(e) {
			this.#e.clearInterval(e);
		}
	})();
function ds(e) {
	setTimeout(e, 0);
}
var fs = typeof window > `u` || `Deno` in globalThis;
function ps() {}
function ms(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function hs(e) {
	return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function gs(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function _s(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function vs(e, t) {
	let {
		type: n = `all`,
		exact: r,
		fetchStatus: i,
		predicate: a,
		queryKey: o,
		stale: s
	} = e;
	if (o) {
		if (r) {
			if (t.queryHash !== bs(o, t.options)) return !1;
		} else if (!Ss(t.queryKey, o)) return !1;
	}
	if (n !== `all`) {
		let e = t.isActive();
		if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
	}
	return !(
		(typeof s == `boolean` && t.isStale() !== s) ||
		(i && i !== t.state.fetchStatus) ||
		(a && !a(t))
	);
}
function ys(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (xs(t.options.mutationKey) !== xs(a)) return !1;
		} else if (!Ss(t.options.mutationKey, a)) return !1;
	}
	return !((r && t.state.status !== r) || (i && !i(t)));
}
function bs(e, t) {
	return (t?.queryKeyHashFn || xs)(e);
}
function xs(e) {
	return JSON.stringify(e, (e, t) =>
		Ds(t)
			? Object.keys(t)
					.sort()
					.reduce((e, n) => ((e[n] = t[n]), e), {})
			: t
	);
}
function Ss(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == `object` && typeof t == `object`) {
		if (Array.isArray(e) && Array.isArray(t)) {
			if (t.length > e.length) return !1;
			for (let n = 0; n < t.length; n++) if (!Ss(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!Ss(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var Cs = Object.prototype.hasOwnProperty;
function ws(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = Es(e) && Es(t);
	if (!r && !(Ds(e) && Ds(t))) return t;
	let i = (r ? e : Object.keys(e)).length,
		a = r ? t : Object.keys(t),
		o = a.length,
		s = r ? Array(o) : {},
		c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l],
			u = e[o],
			d = t[o];
		if (u === d) {
			((s[o] = u), (r ? l < i : Cs.call(e, o)) && c++);
			continue;
		}
		if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
			s[o] = d;
			continue;
		}
		let f = ws(u, d, n + 1);
		((s[o] = f), f === u && c++);
	}
	return i === o && c === i ? e : s;
}
function Ts(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function Es(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ds(e) {
	if (!Os(e)) return !1;
	let t = Object.getPrototypeOf(e),
		n = t?.constructor;
	if (n === void 0) return !0;
	if (typeof n != `function`) return !1;
	let r = n.prototype;
	return !(!Os(r) || !r.hasOwnProperty(`isPrototypeOf`) || t !== Object.prototype);
}
function Os(e) {
	return Object.prototype.toString.call(e) === `[object Object]`;
}
function ks(e) {
	return new Promise((t) => {
		us.setTimeout(t, e);
	});
}
function As(e, t, n) {
	return typeof n.structuralSharing == `function`
		? n.structuralSharing(e, t)
		: n.structuralSharing === !1
			? t
			: ws(e, t);
}
function js(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function Ms(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var Ns = Symbol();
function Ps(e, t) {
	return !e.queryFn && t?.initialPromise
		? () => t.initialPromise
		: !e.queryFn || e.queryFn === Ns
			? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
			: e.queryFn;
}
function Fs(e, t, n) {
	let r = !1,
		i;
	return (
		Object.defineProperty(e, 'signal', {
			enumerable: !0,
			get: () => (
				(i ??= t()),
				r
					? i
					: ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
			)
		}),
		e
	);
}
var Is = () => fs,
	Ls = () => Is(),
	Rs = class {
		constructor() {
			((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					(this.listeners.delete(e), this.onUnsubscribe());
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	zs = new (class extends Rs {
		#e;
		#t;
		#n;
		constructor() {
			(super(),
				(this.#n = (e) => {
					if (typeof window < `u` && window.addEventListener) {
						let t = () => e();
						return (
							window.addEventListener(`visibilitychange`, t, !1),
							() => {
								window.removeEventListener(`visibilitychange`, t);
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#t || this.setEventListener(this.#n);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#t?.(), (this.#t = void 0));
		}
		setEventListener(e) {
			((this.#n = e),
				this.#t?.(),
				(this.#t = e((e) => {
					typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
				})));
		}
		setFocused(e) {
			this.#e !== e && ((this.#e = e), this.onFocus());
		}
		onFocus() {
			let e = this.isFocused();
			this.listeners.forEach((t) => {
				t(e);
			});
		}
		isFocused() {
			return typeof this.#e == `boolean`
				? this.#e
				: globalThis.document?.visibilityState !== `hidden`;
		}
	})(),
	Bs = ds;
function Vs() {
	let e = [],
		t = 0,
		n = (e) => {
			e();
		},
		r = (e) => {
			e();
		},
		i = Bs,
		a = (r) => {
			t
				? e.push(r)
				: i(() => {
						n(r);
					});
		},
		o = () => {
			let t = e;
			((e = []),
				t.length &&
					i(() => {
						r(() => {
							t.forEach((e) => {
								n(e);
							});
						});
					}));
		};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				(t--, t || o());
			}
			return n;
		},
		batchCalls:
			(e) =>
			(...t) => {
				a(() => {
					e(...t);
				});
			},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var Hs = Vs(),
	Us = new (class extends Rs {
		#e = !0;
		#t;
		#n;
		constructor() {
			(super(),
				(this.#n = (e) => {
					if (typeof window < `u` && window.addEventListener) {
						let t = () => e(!0),
							n = () => e(!1);
						return (
							window.addEventListener(`online`, t, !1),
							window.addEventListener(`offline`, n, !1),
							() => {
								(window.removeEventListener(`online`, t),
									window.removeEventListener(`offline`, n));
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#t || this.setEventListener(this.#n);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#t?.(), (this.#t = void 0));
		}
		setEventListener(e) {
			((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
		}
		setOnline(e) {
			this.#e !== e &&
				((this.#e = e),
				this.listeners.forEach((t) => {
					t(e);
				}));
		}
		isOnline() {
			return this.#e;
		}
	})();
function Ws(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Gs(e) {
	return (e ?? `online`) !== `online` || Us.isOnline();
}
var Ks = class extends Error {
	constructor(e) {
		(super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
	}
};
function qs(e) {
	let t = !1,
		n = 0,
		r,
		i = `pending`,
		a,
		o,
		s = new Promise((e, t) => {
			((a = e), (o = t));
		});
	s.catch(ps);
	let c = () => i !== `pending`,
		l = (t) => {
			if (!c()) {
				let n = new Ks(t);
				(h(n), e.onCancel?.(n));
			}
		},
		u = () => {
			t = !0;
		},
		d = () => {
			t = !1;
		},
		f = () =>
			zs.isFocused() && (e.networkMode === `always` || Us.isOnline()) && e.canRun(),
		p = () => Gs(e.networkMode) && e.canRun(),
		m = (e) => {
			c() || (r?.(), (i = `resolved`), a(e));
		},
		h = (e) => {
			c() || (r?.(), (i = `rejected`), o(e));
		},
		g = () =>
			new Promise((t) => {
				((r = (e) => {
					(c() || f()) && t(e);
				}),
					e.onPause?.());
			}).then(() => {
				((r = void 0), c() || e.onContinue?.());
			}),
		_ = () => {
			if (c()) return;
			let r,
				i = n === 0 ? e.initialPromise : void 0;
			try {
				r = i ?? e.fn();
			} catch (e) {
				r = Promise.reject(e);
			}
			Promise.resolve(r)
				.then(m)
				.catch((r) => {
					if (c()) return;
					let i = e.retry ?? (Ls() ? 0 : 3),
						a = e.retryDelay ?? Ws,
						o = typeof a == `function` ? a(n, r) : a,
						s =
							i === !0 ||
							(typeof i == `number` && n < i) ||
							(typeof i == `function` && i(n, r));
					if (t || !s) {
						h(r);
						return;
					}
					(n++,
						e.onFail?.(n, r),
						ks(o)
							.then(() => (f() ? void 0 : g()))
							.then(() => {
								t ? h(r) : _();
							}));
				});
		};
	return {
		promise: s,
		status: () => i,
		cancel: l,
		continue: () => (r?.(), s),
		cancelRetry: u,
		continueRetry: d,
		canStart: p,
		start: () => (p() ? _() : g().then(_), s)
	};
}
var Js = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		(this.clearGcTimeout(),
			hs(this.gcTime) &&
				(this.#e = us.setTimeout(() => {
					this.optionalRemove();
				}, this.gcTime)));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (Ls() ? 1 / 0 : 3e5));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (us.clearTimeout(this.#e), (this.#e = void 0));
	}
};
function Ys(e) {
	return {
		onFetch: (t, n) => {
			let r = t.options,
				i = t.fetchOptions?.meta?.fetchMore?.direction,
				a = t.state.data?.pages || [],
				o = t.state.data?.pageParams || [],
				s = { pages: [], pageParams: [] },
				c = 0,
				l = async () => {
					let n = !1,
						l = (e) => {
							Fs(
								e,
								() => t.signal,
								() => (n = !0)
							);
						},
						u = Ps(t.options, t.fetchOptions),
						d = async (e, r, i) => {
							if (n) return Promise.reject(t.signal.reason);
							if (r == null && e.pages.length) return Promise.resolve(e);
							let a = (() => {
									let e = {
										client: t.client,
										queryKey: t.queryKey,
										pageParam: r,
										direction: i ? `backward` : `forward`,
										meta: t.options.meta
									};
									return (l(e), e);
								})(),
								o = await u(a),
								{ maxPages: s } = t.options,
								c = i ? Ms : js;
							return { pages: c(e.pages, o, s), pageParams: c(e.pageParams, r, s) };
						};
					if (i && a.length) {
						let e = i === `backward`,
							t = e ? Zs : Xs,
							n = { pages: a, pageParams: o };
						s = await d(n, t(r, n), e);
					} else {
						let t = e ?? a.length;
						do {
							let e = c === 0 ? (o[0] ?? r.initialPageParam) : Xs(r, s);
							if (c > 0 && e == null) break;
							((s = await d(s, e)), c++);
						} while (c < t);
					}
					return s;
				};
			t.fetchFn = t.options.persister
				? () =>
						t.options.persister?.(
							l,
							{
								client: t.client,
								queryKey: t.queryKey,
								meta: t.options.meta,
								signal: t.signal
							},
							n
						)
				: l;
		}
	};
}
function Xs(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Zs(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function Qs(e, t) {
	return t ? Xs(e, t) != null : !1;
}
function $s(e, t) {
	return !t || !e.getPreviousPageParam ? !1 : Zs(e, t) != null;
}
var ec = class extends Js {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		(super(),
			(this.#s = !1),
			(this.#o = e.defaultOptions),
			this.setOptions(e.options),
			(this.observers = []),
			(this.#i = e.client),
			(this.#r = this.#i.getQueryCache()),
			(this.queryKey = e.queryKey),
			(this.queryHash = e.queryHash),
			(this.#t = rc(this.options)),
			(this.state = e.state ?? this.#t),
			this.scheduleGc());
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#e;
	}
	get promise() {
		return this.#a?.promise;
	}
	setOptions(e) {
		if (
			((this.options = { ...this.#o, ...e }),
			e?._type && (this.#e = e._type),
			this.updateGcTime(this.options.gcTime),
			this.state && this.state.data === void 0)
		) {
			let e = rc(this.options);
			e.data !== void 0 && (this.setState(nc(e.data, e.dataUpdatedAt)), (this.#t = e));
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this);
	}
	setData(e, t) {
		let n = As(this.state.data, e, this.options);
		return (
			this.#c({
				data: n,
				type: `success`,
				dataUpdatedAt: t?.updatedAt,
				manual: t?.manual
			}),
			n
		);
	}
	setState(e) {
		this.#c({ type: `setState`, state: e });
	}
	cancel(e) {
		let t = this.#a?.promise;
		return (this.#a?.cancel(e), t ? t.then(ps).catch(ps) : Promise.resolve());
	}
	destroy() {
		(super.destroy(), this.cancel({ silent: !0 }));
	}
	get resetState() {
		return this.#t;
	}
	reset() {
		(this.destroy(), this.setState(this.resetState));
	}
	isActive() {
		return this.observers.some((e) => _s(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0
			? !this.isActive()
			: this.options.queryFn === Ns || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return (
			this.getObserversCount() > 0 &&
			this.observers.some((e) => _s(e.options.staleTime, this) === `static`)
		);
	}
	isStale() {
		return this.getObserversCount() > 0
			? this.observers.some((e) => e.getCurrentResult().isStale)
			: this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0
			? !0
			: e === `static`
				? !1
				: this.state.isInvalidated
					? !0
					: !gs(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		(this.observers
			.find((e) => e.shouldFetchOnWindowFocus())
			?.refetch({ cancelRefetch: !1 }),
			this.#a?.continue());
	}
	onOnline() {
		(this.observers
			.find((e) => e.shouldFetchOnReconnect())
			?.refetch({ cancelRefetch: !1 }),
			this.#a?.continue());
	}
	addObserver(e) {
		this.observers.includes(e) ||
			(this.observers.push(e),
			this.clearGcTimeout(),
			this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
	}
	removeObserver(e) {
		let t = this.observers.indexOf(e);
		t !== -1 &&
			(this.observers.splice(t, 1),
			this.observers.length ||
				(this.#a &&
					(this.#s ||
					(this.state.fetchStatus === `paused` && this.state.status === `pending`)
						? this.#a.cancel({ revert: !0 })
						: this.#a.cancelRetry()),
				this.scheduleGc()),
			this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
	}
	getObserversCount() {
		return this.observers.length;
	}
	invalidate() {
		this.state.isInvalidated || this.#c({ type: `invalidate` });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
		}
		if ((e && this.setOptions(e), !this.options.queryFn)) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		let n = new AbortController(),
			r = (e) => {
				Object.defineProperty(e, 'signal', {
					enumerable: !0,
					get: () => ((this.#s = !0), n.signal)
				});
			},
			i = () => {
				let e = Ps(this.options, t),
					n = (() => {
						let e = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
						return (r(e), e);
					})();
				return (
					(this.#s = !1),
					this.options.persister ? this.options.persister(e, n, this) : e(n)
				);
			},
			a = (() => {
				let e = {
					fetchOptions: t,
					options: this.options,
					queryKey: this.queryKey,
					client: this.#i,
					state: this.state,
					fetchFn: i
				};
				return (r(e), e);
			})();
		((this.#e === `infinite` ? Ys(this.options.pages) : this.options.behavior)?.onFetch(
			a,
			this
		),
			(this.#n = this.state),
			(this.state.fetchStatus === `idle` ||
				this.state.fetchMeta !== a.fetchOptions?.meta) &&
				this.#c({ type: `fetch`, meta: a.fetchOptions?.meta }));
		let o = (this.#a = qs({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				(e instanceof Ks &&
					e.revert &&
					this.setState({ ...this.#n, fetchStatus: `idle` }),
					n.abort());
			},
			onFail: (e, t) => {
				this.#c({ type: `failed`, failureCount: e, error: t });
			},
			onPause: () => {
				this.#c({ type: `pause` });
			},
			onContinue: () => {
				this.#c({ type: `continue` });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		}));
		try {
			let e = await o.start();
			if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
			return (
				this.setData(e),
				this.#r.config.onSuccess?.(e, this),
				this.#r.config.onSettled?.(e, this.state.error, this),
				e
			);
		} catch (e) {
			if (e instanceof Ks) {
				if (e.silent) return this.#a.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw (
				this.#c({ type: `error`, error: e }),
				this.#r.config.onError?.(e, this),
				this.#r.config.onSettled?.(this.state.data, e, this),
				e
			);
		} finally {
			(this.#a === o && (this.#a = void 0), this.scheduleGc());
		}
	}
	#c(e) {
		let t = (t) => {
			switch (e.type) {
				case `failed`:
					return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
				case `pause`:
					return { ...t, fetchStatus: `paused` };
				case `continue`:
					return { ...t, fetchStatus: `fetching` };
				case `fetch`:
					return { ...t, ...tc(t.data, this.options), fetchMeta: e.meta ?? null };
				case `success`:
					let n = {
						...t,
						...nc(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...(!e.manual && {
							fetchStatus: `idle`,
							fetchFailureCount: 0,
							fetchFailureReason: null
						})
					};
					return ((this.#n = e.manual ? n : void 0), n);
				case `error`:
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: `idle`,
						status: `error`,
						isInvalidated: !0
					};
				case `invalidate`:
					return { ...t, isInvalidated: !0 };
				case `setState`:
					return { ...t, ...e.state };
			}
		};
		((this.state = t(this.state)),
			Hs.batch(() => {
				(this.observers.slice().forEach((e) => {
					e.onQueryUpdate();
				}),
					this.#r.notify({ query: this, type: `updated`, action: e }));
			}));
	}
};
function tc(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Gs(t.networkMode) ? `fetching` : `paused`,
		...(e === void 0 && { error: null, status: `pending` })
	};
}
function nc(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: `success`
	};
}
function rc(e) {
	let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
		n = t !== void 0,
		r = n
			? typeof e.initialDataUpdatedAt == `function`
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? (r ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? `success` : `pending`,
		fetchStatus: `idle`
	};
}
var ic = Symbol(`QueryClient`),
	ac = () => {
		let e = he(ic);
		if (!e)
			throw Error(
				`No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?`
			);
		return e;
	},
	oc = (e) => {
		x(ic, e);
	},
	sc = Symbol(`isRestoring`),
	cc = () => {
		try {
			return he(sc) ?? { current: !1 };
		} catch {
			return { current: !1 };
		}
	};
export {
	zr as $,
	is as A,
	lo as B,
	As as C,
	bt as Ct,
	gs as D,
	Ns as E,
	He as Et,
	po as F,
	qa as G,
	io as H,
	ho as I,
	Ha as J,
	Ka as K,
	mo as L,
	vo as M,
	_o as N,
	us as O,
	go as P,
	Kr as Q,
	$ as R,
	Ss as S,
	W as St,
	Ts as T,
	U as Tt,
	Q as U,
	ro as V,
	Xa as W,
	ai as X,
	za as Y,
	qr as Z,
	bs as _,
	Lt as _t,
	tc as a,
	xn as at,
	vs as b,
	jt as bt,
	Js as c,
	yn as ct,
	Hs as d,
	nn as dt,
	Ir as et,
	zs as f,
	J as ft,
	xs as g,
	Rt as gt,
	ms as h,
	Xt as ht,
	ec as i,
	Y as it,
	wo as j,
	cs as k,
	qs as l,
	en as lt,
	Ls as m,
	Yt as mt,
	ac as n,
	Vn as nt,
	Qs as o,
	gn as ot,
	Rs as p,
	Qt as pt,
	Wa as q,
	oc as r,
	X as rt,
	$s as s,
	vn as st,
	cc as t,
	Nr as tt,
	Us as u,
	an as ut,
	hs as v,
	K as vt,
	_s as w,
	ht as wt,
	ps as x,
	kt as xt,
	ys as y,
	G as yt,
	uo as z
};
