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
/* empty css        */ import { a, i as o, n as s } from './vWaTnxY_.js';
function re(ee) {
	s(ee, {
		type: `hero`,
		names: [
			`Dynamo`,
			`Haze`,
			`Infernus`,
			`Kelvin`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Seven`,
			`Vindicta`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function ie(ee) {
	s(ee, {
		type: `item`,
		names:
			`Active Reload.Alchemical Fire.Ammo Scavenger.Bullet Lifesteal.Burst Fire.Crippling Headshot.Decay.Duration Extender.Escalating Resilience.Ethereal Shift.Extra Charge.Extra Health.Extra Spirit.Frenzy.Healing Rite.Heroic Aura.Infuser.Leech.Lifestrike.Long Range.Melee Charge.Mystic Reverb.Mystic Slow.Point Blank.Reactive Barrier.Restorative Locket.Siphon Bullets.Spiritual Overflow.Superior Duration.Suppressor.Surge of Power.Swift Striker.Titanic Magazine.Vampiric Burst.Warp Stone`.split(
				`.`
			)
	});
}
var ae = {
		title: `06-27-2024 Update`,
		thread_id: `8486`,
		published: `2024-06-27T13:58:44-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added a hero based mmr system, so when you join a match with a specific hero the matchmaker adjusts the skill level it assumes you are at by a percentage up or down based on your experience and performance levels with that hero. Added settings option to allow weapon zoom to be a toggle Added a game volume slider which will control volume independently from voice chat (VoIP) General improvements to voice chat quality Non-matchmaking lobbies are now considered safe to abandon Crates now show the amount of souls they have in the tooltip Greater contrast between team and enemy sounds Updated headshot hit indicator Updated McGinnis weapon sounds Updated Vindicta weapon sounds Updated Lady Geist weapon sounds Fixed a bug where pinging Bebop's Hook and Sticky Bomb abilities would call the wrong ability name Fixed a recent bug with Metal Skin that caused you to do zero bullet damage Fixed a bug with releasing Grey Talon's Owl early Updated Dynamo's animation while using Rejuvenating Aurora Fixed a bug that could allow Grey Talon to hit the same target multiple times when close during Rain of Arrows Fixed a bug that could cause button input detection to malfunction Fixed an issue where the Rejuvenator being stolen was firing incorrectly Fixed a bug introduced in last week's update that caused gun spreads to not work properly Added an effect at the bottom of a player's screen whenever they are standing on something that causes damage Improved Abrams animation while hovering in the air during his ultimate and adjusted the downward acceleration animation Flex slot removed from killing the Patron and added to killing all Walkers Urn now spawns on both sides of the map. Bounty for each is reduced by 40% Rejuvenator now reduces players' next respawn time by 75% instead of giving a 3s respawn time Golden Statues no longer drop powerups (time duration buffs). Instead they now drop small permanent bonuses. These stack and do not decay with time or death. Drop rates rebalanced. At defined locations around the map, powerups now spawn starting 10 minutes (and every 5 minutes after). There are 6 spots where they spawn and they are indicated on the minimap when they are up. Movement powerup duration increased from 30s to 50s Fire Rate powerup duration increased from 35s to 45s and +15% Fire Rate to +18% Regeneration powerup duration increased from 25s to 45s Stamina powerup duration increased from 80s to 120s Cooldown powerup is unchanged Clip powerup is unchanged Breakables initial spawn time increased from 2 min to 3 min Fixed being able to hide inside the Guardian's head Jumping after a dash jump no longer causes your hero to sometimes jump in place Breakables souls base value reduced by 30%. Increases to +15% of current values over 30 minutes. (so -30% to +15% from start to 30 min) All hero guns' reload time reduced by 5% Zipline Boost ability cooldown reduced from 380s to 340s Medic Trooper heal now bounces to up to one other allied hero within 25m from the hero Trooper gold sharing radius from the location of the allied hero reduced from 50m to 40m Creep waves now land at their lane destinations at the same time as each other Added connection hallway between outer lane Shop and crate room Opened up Authority Building and Jazz Club to the Guardian side Added intermediate cover in front of Amber Orange Guardian and Sapphire Blue Guardian Added Veils to entrances to base fountain Extended cover near Sapphire Orange Guardian to match Amber Blue Extended alcove on outer lane cover position in front of the Shop Underground tunnels have more light Removed underground tunnel alcoves Added signs for entrance to the underground tunnel from the warehouse side Withering Whip: Ammo increased from 15% to 20% Withering Whip: Now grants +4 Spirit Dynamo Quantum Entanglement is prevented from being cast when Dynamo is rooted or movement-silenced (such as by Slowing Hex) Rejuvenating Aurora T3 reduced from +5% to +4% Haze Bullet Dance T1 increased from +5 Weapon Damage to +6 Fixed various bugs with the fire rate on Bullet Dance (net effect of the bugs was that it often fired a little faster than it was intended to) Infernus Afterburn base dps reduced from 20 to 18 Afterburn T3 reduced from +35 to +33 Kelvin Arctic Beam spirit scaling increased from 0.7 to 0.9 Arctic Beam cooldown reduced from 25 to 23 Lash Ground Strike radius reduced from 14m to 13m Death Slam radius reduced from 20m to 19m McGinnis Fixed her gun having a recent regression that caused it to not have any spread Mini Turret damage reduced by up to 30% at 35m (now has bullet falloff from 20m to 35m) Mini Turret deploy time reduced from 2s to 1s Mini Turret now shows up on the minimap Medicinal Spectre can no longer be attacked Spectral Wall height increased by 2m Spectral Wall slow duration increased from 2s to 2.5s Fixed a bug with Spectral Wall that caused the Rejuvenator to instantly drop Mo & Krill Base HP regen increased from 2.5 to 3 Scorn damage increased from 50 to 60 Fixed Scorn not healing for more with things like Mystic Burst Burrow now destroys breakables in its path Fixed Healing Booster not applying to Scorn's 2x heal multiplier on heroes Added a bonus counter to show how much health has been earned by getting a kill during Combo Paradox Base movement speed reduced from 7 to 6.5 Kinetic Carbine impact radius reduced by 15% Kinetic Carbine Max Stop Duration reduced from 0.75 to 0.5 Kinetic Carbine buff duration reduced from 6 to 4 Kinetic Carbine T1 increased from +0.5s Max Stop Duration to +0.75 Kinetic Carbine T2 now also increases buff by +2s Paradoxical Swap range reduced from 35m to 30m Pocket Enchanter's Satchel can now be canceled by shooting Seven Fixed Return Fire working with Power Surge No longer has base +15% Spirit Resistance Now has base +20% Bullet Resistance Base health regen reduced from 2 to 1 Static Charge T1 improved from -15s Cooldown to -20s Vindicta Base movement speed increased from 7 to 8 Fixed Crow Familiar T1 only bouncing to 1 additional target instead of 2 Assassinate zoom level is reduced a bit Warden Willpower no longer loses movement speed when the shield is depleted Willpower duration reduced from 8s to 7s Wraith The Royal Flush ability has been replaced with Card Trick.  Card Trick enables Wraith's weapon damage to summon playing cards.  Activating the ability throws one of the cards, which will fly towards the enemy or point under the crosshair and explode on impact. Yamato Power Slash damage reduced from 175 to 170 Can now cancel Flying Strike Shadow Transformation damage and debuff resistance reduced from 80% to 70% Shadow Transformation duration increased from 4.5s to 5s Extra Charge CD reduction increased from +7% to +8% Infuser Active Spirit Power increased from +12 to +18 Ammo Scavenger Now a Spirit Item No longer grants +20% Fire Rate for 4s on Soul Secure/Deny Now grants +3 Spirit for 18s on Soul Secure/Deny. Multiple instances stack and refresh the duration. Max 12 stacks. Extra Spirit Spirit bonus increased from +7 to +8 Extra Health Health increased from +135 to +140 Healing Rite Cooldown reduced from 80s to 75s Swift Striker Fire Rate increased from +20% to +22% Active Reload Timing window to click increased from 0.2s to 0.3s Active Bullet Lifesteal increased from 30% to 40% Duration increased from 6s to 8s Weapon Damage increased from 8% to 10% Melee Charge Weapon Damage increased from 10% to 15% Long Range Ammo increased from +15% to +20% Bullet Lifesteal Increased from 20% to 22% Reactive Barrier Spirit Shield Health reduced from +500 to +200 Now grants +400 Bullet Shield Health Restorative Locket Max stacks increased from 18 to 20 Duration Extender Health increased from +50 to +75 Ability Duration reduced from 18% to 16% Decay Healing Reduction improved from -65% to -70% Bleed increased from 2.4% to 2.6% Suppressor Fire Rate reduction reduced from -35% to -30% Mystic Slow Fire Rate reduction reduced from -35% to -30% Titanic Magazine Ammo increased from +75% to +90% Escalating Resilience Stack duration increased from 10s to 14s Burst Fire Cooldown reduced from 9s to 8s Slide Distance increased from 25% to 35% Alchemical Fire Max DPS increased from 85 to 95 Cooldown reduced from 30s to 28s Weapon Damage increased from +12% to +14% Warp Stone Distance increased from 12m to 13m Point Blank Bullet Shield health increased from +200 to +225 Heroic Aura Now provides +16% Bullet Lifesteal No longer grants a 10% Fire Rate Aura Active now grants +20% Fire Rate instead of Bullet Lifesteal Lifestrike Slow duration increased from 2s to 2.5s Surge of Power Imbued Ability Spirit Power increased from +20 to +24 Ethereal Shift Duration increased from 3s to 3.5s Post-cast bonus is now still granted when ending the buff early Superior Duration Health increased from +100 to +125 Now grants +4 Health Regen Crippling Headshot Weapon Damage reduced from 25% to 20% Debuff duration reduced from 8s to 5s Spiritual Overflow Bonus spirit increased from +40 to +45 Fire Rate increased from +15% to +20% Frenzy Whenever you go back above 40%, the buff lingers for 4s Ammo increased from +7 to +9 Vampiric Burst Cooldown reduced from 30s to 24s Siphon Bullets Max HP Steal duration increased from 12s to 15s Leech Now grants +8% Weapon Damage Mystic Reverb Radius increased from 10m to 12m Cooldown reduced from 12s to 8s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-24`, to: `2024-06-27` },
			after: { from: `2024-06-28`, to: `2024-07-04` }
		}
	},
	oe = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 3, title: `Rejuvenating Aurora`, id: `rejuvenating-aurora` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Afterburn`, id: `afterburn` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Death Slam`, id: `death-slam` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turret`, id: `mini-turret` },
		{ level: 3, title: `Medicinal Specter`, id: `medicinal-specter` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Scorn`, id: `scorn` },
		{ level: 3, title: `Burrow`, id: `burrow` },
		{ level: 3, title: `Scorn`, id: `scorn-1` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{
			level: 3,
			title: `Kinetic Carbine Max Stop Duration`,
			id: `kinetic-carbine-max-stop-duration`
		},
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine-1` },
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Enchanter's Satchel`, id: `enchanter-s-satchel` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Power Surge`, id: `power-surge` },
		{ level: 3, title: `Static Charge`, id: `static-charge` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Willpower`, id: `willpower` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Power Slash`, id: `power-slash` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Bullet Lifesteal`, id: `bullet-lifesteal` },
		{ level: 2, title: `Burst Fire`, id: `burst-fire` },
		{ level: 2, title: `Crippling Headshot`, id: `crippling-headshot` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Duration Extender`, id: `duration-extender` },
		{ level: 2, title: `Escalating Resilience`, id: `escalating-resilience` },
		{ level: 2, title: `Ethereal Shift`, id: `ethereal-shift` },
		{ level: 2, title: `Extra Charge`, id: `extra-charge` },
		{ level: 2, title: `Extra Health`, id: `extra-health` },
		{ level: 2, title: `Extra Spirit`, id: `extra-spirit` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Infuser`, id: `infuser` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Long Range`, id: `long-range` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Mystic Reverb`, id: `mystic-reverb` },
		{ level: 2, title: `Mystic Slow`, id: `mystic-slow` },
		{ level: 2, title: `Point Blank`, id: `point-blank` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Siphon Bullets`, id: `siphon-bullets` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Superior Duration`, id: `superior-duration` },
		{ level: 2, title: `Suppressor`, id: `suppressor` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Swift Striker`, id: `swift-striker` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Warp Stone`, id: `warp-stone` }
	],
	c = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-24`, to: `2024-06-27` },
			after: { from: `2024-06-28`, to: `2024-07-04` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Bullet Lifesteal`, id: `bullet-lifesteal` },
			{ kind: `item`, name: `Burst Fire`, id: `burst-fire` },
			{ kind: `item`, name: `Crippling Headshot`, id: `crippling-headshot` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Duration Extender`, id: `duration-extender` },
			{ kind: `item`, name: `Escalating Resilience`, id: `escalating-resilience` },
			{ kind: `item`, name: `Ethereal Shift`, id: `ethereal-shift` },
			{ kind: `item`, name: `Extra Charge`, id: `extra-charge` },
			{ kind: `item`, name: `Extra Health`, id: `extra-health` },
			{ kind: `item`, name: `Extra Spirit`, id: `extra-spirit` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Infuser`, id: `infuser` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Long Range`, id: `long-range` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Mystic Reverb`, id: `mystic-reverb` },
			{ kind: `item`, name: `Mystic Slow`, id: `mystic-slow` },
			{ kind: `item`, name: `Point Blank`, id: `point-blank` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Siphon Bullets`, id: `siphon-bullets` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Superior Duration`, id: `superior-duration` },
			{ kind: `item`, name: `Suppressor`, id: `suppressor` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Swift Striker`, id: `swift-striker` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Warp Stone`, id: `warp-stone` }
		],
		related: []
	},
	se = ee(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div>`,
		1
	);
function ce(ee) {
	var s = se(),
		ae = ne(s);
	t(
		ae,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added a hero based mmr system, so when you join a match with a specific hero the matchmaker adjusts the skill level it assumes you are at by a percentage up or down based on your experience and performance levels with that hero.</li><li>Added settings option to allow weapon zoom to be a toggle</li><li>Added a game volume slider which will control volume independently from voice chat (VoIP)</li><li>General improvements to voice chat quality</li><li>Non-matchmaking lobbies are now considered safe to abandon</li><li>Crates now show the amount of souls they have in the tooltip</li><li>Greater contrast between team and enemy sounds</li><li>Updated headshot hit indicator</li><li>Updated McGinnis weapon sounds</li><li>Updated Vindicta weapon sounds</li><li>Updated Lady Geist weapon sounds</li><li>Fixed a bug where pinging Bebop&#x27;s Hook and Sticky Bomb abilities would call the wrong ability name</li><li>Fixed a recent bug with Metal Skin that caused you to do zero bullet damage</li><li>Fixed a bug with releasing Grey Talon&#x27;s Owl early</li><li>Updated Dynamo&#x27;s animation while using Rejuvenating Aurora</li><li>Fixed a bug that could allow Grey Talon to hit the same target multiple times when close during Rain of Arrows</li><li>Fixed a bug that could cause button input detection to malfunction</li><li>Fixed an issue where the Rejuvenator being stolen was firing incorrectly</li><li>Fixed a bug introduced in last week&#x27;s update that caused gun spreads to not work properly</li><li>Added an effect at the bottom of a player&#x27;s screen whenever they are standing on something that causes damage</li><li>Improved Abrams animation while hovering in the air during his ultimate and adjusted the downward acceleration animation</li><li>Flex slot removed from killing the Patron and added to killing all Walkers</li><li>Urn now spawns on both sides of the map. Bounty for each is reduced by 40%</li><li>Rejuvenator now reduces players&#x27; next respawn time by 75% instead of giving a 3s respawn time</li><li>Golden Statues no longer drop powerups (time duration buffs). Instead they now drop small permanent bonuses. These stack and do not decay with time or death. Drop rates rebalanced.</li><li>At defined locations around the map, powerups now spawn starting 10 minutes (and every 5 minutes after). There are 6 spots where they spawn and they are indicated on the minimap when they are up.</li><li>Movement powerup duration increased from 30s to 50s</li><li>Fire Rate powerup duration increased from 35s to 45s and +15% Fire Rate to +18%</li><li>Regeneration powerup duration increased from 25s to 45s</li><li>Stamina powerup duration increased from 80s to 120s</li><li>Cooldown powerup is unchanged</li><li>Clip powerup is unchanged</li><li>Breakables initial spawn time increased from 2 min to 3 min</li><li>Fixed being able to hide inside the Guardian&#x27;s head</li><li>Jumping after a dash jump no longer causes your hero to sometimes jump in place</li><li>Breakables souls base value reduced by 30%. Increases to +15% of current values over 30 minutes. (so -30% to +15% from start to 30 min)</li><li>All hero guns&#x27; reload time reduced by 5%</li><li>Zipline Boost ability cooldown reduced from 380s to 340s</li><li>Medic Trooper heal now bounces to up to one other allied hero within 25m from the hero</li><li>Trooper gold sharing radius from the location of the allied hero reduced from 50m to 40m</li><li>Creep waves now land at their lane destinations at the same time as each other</li><li>Added connection hallway between outer lane Shop and crate room</li><li>Opened up Authority Building and Jazz Club to the Guardian side</li><li>Added intermediate cover in front of Amber Orange Guardian and Sapphire Blue Guardian</li><li>Added Veils to entrances to base fountain</li><li>Extended cover near Sapphire Orange Guardian to match Amber Blue</li><li>Extended alcove on outer lane cover position in front of the Shop</li><li>Underground tunnels have more light</li><li>Removed underground tunnel alcoves</li><li>Added signs for entrance to the underground tunnel from the warehouse side</li><li>Withering Whip: Ammo increased from 15% to 20%</li><li>Withering Whip: Now grants +4 Spirit</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var oe = i(ae, 2);
	re(oe, {});
	var c = i(oe, 2);
	n(c, 1, `hero dynamo`);
	var ce = r(c);
	t(
		ce,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var l = i(ce, 2);
	n(l, 1, `ability quantum-entanglement`);
	var le = r(l);
	t(
		le,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Quantum Entanglement is prevented from being cast when Dynamo is rooted or movement-silenced (such as by Slowing Hex)</li></ul>
`
	);
	var ue = i(le, 2);
	(a(ue, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), e(l));
	var de = i(l, 2);
	n(de, 1, `ability rejuvenating-aurora`);
	var fe = r(de);
	t(
		fe,
		() => `
<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>
<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>
<ul><li>Rejuvenating Aurora T3 reduced from +5% to +4%</li></ul>
`
	);
	var pe = i(fe, 2);
	(a(pe, { kind: `hero`, name: `Dynamo`, ability: `Rejuvenating Aurora` }), e(de), e(c));
	var u = i(c, 2);
	n(u, 1, `hero haze`);
	var me = r(u);
	t(
		me,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var he = i(me, 2);
	n(he, 1, `ability bullet-dance`);
	var ge = r(he);
	t(
		ge,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance T1 increased from +5 Weapon Damage to +6</li><li>Fixed various bugs with the fire rate on Bullet Dance (net effect of the bugs was that it often fired a little faster than it was intended to)</li></ul>
`
	);
	var _e = i(ge, 2);
	(a(_e, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), e(he), e(u));
	var d = i(u, 2);
	n(d, 1, `hero infernus`);
	var ve = r(d);
	t(
		ve,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var ye = i(ve, 2);
	n(ye, 1, `ability afterburn`);
	var be = r(ye);
	t(
		be,
		() => `
<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>
<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>
<ul><li>Afterburn base dps reduced from 20 to 18</li><li>Afterburn T3 reduced from +35 to +33</li></ul>
`
	);
	var xe = i(be, 2);
	(a(xe, { kind: `hero`, name: `Infernus`, ability: `Afterburn` }), e(ye), e(d));
	var f = i(d, 2);
	n(f, 1, `hero kelvin`);
	var Se = r(f);
	t(
		Se,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var Ce = i(Se, 2);
	n(Ce, 1, `ability arctic-beam`);
	var we = r(Ce);
	t(
		we,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
`
	);
	var Te = i(we, 2),
		Ee = r(Te);
	(t(Ee, () => `Arctic Beam spirit scaling increased from 0.7 to 0.9`, !0), e(Ee));
	var De = i(Ee, 2),
		Oe = r(De);
	t(Oe, () => `Arctic Beam cooldown reduced from 25 to 23`);
	var ke = i(Oe, 2);
	(o(ke, {
		kind: `hero`,
		name: `Kelvin`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Arctic Beam cooldown reduced from 25 to 23`
	}),
		e(De),
		e(Te));
	var Ae = i(Te, 2);
	(a(Ae, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), e(Ce), e(f));
	var p = i(f, 2);
	n(p, 1, `hero lash`);
	var je = r(p);
	t(
		je,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var m = i(je, 2);
	n(m, 1, `ability ground-strike`);
	var Me = r(m);
	t(
		Me,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
`
	);
	var Ne = i(Me, 2),
		Pe = r(Ne),
		Fe = r(Pe);
	t(Fe, () => `Ground Strike radius reduced from 14m to 13m`);
	var Ie = i(Fe, 2);
	(o(Ie, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Ground Strike radius reduced from 14m to 13m`
	}),
		e(Pe),
		e(Ne));
	var Le = i(Ne, 2);
	(a(Le, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), e(m));
	var Re = i(m, 2);
	n(Re, 1, `ability death-slam`);
	var ze = r(Re);
	t(
		ze,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>
`
	);
	var Be = i(ze, 2),
		Ve = r(Be),
		He = r(Ve);
	t(He, () => `Death Slam radius reduced from 20m to 19m`);
	var Ue = i(He, 2);
	(o(Ue, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Death Slam radius reduced from 20m to 19m`
	}),
		e(Ve),
		e(Be));
	var We = i(Be, 2);
	(a(We, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), e(Re), e(p));
	var h = i(p, 2);
	n(h, 1, `hero mcginnis`);
	var Ge = r(h);
	t(
		Ge,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
<ul><li>Fixed her gun having a recent regression that caused it to not have any spread</li></ul>
`
	);
	var g = i(Ge, 2);
	n(g, 1, `ability mini-turret`);
	var Ke = r(g);
	t(
		Ke,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>
<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>
<ul><li>Mini Turret damage reduced by up to 30% at 35m (now has bullet falloff from 20m to 35m)</li><li>Mini Turret deploy time reduced from 2s to 1s</li><li>Mini Turret now shows up on the minimap</li></ul>
`
	);
	var qe = i(Ke, 2);
	(a(qe, { kind: `hero`, name: `McGinnis`, ability: `Mini Turret` }), e(g));
	var _ = i(g, 2);
	n(_, 1, `ability medicinal-specter`);
	var Je = r(_);
	t(
		Je,
		() => `
<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>
<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>
<ul><li>Medicinal Spectre can no longer be attacked</li></ul>
`
	);
	var Ye = i(Je, 2);
	(a(Ye, { kind: `hero`, name: `McGinnis`, ability: `Medicinal Specter` }), e(_));
	var Xe = i(_, 2);
	n(Xe, 1, `ability spectral-wall`);
	var Ze = r(Xe);
	t(
		Ze,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Spectral Wall height increased by 2m</li><li>Spectral Wall slow duration increased from 2s to 2.5s</li><li>Fixed a bug with Spectral Wall that caused the Rejuvenator to instantly drop</li></ul>
`
	);
	var Qe = i(Ze, 2);
	(a(Qe, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), e(Xe), e(h));
	var v = i(h, 2);
	n(v, 1, `hero mo-krill`);
	var $e = r(v);
	t(
		$e,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
<ul><li>Base HP regen increased from 2.5 to 3</li></ul>
`
	);
	var y = i($e, 2);
	n(y, 1, `ability scorn`);
	var et = r(y);
	t(
		et,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>
`
	);
	var tt = i(et, 2),
		nt = r(tt),
		rt = r(nt);
	t(rt, () => `Scorn damage increased from 50 to 60`);
	var it = i(rt, 2);
	(o(it, {
		kind: `hero`,
		name: `Mo & Krill`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Scorn damage increased from 50 to 60`
	}),
		e(nt));
	var at = i(nt, 2);
	(t(at, () => `Fixed Scorn not healing for more with things like Mystic Burst`, !0),
		e(at),
		e(tt));
	var ot = i(tt, 2);
	(a(ot, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), e(y));
	var b = i(y, 2);
	n(b, 1, `ability burrow`);
	var st = r(b);
	t(
		st,
		() => `
<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>
<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>
<ul><li>Burrow now destroys breakables in its path</li></ul>
`
	);
	var ct = i(st, 2);
	(a(ct, { kind: `hero`, name: `Mo & Krill`, ability: `Burrow` }), e(b));
	var x = i(b, 2);
	n(x, 1, `ability scorn`);
	var lt = r(x);
	t(
		lt,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn-1"><a href="/ability/scorn">Scorn</a></h4>
<ul><li>Fixed Healing Booster not applying to Scorn&#x27;s 2x heal multiplier on heroes</li></ul>
`
	);
	var ut = i(lt, 2);
	(a(ut, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), e(x));
	var dt = i(x, 2);
	n(dt, 1, `ability combo`);
	var ft = r(dt);
	t(
		ft,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Added a bonus counter to show how much health has been earned by getting a kill during Combo</li></ul>
`
	);
	var pt = i(ft, 2);
	(a(pt, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), e(dt), e(v));
	var S = i(v, 2);
	n(S, 1, `hero paradox`);
	var mt = r(S);
	t(
		mt,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
<ul><li>Base movement speed reduced from 7 to 6.5</li></ul>
`
	);
	var C = i(mt, 2);
	n(C, 1, `ability kinetic-carbine`);
	var ht = r(C);
	t(
		ht,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine impact radius reduced by 15%</li></ul>
`
	);
	var gt = i(ht, 2);
	(a(gt, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), e(C));
	var w = i(C, 2);
	n(w, 1, `ability kinetic-carbine-max-stop-duration`);
	var _t = r(w);
	t(
		_t,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine Max Stop Duration change history</a></p>
<h4 id="kinetic-carbine-max-stop-duration"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Stop Duration</a></h4>
<ul><li>Kinetic Carbine Max Stop Duration reduced from 0.75 to 0.5</li></ul>
`
	);
	var vt = i(_t, 2);
	(a(vt, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine Max Stop Duration` }),
		e(w));
	var T = i(w, 2);
	n(T, 1, `ability kinetic-carbine`);
	var yt = r(T);
	t(
		yt,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine-1"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine buff duration reduced from 6 to 4</li><li>Kinetic Carbine T1 increased from +0.5s Max Stop Duration to +0.75</li><li>Kinetic Carbine T2 now also increases buff by +2s</li></ul>
`
	);
	var bt = i(yt, 2);
	(a(bt, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), e(T));
	var xt = i(T, 2);
	n(xt, 1, `ability paradoxical-swap`);
	var St = r(xt);
	t(
		St,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
<ul><li>Paradoxical Swap range reduced from 35m to 30m</li></ul>
`
	);
	var Ct = i(St, 2);
	(a(Ct, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), e(xt), e(S));
	var E = i(S, 2);
	n(E, 1, `hero pocket`);
	var wt = r(E);
	t(
		wt,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var Tt = i(wt, 2);
	n(Tt, 1, `ability enchanter-s-satchel`);
	var Et = r(Tt);
	t(
		Et,
		() => `
<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>
<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>
<ul><li>Enchanter&#x27;s Satchel can now be canceled by shooting</li></ul>
`
	);
	var Dt = i(Et, 2);
	(a(Dt, { kind: `hero`, name: `Pocket`, ability: `Enchanter's Satchel` }), e(Tt), e(E));
	var D = i(E, 2);
	n(D, 1, `hero seven`);
	var Ot = r(D);
	t(
		Ot,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var O = i(Ot, 2);
	n(O, 1, `ability power-surge`);
	var kt = r(O);
	t(
		kt,
		() => `
<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>
<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>
<ul><li>Fixed Return Fire working with Power Surge</li></ul>
`
	);
	var At = i(kt, 2);
	(a(At, { kind: `hero`, name: `Seven`, ability: `Power Surge` }), e(O));
	var jt = i(O, 2);
	t(
		jt,
		() => `
<ul><li>No longer has base +15% Spirit Resistance</li><li>Now has base +20% Bullet Resistance</li><li>Base health regen reduced from 2 to 1</li></ul>
`
	);
	var Mt = i(jt, 2);
	n(Mt, 1, `ability static-charge`);
	var Nt = r(Mt);
	t(
		Nt,
		() => `
<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>
<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>
<ul><li>Static Charge T1 improved from -15s Cooldown to -20s</li></ul>
`
	);
	var Pt = i(Nt, 2);
	(a(Pt, { kind: `hero`, name: `Seven`, ability: `Static Charge` }), e(Mt), e(D));
	var k = i(D, 2);
	n(k, 1, `hero vindicta`);
	var Ft = r(k);
	t(
		Ft,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Base movement speed increased from 7 to 8</li></ul>
`
	);
	var A = i(Ft, 2);
	n(A, 1, `ability crow-familiar`);
	var It = r(A);
	t(
		It,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Fixed Crow Familiar T1 only bouncing to 1 additional target instead of 2</li></ul>
`
	);
	var Lt = i(It, 2);
	(a(Lt, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), e(A));
	var Rt = i(A, 2);
	n(Rt, 1, `ability assassinate`);
	var zt = r(Rt);
	t(
		zt,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate zoom level is reduced a bit</li></ul>
`
	);
	var Bt = i(zt, 2);
	(a(Bt, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(Rt), e(k));
	var j = i(k, 2);
	n(j, 1, `hero warden`);
	var Vt = r(j);
	t(
		Vt,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
`
	);
	var Ht = i(Vt, 2);
	n(Ht, 1, `ability willpower`);
	var Ut = r(Ht);
	t(
		Ut,
		() => `
<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>
<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>
<ul><li>Willpower no longer loses movement speed when the shield is depleted</li><li>Willpower duration reduced from 8s to 7s</li></ul>
`
	);
	var Wt = i(Ut, 2);
	(a(Wt, { kind: `hero`, name: `Warden`, ability: `Willpower` }), e(Ht), e(j));
	var M = i(j, 2);
	n(M, 1, `hero wraith`);
	var Gt = r(M);
	t(
		Gt,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var Kt = i(Gt, 2);
	n(Kt, 1, `ability card-trick`);
	var qt = r(Kt);
	t(
		qt,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
<ul><li>The Royal Flush ability has been replaced with Card Trick.  Card Trick enables Wraith&#x27;s weapon damage to summon playing cards.  Activating the ability throws one of the cards, which will fly towards the enemy or point under the crosshair and explode on impact.</li></ul>
`
	);
	var Jt = i(qt, 2);
	(a(Jt, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), e(Kt), e(M));
	var N = i(M, 2);
	n(N, 1, `hero yamato`);
	var Yt = r(N);
	t(
		Yt,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var P = i(Yt, 2);
	n(P, 1, `ability power-slash`);
	var Xt = r(P);
	t(
		Xt,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>
`
	);
	var Zt = i(Xt, 2),
		Qt = r(Zt),
		$t = r(Qt);
	t($t, () => `Power Slash damage reduced from 175 to 170`);
	var en = i($t, 2);
	(o(en, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Power Slash damage reduced from 175 to 170`
	}),
		e(Qt),
		e(Zt));
	var tn = i(Zt, 2);
	(a(tn, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), e(P));
	var nn = i(P, 2);
	n(nn, 1, `ability flying-slash`);
	var rn = r(nn);
	t(
		rn,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Can now cancel Flying Strike</li></ul>
`
	);
	var an = i(rn, 2);
	(a(an, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), e(nn));
	var on = i(nn, 2);
	n(on, 1, `ability shadow-transformation`);
	var sn = r(on);
	t(
		sn,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation damage and debuff resistance reduced from 80% to 70%</li><li>Shadow Transformation duration increased from 4.5s to 5s</li></ul>
`
	);
	var cn = i(sn, 2);
	(a(cn, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		e(on),
		e(N));
	var ln = i(N, 2);
	t(
		ln,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var un = i(ln, 2);
	ie(un, {});
	var F = i(un, 2);
	n(F, 1, `item active-reload`);
	var dn = r(F);
	t(
		dn,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>Timing window to click increased from 0.2s to 0.3s</li><li>Active Bullet Lifesteal increased from 30% to 40%</li><li>Duration increased from 6s to 8s</li><li>Weapon Damage increased from 8% to 10%</li></ul>
`
	);
	var fn = i(dn, 2);
	(a(fn, { kind: `item`, name: `Active Reload`, ability: null }), e(F));
	var I = i(F, 2);
	n(I, 1, `item alchemical-fire`);
	var pn = r(I);
	t(
		pn,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
`
	);
	var mn = i(pn, 2),
		hn = r(mn);
	(t(hn, () => `Max DPS increased from 85 to 95`, !0), e(hn));
	var gn = i(hn, 2),
		_n = r(gn);
	t(_n, () => `Cooldown reduced from 30s to 28s`);
	var vn = i(_n, 2);
	(o(vn, {
		kind: `item`,
		name: `Alchemical Fire`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 30s to 28s`
	}),
		e(gn));
	var yn = i(gn, 2);
	(t(yn, () => `Weapon Damage increased from +12% to +14%`, !0), e(yn), e(mn));
	var bn = i(mn, 2);
	(a(bn, { kind: `item`, name: `Alchemical Fire`, ability: null }), e(I));
	var L = i(I, 2);
	n(L, 1, `item ammo-scavenger`);
	var xn = r(L);
	t(
		xn,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Now a Spirit Item</li><li>No longer grants +20% Fire Rate for 4s on Soul Secure/Deny</li><li>Now grants +3 Spirit for 18s on Soul Secure/Deny. Multiple instances stack and refresh the duration. Max 12 stacks.</li></ul>
`
	);
	var Sn = i(xn, 2);
	(a(Sn, { kind: `item`, name: `Ammo Scavenger`, ability: null }), e(L));
	var R = i(L, 2);
	n(R, 1, `item bullet-lifesteal`);
	var Cn = r(R);
	t(
		Cn,
		() => `
<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>
<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>
<ul><li>Increased from 20% to 22%</li></ul>
`
	);
	var wn = i(Cn, 2);
	(a(wn, { kind: `item`, name: `Bullet Lifesteal`, ability: null }), e(R));
	var z = i(R, 2);
	n(z, 1, `item burst-fire`);
	var Tn = r(z);
	t(
		Tn,
		() => `
<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>
<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>
`
	);
	var En = i(Tn, 2),
		Dn = r(En),
		On = r(Dn);
	t(On, () => `Cooldown reduced from 9s to 8s`);
	var kn = i(On, 2);
	(o(kn, {
		kind: `item`,
		name: `Burst Fire`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 9s to 8s`
	}),
		e(Dn));
	var An = i(Dn, 2);
	(t(An, () => `Slide Distance increased from 25% to 35%`, !0), e(An), e(En));
	var jn = i(En, 2);
	(a(jn, { kind: `item`, name: `Burst Fire`, ability: null }), e(z));
	var B = i(z, 2);
	n(B, 1, `item crippling-headshot`);
	var Mn = r(B);
	t(
		Mn,
		() => `
<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>
<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>
<ul><li>Weapon Damage reduced from 25% to 20%</li><li>Debuff duration reduced from 8s to 5s</li></ul>
`
	);
	var Nn = i(Mn, 2);
	(a(Nn, { kind: `item`, name: `Crippling Headshot`, ability: null }), e(B));
	var V = i(B, 2);
	n(V, 1, `item decay`);
	var Pn = r(V);
	t(
		Pn,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
<ul><li>Healing Reduction improved from -65% to -70%</li><li>Bleed increased from 2.4% to 2.6%</li></ul>
`
	);
	var Fn = i(Pn, 2);
	(a(Fn, { kind: `item`, name: `Decay`, ability: null }), e(V));
	var H = i(V, 2);
	n(H, 1, `item duration-extender`);
	var In = r(H);
	t(
		In,
		() => `
<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>
<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>
<ul><li>Health increased from +50 to +75</li><li>Ability Duration reduced from 18% to 16%</li></ul>
`
	);
	var Ln = i(In, 2);
	(a(Ln, { kind: `item`, name: `Duration Extender`, ability: null }), e(H));
	var U = i(H, 2);
	n(U, 1, `item escalating-resilience`);
	var Rn = r(U);
	t(
		Rn,
		() => `
<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>
<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>
<ul><li>Stack duration increased from 10s to 14s</li></ul>
`
	);
	var zn = i(Rn, 2);
	(a(zn, { kind: `item`, name: `Escalating Resilience`, ability: null }), e(U));
	var W = i(U, 2);
	n(W, 1, `item ethereal-shift`);
	var Bn = r(W);
	t(
		Bn,
		() => `
<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>
<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>
<ul><li>Duration increased from 3s to 3.5s</li><li>Post-cast bonus is now still granted when ending the buff early</li></ul>
`
	);
	var Vn = i(Bn, 2);
	(a(Vn, { kind: `item`, name: `Ethereal Shift`, ability: null }), e(W));
	var G = i(W, 2);
	n(G, 1, `item extra-charge`);
	var Hn = r(G);
	t(
		Hn,
		() => `
<p><a href="/item/extra-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Charge patch history</a></p>
<h3 id="extra-charge"><a href="/item/extra-charge">Extra Charge</a></h3>
<ul><li>CD reduction increased from +7% to +8%</li></ul>
`
	);
	var Un = i(Hn, 2);
	(a(Un, { kind: `item`, name: `Extra Charge`, ability: null }), e(G));
	var K = i(G, 2);
	n(K, 1, `item extra-health`);
	var Wn = r(K);
	t(
		Wn,
		() => `
<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>
<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>
<ul><li>Health increased from +135 to +140</li></ul>
`
	);
	var Gn = i(Wn, 2);
	(a(Gn, { kind: `item`, name: `Extra Health`, ability: null }), e(K));
	var q = i(K, 2);
	n(q, 1, `item extra-spirit`);
	var Kn = r(q);
	t(
		Kn,
		() => `
<p><a href="/item/extra-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Spirit patch history</a></p>
<h3 id="extra-spirit"><a href="/item/extra-spirit">Extra Spirit</a></h3>
<ul><li>Spirit bonus increased from +7 to +8</li></ul>
`
	);
	var qn = i(Kn, 2);
	(a(qn, { kind: `item`, name: `Extra Spirit`, ability: null }), e(q));
	var J = i(q, 2);
	n(J, 1, `item frenzy`);
	var Jn = r(J);
	t(
		Jn,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Whenever you go back above 40%, the buff lingers for 4s</li><li>Ammo increased from +7 to +9</li></ul>
`
	);
	var Yn = i(Jn, 2);
	(a(Yn, { kind: `item`, name: `Frenzy`, ability: null }), e(J));
	var Y = i(J, 2);
	n(Y, 1, `item healing-rite`);
	var Xn = r(Y);
	t(
		Xn,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
`
	);
	var Zn = i(Xn, 2),
		Qn = r(Zn),
		$n = r(Qn);
	t($n, () => `Cooldown reduced from 80s to 75s`);
	var er = i($n, 2);
	(o(er, {
		kind: `item`,
		name: `Healing Rite`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 80s to 75s`
	}),
		e(Qn),
		e(Zn));
	var tr = i(Zn, 2);
	(a(tr, { kind: `item`, name: `Healing Rite`, ability: null }), e(Y));
	var X = i(Y, 2);
	n(X, 1, `item heroic-aura`);
	var nr = r(X);
	t(
		nr,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
<ul><li>Now provides +16% Bullet Lifesteal</li><li>No longer grants a 10% Fire Rate Aura</li><li>Active now grants +20% Fire Rate instead of Bullet Lifesteal</li></ul>
`
	);
	var rr = i(nr, 2);
	(a(rr, { kind: `item`, name: `Heroic Aura`, ability: null }), e(X));
	var Z = i(X, 2);
	n(Z, 1, `item infuser`);
	var ir = r(Z);
	t(
		ir,
		() => `
<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>
<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>
<ul><li>Active Spirit Power increased from +12 to +18</li></ul>
`
	);
	var ar = i(ir, 2);
	(a(ar, { kind: `item`, name: `Infuser`, ability: null }), e(Z));
	var Q = i(Z, 2);
	n(Q, 1, `item leech`);
	var or = r(Q);
	t(
		or,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Now grants +8% Weapon Damage</li></ul>
`
	);
	var sr = i(or, 2);
	(a(sr, { kind: `item`, name: `Leech`, ability: null }), e(Q));
	var cr = i(Q, 2);
	n(cr, 1, `item lifestrike`);
	var lr = r(cr);
	t(
		lr,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Slow duration increased from 2s to 2.5s</li></ul>
`
	);
	var ur = i(lr, 2);
	(a(ur, { kind: `item`, name: `Lifestrike`, ability: null }), e(cr));
	var dr = i(cr, 2);
	n(dr, 1, `item long-range`);
	var fr = r(dr);
	t(
		fr,
		() => `
<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>
<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>
<ul><li>Ammo increased from +15% to +20%</li></ul>
`
	);
	var pr = i(fr, 2);
	(a(pr, { kind: `item`, name: `Long Range`, ability: null }), e(dr));
	var mr = i(dr, 2);
	n(mr, 1, `item melee-charge`);
	var hr = r(mr);
	t(
		hr,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>Weapon Damage increased from 10% to 15%</li></ul>
`
	);
	var gr = i(hr, 2);
	(a(gr, { kind: `item`, name: `Melee Charge`, ability: null }), e(mr));
	var _r = i(mr, 2);
	n(_r, 1, `item mystic-reverb`);
	var vr = r(_r);
	t(
		vr,
		() => `
<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>
<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>
`
	);
	var yr = i(vr, 2),
		br = r(yr),
		xr = r(br);
	t(xr, () => `Radius increased from 10m to 12m`);
	var Sr = i(xr, 2);
	(o(Sr, {
		kind: `item`,
		name: `Mystic Reverb`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Radius increased from 10m to 12m`
	}),
		e(br));
	var Cr = i(br, 2),
		wr = r(Cr);
	t(wr, () => `Cooldown reduced from 12s to 8s`);
	var Tr = i(wr, 2);
	(o(Tr, {
		kind: `item`,
		name: `Mystic Reverb`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 12s to 8s`
	}),
		e(Cr),
		e(yr));
	var Er = i(yr, 2);
	(a(Er, { kind: `item`, name: `Mystic Reverb`, ability: null }), e(_r));
	var Dr = i(_r, 2);
	n(Dr, 1, `item mystic-slow`);
	var Or = r(Dr);
	t(
		Or,
		() => `
<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>
<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>
<ul><li>Fire Rate reduction reduced from -35% to -30%</li></ul>
`
	);
	var kr = i(Or, 2);
	(a(kr, { kind: `item`, name: `Mystic Slow`, ability: null }), e(Dr));
	var Ar = i(Dr, 2);
	n(Ar, 1, `item point-blank`);
	var jr = r(Ar);
	t(
		jr,
		() => `
<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>
<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>
<ul><li>Bullet Shield health increased from +200 to +225</li></ul>
`
	);
	var Mr = i(jr, 2);
	(a(Mr, { kind: `item`, name: `Point Blank`, ability: null }), e(Ar));
	var Nr = i(Ar, 2);
	n(Nr, 1, `item reactive-barrier`);
	var Pr = r(Nr);
	t(
		Pr,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
<ul><li>Spirit Shield Health reduced from +500 to +200</li><li>Now grants +400 Bullet Shield Health</li></ul>
`
	);
	var Fr = i(Pr, 2);
	(a(Fr, { kind: `item`, name: `Reactive Barrier`, ability: null }), e(Nr));
	var Ir = i(Nr, 2);
	n(Ir, 1, `item restorative-locket`);
	var Lr = r(Ir);
	t(
		Lr,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>Max stacks increased from 18 to 20</li></ul>
`
	);
	var Rr = i(Lr, 2);
	(a(Rr, { kind: `item`, name: `Restorative Locket`, ability: null }), e(Ir));
	var zr = i(Ir, 2);
	n(zr, 1, `item siphon-bullets`);
	var Br = r(zr);
	t(
		Br,
		() => `
<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>
<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>
<ul><li>Max HP Steal duration increased from 12s to 15s</li></ul>
`
	);
	var Vr = i(Br, 2);
	(a(Vr, { kind: `item`, name: `Siphon Bullets`, ability: null }), e(zr));
	var Hr = i(zr, 2);
	n(Hr, 1, `item spiritual-overflow`);
	var Ur = r(Hr);
	t(
		Ur,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Bonus spirit increased from +40 to +45</li><li>Fire Rate increased from +15% to +20%</li></ul>
`
	);
	var Wr = i(Ur, 2);
	(a(Wr, { kind: `item`, name: `Spiritual Overflow`, ability: null }), e(Hr));
	var Gr = i(Hr, 2);
	n(Gr, 1, `item superior-duration`);
	var Kr = r(Gr);
	t(
		Kr,
		() => `
<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>
<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>
<ul><li>Health increased from +100 to +125</li><li>Now grants +4 Health Regen</li></ul>
`
	);
	var qr = i(Kr, 2);
	(a(qr, { kind: `item`, name: `Superior Duration`, ability: null }), e(Gr));
	var Jr = i(Gr, 2);
	n(Jr, 1, `item suppressor`);
	var Yr = r(Jr);
	t(
		Yr,
		() => `
<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>
<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>
<ul><li>Fire Rate reduction reduced from -35% to -30%</li></ul>
`
	);
	var Xr = i(Yr, 2);
	(a(Xr, { kind: `item`, name: `Suppressor`, ability: null }), e(Jr));
	var Zr = i(Jr, 2);
	n(Zr, 1, `item surge-of-power`);
	var Qr = r(Zr);
	t(
		Qr,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>Imbued Ability Spirit Power increased from +20 to +24</li></ul>
`
	);
	var $r = i(Qr, 2);
	(a($r, { kind: `item`, name: `Surge of Power`, ability: null }), e(Zr));
	var ei = i(Zr, 2);
	n(ei, 1, `item swift-striker`);
	var ti = r(ei);
	t(
		ti,
		() => `
<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>
<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>
<ul><li>Fire Rate increased from +20% to +22%</li></ul>
`
	);
	var ni = i(ti, 2);
	(a(ni, { kind: `item`, name: `Swift Striker`, ability: null }), e(ei));
	var ri = i(ei, 2);
	n(ri, 1, `item titanic-magazine`);
	var ii = r(ri);
	t(
		ii,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Ammo increased from +75% to +90%</li></ul>
`
	);
	var ai = i(ii, 2);
	(a(ai, { kind: `item`, name: `Titanic Magazine`, ability: null }), e(ri));
	var $ = i(ri, 2);
	n($, 1, `item vampiric-burst`);
	var oi = r($);
	t(
		oi,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
`
	);
	var si = i(oi, 2),
		ci = r(si),
		li = r(ci);
	t(li, () => `Cooldown reduced from 30s to 24s`);
	var ui = i(li, 2);
	(o(ui, {
		kind: `item`,
		name: `Vampiric Burst`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 30s to 24s`
	}),
		e(ci),
		e(si));
	var di = i(si, 2);
	(a(di, { kind: `item`, name: `Vampiric Burst`, ability: null }), e($));
	var fi = i($, 2);
	n(fi, 1, `item warp-stone`);
	var pi = r(fi);
	t(
		pi,
		() => `
<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>
<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>
<ul><li>Distance increased from 12m to 13m</li></ul>
`
	);
	var mi = i(pi, 2);
	(a(mi, { kind: `item`, name: `Warp Stone`, ability: null }), e(fi), te(ee, s));
}
export { ce as default, ae as metadata, c as readingManifest, oe as toc };
