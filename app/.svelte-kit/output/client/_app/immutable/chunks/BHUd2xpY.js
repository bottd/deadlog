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
	u(e, {
		type: `item`,
		names: [`Alchemical Fire`, `Berserker`, `Frenzy`, `Restorative Shot`]
	});
}
var p = {
		title: `01-12-2025 Update`,
		thread_id: `53389`,
		published: `2025-01-12T18:51:01-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Unstoppable state no longer blocks anti-heal effects Yamato Bullet damage growth reduced from 0.33 to 0.27 Shadow Transformation T1 reduced from +20% Fire Rate to +15% Alchemical Fire Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS) Berserker Weapon Damage per Stack reduced from 6% to 5% Bullet Resistance reduced from 9% to 8% Frenzy Weapon Damage per Stack reduced from 8% to 7% Bullet Resistance reduced from 10% to 8% Fire Rate reduced from 40% to 35% Low Health Bullet Resistance reduced from 55% to 50% Restorative Shot Cooldown increased from 7s to 9s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-01`, to: `2025-01-13` },
			after: { from: `2025-01-14`, to: `2025-01-17` }
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-01`, to: `2025-01-13` },
			after: { from: `2025-01-14`, to: `2025-01-17` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Unstoppable state no longer blocks anti-heal effects</li></ul>
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
<ul><li>Bullet damage growth reduced from 0.33 to 0.27</li></ul>
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
<ul><li>Shadow Transformation T1 reduced from +20% Fire Rate to +15%</li></ul>
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
	a(C, 1, `item alchemical-fire`);
	var w = o(C);
	r(
		w,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS)</li></ul>
`
	);
	var T = s(w, 2);
	(c(T, { kind: `item`, name: `Alchemical Fire`, ability: null }), t(C));
	var E = s(C, 2);
	a(E, 1, `item berserker`);
	var D = o(E);
	r(
		D,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Weapon Damage per Stack reduced from 6% to 5%</li><li>Bullet Resistance reduced from 9% to 8%</li></ul>
`
	);
	var O = s(D, 2);
	(c(O, { kind: `item`, name: `Berserker`, ability: null }), t(E));
	var k = s(E, 2);
	a(k, 1, `item frenzy`);
	var A = o(k);
	r(
		A,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Weapon Damage per Stack reduced from 8% to 7%</li><li>Bullet Resistance reduced from 10% to 8%</li><li>Fire Rate reduced from 40% to 35%</li><li>Low Health Bullet Resistance reduced from 55% to 50%</li></ul>
`
	);
	var j = s(A, 2);
	(c(j, { kind: `item`, name: `Frenzy`, ability: null }), t(k));
	var M = s(k, 2);
	a(M, 1, `item restorative-shot`);
	var N = o(M);
	r(
		N,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
`
	);
	var P = s(N, 2),
		F = o(P),
		I = o(F);
	r(I, () => `Cooldown increased from 7s to 9s`);
	var L = s(I, 2);
	(l(L, {
		kind: `item`,
		name: `Restorative Shot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 7s to 9s`
	}),
		t(F),
		t(P));
	var R = s(P, 2);
	(c(R, { kind: `item`, name: `Restorative Shot`, ability: null }), t(M), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
