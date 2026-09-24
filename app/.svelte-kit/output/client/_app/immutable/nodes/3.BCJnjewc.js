import { K as e, bt as t, mt as n, xt as r } from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { t as i } from '../chunks/CrkVz1YB.js';
function a(a, o) {
	r(o, !0);
	let s = n(() => o.data.ability),
		c = n(() => o.data.hero),
		l = n(() => (e(c).heroType ? `var(--type-${e(c).heroType})` : `var(--signal)`)),
		u = n(() => ({ type: `ability`, name: e(s).name, image: e(s).image }));
	{
		let t = n(() => ({ name: e(c).name, slug: e(c).slug, image: e(c).image })),
			r = n(() => `${e(c).name} ability`),
			d = n(() => ({
				path: `/ability/${e(s).slug}`,
				title: o.data.title,
				description: o.data.description,
				image: o.data.image,
				indexable: !0
			}));
		i(a, {
			get entity() {
				return e(u);
			},
			get accent() {
				return e(l);
			},
			get parent() {
				return e(t);
			},
			get changelogs() {
				return o.data.changelogs;
			},
			get abilities() {
				return o.data.abilities;
			},
			get about() {
				return o.data.about;
			},
			get currentAbilitySlug() {
				return e(s).slug;
			},
			get label() {
				return e(r);
			},
			get seo() {
				return e(d);
			}
		});
	}
	t();
}
export { a as component };
