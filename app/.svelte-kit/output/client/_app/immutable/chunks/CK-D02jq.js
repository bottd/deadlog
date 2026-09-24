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
			`Lady Geist`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Vindicta`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names: [
			`Decay`,
			`Escalating Resilience`,
			`Frenzy`,
			`Glass Cannon`,
			`Headshot Booster`,
			`Knockdown`,
			`Leech`,
			`Lifestrike`,
			`Majestic Leap`,
			`Mystic Burst`,
			`Mystic Shot`,
			`Phantom Strike`,
			`Reactive Barrier`,
			`Refresher`,
			`Restorative Locket`,
			`Silencer`,
			`Slowing Hex`,
			`Spirit Strike`,
			`Superior Cooldown`
		]
	});
}
var ie = {
		title: `05-23-2024 Update`,
		thread_id: `1245`,
		published: `2024-05-23T14:39:49-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Playtesting times are now starting 1 hour earlier. Weekdays are 5PM PDT and weekends are 3PM PDT. Added in-game custom item builds support. Create your own builds or browse builds from the community in the heroes page. Added post game player reporting option Ally player glow-through-world silhouette now communicates their current health Added ambient music track Added unique Haze footstep sound effects Fixed various issues with mic audio input and lag it introduced Small adjustments to how the crosshair UI area looks Mic input device is now selected from in-game settings rather than the steam client Improved various networking and hit registration related issues (this was released a couple days ago) Updated Trooper and Neutral shooting sound effects Various improvements to damage audio clarity for victims and attackers Sped up select Amber Hand VO that related to game state (shrines being under attack, protecting the urn runner etc) Adding game audio muted indicator in top left if the game is muted Camera can now be moved while the game is paused in replays Fixed the Rejuvenator falling during pause Fixed the Idol falling during pause Fixed the bottom most shop items having part of their icon be unclickable Fixed a few unit target abilities that could sometimes select a target behind a nearby wall (e.g. Bebop Sticky Bomb) Added some additional visual tells for the receiving end of Lash’s Death Slam Updated Bullet Shredder debuff effects Mid-Boss is now invulnerable if there are no enemies it can actually attack Fixed your active items not hiding in the UI when you are dead and spectating a team mate Added support for binding mouse1 and mouse2 to any key (this was released a couple days ago) Fixed various movement stuck bugs with Ivy Added alt info to recent damage view to make it clearer that this can be brought up again after it disappears Improved Vindicta’s Stake effects to make it a little clearer when you are affected Fixed upgrading McGinnis’s Medicinal Specter to T3 while active causing it to heal everyone to full instantly Fixed a bug that could cause all of Paradox Pulse Grenade’s pulses to go off at once Fixed Kelvin’s Ice Beam sometimes not hitting Neutrals Fixed being able to see some things through the Veils in the map that you shouldn’t be able to see Removed stack of cardboard boxes inside connection hallway near bases to prevent cover from Neutrals Fixed getting stuck under stair at inner lanes near Guardian Fixed Abrams getting stuck on department store facade when using his ult Sapphire side materials tint color changed to white Sapphire side street materials changed to new asphalt blend Added new slide and reload animation for Wraith Out of combat run animation variants now only play during sprint state Fixed missing VO for Yamato ability use/upgrades Allies now compliment teammates when they see impressive use of channeled abilities (for instance, Gigawatt killing three people with Storm Cloud) Adjusted timing of select Abrams impact lines to time with either the rise of his leap or the descent accordingly Improved visibility of Seven’s bullet and travel path Improved visibility of Paradox’s bullet and travel path Improved visibility of Wraith’s bullet and travel path Improved visibility of Haze’s bullet and travel path Improved visibility of Lady Geist’s bullet and travel path Added custom tracer and muzzle flash for Seven’s gun Added custom tracer and muzzle flash for Paradox’s gun Added custom tracer and muzzle flash for Wraith’s gun Adjusted map around the middle lanes to have an area with Veils for laning Hero kill bounty ratio between Killer and Assister reduced from 2.75x to 2.55x (means slightly more to the Assister) Spirit scaling reduced by ~15% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst) Unclaimed souls now convert 10% slower Vaults base bounty increased from 220 to 260 Strong Neutrals Spirit Resist increased from 25% to 35% Medium Neutrals Spirit Resist increased from 25% to 30% Starting at 15 minutes, one melee Trooper per wave will spawn with 1.75x health Medic Trooper health increased from 240 to 260 Sidelane Veils near Guardians are now one-way visibility (used to be blocked visibility in both directions) Neutrals can now lean side to side to fire when obstructed by map geometry and being attacked Zipline Boost ability speed increased from 100% to 130% Zipline Boost ability ramp time to reach max speed reduced from 2s to 1s Zipline base speed boost after Base Guardians are killed increased from 100% to 120% Zipline base speed boost's ramp time after Base Guardians are killed reduced from 5s to 4s Being Disarmed no longer prevents you from reloading Withering Whip: Moved from T3 to T2 Withering Whip: Duration reduced 5s to 3.5s Withering Whip: Cooldown increased from 25s to 40s Withering Whip: Bullet Resist reduced from 25% to 20% Withering Whip: Cast range reduced from 20m to 15m Combat Barrier: Bullet Shield increased from 275 to 300 Combat Barrier: Weapon Damage while Shielded from 20% to 24% Silence Glyph: Moved from T2 to T3 Silence Glyph: Health increased from 50 to 75 Silence Glyph: Spirit Amp increased from 8% to 12% Shifting Shroud: Cooldown reduced from 70s to 55s Shifting Shroud: Duration 2.5s to 2.75s Improved Burst: Damage reduced from 11% Max HP to 10% Curse: Ammo increased from 15% to 20% Abrams Siphon Life T1 and T2 swapped Shoulder charge now allows for a bit more steering control Bebop Sticky Bomb T3 changed from Silence to Disarm Improved Hook hitbox detection to not grab targets that are behind cover Hyperbeam width increased from 2.5m to 2.7m Dynamo Base gun damage reduced from 18 to 15 Gun damage growth reduced from +1.1 to +0.8 Grey Talon Guided Owl Spirit scaling reduced from 2.2 to 1.2 Guided Owl T3 changed from +200 damage to "Kills enemy heroes below 20%". Low health enemies are highlighted while guiding the owl. Haze Sleep Dagger no longer breaks invisibility when cast (previously was part of the T3) Sleep Dagger Spirit scaling increased from 2.3 to 2.6 Sleep Dagger no longer gets +140 damage with the T3 Sleep Dagger T3 is now "-30% Damage Penalty On Victim for 4s after wakeup" Bullet Dance cast time increased from 0.7s to 0.8s Bullet Dance evasion from 70% to 50% Ivy Kudzu Bomb duration increased from 3.5s to 4s Kudzu Bomb T2 duration increased from +1.5s to +2s Watcher's Covenant Replicated Healing increased from 50% to 65% Watcher's Covenant Fire Rate reduced from 20% to 15% Watcher's Covenant T1 changed to +15% Rate Kelvin Frost Grenade cooldown reduced from 26s to 23s While Ice Pathing you no longer slow down when you shoot your gun Arctic Beam Channel move speed increased from 4 to 6 Arctic Beam T1 changed from "+2 Channel Move Speed" to -8s Cooldown Lady Geist Soul Exchange cast time reduced from 0.65s to 0.5s Fixed Malice clipping aggressively against map geometry edges Lash Base Stamina increased from 2 to 3 Ground Strike base Damage Per Meter reduced from 8 to 6 Fixed some cases with Ground Strike not hitting units positioned just below the impact zone Flog angle increased from 20 degrees to 30 degrees Flog cooldown reduced from 35s to 30s McGinnis Fixed certain rooftops allowing turrets to be built on them Mo & Krill Scorn healing against non-heroes reduced from 1x to 0.7x Sandblast no longer prevents enemies from reloading while disarmed Paradox Kinetic Carbine Max Damage Amp reduced from 125% to 100% Paradoxical Swap range reduced from 45m to 40m Pocket Barrage T3 added, now heals Pocket for 100% of its damage (33% vs non-heroes) Fixed some issues with Barrage projectiles getting caught on map geometry Flying Cloak pathing improved, it will no longer bounce erratically off map geometry Vindicta Flight T3 reduced from +4m/s to +3m/s Crow Familiar T3 improved from -30% Healing Suppression to -40% Warden Alchemical Flask travel speed increased from 800 to 1000 Wraith Royal Flush no longer has a cast delay Royal Flush time to spawn cards increased from 0.4s to 0.6s Telekinesis no longer allows the victim to shoot back Yamato Shadow Explosion renamed to Shadow Transformation and reworked into a new ability Shadow Transformation no longer has radius impact behavior Shadow Transformation now gives you 4.5s of invulnerability after the initial 2s invulnerable channel period. You transform and refresh your abilities, improving ability speeds by 60% and gaining unlimited ammo. "Ability Speeds" affects Power Slash cast time, Flying Strike flying time, and Crimson Slash cast time. Shadow Transformation cooldown increased from 90s to 100s Shadow Transformation T2 is now +4 m/s during Shadow Form Shadow Transformation T3 is now +1s duration Headshot Booster Cooldown reduced from 14s to 9s Spirit Strike No longer has +50 Health Now grants +75 Spirit Shield Now grants +0.7 HP regen Mystic Burst No longer has +1 HP Regen Now grants +1 Sprint Cooldown reduced from 8s to 6s Decay Cooldown increased from 22s to 27s Slowing Hex Range increased from 30 to 35 Reactive Barrier Cooldown reduced from 40s to 35s Mystic Shot Now requires that shotguns middle pellet hit the target Restorative Locket Now displays its current number of charges on its active icon Majestic Leap Duration of no damage taken requirement reduced from 5s to 4s Now gives +75 Health Lifestrike Flat portion of the lifesteal increased from 90 to 110 Knockdown Spirit bonus reduced from 6 to 5 Now grants +2 Sprint Stun duration starts after hitting the ground Superior Cooldown HP regen reduced from 6 to 4 Escalating Resilience Max Bullet Resist increased from 30% to 36% Frenzy When below 40% HP you now gain 25% Spirit Resist Refresher Now grants +10% Spirit Resist Glass Cannon Fire Rate reduced from 15% to 10% Silencer Now provides 15% Ammo Leech Spirit bonus reduced from 12 to 8 Phantom Strike Damage reduced from 200 to 150`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-05-20`, to: `2024-05-23` },
			after: { from: null, to: null }
		}
	},
	ae = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 3, title: `Grapple Arm`, id: `grapple-arm` },
		{ level: 3, title: `Hyperbeam`, id: `hyperbeam` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Guided Owl Spirit`, id: `guided-owl-spirit` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Sleep Dagger Spirit`, id: `sleep-dagger-spirit` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger-1` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Kudzu Bomb`, id: `kudzu-bomb` },
		{
			level: 3,
			title: `Watcher's Covenant Replicated Healing`,
			id: `watcher-s-covenant-replicated-healing`
		},
		{
			level: 3,
			title: `Watcher's Covenant Fire Rate`,
			id: `watcher-s-covenant-fire-rate`
		},
		{ level: 3, title: `Watcher's Covenant`, id: `watcher-s-covenant` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 3, title: `Ice Path`, id: `ice-path` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Soul Exchange`, id: `soul-exchange` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Flog`, id: `flog` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turret`, id: `mini-turret` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Scorn`, id: `scorn` },
		{ level: 3, title: `Sandblast`, id: `sandblast` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{
			level: 3,
			title: `Kinetic Carbine Max Damage Amp`,
			id: `kinetic-carbine-max-damage-amp`
		},
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Barrage`, id: `barrage` },
		{ level: 3, title: `Flying Cloak`, id: `flying-cloak` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Alchemical Flask`, id: `alchemical-flask` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Royal Flush`, id: `royal-flush` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 3, title: `Telekinesis`, id: `telekinesis` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Escalating Resilience`, id: `escalating-resilience` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Glass Cannon`, id: `glass-cannon` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Mystic Burst`, id: `mystic-burst` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Phantom Strike`, id: `phantom-strike` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Refresher`, id: `refresher` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Spirit Strike`, id: `spirit-strike` },
		{ level: 2, title: `Superior Cooldown`, id: `superior-cooldown` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-05-20`, to: `2024-05-23` },
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
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Escalating Resilience`, id: `escalating-resilience` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Glass Cannon`, id: `glass-cannon` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Mystic Burst`, id: `mystic-burst` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Phantom Strike`, id: `phantom-strike` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Refresher`, id: `refresher` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Spirit Strike`, id: `spirit-strike` },
			{ kind: `item`, name: `Superior Cooldown`, id: `superior-cooldown` }
		],
		related: []
	},
	oe = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <!> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function se(e) {
	var c = oe(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Playtesting times are now starting 1 hour earlier. Weekdays are 5PM PDT and weekends are 3PM PDT.</li><li>Added in-game custom item builds support. Create your own builds or browse builds from the community in the heroes page.</li><li>Added post game player reporting option</li><li>Ally player glow-through-world silhouette now communicates their current health</li><li>Added ambient music track</li><li>Added unique Haze footstep sound effects</li><li>Fixed various issues with mic audio input and lag it introduced</li><li>Small adjustments to how the crosshair UI area looks</li><li>Mic input device is now selected from in-game settings rather than the steam client</li><li>Improved various networking and hit registration related issues (this was released a couple days ago)</li><li>Updated Trooper and Neutral shooting sound effects</li><li>Various improvements to damage audio clarity for victims and attackers</li><li>Sped up select Amber Hand VO that related to game state (shrines being under attack, protecting the urn runner etc)</li><li>Adding game audio muted indicator in top left if the game is muted</li><li>Camera can now be moved while the game is paused in replays</li><li>Fixed the Rejuvenator falling during pause</li><li>Fixed the Idol falling during pause</li><li>Fixed the bottom most shop items having part of their icon be unclickable</li><li>Fixed a few unit target abilities that could sometimes select a target behind a nearby wall (e.g. Bebop Sticky Bomb)</li><li>Added some additional visual tells for the receiving end of Lash’s Death Slam</li><li>Updated Bullet Shredder debuff effects</li><li>Mid-Boss is now invulnerable if there are no enemies it can actually attack</li><li>Fixed your active items not hiding in the UI when you are dead and spectating a team mate</li><li>Added support for binding mouse1 and mouse2 to any key (this was released a couple days ago)</li><li>Fixed various movement stuck bugs with Ivy</li><li>Added alt info to recent damage view to make it clearer that this can be brought up again after it disappears</li><li>Improved Vindicta’s Stake effects to make it a little clearer when you are affected</li><li>Fixed upgrading McGinnis’s Medicinal Specter to T3 while active causing it to heal everyone to full instantly</li><li>Fixed a bug that could cause all of Paradox Pulse Grenade’s pulses to go off at once</li><li>Fixed Kelvin’s Ice Beam sometimes not hitting Neutrals</li><li>Fixed being able to see some things through the Veils in the map that you shouldn’t be able to see</li><li>Removed stack of cardboard boxes inside connection hallway near bases to prevent cover from Neutrals</li><li>Fixed getting stuck under stair at inner lanes near Guardian</li><li>Fixed Abrams getting stuck on department store facade when using his ult</li><li>Sapphire side materials tint color changed to white</li><li>Sapphire side street materials changed to new asphalt blend</li><li>Added new slide and reload animation for Wraith</li><li>Out of combat run animation variants now only play during sprint state</li><li>Fixed missing VO for Yamato ability use/upgrades</li><li>Allies now compliment teammates when they see impressive use of channeled abilities (for instance, Gigawatt killing three people with Storm Cloud)</li><li>Adjusted timing of select Abrams impact lines to time with either the rise of his leap or the descent accordingly</li><li>Improved visibility of Seven’s bullet and travel path</li><li>Improved visibility of Paradox’s bullet and travel path</li><li>Improved visibility of Wraith’s bullet and travel path</li><li>Improved visibility of Haze’s bullet and travel path</li><li>Improved visibility of Lady Geist’s bullet and travel path</li><li>Added custom tracer and muzzle flash for Seven’s gun</li><li>Added custom tracer and muzzle flash for Paradox’s gun</li><li>Added custom tracer and muzzle flash for Wraith’s gun</li><li>Adjusted map around the middle lanes to have an area with Veils for laning</li><li>Hero kill bounty ratio between Killer and Assister reduced from 2.75x to 2.55x (means slightly more to the Assister)</li><li>Spirit scaling reduced by ~15% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst)</li><li>Unclaimed souls now convert 10% slower</li><li>Vaults base bounty increased from 220 to 260</li><li>Strong Neutrals Spirit Resist increased from 25% to 35%</li><li>Medium Neutrals Spirit Resist increased from 25% to 30%</li><li>Starting at 15 minutes, one melee Trooper per wave will spawn with 1.75x health</li><li>Medic Trooper health increased from 240 to 260</li><li>Sidelane Veils near Guardians are now one-way visibility (used to be blocked visibility in both directions)</li><li>Neutrals can now lean side to side to fire when obstructed by map geometry and being attacked</li><li>Zipline Boost ability speed increased from 100% to 130%</li><li>Zipline Boost ability ramp time to reach max speed reduced from 2s to 1s</li><li>Zipline base speed boost after Base Guardians are killed increased from 100% to 120%</li><li>Zipline base speed boost&#x27;s ramp time after Base Guardians are killed reduced from 5s to 4s</li><li>Being Disarmed no longer prevents you from reloading</li><li>Withering Whip: Moved from T3 to T2</li><li>Withering Whip: Duration reduced 5s to 3.5s</li><li>Withering Whip: Cooldown increased from 25s to 40s</li><li>Withering Whip: Bullet Resist reduced from 25% to 20%</li><li>Withering Whip: Cast range reduced from 20m to 15m</li><li>Combat Barrier: Bullet Shield increased from 275 to 300</li><li>Combat Barrier: Weapon Damage while Shielded from 20% to 24%</li><li>Silence Glyph: Moved from T2 to T3</li><li>Silence Glyph: Health increased from 50 to 75</li><li>Silence Glyph: Spirit Amp increased from 8% to 12%</li><li>Shifting Shroud: Cooldown reduced from 70s to 55s</li><li>Shifting Shroud: Duration 2.5s to 2.75s</li><li>Improved Burst: Damage reduced from 11% Max HP to 10%</li><li>Curse: Ammo increased from 15% to 20%</li></ul>
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
<ul><li>Siphon Life T1 and T2 swapped</li></ul>
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
<ul><li>Shoulder charge now allows for a bit more steering control</li></ul>
`
	);
	var fe = a(de, 2);
	(o(fe, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), t(ue), t(l));
	var d = a(l, 2);
	r(d, 1, `hero bebop`);
	var pe = i(d);
	n(
		pe,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var f = a(pe, 2);
	r(f, 1, `ability sticky-bomb`);
	var me = i(f);
	n(
		me,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
<ul><li>Sticky Bomb T3 changed from Silence to Disarm</li></ul>
`
	);
	var he = a(me, 2);
	(o(he, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(f));
	var p = a(f, 2);
	r(p, 1, `ability grapple-arm`);
	var ge = i(p);
	n(
		ge,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>
<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>
<ul><li>Improved Hook hitbox detection to not grab targets that are behind cover</li></ul>
`
	);
	var _e = a(ge, 2);
	(o(_e, { kind: `hero`, name: `Bebop`, ability: `Grapple Arm` }), t(p));
	var ve = a(p, 2);
	r(ve, 1, `ability hyperbeam`);
	var ye = i(ve);
	n(
		ye,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>
<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>
<ul><li>Hyperbeam width increased from 2.5m to 2.7m</li></ul>
`
	);
	var be = a(ye, 2);
	(o(be, { kind: `hero`, name: `Bebop`, ability: `Hyperbeam` }), t(ve), t(d));
	var xe = a(d, 2);
	n(
		xe,
		() => `
<div class="hero dynamo">
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
<ul><li>Base gun damage reduced from 18 to 15</li><li>Gun damage growth reduced from +1.1 to +0.8</li></ul>
</div>
`
	);
	var m = a(xe, 2);
	r(m, 1, `hero grey-talon`);
	var Se = i(m);
	n(
		Se,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var h = a(Se, 2);
	r(h, 1, `ability guided-owl-spirit`);
	var Ce = i(h);
	n(
		Ce,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl Spirit change history</a></p>
<h4 id="guided-owl-spirit"><a href="/ability/guided-owl">Guided Owl Spirit</a></h4>
<ul><li>Guided Owl Spirit scaling reduced from 2.2 to 1.2</li></ul>
`
	);
	var we = a(Ce, 2);
	(o(we, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl Spirit` }), t(h));
	var Te = a(h, 2);
	r(Te, 1, `ability guided-owl`);
	var Ee = i(Te);
	n(
		Ee,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
<ul><li>Guided Owl T3 changed from +200 damage to &quot;Kills enemy heroes below 20%&quot;. Low health enemies are highlighted while guiding the owl.</li></ul>
`
	);
	var De = a(Ee, 2);
	(o(De, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), t(Te), t(m));
	var g = a(m, 2);
	r(g, 1, `hero haze`);
	var Oe = i(g);
	n(
		Oe,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var _ = a(Oe, 2);
	r(_, 1, `ability sleep-dagger`);
	var ke = i(_);
	n(
		ke,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger no longer breaks invisibility when cast (previously was part of the T3)</li></ul>
`
	);
	var Ae = a(ke, 2);
	(o(Ae, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(_));
	var v = a(_, 2);
	r(v, 1, `ability sleep-dagger-spirit`);
	var je = i(v);
	n(
		je,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Spirit change history</a></p>
<h4 id="sleep-dagger-spirit"><a href="/ability/sleep-dagger">Sleep Dagger Spirit</a></h4>
<ul><li>Sleep Dagger Spirit scaling increased from 2.3 to 2.6</li></ul>
`
	);
	var Me = a(je, 2);
	(o(Me, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger Spirit` }), t(v));
	var y = a(v, 2);
	r(y, 1, `ability sleep-dagger`);
	var Ne = i(y);
	n(
		Ne,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger-1"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger no longer gets +140 damage with the T3</li><li>Sleep Dagger T3 is now &quot;-30% Damage Penalty On Victim for 4s after wakeup&quot;</li></ul>
`
	);
	var Pe = a(Ne, 2);
	(o(Pe, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(y));
	var Fe = a(y, 2);
	r(Fe, 1, `ability bullet-dance`);
	var Ie = i(Fe);
	n(
		Ie,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance cast time increased from 0.7s to 0.8s</li><li>Bullet Dance evasion from 70% to 50%</li></ul>
`
	);
	var Le = a(Ie, 2);
	(o(Le, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(Fe), t(g));
	var b = a(g, 2);
	r(b, 1, `hero ivy`);
	var Re = i(b);
	n(
		Re,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var x = a(Re, 2);
	r(x, 1, `ability kudzu-bomb`);
	var ze = i(x);
	n(
		ze,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>
<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>
<ul><li>Kudzu Bomb duration increased from 3.5s to 4s</li><li>Kudzu Bomb T2 duration increased from +1.5s to +2s</li></ul>
`
	);
	var Be = a(ze, 2);
	(o(Be, { kind: `hero`, name: `Ivy`, ability: `Kudzu Bomb` }), t(x));
	var S = a(x, 2);
	r(S, 1, `ability watcher-s-covenant-replicated-healing`);
	var Ve = i(S);
	n(
		Ve,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant Replicated Healing change history</a></p>
<h4 id="watcher-s-covenant-replicated-healing"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant Replicated Healing</a></h4>
<ul><li>Watcher&#x27;s Covenant Replicated Healing increased from 50% to 65%</li></ul>
`
	);
	var He = a(Ve, 2);
	(o(He, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant Replicated Healing` }),
		t(S));
	var C = a(S, 2);
	r(C, 1, `ability watcher-s-covenant-fire-rate`);
	var Ue = i(C);
	n(
		Ue,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant Fire Rate change history</a></p>
<h4 id="watcher-s-covenant-fire-rate"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant Fire Rate</a></h4>
<ul><li>Watcher&#x27;s Covenant Fire Rate reduced from 20% to 15%</li></ul>
`
	);
	var We = a(Ue, 2);
	(o(We, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant Fire Rate` }), t(C));
	var Ge = a(C, 2);
	r(Ge, 1, `ability watcher-s-covenant`);
	var Ke = i(Ge);
	n(
		Ke,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>
<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>
<ul><li>Watcher&#x27;s Covenant T1 changed to +15% Rate</li></ul>
`
	);
	var qe = a(Ke, 2);
	(o(qe, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant` }), t(Ge), t(b));
	var w = a(b, 2);
	r(w, 1, `hero kelvin`);
	var Je = i(w);
	n(
		Je,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var T = a(Je, 2);
	r(T, 1, `ability frost-grenade`);
	var Ye = i(T);
	n(
		Ye,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
`
	);
	var Xe = a(Ye, 2),
		Ze = i(Xe),
		Qe = i(Ze);
	n(Qe, () => `Frost Grenade cooldown reduced from 26s to 23s`);
	var $e = a(Qe, 2);
	(s($e, {
		kind: `hero`,
		name: `Kelvin`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Frost Grenade cooldown reduced from 26s to 23s`
	}),
		t(Ze),
		t(Xe));
	var et = a(Xe, 2);
	(o(et, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), t(T));
	var E = a(T, 2);
	r(E, 1, `ability ice-path`);
	var tt = i(E);
	n(
		tt,
		() => `
<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>
<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>
<ul><li>While Ice Pathing you no longer slow down when you shoot your gun</li></ul>
`
	);
	var nt = a(tt, 2);
	(o(nt, { kind: `hero`, name: `Kelvin`, ability: `Ice Path` }), t(E));
	var rt = a(E, 2);
	r(rt, 1, `ability arctic-beam`);
	var it = i(rt);
	n(
		it,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam Channel move speed increased from 4 to 6</li><li>Arctic Beam T1 changed from &quot;+2 Channel Move Speed&quot; to -8s Cooldown</li></ul>
`
	);
	var at = a(it, 2);
	(o(at, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), t(rt), t(w));
	var D = a(w, 2);
	r(D, 1, `hero lady-geist`);
	var ot = i(D);
	n(
		ot,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var O = a(ot, 2);
	r(O, 1, `ability soul-exchange`);
	var st = i(O);
	n(
		st,
		() => `
<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>
<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>
<ul><li>Soul Exchange cast time reduced from 0.65s to 0.5s</li></ul>
`
	);
	var ct = a(st, 2);
	(o(ct, { kind: `hero`, name: `Lady Geist`, ability: `Soul Exchange` }), t(O));
	var lt = a(O, 2);
	r(lt, 1, `ability malice`);
	var ut = i(lt);
	n(
		ut,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
<ul><li>Fixed Malice clipping aggressively against map geometry edges</li></ul>
`
	);
	var dt = a(ut, 2);
	(o(dt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), t(lt), t(D));
	var k = a(D, 2);
	r(k, 1, `hero lash`);
	var ft = i(k);
	n(
		ft,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
<ul><li>Base Stamina increased from 2 to 3</li></ul>
`
	);
	var A = a(ft, 2);
	r(A, 1, `ability ground-strike`);
	var pt = i(A);
	n(
		pt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike base Damage Per Meter reduced from 8 to 6</li><li>Fixed some cases with Ground Strike not hitting units positioned just below the impact zone</li></ul>
`
	);
	var mt = a(pt, 2);
	(o(mt, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(A));
	var ht = a(A, 2);
	r(ht, 1, `ability flog`);
	var gt = i(ht);
	n(
		gt,
		() => `
<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>
<h4 id="flog"><a href="/ability/flog">Flog</a></h4>
`
	);
	var _t = a(gt, 2),
		vt = i(_t);
	(n(vt, () => `Flog angle increased from 20 degrees to 30 degrees`, !0), t(vt));
	var yt = a(vt, 2),
		bt = i(yt);
	n(bt, () => `Flog cooldown reduced from 35s to 30s`);
	var xt = a(bt, 2);
	(s(xt, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 2,
		bulletIndex: 1,
		text: `Flog cooldown reduced from 35s to 30s`
	}),
		t(yt),
		t(_t));
	var St = a(_t, 2);
	(o(St, { kind: `hero`, name: `Lash`, ability: `Flog` }), t(ht), t(k));
	var j = a(k, 2);
	r(j, 1, `hero mcginnis`);
	var Ct = i(j);
	n(
		Ct,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var wt = a(Ct, 2);
	r(wt, 1, `ability mini-turret`);
	var Tt = i(wt);
	n(
		Tt,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>
<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>
<ul><li>Fixed certain rooftops allowing turrets to be built on them</li></ul>
`
	);
	var Et = a(Tt, 2);
	(o(Et, { kind: `hero`, name: `McGinnis`, ability: `Mini Turret` }), t(wt), t(j));
	var M = a(j, 2);
	r(M, 1, `hero mo-krill`);
	var Dt = i(M);
	n(
		Dt,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var N = a(Dt, 2);
	r(N, 1, `ability scorn`);
	var Ot = i(N);
	n(
		Ot,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>
<ul><li>Scorn healing against non-heroes reduced from 1x to 0.7x</li></ul>
`
	);
	var kt = a(Ot, 2);
	(o(kt, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), t(N));
	var At = a(N, 2);
	r(At, 1, `ability sandblast`);
	var jt = i(At);
	n(
		jt,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sandblast change history</a></p>
<h4 id="sandblast"><a href="/ability/sand-blast">Sandblast</a></h4>
<ul><li>Sandblast no longer prevents enemies from reloading while disarmed</li></ul>
`
	);
	var Mt = a(jt, 2);
	(o(Mt, { kind: `hero`, name: `Mo & Krill`, ability: `Sandblast` }), t(At), t(M));
	var Nt = a(M, 2);
	r(Nt, 1, `hero paradox`);
	var Pt = i(Nt);
	n(
		Pt,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var P = a(Pt, 2);
	r(P, 1, `ability kinetic-carbine-max-damage-amp`);
	var Ft = i(P);
	n(
		Ft,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine Max Damage Amp change history</a></p>
<h4 id="kinetic-carbine-max-damage-amp"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Damage Amp</a></h4>
<ul><li>Kinetic Carbine Max Damage Amp reduced from 125% to 100%</li></ul>
`
	);
	var It = a(Ft, 2);
	(o(It, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine Max Damage Amp` }),
		t(P));
	var Lt = a(P, 2);
	r(Lt, 1, `ability paradoxical-swap`);
	var Rt = i(Lt);
	n(
		Rt,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
<ul><li>Paradoxical Swap range reduced from 45m to 40m</li></ul>
`
	);
	var zt = a(Rt, 2);
	(o(zt, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), t(Lt), t(Nt));
	var F = a(Nt, 2);
	r(F, 1, `hero pocket`);
	var Bt = i(F);
	n(
		Bt,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var I = a(Bt, 2);
	r(I, 1, `ability barrage`);
	var Vt = i(I);
	n(
		Vt,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>
<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>
<ul><li>Barrage T3 added, now heals Pocket for 100% of its damage (33% vs non-heroes)</li><li>Fixed some issues with Barrage projectiles getting caught on map geometry</li></ul>
`
	);
	var Ht = a(Vt, 2);
	(o(Ht, { kind: `hero`, name: `Pocket`, ability: `Barrage` }), t(I));
	var Ut = a(I, 2);
	r(Ut, 1, `ability flying-cloak`);
	var Wt = i(Ut);
	n(
		Wt,
		() => `
<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>
<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>
<ul><li>Flying Cloak pathing improved, it will no longer bounce erratically off map geometry</li></ul>
`
	);
	var Gt = a(Wt, 2);
	(o(Gt, { kind: `hero`, name: `Pocket`, ability: `Flying Cloak` }), t(Ut), t(F));
	var L = a(F, 2);
	r(L, 1, `hero vindicta`);
	var Kt = i(L);
	n(
		Kt,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
`
	);
	var R = a(Kt, 2);
	r(R, 1, `ability flight`);
	var qt = i(R);
	n(
		qt,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
<ul><li>Flight T3 reduced from +4m/s to +3m/s</li></ul>
`
	);
	var Jt = a(qt, 2);
	(o(Jt, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), t(R));
	var Yt = a(R, 2);
	r(Yt, 1, `ability crow-familiar`);
	var Xt = i(Yt);
	n(
		Xt,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar T3 improved from -30% Healing Suppression to -40%</li></ul>
`
	);
	var Zt = a(Xt, 2);
	(o(Zt, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), t(Yt), t(L));
	var z = a(L, 2);
	r(z, 1, `hero warden`);
	var Qt = i(z);
	n(
		Qt,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
`
	);
	var $t = a(Qt, 2);
	r($t, 1, `ability alchemical-flask`);
	var en = i($t);
	n(
		en,
		() => `
<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>
<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>
<ul><li>Alchemical Flask travel speed increased from 800 to 1000</li></ul>
`
	);
	var tn = a(en, 2);
	(o(tn, { kind: `hero`, name: `Warden`, ability: `Alchemical Flask` }), t($t), t(z));
	var B = a(z, 2);
	r(B, 1, `hero wraith`);
	var nn = i(B);
	n(
		nn,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var V = a(nn, 2);
	r(V, 1, `ability royal-flush`);
	var rn = i(V);
	n(
		rn,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Royal Flush change history</a></p>
<h4 id="royal-flush"><a href="/ability/card-trick">Royal Flush</a></h4>
<ul><li>Royal Flush no longer has a cast delay</li></ul>
`
	);
	var an = a(rn, 2);
	(o(an, { kind: `hero`, name: `Wraith`, ability: `Royal Flush` }), t(V));
	var H = a(V, 2);
	r(H, 1, `ability card-trick`);
	var on = i(H);
	n(
		on,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
<ul><li>Royal Flush time to spawn cards increased from 0.4s to 0.6s</li></ul>
`
	);
	var sn = a(on, 2);
	(o(sn, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), t(H));
	var cn = a(H, 2);
	r(cn, 1, `ability telekinesis`);
	var ln = i(cn);
	n(
		ln,
		() => `
<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>
<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>
<ul><li>Telekinesis no longer allows the victim to shoot back</li></ul>
`
	);
	var un = a(ln, 2);
	(o(un, { kind: `hero`, name: `Wraith`, ability: `Telekinesis` }), t(cn), t(B));
	var U = a(B, 2);
	r(U, 1, `hero yamato`);
	var dn = i(U);
	n(
		dn,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var fn = a(dn, 2);
	r(fn, 1, `ability shadow-transformation`);
	var pn = i(fn);
	n(
		pn,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
`
	);
	var mn = a(pn, 2),
		hn = i(mn);
	(n(
		hn,
		() =>
			`Shadow Explosion renamed to Shadow Transformation and reworked into a new ability`,
		!0
	),
		t(hn));
	var gn = a(hn, 2);
	(n(gn, () => `Shadow Transformation no longer has radius impact behavior`, !0), t(gn));
	var _n = a(gn, 2);
	(n(
		_n,
		() =>
			`Shadow Transformation now gives you 4.5s of invulnerability after the initial 2s invulnerable channel period. You transform and refresh your abilities, improving ability speeds by 60% and gaining unlimited ammo. &quot;Ability Speeds&quot; affects Power Slash cast time, Flying Strike flying time, and Crimson Slash cast time.`,
		!0
	),
		t(_n));
	var vn = a(_n, 2),
		yn = i(vn);
	n(yn, () => `Shadow Transformation cooldown increased from 90s to 100s`);
	var bn = a(yn, 2);
	(s(bn, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 0,
		bulletIndex: 3,
		text: `Shadow Transformation cooldown increased from 90s to 100s`
	}),
		t(vn));
	var xn = a(vn, 2);
	(n(xn, () => `Shadow Transformation T2 is now +4 m/s during Shadow Form`, !0), t(xn));
	var Sn = a(xn, 2);
	(n(Sn, () => `Shadow Transformation T3 is now +1s duration`, !0), t(Sn), t(mn));
	var Cn = a(mn, 2);
	(o(Cn, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		t(fn),
		t(U));
	var wn = a(U, 2);
	n(
		wn,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Tn = a(wn, 2);
	re(Tn, {});
	var W = a(Tn, 2);
	r(W, 1, `item decay`);
	var En = i(W);
	n(
		En,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
`
	);
	var Dn = a(En, 2),
		On = i(Dn),
		kn = i(On);
	n(kn, () => `Cooldown increased from 22s to 27s`);
	var An = a(kn, 2);
	(s(An, {
		kind: `item`,
		name: `Decay`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 22s to 27s`
	}),
		t(On),
		t(Dn));
	var jn = a(Dn, 2);
	(o(jn, { kind: `item`, name: `Decay`, ability: null }), t(W));
	var G = a(W, 2);
	r(G, 1, `item escalating-resilience`);
	var Mn = i(G);
	n(
		Mn,
		() => `
<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>
<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>
<ul><li>Max Bullet Resist increased from 30% to 36%</li></ul>
`
	);
	var Nn = a(Mn, 2);
	(o(Nn, { kind: `item`, name: `Escalating Resilience`, ability: null }), t(G));
	var K = a(G, 2);
	r(K, 1, `item frenzy`);
	var Pn = i(K);
	n(
		Pn,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>When below 40% HP you now gain 25% Spirit Resist</li></ul>
`
	);
	var Fn = a(Pn, 2);
	(o(Fn, { kind: `item`, name: `Frenzy`, ability: null }), t(K));
	var q = a(K, 2);
	r(q, 1, `item glass-cannon`);
	var In = i(q);
	n(
		In,
		() => `
<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>
<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>
<ul><li>Fire Rate reduced from 15% to 10%</li></ul>
`
	);
	var Ln = a(In, 2);
	(o(Ln, { kind: `item`, name: `Glass Cannon`, ability: null }), t(q));
	var J = a(q, 2);
	r(J, 1, `item headshot-booster`);
	var Rn = i(J);
	n(
		Rn,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
`
	);
	var zn = a(Rn, 2),
		Bn = i(zn),
		Vn = i(Bn);
	n(Vn, () => `Cooldown reduced from 14s to 9s`);
	var Hn = a(Vn, 2);
	(s(Hn, {
		kind: `item`,
		name: `Headshot Booster`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 14s to 9s`
	}),
		t(Bn),
		t(zn));
	var Un = a(zn, 2);
	(o(Un, { kind: `item`, name: `Headshot Booster`, ability: null }), t(J));
	var Y = a(J, 2);
	r(Y, 1, `item knockdown`);
	var Wn = i(Y);
	n(
		Wn,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>Spirit bonus reduced from 6 to 5</li><li>Now grants +2 Sprint</li><li>Stun duration starts after hitting the ground</li></ul>
`
	);
	var Gn = a(Wn, 2);
	(o(Gn, { kind: `item`, name: `Knockdown`, ability: null }), t(Y));
	var X = a(Y, 2);
	r(X, 1, `item leech`);
	var Kn = i(X);
	n(
		Kn,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Spirit bonus reduced from 12 to 8</li></ul>
`
	);
	var qn = a(Kn, 2);
	(o(qn, { kind: `item`, name: `Leech`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item lifestrike`);
	var Jn = i(Z);
	n(
		Jn,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Flat portion of the lifesteal increased from 90 to 110</li></ul>
`
	);
	var Yn = a(Jn, 2);
	(o(Yn, { kind: `item`, name: `Lifestrike`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item majestic-leap`);
	var Xn = i(Q);
	n(
		Xn,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
<ul><li>Duration of no damage taken requirement reduced from 5s to 4s</li><li>Now gives +75 Health</li></ul>
`
	);
	var Zn = a(Xn, 2);
	(o(Zn, { kind: `item`, name: `Majestic Leap`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item mystic-burst`);
	var Qn = i($);
	n(
		Qn,
		() => `
<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>
<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>
`
	);
	var $n = a(Qn, 2),
		er = i($n);
	(n(er, () => `No longer has +1 HP Regen`, !0), t(er));
	var tr = a(er, 2);
	(n(tr, () => `Now grants +1 Sprint`, !0), t(tr));
	var nr = a(tr, 2),
		rr = i(nr);
	n(rr, () => `Cooldown reduced from 8s to 6s`);
	var ir = a(rr, 2);
	(s(ir, {
		kind: `item`,
		name: `Mystic Burst`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Cooldown reduced from 8s to 6s`
	}),
		t(nr),
		t($n));
	var ar = a($n, 2);
	(o(ar, { kind: `item`, name: `Mystic Burst`, ability: null }), t($));
	var or = a($, 2);
	r(or, 1, `item mystic-shot`);
	var sr = i(or);
	n(
		sr,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
<ul><li>Now requires that shotguns middle pellet hit the target</li></ul>
`
	);
	var cr = a(sr, 2);
	(o(cr, { kind: `item`, name: `Mystic Shot`, ability: null }), t(or));
	var lr = a(or, 2);
	r(lr, 1, `item phantom-strike`);
	var ur = i(lr);
	n(
		ur,
		() => `
<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>
<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>
`
	);
	var dr = a(ur, 2),
		fr = i(dr),
		pr = i(fr);
	n(pr, () => `Damage reduced from 200 to 150`);
	var mr = a(pr, 2);
	(s(mr, {
		kind: `item`,
		name: `Phantom Strike`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage reduced from 200 to 150`
	}),
		t(fr),
		t(dr));
	var hr = a(dr, 2);
	(o(hr, { kind: `item`, name: `Phantom Strike`, ability: null }), t(lr));
	var gr = a(lr, 2);
	r(gr, 1, `item reactive-barrier`);
	var _r = i(gr);
	n(
		_r,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
`
	);
	var vr = a(_r, 2),
		yr = i(vr),
		br = i(yr);
	n(br, () => `Cooldown reduced from 40s to 35s`);
	var xr = a(br, 2);
	(s(xr, {
		kind: `item`,
		name: `Reactive Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 40s to 35s`
	}),
		t(yr),
		t(vr));
	var Sr = a(vr, 2);
	(o(Sr, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(gr));
	var Cr = a(gr, 2);
	r(Cr, 1, `item refresher`);
	var wr = i(Cr);
	n(
		wr,
		() => `
<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>
<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>
<ul><li>Now grants +10% Spirit Resist</li></ul>
`
	);
	var Tr = a(wr, 2);
	(o(Tr, { kind: `item`, name: `Refresher`, ability: null }), t(Cr));
	var Er = a(Cr, 2);
	r(Er, 1, `item restorative-locket`);
	var Dr = i(Er);
	n(
		Dr,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>Now displays its current number of charges on its active icon</li></ul>
`
	);
	var Or = a(Dr, 2);
	(o(Or, { kind: `item`, name: `Restorative Locket`, ability: null }), t(Er));
	var kr = a(Er, 2);
	r(kr, 1, `item silencer`);
	var Ar = i(kr);
	n(
		Ar,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Now provides 15% Ammo</li></ul>
`
	);
	var jr = a(Ar, 2);
	(o(jr, { kind: `item`, name: `Silencer`, ability: null }), t(kr));
	var Mr = a(kr, 2);
	r(Mr, 1, `item slowing-hex`);
	var Nr = i(Mr);
	n(
		Nr,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
<ul><li>Range increased from 30 to 35</li></ul>
`
	);
	var Pr = a(Nr, 2);
	(o(Pr, { kind: `item`, name: `Slowing Hex`, ability: null }), t(Mr));
	var Fr = a(Mr, 2);
	r(Fr, 1, `item spirit-strike`);
	var Ir = i(Fr);
	n(
		Ir,
		() => `
<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>
<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>
<ul><li>No longer has +50 Health</li><li>Now grants +75 Spirit Shield</li><li>Now grants +0.7 HP regen</li></ul>
`
	);
	var Lr = a(Ir, 2);
	(o(Lr, { kind: `item`, name: `Spirit Strike`, ability: null }), t(Fr));
	var Rr = a(Fr, 2);
	r(Rr, 1, `item superior-cooldown`);
	var zr = i(Rr);
	n(
		zr,
		() => `
<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>
<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>
<ul><li>HP regen reduced from 6 to 4</li></ul>
`
	);
	var Br = a(zr, 2);
	(o(Br, { kind: `item`, name: `Superior Cooldown`, ability: null }), t(Rr), ee(e, c));
}
export { se as default, ie as metadata, l as readingManifest, ae as toc };
