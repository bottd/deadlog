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
	c(e, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Calico`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Holliday`,
			`Kelvin`,
			`Seven`,
			`Shiv`,
			`Sinclair`,
			`Vindicta`,
			`Viscous`,
			`Vyper`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Alchemical Fire`,
			`Ammo Scavenger`,
			`Berserker`,
			`Bullet Lifesteal`,
			`Heroic Aura`,
			`Swift Striker`
		]
	});
}
var ie = {
		title: `01-27-2025 Update`,
		thread_id: `54590`,
		published: `2025-01-27T18:10:06-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this) Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage) Can no longer stand on top of Walkers Spellslinger Headshots: Amp per headshot increased from 4% to 6% Spellslinger Headshots: Max Stacks reduced from 12 to 10 Abrams Infernal Resilience increased from 11% to 12% Bebop Uppercut air control lockout period reduced from 0.5s to 0.3s Dynamo Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8 Kinetic Pulse T3 now also adds +1 Charge Calico Gloom Bombs now has updated impact SFX Gloom Bombs now has an arming effect for when they are about to detonate Leaping Slash only heals when hitting heroes Leaping Slash fixed VFX to match the damage area more accurately Leaping Slash updated to break breakables in the area Leaping Slash fixed a bug where calico's slash would deal no damage near walls Ava duration reduced from 20s to 15s Ava cooldown reduced from 50s to 45s Ava now gets slowed by 30% for 1s anytime she takes damage Ava speed reduced from 75% to 65% Ava T2 speed increased from +35% to +45% Ava now can now meow with m1 Return to Shadows cooldown increased from 80s to 90s Fixed Leaping Slash doing bonus damage from Melee Charge Grey Talon Spirit Snare cooldown reduced from 37s to 34s Spirit Snare T2 increased from +0.5s to +0.75s Haze Bullet Dance T3 increased from +40% Evasion to +60% Bullet Dance T3 increased from +2 Dance Move Speed to +3 Holliday Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier Powder Keg Charge Time increased from 1s to 2s Powder Keg knock up time reduced by 15% Bounce Pad no will no longer expire after 5 seconds in the air Bounce Pad spirit scaling reduced from 0.9 to 0.4 Bounce Pad will now play a different sound on the player's first bounce when the stomp modifier is active Bounce Pad VFX and lifetime display improved Bounce Pad will now be more responsive for the player when landing and dealing damage Spirit Lasso duration reduced from 2.5s to 2.25s Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes Kelvin Arctic Beam now also slows roll distances by 20% Seven Storm Cloud secondary ability delay reduced from 2s to 0.25s Shiv Serrated Knives no longer stops after hitting a Soul Orb Sinclair No longer has -35% Headshot Damage Reduction Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage) Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2 Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners Rabbit can now use jump Rabbit Hex projectile updated to better track targets that have recently changes models Spectral Assistant update VFX radius & lifetimes to scale off of clone damage Audience Participation cooldown with successful usage reduced from 100% to 50% Audience Participation stolen ultimate duration increased from 10s to 20s Audience Participation VFX updated steal effect to feel snappier Audience Participation fixed a typo in the ability description Vindicta Bullet damage reduced from 11.7 to 11.4 Crow projectile speed reduced from 4750 to 4250 Assassinate T2 reduced from +120 to +110 Viscous Goo Ball turn rate improved by 10% Vyper Bullet damage growth increased from 0.32 to 0.36 Petrifying Bola changed the petrify to no longer be breakable Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage Fixed Lethal Venom T2 anti-heal not working properly Ammo Scavenger Ammo reduced from 15% to 10% Swift Striker Fire Rate reduced from 22% to 20% Alchemical Fire Base damage reduced from 50 to 45 Bullet Lifesteal Lifesteal reduced from 26% to 24% Heroic Aura Lifesteal reduced from 18% to 16% Berserker Damage to gain stack increased from 100 to 120`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-21`, to: `2025-01-28` },
			after: { from: `2025-01-29`, to: `2025-02-12` }
		}
	},
	l = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Exploding Uppercut`, id: `exploding-uppercut` },
		{ level: 2, title: `Calico`, id: `calico` },
		{ level: 3, title: `Gloom Bombs`, id: `gloom-bombs` },
		{ level: 3, title: `Leaping Slash`, id: `leaping-slash` },
		{ level: 3, title: `Ava`, id: `ava` },
		{ level: 3, title: `Return to Shadows`, id: `return-to-shadows` },
		{ level: 3, title: `Leaping Slash`, id: `leaping-slash-1` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Kinetic Pulse`, id: `kinetic-pulse` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Spirit Snare`, id: `spirit-snare` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 3, title: `Powder Keg`, id: `powder-keg` },
		{ level: 3, title: `Powder Keg Charge Time`, id: `powder-keg-charge-time` },
		{ level: 3, title: `Powder Keg`, id: `powder-keg-1` },
		{ level: 3, title: `Bounce Pad`, id: `bounce-pad` },
		{ level: 3, title: `Spirit Lasso`, id: `spirit-lasso` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 2, title: `Sinclair`, id: `sinclair` },
		{ level: 3, title: `Vexing Bolt`, id: `vexing-bolt` },
		{ level: 3, title: `Rabbit Hex`, id: `rabbit-hex` },
		{ level: 3, title: `Spectral Assistant`, id: `spectral-assistant` },
		{ level: 3, title: `Audience Participation`, id: `audience-participation` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Crow`, id: `crow` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Petrifying Bola`, id: `petrifying-bola` },
		{ level: 3, title: `Lethal Venom`, id: `lethal-venom` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Bullet Lifesteal`, id: `bullet-lifesteal` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Swift Striker`, id: `swift-striker` }
	],
	u = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-01-21`, to: `2025-01-28` },
			after: { from: `2025-01-29`, to: `2025-02-12` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Calico`, id: `calico` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Sinclair`, id: `sinclair` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Bullet Lifesteal`, id: `bullet-lifesteal` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Swift Striker`, id: `swift-striker` }
		],
		related: []
	},
	ae = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function oe(e) {
	var c = ae(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this)</li><li>Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage)</li><li>Can no longer stand on top of Walkers</li><li>Spellslinger Headshots: Amp per headshot increased from 4% to 6%</li><li>Spellslinger Headshots: Max Stacks reduced from 12 to 10</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var l = a(ie, 2);
	ne(l, {});
	var u = a(l, 2);
	r(u, 1, `hero abrams`);
	var oe = i(u);
	n(
		oe,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var d = a(oe, 2);
	r(d, 1, `ability infernal-resilience`);
	var se = i(d);
	n(
		se,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience increased from 11% to 12%</li></ul>
`
	);
	var ce = a(se, 2);
	(o(ce, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), t(d), t(u));
	var f = a(u, 2);
	r(f, 1, `hero bebop`);
	var le = i(f);
	n(
		le,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var p = a(le, 2);
	r(p, 1, `ability exploding-uppercut`);
	var ue = i(p);
	n(
		ue,
		() => `
<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>
<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>
<ul><li>Uppercut air control lockout period reduced from 0.5s to 0.3s</li></ul>
`
	);
	var de = a(ue, 2);
	(o(de, { kind: `hero`, name: `Bebop`, ability: `Exploding Uppercut` }), t(p), t(f));
	var m = a(f, 2);
	r(m, 1, `hero calico`);
	var fe = i(m);
	n(
		fe,
		() => `
<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>
<h3 id="calico"><a href="/hero/calico">Calico</a></h3>
`
	);
	var h = a(fe, 2);
	r(h, 1, `ability gloom-bombs`);
	var pe = i(h);
	n(
		pe,
		() => `
<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>
<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>
<ul><li>Gloom Bombs now has updated impact SFX</li><li>Gloom Bombs now has an arming effect for when they are about to detonate</li></ul>
`
	);
	var me = a(pe, 2);
	(o(me, { kind: `hero`, name: `Calico`, ability: `Gloom Bombs` }), t(h));
	var g = a(h, 2);
	r(g, 1, `ability leaping-slash`);
	var he = i(g);
	n(
		he,
		() => `
<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>
<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>
<ul><li>Leaping Slash only heals when hitting heroes</li><li>Leaping Slash fixed VFX to match the damage area more accurately</li><li>Leaping Slash updated to break breakables in the area</li><li>Leaping Slash fixed a bug where calico&#x27;s slash would deal no damage near walls</li></ul>
`
	);
	var ge = a(he, 2);
	(o(ge, { kind: `hero`, name: `Calico`, ability: `Leaping Slash` }), t(g));
	var _ = a(g, 2);
	r(_, 1, `ability ava`);
	var _e = i(_);
	n(
		_e,
		() => `
<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>
<h4 id="ava"><a href="/ability/ava">Ava</a></h4>
`
	);
	var ve = a(_e, 2),
		ye = i(ve);
	(n(ye, () => `Ava duration reduced from 20s to 15s`, !0), t(ye));
	var be = a(ye, 2),
		xe = i(be);
	n(xe, () => `Ava cooldown reduced from 50s to 45s`);
	var Se = a(xe, 2);
	(s(Se, {
		kind: `hero`,
		name: `Calico`,
		groupIndex: 2,
		bulletIndex: 1,
		text: `Ava cooldown reduced from 50s to 45s`
	}),
		t(be));
	var Ce = a(be, 2);
	(n(Ce, () => `Ava now gets slowed by 30% for 1s anytime she takes damage`, !0), t(Ce));
	var we = a(Ce, 2);
	(n(we, () => `Ava speed reduced from 75% to 65%`, !0), t(we));
	var Te = a(we, 2);
	(n(Te, () => `Ava T2 speed increased from +35% to +45%`, !0), t(Te));
	var Ee = a(Te, 2);
	(n(Ee, () => `Ava now can now meow with m1`, !0), t(Ee), t(ve));
	var De = a(ve, 2);
	(o(De, { kind: `hero`, name: `Calico`, ability: `Ava` }), t(_));
	var v = a(_, 2);
	r(v, 1, `ability return-to-shadows`);
	var Oe = i(v);
	n(
		Oe,
		() => `
<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>
<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>
`
	);
	var y = a(Oe, 2),
		ke = i(y),
		Ae = i(ke);
	n(Ae, () => `Return to Shadows cooldown increased from 80s to 90s`);
	var je = a(Ae, 2);
	(s(je, {
		kind: `hero`,
		name: `Calico`,
		groupIndex: 3,
		bulletIndex: 0,
		text: `Return to Shadows cooldown increased from 80s to 90s`
	}),
		t(ke),
		t(y));
	var Me = a(y, 2);
	(o(Me, { kind: `hero`, name: `Calico`, ability: `Return to Shadows` }), t(v));
	var b = a(v, 2);
	r(b, 1, `ability leaping-slash`);
	var Ne = i(b);
	n(
		Ne,
		() => `
<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>
<h4 id="leaping-slash-1"><a href="/ability/leaping-slash">Leaping Slash</a></h4>
<ul><li>Fixed Leaping Slash doing bonus damage from Melee Charge</li></ul>
`
	);
	var Pe = a(Ne, 2);
	(o(Pe, { kind: `hero`, name: `Calico`, ability: `Leaping Slash` }), t(b), t(m));
	var x = a(m, 2);
	r(x, 1, `hero dynamo`);
	var Fe = i(x);
	n(
		Fe,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var S = a(Fe, 2);
	r(S, 1, `ability kinetic-pulse`);
	var Ie = i(S);
	n(
		Ie,
		() => `
<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>
<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>
<ul><li>Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8</li><li>Kinetic Pulse T3 now also adds +1 Charge</li></ul>
`
	);
	var Le = a(Ie, 2);
	(o(Le, { kind: `hero`, name: `Dynamo`, ability: `Kinetic Pulse` }), t(S), t(x));
	var C = a(x, 2);
	r(C, 1, `hero grey-talon`);
	var Re = i(C);
	n(
		Re,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var w = a(Re, 2);
	r(w, 1, `ability spirit-snare`);
	var ze = i(w);
	n(
		ze,
		() => `
<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>
<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>
`
	);
	var T = a(ze, 2),
		Be = i(T),
		Ve = i(Be);
	n(Ve, () => `Spirit Snare cooldown reduced from 37s to 34s`);
	var He = a(Ve, 2);
	(s(He, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Spirit Snare cooldown reduced from 37s to 34s`
	}),
		t(Be));
	var Ue = a(Be, 2);
	(n(Ue, () => `Spirit Snare T2 increased from +0.5s to +0.75s`, !0), t(Ue), t(T));
	var We = a(T, 2);
	(o(We, { kind: `hero`, name: `Grey Talon`, ability: `Spirit Snare` }), t(w), t(C));
	var E = a(C, 2);
	r(E, 1, `hero haze`);
	var Ge = i(E);
	n(
		Ge,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var Ke = a(Ge, 2);
	r(Ke, 1, `ability bullet-dance`);
	var qe = i(Ke);
	n(
		qe,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance T3 increased from +40% Evasion to +60%</li><li>Bullet Dance T3 increased from +2 Dance Move Speed to +3</li></ul>
`
	);
	var Je = a(qe, 2);
	(o(Je, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(Ke), t(E));
	var D = a(E, 2);
	r(D, 1, `hero holliday`);
	var Ye = i(D);
	n(
		Ye,
		() => `
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
`
	);
	var O = a(Ye, 2);
	r(O, 1, `ability powder-keg`);
	var Xe = i(O);
	n(
		Xe,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>
<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>
<ul><li>Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier</li></ul>
`
	);
	var Ze = a(Xe, 2);
	(o(Ze, { kind: `hero`, name: `Holliday`, ability: `Powder Keg` }), t(O));
	var k = a(O, 2);
	r(k, 1, `ability powder-keg-charge-time`);
	var Qe = i(k);
	n(
		Qe,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg Charge Time change history</a></p>
<h4 id="powder-keg-charge-time"><a href="/ability/powder-keg">Powder Keg Charge Time</a></h4>
<ul><li>Powder Keg Charge Time increased from 1s to 2s</li></ul>
`
	);
	var $e = a(Qe, 2);
	(o($e, { kind: `hero`, name: `Holliday`, ability: `Powder Keg Charge Time` }), t(k));
	var A = a(k, 2);
	r(A, 1, `ability powder-keg`);
	var et = i(A);
	n(
		et,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>
<h4 id="powder-keg-1"><a href="/ability/powder-keg">Powder Keg</a></h4>
<ul><li>Powder Keg knock up time reduced by 15%</li></ul>
`
	);
	var tt = a(et, 2);
	(o(tt, { kind: `hero`, name: `Holliday`, ability: `Powder Keg` }), t(A));
	var j = a(A, 2);
	r(j, 1, `ability bounce-pad`);
	var nt = i(j);
	n(
		nt,
		() => `
<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>
<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>
<ul><li>Bounce Pad no will no longer expire after 5 seconds in the air</li><li>Bounce Pad spirit scaling reduced from 0.9 to 0.4</li><li>Bounce Pad will now play a different sound on the player&#x27;s first bounce when the stomp modifier is active</li><li>Bounce Pad VFX and lifetime display improved</li><li>Bounce Pad will now be more responsive for the player when landing and dealing damage</li></ul>
`
	);
	var rt = a(nt, 2);
	(o(rt, { kind: `hero`, name: `Holliday`, ability: `Bounce Pad` }), t(j));
	var it = a(j, 2);
	r(it, 1, `ability spirit-lasso`);
	var at = i(it);
	n(
		at,
		() => `
<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>
<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>
<ul><li>Spirit Lasso duration reduced from 2.5s to 2.25s</li><li>Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad</li><li>Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes</li></ul>
`
	);
	var ot = a(at, 2);
	(o(ot, { kind: `hero`, name: `Holliday`, ability: `Spirit Lasso` }), t(it), t(D));
	var M = a(D, 2);
	r(M, 1, `hero kelvin`);
	var st = i(M);
	n(
		st,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var N = a(st, 2);
	r(N, 1, `ability arctic-beam`);
	var ct = i(N);
	n(
		ct,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam now also slows roll distances by 20%</li></ul>
`
	);
	var lt = a(ct, 2);
	(o(lt, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), t(N), t(M));
	var P = a(M, 2);
	r(P, 1, `hero seven`);
	var ut = i(P);
	n(
		ut,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var F = a(ut, 2);
	r(F, 1, `ability storm-cloud`);
	var dt = i(F);
	n(
		dt,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud secondary ability delay reduced from 2s to 0.25s</li></ul>
`
	);
	var ft = a(dt, 2);
	(o(ft, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(F), t(P));
	var I = a(P, 2);
	r(I, 1, `hero shiv`);
	var pt = i(I);
	n(
		pt,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var L = a(pt, 2);
	r(L, 1, `ability serrated-knives`);
	var mt = i(L);
	n(
		mt,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
<ul><li>Serrated Knives no longer stops after hitting a Soul Orb</li></ul>
`
	);
	var ht = a(mt, 2);
	(o(ht, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), t(L), t(I));
	var R = a(I, 2);
	r(R, 1, `hero sinclair`);
	var gt = i(R);
	n(
		gt,
		() => `
<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>
<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>
<ul><li>No longer has -35% Headshot Damage Reduction</li></ul>
`
	);
	var z = a(gt, 2);
	r(z, 1, `ability vexing-bolt`);
	var _t = i(z);
	n(
		_t,
		() => `
<p><a href="/ability/vexing-bolt"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Vexing Bolt change history</a></p>
<h4 id="vexing-bolt"><a href="/ability/vexing-bolt">Vexing Bolt</a></h4>
<ul><li>Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage)</li><li>Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2</li><li>Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners</li></ul>
`
	);
	var vt = a(_t, 2);
	(o(vt, { kind: `hero`, name: `Sinclair`, ability: `Vexing Bolt` }), t(z));
	var B = a(z, 2);
	r(B, 1, `ability rabbit-hex`);
	var yt = i(B);
	n(
		yt,
		() => `
<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>
<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>
<ul><li>Rabbit can now use jump</li><li>Rabbit Hex projectile updated to better track targets that have recently changes models</li></ul>
`
	);
	var bt = a(yt, 2);
	(o(bt, { kind: `hero`, name: `Sinclair`, ability: `Rabbit Hex` }), t(B));
	var V = a(B, 2);
	r(V, 1, `ability spectral-assistant`);
	var xt = i(V);
	n(
		xt,
		() => `
<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>
<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>
<ul><li>Spectral Assistant update VFX radius &amp; lifetimes to scale off of clone damage</li></ul>
`
	);
	var St = a(xt, 2);
	(o(St, { kind: `hero`, name: `Sinclair`, ability: `Spectral Assistant` }), t(V));
	var H = a(V, 2);
	r(H, 1, `ability audience-participation`);
	var Ct = i(H);
	n(
		Ct,
		() => `
<p><a href="/ability/audience-participation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Audience Participation change history</a></p>
<h4 id="audience-participation"><a href="/ability/audience-participation">Audience Participation</a></h4>
<ul><li>Audience Participation cooldown with successful usage reduced from 100% to 50%</li><li>Audience Participation stolen ultimate duration increased from 10s to 20s</li><li>Audience Participation VFX updated steal effect to feel snappier</li><li>Audience Participation fixed a typo in the ability description</li></ul>
`
	);
	var wt = a(Ct, 2);
	(o(wt, { kind: `hero`, name: `Sinclair`, ability: `Audience Participation` }),
		t(H),
		t(R));
	var U = a(R, 2);
	r(U, 1, `hero vindicta`);
	var Tt = i(U);
	n(
		Tt,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Bullet damage reduced from 11.7 to 11.4</li></ul>
`
	);
	var W = a(Tt, 2);
	r(W, 1, `ability crow`);
	var Et = i(W);
	n(
		Et,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow change history</a></p>
<h4 id="crow"><a href="/ability/crow-familiar">Crow</a></h4>
<ul><li>Crow projectile speed reduced from 4750 to 4250</li></ul>
`
	);
	var Dt = a(Et, 2);
	(o(Dt, { kind: `hero`, name: `Vindicta`, ability: `Crow` }), t(W));
	var Ot = a(W, 2);
	r(Ot, 1, `ability assassinate`);
	var kt = i(Ot);
	n(
		kt,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate T2 reduced from +120 to +110</li></ul>
`
	);
	var At = a(kt, 2);
	(o(At, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(Ot), t(U));
	var G = a(U, 2);
	r(G, 1, `hero viscous`);
	var jt = i(G);
	n(
		jt,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var K = a(jt, 2);
	r(K, 1, `ability goo-ball`);
	var Mt = i(K);
	n(
		Mt,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball turn rate improved by 10%</li></ul>
`
	);
	var Nt = a(Mt, 2);
	(o(Nt, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(K), t(G));
	var q = a(G, 2);
	r(q, 1, `hero vyper`);
	var Pt = i(q);
	n(
		Pt,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
<ul><li>Bullet damage growth increased from 0.32 to 0.36</li></ul>
`
	);
	var J = a(Pt, 2);
	r(J, 1, `ability petrifying-bola`);
	var Ft = i(J);
	n(
		Ft,
		() => `
<p><a href="/ability/petrifying-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Petrifying Bola change history</a></p>
<h4 id="petrifying-bola"><a href="/ability/petrifying-bola">Petrifying Bola</a></h4>
<ul><li>Petrifying Bola changed the petrify to no longer be breakable</li></ul>
`
	);
	var It = a(Ft, 2);
	(o(It, { kind: `hero`, name: `Vyper`, ability: `Petrifying Bola` }), t(J));
	var Lt = a(J, 2);
	r(Lt, 1, `ability lethal-venom`);
	var Rt = i(Lt);
	n(
		Rt,
		() => `
<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom change history</a></p>
<h4 id="lethal-venom"><a href="/ability/lethal-venom">Lethal Venom</a></h4>
<ul><li>Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage</li><li>Fixed Lethal Venom T2 anti-heal not working properly</li></ul>
`
	);
	var zt = a(Rt, 2);
	(o(zt, { kind: `hero`, name: `Vyper`, ability: `Lethal Venom` }), t(Lt), t(q));
	var Bt = a(q, 2);
	n(
		Bt,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Vt = a(Bt, 2);
	re(Vt, {});
	var Y = a(Vt, 2);
	r(Y, 1, `item alchemical-fire`);
	var Ht = i(Y);
	n(
		Ht,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
`
	);
	var Ut = a(Ht, 2),
		Wt = i(Ut),
		Gt = i(Wt);
	n(Gt, () => `Base damage reduced from 50 to 45`);
	var Kt = a(Gt, 2);
	(s(Kt, {
		kind: `item`,
		name: `Alchemical Fire`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Base damage reduced from 50 to 45`
	}),
		t(Wt),
		t(Ut));
	var qt = a(Ut, 2);
	(o(qt, { kind: `item`, name: `Alchemical Fire`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item ammo-scavenger`);
	var Jt = i(X);
	n(
		Jt,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Ammo reduced from 15% to 10%</li></ul>
`
	);
	var Yt = a(Jt, 2);
	(o(Yt, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item berserker`);
	var Xt = i(Z);
	n(
		Xt,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Damage to gain stack increased from 100 to 120</li></ul>
`
	);
	var Zt = a(Xt, 2);
	(o(Zt, { kind: `item`, name: `Berserker`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item bullet-lifesteal`);
	var Qt = i(Q);
	n(
		Qt,
		() => `
<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>
<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>
<ul><li>Lifesteal reduced from 26% to 24%</li></ul>
`
	);
	var $t = a(Qt, 2);
	(o($t, { kind: `item`, name: `Bullet Lifesteal`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item heroic-aura`);
	var en = i($);
	n(
		en,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
<ul><li>Lifesteal reduced from 18% to 16%</li></ul>
`
	);
	var tn = a(en, 2);
	(o(tn, { kind: `item`, name: `Heroic Aura`, ability: null }), t($));
	var nn = a($, 2);
	r(nn, 1, `item swift-striker`);
	var rn = i(nn);
	n(
		rn,
		() => `
<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>
<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>
<ul><li>Fire Rate reduced from 22% to 20%</li></ul>
`
	);
	var an = a(rn, 2);
	(o(an, { kind: `item`, name: `Swift Striker`, ability: null }), t(nn), ee(e, c));
}
export { oe as default, ie as metadata, u as readingManifest, l as toc };
