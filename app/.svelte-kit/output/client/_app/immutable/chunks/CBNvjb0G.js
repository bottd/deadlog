import {
	$ as e,
	At as t,
	D as n,
	E as r,
	F as i,
	I as a,
	K as o,
	Ot as s,
	P as c,
	R as l,
	a as u,
	at as d,
	bt as f,
	f as p,
	g as m,
	h,
	it as g,
	j as _,
	k as v,
	m as y,
	mt as b,
	o as x,
	ot as S,
	s as C,
	st as w,
	w as T,
	x as E,
	xt as D,
	z as O
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { t as k } from './CfafoLPj.js';
import './bGGqeocG.js';
var A = a(
	`<a data-previous-change="" class="ui-focus-ring text-muted-foreground hover:text-signal focus-visible:text-signal ml-1 rounded-sm font-mono text-xs whitespace-nowrap"> </a>`
);
function j(t, n) {
	D(n, !0);
	var r = A(),
		i = S(r, !0);
	(e(() => {
		(y(r, `href`, n.previous.href),
			y(r, `aria-label`, n.previous.label),
			_(i, n.previous.text));
	}),
		c(t, r),
		f());
}
var M = new Set([`$$slots`, `$$events`, `$$legacy`]);
function N(e, t) {
	let n = x(t, M),
		r = { name: `chevron-right`, size: 24, node: [[`path`, { d: `m9 18 6-6-6-6` }]] };
	k(
		e,
		C(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var P = a(`<span class="sr-only"> </span>`),
	F = a(`<span class="font-mono text-xs"> </span>`),
	I = a(`<p class="text-muted-foreground"> </p>`),
	L = a(`<dd class="text-muted-foreground"> </dd>`),
	R = a(`<div><dt class="text-foreground"> </dt> <!></div>`),
	z = a(`<dl class="space-y-2"></dl>`),
	B = a(
		`<tr><th scope="row" class="text-muted-foreground py-0.5 pr-6 text-left font-normal"> </th><td class="text-foreground py-0.5"> </td></tr>`
	),
	V = a(
		`<div><p class="text-muted-foreground pb-1 font-mono text-xs">Base values, before upgrades and scaling</p> <table class="font-mono text-xs"><tbody></tbody></table></div>`
	),
	H = a(
		`<p><a class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"> </a></p>`
	),
	U = a(
		`<details class="text-sm svelte-1ydnaku" data-entity-context=""><summary class="ui-focus-ring text-muted-foreground -my-1 flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-3 svelte-1ydnaku"><!><span> <!><!></span></summary> <div class="max-w-[72ch] space-y-3 pt-1 pb-2 leading-relaxed"><!> <!> <!> <p class="text-muted-foreground text-xs"> </p> <!></div></details>`
	);
function W(t, a) {
	D(a, !0);
	let l = b(() => a.context.clientVersion),
		u = b(
			() =>
				`${o(l) === null ? `Current details for ${a.name}` : `Describes ${a.name} as of client ${o(l)}`}${a.variant === `group` ? `, not as of this patch` : ``}.`
		),
		p = b(() => a.context.sections.filter((e) => e.label === null)),
		m = b(() => a.context.sections.filter((e) => e.label !== null));
	var h = U(),
		x = g(h),
		C = g(x);
	N(C, { 'aria-hidden': `true`, class: `details-marker size-3.5 shrink-0` });
	var T = w(C),
		E = g(T, !0),
		O = w(E),
		k = (t) => {
			var n = P(),
				r = S(n, !0);
			(e(() => _(r, ` for ${a.name}`)), c(t, n));
		};
	v(O, (e) => {
		a.variant === `group` && e(k);
	});
	var A = w(O),
		j = (t) => {
			var n = F(),
				r = S(n, !0);
			(e(() => _(r, ` · client ${o(l)}`)), c(t, n));
		};
	(v(A, (e) => {
		o(l) !== null && e(j);
	}),
		s(T),
		s(x));
	var M = w(x, 2),
		W = g(M);
	r(
		W,
		17,
		() => o(p),
		n,
		(t, a) => {
			var s = i(),
				l = d(s);
			(r(
				l,
				17,
				() => o(a).paragraphs,
				n,
				(t, n) => {
					var r = I(),
						i = S(r, !0);
					(e(() => _(i, o(n))), c(t, r));
				}
			),
				c(t, s));
		}
	);
	var G = w(W, 2),
		K = (t) => {
			var i = z();
			(r(
				i,
				21,
				() => o(m),
				(e) => e.label,
				(t, i) => {
					var a = R(),
						l = g(a),
						u = S(l, !0),
						d = w(l, 2);
					(r(
						d,
						17,
						() => o(i).paragraphs,
						n,
						(t, n) => {
							var r = L(),
								i = S(r, !0);
							(e(() => _(i, o(n))), c(t, r));
						}
					),
						s(a),
						e(() => _(u, o(i).label)),
						c(t, a));
				}
			),
				s(i),
				c(t, i));
		};
	v(G, (e) => {
		o(m).length && e(K);
	});
	var q = w(G, 2),
		J = (t) => {
			var i = V(),
				l = w(g(i), 2),
				u = g(l);
			(r(
				u,
				21,
				() => a.context.properties,
				n,
				(t, n) => {
					var r = B(),
						i = g(r),
						a = S(i, !0),
						l = w(i),
						u = S(l);
					(s(r),
						e(() => {
							(_(a, o(n).label), _(u, `${o(n).display ?? ``}${o(n).unit ?? ``}`));
						}),
						c(t, r));
				}
			),
				s(u),
				s(l),
				s(i),
				e(() => y(l, `aria-label`, `Base values for ${a.name ?? ``}`)),
				c(t, i));
		};
	v(q, (e) => {
		a.context.properties.length && e(J);
	});
	var Y = w(q, 2),
		X = S(Y, !0),
		Z = w(Y, 2),
		Q = (t) => {
			var n = H(),
				r = g(n),
				i = S(r);
			(s(n),
				e(() => {
					(y(r, `href`, a.historyHref), _(i, `${a.name ?? ``} full history`));
				}),
				c(t, n));
		};
	(v(Z, (e) => {
		a.historyHref && e(Q);
	}),
		s(M),
		s(h),
		e(() => {
			(_(E, a.variant === `header` ? `About ${a.name}` : `Current details`), _(X, o(u)));
		}),
		c(t, h),
		f());
}
var G = [
	`Jan`,
	`Feb`,
	`Mar`,
	`Apr`,
	`May`,
	`Jun`,
	`Jul`,
	`Aug`,
	`Sep`,
	`Oct`,
	`Nov`,
	`Dec`
];
function K(e, t) {
	if (!e) return `—`;
	let n = new Date(`${e.from}T00:00:00Z`),
		r = new Date(Date.parse(`${e.to}T00:00:00Z`) - 864e5),
		i = (e) => G[e.getUTCMonth()],
		a =
			r.getUTCFullYear() === t && n.getUTCFullYear() === t
				? ``
				: ` ${r.getUTCFullYear()}`;
	return n.getTime() === r.getTime()
		? `${n.getUTCDate()} ${i(n)}${a}`
		: n.getUTCMonth() === r.getUTCMonth()
			? `${n.getUTCDate()}–${r.getUTCDate()} ${i(r)}${a}`
			: `${n.getUTCDate()} ${i(n)} – ${r.getUTCDate()} ${i(r)}${a}`;
}
var q = {
	'maxed-first': {
		title: `Maxed first`,
		lead: (e) => `Share of ${e} players who maxed each ability first`
	},
	related: {
		title: `Also changed in this patch`,
		lead: (e) => `Share of ${e} players who bought each`
	},
	'bought-by': {
		title: `Bought most by`,
		lead: (e) => `Share of each hero's players who bought ${e}`,
		round: !0
	}
};
function J(e) {
	let t = Math.round(e * 100);
	return t === 0 ? `<1%` : `${t}%`;
}
var Y = (e) => (e.after === null ? J(e.before) : `${J(e.before)} → ${J(e.after)}`),
	X = (e) =>
		e.after === null
			? `${e.name} ${J(e.before)}`
			: `${e.name}, ${J(e.before)} before, ${J(e.after)} after`;
function Z({ stats: e, entryYear: t, open: n }, r) {
	let i = K(e.before, t);
	return !e.after || !r
		? `${i}, before this patch`
		: `${i} → ${K(e.after, t)}${n ? ` so far` : ``}`;
}
var Q = a(
		`<span class="bg-border/60 block h-1 overflow-hidden rounded-full"><span class="bg-muted-foreground block h-full min-w-0.5 rounded-full"></span></span>`
	),
	$ = a(
		`<li><a class="ui-focus-ring group hover:bg-signal/5 -mx-1 flex min-h-11 max-w-md items-center gap-3 rounded-sm px-1"><img alt="" width="24" height="24" loading="lazy" decoding="async"/> <span> </span> <span aria-hidden="true" class="flex w-16 shrink-0 flex-col gap-0.5 lg:w-24" data-share-bar=""><span><span></span></span> <!></span> <span aria-hidden="true"> </span></a></li>`
	),
	ee = a(`<ul class="mt-2 list-none space-y-1"></ul>`);
function te(t, n) {
	D(n, !0);
	let i = u(n, `round`, 3, !1),
		a = b(() => n.rows.some((e) => e.after !== null)),
		l = (e) => `${Math.min(e, 1) * 100}%`;
	var d = ee();
	(r(
		d,
		21,
		() => n.rows,
		(e) => e.href,
		(t, n) => {
			var r = $(),
				u = g(r),
				d = g(u),
				f = w(d, 2),
				p = S(f, !0),
				b = w(f, 2),
				x = g(b),
				C = g(x);
			let T;
			s(x);
			var E = w(x, 2),
				D = (t) => {
					var r = Q(),
						i = g(r);
					let a;
					(s(r),
						e((e) => (a = h(i, ``, a, { width: e })), [() => l(o(n).after)]),
						c(t, r));
				};
			(v(E, (e) => {
				o(n).after !== null && e(D);
			}),
				s(b));
			var O = w(b, 2),
				k = S(O, !0);
			(s(u),
				s(r),
				e(
					(e, t, r) => {
						(y(u, `href`, o(n).href),
							y(u, `aria-label`, e),
							y(d, `src`, o(n).image),
							m(d, 1, `size-6 shrink-0 object-contain ${i() ? `rounded-full` : ``}`),
							m(
								f,
								1,
								`${o(n).muted ? `text-muted-foreground` : `text-signal`} min-w-0 flex-1 truncate text-sm underline-offset-4 group-hover:underline`
							),
							_(p, o(n).name),
							m(
								x,
								1,
								`bg-border/60 block ${o(a) ? `h-1` : `h-1.5`} overflow-hidden rounded-full`
							),
							m(
								C,
								1,
								`${o(a) ? `bg-muted-foreground/60` : `bg-muted-foreground`} block h-full min-w-0.5 rounded-full`
							),
							(T = h(C, ``, T, { width: t })),
							m(
								O,
								1,
								`text-foreground shrink-0 text-right font-mono text-xs whitespace-nowrap ${o(a) ? `w-[10ch]` : `w-[4ch]`}`
							),
							_(k, r));
					},
					[() => X(o(n)), () => l(o(n).before), () => Y(o(n))]
				),
				c(t, r));
		}
	),
		s(d),
		e(() => y(d, `aria-labelledby`, n.labelledby)),
		c(t, d),
		f());
}
var ne = a(
	`<div class="min-w-0"><!> <p class="text-muted-foreground mt-0.5 text-xs leading-relaxed"> </p> <!> <!></div>`
);
function re(n, r) {
	let i = l();
	D(r, !0);
	let a = u(r, `level`, 3, 5),
		d = b(() => q[r.kind]),
		m = b(() =>
			Z(
				r.windows,
				r.rows.some((e) => e.after !== null)
			)
		);
	var h = ne(),
		v = g(h);
	E(
		v,
		() => `h${a()}`,
		!1,
		(t, n) => {
			p(t, () => ({
				id: `${i}-heading`,
				class: `text-foreground text-sm font-semibold`
			}));
			var r = O();
			(e(() => _(r, o(d).title)), c(n, r));
		}
	);
	var x = w(v, 2),
		C = S(x, !0),
		k = w(x, 2);
	te(k, {
		get rows() {
			return r.rows;
		},
		get labelledby() {
			return `${i}-heading`;
		},
		get round() {
			return o(d).round;
		}
	});
	var A = w(k, 2);
	(T(A, () => r.children ?? t),
		s(h),
		e(
			(e) => {
				(y(h, `data-share-block`, r.kind), _(C, e));
			},
			[() => `${o(d).lead(r.subject)}, ${o(m)}.`]
		),
		c(n, h),
		f());
}
var ie = a(
	`<div class="min-w-0" data-share-block="bought-at"><!> <p class="text-muted-foreground mt-0.5 text-xs leading-relaxed"> </p> <p class="text-foreground mt-2 flex min-h-11 items-center font-mono text-sm"> </p></div>`
);
function ae(t, n) {
	D(n, !0);
	let r = u(n, `level`, 3, 5);
	var i = ie(),
		a = g(i);
	E(
		a,
		() => `h${r()}`,
		!1,
		(e, t) => {
			m(e, 0, `text-foreground text-sm font-semibold`);
			var n = O(`Bought at`);
			c(t, n);
		}
	);
	var o = w(a, 2),
		l = S(o, !0),
		d = w(o, 2),
		p = S(d, !0);
	(s(i),
		e(
			(e) => {
				(_(l, e),
					y(d, `aria-label`, `${n.time.before} before, ${n.time.after} after`),
					_(p, `${n.time.before} → ${n.time.after}`));
			},
			[() => `Average game time ${n.item} buyers bought it, ${Z(n.windows, !0)}.`]
		),
		c(t, i),
		f());
}
var oe = a(
	`<div class="stats-band mt-5 min-w-0 svelte-905f9s" data-stats-band=""><div class="band-grid grid gap-x-8 gap-y-5 svelte-905f9s"><!></div></div>`
);
function se(e, t) {
	var n = oe(),
		r = g(n),
		i = g(r);
	(T(i, () => t.children), s(r), s(n), c(e, n));
}
export { N as a, W as i, ae as n, j as o, re as r, se as t };
