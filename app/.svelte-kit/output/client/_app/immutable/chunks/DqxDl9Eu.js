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
			`Apollo`,
			`Billy`,
			`Celeste`,
			`Doorman`,
			`Drifter`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Holliday`,
			`Ivy`,
			`Lash`,
			`Mina`,
			`Mo &amp; Krill`,
			`Paige`,
			`Paradox`,
			`Pocket`,
			`Rem`,
			`Seven`,
			`Shiv`,
			`Vindicta`,
			`Viscous`,
			`Vyper`,
			`Warden`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [`Cursed Relic`, `Mystic Shot`, `Scourge`, `Toxic Bullets`]
	});
}
var ie = {
		title: `Minor Update - 06-30-2026`,
		alias: `2026/minor-06-30`,
		thread_id: `146261`,
		steam_gid: `1836506165563227`,
		published: `2026-06-30T17:22:14.000Z`,
		author: `IceFrog`,
		author_image: `/assets/authors/icefrog.webp`,
		major_update: !1,
		content_text: `King of the Hill objective has been rethemed and renamed to "Unstable Rift" Unstable Rift no longer requires an Urn delivery to trigger the start of the event. It now has a variable start time of +/- 1 minute. There is a global announcement 25s before it spawns. 60s before that there is also an in-world only visual effect to let you know which lane it'll randomly spawn in. Unstable Rift spawn interval increased from every 6 minutes to every 7 minutes Unstable Rift comeback bonuses (resists in the area, extra comeback bounty, and trailing/leading team claiming timer) now all scale linearly based on the amount of NW they are trailing (scales from no bonus at 0% NW behind to full bonus at 15% NW behind) The team that secures the Unstable Rift now also has a wave of 5 Rift Troopers sent down from the rift location. When trailing, spawns up to 12 troopers instead (using the same linear ramp from 0% NW to -15% NW) Rift Troopers drop no souls when killed Rift Troopers spawn with 100% extra health and damage (they also look larger and have custom VFX). Their bonus health and damage grow slightly per event (first one is 100%, then 120%, 140%, etc) Any players in the Unstable Rift Zone are now revealed on the minimap Unstable Rift bounty increased by 35% (to account for the 35% loss with no urn runner bounty, overall objective bounty is unchanged) Unstable Rift no longer grants +1 permanent buff to each player (there is also no +3 buffs to the urn runner) Urn running is now its own objective. Spawns on either end of the map (where the previous neutral pickup locations were), and gets delivered to the opposite end. Spawns at 10/15/20/25/etc. Urn runner is no longer revealed and is not disarmed or silenced (going through a doorway or mirage teleport still drops it) Urn cannot be manually dropped. It gets dropped when you get hit with a light or heavy melee, are stunned or are killed. It stays where it drops and does not walk back home. Urn runner can no longer parry Urn bounty value starts decaying after 45s from being picked up. It drains gradually over another 45s and then the urn is removed when the bounty is empty. Urn is deposited immediately at the drop off point. Urn bounty when deposited is worth 250 + 70/min for just the urn runner. Still has the comeback bounty component. Upon deposit all of the souls are released as orbs into the air (if another ally secures the orbs, they share the bounty with the urn runner). Urn runner gets +4 permanent buffs on deposit Urn is now louder when it talks and is easier to hear by nearby enemies After 3 Minutes from spawn the Urn will start walking very slowly on his own towards the deposit location Urn runner's passive bonuses while holding it now scales based on how behind you are, rather than being on or off (same as the Unstable Rift 0%-15% NW linear scaling). Bonuses are the same as the previous urn runner bonuses. citadel_force_spawn_idol - This spawns the Urn citadel_koth_dev_test_spawn - This moves your hero and spawns the Unstable Rift in the early warning state then quickly transitions to the 25s broadcasted timer Reworked Boon reward table Health per boon reduced by 5% All ultimate base and upgrade cooldowns nerfed by 15% (rounded to the nearest multiple of 5) Rejuv buff duration reduced from 4 minutes to 3 Respawn ramp changed from 8-30s from 5-19m to 8-35s from 5-20m Guardian bounty reduced from 1500 to 1250 Walker bounty reduced from 4000 to 3500 First blood bounty reduced from 150 to 125 Base kill bounty reduced from 250 to 200 (max is still 2200 at 40m) Trooper bounty rescaled from 116 + 1.16/m to 100 + 2/m (less before 20m, more after) Trooper bounty ratio in the deniable flying orb increased from 40% to 50% Minimum unsecured souls allowed to drop reduced from 150 to 50 + 5/min Dash Jump input window increased from 0.2s to 0.25s duration (start time: 0.3s to end time: 0.55s) Dash Jump distance increased from 18m to 19m Dash Jump vertical impulse increased from 400 to 425 Jump Pads on top of the double sinner buildings have been removed Hovering an item in the shop now shows you a preview for your investment bars Street Brawl: No longer locks you out of getting off the zipline in the first few seconds Street Brawl: Increased item randomness a bit Street Brawl: Fixed Enhanced Sharpshooter and Enhanced Spiritual Overflow not maintaining the bonuses from their enhanced components Abrams Siphon Life T3 reduced from +3m Radius to +2m Shoulder Charge T3 reduced from -20s Cooldown to -18s Apollo Riposte T1 increased from -7s Cooldown to -8s Riposte grace window to target after channel increased from +1s to +1.3s Riposte cast range increased from 25m to 35m Riposte targeting angle increased from 70 to 90 Flawless Advance Heal on hero hit spirit scaling increased from 1 to 1.3 Itani Lo Sahn T3 increased from +40% Bonus Damage to +50% Billy Bullet damage per boon reduced by 10% Bashdown melee scaling reduced from 1.1 to 0.9 Bashdown T3 reduced from 60% Heavy Melee damage to 50% Rising Ram T3 Max HP Damage reduced from 10% to 8% Rising Ram T3 Max HP Damage spirit scaling increased from 0.017 to 0.035 (break even at 111 spirit power) Celeste Dazzling Trick cooldown reduced from 35s to 32s Radiant Daggers buff duration increased from 25s to 30s Radiant Daggers spirit scaling increased from 0.56 to 0.63 Shining Wonder bounce range increased from 15.5m to 16.5m Shining Wonder damage increased by 10% Doorman Doorway cooldown increased from 40s to 45s Drifter Health per boon increased from 41 to 43 (global hp boon reduction is after this) Rend cast time reduced from 0.5s to 0.4s Rend post cast time reduced from 0.5s to 0.4s Rend T2 increased from -7s Cooldown to -8s Bloodscent T1 increased from +2m/s while near an isolated enemy to +3m/s Bloodscent T2 increased from 18% missing health heal to +24% Dynamo Rejuvenating Aurora regeneration increased from 25/s to 30/s Grey Talon Rain of Arrows cooldown increased from 23s to 25s Guided Owl permanent spirit bonus reduced from 10 to 8 Holliday Powder Keg velocity reduced slightly Powder Keg charge delay increased from 7s to 7.5s Powder Keg spirit scaling reduced from 1.4 to 1.2 Powder Keg T3 reduced from +100 Damage to +80 Haze Sleep Dagger T1 increased from -8% Bullet Resist to -10% Sleep Dagger T2 increased from -17s Cooldown to -18s Smoke Bomb T3 increased from +40% Bullet Lifesteal to +50% Ivy Entangling Thorns spirit scaling increased from 0.45 to 0.55 Kudzu Connection Replicated Healing per boon scale increased from +0.5 to +0.85 Air Drop cooldown reduction when used on allies increased from -25% to -30% Lash Ground Strike cooldown reduced from 21s to 18s Flog angle increased from 30 to 38 Mina Rake missing health as damage increased from 5% to 6% Sanguine Retreat T3 now also increases range by +3m Nox Nostra damage increased from 4.45 to 4.6 Nox Nostra T1 damage increased from +1.74 to +1.9 Mo & Krill Sand Blast T2 slow increased from -25% to -30% Sand Blast T3 increased from -20s Cooldown to -25s Combo bonus max health per kill increased from 30+1/boon to 40+2/boon Paige Health per boon increased from 29 to 33 Bookwyrm T1 changed from "+2s Trail Duration and +1m Radius" to "-12s Cooldown" Bookwyrm T2 changed from "+10m Range and -12s Cooldown" to "+1 Charge, +1m Radius and +2s Trail Duration" Bookworm T3 changed from "+100 Damage, +30 DPS and +1 Charge" to "+100 Damage, +30 DPS and +12m Travel Range" Plot Armor T1 fire rate spirit scaling increased from 0.13 to 0.16 Plot Armor T3 increased from 75% Barrier to 100% Rallying Charge is now properly counted as a "miss" (for the -50% CD Reduction) if the only thing that was impacted were non-heroes Rallying Charge T3 Max Amp increased from +50% to +70% Paradox Kinetic Carbine T2 now also increases move speed spirit scaling (0.06) Kinetic Carbine T3 changed from affecting Max Damage Scaling to affecting both Min and Max Damage Scaling Pocket Bullet damage per boon reduced from 0.16 to 0.14 Flying Cloak T3 reduced from -12s Cooldown to -11s Rem Tag Along healing per second spirit scaling reduced from 0.66 to 0.4 Tag Along T3 missing health spirit scaling reduced from +0.02 to +0.016 Lil Helpers Spirit Resist reduced from 15% to 12% Lil Helpers T1 changed from "+1 Helper" to "+1 Helper and +1.5m/s Move Speed" Lil Helpers T2 changed from "+8% Spirit Resist and +1.5m/s Move Speed" to "+1 Helper and +15% Trooper Damage and Resist" Lil Helpers T3 changed from "+2 Helpers and +20% Trooper Damage and Resist" to "+1 Helper and +15% Spirit Resist" Seven Lightning Ball charge delay reduced from 7s to 6s Storm Cloud time to expand increased from 1.5s to 3.5s Storm Cloud damage interval increased from 0.25s to 0.3s (DPS unchanged) Storm Cloud T2 now also increases Initial Radius by +5m Shiv Alt Fire damage now has a custom value per boon (+0.2) Alt Fire ammo consumed per shot increased from 3 to 5 Alt Fire knockback movement is now disabled by slowing hex state Serrated Knives cooldown reduced from 18s to 16s Slice and Dice now deals +25 light melee damage (75 total) instead of 60 spirit damage Slice and Dice changed from -6% Spirit Resist to +4% Damage Amp Bloodletting T2 changed from "+15% Incoming Damage Deferred" to "+35% Deferred Damage Cleared" Bloodletting T3 changed from "+50% Deferred Damage Cleared" to "+15% Incoming Damage Deferred" Killing Blow now deals damage to troopers and neutrals along the way Killing Blow executing a hero now instantly fills the rage bar Killing Blow now has the T3 "recast within 20s on a hero kill" as part of the base ability Killing Blow Full Rage Damage Bonus reduced from +12% to +8% Killing Blow range reduced from 18m to 12m Killing Blow T1 now also increases range by +6m Killing Blow T2 increased from +10% Full Rage Bonus Damage to +16% Killing Blow T3 increased from +5% Enemy health Threshold to +10% Vindicta Stake T2 reduced from -20s Cooldown to -22s Crow Familiar T2 increased from -12s Cooldown to -16s Crow Familiar collision radius between each crow increased slightly Assassinate Max Bonus Damage spirit scaling increased from 2 to 2.3 Viscous Splatter T3 spirit scaling reduced from +1.1 to +1.0 Puddle Punch T3 increased from -12s Cooldown to -14s Goo Ball T3 increased from +6s Duration to +7s Vyper Screwjab Dagger T3 now also reduces charge delay from 4s to 2s Slither T3 spirit scaling increased from 0.6 to 0.8 Warden Bullet damage per boon reduced from 0.34 to 0.28 Willpower T2 increased from -22s Cooldown to -24s Willpower T3 increased from +2.5 spirit power scaling to +2.7 Mystic Shot Cooldown increased from 8s to 9s Toxic Bullets Bleed damage increased from 1.7% to 1.9% Scourge Max Health DPS reduced from 3.5% to 2.6% Max Health DPS now scales with spirit power (0.0055) Cursed Relic Damage Penalty increased from -10% to -14%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-06-16`, to: `2026-06-30` },
			after: { from: null, to: null }
		}
	},
	ae = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 2, title: `Apollo`, id: `apollo` },
		{ level: 3, title: `Riposte`, id: `riposte` },
		{ level: 3, title: `Flawless Advance`, id: `flawless-advance` },
		{ level: 3, title: `Itani Lo Sahn`, id: `itani-lo-sahn` },
		{ level: 2, title: `Billy`, id: `billy` },
		{ level: 3, title: `Bashdown`, id: `bashdown` },
		{ level: 3, title: `Rising Ram`, id: `rising-ram` },
		{ level: 2, title: `Celeste`, id: `celeste` },
		{ level: 3, title: `Dazzling Trick`, id: `dazzling-trick` },
		{ level: 3, title: `Radiant Daggers`, id: `radiant-daggers` },
		{ level: 3, title: `Shining Wonder`, id: `shining-wonder` },
		{ level: 2, title: `Doorman`, id: `doorman` },
		{ level: 3, title: `Doorway`, id: `doorway` },
		{ level: 2, title: `Drifter`, id: `drifter` },
		{ level: 3, title: `Rend`, id: `rend` },
		{ level: 3, title: `Bloodscent`, id: `bloodscent` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Rejuvenating Aurora`, id: `rejuvenating-aurora` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 3, title: `Powder Keg`, id: `powder-keg` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Entangling Thorns`, id: `entangling-thorns` },
		{ level: 3, title: `Kudzu Connection`, id: `kudzu-connection` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Flog`, id: `flog` },
		{ level: 2, title: `Mina`, id: `mina` },
		{ level: 3, title: `Rake`, id: `rake` },
		{ level: 3, title: `Sanguine Retreat`, id: `sanguine-retreat` },
		{ level: 3, title: `Nox Nostra`, id: `nox-nostra` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Sand Blast`, id: `sand-blast` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 2, title: `Paige`, id: `paige` },
		{ level: 3, title: `Bookwyrm`, id: `bookwyrm` },
		{ level: 3, title: `Bookworm`, id: `bookworm` },
		{ level: 3, title: `Plot Armor`, id: `plot-armor` },
		{ level: 3, title: `Rallying Charge`, id: `rallying-charge` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Flying Cloak`, id: `flying-cloak` },
		{ level: 2, title: `Rem`, id: `rem` },
		{ level: 3, title: `Tag Along`, id: `tag-along` },
		{ level: 3, title: `Lil Helpers Spirit Resist`, id: `lil-helpers-spirit-resist` },
		{ level: 3, title: `Lil Helpers`, id: `lil-helpers` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Lightning Ball`, id: `lightning-ball` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 3, title: `Slice and Dice`, id: `slice-and-dice` },
		{ level: 3, title: `Bloodletting`, id: `bloodletting` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{
			level: 3,
			title: `Killing Blow Full Rage Damage Bonus`,
			id: `killing-blow-full-rage-damage-bonus`
		},
		{ level: 3, title: `Killing Blow`, id: `killing-blow-1` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{
			level: 3,
			title: `Assassinate Max Bonus Damage`,
			id: `assassinate-max-bonus-damage`
		},
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Screwjab Dagger`, id: `screwjab-dagger` },
		{ level: 3, title: `Slither`, id: `slither` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Willpower`, id: `willpower` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Cursed Relic`, id: `cursed-relic` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Scourge`, id: `scourge` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-06-16`, to: `2026-06-30` },
			after: null,
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Apollo`, id: `apollo` },
			{ kind: `hero`, name: `Billy`, id: `billy` },
			{ kind: `hero`, name: `Celeste`, id: `celeste` },
			{ kind: `hero`, name: `Doorman`, id: `doorman` },
			{ kind: `hero`, name: `Drifter`, id: `drifter` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `Mina`, id: `mina` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paige`, id: `paige` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Rem`, id: `rem` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `item`, name: `Cursed Relic`, id: `cursed-relic` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Scourge`, id: `scourge` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` }
		],
		related: []
	},
	oe = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function se(e) {
	var c = oe(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>
<ul><li>King of the Hill objective has been rethemed and renamed to &quot;Unstable Rift&quot;</li><li>Unstable Rift no longer requires an Urn delivery to trigger the start of the event. It now has a variable start time of +/- 1 minute. There is a global announcement 25s before it spawns. 60s before that there is also an in-world only visual effect to let you know which lane it&#x27;ll randomly spawn in.</li><li>Unstable Rift spawn interval increased from every 6 minutes to every 7 minutes</li><li>Unstable Rift comeback bonuses (resists in the area, extra comeback bounty, and trailing/leading team claiming timer) now all scale linearly based on the amount of NW they are trailing (scales from no bonus at 0% NW behind to full bonus at 15% NW behind)</li><li>The team that secures the Unstable Rift now also has a wave of 5 Rift Troopers sent down from the rift location. When trailing, spawns up to 12 troopers instead (using the same linear ramp from 0% NW to -15% NW)</li><li>Rift Troopers drop no souls when killed</li><li>Rift Troopers spawn with 100% extra health and damage (they also look larger and have custom VFX). Their bonus health and damage grow slightly per event (first one is 100%, then 120%, 140%, etc)</li><li>Any players in the Unstable Rift Zone are now revealed on the minimap</li><li>Unstable Rift bounty increased by 35% (to account for the 35% loss with no urn runner bounty, overall objective bounty is unchanged)</li><li>Unstable Rift no longer grants +1 permanent buff to each player (there is also no +3 buffs to the urn runner)</li><li>Urn running is now its own objective. Spawns on either end of the map (where the previous neutral pickup locations were), and gets delivered to the opposite end. Spawns at 10/15/20/25/etc.</li><li>Urn runner is no longer revealed and is not disarmed or silenced (going through a doorway or mirage teleport still drops it)</li><li>Urn cannot be manually dropped. It gets dropped when you get hit with a light or heavy melee, are stunned or are killed. It stays where it drops and does not walk back home.</li><li>Urn runner can no longer parry</li><li>Urn bounty value starts decaying after 45s from being picked up. It drains gradually over another 45s and then the urn is removed when the bounty is empty.</li><li>Urn is deposited immediately at the drop off point.</li><li>Urn bounty when deposited is worth 250 + 70/min for just the urn runner. Still has the comeback bounty component. Upon deposit all of the souls are released as orbs into the air (if another ally secures the orbs, they share the bounty with the urn runner).</li><li>Urn runner gets +4 permanent buffs on deposit</li><li>Urn is now louder when it talks and is easier to hear by nearby enemies</li><li>After 3 Minutes from spawn the Urn will start walking very slowly on his own towards the deposit location</li><li>Urn runner&#x27;s passive bonuses while holding it now scales based on how behind you are, rather than being on or off (same as the Unstable Rift 0%-15% NW linear scaling). Bonuses are the same as the previous urn runner bonuses.</li><li>citadel_force_spawn_idol - This spawns the Urn</li><li>citadel_koth_dev_test_spawn - This moves your hero and spawns the Unstable Rift in the early warning state then quickly transitions to the 25s broadcasted timer</li><li>Reworked Boon reward table</li><li>Health per boon reduced by 5%</li><li>All ultimate base and upgrade cooldowns nerfed by 15% (rounded to the nearest multiple of 5)</li><li>Rejuv buff duration reduced from 4 minutes to 3</li><li>Respawn ramp changed from 8-30s from 5-19m to 8-35s from 5-20m</li><li>Guardian bounty reduced from 1500 to 1250</li><li>Walker bounty reduced from 4000 to 3500</li><li>First blood bounty reduced from 150 to 125</li><li>Base kill bounty reduced from 250 to 200 (max is still 2200 at 40m)</li><li>Trooper bounty rescaled from 116 + 1.16/m to 100 + 2/m (less before 20m, more after)</li><li>Trooper bounty ratio in the deniable flying orb increased from 40% to 50%</li><li>Minimum unsecured souls allowed to drop reduced from 150 to 50 + 5/min</li><li>Dash Jump input window increased from 0.2s to 0.25s duration (start time: 0.3s to end time: 0.55s)</li><li>Dash Jump distance increased from 18m to 19m</li><li>Dash Jump vertical impulse increased from 400 to 425</li><li>Jump Pads on top of the double sinner buildings have been removed</li><li>Hovering an item in the shop now shows you a preview for your investment bars</li><li>Street Brawl: No longer locks you out of getting off the zipline in the first few seconds</li><li>Street Brawl: Increased item randomness a bit</li><li>Street Brawl: Fixed Enhanced Sharpshooter and Enhanced Spiritual Overflow not maintaining the bonuses from their enhanced components</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var ae = a(ie, 2);
	ne(ae, {});
	var l = a(ae, 2);
	r(l, 1, `hero abrams`);
	var se = i(l);
	n(
		se,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var u = a(se, 2);
	r(u, 1, `ability siphon-life`);
	var ce = i(u);
	n(
		ce,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>
<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>
<ul><li>Siphon Life T3 reduced from +3m Radius to +2m</li></ul>
`
	);
	var le = a(ce, 2);
	(o(le, { kind: `hero`, name: `Abrams`, ability: `Siphon Life` }), t(u));
	var ue = a(u, 2);
	r(ue, 1, `ability shoulder-charge`);
	var de = i(ue);
	n(
		de,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Shoulder Charge T3 reduced from -20s Cooldown to -18s</li></ul>
`
	);
	var fe = a(de, 2);
	(o(fe, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), t(ue), t(l));
	var d = a(l, 2);
	r(d, 1, `hero apollo`);
	var pe = i(d);
	n(
		pe,
		() => `
<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>
<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>
`
	);
	var f = a(pe, 2);
	r(f, 1, `ability riposte`);
	var me = i(f);
	n(
		me,
		() => `
<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>
<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>
<ul><li>Riposte T1 increased from -7s Cooldown to -8s</li><li>Riposte grace window to target after channel increased from +1s to +1.3s</li><li>Riposte cast range increased from 25m to 35m</li><li>Riposte targeting angle increased from 70 to 90</li></ul>
`
	);
	var he = a(me, 2);
	(o(he, { kind: `hero`, name: `Apollo`, ability: `Riposte` }), t(f));
	var p = a(f, 2);
	r(p, 1, `ability flawless-advance`);
	var ge = i(p);
	n(
		ge,
		() => `
<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>
<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>
<ul><li>Flawless Advance Heal on hero hit spirit scaling increased from 1 to 1.3</li></ul>
`
	);
	var _e = a(ge, 2);
	(o(_e, { kind: `hero`, name: `Apollo`, ability: `Flawless Advance` }), t(p));
	var ve = a(p, 2);
	r(ve, 1, `ability itani-lo-sahn`);
	var ye = i(ve);
	n(
		ye,
		() => `
<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>
<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>
<ul><li>Itani Lo Sahn T3 increased from +40% Bonus Damage to +50%</li></ul>
`
	);
	var be = a(ye, 2);
	(o(be, { kind: `hero`, name: `Apollo`, ability: `Itani Lo Sahn` }), t(ve), t(d));
	var m = a(d, 2);
	r(m, 1, `hero billy`);
	var xe = i(m);
	n(
		xe,
		() => `
<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>
<h3 id="billy"><a href="/hero/billy">Billy</a></h3>
<ul><li>Bullet damage per boon reduced by 10%</li></ul>
`
	);
	var h = a(xe, 2);
	r(h, 1, `ability bashdown`);
	var Se = i(h);
	n(
		Se,
		() => `
<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>
<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>
<ul><li>Bashdown melee scaling reduced from 1.1 to 0.9</li><li>Bashdown T3 reduced from 60% Heavy Melee damage to 50%</li></ul>
`
	);
	var Ce = a(Se, 2);
	(o(Ce, { kind: `hero`, name: `Billy`, ability: `Bashdown` }), t(h));
	var we = a(h, 2);
	r(we, 1, `ability rising-ram`);
	var Te = i(we);
	n(
		Te,
		() => `
<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>
<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>
<ul><li>Rising Ram T3 Max HP Damage reduced from 10% to 8%</li><li>Rising Ram T3 Max HP Damage spirit scaling increased from 0.017 to 0.035 (break even at 111 spirit power)</li></ul>
`
	);
	var Ee = a(Te, 2);
	(o(Ee, { kind: `hero`, name: `Billy`, ability: `Rising Ram` }), t(we), t(m));
	var g = a(m, 2);
	r(g, 1, `hero celeste`);
	var De = i(g);
	n(
		De,
		() => `
<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>
<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>
`
	);
	var _ = a(De, 2);
	r(_, 1, `ability dazzling-trick`);
	var Oe = i(_);
	n(
		Oe,
		() => `
<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>
<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>
`
	);
	var ke = a(Oe, 2),
		Ae = i(ke),
		je = i(Ae);
	n(je, () => `Dazzling Trick cooldown reduced from 35s to 32s`);
	var Me = a(je, 2);
	(s(Me, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Dazzling Trick cooldown reduced from 35s to 32s`
	}),
		t(Ae),
		t(ke));
	var Ne = a(ke, 2);
	(o(Ne, { kind: `hero`, name: `Celeste`, ability: `Dazzling Trick` }), t(_));
	var v = a(_, 2);
	r(v, 1, `ability radiant-daggers`);
	var Pe = i(v);
	n(
		Pe,
		() => `
<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>
<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>
<ul><li>Radiant Daggers buff duration increased from 25s to 30s</li><li>Radiant Daggers spirit scaling increased from 0.56 to 0.63</li></ul>
`
	);
	var Fe = a(Pe, 2);
	(o(Fe, { kind: `hero`, name: `Celeste`, ability: `Radiant Daggers` }), t(v));
	var Ie = a(v, 2);
	r(Ie, 1, `ability shining-wonder`);
	var Le = i(Ie);
	n(
		Le,
		() => `
<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>
<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>
<ul><li>Shining Wonder bounce range increased from 15.5m to 16.5m</li><li>Shining Wonder damage increased by 10%</li></ul>
`
	);
	var Re = a(Le, 2);
	(o(Re, { kind: `hero`, name: `Celeste`, ability: `Shining Wonder` }), t(Ie), t(g));
	var y = a(g, 2);
	r(y, 1, `hero doorman`);
	var ze = i(y);
	n(
		ze,
		() => `
<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>
<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>
`
	);
	var Be = a(ze, 2);
	r(Be, 1, `ability doorway`);
	var Ve = i(Be);
	n(
		Ve,
		() => `
<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>
<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>
`
	);
	var He = a(Ve, 2),
		Ue = i(He),
		We = i(Ue);
	n(We, () => `Doorway cooldown increased from 40s to 45s`);
	var Ge = a(We, 2);
	(s(Ge, {
		kind: `hero`,
		name: `Doorman`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Doorway cooldown increased from 40s to 45s`
	}),
		t(Ue),
		t(He));
	var Ke = a(He, 2);
	(o(Ke, { kind: `hero`, name: `Doorman`, ability: `Doorway` }), t(Be), t(y));
	var b = a(y, 2);
	r(b, 1, `hero drifter`);
	var qe = i(b);
	n(
		qe,
		() => `
<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>
<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>
<ul><li>Health per boon increased from 41 to 43 (global hp boon reduction is after this)</li></ul>
`
	);
	var x = a(qe, 2);
	r(x, 1, `ability rend`);
	var Je = i(x);
	n(
		Je,
		() => `
<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>
<h4 id="rend"><a href="/ability/rend">Rend</a></h4>
<ul><li>Rend cast time reduced from 0.5s to 0.4s</li><li>Rend post cast time reduced from 0.5s to 0.4s</li><li>Rend T2 increased from -7s Cooldown to -8s</li></ul>
`
	);
	var Ye = a(Je, 2);
	(o(Ye, { kind: `hero`, name: `Drifter`, ability: `Rend` }), t(x));
	var Xe = a(x, 2);
	r(Xe, 1, `ability bloodscent`);
	var Ze = i(Xe);
	n(
		Ze,
		() => `
<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>
<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>
<ul><li>Bloodscent T1 increased from +2m/s while near an isolated enemy to +3m/s</li><li>Bloodscent T2 increased from 18% missing health heal to +24%</li></ul>
`
	);
	var Qe = a(Ze, 2);
	(o(Qe, { kind: `hero`, name: `Drifter`, ability: `Bloodscent` }), t(Xe), t(b));
	var S = a(b, 2);
	r(S, 1, `hero dynamo`);
	var $e = i(S);
	n(
		$e,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var et = a($e, 2);
	r(et, 1, `ability rejuvenating-aurora`);
	var tt = i(et);
	n(
		tt,
		() => `
<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>
<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>
<ul><li>Rejuvenating Aurora regeneration increased from 25/s to 30/s</li></ul>
`
	);
	var nt = a(tt, 2);
	(o(nt, { kind: `hero`, name: `Dynamo`, ability: `Rejuvenating Aurora` }), t(et), t(S));
	var C = a(S, 2);
	r(C, 1, `hero grey-talon`);
	var rt = i(C);
	n(
		rt,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var w = a(rt, 2);
	r(w, 1, `ability rain-of-arrows`);
	var it = i(w);
	n(
		it,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
`
	);
	var at = a(it, 2),
		ot = i(at),
		st = i(ot);
	n(st, () => `Rain of Arrows cooldown increased from 23s to 25s`);
	var ct = a(st, 2);
	(s(ct, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Rain of Arrows cooldown increased from 23s to 25s`
	}),
		t(ot),
		t(at));
	var lt = a(at, 2);
	(o(lt, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), t(w));
	var ut = a(w, 2);
	r(ut, 1, `ability guided-owl`);
	var dt = i(ut);
	n(
		dt,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
<ul><li>Guided Owl permanent spirit bonus reduced from 10 to 8</li></ul>
`
	);
	var ft = a(dt, 2);
	(o(ft, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), t(ut), t(C));
	var T = a(C, 2);
	r(T, 1, `hero haze`);
	var pt = i(T);
	n(
		pt,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var E = a(pt, 2);
	r(E, 1, `ability sleep-dagger`);
	var mt = i(E);
	n(
		mt,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger T1 increased from -8% Bullet Resist to -10%</li><li>Sleep Dagger T2 increased from -17s Cooldown to -18s</li></ul>
`
	);
	var ht = a(mt, 2);
	(o(ht, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(E));
	var gt = a(E, 2);
	r(gt, 1, `ability smoke-bomb`);
	var _t = i(gt);
	n(
		_t,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb T3 increased from +40% Bullet Lifesteal to +50%</li></ul>
`
	);
	var vt = a(_t, 2);
	(o(vt, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), t(gt), t(T));
	var D = a(T, 2);
	r(D, 1, `hero holliday`);
	var yt = i(D);
	n(
		yt,
		() => `
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
`
	);
	var bt = a(yt, 2);
	r(bt, 1, `ability powder-keg`);
	var xt = i(bt);
	n(
		xt,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>
<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>
<ul><li>Powder Keg velocity reduced slightly</li><li>Powder Keg charge delay increased from 7s to 7.5s</li><li>Powder Keg spirit scaling reduced from 1.4 to 1.2</li><li>Powder Keg T3 reduced from +100 Damage to +80</li></ul>
`
	);
	var St = a(xt, 2);
	(o(St, { kind: `hero`, name: `Holliday`, ability: `Powder Keg` }), t(bt), t(D));
	var O = a(D, 2);
	r(O, 1, `hero ivy`);
	var Ct = i(O);
	n(
		Ct,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var k = a(Ct, 2);
	r(k, 1, `ability entangling-thorns`);
	var wt = i(k);
	n(
		wt,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>
<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>
<ul><li>Entangling Thorns spirit scaling increased from 0.45 to 0.55</li></ul>
`
	);
	var Tt = a(wt, 2);
	(o(Tt, { kind: `hero`, name: `Ivy`, ability: `Entangling Thorns` }), t(k));
	var A = a(k, 2);
	r(A, 1, `ability kudzu-connection`);
	var Et = i(A);
	n(
		Et,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>
<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>
<ul><li>Kudzu Connection Replicated Healing per boon scale increased from +0.5 to +0.85</li></ul>
`
	);
	var Dt = a(Et, 2);
	(o(Dt, { kind: `hero`, name: `Ivy`, ability: `Kudzu Connection` }), t(A));
	var Ot = a(A, 2);
	r(Ot, 1, `ability air-drop`);
	var kt = i(Ot);
	n(
		kt,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop cooldown reduction when used on allies increased from -25% to -30%</li></ul>
`
	);
	var At = a(kt, 2);
	(o(At, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(Ot), t(O));
	var j = a(O, 2);
	r(j, 1, `hero lash`);
	var jt = i(j);
	n(
		jt,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var M = a(jt, 2);
	r(M, 1, `ability ground-strike`);
	var Mt = i(M);
	n(
		Mt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
`
	);
	var Nt = a(Mt, 2),
		Pt = i(Nt),
		Ft = i(Pt);
	n(Ft, () => `Ground Strike cooldown reduced from 21s to 18s`);
	var It = a(Ft, 2);
	(s(It, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Ground Strike cooldown reduced from 21s to 18s`
	}),
		t(Pt),
		t(Nt));
	var Lt = a(Nt, 2);
	(o(Lt, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(M));
	var Rt = a(M, 2);
	r(Rt, 1, `ability flog`);
	var zt = i(Rt);
	n(
		zt,
		() => `
<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>
<h4 id="flog"><a href="/ability/flog">Flog</a></h4>
<ul><li>Flog angle increased from 30 to 38</li></ul>
`
	);
	var Bt = a(zt, 2);
	(o(Bt, { kind: `hero`, name: `Lash`, ability: `Flog` }), t(Rt), t(j));
	var N = a(j, 2);
	r(N, 1, `hero mina`);
	var Vt = i(N);
	n(
		Vt,
		() => `
<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>
<h3 id="mina"><a href="/hero/mina">Mina</a></h3>
`
	);
	var P = a(Vt, 2);
	r(P, 1, `ability rake`);
	var Ht = i(P);
	n(
		Ht,
		() => `
<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>
<h4 id="rake"><a href="/ability/rake">Rake</a></h4>
<ul><li>Rake missing health as damage increased from 5% to 6%</li></ul>
`
	);
	var Ut = a(Ht, 2);
	(o(Ut, { kind: `hero`, name: `Mina`, ability: `Rake` }), t(P));
	var F = a(P, 2);
	r(F, 1, `ability sanguine-retreat`);
	var Wt = i(F);
	n(
		Wt,
		() => `
<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>
<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>
<ul><li>Sanguine Retreat T3 now also increases range by +3m</li></ul>
`
	);
	var Gt = a(Wt, 2);
	(o(Gt, { kind: `hero`, name: `Mina`, ability: `Sanguine Retreat` }), t(F));
	var Kt = a(F, 2);
	r(Kt, 1, `ability nox-nostra`);
	var qt = i(Kt);
	n(
		qt,
		() => `
<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>
<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>
`
	);
	var Jt = a(qt, 2),
		Yt = i(Jt),
		Xt = i(Yt);
	n(Xt, () => `Nox Nostra damage increased from 4.45 to 4.6`);
	var Zt = a(Xt, 2);
	(s(Zt, {
		kind: `hero`,
		name: `Mina`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Nox Nostra damage increased from 4.45 to 4.6`
	}),
		t(Yt));
	var Qt = a(Yt, 2),
		$t = i(Qt);
	n($t, () => `Nox Nostra T1 damage increased from +1.74 to +1.9`);
	var en = a($t, 2);
	(s(en, {
		kind: `hero`,
		name: `Mina`,
		groupIndex: 2,
		bulletIndex: 1,
		text: `Nox Nostra T1 damage increased from +1.74 to +1.9`
	}),
		t(Qt),
		t(Jt));
	var tn = a(Jt, 2);
	(o(tn, { kind: `hero`, name: `Mina`, ability: `Nox Nostra` }), t(Kt), t(N));
	var nn = a(N, 2);
	r(nn, 1, `hero mo-krill`);
	var rn = i(nn);
	n(
		rn,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var I = a(rn, 2);
	r(I, 1, `ability sand-blast`);
	var an = i(I);
	n(
		an,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>
<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>
<ul><li>Sand Blast T2 slow increased from -25% to -30%</li><li>Sand Blast T3 increased from -20s Cooldown to -25s</li></ul>
`
	);
	var on = a(an, 2);
	(o(on, { kind: `hero`, name: `Mo & Krill`, ability: `Sand Blast` }), t(I));
	var sn = a(I, 2);
	r(sn, 1, `ability combo`);
	var cn = i(sn);
	n(
		cn,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Combo bonus max health per kill increased from 30+1/boon to 40+2/boon</li></ul>
`
	);
	var ln = a(cn, 2);
	(o(ln, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), t(sn), t(nn));
	var L = a(nn, 2);
	r(L, 1, `hero paige`);
	var un = i(L);
	n(
		un,
		() => `
<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>
<h3 id="paige"><a href="/hero/paige">Paige</a></h3>
<ul><li>Health per boon increased from 29 to 33</li></ul>
`
	);
	var R = a(un, 2);
	r(R, 1, `ability bookwyrm`);
	var dn = i(R);
	n(
		dn,
		() => `
<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>
<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>
<ul><li>Bookwyrm T1 changed from &quot;+2s Trail Duration and +1m Radius&quot; to &quot;-12s Cooldown&quot;</li><li>Bookwyrm T2 changed from &quot;+10m Range and -12s Cooldown&quot; to &quot;+1 Charge, +1m Radius and +2s Trail Duration&quot;</li></ul>
`
	);
	var fn = a(dn, 2);
	(o(fn, { kind: `hero`, name: `Paige`, ability: `Bookwyrm` }), t(R));
	var z = a(R, 2);
	r(z, 1, `ability bookworm`);
	var pn = i(z);
	n(
		pn,
		() => `
<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookworm change history</a></p>
<h4 id="bookworm"><a href="/ability/bookwyrm">Bookworm</a></h4>
<ul><li>Bookworm T3 changed from &quot;+100 Damage, +30 DPS and +1 Charge&quot; to &quot;+100 Damage, +30 DPS and +12m Travel Range&quot;</li></ul>
`
	);
	var mn = a(pn, 2);
	(o(mn, { kind: `hero`, name: `Paige`, ability: `Bookworm` }), t(z));
	var B = a(z, 2);
	r(B, 1, `ability plot-armor`);
	var hn = i(B);
	n(
		hn,
		() => `
<p><a href="/ability/plot-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Plot Armor change history</a></p>
<h4 id="plot-armor"><a href="/ability/plot-armor">Plot Armor</a></h4>
<ul><li>Plot Armor T1 fire rate spirit scaling increased from 0.13 to 0.16</li><li>Plot Armor T3 increased from 75% Barrier to 100%</li></ul>
`
	);
	var gn = a(hn, 2);
	(o(gn, { kind: `hero`, name: `Paige`, ability: `Plot Armor` }), t(B));
	var _n = a(B, 2);
	r(_n, 1, `ability rallying-charge`);
	var vn = i(_n);
	n(
		vn,
		() => `
<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>
<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>
<ul><li>Rallying Charge is now properly counted as a &quot;miss&quot; (for the -50% CD Reduction) if the only thing that was impacted were non-heroes</li><li>Rallying Charge T3 Max Amp increased from +50% to +70%</li></ul>
`
	);
	var yn = a(vn, 2);
	(o(yn, { kind: `hero`, name: `Paige`, ability: `Rallying Charge` }), t(_n), t(L));
	var V = a(L, 2);
	r(V, 1, `hero paradox`);
	var bn = i(V);
	n(
		bn,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var xn = a(bn, 2);
	r(xn, 1, `ability kinetic-carbine`);
	var Sn = i(xn);
	n(
		Sn,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine T2 now also increases move speed spirit scaling (0.06)</li><li>Kinetic Carbine T3 changed from affecting Max Damage Scaling to affecting both Min and Max Damage Scaling</li></ul>
`
	);
	var Cn = a(Sn, 2);
	(o(Cn, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), t(xn), t(V));
	var H = a(V, 2);
	r(H, 1, `hero pocket`);
	var wn = i(H);
	n(
		wn,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
<ul><li>Bullet damage per boon reduced from 0.16 to 0.14</li></ul>
`
	);
	var Tn = a(wn, 2);
	r(Tn, 1, `ability flying-cloak`);
	var En = i(Tn);
	n(
		En,
		() => `
<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>
<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>
<ul><li>Flying Cloak T3 reduced from -12s Cooldown to -11s</li></ul>
`
	);
	var Dn = a(En, 2);
	(o(Dn, { kind: `hero`, name: `Pocket`, ability: `Flying Cloak` }), t(Tn), t(H));
	var U = a(H, 2);
	r(U, 1, `hero rem`);
	var On = i(U);
	n(
		On,
		() => `
<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>
<h3 id="rem"><a href="/hero/rem">Rem</a></h3>
`
	);
	var W = a(On, 2);
	r(W, 1, `ability tag-along`);
	var kn = i(W);
	n(
		kn,
		() => `
<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>
<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>
<ul><li>Tag Along healing per second spirit scaling reduced from 0.66 to 0.4</li><li>Tag Along T3 missing health spirit scaling reduced from +0.02 to +0.016</li></ul>
`
	);
	var An = a(kn, 2);
	(o(An, { kind: `hero`, name: `Rem`, ability: `Tag Along` }), t(W));
	var G = a(W, 2);
	r(G, 1, `ability lil-helpers-spirit-resist`);
	var jn = i(G);
	n(
		jn,
		() => `
<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers Spirit Resist change history</a></p>
<h4 id="lil-helpers-spirit-resist"><a href="/ability/lil-helpers">Lil Helpers Spirit Resist</a></h4>
<ul><li>Lil Helpers Spirit Resist reduced from 15% to 12%</li></ul>
`
	);
	var Mn = a(jn, 2);
	(o(Mn, { kind: `hero`, name: `Rem`, ability: `Lil Helpers Spirit Resist` }), t(G));
	var Nn = a(G, 2);
	r(Nn, 1, `ability lil-helpers`);
	var Pn = i(Nn);
	n(
		Pn,
		() => `
<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>
<h4 id="lil-helpers"><a href="/ability/lil-helpers">Lil Helpers</a></h4>
<ul><li>Lil Helpers T1 changed from &quot;+1 Helper&quot; to &quot;+1 Helper and +1.5m/s Move Speed&quot;</li><li>Lil Helpers T2 changed from &quot;+8% Spirit Resist and +1.5m/s Move Speed&quot; to &quot;+1 Helper and +15% Trooper Damage and Resist&quot;</li><li>Lil Helpers T3 changed from &quot;+2 Helpers and +20% Trooper Damage and Resist&quot; to &quot;+1 Helper and +15% Spirit Resist&quot;</li></ul>
`
	);
	var Fn = a(Pn, 2);
	(o(Fn, { kind: `hero`, name: `Rem`, ability: `Lil Helpers` }), t(Nn), t(U));
	var K = a(U, 2);
	r(K, 1, `hero seven`);
	var In = i(K);
	n(
		In,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var q = a(In, 2);
	r(q, 1, `ability lightning-ball`);
	var Ln = i(q);
	n(
		Ln,
		() => `
<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>
<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>
<ul><li>Lightning Ball charge delay reduced from 7s to 6s</li></ul>
`
	);
	var Rn = a(Ln, 2);
	(o(Rn, { kind: `hero`, name: `Seven`, ability: `Lightning Ball` }), t(q));
	var zn = a(q, 2);
	r(zn, 1, `ability storm-cloud`);
	var Bn = i(zn);
	n(
		Bn,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud time to expand increased from 1.5s to 3.5s</li><li>Storm Cloud damage interval increased from 0.25s to 0.3s (DPS unchanged)</li><li>Storm Cloud T2 now also increases Initial Radius by +5m</li></ul>
`
	);
	var Vn = a(Bn, 2);
	(o(Vn, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(zn), t(K));
	var J = a(K, 2);
	r(J, 1, `hero shiv`);
	var Hn = i(J);
	n(
		Hn,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Alt Fire damage now has a custom value per boon (+0.2)</li><li>Alt Fire ammo consumed per shot increased from 3 to 5</li><li>Alt Fire knockback movement is now disabled by slowing hex state</li></ul>
`
	);
	var Y = a(Hn, 2);
	r(Y, 1, `ability serrated-knives`);
	var Un = i(Y);
	n(
		Un,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
`
	);
	var Wn = a(Un, 2),
		Gn = i(Wn),
		Kn = i(Gn);
	n(Kn, () => `Serrated Knives cooldown reduced from 18s to 16s`);
	var qn = a(Kn, 2);
	(s(qn, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Serrated Knives cooldown reduced from 18s to 16s`
	}),
		t(Gn),
		t(Wn));
	var Jn = a(Wn, 2);
	(o(Jn, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `ability slice-and-dice`);
	var Yn = i(X);
	n(
		Yn,
		() => `
<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>
<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>
<ul><li>Slice and Dice now deals +25 light melee damage (75 total) instead of 60 spirit damage</li><li>Slice and Dice changed from -6% Spirit Resist to +4% Damage Amp</li></ul>
`
	);
	var Xn = a(Yn, 2);
	(o(Xn, { kind: `hero`, name: `Shiv`, ability: `Slice and Dice` }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `ability bloodletting`);
	var Zn = i(Z);
	n(
		Zn,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>
<ul><li>Bloodletting T2 changed from &quot;+15% Incoming Damage Deferred&quot; to &quot;+35% Deferred Damage Cleared&quot;</li><li>Bloodletting T3 changed from &quot;+50% Deferred Damage Cleared&quot; to &quot;+15% Incoming Damage Deferred&quot;</li></ul>
`
	);
	var Qn = a(Zn, 2);
	(o(Qn, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `ability killing-blow`);
	var $n = i(Q);
	n(
		$n,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow now deals damage to troopers and neutrals along the way</li><li>Killing Blow executing a hero now instantly fills the rage bar</li><li>Killing Blow now has the T3 &quot;recast within 20s on a hero kill&quot; as part of the base ability</li></ul>
`
	);
	var er = a($n, 2);
	(o(er, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `ability killing-blow-full-rage-damage-bonus`);
	var tr = i($);
	n(
		tr,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Full Rage Damage Bonus change history</a></p>
<h4 id="killing-blow-full-rage-damage-bonus"><a href="/ability/killing-blow">Killing Blow Full Rage Damage Bonus</a></h4>
<ul><li>Killing Blow Full Rage Damage Bonus reduced from +12% to +8%</li></ul>
`
	);
	var nr = a(tr, 2);
	(o(nr, { kind: `hero`, name: `Shiv`, ability: `Killing Blow Full Rage Damage Bonus` }),
		t($));
	var rr = a($, 2);
	r(rr, 1, `ability killing-blow`);
	var ir = i(rr);
	n(
		ir,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow-1"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow range reduced from 18m to 12m</li><li>Killing Blow T1 now also increases range by +6m</li><li>Killing Blow T2 increased from +10% Full Rage Bonus Damage to +16%</li><li>Killing Blow T3 increased from +5% Enemy health Threshold to +10%</li></ul>
`
	);
	var ar = a(ir, 2);
	(o(ar, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), t(rr), t(J));
	var or = a(J, 2);
	r(or, 1, `hero vindicta`);
	var sr = i(or);
	n(
		sr,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
`
	);
	var cr = a(sr, 2);
	r(cr, 1, `ability stake`);
	var lr = i(cr);
	n(
		lr,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
<ul><li>Stake T2 reduced from -20s Cooldown to -22s</li></ul>
`
	);
	var ur = a(lr, 2);
	(o(ur, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), t(cr));
	var dr = a(cr, 2);
	r(dr, 1, `ability crow-familiar`);
	var fr = i(dr);
	n(
		fr,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar T2 increased from -12s Cooldown to -16s</li><li>Crow Familiar collision radius between each crow increased slightly</li></ul>
`
	);
	var pr = a(fr, 2);
	(o(pr, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), t(dr));
	var mr = a(dr, 2);
	r(mr, 1, `ability assassinate-max-bonus-damage`);
	var hr = i(mr);
	n(
		hr,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Max Bonus Damage change history</a></p>
<h4 id="assassinate-max-bonus-damage"><a href="/ability/assassinate">Assassinate Max Bonus Damage</a></h4>
<ul><li>Assassinate Max Bonus Damage spirit scaling increased from 2 to 2.3</li></ul>
`
	);
	var gr = a(hr, 2);
	(o(gr, { kind: `hero`, name: `Vindicta`, ability: `Assassinate Max Bonus Damage` }),
		t(mr),
		t(or));
	var _r = a(or, 2);
	r(_r, 1, `hero viscous`);
	var vr = i(_r);
	n(
		vr,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var yr = a(vr, 2);
	r(yr, 1, `ability splatter`);
	var br = i(yr);
	n(
		br,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter T3 spirit scaling reduced from +1.1 to +1.0</li></ul>
`
	);
	var xr = a(br, 2);
	(o(xr, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), t(yr));
	var Sr = a(yr, 2);
	r(Sr, 1, `ability puddle-punch`);
	var Cr = i(Sr);
	n(
		Cr,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Puddle Punch T3 increased from -12s Cooldown to -14s</li></ul>
`
	);
	var wr = a(Cr, 2);
	(o(wr, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), t(Sr));
	var Tr = a(Sr, 2);
	r(Tr, 1, `ability goo-ball`);
	var Er = i(Tr);
	n(
		Er,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball T3 increased from +6s Duration to +7s</li></ul>
`
	);
	var Dr = a(Er, 2);
	(o(Dr, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(Tr), t(_r));
	var Or = a(_r, 2);
	r(Or, 1, `hero vyper`);
	var kr = i(Or);
	n(
		kr,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
`
	);
	var Ar = a(kr, 2);
	r(Ar, 1, `ability screwjab-dagger`);
	var jr = i(Ar);
	n(
		jr,
		() => `
<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>
<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>
<ul><li>Screwjab Dagger T3 now also reduces charge delay from 4s to 2s</li></ul>
`
	);
	var Mr = a(jr, 2);
	(o(Mr, { kind: `hero`, name: `Vyper`, ability: `Screwjab Dagger` }), t(Ar));
	var Nr = a(Ar, 2);
	r(Nr, 1, `ability slither`);
	var Pr = i(Nr);
	n(
		Pr,
		() => `
<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>
<h4 id="slither"><a href="/ability/slither">Slither</a></h4>
<ul><li>Slither T3 spirit scaling increased from 0.6 to 0.8</li></ul>
`
	);
	var Fr = a(Pr, 2);
	(o(Fr, { kind: `hero`, name: `Vyper`, ability: `Slither` }), t(Nr), t(Or));
	var Ir = a(Or, 2);
	r(Ir, 1, `hero warden`);
	var Lr = i(Ir);
	n(
		Lr,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Bullet damage per boon reduced from 0.34 to 0.28</li></ul>
`
	);
	var Rr = a(Lr, 2);
	r(Rr, 1, `ability willpower`);
	var zr = i(Rr);
	n(
		zr,
		() => `
<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>
<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>
<ul><li>Willpower T2 increased from -22s Cooldown to -24s</li><li>Willpower T3 increased from +2.5 spirit power scaling to +2.7</li></ul>
`
	);
	var Br = a(zr, 2);
	(o(Br, { kind: `hero`, name: `Warden`, ability: `Willpower` }), t(Rr), t(Ir));
	var Vr = a(Ir, 2);
	n(
		Vr,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Hr = a(Vr, 2);
	re(Hr, {});
	var Ur = a(Hr, 2);
	r(Ur, 1, `item cursed-relic`);
	var Wr = i(Ur);
	n(
		Wr,
		() => `
<p><a href="/item/cursed-relic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/curse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cursed Relic patch history</a></p>
<h3 id="cursed-relic"><a href="/item/cursed-relic">Cursed Relic</a></h3>
<ul><li>Damage Penalty increased from -10% to -14%</li></ul>
`
	);
	var Gr = a(Wr, 2);
	(o(Gr, { kind: `item`, name: `Cursed Relic`, ability: null }), t(Ur));
	var Kr = a(Ur, 2);
	r(Kr, 1, `item mystic-shot`);
	var qr = i(Kr);
	n(
		qr,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
`
	);
	var Jr = a(qr, 2),
		Yr = i(Jr),
		Xr = i(Yr);
	n(Xr, () => `Cooldown increased from 8s to 9s`);
	var Zr = a(Xr, 2);
	(s(Zr, {
		kind: `item`,
		name: `Mystic Shot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 8s to 9s`
	}),
		t(Yr),
		t(Jr));
	var Qr = a(Jr, 2);
	(o(Qr, { kind: `item`, name: `Mystic Shot`, ability: null }), t(Kr));
	var $r = a(Kr, 2);
	r($r, 1, `item scourge`);
	var ei = i($r);
	n(
		ei,
		() => `
<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>
<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>
<ul><li>Max Health DPS reduced from 3.5% to 2.6%</li><li>Max Health DPS now scales with spirit power (0.0055)</li></ul>
`
	);
	var ti = a(ei, 2);
	(o(ti, { kind: `item`, name: `Scourge`, ability: null }), t($r));
	var ni = a($r, 2);
	r(ni, 1, `item toxic-bullets`);
	var ri = i(ni);
	n(
		ri,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>Bleed damage increased from 1.7% to 1.9%</li></ul>
`
	);
	var ii = a(ri, 2);
	(o(ii, { kind: `item`, name: `Toxic Bullets`, ability: null }), t(ni), ee(e, c));
}
export { se as default, ie as metadata, l as readingManifest, ae as toc };
