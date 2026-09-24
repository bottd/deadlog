import {
	$ as e,
	Dt as t,
	I as n,
	K as r,
	Ot as i,
	P as a,
	at as o,
	bt as s,
	it as c,
	j as l,
	k as u,
	mt as d,
	o as f,
	ot as p,
	s as m,
	st as h,
	xt as ee,
	z as te
} from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { n as g, t as _ } from '../chunks/CfafoLPj.js';
import { p as v, s as y } from '../chunks/BkQs74dv.js';
import { t as b } from '../chunks/BZA8fNAE.js';
import { t as x } from '../chunks/C4XnHIoE.js';
import { n as S } from '../chunks/dp17nrVd.js';
var C = new Set([`$$slots`, `$$events`, `$$legacy`]);
function ne(e, t) {
	let n = f(t, C),
		r = {
			name: `search-x`,
			size: 24,
			node: [
				[`path`, { d: `m13.5 8.5-5 5` }],
				[`path`, { d: `m8.5 8.5 5 5` }],
				[`circle`, { cx: `11`, cy: `11`, r: `8` }],
				[`path`, { d: `m21 21-4.3-4.3` }]
			]
		};
	_(
		e,
		m(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var w = new Set([`$$slots`, `$$events`, `$$legacy`]);
function T(e, t) {
	let n = f(t, w),
		r = {
			name: `triangle-alert`,
			size: 24,
			node: [
				[
					`path`,
					{
						d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`
					}
				],
				[`path`, { d: `M12 9v4` }],
				[`path`, { d: `M12 17h.01` }]
			],
			aliases: [`alert-triangle`]
		};
	_(
		e,
		m(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var E = n(
		`Nothing is recorded at <span text="foreground" font="mono" class="break-all"> </span>. Heroes and items are renamed between patches, so an older link can point at a
					name the archive no longer uses.`,
		1
	),
	D = n(`<span text="muted-foreground xs" font="mono"> </span>`),
	O = n(
		`<!> <main class="container mx-auto px-4"><div class="mx-auto mt-8 mb-24 max-w-2xl"><div border="border/50 2" bg="card" relative="" p="x-6 y-12 sm:x-12" text="center" class="clip-corner overflow-hidden" role="alert"><!> <div flex="~" border="border ~" bg="muted/30" m="x-auto b-6" items="center" justify="center" class="clip-corner-sm size-20"><!></div> <h1 font="display medium" text="foreground 2xl sm:3xl" m="b-3" class="tracking-wide"> </h1> <p text="muted-foreground" m="x-auto b-2" class="max-w-md leading-relaxed"><!></p> <p text="muted-foreground xs" font="mono" m="b-8" class="tracking-wide"> </p> <nav aria-label="Recover"><ul flex="~ col sm:row" gap="2" justify="center" class="items-stretch sm:items-center"><li><a href="/heroes" class="pill-signal flex justify-center gap-1.5">Browse heroes <!></a></li> <li><a href="/items" class="pill-signal flex justify-center gap-1.5">Browse items <!></a></li> <li><a href="/archive" class="pill-signal flex justify-center gap-1.5">Complete archive <!></a></li></ul></nav> <p text="muted-foreground sm" m="t-8">Or search for a hero or item from the bar above.</p></div></div></main>`,
		1
	);
function k(n, f) {
	ee(f, !0);
	let _ = d(() => g.status === 404),
		C = d(() => g.data?.heroes?.length ?? 0),
		w = d(() => g.data?.items?.length ?? 0);
	var k = O(),
		A = o(k);
	{
		let e = d(() =>
			v({
				title: `Not found | Deadlog`,
				description: `That page is not in the Deadlog archive.`,
				canonical: `${y}${g.url.pathname}`,
				indexable: !1
			})
		);
		S(
			A,
			m(() => r(e))
		);
	}
	var j = h(A, 2),
		M = c(j),
		N = c(M),
		P = c(N);
	x(P, {
		tlSize: `2rem`,
		brSize: `1.5rem`,
		tlColor: `bg-muted-foreground/30`,
		brColor: `bg-muted-foreground/20`,
		thickness: `2px`
	});
	var F = h(P, 2),
		re = c(F),
		I = (e) => {
			ne(e, { class: `text-muted-foreground size-10` });
		},
		L = (e) => {
			T(e, { class: `text-destructive size-10` });
		};
	(u(re, (e) => {
		r(_) ? e(I) : e(L, -1);
	}),
		i(F));
	var R = h(F, 2),
		z = p(R, !0),
		B = h(R, 2),
		V = c(B),
		H = (n) => {
			var r = E(),
				i = h(o(r)),
				s = p(i, !0);
			(t(), e(() => l(s, g.url.pathname)), a(n, r));
		},
		U = (t) => {
			var n = te();
			(e(() =>
				l(
					n,
					`${g.error?.message ?? `The page could not be loaded.` ?? ``} Reloading may be enough;
					if not, the archive is still reachable below.`
				)
			),
				a(t, n));
		};
	(u(V, (e) => {
		r(_) ? e(H) : e(U, -1);
	}),
		i(B));
	var W = h(B, 2),
		G = p(W),
		K = h(W, 2),
		q = c(K),
		J = c(q),
		Y = c(J),
		ie = h(c(Y)),
		ae = (t) => {
			var n = D(),
				i = p(n, !0);
			(e(() => l(i, r(C))), a(t, n));
		};
	(u(ie, (e) => {
		r(C) && e(ae);
	}),
		i(Y),
		i(J));
	var X = h(J, 2),
		Z = c(X),
		oe = h(c(Z)),
		se = (t) => {
			var n = D(),
				i = p(n, !0);
			(e(() => l(i, r(w))), a(t, n));
		};
	(u(oe, (e) => {
		r(w) && e(se);
	}),
		i(Z),
		i(X));
	var Q = h(X, 2),
		$ = c(Q),
		ce = h(c($));
	(b(ce, { class: `size-3.5` }),
		i($),
		i(Q),
		i(q),
		i(K),
		t(2),
		i(N),
		i(M),
		i(j),
		e(() => {
			(l(z, r(_) ? `Not in the log` : `That request failed`),
				l(G, `Status ${g.status ?? ``}`));
		}),
		a(n, k),
		s());
}
export { k as component };
