import {
	$ as e,
	E as t,
	I as n,
	K as r,
	Ot as i,
	P as a,
	at as o,
	bt as s,
	it as c,
	j as l,
	jt as u,
	m as d,
	mt as f,
	ot as p,
	s as m,
	st as h,
	xt as g
} from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { a as _, c as v } from '../chunks/bGGqeocG.js';
import { a as y, c as b, d as x, n as S, p as C, t as w } from '../chunks/BkQs74dv.js';
import { n as T, t as E } from '../chunks/dp17nrVd.js';
var D = n(
		`<li><a class="ui-focus-ring hover:text-primary flex min-h-11 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-sm py-3 text-sm"><span> </span> <time class="text-muted-foreground text-xs"> </time></a></li>`
	),
	O = n(
		`<section class="mb-10"><h2 class="text-signal mb-3 font-mono text-lg"> </h2> <ul class="divide-subtle divide-y"></ul></section>`
	),
	k = n(
		`<!> <!> <main class="container mx-auto mt-8 mb-24 max-w-3xl px-4"><header class="mb-8"><h1 class="font-display text-foreground text-4xl font-medium tracking-wide">Patch archive</h1> <p class="text-muted-foreground mt-2 text-sm"> </p></header> <!></main>`,
		1
	);
function A(n, A) {
	g(A, !0);
	let j = `Deadlock Patch Archive | Deadlog`,
		M = `Browse every recorded Deadlock patch in chronological order.`,
		N = b(`/archive`),
		P = f(() => [
			...A.data.patches.reduce((e, t) => {
				let n = v(t.pubDate),
					r = e.get(n);
				return (r ? r.push(t) : e.set(n, [t]), e);
			}, new Map())
		]);
	var F = k(),
		I = o(F);
	{
		let e = f(() => C({ title: j, description: M, canonical: N }));
		T(
			I,
			m(() => r(e))
		);
	}
	var L = h(I, 2);
	{
		let e = f(() =>
			x({
				canonical: N,
				title: j,
				description: M,
				image: S,
				dateModified: A.data.patches[0]?.pubDate,
				about: [w],
				items: A.data.patches.map((e) => ({
					name: e.title,
					url: b(`/change/${e.slug}`)
				})),
				breadcrumbs: [
					{ name: y, path: `/` },
					{ name: `Patch archive`, path: `/archive` }
				]
			})
		);
		E(L, {
			get schema() {
				return r(e);
			}
		});
	}
	var R = h(L, 2),
		z = c(R),
		B = h(c(z), 2),
		V = p(B);
	i(z);
	var H = h(z, 2);
	(t(
		H,
		17,
		() => r(P),
		([e, t]) => e,
		(n, o) => {
			var s = f(() => u(r(o), 2));
			let m = () => r(s)[0],
				g = () => r(s)[1];
			var v = O(),
				y = c(v),
				b = p(y, !0),
				x = h(y, 2);
			(t(
				x,
				21,
				g,
				(e) => e.slug,
				(t, n) => {
					var o = D(),
						s = c(o),
						u = c(s),
						f = p(u, !0),
						m = h(u, 2),
						g = p(m, !0);
					(i(s),
						i(o),
						e(
							(e) => {
								(d(s, `href`, `/change/${r(n).slug ?? ``}`),
									l(f, r(n).title),
									d(m, `datetime`, r(n).pubDate),
									l(g, e));
							},
							[() => _(r(n).pubDate)]
						),
						a(t, o));
				}
			),
				i(x),
				i(v),
				e(() => {
					(d(v, `aria-labelledby`, `year-${m() ?? ``}`),
						d(y, `id`, `year-${m() ?? ``}`),
						l(b, m()));
				}),
				a(n, v));
		}
	),
		i(R),
		e(() =>
			l(V, `Every recorded patch, newest first. ${A.data.patches.length ?? ``} patches.`)
		),
		a(n, F),
		s());
}
export { A as component };
