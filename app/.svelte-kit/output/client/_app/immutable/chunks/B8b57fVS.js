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
function ne(e) {
	c(e, { type: `hero`, names: [`Calico`, `Holliday`, `Sinclair`, `Wraith`] });
}
function re(e) {
	c(e, { type: `item`, names: [`Ammo Scavenger`, `Extra Stamina`, `Restorative Shot`] });
}
var l = {
		title: `02-11-2025 Update`,
		thread_id: `55677`,
		published: `2025-02-11T16:23:52-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Calico Leaping Slash T2 damage decreased from +75 to +60 Return to Shadows cooldown increased from 90s to 100s Return to Shadows speed reduced from +50% to +30% Return to Shadows T2 now also grants +20% speed Holliday Powder Keg cooldown between charges increased from 2s to 3.5s Bounce Pad T2 damage reduced from +100 to +80 Sinclair Bullet Damage reduced by 15% Bullet velocity increased from 86 to 340 Spectral Assistant now has new VFX Rabbit Hex targeting mechanism has been reworked. It is now an AoE target ability in the base. It has a 0.7s delay before the area is affected. Cast range increased from 20m to 30m, Movespeed reduced from 35% to 15% and cooldown reduced from 45s to 35s. Rabbit Hex now has new VFX Audience Participation range increased from 10m to 20m Audience Participation copy duration decreased from 20s to 10s Various new and improved SFX Wraith Card Trick base radius reduced from 5m to 4m Telekinesis base damage reduced from 175 to 140 Ammo Scavenger Max Stacks reduced from 20 to 18 No longer grants +40 health Extra Stamina No longer grants +4% Fire Rate Restorative Shot No longer grants +3% Weapon Damage`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-29`, to: `2025-02-12` },
			after: { from: `2025-02-13`, to: `2025-02-25` }
		}
	},
	u = [
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Calico`, id: `calico` },
		{ level: 3, title: `Leaping Slash`, id: `leaping-slash` },
		{ level: 3, title: `Return to Shadows`, id: `return-to-shadows` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 3, title: `Powder Keg`, id: `powder-keg` },
		{ level: 3, title: `Bounce Pad`, id: `bounce-pad` },
		{ level: 2, title: `Sinclair`, id: `sinclair` },
		{ level: 3, title: `Spectral Assistant`, id: `spectral-assistant` },
		{ level: 3, title: `Rabbit Hex`, id: `rabbit-hex` },
		{ level: 3, title: `Audience Participation`, id: `audience-participation` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 3, title: `Telekinesis`, id: `telekinesis` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Extra Stamina`, id: `extra-stamina` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` }
	],
	d = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-29`, to: `2025-02-12` },
			after: { from: `2025-02-13`, to: `2025-02-25` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Calico`, id: `calico` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Sinclair`, id: `sinclair` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Extra Stamina`, id: `extra-stamina` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` }
		],
		related: []
	},
	ie = e(
		`<!> <!> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function f(e) {
	var c = ie(),
		l = te(c);
	n(
		l,
		() => `<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var u = a(l, 2);
	ne(u, {});
	var d = a(u, 2);
	r(d, 1, `hero calico`);
	var f = i(d);
	n(
		f,
		() => `
<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>
<h3 id="calico"><a href="/hero/calico">Calico</a></h3>
`
	);
	var p = a(f, 2);
	r(p, 1, `ability leaping-slash`);
	var ae = i(p);
	n(
		ae,
		() => `
<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>
<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>
`
	);
	var m = a(ae, 2),
		h = i(m),
		g = i(h);
	n(g, () => `Leaping Slash T2 damage decreased from +75 to +60`);
	var oe = a(g, 2);
	(s(oe, {
		kind: `hero`,
		name: `Calico`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Leaping Slash T2 damage decreased from +75 to +60`
	}),
		t(h),
		t(m));
	var se = a(m, 2);
	(o(se, { kind: `hero`, name: `Calico`, ability: `Leaping Slash` }), t(p));
	var _ = a(p, 2);
	r(_, 1, `ability return-to-shadows`);
	var v = i(_);
	n(
		v,
		() => `
<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>
<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>
`
	);
	var y = a(v, 2),
		b = i(y),
		x = i(b);
	n(x, () => `Return to Shadows cooldown increased from 90s to 100s`);
	var ce = a(x, 2);
	(s(ce, {
		kind: `hero`,
		name: `Calico`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Return to Shadows cooldown increased from 90s to 100s`
	}),
		t(b));
	var S = a(b, 2);
	(n(S, () => `Return to Shadows speed reduced from +50% to +30%`, !0), t(S));
	var C = a(S, 2);
	(n(C, () => `Return to Shadows T2 now also grants +20% speed`, !0), t(C), t(y));
	var le = a(y, 2);
	(o(le, { kind: `hero`, name: `Calico`, ability: `Return to Shadows` }), t(_), t(d));
	var w = a(d, 2);
	r(w, 1, `hero holliday`);
	var ue = i(w);
	n(
		ue,
		() => `
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
`
	);
	var T = a(ue, 2);
	r(T, 1, `ability powder-keg`);
	var E = i(T);
	n(
		E,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>
<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>
<ul><li>Powder Keg cooldown between charges increased from 2s to 3.5s</li></ul>
`
	);
	var de = a(E, 2);
	(o(de, { kind: `hero`, name: `Holliday`, ability: `Powder Keg` }), t(T));
	var D = a(T, 2);
	r(D, 1, `ability bounce-pad`);
	var O = i(D);
	n(
		O,
		() => `
<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>
<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>
`
	);
	var k = a(O, 2),
		A = i(k),
		j = i(A);
	n(j, () => `Bounce Pad T2 damage reduced from +100 to +80`);
	var fe = a(j, 2);
	(s(fe, {
		kind: `hero`,
		name: `Holliday`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Bounce Pad T2 damage reduced from +100 to +80`
	}),
		t(A),
		t(k));
	var pe = a(k, 2);
	(o(pe, { kind: `hero`, name: `Holliday`, ability: `Bounce Pad` }), t(D), t(w));
	var M = a(w, 2);
	r(M, 1, `hero sinclair`);
	var N = i(M);
	n(
		N,
		() => `
<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>
<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>
<ul><li>Bullet Damage reduced by 15%</li><li>Bullet velocity increased from 86 to 340</li></ul>
`
	);
	var P = a(N, 2);
	r(P, 1, `ability spectral-assistant`);
	var F = i(P);
	n(
		F,
		() => `
<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>
<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>
<ul><li>Spectral Assistant now has new VFX</li></ul>
`
	);
	var me = a(F, 2);
	(o(me, { kind: `hero`, name: `Sinclair`, ability: `Spectral Assistant` }), t(P));
	var I = a(P, 2);
	r(I, 1, `ability rabbit-hex`);
	var L = i(I);
	n(
		L,
		() => `
<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>
<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>
<ul><li>Rabbit Hex targeting mechanism has been reworked. It is now an AoE target ability in the base. It has a 0.7s delay before the area is affected. Cast range increased from 20m to 30m, Movespeed reduced from 35% to 15% and cooldown reduced from 45s to 35s.</li><li>Rabbit Hex now has new VFX</li></ul>
`
	);
	var he = a(L, 2);
	(o(he, { kind: `hero`, name: `Sinclair`, ability: `Rabbit Hex` }), t(I));
	var R = a(I, 2);
	r(R, 1, `ability audience-participation`);
	var z = i(R);
	n(
		z,
		() => `
<p><a href="/ability/audience-participation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Audience Participation change history</a></p>
<h4 id="audience-participation"><a href="/ability/audience-participation">Audience Participation</a></h4>
<ul><li>Audience Participation range increased from 10m to 20m</li><li>Audience Participation copy duration decreased from 20s to 10s</li><li>Various new and improved SFX</li></ul>
`
	);
	var ge = a(z, 2);
	(o(ge, { kind: `hero`, name: `Sinclair`, ability: `Audience Participation` }),
		t(R),
		t(M));
	var B = a(M, 2);
	r(B, 1, `hero wraith`);
	var V = i(B);
	n(
		V,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var H = a(V, 2);
	r(H, 1, `ability card-trick`);
	var _e = i(H);
	n(
		_e,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
`
	);
	var U = a(_e, 2),
		W = i(U),
		G = i(W);
	n(G, () => `Card Trick base radius reduced from 5m to 4m`);
	var ve = a(G, 2);
	(s(ve, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Card Trick base radius reduced from 5m to 4m`
	}),
		t(W),
		t(U));
	var ye = a(U, 2);
	(o(ye, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), t(H));
	var K = a(H, 2);
	r(K, 1, `ability telekinesis`);
	var q = i(K);
	n(
		q,
		() => `
<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>
<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>
`
	);
	var J = a(q, 2),
		Y = i(J),
		X = i(Y);
	n(X, () => `Telekinesis base damage reduced from 175 to 140`);
	var be = a(X, 2);
	(s(be, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Telekinesis base damage reduced from 175 to 140`
	}),
		t(Y),
		t(J));
	var xe = a(J, 2);
	(o(xe, { kind: `hero`, name: `Wraith`, ability: `Telekinesis` }), t(K), t(B));
	var Se = a(B, 2);
	n(
		Se,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Ce = a(Se, 2);
	re(Ce, {});
	var Z = a(Ce, 2);
	r(Z, 1, `item ammo-scavenger`);
	var we = i(Z);
	n(
		we,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Max Stacks reduced from 20 to 18</li><li>No longer grants +40 health</li></ul>
`
	);
	var Te = a(we, 2);
	(o(Te, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item extra-stamina`);
	var Ee = i(Q);
	n(
		Ee,
		() => `
<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>
<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>
<ul><li>No longer grants +4% Fire Rate</li></ul>
`
	);
	var De = a(Ee, 2);
	(o(De, { kind: `item`, name: `Extra Stamina`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item restorative-shot`);
	var Oe = i($);
	n(
		Oe,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>No longer grants +3% Weapon Damage</li></ul>
`
	);
	var ke = a(Oe, 2);
	(o(ke, { kind: `item`, name: `Restorative Shot`, ability: null }), t($), ee(e, c));
}
export { f as default, l as metadata, d as readingManifest, u as toc };
