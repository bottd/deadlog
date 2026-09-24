const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.CGTOe4H-.js',
			'../chunks/CSrylp8p.js',
			'../chunks/xihTtKlq.js',
			'../chunks/B7jpYZsL.js',
			'../chunks/CfafoLPj.js',
			'../chunks/Cips59vp.js',
			'../chunks/1gFtTxxl.js',
			'../chunks/DQOGthuy.js',
			'../chunks/bGGqeocG.js',
			'../chunks/BkQs74dv.js',
			'../chunks/BZA8fNAE.js',
			'../assets/0.BOofR7gy.css',
			'../nodes/1.C_4-ok8v.js',
			'../chunks/C4XnHIoE.js',
			'../chunks/dp17nrVd.js',
			'../nodes/2.CLD00a-x.js',
			'../chunks/DGUGVeMZ.js',
			'../assets/changelog.BsxzltK7.css',
			'../nodes/3.BCJnjewc.js',
			'../chunks/CrkVz1YB.js',
			'../chunks/CBNvjb0G.js',
			'../assets/StatsBand.a3-fBLhT.css',
			'../chunks/Byt6hszL.js',
			'../chunks/BxaZbZlY.js',
			'../assets/EntityChangelogPage.BK64ZZpq.css',
			'../nodes/4.Bk5pFhuT.js',
			'../nodes/5.cKGfBggt.js',
			'../chunks/uBIymjUX.js',
			'../chunks/C8Y4yTRY.js',
			'../nodes/6.CpiIyeAV.js',
			'../nodes/7.BG_mizjQ.js',
			'../chunks/SOIWy3ct.js',
			'../nodes/8.gEE5QvUa.js',
			'../nodes/9.CiUqG1yg.js'
		])
) => i.map((i) => d[i]);
import {
	$ as e,
	C as t,
	F as n,
	I as r,
	J as i,
	K as a,
	Ot as o,
	P as s,
	a as c,
	at as l,
	bt as u,
	et as d,
	ft as f,
	i as p,
	it as m,
	j as h,
	k as g,
	l as _,
	mt as v,
	r as y,
	st as b,
	tt as x,
	ut as S,
	xt as C,
	z as w
} from '../chunks/CSrylp8p.js';
import { t as T } from '../chunks/uBIymjUX.js';
import '../chunks/xihTtKlq.js';
var E = globalThis.__sveltekit_12mnjzq.env;
async function D() {
	let e = E.PUBLIC_COUNTERSCALE_SITE_ID,
		t = E.PUBLIC_COUNTERSCALE_REPORTER_URL;
	if (!e || !t) return;
	let { init: n } = await T(
		async () => {
			let { init: e } = await import(`../chunks/CEztEZTG.js`);
			return { init: e };
		},
		[],
		import.meta.url
	);
	n({ siteId: e, reporterUrl: t });
}
var O = {},
	k = r(
		`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>`
	),
	A = r(`<!> <!>`, 1);
function j(r, p) {
	C(p, !0);
	let T = c(p, `components`, 23, () => []),
		E = c(p, `data_0`, 3, null),
		D = c(p, `data_1`, 3, null);
	(x(() => p.stores.page.set(p.page)),
		d(() => {
			(p.stores, p.page, p.constructors, T(), p.form, E(), D(), p.stores.page.notify());
		}));
	let O = f(!1),
		j = f(!1),
		M = f(null);
	y(() => {
		let e = p.stores.page.subscribe(() => {
			a(O) &&
				(S(j, !0),
				i().then(() => {
					S(M, document.title || `untitled page`, !0);
				}));
		});
		return (S(O, !0), e);
	});
	let N = v(() => p.constructors[1]);
	var P = A(),
		F = l(P),
		I = (e) => {
			let r = v(() => p.constructors[0]);
			var i = n(),
				o = l(i);
			(t(
				o,
				() => a(r),
				(e, r) => {
					_(
						r(e, {
							get data() {
								return E();
							},
							get form() {
								return p.form;
							},
							get params() {
								return p.page.params;
							},
							children: (e, r) => {
								var i = n(),
									o = l(i);
								(t(
									o,
									() => a(N),
									(e, t) => {
										_(
											t(e, {
												get data() {
													return D();
												},
												get form() {
													return p.form;
												},
												get params() {
													return p.page.params;
												}
											}),
											(e) => (T()[1] = e),
											() => T()?.[1]
										);
									}
								),
									s(e, i));
							},
							$$slots: { default: !0 }
						}),
						(e) => (T()[0] = e),
						() => T()?.[0]
					);
				}
			),
				s(e, i));
		},
		L = (e) => {
			let r = v(() => p.constructors[0]);
			var i = n(),
				o = l(i);
			(t(
				o,
				() => a(r),
				(e, t) => {
					_(
						t(e, {
							get data() {
								return E();
							},
							get form() {
								return p.form;
							},
							get params() {
								return p.page.params;
							}
						}),
						(e) => (T()[0] = e),
						() => T()?.[0]
					);
				}
			),
				s(e, i));
		};
	g(F, (e) => {
		p.constructors[1] ? e(I) : e(L, -1);
	});
	var R = b(F, 2),
		z = (t) => {
			var n = k(),
				r = m(n),
				i = (t) => {
					var n = w();
					(e(() => h(n, a(M))), s(t, n));
				};
			(g(r, (e) => {
				a(j) && e(i);
			}),
				o(n),
				s(t, n));
		};
	(g(R, (e) => {
		a(O) && e(z);
	}),
		s(r, P),
		u());
}
var M = p(j),
	N = [
		() =>
			T(
				() => import(`../nodes/0.CGTOe4H-.js`),
				__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/1.C_4-ok8v.js`),
				__vite__mapDeps([12, 1, 2, 4, 5, 9, 10, 13, 14]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/2.CLD00a-x.js`),
				__vite__mapDeps([15, 1, 2, 6, 5, 4, 7, 8, 9, 10, 16, 13, 17, 14]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/3.BCJnjewc.js`),
				__vite__mapDeps([
					18, 1, 2, 19, 6, 5, 4, 7, 8, 9, 10, 16, 13, 17, 14, 20, 21, 22, 23, 24
				]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/4.Bk5pFhuT.js`),
				__vite__mapDeps([25, 1, 2, 8, 9, 14]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/5.cKGfBggt.js`),
				__vite__mapDeps([26, 1, 5, 27, 2, 4, 6, 7, 8, 9, 10, 16, 13, 17, 14, 22, 28]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/6.CpiIyeAV.js`),
				__vite__mapDeps([
					29, 1, 2, 19, 6, 5, 4, 7, 8, 9, 10, 16, 13, 17, 14, 20, 21, 22, 23, 24
				]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/7.BG_mizjQ.js`),
				__vite__mapDeps([30, 1, 2, 7, 5, 4, 8, 31, 9, 14, 23]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/8.gEE5QvUa.js`),
				__vite__mapDeps([
					32, 1, 2, 19, 6, 5, 4, 7, 8, 9, 10, 16, 13, 17, 14, 20, 21, 22, 23, 24
				]),
				import.meta.url
			),
		() =>
			T(
				() => import(`../nodes/9.CiUqG1yg.js`),
				__vite__mapDeps([33, 1, 2, 7, 5, 4, 8, 31, 9, 14, 23]),
				import.meta.url
			)
	],
	P = [0],
	F = {
		'/': [-3],
		'/ability/[slug]': [-4],
		'/archive': [-5],
		'/change/[...slug]': [-6],
		'/heroes': [7],
		'/hero/[slug]': [-7],
		'/items': [9],
		'/item/[slug]': [-9]
	},
	I = {
		handleError: ({ error: e }) => {
			console.error(e);
		},
		init: D,
		reroute: () => {},
		transport: {}
	},
	L = Object.fromEntries(Object.entries(I.transport).map(([e, t]) => [e, t.decode])),
	R = Object.fromEntries(Object.entries(I.transport).map(([e, t]) => [e, t.encode])),
	z = !1,
	B = (e, t) => L[e](t),
	V = () =>
		T(() => import(`../chunks/Bjy-W4x2.js`).then((e) => e.default), [], import.meta.url);
export {
	B as decode,
	L as decoders,
	F as dictionary,
	R as encoders,
	V as get_error_template,
	z as hash,
	I as hooks,
	O as matchers,
	N as nodes,
	M as root,
	P as server_loads
};
