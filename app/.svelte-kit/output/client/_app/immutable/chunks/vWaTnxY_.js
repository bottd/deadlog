import {
	$ as e,
	E as t,
	F as n,
	I as r,
	K as i,
	Ot as a,
	P as o,
	a as s,
	at as c,
	bt as l,
	it as u,
	j as d,
	k as f,
	m as p,
	mt as m,
	o as h,
	ot as g,
	s as _,
	st as v,
	xt as y
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { t as b } from './CfafoLPj.js';
import { F as x, I as S } from './1gFtTxxl.js';
import { a as C, c as w, i as T, r as E } from './DGUGVeMZ.js';
import { i as D } from './bGGqeocG.js';
import { i as O, n as k, o as A, r as j, t as M } from './CBNvjb0G.js';
import { t as N } from './C8Y4yTRY.js';
var P = r(`<div class="mog-enrichment -mt-1 min-w-0"><!></div>`);
function F(e, t) {
	y(t, !0);
	let r = s(t, `ability`, 3, null),
		d = x(),
		p = T(),
		h = m(() => S(d, t.kind, t.name)),
		g = m(() => (i(h) ? p.details[E(t.kind, i(h).id, r())] : void 0));
	var _ = n(),
		v = c(_),
		b = (e) => {
			var t = P(),
				n = u(t);
			(O(n, {
				get context() {
					return i(g).context;
				},
				get name() {
					return i(g).name;
				},
				variant: `group`,
				get historyHref() {
					return i(g).historyHref;
				}
			}),
				a(t),
				o(e, t));
		};
	(f(v, (e) => {
		i(g) && e(b);
	}),
		o(e, _),
		l());
}
var I = r(`<span class="mog-enrichment"><!></span>`);
function L(e, t) {
	y(t, !0);
	let r = x(),
		s = T(),
		d = m(() => S(r, t.kind, t.name)),
		p = m(() =>
			i(d) ? s.previous[C(t.kind, i(d).id, t.groupIndex, t.bulletIndex)] : void 0
		);
	var h = n(),
		g = c(h),
		_ = (e) => {
			var t = I(),
				n = u(t);
			(A(n, {
				get previous() {
					return i(p);
				}
			}),
				a(t),
				o(e, t));
		};
	(f(g, (e) => {
		i(p) && i(p).bullet === t.text && e(_);
	}),
		o(e, h),
		l());
}
var R = r(`<!> <!> <!> <!>`, 1),
	z = r(`<div class="mog-enrichment min-w-0"><!></div>`);
function B(t, r) {
	y(r, !0);
	let s = x(),
		d = T(),
		h = w(),
		g = m(() => S(s, r.kind, r.name)),
		_ = m(() => (i(g) ? String(i(g).id) : ``)),
		b = m(() => i(g)?.alt ?? r.name),
		C = m(() => (r.kind === `hero` ? d.maxedFirst[i(_)] : void 0)),
		E = m(() => (r.kind === `hero` ? d.related[i(_)] : void 0)),
		D = m(() => (r.kind === `item` ? d.boughtBy[i(_)] : void 0)),
		O = m(() => (r.kind === `item` ? d.buyTime[i(_)] : void 0)),
		A = m(() =>
			h.stats ? { stats: h.stats, entryYear: h.entryYear, open: h.open } : null
		);
	var N = n(),
		P = c(N),
		F = (t) => {
			var n = z(),
				s = u(n);
			(M(s, {
				children: (e, t) => {
					var n = R(),
						r = c(n),
						a = (e) => {
							j(e, {
								kind: `maxed-first`,
								level: 4,
								get subject() {
									return i(b);
								},
								get rows() {
									return i(C);
								},
								get windows() {
									return i(A);
								}
							});
						};
					f(r, (e) => {
						i(C) && e(a);
					});
					var s = v(r, 2),
						l = (e) => {
							j(e, {
								kind: `related`,
								level: 4,
								get subject() {
									return i(b);
								},
								get rows() {
									return i(E).items;
								},
								get windows() {
									return i(A);
								}
							});
						};
					f(s, (e) => {
						i(E) && e(l);
					});
					var u = v(s, 2),
						d = (e) => {
							j(e, {
								kind: `bought-by`,
								level: 4,
								get subject() {
									return i(b);
								},
								get rows() {
									return i(D);
								},
								get windows() {
									return i(A);
								}
							});
						};
					f(u, (e) => {
						i(D) && e(d);
					});
					var p = v(u, 2),
						m = (e) => {
							k(e, {
								get item() {
									return i(b);
								},
								get time() {
									return i(O);
								},
								get windows() {
									return i(A);
								},
								level: 4
							});
						};
					(f(p, (e) => {
						i(O) && e(m);
					}),
						o(e, n));
				},
				$$slots: { default: !0 }
			}),
				a(n),
				e(() => p(n, `data-stats-reading`, r.kind)),
				o(t, n));
		};
	(f(P, (e) => {
		i(g) && i(A) && (i(C) || i(E) || i(D) || i(O)) && e(F);
	}),
		o(t, N),
		l());
}
var V = r(
		`<li><a flex="~" border="border/60 ~" items="center" gap="1.5" rounded="sm" p="y-0.5 r-2 l-0.5" class="group/badge hover:border-primary/30 hover:bg-primary/5 transition-colors"><img alt="" width="20" height="20" loading="lazy" decoding="async" rounded="sm" class="size-5 object-cover"/> <span text="muted-foreground" font="medium" class="group-hover/badge:text-foreground text-[11px] transition-colors"> </span></a></li>`
	),
	H = r(
		`<ul m="b-5" flex="~ wrap" list="none" gap="1" p="0" class="section-preview"></ul>`
	);
function U(r, s) {
	y(s, !0);
	let h = x(),
		_ = m(() =>
			s.names
				.map((e) => {
					let t = S(h, s.type, e),
						n = t?.alt ?? e;
					return { name: n, image: t?.src, slug: D(n) };
				})
				.filter((e) => e.image)
		);
	var b = n(),
		C = c(b),
		w = (n) => {
			var r = H();
			(t(
				r,
				21,
				() => i(_),
				(e) => e.name,
				(t, n) => {
					var r = V(),
						s = u(r),
						c = u(s),
						l = v(c, 2),
						f = g(l, !0);
					(a(s),
						a(r),
						e(() => {
							(p(s, `href`, `#${i(n).slug ?? ``}`),
								p(c, `src`, i(n).image),
								d(f, i(n).name));
						}),
						o(t, r));
				}
			),
				a(r),
				e(() => p(r, `aria-label`, `Affected ${s.type ?? ``}s`)),
				o(n, r));
		};
	(f(C, (e) => {
		i(_).length > 0 && e(w);
	}),
		o(r, b),
		l());
}
var W = new Set([`$$slots`, `$$events`, `$$legacy`]);
function G(e, t) {
	let n = h(t, W),
		r = {
			name: `clapperboard`,
			size: 24,
			node: [
				[`path`, { d: `m12.296 3.464 3.02 3.956` }],
				[
					`path`,
					{ d: `M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z` }
				],
				[`path`, { d: `M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }],
				[`path`, { d: `m6.18 5.276 3.1 3.899` }]
			]
		};
	b(
		e,
		_(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var K = r(
	`<a target="_blank" rel="noopener noreferrer" border="border/60 ~" bg="card/60" text="muted-foreground xs" m="y-2" items="center" gap="2" rounded="md" p="x-2.5 y-1.5" font="medium" class="video-link inline-flex no-underline transition-colors hover:border-signal/50 hover:text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"><!> <span truncate=""> </span> <!></a>`
);
function q(t, n) {
	var r = K(),
		i = u(r);
	G(i, { class: `text-signal size-3.5 shrink-0`, 'aria-hidden': `true` });
	var s = v(i, 2),
		c = g(s, !0),
		l = v(s, 2);
	(N(l, { class: `size-3 shrink-0 opacity-60`, 'aria-hidden': `true` }),
		a(r),
		e(() => {
			(p(r, `href`, n.src),
				p(r, `aria-label`, `${n.label ?? ``} — video clip, opens on the Deadlock forums`),
				d(c, n.label));
		}),
		o(t, r));
}
export { F as a, L as i, U as n, B as r, q as t };
