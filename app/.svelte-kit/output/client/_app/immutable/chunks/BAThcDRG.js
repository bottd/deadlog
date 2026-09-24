import {
	I as ee,
	Ot as e,
	P as te,
	T as t,
	at as ne,
	g as n,
	it as r,
	st as i
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a, i as o, n as s, r as c } from './vWaTnxY_.js';
function re(ee) {
	s(ee, {
		type: `hero`,
		names: [
			`Abrams`,
			`Celeste`,
			`Graves`,
			`Haze`,
			`Holliday`,
			`Ivy`,
			`Kelvin`,
			`Lady Geist`,
			`Lash`,
			`Paige`,
			`Paradox`,
			`Rem`,
			`Shiv`,
			`Silver`,
			`Venator`,
			`Viscous`,
			`Vyper`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function ie(ee) {
	s(ee, {
		type: `item`,
		names: [
			`Ballistic Enchantment`,
			`Cultist Sacrifice`,
			`Decay`,
			`Diviner's Kevlar`,
			`Focus Lens`,
			`Fortitude`,
			`Golden Goose Egg`,
			`Hollow Point`,
			`Leech`,
			`Lifestrike`,
			`Mercurial Magnum`,
			`Plated Armor`,
			`Radiant Regeneration`,
			`Restorative Locket`,
			`Shadow Weave`,
			`Slowing Hex`,
			`Spiritual Overflow`,
			`Tankbuster`,
			`Toxic Bullets`,
			`Trophy Collector`,
			`Veil Walker`,
			`Weakening Headshot`
		]
	});
}
var ae = {
		title: `Minor Update - 09-16-2026`,
		alias: `2026/minor-09-16`,
		thread_id: `162572`,
		steam_gid: `1844115010490072`,
		published: `2026-09-16T20:16:43.000Z`,
		author: `IceFrog`,
		author_image: `/assets/authors/icefrog.webp`,
		major_update: !1,
		content_text: `Unstable Rift comeback resist max values now scale over the course of the game. Previously the max values were 35%. Now it is 10% + 1% per minute (around ~20% for the first one), with an upper limit of 40% at 30 minutes. Removed a fixed amount of extra bonus souls you would get for being behind even a very slightly amount in net worth for both hero kill bounties as well as Unstable Rift bounties (this had a larger impact on the early to mid game) Slightly reduced comeback bounties in general (this is in addition to the above change) A portion of the comeback souls earned by players above enemy teams average net worth is instead distributed via the tick gold system that is given to the lowest 2 players (70% of the extra comeback value goes to them) Guardian bounty increased by 10% Walker bounty increased by 5% Share for objectives bounty to nearby heroes reduced from 30% to 25% (the remaining gets split between all 6 players) Respawn Time at 20 minutes increased from 35s to 38s (does not affect the max values later on, just a little higher earlier) Using parry now pauses reloading Parrying while doing a regular dash will now cancel the dash (and momentum) and parry on the spot Getting stunned now pauses your reload rather than restarting it Breakables in the underground tunnels initial spawn time increased from 3m to 5m Breakables in the underground tunnels respawn rate increased from 3m to 5m All move slow values reduced by ~20% globally All ground dash slows reduced by ~10% globally Slows now also affect air drag by 35% of the slow value (convar citadel_enable_slows_affect_air_drag Dashes and light melee's no longer pause your gun's cycle time (this is a general change that affects high-cycle time weapons the most like Silver or Abrams) Abrams Infernal Resilience T3 increased from +8% to +9% Seismic Impact T3 reduced from 6s Unstoppable to 5s Celeste Stamina cooldown increased from 5 to 5.3 Light Eater spirit lifesteal reduced from 20% to 18% Light Eater T3 decreased from +25 to +22 Dazzling Trick cooldown increased from 34s to 38s Radiant Daggers T2 reduced from +80 to +70 Shining Wonder radius reduced from 16.5m to 15.5m Shining Wonder T3 Max Bounces reduced from +8 to +6 Graves Health per boon increased from 33 to 35 Haze Fixation headshot stack count increased from +2 to +3 Fixation T3 weapon scaling increased from 0.0003 to 0.00035 Holliday Health per boon increased from 41 to 43 Crackshot T2 now also applies -6% Bullet Resistance for 5s Lasso duration extention by Bounce Pad increased from +1s to +1.25s Ivy Stone Form radius reduced from 6m to 5.75m Stone Form T1 max health heal reduced from 7% to 6% Kelvin Frozen Shelter base ability health regen now scales with spirit power (0.2) Lady Geist Life Drain T3 spirit scaling increased from +0.3 to +0.45 Essence Bomb T3 damage increased from 26% to 30% Lash Gun falloff range reduced from 18m->54m to 16m->48m Ground Strike T3 spirit scaling increased from +0.03 to +0.04 Ground Strike T3 damage per meter scaling increased from 110% to 120% Grapple T2 Weapon Damage buff duration reduced from 10s to 6s Flog heal reduced from 50% to 40% Flog angle increased from 38 to 40 Flog T3 reduced from +40 degrees angle to +25 Flog T3 reduced from +20% heal to +15% Paige Heavy Melee spirit scaling increased from 0.3 to 0.45 Captivating Read T1 increased from -11s Cooldown to -14s Captivating Read T3 increased from +1m to +2m Fixed some collision issues with Rallying Charge Paradox Kinetic Carbine min damage multiplier reduced from 25% to 10% (max damage multiplier unaffected) Kinetic Carbine min damage multiplier no longer gets increased by the T3 Rem Fixed a bug where multiple helpers could be sent to follow a single player for no effect Lil Helpers now have a target UI when instant cast mode is selected Shiv Alt fire base damage increased by 4% Alt fire damage per boon increased from +0.2 to +0.24 Serrated Knives while rage is full now deals 3.5% current HP damage on impact instead of ricocheting (0.01 spirit scaling) Silver Health per boon increased from 28 to 31 Sprint speed increased from 1.5 to 2.5 Dashes and light melee's no longer pause your gun's cycle time Boot Kick can only target heroes and objectives now Entangling Bola can only target heroes now Weighted Bola now increases gravity during the debuff duration, and interrupts flying abilities (same rules as Phantom Strike) Venator Ira Domini now works with Ricochet, all the shots will bounce Ira Domini can now split shot (releases 1 extra bolt on each side, 3 total) Viscous Alt fire damage growth reduced by 10% Splatter detonation cooldown reduced from 0.15 to 0.12 Splatter T1 reduced from +2m to +1.5m The Cube cast range reduced from 26m to 20m Puddle Punch cooldown increased from 21s to 24s Goo Ball T3 now also increases spirit scaling by 0.2 Vyper Slither T3 barrier duration reduced from 5s to 4s Petrifying Bola cooldown increased from 105s to 115s Warden Bullet damage per boon reduced from 0.28 to 0.25 Fire Rate spirit scaling reduced from 0.25 to 0.21 Alchemical Flask projectile range and speed reduced by 30% Willpower T3 spirit scaling reduced from +2.7 to +2.1 Willpower T3 debuff resistance reduced from 40% to 30% Wraith Card Trick heart heal reduced from 75 to 60 Card Trick heart heal spirit scaling reduced from 0.75 to 0.5 Card Trick Diamond Bullet and Spirit Resist reduction reduced from -8% to -7% Card Trick T3 Diamond Bullet and Spirit Resist reduction reduced from -5% to -4% Card Trick T3 Clubs slow from +20% to +15% Fixed Project Mind getting caught on edges/corners when aiming past it Full Auto spirit damage per bullet scaling increased from 0.03 to 0.045 Yamato Crimson Slash T3 now also increases the heal spirit scaling by +0.4 Flying Slash light melee scaling increased from 1.0 to 1.2 Weakening Headshot Bullet Resist Reduction reduced from -13% to -12% Hollow Point Bullet Resist Reduction increased from 9% to 10% Toxic Bullets Spirit scaling increased from 0.005% to 0.006% Shadow Weave Now builds from Sprint Boots Sprint speed increased from 1.5 to 2 Cooldown reduced from 45s to 37s Cultist Sacrifice Bounty reduced from 180% to 170% Ballistic Enchantment Duration increased from 14s to 20s Spiritual Overflow Buildup is 35% slower Spirit Power on proc reduced from 40 to 30 Fire Rate reduced from 30% to 25% Restorative Locket Heal per boon reduced from 0.5 to 0.45 Stack range reduced from 35m to 32m Trophy Collector Souls per minute reduced from 18 to 16 Veil Walker No longer builds from Sprint Boots No longer grants +2 Sprint and +2 Out of Combat Regen (due to loss of component) Movement speed bonus is now removed when the invisibility is removed Spirit Power reduced from 10 to 6 Fortitude Max Health regen increased from 2% to 2.25% Lifestrike Heal on Melee hit increased from 100+1.5 to 120+1.75 Melee hit heal increased from 30% to 35% Leech Bullet and Spirit Lifesteal increased from 25% to 28% Plated Armor Fixed on-hit damage prevention not blocking the following on-hit spirit damage effects: Mercurial Magnum, Vindicta's Flight, Wraith's Full Auto, and Tesla Bullets/Capacitor Diviner's Kevlar Now grants +10% Ultimate Ability Cooldown Reduction Golden Goose Egg Damage Penalty increased from -10% to -15% Stored souls now count towards net worth (affects comeback reward calculations) Souls per minute reduced from 90 to 80 Slowing Hex Cooldown increased from 27s to 29s Radiant Regeneration Healing on Ability Cast per boon scaling reduced from 2 to 1.7 Tankbuster Current Health Bonus damage reduced from 8% to 7.5% Decay DPS reduced by 25% Duration increased by 20% Mercurial Magnum Base bullet damage scaling reduced from 0.49 to 0.38 Base bullet damage reduced from 25% to 20% Focus Lens Damage increased from 30% to 35% Cast range increased from 20m to 25m`,
		stats: {
			schema: 2,
			method: 3,
			collected: `2026-09-23T19:46:48.000Z`,
			before: { from: `2026-09-02`, to: `2026-09-16` },
			after: { from: `2026-09-17`, to: `2026-09-23` }
		}
	},
	oe = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 2, title: `Celeste`, id: `celeste` },
		{ level: 3, title: `Light Eater`, id: `light-eater` },
		{ level: 3, title: `Dazzling Trick`, id: `dazzling-trick` },
		{ level: 3, title: `Radiant Daggers`, id: `radiant-daggers` },
		{ level: 3, title: `Shining Wonder`, id: `shining-wonder` },
		{ level: 2, title: `Graves`, id: `graves` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Fixation`, id: `fixation` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 3, title: `Crackshot`, id: `crackshot` },
		{ level: 3, title: `Spirit Lasso`, id: `spirit-lasso` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Stone Form`, id: `stone-form` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Life Drain`, id: `life-drain` },
		{ level: 3, title: `Essence Bomb`, id: `essence-bomb` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Grapple`, id: `grapple` },
		{ level: 3, title: `Flog`, id: `flog` },
		{ level: 2, title: `Paige`, id: `paige` },
		{ level: 3, title: `Heavy Melee`, id: `heavy-melee` },
		{ level: 3, title: `Captivating Read`, id: `captivating-read` },
		{ level: 3, title: `Rallying Charge`, id: `rallying-charge` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 2, title: `Rem`, id: `rem` },
		{ level: 3, title: `Lil Helpers`, id: `lil-helpers` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 2, title: `Silver`, id: `silver` },
		{ level: 3, title: `Boot Kick`, id: `boot-kick` },
		{ level: 3, title: `Entangling Bola`, id: `entangling-bola` },
		{ level: 3, title: `Weighted Bola`, id: `weighted-bola` },
		{ level: 2, title: `Venator`, id: `venator` },
		{ level: 3, title: `Ira Domini`, id: `ira-domini` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 3, title: `The Cube`, id: `the-cube` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Slither`, id: `slither` },
		{ level: 3, title: `Petrifying Bola`, id: `petrifying-bola` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Alchemical Flask`, id: `alchemical-flask` },
		{ level: 3, title: `Willpower`, id: `willpower` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 3, title: `Project Mind`, id: `project-mind` },
		{ level: 3, title: `Full Auto`, id: `full-auto` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Ballistic Enchantment`, id: `ballistic-enchantment` },
		{ level: 2, title: `Cultist Sacrifice`, id: `cultist-sacrifice` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Diviner's Kevlar`, id: `diviner-s-kevlar` },
		{ level: 2, title: `Focus Lens`, id: `focus-lens` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Golden Goose Egg`, id: `golden-goose-egg` },
		{ level: 2, title: `Hollow Point`, id: `hollow-point` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Mercurial Magnum`, id: `mercurial-magnum` },
		{ level: 2, title: `Plated Armor`, id: `plated-armor` },
		{ level: 2, title: `Radiant Regeneration`, id: `radiant-regeneration` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Tankbuster`, id: `tankbuster` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` },
		{ level: 2, title: `Trophy Collector`, id: `trophy-collector` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` },
		{ level: 2, title: `Weakening Headshot`, id: `weakening-headshot` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 3,
			collectedAt: `2026-09-23T19:46:48.000Z`,
			before: { from: `2026-09-02`, to: `2026-09-16` },
			after: { from: `2026-09-17`, to: `2026-09-23` },
			siblings: []
		},
		open: !0,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Celeste`, id: `celeste` },
			{ kind: `hero`, name: `Graves`, id: `graves` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `Paige`, id: `paige` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Rem`, id: `rem` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Silver`, id: `silver` },
			{ kind: `hero`, name: `Venator`, id: `venator` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Ballistic Enchantment`, id: `ballistic-enchantment` },
			{ kind: `item`, name: `Cultist Sacrifice`, id: `cultist-sacrifice` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Diviner's Kevlar`, id: `diviner-s-kevlar` },
			{ kind: `item`, name: `Focus Lens`, id: `focus-lens` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Golden Goose Egg`, id: `golden-goose-egg` },
			{ kind: `item`, name: `Hollow Point`, id: `hollow-point` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Mercurial Magnum`, id: `mercurial-magnum` },
			{ kind: `item`, name: `Plated Armor`, id: `plated-armor` },
			{ kind: `item`, name: `Radiant Regeneration`, id: `radiant-regeneration` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Tankbuster`, id: `tankbuster` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` },
			{ kind: `item`, name: `Trophy Collector`, id: `trophy-collector` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` },
			{ kind: `item`, name: `Weakening Headshot`, id: `weakening-headshot` }
		],
		related: [
			{
				name: `Abrams`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 208212,
					afterAppearances: 73791,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 1252627263, buyers: 68618, after: 36210 },
						{ id: 2059712766, buyers: 39471, after: 9897 },
						{ id: 3585132399, buyers: 19573, after: 8930 }
					]
				}
			},
			{
				name: `Celeste`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 227620,
					afterAppearances: 60421,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2947183272, buyers: 194508, after: 50982 },
						{ id: 2059712766, buyers: 122923, after: 27606 },
						{ id: 2226497419, buyers: 85493, after: 18539 }
					]
				}
			},
			{
				name: `Graves`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 242945,
					afterAppearances: 88460,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3696726732, buyers: 131079, after: 44647 },
						{ id: 2226497419, buyers: 60173, after: 19604 },
						{ id: 2462046703, buyers: 47735, after: 7002 }
					]
				}
			},
			{
				name: `Haze`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 261225,
					afterAppearances: 121481,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 1813726886, buyers: 102649, after: 39913 },
						{ id: 1770441818, buyers: 70906, after: 32354 },
						{ id: 3585132399, buyers: 61932, after: 38901 }
					]
				}
			},
			{
				name: `Holliday`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 121035,
					afterAppearances: 51145,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 71846, after: 29162 },
						{ id: 3074274290, buyers: 56883, after: 21271 },
						{ id: 865958998, buyers: 37409, after: 8033 }
					]
				}
			},
			{
				name: `Ivy`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 186190,
					afterAppearances: 62572,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3074274290, buyers: 51841, after: 16756 },
						{ id: 1813726886, buyers: 44192, after: 17784 },
						{ id: 3919289022, buyers: 30885, after: 4726 }
					]
				}
			},
			{
				name: `Kelvin`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 118496,
					afterAppearances: 43752,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3074274290, buyers: 54535, after: 21228 },
						{ id: 2121044373, buyers: 35735, after: 14661 },
						{ id: 2947183272, buyers: 30195, after: 11698 }
					]
				}
			},
			{
				name: `Lady Geist`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 151221,
					afterAppearances: 72068,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2947183272, buyers: 139094, after: 66865 },
						{ id: 2121044373, buyers: 95206, after: 44445 },
						{ id: 865846625, buyers: 53875, after: 28038 }
					]
				}
			},
			{
				name: `Lash`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 267638,
					afterAppearances: 105511,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 243510, after: 99244 },
						{ id: 3074274290, buyers: 82249, after: 38991 },
						{ id: 2059712766, buyers: 66821, after: 11792 }
					]
				}
			},
			{
				name: `Paige`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 211314,
					afterAppearances: 86267,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3074274290, buyers: 151480, after: 60148 },
						{ id: 1813726886, buyers: 70932, after: 30106 },
						{ id: 2121044373, buyers: 38691, after: 14762 }
					]
				}
			},
			{
				name: `Paradox`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 240306,
					afterAppearances: 73928,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 191194, after: 54741 },
						{ id: 865958998, buyers: 143162, after: 20244 },
						{ id: 3074274290, buyers: 91921, after: 28748 }
					]
				}
			},
			{
				name: `Rem`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 249130,
					afterAppearances: 85889,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3074274290, buyers: 143376, after: 50376 },
						{ id: 2121044373, buyers: 116193, after: 37755 },
						{ id: 2462046703, buyers: 51230, after: 14197 }
					]
				}
			},
			{
				name: `Shiv`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 199899,
					afterAppearances: 91883,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2947183272, buyers: 184421, after: 86954 },
						{ id: 2059712766, buyers: 69135, after: 14126 },
						{ id: 3144988365, buyers: 37714, after: 19645 }
					]
				}
			},
			{
				name: `Silver`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 135683,
					afterAppearances: 77880,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 40109, after: 24887 },
						{ id: 1813726886, buyers: 36368, after: 24772 },
						{ id: 865958998, buyers: 30893, after: 4498 }
					]
				}
			},
			{
				name: `Venator`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 238375,
					afterAppearances: 109087,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 1770441818, buyers: 150923, after: 71956 },
						{ id: 2678489038, buyers: 82703, after: 58337 },
						{ id: 3585132399, buyers: 56616, after: 35117 }
					]
				}
			},
			{
				name: `Viscous`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 153356,
					afterAppearances: 44304,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 102334, after: 29817 },
						{ id: 3074274290, buyers: 71956, after: 19794 },
						{ id: 1252627263, buyers: 67655, after: 20291 }
					]
				}
			},
			{
				name: `Vyper`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 124648,
					afterAppearances: 38595,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3919289022, buyers: 102390, after: 31120 },
						{ id: 2226497419, buyers: 49024, after: 15070 },
						{ id: 1770441818, buyers: 32524, after: 9411 }
					]
				}
			},
			{
				name: `Warden`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 258270,
					afterAppearances: 43423,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3919289022, buyers: 237139, after: 37439 },
						{ id: 2226497419, buyers: 193683, after: 28433 },
						{ id: 865958998, buyers: 131023, after: 5390 }
					]
				}
			},
			{
				name: `Wraith`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 235247,
					afterAppearances: 71642,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 3919289022, buyers: 202229, after: 61475 },
						{ id: 2226497419, buyers: 143063, after: 38952 },
						{ id: 865846625, buyers: 50061, after: 19712 }
					]
				}
			},
			{
				name: `Yamato`,
				record: {
					methodVersion: 2,
					status: `complete`,
					appearances: 148374,
					afterAppearances: 62062,
					candidates: [
						709540378, 865846625, 865958998, 1252627263, 1770441818, 1798666702,
						1813726886, 2059712766, 2121044373, 2142980412, 2226497419, 2462046703,
						2678489038, 2820116164, 2947183272, 3074274290, 3144988365, 3294954488,
						3491236900, 3585132399, 3696726732, 3919289022
					],
					items: [
						{ id: 2121044373, buyers: 86281, after: 33193 },
						{ id: 2059712766, buyers: 51514, after: 12682 },
						{ id: 2226497419, buyers: 31019, after: 6790 }
					]
				}
			}
		]
	},
	se = ee(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <!></div> <div><!> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <!></div> <!> <!> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li></ul> <!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div> <div><!> <!> <!></div>`,
		1
	);
function ce(ee) {
	var s = se(),
		ae = ne(s);
	t(
		ae,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>
<ul><li>Unstable Rift comeback resist max values now scale over the course of the game. Previously the max values were 35%. Now it is 10% + 1% per minute (around ~20% for the first one), with an upper limit of 40% at 30 minutes.</li><li>Removed a fixed amount of extra bonus souls you would get for being behind even a very slightly amount in net worth for both hero kill bounties as well as Unstable Rift bounties (this had a larger impact on the early to mid game)</li><li>Slightly reduced comeback bounties in general (this is in addition to the above change)</li><li>A portion of the comeback souls earned by players above enemy teams average net worth is instead distributed via the tick gold system that is given to the lowest 2 players (70% of the extra comeback value goes to them)</li><li>Guardian bounty increased by 10%</li><li>Walker bounty increased by 5%</li><li>Share for objectives bounty to nearby heroes reduced from 30% to 25% (the remaining gets split between all 6 players)</li><li>Respawn Time at 20 minutes increased from 35s to 38s (does not affect the max values later on, just a little higher earlier)</li><li>Using parry now pauses reloading</li><li>Parrying while doing a regular dash will now cancel the dash (and momentum) and parry on the spot</li><li>Getting stunned now pauses your reload rather than restarting it</li><li>Breakables in the underground tunnels initial spawn time increased from 3m to 5m</li><li>Breakables in the underground tunnels respawn rate increased from 3m to 5m</li><li>All move slow values reduced by ~20% globally</li><li>All ground dash slows reduced by ~10% globally</li><li>Slows now also affect air drag by 35% of the slow value (convar citadel_enable_slows_affect_air_drag</li><li>Dashes and light melee&#x27;s no longer pause your gun&#x27;s cycle time (this is a general change that affects high-cycle time weapons the most like Silver or Abrams)</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var oe = i(ae, 2);
	re(oe, {});
	var l = i(oe, 2);
	n(l, 1, `hero abrams`);
	var ce = r(l);
	t(
		ce,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var u = i(ce, 2);
	n(u, 1, `ability infernal-resilience`);
	var le = r(u);
	t(
		le,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience T3 increased from +8% to +9%</li></ul>
`
	);
	var ue = i(le, 2);
	(a(ue, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), e(u));
	var de = i(u, 2);
	n(de, 1, `ability seismic-impact`);
	var fe = r(de);
	t(
		fe,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Seismic Impact T3 reduced from 6s Unstoppable to 5s</li></ul>
`
	);
	var pe = i(fe, 2);
	(a(pe, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), e(de));
	var me = i(de, 2);
	(c(me, { kind: `hero`, name: `Abrams` }), e(l));
	var d = i(l, 2);
	n(d, 1, `hero celeste`);
	var he = r(d);
	t(
		he,
		() => `
<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>
<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>
<ul><li>Stamina cooldown increased from 5 to 5.3</li></ul>
`
	);
	var f = i(he, 2);
	n(f, 1, `ability light-eater`);
	var ge = r(f);
	t(
		ge,
		() => `
<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>
<h4 id="light-eater"><a href="/ability/light-eater">Light Eater</a></h4>
<ul><li>Light Eater spirit lifesteal reduced from 20% to 18%</li><li>Light Eater T3 decreased from +25 to +22</li></ul>
`
	);
	var _e = i(ge, 2);
	(a(_e, { kind: `hero`, name: `Celeste`, ability: `Light Eater` }), e(f));
	var p = i(f, 2);
	n(p, 1, `ability dazzling-trick`);
	var ve = r(p);
	t(
		ve,
		() => `
<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>
<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>
`
	);
	var ye = i(ve, 2),
		be = r(ye),
		xe = r(be);
	t(xe, () => `Dazzling Trick cooldown increased from 34s to 38s`);
	var Se = i(xe, 2);
	(o(Se, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Dazzling Trick cooldown increased from 34s to 38s`
	}),
		e(be),
		e(ye));
	var Ce = i(ye, 2);
	(a(Ce, { kind: `hero`, name: `Celeste`, ability: `Dazzling Trick` }), e(p));
	var m = i(p, 2);
	n(m, 1, `ability radiant-daggers`);
	var we = r(m);
	t(
		we,
		() => `
<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>
<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>
<ul><li>Radiant Daggers T2 reduced from +80 to +70</li></ul>
`
	);
	var Te = i(we, 2);
	(a(Te, { kind: `hero`, name: `Celeste`, ability: `Radiant Daggers` }), e(m));
	var h = i(m, 2);
	n(h, 1, `ability shining-wonder`);
	var Ee = r(h);
	t(
		Ee,
		() => `
<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>
<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>
`
	);
	var De = i(Ee, 2),
		Oe = r(De),
		ke = r(Oe);
	t(ke, () => `Shining Wonder radius reduced from 16.5m to 15.5m`);
	var Ae = i(ke, 2);
	(o(Ae, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 4,
		bulletIndex: 0,
		text: `Shining Wonder radius reduced from 16.5m to 15.5m`
	}),
		e(Oe));
	var je = i(Oe, 2);
	(t(je, () => `Shining Wonder T3 Max Bounces reduced from +8 to +6`, !0), e(je), e(De));
	var Me = i(De, 2);
	(a(Me, { kind: `hero`, name: `Celeste`, ability: `Shining Wonder` }), e(h));
	var Ne = i(h, 2);
	(c(Ne, { kind: `hero`, name: `Celeste` }), e(d));
	var g = i(d, 2);
	n(g, 1, `hero graves`);
	var Pe = r(g);
	t(
		Pe,
		() => `
<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>
<h3 id="graves"><a href="/hero/graves">Graves</a></h3>
<ul><li>Health per boon increased from 33 to 35</li></ul>
`
	);
	var Fe = i(Pe, 2);
	(c(Fe, { kind: `hero`, name: `Graves` }), e(g));
	var _ = i(g, 2);
	n(_, 1, `hero haze`);
	var Ie = r(_);
	t(
		Ie,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var v = i(Ie, 2);
	n(v, 1, `ability fixation`);
	var Le = r(v);
	t(
		Le,
		() => `
<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>
<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>
<ul><li>Fixation headshot stack count increased from +2 to +3</li><li>Fixation T3 weapon scaling increased from 0.0003 to 0.00035</li></ul>
`
	);
	var Re = i(Le, 2);
	(a(Re, { kind: `hero`, name: `Haze`, ability: `Fixation` }), e(v));
	var ze = i(v, 2);
	(c(ze, { kind: `hero`, name: `Haze` }), e(_));
	var y = i(_, 2);
	n(y, 1, `hero holliday`);
	var Be = r(y);
	t(
		Be,
		() => `
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
<ul><li>Health per boon increased from 41 to 43</li></ul>
`
	);
	var b = i(Be, 2);
	n(b, 1, `ability crackshot`);
	var Ve = r(b);
	t(
		Ve,
		() => `
<p><a href="/ability/crackshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crackshot change history</a></p>
<h4 id="crackshot"><a href="/ability/crackshot">Crackshot</a></h4>
<ul><li>Crackshot T2 now also applies -6% Bullet Resistance for 5s</li></ul>
`
	);
	var He = i(Ve, 2);
	(a(He, { kind: `hero`, name: `Holliday`, ability: `Crackshot` }), e(b));
	var x = i(b, 2);
	n(x, 1, `ability spirit-lasso`);
	var Ue = r(x);
	t(
		Ue,
		() => `
<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>
<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>
<ul><li>Lasso duration extention by Bounce Pad increased from +1s to +1.25s</li></ul>
`
	);
	var We = i(Ue, 2);
	(a(We, { kind: `hero`, name: `Holliday`, ability: `Spirit Lasso` }), e(x));
	var Ge = i(x, 2);
	(c(Ge, { kind: `hero`, name: `Holliday` }), e(y));
	var S = i(y, 2);
	n(S, 1, `hero ivy`);
	var Ke = r(S);
	t(
		Ke,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var C = i(Ke, 2);
	n(C, 1, `ability stone-form`);
	var qe = r(C);
	t(
		qe,
		() => `
<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>
<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>
`
	);
	var Je = i(qe, 2),
		Ye = r(Je),
		Xe = r(Ye);
	t(Xe, () => `Stone Form radius reduced from 6m to 5.75m`);
	var Ze = i(Xe, 2);
	(o(Ze, {
		kind: `hero`,
		name: `Ivy`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Stone Form radius reduced from 6m to 5.75m`
	}),
		e(Ye));
	var Qe = i(Ye, 2);
	(t(Qe, () => `Stone Form T1 max health heal reduced from 7% to 6%`, !0), e(Qe), e(Je));
	var $e = i(Je, 2);
	(a($e, { kind: `hero`, name: `Ivy`, ability: `Stone Form` }), e(C));
	var et = i(C, 2);
	(c(et, { kind: `hero`, name: `Ivy` }), e(S));
	var w = i(S, 2);
	n(w, 1, `hero kelvin`);
	var tt = r(w);
	t(
		tt,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var T = i(tt, 2);
	n(T, 1, `ability frozen-shelter`);
	var nt = r(T);
	t(
		nt,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
<ul><li>Frozen Shelter base ability health regen now scales with spirit power (0.2)</li></ul>
`
	);
	var rt = i(nt, 2);
	(a(rt, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), e(T));
	var it = i(T, 2);
	(c(it, { kind: `hero`, name: `Kelvin` }), e(w));
	var E = i(w, 2);
	n(E, 1, `hero lady-geist`);
	var at = r(E);
	t(
		at,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var D = i(at, 2);
	n(D, 1, `ability life-drain`);
	var ot = r(D);
	t(
		ot,
		() => `
<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>
<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>
<ul><li>Life Drain T3 spirit scaling increased from +0.3 to +0.45</li></ul>
`
	);
	var st = i(ot, 2);
	(a(st, { kind: `hero`, name: `Lady Geist`, ability: `Life Drain` }), e(D));
	var O = i(D, 2);
	n(O, 1, `ability essence-bomb`);
	var ct = r(O);
	t(
		ct,
		() => `
<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>
<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>
`
	);
	var lt = i(ct, 2),
		ut = r(lt),
		dt = r(ut);
	t(dt, () => `Essence Bomb T3 damage increased from 26% to 30%`);
	var ft = i(dt, 2);
	(o(ft, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Essence Bomb T3 damage increased from 26% to 30%`
	}),
		e(ut),
		e(lt));
	var pt = i(lt, 2);
	(a(pt, { kind: `hero`, name: `Lady Geist`, ability: `Essence Bomb` }), e(O));
	var mt = i(O, 2);
	(c(mt, { kind: `hero`, name: `Lady Geist` }), e(E));
	var k = i(E, 2);
	n(k, 1, `hero lash`);
	var ht = r(k);
	t(
		ht,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
<ul><li>Gun falloff range reduced from 18m-&gt;54m to 16m-&gt;48m</li></ul>
`
	);
	var A = i(ht, 2);
	n(A, 1, `ability ground-strike`);
	var gt = r(A);
	t(
		gt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike T3 spirit scaling increased from +0.03 to +0.04</li><li>Ground Strike T3 damage per meter scaling increased from 110% to 120%</li></ul>
`
	);
	var _t = i(gt, 2);
	(a(_t, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), e(A));
	var j = i(A, 2);
	n(j, 1, `ability grapple`);
	var vt = r(j);
	t(
		vt,
		() => `
<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>
<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>
<ul><li>Grapple T2 Weapon Damage buff duration reduced from 10s to 6s</li></ul>
`
	);
	var yt = i(vt, 2);
	(a(yt, { kind: `hero`, name: `Lash`, ability: `Grapple` }), e(j));
	var M = i(j, 2);
	n(M, 1, `ability flog`);
	var bt = r(M);
	t(
		bt,
		() => `
<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>
<h4 id="flog"><a href="/ability/flog">Flog</a></h4>
<ul><li>Flog heal reduced from 50% to 40%</li><li>Flog angle increased from 38 to 40</li><li>Flog T3 reduced from +40 degrees angle to +25</li><li>Flog T3 reduced from +20% heal to +15%</li></ul>
`
	);
	var xt = i(bt, 2);
	(a(xt, { kind: `hero`, name: `Lash`, ability: `Flog` }), e(M));
	var St = i(M, 2);
	(c(St, { kind: `hero`, name: `Lash` }), e(k));
	var N = i(k, 2);
	n(N, 1, `hero paige`);
	var Ct = r(N);
	t(
		Ct,
		() => `
<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>
<h3 id="paige"><a href="/hero/paige">Paige</a></h3>
`
	);
	var P = i(Ct, 2);
	n(P, 1, `ability heavy-melee`);
	var wt = r(P);
	t(
		wt,
		() => `
<h4 id="heavy-melee">Heavy Melee</h4>
<ul><li>Heavy Melee spirit scaling increased from 0.3 to 0.45</li></ul>
`
	);
	var Tt = i(wt, 2);
	(a(Tt, { kind: `hero`, name: `Paige`, ability: `Heavy Melee` }), e(P));
	var F = i(P, 2);
	n(F, 1, `ability captivating-read`);
	var Et = r(F);
	t(
		Et,
		() => `
<p><a href="/ability/captivating-read"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_blindinglight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Captivating Read change history</a></p>
<h4 id="captivating-read"><a href="/ability/captivating-read">Captivating Read</a></h4>
<ul><li>Captivating Read T1 increased from -11s Cooldown to -14s</li><li>Captivating Read T3 increased from +1m to +2m</li></ul>
`
	);
	var Dt = i(Et, 2);
	(a(Dt, { kind: `hero`, name: `Paige`, ability: `Captivating Read` }), e(F));
	var I = i(F, 2);
	n(I, 1, `ability rallying-charge`);
	var Ot = r(I);
	t(
		Ot,
		() => `
<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>
<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>
<ul><li>Fixed some collision issues with Rallying Charge</li></ul>
`
	);
	var kt = i(Ot, 2);
	(a(kt, { kind: `hero`, name: `Paige`, ability: `Rallying Charge` }), e(I));
	var At = i(I, 2);
	(c(At, { kind: `hero`, name: `Paige` }), e(N));
	var L = i(N, 2);
	n(L, 1, `hero paradox`);
	var jt = r(L);
	t(
		jt,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var R = i(jt, 2);
	n(R, 1, `ability kinetic-carbine`);
	var Mt = r(R);
	t(
		Mt,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine min damage multiplier reduced from 25% to 10% (max damage multiplier unaffected)</li><li>Kinetic Carbine min damage multiplier no longer gets increased by the T3</li></ul>
`
	);
	var Nt = i(Mt, 2);
	(a(Nt, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), e(R));
	var Pt = i(R, 2);
	(c(Pt, { kind: `hero`, name: `Paradox` }), e(L));
	var z = i(L, 2);
	n(z, 1, `hero rem`);
	var Ft = r(z);
	t(
		Ft,
		() => `
<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>
<h3 id="rem"><a href="/hero/rem">Rem</a></h3>
<ul><li>Fixed a bug where multiple helpers could be sent to follow a single player for no effect</li></ul>
`
	);
	var B = i(Ft, 2);
	n(B, 1, `ability lil-helpers`);
	var It = r(B);
	t(
		It,
		() => `
<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>
<h4 id="lil-helpers"><a href="/ability/lil-helpers">Lil Helpers</a></h4>
<ul><li>Lil Helpers now have a target UI when instant cast mode is selected</li></ul>
`
	);
	var Lt = i(It, 2);
	(a(Lt, { kind: `hero`, name: `Rem`, ability: `Lil Helpers` }), e(B));
	var Rt = i(B, 2);
	(c(Rt, { kind: `hero`, name: `Rem` }), e(z));
	var V = i(z, 2);
	n(V, 1, `hero shiv`);
	var zt = r(V);
	t(
		zt,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Alt fire base damage increased by 4%</li><li>Alt fire damage per boon increased from +0.2 to +0.24</li></ul>
`
	);
	var H = i(zt, 2);
	n(H, 1, `ability serrated-knives`);
	var Bt = r(H);
	t(
		Bt,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
<ul><li>Serrated Knives while rage is full now deals 3.5% current HP damage on impact instead of ricocheting (0.01 spirit scaling)</li></ul>
`
	);
	var Vt = i(Bt, 2);
	(a(Vt, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), e(H));
	var Ht = i(H, 2);
	(c(Ht, { kind: `hero`, name: `Shiv` }), e(V));
	var U = i(V, 2);
	n(U, 1, `hero silver`);
	var Ut = r(U);
	t(
		Ut,
		() => `
<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>
<h3 id="silver"><a href="/hero/silver">Silver</a></h3>
<ul><li>Health per boon increased from 28 to 31</li><li>Sprint speed increased from 1.5 to 2.5</li><li>Dashes and light melee&#x27;s no longer pause your gun&#x27;s cycle time</li></ul>
`
	);
	var W = i(Ut, 2);
	n(W, 1, `ability boot-kick`);
	var Wt = r(W);
	t(
		Wt,
		() => `
<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Boot Kick change history</a></p>
<h4 id="boot-kick"><a href="/ability/boot-kick">Boot Kick</a></h4>
<ul><li>Boot Kick can only target heroes and objectives now</li></ul>
`
	);
	var Gt = i(Wt, 2);
	(a(Gt, { kind: `hero`, name: `Silver`, ability: `Boot Kick` }), e(W));
	var G = i(W, 2);
	n(G, 1, `ability entangling-bola`);
	var Kt = r(G);
	t(
		Kt,
		() => `
<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>
<h4 id="entangling-bola"><a href="/ability/entangling-bola">Entangling Bola</a></h4>
<ul><li>Entangling Bola can only target heroes now</li></ul>
`
	);
	var qt = i(Kt, 2);
	(a(qt, { kind: `hero`, name: `Silver`, ability: `Entangling Bola` }), e(G));
	var K = i(G, 2);
	n(K, 1, `ability weighted-bola`);
	var Jt = r(K);
	t(
		Jt,
		() => `
<h4 id="weighted-bola">Weighted Bola</h4>
<ul><li>Weighted Bola now increases gravity during the debuff duration, and interrupts flying abilities (same rules as Phantom Strike)</li></ul>
`
	);
	var Yt = i(Jt, 2);
	(a(Yt, { kind: `hero`, name: `Silver`, ability: `Weighted Bola` }), e(K));
	var Xt = i(K, 2);
	(c(Xt, { kind: `hero`, name: `Silver` }), e(U));
	var q = i(U, 2);
	n(q, 1, `hero venator`);
	var Zt = r(q);
	t(
		Zt,
		() => `
<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>
<h3 id="venator"><a href="/hero/venator">Venator</a></h3>
`
	);
	var J = i(Zt, 2);
	n(J, 1, `ability ira-domini`);
	var Qt = r(J);
	t(
		Qt,
		() => `
<p><a href="/ability/ira-domini"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_crossbow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ira Domini change history</a></p>
<h4 id="ira-domini"><a href="/ability/ira-domini">Ira Domini</a></h4>
<ul><li>Ira Domini now works with Ricochet, all the shots will bounce</li><li>Ira Domini can now split shot (releases 1 extra bolt on each side, 3 total)</li></ul>
`
	);
	var $t = i(Qt, 2);
	(a($t, { kind: `hero`, name: `Venator`, ability: `Ira Domini` }), e(J));
	var en = i(J, 2);
	(c(en, { kind: `hero`, name: `Venator` }), e(q));
	var Y = i(q, 2);
	n(Y, 1, `hero viscous`);
	var tn = r(Y);
	t(
		tn,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
<ul><li>Alt fire damage growth reduced by 10%</li></ul>
`
	);
	var X = i(tn, 2);
	n(X, 1, `ability splatter`);
	var nn = r(X);
	t(
		nn,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter detonation cooldown reduced from 0.15 to 0.12</li><li>Splatter T1 reduced from +2m to +1.5m</li></ul>
`
	);
	var rn = i(nn, 2);
	(a(rn, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), e(X));
	var Z = i(X, 2);
	n(Z, 1, `ability the-cube`);
	var an = r(Z);
	t(
		an,
		() => `
<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>
<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>
<ul><li>The Cube cast range reduced from 26m to 20m</li></ul>
`
	);
	var on = i(an, 2);
	(a(on, { kind: `hero`, name: `Viscous`, ability: `The Cube` }), e(Z));
	var Q = i(Z, 2);
	n(Q, 1, `ability puddle-punch`);
	var sn = r(Q);
	t(
		sn,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
`
	);
	var cn = i(sn, 2),
		ln = r(cn),
		un = r(ln);
	t(un, () => `Puddle Punch cooldown increased from 21s to 24s`);
	var dn = i(un, 2);
	(o(dn, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 3,
		bulletIndex: 0,
		text: `Puddle Punch cooldown increased from 21s to 24s`
	}),
		e(ln),
		e(cn));
	var fn = i(cn, 2);
	(a(fn, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(Q));
	var pn = i(Q, 2);
	n(pn, 1, `ability goo-ball`);
	var mn = r(pn);
	t(
		mn,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball T3 now also increases spirit scaling by 0.2</li></ul>
`
	);
	var hn = i(mn, 2);
	(a(hn, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), e(pn));
	var gn = i(pn, 2);
	(c(gn, { kind: `hero`, name: `Viscous` }), e(Y));
	var _n = i(Y, 2);
	n(_n, 1, `hero vyper`);
	var vn = r(_n);
	t(
		vn,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
`
	);
	var yn = i(vn, 2);
	n(yn, 1, `ability slither`);
	var bn = r(yn);
	t(
		bn,
		() => `
<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>
<h4 id="slither"><a href="/ability/slither">Slither</a></h4>
<ul><li>Slither T3 barrier duration reduced from 5s to 4s</li></ul>
`
	);
	var xn = i(bn, 2);
	(a(xn, { kind: `hero`, name: `Vyper`, ability: `Slither` }), e(yn));
	var Sn = i(yn, 2);
	n(Sn, 1, `ability petrifying-bola`);
	var Cn = r(Sn);
	t(
		Cn,
		() => `
<p><a href="/ability/petrifying-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Petrifying Bola change history</a></p>
<h4 id="petrifying-bola"><a href="/ability/petrifying-bola">Petrifying Bola</a></h4>
`
	);
	var wn = i(Cn, 2),
		Tn = r(wn),
		En = r(Tn);
	t(En, () => `Petrifying Bola cooldown increased from 105s to 115s`);
	var Dn = i(En, 2);
	(o(Dn, {
		kind: `hero`,
		name: `Vyper`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Petrifying Bola cooldown increased from 105s to 115s`
	}),
		e(Tn),
		e(wn));
	var On = i(wn, 2);
	(a(On, { kind: `hero`, name: `Vyper`, ability: `Petrifying Bola` }), e(Sn));
	var kn = i(Sn, 2);
	(c(kn, { kind: `hero`, name: `Vyper` }), e(_n));
	var An = i(_n, 2);
	n(An, 1, `hero warden`);
	var jn = r(An);
	t(
		jn,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Bullet damage per boon reduced from 0.28 to 0.25</li><li>Fire Rate spirit scaling reduced from 0.25 to 0.21</li></ul>
`
	);
	var Mn = i(jn, 2);
	n(Mn, 1, `ability alchemical-flask`);
	var Nn = r(Mn);
	t(
		Nn,
		() => `
<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>
<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>
<ul><li>Alchemical Flask projectile range and speed reduced by 30%</li></ul>
`
	);
	var Pn = i(Nn, 2);
	(a(Pn, { kind: `hero`, name: `Warden`, ability: `Alchemical Flask` }), e(Mn));
	var Fn = i(Mn, 2);
	n(Fn, 1, `ability willpower`);
	var In = r(Fn);
	t(
		In,
		() => `
<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>
<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>
<ul><li>Willpower T3 spirit scaling reduced from +2.7 to +2.1</li><li>Willpower T3 debuff resistance reduced from 40% to 30%</li></ul>
`
	);
	var Ln = i(In, 2);
	(a(Ln, { kind: `hero`, name: `Warden`, ability: `Willpower` }), e(Fn));
	var Rn = i(Fn, 2);
	(c(Rn, { kind: `hero`, name: `Warden` }), e(An));
	var zn = i(An, 2);
	n(zn, 1, `hero wraith`);
	var Bn = r(zn);
	t(
		Bn,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var Vn = i(Bn, 2);
	n(Vn, 1, `ability card-trick`);
	var Hn = r(Vn);
	t(
		Hn,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
<ul><li>Card Trick heart heal reduced from 75 to 60</li><li>Card Trick heart heal spirit scaling reduced from 0.75 to 0.5</li><li>Card Trick Diamond Bullet and Spirit Resist reduction reduced from -8% to -7%</li><li>Card Trick T3 Diamond Bullet and Spirit Resist reduction reduced from -5% to -4%</li><li>Card Trick T3 Clubs slow from +20% to +15%</li></ul>
`
	);
	var Un = i(Hn, 2);
	(a(Un, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), e(Vn));
	var Wn = i(Vn, 2);
	n(Wn, 1, `ability project-mind`);
	var Gn = r(Wn);
	t(
		Gn,
		() => `
<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>
<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>
<ul><li>Fixed Project Mind getting caught on edges/corners when aiming past it</li></ul>
`
	);
	var Kn = i(Gn, 2);
	(a(Kn, { kind: `hero`, name: `Wraith`, ability: `Project Mind` }), e(Wn));
	var qn = i(Wn, 2);
	n(qn, 1, `ability full-auto`);
	var Jn = r(qn);
	t(
		Jn,
		() => `
<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>
<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>
<ul><li>Full Auto spirit damage per bullet scaling increased from 0.03 to 0.045</li></ul>
`
	);
	var Yn = i(Jn, 2);
	(a(Yn, { kind: `hero`, name: `Wraith`, ability: `Full Auto` }), e(qn));
	var Xn = i(qn, 2);
	(c(Xn, { kind: `hero`, name: `Wraith` }), e(zn));
	var Zn = i(zn, 2);
	n(Zn, 1, `hero yamato`);
	var Qn = r(Zn);
	t(
		Qn,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var $n = i(Qn, 2);
	n($n, 1, `ability crimson-slash`);
	var er = r($n);
	t(
		er,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
<ul><li>Crimson Slash T3 now also increases the heal spirit scaling by +0.4</li></ul>
`
	);
	var tr = i(er, 2);
	(a(tr, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), e($n));
	var nr = i($n, 2);
	n(nr, 1, `ability flying-slash`);
	var rr = r(nr);
	t(
		rr,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Flying Slash light melee scaling increased from 1.0 to 1.2</li></ul>
`
	);
	var ir = i(rr, 2);
	(a(ir, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), e(nr));
	var ar = i(nr, 2);
	(c(ar, { kind: `hero`, name: `Yamato` }), e(Zn));
	var or = i(Zn, 2);
	t(
		or,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var sr = i(or, 2);
	ie(sr, {});
	var cr = i(sr, 2);
	n(cr, 1, `item ballistic-enchantment`);
	var lr = r(cr);
	t(
		lr,
		() => `
<p><a href="/item/ballistic-enchantment"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ballistic Enchantment patch history</a></p>
<h3 id="ballistic-enchantment"><a href="/item/ballistic-enchantment">Ballistic Enchantment</a></h3>
<ul><li>Duration increased from 14s to 20s</li></ul>
`
	);
	var ur = i(lr, 2);
	a(ur, { kind: `item`, name: `Ballistic Enchantment`, ability: null });
	var dr = i(ur, 2);
	(c(dr, { kind: `item`, name: `Ballistic Enchantment` }), e(cr));
	var fr = i(cr, 2);
	n(fr, 1, `item cultist-sacrifice`);
	var pr = r(fr);
	t(
		pr,
		() => `
<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>
<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>
<ul><li>Bounty reduced from 180% to 170%</li></ul>
`
	);
	var mr = i(pr, 2);
	a(mr, { kind: `item`, name: `Cultist Sacrifice`, ability: null });
	var hr = i(mr, 2);
	(c(hr, { kind: `item`, name: `Cultist Sacrifice` }), e(fr));
	var gr = i(fr, 2);
	n(gr, 1, `item decay`);
	var _r = r(gr);
	t(
		_r,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
<ul><li>DPS reduced by 25%</li><li>Duration increased by 20%</li></ul>
`
	);
	var vr = i(_r, 2);
	a(vr, { kind: `item`, name: `Decay`, ability: null });
	var yr = i(vr, 2);
	(c(yr, { kind: `item`, name: `Decay` }), e(gr));
	var br = i(gr, 2);
	n(br, 1, `item diviner-s-kevlar`);
	var xr = r(br);
	t(
		xr,
		() => `
<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>
<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>
<ul><li>Now grants +10% Ultimate Ability Cooldown Reduction</li></ul>
`
	);
	var Sr = i(xr, 2);
	a(Sr, { kind: `item`, name: `Diviner's Kevlar`, ability: null });
	var Cr = i(Sr, 2);
	(c(Cr, { kind: `item`, name: `Diviner's Kevlar` }), e(br));
	var wr = i(br, 2);
	n(wr, 1, `item focus-lens`);
	var Tr = r(wr);
	t(
		Tr,
		() => `
<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>
<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>
`
	);
	var Er = i(Tr, 2),
		Dr = r(Er),
		Or = r(Dr);
	t(Or, () => `Damage increased from 30% to 35%`);
	var kr = i(Or, 2);
	(o(kr, {
		kind: `item`,
		name: `Focus Lens`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage increased from 30% to 35%`
	}),
		e(Dr));
	var Ar = i(Dr, 2);
	(t(Ar, () => `Cast range increased from 20m to 25m`, !0), e(Ar), e(Er));
	var jr = i(Er, 2);
	a(jr, { kind: `item`, name: `Focus Lens`, ability: null });
	var Mr = i(jr, 2);
	(c(Mr, { kind: `item`, name: `Focus Lens` }), e(wr));
	var Nr = i(wr, 2);
	n(Nr, 1, `item fortitude`);
	var Pr = r(Nr);
	t(
		Pr,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Max Health regen increased from 2% to 2.25%</li></ul>
`
	);
	var Fr = i(Pr, 2);
	a(Fr, { kind: `item`, name: `Fortitude`, ability: null });
	var Ir = i(Fr, 2);
	(c(Ir, { kind: `item`, name: `Fortitude` }), e(Nr));
	var Lr = i(Nr, 2);
	n(Lr, 1, `item golden-goose-egg`);
	var Rr = r(Lr);
	t(
		Rr,
		() => `
<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>
<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>
<ul><li>Damage Penalty increased from -10% to -15%</li><li>Stored souls now count towards net worth (affects comeback reward calculations)</li><li>Souls per minute reduced from 90 to 80</li></ul>
`
	);
	var zr = i(Rr, 2);
	a(zr, { kind: `item`, name: `Golden Goose Egg`, ability: null });
	var Br = i(zr, 2);
	(c(Br, { kind: `item`, name: `Golden Goose Egg` }), e(Lr));
	var Vr = i(Lr, 2);
	n(Vr, 1, `item hollow-point`);
	var Hr = r(Vr);
	t(
		Hr,
		() => `
<p><a href="/item/hollow-point"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hollow Point patch history</a></p>
<h3 id="hollow-point"><a href="/item/hollow-point">Hollow Point</a></h3>
<ul><li>Bullet Resist Reduction increased from 9% to 10%</li></ul>
`
	);
	var Ur = i(Hr, 2);
	a(Ur, { kind: `item`, name: `Hollow Point`, ability: null });
	var Wr = i(Ur, 2);
	(c(Wr, { kind: `item`, name: `Hollow Point` }), e(Vr));
	var Gr = i(Vr, 2);
	n(Gr, 1, `item leech`);
	var Kr = r(Gr);
	t(
		Kr,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Bullet and Spirit Lifesteal increased from 25% to 28%</li></ul>
`
	);
	var qr = i(Kr, 2);
	a(qr, { kind: `item`, name: `Leech`, ability: null });
	var Jr = i(qr, 2);
	(c(Jr, { kind: `item`, name: `Leech` }), e(Gr));
	var Yr = i(Gr, 2);
	n(Yr, 1, `item lifestrike`);
	var Xr = r(Yr);
	t(
		Xr,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Heal on Melee hit increased from 100+1.5 to 120+1.75</li><li>Melee hit heal increased from 30% to 35%</li></ul>
`
	);
	var Zr = i(Xr, 2);
	a(Zr, { kind: `item`, name: `Lifestrike`, ability: null });
	var Qr = i(Zr, 2);
	(c(Qr, { kind: `item`, name: `Lifestrike` }), e(Yr));
	var $ = i(Yr, 2);
	n($, 1, `item mercurial-magnum`);
	var $r = r($);
	t(
		$r,
		() => `
<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>
<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>
<ul><li>Base bullet damage scaling reduced from 0.49 to 0.38</li><li>Base bullet damage reduced from 25% to 20%</li></ul>
`
	);
	var ei = i($r, 2);
	a(ei, { kind: `item`, name: `Mercurial Magnum`, ability: null });
	var ti = i(ei, 2);
	(c(ti, { kind: `item`, name: `Mercurial Magnum` }), e($));
	var ni = i($, 2);
	n(ni, 1, `item plated-armor`);
	var ri = r(ni);
	t(
		ri,
		() => `
<p><a href="/item/plated-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Plated Armor patch history</a></p>
<h3 id="plated-armor"><a href="/item/plated-armor">Plated Armor</a></h3>
<ul><li>Fixed on-hit damage prevention not blocking the following on-hit spirit damage effects: Mercurial Magnum, Vindicta&#x27;s Flight, Wraith&#x27;s Full Auto, and Tesla Bullets/Capacitor</li></ul>
`
	);
	var ii = i(ri, 2);
	a(ii, { kind: `item`, name: `Plated Armor`, ability: null });
	var ai = i(ii, 2);
	(c(ai, { kind: `item`, name: `Plated Armor` }), e(ni));
	var oi = i(ni, 2);
	n(oi, 1, `item radiant-regeneration`);
	var si = r(oi);
	t(
		si,
		() => `
<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>
<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>
<ul><li>Healing on Ability Cast per boon scaling reduced from 2 to 1.7</li></ul>
`
	);
	var ci = i(si, 2);
	a(ci, { kind: `item`, name: `Radiant Regeneration`, ability: null });
	var li = i(ci, 2);
	(c(li, { kind: `item`, name: `Radiant Regeneration` }), e(oi));
	var ui = i(oi, 2);
	n(ui, 1, `item restorative-locket`);
	var di = r(ui);
	t(
		di,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>Heal per boon reduced from 0.5 to 0.45</li><li>Stack range reduced from 35m to 32m</li></ul>
`
	);
	var fi = i(di, 2);
	a(fi, { kind: `item`, name: `Restorative Locket`, ability: null });
	var pi = i(fi, 2);
	(c(pi, { kind: `item`, name: `Restorative Locket` }), e(ui));
	var mi = i(ui, 2);
	n(mi, 1, `item shadow-weave`);
	var hi = r(mi);
	t(
		hi,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
`
	);
	var gi = i(hi, 2),
		_i = r(gi);
	(t(_i, () => `Now builds from Sprint Boots`, !0), e(_i));
	var vi = i(_i, 2);
	(t(vi, () => `Sprint speed increased from 1.5 to 2`, !0), e(vi));
	var yi = i(vi, 2),
		bi = r(yi);
	t(bi, () => `Cooldown reduced from 45s to 37s`);
	var xi = i(bi, 2);
	(o(xi, {
		kind: `item`,
		name: `Shadow Weave`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown reduced from 45s to 37s`
	}),
		e(yi),
		e(gi));
	var Si = i(gi, 2);
	a(Si, { kind: `item`, name: `Shadow Weave`, ability: null });
	var Ci = i(Si, 2);
	(c(Ci, { kind: `item`, name: `Shadow Weave` }), e(mi));
	var wi = i(mi, 2);
	n(wi, 1, `item slowing-hex`);
	var Ti = r(wi);
	t(
		Ti,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
`
	);
	var Ei = i(Ti, 2),
		Di = r(Ei),
		Oi = r(Di);
	t(Oi, () => `Cooldown increased from 27s to 29s`);
	var ki = i(Oi, 2);
	(o(ki, {
		kind: `item`,
		name: `Slowing Hex`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 27s to 29s`
	}),
		e(Di),
		e(Ei));
	var Ai = i(Ei, 2);
	a(Ai, { kind: `item`, name: `Slowing Hex`, ability: null });
	var ji = i(Ai, 2);
	(c(ji, { kind: `item`, name: `Slowing Hex` }), e(wi));
	var Mi = i(wi, 2);
	n(Mi, 1, `item spiritual-overflow`);
	var Ni = r(Mi);
	t(
		Ni,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Buildup is 35% slower</li><li>Spirit Power on proc reduced from 40 to 30</li><li>Fire Rate reduced from 30% to 25%</li></ul>
`
	);
	var Pi = i(Ni, 2);
	a(Pi, { kind: `item`, name: `Spiritual Overflow`, ability: null });
	var Fi = i(Pi, 2);
	(c(Fi, { kind: `item`, name: `Spiritual Overflow` }), e(Mi));
	var Ii = i(Mi, 2);
	n(Ii, 1, `item tankbuster`);
	var Li = r(Ii);
	t(
		Li,
		() => `
<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>
<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>
<ul><li>Current Health Bonus damage reduced from 8% to 7.5%</li></ul>
`
	);
	var Ri = i(Li, 2);
	a(Ri, { kind: `item`, name: `Tankbuster`, ability: null });
	var zi = i(Ri, 2);
	(c(zi, { kind: `item`, name: `Tankbuster` }), e(Ii));
	var Bi = i(Ii, 2);
	n(Bi, 1, `item toxic-bullets`);
	var Vi = r(Bi);
	t(
		Vi,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>Spirit scaling increased from 0.005% to 0.006%</li></ul>
`
	);
	var Hi = i(Vi, 2);
	a(Hi, { kind: `item`, name: `Toxic Bullets`, ability: null });
	var Ui = i(Hi, 2);
	(c(Ui, { kind: `item`, name: `Toxic Bullets` }), e(Bi));
	var Wi = i(Bi, 2);
	n(Wi, 1, `item trophy-collector`);
	var Gi = r(Wi);
	t(
		Gi,
		() => `
<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>
<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>
<ul><li>Souls per minute reduced from 18 to 16</li></ul>
`
	);
	var Ki = i(Gi, 2);
	a(Ki, { kind: `item`, name: `Trophy Collector`, ability: null });
	var qi = i(Ki, 2);
	(c(qi, { kind: `item`, name: `Trophy Collector` }), e(Wi));
	var Ji = i(Wi, 2);
	n(Ji, 1, `item veil-walker`);
	var Yi = r(Ji);
	t(
		Yi,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>No longer builds from Sprint Boots</li><li>No longer grants +2 Sprint and +2 Out of Combat Regen (due to loss of component)</li><li>Movement speed bonus is now removed when the invisibility is removed</li><li>Spirit Power reduced from 10 to 6</li></ul>
`
	);
	var Xi = i(Yi, 2);
	a(Xi, { kind: `item`, name: `Veil Walker`, ability: null });
	var Zi = i(Xi, 2);
	(c(Zi, { kind: `item`, name: `Veil Walker` }), e(Ji));
	var Qi = i(Ji, 2);
	n(Qi, 1, `item weakening-headshot`);
	var $i = r(Qi);
	t(
		$i,
		() => `
<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>
<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>
<ul><li>Bullet Resist Reduction reduced from -13% to -12%</li></ul>
`
	);
	var ea = i($i, 2);
	a(ea, { kind: `item`, name: `Weakening Headshot`, ability: null });
	var ta = i(ea, 2);
	(c(ta, { kind: `item`, name: `Weakening Headshot` }), e(Qi), te(ee, s));
}
export { ce as default, ae as metadata, l as readingManifest, oe as toc };
