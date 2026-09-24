import {
	$ as e,
	B as t,
	E as n,
	I as r,
	K as i,
	Ot as a,
	P as o,
	V as s,
	at as c,
	bt as l,
	g as u,
	it as d,
	j as f,
	k as p,
	m,
	mt as h,
	ot as g,
	p as _,
	s as v,
	st as y,
	u as b,
	xt as x
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { i as S } from './DQOGthuy.js';
import { l as ee, t as te } from './bGGqeocG.js';
import { a as C, c as w, d as T, n as E, p as D, r as O, t as k } from './BkQs74dv.js';
import { n as A, t as ne } from './dp17nrVd.js';
import { t as re } from './BxaZbZlY.js';
function j(e) {
	return e.filter((e) => e.isReleased).sort((e, t) => e.name.localeCompare(t.name));
}
var ie = r(
		`<button type="button" class="ui-focus-ring text-muted-foreground min-h-11 rounded-md px-3 text-sm capitalize idle-hover:text-foreground selected:bg-signal/10 selected:text-signal"> </button>`
	),
	ae = r(
		`<div class="flex flex-wrap gap-1" role="group" aria-label="Item category"></div>`
	),
	oe = r(`<p class="text-muted-foreground mt-1 font-mono text-xs capitalize"> </p>`),
	se = r(
		`<li><a class="clip-corner-sm border-subtle bg-card hover:border-signal/60 flex h-full min-h-24 flex-col items-start gap-3 border p-3 transition-colors sm:flex-row sm:items-center"><img alt="" width="48" height="48" decoding="async"/> <div class="min-w-0"><h2 class="text-foreground text-sm leading-snug font-semibold break-words"> </h2> <!></div></a></li>`
	),
	ce = r(
		`<ul class="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></ul>`
	),
	le = r(
		`<div class="border-subtle border-t py-8" role="status"><p class="text-muted-foreground text-sm"> </p> <button type="button" class="ui-focus-ring text-signal mt-2 min-h-11 rounded-sm text-sm hover:underline">Clear directory filters</button></div>`
	),
	ue = r(
		`<!> <!> <main class="container mx-auto mt-8 mb-24 max-w-6xl px-4"><header class="mb-6"><div class="flex items-baseline gap-3"><h1 class="font-display text-foreground text-4xl font-medium tracking-wide sm:text-5xl"> </h1> <span class="text-muted-foreground font-mono text-xs" role="status"> </span></div> <p class="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed"> </p> <div class="js-only mt-5 flex flex-wrap items-center gap-3"><div class="border-border bg-card focus-within:border-signal relative w-full max-w-md rounded-md border"><label class="sr-only"> </label> <!> <input type="search" class="placeholder:text-muted-foreground min-h-11 w-full bg-transparent py-2 pr-3 pl-10 text-base outline-none"/></div> <!></div></header> <section><!></section></main>`,
		1
	);
function M(t, r) {
	x(r, !0);
	let j = h(() => O[r.kind]),
		M = h(() => w(i(j).path)),
		N = re({ name: 250, category: 0 }),
		P = h(() => (r.kind === `item` && ee(N.category) ? N.category : ``)),
		F = h(() => N.name.trim().toLowerCase()),
		I = h(() => r.entries.map((e) => ({ ...e, haystack: e.name.toLowerCase() }))),
		L = h(() =>
			i(I).filter((e) => e.haystack.includes(i(F)) && (!i(P) || e.category === i(P)))
		);
	var R = ue(),
		z = c(R);
	{
		let e = h(() =>
			D({ title: r.seo.title, description: r.seo.description, canonical: i(M) })
		);
		A(
			z,
			v(() => i(e))
		);
	}
	var B = y(z, 2);
	{
		let e = h(() =>
			T({
				canonical: i(M),
				title: r.seo.title,
				description: r.seo.description,
				image: E,
				about: [k],
				items: r.entries.map((e) => ({ name: e.name, url: w(e.href) })),
				breadcrumbs: [
					{ name: C, path: `/` },
					{ name: i(j).label, path: i(j).path }
				]
			})
		);
		ne(B, {
			get schema() {
				return i(e);
			}
		});
	}
	var V = y(B, 2),
		H = d(V),
		U = d(H),
		W = d(U),
		de = g(W, !0),
		G = y(W, 2),
		fe = g(G);
	a(U);
	var K = y(U, 2),
		pe = g(K, !0),
		q = y(K, 2),
		J = d(q),
		Y = d(J),
		me = g(Y),
		X = y(Y, 2);
	S(X, {
		class: `text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2`
	});
	var Z = y(X, 2);
	(_(Z), a(J));
	var he = y(J, 2),
		ge = (t) => {
			var r = ae();
			(n(
				r,
				20,
				() => [``, ...te],
				(e) => e,
				(t, n) => {
					var r = ie(),
						a = g(r, !0);
					(e(() => {
						(m(r, `aria-pressed`, i(P) === n), f(a, n || `All`));
					}),
						s(`click`, r, () => (N.category = n)),
						o(t, r));
				}
			),
				a(r),
				o(t, r));
		};
	(p(he, (e) => {
		r.kind === `item` && e(ge);
	}),
		a(q),
		a(H));
	var Q = y(H, 2),
		$ = d(Q),
		_e = (t) => {
			var s = ce();
			(n(
				s,
				23,
				() => i(L),
				(e) => e.id,
				(t, n, s) => {
					var c = se(),
						l = d(c),
						h = d(l),
						_ = y(h, 2),
						v = d(_),
						b = g(v, !0),
						x = y(v, 2),
						S = (t) => {
							var r = oe(),
								a = g(r, !0);
							(e(() => f(a, i(n).subtitle)), o(t, r));
						};
					(p(x, (e) => {
						i(n).subtitle && e(S);
					}),
						a(_),
						a(l),
						a(c),
						e(() => {
							(m(l, `href`, i(n).href),
								m(h, `src`, i(n).image),
								m(h, `loading`, i(s) < 10 ? `eager` : `lazy`),
								u(
									h,
									1,
									`bg-background size-12 shrink-0 rounded-md ${r.kind === `item` ? `object-contain p-1` : `object-cover`}`
								),
								f(b, i(n).name));
						}),
						o(t, c));
				}
			),
				a(s),
				o(t, s));
		},
		ve = (t) => {
			var n = le(),
				r = d(n),
				c = g(r),
				l = y(r, 2);
			(a(n),
				e(
					(e) =>
						f(
							c,
							`No ${e ?? ``} match ${N.name ? `“${N.name}”` : `this category`}${N.name && i(P) ? ` in ${i(P)}` : ``}.`
						),
					[() => i(j).label.toLowerCase()]
				),
				s(`click`, l, () => {
					((N.name = ``), (N.category = ``));
				}),
				o(t, n));
		};
	(p($, (e) => {
		i(L).length ? e(_e) : e(ve, -1);
	}),
		a(Q),
		a(V),
		e(
			(e, t) => {
				(f(de, r.heading),
					m(G, `id`, `${r.kind ?? ``}-directory-count`),
					f(
						fe,
						`${i(L).length ?? ``}${N.name || i(P) ? ` / ${r.entries.length}` : ``}
				${e ?? ``}`
					),
					f(pe, r.lede),
					m(Y, `for`, `${r.kind ?? ``}-directory-search`),
					f(me, `Filter ${t ?? ``} by name`),
					m(Z, `id`, `${r.kind ?? ``}-directory-search`),
					m(Z, `aria-describedby`, `${r.kind ?? ``}-directory-count`),
					m(Z, `placeholder`, `Find ${r.kind === `hero` ? `a hero` : `an item`}…`),
					m(Q, `aria-label`, `${i(j).label ?? ``} directory`));
			},
			[() => i(j).label.toLowerCase(), () => i(j).label.toLowerCase()]
		),
		b(
			Z,
			() => N.name,
			(e) => (N.name = e)
		),
		o(t, R),
		l());
}
t([`click`]);
export { j as n, M as t };
