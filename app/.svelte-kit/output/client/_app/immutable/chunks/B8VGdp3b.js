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
/* empty css        */ import { a, i as o, n as re } from './vWaTnxY_.js';
function ie(ee) {
	re(ee, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Infernus`,
			`Ivy`,
			`Kelvin`,
			`Lady Geist`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Seven`,
			`Shiv`,
			`Vindicta`,
			`Viscous`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function ae(ee) {
	re(ee, {
		type: `item`,
		names:
			`Active Reload.Alchemical Fire.Ammo Scavenger.Berserker.Burst Fire.Colossus.Crippling Headshot.Divine Barrier.Echo Shard.Enduring Spirit.Extra Spirit.Fleetfoot.Fortitude.Frenzy.Glass Cannon.Headshot Booster.Healing Rite.Heroic Aura.Hunter's Aura.Inhibitor.Lifestrike.Long Range.Lucky Shot.Majestic Leap.Melee Charge.Melee Lifesteal.Metal Skin.Mystic Shot.Phantom Strike.Quicksilver Reload.Rapid Recharge.Rapid Rounds.Rescue Beam.Restorative Shot.Sharpshooter.Silencer.Slowing Hex.Soul Rebirth.Spirit Strike.Surge of Power.Titanic Magazine.Torment Pulse.Unstoppable`.split(
				`.`
			)
	});
}
var oe = {
		title: `09-12-2024 Update`,
		thread_id: `27974`,
		published: `2024-09-12T14:51:49-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Matchmaking is now open 24/7 for all regions Added new minimap Added a new behavior system. Players can temporarily lose access to certain capabilities in the game. The controls include Matchmaking, Voice Chat, Text Chat, Pausing, and Reporting. The system for tracking is active now, however we will wait on most penalties for a few days as we review the results. There is now a low priority queue. The primary way to enter this is through abandoning games, but it can include other behavior. You must complete the required amount of games (escalates based on low priority frequency) to be able to return to using matchmaking normally. Regularly misreporting players will result in you losing the reporting function and may in some cases cause you to go into low priority as well. New players that are queued solo will only match with other new players until they get 4 wins The lane allocation of 1-1-2-2- and 2-2-1-1 will no longer be a possible setup A 6 player party will no longer match against solo players. This may result in longer queue times for 6 stacks. AFK players will be automatically kicked out after a few minutes Abandon Match dialog is now more clear about consequences of leaving Abandon Match now has a time delay before you can click it to help protect against some accidental cases Added custom hotkeys per hero Bounce Pad visuals have been replaced with a wind fan (no mechanic changes). The effects also indicate the travel path. Added little spirit frog legs to the Soul Urn Orange zipline is now green Space Bar no longer cancels abilities. Abilities can be pressed again to cancel the ones that have a cancel state. The Alternate Cast modes "Modifier Button" and "Alternate Cast Button" have had their behaviors merged Added UI button hints when using "Alternate Cast Button" in some extra cases Added a slider for Double Tap Alternate Cast timing Added a slider for Press and Hold Alternate Cast required time Changes to Scoreboard (TAB) and Extra Info (ALT) Client performance improvements Game now automatically starts preloading the map once the client is launched, to help reduce load time for most users Sand Box orb practice area now displays the time in milliseconds that you hit the orb after spawning Added a console command (private_lobby_create) to allow players to create custom lobbies using our servers. This has very temp UI. Once we add a real UI to it along with some misc features, we'll add a non-console way to host custom lobbies. Upgrade ability keys are now customizable (Current defaults are ALT+1, ALT+2, etc) Adjusted Midboss low health roar sound to be more distinct from spawn sound Added Maximum FPS Sliders for Dashboard and In-Game Removed Pause limit for hero testing, coop bot matches, and the tutorial Added support for launching the game in a secondary monitor properly Fixed friends menu scrolling up automatically when it shouldn't Fixed being unable to invite offline users to a party Fixed invite tooltips on friends menu not being positioned correctly Metal Skin effects revisions Seven's Static Charge effects improvement to make the boundary more clear Updated medic healing beam colors to be consistent with other heals Melee troopers no longer play swipe effect (to reduce some unnecessary noise) Added better indication when all four active slots are full Updated Ice Dome to fix some performance related issues Updated Torment visual effects to reduce some noise Added sound for Tesla Bullets proc Added sound for Toxic Bullets proc Divine Barrier wings no longer fully opaque Reduced intensity of last hit status effect Updated Echo Shard sound effects Added low ammo indication sound Improved clarity for Seven casting and channeling sounds Updated Refresher effects colors from green to purple Minor updates to Abram's Seismic Impact to resolve some states faster to reduce visual noise Updated Lady Geist Blood Bomb, Life Drain, Malice, and Soul Exchange sounds Added Shoulder Charge wall impact effects Changed open mic audio settings to allow open mic to opt in to team chat or party chat Updated effects for the Warp Stone bullet resist buff Added Lucky Shot proc sound effect Updated Berserker buff effects Adjusted Shiv's running reload animation Added wall impact animation for Abram's Shoulder Charge Lowered gun arm during Abram's jump animation to not obscure reticle Soul Jar return location effects will change color based on the captured state of the Soul Jar Lady Geist Blood bomb revisions to improve visibility in team fights Improved visibility of heroes caught in the Singularity Distance field shadows and AO no longer visible behind cosmic veils Added sliders for FSR and FSR2 sharpness Updated Wraith, Grey Talon, and Infernus VO Walker AoE Stomp has new effects Viscous Splatter effects have been adjusted Revised Silencer cast and duration sounds Added Rebirth channel and revive sounds Added Infuser cast sound Audio bug fixes related to switching spectating targets Orbs now favor the claimer rather than the denier when both impact within a very narrow window of each other Flex Slot moved from "First Walker" to "Two Walkers" All ability and item cooldowns increased by 6% globally Max respawn time now happens at 35 minutes rather than 40 minutes T4 Items Cost reduced from 6300 to 6200 Shield regeneration time reduced from 60s to 50s Wall Jump activation has been made more lenient Wall Jump launch angle can now be steered a bit more Jump shooting lockout period reduced from 0.25s to 0.15s Souls from bosses now appear much more spread out Rope climbing speed increased from 13 to 14 Taking non-dot damage while on a rope slows you by 30% Improved Heavy melee hit registration Mid Boss warning now happens at 60% instead of 50% Walker beam max range (the sticky portion after being acquired) reduced by 20% (50m to 40m) Successful Parry CD reduced from 0.5s to 0.25s Fixed Alt Fires not working with conditional bonuses (like Close Range) Melee trooper hitbox improved Fixed Medic Troopers sometimes using their heal on Guardian boss Fixed multiple heroes getting the power-up bonus by standing on top of it before spawns Fixed your gun reloading down to a smaller magazine when reloading with higher ammo than your max High-Velocity Mag: Weapon Damage reduced from 14% to 12% Hollow Point Round: Conditional Weapon Damage increased from 20% to 22% Soul Shredder Bullets: Weapon Damage increased from 6% to 7% Warpstone: Range reduced from 13m to 11m Health Nova: Now requires Healing Rite Health Nova: Now grants +4 Spirit Power Health Nova: Range reduced from 18m to 15m Mystic Reach: Spirit Resist increased from 5% to 6% Mystic Reach: Ability Range increased from 15% to 16% Withering Whip: Fire Rate slow increased from 30% to 40% Improved Burst: Damage reduced from 10% of Max HP to 9% Improved Reach: Spirit Power increased from +6 to +8 Silence Glyph: Spirit Shield reduced from +200 to +150 Added connections from the Shop to the front of the Department Store and the New York Oracle buildings Added veil in the opening at the front looking out toward the opposing side Added a cover barrier in front of the opening with the veil Moved the catwalk stair in front of the Department Store and New York Oracle closer to the Mid Angled the walkway connection from the outer lane exits to the inner lane exits Added an overhang below the Patron position Added two juke closets facing the Patron Removed the exterior ropes from the Garage and Nightclub Replaced interior stairwells with ropes inside the Garage and the Nightclub that give access to the 2nd floor and roof Raised Apothecary and Imports rooftops to match heights of the Record Store and the Comedy Club Removed rooftop details from roofs that are not safe Added rooftop details to new valid rooftops Changed collision on the shelves inside the Armory and Warehouse to improve shooting through them Replaced wall landing in front of the Nursery and the Market with an electrical box Fixed breakable items outside the underground tunnel Removed some duplicate models, lights and geometry Fixed bug where the Hotel sign was replacing billboards on other rooftops Fixed rooftop details not aligned to the new height of the rooftops Fixed enemy team from being able to enter the base side passages Abrams Fixed Seismic Impact getting stuck on ceilings like in the mid boss room Shoulder Charge turn rate reduced a bit Infernal Resilience reduced from 17% to 16% Shoulder Charge stun time reduced from 1s to 0.85s Bebop Uppercut no longer roots your hero during cast time Can now keep firing if he jumps and his laser is already warmed up Reverted recent change to make hook have an alternate cast mode to pierce through allies/enemies Hook range reduced from 35m to 30m Hyper Beam now does splash damage around a 5m area the beam connects to on the ground (can be used to fish heroes out of cover in some areas) Dynamo Rejuvenating Aurora no longer gets canceled when stamina is used Rejuvenating Aurora T3 reduced from 4% to 3.8% Kinetic Pulse T1 reduced from 40% slow to 35% Quantum Entanglement cooldown increased from 11s to 12s Grey Talon Fixed issues with Charged Shot hitting targets behind walls Fixed Guided Owl doing damage through buildings Rain of Arrows Weapon Damage reduced from +7 to +4 Rain of Arrows T2 Weapon Damage reduced from +7 to +5 Bullet damage growth per boon increased from +1.46 to +1.8 Guided Owl cooldown increased from 110s to 120s Haze Fixed issues with Sleep Dagger hitting targets behind walls Infernus Base health reduced from 625 to 600 Flame Dash slow resistance increased from 30% to 50% Ivy Fixed some control issues when flying near a wall Air Drop silence and slow debuff duration reduced from 4.5s to 4s Kelvin Arctic Beam fire rate slow reduced from 80% to 40% Arctic Beam movement slow reduced from 80% to 70% Objectives and Rejuvenator are now frozen and invulnerable when under frozen shelter Ice Path and Arctic Beam can now also be cancelled by hitting the ability key again Lady Geist Essence Bomb T3 damage increased from 22% to 26% Essence Bomb spirit scaling increased from 1.05 to 1.15 Fixed a recent bug with Malice that caused multiple blood shards to be absorbed by 1 hero rather than pass through and hit others (it didn't stack that way in any case) Self Damage no longer consumes shields (general change) Lash Ground Slam now allows you to turn during the descent Bullet growth from 1.15 to 0.9 Ground Strike Damage spirit scaling increased from 0.78 to 0.85 Ground Strike Damage Per Meter Spirit scaling increased from 0.045 to 0.05 McGinnis Medicinal Spectre radius reduced from 6m to 5m Medicinal Spectre radius now grows with Spirit Power (0.07) Can no longer wall jump from Spectral Wall Spectral Wall min range reduced from 7m to 6m Spectral Wall duration reduced from 6s to 5s Heavy Barrage spirit scaling increased from 0.3 to 0.35 Heavy Barrage min range reduced from 7m to 6m Mini Turrets bullet travel speed increased Mo & Krill Camera zooms out a little bit more when un-burrowing Can cast Scorn while using Combo Combo T2 reduced from +1s to +0.75s Paradox Fixed issues with Paradoxical Swap hitting targets behind walls Pocket Barrage amp per stack reduced from 7% to 6% Bararge slow reduced from 40% to 30% Added a brief lockout period on Flying Cloak to prevent accidental double clicks Seven Base bullet resist reduced from 8% to 0% Bullet resist no longer scales with Boons Headshot reduction increased from 25% to 35% Storm Cloud damage reduced from 124 to 110 Storm Cloud max radius reduced from 30m to 25m Storm Cloud cooldown reduced from 180s to 140s Storm Cloud audio is now a little clearer when it's cast Shiv Fixed issues with Serrated Knives hitting targets behind walls Slice and Dice damage reduced from 125 to 105 Bloodletting Deferred Damage Cleared reduced from 50% to 40% Killing Blow Bonus Damage from Full Rage reduced from +25% to +20% Killing Blow T2 now also increases Rage Amp by +5% Vindicta Base bullet damage reduced from 14 to 13 Stake T1 duration reduced from +0.75s to +0.5s Assassinate bonus gold is now shared with assisters Crow Familiar now reduces bullet armor by 6% Crow Familiar impact damage reduced from 50 to 40 Crow Familiar impact damage spirit scaling reduced from 1 to 0.8 Crow Familiar spirit power duration scaling reduced from 0.04 to 0.03 You can now use stamina while flying to get an impulse in the facing direction Space bar no longer exists the ability, you have to press the key again Assassinate now does 20% more damage when getting a headshot Assassinate scope ends when you are stunned Viscous Puddle Punch now correctly knocks people in The Cube up in the air Improved various issues with the camera Puddle punch now telegraphs an effect before it forms Base bullet damage reduced from 14 to 13 Splatter damage reduced from 110 to 100 Goo Ball turn rate improved a bit Goo Ball stun frequency cooldown improved from 1.5s to 1.25s Fixed Puddle Punch piercing Unstoppable Warden Bullet growth reduced from 1.31 to 1.2 Alchemical Flask debuff duration reduced from 7s to 6s Alchemical Flask radius reduced from 7m to 6.5m You gain 50% bullet resistance during the 2s ult channel Wraith Card Trick damage reduced from 100 to 80 Card Trick spirit scaling increased from 1.2 to 1.5 Card Trick card projectiles spawn above the reticle rather than on the left side Yamato Ammo now scales with Spirit Power (0.15) Power Slash damage reduced from 170 to 160 Grapple post cast duration reduced from 0.5 to 0.2 Alt fire now fixed to work with conditional damage sources (point blank, pristine emblem, etc) Shadow Transformation bullet and spirit resistance reduced from 55% to 40% Can now interrupt Power Slash with parry Headshot Booster Bonus damage reduced from 45 to 40 Restorative Shot Healing from heroes increased from 35 to 40 Healing from troopers increased from 10 to 15 Rapid Rounds Fire Rate reduced from 12% to 9% No longer provides -50 Max Health Active Reload Lifesteal reduced from 22% to 20% Mystic Shot Spirit damage now considers bullet falloff Cooldown reduced from 6s to 5s Berserker Bullet Resist reduced from 8% to 7% Long Range Bullet Shield increased from +90 to +140 Melee Charge Charge distance bonus is moved to innate section Passive now has a 8s cooldown When passive triggers, you deal bonus +20% Melee Damage Now gives a UI indication when reload procs Fleetfoot Active move speed reduced from 4 to 3 Cooldown reduced from 22s to 18s Health increased from +75 to +90 Heroic Aura Active movement speed bonus reduced from 3 to 2 Burst Fire Now provides +70 Health Sharpshooter Bullet Health increased from +175 to +200 Hunter's Aura Bullet Resist reduction reduced from -10% to -9% Titanic Magazine Bullet Resist increased from 15% to 18% Alchemical Fire Spirit Power increased from +7 to +11 Crippling Headshot Debuff duration reduced from 5s to 4s Lucky Shot Bonus Damage increased from 80% to 90% Glass Cannon Max stacks increased from 5 to 7 Silencer Damage increased from 15% to 20% Frenzy Linger duration increased from 4s to 6s Healing Rite Now grants +3 Spirit Power Enduring Spirit Spirit Lifesteal increased from 8% to 10% Melee Lifesteal Melee damage reduced from 15% to 13% Divine Barrier Bullet Shield shield reduced from 300 to 260 Spirit Shield shield reduced from 300 to 260 Rescue Beam Heal reduced from 30% to 26% Cast range reduced from 45m to 36m No longer requires Healing Rite Fortitude Lane troopers do not reset the passive regen timer Lifestrike Melee damage reduced from 40% to 35% Majestic Leap Cooldown reduced from 24s to 22s Metal Skin Cooldown reduced from 22s to 20s Inhibitor Fixed damage reduction on bullets not being reduced by a percentage properly Colossus Radius increased from 10m to 12m Cooldown reduced from 45s to 35s Phantom Strike Damage reduced from 150 to 75 Spirit Power scaling reduced from 2 to 1 Soul Rebirth No longer grants 20% Weapon Damage Cooldown Reduction reduced from 18% to 15% Unstoppable Fixed not preventing Disarm properly Spirit Strike Melee damage reduced from 15% to 12% Debuff duration reduced from 13s to 11s Spirit Shield reduced from 100 to 80 Regen reduced from 1 to 0.8 Extra Spirit Spirit increased from 8 to 9 Ammo Scavenger Neutral kills now count as a soul capture Buff duration increased from 35s to 40s Slowing Hex Projectile speed increased by 20% Quicksilver Reload Damage increased from 50 to 65 Surge of Power Imbued ability now grants +10% Fire Rate when used (same 6s duration as the movespeed buff) Rapid Recharge Now gains +12% Weapon Damage (T1 Extra Charge gives +6%) Torment Pulse Health increased from +125 to +140 Echo Shard Spirit Power increased from +8 to +12`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-02`, to: `2024-09-12` },
			after: { from: `2024-09-13`, to: `2024-09-15` }
		}
	},
	se = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge-1` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Uppercut`, id: `uppercut` },
		{ level: 3, title: `Can`, id: `can` },
		{ level: 3, title: `Grapple Arm`, id: `grapple-arm` },
		{ level: 3, title: `Hook`, id: `hook` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Rejuvenating Aurora`, id: `rejuvenating-aurora` },
		{ level: 3, title: `Kinetic Pulse`, id: `kinetic-pulse` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Charged Shot`, id: `charged-shot` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl-1` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 3, title: `Ice Path`, id: `ice-path` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Essence Bomb`, id: `essence-bomb` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 3, title: `Self Damage`, id: `self-damage` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Slam`, id: `ground-slam` },
		{ level: 3, title: `Ground Strike Damage`, id: `ground-strike-damage` },
		{
			level: 3,
			title: `Ground Strike Damage Per Meter Spirit`,
			id: `ground-strike-damage-per-meter-spirit`
		},
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Medicinal Spectre`, id: `medicinal-spectre` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 3, title: `Heavy Barrage`, id: `heavy-barrage` },
		{ level: 3, title: `Mini Turrets`, id: `mini-turrets` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Scorn`, id: `scorn` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Barrage`, id: `barrage` },
		{ level: 3, title: `Bararge`, id: `bararge` },
		{ level: 3, title: `Flying Cloak`, id: `flying-cloak` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 3, title: `Slice and Dice`, id: `slice-and-dice` },
		{
			level: 3,
			title: `Bloodletting Deferred Damage Cleared`,
			id: `bloodletting-deferred-damage-cleared`
		},
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Assassinate`, id: `assassinate-1` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch-1` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch-2` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Alchemical Flask`, id: `alchemical-flask` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Power Slash`, id: `power-slash` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 3, title: `Power Slash`, id: `power-slash-1` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Burst Fire`, id: `burst-fire` },
		{ level: 2, title: `Colossus`, id: `colossus` },
		{ level: 2, title: `Crippling Headshot`, id: `crippling-headshot` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Echo Shard`, id: `echo-shard` },
		{ level: 2, title: `Enduring Spirit`, id: `enduring-spirit` },
		{ level: 2, title: `Extra Spirit`, id: `extra-spirit` },
		{ level: 2, title: `Fleetfoot`, id: `fleetfoot` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Glass Cannon`, id: `glass-cannon` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Hunter's Aura`, id: `hunter-s-aura` },
		{ level: 2, title: `Inhibitor`, id: `inhibitor` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Long Range`, id: `long-range` },
		{ level: 2, title: `Lucky Shot`, id: `lucky-shot` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Melee Lifesteal`, id: `melee-lifesteal` },
		{ level: 2, title: `Metal Skin`, id: `metal-skin` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Phantom Strike`, id: `phantom-strike` },
		{ level: 2, title: `Quicksilver Reload`, id: `quicksilver-reload` },
		{ level: 2, title: `Rapid Recharge`, id: `rapid-recharge` },
		{ level: 2, title: `Rapid Rounds`, id: `rapid-rounds` },
		{ level: 2, title: `Rescue Beam`, id: `rescue-beam` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Soul Rebirth`, id: `soul-rebirth` },
		{ level: 2, title: `Spirit Strike`, id: `spirit-strike` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Torment Pulse`, id: `torment-pulse` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` }
	],
	s = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-02`, to: `2024-09-12` },
			after: { from: `2024-09-13`, to: `2024-09-15` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Burst Fire`, id: `burst-fire` },
			{ kind: `item`, name: `Colossus`, id: `colossus` },
			{ kind: `item`, name: `Crippling Headshot`, id: `crippling-headshot` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Echo Shard`, id: `echo-shard` },
			{ kind: `item`, name: `Enduring Spirit`, id: `enduring-spirit` },
			{ kind: `item`, name: `Extra Spirit`, id: `extra-spirit` },
			{ kind: `item`, name: `Fleetfoot`, id: `fleetfoot` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Glass Cannon`, id: `glass-cannon` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Hunter's Aura`, id: `hunter-s-aura` },
			{ kind: `item`, name: `Inhibitor`, id: `inhibitor` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Long Range`, id: `long-range` },
			{ kind: `item`, name: `Lucky Shot`, id: `lucky-shot` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Melee Lifesteal`, id: `melee-lifesteal` },
			{ kind: `item`, name: `Metal Skin`, id: `metal-skin` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Phantom Strike`, id: `phantom-strike` },
			{ kind: `item`, name: `Quicksilver Reload`, id: `quicksilver-reload` },
			{ kind: `item`, name: `Rapid Recharge`, id: `rapid-recharge` },
			{ kind: `item`, name: `Rapid Rounds`, id: `rapid-rounds` },
			{ kind: `item`, name: `Rescue Beam`, id: `rescue-beam` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Soul Rebirth`, id: `soul-rebirth` },
			{ kind: `item`, name: `Spirit Strike`, id: `spirit-strike` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Torment Pulse`, id: `torment-pulse` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` }
		],
		related: []
	},
	ce = ee(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!> <div><!> <!></div> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <!> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function le(ee) {
	var re = ce(),
		oe = ne(re);
	t(
		oe,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Matchmaking is now open 24/7 for all regions</li><li>Added new minimap</li><li>Added a new behavior system. Players can temporarily lose access to certain capabilities in the game. The controls include Matchmaking, Voice Chat, Text Chat, Pausing, and Reporting. The system for tracking is active now, however we will wait on most penalties for a few days as we review the results.</li><li>There is now a low priority queue. The primary way to enter this is through abandoning games, but it can include other behavior. You must complete the required amount of games (escalates based on low priority frequency) to be able to return to using matchmaking normally.</li><li>Regularly misreporting players will result in you losing the reporting function and may in some cases cause you to go into low priority as well.</li><li>New players that are queued solo will only match with other new players until they get 4 wins</li><li>The lane allocation of 1-1-2-2- and 2-2-1-1 will no longer be a possible setup</li><li>A 6 player party will no longer match against solo players. This may result in longer queue times for 6 stacks.</li><li>AFK players will be automatically kicked out after a few minutes</li><li>Abandon Match dialog is now more clear about consequences of leaving</li><li>Abandon Match now has a time delay before you can click it to help protect against some accidental cases</li><li>Added custom hotkeys per hero</li><li>Bounce Pad visuals have been replaced with a wind fan (no mechanic changes). The effects also indicate the travel path.</li><li>Added little spirit frog legs to the Soul Urn</li><li>Orange zipline is now green</li><li>Space Bar no longer cancels abilities. Abilities can be pressed again to cancel the ones that have a cancel state.</li><li>The Alternate Cast modes &quot;Modifier Button&quot; and &quot;Alternate Cast Button&quot; have had their behaviors merged</li><li>Added UI button hints when using &quot;Alternate Cast Button&quot; in some extra cases</li><li>Added a slider for Double Tap Alternate Cast timing</li><li>Added a slider for Press and Hold Alternate Cast required time</li><li>Changes to Scoreboard (TAB) and Extra Info (ALT)</li><li>Client performance improvements</li><li>Game now automatically starts preloading the map once the client is launched, to help reduce load time for most users</li><li>Sand Box orb practice area now displays the time in milliseconds that you hit the orb after spawning</li><li>Added a console command (private_lobby_create) to allow players to create custom lobbies using our servers. This has very temp UI. Once we add a real UI to it along with some misc features, we&#x27;ll add a non-console way to host custom lobbies.</li><li>Upgrade ability keys are now customizable (Current defaults are ALT+1, ALT+2, etc)</li><li>Adjusted Midboss low health roar sound to be more distinct from spawn sound</li><li>Added Maximum FPS Sliders for Dashboard and In-Game</li><li>Removed Pause limit for hero testing, coop bot matches, and the tutorial</li><li>Added support for launching the game in a secondary monitor properly</li><li>Fixed friends menu scrolling up automatically when it shouldn&#x27;t</li><li>Fixed being unable to invite offline users to a party</li><li>Fixed invite tooltips on friends menu not being positioned correctly</li><li>Metal Skin effects revisions</li><li>Seven&#x27;s Static Charge effects improvement to make the boundary more clear</li><li>Updated medic healing beam colors to be consistent with other heals</li><li>Melee troopers no longer play swipe effect (to reduce some unnecessary noise)</li><li>Added better indication when all four active slots are full</li><li>Updated Ice Dome to fix some performance related issues</li><li>Updated Torment visual effects to reduce some noise</li><li>Added sound for Tesla Bullets proc</li><li>Added sound for Toxic Bullets proc</li><li>Divine Barrier wings no longer fully opaque</li><li>Reduced intensity of last hit status effect</li><li>Updated Echo Shard sound effects</li><li>Added low ammo indication sound</li><li>Improved clarity for Seven casting and channeling sounds</li><li>Updated Refresher effects colors from green to purple</li><li>Minor updates to Abram&#x27;s Seismic Impact to resolve some states faster to reduce visual noise</li><li>Updated Lady Geist Blood Bomb, Life Drain, Malice, and Soul Exchange sounds</li><li>Added Shoulder Charge wall impact effects</li><li>Changed open mic audio settings to allow open mic to opt in to team chat or party chat</li><li>Updated effects for the Warp Stone bullet resist buff</li><li>Added Lucky Shot proc sound effect</li><li>Updated Berserker buff effects</li><li>Adjusted Shiv&#x27;s running reload animation</li><li>Added wall impact animation for Abram&#x27;s Shoulder Charge</li><li>Lowered gun arm during Abram&#x27;s jump animation to not obscure reticle</li><li>Soul Jar return location effects will change color based on the captured state of the Soul Jar</li><li>Lady Geist Blood bomb revisions to improve visibility in team fights</li><li>Improved visibility of heroes caught in the Singularity</li><li>Distance field shadows and AO no longer visible behind cosmic veils</li><li>Added sliders for FSR and FSR2 sharpness</li><li>Updated Wraith, Grey Talon, and Infernus VO</li><li>Walker AoE Stomp has new effects</li><li>Viscous Splatter effects have been adjusted</li><li>Revised Silencer cast and duration sounds</li><li>Added Rebirth channel and revive sounds</li><li>Added Infuser cast sound</li><li>Audio bug fixes related to switching spectating targets</li><li>Orbs now favor the claimer rather than the denier when both impact within a very narrow window of each other</li><li>Flex Slot moved from &quot;First Walker&quot; to &quot;Two Walkers&quot;</li><li>All ability and item cooldowns increased by 6% globally</li><li>Max respawn time now happens at 35 minutes rather than 40 minutes</li><li>T4 Items Cost reduced from 6300 to 6200</li><li>Shield regeneration time reduced from 60s to 50s</li><li>Wall Jump activation has been made more lenient</li><li>Wall Jump launch angle can now be steered a bit more</li><li>Jump shooting lockout period reduced from 0.25s to 0.15s</li><li>Souls from bosses now appear much more spread out</li><li>Rope climbing speed increased from 13 to 14</li><li>Taking non-dot damage while on a rope slows you by 30%</li><li>Improved Heavy melee hit registration</li><li>Mid Boss warning now happens at 60% instead of 50%</li><li>Walker beam max range (the sticky portion after being acquired) reduced by 20% (50m to 40m)</li><li>Successful Parry CD reduced from 0.5s to 0.25s</li><li>Fixed Alt Fires not working with conditional bonuses (like Close Range)</li><li>Melee trooper hitbox improved</li><li>Fixed Medic Troopers sometimes using their heal on Guardian boss</li><li>Fixed multiple heroes getting the power-up bonus by standing on top of it before spawns</li><li>Fixed your gun reloading down to a smaller magazine when reloading with higher ammo than your max</li><li>High-Velocity Mag: Weapon Damage reduced from 14% to 12%</li><li>Hollow Point Round: Conditional Weapon Damage increased from 20% to 22%</li><li>Soul Shredder Bullets: Weapon Damage increased from 6% to 7%</li><li>Warpstone: Range reduced from 13m to 11m</li><li>Health Nova: Now requires Healing Rite</li><li>Health Nova: Now grants +4 Spirit Power</li><li>Health Nova: Range reduced from 18m to 15m</li><li>Mystic Reach: Spirit Resist increased from 5% to 6%</li><li>Mystic Reach: Ability Range increased from 15% to 16%</li><li>Withering Whip: Fire Rate slow increased from 30% to 40%</li><li>Improved Burst: Damage reduced from 10% of Max HP to 9%</li><li>Improved Reach: Spirit Power increased from +6 to +8</li><li>Silence Glyph: Spirit Shield reduced from +200 to +150</li><li>Added connections from the Shop to the front of the Department Store and the New York Oracle buildings</li><li>Added veil in the opening at the front looking out toward the opposing side</li><li>Added a cover barrier in front of the opening with the veil</li><li>Moved the catwalk stair in front of the Department Store and New York Oracle closer to the Mid</li></ul>
<p><img src="https://project8-data.community.forum/attachments/17/17443-145795682b5bfb0f32bdd69706280079.jpg?hash=f8_ivoAA1U" alt="amber green guardian arena"  decoding="async" loading="eager"/> <img src="https://project8-data.community.forum/attachments/17/17444-34a95b0bdbb73b04efa0f6acaaf65d52.jpg?hash=36i2pefoZ0" alt="dynamo 01"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/17/17445-cdcefa77eba31d5dcdd2c3d895be519d.jpg?hash=BPNeGGmSMX" alt="dynamo 02"  decoding="async" loading="lazy"/></p>
<ul><li>Angled the walkway connection from the outer lane exits to the inner lane exits</li><li>Added an overhang below the Patron position</li><li>Added two juke closets facing the Patron</li></ul>
<p><img src="https://project8-data.community.forum/attachments/17/17446-04de5556901f801820332c3e909d0ab9.jpg?hash=0C384U6yxG" alt="base update 091224"  decoding="async" loading="lazy"/></p>
<ul><li>Removed the exterior ropes from the Garage and Nightclub</li><li>Replaced interior stairwells with ropes inside the Garage and the Nightclub that give access to the 2nd floor and roof</li></ul>
<p><img src="https://project8-data.community.forum/attachments/17/17447-833c539e409ced6a3d73fd86028717b9.jpg?hash=w1qgNaD322" alt="dynamo 03"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/17/17448-4ee82fb4bbef519b24f8b11de68af7cc.jpg?hash=at8245MHnv" alt="dynamo 04"  decoding="async" loading="lazy"/></p>
<ul><li>Raised Apothecary and Imports rooftops to match heights of the Record Store and the Comedy Club</li><li>Removed rooftop details from roofs that are not safe</li><li>Added rooftop details to new valid rooftops</li><li>Changed collision on the shelves inside the Armory and Warehouse to improve shooting through them</li><li>Replaced wall landing in front of the Nursery and the Market with an electrical box</li><li>Fixed breakable items outside the underground tunnel</li><li>Removed some duplicate models, lights and geometry</li><li>Fixed bug where the Hotel sign was replacing billboards on other rooftops</li><li>Fixed rooftop details not aligned to the new height of the rooftops</li><li>Fixed enemy team from being able to enter the base side passages</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var se = i(oe, 2);
	ie(se, {});
	var s = i(se, 2);
	n(s, 1, `hero abrams`);
	var le = r(s);
	t(
		le,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var ue = i(le, 2);
	n(ue, 1, `ability seismic-impact`);
	var de = r(ue);
	t(
		de,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Fixed Seismic Impact getting stuck on ceilings like in the mid boss room</li></ul>
`
	);
	var fe = i(de, 2);
	(a(fe, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), e(ue));
	var c = i(ue, 2);
	n(c, 1, `ability shoulder-charge`);
	var pe = r(c);
	t(
		pe,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Shoulder Charge turn rate reduced a bit</li></ul>
`
	);
	var me = i(pe, 2);
	(a(me, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), e(c));
	var l = i(c, 2);
	n(l, 1, `ability infernal-resilience`);
	var he = r(l);
	t(
		he,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience reduced from 17% to 16%</li></ul>
`
	);
	var ge = i(he, 2);
	(a(ge, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), e(l));
	var _e = i(l, 2);
	n(_e, 1, `ability shoulder-charge`);
	var ve = r(_e);
	t(
		ve,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge-1"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Shoulder Charge stun time reduced from 1s to 0.85s</li></ul>
`
	);
	var ye = i(ve, 2);
	(a(ye, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), e(_e), e(s));
	var u = i(s, 2);
	n(u, 1, `hero bebop`);
	var be = r(u);
	t(
		be,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var d = i(be, 2);
	n(d, 1, `ability uppercut`);
	var xe = r(d);
	t(
		xe,
		() => `
<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Uppercut change history</a></p>
<h4 id="uppercut"><a href="/ability/exploding-uppercut">Uppercut</a></h4>
<ul><li>Uppercut no longer roots your hero during cast time</li></ul>
`
	);
	var Se = i(xe, 2);
	(a(Se, { kind: `hero`, name: `Bebop`, ability: `Uppercut` }), e(d));
	var f = i(d, 2);
	n(f, 1, `ability can`);
	var Ce = r(f);
	t(
		Ce,
		() => `
<h4 id="can">Can</h4>
<ul><li>Can now keep firing if he jumps and his laser is already warmed up</li></ul>
`
	);
	var we = i(Ce, 2);
	(a(we, { kind: `hero`, name: `Bebop`, ability: `Can` }), e(f));
	var p = i(f, 2);
	n(p, 1, `ability grapple-arm`);
	var Te = r(p);
	t(
		Te,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>
<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>
<ul><li>Reverted recent change to make hook have an alternate cast mode to pierce through allies/enemies</li></ul>
`
	);
	var Ee = i(Te, 2);
	(a(Ee, { kind: `hero`, name: `Bebop`, ability: `Grapple Arm` }), e(p));
	var m = i(p, 2);
	n(m, 1, `ability hook`);
	var De = r(m);
	t(
		De,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>
<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>
<ul><li>Hook range reduced from 35m to 30m</li></ul>
`
	);
	var Oe = i(De, 2);
	(a(Oe, { kind: `hero`, name: `Bebop`, ability: `Hook` }), e(m));
	var ke = i(m, 2);
	n(ke, 1, `ability hyper-beam`);
	var Ae = r(ke);
	t(
		Ae,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam now does splash damage around a 5m area the beam connects to on the ground (can be used to fish heroes out of cover in some areas)</li></ul>
`
	);
	var je = i(Ae, 2);
	(a(je, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), e(ke), e(u));
	var h = i(u, 2);
	n(h, 1, `hero dynamo`);
	var Me = r(h);
	t(
		Me,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var g = i(Me, 2);
	n(g, 1, `ability rejuvenating-aurora`);
	var Ne = r(g);
	t(
		Ne,
		() => `
<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>
<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>
<ul><li>Rejuvenating Aurora no longer gets canceled when stamina is used</li><li>Rejuvenating Aurora T3 reduced from 4% to 3.8%</li></ul>
`
	);
	var Pe = i(Ne, 2);
	(a(Pe, { kind: `hero`, name: `Dynamo`, ability: `Rejuvenating Aurora` }), e(g));
	var _ = i(g, 2);
	n(_, 1, `ability kinetic-pulse`);
	var Fe = r(_);
	t(
		Fe,
		() => `
<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>
<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>
<ul><li>Kinetic Pulse T1 reduced from 40% slow to 35%</li></ul>
`
	);
	var Ie = i(Fe, 2);
	(a(Ie, { kind: `hero`, name: `Dynamo`, ability: `Kinetic Pulse` }), e(_));
	var Le = i(_, 2);
	n(Le, 1, `ability quantum-entanglement`);
	var Re = r(Le);
	t(
		Re,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
`
	);
	var ze = i(Re, 2),
		Be = r(ze),
		Ve = r(Be);
	t(Ve, () => `Quantum Entanglement cooldown increased from 11s to 12s`);
	var He = i(Ve, 2);
	(o(He, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Quantum Entanglement cooldown increased from 11s to 12s`
	}),
		e(Be),
		e(ze));
	var Ue = i(ze, 2);
	(a(Ue, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), e(Le), e(h));
	var v = i(h, 2);
	n(v, 1, `hero grey-talon`);
	var We = r(v);
	t(
		We,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var y = i(We, 2);
	n(y, 1, `ability charged-shot`);
	var Ge = r(y);
	t(
		Ge,
		() => `
<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>
<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>
<ul><li>Fixed issues with Charged Shot hitting targets behind walls</li></ul>
`
	);
	var Ke = i(Ge, 2);
	(a(Ke, { kind: `hero`, name: `Grey Talon`, ability: `Charged Shot` }), e(y));
	var b = i(y, 2);
	n(b, 1, `ability guided-owl`);
	var qe = r(b);
	t(
		qe,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
<ul><li>Fixed Guided Owl doing damage through buildings</li></ul>
`
	);
	var Je = i(qe, 2);
	(a(Je, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), e(b));
	var x = i(b, 2);
	n(x, 1, `ability rain-of-arrows`);
	var Ye = r(x);
	t(
		Ye,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
<ul><li>Rain of Arrows Weapon Damage reduced from +7 to +4</li><li>Rain of Arrows T2 Weapon Damage reduced from +7 to +5</li></ul>
`
	);
	var Xe = i(Ye, 2);
	(a(Xe, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), e(x));
	var Ze = i(x, 2);
	t(
		Ze,
		() => `
<ul><li>Bullet damage growth per boon increased from +1.46 to +1.8</li></ul>
`
	);
	var Qe = i(Ze, 2);
	n(Qe, 1, `ability guided-owl`);
	var $e = r(Qe);
	t(
		$e,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl-1"><a href="/ability/guided-owl">Guided Owl</a></h4>
`
	);
	var et = i($e, 2),
		tt = r(et),
		nt = r(tt);
	t(nt, () => `Guided Owl cooldown increased from 110s to 120s`);
	var rt = i(nt, 2);
	(o(rt, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 4,
		bulletIndex: 0,
		text: `Guided Owl cooldown increased from 110s to 120s`
	}),
		e(tt),
		e(et));
	var it = i(et, 2);
	(a(it, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), e(Qe), e(v));
	var S = i(v, 2);
	n(S, 1, `hero haze`);
	var at = r(S);
	t(
		at,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var ot = i(at, 2);
	n(ot, 1, `ability sleep-dagger`);
	var st = r(ot);
	t(
		st,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Fixed issues with Sleep Dagger hitting targets behind walls</li></ul>
`
	);
	var ct = i(st, 2);
	(a(ct, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), e(ot), e(S));
	var C = i(S, 2);
	n(C, 1, `hero infernus`);
	var lt = r(C);
	t(
		lt,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
<ul><li>Base health reduced from 625 to 600</li></ul>
`
	);
	var ut = i(lt, 2);
	n(ut, 1, `ability flame-dash`);
	var dt = r(ut);
	t(
		dt,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
<ul><li>Flame Dash slow resistance increased from 30% to 50%</li></ul>
`
	);
	var ft = i(dt, 2);
	(a(ft, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), e(ut), e(C));
	var w = i(C, 2);
	n(w, 1, `hero ivy`);
	var pt = r(w);
	t(
		pt,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
<ul><li>Fixed some control issues when flying near a wall</li></ul>
`
	);
	var mt = i(pt, 2);
	n(mt, 1, `ability air-drop`);
	var ht = r(mt);
	t(
		ht,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop silence and slow debuff duration reduced from 4.5s to 4s</li></ul>
`
	);
	var gt = i(ht, 2);
	(a(gt, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), e(mt), e(w));
	var T = i(w, 2);
	n(T, 1, `hero kelvin`);
	var _t = r(T);
	t(
		_t,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var E = i(_t, 2);
	n(E, 1, `ability arctic-beam`);
	var vt = r(E);
	t(
		vt,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam fire rate slow reduced from 80% to 40%</li><li>Arctic Beam movement slow reduced from 80% to 70%</li></ul>
`
	);
	var yt = i(vt, 2);
	(a(yt, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), e(E));
	var D = i(E, 2);
	n(D, 1, `ability frozen-shelter`);
	var bt = r(D);
	t(
		bt,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
<ul><li>Objectives and Rejuvenator are now frozen and invulnerable when under frozen shelter</li></ul>
`
	);
	var xt = i(bt, 2);
	(a(xt, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), e(D));
	var St = i(D, 2);
	n(St, 1, `ability ice-path`);
	var Ct = r(St);
	t(
		Ct,
		() => `
<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>
<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>
<ul><li>Ice Path and Arctic Beam can now also be cancelled by hitting the ability key again</li></ul>
`
	);
	var wt = i(Ct, 2);
	(a(wt, { kind: `hero`, name: `Kelvin`, ability: `Ice Path` }), e(St), e(T));
	var O = i(T, 2);
	n(O, 1, `hero lady-geist`);
	var Tt = r(O);
	t(
		Tt,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var k = i(Tt, 2);
	n(k, 1, `ability essence-bomb`);
	var Et = r(k);
	t(
		Et,
		() => `
<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>
<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>
`
	);
	var Dt = i(Et, 2),
		Ot = r(Dt),
		kt = r(Ot);
	t(kt, () => `Essence Bomb T3 damage increased from 22% to 26%`);
	var At = i(kt, 2);
	(o(At, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Essence Bomb T3 damage increased from 22% to 26%`
	}),
		e(Ot));
	var jt = i(Ot, 2);
	(t(jt, () => `Essence Bomb spirit scaling increased from 1.05 to 1.15`, !0),
		e(jt),
		e(Dt));
	var Mt = i(Dt, 2);
	(a(Mt, { kind: `hero`, name: `Lady Geist`, ability: `Essence Bomb` }), e(k));
	var A = i(k, 2);
	n(A, 1, `ability malice`);
	var Nt = r(A);
	t(
		Nt,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
<ul><li>Fixed a recent bug with Malice that caused multiple blood shards to be absorbed by 1 hero rather than pass through and hit others (it didn&#x27;t stack that way in any case)</li></ul>
`
	);
	var Pt = i(Nt, 2);
	(a(Pt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), e(A));
	var Ft = i(A, 2);
	n(Ft, 1, `ability self-damage`);
	var It = r(Ft);
	t(
		It,
		() => `
<h4 id="self-damage">Self Damage</h4>
<ul><li>Self Damage no longer consumes shields (general change)</li></ul>
`
	);
	var Lt = i(It, 2);
	(a(Lt, { kind: `hero`, name: `Lady Geist`, ability: `Self Damage` }), e(Ft), e(O));
	var j = i(O, 2);
	n(j, 1, `hero lash`);
	var Rt = r(j);
	t(
		Rt,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var M = i(Rt, 2);
	n(M, 1, `ability ground-slam`);
	var zt = r(M);
	t(
		zt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Slam change history</a></p>
<h4 id="ground-slam"><a href="/ability/ground-strike">Ground Slam</a></h4>
<ul><li>Ground Slam now allows you to turn during the descent</li></ul>
`
	);
	var Bt = i(zt, 2);
	(a(Bt, { kind: `hero`, name: `Lash`, ability: `Ground Slam` }), e(M));
	var Vt = i(M, 2);
	t(
		Vt,
		() => `
<ul><li>Bullet growth from 1.15 to 0.9</li></ul>
`
	);
	var N = i(Vt, 2);
	n(N, 1, `ability ground-strike-damage`);
	var Ht = r(N);
	t(
		Ht,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike Damage change history</a></p>
<h4 id="ground-strike-damage"><a href="/ability/ground-strike">Ground Strike Damage</a></h4>
<ul><li>Ground Strike Damage spirit scaling increased from 0.78 to 0.85</li></ul>
`
	);
	var Ut = i(Ht, 2);
	(a(Ut, { kind: `hero`, name: `Lash`, ability: `Ground Strike Damage` }), e(N));
	var Wt = i(N, 2);
	n(Wt, 1, `ability ground-strike-damage-per-meter-spirit`);
	var Gt = r(Wt);
	t(
		Gt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike Damage Per Meter Spirit change history</a></p>
<h4 id="ground-strike-damage-per-meter-spirit"><a href="/ability/ground-strike">Ground Strike Damage Per Meter Spirit</a></h4>
<ul><li>Ground Strike Damage Per Meter Spirit scaling increased from 0.045 to 0.05</li></ul>
`
	);
	var Kt = i(Gt, 2);
	(a(Kt, {
		kind: `hero`,
		name: `Lash`,
		ability: `Ground Strike Damage Per Meter Spirit`
	}),
		e(Wt),
		e(j));
	var P = i(j, 2);
	n(P, 1, `hero mcginnis`);
	var qt = r(P);
	t(
		qt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var F = i(qt, 2);
	n(F, 1, `ability medicinal-spectre`);
	var Jt = r(F);
	t(
		Jt,
		() => `
<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Spectre change history</a></p>
<h4 id="medicinal-spectre"><a href="/ability/medicinal-specter">Medicinal Spectre</a></h4>
`
	);
	var Yt = i(Jt, 2),
		Xt = r(Yt),
		Zt = r(Xt);
	t(Zt, () => `Medicinal Spectre radius reduced from 6m to 5m`);
	var Qt = i(Zt, 2);
	(o(Qt, {
		kind: `hero`,
		name: `McGinnis`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Medicinal Spectre radius reduced from 6m to 5m`
	}),
		e(Xt));
	var $t = i(Xt, 2);
	(t($t, () => `Medicinal Spectre radius now grows with Spirit Power (0.07)`, !0),
		e($t),
		e(Yt));
	var en = i(Yt, 2);
	(a(en, { kind: `hero`, name: `McGinnis`, ability: `Medicinal Spectre` }), e(F));
	var I = i(F, 2);
	n(I, 1, `ability spectral-wall`);
	var tn = r(I);
	t(
		tn,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Can no longer wall jump from Spectral Wall</li><li>Spectral Wall min range reduced from 7m to 6m</li><li>Spectral Wall duration reduced from 6s to 5s</li></ul>
`
	);
	var nn = i(tn, 2);
	(a(nn, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), e(I));
	var L = i(I, 2);
	n(L, 1, `ability heavy-barrage`);
	var rn = r(L);
	t(
		rn,
		() => `
<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>
<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>
<ul><li>Heavy Barrage spirit scaling increased from 0.3 to 0.35</li><li>Heavy Barrage min range reduced from 7m to 6m</li></ul>
`
	);
	var an = i(rn, 2);
	(a(an, { kind: `hero`, name: `McGinnis`, ability: `Heavy Barrage` }), e(L));
	var on = i(L, 2);
	n(on, 1, `ability mini-turrets`);
	var sn = r(on);
	t(
		sn,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>
<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>
<ul><li>Mini Turrets bullet travel speed increased</li></ul>
`
	);
	var cn = i(sn, 2);
	(a(cn, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets` }), e(on), e(P));
	var R = i(P, 2);
	n(R, 1, `hero mo-krill`);
	var ln = r(R);
	t(
		ln,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
<ul><li>Camera zooms out a little bit more when un-burrowing</li></ul>
`
	);
	var z = i(ln, 2);
	n(z, 1, `ability scorn`);
	var un = r(z);
	t(
		un,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>
<ul><li>Can cast Scorn while using Combo</li></ul>
`
	);
	var dn = i(un, 2);
	(a(dn, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), e(z));
	var fn = i(z, 2);
	n(fn, 1, `ability combo`);
	var pn = r(fn);
	t(
		pn,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Combo T2 reduced from +1s to +0.75s</li></ul>
`
	);
	var mn = i(pn, 2);
	(a(mn, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), e(fn), e(R));
	var B = i(R, 2);
	n(B, 1, `hero paradox`);
	var hn = r(B);
	t(
		hn,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var gn = i(hn, 2);
	n(gn, 1, `ability paradoxical-swap`);
	var _n = r(gn);
	t(
		_n,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
<ul><li>Fixed issues with Paradoxical Swap hitting targets behind walls</li></ul>
`
	);
	var vn = i(_n, 2);
	(a(vn, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), e(gn), e(B));
	var V = i(B, 2);
	n(V, 1, `hero pocket`);
	var yn = r(V);
	t(
		yn,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var H = i(yn, 2);
	n(H, 1, `ability barrage`);
	var bn = r(H);
	t(
		bn,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>
<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>
<ul><li>Barrage amp per stack reduced from 7% to 6%</li></ul>
`
	);
	var xn = i(bn, 2);
	(a(xn, { kind: `hero`, name: `Pocket`, ability: `Barrage` }), e(H));
	var U = i(H, 2);
	n(U, 1, `ability bararge`);
	var Sn = r(U);
	t(
		Sn,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bararge change history</a></p>
<h4 id="bararge"><a href="/ability/barrage">Bararge</a></h4>
<ul><li>Bararge slow reduced from 40% to 30%</li></ul>
`
	);
	var Cn = i(Sn, 2);
	(a(Cn, { kind: `hero`, name: `Pocket`, ability: `Bararge` }), e(U));
	var wn = i(U, 2);
	n(wn, 1, `ability flying-cloak`);
	var Tn = r(wn);
	t(
		Tn,
		() => `
<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>
<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>
<ul><li>Added a brief lockout period on Flying Cloak to prevent accidental double clicks</li></ul>
`
	);
	var En = i(Tn, 2);
	(a(En, { kind: `hero`, name: `Pocket`, ability: `Flying Cloak` }), e(wn), e(V));
	var W = i(V, 2);
	n(W, 1, `hero seven`);
	var Dn = r(W);
	t(
		Dn,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
<ul><li>Base bullet resist reduced from 8% to 0%</li><li>Bullet resist no longer scales with Boons</li><li>Headshot reduction increased from 25% to 35%</li></ul>
`
	);
	var On = i(Dn, 2);
	n(On, 1, `ability storm-cloud`);
	var kn = r(On);
	t(
		kn,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
`
	);
	var An = i(kn, 2),
		jn = r(An),
		Mn = r(jn);
	t(Mn, () => `Storm Cloud damage reduced from 124 to 110`);
	var Nn = i(Mn, 2);
	(o(Nn, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Storm Cloud damage reduced from 124 to 110`
	}),
		e(jn));
	var Pn = i(jn, 2);
	(t(Pn, () => `Storm Cloud max radius reduced from 30m to 25m`, !0), e(Pn));
	var Fn = i(Pn, 2),
		In = r(Fn);
	t(In, () => `Storm Cloud cooldown reduced from 180s to 140s`);
	var Ln = i(In, 2);
	(o(Ln, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 1,
		bulletIndex: 2,
		text: `Storm Cloud cooldown reduced from 180s to 140s`
	}),
		e(Fn));
	var Rn = i(Fn, 2);
	(t(Rn, () => `Storm Cloud audio is now a little clearer when it&#x27;s cast`, !0),
		e(Rn),
		e(An));
	var zn = i(An, 2);
	(a(zn, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), e(On), e(W));
	var G = i(W, 2);
	n(G, 1, `hero shiv`);
	var Bn = r(G);
	t(
		Bn,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var K = i(Bn, 2);
	n(K, 1, `ability serrated-knives`);
	var Vn = r(K);
	t(
		Vn,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
<ul><li>Fixed issues with Serrated Knives hitting targets behind walls</li></ul>
`
	);
	var Hn = i(Vn, 2);
	(a(Hn, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), e(K));
	var q = i(K, 2);
	n(q, 1, `ability slice-and-dice`);
	var Un = r(q);
	t(
		Un,
		() => `
<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>
<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>
`
	);
	var Wn = i(Un, 2),
		Gn = r(Wn),
		Kn = r(Gn);
	t(Kn, () => `Slice and Dice damage reduced from 125 to 105`);
	var qn = i(Kn, 2);
	(o(qn, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Slice and Dice damage reduced from 125 to 105`
	}),
		e(Gn),
		e(Wn));
	var Jn = i(Wn, 2);
	(a(Jn, { kind: `hero`, name: `Shiv`, ability: `Slice and Dice` }), e(q));
	var J = i(q, 2);
	n(J, 1, `ability bloodletting-deferred-damage-cleared`);
	var Yn = r(J);
	t(
		Yn,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Deferred Damage Cleared change history</a></p>
<h4 id="bloodletting-deferred-damage-cleared"><a href="/ability/bloodletting">Bloodletting Deferred Damage Cleared</a></h4>
<ul><li>Bloodletting Deferred Damage Cleared reduced from 50% to 40%</li></ul>
`
	);
	var Xn = i(Yn, 2);
	(a(Xn, { kind: `hero`, name: `Shiv`, ability: `Bloodletting Deferred Damage Cleared` }),
		e(J));
	var Zn = i(J, 2);
	n(Zn, 1, `ability killing-blow`);
	var Qn = r(Zn);
	t(
		Qn,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow Bonus Damage from Full Rage reduced from +25% to +20%</li><li>Killing Blow T2 now also increases Rage Amp by +5%</li></ul>
`
	);
	var $n = i(Qn, 2);
	(a($n, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), e(Zn), e(G));
	var Y = i(G, 2);
	n(Y, 1, `hero vindicta`);
	var er = r(Y);
	t(
		er,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Base bullet damage reduced from 14 to 13</li></ul>
`
	);
	var X = i(er, 2);
	n(X, 1, `ability stake`);
	var tr = r(X);
	t(
		tr,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
<ul><li>Stake T1 duration reduced from +0.75s to +0.5s</li></ul>
`
	);
	var nr = i(tr, 2);
	(a(nr, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), e(X));
	var Z = i(X, 2);
	n(Z, 1, `ability assassinate`);
	var rr = r(Z);
	t(
		rr,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate bonus gold is now shared with assisters</li></ul>
`
	);
	var ir = i(rr, 2);
	(a(ir, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(Z));
	var Q = i(Z, 2);
	n(Q, 1, `ability crow-familiar`);
	var ar = r(Q);
	t(
		ar,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar now reduces bullet armor by 6%</li><li>Crow Familiar impact damage reduced from 50 to 40</li><li>Crow Familiar impact damage spirit scaling reduced from 1 to 0.8</li><li>Crow Familiar spirit power duration scaling reduced from 0.04 to 0.03</li></ul>
`
	);
	var or = i(ar, 2);
	(a(or, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), e(Q));
	var sr = i(Q, 2);
	n(sr, 1, `ability flight`);
	var cr = r(sr);
	t(
		cr,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
<ul><li>You can now use stamina while flying to get an impulse in the facing direction</li><li>Space bar no longer exists the ability, you have to press the key again</li></ul>
`
	);
	var lr = i(cr, 2);
	(a(lr, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), e(sr));
	var ur = i(sr, 2);
	n(ur, 1, `ability assassinate`);
	var dr = r(ur);
	t(
		dr,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate-1"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate now does 20% more damage when getting a headshot</li><li>Assassinate scope ends when you are stunned</li></ul>
`
	);
	var fr = i(dr, 2);
	(a(fr, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(ur), e(Y));
	var pr = i(Y, 2);
	n(pr, 1, `hero viscous`);
	var mr = r(pr);
	t(
		mr,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var hr = i(mr, 2);
	n(hr, 1, `ability puddle-punch`);
	var gr = r(hr);
	t(
		gr,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Puddle Punch now correctly knocks people in The Cube up in the air</li></ul>
`
	);
	var _r = i(gr, 2);
	(a(_r, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(hr));
	var vr = i(hr, 2);
	t(
		vr,
		() => `
<ul><li>Improved various issues with the camera</li></ul>
`
	);
	var yr = i(vr, 2);
	n(yr, 1, `ability puddle-punch`);
	var br = r(yr);
	t(
		br,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch-1"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Puddle punch now telegraphs an effect before it forms</li></ul>
`
	);
	var xr = i(br, 2);
	(a(xr, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(yr));
	var Sr = i(yr, 2);
	t(
		Sr,
		() => `
<ul><li>Base bullet damage reduced from 14 to 13</li></ul>
`
	);
	var Cr = i(Sr, 2);
	n(Cr, 1, `ability splatter`);
	var wr = r(Cr);
	t(
		wr,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
`
	);
	var Tr = i(wr, 2),
		Er = r(Tr),
		Dr = r(Er);
	t(Dr, () => `Splatter damage reduced from 110 to 100`);
	var Or = i(Dr, 2);
	(o(Or, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 4,
		bulletIndex: 0,
		text: `Splatter damage reduced from 110 to 100`
	}),
		e(Er),
		e(Tr));
	var kr = i(Tr, 2);
	(a(kr, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), e(Cr));
	var Ar = i(Cr, 2);
	n(Ar, 1, `ability goo-ball`);
	var jr = r(Ar);
	t(
		jr,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball turn rate improved a bit</li><li>Goo Ball stun frequency cooldown improved from 1.5s to 1.25s</li></ul>
`
	);
	var Mr = i(jr, 2);
	(a(Mr, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), e(Ar));
	var Nr = i(Ar, 2);
	n(Nr, 1, `ability puddle-punch`);
	var Pr = r(Nr);
	t(
		Pr,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch-2"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Fixed Puddle Punch piercing Unstoppable</li></ul>
`
	);
	var Fr = i(Pr, 2);
	(a(Fr, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(Nr), e(pr));
	var Ir = i(pr, 2);
	n(Ir, 1, `hero warden`);
	var Lr = r(Ir);
	t(
		Lr,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Bullet growth reduced from 1.31 to 1.2</li></ul>
`
	);
	var Rr = i(Lr, 2);
	n(Rr, 1, `ability alchemical-flask`);
	var zr = r(Rr);
	t(
		zr,
		() => `
<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>
<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>
`
	);
	var Br = i(zr, 2),
		Vr = r(Br);
	(t(Vr, () => `Alchemical Flask debuff duration reduced from 7s to 6s`, !0), e(Vr));
	var Hr = i(Vr, 2),
		Ur = r(Hr);
	t(Ur, () => `Alchemical Flask radius reduced from 7m to 6.5m`);
	var Wr = i(Ur, 2);
	(o(Wr, {
		kind: `hero`,
		name: `Warden`,
		groupIndex: 1,
		bulletIndex: 1,
		text: `Alchemical Flask radius reduced from 7m to 6.5m`
	}),
		e(Hr),
		e(Br));
	var Gr = i(Br, 2);
	(a(Gr, { kind: `hero`, name: `Warden`, ability: `Alchemical Flask` }), e(Rr));
	var Kr = i(Rr, 2);
	n(Kr, 1, `ability last-stand`);
	var qr = r(Kr);
	t(
		qr,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>You gain 50% bullet resistance during the 2s ult channel</li></ul>
`
	);
	var Jr = i(qr, 2);
	(a(Jr, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), e(Kr), e(Ir));
	var Yr = i(Ir, 2);
	n(Yr, 1, `hero wraith`);
	var Xr = r(Yr);
	t(
		Xr,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var Zr = i(Xr, 2);
	n(Zr, 1, `ability card-trick`);
	var Qr = r(Zr);
	t(
		Qr,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
`
	);
	var $r = i(Qr, 2),
		ei = r($r),
		ti = r(ei);
	t(ti, () => `Card Trick damage reduced from 100 to 80`);
	var ni = i(ti, 2);
	(o(ni, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Card Trick damage reduced from 100 to 80`
	}),
		e(ei));
	var ri = i(ei, 2);
	(t(ri, () => `Card Trick spirit scaling increased from 1.2 to 1.5`, !0), e(ri));
	var ii = i(ri, 2);
	(t(
		ii,
		() =>
			`Card Trick card projectiles spawn above the reticle rather than on the left side`,
		!0
	),
		e(ii),
		e($r));
	var ai = i($r, 2);
	(a(ai, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), e(Zr), e(Yr));
	var oi = i(Yr, 2);
	n(oi, 1, `hero yamato`);
	var si = r(oi);
	t(
		si,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
<ul><li>Ammo now scales with Spirit Power (0.15)</li></ul>
`
	);
	var ci = i(si, 2);
	n(ci, 1, `ability power-slash`);
	var li = r(ci);
	t(
		li,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>
`
	);
	var ui = i(li, 2),
		di = r(ui),
		fi = r(di);
	t(fi, () => `Power Slash damage reduced from 170 to 160`);
	var pi = i(fi, 2);
	(o(pi, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Power Slash damage reduced from 170 to 160`
	}),
		e(di),
		e(ui));
	var mi = i(ui, 2);
	(a(mi, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), e(ci));
	var hi = i(ci, 2);
	n(hi, 1, `ability flying-slash`);
	var gi = r(hi);
	t(
		gi,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Grapple post cast duration reduced from 0.5 to 0.2</li></ul>
`
	);
	var _i = i(gi, 2);
	(a(_i, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), e(hi));
	var vi = i(hi, 2);
	t(
		vi,
		() => `
<ul><li>Alt fire now fixed to work with conditional damage sources (point blank, pristine emblem, etc)</li></ul>
`
	);
	var yi = i(vi, 2);
	n(yi, 1, `ability shadow-transformation`);
	var bi = r(yi);
	t(
		bi,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation bullet and spirit resistance reduced from 55% to 40%</li></ul>
`
	);
	var xi = i(bi, 2);
	(a(xi, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }), e(yi));
	var Si = i(yi, 2);
	n(Si, 1, `ability power-slash`);
	var Ci = r(Si);
	t(
		Ci,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash-1"><a href="/ability/power-slash">Power Slash</a></h4>
<ul><li>Can now interrupt Power Slash with parry</li></ul>
`
	);
	var wi = i(Ci, 2);
	(a(wi, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), e(Si), e(oi));
	var Ti = i(oi, 2);
	t(
		Ti,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Ei = i(Ti, 2);
	ae(Ei, {});
	var Di = i(Ei, 2);
	n(Di, 1, `item active-reload`);
	var Oi = r(Di);
	t(
		Oi,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>Lifesteal reduced from 22% to 20%</li></ul>
`
	);
	var ki = i(Oi, 2);
	(a(ki, { kind: `item`, name: `Active Reload`, ability: null }), e(Di));
	var Ai = i(Di, 2);
	n(Ai, 1, `item alchemical-fire`);
	var ji = r(Ai);
	t(
		ji,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Spirit Power increased from +7 to +11</li></ul>
`
	);
	var Mi = i(ji, 2);
	(a(Mi, { kind: `item`, name: `Alchemical Fire`, ability: null }), e(Ai));
	var Ni = i(Ai, 2);
	n(Ni, 1, `item ammo-scavenger`);
	var Pi = r(Ni);
	t(
		Pi,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Neutral kills now count as a soul capture</li><li>Buff duration increased from 35s to 40s</li></ul>
`
	);
	var Fi = i(Pi, 2);
	(a(Fi, { kind: `item`, name: `Ammo Scavenger`, ability: null }), e(Ni));
	var Ii = i(Ni, 2);
	n(Ii, 1, `item berserker`);
	var Li = r(Ii);
	t(
		Li,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Bullet Resist reduced from 8% to 7%</li></ul>
`
	);
	var Ri = i(Li, 2);
	(a(Ri, { kind: `item`, name: `Berserker`, ability: null }), e(Ii));
	var zi = i(Ii, 2);
	n(zi, 1, `item burst-fire`);
	var Bi = r(zi);
	t(
		Bi,
		() => `
<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>
<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>
<ul><li>Now provides +70 Health</li></ul>
`
	);
	var Vi = i(Bi, 2);
	(a(Vi, { kind: `item`, name: `Burst Fire`, ability: null }), e(zi));
	var Hi = i(zi, 2);
	n(Hi, 1, `item colossus`);
	var Ui = r(Hi);
	t(
		Ui,
		() => `
<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>
<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>
`
	);
	var Wi = i(Ui, 2),
		Gi = r(Wi),
		Ki = r(Gi);
	t(Ki, () => `Radius increased from 10m to 12m`);
	var qi = i(Ki, 2);
	(o(qi, {
		kind: `item`,
		name: `Colossus`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Radius increased from 10m to 12m`
	}),
		e(Gi));
	var Ji = i(Gi, 2),
		Yi = r(Ji);
	t(Yi, () => `Cooldown reduced from 45s to 35s`);
	var Xi = i(Yi, 2);
	(o(Xi, {
		kind: `item`,
		name: `Colossus`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 45s to 35s`
	}),
		e(Ji),
		e(Wi));
	var Zi = i(Wi, 2);
	(a(Zi, { kind: `item`, name: `Colossus`, ability: null }), e(Hi));
	var Qi = i(Hi, 2);
	n(Qi, 1, `item crippling-headshot`);
	var $i = r(Qi);
	t(
		$i,
		() => `
<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>
<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>
<ul><li>Debuff duration reduced from 5s to 4s</li></ul>
`
	);
	var ea = i($i, 2);
	(a(ea, { kind: `item`, name: `Crippling Headshot`, ability: null }), e(Qi));
	var ta = i(Qi, 2);
	n(ta, 1, `item divine-barrier`);
	var na = r(ta);
	t(
		na,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
<ul><li>Bullet Shield shield reduced from 300 to 260</li><li>Spirit Shield shield reduced from 300 to 260</li></ul>
`
	);
	var ra = i(na, 2);
	(a(ra, { kind: `item`, name: `Divine Barrier`, ability: null }), e(ta));
	var ia = i(ta, 2);
	n(ia, 1, `item echo-shard`);
	var aa = r(ia);
	t(
		aa,
		() => `
<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>
<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>
<ul><li>Spirit Power increased from +8 to +12</li></ul>
`
	);
	var oa = i(aa, 2);
	(a(oa, { kind: `item`, name: `Echo Shard`, ability: null }), e(ia));
	var sa = i(ia, 2);
	n(sa, 1, `item enduring-spirit`);
	var ca = r(sa);
	t(
		ca,
		() => `
<p><a href="/item/enduring-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_armor/resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Spirit patch history</a></p>
<h3 id="enduring-spirit"><a href="/item/enduring-spirit">Enduring Spirit</a></h3>
<ul><li>Spirit Lifesteal increased from 8% to 10%</li></ul>
`
	);
	var la = i(ca, 2);
	(a(la, { kind: `item`, name: `Enduring Spirit`, ability: null }), e(sa));
	var ua = i(sa, 2);
	n(ua, 1, `item extra-spirit`);
	var da = r(ua);
	t(
		da,
		() => `
<p><a href="/item/extra-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Spirit patch history</a></p>
<h3 id="extra-spirit"><a href="/item/extra-spirit">Extra Spirit</a></h3>
<ul><li>Spirit increased from 8 to 9</li></ul>
`
	);
	var fa = i(da, 2);
	(a(fa, { kind: `item`, name: `Extra Spirit`, ability: null }), e(ua));
	var pa = i(ua, 2);
	n(pa, 1, `item fleetfoot`);
	var ma = r(pa);
	t(
		ma,
		() => `
<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>
<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>
`
	);
	var ha = i(ma, 2),
		ga = r(ha);
	(t(ga, () => `Active move speed reduced from 4 to 3`, !0), e(ga));
	var _a = i(ga, 2),
		va = r(_a);
	t(va, () => `Cooldown reduced from 22s to 18s`);
	var ya = i(va, 2);
	(o(ya, {
		kind: `item`,
		name: `Fleetfoot`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 22s to 18s`
	}),
		e(_a));
	var ba = i(_a, 2);
	(t(ba, () => `Health increased from +75 to +90`, !0), e(ba), e(ha));
	var xa = i(ha, 2);
	(a(xa, { kind: `item`, name: `Fleetfoot`, ability: null }), e(pa));
	var Sa = i(pa, 2);
	n(Sa, 1, `item fortitude`);
	var Ca = r(Sa);
	t(
		Ca,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Lane troopers do not reset the passive regen timer</li></ul>
`
	);
	var wa = i(Ca, 2);
	(a(wa, { kind: `item`, name: `Fortitude`, ability: null }), e(Sa));
	var Ta = i(Sa, 2);
	n(Ta, 1, `item frenzy`);
	var Ea = r(Ta);
	t(
		Ea,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Linger duration increased from 4s to 6s</li></ul>
`
	);
	var Da = i(Ea, 2);
	(a(Da, { kind: `item`, name: `Frenzy`, ability: null }), e(Ta));
	var Oa = i(Ta, 2);
	n(Oa, 1, `item glass-cannon`);
	var ka = r(Oa);
	t(
		ka,
		() => `
<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>
<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>
<ul><li>Max stacks increased from 5 to 7</li></ul>
`
	);
	var Aa = i(ka, 2);
	(a(Aa, { kind: `item`, name: `Glass Cannon`, ability: null }), e(Oa));
	var ja = i(Oa, 2);
	n(ja, 1, `item headshot-booster`);
	var Ma = r(ja);
	t(
		Ma,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
<ul><li>Bonus damage reduced from 45 to 40</li></ul>
`
	);
	var Na = i(Ma, 2);
	(a(Na, { kind: `item`, name: `Headshot Booster`, ability: null }), e(ja));
	var Pa = i(ja, 2);
	n(Pa, 1, `item healing-rite`);
	var Fa = r(Pa);
	t(
		Fa,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
<ul><li>Now grants +3 Spirit Power</li></ul>
`
	);
	var Ia = i(Fa, 2);
	(a(Ia, { kind: `item`, name: `Healing Rite`, ability: null }), e(Pa));
	var La = i(Pa, 2);
	n(La, 1, `item heroic-aura`);
	var Ra = r(La);
	t(
		Ra,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
<ul><li>Active movement speed bonus reduced from 3 to 2</li></ul>
`
	);
	var za = i(Ra, 2);
	(a(za, { kind: `item`, name: `Heroic Aura`, ability: null }), e(La));
	var Ba = i(La, 2);
	n(Ba, 1, `item hunter-s-aura`);
	var Va = r(Ba);
	t(
		Va,
		() => `
<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>
<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>
<ul><li>Bullet Resist reduction reduced from -10% to -9%</li></ul>
`
	);
	var Ha = i(Va, 2);
	(a(Ha, { kind: `item`, name: `Hunter's Aura`, ability: null }), e(Ba));
	var Ua = i(Ba, 2);
	n(Ua, 1, `item inhibitor`);
	var Wa = r(Ua);
	t(
		Wa,
		() => `
<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>
<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>
<ul><li>Fixed damage reduction on bullets not being reduced by a percentage properly</li></ul>
`
	);
	var Ga = i(Wa, 2);
	(a(Ga, { kind: `item`, name: `Inhibitor`, ability: null }), e(Ua));
	var Ka = i(Ua, 2);
	n(Ka, 1, `item lifestrike`);
	var qa = r(Ka);
	t(
		qa,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Melee damage reduced from 40% to 35%</li></ul>
`
	);
	var Ja = i(qa, 2);
	(a(Ja, { kind: `item`, name: `Lifestrike`, ability: null }), e(Ka));
	var Ya = i(Ka, 2);
	n(Ya, 1, `item long-range`);
	var Xa = r(Ya);
	t(
		Xa,
		() => `
<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>
<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>
<ul><li>Bullet Shield increased from +90 to +140</li></ul>
`
	);
	var Za = i(Xa, 2);
	(a(Za, { kind: `item`, name: `Long Range`, ability: null }), e(Ya));
	var Qa = i(Ya, 2);
	n(Qa, 1, `item lucky-shot`);
	var $a = r(Qa);
	t(
		$a,
		() => `
<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>
<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>
<ul><li>Bonus Damage increased from 80% to 90%</li></ul>
`
	);
	var eo = i($a, 2);
	(a(eo, { kind: `item`, name: `Lucky Shot`, ability: null }), e(Qa));
	var to = i(Qa, 2);
	n(to, 1, `item majestic-leap`);
	var no = r(to);
	t(
		no,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
`
	);
	var ro = i(no, 2),
		io = r(ro),
		ao = r(io);
	t(ao, () => `Cooldown reduced from 24s to 22s`);
	var oo = i(ao, 2);
	(o(oo, {
		kind: `item`,
		name: `Majestic Leap`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 24s to 22s`
	}),
		e(io),
		e(ro));
	var so = i(ro, 2);
	(a(so, { kind: `item`, name: `Majestic Leap`, ability: null }), e(to));
	var co = i(to, 2);
	n(co, 1, `item melee-charge`);
	var lo = r(co);
	t(
		lo,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>Charge distance bonus is moved to innate section</li><li>Passive now has a 8s cooldown</li><li>When passive triggers, you deal bonus +20% Melee Damage</li><li>Now gives a UI indication when reload procs</li></ul>
`
	);
	var uo = i(lo, 2);
	(a(uo, { kind: `item`, name: `Melee Charge`, ability: null }), e(co));
	var fo = i(co, 2);
	n(fo, 1, `item melee-lifesteal`);
	var po = r(fo);
	t(
		po,
		() => `
<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>
<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>
<ul><li>Melee damage reduced from 15% to 13%</li></ul>
`
	);
	var mo = i(po, 2);
	(a(mo, { kind: `item`, name: `Melee Lifesteal`, ability: null }), e(fo));
	var ho = i(fo, 2);
	n(ho, 1, `item metal-skin`);
	var go = r(ho);
	t(
		go,
		() => `
<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>
<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>
`
	);
	var _o = i(go, 2),
		vo = r(_o),
		yo = r(vo);
	t(yo, () => `Cooldown reduced from 22s to 20s`);
	var bo = i(yo, 2);
	(o(bo, {
		kind: `item`,
		name: `Metal Skin`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 22s to 20s`
	}),
		e(vo),
		e(_o));
	var xo = i(_o, 2);
	(a(xo, { kind: `item`, name: `Metal Skin`, ability: null }), e(ho));
	var $ = i(ho, 2);
	n($, 1, `item mystic-shot`);
	var So = r($);
	t(
		So,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
`
	);
	var Co = i(So, 2),
		wo = r(Co);
	(t(wo, () => `Spirit damage now considers bullet falloff`, !0), e(wo));
	var To = i(wo, 2),
		Eo = r(To);
	t(Eo, () => `Cooldown reduced from 6s to 5s`);
	var Do = i(Eo, 2);
	(o(Do, {
		kind: `item`,
		name: `Mystic Shot`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown reduced from 6s to 5s`
	}),
		e(To),
		e(Co));
	var Oo = i(Co, 2);
	(a(Oo, { kind: `item`, name: `Mystic Shot`, ability: null }), e($));
	var ko = i($, 2);
	n(ko, 1, `item phantom-strike`);
	var Ao = r(ko);
	t(
		Ao,
		() => `
<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>
<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>
`
	);
	var jo = i(Ao, 2),
		Mo = r(jo),
		No = r(Mo);
	t(No, () => `Damage reduced from 150 to 75`);
	var Po = i(No, 2);
	(o(Po, {
		kind: `item`,
		name: `Phantom Strike`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage reduced from 150 to 75`
	}),
		e(Mo));
	var Fo = i(Mo, 2);
	(t(Fo, () => `Spirit Power scaling reduced from 2 to 1`, !0), e(Fo), e(jo));
	var Io = i(jo, 2);
	(a(Io, { kind: `item`, name: `Phantom Strike`, ability: null }), e(ko));
	var Lo = i(ko, 2);
	n(Lo, 1, `item quicksilver-reload`);
	var Ro = r(Lo);
	t(
		Ro,
		() => `
<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>
<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>
`
	);
	var zo = i(Ro, 2),
		Bo = r(zo),
		Vo = r(Bo);
	t(Vo, () => `Damage increased from 50 to 65`);
	var Ho = i(Vo, 2);
	(o(Ho, {
		kind: `item`,
		name: `Quicksilver Reload`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage increased from 50 to 65`
	}),
		e(Bo),
		e(zo));
	var Uo = i(zo, 2);
	(a(Uo, { kind: `item`, name: `Quicksilver Reload`, ability: null }), e(Lo));
	var Wo = i(Lo, 2);
	n(Wo, 1, `item rapid-recharge`);
	var Go = r(Wo);
	t(
		Go,
		() => `
<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>
<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>
<ul><li>Now gains +12% Weapon Damage (T1 Extra Charge gives +6%)</li></ul>
`
	);
	var Ko = i(Go, 2);
	(a(Ko, { kind: `item`, name: `Rapid Recharge`, ability: null }), e(Wo));
	var qo = i(Wo, 2);
	n(qo, 1, `item rapid-rounds`);
	var Jo = r(qo);
	t(
		Jo,
		() => `
<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>
<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>
<ul><li>Fire Rate reduced from 12% to 9%</li><li>No longer provides -50 Max Health</li></ul>
`
	);
	var Yo = i(Jo, 2);
	(a(Yo, { kind: `item`, name: `Rapid Rounds`, ability: null }), e(qo));
	var Xo = i(qo, 2);
	n(Xo, 1, `item rescue-beam`);
	var Zo = r(Xo);
	t(
		Zo,
		() => `
<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>
<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>
<ul><li>Heal reduced from 30% to 26%</li><li>Cast range reduced from 45m to 36m</li><li>No longer requires Healing Rite</li></ul>
`
	);
	var Qo = i(Zo, 2);
	(a(Qo, { kind: `item`, name: `Rescue Beam`, ability: null }), e(Xo));
	var $o = i(Xo, 2);
	n($o, 1, `item restorative-shot`);
	var es = r($o);
	t(
		es,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>Healing from heroes increased from 35 to 40</li><li>Healing from troopers increased from 10 to 15</li></ul>
`
	);
	var ts = i(es, 2);
	(a(ts, { kind: `item`, name: `Restorative Shot`, ability: null }), e($o));
	var ns = i($o, 2);
	n(ns, 1, `item sharpshooter`);
	var rs = r(ns);
	t(
		rs,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Bullet Health increased from +175 to +200</li></ul>
`
	);
	var is = i(rs, 2);
	(a(is, { kind: `item`, name: `Sharpshooter`, ability: null }), e(ns));
	var as = i(ns, 2);
	n(as, 1, `item silencer`);
	var os = r(as);
	t(
		os,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
`
	);
	var ss = i(os, 2),
		cs = r(ss),
		ls = r(cs);
	t(ls, () => `Damage increased from 15% to 20%`);
	var us = i(ls, 2);
	(o(us, {
		kind: `item`,
		name: `Silencer`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage increased from 15% to 20%`
	}),
		e(cs),
		e(ss));
	var ds = i(ss, 2);
	(a(ds, { kind: `item`, name: `Silencer`, ability: null }), e(as));
	var fs = i(as, 2);
	n(fs, 1, `item slowing-hex`);
	var ps = r(fs);
	t(
		ps,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
<ul><li>Projectile speed increased by 20%</li></ul>
`
	);
	var ms = i(ps, 2);
	(a(ms, { kind: `item`, name: `Slowing Hex`, ability: null }), e(fs));
	var hs = i(fs, 2);
	n(hs, 1, `item soul-rebirth`);
	var gs = r(hs);
	t(
		gs,
		() => `
<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>
<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>
<ul><li>No longer grants 20% Weapon Damage</li><li>Cooldown Reduction reduced from 18% to 15%</li></ul>
`
	);
	var _s = i(gs, 2);
	(a(_s, { kind: `item`, name: `Soul Rebirth`, ability: null }), e(hs));
	var vs = i(hs, 2);
	n(vs, 1, `item spirit-strike`);
	var ys = r(vs);
	t(
		ys,
		() => `
<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>
<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>
<ul><li>Melee damage reduced from 15% to 12%</li><li>Debuff duration reduced from 13s to 11s</li><li>Spirit Shield reduced from 100 to 80</li><li>Regen reduced from 1 to 0.8</li></ul>
`
	);
	var bs = i(ys, 2);
	(a(bs, { kind: `item`, name: `Spirit Strike`, ability: null }), e(vs));
	var xs = i(vs, 2);
	n(xs, 1, `item surge-of-power`);
	var Ss = r(xs);
	t(
		Ss,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>Imbued ability now grants +10% Fire Rate when used (same 6s duration as the movespeed buff)</li></ul>
`
	);
	var Cs = i(Ss, 2);
	(a(Cs, { kind: `item`, name: `Surge of Power`, ability: null }), e(xs));
	var ws = i(xs, 2);
	n(ws, 1, `item titanic-magazine`);
	var Ts = r(ws);
	t(
		Ts,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Bullet Resist increased from 15% to 18%</li></ul>
`
	);
	var Es = i(Ts, 2);
	(a(Es, { kind: `item`, name: `Titanic Magazine`, ability: null }), e(ws));
	var Ds = i(ws, 2);
	n(Ds, 1, `item torment-pulse`);
	var Os = r(Ds);
	t(
		Os,
		() => `
<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>
<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>
<ul><li>Health increased from +125 to +140</li></ul>
`
	);
	var ks = i(Os, 2);
	(a(ks, { kind: `item`, name: `Torment Pulse`, ability: null }), e(Ds));
	var As = i(Ds, 2);
	n(As, 1, `item unstoppable`);
	var js = r(As);
	t(
		js,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
<ul><li>Fixed not preventing Disarm properly</li></ul>
`
	);
	var Ms = i(js, 2);
	(a(Ms, { kind: `item`, name: `Unstoppable`, ability: null }), e(As), te(ee, re));
}
export { le as default, oe as metadata, s as readingManifest, se as toc };
