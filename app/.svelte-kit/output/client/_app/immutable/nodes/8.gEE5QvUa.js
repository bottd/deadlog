import {
	$ as e,
	F as t,
	I as n,
	K as r,
	P as i,
	at as a,
	bt as o,
	j as s,
	k as c,
	mt as l,
	ot as u,
	xt as d
} from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { t as f } from '../chunks/CrkVz1YB.js';
var p = {
		weapon: { label: `Weapon item`, accent: `var(--item-weapon)` },
		vitality: { label: `Vitality item`, accent: `var(--item-vitality)` },
		spirit: { label: `Spirit item`, accent: `var(--item-spirit)` }
	},
	m = { label: `Item`, accent: `var(--signal)` },
	h = n(`<span text="muted-foreground" kicker-xs=""> </span>`);
function g(n, g) {
	d(g, !0);
	let _ = l(() => g.data.item),
		v = l(() => (r(_).category ? p[r(_).category] : m)),
		y = l(() => ({ type: `item`, name: r(_).name, image: r(_).image }));
	{
		let o = (n) => {
				var o = t(),
					l = a(o),
					d = (t) => {
						var n = h(),
							a = u(n);
						(e(() => s(a, `/ Tier ${r(_).tier ?? ``}`)), i(t, n));
					};
				(c(l, (e) => {
					r(_).tier && e(d);
				}),
					i(n, o));
			},
			d = l(() =>
				r(_).isReleased ? r(v).label : `Historical ${r(v).label.toLowerCase()}`
			),
			p = l(() => ({
				path: `/item/${r(_).slug}`,
				title: g.data.title,
				description: g.data.description,
				image: g.data.image,
				indexable: r(_).isReleased
			}));
		f(n, {
			get entity() {
				return r(y);
			},
			get changelogs() {
				return g.data.changelogs;
			},
			get about() {
				return g.data.about;
			},
			get accent() {
				return r(v).accent;
			},
			get label() {
				return r(d);
			},
			get seo() {
				return r(p);
			},
			labelSuffix: o,
			$$slots: { labelSuffix: !0 }
		});
	}
	o();
}
export { g as component };
