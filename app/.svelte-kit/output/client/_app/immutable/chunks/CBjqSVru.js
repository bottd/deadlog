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
	l(e, { type: `hero`, names: [`Wraith`] });
}
function d(e) {
	l(e, { type: `item`, names: [`Shadow Weave`] });
}
var f = {
		title: `10-07-2024 Update`,
		thread_id: `36441`,
		published: `2024-10-07T12:45:09-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Fixed various cases where you could target/select units behind walls with abilities (like Yamato's Flying Strike) Wraith Card Trick Spirit scaling reduced from 1.5 to 1.2 Shadow Weave Ambush Fire Rate reduced from +40% to +30%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-04`, to: `2024-10-07` },
			after: { from: `2024-10-08`, to: `2024-10-10` }
		}
	},
	p = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick Spirit`, id: `card-trick-spirit` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-04`, to: `2024-10-07` },
			after: { from: `2024-10-08`, to: `2024-10-10` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` }
		],
		related: []
	},
	h = e(`<!> <!> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div>`, 1);
function g(e) {
	var l = h(),
		f = i(l);
	r(
		f,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Fixed various cases where you could target/select units behind walls with abilities (like Yamato&#x27;s Flying Strike)</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var p = s(f, 2);
	u(p, {});
	var m = s(p, 2);
	a(m, 1, `hero wraith`);
	var g = o(m);
	r(
		g,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var _ = s(g, 2);
	a(_, 1, `ability card-trick-spirit`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Spirit change history</a></p>
<h4 id="card-trick-spirit"><a href="/ability/card-trick">Card Trick Spirit</a></h4>
<ul><li>Card Trick Spirit scaling reduced from 1.5 to 1.2</li></ul>
`
	);
	var y = s(v, 2);
	(c(y, { kind: `hero`, name: `Wraith`, ability: `Card Trick Spirit` }), t(_), t(m));
	var b = s(m, 2);
	r(
		b,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var x = s(b, 2);
	d(x, {});
	var S = s(x, 2);
	a(S, 1, `item shadow-weave`);
	var C = o(S);
	r(
		C,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
<ul><li>Ambush Fire Rate reduced from +40% to +30%</li></ul>
`
	);
	var w = s(C, 2);
	(c(w, { kind: `item`, name: `Shadow Weave`, ability: null }), t(S), n(e, l));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
