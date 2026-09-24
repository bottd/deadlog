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
/* empty css        */ import { a as c, i as l, n as u } from './vWaTnxY_.js';
function d(e) {
	u(e, { type: `hero`, names: [`Yamato`] });
}
function f(e) {
	u(e, { type: `item`, names: [`Melee Charge`, `Spirit Strike`, `Veil Walker`] });
}
var p = {
		title: `06-23-2024 Update`,
		thread_id: `7705`,
		published: `2024-06-23T16:23:36-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `There is no longer a reinforcement trooper wave after Guardians and Walkers die Yamato Shadow Transformation now causes you to be unable to die during the buff Spirit Strike Melee damage reduced from 20% to 15% Melee Charge No longer grants +15% Melee Damage Veil Walker Bullet Shield reduced from +200 to +150 Shield restore now takes 5s to fully regen Cooldown increased from 20s to 25s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-21`, to: `2024-06-23` },
			after: { from: `2024-06-24`, to: `2024-06-27` }
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Spirit Strike`, id: `spirit-strike` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-21`, to: `2024-06-23` },
			after: { from: `2024-06-24`, to: `2024-06-27` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Spirit Strike`, id: `spirit-strike` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li></ul> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>There is no longer a reinforcement trooper wave after Guardians and Walkers die</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var m = s(p, 2);
	d(m, {});
	var h = s(m, 2);
	a(h, 1, `hero yamato`);
	var _ = o(h);
	r(
		_,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var v = s(_, 2);
	a(v, 1, `ability shadow-transformation`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation now causes you to be unable to die during the buff</li></ul>
`
	);
	var b = s(y, 2);
	(c(b, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }), t(v), t(h));
	var x = s(h, 2);
	r(
		x,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var S = s(x, 2);
	f(S, {});
	var C = s(S, 2);
	a(C, 1, `item melee-charge`);
	var w = o(C);
	r(
		w,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>No longer grants +15% Melee Damage</li></ul>
`
	);
	var T = s(w, 2);
	(c(T, { kind: `item`, name: `Melee Charge`, ability: null }), t(C));
	var E = s(C, 2);
	a(E, 1, `item spirit-strike`);
	var D = o(E);
	r(
		D,
		() => `
<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>
<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>
<ul><li>Melee damage reduced from 20% to 15%</li></ul>
`
	);
	var O = s(D, 2);
	(c(O, { kind: `item`, name: `Spirit Strike`, ability: null }), t(E));
	var k = s(E, 2);
	a(k, 1, `item veil-walker`);
	var A = o(k);
	r(
		A,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
`
	);
	var j = s(A, 2),
		M = o(j);
	(r(M, () => `Bullet Shield reduced from +200 to +150`, !0), t(M));
	var N = s(M, 2);
	(r(N, () => `Shield restore now takes 5s to fully regen`, !0), t(N));
	var P = s(N, 2),
		F = o(P);
	r(F, () => `Cooldown increased from 20s to 25s`);
	var I = s(F, 2);
	(l(I, {
		kind: `item`,
		name: `Veil Walker`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown increased from 20s to 25s`
	}),
		t(P),
		t(j));
	var L = s(j, 2);
	(c(L, { kind: `item`, name: `Veil Walker`, ability: null }), t(k), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
