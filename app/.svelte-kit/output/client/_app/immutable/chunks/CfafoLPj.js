import {
	At as e,
	D as t,
	E as n,
	F as r,
	K as i,
	L as a,
	Ot as o,
	P as s,
	a as c,
	at as l,
	bt as u,
	f as d,
	it as f,
	jt as p,
	kt as m,
	mt as h,
	o as g,
	st as _,
	vt as v,
	w as y,
	x as b,
	xt as x
} from './CSrylp8p.js';
import { a as S } from './Cips59vp.js';
import './xihTtKlq.js';
var C = {
		get data() {
			return S.data;
		},
		get error() {
			return S.error;
		},
		get form() {
			return S.form;
		},
		get params() {
			return S.params;
		},
		get route() {
			return S.route;
		},
		get state() {
			return S.state;
		},
		get status() {
			return S.status;
		},
		get url() {
			return S.url;
		}
	},
	w = {
		xmlns: `http://www.w3.org/2000/svg`,
		width: 24,
		height: 24,
		viewBox: `0 0 24 24`,
		fill: `none`,
		stroke: `currentColor`,
		'stroke-width': 2,
		'stroke-linecap': `round`,
		'stroke-linejoin': `round`
	},
	T = (...e) =>
		e
			.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
			.join(` `)
			.trim();
function E(e) {
	return e != null;
}
function D(e, t = {}) {
	let n = t.attributeNames ?? {},
		r = (e) => n[e] ?? e,
		i = e.size ?? e.width ?? w.width,
		a = e.size ?? e.height ?? w.height,
		o =
			e.aliases
				?.filter((e) => typeof e == `string` && e.trim() !== ``)
				.map((e) => `lucide-${e}`) ?? [],
		s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
		c = t.className?.split(` `).filter(Boolean) ?? [],
		l = t.includeDefaultClasses === !1 ? T(...c) : T(`lucide`, ...s, ...c),
		u = t.absoluteStrokeWidth
			? (Number(t.strokeWidth ?? w[`stroke-width`]) *
					Number(e.size ?? e.width ?? w.width)) /
				Number(t.size ?? t.width ?? w.width)
			: (t.strokeWidth ?? w[`stroke-width`]);
	return [
		`svg`,
		{
			...Object.entries(w).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
			...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
			...(`size` in t && E(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
			...(`width` in t && E(t.width) && { [r(`width`)]: t.width }),
			...(`height` in t && E(t.height) && { [r(`height`)]: t.height }),
			[r(`stroke-width`)]: u,
			...(l && { [r(`class`)]: l }),
			[r(`viewBox`)]: `0 0 ${i} ${a}`,
			...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
			...(`attributes` in t && t.attributes)
		},
		e.node.map((e) => {
			let [n, i, a] = e,
				o = t.nonScalingStroke ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i } : i;
			return a ? [n, o, a] : [n, o];
		})
	];
}
var O = (e) => {
		for (let t in e)
			if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
		return !1;
	},
	k = Symbol(`lucide-context`),
	A = () => v(k),
	j = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`color`,
		`size`,
		`width`,
		`height`,
		`strokeWidth`,
		`absoluteStrokeWidth`,
		`nonScalingStroke`,
		`iconNode`,
		`icon`,
		`class`,
		`children`
	]),
	M = a(`<svg><!><!></svg>`);
function N(a, v) {
	x(v, !0);
	let S = A() ?? {},
		C = c(v, `color`, 19, () => S.color ?? `currentColor`),
		w = c(v, `size`, 19, () => S.size ?? 24),
		E = c(v, `width`, 19, w),
		k = c(v, `height`, 19, w),
		N = c(v, `strokeWidth`, 19, () => S.strokeWidth ?? 2),
		P = c(v, `absoluteStrokeWidth`, 19, () => S.absoluteStrokeWidth ?? !1),
		F = c(v, `nonScalingStroke`, 19, () => S.nonScalingStroke ?? !1),
		I = c(v, `iconNode`, 19, () => []),
		L = c(v, `icon`, 19, () => ({ node: I(), aliases: [], size: 24 })),
		R = g(v, j),
		z = h(() => !!v.children || O(R)),
		B = h(() =>
			D(L(), {
				color: C(),
				width: E(),
				height: k(),
				strokeWidth: N(),
				absoluteStrokeWidth: P(),
				nonScalingStroke: F(),
				className: T(`lucide-icon`, S.class),
				hasA11yProp: i(z),
				attributes: R
			})
		),
		V = h(() => p(i(B), 3)),
		H = h(() => i(V)[1]),
		U = h(() => m(i(V)[2], () => [], !0)),
		W = h(() => ({ ...i(H), class: [...i(H).class.split(` `), v.class] }));
	var G = M();
	d(G, () => ({ ...i(W) }));
	var K = f(G);
	n(
		K,
		17,
		() => i(U),
		t,
		(e, t) => {
			var n = h(() => p(i(t), 2));
			let a = () => i(n)[0],
				o = () => i(n)[1];
			var c = r(),
				u = l(c);
			(b(u, a, !0, (e, t) => {
				d(e, () => ({ ...o() }));
			}),
				s(e, c));
		}
	);
	var q = _(K);
	(y(q, () => v.children ?? e), o(G), s(a, G), u());
}
export { C as n, N as t };
