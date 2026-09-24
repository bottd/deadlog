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
			`Calico`,
			`Doorman`,
			`Drifter`,
			`Dynamo`,
			`Infernus`,
			`Kelvin`,
			`McGinnis`,
			`Paradox`,
			`Seven`,
			`Shiv`,
			`Victor`,
			`Vyper`,
			`Warden`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Capacitor`,
			`Divine Barrier`,
			`Ethereal Shift`,
			`Fortitude`,
			`Guardian Ward`,
			`Majestic Leap`,
			`Mystic Shot`,
			`Reactive Barrier`,
			`Rusted Barrel`,
			`Silence Wave`,
			`Spirit Shielding`,
			`Spirit Snatch`,
			`Trophy Collector`,
			`Warp Stone`,
			`Weapon Shielding`
		]
	});
}
var ie = {
		title: `10-24-2025 Update`,
		thread_id: `87198`,
		published: `2025-10-24T16:54:51-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines). Curse: Cooldown reduced from 50s to 45s Calico Gloom Bombs cooldown increased from 10s to 12s Gloom Bombs base damage from 55 to 45 Gloom Bombs spirit scaling reduced from 0.74 to 0.64 Gloom Bombs multi bomb damage ratio increased from 50% to 65% Ava no longer replenishes stamina on usage Doorman Bullet damage growth per boon reduced from 1.15 to 1.0 Outgoing headshot damage multiplier reduced by 25% Call Bell explosion damage spirit scaling increased from 1.5 to 1.7 Drifter Bloodscent isolated kill bonus reduced from 5% to 4% Base bullet damage increased from 20.9 to 21.3 Bullet damage growth increased from 0.52 to 0.56 Dynamo Quantum Entanglement Fire Rate increased from +25% to +30% Rejuvenating Aurora cooldown reduced from 48s to 45s Infernus Bullet damage growth per boon reduced from 0.12 to 0.08 Flame Dash T2 reduced from +35 to +30 Afterburn T1 reduced from -25% Spirit Damage to -20% Afterburn T3 reduced from +28 DPS to +26 Kelvin Base regen reduced from 2 to 1 Headshot reduction reduced from -20% to -25% Frozen Shelter cooldown increased from 150s to 170s McGinnis Medicinal Specter now has a 1s linger time Paradox Base bullet damage reduced from 6.48 to 6.15 Paradoxical Swap cooldown increased from 70s to 75s Seven Lightning Ball spirit scaling increased from 0.43 to 0.55 Shiv Alt fire knockback reduced by 10% Victor Pain Battery T1 and T2 swapped Aura of Suffering max damage reduced from 80 to 70 Aura of Suffering T2 reduced from +10/50 to +8/40 Vyper Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4 Warden Base bullet damage increased from 15 to 16.2 Binding Word range increased from 19m to 20m Mystic Shot Base damage reduced from 55 to 45 Spirit scaling increased from 0.65 to 0.75 Warp Stone Bullet Resist reduced from 40% to 35% Capacitor Fire Rate reduced from 8% to 5% Cooldown increased from 40s to 60s Guardian Ward Cooldown increased from 40s to 45s Reactive Barrier Cooldown increased from 24s to 26s Spirit Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Weapon Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Fortitude Damage taken duration to regen reduced from 14s to 13s Trophy Collector Souls per Minute increased from 25 to 30 Majestic Leap Cooldown increased from 28s to 32s Divine Barrier Cooldown increased from 40s to 45s Rusted Barrel Bonus health increased from 60 to 70 Silence Wave Cooldown increased from 30s to 35s (affects component) Spirit Snatch Duration reduced from 14s to 10s Bonus damage reduced from 75 to 50 Ethereal Shift Cooldown increased from 20s to 45s Movespeed during phase reduced from 4m to 3m Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-10-10`, to: `2025-10-24` },
			after: { from: `2025-10-25`, to: `2025-11-08` }
		}
	},
	l = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Calico`, id: `calico` },
		{ level: 3, title: `Gloom Bombs`, id: `gloom-bombs` },
		{ level: 3, title: `Ava`, id: `ava` },
		{ level: 2, title: `Doorman`, id: `doorman` },
		{ level: 3, title: `Call Bell`, id: `call-bell` },
		{ level: 2, title: `Drifter`, id: `drifter` },
		{ level: 3, title: `Bloodscent`, id: `bloodscent` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{
			level: 3,
			title: `Quantum Entanglement Fire Rate`,
			id: `quantum-entanglement-fire-rate`
		},
		{ level: 3, title: `Rejuvenating Aurora`, id: `rejuvenating-aurora` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 3, title: `Afterburn`, id: `afterburn` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Medicinal Specter`, id: `medicinal-specter` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Lightning Ball`, id: `lightning-ball` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 2, title: `Victor`, id: `victor` },
		{ level: 3, title: `Pain Battery`, id: `pain-battery` },
		{ level: 3, title: `Aura of Suffering`, id: `aura-of-suffering` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Screwjab Dagger`, id: `screwjab-dagger` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Binding Word`, id: `binding-word` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Capacitor`, id: `capacitor` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Ethereal Shift`, id: `ethereal-shift` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Guardian Ward`, id: `guardian-ward` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Rusted Barrel`, id: `rusted-barrel` },
		{ level: 2, title: `Silence Wave`, id: `silence-wave` },
		{ level: 2, title: `Spirit Shielding`, id: `spirit-shielding` },
		{ level: 2, title: `Spirit Snatch`, id: `spirit-snatch` },
		{ level: 2, title: `Trophy Collector`, id: `trophy-collector` },
		{ level: 2, title: `Warp Stone`, id: `warp-stone` },
		{ level: 2, title: `Weapon Shielding`, id: `weapon-shielding` }
	],
	u = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-10-10`, to: `2025-10-24` },
			after: { from: `2025-10-25`, to: `2025-11-08` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Calico`, id: `calico` },
			{ kind: `hero`, name: `Doorman`, id: `doorman` },
			{ kind: `hero`, name: `Drifter`, id: `drifter` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Victor`, id: `victor` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `item`, name: `Capacitor`, id: `capacitor` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Ethereal Shift`, id: `ethereal-shift` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Guardian Ward`, id: `guardian-ward` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Rusted Barrel`, id: `rusted-barrel` },
			{ kind: `item`, name: `Silence Wave`, id: `silence-wave` },
			{ kind: `item`, name: `Spirit Shielding`, id: `spirit-shielding` },
			{ kind: `item`, name: `Spirit Snatch`, id: `spirit-snatch` },
			{ kind: `item`, name: `Trophy Collector`, id: `trophy-collector` },
			{ kind: `item`, name: `Warp Stone`, id: `warp-stone` },
			{ kind: `item`, name: `Weapon Shielding`, id: `weapon-shielding` }
		],
		related: []
	},
	ae = e(
		`<!> <!> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function d(e) {
	var c = ae(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines).</li><li>Curse: Cooldown reduced from 50s to 45s</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var l = a(ie, 2);
	ne(l, {});
	var u = a(l, 2);
	r(u, 1, `hero calico`);
	var d = i(u);
	n(
		d,
		() => `
<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>
<h3 id="calico"><a href="/hero/calico">Calico</a></h3>
`
	);
	var f = a(d, 2);
	r(f, 1, `ability gloom-bombs`);
	var oe = i(f);
	n(
		oe,
		() => `
<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>
<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>
`
	);
	var se = a(oe, 2),
		ce = i(se),
		le = i(ce);
	n(le, () => `Gloom Bombs cooldown increased from 10s to 12s`);
	var ue = a(le, 2);
	(s(ue, {
		kind: `hero`,
		name: `Calico`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Gloom Bombs cooldown increased from 10s to 12s`
	}),
		t(ce));
	var de = a(ce, 2);
	(n(de, () => `Gloom Bombs base damage from 55 to 45`, !0), t(de));
	var fe = a(de, 2);
	(n(fe, () => `Gloom Bombs spirit scaling reduced from 0.74 to 0.64`, !0), t(fe));
	var pe = a(fe, 2);
	(n(pe, () => `Gloom Bombs multi bomb damage ratio increased from 50% to 65%`, !0),
		t(pe),
		t(se));
	var me = a(se, 2);
	(o(me, { kind: `hero`, name: `Calico`, ability: `Gloom Bombs` }), t(f));
	var p = a(f, 2);
	r(p, 1, `ability ava`);
	var he = i(p);
	n(
		he,
		() => `
<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>
<h4 id="ava"><a href="/ability/ava">Ava</a></h4>
<ul><li>Ava no longer replenishes stamina on usage</li></ul>
`
	);
	var ge = a(he, 2);
	(o(ge, { kind: `hero`, name: `Calico`, ability: `Ava` }), t(p), t(u));
	var m = a(u, 2);
	r(m, 1, `hero doorman`);
	var _e = i(m);
	n(
		_e,
		() => `
<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>
<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>
<ul><li>Bullet damage growth per boon reduced from 1.15 to 1.0</li><li>Outgoing headshot damage multiplier reduced by 25%</li></ul>
`
	);
	var h = a(_e, 2);
	r(h, 1, `ability call-bell`);
	var ve = i(h);
	n(
		ve,
		() => `
<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>
<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>
<ul><li>Call Bell explosion damage spirit scaling increased from 1.5 to 1.7</li></ul>
`
	);
	var ye = a(ve, 2);
	(o(ye, { kind: `hero`, name: `Doorman`, ability: `Call Bell` }), t(h), t(m));
	var g = a(m, 2);
	r(g, 1, `hero drifter`);
	var be = i(g);
	n(
		be,
		() => `
<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>
<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>
`
	);
	var _ = a(be, 2);
	r(_, 1, `ability bloodscent`);
	var xe = i(_);
	n(
		xe,
		() => `
<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>
<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>
<ul><li>Bloodscent isolated kill bonus reduced from 5% to 4%</li></ul>
`
	);
	var Se = a(xe, 2);
	(o(Se, { kind: `hero`, name: `Drifter`, ability: `Bloodscent` }), t(_));
	var Ce = a(_, 2);
	(n(
		Ce,
		() => `
<ul><li>Base bullet damage increased from 20.9 to 21.3</li><li>Bullet damage growth increased from 0.52 to 0.56</li></ul>
`
	),
		t(g));
	var v = a(g, 2);
	r(v, 1, `hero dynamo`);
	var we = i(v);
	n(
		we,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var y = a(we, 2);
	r(y, 1, `ability quantum-entanglement-fire-rate`);
	var Te = i(y);
	n(
		Te,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement Fire Rate change history</a></p>
<h4 id="quantum-entanglement-fire-rate"><a href="/ability/quantum-entanglement">Quantum Entanglement Fire Rate</a></h4>
<ul><li>Quantum Entanglement Fire Rate increased from +25% to +30%</li></ul>
`
	);
	var Ee = a(Te, 2);
	(o(Ee, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement Fire Rate` }),
		t(y));
	var De = a(y, 2);
	r(De, 1, `ability rejuvenating-aurora`);
	var Oe = i(De);
	n(
		Oe,
		() => `
<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>
<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>
`
	);
	var b = a(Oe, 2),
		ke = i(b),
		Ae = i(ke);
	n(Ae, () => `Rejuvenating Aurora cooldown reduced from 48s to 45s`);
	var je = a(Ae, 2);
	(s(je, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Rejuvenating Aurora cooldown reduced from 48s to 45s`
	}),
		t(ke),
		t(b));
	var Me = a(b, 2);
	(o(Me, { kind: `hero`, name: `Dynamo`, ability: `Rejuvenating Aurora` }), t(De), t(v));
	var x = a(v, 2);
	r(x, 1, `hero infernus`);
	var Ne = i(x);
	n(
		Ne,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
<ul><li>Bullet damage growth per boon reduced from 0.12 to 0.08</li></ul>
`
	);
	var S = a(Ne, 2);
	r(S, 1, `ability flame-dash`);
	var Pe = i(S);
	n(
		Pe,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
<ul><li>Flame Dash T2 reduced from +35 to +30</li></ul>
`
	);
	var Fe = a(Pe, 2);
	(o(Fe, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), t(S));
	var C = a(S, 2);
	r(C, 1, `ability afterburn`);
	var Ie = i(C);
	n(
		Ie,
		() => `
<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>
<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>
<ul><li>Afterburn T1 reduced from -25% Spirit Damage to -20%</li><li>Afterburn T3 reduced from +28 DPS to +26</li></ul>
`
	);
	var Le = a(Ie, 2);
	(o(Le, { kind: `hero`, name: `Infernus`, ability: `Afterburn` }), t(C), t(x));
	var w = a(x, 2);
	r(w, 1, `hero kelvin`);
	var Re = i(w);
	n(
		Re,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
<ul><li>Base regen reduced from 2 to 1</li><li>Headshot reduction reduced from -20% to -25%</li></ul>
`
	);
	var T = a(Re, 2);
	r(T, 1, `ability frozen-shelter`);
	var ze = i(T);
	n(
		ze,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
`
	);
	var Be = a(ze, 2),
		Ve = i(Be),
		He = i(Ve);
	n(He, () => `Frozen Shelter cooldown increased from 150s to 170s`);
	var Ue = a(He, 2);
	(s(Ue, {
		kind: `hero`,
		name: `Kelvin`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Frozen Shelter cooldown increased from 150s to 170s`
	}),
		t(Ve),
		t(Be));
	var We = a(Be, 2);
	(o(We, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), t(T), t(w));
	var E = a(w, 2);
	r(E, 1, `hero mcginnis`);
	var Ge = i(E);
	n(
		Ge,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var Ke = a(Ge, 2);
	r(Ke, 1, `ability medicinal-specter`);
	var qe = i(Ke);
	n(
		qe,
		() => `
<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>
<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>
<ul><li>Medicinal Specter now has a 1s linger time</li></ul>
`
	);
	var Je = a(qe, 2);
	(o(Je, { kind: `hero`, name: `McGinnis`, ability: `Medicinal Specter` }), t(Ke), t(E));
	var D = a(E, 2);
	r(D, 1, `hero paradox`);
	var Ye = i(D);
	n(
		Ye,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
<ul><li>Base bullet damage reduced from 6.48 to 6.15</li></ul>
`
	);
	var Xe = a(Ye, 2);
	r(Xe, 1, `ability paradoxical-swap`);
	var Ze = i(Xe);
	n(
		Ze,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
`
	);
	var Qe = a(Ze, 2),
		$e = i(Qe),
		et = i($e);
	n(et, () => `Paradoxical Swap cooldown increased from 70s to 75s`);
	var tt = a(et, 2);
	(s(tt, {
		kind: `hero`,
		name: `Paradox`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Paradoxical Swap cooldown increased from 70s to 75s`
	}),
		t($e),
		t(Qe));
	var nt = a(Qe, 2);
	(o(nt, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), t(Xe), t(D));
	var O = a(D, 2);
	r(O, 1, `hero seven`);
	var rt = i(O);
	n(
		rt,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var it = a(rt, 2);
	r(it, 1, `ability lightning-ball`);
	var at = i(it);
	n(
		at,
		() => `
<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>
<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>
<ul><li>Lightning Ball spirit scaling increased from 0.43 to 0.55</li></ul>
`
	);
	var ot = a(at, 2);
	(o(ot, { kind: `hero`, name: `Seven`, ability: `Lightning Ball` }), t(it), t(O));
	var st = a(O, 2);
	n(
		st,
		() => `
<div class="hero shiv">
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Alt fire knockback reduced by 10%</li></ul>
</div>
`
	);
	var k = a(st, 2);
	r(k, 1, `hero victor`);
	var ct = i(k);
	n(
		ct,
		() => `
<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>
<h3 id="victor"><a href="/hero/victor">Victor</a></h3>
`
	);
	var A = a(ct, 2);
	r(A, 1, `ability pain-battery`);
	var lt = i(A);
	n(
		lt,
		() => `
<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>
<h4 id="pain-battery"><a href="/ability/pain-battery">Pain Battery</a></h4>
<ul><li>Pain Battery T1 and T2 swapped</li></ul>
`
	);
	var ut = a(lt, 2);
	(o(ut, { kind: `hero`, name: `Victor`, ability: `Pain Battery` }), t(A));
	var j = a(A, 2);
	r(j, 1, `ability aura-of-suffering`);
	var dt = i(j);
	n(
		dt,
		() => `
<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>
<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>
<ul><li>Aura of Suffering max damage reduced from 80 to 70</li><li>Aura of Suffering T2 reduced from +10/50 to +8/40</li></ul>
`
	);
	var ft = a(dt, 2);
	(o(ft, { kind: `hero`, name: `Victor`, ability: `Aura of Suffering` }), t(j), t(k));
	var M = a(k, 2);
	r(M, 1, `hero vyper`);
	var pt = i(M);
	n(
		pt,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
`
	);
	var N = a(pt, 2);
	r(N, 1, `ability screwjab-dagger`);
	var mt = i(N);
	n(
		mt,
		() => `
<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>
<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>
<ul><li>Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4</li></ul>
`
	);
	var ht = a(mt, 2);
	(o(ht, { kind: `hero`, name: `Vyper`, ability: `Screwjab Dagger` }), t(N), t(M));
	var P = a(M, 2);
	r(P, 1, `hero warden`);
	var gt = i(P);
	n(
		gt,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Base bullet damage increased from 15 to 16.2</li></ul>
`
	);
	var F = a(gt, 2);
	r(F, 1, `ability binding-word`);
	var _t = i(F);
	n(
		_t,
		() => `
<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>
<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>
<ul><li>Binding Word range increased from 19m to 20m</li></ul>
`
	);
	var vt = a(_t, 2);
	(o(vt, { kind: `hero`, name: `Warden`, ability: `Binding Word` }), t(F), t(P));
	var yt = a(P, 2);
	n(
		yt,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var bt = a(yt, 2);
	re(bt, {});
	var I = a(bt, 2);
	r(I, 1, `item capacitor`);
	var xt = i(I);
	n(
		xt,
		() => `
<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>
<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>
`
	);
	var L = a(xt, 2),
		R = i(L);
	(n(R, () => `Fire Rate reduced from 8% to 5%`, !0), t(R));
	var St = a(R, 2),
		Ct = i(St);
	n(Ct, () => `Cooldown increased from 40s to 60s`);
	var wt = a(Ct, 2);
	(s(wt, {
		kind: `item`,
		name: `Capacitor`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 40s to 60s`
	}),
		t(St),
		t(L));
	var Tt = a(L, 2);
	(o(Tt, { kind: `item`, name: `Capacitor`, ability: null }), t(I));
	var z = a(I, 2);
	r(z, 1, `item divine-barrier`);
	var Et = i(z);
	n(
		Et,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
`
	);
	var B = a(Et, 2),
		Dt = i(B),
		Ot = i(Dt);
	n(Ot, () => `Cooldown increased from 40s to 45s`);
	var kt = a(Ot, 2);
	(s(kt, {
		kind: `item`,
		name: `Divine Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 40s to 45s`
	}),
		t(Dt),
		t(B));
	var At = a(B, 2);
	(o(At, { kind: `item`, name: `Divine Barrier`, ability: null }), t(z));
	var V = a(z, 2);
	r(V, 1, `item ethereal-shift`);
	var jt = i(V);
	n(
		jt,
		() => `
<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>
<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>
`
	);
	var H = a(jt, 2),
		Mt = i(H),
		Nt = i(Mt);
	n(Nt, () => `Cooldown increased from 20s to 45s`);
	var Pt = a(Nt, 2);
	(s(Pt, {
		kind: `item`,
		name: `Ethereal Shift`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 20s to 45s`
	}),
		t(Mt));
	var Ft = a(Mt, 2);
	(n(Ft, () => `Movespeed during phase reduced from 4m to 3m`, !0), t(Ft));
	var It = a(Ft, 2);
	(n(
		It,
		() =>
			`Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc`,
		!0
	),
		t(It),
		t(H));
	var Lt = a(H, 2);
	(o(Lt, { kind: `item`, name: `Ethereal Shift`, ability: null }), t(V));
	var U = a(V, 2);
	r(U, 1, `item fortitude`);
	var Rt = i(U);
	n(
		Rt,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Damage taken duration to regen reduced from 14s to 13s</li></ul>
`
	);
	var zt = a(Rt, 2);
	(o(zt, { kind: `item`, name: `Fortitude`, ability: null }), t(U));
	var W = a(U, 2);
	r(W, 1, `item guardian-ward`);
	var Bt = i(W);
	n(
		Bt,
		() => `
<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>
<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>
`
	);
	var Vt = a(Bt, 2),
		Ht = i(Vt),
		Ut = i(Ht);
	n(Ut, () => `Cooldown increased from 40s to 45s`);
	var Wt = a(Ut, 2);
	(s(Wt, {
		kind: `item`,
		name: `Guardian Ward`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 40s to 45s`
	}),
		t(Ht),
		t(Vt));
	var Gt = a(Vt, 2);
	(o(Gt, { kind: `item`, name: `Guardian Ward`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item majestic-leap`);
	var Kt = i(G);
	n(
		Kt,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
`
	);
	var qt = a(Kt, 2),
		Jt = i(qt),
		Yt = i(Jt);
	n(Yt, () => `Cooldown increased from 28s to 32s`);
	var Xt = a(Yt, 2);
	(s(Xt, {
		kind: `item`,
		name: `Majestic Leap`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 28s to 32s`
	}),
		t(Jt),
		t(qt));
	var Zt = a(qt, 2);
	(o(Zt, { kind: `item`, name: `Majestic Leap`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item mystic-shot`);
	var Qt = i(K);
	n(
		Qt,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
`
	);
	var $t = a(Qt, 2),
		en = i($t),
		tn = i(en);
	n(tn, () => `Base damage reduced from 55 to 45`);
	var nn = a(tn, 2);
	(s(nn, {
		kind: `item`,
		name: `Mystic Shot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Base damage reduced from 55 to 45`
	}),
		t(en));
	var rn = a(en, 2);
	(n(rn, () => `Spirit scaling increased from 0.65 to 0.75`, !0), t(rn), t($t));
	var an = a($t, 2);
	(o(an, { kind: `item`, name: `Mystic Shot`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item reactive-barrier`);
	var on = i(q);
	n(
		on,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
`
	);
	var sn = a(on, 2),
		cn = i(sn),
		ln = i(cn);
	n(ln, () => `Cooldown increased from 24s to 26s`);
	var un = a(ln, 2);
	(s(un, {
		kind: `item`,
		name: `Reactive Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 24s to 26s`
	}),
		t(cn),
		t(sn));
	var dn = a(sn, 2);
	(o(dn, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item rusted-barrel`);
	var fn = i(J);
	n(
		fn,
		() => `
<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>
<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>
<ul><li>Bonus health increased from 60 to 70</li></ul>
`
	);
	var pn = a(fn, 2);
	(o(pn, { kind: `item`, name: `Rusted Barrel`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item silence-wave`);
	var mn = i(Y);
	n(
		mn,
		() => `
<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>
<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>
<ul><li>Cooldown increased from 30s to 35s (affects component)</li></ul>
`
	);
	var hn = a(mn, 2);
	(o(hn, { kind: `item`, name: `Silence Wave`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item spirit-shielding`);
	var gn = i(X);
	n(
		gn,
		() => `
<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>
<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>
<ul><li>Barrier reduced from 325 to 300</li><li>Barrier boon scaling increased from 4 to 5</li></ul>
`
	);
	var _n = a(gn, 2);
	(o(_n, { kind: `item`, name: `Spirit Shielding`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item spirit-snatch`);
	var vn = i(Z);
	n(
		vn,
		() => `
<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>
<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>
<ul><li>Duration reduced from 14s to 10s</li><li>Bonus damage reduced from 75 to 50</li></ul>
`
	);
	var yn = a(vn, 2);
	(o(yn, { kind: `item`, name: `Spirit Snatch`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item trophy-collector`);
	var bn = i(Q);
	n(
		bn,
		() => `
<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>
<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>
<ul><li>Souls per Minute increased from 25 to 30</li></ul>
`
	);
	var xn = a(bn, 2);
	(o(xn, { kind: `item`, name: `Trophy Collector`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item warp-stone`);
	var Sn = i($);
	n(
		Sn,
		() => `
<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>
<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>
<ul><li>Bullet Resist reduced from 40% to 35%</li></ul>
`
	);
	var Cn = a(Sn, 2);
	(o(Cn, { kind: `item`, name: `Warp Stone`, ability: null }), t($));
	var wn = a($, 2);
	r(wn, 1, `item weapon-shielding`);
	var Tn = i(wn);
	n(
		Tn,
		() => `
<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>
<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>
<ul><li>Barrier reduced from 325 to 300</li><li>Barrier boon scaling increased from 4 to 5</li></ul>
`
	);
	var En = a(Tn, 2);
	(o(En, { kind: `item`, name: `Weapon Shielding`, ability: null }), t(wn), ee(e, c));
}
export { d as default, ie as metadata, u as readingManifest, l as toc };
