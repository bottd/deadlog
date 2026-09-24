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
			`Haze`,
			`Infernus`,
			`Ivy`,
			`Kelvin`,
			`McGinnis`,
			`Pocket`,
			`Seven`,
			`Vindicta`,
			`Warden`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Boundless Spirit`,
			`Cold Front`,
			`Enduring Spirit`,
			`Extra Regen`,
			`Intensifying Magazine`,
			`Knockdown`,
			`Leech`,
			`Majestic Leap`,
			`Mystic Reverb`,
			`Reactive Barrier`,
			`Refresher`,
			`Sharpshooter`,
			`Spirit Lifesteal`,
			`Spiritual Overflow`,
			`Torment Pulse`
		]
	});
}
var ie = {
		title: `06-06-2024 Update`,
		thread_id: `4096`,
		published: `2024-06-06T14:56:14-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted. Replaced the neutral vaults with a new model, the Sinner's Sacrifice Added the ability to change builds while in-game Build descriptions can now be seen in-game via a tooltip Added neutrals to Hero Sandbox (the small room in the back on the right) Added new objective health bars for Guardians and Walkers Added Match History link to the top right You can now move active item slots on the HUD while holding alt/tab Improved visibility of the voice icon indicating who is talking Hero icons on the minimap are scaled up a little when holding alt Removed Pause cooldown in private bot matches and tutorial/sandbox Improved networking when there is packet loss or jitter Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside Improved Grey Talon's trap visibility Increased the speed of Guardian's melee attacks Changed Guardian's behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot Infernus's Afterburn now shows portraits of enemies that are burning for the full duration Improved menu UI sound feedback Player's icon is highlighted in the top bar Added UI sound effects for team and opponent deaths Added Kinetic Carbine charge audio loop Updated Vindicta Flight sound effects Added Vindicta Assassinate sound effect for targeted players Improved visuals for Kelvin's gun projectile Fixed some visual issues with Ice Path Added AoE effect to Pocket's Barrage Updated weapon buff effect in Pocket's Flying Cloak upgrade Visual effects updates for melee lifesteal items Fixed Power Slash sometimes getting stuck on nearby geometry Updated sound effects for the Sinner's Sacrifice Updated Pocket's Enchanted Satchel delay and explode sounds Updated Pocket's Barrage cast and impact sounds Updated Warden's Binding Word delay and impact sounds Fixed Dynamo's Quantum Entanglement going through ceilings sometimes Fixed an HTML exploit with chat Fixed not being able to place deployable abilities at certain angles Fixed moving active item slots causing the player to say "[ITEM] is on cooldown" Fixed training Ivy's True Form causing you to get healed Fixed a bug with Malice firing slightly upward Changed collision on barrel stand stacks to block bullets Added zapper on factory outpost building Removed roof duct on top of low building besides inner Walker Removed street lamp post that was causing heroes to get stuck near inner lane Guardian Added lights to outer lane Cosmic Veil tunnels More heroes will now compliment on good uses of ultimates instead of just saying "good work" Fixed more instances of heroes being called out by the wrong name Base hero kill value increased from 150 to 225 Rejuv duration reduced from 4 to 3 minutes Rejuv buff no longer increases your ammo Rejuv now causes all your candle troopers to have double health for 3 minutes Mid Boss can now only be damaged by enemies inside the bottom pit Mid Boss Rejuv claim time reduced from 2.5s to 1.5s Strong neutrals HP reduced by 20% Strong neutrals souls bounty reduced by 20% 4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals Vaults souls increased from 260 to 300 Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16 Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20% Bullet damage falloff now maxes out at ~65m instead of ~70m Walker bomb damage reduced from 300 to 200 Moved the middle lane Base Guardians further out slightly Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit. Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s Mid boss area has reduced destructibles Movement Speed powerup duration increased from 12s to 30s Movement Speed powerup movespeed reduced from 2 to 1 Movement Speed powerup sprint speed increased from 2 to 4 Fire Rate powerup reduced from +20% to +15% Fire Rate powerup duration increased from 25s to 35s Health Regen powerup regen reduced from 1.5% to 1% Health Regen powerup duration increased from 15s to 25s Cooldown Reduction powerup reduced from 25% to 20% Extra Clip powerup reduced from 4 clips to 3 Extra Stamina powerup duration increased from 60s to 80s Extra Stamina powerup amount reduced from 2 to 1 Crouch movespeed increased from 4 to 4.75 Bullet Shields now block damage from melee (similar to resistance) Increased the distance heroes slide when they come to the bottom of a ramp Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now) Healbane moved from Spirit tree to Vitality tree Healbane now gives +50 Health Soul Shredder Bullets: Spirit Amp reduced from +12% to +10% Improved Cooldown: HP Regen reduced from 2 to 1.5 Shifting Shroud: Cooldown reduced from 45s to 35s Shifting Shroud: Bonus spirit duration increased from 6s to 10s Metal Skin duration reduced from 4s to 3s Metal Skin cooldown increased from 25s to 30s Curse: No longer prevents stamina usage Curse: Now also prevents item usage Curse: Duration reduced from 3.75s to 3.5s Diviner's Kelvar: Bullet Shield increased from 700 to 1000 Abrams Base HP growth reduced from 36 to 32 Infernal Resilience T2 reduced from +200 Health to +150 Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s Bebop Hyper Beam slow now affects stamina dashes Dynamo Base HP growth reduced from 48 to 44 Quantum Entanglement fire rate bonus reduced from +30% to +25% Singularity base radius increased from 8m to 10m Haze Sleep Dagger T3 damage reduction on target improved from -30% to -40% Smoke Bomb sprint speed now instantly kicks in after casting it Bullet Dance cooldown reduced from 160s to 130s Bullet Dance T2 changed to -40s Cooldown Bullet Dance T3 changed to +1 Targets Hit Per Shot Infernus Flame Dash cooldown increased from 30s to 38s Ivy Watcher's Covenant heal sharing reduced from 65% to 55% Kelvin Ice Path sprint speed increased from +1 to +2 Ice Path trail duration increased from 12s to 15s Frozen Shelter T2 changed to -40s Cooldown Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit Frozen Shelter can now be dismissed early McGinnis Spectral Wall can now be dismissed early Pocket Barrage channel can now be interrupted by casting your other abilities Barrage radius increased from 6m to 6.5m Enchanted Satchel cast time reduced from 0.25s to 0.15s Seven Storm Cloud T1 increased from +30% to +35% Bullet Resist Vindicta Flight spirit bonus damage reduced from +12 to +10 Flight no longer has +10% bonus range to damage falloff Flight cooldown increased from 35s to 50s Flight T2 changed from +12 Spirit Damage to -15s Cooldown Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage Can no longer melee while flying for extra movement Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this) Fixed being unable to move while scoped in with Assassinate Warden Base ammo increased from 14 to 16 Alchemical Flask T3 increased from +25% Fire Rate Slow to +35% Willpower T3 increased from +150 Spirit Shield to +200 Extra Regen Regen increased from 1.75 to 2 Enduring Spirit Spirit Lifesteal reduced from +10% to +8% Reactive Barrier Cooldown reduced from 35s to 25s Spirit Lifesteal Reduced from +25% to +23% Cold Front cooldown reduced from 40s to 32s Knockdown No longer provides +2 Sprint Now provides +1 Stamina Sharpshooter Damage falloff bonus reduced from 20% to 15% Intensifying Magazine Time for Max Damage reduced from 4s to 3.5s Torment Pulse Interval improved from 2s to 1.5s Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6) HP bonus reduced from +150 to +125 Majestic Leap Velocity increased from 22.5 to 27 Leech Spirit Lifesteal reduced from +35% to +33% Refresher No longer has cast time (was 1s) Mystic Reverb Fixed the damage being reduced by armor twice Damage reduced from 35% to 30% Boundless Spirit Spirit increased from 45 to 50 Spiritual Overflow Spirit duration increased from 14s to 18s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-02`, to: `2024-06-06` },
			after: { from: null, to: null }
		}
	},
	ae = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Watcher's Covenant`, id: `watcher-s-covenant` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Ice Path`, id: `ice-path` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Barrage`, id: `barrage` },
		{ level: 3, title: `Enchanter's Satchel`, id: `enchanter-s-satchel` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Can`, id: `can` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Alchemical Flask`, id: `alchemical-flask` },
		{ level: 3, title: `Willpower`, id: `willpower` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Boundless Spirit`, id: `boundless-spirit` },
		{ level: 2, title: `Cold Front`, id: `cold-front` },
		{ level: 2, title: `Enduring Spirit`, id: `enduring-spirit` },
		{ level: 2, title: `Extra Regen`, id: `extra-regen` },
		{ level: 2, title: `Intensifying Magazine`, id: `intensifying-magazine` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Mystic Reverb`, id: `mystic-reverb` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Refresher`, id: `refresher` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Spirit Lifesteal`, id: `spirit-lifesteal` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Torment Pulse`, id: `torment-pulse` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-06-02`, to: `2024-06-06` },
			after: null,
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `item`, name: `Boundless Spirit`, id: `boundless-spirit` },
			{ kind: `item`, name: `Cold Front`, id: `cold-front` },
			{ kind: `item`, name: `Enduring Spirit`, id: `enduring-spirit` },
			{ kind: `item`, name: `Extra Regen`, id: `extra-regen` },
			{ kind: `item`, name: `Intensifying Magazine`, id: `intensifying-magazine` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Mystic Reverb`, id: `mystic-reverb` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Refresher`, id: `refresher` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Spirit Lifesteal`, id: `spirit-lifesteal` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Torment Pulse`, id: `torment-pulse` }
		],
		related: []
	},
	oe = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function u(e) {
	var c = oe(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted.</li><li>Replaced the neutral vaults with a new model, the Sinner&#x27;s Sacrifice</li><li>Added the ability to change builds while in-game</li><li>Build descriptions can now be seen in-game via a tooltip</li><li>Added neutrals to Hero Sandbox (the small room in the back on the right)</li><li>Added new objective health bars for Guardians and Walkers</li><li>Added Match History link to the top right</li><li>You can now move active item slots on the HUD while holding alt/tab</li><li>Improved visibility of the voice icon indicating who is talking</li><li>Hero icons on the minimap are scaled up a little when holding alt</li><li>Removed Pause cooldown in private bot matches and tutorial/sandbox</li><li>Improved networking when there is packet loss or jitter</li><li>Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside</li><li>Improved Grey Talon&#x27;s trap visibility</li><li>Increased the speed of Guardian&#x27;s melee attacks</li><li>Changed Guardian&#x27;s behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range</li><li>Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot</li><li>Infernus&#x27;s Afterburn now shows portraits of enemies that are burning for the full duration</li><li>Improved menu UI sound feedback</li><li>Player&#x27;s icon is highlighted in the top bar</li><li>Added UI sound effects for team and opponent deaths</li><li>Added Kinetic Carbine charge audio loop</li><li>Updated Vindicta Flight sound effects</li><li>Added Vindicta Assassinate sound effect for targeted players</li><li>Improved visuals for Kelvin&#x27;s gun projectile</li><li>Fixed some visual issues with Ice Path</li><li>Added AoE effect to Pocket&#x27;s Barrage</li><li>Updated weapon buff effect in Pocket&#x27;s Flying Cloak upgrade</li><li>Visual effects updates for melee lifesteal items</li><li>Fixed Power Slash sometimes getting stuck on nearby geometry</li><li>Updated sound effects for the Sinner&#x27;s Sacrifice</li><li>Updated Pocket&#x27;s Enchanted Satchel delay and explode sounds</li><li>Updated Pocket&#x27;s Barrage cast and impact sounds</li><li>Updated Warden&#x27;s Binding Word delay and impact sounds</li><li>Fixed Dynamo&#x27;s Quantum Entanglement going through ceilings sometimes</li><li>Fixed an HTML exploit with chat</li><li>Fixed not being able to place deployable abilities at certain angles</li><li>Fixed moving active item slots causing the player to say &quot;[ITEM] is on cooldown&quot;</li><li>Fixed training Ivy&#x27;s True Form causing you to get healed</li><li>Fixed a bug with Malice firing slightly upward</li><li>Changed collision on barrel stand stacks to block bullets</li><li>Added zapper on factory outpost building</li><li>Removed roof duct on top of low building besides inner Walker</li><li>Removed street lamp post that was causing heroes to get stuck near inner lane Guardian</li><li>Added lights to outer lane Cosmic Veil tunnels</li><li>More heroes will now compliment on good uses of ultimates instead of just saying &quot;good work&quot;</li><li>Fixed more instances of heroes being called out by the wrong name</li><li>Base hero kill value increased from 150 to 225</li><li>Rejuv duration reduced from 4 to 3 minutes</li><li>Rejuv buff no longer increases your ammo</li><li>Rejuv now causes all your candle troopers to have double health for 3 minutes</li><li>Mid Boss can now only be damaged by enemies inside the bottom pit</li><li>Mid Boss Rejuv claim time reduced from 2.5s to 1.5s</li><li>Strong neutrals HP reduced by 20%</li><li>Strong neutrals souls bounty reduced by 20%</li><li>4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals</li><li>Vaults souls increased from 260 to 300</li><li>Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16</li><li>Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20%</li><li>Bullet damage falloff now maxes out at ~65m instead of ~70m</li><li>Walker bomb damage reduced from 300 to 200</li><li>Moved the middle lane Base Guardians further out slightly</li><li>Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit.</li><li>Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s</li><li>Mid boss area has reduced destructibles</li><li>Movement Speed powerup duration increased from 12s to 30s</li><li>Movement Speed powerup movespeed reduced from 2 to 1</li><li>Movement Speed powerup sprint speed increased from 2 to 4</li><li>Fire Rate powerup reduced from +20% to +15%</li><li>Fire Rate powerup duration increased from 25s to 35s</li><li>Health Regen powerup regen reduced from 1.5% to 1%</li><li>Health Regen powerup duration increased from 15s to 25s</li><li>Cooldown Reduction powerup reduced from 25% to 20%</li><li>Extra Clip powerup reduced from 4 clips to 3</li><li>Extra Stamina powerup duration increased from 60s to 80s</li><li>Extra Stamina powerup amount reduced from 2 to 1</li><li>Crouch movespeed increased from 4 to 4.75</li><li>Bullet Shields now block damage from melee (similar to resistance)</li><li>Increased the distance heroes slide when they come to the bottom of a ramp</li><li>Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now)</li><li>Healbane moved from Spirit tree to Vitality tree</li><li>Healbane now gives +50 Health</li><li>Soul Shredder Bullets: Spirit Amp reduced from +12% to +10%</li><li>Improved Cooldown: HP Regen reduced from 2 to 1.5</li><li>Shifting Shroud: Cooldown reduced from 45s to 35s</li><li>Shifting Shroud: Bonus spirit duration increased from 6s to 10s</li><li>Metal Skin duration reduced from 4s to 3s</li><li>Metal Skin cooldown increased from 25s to 30s</li><li>Curse: No longer prevents stamina usage</li><li>Curse: Now also prevents item usage</li><li>Curse: Duration reduced from 3.75s to 3.5s</li><li>Diviner&#x27;s Kelvar: Bullet Shield increased from 700 to 1000</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var ae = a(ie, 2);
	ne(ae, {});
	var l = a(ae, 2);
	r(l, 1, `hero abrams`);
	var u = i(l);
	n(
		u,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
<ul><li>Base HP growth reduced from 36 to 32</li></ul>
`
	);
	var d = a(u, 2);
	r(d, 1, `ability infernal-resilience`);
	var se = i(d);
	n(
		se,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience T2 reduced from +200 Health to +150</li></ul>
`
	);
	var ce = a(se, 2);
	(o(ce, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), t(d));
	var le = a(d, 2);
	r(le, 1, `ability seismic-impact`);
	var ue = i(le);
	n(
		ue,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s</li></ul>
`
	);
	var de = a(ue, 2);
	(o(de, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), t(le), t(l));
	var f = a(l, 2);
	r(f, 1, `hero bebop`);
	var fe = i(f);
	n(
		fe,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var pe = a(fe, 2);
	r(pe, 1, `ability hyper-beam`);
	var me = i(pe);
	n(
		me,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam slow now affects stamina dashes</li></ul>
`
	);
	var he = a(me, 2);
	(o(he, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), t(pe), t(f));
	var p = a(f, 2);
	r(p, 1, `hero dynamo`);
	var ge = i(p);
	n(
		ge,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
<ul><li>Base HP growth reduced from 48 to 44</li></ul>
`
	);
	var m = a(ge, 2);
	r(m, 1, `ability quantum-entanglement`);
	var _e = i(m);
	n(
		_e,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Quantum Entanglement fire rate bonus reduced from +30% to +25%</li></ul>
`
	);
	var ve = a(_e, 2);
	(o(ve, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), t(m));
	var ye = a(m, 2);
	r(ye, 1, `ability singularity`);
	var be = i(ye);
	n(
		be,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
`
	);
	var xe = a(be, 2),
		Se = i(xe),
		Ce = i(Se);
	n(Ce, () => `Singularity base radius increased from 8m to 10m`);
	var we = a(Ce, 2);
	(s(we, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Singularity base radius increased from 8m to 10m`
	}),
		t(Se),
		t(xe));
	var Te = a(xe, 2);
	(o(Te, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), t(ye), t(p));
	var h = a(p, 2);
	r(h, 1, `hero haze`);
	var Ee = i(h);
	n(
		Ee,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var g = a(Ee, 2);
	r(g, 1, `ability sleep-dagger`);
	var De = i(g);
	n(
		De,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger T3 damage reduction on target improved from -30% to -40%</li></ul>
`
	);
	var Oe = a(De, 2);
	(o(Oe, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(g));
	var _ = a(g, 2);
	r(_, 1, `ability smoke-bomb`);
	var ke = i(_);
	n(
		ke,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb sprint speed now instantly kicks in after casting it</li></ul>
`
	);
	var Ae = a(ke, 2);
	(o(Ae, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), t(_));
	var je = a(_, 2);
	r(je, 1, `ability bullet-dance`);
	var Me = i(je);
	n(
		Me,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
`
	);
	var Ne = a(Me, 2),
		v = i(Ne),
		Pe = i(v);
	n(Pe, () => `Bullet Dance cooldown reduced from 160s to 130s`);
	var Fe = a(Pe, 2);
	(s(Fe, {
		kind: `hero`,
		name: `Haze`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Bullet Dance cooldown reduced from 160s to 130s`
	}),
		t(v));
	var y = a(v, 2);
	(n(y, () => `Bullet Dance T2 changed to -40s Cooldown`, !0), t(y));
	var Ie = a(y, 2);
	(n(Ie, () => `Bullet Dance T3 changed to +1 Targets Hit Per Shot`, !0), t(Ie), t(Ne));
	var Le = a(Ne, 2);
	(o(Le, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(je), t(h));
	var b = a(h, 2);
	r(b, 1, `hero infernus`);
	var Re = i(b);
	n(
		Re,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var ze = a(Re, 2);
	r(ze, 1, `ability flame-dash`);
	var Be = i(ze);
	n(
		Be,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
`
	);
	var Ve = a(Be, 2),
		He = i(Ve),
		Ue = i(He);
	n(Ue, () => `Flame Dash cooldown increased from 30s to 38s`);
	var We = a(Ue, 2);
	(s(We, {
		kind: `hero`,
		name: `Infernus`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Flame Dash cooldown increased from 30s to 38s`
	}),
		t(He),
		t(Ve));
	var Ge = a(Ve, 2);
	(o(Ge, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), t(ze), t(b));
	var x = a(b, 2);
	r(x, 1, `hero ivy`);
	var Ke = i(x);
	n(
		Ke,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var qe = a(Ke, 2);
	r(qe, 1, `ability watcher-s-covenant`);
	var Je = i(qe);
	n(
		Je,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>
<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>
<ul><li>Watcher&#x27;s Covenant heal sharing reduced from 65% to 55%</li></ul>
`
	);
	var Ye = a(Je, 2);
	(o(Ye, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant` }), t(qe), t(x));
	var S = a(x, 2);
	r(S, 1, `hero kelvin`);
	var Xe = i(S);
	n(
		Xe,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var C = a(Xe, 2);
	r(C, 1, `ability ice-path`);
	var Ze = i(C);
	n(
		Ze,
		() => `
<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>
<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>
<ul><li>Ice Path sprint speed increased from +1 to +2</li><li>Ice Path trail duration increased from 12s to 15s</li></ul>
`
	);
	var Qe = a(Ze, 2);
	(o(Qe, { kind: `hero`, name: `Kelvin`, ability: `Ice Path` }), t(C));
	var $e = a(C, 2);
	r($e, 1, `ability frozen-shelter`);
	var et = i($e);
	n(
		et,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
<ul><li>Frozen Shelter T2 changed to -40s Cooldown</li><li>Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit</li><li>Frozen Shelter can now be dismissed early</li></ul>
`
	);
	var tt = a(et, 2);
	(o(tt, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), t($e), t(S));
	var w = a(S, 2);
	r(w, 1, `hero mcginnis`);
	var nt = i(w);
	n(
		nt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var rt = a(nt, 2);
	r(rt, 1, `ability spectral-wall`);
	var it = i(rt);
	n(
		it,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Spectral Wall can now be dismissed early</li></ul>
`
	);
	var at = a(it, 2);
	(o(at, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), t(rt), t(w));
	var T = a(w, 2);
	r(T, 1, `hero pocket`);
	var ot = i(T);
	n(
		ot,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var E = a(ot, 2);
	r(E, 1, `ability barrage`);
	var st = i(E);
	n(
		st,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>
<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>
`
	);
	var ct = a(st, 2),
		lt = i(ct);
	(n(
		lt,
		() => `Barrage channel can now be interrupted by casting your other abilities`,
		!0
	),
		t(lt));
	var ut = a(lt, 2),
		dt = i(ut);
	n(dt, () => `Barrage radius increased from 6m to 6.5m`);
	var ft = a(dt, 2);
	(s(ft, {
		kind: `hero`,
		name: `Pocket`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Barrage radius increased from 6m to 6.5m`
	}),
		t(ut),
		t(ct));
	var pt = a(ct, 2);
	(o(pt, { kind: `hero`, name: `Pocket`, ability: `Barrage` }), t(E));
	var mt = a(E, 2);
	r(mt, 1, `ability enchanter-s-satchel`);
	var ht = i(mt);
	n(
		ht,
		() => `
<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>
<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>
<ul><li>Enchanted Satchel cast time reduced from 0.25s to 0.15s</li></ul>
`
	);
	var gt = a(ht, 2);
	(o(gt, { kind: `hero`, name: `Pocket`, ability: `Enchanter's Satchel` }), t(mt), t(T));
	var D = a(T, 2);
	r(D, 1, `hero seven`);
	var _t = i(D);
	n(
		_t,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var vt = a(_t, 2);
	r(vt, 1, `ability storm-cloud`);
	var yt = i(vt);
	n(
		yt,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud T1 increased from +30% to +35% Bullet Resist</li></ul>
`
	);
	var bt = a(yt, 2);
	(o(bt, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(vt), t(D));
	var O = a(D, 2);
	r(O, 1, `hero vindicta`);
	var xt = i(O);
	n(
		xt,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
`
	);
	var k = a(xt, 2);
	r(k, 1, `ability flight`);
	var St = i(k);
	n(
		St,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
`
	);
	var A = a(St, 2),
		j = i(A);
	(n(j, () => `Flight spirit bonus damage reduced from +12 to +10`, !0), t(j));
	var M = a(j, 2);
	(n(M, () => `Flight no longer has +10% bonus range to damage falloff`, !0), t(M));
	var N = a(M, 2),
		Ct = i(N);
	n(Ct, () => `Flight cooldown increased from 35s to 50s`);
	var wt = a(Ct, 2);
	(s(wt, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Flight cooldown increased from 35s to 50s`
	}),
		t(N));
	var P = a(N, 2);
	(n(P, () => `Flight T2 changed from +12 Spirit Damage to -15s Cooldown`, !0), t(P));
	var Tt = a(P, 2);
	(n(Tt, () => `Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage`, !0),
		t(Tt),
		t(A));
	var Et = a(A, 2);
	(o(Et, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), t(k));
	var F = a(k, 2);
	r(F, 1, `ability can`);
	var Dt = i(F);
	n(
		Dt,
		() => `
<h4 id="can">Can</h4>
<ul><li>Can no longer melee while flying for extra movement</li></ul>
`
	);
	var Ot = a(Dt, 2);
	(o(Ot, { kind: `hero`, name: `Vindicta`, ability: `Can` }), t(F));
	var I = a(F, 2);
	r(I, 1, `ability assassinate`);
	var kt = i(I);
	n(
		kt,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this)</li><li>Fixed being unable to move while scoped in with Assassinate</li></ul>
`
	);
	var At = a(kt, 2);
	(o(At, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(I), t(O));
	var L = a(O, 2);
	r(L, 1, `hero warden`);
	var jt = i(L);
	n(
		jt,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Base ammo increased from 14 to 16</li></ul>
`
	);
	var R = a(jt, 2);
	r(R, 1, `ability alchemical-flask`);
	var Mt = i(R);
	n(
		Mt,
		() => `
<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>
<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>
<ul><li>Alchemical Flask T3 increased from +25% Fire Rate Slow to +35%</li></ul>
`
	);
	var Nt = a(Mt, 2);
	(o(Nt, { kind: `hero`, name: `Warden`, ability: `Alchemical Flask` }), t(R));
	var Pt = a(R, 2);
	r(Pt, 1, `ability willpower`);
	var Ft = i(Pt);
	n(
		Ft,
		() => `
<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>
<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>
<ul><li>Willpower T3 increased from +150 Spirit Shield to +200</li></ul>
`
	);
	var It = a(Ft, 2);
	(o(It, { kind: `hero`, name: `Warden`, ability: `Willpower` }), t(Pt), t(L));
	var Lt = a(L, 2);
	n(
		Lt,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Rt = a(Lt, 2);
	re(Rt, {});
	var z = a(Rt, 2);
	r(z, 1, `item boundless-spirit`);
	var zt = i(z);
	n(
		zt,
		() => `
<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>
<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>
<ul><li>Spirit increased from 45 to 50</li></ul>
`
	);
	var Bt = a(zt, 2);
	(o(Bt, { kind: `item`, name: `Boundless Spirit`, ability: null }), t(z));
	var B = a(z, 2);
	r(B, 1, `item cold-front`);
	var Vt = i(B);
	n(
		Vt,
		() => `
<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>
<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>
`
	);
	var Ht = a(Vt, 2),
		Ut = i(Ht),
		Wt = i(Ut);
	n(Wt, () => `cooldown reduced from 40s to 32s`);
	var Gt = a(Wt, 2);
	(s(Gt, {
		kind: `item`,
		name: `Cold Front`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `cooldown reduced from 40s to 32s`
	}),
		t(Ut),
		t(Ht));
	var Kt = a(Ht, 2);
	(o(Kt, { kind: `item`, name: `Cold Front`, ability: null }), t(B));
	var V = a(B, 2);
	r(V, 1, `item enduring-spirit`);
	var qt = i(V);
	n(
		qt,
		() => `
<p><a href="/item/enduring-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_armor/resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Spirit patch history</a></p>
<h3 id="enduring-spirit"><a href="/item/enduring-spirit">Enduring Spirit</a></h3>
<ul><li>Spirit Lifesteal reduced from +10% to +8%</li></ul>
`
	);
	var Jt = a(qt, 2);
	(o(Jt, { kind: `item`, name: `Enduring Spirit`, ability: null }), t(V));
	var H = a(V, 2);
	r(H, 1, `item extra-regen`);
	var Yt = i(H);
	n(
		Yt,
		() => `
<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>
<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>
<ul><li>Regen increased from 1.75 to 2</li></ul>
`
	);
	var Xt = a(Yt, 2);
	(o(Xt, { kind: `item`, name: `Extra Regen`, ability: null }), t(H));
	var U = a(H, 2);
	r(U, 1, `item intensifying-magazine`);
	var Zt = i(U);
	n(
		Zt,
		() => `
<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>
<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>
<ul><li>Time for Max Damage reduced from 4s to 3.5s</li></ul>
`
	);
	var Qt = a(Zt, 2);
	(o(Qt, { kind: `item`, name: `Intensifying Magazine`, ability: null }), t(U));
	var W = a(U, 2);
	r(W, 1, `item knockdown`);
	var $t = i(W);
	n(
		$t,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>No longer provides +2 Sprint</li><li>Now provides +1 Stamina</li></ul>
`
	);
	var en = a($t, 2);
	(o(en, { kind: `item`, name: `Knockdown`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item leech`);
	var tn = i(G);
	n(
		tn,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Spirit Lifesteal reduced from +35% to +33%</li></ul>
`
	);
	var nn = a(tn, 2);
	(o(nn, { kind: `item`, name: `Leech`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item majestic-leap`);
	var rn = i(K);
	n(
		rn,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
<ul><li>Velocity increased from 22.5 to 27</li></ul>
`
	);
	var an = a(rn, 2);
	(o(an, { kind: `item`, name: `Majestic Leap`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item mystic-reverb`);
	var on = i(q);
	n(
		on,
		() => `
<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>
<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>
`
	);
	var sn = a(on, 2),
		cn = i(sn);
	(n(cn, () => `Fixed the damage being reduced by armor twice`, !0), t(cn));
	var ln = a(cn, 2),
		un = i(ln);
	n(un, () => `Damage reduced from 35% to 30%`);
	var dn = a(un, 2);
	(s(dn, {
		kind: `item`,
		name: `Mystic Reverb`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Damage reduced from 35% to 30%`
	}),
		t(ln),
		t(sn));
	var fn = a(sn, 2);
	(o(fn, { kind: `item`, name: `Mystic Reverb`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item reactive-barrier`);
	var pn = i(J);
	n(
		pn,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
`
	);
	var Y = a(pn, 2),
		mn = i(Y),
		hn = i(mn);
	n(hn, () => `Cooldown reduced from 35s to 25s`);
	var gn = a(hn, 2);
	(s(gn, {
		kind: `item`,
		name: `Reactive Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 35s to 25s`
	}),
		t(mn),
		t(Y));
	var _n = a(Y, 2);
	(o(_n, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(J));
	var X = a(J, 2);
	r(X, 1, `item refresher`);
	var vn = i(X);
	n(
		vn,
		() => `
<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>
<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>
<ul><li>No longer has cast time (was 1s)</li></ul>
`
	);
	var yn = a(vn, 2);
	(o(yn, { kind: `item`, name: `Refresher`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item sharpshooter`);
	var bn = i(Z);
	n(
		bn,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Damage falloff bonus reduced from 20% to 15%</li></ul>
`
	);
	var xn = a(bn, 2);
	(o(xn, { kind: `item`, name: `Sharpshooter`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item spirit-lifesteal`);
	var Sn = i(Q);
	n(
		Sn,
		() => `
<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>
<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>
<ul><li>Reduced from +25% to +23%</li></ul>
`
	);
	var Cn = a(Sn, 2);
	(o(Cn, { kind: `item`, name: `Spirit Lifesteal`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item spiritual-overflow`);
	var wn = i($);
	n(
		wn,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Spirit duration increased from 14s to 18s</li></ul>
`
	);
	var Tn = a(wn, 2);
	(o(Tn, { kind: `item`, name: `Spiritual Overflow`, ability: null }), t($));
	var En = a($, 2);
	r(En, 1, `item torment-pulse`);
	var Dn = i(En);
	n(
		Dn,
		() => `
<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>
<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>
<ul><li>Interval improved from 2s to 1.5s</li><li>Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6)</li><li>HP bonus reduced from +150 to +125</li></ul>
`
	);
	var On = a(Dn, 2);
	(o(On, { kind: `item`, name: `Torment Pulse`, ability: null }), t(En), ee(e, c));
}
export { u as default, ie as metadata, l as readingManifest, ae as toc };
