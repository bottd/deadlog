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
	l(e, { type: `item`, names: [`Veil Walker`] });
}
var d = {
		title: `09-19-2024 Update`,
		thread_id: `31166`,
		published: `2024-09-19T17:58:06-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Replaced the recent soul duplication hotfix with new behavior. Pre 10 min, lanes now always split orbs when there are more heroes than the assigned participants for that lane (3+ people in a dual lane, 2+ people in a solo). Previously it only split with 3+ people regardless of the lane, which is what allowed soul abuses when dipping into a solo lane. Private lobbies can now assign players to duo and solo lanes Fixed some recent bugs with Vindicta Flight that could cause some large bursts in a direction Fixed being able to shoot while using Ethereal Shift and flying with Vindicta Veil Walker Fire Rate reduced from 30% to 20%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-18`, to: `2024-09-20` },
			after: { from: `2024-09-21`, to: `2024-09-26` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-18`, to: `2024-09-20` },
			after: { from: `2024-09-21`, to: `2024-09-26` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }],
		related: []
	},
	m = e(`<!> <!> <div><!> <!></div>`, 1);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Replaced the recent soul duplication hotfix with new behavior. Pre 10 min, lanes now always split orbs when there are more heroes than the assigned participants for that lane (3+ people in a dual lane, 2+ people in a solo). Previously it only split with 3+ people regardless of the lane, which is what allowed soul abuses when dipping into a solo lane.</li><li>Private lobbies can now assign players to duo and solo lanes</li><li>Fixed some recent bugs with Vindicta Flight that could cause some large bursts in a direction</li><li>Fixed being able to shoot while using Ethereal Shift and flying with Vindicta</li></ul>
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `item veil-walker`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Fire Rate reduced from 30% to 20%</li></ul>
`
	);
	var g = s(h, 2);
	(c(g, { kind: `item`, name: `Veil Walker`, ability: null }), t(p), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
