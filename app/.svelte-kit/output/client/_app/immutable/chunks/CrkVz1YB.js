import {
	$ as e,
	At as t,
	B as n,
	D as r,
	Dt as i,
	E as a,
	F as o,
	I as s,
	K as c,
	Ot as l,
	P as u,
	V as d,
	_ as f,
	a as p,
	at as m,
	bt as h,
	g,
	h as _,
	it as v,
	j as y,
	jt as b,
	k as x,
	m as S,
	mt as C,
	ot as w,
	s as T,
	st as E,
	w as D,
	xt as O,
	z as k
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { N as ee, P as A } from './1gFtTxxl.js';
import { t as te } from './DGUGVeMZ.js';
import { a as j, c as ne, f as M, m as re, r as ie } from './bGGqeocG.js';
import { c as ae, f as oe, p as se, r as ce } from './BkQs74dv.js';
import { t as le } from './BZA8fNAE.js';
import { t as ue } from './C4XnHIoE.js';
import { n as de, t as fe } from './dp17nrVd.js';
import { a as N, i as pe, n as me, o as he, r as P, t as ge } from './CBNvjb0G.js';
import { n as _e, t as ve } from './Byt6hszL.js';
import { t as ye } from './BxaZbZlY.js';
var F = s(`<span class="toc-entry-count svelte-665ne9"> </span>`),
	I = s(
		`<li><a class="toc-entry toc-link svelte-665ne9"><span truncate=""> </span> <!></a></li>`
	),
	be = s(
		`<div class="toc-group"><a class="toc-section font-mono"><span class="toc-marker" aria-hidden="true"></span> <span class="toc-count"> </span></a> <ul class="mt-0.5 list-none space-y-px"></ul></div>`
	),
	xe = s(
		`<nav class="toc-panel clip-corner-sm" aria-label="Change history contents"><div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div> <p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">History</p> <div class="space-y-1"></div></nav>`
	);
function Se(t, n) {
	var r = xe(),
		i = E(v(r), 4);
	(a(
		i,
		21,
		() => n.years,
		([e, t]) => e,
		(t, r) => {
			var i = C(() => b(c(r), 2));
			let o = () => c(i)[0],
				s = () => c(i)[1];
			var f = be(),
				p = v(f),
				m = E(v(p)),
				h = E(m),
				g = w(h, !0);
			l(p);
			var _ = E(p, 2);
			(a(
				_,
				21,
				s,
				(e) => e.id,
				(t, r) => {
					var i = I(),
						a = v(i),
						o = v(a),
						s = w(o, !0),
						f = E(o, 2),
						p = (t) => {
							var n = F(),
								i = w(n, !0);
							(e(() => y(i, c(r).changeCount)), u(t, n));
						};
					(x(f, (e) => {
						c(r).changeCount !== null && e(p);
					}),
						l(a),
						l(i),
						e(() => {
							(S(a, `href`, `#history-${c(r).id ?? ``}`), y(s, c(r).label));
						}),
						d(`click`, a, function (...e) {
							n.onnavigate?.apply(this, e);
						}),
						u(t, i));
				}
			),
				l(_),
				l(f),
				e(() => {
					(S(p, `href`, `#year-${o() ?? ``}`), y(m, ` ${o() ?? ``} `), y(g, s().length));
				}),
				d(`click`, p, function (...e) {
					n.onnavigate?.apply(this, e);
				}),
				u(t, f));
		}
	),
		l(i),
		l(r),
		u(t, r));
}
n([`click`]);
var L = s(`<li class="pl-1"> </li>`),
	R = s(
		`<ul class="marker:text-muted-foreground mt-1 ml-4 list-disc space-y-1.5 leading-relaxed"></ul>`
	),
	z = s(
		`<div><h6 class="text-foreground flex items-center gap-2 text-sm font-semibold"><img alt="" width="20" height="20" loading="lazy" decoding="async" class="size-5 shrink-0 object-contain"/> </h6> <!></div>`
	),
	B = s(
		`<details class="mt-1 text-sm svelte-j8sh2x" data-related-notes=""><summary class="ui-focus-ring text-muted-foreground flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm svelte-j8sh2x"><!> </summary> <div class="space-y-3 pb-2 pl-5.5"></div></details>`
	),
	V = s(`<div data-related-items=""><!></div>`);
function Ce(t, n) {
	O(n, !0);
	var i = V(),
		o = v(i);
	(P(o, {
		kind: `related`,
		get subject() {
			return n.heroName;
		},
		get rows() {
			return n.related.items;
		},
		get windows() {
			return n.windows;
		},
		children: (t, i) => {
			var o = B(),
				s = v(o),
				d = v(s);
			N(d, { 'aria-hidden': `true`, class: `details-marker size-3.5 shrink-0` });
			var f = E(d);
			l(s);
			var p = E(s, 2);
			(a(
				p,
				21,
				() => n.related.items,
				(e) => e.href,
				(t, n) => {
					var i = z(),
						o = v(i),
						s = v(o),
						d = E(s, 1, !0);
					l(o);
					var f = E(o, 2);
					(a(
						f,
						17,
						() => c(n).groups,
						r,
						(t, n) => {
							var i = R();
							(a(
								i,
								21,
								() => c(n).bullets,
								r,
								(t, n) => {
									var r = L(),
										i = w(r, !0);
									(e(() => y(i, c(n))), u(t, r));
								}
							),
								l(i),
								u(t, i));
						}
					),
						l(i),
						e(() => {
							(S(s, `src`, c(n).image), y(d, c(n).name));
						}),
						u(t, i));
				}
			),
				l(p),
				l(o),
				e(
					(e) => y(f, ` ${e ?? ``}`),
					[
						() =>
							`Their notes · ${n.related.items.length} ${M(n.related.items.length, `item`)}`
					]
				),
				u(t, o));
		},
		$$slots: { default: !0 }
	}),
		l(i),
		u(t, i),
		h());
}
var we = s(`<img alt="" width="80" height="80" decoding="async" fetchpriority="high"/>`),
	Te = s(
		`<p class="mb-1 font-mono text-xs"><a class="ui-focus-ring text-muted-foreground hover:text-foreground rounded-sm underline-offset-4 hover:underline"> </a></p>`
	),
	Ee = s(
		`<p class="text-muted-foreground mt-3 text-sm"> <a class="text-foreground underline-offset-4 hover:underline"><time> </time></a></p>`
	),
	De = s(`<div class="mt-3"><!></div>`),
	Oe = s(`<p class="text-muted-foreground text-sm">First recorded: <time> </time>.</p>`),
	ke = s(`<p class="text-muted-foreground text-sm"> </p>`),
	Ae = s(
		`<div><dt class="font-semibold"> </dt> <dd class="text-muted-foreground mt-1"> </dd></div>`
	),
	je = s(
		`<div><h2 class="mb-3 text-sm font-semibold">Ability descriptions</h2> <dl class="max-w-[72ch] space-y-3 text-sm leading-relaxed"></dl></div>`
	),
	Me = s(
		`<img alt="" width="24" height="24" loading="lazy" decoding="async" class="size-6 rounded object-cover"/> `,
		1
	),
	Ne = s(`<a><!></a>`),
	Pe = s(`<button type="button"><!></button>`),
	Fe = s(
		`<p class="mt-2 text-sm"><a class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"> </a></p>`
	),
	Ie = s(
		`<section aria-label="Abilities"><p class="text-muted-foreground mb-2 text-sm"> </p> <div class="flex flex-wrap gap-2"></div> <!></section>`
	),
	Le = s(
		`<div class="text-muted-foreground mb-4 flex flex-wrap items-center justify-between gap-2 text-sm" role="status"><span>Showing <strong class="text-foreground font-medium"> </strong> changes</span> <button type="button" class="ui-focus-ring text-signal min-h-11 rounded-sm px-1 text-sm underline-offset-4 hover:underline">Show all changes</button></div>`
	),
	Re = s(
		`<img alt="" width="24" height="24" loading="lazy" decoding="async" class="size-6 rounded object-cover"/>`
	),
	ze = s(
		`<div class="mb-2 flex items-center gap-2"><!> <h5 class="text-foreground text-sm font-semibold"> </h5></div>`
	),
	Be = s(`<li class="pl-1"> <!></li>`),
	Ve = s(`<div class="mt-1 ml-5"><!></div>`),
	He = s(
		`<div><!> <ul class="marker:text-primary/60 ml-4 list-disc space-y-2 text-base leading-relaxed"></ul> <!></div>`
	),
	Ue = s(`<div></div>`),
	We = s(`<p class="text-muted-foreground max-w-[72ch] text-sm leading-relaxed"> </p>`),
	Ge = s(`<!> <!> <!> <!>`, 1),
	Ke = s(
		`<li class="scroll-mt-44 py-5" data-entity-patch=""><div class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h4 class="text-foreground text-base font-semibold"><a class="ui-focus-ring hover:text-signal -my-3.5 inline-block rounded-sm py-3.5 underline-offset-4 hover:underline"><time> </time></a></h4> <span class="text-muted-foreground text-xs"> </span></div> <!> <!> <div class="mt-2 flex flex-wrap gap-x-6"><a class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 rounded-sm text-xs underline-offset-4 hover:underline">Full patch <!></a></div></li>`
	),
	qe = s(
		`<section><h3 class="bg-background/95 border-subtle text-signal sticky top-[7rem] z-10 -mx-1 mb-1 flex items-baseline gap-3 border-b px-1 pt-5 pb-2 font-mono text-lg backdrop-blur-sm"> <span class="text-muted-foreground ml-auto text-xs"> </span></h3> <ol class="divide-border divide-y"></ol></section>`
	),
	Je = s(`<!> <!>`, 1),
	Ye = s(`<button type="button" class="pill-signal inline-flex"> </button>`),
	Xe = s(`<a class="pill-signal inline-flex gap-1.5"> <!></a>`),
	Ze = s(
		`<div border="border/50 2" bg="card" relative="" p="x-6 y-10" text="center" class="clip-corner my-4 overflow-hidden" role="status"><!> <h3 font="display medium" text="foreground xl" m="b-2" class="tracking-wide"> </h3> <p text="muted-foreground sm" m="x-auto b-6" class="max-w-md leading-relaxed"><!></p> <!></div>`
	),
	Qe = s(
		`<aside class="hidden xl:block xl:w-52 xl:shrink-0" aria-label="Change history index"><div class="sticky top-[8rem] max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain pr-1" style="scrollbar-gutter: stable"><!></div></aside>`
	),
	$e = s(
		`<!> <!> <main class="container mx-auto mt-6 mb-24 max-w-4xl px-4 sm:mt-8 xl:max-w-6xl"><div class="xl:flex xl:gap-8"><div class="min-w-0 xl:flex-1"><a class="ui-focus-ring text-muted-foreground hover:text-signal mb-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm"><!> </a> <header class="border-subtle mb-6 border-b pb-5"><div class="flex items-start gap-4"><!> <div class="min-w-0"><!> <h1 class="font-display text-foreground text-4xl leading-tight font-medium tracking-wide break-words sm:text-5xl"> </h1> <p class="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs capitalize"><span> </span> <!></p> <!></div></div> <!> <details><summary class="ui-focus-ring text-muted-foreground w-fit cursor-pointer rounded-sm py-3 text-sm"> <span class="ml-2 text-xs">Archive details</span></summary> <div class="space-y-4 pt-2"><!> <!> <!> <!></div></details></header> <!> <section aria-labelledby="history-heading"><div class="mb-2 flex flex-wrap items-baseline justify-between gap-3"><h2 id="history-heading" class="font-display text-foreground text-2xl font-medium tracking-wide">Change History</h2> <span class="text-muted-foreground font-mono text-xs"> </span></div> <!> <!></section></div> <!></div></main>`,
		1
	);
function H(n, s) {
	O(s, !0);
	let N = p(s, `abilities`, 19, () => []),
		F = p(s, `contexts`, 19, () => ({})),
		I = C(() => s.entity.type === `ability`);
	function be(e) {
		return !e.ability || !e.abilitySlug || re(e.ability) !== e.abilitySlug
			? null
			: (F()[e.abilitySlug] ?? null);
	}
	let xe = C(() => Object.keys(F()).length > 0),
		L = C(() => s.about?.clientVersion ?? Object.values(F())[0]?.clientVersion ?? null),
		R = `ui-focus-ring border-subtle bg-card text-foreground flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors idle-hover:border-signal/60 selected:border-signal selected:bg-signal/10 selected:text-signal`,
		z = ye({ ability: 0 }),
		B = C(() => N().find((e) => e.slug === z.ability) ?? null);
	function V(e) {
		z.ability = c(B)?.slug === e ? `` : e;
	}
	let H = C(() =>
			c(B)
				? s.changelogs.flatMap((e) => {
						let t = e.changeGroups?.filter((e) => e.abilitySlug === c(B).slug) ?? [];
						return t.length ? [{ ...e, changeGroups: t, changeCount: ie(t) }] : [];
					})
				: s.changelogs
		),
		et = C(() => ({
			related: s.changelogs.some((e) => e.related),
			maxedFirst: s.changelogs.some((e) => e.maxedFirst?.length),
			boughtBy: s.changelogs.some((e) => e.boughtBy?.length),
			buyTime: s.changelogs.some((e) => e.buyTime)
		})),
		tt = C(() =>
			s.changelogs.some((e) => e.changeGroups?.some((e) => e.previous?.some(Boolean)))
		),
		nt = C(() => s.changelogs.find((e) => e.stats)?.stats ?? null),
		rt = C(() => [
			...c(H).reduce((e, t) => {
				let n = ne(t.date),
					r = e.get(n);
				return (r ? r.push(t) : e.set(n, [t]), e);
			}, new Map())
		]),
		it = C(() => c(H).length >= 6),
		at = C(() =>
			c(rt).map(([e, t]) => [
				e,
				t.map((e) => ({ id: e.id, label: j(e.date), changeCount: e.changeCount }))
			])
		),
		U = C(() => ce[s.entity.type]),
		W = C(() => s.changelogs[0]),
		G = C(() => s.changelogs.at(-1)),
		K = C(() => {
			let e = s.changelogs.filter((e) => e.changeCount !== null),
				t = e.reduce((e, t) => e + (t.changeCount ?? 0), 0),
				n = s.changelogs.length - e.length;
			return { unknown: n, value: n === 0 ? String(t) : e.length ? `${t}+` : null };
		});
	var ot = $e(),
		st = m(ot);
	{
		let e = C(() =>
			se({
				title: s.seo.title,
				description: s.seo.description,
				canonical: ae(s.seo.path),
				image: s.seo.image,
				indexable: s.seo.indexable
			})
		);
		de(
			st,
			T(() => c(e))
		);
	}
	var ct = E(st, 2),
		lt = (e) => {
			{
				let t = C(() =>
					oe({
						entity: s.entity,
						parent: s.parent
							? { name: s.parent.name, path: `/hero/${s.parent.slug}` }
							: void 0,
						path: s.seo.path,
						title: s.seo.title,
						description: s.seo.description,
						image: s.seo.image,
						changelogs: s.changelogs
					})
				);
				fe(e, {
					get schema() {
						return c(t);
					}
				});
			}
		};
	x(ct, (e) => {
		s.seo.indexable && e(lt);
	});
	var ut = E(ct, 2),
		dt = v(ut),
		q = v(dt),
		J = v(q),
		ft = v(J);
	_e(ft, { class: `size-4` });
	var pt = E(ft);
	l(J);
	var Y = E(J, 2),
		X = v(Y),
		mt = v(X),
		ht = (t) => {
			var n = we();
			let r;
			(e(() => {
				(S(n, `src`, s.entity.image),
					g(
						n,
						1,
						`clip-corner-sm bg-card size-16 shrink-0 border sm:size-20 ${s.entity.type === `item` ? `object-contain p-2` : `object-cover`}`
					),
					(r = _(n, ``, r, { 'border-color': s.accent })));
			}),
				u(t, n));
		};
	x(mt, (e) => {
		s.entity.image && e(ht);
	});
	var gt = E(mt, 2),
		_t = v(gt),
		vt = (t) => {
			var n = Te(),
				r = v(n),
				i = w(r, !0);
			(l(n),
				e(() => {
					(S(r, `href`, `/hero/${s.parent.slug ?? ``}`), y(i, s.parent.name));
				}),
				u(t, n));
		};
	x(_t, (e) => {
		s.parent && e(vt);
	});
	var yt = E(_t, 2),
		bt = w(yt, !0),
		Z = E(yt, 2);
	let xt;
	var St = v(Z),
		Ct = w(St, !0),
		wt = E(St, 2);
	(D(wt, () => s.labelSuffix ?? t), l(Z));
	var Tt = E(Z, 2),
		Et = (t) => {
			var n = Ee(),
				r = v(n),
				i = E(r),
				a = v(i),
				o = w(a, !0);
			(l(i),
				l(n),
				e(
					(e, t, n) => {
						(y(r, `${c(W).changeCount === null ? `Last mentioned` : `Last changed`} `),
							S(i, `href`, e),
							S(a, `datetime`, t),
							y(o, n));
					},
					[() => A(c(W), s.entity), () => c(W).date.toISOString(), () => j(c(W).date)]
				),
				u(t, n));
		};
	(x(Tt, (e) => {
		c(W) && e(Et);
	}),
		l(gt),
		l(X));
	var Dt = E(X, 2),
		Ot = (e) => {
			var t = De(),
				n = v(t);
			(pe(n, {
				get context() {
					return s.about;
				},
				get name() {
					return s.entity.name;
				},
				variant: `header`
			}),
				l(t),
				u(e, t));
		};
	x(Dt, (e) => {
		s.about && e(Ot);
	});
	var Q = E(Dt, 2),
		kt = v(Q),
		At = v(kt);
	(i(), l(kt));
	var jt = E(kt, 2),
		Mt = v(jt),
		Nt = (t) => {
			var n = Oe(),
				r = E(v(n)),
				a = w(r, !0);
			(i(),
				l(n),
				e(
					(e, t) => {
						(S(r, `datetime`, e), y(a, t));
					},
					[() => c(G).date.toISOString(), () => j(c(G).date)]
				),
				u(t, n));
		};
	x(Mt, (e) => {
		c(G) && e(Nt);
	});
	var Pt = E(Mt, 2),
		Ft = (t) => {
			var n = ke(),
				r = w(n);
			(e(
				(e) =>
					y(
						r,
						`${c(K).unknown ?? ``}
								${e ?? ``} mention ${s.entity.name ?? ``} without
								a separate change count.`
					),
				[() => M(c(K).unknown, `patch`, `patches`)]
			),
				u(t, n));
		};
	x(Pt, (e) => {
		c(K).unknown > 0 && e(Ft);
	});
	var It = E(Pt, 2);
	te(It, {
		get patches() {
			return s.changelogs;
		},
		get entity() {
			return s.entity;
		}
	});
	var Lt = E(It, 2),
		Rt = (t) => {
			var n = je(),
				r = E(v(n), 2);
			(a(
				r,
				21,
				N,
				(e) => e.slug,
				(t, n) => {
					var r = o(),
						i = m(r),
						a = (t) => {
							var r = Ae(),
								i = v(r),
								a = w(i, !0),
								o = E(i, 2),
								s = w(o, !0);
							(l(r),
								e(() => {
									(y(a, c(n).name), y(s, c(n).description));
								}),
								u(t, r));
						};
					(x(i, (e) => {
						c(n).description && e(a);
					}),
						u(t, r));
				}
			),
				l(r),
				l(n),
				u(t, n));
		},
		zt = C(() => N().some((e) => e.description));
	(x(Lt, (e) => {
		c(zt) && e(Rt);
	}),
		l(jt),
		l(Q),
		l(Y));
	var Bt = E(Y, 2),
		Vt = (n) => {
			let r = (n, r = t) => {
				var i = Me(),
					a = m(i),
					o = E(a);
				(e(() => {
					(S(a, `src`, r().image), y(o, ` ${r().name ?? ``}`));
				}),
					u(n, i));
			};
			var i = Ie(),
				p = v(i),
				h = w(p, !0),
				_ = E(p, 2);
			(a(
				_,
				21,
				N,
				(e) => e.slug,
				(t, n) => {
					var i = o(),
						a = m(i),
						p = (t) => {
							var i = Ne();
							g(i, 1, f(R));
							var a = v(i);
							(r(a, () => c(n)),
								l(i),
								e(() => {
									(S(i, `href`, `/ability/${c(n).slug ?? ``}`),
										S(
											i,
											`aria-current`,
											c(n).slug === s.currentAbilitySlug ? `page` : void 0
										));
								}),
								u(t, i));
						},
						h = (t) => {
							var i = Pe();
							g(i, 1, f(R));
							var a = v(i);
							(r(a, () => c(n)),
								l(i),
								e(() => S(i, `aria-pressed`, c(B)?.slug === c(n).slug)),
								d(`click`, i, () => V(c(n).slug)),
								u(t, i));
						};
					(x(a, (e) => {
						c(I) ? e(p) : e(h, -1);
					}),
						u(t, i));
				}
			),
				l(_));
			var b = E(_, 2),
				C = (t) => {
					var n = Fe(),
						r = v(n),
						i = w(r);
					(l(n),
						e(() => {
							(S(r, `href`, `/ability/${c(B).slug ?? ``}`),
								y(i, `${c(B).name ?? ``} full history`));
						}),
						u(t, n));
				};
			(x(b, (e) => {
				c(B) && !c(I) && e(C);
			}),
				l(i),
				e(() => {
					(g(i, 1, `mb-6 ${c(I) ? `` : `js-only`}`),
						y(h, c(I) ? `Other abilities` : `Filter by ability`));
				}),
				u(n, i));
		};
	x(Bt, (e) => {
		N().length && e(Vt);
	});
	var Ht = E(Bt, 2),
		$ = v(Ht),
		Ut = E(v($), 2),
		Wt = w(Ut);
	l($);
	var Gt = E($, 2),
		Kt = (t) => {
			var n = Le(),
				r = v(n),
				a = E(v(r)),
				o = w(a, !0);
			(i(), l(r));
			var s = E(r, 2);
			(l(n), e(() => y(o, c(B).name)), d(`click`, s, () => V(c(B)?.slug ?? ``)), u(t, n));
		};
	x(Gt, (e) => {
		c(B) && e(Kt);
	});
	var qt = E(Gt, 2),
		Jt = (t) => {
			var n = Je(),
				i = m(n);
			a(
				i,
				17,
				() => c(rt),
				([e, t]) => e,
				(t, n) => {
					var i = C(() => b(c(n), 2));
					let o = () => c(i)[0],
						d = () => c(i)[1];
					var f = qe(),
						p = v(f),
						h = v(p),
						_ = E(h),
						T = w(_);
					l(p);
					var D = E(p, 2);
					(a(
						D,
						21,
						d,
						(e) => e.id,
						(t, n) => {
							var i = Ke(),
								o = v(i),
								d = v(o),
								f = v(d),
								p = v(f),
								h = w(p, !0);
							(l(f), l(d));
							var _ = E(d, 2),
								b = w(_, !0);
							l(o);
							var T = E(o, 2),
								D = (t) => {
									var i = Ue();
									(a(
										i,
										21,
										() => c(n).changeGroups,
										r,
										(t, n) => {
											let i = C(() => be(c(n)));
											var o = He(),
												s = v(o),
												d = (t) => {
													var r = ze(),
														i = v(r),
														a = (t) => {
															var r = Re();
															(e(() => S(r, `src`, c(n).icon)), u(t, r));
														};
													x(i, (e) => {
														c(n).icon && e(a);
													});
													var o = E(i, 2),
														s = w(o, !0);
													(l(r), e(() => y(s, c(n).ability)), u(t, r));
												};
											x(s, (e) => {
												c(n).ability && e(d);
											});
											var f = E(s, 2);
											(a(
												f,
												21,
												() => c(n).bullets,
												r,
												(t, r, i) => {
													var a = Be(),
														o = v(a),
														s = E(o),
														d = (e) => {
															let t = C(() => c(n).previous[i]);
															he(e, {
																get previous() {
																	return c(t);
																}
															});
														};
													(x(s, (e) => {
														c(n).previous?.[i] && e(d);
													}),
														l(a),
														e(() => y(o, `${c(r) ?? ``} `)),
														u(t, a));
												}
											),
												l(f));
											var p = E(f, 2),
												m = (e) => {
													var t = Ve(),
														r = v(t);
													(pe(r, {
														get context() {
															return c(i);
														},
														get name() {
															return c(n).ability;
														},
														variant: `group`,
														get historyHref() {
															return `/ability/${c(n).abilitySlug ?? ``}`;
														}
													}),
														l(t),
														u(e, t));
												};
											(x(p, (e) => {
												c(i) && c(n).ability && e(m);
											}),
												l(o),
												u(t, o));
										}
									),
										l(i),
										e(() => g(i, 1, `max-w-[72ch] ${c(xe) ? `space-y-5` : `space-y-4`}`)),
										u(t, i));
								},
								O = (t) => {
									var n = We(),
										r = w(n);
									(e(() =>
										y(
											r,
											`${s.entity.name ?? ``} was mentioned in this patch. See the full notes for context.`
										)
									),
										u(t, n));
								};
							x(T, (e) => {
								c(n).changeGroups?.length ? e(D) : e(O, -1);
							});
							var k = E(T, 2),
								te = (e) => {
									let t = C(() => ({
										stats: c(n).stats,
										entryYear: c(n).date.getUTCFullYear(),
										open: c(n).impact?.closed === !1
									}));
									ge(e, {
										children: (e, r) => {
											var i = Ge(),
												a = m(i),
												o = (e) => {
													P(e, {
														kind: `maxed-first`,
														get subject() {
															return s.entity.name;
														},
														get rows() {
															return c(n).maxedFirst;
														},
														get windows() {
															return c(t);
														}
													});
												};
											x(a, (e) => {
												c(n).maxedFirst?.length && e(o);
											});
											var l = E(a, 2),
												d = (e) => {
													Ce(e, {
														get related() {
															return c(n).related;
														},
														get heroName() {
															return s.entity.name;
														},
														get windows() {
															return c(t);
														}
													});
												};
											x(l, (e) => {
												c(n).related && e(d);
											});
											var f = E(l, 2),
												p = (e) => {
													P(e, {
														kind: `bought-by`,
														get subject() {
															return s.entity.name;
														},
														get rows() {
															return c(n).boughtBy;
														},
														get windows() {
															return c(t);
														}
													});
												};
											x(f, (e) => {
												c(n).boughtBy?.length && e(p);
											});
											var h = E(f, 2),
												g = (e) => {
													me(e, {
														get item() {
															return s.entity.name;
														},
														get time() {
															return c(n).buyTime;
														},
														get windows() {
															return c(t);
														}
													});
												};
											(x(h, (e) => {
												c(n).buyTime && e(g);
											}),
												u(e, i));
										},
										$$slots: { default: !0 }
									});
								};
							x(k, (e) => {
								c(n).stats &&
									(c(n).maxedFirst?.length ||
										c(n).related ||
										c(n).boughtBy?.length ||
										c(n).buyTime) &&
									e(te);
							});
							var ne = E(k, 2),
								M = v(ne),
								re = E(v(M));
							(le(re, { class: `size-3.5` }),
								l(M),
								l(ne),
								l(i),
								e(
									(e, t, r, a, o) => {
										(S(i, `id`, `history-${c(n).id ?? ``}`),
											S(f, `href`, e),
											S(p, `datetime`, t),
											y(h, r),
											y(b, a),
											S(M, `href`, o));
									},
									[
										() => A(c(n), s.entity),
										() => c(n).date.toISOString(),
										() => j(c(n).date),
										() => ee(c(n).changeCount),
										() => A(c(n), s.entity)
									]
								),
								u(t, i));
						}
					),
						l(D),
						l(f),
						e(
							(e) => {
								(S(f, `aria-labelledby`, `year-${o() ?? ``}`),
									S(p, `id`, `year-${o() ?? ``}`),
									y(h, `${o() ?? ``} `),
									y(
										T,
										`${d().length ?? ``}
									${e ?? ``}`
									));
							},
							[() => M(d().length, `patch`, `patches`)]
						),
						u(t, f));
				}
			);
			var o = E(i, 2);
			{
				let e = C(() => (c(L) === null ? [] : [c(L)])),
					t = C(() => ({ ...c(et), details: c(L) !== null, previous: c(tt) }));
				ve(o, {
					get stats() {
						return c(nt);
					},
					shipped: `a patch`,
					get contextVersions() {
						return c(e);
					},
					get has() {
						return c(t);
					}
				});
			}
			u(t, n);
		},
		Yt = (t) => {
			var n = Ze(),
				r = v(n);
			ue(r, {
				tlSize: `1.5rem`,
				brSize: `1.25rem`,
				tlColor: `bg-muted-foreground/30`,
				brColor: `bg-muted-foreground/20`,
				thickness: `2px`
			});
			var i = E(r, 2),
				a = w(i),
				o = E(i, 2),
				f = v(o),
				p = (t) => {
					var n = k();
					(e(() =>
						y(
							n,
							`${s.entity.name ?? ``} has changes in the archive, but none of them touch this ability.`
						)
					),
						u(t, n));
				},
				m = (t) => {
					var n = k();
					(e(() =>
						y(
							n,
							`${s.entity.name ?? ``} has not appeared in any patch notes yet. It shows up here the
								first time it is changed.`
						)
					),
						u(t, n));
				};
			(x(f, (e) => {
				c(B) ? e(p) : e(m, -1);
			}),
				l(o));
			var h = E(o, 2),
				g = (t) => {
					var n = Ye(),
						r = w(n);
					(e(() => y(r, `Show all ${s.entity.name ?? ``} changes`)),
						d(`click`, n, () => V(c(B)?.slug ?? ``)),
						u(t, n));
				},
				_ = (t) => {
					var n = Xe(),
						r = v(n),
						i = E(r);
					(le(i, { class: `size-3.5` }),
						l(n),
						e(
							(e) => {
								(S(n, `href`, c(U).path), y(r, `Browse all ${e ?? ``} `));
							},
							[() => c(U).label.toLowerCase()]
						),
						u(t, n));
				};
			(x(h, (e) => {
				c(B) ? e(g) : e(_, -1);
			}),
				l(n),
				e(() => y(a, `Nothing recorded for ${c(B)?.name ?? s.entity.name ?? ``}`)),
				u(t, n));
		};
	(x(qt, (e) => {
		c(H).length ? e(Jt) : e(Yt, -1);
	}),
		l(Ht),
		l(q));
	var Xt = E(q, 2),
		Zt = (e) => {
			var t = Qe(),
				n = v(t);
			(Se(v(n), {
				get years() {
					return c(at);
				}
			}),
				l(n),
				l(t),
				u(e, t));
		};
	(x(Xt, (e) => {
		c(it) && e(Zt);
	}),
		l(dt),
		l(ut),
		e(
			(e, t, n) => {
				(S(J, `href`, c(U).path),
					y(pt, ` Back to ${e ?? ``}`),
					y(bt, s.entity.name),
					(xt = _(Z, ``, xt, { color: s.accent })),
					y(Ct, s.label),
					g(Q, 1, f(s.about ? `` : `mt-3`)),
					y(At, `${t ?? ``} `),
					y(
						Wt,
						`${c(H).length ?? ``}
						${n ?? ``}`
					));
			},
			[
				() => c(U).label.toLowerCase(),
				() =>
					`${s.changelogs.length} ${M(s.changelogs.length, `patch`, `patches`)}${c(K).value === null ? `` : ` · ${c(K).value} changes`}`,
				() => M(c(H).length, `patch`, `patches`)
			]
		),
		u(n, ot),
		h());
}
n([`click`]);
export { H as t };
