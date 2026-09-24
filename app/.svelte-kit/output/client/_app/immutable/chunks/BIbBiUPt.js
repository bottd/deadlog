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
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Ivy`,
			`Kelvin`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Seven`,
			`Yamato`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Alchemical Fire`,
			`Boundless Spirit`,
			`Bullet Resist Shredder`,
			`Burst Fire`,
			`Cold Front`,
			`Crippling Headshot`,
			`Divine Barrier`,
			`Escalating Resilience`,
			`Extra Health`,
			`Fleetfoot`,
			`Headshot Booster`,
			`Healbane`,
			`Healing Booster`,
			`Majestic Leap`,
			`Mystic Burst`,
			`Mystic Slow`,
			`Reactive Barrier`,
			`Refresher`,
			`Rescue Beam`,
			`Swift Striker`,
			`Tesla Bullets`,
			`Vampiric Burst`,
			`Warp Stone`
		]
	});
}
var ie = {
		title: `06-13-2024 Update`,
		thread_id: `5773`,
		published: `2024-06-13T14:01:34-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Voice/Text chat is now opt-in. There is a prompt pre-match for joining the chat, or you can control it at any time from the ESC menu during a match. You can now press ESC to mute individual players. Muted accounts will not be alerted, and mutes will persist across games. Parties can now set their in-game chat mode to be Party-only, All Team or Chat Disabled (if using discord or other programs) Spirit stat has now been renamed to Spirit Power with updated icon Top bar now highlights your lane partner and lane enemies during the laning phase Increased difficulty for hard mode bots Added sandbox option for spawning neutrals Improved the camera when using Dynamo's Quantum Entanglement Added overhead number counter effect for opponents to see the stacks of Berserker Increased the range the enemy-candle-behind-wall indicator shows up from 25m to 35m Fixed ping wheel randomly coming up instantly instead of doing an in-world ping Added ping indicator on the HUD indicating the direction the ping came from (enabled by default in settings) Ping Wheel context slot will now show nothing if there is no context currently Added new UI indicating how many friends you have that are in the game Improved visibility of the edge of Dynamo's Singularity Fixed various issues with bots getting stuck Fixed Build descriptions not showing up properly with the in-game tooltip version Moved HUD elements closer to center for ultra wide monitors Added heal and kill events to the contextual ping wheel slot Fixed AP not showing when you have your hero selected Fixed TAB/ALT not bringing up your abilities when spectating the Patron Added indicator for burrow damage radius for the local player Fixed Affliction sometimes becoming lethal when combined with Escalating Exposure Fixed Yamato's Crimson Slash visual direction being wrong sometimes Added Patron VO for when allied or enemy base guardians are destroyed Adjusted the builds drop down in-game to be more clear it can be changed there Fixed Dynamo's Singularity moving the Mid Boss Fixed various bugs with Shifting Shroud Added a new "major damage" sound effect to indicate large instances of damage to the local player Fixed Lash's Ground Strike T3 not being accurate in the tooltip Fixed Diviner's Kevlar gaining the Bullet Shield buff if the ultimate was manually cancelled Updated effects for Unstoppable Minor improvements to visibility of Pocket's Affliction cast Updated effects to Alchemical Fire to make it less noisy Reload anims now play correctly in relation to the reload timer. Previously they would end prematurely if reloads were paused during dash/melee/abilities Fixed some bugs with Pocket/channeling A few buildings are 2-3 stories taller Added new effects for Knockdown Added new effects for Vampiric Burst Fixed Mo & Krill gaining Reactive Barrier buff while channeling the ultimate Added instructional text to the bottom of the ping wheel container reminding that they can customize it in settings Changed Ivy's True Form ability name to Stone Form Fixed bugs that were keeping some heroes desperation ability use lines from playing correctly (casting an ability when you're below 10% should play different VO) Fixed several instances of ability use VO getting swallowed up by SFX Boosted volume of ult cast VO Added various ambient sounds - walla, birds, drones - and overall mix tweaks Iterated on binding word sound effects Added Curse item selection start, loop, and end sounds The Patrons no longer care about the well being of the Urn Runner, and so they will stop asking you to protect them (patrons will no longer call out the urn being picked up) Added two new underground tunnels, one on each side of the map. The tunnels connect the underground shop to the Bodega area on Amber and the Theater area on Sapphire. Added two new teleporters, one on each outer lane (behind the Chapel and behind the Firehouse) Urn reward now has a comeback component where it gives extra gold for the team that is behind based on the magnitude A small share of the comeback portion of hero kill bounty is now given to each other player outside of just the kill/assist players. This also makes the amount the killer gets be more consistent, previously the amount could vary significantly based on how many people were involved. The killer and assist players still get the bigger shares. Kill assist window increased from 7s to 10s Rejuvenator is no longer area pick up and now requires someone to heavy melee it to pick it up after it's dropped to the ground Rejuvenator will no longer stop dropping if it touches player created geometry (like Ice Dome) and always goes down to the target position You can air-dash downward by pressing CTRL+SHIFT while in the air Successful parry reduces the cooldown from 1s to 0.5s (unsuccessful parry cd is still 6s) Heroes HP growth per boon increased by +5 (there are 11 instances of these). This is not done for Abrams or Dynamo. Post lane medic troopers will heal other troopers if a hero within range is full hp Post lane medic troopers' hero heal increased from 40 to 80 Base zipline speed increased by 5% If the Soul Urn is dropped it goes back to its original spot a little bit faster Healing/Spawn area in the base now has its defense damage go up over time Carrying the Soul Urn no longer causes you to get slowed briefly by 50% when you get shot Carrying the Soul Urn now always slows you by 15% Carrying the Soul Urn now also silences your items The silence effect for Soul Urn now applies as you start channeling to pick it up (0.5s after touching it, to prevent accidental walk overs) Base side doors near the healing area now open a lot faster Medic Bullets: Healing from heroes increased from 25 to 30 Enchanter's Barrier: Shield increased from 275 to 300 Shifting Shroud: Renamed to Ethereal Shift Richochet: Ammo increased from +25% to +30% Abrams Base health regen reduced from 2 to 1 Infernal Resilience T1 reduced from +2 HP Regen to +1.5 Bebop Sticky Bomb base damage reduced from 130 to 120 Hook grab radius reduced from 40 inches to 36 Hyper Beam movement and dash slow increased from 30% to 40% Hyper Beam DPS increased from 210 to 220 Hyper Beam tracking speed increased by 10% Dynamo Singularity radius reduced from 10m to 9m Grey Talon Guided Owl cooldown reduced from 130s to 120s Haze Sleep Dagger damage Spirit growth increased from 2.5 to 2.8 Sleep Dagger T3 is now -12% Bullet Resistance for 6 seconds Smoke Bomb T1 increased from +4 m/s Invis Sprint Speed to +5 Smoke Bomb causes your footsteps to be silent Ivy Watcher's Covenant replicated healing reduced from 55% to 45% Watcher's Covenant no longer provides +2 m/s in the base ability Watcher's Covenant T2 movement bonus increased from +2 m/s to +3 Kelvin Frozen Shelter movement speed slow increased from 25% to 35% Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam) Lash Ground Strike base damage reduced from 110 to 90 Ground Strike damage per meter increased from 6 to 6.75 Ground Strike now reduced scaling after 25m height to 4.5 McGinnis Mini Turret charge delay reduced from 10s to 8s Fixed Echo Shard to be compatible with Spectral Wall again (Activating echo shard resets the ability so you can cast it again and not have to cancel your first one. After casting the 2nd, using cancel will remove the first wall first) Can now dismiss Spectral Wall while channeling other abilities (Heavy Barrage) Mo & Krill HP Growth per boon reduced from 48 to 42 Combo now grants 25 max hp each time a target dies during it Seven Storm Cloud initial radius increased from 10m to 12m Storm Cloud T2 bonus radius reduced from 12m to 10m Yamato Power Slash T3 bonus damage reduced from +210 to +200 Shadow Transformation cooldown increased from 100 to 110 Mystic Burst No longer grants +3 Spirit Power No longer grants +1 Sprint Now grants +40 Spirit Shield Now grants +6% Weapon Power Headshot Booster Bonus headshot damage reduced from 50 to 45 Extra Health Health increased from 125 to 135 Divine Barrier No longer grants +2 Sprint Bullet Resist reduced from 10% to 7% Cooldown increased from 20 to 30 Active Move Speed reduced from 3 to 2 Bullet Resist Shredder Debuff duration increased from 4s to 5s Healbane Bonus HP increased from 50 to 75 Healing Booster No longer grants +50 HP Now grants +8% Spirit Resist Swift Striker Armor penalty reduced from -7% to -6% Fleetfoot Cooldown increased from 20s to 22s Reactive Barrier Cooldown reduced from 25s to 20s Cold Front Time to expand reduced from 1.5s to 0.75s Majestic Leap Cooldown increased from 15s to 20s Drop down speed reduced from 51 to 36 Burst Fire Cooldown reduced from 10s to 9s Rescue Beam No longer grants movement speed Active has been reworked. Now channels for 3 seconds, healing you and the target for up to 25% of Max HP. If you click the ally again during that time, you will pull them to you. Has 40m cast range and 45s cooldown. Can be self cast. Tesla Bullets Internal cooldown reduced from 0.4s to 0.35s Mystic Slow Bonus HP increased from +75 to +100 Warp Stone Fixed some cases where it would fail to cast near objects Escalating Resilience Stacks share a duration now and each new stack refreshes it Duration reduced from 15s to 10s Max resistance reduced from 36% to 30% Alchemical Fire Cooldown reduced from 34s to 30s Crippling Headshot Bullet and Spirit resistance reduction reduced from 35% to 30% Boundless Spirit Spirit Power increased from +50 to +55 Now grants +175 Health Vampiric Burst Lifesteal increased from 70% to 80% Refresher Now has a 0.3s cast time`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-08`, to: `2024-06-13` },
			after: { from: null, to: null }
		}
	},
	l = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 3, title: `Grapple Arm`, id: `grapple-arm` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 3, title: `Hyper Beam DPS`, id: `hyper-beam-dps` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam-1` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Kudzu Connection`, id: `kudzu-connection` },
		{ level: 3, title: `Watcher's Covenant`, id: `watcher-s-covenant` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turret`, id: `mini-turret` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Power Slash`, id: `power-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Boundless Spirit`, id: `boundless-spirit` },
		{ level: 2, title: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
		{ level: 2, title: `Burst Fire`, id: `burst-fire` },
		{ level: 2, title: `Cold Front`, id: `cold-front` },
		{ level: 2, title: `Crippling Headshot`, id: `crippling-headshot` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Escalating Resilience`, id: `escalating-resilience` },
		{ level: 2, title: `Extra Health`, id: `extra-health` },
		{ level: 2, title: `Fleetfoot`, id: `fleetfoot` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Healbane`, id: `healbane` },
		{ level: 2, title: `Healing Booster`, id: `healing-booster` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Mystic Burst`, id: `mystic-burst` },
		{ level: 2, title: `Mystic Slow`, id: `mystic-slow` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Refresher`, id: `refresher` },
		{ level: 2, title: `Rescue Beam`, id: `rescue-beam` },
		{ level: 2, title: `Swift Striker`, id: `swift-striker` },
		{ level: 2, title: `Tesla Bullets`, id: `tesla-bullets` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Warp Stone`, id: `warp-stone` }
	],
	u = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-08`, to: `2024-06-13` },
			after: null,
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Boundless Spirit`, id: `boundless-spirit` },
			{ kind: `item`, name: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
			{ kind: `item`, name: `Burst Fire`, id: `burst-fire` },
			{ kind: `item`, name: `Cold Front`, id: `cold-front` },
			{ kind: `item`, name: `Crippling Headshot`, id: `crippling-headshot` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Escalating Resilience`, id: `escalating-resilience` },
			{ kind: `item`, name: `Extra Health`, id: `extra-health` },
			{ kind: `item`, name: `Fleetfoot`, id: `fleetfoot` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Healbane`, id: `healbane` },
			{ kind: `item`, name: `Healing Booster`, id: `healing-booster` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Mystic Burst`, id: `mystic-burst` },
			{ kind: `item`, name: `Mystic Slow`, id: `mystic-slow` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Refresher`, id: `refresher` },
			{ kind: `item`, name: `Rescue Beam`, id: `rescue-beam` },
			{ kind: `item`, name: `Swift Striker`, id: `swift-striker` },
			{ kind: `item`, name: `Tesla Bullets`, id: `tesla-bullets` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Warp Stone`, id: `warp-stone` }
		],
		related: []
	},
	ae = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <!> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function oe(e) {
	var c = ae(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Voice/Text chat is now opt-in. There is a prompt pre-match for joining the chat, or you can control it at any time from the ESC menu during a match.</li><li>You can now press ESC to mute individual players. Muted accounts will not be alerted, and mutes will persist across games.</li><li>Parties can now set their in-game chat mode to be Party-only, All Team or Chat Disabled (if using discord or other programs)</li><li>Spirit stat has now been renamed to Spirit Power with updated icon</li><li>Top bar now highlights your lane partner and lane enemies during the laning phase</li><li>Increased difficulty for hard mode bots</li><li>Added sandbox option for spawning neutrals</li><li>Improved the camera when using Dynamo&#x27;s Quantum Entanglement</li><li>Added overhead number counter effect for opponents to see the stacks of Berserker</li><li>Increased the range the enemy-candle-behind-wall indicator shows up from 25m to 35m</li><li>Fixed ping wheel randomly coming up instantly instead of doing an in-world ping</li><li>Added ping indicator on the HUD indicating the direction the ping came from (enabled by default in settings)</li><li>Ping Wheel context slot will now show nothing if there is no context currently</li><li>Added new UI indicating how many friends you have that are in the game</li><li>Improved visibility of the edge of Dynamo&#x27;s Singularity</li><li>Fixed various issues with bots getting stuck</li><li>Fixed Build descriptions not showing up properly with the in-game tooltip version</li><li>Moved HUD elements closer to center for ultra wide monitors</li><li>Added heal and kill events to the contextual ping wheel slot</li><li>Fixed AP not showing when you have your hero selected</li><li>Fixed TAB/ALT not bringing up your abilities when spectating the Patron</li><li>Added indicator for burrow damage radius for the local player</li><li>Fixed Affliction sometimes becoming lethal when combined with Escalating Exposure</li><li>Fixed Yamato&#x27;s Crimson Slash visual direction being wrong sometimes</li><li>Added Patron VO for when allied or enemy base guardians are destroyed</li><li>Adjusted the builds drop down in-game to be more clear it can be changed there</li><li>Fixed Dynamo&#x27;s Singularity moving the Mid Boss</li><li>Fixed various bugs with Shifting Shroud</li><li>Added a new &quot;major damage&quot; sound effect to indicate large instances of damage to the local player</li><li>Fixed Lash&#x27;s Ground Strike T3 not being accurate in the tooltip</li><li>Fixed Diviner&#x27;s Kevlar gaining the Bullet Shield buff if the ultimate was manually cancelled</li><li>Updated effects for Unstoppable</li><li>Minor improvements to visibility of Pocket&#x27;s Affliction cast</li><li>Updated effects to Alchemical Fire to make it less noisy</li><li>Reload anims now play correctly in relation to the reload timer. Previously they would end prematurely if reloads were paused during dash/melee/abilities</li><li>Fixed some bugs with Pocket/channeling</li><li>A few buildings are 2-3 stories taller</li><li>Added new effects for Knockdown</li><li>Added new effects for Vampiric Burst</li><li>Fixed Mo &amp; Krill gaining Reactive Barrier buff while channeling the ultimate</li><li>Added instructional text to the bottom of the ping wheel container reminding that they can customize it in settings</li><li>Changed Ivy&#x27;s True Form ability name to Stone Form</li><li>Fixed bugs that were keeping some heroes desperation ability use lines from playing correctly (casting an ability when you&#x27;re below 10% should play different VO)</li><li>Fixed several instances of ability use VO getting swallowed up by SFX</li><li>Boosted volume of ult cast VO</li><li>Added various ambient sounds - walla, birds, drones - and overall mix tweaks</li><li>Iterated on binding word sound effects</li><li>Added Curse item selection start, loop, and end sounds</li><li>The Patrons no longer care about the well being of the Urn Runner, and so they will stop asking you to protect them (patrons will no longer call out the urn being picked up)</li><li>Added two new underground tunnels, one on each side of the map. The tunnels connect the underground shop to the Bodega area on Amber and the Theater area on Sapphire.</li><li>Added two new teleporters, one on each outer lane (behind the Chapel and behind the Firehouse)</li><li>Urn reward now has a comeback component where it gives extra gold for the team that is behind based on the magnitude</li><li>A small share of the comeback portion of hero kill bounty is now given to each other player outside of just the kill/assist players. This also makes the amount the killer gets be more consistent, previously the amount could vary significantly based on how many people were involved. The killer and assist players still get the bigger shares.</li><li>Kill assist window increased from 7s to 10s</li><li>Rejuvenator is no longer area pick up and now requires someone to heavy melee it to pick it up after it&#x27;s dropped to the ground</li><li>Rejuvenator will no longer stop dropping if it touches player created geometry (like Ice Dome) and always goes down to the target position</li><li>You can air-dash downward by pressing CTRL+SHIFT while in the air</li><li>Successful parry reduces the cooldown from 1s to 0.5s (unsuccessful parry cd is still 6s)</li><li>Heroes HP growth per boon increased by +5 (there are 11 instances of these). This is not done for Abrams or Dynamo.</li><li>Post lane medic troopers will heal other troopers if a hero within range is full hp</li><li>Post lane medic troopers&#x27; hero heal increased from 40 to 80</li><li>Base zipline speed increased by 5%</li><li>If the Soul Urn is dropped it goes back to its original spot a little bit faster</li><li>Healing/Spawn area in the base now has its defense damage go up over time</li><li>Carrying the Soul Urn no longer causes you to get slowed briefly by 50% when you get shot</li><li>Carrying the Soul Urn now always slows you by 15%</li><li>Carrying the Soul Urn now also silences your items</li><li>The silence effect for Soul Urn now applies as you start channeling to pick it up (0.5s after touching it, to prevent accidental walk overs)</li><li>Base side doors near the healing area now open a lot faster</li><li>Medic Bullets: Healing from heroes increased from 25 to 30</li><li>Enchanter&#x27;s Barrier: Shield increased from 275 to 300</li><li>Shifting Shroud: Renamed to Ethereal Shift</li><li>Richochet: Ammo increased from +25% to +30%</li></ul>
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
<ul><li>Base health regen reduced from 2 to 1</li></ul>
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
<ul><li>Infernal Resilience T1 reduced from +2 HP Regen to +1.5</li></ul>
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
	r(p, 1, `ability sticky-bomb`);
	var ue = i(p);
	n(
		ue,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
`
	);
	var de = a(ue, 2),
		fe = i(de),
		pe = i(fe);
	n(pe, () => `Sticky Bomb base damage reduced from 130 to 120`);
	var me = a(pe, 2);
	(s(me, {
		kind: `hero`,
		name: `Bebop`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Sticky Bomb base damage reduced from 130 to 120`
	}),
		t(fe),
		t(de));
	var he = a(de, 2);
	(o(he, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(p));
	var m = a(p, 2);
	r(m, 1, `ability grapple-arm`);
	var ge = i(m);
	n(
		ge,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>
<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>
<ul><li>Hook grab radius reduced from 40 inches to 36</li></ul>
`
	);
	var _e = a(ge, 2);
	(o(_e, { kind: `hero`, name: `Bebop`, ability: `Grapple Arm` }), t(m));
	var h = a(m, 2);
	r(h, 1, `ability hyper-beam`);
	var ve = i(h);
	n(
		ve,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam movement and dash slow increased from 30% to 40%</li></ul>
`
	);
	var ye = a(ve, 2);
	(o(ye, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), t(h));
	var g = a(h, 2);
	r(g, 1, `ability hyper-beam-dps`);
	var be = i(g);
	n(
		be,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam DPS change history</a></p>
<h4 id="hyper-beam-dps"><a href="/ability/hyper-beam">Hyper Beam DPS</a></h4>
<ul><li>Hyper Beam DPS increased from 210 to 220</li></ul>
`
	);
	var xe = a(be, 2);
	(o(xe, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam DPS` }), t(g));
	var Se = a(g, 2);
	r(Se, 1, `ability hyper-beam`);
	var Ce = i(Se);
	n(
		Ce,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam-1"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam tracking speed increased by 10%</li></ul>
`
	);
	var we = a(Ce, 2);
	(o(we, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), t(Se), t(f));
	var _ = a(f, 2);
	r(_, 1, `hero dynamo`);
	var Te = i(_);
	n(
		Te,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var Ee = a(Te, 2);
	r(Ee, 1, `ability singularity`);
	var De = i(Ee);
	n(
		De,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
`
	);
	var Oe = a(De, 2),
		ke = i(Oe),
		Ae = i(ke);
	n(Ae, () => `Singularity radius reduced from 10m to 9m`);
	var je = a(Ae, 2);
	(s(je, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Singularity radius reduced from 10m to 9m`
	}),
		t(ke),
		t(Oe));
	var Me = a(Oe, 2);
	(o(Me, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), t(Ee), t(_));
	var v = a(_, 2);
	r(v, 1, `hero grey-talon`);
	var Ne = i(v);
	n(
		Ne,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var Pe = a(Ne, 2);
	r(Pe, 1, `ability guided-owl`);
	var Fe = i(Pe);
	n(
		Fe,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
`
	);
	var Ie = a(Fe, 2),
		Le = i(Ie),
		Re = i(Le);
	n(Re, () => `Guided Owl cooldown reduced from 130s to 120s`);
	var ze = a(Re, 2);
	(s(ze, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Guided Owl cooldown reduced from 130s to 120s`
	}),
		t(Le),
		t(Ie));
	var Be = a(Ie, 2);
	(o(Be, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), t(Pe), t(v));
	var y = a(v, 2);
	r(y, 1, `hero haze`);
	var Ve = i(y);
	n(
		Ve,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var b = a(Ve, 2);
	r(b, 1, `ability sleep-dagger`);
	var He = i(b);
	n(
		He,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger damage Spirit growth increased from 2.5 to 2.8</li><li>Sleep Dagger T3 is now -12% Bullet Resistance for 6 seconds</li></ul>
`
	);
	var Ue = a(He, 2);
	(o(Ue, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(b));
	var We = a(b, 2);
	r(We, 1, `ability smoke-bomb`);
	var Ge = i(We);
	n(
		Ge,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb T1 increased from +4 m/s Invis Sprint Speed to +5</li><li>Smoke Bomb causes your footsteps to be silent</li></ul>
`
	);
	var Ke = a(Ge, 2);
	(o(Ke, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), t(We), t(y));
	var x = a(y, 2);
	r(x, 1, `hero ivy`);
	var qe = i(x);
	n(
		qe,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var S = a(qe, 2);
	r(S, 1, `ability kudzu-connection`);
	var Je = i(S);
	n(
		Je,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>
<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>
<ul><li>Watcher&#x27;s Covenant replicated healing reduced from 55% to 45%</li></ul>
`
	);
	var Ye = a(Je, 2);
	(o(Ye, { kind: `hero`, name: `Ivy`, ability: `Kudzu Connection` }), t(S));
	var C = a(S, 2);
	r(C, 1, `ability watcher-s-covenant`);
	var Xe = i(C);
	n(
		Xe,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>
<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>
<ul><li>Watcher&#x27;s Covenant no longer provides +2 m/s in the base ability</li><li>Watcher&#x27;s Covenant T2 movement bonus increased from +2 m/s to +3</li></ul>
`
	);
	var Ze = a(Xe, 2);
	(o(Ze, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant` }), t(C), t(x));
	var w = a(x, 2);
	r(w, 1, `hero kelvin`);
	var Qe = i(w);
	n(
		Qe,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var $e = a(Qe, 2);
	r($e, 1, `ability frozen-shelter`);
	var et = i($e);
	n(
		et,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
<ul><li>Frozen Shelter movement speed slow increased from 25% to 35%</li><li>Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam)</li></ul>
`
	);
	var tt = a(et, 2);
	(o(tt, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), t($e), t(w));
	var T = a(w, 2);
	r(T, 1, `hero lash`);
	var nt = i(T);
	n(
		nt,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var rt = a(nt, 2);
	r(rt, 1, `ability ground-strike`);
	var it = i(rt);
	n(
		it,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
`
	);
	var at = a(it, 2),
		ot = i(at),
		st = i(ot);
	n(st, () => `Ground Strike base damage reduced from 110 to 90`);
	var ct = a(st, 2);
	(s(ct, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Ground Strike base damage reduced from 110 to 90`
	}),
		t(ot));
	var lt = a(ot, 2);
	(n(lt, () => `Ground Strike damage per meter increased from 6 to 6.75`, !0), t(lt));
	var ut = a(lt, 2);
	(n(ut, () => `Ground Strike now reduced scaling after 25m height to 4.5`, !0),
		t(ut),
		t(at));
	var dt = a(at, 2);
	(o(dt, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(rt), t(T));
	var E = a(T, 2);
	r(E, 1, `hero mcginnis`);
	var ft = i(E);
	n(
		ft,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var D = a(ft, 2);
	r(D, 1, `ability mini-turret`);
	var pt = i(D);
	n(
		pt,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>
<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>
<ul><li>Mini Turret charge delay reduced from 10s to 8s</li></ul>
`
	);
	var mt = a(pt, 2);
	(o(mt, { kind: `hero`, name: `McGinnis`, ability: `Mini Turret` }), t(D));
	var ht = a(D, 2);
	r(ht, 1, `ability spectral-wall`);
	var gt = i(ht);
	n(
		gt,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Fixed Echo Shard to be compatible with Spectral Wall again (Activating echo shard resets the ability so you can cast it again and not have to cancel your first one. After casting the 2nd, using cancel will remove the first wall first)</li><li>Can now dismiss Spectral Wall while channeling other abilities (Heavy Barrage)</li></ul>
`
	);
	var _t = a(gt, 2);
	(o(_t, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), t(ht), t(E));
	var O = a(E, 2);
	r(O, 1, `hero mo-krill`);
	var vt = i(O);
	n(
		vt,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
<ul><li>HP Growth per boon reduced from 48 to 42</li></ul>
`
	);
	var yt = a(vt, 2);
	r(yt, 1, `ability combo`);
	var bt = i(yt);
	n(
		bt,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Combo now grants 25 max hp each time a target dies during it</li></ul>
`
	);
	var xt = a(bt, 2);
	(o(xt, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), t(yt), t(O));
	var k = a(O, 2);
	r(k, 1, `hero seven`);
	var St = i(k);
	n(
		St,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var Ct = a(St, 2);
	r(Ct, 1, `ability storm-cloud`);
	var wt = i(Ct);
	n(
		wt,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud initial radius increased from 10m to 12m</li><li>Storm Cloud T2 bonus radius reduced from 12m to 10m</li></ul>
`
	);
	var Tt = a(wt, 2);
	(o(Tt, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(Ct), t(k));
	var A = a(k, 2);
	r(A, 1, `hero yamato`);
	var Et = i(A);
	n(
		Et,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var j = a(Et, 2);
	r(j, 1, `ability power-slash`);
	var Dt = i(j);
	n(
		Dt,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>
<ul><li>Power Slash T3 bonus damage reduced from +210 to +200</li></ul>
`
	);
	var Ot = a(Dt, 2);
	(o(Ot, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), t(j));
	var kt = a(j, 2);
	r(kt, 1, `ability shadow-transformation`);
	var At = i(kt);
	n(
		At,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
`
	);
	var jt = a(At, 2),
		Mt = i(jt),
		Nt = i(Mt);
	n(Nt, () => `Shadow Transformation cooldown increased from 100 to 110`);
	var Pt = a(Nt, 2);
	(s(Pt, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Shadow Transformation cooldown increased from 100 to 110`
	}),
		t(Mt),
		t(jt));
	var Ft = a(jt, 2);
	(o(Ft, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		t(kt),
		t(A));
	var It = a(A, 2);
	n(
		It,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Lt = a(It, 2);
	re(Lt, {});
	var M = a(Lt, 2);
	r(M, 1, `item alchemical-fire`);
	var Rt = i(M);
	n(
		Rt,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
`
	);
	var zt = a(Rt, 2),
		Bt = i(zt),
		Vt = i(Bt);
	n(Vt, () => `Cooldown reduced from 34s to 30s`);
	var Ht = a(Vt, 2);
	(s(Ht, {
		kind: `item`,
		name: `Alchemical Fire`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 34s to 30s`
	}),
		t(Bt),
		t(zt));
	var Ut = a(zt, 2);
	(o(Ut, { kind: `item`, name: `Alchemical Fire`, ability: null }), t(M));
	var N = a(M, 2);
	r(N, 1, `item boundless-spirit`);
	var Wt = i(N);
	n(
		Wt,
		() => `
<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>
<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>
<ul><li>Spirit Power increased from +50 to +55</li><li>Now grants +175 Health</li></ul>
`
	);
	var Gt = a(Wt, 2);
	(o(Gt, { kind: `item`, name: `Boundless Spirit`, ability: null }), t(N));
	var P = a(N, 2);
	r(P, 1, `item bullet-resist-shredder`);
	var Kt = i(P);
	n(
		Kt,
		() => `
<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>
<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>
<ul><li>Debuff duration increased from 4s to 5s</li></ul>
`
	);
	var qt = a(Kt, 2);
	(o(qt, { kind: `item`, name: `Bullet Resist Shredder`, ability: null }), t(P));
	var F = a(P, 2);
	r(F, 1, `item burst-fire`);
	var Jt = i(F);
	n(
		Jt,
		() => `
<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>
<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>
`
	);
	var Yt = a(Jt, 2),
		Xt = i(Yt),
		Zt = i(Xt);
	n(Zt, () => `Cooldown reduced from 10s to 9s`);
	var Qt = a(Zt, 2);
	(s(Qt, {
		kind: `item`,
		name: `Burst Fire`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 10s to 9s`
	}),
		t(Xt),
		t(Yt));
	var $t = a(Yt, 2);
	(o($t, { kind: `item`, name: `Burst Fire`, ability: null }), t(F));
	var I = a(F, 2);
	r(I, 1, `item cold-front`);
	var en = i(I);
	n(
		en,
		() => `
<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>
<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>
<ul><li>Time to expand reduced from 1.5s to 0.75s</li></ul>
`
	);
	var tn = a(en, 2);
	(o(tn, { kind: `item`, name: `Cold Front`, ability: null }), t(I));
	var L = a(I, 2);
	r(L, 1, `item crippling-headshot`);
	var nn = i(L);
	n(
		nn,
		() => `
<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>
<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>
<ul><li>Bullet and Spirit resistance reduction reduced from 35% to 30%</li></ul>
`
	);
	var rn = a(nn, 2);
	(o(rn, { kind: `item`, name: `Crippling Headshot`, ability: null }), t(L));
	var R = a(L, 2);
	r(R, 1, `item divine-barrier`);
	var an = i(R);
	n(
		an,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
`
	);
	var on = a(an, 2),
		sn = i(on);
	(n(sn, () => `No longer grants +2 Sprint`, !0), t(sn));
	var cn = a(sn, 2);
	(n(cn, () => `Bullet Resist reduced from 10% to 7%`, !0), t(cn));
	var ln = a(cn, 2),
		un = i(ln);
	n(un, () => `Cooldown increased from 20 to 30`);
	var dn = a(un, 2);
	(s(dn, {
		kind: `item`,
		name: `Divine Barrier`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown increased from 20 to 30`
	}),
		t(ln));
	var fn = a(ln, 2);
	(n(fn, () => `Active Move Speed reduced from 3 to 2`, !0), t(fn), t(on));
	var pn = a(on, 2);
	(o(pn, { kind: `item`, name: `Divine Barrier`, ability: null }), t(R));
	var z = a(R, 2);
	r(z, 1, `item escalating-resilience`);
	var mn = i(z);
	n(
		mn,
		() => `
<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>
<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>
<ul><li>Stacks share a duration now and each new stack refreshes it</li><li>Duration reduced from 15s to 10s</li><li>Max resistance reduced from 36% to 30%</li></ul>
`
	);
	var hn = a(mn, 2);
	(o(hn, { kind: `item`, name: `Escalating Resilience`, ability: null }), t(z));
	var B = a(z, 2);
	r(B, 1, `item extra-health`);
	var gn = i(B);
	n(
		gn,
		() => `
<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>
<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>
<ul><li>Health increased from 125 to 135</li></ul>
`
	);
	var _n = a(gn, 2);
	(o(_n, { kind: `item`, name: `Extra Health`, ability: null }), t(B));
	var V = a(B, 2);
	r(V, 1, `item fleetfoot`);
	var vn = i(V);
	n(
		vn,
		() => `
<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>
<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>
`
	);
	var yn = a(vn, 2),
		bn = i(yn),
		xn = i(bn);
	n(xn, () => `Cooldown increased from 20s to 22s`);
	var Sn = a(xn, 2);
	(s(Sn, {
		kind: `item`,
		name: `Fleetfoot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 20s to 22s`
	}),
		t(bn),
		t(yn));
	var Cn = a(yn, 2);
	(o(Cn, { kind: `item`, name: `Fleetfoot`, ability: null }), t(V));
	var H = a(V, 2);
	r(H, 1, `item headshot-booster`);
	var wn = i(H);
	n(
		wn,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
<ul><li>Bonus headshot damage reduced from 50 to 45</li></ul>
`
	);
	var Tn = a(wn, 2);
	(o(Tn, { kind: `item`, name: `Headshot Booster`, ability: null }), t(H));
	var U = a(H, 2);
	r(U, 1, `item healbane`);
	var En = i(U);
	n(
		En,
		() => `
<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>
<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>
<ul><li>Bonus HP increased from 50 to 75</li></ul>
`
	);
	var Dn = a(En, 2);
	(o(Dn, { kind: `item`, name: `Healbane`, ability: null }), t(U));
	var W = a(U, 2);
	r(W, 1, `item healing-booster`);
	var On = i(W);
	n(
		On,
		() => `
<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>
<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>
<ul><li>No longer grants +50 HP</li><li>Now grants +8% Spirit Resist</li></ul>
`
	);
	var kn = a(On, 2);
	(o(kn, { kind: `item`, name: `Healing Booster`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item majestic-leap`);
	var An = i(G);
	n(
		An,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
`
	);
	var jn = a(An, 2),
		Mn = i(jn),
		Nn = i(Mn);
	n(Nn, () => `Cooldown increased from 15s to 20s`);
	var Pn = a(Nn, 2);
	(s(Pn, {
		kind: `item`,
		name: `Majestic Leap`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 15s to 20s`
	}),
		t(Mn));
	var Fn = a(Mn, 2);
	(n(Fn, () => `Drop down speed reduced from 51 to 36`, !0), t(Fn), t(jn));
	var In = a(jn, 2);
	(o(In, { kind: `item`, name: `Majestic Leap`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item mystic-burst`);
	var Ln = i(K);
	n(
		Ln,
		() => `
<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>
<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>
<ul><li>No longer grants +3 Spirit Power</li><li>No longer grants +1 Sprint</li><li>Now grants +40 Spirit Shield</li><li>Now grants +6% Weapon Power</li></ul>
`
	);
	var Rn = a(Ln, 2);
	(o(Rn, { kind: `item`, name: `Mystic Burst`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item mystic-slow`);
	var zn = i(q);
	n(
		zn,
		() => `
<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>
<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>
<ul><li>Bonus HP increased from +75 to +100</li></ul>
`
	);
	var Bn = a(zn, 2);
	(o(Bn, { kind: `item`, name: `Mystic Slow`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item reactive-barrier`);
	var Vn = i(J);
	n(
		Vn,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
`
	);
	var Hn = a(Vn, 2),
		Un = i(Hn),
		Wn = i(Un);
	n(Wn, () => `Cooldown reduced from 25s to 20s`);
	var Gn = a(Wn, 2);
	(s(Gn, {
		kind: `item`,
		name: `Reactive Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 25s to 20s`
	}),
		t(Un),
		t(Hn));
	var Kn = a(Hn, 2);
	(o(Kn, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item refresher`);
	var qn = i(Y);
	n(
		qn,
		() => `
<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>
<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>
<ul><li>Now has a 0.3s cast time</li></ul>
`
	);
	var Jn = a(qn, 2);
	(o(Jn, { kind: `item`, name: `Refresher`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item rescue-beam`);
	var Yn = i(X);
	n(
		Yn,
		() => `
<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>
<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>
<ul><li>No longer grants movement speed</li><li>Active has been reworked. Now channels for 3 seconds, healing you and the target for up to 25% of Max HP. If you click the ally again during that time, you will pull them to you. Has 40m cast range and 45s cooldown. Can be self cast.</li></ul>
`
	);
	var Xn = a(Yn, 2);
	(o(Xn, { kind: `item`, name: `Rescue Beam`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item swift-striker`);
	var Zn = i(Z);
	n(
		Zn,
		() => `
<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>
<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>
<ul><li>Armor penalty reduced from -7% to -6%</li></ul>
`
	);
	var Qn = a(Zn, 2);
	(o(Qn, { kind: `item`, name: `Swift Striker`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item tesla-bullets`);
	var $n = i(Q);
	n(
		$n,
		() => `
<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>
<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>
<ul><li>Internal cooldown reduced from 0.4s to 0.35s</li></ul>
`
	);
	var er = a($n, 2);
	(o(er, { kind: `item`, name: `Tesla Bullets`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item vampiric-burst`);
	var tr = i($);
	n(
		tr,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
<ul><li>Lifesteal increased from 70% to 80%</li></ul>
`
	);
	var nr = a(tr, 2);
	(o(nr, { kind: `item`, name: `Vampiric Burst`, ability: null }), t($));
	var rr = a($, 2);
	r(rr, 1, `item warp-stone`);
	var ir = i(rr);
	n(
		ir,
		() => `
<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>
<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>
<ul><li>Fixed some cases where it would fail to cast near objects</li></ul>
`
	);
	var ar = a(ir, 2);
	(o(ar, { kind: `item`, name: `Warp Stone`, ability: null }), t(rr), ee(e, c));
}
export { oe as default, ie as metadata, u as readingManifest, l as toc };
