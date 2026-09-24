import {
	I as e,
	Ot as t,
	P as n,
	T as r,
	at as i,
	g as a,
	it as o,
	st as s
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a as c, n as l } from './vWaTnxY_.js';
function u(e) {
	l(e, { type: `item`, names: [`Return Fire`] });
}
var d = {
		title: `06-01-2024 Update`,
		thread_id: `3004`,
		published: `2024-06-01T13:34:03-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Return Fire No longer applies procs Bullet damage return increased from 60% to 70%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-05-31`, to: `2024-06-01` },
			after: { from: `2024-06-02`, to: `2024-06-06` }
		}
	},
	f = [
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Return Fire`, id: `return-fire` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-05-31`, to: `2024-06-01` },
			after: { from: `2024-06-02`, to: `2024-06-06` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `item`, name: `Return Fire`, id: `return-fire` }],
		related: []
	},
	m = e(`<!> <!> <div><!> <!></div>`, 1);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `item return-fire`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
<ul><li>No longer applies procs</li><li>Bullet damage return increased from 60% to 70%</li></ul>
`
	);
	var g = s(h, 2);
	(c(g, { kind: `item`, name: `Return Fire`, ability: null }), t(p), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
