import { K as e, Mt as t, bt as n, mt as r, xt as i } from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { r as a } from '../chunks/DQOGthuy.js';
import { n as o, t as s } from '../chunks/SOIWy3ct.js';
var c = t({ prerender: () => !0 });
function l(t, c) {
	i(c, !0);
	let l = r(() =>
		o(c.data.items ?? []).map((e) => ({
			id: e.id,
			name: e.name,
			href: `/item/${e.slug}`,
			image: a(e),
			subtitle: e.category,
			category: e.category
		}))
	);
	(s(t, {
		kind: `item`,
		heading: `Items`,
		lede: `Find an item to trace its balance changes across the patch archive.`,
		get entries() {
			return e(l);
		},
		seo: {
			title: `Deadlock Items: Balance Change History | Deadlog`,
			description: `Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.`
		}
	}),
		n());
}
export { l as component, c as universal };
