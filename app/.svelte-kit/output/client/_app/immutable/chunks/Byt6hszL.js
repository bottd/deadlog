import {
	$ as e,
	Dt as t,
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
	mt as p,
	o as m,
	ot as h,
	s as g,
	st as _,
	xt as v
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { t as y } from './CfafoLPj.js';
import { s as b } from './DGUGVeMZ.js';
import { a as x } from './bGGqeocG.js';
var S = new Set([`$$slots`, `$$events`, `$$legacy`]);
function C(e, t) {
	let n = m(t, S),
		r = {
			name: `arrow-left`,
			size: 24,
			node: [
				[`path`, { d: `m12 19-7-7 7-7` }],
				[`path`, { d: `M19 12H5` }]
			]
		};
	y(
		e,
		g(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var w = r(
		`<p>These are observed shares, before and after the patch. Other changes land in the
				same days, so a difference is not the effect of any one line.</p> <p> </p>`,
		1
	),
	T = r(`<p> </p>`),
	E = r(
		`<p>Bought at is the average game time at which the item's buyers bought it.</p>`
	),
	D = r(`<p>Previous recorded change links connect verified, explicit changes to the same
				property. They cover part of the archive, not a complete history of game values.</p>`),
	O = r(
		`<section id="method" aria-labelledby="method-heading" class="text-muted-foreground border-subtle mt-8 max-w-[72ch] scroll-mt-44 space-y-2 border-t pt-4 text-sm leading-relaxed"><h2 id="method-heading" class="text-foreground text-base font-semibold"> </h2> <!> <!> <!> <!> <!> <!> <!> <p> <a href="https://deadlock-api.com" rel="noopener" class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline">Deadlock API</a>.</p></section>`
	);
function k(r, m) {
	v(m, !0);
	let g = s(m, `shipped`, 3, `this patch`),
		y = s(m, `contextVersions`, 19, () => []),
		S = b.toLocaleString(`en-US`),
		C = p(() => !!(m.has.related || m.has.maxedFirst || m.has.boughtBy || m.has.buyTime)),
		k = p(() => i(C) || !!m.has.details || !!m.has.previous);
	var A = n(),
		j = c(A),
		M = (n) => {
			var r = O(),
				s = u(r),
				l = h(s, !0),
				p = _(s, 2),
				v = (t) => {
					var n = w(),
						r = _(c(n), 2),
						i = h(r, !0);
					(e(
						(e) => d(i, e),
						[
							() =>
								`Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to 14 days; "so far" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches.${m.stats ? ` Last collected ${x(new Date(m.stats.collectedAt))}.` : ``}`
						]
					),
						o(t, n));
				};
			f(p, (e) => {
				i(C) && e(v);
			});
			var b = _(p, 2),
				k = (t) => {
					var n = T(),
						r = h(n);
					(e(() =>
						d(
							r,
							`Maxed first is the share of a hero's matches in which each ability was the first
				to reach its third upgrade. Each side needs ${S ?? ``} matches.`
						)
					),
						o(t, n));
				};
			f(b, (e) => {
				m.has.maxedFirst && e(k);
			});
			var A = _(b, 2),
				j = (t) => {
					var n = T(),
						r = h(n);
					(e(() =>
						d(
							r,
							`Also changed lists up to three items changed in the same patch, ranked by the
				share of the hero's player-matches in which each was bought before the patch. It
				needs
				${S ?? ``} hero appearances and 100 buyers. These are reading links,
				not build recommendations.`
						)
					),
						o(t, n));
				};
			f(A, (e) => {
				m.has.related && e(j);
			});
			var M = _(A, 2),
				N = (t) => {
					var n = T(),
						r = h(n);
					(e(() =>
						d(
							r,
							`Bought most by lists up to three heroes whose players bought the item most often
				before the patch, as a share of each hero's player-matches. Each hero needs
				${S ?? ``} appearances and 100 buyers.`
						)
					),
						o(t, n));
				};
			f(M, (e) => {
				m.has.boughtBy && e(N);
			});
			var P = _(M, 2),
				F = (e) => {
					var t = E();
					o(e, t);
				};
			f(P, (e) => {
				m.has.buyTime && e(F);
			});
			var I = _(P, 2),
				L = (t) => {
					var n = T(),
						r = h(n, !0);
					(e(
						(e) => d(r, e),
						[
							() =>
								`Current details describe ${y().length ? `game client ${y().join(`, `)}` : `the currently recorded game assets`}, not the game as it was when ${g()} shipped. Base values exclude upgrades and scaling.`
						]
					),
						o(t, n));
				};
			f(I, (e) => {
				m.has.details && e(L);
			});
			var R = _(I, 2),
				z = (e) => {
					var t = D();
					o(e, t);
				};
			f(R, (e) => {
				m.has.previous && e(z);
			});
			var B = _(R, 2),
				V = u(B);
			(t(2),
				a(B),
				a(r),
				e(() => {
					(d(l, i(C) ? `How these shares are measured` : `Reading context and sources`),
						d(
							V,
							`${i(C) ? `Match data` : m.has.details ? `Current details` : `Entity data`} from the `
						));
				}),
				o(n, r));
		};
	(f(j, (e) => {
		i(k) && e(M);
	}),
		o(r, A),
		l());
}
export { C as n, k as t };
