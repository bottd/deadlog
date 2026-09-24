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
/* empty css        */ import { a as o, i as s, n as ne } from './vWaTnxY_.js';
function re(e) {
	ne(e, {
		type: `hero`,
		names: [
			`Bebop`,
			`Billy`,
			`Celeste`,
			`Doorman`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Holliday`,
			`Kelvin`,
			`Lady Geist`,
			`McGinnis`,
			`Mirage`,
			`Paradox`,
			`Rem`,
			`Shiv`,
			`Venator`,
			`Victor`,
			`Vyper`,
			`Yamato`
		]
	});
}
function ie(e) {
	ne(e, {
		type: `item`,
		names: [
			`Armor Piercing Rounds`,
			`Cultist Sacrifice`,
			`Decay`,
			`Echo Shard`,
			`Express Shot`,
			`Golden Goose Egg`,
			`Lightning Scroll`,
			`Plated Armor`,
			`Recharging Rush`,
			`Return Fire`,
			`Sharpshooter`,
			`Silence Wave`,
			`Spirit Shielding`,
			`Titanic Magazine`,
			`Toxic Bullets`,
			`Weapon Shielding`
		]
	});
}
var ae = {
		title: `04-10-2026 Update`,
		thread_id: `125825`,
		published: `2026-04-10T21:03:53-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Parrying is now allowed while ground dashing in order to bring it in-line with air dashing Parry anti mash protection previously would last for 0.25s after the parry success (so you couldn't parry again for that duration). It is now for 0.25s only after the initial parry input is provided, irrespective of when the parry success happens (this means there is less delay before you can do a back to back parry when parry success is done later in the duration) Medic Trooper missing health percent heal reduced from 16% to 14% Medic Trooper fixed regen growth per minute reduced from 4 to 3 Subsequent CC reduction increased from 10%/30% to 15/35% (window from 8s to 9s) Improved various abilities behavior when casting while sliding Bebop Weapon windup time reduced from 0.5s to 0.3s and fast windup time reduced from 0.1s to 0.05s Sticky Bomb can now be self cast again, but it deals 20% damage to yourself Sticky Bomb radius reduced from 10m to 8m Grapple Arm now deals light melee damage (0.7 scaling) Billy Bashdown T3 increased from -2s Charge Time to -3s Rising Ram T3 damage increased from 8% to 10% Celeste Base health reduced from 790 to 700 Health per boon reduced from 47 to 45 No longer has negative base bullet resistance Bullet damage rescaled from 22 + 0.7/boon to 18 + 0.82/boon Bullet cycle time increased from 0.6 to 0.65 (this is an 8% reduction in fire rate base and overall dps) Light Eater initial impact damage rescaled from 50 + 0.35 to 40 + 0.47 Light Eater on bullet hit rescaled from 20 + 0.28 to 15 + 0.34 Light Eater debuff duration reduced from 12s to 8s Light Eater debuff duration now scales with spirit (0.05) Dazzling Trick Barrier reduced from 120 to 100 Dazzling Trick T2 Barrier reduced from +100 to +80 Radiant Daggers T3 increased from 7% Fire Rate per Stack to 9% Shining Wonder damage increased from 105 + 0.63 to 120 + 0.73 Doorman Doorways now reveal on the minimap for enemies when they are within LOS Luggage Cart collision size reduced by 10% Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off) Dynamo Quantum Entanglement cooldown increased from 16s to 19s Grey Talon Spirit power per boon increased from 1.1 to 1.6 Charged Shot channeling move speed increased from 1.3m to 1.5m Guided Owl min speed reduced from 17.8m to 15m Guided Owl max speed increased from 35.56m to 36m Guided Owl duration increased from 18s to 20s Haze Sleep Dagger no longer takes you out of RMB zoom Sleep Dagger Wake Up delay now has spirit scaling (0.003) Sleep Dagger spirit scaling increased from 2.6 to 2.8 Sleep Dagger T2 increased from -15s Cooldown to -17s Sleep Dagger T3 sleep duration increased from +0.75s to +1s Sleep Dagger T3 slow duration increased from 2.5s to 3s Smoke Bomb spirit scaling increased from 0.08 to 0.1 Smoke Bomb T3 lifesteal increased from 30% to 40% Fixation Weapon Damage per stack increased from 0.18 to 0.2 Fixation T3 reduced from +0.14 Weapon Damage per stack to +0.12 Fixed being able to slide while using Bullet Dance Bullet Dance targeting is no longer a full radius around the hero, but instead is a cone in the direction you are aiming Bullet Dance cooldown reduced from 165s to 145s Bullet Dance no longer grants 60% Evasion Bullet Dance duration increased from 3s to 3.5s Bullet Dance duration spirit scaling reduced from 0.08 to 0.03 Bullet Dance fire rate increased from 20% to 25% Bullet Dance T3 changed from "+1 Additional Target and +3m Movespeed" to "+60% Evasion and +4m Movespeed" Holliday Various behavior and feel improvements to her gun Kelvin Frost Grenade healing spirit scaling reduced from 0.9 to 0.8 Frost Grenade T3 healing spirit scaling reduced from +1.0 to +0.9 Lady Geist Bullet damage rescaled from 21.94 + 0.946/boon to 20.7+1.0/boon Soul Exchange cooldown increased from 185s to 190s McGinnis Bullet damage increased from 6.2 + 0.16/boon to 6.4 + 0.17/boon Spectral Wall duration increased from 5.5s to 6s Spectral Wall segment count increased from 7 to 8 Mirage Fire Scarabs Health Steal per second reduced from 9 to 8 Fire Scarabs Health Steal per second spirit scaling reduced from 0.12 to 0.1 Djinn's Mark spirit scaling reduced from 0.38 to 0.35 Paradox Bullet damage increased from 6.42 + 0.242/boon to 6.8 + 0.26/boon Time Wall width increased from 7.5m to 8m Time Wall height increased from 3.5m to 4m Kinetic Carbine collision radius increased slightly Rem Fixed souls bug with breakables Tag Along can no longer be cancelled during the cast delay to prevent accidentally stopping it mid-cast Naptime radius increased from 17m to 19m Naptime T2 sleep duration increased from +0.5s to +0.75s Shiv Fixed Rage not building up against Barriers Venator Hex-Lined Snap Trap immobilize duration reduced from 1.5s to 1.25s Hex-Lined Snap Trap cooldown increased from 25s to 28s Hex-Lined Snap Trap T1 increased from -8s Cooldown to -11s Hex-Lined Snap Trap T2 increased from +0.75s Duration to +1s Victor Bullet damage increased from 12 to 13 Jumpstart T2 increased from +50 Total HP Regen to +70 Aura of Suffering now builds up over 8s instead of 6s Aura of Suffering T1 slow now also affects dashes Aura of Suffering T1 slow reduced from 30% to 25% Aura of Suffering Min DPS increased by 10% (affects base damage, AP and spirit scaling) Aura of Suffering Max DPS increased by 20% (affects base damage, AP and spirit scaling) Shocking Reanimation now applies a heavy diminishing slow immediately when you die Vyper Screwjab Dagger no longer takes you out of RMB zoom Screwjab Dagger charge time reduced from 4.5s to 4.0s Sliding uphill now allows for lateral movement Slither slide distance increased from +10% to +15% Yamato Fixed Crimson Slash not hitting through veils Recharging Rush Cooldown increased from 20s to 24s Titanic Magazine Ammo increased from 90% to 100% Weapon Damage increased from 12% to 14% Express Shot Secondary Fire Weapon Damage increased from 35% + 1%/boon to 40% + 1.3%/boon Toxic Bullets Buildup is now 10% slower Bleed reduced from 2% to 1.7% Anti Heal increased from -30% to -35% Sharpshooter Movement Speed penalty reduced from -1m to -0.7m Cultist Sacrifice Bonus Souls increased from 150% to 170% Armor Piercing Rounds Chance increased from 50% to 55% Return Fire Bullet damage returned increased from 50% to 60% Cooldown reduced from 25s to 23s Spirit Shielding Move Speed increased from 1.5m to 1.75m Barrier duration increased from 7s to 8s Weapon Shielding Move Speed increased from 1.5m to 1.75m Barrier duration increased from 7s to 8s Time Frame increased from 3.5s to 4s Plated Armor Bonus health increased from +100 to +130 Golden Goose Egg Souls required for permanent buff reduced from 150 to 100 Now only gives permanent buffs for actual accrued souls, not counting the initial 400 sellback amount (so it no longer instantly sells for permanent buffs) Decay Spirit scaling reduced from 0.0055 to 0.004 Silence Wave Damage reduced from 100 to 75 Spirit scaling reduced from 1.0 to 0.7 Cooldown increased from 30s to 42s Echo Shard Cooldown increased from 30s to 35s Lightning Scroll Fixed the stun delay being affected by debuff reducer making the stun go off faster`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-03-28`, to: `2026-04-11` },
			after: { from: `2026-04-12`, to: `2026-04-26` }
		}
	},
	oe = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 3, title: `Grapple Arm`, id: `grapple-arm` },
		{ level: 2, title: `Billy`, id: `billy` },
		{ level: 3, title: `Bashdown`, id: `bashdown` },
		{ level: 3, title: `Rising Ram`, id: `rising-ram` },
		{ level: 2, title: `Celeste`, id: `celeste` },
		{ level: 3, title: `Light Eater`, id: `light-eater` },
		{ level: 3, title: `Dazzling Trick Barrier`, id: `dazzling-trick-barrier` },
		{ level: 3, title: `Dazzling Trick`, id: `dazzling-trick` },
		{ level: 3, title: `Radiant Daggers`, id: `radiant-daggers` },
		{ level: 3, title: `Shining Wonder`, id: `shining-wonder` },
		{ level: 2, title: `Doorman`, id: `doorman` },
		{ level: 3, title: `Doorways`, id: `doorways` },
		{ level: 3, title: `Luggage Cart`, id: `luggage-cart` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Charged Shot`, id: `charged-shot` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Sleep Dagger Wake Up`, id: `sleep-dagger-wake-up` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger-1` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 3, title: `Fixation`, id: `fixation` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Soul Exchange`, id: `soul-exchange` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 3, title: `Djinn's Mark`, id: `djinn-s-mark` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 2, title: `Rem`, id: `rem` },
		{ level: 3, title: `Tag Along`, id: `tag-along` },
		{ level: 3, title: `Naptime`, id: `naptime` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 2, title: `Venator`, id: `venator` },
		{ level: 3, title: `Hex-Lined Snap Trap`, id: `hex-lined-snap-trap` },
		{ level: 2, title: `Victor`, id: `victor` },
		{ level: 3, title: `Jumpstart`, id: `jumpstart` },
		{ level: 3, title: `Aura of Suffering`, id: `aura-of-suffering` },
		{ level: 3, title: `Shocking Reanimation`, id: `shocking-reanimation` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Screwjab Dagger`, id: `screwjab-dagger` },
		{ level: 3, title: `Slither`, id: `slither` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Armor Piercing Rounds`, id: `armor-piercing-rounds` },
		{ level: 2, title: `Cultist Sacrifice`, id: `cultist-sacrifice` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Echo Shard`, id: `echo-shard` },
		{ level: 2, title: `Express Shot`, id: `express-shot` },
		{ level: 2, title: `Golden Goose Egg`, id: `golden-goose-egg` },
		{ level: 2, title: `Lightning Scroll`, id: `lightning-scroll` },
		{ level: 2, title: `Plated Armor`, id: `plated-armor` },
		{ level: 2, title: `Recharging Rush`, id: `recharging-rush` },
		{ level: 2, title: `Return Fire`, id: `return-fire` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silence Wave`, id: `silence-wave` },
		{ level: 2, title: `Spirit Shielding`, id: `spirit-shielding` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` },
		{ level: 2, title: `Weapon Shielding`, id: `weapon-shielding` }
	],
	c = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-03-28`, to: `2026-04-11` },
			after: { from: `2026-04-12`, to: `2026-04-26` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Billy`, id: `billy` },
			{ kind: `hero`, name: `Celeste`, id: `celeste` },
			{ kind: `hero`, name: `Doorman`, id: `doorman` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Rem`, id: `rem` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Venator`, id: `venator` },
			{ kind: `hero`, name: `Victor`, id: `victor` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Armor Piercing Rounds`, id: `armor-piercing-rounds` },
			{ kind: `item`, name: `Cultist Sacrifice`, id: `cultist-sacrifice` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Echo Shard`, id: `echo-shard` },
			{ kind: `item`, name: `Express Shot`, id: `express-shot` },
			{ kind: `item`, name: `Golden Goose Egg`, id: `golden-goose-egg` },
			{ kind: `item`, name: `Lightning Scroll`, id: `lightning-scroll` },
			{ kind: `item`, name: `Plated Armor`, id: `plated-armor` },
			{ kind: `item`, name: `Recharging Rush`, id: `recharging-rush` },
			{ kind: `item`, name: `Return Fire`, id: `return-fire` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silence Wave`, id: `silence-wave` },
			{ kind: `item`, name: `Spirit Shielding`, id: `spirit-shielding` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` },
			{ kind: `item`, name: `Weapon Shielding`, id: `weapon-shielding` }
		],
		related: []
	},
	se = e(
		`<!> <!> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul> <!></div></div> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div></div> <!> <div><!> <div><!> <ul><li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function ce(e) {
	var ne = se(),
		ae = te(ne);
	n(
		ae,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Parrying is now allowed while ground dashing in order to bring it in-line with air dashing</li><li>Parry anti mash protection previously would last for 0.25s after the parry success (so you couldn&#x27;t parry again for that duration). It is now for 0.25s only after the initial parry input is provided, irrespective of when the parry success happens (this means there is less delay before you can do a back to back parry when parry success is done later in the duration)</li><li>Medic Trooper missing health percent heal reduced from 16% to 14%</li><li>Medic Trooper fixed regen growth per minute reduced from 4 to 3</li><li>Subsequent CC reduction increased from 10%/30% to 15/35% (window from 8s to 9s)</li><li>Improved various abilities behavior when casting while sliding</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var oe = a(ae, 2);
	re(oe, {});
	var c = a(oe, 2);
	r(c, 1, `hero bebop`);
	var ce = i(c);
	n(
		ce,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
<ul><li>Weapon windup time reduced from 0.5s to 0.3s and fast windup time reduced from 0.1s to 0.05s</li></ul>
`
	);
	var l = a(ce, 2);
	r(l, 1, `ability sticky-bomb`);
	var le = i(l);
	n(
		le,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
`
	);
	var ue = a(le, 2),
		de = i(ue);
	(n(
		de,
		() => `Sticky Bomb can now be self cast again, but it deals 20% damage to yourself`,
		!0
	),
		t(de));
	var fe = a(de, 2),
		pe = i(fe);
	n(pe, () => `Sticky Bomb radius reduced from 10m to 8m`);
	var me = a(pe, 2);
	(s(me, {
		kind: `hero`,
		name: `Bebop`,
		groupIndex: 1,
		bulletIndex: 1,
		text: `Sticky Bomb radius reduced from 10m to 8m`
	}),
		t(fe),
		t(ue));
	var he = a(ue, 2);
	(o(he, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(l));
	var ge = a(l, 2);
	r(ge, 1, `ability grapple-arm`);
	var _e = i(ge);
	n(
		_e,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>
<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>
<ul><li>Grapple Arm now deals light melee damage (0.7 scaling)</li></ul>
`
	);
	var ve = a(_e, 2);
	(o(ve, { kind: `hero`, name: `Bebop`, ability: `Grapple Arm` }), t(ge), t(c));
	var u = a(c, 2);
	r(u, 1, `hero billy`);
	var ye = i(u);
	n(
		ye,
		() => `
<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>
<h3 id="billy"><a href="/hero/billy">Billy</a></h3>
`
	);
	var d = a(ye, 2);
	r(d, 1, `ability bashdown`);
	var be = i(d);
	n(
		be,
		() => `
<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>
<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>
<ul><li>Bashdown T3 increased from -2s Charge Time to -3s</li></ul>
`
	);
	var xe = a(be, 2);
	(o(xe, { kind: `hero`, name: `Billy`, ability: `Bashdown` }), t(d));
	var Se = a(d, 2);
	r(Se, 1, `ability rising-ram`);
	var Ce = i(Se);
	n(
		Ce,
		() => `
<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>
<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>
`
	);
	var we = a(Ce, 2),
		Te = i(we),
		Ee = i(Te);
	n(Ee, () => `Rising Ram T3 damage increased from 8% to 10%`);
	var De = a(Ee, 2);
	(s(De, {
		kind: `hero`,
		name: `Billy`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Rising Ram T3 damage increased from 8% to 10%`
	}),
		t(Te),
		t(we));
	var Oe = a(we, 2);
	(o(Oe, { kind: `hero`, name: `Billy`, ability: `Rising Ram` }), t(Se), t(u));
	var f = a(u, 2);
	r(f, 1, `hero celeste`);
	var ke = i(f);
	n(
		ke,
		() => `
<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>
<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>
<ul><li>Base health reduced from 790 to 700</li><li>Health per boon reduced from 47 to 45</li><li>No longer has negative base bullet resistance</li><li>Bullet damage rescaled from 22 + 0.7/boon to 18 + 0.82/boon</li><li>Bullet cycle time increased from 0.6 to 0.65 (this is an 8% reduction in fire rate base and overall dps)</li></ul>
`
	);
	var p = a(ke, 2);
	r(p, 1, `ability light-eater`);
	var Ae = i(p);
	n(
		Ae,
		() => `
<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>
<h4 id="light-eater"><a href="/ability/light-eater">Light Eater</a></h4>
<ul><li>Light Eater initial impact damage rescaled from 50 + 0.35 to 40 + 0.47</li><li>Light Eater on bullet hit rescaled from 20 + 0.28 to 15 + 0.34</li><li>Light Eater debuff duration reduced from 12s to 8s</li><li>Light Eater debuff duration now scales with spirit (0.05)</li></ul>
`
	);
	var je = a(Ae, 2);
	(o(je, { kind: `hero`, name: `Celeste`, ability: `Light Eater` }), t(p));
	var m = a(p, 2);
	r(m, 1, `ability dazzling-trick-barrier`);
	var Me = i(m);
	n(
		Me,
		() => `
<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick Barrier change history</a></p>
<h4 id="dazzling-trick-barrier"><a href="/ability/dazzling-trick">Dazzling Trick Barrier</a></h4>
<ul><li>Dazzling Trick Barrier reduced from 120 to 100</li></ul>
`
	);
	var Ne = a(Me, 2);
	(o(Ne, { kind: `hero`, name: `Celeste`, ability: `Dazzling Trick Barrier` }), t(m));
	var h = a(m, 2);
	r(h, 1, `ability dazzling-trick`);
	var Pe = i(h);
	n(
		Pe,
		() => `
<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>
<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>
<ul><li>Dazzling Trick T2 Barrier reduced from +100 to +80</li></ul>
`
	);
	var Fe = a(Pe, 2);
	(o(Fe, { kind: `hero`, name: `Celeste`, ability: `Dazzling Trick` }), t(h));
	var g = a(h, 2);
	r(g, 1, `ability radiant-daggers`);
	var Ie = i(g);
	n(
		Ie,
		() => `
<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>
<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>
<ul><li>Radiant Daggers T3 increased from 7% Fire Rate per Stack to 9%</li></ul>
`
	);
	var Le = a(Ie, 2);
	(o(Le, { kind: `hero`, name: `Celeste`, ability: `Radiant Daggers` }), t(g));
	var Re = a(g, 2);
	r(Re, 1, `ability shining-wonder`);
	var ze = i(Re);
	n(
		ze,
		() => `
<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>
<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>
<ul><li>Shining Wonder damage increased from 105 + 0.63 to 120 + 0.73</li></ul>
`
	);
	var Be = a(ze, 2);
	(o(Be, { kind: `hero`, name: `Celeste`, ability: `Shining Wonder` }), t(Re), t(f));
	var _ = a(f, 2);
	r(_, 1, `hero doorman`);
	var Ve = i(_);
	n(
		Ve,
		() => `
<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>
<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>
`
	);
	var v = a(Ve, 2);
	r(v, 1, `ability doorways`);
	var He = i(v);
	n(
		He,
		() => `
<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorways change history</a></p>
<h4 id="doorways"><a href="/ability/doorway">Doorways</a></h4>
<ul><li>Doorways now reveal on the minimap for enemies when they are within LOS</li></ul>
`
	);
	var Ue = a(He, 2);
	(o(Ue, { kind: `hero`, name: `Doorman`, ability: `Doorways` }), t(v));
	var We = a(v, 2);
	r(We, 1, `ability luggage-cart`);
	var Ge = i(We);
	n(
		Ge,
		() => `
<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>
<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>
<ul><li>Luggage Cart collision size reduced by 10%</li><li>Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off)</li></ul>
`
	);
	var Ke = a(Ge, 2);
	(o(Ke, { kind: `hero`, name: `Doorman`, ability: `Luggage Cart` }), t(We), t(_));
	var y = a(_, 2);
	r(y, 1, `hero dynamo`);
	var qe = i(y);
	n(
		qe,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var Je = a(qe, 2);
	r(Je, 1, `ability quantum-entanglement`);
	var Ye = i(Je);
	n(
		Ye,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
`
	);
	var Xe = a(Ye, 2),
		Ze = i(Xe),
		Qe = i(Ze);
	n(Qe, () => `Quantum Entanglement cooldown increased from 16s to 19s`);
	var $e = a(Qe, 2);
	(s($e, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Quantum Entanglement cooldown increased from 16s to 19s`
	}),
		t(Ze),
		t(Xe));
	var et = a(Xe, 2);
	(o(et, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), t(Je), t(y));
	var b = a(y, 2);
	r(b, 1, `hero grey-talon`);
	var tt = i(b);
	n(
		tt,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
<ul><li>Spirit power per boon increased from 1.1 to 1.6</li></ul>
`
	);
	var x = a(tt, 2);
	r(x, 1, `ability charged-shot`);
	var nt = i(x);
	n(
		nt,
		() => `
<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>
<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>
<ul><li>Charged Shot channeling move speed increased from 1.3m to 1.5m</li></ul>
`
	);
	var rt = a(nt, 2);
	(o(rt, { kind: `hero`, name: `Grey Talon`, ability: `Charged Shot` }), t(x));
	var it = a(x, 2);
	r(it, 1, `ability guided-owl`);
	var at = i(it);
	n(
		at,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
<ul><li>Guided Owl min speed reduced from 17.8m to 15m</li><li>Guided Owl max speed increased from 35.56m to 36m</li><li>Guided Owl duration increased from 18s to 20s</li></ul>
`
	);
	var ot = a(at, 2);
	(o(ot, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), t(it), t(b));
	var S = a(b, 2);
	r(S, 1, `hero haze`);
	var st = i(S);
	n(
		st,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var C = a(st, 2);
	r(C, 1, `ability sleep-dagger`);
	var ct = i(C);
	n(
		ct,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger no longer takes you out of RMB zoom</li></ul>
`
	);
	var lt = a(ct, 2);
	(o(lt, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(C));
	var w = a(C, 2);
	r(w, 1, `ability sleep-dagger-wake-up`);
	var ut = i(w);
	n(
		ut,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Wake Up change history</a></p>
<h4 id="sleep-dagger-wake-up"><a href="/ability/sleep-dagger">Sleep Dagger Wake Up</a></h4>
<ul><li>Sleep Dagger Wake Up delay now has spirit scaling (0.003)</li></ul>
`
	);
	var dt = a(ut, 2);
	(o(dt, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger Wake Up` }), t(w));
	var T = a(w, 2);
	r(T, 1, `ability sleep-dagger`);
	var ft = i(T);
	n(
		ft,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger-1"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger spirit scaling increased from 2.6 to 2.8</li><li>Sleep Dagger T2 increased from -15s Cooldown to -17s</li><li>Sleep Dagger T3 sleep duration increased from +0.75s to +1s</li><li>Sleep Dagger T3 slow duration increased from 2.5s to 3s</li></ul>
`
	);
	var pt = a(ft, 2);
	(o(pt, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(T));
	var E = a(T, 2);
	r(E, 1, `ability smoke-bomb`);
	var mt = i(E);
	n(
		mt,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb spirit scaling increased from 0.08 to 0.1</li><li>Smoke Bomb T3 lifesteal increased from 30% to 40%</li></ul>
`
	);
	var ht = a(mt, 2);
	(o(ht, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), t(E));
	var D = a(E, 2);
	r(D, 1, `ability fixation`);
	var gt = i(D);
	n(
		gt,
		() => `
<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>
<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>
<ul><li>Fixation Weapon Damage per stack increased from 0.18 to 0.2</li><li>Fixation T3 reduced from +0.14 Weapon Damage per stack to +0.12</li></ul>
`
	);
	var _t = a(gt, 2);
	(o(_t, { kind: `hero`, name: `Haze`, ability: `Fixation` }), t(D));
	var vt = a(D, 2);
	r(vt, 1, `ability bullet-dance`);
	var yt = i(vt);
	n(
		yt,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
`
	);
	var bt = a(yt, 2),
		xt = i(bt);
	(n(xt, () => `Fixed being able to slide while using Bullet Dance`, !0), t(xt));
	var St = a(xt, 2);
	(n(
		St,
		() =>
			`Bullet Dance targeting is no longer a full radius around the hero, but instead is a cone in the direction you are aiming`,
		!0
	),
		t(St));
	var Ct = a(St, 2),
		wt = i(Ct);
	n(wt, () => `Bullet Dance cooldown reduced from 165s to 145s`);
	var Tt = a(wt, 2);
	(s(Tt, {
		kind: `hero`,
		name: `Haze`,
		groupIndex: 5,
		bulletIndex: 2,
		text: `Bullet Dance cooldown reduced from 165s to 145s`
	}),
		t(Ct));
	var Et = a(Ct, 2);
	(n(Et, () => `Bullet Dance no longer grants 60% Evasion`, !0), t(Et));
	var Dt = a(Et, 2);
	(n(Dt, () => `Bullet Dance duration increased from 3s to 3.5s`, !0), t(Dt));
	var Ot = a(Dt, 2);
	(n(Ot, () => `Bullet Dance duration spirit scaling reduced from 0.08 to 0.03`, !0),
		t(Ot));
	var kt = a(Ot, 2);
	(n(kt, () => `Bullet Dance fire rate increased from 20% to 25%`, !0), t(kt));
	var At = a(kt, 2);
	(n(
		At,
		() =>
			`Bullet Dance T3 changed from &quot;+1 Additional Target and +3m Movespeed&quot; to &quot;+60% Evasion and +4m Movespeed&quot;`,
		!0
	),
		t(At),
		t(bt));
	var jt = a(bt, 2);
	(o(jt, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(vt), t(S));
	var Mt = a(S, 2);
	n(
		Mt,
		() => `
<div class="hero holliday">
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
<ul><li>Various behavior and feel improvements to her gun</li></ul>
</div>
`
	);
	var O = a(Mt, 2);
	r(O, 1, `hero kelvin`);
	var Nt = i(O);
	n(
		Nt,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var Pt = a(Nt, 2);
	r(Pt, 1, `ability frost-grenade`);
	var Ft = i(Pt);
	n(
		Ft,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
<ul><li>Frost Grenade healing spirit scaling reduced from 0.9 to 0.8</li><li>Frost Grenade T3 healing spirit scaling reduced from +1.0 to +0.9</li></ul>
`
	);
	var It = a(Ft, 2);
	(o(It, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), t(Pt), t(O));
	var k = a(O, 2);
	r(k, 1, `hero lady-geist`);
	var Lt = i(k);
	n(
		Lt,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
<ul><li>Bullet damage rescaled from 21.94 + 0.946/boon to 20.7+1.0/boon</li></ul>
`
	);
	var Rt = a(Lt, 2);
	r(Rt, 1, `ability soul-exchange`);
	var zt = i(Rt);
	n(
		zt,
		() => `
<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>
<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>
`
	);
	var Bt = a(zt, 2),
		Vt = i(Bt),
		Ht = i(Vt);
	n(Ht, () => `Soul Exchange cooldown increased from 185s to 190s`);
	var Ut = a(Ht, 2);
	(s(Ut, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Soul Exchange cooldown increased from 185s to 190s`
	}),
		t(Vt),
		t(Bt));
	var Wt = a(Bt, 2);
	(o(Wt, { kind: `hero`, name: `Lady Geist`, ability: `Soul Exchange` }), t(Rt), t(k));
	var A = a(k, 2);
	r(A, 1, `hero mcginnis`);
	var Gt = i(A);
	n(
		Gt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
<ul><li>Bullet damage increased from 6.2 + 0.16/boon to 6.4 + 0.17/boon</li></ul>
`
	);
	var Kt = a(Gt, 2);
	r(Kt, 1, `ability spectral-wall`);
	var qt = i(Kt);
	n(
		qt,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Spectral Wall duration increased from 5.5s to 6s</li><li>Spectral Wall segment count increased from 7 to 8</li></ul>
`
	);
	var Jt = a(qt, 2);
	(o(Jt, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), t(Kt), t(A));
	var j = a(A, 2);
	r(j, 1, `hero mirage`);
	var Yt = i(j);
	n(
		Yt,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var M = a(Yt, 2);
	r(M, 1, `ability fire-scarabs`);
	var Xt = i(M);
	n(
		Xt,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
<ul><li>Fire Scarabs Health Steal per second reduced from 9 to 8</li><li>Fire Scarabs Health Steal per second spirit scaling reduced from 0.12 to 0.1</li></ul>
`
	);
	var Zt = a(Xt, 2);
	(o(Zt, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), t(M));
	var Qt = a(M, 2);
	r(Qt, 1, `ability djinn-s-mark`);
	var $t = i(Qt);
	n(
		$t,
		() => `
<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>
<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>
<ul><li>Djinn&#x27;s Mark spirit scaling reduced from 0.38 to 0.35</li></ul>
`
	);
	var en = a($t, 2);
	(o(en, { kind: `hero`, name: `Mirage`, ability: `Djinn's Mark` }), t(Qt), t(j));
	var N = a(j, 2);
	r(N, 1, `hero paradox`);
	var tn = i(N);
	n(
		tn,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
<ul><li>Bullet damage increased from 6.42 + 0.242/boon to 6.8 + 0.26/boon</li></ul>
`
	);
	var P = a(tn, 2);
	r(P, 1, `ability time-wall`);
	var nn = i(P);
	n(
		nn,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
<ul><li>Time Wall width increased from 7.5m to 8m</li><li>Time Wall height increased from 3.5m to 4m</li></ul>
`
	);
	var rn = a(nn, 2);
	(o(rn, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), t(P));
	var an = a(P, 2);
	r(an, 1, `ability kinetic-carbine`);
	var on = i(an);
	n(
		on,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine collision radius increased slightly</li></ul>
`
	);
	var sn = a(on, 2);
	(o(sn, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), t(an), t(N));
	var F = a(N, 2);
	r(F, 1, `hero rem`);
	var cn = i(F);
	n(
		cn,
		() => `
<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>
<h3 id="rem"><a href="/hero/rem">Rem</a></h3>
<ul><li>Fixed souls bug with breakables</li></ul>
`
	);
	var I = a(cn, 2);
	r(I, 1, `ability tag-along`);
	var ln = i(I);
	n(
		ln,
		() => `
<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>
<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>
<ul><li>Tag Along can no longer be cancelled during the cast delay to prevent accidentally stopping it mid-cast</li></ul>
`
	);
	var un = a(ln, 2);
	(o(un, { kind: `hero`, name: `Rem`, ability: `Tag Along` }), t(I));
	var dn = a(I, 2);
	r(dn, 1, `ability naptime`);
	var fn = i(dn);
	n(
		fn,
		() => `
<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>
<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>
`
	);
	var pn = a(fn, 2),
		mn = i(pn),
		hn = i(mn);
	n(hn, () => `Naptime radius increased from 17m to 19m`);
	var gn = a(hn, 2);
	(s(gn, {
		kind: `hero`,
		name: `Rem`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Naptime radius increased from 17m to 19m`
	}),
		t(mn));
	var _n = a(mn, 2);
	(n(_n, () => `Naptime T2 sleep duration increased from +0.5s to +0.75s`, !0),
		t(_n),
		t(pn));
	var vn = a(pn, 2);
	(o(vn, { kind: `hero`, name: `Rem`, ability: `Naptime` }), t(dn), t(F));
	var yn = a(F, 2);
	n(
		yn,
		() => `
<div class="hero shiv">
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Fixed Rage not building up against Barriers</li></ul>
</div>
`
	);
	var L = a(yn, 2);
	r(L, 1, `hero venator`);
	var bn = i(L);
	n(
		bn,
		() => `
<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>
<h3 id="venator"><a href="/hero/venator">Venator</a></h3>
`
	);
	var xn = a(bn, 2);
	r(xn, 1, `ability hex-lined-snap-trap`);
	var Sn = i(xn);
	n(
		Sn,
		() => `
<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex-Lined Snap Trap change history</a></p>
<h4 id="hex-lined-snap-trap"><a href="/ability/hex-lined-snap-trap">Hex-Lined Snap Trap</a></h4>
`
	);
	var Cn = a(Sn, 2),
		wn = i(Cn);
	(n(wn, () => `Hex-Lined Snap Trap immobilize duration reduced from 1.5s to 1.25s`, !0),
		t(wn));
	var Tn = a(wn, 2),
		En = i(Tn);
	n(En, () => `Hex-Lined Snap Trap cooldown increased from 25s to 28s`);
	var Dn = a(En, 2);
	(s(Dn, {
		kind: `hero`,
		name: `Venator`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Hex-Lined Snap Trap cooldown increased from 25s to 28s`
	}),
		t(Tn));
	var On = a(Tn, 2);
	(n(On, () => `Hex-Lined Snap Trap T1 increased from -8s Cooldown to -11s`, !0), t(On));
	var kn = a(On, 2);
	(n(kn, () => `Hex-Lined Snap Trap T2 increased from +0.75s Duration to +1s`, !0),
		t(kn),
		t(Cn));
	var An = a(Cn, 2);
	(o(An, { kind: `hero`, name: `Venator`, ability: `Hex-Lined Snap Trap` }), t(xn), t(L));
	var R = a(L, 2);
	r(R, 1, `hero victor`);
	var jn = i(R);
	n(
		jn,
		() => `
<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>
<h3 id="victor"><a href="/hero/victor">Victor</a></h3>
<ul><li>Bullet damage increased from 12 to 13</li></ul>
`
	);
	var z = a(jn, 2);
	r(z, 1, `ability jumpstart`);
	var Mn = i(z);
	n(
		Mn,
		() => `
<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>
<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>
<ul><li>Jumpstart T2 increased from +50 Total HP Regen to +70</li></ul>
`
	);
	var Nn = a(Mn, 2);
	(o(Nn, { kind: `hero`, name: `Victor`, ability: `Jumpstart` }), t(z));
	var B = a(z, 2);
	r(B, 1, `ability aura-of-suffering`);
	var Pn = i(B);
	n(
		Pn,
		() => `
<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>
<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>
<ul><li>Aura of Suffering now builds up over 8s instead of 6s</li><li>Aura of Suffering T1 slow now also affects dashes</li><li>Aura of Suffering T1 slow reduced from 30% to 25%</li><li>Aura of Suffering Min DPS increased by 10% (affects base damage, AP and spirit scaling)</li><li>Aura of Suffering Max DPS increased by 20% (affects base damage, AP and spirit scaling)</li></ul>
`
	);
	var Fn = a(Pn, 2);
	(o(Fn, { kind: `hero`, name: `Victor`, ability: `Aura of Suffering` }), t(B));
	var In = a(B, 2);
	r(In, 1, `ability shocking-reanimation`);
	var Ln = i(In);
	n(
		Ln,
		() => `
<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>
<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>
<ul><li>Shocking Reanimation now applies a heavy diminishing slow immediately when you die</li></ul>
`
	);
	var Rn = a(Ln, 2);
	(o(Rn, { kind: `hero`, name: `Victor`, ability: `Shocking Reanimation` }), t(In), t(R));
	var V = a(R, 2);
	r(V, 1, `hero vyper`);
	var zn = i(V);
	n(
		zn,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
`
	);
	var H = a(zn, 2);
	r(H, 1, `ability screwjab-dagger`);
	var Bn = i(H);
	n(
		Bn,
		() => `
<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>
<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>
<ul><li>Screwjab Dagger no longer takes you out of RMB zoom</li><li>Screwjab Dagger charge time reduced from 4.5s to 4.0s</li></ul>
`
	);
	var Vn = a(Bn, 2);
	(o(Vn, { kind: `hero`, name: `Vyper`, ability: `Screwjab Dagger` }), t(H));
	var Hn = a(H, 2);
	n(
		Hn,
		() => `
<ul><li>Sliding uphill now allows for lateral movement</li></ul>
`
	);
	var Un = a(Hn, 2);
	r(Un, 1, `ability slither`);
	var Wn = i(Un);
	n(
		Wn,
		() => `
<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>
<h4 id="slither"><a href="/ability/slither">Slither</a></h4>
<ul><li>Slither slide distance increased from +10% to +15%</li></ul>
`
	);
	var Gn = a(Wn, 2);
	(o(Gn, { kind: `hero`, name: `Vyper`, ability: `Slither` }), t(Un), t(V));
	var U = a(V, 2);
	r(U, 1, `hero yamato`);
	var Kn = i(U);
	n(
		Kn,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var qn = a(Kn, 2);
	r(qn, 1, `ability crimson-slash`);
	var Jn = i(qn);
	n(
		Jn,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
<ul><li>Fixed Crimson Slash not hitting through veils</li></ul>
`
	);
	var Yn = a(Jn, 2);
	(o(Yn, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), t(qn), t(U));
	var Xn = a(U, 2);
	n(
		Xn,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Zn = a(Xn, 2);
	ie(Zn, {});
	var W = a(Zn, 2);
	r(W, 1, `item armor-piercing-rounds`);
	var Qn = i(W);
	n(
		Qn,
		() => `
<p><a href="/item/armor-piercing-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Armor Piercing Rounds patch history</a></p>
<h3 id="armor-piercing-rounds"><a href="/item/armor-piercing-rounds">Armor Piercing Rounds</a></h3>
<ul><li>Chance increased from 50% to 55%</li></ul>
`
	);
	var $n = a(Qn, 2);
	(o($n, { kind: `item`, name: `Armor Piercing Rounds`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item cultist-sacrifice`);
	var er = i(G);
	n(
		er,
		() => `
<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>
<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>
<ul><li>Bonus Souls increased from 150% to 170%</li></ul>
`
	);
	var tr = a(er, 2);
	(o(tr, { kind: `item`, name: `Cultist Sacrifice`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item decay`);
	var nr = i(K);
	n(
		nr,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
<ul><li>Spirit scaling reduced from 0.0055 to 0.004</li></ul>
`
	);
	var rr = a(nr, 2);
	(o(rr, { kind: `item`, name: `Decay`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item echo-shard`);
	var ir = i(q);
	n(
		ir,
		() => `
<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>
<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>
`
	);
	var ar = a(ir, 2),
		or = i(ar),
		sr = i(or);
	n(sr, () => `Cooldown increased from 30s to 35s`);
	var cr = a(sr, 2);
	(s(cr, {
		kind: `item`,
		name: `Echo Shard`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 30s to 35s`
	}),
		t(or),
		t(ar));
	var lr = a(ar, 2);
	(o(lr, { kind: `item`, name: `Echo Shard`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item express-shot`);
	var ur = i(J);
	n(
		ur,
		() => `
<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>
<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>
<ul><li>Secondary Fire Weapon Damage increased from 35% + 1%/boon to 40% + 1.3%/boon</li></ul>
`
	);
	var dr = a(ur, 2);
	(o(dr, { kind: `item`, name: `Express Shot`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item golden-goose-egg`);
	var fr = i(Y);
	n(
		fr,
		() => `
<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>
<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>
<ul><li>Souls required for permanent buff reduced from 150 to 100</li><li>Now only gives permanent buffs for actual accrued souls, not counting the initial 400 sellback amount (so it no longer instantly sells for permanent buffs)</li></ul>
`
	);
	var pr = a(fr, 2);
	(o(pr, { kind: `item`, name: `Golden Goose Egg`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item lightning-scroll`);
	var mr = i(X);
	n(
		mr,
		() => `
<p><a href="/item/lightning-scroll"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lightning Scroll patch history</a></p>
<h3 id="lightning-scroll"><a href="/item/lightning-scroll">Lightning Scroll</a></h3>
<ul><li>Fixed the stun delay being affected by debuff reducer making the stun go off faster</li></ul>
`
	);
	var hr = a(mr, 2);
	(o(hr, { kind: `item`, name: `Lightning Scroll`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item plated-armor`);
	var gr = i(Z);
	n(
		gr,
		() => `
<p><a href="/item/plated-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Plated Armor patch history</a></p>
<h3 id="plated-armor"><a href="/item/plated-armor">Plated Armor</a></h3>
<ul><li>Bonus health increased from +100 to +130</li></ul>
`
	);
	var _r = a(gr, 2);
	(o(_r, { kind: `item`, name: `Plated Armor`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item recharging-rush`);
	var vr = i(Q);
	n(
		vr,
		() => `
<p><a href="/item/recharging-rush"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Recharging Rush patch history</a></p>
<h3 id="recharging-rush"><a href="/item/recharging-rush">Recharging Rush</a></h3>
`
	);
	var yr = a(vr, 2),
		br = i(yr),
		xr = i(br);
	n(xr, () => `Cooldown increased from 20s to 24s`);
	var Sr = a(xr, 2);
	(s(Sr, {
		kind: `item`,
		name: `Recharging Rush`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 20s to 24s`
	}),
		t(br),
		t(yr));
	var Cr = a(yr, 2);
	(o(Cr, { kind: `item`, name: `Recharging Rush`, ability: null }), t(Q));
	var wr = a(Q, 2);
	r(wr, 1, `item return-fire`);
	var Tr = i(wr);
	n(
		Tr,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
`
	);
	var Er = a(Tr, 2),
		Dr = i(Er);
	(n(Dr, () => `Bullet damage returned increased from 50% to 60%`, !0), t(Dr));
	var Or = a(Dr, 2),
		kr = i(Or);
	n(kr, () => `Cooldown reduced from 25s to 23s`);
	var Ar = a(kr, 2);
	(s(Ar, {
		kind: `item`,
		name: `Return Fire`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 25s to 23s`
	}),
		t(Or),
		t(Er));
	var jr = a(Er, 2);
	(o(jr, { kind: `item`, name: `Return Fire`, ability: null }), t(wr));
	var Mr = a(wr, 2);
	r(Mr, 1, `item sharpshooter`);
	var Nr = i(Mr);
	n(
		Nr,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Movement Speed penalty reduced from -1m to -0.7m</li></ul>
`
	);
	var Pr = a(Nr, 2);
	(o(Pr, { kind: `item`, name: `Sharpshooter`, ability: null }), t(Mr));
	var Fr = a(Mr, 2);
	r(Fr, 1, `item silence-wave`);
	var Ir = i(Fr);
	n(
		Ir,
		() => `
<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>
<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>
`
	);
	var Lr = a(Ir, 2),
		Rr = i(Lr),
		zr = i(Rr);
	n(zr, () => `Damage reduced from 100 to 75`);
	var Br = a(zr, 2);
	(s(Br, {
		kind: `item`,
		name: `Silence Wave`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage reduced from 100 to 75`
	}),
		t(Rr));
	var Vr = a(Rr, 2);
	(n(Vr, () => `Spirit scaling reduced from 1.0 to 0.7`, !0), t(Vr));
	var Hr = a(Vr, 2),
		Ur = i(Hr);
	n(Ur, () => `Cooldown increased from 30s to 42s`);
	var Wr = a(Ur, 2);
	(s(Wr, {
		kind: `item`,
		name: `Silence Wave`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown increased from 30s to 42s`
	}),
		t(Hr),
		t(Lr));
	var Gr = a(Lr, 2);
	(o(Gr, { kind: `item`, name: `Silence Wave`, ability: null }), t(Fr));
	var Kr = a(Fr, 2);
	r(Kr, 1, `item spirit-shielding`);
	var qr = i(Kr);
	n(
		qr,
		() => `
<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>
<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>
<ul><li>Move Speed increased from 1.5m to 1.75m</li><li>Barrier duration increased from 7s to 8s</li></ul>
`
	);
	var Jr = a(qr, 2);
	(o(Jr, { kind: `item`, name: `Spirit Shielding`, ability: null }), t(Kr));
	var Yr = a(Kr, 2);
	r(Yr, 1, `item titanic-magazine`);
	var Xr = i(Yr);
	n(
		Xr,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Ammo increased from 90% to 100%</li><li>Weapon Damage increased from 12% to 14%</li></ul>
`
	);
	var Zr = a(Xr, 2);
	(o(Zr, { kind: `item`, name: `Titanic Magazine`, ability: null }), t(Yr));
	var $ = a(Yr, 2);
	r($, 1, `item toxic-bullets`);
	var Qr = i($);
	n(
		Qr,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>Buildup is now 10% slower</li><li>Bleed reduced from 2% to 1.7%</li><li>Anti Heal increased from -30% to -35%</li></ul>
`
	);
	var $r = a(Qr, 2);
	(o($r, { kind: `item`, name: `Toxic Bullets`, ability: null }), t($));
	var ei = a($, 2);
	r(ei, 1, `item weapon-shielding`);
	var ti = i(ei);
	n(
		ti,
		() => `
<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>
<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>
<ul><li>Move Speed increased from 1.5m to 1.75m</li><li>Barrier duration increased from 7s to 8s</li><li>Time Frame increased from 3.5s to 4s</li></ul>
`
	);
	var ni = a(ti, 2);
	(o(ni, { kind: `item`, name: `Weapon Shielding`, ability: null }), t(ei), ee(e, ne));
}
export { ce as default, ae as metadata, c as readingManifest, oe as toc };
