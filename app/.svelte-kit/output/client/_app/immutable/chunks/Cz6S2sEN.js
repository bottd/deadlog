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
		names: [`Calico`, `Kelvin`, `Lady Geist`, `Viscous`, `Warden`, `Wraith`]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Bullet Resilience`,
			`Enchanter's Emblem`,
			`Extra Regen`,
			`Fortitude`,
			`Healing Booster`,
			`Opening Rounds`,
			`Radiant Regeneration`,
			`Rescue Beam`,
			`Spirit Resilience`,
			`Superior Cooldown`
		]
	});
}
var l = {
		title: `06-17-2025 Update`,
		thread_id: `68401`,
		published: `2025-06-17T13:34:00-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Removed the Arch Monument. Removed the rope entrances to Mid Boss. Removed barrels and kiosk low cover. Replaced bridge with a larger version. Added stairway entrance to Mid Boss. Moved the veil areas to fit with the new bridge. Veil areas connect to Mid Boss. Extended the wall cover further toward the bridge. Started Mid Boss Sewer theming. Added connection from the rope shafts to upper area of Mid Boss. Increase height of entrances to rope shafts from Mid Boss. Added sloped mounds on side of stairs from the pit. Adjusted breakables that were spread out in the underground Flex Slot changed from "Two Guardians" to "Three Guardians" Flex Slot changed from "Two Walker" to "Three Walkers" Guardian and Walker total bounty is now split with all nearby players (including players that have done damage to it within 20s). Nearby players get 40% and the rest is split evenly with all 6 players (including those nearby). Trooper damage to Walkers reduced from 80 DPS to 60 DPS Hero Kill bounty increased from 250->1800 to 300->2000 (over 40 minutes, previously over 45 minutes) Killing heroes no longer spawns orbs, instead the souls are directly awarded to the killer and assisters Destroying objectives no longer spawns orbs, instead the souls are directly awarded to the killer and their team Trooper base bounty reduced from 132 to 120 Trooper bounty growth per minute increased from 1 to 1.5 Time holding Urn before taking damage reduced from 90s to 45s (1% max health damage per second) Time Urn will Autorun back to Home regardless of nearby players reduced from 75s to 45s Time an Urn will wait for a nearby player to pick it up reduced from 20s to 12s Cleaned up how boons are distributed. Previously some levels gave stat bonuses and some AP/Unlocks, now every level gives one of each. Power rebalanced on abilities and items to be the same overall as before. Total AP given out reduced from 32 to 29, total stat levels increased from 20 to 32 (but rescaled in value such that they are the same overall as before). Walker HP increased by 10% Walker Spirit Resist reduced from 40% to 30% Soul Orb auto claim radius reduced from 40m to 35m Headshot multiplier reduced from 1.9x to 1.8x Fixed some issues with hitting troopers while on ziplines Fix potential prediction issue on guns, causing clients' spread to potentially decay faster Rejuv drop duration reduced from 9s to 8s Tankbuster only goes on cooldown when it affects players (no longer goes on cooldown if an ability hits a trooper) Kelvin Arctic Beam cooldown increased from 24s to 25s Calico Ava no longer automatically breaks boxes, instead you can use the melee hotkey to do a pounce attack to break them Base Health reduced from 700 to 650 Base Health Growth reduced by 13% Leaping Slash melee multiplier has been reduced from 1.6 to 1.3 Return to Shadows T3 reduced from +30% Amp to +24% Kelvin Arctic Beam T1 reduced from -7.5s Cooldown to -7s Arctic Beam T3 range reduced from 13m to 10m Lady Geist Base bullet damage reduced from 26 to 23 Life Drain self slow increased from 25% to 40% Soul Exchange cast range reduced from 7m to 6m Viscous Goo Ball hitbox size increased a bit (easier to hit him) Splatter second bounce damage has been reduced from 70% damage to 50% damage. Damage is now 100%, 50%, 50% for first, second and third hit. Goo Ball damage reduced from 140 to 120 Warden Last Stand no longer gets reduced cooldown when interrupted Last Stand DPS reduced from 90 to 80 Last Stand T2 DPS reduced from +60 to +50 Last Stand spirit scaling increased from 1.4 to 1.6 Wraith Base health reduced from 700 to 650 Bullet damage growth reduced by 18% Card Trick damage reduced from 70 to 60 Card Trick spirit scaling increased from 0.84 to 1.1 Card Trick T3 now also applies a 25% Slow for 1s Full Auto T2 reduced from 4 Spirit Damage to 3 Project Mind improved teleport targeting to remove cases where Wraith would clip nearby geo unintentionally Opening Rounds No longer works against objectives Extra Regen Regen reduced from 3.5 to 3 Healing Booster Regen reduced from 3.5 to 3 Enchanter's Emblem Spirit Resistance reduced from 18% to 15% Fortitude Damage taken cooldown increased from 12s to 14s Bullet Resilience Health threshold for bonus resistance reduced from 35% to 30% Spirit Resilience Health threshold for bonus resistance reduced from 35% to 30% Rescue Beam Cooldown increased from 30s to 60s Radiant Regeneration Regen reduced from 5 HP to 4 Healing on ability cast reduced from 100 to 70 Healing on ability cast now scales with Boons (1.5) Superior Cooldown Cooldown Reduction reduced from 25% to 24%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-06-03`, to: `2025-06-17` },
			after: { from: `2025-06-18`, to: `2025-07-02` }
		}
	},
	u = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Calico`, id: `calico` },
		{ level: 3, title: `Ava`, id: `ava` },
		{ level: 3, title: `Leaping Slash`, id: `leaping-slash` },
		{ level: 3, title: `Return to Shadows`, id: `return-to-shadows` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Life Drain`, id: `life-drain` },
		{ level: 3, title: `Soul Exchange`, id: `soul-exchange` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball-1` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 3, title: `Last Stand DPS`, id: `last-stand-dps` },
		{ level: 3, title: `Last Stand`, id: `last-stand-1` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 3, title: `Full Auto`, id: `full-auto` },
		{ level: 3, title: `Project Mind`, id: `project-mind` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Bullet Resilience`, id: `bullet-resilience` },
		{ level: 2, title: `Enchanter's Emblem`, id: `enchanter-s-emblem` },
		{ level: 2, title: `Extra Regen`, id: `extra-regen` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Healing Booster`, id: `healing-booster` },
		{ level: 2, title: `Opening Rounds`, id: `opening-rounds` },
		{ level: 2, title: `Radiant Regeneration`, id: `radiant-regeneration` },
		{ level: 2, title: `Rescue Beam`, id: `rescue-beam` },
		{ level: 2, title: `Spirit Resilience`, id: `spirit-resilience` },
		{ level: 2, title: `Superior Cooldown`, id: `superior-cooldown` }
	],
	d = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-06-03`, to: `2025-06-17` },
			after: { from: `2025-06-18`, to: `2025-07-02` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Calico`, id: `calico` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `item`, name: `Bullet Resilience`, id: `bullet-resilience` },
			{ kind: `item`, name: `Enchanter's Emblem`, id: `enchanter-s-emblem` },
			{ kind: `item`, name: `Extra Regen`, id: `extra-regen` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Healing Booster`, id: `healing-booster` },
			{ kind: `item`, name: `Opening Rounds`, id: `opening-rounds` },
			{ kind: `item`, name: `Radiant Regeneration`, id: `radiant-regeneration` },
			{ kind: `item`, name: `Rescue Beam`, id: `rescue-beam` },
			{ kind: `item`, name: `Spirit Resilience`, id: `spirit-resilience` },
			{ kind: `item`, name: `Superior Cooldown`, id: `superior-cooldown` }
		],
		related: []
	},
	ie = e(
		`<!> <!> <div><!> <div><!> <!></div> <!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function f(e) {
	var c = ie(),
		l = te(c);
	n(
		l,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Removed the Arch Monument.</li><li>Removed the rope entrances to Mid Boss.</li><li>Removed barrels and kiosk low cover.</li><li>Replaced bridge with a larger version.</li><li>Added stairway entrance to Mid Boss.</li><li>Moved the veil areas to fit with the new bridge.</li><li>Veil areas connect to Mid Boss.</li><li>Extended the wall cover further toward the bridge.</li><li>Started Mid Boss Sewer theming.</li><li>Added connection from the rope shafts to upper area of Mid Boss.</li><li>Increase height of entrances to rope shafts from Mid Boss.</li><li>Added sloped mounds on side of stairs from the pit.</li><li>Adjusted breakables that were spread out in the underground</li><li>Flex Slot changed from &quot;Two Guardians&quot; to &quot;Three Guardians&quot;</li><li>Flex Slot changed from &quot;Two Walker&quot; to &quot;Three Walkers&quot;</li><li>Guardian and Walker total bounty is now split with all nearby players (including players that have done damage to it within 20s). Nearby players get 40% and the rest is split evenly with all 6 players (including those nearby).</li><li>Trooper damage to Walkers reduced from 80 DPS to 60 DPS</li><li>Hero Kill bounty increased from 250-&gt;1800 to 300-&gt;2000 (over 40 minutes, previously over 45 minutes)</li><li>Killing heroes no longer spawns orbs, instead the souls are directly awarded to the killer and assisters</li><li>Destroying objectives no longer spawns orbs, instead the souls are directly awarded to the killer and their team</li><li>Trooper base bounty reduced from 132 to 120</li><li>Trooper bounty growth per minute increased from 1 to 1.5</li><li>Time holding Urn before taking damage reduced from 90s to 45s (1% max health damage per second)</li><li>Time Urn will Autorun back to Home regardless of nearby players reduced from 75s to 45s</li><li>Time an Urn will wait for a nearby player to pick it up reduced from 20s to 12s</li><li>Cleaned up how boons are distributed. Previously some levels gave stat bonuses and some AP/Unlocks, now every level gives one of each. Power rebalanced on abilities and items to be the same overall as before. Total AP given out reduced from 32 to 29, total stat levels increased from 20 to 32 (but rescaled in value such that they are the same overall as before).</li><li>Walker HP increased by 10%</li><li>Walker Spirit Resist reduced from 40% to 30%</li><li>Soul Orb auto claim radius reduced from 40m to 35m</li><li>Headshot multiplier reduced from 1.9x to 1.8x</li><li>Fixed some issues with hitting troopers while on ziplines</li><li>Fix potential prediction issue on guns, causing clients&#x27; spread to potentially decay faster</li><li>Rejuv drop duration reduced from 9s to 8s</li><li>Tankbuster only goes on cooldown when it affects players (no longer goes on cooldown if an ability hits a trooper)</li><li>Kelvin Arctic Beam cooldown increased from 24s to 25s</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
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
	r(p, 1, `ability ava`);
	var m = i(p);
	n(
		m,
		() => `
<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>
<h4 id="ava"><a href="/ability/ava">Ava</a></h4>
<ul><li>Ava no longer automatically breaks boxes, instead you can use the melee hotkey to do a pounce attack to break them</li></ul>
`
	);
	var ae = a(m, 2);
	(o(ae, { kind: `hero`, name: `Calico`, ability: `Ava` }), t(p));
	var h = a(p, 2);
	n(
		h,
		() => `
<ul><li>Base Health reduced from 700 to 650</li><li>Base Health Growth reduced by 13%</li></ul>
`
	);
	var g = a(h, 2);
	r(g, 1, `ability leaping-slash`);
	var oe = i(g);
	n(
		oe,
		() => `
<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>
<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>
<ul><li>Leaping Slash melee multiplier has been reduced from 1.6 to 1.3</li></ul>
`
	);
	var se = a(oe, 2);
	(o(se, { kind: `hero`, name: `Calico`, ability: `Leaping Slash` }), t(g));
	var _ = a(g, 2);
	r(_, 1, `ability return-to-shadows`);
	var ce = i(_);
	n(
		ce,
		() => `
<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>
<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>
<ul><li>Return to Shadows T3 reduced from +30% Amp to +24%</li></ul>
`
	);
	var le = a(ce, 2);
	(o(le, { kind: `hero`, name: `Calico`, ability: `Return to Shadows` }), t(_), t(d));
	var v = a(d, 2);
	r(v, 1, `hero kelvin`);
	var y = i(v);
	n(
		y,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var b = a(y, 2);
	r(b, 1, `ability arctic-beam`);
	var ue = i(b);
	n(
		ue,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam T1 reduced from -7.5s Cooldown to -7s</li><li>Arctic Beam T3 range reduced from 13m to 10m</li></ul>
`
	);
	var de = a(ue, 2);
	(o(de, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), t(b), t(v));
	var x = a(v, 2);
	r(x, 1, `hero lady-geist`);
	var fe = i(x);
	n(
		fe,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
<ul><li>Base bullet damage reduced from 26 to 23</li></ul>
`
	);
	var S = a(fe, 2);
	r(S, 1, `ability life-drain`);
	var pe = i(S);
	n(
		pe,
		() => `
<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>
<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>
<ul><li>Life Drain self slow increased from 25% to 40%</li></ul>
`
	);
	var me = a(pe, 2);
	(o(me, { kind: `hero`, name: `Lady Geist`, ability: `Life Drain` }), t(S));
	var C = a(S, 2);
	r(C, 1, `ability soul-exchange`);
	var he = i(C);
	n(
		he,
		() => `
<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>
<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>
<ul><li>Soul Exchange cast range reduced from 7m to 6m</li></ul>
`
	);
	var ge = a(he, 2);
	(o(ge, { kind: `hero`, name: `Lady Geist`, ability: `Soul Exchange` }), t(C), t(x));
	var w = a(x, 2);
	r(w, 1, `hero viscous`);
	var _e = i(w);
	n(
		_e,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var T = a(_e, 2);
	r(T, 1, `ability goo-ball`);
	var ve = i(T);
	n(
		ve,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball hitbox size increased a bit (easier to hit him)</li></ul>
`
	);
	var ye = a(ve, 2);
	(o(ye, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(T));
	var E = a(T, 2);
	r(E, 1, `ability splatter`);
	var be = i(E);
	n(
		be,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter second bounce damage has been reduced from 70% damage to 50% damage. Damage is now 100%, 50%, 50% for first, second and third hit.</li></ul>
`
	);
	var xe = a(be, 2);
	(o(xe, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), t(E));
	var D = a(E, 2);
	r(D, 1, `ability goo-ball`);
	var Se = i(D);
	n(
		Se,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball-1"><a href="/ability/goo-ball">Goo Ball</a></h4>
`
	);
	var O = a(Se, 2),
		Ce = i(O),
		we = i(Ce);
	n(we, () => `Goo Ball damage reduced from 140 to 120`);
	var Te = a(we, 2);
	(s(Te, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Goo Ball damage reduced from 140 to 120`
	}),
		t(Ce),
		t(O));
	var Ee = a(O, 2);
	(o(Ee, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(D), t(w));
	var k = a(w, 2);
	r(k, 1, `hero warden`);
	var De = i(k);
	n(
		De,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
`
	);
	var A = a(De, 2);
	r(A, 1, `ability last-stand`);
	var j = i(A);
	n(
		j,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand no longer gets reduced cooldown when interrupted</li></ul>
`
	);
	var Oe = a(j, 2);
	(o(Oe, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), t(A));
	var M = a(A, 2);
	r(M, 1, `ability last-stand-dps`);
	var N = i(M);
	n(
		N,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand DPS change history</a></p>
<h4 id="last-stand-dps"><a href="/ability/last-stand">Last Stand DPS</a></h4>
<ul><li>Last Stand DPS reduced from 90 to 80</li></ul>
`
	);
	var ke = a(N, 2);
	(o(ke, { kind: `hero`, name: `Warden`, ability: `Last Stand DPS` }), t(M));
	var P = a(M, 2);
	r(P, 1, `ability last-stand`);
	var F = i(P);
	n(
		F,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand-1"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand T2 DPS reduced from +60 to +50</li><li>Last Stand spirit scaling increased from 1.4 to 1.6</li></ul>
`
	);
	var Ae = a(F, 2);
	(o(Ae, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), t(P), t(k));
	var I = a(k, 2);
	r(I, 1, `hero wraith`);
	var je = i(I);
	n(
		je,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
<ul><li>Base health reduced from 700 to 650</li><li>Bullet damage growth reduced by 18%</li></ul>
`
	);
	var L = a(je, 2);
	r(L, 1, `ability card-trick`);
	var Me = i(L);
	n(
		Me,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
`
	);
	var R = a(Me, 2),
		z = i(R),
		Ne = i(z);
	n(Ne, () => `Card Trick damage reduced from 70 to 60`);
	var Pe = a(Ne, 2);
	(s(Pe, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Card Trick damage reduced from 70 to 60`
	}),
		t(z));
	var B = a(z, 2);
	(n(B, () => `Card Trick spirit scaling increased from 0.84 to 1.1`, !0), t(B));
	var Fe = a(B, 2);
	(n(Fe, () => `Card Trick T3 now also applies a 25% Slow for 1s`, !0), t(Fe), t(R));
	var Ie = a(R, 2);
	(o(Ie, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), t(L));
	var V = a(L, 2);
	r(V, 1, `ability full-auto`);
	var Le = i(V);
	n(
		Le,
		() => `
<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>
<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>
<ul><li>Full Auto T2 reduced from 4 Spirit Damage to 3</li></ul>
`
	);
	var Re = a(Le, 2);
	(o(Re, { kind: `hero`, name: `Wraith`, ability: `Full Auto` }), t(V));
	var H = a(V, 2);
	r(H, 1, `ability project-mind`);
	var ze = i(H);
	n(
		ze,
		() => `
<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>
<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>
<ul><li>Project Mind improved teleport targeting to remove cases where Wraith would clip nearby geo unintentionally</li></ul>
`
	);
	var Be = a(ze, 2);
	(o(Be, { kind: `hero`, name: `Wraith`, ability: `Project Mind` }), t(H), t(I));
	var Ve = a(I, 2);
	n(
		Ve,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var He = a(Ve, 2);
	re(He, {});
	var U = a(He, 2);
	r(U, 1, `item bullet-resilience`);
	var Ue = i(U);
	n(
		Ue,
		() => `
<p><a href="/item/bullet-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resilience patch history</a></p>
<h3 id="bullet-resilience"><a href="/item/bullet-resilience">Bullet Resilience</a></h3>
<ul><li>Health threshold for bonus resistance reduced from 35% to 30%</li></ul>
`
	);
	var We = a(Ue, 2);
	(o(We, { kind: `item`, name: `Bullet Resilience`, ability: null }), t(U));
	var W = a(U, 2);
	r(W, 1, `item enchanter-s-emblem`);
	var Ge = i(W);
	n(
		Ge,
		() => `
<p><a href="/item/enchanters-emblem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enchanter&#x27;s Emblem patch history</a></p>
<h3 id="enchanter-s-emblem"><a href="/item/enchanters-emblem">Enchanter&#x27;s Emblem</a></h3>
<ul><li>Spirit Resistance reduced from 18% to 15%</li></ul>
`
	);
	var Ke = a(Ge, 2);
	(o(Ke, { kind: `item`, name: `Enchanter's Emblem`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item extra-regen`);
	var qe = i(G);
	n(
		qe,
		() => `
<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>
<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>
<ul><li>Regen reduced from 3.5 to 3</li></ul>
`
	);
	var Je = a(qe, 2);
	(o(Je, { kind: `item`, name: `Extra Regen`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item fortitude`);
	var Ye = i(K);
	n(
		Ye,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Damage taken cooldown increased from 12s to 14s</li></ul>
`
	);
	var Xe = a(Ye, 2);
	(o(Xe, { kind: `item`, name: `Fortitude`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item healing-booster`);
	var Ze = i(q);
	n(
		Ze,
		() => `
<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>
<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>
<ul><li>Regen reduced from 3.5 to 3</li></ul>
`
	);
	var Qe = a(Ze, 2);
	(o(Qe, { kind: `item`, name: `Healing Booster`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item opening-rounds`);
	var $e = i(J);
	n(
		$e,
		() => `
<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>
<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>
<ul><li>No longer works against objectives</li></ul>
`
	);
	var et = a($e, 2);
	(o(et, { kind: `item`, name: `Opening Rounds`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item radiant-regeneration`);
	var tt = i(Y);
	n(
		tt,
		() => `
<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>
<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>
<ul><li>Regen reduced from 5 HP to 4</li><li>Healing on ability cast reduced from 100 to 70</li><li>Healing on ability cast now scales with Boons (1.5)</li></ul>
`
	);
	var nt = a(tt, 2);
	(o(nt, { kind: `item`, name: `Radiant Regeneration`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item rescue-beam`);
	var rt = i(X);
	n(
		rt,
		() => `
<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>
<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>
`
	);
	var Z = a(rt, 2),
		it = i(Z),
		at = i(it);
	n(at, () => `Cooldown increased from 30s to 60s`);
	var ot = a(at, 2);
	(s(ot, {
		kind: `item`,
		name: `Rescue Beam`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 30s to 60s`
	}),
		t(it),
		t(Z));
	var st = a(Z, 2);
	(o(st, { kind: `item`, name: `Rescue Beam`, ability: null }), t(X));
	var Q = a(X, 2);
	r(Q, 1, `item spirit-resilience`);
	var ct = i(Q);
	n(
		ct,
		() => `
<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>
<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>
<ul><li>Health threshold for bonus resistance reduced from 35% to 30%</li></ul>
`
	);
	var lt = a(ct, 2);
	(o(lt, { kind: `item`, name: `Spirit Resilience`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item superior-cooldown`);
	var ut = i($);
	n(
		ut,
		() => `
<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>
<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>
<ul><li>Cooldown Reduction reduced from 25% to 24%</li></ul>
`
	);
	var dt = a(ut, 2);
	(o(dt, { kind: `item`, name: `Superior Cooldown`, ability: null }), t($), ee(e, c));
}
export { f as default, l as metadata, d as readingManifest, u as toc };
