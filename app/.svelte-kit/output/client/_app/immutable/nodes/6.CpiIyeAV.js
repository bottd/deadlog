import { K as e, bt as t, mt as n, xt as r } from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { t as i } from '../chunks/CrkVz1YB.js';
function a(a, o) {
	r(o, !0);
	let s = n(() => o.data.hero),
		c = n(() => (e(s).heroType ? `var(--type-${e(s).heroType})` : `var(--signal)`)),
		l = n(() => ({ type: `hero`, name: e(s).name, image: e(s).image }));
	{
		let t = n(() => (e(s).heroType ? `${e(s).heroType} hero` : `Hero profile`)),
			r = n(() => ({
				path: `/hero/${e(s).slug}`,
				title: o.data.title,
				description: o.data.description,
				image: o.data.image,
				indexable: e(s).isReleased
			}));
		i(a, {
			get entity() {
				return e(l);
			},
			get accent() {
				return e(c);
			},
			get changelogs() {
				return o.data.changelogs;
			},
			get abilities() {
				return o.data.abilities;
			},
			get contexts() {
				return o.data.contexts;
			},
			get label() {
				return e(t);
			},
			get seo() {
				return e(r);
			}
		});
	}
	t();
}
export { a as component };
