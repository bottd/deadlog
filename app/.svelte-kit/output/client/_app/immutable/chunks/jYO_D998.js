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
	l(e, { type: `item`, names: [`Divine Barrier`, `Restorative Locket`] });
}
var d = {
		title: `03-16-2025 Update`,
		thread_id: `58880`,
		published: `2025-03-16T17:30:59-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Neutral bounty increased by 5% Sinner's Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min) Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday) Restorative Locket No longer grants +10% Spirit Resist Divine Barrier Shields reduced from 260 to 230`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-03-14`, to: `2025-03-17` },
			after: { from: `2025-03-18`, to: `2025-03-20` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-03-14`, to: `2025-03-17` },
			after: { from: `2025-03-18`, to: `2025-03-20` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` }
		],
		related: []
	},
	m = e(`<!> <!> <div><!> <!></div> <div><!> <!></div>`, 1);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Neutral bounty increased by 5%</li><li>Sinner&#x27;s Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min)</li><li>Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday)</li></ul>
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `item divine-barrier`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
<ul><li>Shields reduced from 260 to 230</li></ul>
`
	);
	var g = s(h, 2);
	(c(g, { kind: `item`, name: `Divine Barrier`, ability: null }), t(p));
	var _ = s(p, 2);
	a(_, 1, `item restorative-locket`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>No longer grants +10% Spirit Resist</li></ul>
`
	);
	var y = s(v, 2);
	(c(y, { kind: `item`, name: `Restorative Locket`, ability: null }), t(_), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
