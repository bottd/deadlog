import { K as e, Mt as t, bt as n, mt as r, xt as i } from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { n as a } from '../chunks/DQOGthuy.js';
import { n as o, t as s } from '../chunks/SOIWy3ct.js';
var c = t({ prerender: () => !0 });
function l(t, c) {
	i(c, !0);
	let l = r(() =>
		o(c.data.heroes ?? []).map((e) => ({
			id: e.id,
			name: e.name,
			href: `/hero/${e.slug}`,
			image: a(e),
			subtitle: e.heroType
		}))
	);
	(s(t, {
		kind: `hero`,
		heading: `Heroes`,
		lede: `Find a hero to read every recorded buff, nerf, and balance change.`,
		get entries() {
			return e(l);
		},
		seo: {
			title: `Deadlock Heroes: Balance Change History | Deadlog`,
			description: `Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.`
		}
	}),
		n());
}
export { l as component, c as universal };
