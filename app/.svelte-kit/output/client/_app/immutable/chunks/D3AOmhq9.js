import {
	I as e,
	Ot as t,
	P as ee,
	T as n,
	at as te,
	g as r,
	it as i,
	st as a
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a as o, i as s, n as c } from './vWaTnxY_.js';
function l(e) {
	c(e, { type: `hero`, names: [`Infernus`, `Mirage`, `Vindicta`, `Warden`, `Yamato`] });
}
function u(e) {
	c(e, {
		type: `item`,
		names: [`Alchemical Fire`, `Knockdown`, `Restorative Shot`, `Veil Walker`]
	});
}
var d = {
		title: `12-21-2024 Update`,
		thread_id: `52206`,
		published: `2024-12-21T01:54:51-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are) T4 items cost reduced from 6.2k to 6k Shield duration to not take damage before regenerating increased from 18s to 30s Fixed Ethereal Shift not canceling abilities like Flight Fixed various bugs with Arcane Surge Tick gold increased from 2/1% to 2.5/1.5% Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement) Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4% Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently) Infernus Flame Dash T3 changed Charge Time increased from 15s to 18s Mirage Fire Scarabs T2 reduced from -10% Bullet Resist to -8% Vindicta Assassinate base damage reduced from 120 to 100 Assassinate bonus damage reduced from 120 to 100 Warden Bullet damage growth reduced from 0.94 to 0.9 Last Stand now does 40% less damage to objectives (similar to various other abilities) Yamato Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40% Shadow Transformation T3 increased from 15% to 20% Resist Restorative Shot Cooldown increased from 6s to 7s Knockdown Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before) Veil Walker Now a T4 item Shields increased from 250 to 300 Invisibility and speed duration increased from 5s to 7s Initial fade out time reduced from 1s to the previous 0.25s value Alchemical Fire Base DPS reduced from 55 to 50`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-12-18`, to: `2024-12-21` },
			after: { from: `2024-12-22`, to: `2024-12-31` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-12-18`, to: `2024-12-21` },
			after: { from: `2024-12-22`, to: `2024-12-31` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	ne = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div>`,
		1
	);
function m(e) {
	var c = ne(),
		d = te(c);
	n(
		d,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum</li><li>Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are)</li><li>T4 items cost reduced from 6.2k to 6k</li><li>Shield duration to not take damage before regenerating increased from 18s to 30s</li><li>Fixed Ethereal Shift not canceling abilities like Flight</li><li>Fixed various bugs with Arcane Surge</li><li>Tick gold increased from 2/1% to 2.5/1.5%</li><li>Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement)</li><li>Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4%</li><li>Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently)</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var f = a(d, 2);
	l(f, {});
	var p = a(f, 2);
	r(p, 1, `hero infernus`);
	var m = i(p);
	n(
		m,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var h = a(m, 2);
	r(h, 1, `ability flame-dash`);
	var g = i(h);
	n(
		g,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
<ul><li>Flame Dash T3 changed Charge Time increased from 15s to 18s</li></ul>
`
	);
	var re = a(g, 2);
	(o(re, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), t(h), t(p));
	var _ = a(p, 2);
	r(_, 1, `hero mirage`);
	var v = i(_);
	n(
		v,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var y = a(v, 2);
	r(y, 1, `ability fire-scarabs`);
	var b = i(y);
	n(
		b,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
<ul><li>Fire Scarabs T2 reduced from -10% Bullet Resist to -8%</li></ul>
`
	);
	var x = a(b, 2);
	(o(x, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), t(y), t(_));
	var S = a(_, 2);
	r(S, 1, `hero vindicta`);
	var C = i(S);
	n(
		C,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
`
	);
	var w = a(C, 2);
	r(w, 1, `ability assassinate`);
	var T = i(w);
	n(
		T,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
`
	);
	var E = a(T, 2),
		D = i(E),
		O = i(D);
	n(O, () => `Assassinate base damage reduced from 120 to 100`);
	var k = a(O, 2);
	(s(k, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Assassinate base damage reduced from 120 to 100`
	}),
		t(D));
	var A = a(D, 2);
	(n(A, () => `Assassinate bonus damage reduced from 120 to 100`, !0), t(A), t(E));
	var ie = a(E, 2);
	(o(ie, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(w), t(S));
	var j = a(S, 2);
	r(j, 1, `hero warden`);
	var M = i(j);
	n(
		M,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Bullet damage growth reduced from 0.94 to 0.9</li></ul>
`
	);
	var N = a(M, 2);
	r(N, 1, `ability last-stand`);
	var P = i(N);
	n(
		P,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand now does 40% less damage to objectives (similar to various other abilities)</li></ul>
`
	);
	var ae = a(P, 2);
	(o(ae, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), t(N), t(j));
	var F = a(j, 2);
	r(F, 1, `hero yamato`);
	var I = i(F);
	n(
		I,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var L = a(I, 2);
	r(L, 1, `ability shadow-transformation`);
	var R = i(L);
	n(
		R,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40%</li><li>Shadow Transformation T3 increased from 15% to 20% Resist</li></ul>
`
	);
	var oe = a(R, 2);
	(o(oe, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }), t(L), t(F));
	var z = a(F, 2);
	n(
		z,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var B = a(z, 2);
	u(B, {});
	var V = a(B, 2);
	r(V, 1, `item alchemical-fire`);
	var H = i(V);
	n(
		H,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Base DPS reduced from 55 to 50</li></ul>
`
	);
	var U = a(H, 2);
	(o(U, { kind: `item`, name: `Alchemical Fire`, ability: null }), t(V));
	var W = a(V, 2);
	r(W, 1, `item knockdown`);
	var G = i(W);
	n(
		G,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before)</li></ul>
`
	);
	var K = a(G, 2);
	(o(K, { kind: `item`, name: `Knockdown`, ability: null }), t(W));
	var q = a(W, 2);
	r(q, 1, `item restorative-shot`);
	var J = i(q);
	n(
		J,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
`
	);
	var Y = a(J, 2),
		X = i(Y),
		Z = i(X);
	n(Z, () => `Cooldown increased from 6s to 7s`);
	var se = a(Z, 2);
	(s(se, {
		kind: `item`,
		name: `Restorative Shot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 6s to 7s`
	}),
		t(X),
		t(Y));
	var ce = a(Y, 2);
	(o(ce, { kind: `item`, name: `Restorative Shot`, ability: null }), t(q));
	var Q = a(q, 2);
	r(Q, 1, `item veil-walker`);
	var $ = i(Q);
	n(
		$,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Now a T4 item</li><li>Shields increased from 250 to 300</li><li>Invisibility and speed duration increased from 5s to 7s</li><li>Initial fade out time reduced from 1s to the previous 0.25s value</li></ul>
`
	);
	var le = a($, 2);
	(o(le, { kind: `item`, name: `Veil Walker`, ability: null }), t(Q), ee(e, c));
}
export { m as default, d as metadata, p as readingManifest, f as toc };
