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
	l(e, { type: `item`, names: [`Decay`] });
}
var d = {
		title: `05-24-2024 Update`,
		thread_id: `1359`,
		published: `2024-05-24T16:58:19-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Withering Whip: No longer has +1 Stamina Withering Whip: Duration reduced from 3.5s to 3s Withering Whip: Bullet Resist Reduction reduced from -20% to -14% Decay Cast range reduced from 30m to 15m`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: null, to: null },
			after: { from: `2024-05-25`, to: `2024-05-30` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Decay`, id: `decay` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: null,
			after: { from: `2024-05-25`, to: `2024-05-30` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `item`, name: `Decay`, id: `decay` }],
		related: []
	},
	m = e(`<!> <!> <div><!> <!></div>`, 1);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Withering Whip: No longer has +1 Stamina</li><li>Withering Whip: Duration reduced from 3.5s to 3s</li><li>Withering Whip: Bullet Resist Reduction reduced from -20% to -14%</li></ul>
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `item decay`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
<ul><li>Cast range reduced from 30m to 15m</li></ul>
`
	);
	var g = s(h, 2);
	(c(g, { kind: `item`, name: `Decay`, ability: null }), t(p), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
