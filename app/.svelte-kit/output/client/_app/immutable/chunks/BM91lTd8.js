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
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Ivy`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Seven`,
			`Vindicta`,
			`Warden`,
			`Yamato`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names:
			`Active Reload.Ammo Scavenger.Bullet Lifesteal.Burst Fire.Debuff Reducer.Extra Charge.Extra Regen.Fortitude.Frenzy.Glass Cannon.Headshot Booster.Healing Rite.Heroic Aura.Kinetic Dash.Leech.Lifestrike.Long Range.Majestic Leap.Melee Charge.Melee Lifesteal.Mystic Reverb.Phantom Strike.Restorative Shot.Silencer.Spirit Strike.Surge of Power.Titanic Magazine.Unstoppable.Vampiric Burst.Veil Walker`.split(
				`.`
			)
	});
}
var ie = {
		title: `07-11-2024 Update`,
		thread_id: `10871`,
		published: `2024-07-11T13:46:25-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Testing schedule now starts 1 hour earlier for all regions EU matchmaking region is now split up into two regions based on language Shop search now highlights the relevant sections of the item tooltip that match the search string you've put in Fixed the Shop search not finding all the types of bonuses an item has Various adjustments to the Damage Report feature Damage Report now shows up by default when dead or spectating Added HUD Notifications on Soul Urn drop off to let depositor know they gained +25% Souls and +1 AP Reworked how cycling through spectators works. Space bar now cycles between all the players. You can now click on the top bar hero icons to jump to a specific hero while spectating You no longer automatically switch to other players when the player you are watching dies Fixed not being able to click on the portrait of a dead hero while spectating Reduced the flash damage effect on heroes to reduce visual noise Added in-world confirmation text when an enemy denies your soul orbs Affliction now has an AoE indicator buildup during cast Affliction now has more toxic elements in the cast and linger Updated Restorative Shot impact and heal effects Updated Phantom Strike effects Updated Restorative Locket effects when casting on an ally Added Grey Talon Charged Shot sound effects Added currency sound effects for receiving small and large amount of souls Added new sound effects to picking up powerups and breakable drops Added a UI sound when entering hero select screen Fixed Vindicta's Stake sometimes moving units that aren't supposed to be moved Fixed Majestic Leap buff sticking around after attaching to zipline (caused audio bugs as well) Fixed Soul Urn walking back while the game is paused Fixed bugs with Guided Owl and pause Fixed the following abilities changing their launch direction if the player snapped their camera quickly during the cast time: Ivy's Kudzu Bomb,  Paradox's Pulse Grenade, Warden's Alchemical Flask, Vindicta's Stake, Alchemical Fire (T3 Weapon item) Fixed some instances of heroes being called by the wrong name Get Started tutorial VO has been replaced and some text has been updated Newsstand now has a lot more world lore news callouts Enabled support for FSR 2 by default Widened the street on the outer side of the factory/mansion Added street curb models around factory and mansion Added street curb overlay around factory and mansion Replaced temp arrows with street sign markings coming out of the mid temple Removed some fake doors to not confuse with juke closets Replaced older stone wall material with newer one in uptown areas Replaced item signs with new poster style and removed item signs on Yellow and Blue lanes Added rooftop smart prop trim where it was missing Reworked the core base area where the Weakened Patron goes. It is now in a low terrain pit and requires attackers be inside the pit to do damage to it. Redesigned exit from the base's regeneration area to the rest of the base Increased Weakened Patron's out of combat (30s) regeneration from 40 to 80 Removed platform blocking line of sight from regeneration area exit to the center Added window in fountain barrier beside exit Added two drop down chutes from fountain to the center Base respawn time increased from 8s to 12s (peak values unchanged) Guardian health increased by 10% Base Guardian health increased by 10% Zipline Boost duration increased from 25s to 32s Urn now grants the Urn Runner +1 AP Urn Runner now gains +2 sprint and is disarmed while carrying the Urn Urn bounty increased from 900 + 200/min to 1500 + 200/min (10 min spawn goes from 2900 to 3500) Urn display on the minimap is now pulsing a green rectangle showing where the destination is if an ally is carrying the urn, and a red rectangle at the destination if an enemy is carrying it Powerup Bonus duration increased from 100s to 130s Movement powerup now grants +20% stamina regeneration Fixed Movement powerup not replenishing stamina on pickup Golden Statues level 2 bonuses spawn time reduced from 25 minutes to 20 minutes Golden Statues Weapon Damage bonus increased from 2% to 3% (level 2 from 3% to 4%) Golden Statues Ammo bonus increased from 3% to 4% (level 2 from 5% to 6%) Capture radius for breakable drops increased very slightly Added an indicator near the reticle when Parry is on cooldown Added a visual effect when the Rejuvenator is attackable Global base Ammo increased by 5% (except for Wraith and Haze) The spawn area's regeneration buff now lingers for 1s Bullet falloff damage now starts at 22m instead of 25m Base Guardian and Shrines bullet resist per nearby hero increased from 40/20/0/0% (for 0/1/2/3 people) to 60/40/20/0% Trooper gold sharing radius from the location of the soul orb increased from 50m to 60m Fixed ability-based lifesteals not granting life from damage caused to shields (affects things like Hyperbeam T3, Siphon, Scorn, Life Drain, Flog and Concussive Combustion T3) Fixed dropping unsecured souls not lowering your net worth Fixed a bug that caused denies during the laning phase to sometimes be shared with allies and sometimes not Some tweaks to how the comeback formula works have been done over the past couple days and we'll continue iterating on it over the coming days Added several upper level juke closets from balconies/awnings and two on rooftops Shortened connection to the underground tunnel from the shop side Adjusted pathing in the underground tunnel to be a little less zig zagging Added more signage to the underground tunnel Redesigned interior of new stairwells beside inner lane Walkers Basic Magazine: Ammo increased from +20% to +24% Sharp Shooter: Min distance reduced from 20m to 18m Health Nova: Now grants +10% weapon damage Debuff Remover: T3 Vitality Item that upgrades from Debuff Reducer. Removes debuffs fully on cast again. Grants +3 m/s for 3s if any debuff is removed. Grants +40% debuff resist, +125 health, +20% weapon damage. Cooldown: 45 Withering Whip: Cast range increased from 15m to 17m Improved Cooldown: Cooldown reduction increased from 12% to 13% Silence Glyph: No longer has +75 health Silence Glyph: Now gives +150 spirit shield Improved Reach: Non-Imbued range increased from +20% to +25% Abrams Shoulder Charge speed increased by 25% Shoulder Charge distance increased by 15% Shoulder Charge now stuns enemies for 1s if it drags them into a wall Infernal Resilience now provides +1 Health Regen Infernal Resilience damage regenerated reduced from 20% to 18% Infernal Resilience T3 changed to +8% damage regenerated Fixed Siphon Life not healing you against shields Dynamo Quantum Entanglement ally radius increased from 8m to 9m Grey Talon Rain of Arrows flight duration reduced from 8s to 7s Guided Owl spirit gain per kill increased from 4 to 5 Guided Owl base ability now stuns for 0.75s Guided Owl base damage reduced from 300 to 250 Guided Owl T1 is now +100 damage Guided Owl collision size reduced Haze Ammo scaling with spirit power reduced from 0.6 to 0.5 Ivy Base damage growth increased from 0.35 to 0.55 Watcher's Covenant replicated healing reduced from 45% to 35% Watcher's Covenant bullet lifesteal now scales with spirit power (0.18) Watcher's Covenant fire rate reduced from 15% to 10% Watcher's Covenant fire rate now scales with spirit power (0.2) Fixed Kudzu Bomb not going where you had targeted if you moved quickly during the cast Lash Base bullet damage reduced from 11.5 to 10 Bullet damage growth increased from 1 to 1.15 Now has +8% spirit resist Ground Strike damage per meter reduced from 6.75 to 6.3 Ground Strike damage per meter spirit power scaling increased from 0.04 to 0.05 Death Slam range is now defined as the horizontal distance to the units rather than the distance from his position in the air (so being high up doesn't work against you) Death Slam range reduced from 19m to 14m Death Slam T1 reduced from +5m to +4m Death Slam cone increased from 60 degrees to 75 Death Slam grab time reduced from 0.9 to 0.8 McGinnis Turrets receive full damage from enemy guns regardless of distance (fall off is not considered when taking damage) Turrets outgoing damage fall off distance window (20m-35m) now scales with range upgrades Turrets duration reduced from 40s to 30s Mo & Krill Fixed Scorn not healing you against shields Sand Blast base duration reduced from 4s to 3.5s Sand Blast T1 reduced from +2s to +1.5s Paradox Fixed Time Wall projectiles and bullets being stuck in the wall for its full duration instead of for the shorter time stop duration Kinetic Carbine collision radius reduced by 10% Fixed Pulse Grenade not going where you had targeted if you moved quickly during the cast Pocket Enchanter's Satchel duration from 1.5s to 2s Enchanter's Satchel T3 changed to 2.5s Disarm Seven Static Charge cast range scaling reduced from 0.1 to 0.07 Static Charge base radius reduced from 8m to 5m Static Charge T2 changed to +5m radius Vindicta Crow Familiar duration spirit power scaling reduced from 0.07 to 0.05 Gun damage growth increased from 0.7 to 0.85 Warden Reload time no longer scales with spirit power Now innately gains additive fire rate from spirit power (scale factor is 0.015) Yamato Shadow Transformation incoming damage reduction reduced from 70% to 55% Shadow Transformation changed from 70% debuff reduction to the same buff as Unstoppable Headshot Booster Bonus health reduced from +50 to +40 Restorative Shot Weapon damage reduced from +8% to +6% Veil Walker Ammo reduced from 15% to 12% Weapon damage reduced from 8% to 6% Long Range Min distance reduced from 20m to 18m Active Reload Added 0.2s grace period where the reload start does not count any button presses Active fire rate increased from 18% to 24% Cooldown reduced from 23s to 21s Kinetic Dash Cooldown reduced from 14s to 12s Melee Charge Bonus health increased from 75 to 100 Burst Fire Now innately gives +12% fire rate Conditional fire rate now only triggers when you hit a hero, this bonus is reduced from 40% to 30% Heroic Aura Lifesteal increased from 16% to 18% Active duration reduced from 8s to 5s Active movement speed increased from 2 to 3 Active fire rate increased from 20% to 25% Titanic Magazine No longer has 10% reload penalty Silencer Now requires Slowing Bullets (total cost from 6500 to 7700) Innately gives 25% slow for 1.3s Active no longer applies 30% slow for 2s Weapon damage reduced from 25% to 15% Frenzy Active spirit resist increased from 30% to 40% Vampiric Burst Active lifesteal increased from 80% to 100% Glass Cannon Weapon damage increased from 65% to 70% Extra Regen Health regen increased from 2 to 2.3 Healing Rite Bonus health increased from 35 to 45 Melee Lifesteal Cooldown reduced from 8s to 7s Bullet Lifesteal Lifesteal increased from 24% to 26% Debuff Reducer Now a T2 Vitality item. Grants +30% debuff resist, +75 health and +10% weapon damage. No longer has an active. Fortitude Health increased from 225 to 250 Majestic Leap Added a brief period before you can press the hotkey again to prevent accidental uses of drop down Lifestrike Now grants +6% bullet resist Phantom Strike Fixed it sometimes malfunctioning and not teleporting to the target Leech Spirit Lifesteal increased from 33% to 35% Bullet Lifesteal increased from 30% to 35% Unstoppable Duration reduced from 9s to 6s No longer grants +20% spirit resist in the active Now grants +15% spirit resist innately Now grants +12 spirit power Now grants +1 m/s Extra Charge Now grants +6% weapon damage Ammo Scavenger Ammo reduced from +20% to +15% Spirit Strike Spirit shield increased from +75 to +85 Surge of Power Active movement speed increased from 2 to 3 Mystic Reverb Cooldown reduced from 8s to 6s Now gives +15% ability range`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-07-05`, to: `2024-07-11` },
			after: { from: `2024-07-12`, to: `2024-07-18` }
		}
	},
	ae = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Kudzu Connection`, id: `kudzu-connection` },
		{ level: 3, title: `Watcher's Covenant`, id: `watcher-s-covenant` },
		{ level: 3, title: `Entangling Thorns`, id: `entangling-thorns` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Death Slam`, id: `death-slam` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turret`, id: `mini-turret` },
		{ level: 3, title: `Turrets`, id: `turrets` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Scorn`, id: `scorn` },
		{ level: 3, title: `Sand Blast`, id: `sand-blast` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 3, title: `Pulse Grenade`, id: `pulse-grenade` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Enchanter's Satchel`, id: `enchanter-s-satchel` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Static Charge`, id: `static-charge` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Bullet Lifesteal`, id: `bullet-lifesteal` },
		{ level: 2, title: `Burst Fire`, id: `burst-fire` },
		{ level: 2, title: `Debuff Reducer`, id: `debuff-reducer` },
		{ level: 2, title: `Extra Charge`, id: `extra-charge` },
		{ level: 2, title: `Extra Regen`, id: `extra-regen` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Glass Cannon`, id: `glass-cannon` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Kinetic Dash`, id: `kinetic-dash` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Long Range`, id: `long-range` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Melee Lifesteal`, id: `melee-lifesteal` },
		{ level: 2, title: `Mystic Reverb`, id: `mystic-reverb` },
		{ level: 2, title: `Phantom Strike`, id: `phantom-strike` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Spirit Strike`, id: `spirit-strike` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-07-05`, to: `2024-07-11` },
			after: { from: `2024-07-12`, to: `2024-07-18` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Bullet Lifesteal`, id: `bullet-lifesteal` },
			{ kind: `item`, name: `Burst Fire`, id: `burst-fire` },
			{ kind: `item`, name: `Debuff Reducer`, id: `debuff-reducer` },
			{ kind: `item`, name: `Extra Charge`, id: `extra-charge` },
			{ kind: `item`, name: `Extra Regen`, id: `extra-regen` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Glass Cannon`, id: `glass-cannon` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Kinetic Dash`, id: `kinetic-dash` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Long Range`, id: `long-range` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Melee Lifesteal`, id: `melee-lifesteal` },
			{ kind: `item`, name: `Mystic Reverb`, id: `mystic-reverb` },
			{ kind: `item`, name: `Phantom Strike`, id: `phantom-strike` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Spirit Strike`, id: `spirit-strike` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	oe = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <!></div> <!> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <ul><li></li> <li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function se(e) {
	var c = oe(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Testing schedule now starts 1 hour earlier for all regions</li><li>EU matchmaking region is now split up into two regions based on language</li><li>Shop search now highlights the relevant sections of the item tooltip that match the search string you&#x27;ve put in</li><li>Fixed the Shop search not finding all the types of bonuses an item has</li><li>Various adjustments to the Damage Report feature</li><li>Damage Report now shows up by default when dead or spectating</li><li>Added HUD Notifications on Soul Urn drop off to let depositor know they gained +25% Souls and +1 AP</li><li>Reworked how cycling through spectators works. Space bar now cycles between all the players.</li><li>You can now click on the top bar hero icons to jump to a specific hero while spectating</li><li>You no longer automatically switch to other players when the player you are watching dies</li><li>Fixed not being able to click on the portrait of a dead hero while spectating</li><li>Reduced the flash damage effect on heroes to reduce visual noise</li><li>Added in-world confirmation text when an enemy denies your soul orbs</li><li>Affliction now has an AoE indicator buildup during cast</li><li>Affliction now has more toxic elements in the cast and linger</li><li>Updated Restorative Shot impact and heal effects</li><li>Updated Phantom Strike effects</li><li>Updated Restorative Locket effects when casting on an ally</li><li>Added Grey Talon Charged Shot sound effects</li><li>Added currency sound effects for receiving small and large amount of souls</li><li>Added new sound effects to picking up powerups and breakable drops</li><li>Added a UI sound when entering hero select screen</li><li>Fixed Vindicta&#x27;s Stake sometimes moving units that aren&#x27;t supposed to be moved</li><li>Fixed Majestic Leap buff sticking around after attaching to zipline (caused audio bugs as well)</li><li>Fixed Soul Urn walking back while the game is paused</li><li>Fixed bugs with Guided Owl and pause</li><li>Fixed the following abilities changing their launch direction if the player snapped their camera quickly during the cast time: Ivy&#x27;s Kudzu Bomb,  Paradox&#x27;s Pulse Grenade, Warden&#x27;s Alchemical Flask, Vindicta&#x27;s Stake, Alchemical Fire (T3 Weapon item)</li><li>Fixed some instances of heroes being called by the wrong name</li><li>Get Started tutorial VO has been replaced and some text has been updated</li><li>Newsstand now has a lot more world lore news callouts</li><li>Enabled support for FSR 2 by default</li><li>Widened the street on the outer side of the factory/mansion</li><li>Added street curb models around factory and mansion</li><li>Added street curb overlay around factory and mansion</li><li>Replaced temp arrows with street sign markings coming out of the mid temple</li><li>Removed some fake doors to not confuse with juke closets</li><li>Replaced older stone wall material with newer one in uptown areas</li><li>Replaced item signs with new poster style and removed item signs on Yellow and Blue lanes</li><li>Added rooftop smart prop trim where it was missing</li><li>Reworked the core base area where the Weakened Patron goes. It is now in a low terrain pit and requires attackers be inside the pit to do damage to it.</li><li>Redesigned exit from the base&#x27;s regeneration area to the rest of the base</li><li>Increased Weakened Patron&#x27;s out of combat (30s) regeneration from 40 to 80</li><li>Removed platform blocking line of sight from regeneration area exit to the center</li><li>Added window in fountain barrier beside exit</li><li>Added two drop down chutes from fountain to the center</li><li>Base respawn time increased from 8s to 12s (peak values unchanged)</li><li>Guardian health increased by 10%</li><li>Base Guardian health increased by 10%</li><li>Zipline Boost duration increased from 25s to 32s</li><li>Urn now grants the Urn Runner +1 AP</li><li>Urn Runner now gains +2 sprint and is disarmed while carrying the Urn</li><li>Urn bounty increased from 900 + 200/min to 1500 + 200/min (10 min spawn goes from 2900 to 3500)</li><li>Urn display on the minimap is now pulsing a green rectangle showing where the destination is if an ally is carrying the urn, and a red rectangle at the destination if an enemy is carrying it</li><li>Powerup Bonus duration increased from 100s to 130s</li><li>Movement powerup now grants +20% stamina regeneration</li><li>Fixed Movement powerup not replenishing stamina on pickup</li><li>Golden Statues level 2 bonuses spawn time reduced from 25 minutes to 20 minutes</li><li>Golden Statues Weapon Damage bonus increased from 2% to 3% (level 2 from 3% to 4%)</li><li>Golden Statues Ammo bonus increased from 3% to 4% (level 2 from 5% to 6%)</li><li>Capture radius for breakable drops increased very slightly</li><li>Added an indicator near the reticle when Parry is on cooldown</li><li>Added a visual effect when the Rejuvenator is attackable</li><li>Global base Ammo increased by 5% (except for Wraith and Haze)</li><li>The spawn area&#x27;s regeneration buff now lingers for 1s</li><li>Bullet falloff damage now starts at 22m instead of 25m</li><li>Base Guardian and Shrines bullet resist per nearby hero increased from 40/20/0/0% (for 0/1/2/3 people) to 60/40/20/0%</li><li>Trooper gold sharing radius from the location of the soul orb increased from 50m to 60m</li><li>Fixed ability-based lifesteals not granting life from damage caused to shields (affects things like Hyperbeam T3, Siphon, Scorn, Life Drain, Flog and Concussive Combustion T3)</li><li>Fixed dropping unsecured souls not lowering your net worth</li><li>Fixed a bug that caused denies during the laning phase to sometimes be shared with allies and sometimes not</li><li>Some tweaks to how the comeback formula works have been done over the past couple days and we&#x27;ll continue iterating on it over the coming days</li><li>Added several upper level juke closets from balconies/awnings and two on rooftops</li><li>Shortened connection to the underground tunnel from the shop side</li><li>Adjusted pathing in the underground tunnel to be a little less zig zagging</li><li>Added more signage to the underground tunnel</li><li>Redesigned interior of new stairwells beside inner lane Walkers</li><li>Basic Magazine: Ammo increased from +20% to +24%</li><li>Sharp Shooter: Min distance reduced from 20m to 18m</li><li>Health Nova: Now grants +10% weapon damage</li><li>Debuff Remover: T3 Vitality Item that upgrades from Debuff Reducer. Removes debuffs fully on cast again. Grants +3 m/s for 3s if any debuff is removed. Grants +40% debuff resist, +125 health, +20% weapon damage. Cooldown: 45</li><li>Withering Whip: Cast range increased from 15m to 17m</li><li>Improved Cooldown: Cooldown reduction increased from 12% to 13%</li><li>Silence Glyph: No longer has +75 health</li><li>Silence Glyph: Now gives +150 spirit shield</li><li>Improved Reach: Non-Imbued range increased from +20% to +25%</li></ul>
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
	r(u, 1, `ability shoulder-charge`);
	var ce = i(u);
	n(
		ce,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Shoulder Charge speed increased by 25%</li><li>Shoulder Charge distance increased by 15%</li><li>Shoulder Charge now stuns enemies for 1s if it drags them into a wall</li></ul>
`
	);
	var le = a(ce, 2);
	(o(le, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), t(u));
	var d = a(u, 2);
	r(d, 1, `ability infernal-resilience`);
	var ue = i(d);
	n(
		ue,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience now provides +1 Health Regen</li><li>Infernal Resilience damage regenerated reduced from 20% to 18%</li><li>Infernal Resilience T3 changed to +8% damage regenerated</li></ul>
`
	);
	var de = a(ue, 2);
	(o(de, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), t(d));
	var fe = a(d, 2);
	r(fe, 1, `ability siphon-life`);
	var pe = i(fe);
	n(
		pe,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>
<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>
<ul><li>Fixed Siphon Life not healing you against shields</li></ul>
`
	);
	var me = a(pe, 2);
	(o(me, { kind: `hero`, name: `Abrams`, ability: `Siphon Life` }), t(fe), t(l));
	var f = a(l, 2);
	r(f, 1, `hero dynamo`);
	var he = i(f);
	n(
		he,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var ge = a(he, 2);
	r(ge, 1, `ability quantum-entanglement`);
	var _e = i(ge);
	n(
		_e,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Quantum Entanglement ally radius increased from 8m to 9m</li></ul>
`
	);
	var ve = a(_e, 2);
	(o(ve, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), t(ge), t(f));
	var p = a(f, 2);
	r(p, 1, `hero grey-talon`);
	var ye = i(p);
	n(
		ye,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var m = a(ye, 2);
	r(m, 1, `ability rain-of-arrows`);
	var be = i(m);
	n(
		be,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
<ul><li>Rain of Arrows flight duration reduced from 8s to 7s</li></ul>
`
	);
	var xe = a(be, 2);
	(o(xe, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), t(m));
	var Se = a(m, 2);
	r(Se, 1, `ability guided-owl`);
	var Ce = i(Se);
	n(
		Ce,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
`
	);
	var we = a(Ce, 2),
		Te = i(we);
	(n(Te, () => `Guided Owl spirit gain per kill increased from 4 to 5`, !0), t(Te));
	var Ee = a(Te, 2);
	(n(Ee, () => `Guided Owl base ability now stuns for 0.75s`, !0), t(Ee));
	var De = a(Ee, 2),
		Oe = i(De);
	n(Oe, () => `Guided Owl base damage reduced from 300 to 250`);
	var ke = a(Oe, 2);
	(s(ke, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 1,
		bulletIndex: 2,
		text: `Guided Owl base damage reduced from 300 to 250`
	}),
		t(De));
	var Ae = a(De, 2);
	(n(Ae, () => `Guided Owl T1 is now +100 damage`, !0), t(Ae));
	var je = a(Ae, 2);
	(n(je, () => `Guided Owl collision size reduced`, !0), t(je), t(we));
	var Me = a(we, 2);
	(o(Me, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), t(Se), t(p));
	var Ne = a(p, 2);
	n(
		Ne,
		() => `
<div class="hero haze">
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
<ul><li>Ammo scaling with spirit power reduced from 0.6 to 0.5</li></ul>
</div>
`
	);
	var h = a(Ne, 2);
	r(h, 1, `hero ivy`);
	var Pe = i(h);
	n(
		Pe,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
<ul><li>Base damage growth increased from 0.35 to 0.55</li></ul>
`
	);
	var g = a(Pe, 2);
	r(g, 1, `ability kudzu-connection`);
	var Fe = i(g);
	n(
		Fe,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>
<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>
<ul><li>Watcher&#x27;s Covenant replicated healing reduced from 45% to 35%</li></ul>
`
	);
	var Ie = a(Fe, 2);
	(o(Ie, { kind: `hero`, name: `Ivy`, ability: `Kudzu Connection` }), t(g));
	var _ = a(g, 2);
	r(_, 1, `ability watcher-s-covenant`);
	var Le = i(_);
	n(
		Le,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>
<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>
<ul><li>Watcher&#x27;s Covenant bullet lifesteal now scales with spirit power (0.18)</li><li>Watcher&#x27;s Covenant fire rate reduced from 15% to 10%</li><li>Watcher&#x27;s Covenant fire rate now scales with spirit power (0.2)</li></ul>
`
	);
	var Re = a(Le, 2);
	(o(Re, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant` }), t(_));
	var ze = a(_, 2);
	r(ze, 1, `ability entangling-thorns`);
	var Be = i(ze);
	n(
		Be,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>
<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>
<ul><li>Fixed Kudzu Bomb not going where you had targeted if you moved quickly during the cast</li></ul>
`
	);
	var Ve = a(Be, 2);
	(o(Ve, { kind: `hero`, name: `Ivy`, ability: `Entangling Thorns` }), t(ze), t(h));
	var v = a(h, 2);
	r(v, 1, `hero lash`);
	var He = i(v);
	n(
		He,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
<ul><li>Base bullet damage reduced from 11.5 to 10</li><li>Bullet damage growth increased from 1 to 1.15</li><li>Now has +8% spirit resist</li></ul>
`
	);
	var y = a(He, 2);
	r(y, 1, `ability ground-strike`);
	var Ue = i(y);
	n(
		Ue,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike damage per meter reduced from 6.75 to 6.3</li><li>Ground Strike damage per meter spirit power scaling increased from 0.04 to 0.05</li></ul>
`
	);
	var We = a(Ue, 2);
	(o(We, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(y));
	var Ge = a(y, 2);
	r(Ge, 1, `ability death-slam`);
	var Ke = i(Ge);
	n(
		Ke,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>
<ul><li>Death Slam range is now defined as the horizontal distance to the units rather than the distance from his position in the air (so being high up doesn&#x27;t work against you)</li><li>Death Slam range reduced from 19m to 14m</li><li>Death Slam T1 reduced from +5m to +4m</li><li>Death Slam cone increased from 60 degrees to 75</li><li>Death Slam grab time reduced from 0.9 to 0.8</li></ul>
`
	);
	var qe = a(Ke, 2);
	(o(qe, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), t(Ge), t(v));
	var b = a(v, 2);
	r(b, 1, `hero mcginnis`);
	var Je = i(b);
	n(
		Je,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var x = a(Je, 2);
	r(x, 1, `ability mini-turret`);
	var Ye = i(x);
	n(
		Ye,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>
<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>
<ul><li>Turrets receive full damage from enemy guns regardless of distance (fall off is not considered when taking damage)</li><li>Turrets outgoing damage fall off distance window (20m-35m) now scales with range upgrades</li></ul>
`
	);
	var Xe = a(Ye, 2);
	(o(Xe, { kind: `hero`, name: `McGinnis`, ability: `Mini Turret` }), t(x));
	var Ze = a(x, 2);
	r(Ze, 1, `ability turrets`);
	var Qe = i(Ze);
	n(
		Qe,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Turrets change history</a></p>
<h4 id="turrets"><a href="/ability/mini-turret">Turrets</a></h4>
<ul><li>Turrets duration reduced from 40s to 30s</li></ul>
`
	);
	var $e = a(Qe, 2);
	(o($e, { kind: `hero`, name: `McGinnis`, ability: `Turrets` }), t(Ze), t(b));
	var S = a(b, 2);
	r(S, 1, `hero mo-krill`);
	var et = i(S);
	n(
		et,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var C = a(et, 2);
	r(C, 1, `ability scorn`);
	var tt = i(C);
	n(
		tt,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>
<ul><li>Fixed Scorn not healing you against shields</li></ul>
`
	);
	var nt = a(tt, 2);
	(o(nt, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), t(C));
	var rt = a(C, 2);
	r(rt, 1, `ability sand-blast`);
	var it = i(rt);
	n(
		it,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>
<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>
<ul><li>Sand Blast base duration reduced from 4s to 3.5s</li><li>Sand Blast T1 reduced from +2s to +1.5s</li></ul>
`
	);
	var at = a(it, 2);
	(o(at, { kind: `hero`, name: `Mo & Krill`, ability: `Sand Blast` }), t(rt), t(S));
	var w = a(S, 2);
	r(w, 1, `hero paradox`);
	var ot = i(w);
	n(
		ot,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var T = a(ot, 2);
	r(T, 1, `ability time-wall`);
	var st = i(T);
	n(
		st,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
<ul><li>Fixed Time Wall projectiles and bullets being stuck in the wall for its full duration instead of for the shorter time stop duration</li></ul>
`
	);
	var ct = a(st, 2);
	(o(ct, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), t(T));
	var E = a(T, 2);
	r(E, 1, `ability kinetic-carbine`);
	var lt = i(E);
	n(
		lt,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine collision radius reduced by 10%</li></ul>
`
	);
	var ut = a(lt, 2);
	(o(ut, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), t(E));
	var dt = a(E, 2);
	r(dt, 1, `ability pulse-grenade`);
	var ft = i(dt);
	n(
		ft,
		() => `
<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>
<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>
<ul><li>Fixed Pulse Grenade not going where you had targeted if you moved quickly during the cast</li></ul>
`
	);
	var pt = a(ft, 2);
	(o(pt, { kind: `hero`, name: `Paradox`, ability: `Pulse Grenade` }), t(dt), t(w));
	var D = a(w, 2);
	r(D, 1, `hero pocket`);
	var mt = i(D);
	n(
		mt,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var ht = a(mt, 2);
	r(ht, 1, `ability enchanter-s-satchel`);
	var gt = i(ht);
	n(
		gt,
		() => `
<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>
<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>
<ul><li>Enchanter&#x27;s Satchel duration from 1.5s to 2s</li><li>Enchanter&#x27;s Satchel T3 changed to 2.5s Disarm</li></ul>
`
	);
	var _t = a(gt, 2);
	(o(_t, { kind: `hero`, name: `Pocket`, ability: `Enchanter's Satchel` }), t(ht), t(D));
	var O = a(D, 2);
	r(O, 1, `hero seven`);
	var vt = i(O);
	n(
		vt,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var yt = a(vt, 2);
	r(yt, 1, `ability static-charge`);
	var bt = i(yt);
	n(
		bt,
		() => `
<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>
<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>
`
	);
	var xt = a(bt, 2),
		St = i(xt);
	(n(St, () => `Static Charge cast range scaling reduced from 0.1 to 0.07`, !0), t(St));
	var Ct = a(St, 2),
		wt = i(Ct);
	n(wt, () => `Static Charge base radius reduced from 8m to 5m`);
	var Tt = a(wt, 2);
	(s(Tt, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Static Charge base radius reduced from 8m to 5m`
	}),
		t(Ct));
	var Et = a(Ct, 2);
	(n(Et, () => `Static Charge T2 changed to +5m radius`, !0), t(Et), t(xt));
	var Dt = a(xt, 2);
	(o(Dt, { kind: `hero`, name: `Seven`, ability: `Static Charge` }), t(yt), t(O));
	var k = a(O, 2);
	r(k, 1, `hero vindicta`);
	var Ot = i(k);
	n(
		Ot,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
`
	);
	var A = a(Ot, 2);
	r(A, 1, `ability crow-familiar`);
	var kt = i(A);
	n(
		kt,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar duration spirit power scaling reduced from 0.07 to 0.05</li></ul>
`
	);
	var At = a(kt, 2);
	(o(At, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), t(A));
	var jt = a(A, 2);
	(n(
		jt,
		() => `
<ul><li>Gun damage growth increased from 0.7 to 0.85</li></ul>
`
	),
		t(k));
	var Mt = a(k, 2);
	n(
		Mt,
		() => `
<div class="hero warden">
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Reload time no longer scales with spirit power</li><li>Now innately gains additive fire rate from spirit power (scale factor is 0.015)</li></ul>
</div>
`
	);
	var j = a(Mt, 2);
	r(j, 1, `hero yamato`);
	var Nt = i(j);
	n(
		Nt,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var Pt = a(Nt, 2);
	r(Pt, 1, `ability shadow-transformation`);
	var Ft = i(Pt);
	n(
		Ft,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation incoming damage reduction reduced from 70% to 55%</li><li>Shadow Transformation changed from 70% debuff reduction to the same buff as Unstoppable</li></ul>
`
	);
	var It = a(Ft, 2);
	(o(It, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		t(Pt),
		t(j));
	var Lt = a(j, 2);
	n(
		Lt,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Rt = a(Lt, 2);
	re(Rt, {});
	var M = a(Rt, 2);
	r(M, 1, `item active-reload`);
	var zt = i(M);
	n(
		zt,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
`
	);
	var Bt = a(zt, 2),
		Vt = i(Bt);
	(n(
		Vt,
		() =>
			`Added 0.2s grace period where the reload start does not count any button presses`,
		!0
	),
		t(Vt));
	var Ht = a(Vt, 2);
	(n(Ht, () => `Active fire rate increased from 18% to 24%`, !0), t(Ht));
	var Ut = a(Ht, 2),
		Wt = i(Ut);
	n(Wt, () => `Cooldown reduced from 23s to 21s`);
	var Gt = a(Wt, 2);
	(s(Gt, {
		kind: `item`,
		name: `Active Reload`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown reduced from 23s to 21s`
	}),
		t(Ut),
		t(Bt));
	var Kt = a(Bt, 2);
	(o(Kt, { kind: `item`, name: `Active Reload`, ability: null }), t(M));
	var qt = a(M, 2);
	r(qt, 1, `item ammo-scavenger`);
	var Jt = i(qt);
	n(
		Jt,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Ammo reduced from +20% to +15%</li></ul>
`
	);
	var Yt = a(Jt, 2);
	(o(Yt, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(qt));
	var N = a(qt, 2);
	r(N, 1, `item bullet-lifesteal`);
	var Xt = i(N);
	n(
		Xt,
		() => `
<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>
<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>
<ul><li>Lifesteal increased from 24% to 26%</li></ul>
`
	);
	var Zt = a(Xt, 2);
	(o(Zt, { kind: `item`, name: `Bullet Lifesteal`, ability: null }), t(N));
	var P = a(N, 2);
	r(P, 1, `item burst-fire`);
	var Qt = i(P);
	n(
		Qt,
		() => `
<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>
<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>
<ul><li>Now innately gives +12% fire rate</li><li>Conditional fire rate now only triggers when you hit a hero, this bonus is reduced from 40% to 30%</li></ul>
`
	);
	var $t = a(Qt, 2);
	(o($t, { kind: `item`, name: `Burst Fire`, ability: null }), t(P));
	var F = a(P, 2);
	r(F, 1, `item debuff-reducer`);
	var en = i(F);
	n(
		en,
		() => `
<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>
<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>
<ul><li>Now a T2 Vitality item. Grants +30% debuff resist, +75 health and +10% weapon damage. No longer has an active.</li></ul>
`
	);
	var tn = a(en, 2);
	(o(tn, { kind: `item`, name: `Debuff Reducer`, ability: null }), t(F));
	var I = a(F, 2);
	r(I, 1, `item extra-charge`);
	var nn = i(I);
	n(
		nn,
		() => `
<p><a href="/item/extra-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Charge patch history</a></p>
<h3 id="extra-charge"><a href="/item/extra-charge">Extra Charge</a></h3>
<ul><li>Now grants +6% weapon damage</li></ul>
`
	);
	var rn = a(nn, 2);
	(o(rn, { kind: `item`, name: `Extra Charge`, ability: null }), t(I));
	var L = a(I, 2);
	r(L, 1, `item extra-regen`);
	var an = i(L);
	n(
		an,
		() => `
<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>
<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>
<ul><li>Health regen increased from 2 to 2.3</li></ul>
`
	);
	var on = a(an, 2);
	(o(on, { kind: `item`, name: `Extra Regen`, ability: null }), t(L));
	var R = a(L, 2);
	r(R, 1, `item fortitude`);
	var sn = i(R);
	n(
		sn,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Health increased from 225 to 250</li></ul>
`
	);
	var cn = a(sn, 2);
	(o(cn, { kind: `item`, name: `Fortitude`, ability: null }), t(R));
	var z = a(R, 2);
	r(z, 1, `item frenzy`);
	var ln = i(z);
	n(
		ln,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Active spirit resist increased from 30% to 40%</li></ul>
`
	);
	var un = a(ln, 2);
	(o(un, { kind: `item`, name: `Frenzy`, ability: null }), t(z));
	var B = a(z, 2);
	r(B, 1, `item glass-cannon`);
	var dn = i(B);
	n(
		dn,
		() => `
<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>
<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>
<ul><li>Weapon damage increased from 65% to 70%</li></ul>
`
	);
	var fn = a(dn, 2);
	(o(fn, { kind: `item`, name: `Glass Cannon`, ability: null }), t(B));
	var V = a(B, 2);
	r(V, 1, `item headshot-booster`);
	var pn = i(V);
	n(
		pn,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
<ul><li>Bonus health reduced from +50 to +40</li></ul>
`
	);
	var mn = a(pn, 2);
	(o(mn, { kind: `item`, name: `Headshot Booster`, ability: null }), t(V));
	var H = a(V, 2);
	r(H, 1, `item healing-rite`);
	var hn = i(H);
	n(
		hn,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
<ul><li>Bonus health increased from 35 to 45</li></ul>
`
	);
	var gn = a(hn, 2);
	(o(gn, { kind: `item`, name: `Healing Rite`, ability: null }), t(H));
	var U = a(H, 2);
	r(U, 1, `item heroic-aura`);
	var _n = i(U);
	n(
		_n,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
<ul><li>Lifesteal increased from 16% to 18%</li><li>Active duration reduced from 8s to 5s</li><li>Active movement speed increased from 2 to 3</li><li>Active fire rate increased from 20% to 25%</li></ul>
`
	);
	var vn = a(_n, 2);
	(o(vn, { kind: `item`, name: `Heroic Aura`, ability: null }), t(U));
	var W = a(U, 2);
	r(W, 1, `item kinetic-dash`);
	var yn = i(W);
	n(
		yn,
		() => `
<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>
<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>
`
	);
	var bn = a(yn, 2),
		xn = i(bn),
		Sn = i(xn);
	n(Sn, () => `Cooldown reduced from 14s to 12s`);
	var Cn = a(Sn, 2);
	(s(Cn, {
		kind: `item`,
		name: `Kinetic Dash`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 14s to 12s`
	}),
		t(xn),
		t(bn));
	var wn = a(bn, 2);
	(o(wn, { kind: `item`, name: `Kinetic Dash`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item leech`);
	var Tn = i(G);
	n(
		Tn,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Spirit Lifesteal increased from 33% to 35%</li><li>Bullet Lifesteal increased from 30% to 35%</li></ul>
`
	);
	var En = a(Tn, 2);
	(o(En, { kind: `item`, name: `Leech`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item lifestrike`);
	var Dn = i(K);
	n(
		Dn,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Now grants +6% bullet resist</li></ul>
`
	);
	var On = a(Dn, 2);
	(o(On, { kind: `item`, name: `Lifestrike`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item long-range`);
	var kn = i(q);
	n(
		kn,
		() => `
<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>
<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>
<ul><li>Min distance reduced from 20m to 18m</li></ul>
`
	);
	var An = a(kn, 2);
	(o(An, { kind: `item`, name: `Long Range`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item majestic-leap`);
	var jn = i(J);
	n(
		jn,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
<ul><li>Added a brief period before you can press the hotkey again to prevent accidental uses of drop down</li></ul>
`
	);
	var Mn = a(jn, 2);
	(o(Mn, { kind: `item`, name: `Majestic Leap`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item melee-charge`);
	var Nn = i(Y);
	n(
		Nn,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>Bonus health increased from 75 to 100</li></ul>
`
	);
	var Pn = a(Nn, 2);
	(o(Pn, { kind: `item`, name: `Melee Charge`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item melee-lifesteal`);
	var Fn = i(X);
	n(
		Fn,
		() => `
<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>
<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>
`
	);
	var In = a(Fn, 2),
		Ln = i(In),
		Rn = i(Ln);
	n(Rn, () => `Cooldown reduced from 8s to 7s`);
	var zn = a(Rn, 2);
	(s(zn, {
		kind: `item`,
		name: `Melee Lifesteal`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 8s to 7s`
	}),
		t(Ln),
		t(In));
	var Bn = a(In, 2);
	(o(Bn, { kind: `item`, name: `Melee Lifesteal`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item mystic-reverb`);
	var Vn = i(Z);
	n(
		Vn,
		() => `
<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>
<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>
`
	);
	var Hn = a(Vn, 2),
		Un = i(Hn),
		Wn = i(Un);
	n(Wn, () => `Cooldown reduced from 8s to 6s`);
	var Gn = a(Wn, 2);
	(s(Gn, {
		kind: `item`,
		name: `Mystic Reverb`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 8s to 6s`
	}),
		t(Un));
	var Kn = a(Un, 2);
	(n(Kn, () => `Now gives +15% ability range`, !0), t(Kn), t(Hn));
	var qn = a(Hn, 2);
	(o(qn, { kind: `item`, name: `Mystic Reverb`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item phantom-strike`);
	var Jn = i(Q);
	n(
		Jn,
		() => `
<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>
<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>
<ul><li>Fixed it sometimes malfunctioning and not teleporting to the target</li></ul>
`
	);
	var Yn = a(Jn, 2);
	(o(Yn, { kind: `item`, name: `Phantom Strike`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item restorative-shot`);
	var Xn = i($);
	n(
		Xn,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>Weapon damage reduced from +8% to +6%</li></ul>
`
	);
	var Zn = a(Xn, 2);
	(o(Zn, { kind: `item`, name: `Restorative Shot`, ability: null }), t($));
	var Qn = a($, 2);
	r(Qn, 1, `item silencer`);
	var $n = i(Qn);
	n(
		$n,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Now requires Slowing Bullets (total cost from 6500 to 7700)</li><li>Innately gives 25% slow for 1.3s</li><li>Active no longer applies 30% slow for 2s</li><li>Weapon damage reduced from 25% to 15%</li></ul>
`
	);
	var er = a($n, 2);
	(o(er, { kind: `item`, name: `Silencer`, ability: null }), t(Qn));
	var tr = a(Qn, 2);
	r(tr, 1, `item spirit-strike`);
	var nr = i(tr);
	n(
		nr,
		() => `
<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>
<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>
<ul><li>Spirit shield increased from +75 to +85</li></ul>
`
	);
	var rr = a(nr, 2);
	(o(rr, { kind: `item`, name: `Spirit Strike`, ability: null }), t(tr));
	var ir = a(tr, 2);
	r(ir, 1, `item surge-of-power`);
	var ar = i(ir);
	n(
		ar,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>Active movement speed increased from 2 to 3</li></ul>
`
	);
	var or = a(ar, 2);
	(o(or, { kind: `item`, name: `Surge of Power`, ability: null }), t(ir));
	var sr = a(ir, 2);
	r(sr, 1, `item titanic-magazine`);
	var cr = i(sr);
	n(
		cr,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>No longer has 10% reload penalty</li></ul>
`
	);
	var lr = a(cr, 2);
	(o(lr, { kind: `item`, name: `Titanic Magazine`, ability: null }), t(sr));
	var ur = a(sr, 2);
	r(ur, 1, `item unstoppable`);
	var dr = i(ur);
	n(
		dr,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
<ul><li>Duration reduced from 9s to 6s</li><li>No longer grants +20% spirit resist in the active</li><li>Now grants +15% spirit resist innately</li><li>Now grants +12 spirit power</li><li>Now grants +1 m/s</li></ul>
`
	);
	var fr = a(dr, 2);
	(o(fr, { kind: `item`, name: `Unstoppable`, ability: null }), t(ur));
	var pr = a(ur, 2);
	r(pr, 1, `item vampiric-burst`);
	var mr = i(pr);
	n(
		mr,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
<ul><li>Active lifesteal increased from 80% to 100%</li></ul>
`
	);
	var hr = a(mr, 2);
	(o(hr, { kind: `item`, name: `Vampiric Burst`, ability: null }), t(pr));
	var gr = a(pr, 2);
	r(gr, 1, `item veil-walker`);
	var _r = i(gr);
	n(
		_r,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Ammo reduced from 15% to 12%</li><li>Weapon damage reduced from 8% to 6%</li></ul>
`
	);
	var vr = a(_r, 2);
	(o(vr, { kind: `item`, name: `Veil Walker`, ability: null }), t(gr), ee(e, c));
}
export { se as default, ie as metadata, l as readingManifest, ae as toc };
