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
/* empty css        */ import { a as o, i as s, n as ne, t as c } from './vWaTnxY_.js';
function re(e) {
	c(e, {
		src: `https://forums.playdeadlock.com/attachments/canal_update_102424-mp4.26017/`,
		label: `canal update 102424`
	});
}
function ie(e) {
	c(e, {
		src: `https://forums.playdeadlock.com/attachments/purple_update_102424-mp4.26019/`,
		label: `purple update 102424`
	});
}
function ae(e) {
	c(e, {
		src: `https://forums.playdeadlock.com/attachments/garage_nightclub_102424-mp4.26021/`,
		label: `garage nightclub 102424`
	});
}
function oe(e) {
	ne(e, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Grey Talon`,
			`Infernus`,
			`Ivy`,
			`Kelvin`,
			`Lady Geist`,
			`McGinnis`,
			`Mirage`,
			`Mo &amp; Krill`,
			`Paradox`,
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
function se(e) {
	ne(e, {
		type: `item`,
		names:
			`Active Reload.Ammo Scavenger.Boundless Spirit.Bullet Resist Shredder.Burst Fire.Colossus.Duration Extender.Enduring Speed.Escalating Exposure.Ethereal Shift.Extra Health.Extra Regen.Extra Stamina.Fortitude.Improved Spirit.Knockdown.Leech.Long Range.Lucky Shot.Majestic Leap.Melee Charge.Monster Rounds.Mystic Reverb.Mystic Shot.Mystic Slow.Phantom Strike.Rapid Rounds.Reactive Barrier.Rescue Beam.Restorative Shot.Sharpshooter.Siphon Bullets.Slowing Hex.Soul Rebirth.Superior Cooldown.Superior Duration.Surge of Power.Tesla Bullets.Titanic Magazine.Unstoppable.Vampiric Burst.Veil Walker`.split(
				`.`
			)
	});
}
var ce = {
		title: `10-24-2024 Update`,
		thread_id: `40951`,
		steam_gid: `6212245217911837451`,
		published: `2024-10-24T12:39:08-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don't get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection. Added Commends. You can commend players you've enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you've received on each hero will be displayed in your profile. Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models Updated environment lighting and sky Added sequential kill streak music cues Added keybinds for "Fly Up" and "Fly Down".  Used for flying abilities like Ivy's Air Drop and Vindicta's Flight Fixed being unable to report/mute disconnected players You can now drag and drop build categories to move them around Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser. Added indication of game mode within match history Added Rank badge to matches on the Watch page Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval Flash Windows Taskbar icon if the game window isn't in focus and you have 3 seconds until you respawn Fixed issue in several languages where team net worth number shrunk to an unreadable size Fixed Urns sometimes appearing to stay in the world after being picked up Fixed jittering from Lash's gun firing while running and aiming (this should reduce screen noise significantly in this case) Lash melee animation updates Added Melee Resistance to Vitality stat screen Lowered pitch of Haze voice processing Added teleporter channel and appear sounds Added Healing Rite end sound Added Mystic Shot proc sound Added Magic Carpet cast, cast delay, loop, and end sounds Updated Slowing Hex projectile loop, hit, and debuff sounds Yamato's Flying Strike now stops tracking targets that teleport Shiv's Killing Blow now stops tracking targets that teleport McGinnis melee animation updates Fixing hitting ESC to close to intro movie also closing the ranked summary popup Fixed pregame countdown drawing over the shop UI Pocket climb animation adjustments Mirage Traveler now previews Mirage's model at destination to show facing direction Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards Silenced debuff revisions to reduce obstructed vision of player Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise Mirage Djinn's Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI Mirage gun revisions to tracer, muzzle flash, and impacts Shiv Dagger: reduced size of stuck dagger in victim Unstoppable vfx has a more obvious start Lady Geist Malice: revisions to reduce vfx noise and obstructions Lady Geist Malice: reduced brightness of vfx for players close to it Shiv Slice and Dice: reduced vfx noise for players close to it Ivy Kudzu Bomb effects properly display visuals when above ground Lash Flog: new effects Play a sound when a debuff is applied to player but is purged due to some invulnerability Fixed instances where mix ducking occurs too early in a sound event's lifetime Fixed audio occlusion filtering artifacts during high rates of change Enabled certain music cues like 'respawn' to interrupt base attack music Denied orb sound will no longer play beyond 2500 game units from the player Reduced visual noise of Wraith's tracers when close up or when Wraith has a high fire rate Increased intelligibility of team-specific hero death sound Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately Added looping telegraph for Seven Static Charge ability Added victim-specific sound for Static Charge the moment it is applied Bots are better at coming together to defend and push lanes Bots will prioritize assisting human allies on offense Reduced visual noise of Seven's tracers, especially when close up or when Seven has a high fire rate Added a "Mouse Sensitivity: Vertical Scaling" setting Added a "Reset Camera" bind (available in Steam Input) Fixed Steam Input "Melee" Action not resetting the camera vertically Added new Steam Input Analog Action: "Aim". This uses Angle-based sensitivity options in Steam Input (work-in-progress feature). Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y) Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined. AP is no longer granted for Walkers Shrine/Patron no longer have Soul/AP bounties Shrine Flex Slot moved to "All Shrines" Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying Trooper soul changed from 50/50% in the kill/orb to 60/40% Breakables spawn time increased from 2 minutes to 3 minutes Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min Urn comeback properties now require an 8% net worth lead to kick in Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn't a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team's side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is. If the Urn hasn't been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this. Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds. Increased speed Urn walks back Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren't) Backdoor protection removal now has a 20s buffer (so it doesn't go into protection mode immediately once creeps die) Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes The 70s respawn time now happens at 30 min instead of 35 min There is now a respawn curve that goes from 70s to 75s over 30->40 minutes Base Guardians and Shrines no longer have out-of-combat regen Parry active window increased from 0.7 to 0.75 Parry cooldown reduced from 5s to 4.5s Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own] Medic Trooper heal cooldown increased from 6s to 35s Sinner's Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player) Redesigned stairs from central canal to the outer lanes (near Urn spawn) Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas Added a Bounce Pad from these connection hallways to the front of the overpass Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner's Sacrifice neutrals Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club Added more zipline nodes to outer lanes High-Velocity Mag: Bullet Velocity reduced from 25% to 20% High-Velocity Mag: Bullet Shield Health increased from 50 to 65 High-Velocity Mag: Weapon damage increased from 12% to 13% Superior Stamina: Spirit Power increased from 8 to 12 Mystic Reach: Ability Range reduced from 18% to 15% Mystic Reach: Bullet Resist increased from 6% to 7% Improved Cooldown: Now grants +75 Spirit Shield Withering Whip: Projectile speed increased by 30% Cold Front now does double damage to NPC units Improved Reach: Non-Imbued Ability Range increased from 25% to 26% Improved Reach: Bullet Resist increased from 12% to 13% Improved Burst: Max HP Damage increased from 7% to 9% Improved Burst: Threshold damage increased from 125 to 200 Infernus reduced darkness of players affected by Catalyst debuff reduced brightness and lingering of Concussive Combustion effects reduced visual noise of tracers and firerate increases Afterburn T1 reduced from 30% to 25% Viscous cleaner effect for viscous alt-fire Bullet damage reduced from 12 to 11 Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6) The Cube T2 moved to T3 The Cube T2 is now +35 HP regen Splatter T2 reduced from +60 Damage to +50 Goo Ball Spirit Resist reduced from 70% to 60% Abrams Melee attack rate reduced by 15% (time between attacks) Gun falloff damage starts at 20m instead of 22m Fixed some cases where Shoulder Charge would do a 180/360 on spell cast Fixed Shoulder Charge sliding against wall surfaces incorrectly Fixed Seismic Impact sometimes getting stuck on objects Bebop Bullet damage growth increased from 0.29 to 0.33 No longer gains 1% Bullet Resist per boon Now gains 1% Spirit Resist per boon Sticky Bomb now loses 20% of your stacks on death (rounds up) Hook now returns troopers 75% faster than normal Grey Talon Base regen increased from 2 to 2.5 Gun spirit scaling increased from 0.1 to 0.13 Movespeed now scales with Spirit Power again Rain of Arrows strafe speed with stamina increased by 30% Ivy Base bullet damage increased from 4.5 to 5 Bullet damage growth reduced from 0.39 to 0.36 Air Drop slow reduced from 35% to 30% Kelvin Arctic Beam slow reduced from 50% to 40% Frost Grenade T2 heal reduced from 145 to 125 Fixed Frozen Shelter not freezing weakened patron Lady Geist Malice slow reduced from 20% to 15% Malice debuff duration reduced from 13s to 9s Malice Damage Amp reduced from 15% to 8% Malice T2 now also increases damage amp by 7% Malice no longer causes you to un-zoom on cast McGinnis Gun spin decay rate improved from 0.65 to 0.25 Mini Turrets cooldown reduced from 24s to 18s Mini Turrets spirit resist increased from 60% to 80% Spectral Wall slow reduced from 25% to 20% Spectral Wall T1 damage amp reduced from 25% to 15% Heavy Barrage minimum range increased from 6m to 7m Heavy Barrage cooldown increased from 106s to 140s Heavy Barrage T2 cooldown improved from -47s to -50s Heavy Barrage T1 slow reduced from 35% to 30% Mirage Fire Scarabs T3 max health steal increased from +70 to +80 Djinn's Mark T3 cooldown between multipliers improved from -0.5s to -0.75s Traveler Fire Rate increased from 20% to 30% Traveler T2 cooldown reduction improved from -30s to -40s Traveler T3 now grants Unstoppable for 3s on arrival Mo & Krill Now has 20% Headshot Crit reduction Burrow bullet and spirit resist now persist while spinning out of the burrow Paradox Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender) Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration Pulse Grenade T2 improved from -7.5s to -8s Kinetic Carbine T2 improved from -9.5s Cooldown to -10s Kinetic Carbine shots cannot miss due to evasion Kinetic Carbine can now pierce breakables Kinetic Carbine now does 15% more damage on a headshot Kinetic Carbine sound level reduced a little bit Seven Lightning Ball cooldown increased from 23s to 26s Lightning Ball radius reduced from 4m to 3.5m Lightning Ball T2 slow reduced from 40% to 35% Movespeed reduced from 7.3 to 7.1 Storm Cloud expand time reduced from 3s to 2s Storm Cloud range increased from 25m to 30m Shiv Base speed reduced from 7.3 to 7.0 Serrated Knives collision radius reduced by 20% Bloodletting cooldown increased from 21s to 50s Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s) Bloodletting duration increased from 10s to 13s Bloodletting Incoming Damage Deferred reduced from 30% to 22% Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration) Killing Blow range reduced from 20m to 13m Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75 Killing Blow Rage buffer duration reduced from 10s to 9s Killing Blow Rage buildup vs creeps reduced by 50% Vindicta Gun cycle time improved from 0.26s to 0.22s Bullet damage growth per boon increased from 0.55 to 0.65 Fire rate now scales with Spirit Power (0.14) Assassinate no longer splits to allies Flight duration increased from 8s to 12s Flight T2 duration increased from +6s to +8s Assassinate bullet radius increased from 3" to 4" Assassinate scope is now automatically canceled when Paradoxical Swap hits you Warden Alchemical Flask slow duration reduced from 6s to 3s Alchemical Flask weapon damage duration increased from 6s to 7s Binding Word escape time reduced from 2.9s to 2.8s Binding Word escape range increased from 18.5m to 19m Last Stand T3 now also grants you unstoppable during the 2s channel Wraith Card Trick base damage reduced from 80 to 70 Card Trick cooldown increased from 0.5s to 0.65s Telekinesis cooldown increased from 95s to 100s Telekinesis T1 cooldown improved from -28s to -30s Yamato Fixed being able to cast an ability while casting Flying Strike Fixed Crimson Slash following in the direction of dash instead of cross hair Shadow Transformation T1 changed to +20% Fire Rate Shadow Transformation Cooldown reduced from 106s to 90s Rescue Beam fixed some visual bugs on the effects Pull speed reduced by 20% Sprint reduced from +2 to +1 Knockdown updated effect animation to alert when it will stun Ammo Scavenger proc sound only plays when applying a stack Duration increased from 30s to 35s Restorative Shot Weapon Damage reduced from 7% to 6% Cooldown increased from 5.5s to 6s Rapid Rounds Fire Rate increased from 9% to 10% Monster Rounds Resist vs NPCs reduced from 30% to 25% Melee Charge Weapon Damage reduced from 15% to 12% Health reduced from 100 to 75 Long Range No longer grants +25% Ammo Now has -20% Reload Time Active Reload No longer grants -20% Reload Time Now grants +18% Ammo Mystic Shot Proc cannot miss due to evasion Cooldown increased from 5.25 to 5.75 Burst Fire Now grants +20% Slow Resistance Sharpshooter No longer grants +20% Ammo Now has -20% Reload Time Tesla Bullets Proc cooldown can now be reduced by cooldown reduction Titanic Magazine Now grants +12% Spirit Resist No longer grants +18% Bullet Resist Now grants +25% Melee Damage Resistance Lucky Shot Proc now pierces evasion Vampiric Burst Health increased from 150 to 175 Extra Regen No longer grants +25 Health Extra Stamina Bonus Health increased from +25 to +35 Extra Health Now upgrades into Fortitude Enduring Speed Slow Resist reduced from 35% to 30% Reactive Barrier Ammo increased from 15% to 20% Majestic Leap Cooldown increased from 26s to 45s Getting shot while in the air disables the drop-down ability Fortitude Now upgrades from Extra Health Health increased from 325 to 365 Restore delay reduced from 11s to 10s Weapon Damage increased from 25% to 27% Veil Walker Bullet Shield increased from 200 to 250 Spirit Shield increased from 200 to 250 Soul Rebirth No longer grants +15% Cooldown Reduction Cooldown increased from 212s to 240s Siphon Bullets Max HP Steal Per Bullet increased from 50 to 55 Leech Now has 12% Cooldown Reduction No longer grants Spirit Power Phantom Strike No longer grants 15% Bullet Resist Now grants +15% Spirit Resist Unstoppable No longer grants +15% Spirit Resist Now grants +15% Bullet Resist No longer grants 1 Move Speed Colossus Slow reduced from 35% to 30% Slow radius reduced from 14m to 12m Slowing Hex Slow reduced from 25% to 20% Duration Extender Ability Duration reduced from 16% to 14% Now grants +8% Weapon Damage Bullet Resist Shredder No longer grants +5% Bullet Resist Now grants +15% Melee damage resistance Surge of Power When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot) Movespeed reduced from +3 to +2 Mystic Slow Slow reduced from 30% to 25% Health bonus increased from 100 to 140 Superior Cooldown Spirit Shield increased from 100 to 150 Superior Duration Non-Imbued duration increased from 26% to 27% Imbued duration increased from 32% to 33% Ethereal Shift Active no longer grants 14 spirit power or reloads Active now grants +3 Movespeed for 5 seconds after returning Active now grants +40% Spirit Resist for 5 seconds after returning Now grants +6 Spirit Power Improved Spirit Spirit Power increased from 28 to 30 Boundless Spirit Spirit Power increased from 60 to 65 Weapon Power increased from 25% to 30% Escalating Exposure Spirit Amp Per Stack reduced from 5% to 4% Mystic Reverb Slow now only affects the primary target Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-19`, to: `2024-10-24` },
			after: { from: `2024-10-25`, to: `2024-10-28` }
		}
	},
	le = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 3, title: `Hook`, id: `hook` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Napalm`, id: `napalm` },
		{ level: 3, title: `Concussive Combustion`, id: `concussive-combustion` },
		{ level: 3, title: `Afterburn`, id: `afterburn` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 3, title: `Malice Damage Amp`, id: `malice-damage-amp` },
		{ level: 3, title: `Malice`, id: `malice-1` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turrets`, id: `mini-turrets` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 3, title: `Heavy Barrage`, id: `heavy-barrage` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 3, title: `Djinn's Mark`, id: `djinn-s-mark` },
		{ level: 3, title: `Traveler Fire Rate`, id: `traveler-fire-rate` },
		{ level: 3, title: `Traveler`, id: `traveler` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Burrow`, id: `burrow` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Pulse Grenade`, id: `pulse-grenade` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Lightning Ball`, id: `lightning-ball` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 3, title: `Bloodletting`, id: `bloodletting` },
		{
			level: 3,
			title: `Bloodletting Incoming Damage Deferred`,
			id: `bloodletting-incoming-damage-deferred`
		},
		{ level: 3, title: `Bloodletting`, id: `bloodletting-1` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Assassinate`, id: `assassinate-1` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `The Cube`, id: `the-cube` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 3, title: `Goo Ball Spirit Resist`, id: `goo-ball-spirit-resist` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Alchemical Flask`, id: `alchemical-flask` },
		{ level: 3, title: `Binding Word`, id: `binding-word` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Card Trick`, id: `card-trick` },
		{ level: 3, title: `Telekinesis`, id: `telekinesis` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{
			level: 3,
			title: `Shadow Transformation Cooldown`,
			id: `shadow-transformation-cooldown`
		},
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Boundless Spirit`, id: `boundless-spirit` },
		{ level: 2, title: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
		{ level: 2, title: `Burst Fire`, id: `burst-fire` },
		{ level: 2, title: `Colossus`, id: `colossus` },
		{ level: 2, title: `Duration Extender`, id: `duration-extender` },
		{ level: 2, title: `Enduring Speed`, id: `enduring-speed` },
		{ level: 2, title: `Escalating Exposure`, id: `escalating-exposure` },
		{ level: 2, title: `Ethereal Shift`, id: `ethereal-shift` },
		{ level: 2, title: `Extra Health`, id: `extra-health` },
		{ level: 2, title: `Extra Regen`, id: `extra-regen` },
		{ level: 2, title: `Extra Stamina`, id: `extra-stamina` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Improved Spirit`, id: `improved-spirit` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Long Range`, id: `long-range` },
		{ level: 2, title: `Lucky Shot`, id: `lucky-shot` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Monster Rounds`, id: `monster-rounds` },
		{ level: 2, title: `Mystic Reverb`, id: `mystic-reverb` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Mystic Slow`, id: `mystic-slow` },
		{ level: 2, title: `Phantom Strike`, id: `phantom-strike` },
		{ level: 2, title: `Rapid Rounds`, id: `rapid-rounds` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Rescue Beam`, id: `rescue-beam` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Siphon Bullets`, id: `siphon-bullets` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Soul Rebirth`, id: `soul-rebirth` },
		{ level: 2, title: `Superior Cooldown`, id: `superior-cooldown` },
		{ level: 2, title: `Superior Duration`, id: `superior-duration` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Tesla Bullets`, id: `tesla-bullets` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	ue = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-19`, to: `2024-10-24` },
			after: { from: `2024-10-25`, to: `2024-10-28` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Boundless Spirit`, id: `boundless-spirit` },
			{ kind: `item`, name: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
			{ kind: `item`, name: `Burst Fire`, id: `burst-fire` },
			{ kind: `item`, name: `Colossus`, id: `colossus` },
			{ kind: `item`, name: `Duration Extender`, id: `duration-extender` },
			{ kind: `item`, name: `Enduring Speed`, id: `enduring-speed` },
			{ kind: `item`, name: `Escalating Exposure`, id: `escalating-exposure` },
			{ kind: `item`, name: `Ethereal Shift`, id: `ethereal-shift` },
			{ kind: `item`, name: `Extra Health`, id: `extra-health` },
			{ kind: `item`, name: `Extra Regen`, id: `extra-regen` },
			{ kind: `item`, name: `Extra Stamina`, id: `extra-stamina` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Improved Spirit`, id: `improved-spirit` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Long Range`, id: `long-range` },
			{ kind: `item`, name: `Lucky Shot`, id: `lucky-shot` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Monster Rounds`, id: `monster-rounds` },
			{ kind: `item`, name: `Mystic Reverb`, id: `mystic-reverb` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Mystic Slow`, id: `mystic-slow` },
			{ kind: `item`, name: `Phantom Strike`, id: `phantom-strike` },
			{ kind: `item`, name: `Rapid Rounds`, id: `rapid-rounds` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Rescue Beam`, id: `rescue-beam` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Siphon Bullets`, id: `siphon-bullets` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Soul Rebirth`, id: `soul-rebirth` },
			{ kind: `item`, name: `Superior Cooldown`, id: `superior-cooldown` },
			{ kind: `item`, name: `Superior Duration`, id: `superior-duration` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Tesla Bullets`, id: `tesla-bullets` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	de = e(
		`<!> <!> <!> <!> <!> <!> <!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li><!> <!></li> <li></li></ul> <!></div> <!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function fe(e) {
	var ne = de(),
		c = te(ne);
	n(
		c,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don&#x27;t get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection.</li><li>Added Commends. You can commend players you&#x27;ve enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you&#x27;ve received on each hero will be displayed in your profile.</li><li>Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models</li></ul>
<p><img src="https://project8-data.community.forum/attachments/26/26043-0a7f28f92179f3eb7fa034e749847461.jpg?hash=TFfcNYdH9K" alt="lighting changes"  decoding="async" loading="eager"/></p>
<ul><li>Updated environment lighting and sky</li><li>Added sequential kill streak music cues</li><li>Added keybinds for &quot;Fly Up&quot; and &quot;Fly Down&quot;.  Used for flying abilities like Ivy&#x27;s Air Drop and Vindicta&#x27;s Flight</li><li>Fixed being unable to report/mute disconnected players</li><li>You can now drag and drop build categories to move them around</li><li>Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser.</li><li>Added indication of game mode within match history</li><li>Added Rank badge to matches on the Watch page</li><li>Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval</li><li>Flash Windows Taskbar icon if the game window isn&#x27;t in focus and you have 3 seconds until you respawn</li><li>Fixed issue in several languages where team net worth number shrunk to an unreadable size</li><li>Fixed Urns sometimes appearing to stay in the world after being picked up</li><li>Fixed jittering from Lash&#x27;s gun firing while running and aiming (this should reduce screen noise significantly in this case)</li><li>Lash melee animation updates</li><li>Added Melee Resistance to Vitality stat screen</li><li>Lowered pitch of Haze voice processing</li><li>Added teleporter channel and appear sounds</li><li>Added Healing Rite end sound</li><li>Added Mystic Shot proc sound</li><li>Added Magic Carpet cast, cast delay, loop, and end sounds</li><li>Updated Slowing Hex projectile loop, hit, and debuff sounds</li><li>Yamato&#x27;s Flying Strike now stops tracking targets that teleport</li><li>Shiv&#x27;s Killing Blow now stops tracking targets that teleport</li><li>McGinnis melee animation updates</li><li>Fixing hitting ESC to close to intro movie also closing the ranked summary popup</li><li>Fixed pregame countdown drawing over the shop UI</li><li>Pocket climb animation adjustments</li><li>Mirage Traveler now previews Mirage&#x27;s model at destination to show facing direction</li><li>Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards</li><li>Silenced debuff revisions to reduce obstructed vision of player</li><li>Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise</li><li>Mirage Djinn&#x27;s Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI</li><li>Mirage gun revisions to tracer, muzzle flash, and impacts</li><li>Shiv Dagger: reduced size of stuck dagger in victim</li><li>Unstoppable vfx has a more obvious start</li><li>Lady Geist Malice: revisions to reduce vfx noise and obstructions</li><li>Lady Geist Malice: reduced brightness of vfx for players close to it</li><li>Shiv Slice and Dice: reduced vfx noise for players close to it</li><li>Ivy Kudzu Bomb effects properly display visuals when above ground</li><li>Lash Flog: new effects</li><li>Play a sound when a debuff is applied to player but is purged due to some invulnerability</li><li>Fixed instances where mix ducking occurs too early in a sound event&#x27;s lifetime</li><li>Fixed audio occlusion filtering artifacts during high rates of change</li><li>Enabled certain music cues like &#x27;respawn&#x27; to interrupt base attack music</li><li>Denied orb sound will no longer play beyond 2500 game units from the player</li><li>Reduced visual noise of Wraith&#x27;s tracers when close up or when Wraith has a high fire rate</li><li>Increased intelligibility of team-specific hero death sound</li><li>Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately</li><li>Added looping telegraph for Seven Static Charge ability</li><li>Added victim-specific sound for Static Charge the moment it is applied</li><li>Bots are better at coming together to defend and push lanes</li><li>Bots will prioritize assisting human allies on offense</li><li>Reduced visual noise of Seven&#x27;s tracers, especially when close up or when Seven has a high fire rate</li><li>Added a &quot;Mouse Sensitivity: Vertical Scaling&quot; setting</li><li>Added a &quot;Reset Camera&quot; bind (available in Steam Input)</li><li>Fixed Steam Input &quot;Melee&quot; Action not resetting the camera vertically</li><li>Added new Steam Input Analog Action: &quot;Aim&quot;. This uses Angle-based sensitivity options in Steam Input (work-in-progress feature).</li><li>Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y)</li><li>Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined.</li><li>AP is no longer granted for Walkers</li><li>Shrine/Patron no longer have Soul/AP bounties</li><li>Shrine Flex Slot moved to &quot;All Shrines&quot;</li><li>Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average</li><li>Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying</li><li>Trooper soul changed from 50/50% in the kill/orb to 60/40%</li><li>Breakables spawn time increased from 2 minutes to 3 minutes</li><li>Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min</li><li>Urn comeback properties now require an 8% net worth lead to kick in</li><li>Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn&#x27;t a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team&#x27;s side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is.</li></ul>
<p><img src="https://project8-data.community.forum/attachments/26/26029-316e26e32d5d9c28711b7b32c47c9ec2.jpg?hash=Bcy1Su9gev" alt="urn 01"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/26/26030-66b9044d013d7baf5a1aa5a85be4cda7.jpg?hash=kSgwnPOjDr" alt="urn 02"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/26/26031-964938f678db211578e57da87f872680.jpg?hash=u8rCtcD0c_" alt="urn 03"  decoding="async" loading="lazy"/></p>
<ul><li>If the Urn hasn&#x27;t been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this.</li><li>Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds.</li><li>Increased speed Urn walks back</li><li>Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground</li><li>Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes</li><li>Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes</li><li>Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes</li><li>Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes</li><li>Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes</li><li>Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren&#x27;t)</li><li>Backdoor protection removal now has a 20s buffer (so it doesn&#x27;t go into protection mode immediately once creeps die)</li><li>Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes</li><li>The 70s respawn time now happens at 30 min instead of 35 min</li><li>There is now a respawn curve that goes from 70s to 75s over 30-&gt;40 minutes</li><li>Base Guardians and Shrines no longer have out-of-combat regen</li><li>Parry active window increased from 0.7 to 0.75</li><li>Parry cooldown reduced from 5s to 4.5s</li><li>Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own]</li><li>Medic Trooper heal cooldown increased from 6s to 35s</li><li>Sinner&#x27;s Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player)</li><li>Redesigned stairs from central canal to the outer lanes (near Urn spawn)</li><li>Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings</li></ul>
`
	);
	var ce = a(c, 2);
	re(ce, {});
	var le = a(ce, 2);
	n(
		le,
		() => `<p><img src="https://project8-data.community.forum/attachments/26/26034-dadcc55de196610454a06ffd805d0234.jpg?hash=a48dE8_vh4" alt="canal"  decoding="async" loading="lazy"/></p>
<ul><li>Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas</li><li>Added a Bounce Pad from these connection hallways to the front of the overpass</li><li>Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor</li></ul>
`
	);
	var ue = a(le, 2);
	ie(ue, {});
	var fe = a(ue, 2);
	n(
		fe,
		() => `<p><img src="https://project8-data.community.forum/attachments/26/26036-93a05dca9721d8ccbea072fb616bb646.jpg?hash=A8rfo7fvQ4" alt="outer lane connection 102424"  decoding="async" loading="lazy"/></p>
<ul><li>Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner&#x27;s Sacrifice neutrals</li><li>Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club</li></ul>
`
	);
	var pe = a(fe, 2);
	ae(pe, {});
	var me = a(pe, 2);
	n(
		me,
		() => `<ul><li>Added more zipline nodes to outer lanes</li><li>High-Velocity Mag: Bullet Velocity reduced from 25% to 20%</li><li>High-Velocity Mag: Bullet Shield Health increased from 50 to 65</li><li>High-Velocity Mag: Weapon damage increased from 12% to 13%</li><li>Superior Stamina: Spirit Power increased from 8 to 12</li><li>Mystic Reach: Ability Range reduced from 18% to 15%</li><li>Mystic Reach: Bullet Resist increased from 6% to 7%</li><li>Improved Cooldown: Now grants +75 Spirit Shield</li><li>Withering Whip: Projectile speed increased by 30%</li><li>Cold Front now does double damage to NPC units</li><li>Improved Reach: Non-Imbued Ability Range increased from 25% to 26%</li><li>Improved Reach: Bullet Resist increased from 12% to 13%</li><li>Improved Burst: Max HP Damage increased from 7% to 9%</li><li>Improved Burst: Threshold damage increased from 125 to 200</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var he = a(me, 2);
	oe(he, {});
	var ge = a(he, 2);
	r(ge, 1, `hero abrams`);
	var _e = i(ge);
	n(
		_e,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
<ul><li>Melee attack rate reduced by 15% (time between attacks)</li><li>Gun falloff damage starts at 20m instead of 22m</li></ul>
`
	);
	var ve = a(_e, 2);
	r(ve, 1, `ability shoulder-charge`);
	var ye = i(ve);
	n(
		ye,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Fixed some cases where Shoulder Charge would do a 180/360 on spell cast</li><li>Fixed Shoulder Charge sliding against wall surfaces incorrectly</li></ul>
`
	);
	var be = a(ye, 2);
	(o(be, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), t(ve));
	var xe = a(ve, 2);
	r(xe, 1, `ability seismic-impact`);
	var Se = i(xe);
	n(
		Se,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Fixed Seismic Impact sometimes getting stuck on objects</li></ul>
`
	);
	var Ce = a(Se, 2);
	(o(Ce, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), t(xe), t(ge));
	var we = a(ge, 2);
	r(we, 1, `hero bebop`);
	var Te = i(we);
	n(
		Te,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
<ul><li>Bullet damage growth increased from 0.29 to 0.33</li><li>No longer gains 1% Bullet Resist per boon</li><li>Now gains 1% Spirit Resist per boon</li></ul>
`
	);
	var l = a(Te, 2);
	r(l, 1, `ability sticky-bomb`);
	var Ee = i(l);
	n(
		Ee,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
<ul><li>Sticky Bomb now loses 20% of your stacks on death (rounds up)</li></ul>
`
	);
	var De = a(Ee, 2);
	(o(De, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(l));
	var Oe = a(l, 2);
	r(Oe, 1, `ability hook`);
	var ke = i(Oe);
	n(
		ke,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>
<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>
<ul><li>Hook now returns troopers 75% faster than normal</li></ul>
`
	);
	var Ae = a(ke, 2);
	(o(Ae, { kind: `hero`, name: `Bebop`, ability: `Hook` }), t(Oe), t(we));
	var u = a(we, 2);
	r(u, 1, `hero grey-talon`);
	var je = i(u);
	n(
		je,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
<ul><li>Base regen increased from 2 to 2.5</li><li>Gun spirit scaling increased from 0.1 to 0.13</li><li>Movespeed now scales with Spirit Power again</li></ul>
`
	);
	var Me = a(je, 2);
	r(Me, 1, `ability rain-of-arrows`);
	var Ne = i(Me);
	n(
		Ne,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
<ul><li>Rain of Arrows strafe speed with stamina increased by 30%</li></ul>
`
	);
	var Pe = a(Ne, 2);
	(o(Pe, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), t(Me), t(u));
	var d = a(u, 2);
	r(d, 1, `hero infernus`);
	var Fe = i(d);
	n(
		Fe,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var f = a(Fe, 2);
	r(f, 1, `ability napalm`);
	var Ie = i(f);
	n(
		Ie,
		() => `
<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Napalm change history</a></p>
<h4 id="napalm"><a href="/ability/napalm">Napalm</a></h4>
<ul><li>reduced darkness of players affected by Catalyst debuff</li></ul>
`
	);
	var Le = a(Ie, 2);
	(o(Le, { kind: `hero`, name: `Infernus`, ability: `Napalm` }), t(f));
	var p = a(f, 2);
	r(p, 1, `ability concussive-combustion`);
	var Re = i(p);
	n(
		Re,
		() => `
<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>
<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>
<ul><li>reduced brightness and lingering of Concussive Combustion effects</li><li>reduced visual noise of tracers and firerate increases</li></ul>
`
	);
	var ze = a(Re, 2);
	(o(ze, { kind: `hero`, name: `Infernus`, ability: `Concussive Combustion` }), t(p));
	var Be = a(p, 2);
	r(Be, 1, `ability afterburn`);
	var Ve = i(Be);
	n(
		Ve,
		() => `
<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>
<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>
<ul><li>Afterburn T1 reduced from 30% to 25%</li></ul>
`
	);
	var He = a(Ve, 2);
	(o(He, { kind: `hero`, name: `Infernus`, ability: `Afterburn` }), t(Be), t(d));
	var m = a(d, 2);
	r(m, 1, `hero ivy`);
	var Ue = i(m);
	n(
		Ue,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
<ul><li>Base bullet damage increased from 4.5 to 5</li><li>Bullet damage growth reduced from 0.39 to 0.36</li></ul>
`
	);
	var We = a(Ue, 2);
	r(We, 1, `ability air-drop`);
	var Ge = i(We);
	n(
		Ge,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop slow reduced from 35% to 30%</li></ul>
`
	);
	var Ke = a(Ge, 2);
	(o(Ke, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(We), t(m));
	var h = a(m, 2);
	r(h, 1, `hero kelvin`);
	var qe = i(h);
	n(
		qe,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var g = a(qe, 2);
	r(g, 1, `ability arctic-beam`);
	var Je = i(g);
	n(
		Je,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam slow reduced from 50% to 40%</li></ul>
`
	);
	var Ye = a(Je, 2);
	(o(Ye, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), t(g));
	var _ = a(g, 2);
	r(_, 1, `ability frost-grenade`);
	var Xe = i(_);
	n(
		Xe,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
<ul><li>Frost Grenade T2 heal reduced from 145 to 125</li></ul>
`
	);
	var Ze = a(Xe, 2);
	(o(Ze, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), t(_));
	var Qe = a(_, 2);
	r(Qe, 1, `ability frozen-shelter`);
	var $e = i(Qe);
	n(
		$e,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
<ul><li>Fixed Frozen Shelter not freezing weakened patron</li></ul>
`
	);
	var et = a($e, 2);
	(o(et, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), t(Qe), t(h));
	var v = a(h, 2);
	r(v, 1, `hero lady-geist`);
	var tt = i(v);
	n(
		tt,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var y = a(tt, 2);
	r(y, 1, `ability malice`);
	var nt = i(y);
	n(
		nt,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
<ul><li>Malice slow reduced from 20% to 15%</li><li>Malice debuff duration reduced from 13s to 9s</li></ul>
`
	);
	var rt = a(nt, 2);
	(o(rt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), t(y));
	var b = a(y, 2);
	r(b, 1, `ability malice-damage-amp`);
	var it = i(b);
	n(
		it,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice Damage Amp change history</a></p>
<h4 id="malice-damage-amp"><a href="/ability/malice">Malice Damage Amp</a></h4>
<ul><li>Malice Damage Amp reduced from 15% to 8%</li></ul>
`
	);
	var at = a(it, 2);
	(o(at, { kind: `hero`, name: `Lady Geist`, ability: `Malice Damage Amp` }), t(b));
	var ot = a(b, 2);
	r(ot, 1, `ability malice`);
	var st = i(ot);
	n(
		st,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice-1"><a href="/ability/malice">Malice</a></h4>
<ul><li>Malice T2 now also increases damage amp by 7%</li><li>Malice no longer causes you to un-zoom on cast</li></ul>
`
	);
	var ct = a(st, 2);
	(o(ct, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), t(ot), t(v));
	var x = a(v, 2);
	r(x, 1, `hero mcginnis`);
	var lt = i(x);
	n(
		lt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
<ul><li>Gun spin decay rate improved from 0.65 to 0.25</li></ul>
`
	);
	var S = a(lt, 2);
	r(S, 1, `ability mini-turrets`);
	var ut = i(S);
	n(
		ut,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>
<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>
`
	);
	var dt = a(ut, 2),
		ft = i(dt),
		pt = i(ft);
	n(pt, () => `Mini Turrets cooldown reduced from 24s to 18s`);
	var mt = a(pt, 2);
	(s(mt, {
		kind: `hero`,
		name: `McGinnis`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Mini Turrets cooldown reduced from 24s to 18s`
	}),
		t(ft));
	var ht = a(ft, 2);
	(n(ht, () => `Mini Turrets spirit resist increased from 60% to 80%`, !0), t(ht), t(dt));
	var gt = a(dt, 2);
	(o(gt, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets` }), t(S));
	var C = a(S, 2);
	r(C, 1, `ability spectral-wall`);
	var _t = i(C);
	n(
		_t,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Spectral Wall slow reduced from 25% to 20%</li><li>Spectral Wall T1 damage amp reduced from 25% to 15%</li></ul>
`
	);
	var vt = a(_t, 2);
	(o(vt, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), t(C));
	var yt = a(C, 2);
	r(yt, 1, `ability heavy-barrage`);
	var bt = i(yt);
	n(
		bt,
		() => `
<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>
<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>
`
	);
	var xt = a(bt, 2),
		St = i(xt);
	(n(St, () => `Heavy Barrage minimum range increased from 6m to 7m`, !0), t(St));
	var Ct = a(St, 2),
		wt = i(Ct);
	n(wt, () => `Heavy Barrage cooldown increased from 106s to 140s`);
	var Tt = a(wt, 2);
	(s(Tt, {
		kind: `hero`,
		name: `McGinnis`,
		groupIndex: 3,
		bulletIndex: 1,
		text: `Heavy Barrage cooldown increased from 106s to 140s`
	}),
		t(Ct));
	var Et = a(Ct, 2),
		Dt = i(Et);
	n(Dt, () => `Heavy Barrage T2 cooldown improved from -47s to -50s`);
	var Ot = a(Dt, 2);
	(s(Ot, {
		kind: `hero`,
		name: `McGinnis`,
		groupIndex: 3,
		bulletIndex: 2,
		text: `Heavy Barrage T2 cooldown improved from -47s to -50s`
	}),
		t(Et));
	var kt = a(Et, 2);
	(n(kt, () => `Heavy Barrage T1 slow reduced from 35% to 30%`, !0), t(kt), t(xt));
	var At = a(xt, 2);
	(o(At, { kind: `hero`, name: `McGinnis`, ability: `Heavy Barrage` }), t(yt), t(x));
	var w = a(x, 2);
	r(w, 1, `hero mirage`);
	var jt = i(w);
	n(
		jt,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var T = a(jt, 2);
	r(T, 1, `ability fire-scarabs`);
	var Mt = i(T);
	n(
		Mt,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
<ul><li>Fire Scarabs T3 max health steal increased from +70 to +80</li></ul>
`
	);
	var Nt = a(Mt, 2);
	(o(Nt, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), t(T));
	var E = a(T, 2);
	r(E, 1, `ability djinn-s-mark`);
	var Pt = i(E);
	n(
		Pt,
		() => `
<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>
<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>
<ul><li>Djinn&#x27;s Mark T3 cooldown between multipliers improved from -0.5s to -0.75s</li></ul>
`
	);
	var Ft = a(Pt, 2);
	(o(Ft, { kind: `hero`, name: `Mirage`, ability: `Djinn's Mark` }), t(E));
	var D = a(E, 2);
	r(D, 1, `ability traveler-fire-rate`);
	var It = i(D);
	n(
		It,
		() => `
<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler Fire Rate change history</a></p>
<h4 id="traveler-fire-rate"><a href="/ability/traveler">Traveler Fire Rate</a></h4>
<ul><li>Traveler Fire Rate increased from 20% to 30%</li></ul>
`
	);
	var Lt = a(It, 2);
	(o(Lt, { kind: `hero`, name: `Mirage`, ability: `Traveler Fire Rate` }), t(D));
	var Rt = a(D, 2);
	r(Rt, 1, `ability traveler`);
	var zt = i(Rt);
	n(
		zt,
		() => `
<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>
<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>
<ul><li>Traveler T2 cooldown reduction improved from -30s to -40s</li><li>Traveler T3 now grants Unstoppable for 3s on arrival</li></ul>
`
	);
	var Bt = a(zt, 2);
	(o(Bt, { kind: `hero`, name: `Mirage`, ability: `Traveler` }), t(Rt), t(w));
	var O = a(w, 2);
	r(O, 1, `hero mo-krill`);
	var Vt = i(O);
	n(
		Vt,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
<ul><li>Now has 20% Headshot Crit reduction</li></ul>
`
	);
	var Ht = a(Vt, 2);
	r(Ht, 1, `ability burrow`);
	var Ut = i(Ht);
	n(
		Ut,
		() => `
<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>
<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>
<ul><li>Burrow bullet and spirit resist now persist while spinning out of the burrow</li></ul>
`
	);
	var Wt = a(Ut, 2);
	(o(Wt, { kind: `hero`, name: `Mo & Krill`, ability: `Burrow` }), t(Ht), t(O));
	var k = a(O, 2);
	r(k, 1, `hero paradox`);
	var Gt = i(k);
	n(
		Gt,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var A = a(Gt, 2);
	r(A, 1, `ability pulse-grenade`);
	var Kt = i(A);
	n(
		Kt,
		() => `
<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>
<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>
<ul><li>Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender)</li><li>Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration</li><li>Pulse Grenade T2 improved from -7.5s to -8s</li></ul>
`
	);
	var qt = a(Kt, 2);
	(o(qt, { kind: `hero`, name: `Paradox`, ability: `Pulse Grenade` }), t(A));
	var Jt = a(A, 2);
	r(Jt, 1, `ability kinetic-carbine`);
	var Yt = i(Jt);
	n(
		Yt,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine T2 improved from -9.5s Cooldown to -10s</li><li>Kinetic Carbine shots cannot miss due to evasion</li><li>Kinetic Carbine can now pierce breakables</li><li>Kinetic Carbine now does 15% more damage on a headshot</li><li>Kinetic Carbine sound level reduced a little bit</li></ul>
`
	);
	var Xt = a(Yt, 2);
	(o(Xt, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), t(Jt), t(k));
	var j = a(k, 2);
	r(j, 1, `hero seven`);
	var Zt = i(j);
	n(
		Zt,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var M = a(Zt, 2);
	r(M, 1, `ability lightning-ball`);
	var Qt = i(M);
	n(
		Qt,
		() => `
<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>
<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>
`
	);
	var $t = a(Qt, 2),
		en = i($t),
		tn = i(en);
	n(tn, () => `Lightning Ball cooldown increased from 23s to 26s`);
	var nn = a(tn, 2);
	(s(nn, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Lightning Ball cooldown increased from 23s to 26s`
	}),
		t(en));
	var rn = a(en, 2),
		an = i(rn);
	n(an, () => `Lightning Ball radius reduced from 4m to 3.5m`);
	var on = a(an, 2);
	(s(on, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Lightning Ball radius reduced from 4m to 3.5m`
	}),
		t(rn));
	var sn = a(rn, 2);
	(n(sn, () => `Lightning Ball T2 slow reduced from 40% to 35%`, !0), t(sn), t($t));
	var cn = a($t, 2);
	(o(cn, { kind: `hero`, name: `Seven`, ability: `Lightning Ball` }), t(M));
	var ln = a(M, 2);
	n(
		ln,
		() => `
<ul><li>Movespeed reduced from 7.3 to 7.1</li></ul>
`
	);
	var un = a(ln, 2);
	r(un, 1, `ability storm-cloud`);
	var dn = i(un);
	n(
		dn,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud expand time reduced from 3s to 2s</li><li>Storm Cloud range increased from 25m to 30m</li></ul>
`
	);
	var fn = a(dn, 2);
	(o(fn, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(un), t(j));
	var N = a(j, 2);
	r(N, 1, `hero shiv`);
	var pn = i(N);
	n(
		pn,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Base speed reduced from 7.3 to 7.0</li></ul>
`
	);
	var P = a(pn, 2);
	r(P, 1, `ability serrated-knives`);
	var mn = i(P);
	n(
		mn,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
<ul><li>Serrated Knives collision radius reduced by 20%</li></ul>
`
	);
	var hn = a(mn, 2);
	(o(hn, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), t(P));
	var F = a(P, 2);
	r(F, 1, `ability bloodletting`);
	var gn = i(F);
	n(
		gn,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>
`
	);
	var _n = a(gn, 2),
		vn = i(_n),
		yn = i(vn);
	n(yn, () => `Bloodletting cooldown increased from 21s to 50s`);
	var bn = a(yn, 2);
	(s(bn, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Bloodletting cooldown increased from 21s to 50s`
	}),
		t(vn));
	var xn = a(vn, 2);
	(n(
		xn,
		() =>
			`Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s)`,
		!0
	),
		t(xn));
	var Sn = a(xn, 2);
	(n(Sn, () => `Bloodletting duration increased from 10s to 13s`, !0), t(Sn), t(_n));
	var Cn = a(_n, 2);
	(o(Cn, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), t(F));
	var I = a(F, 2);
	r(I, 1, `ability bloodletting-incoming-damage-deferred`);
	var wn = i(I);
	n(
		wn,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Incoming Damage Deferred change history</a></p>
<h4 id="bloodletting-incoming-damage-deferred"><a href="/ability/bloodletting">Bloodletting Incoming Damage Deferred</a></h4>
<ul><li>Bloodletting Incoming Damage Deferred reduced from 30% to 22%</li></ul>
`
	);
	var Tn = a(wn, 2);
	(o(Tn, {
		kind: `hero`,
		name: `Shiv`,
		ability: `Bloodletting Incoming Damage Deferred`
	}),
		t(I));
	var L = a(I, 2);
	r(L, 1, `ability bloodletting`);
	var En = i(L);
	n(
		En,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting-1"><a href="/ability/bloodletting">Bloodletting</a></h4>
<ul><li>Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration)</li></ul>
`
	);
	var Dn = a(En, 2);
	(o(Dn, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), t(L));
	var On = a(L, 2);
	r(On, 1, `ability killing-blow`);
	var kn = i(On);
	n(
		kn,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow range reduced from 20m to 13m</li><li>Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75</li><li>Killing Blow Rage buffer duration reduced from 10s to 9s</li><li>Killing Blow Rage buildup vs creeps reduced by 50%</li></ul>
`
	);
	var An = a(kn, 2);
	(o(An, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), t(On), t(N));
	var R = a(N, 2);
	r(R, 1, `hero vindicta`);
	var jn = i(R);
	n(
		jn,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Gun cycle time improved from 0.26s to 0.22s</li><li>Bullet damage growth per boon increased from 0.55 to 0.65</li><li>Fire rate now scales with Spirit Power (0.14)</li></ul>
`
	);
	var z = a(jn, 2);
	r(z, 1, `ability assassinate`);
	var Mn = i(z);
	n(
		Mn,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate no longer splits to allies</li></ul>
`
	);
	var Nn = a(Mn, 2);
	(o(Nn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(z));
	var B = a(z, 2);
	r(B, 1, `ability flight`);
	var Pn = i(B);
	n(
		Pn,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
<ul><li>Flight duration increased from 8s to 12s</li><li>Flight T2 duration increased from +6s to +8s</li></ul>
`
	);
	var Fn = a(Pn, 2);
	(o(Fn, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), t(B));
	var In = a(B, 2);
	r(In, 1, `ability assassinate`);
	var Ln = i(In);
	n(
		Ln,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate-1"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate bullet radius increased from 3&quot; to 4&quot;</li><li>Assassinate scope is now automatically canceled when Paradoxical Swap hits you</li></ul>
`
	);
	var Rn = a(Ln, 2);
	(o(Rn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(In), t(R));
	var V = a(R, 2);
	r(V, 1, `hero viscous`);
	var zn = i(V);
	n(
		zn,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
<ul><li>cleaner effect for viscous alt-fire</li><li>Bullet damage reduced from 12 to 11</li><li>Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6)</li></ul>
`
	);
	var H = a(zn, 2);
	r(H, 1, `ability the-cube`);
	var Bn = i(H);
	n(
		Bn,
		() => `
<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>
<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>
<ul><li>The Cube T2 moved to T3</li><li>The Cube T2 is now +35 HP regen</li></ul>
`
	);
	var Vn = a(Bn, 2);
	(o(Vn, { kind: `hero`, name: `Viscous`, ability: `The Cube` }), t(H));
	var U = a(H, 2);
	r(U, 1, `ability splatter`);
	var Hn = i(U);
	n(
		Hn,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter T2 reduced from +60 Damage to +50</li></ul>
`
	);
	var Un = a(Hn, 2);
	(o(Un, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), t(U));
	var Wn = a(U, 2);
	r(Wn, 1, `ability goo-ball-spirit-resist`);
	var Gn = i(Wn);
	n(
		Gn,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball Spirit Resist change history</a></p>
<h4 id="goo-ball-spirit-resist"><a href="/ability/goo-ball">Goo Ball Spirit Resist</a></h4>
<ul><li>Goo Ball Spirit Resist reduced from 70% to 60%</li></ul>
`
	);
	var Kn = a(Gn, 2);
	(o(Kn, { kind: `hero`, name: `Viscous`, ability: `Goo Ball Spirit Resist` }),
		t(Wn),
		t(V));
	var W = a(V, 2);
	r(W, 1, `hero warden`);
	var qn = i(W);
	n(
		qn,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
`
	);
	var G = a(qn, 2);
	r(G, 1, `ability alchemical-flask`);
	var Jn = i(G);
	n(
		Jn,
		() => `
<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>
<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>
<ul><li>Alchemical Flask slow duration reduced from 6s to 3s</li><li>Alchemical Flask weapon damage duration increased from 6s to 7s</li></ul>
`
	);
	var Yn = a(Jn, 2);
	(o(Yn, { kind: `hero`, name: `Warden`, ability: `Alchemical Flask` }), t(G));
	var K = a(G, 2);
	r(K, 1, `ability binding-word`);
	var Xn = i(K);
	n(
		Xn,
		() => `
<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>
<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>
<ul><li>Binding Word escape time reduced from 2.9s to 2.8s</li><li>Binding Word escape range increased from 18.5m to 19m</li></ul>
`
	);
	var Zn = a(Xn, 2);
	(o(Zn, { kind: `hero`, name: `Warden`, ability: `Binding Word` }), t(K));
	var Qn = a(K, 2);
	r(Qn, 1, `ability last-stand`);
	var $n = i(Qn);
	n(
		$n,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand T3 now also grants you unstoppable during the 2s channel</li></ul>
`
	);
	var er = a($n, 2);
	(o(er, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), t(Qn), t(W));
	var q = a(W, 2);
	r(q, 1, `hero wraith`);
	var tr = i(q);
	n(
		tr,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var J = a(tr, 2);
	r(J, 1, `ability card-trick`);
	var nr = i(J);
	n(
		nr,
		() => `
<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>
<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>
`
	);
	var rr = a(nr, 2),
		ir = i(rr),
		ar = i(ir);
	n(ar, () => `Card Trick base damage reduced from 80 to 70`);
	var or = a(ar, 2);
	(s(or, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Card Trick base damage reduced from 80 to 70`
	}),
		t(ir));
	var sr = a(ir, 2),
		cr = i(sr);
	n(cr, () => `Card Trick cooldown increased from 0.5s to 0.65s`);
	var lr = a(cr, 2);
	(s(lr, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Card Trick cooldown increased from 0.5s to 0.65s`
	}),
		t(sr),
		t(rr));
	var ur = a(rr, 2);
	(o(ur, { kind: `hero`, name: `Wraith`, ability: `Card Trick` }), t(J));
	var dr = a(J, 2);
	r(dr, 1, `ability telekinesis`);
	var fr = i(dr);
	n(
		fr,
		() => `
<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>
<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>
`
	);
	var pr = a(fr, 2),
		mr = i(pr),
		hr = i(mr);
	n(hr, () => `Telekinesis cooldown increased from 95s to 100s`);
	var gr = a(hr, 2);
	(s(gr, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Telekinesis cooldown increased from 95s to 100s`
	}),
		t(mr));
	var _r = a(mr, 2),
		vr = i(_r);
	n(vr, () => `Telekinesis T1 cooldown improved from -28s to -30s`);
	var yr = a(vr, 2);
	(s(yr, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 1,
		bulletIndex: 1,
		text: `Telekinesis T1 cooldown improved from -28s to -30s`
	}),
		t(_r),
		t(pr));
	var br = a(pr, 2);
	(o(br, { kind: `hero`, name: `Wraith`, ability: `Telekinesis` }), t(dr), t(q));
	var Y = a(q, 2);
	r(Y, 1, `hero yamato`);
	var xr = i(Y);
	n(
		xr,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var X = a(xr, 2);
	r(X, 1, `ability flying-slash`);
	var Sr = i(X);
	n(
		Sr,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Fixed being able to cast an ability while casting Flying Strike</li></ul>
`
	);
	var Cr = a(Sr, 2);
	(o(Cr, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `ability crimson-slash`);
	var wr = i(Z);
	n(
		wr,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
<ul><li>Fixed Crimson Slash following in the direction of dash instead of cross hair</li></ul>
`
	);
	var Tr = a(wr, 2);
	(o(Tr, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `ability shadow-transformation`);
	var Er = i(Q);
	n(
		Er,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation T1 changed to +20% Fire Rate</li></ul>
`
	);
	var Dr = a(Er, 2);
	(o(Dr, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }), t(Q));
	var Or = a(Q, 2);
	r(Or, 1, `ability shadow-transformation-cooldown`);
	var kr = i(Or);
	n(
		kr,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation Cooldown change history</a></p>
<h4 id="shadow-transformation-cooldown"><a href="/ability/shadow-transformation">Shadow Transformation Cooldown</a></h4>
<ul><li>Shadow Transformation Cooldown reduced from 106s to 90s</li></ul>
`
	);
	var Ar = a(kr, 2);
	(o(Ar, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation Cooldown` }),
		t(Or),
		t(Y));
	var jr = a(Y, 2);
	n(
		jr,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Mr = a(jr, 2);
	se(Mr, {});
	var Nr = a(Mr, 2);
	r(Nr, 1, `item active-reload`);
	var Pr = i(Nr);
	n(
		Pr,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>No longer grants -20% Reload Time</li><li>Now grants +18% Ammo</li></ul>
`
	);
	var Fr = a(Pr, 2);
	(o(Fr, { kind: `item`, name: `Active Reload`, ability: null }), t(Nr));
	var Ir = a(Nr, 2);
	r(Ir, 1, `item ammo-scavenger`);
	var Lr = i(Ir);
	n(
		Lr,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>proc sound only plays when applying a stack</li><li>Duration increased from 30s to 35s</li></ul>
`
	);
	var Rr = a(Lr, 2);
	(o(Rr, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(Ir));
	var zr = a(Ir, 2);
	r(zr, 1, `item boundless-spirit`);
	var Br = i(zr);
	n(
		Br,
		() => `
<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>
<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>
<ul><li>Spirit Power increased from 60 to 65</li><li>Weapon Power increased from 25% to 30%</li></ul>
`
	);
	var Vr = a(Br, 2);
	(o(Vr, { kind: `item`, name: `Boundless Spirit`, ability: null }), t(zr));
	var Hr = a(zr, 2);
	r(Hr, 1, `item bullet-resist-shredder`);
	var Ur = i(Hr);
	n(
		Ur,
		() => `
<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>
<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>
<ul><li>No longer grants +5% Bullet Resist</li><li>Now grants +15% Melee damage resistance</li></ul>
`
	);
	var Wr = a(Ur, 2);
	(o(Wr, { kind: `item`, name: `Bullet Resist Shredder`, ability: null }), t(Hr));
	var Gr = a(Hr, 2);
	r(Gr, 1, `item burst-fire`);
	var Kr = i(Gr);
	n(
		Kr,
		() => `
<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>
<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>
<ul><li>Now grants +20% Slow Resistance</li></ul>
`
	);
	var qr = a(Kr, 2);
	(o(qr, { kind: `item`, name: `Burst Fire`, ability: null }), t(Gr));
	var Jr = a(Gr, 2);
	r(Jr, 1, `item colossus`);
	var Yr = i(Jr);
	n(
		Yr,
		() => `
<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>
<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>
<ul><li>Slow reduced from 35% to 30%</li><li>Slow radius reduced from 14m to 12m</li></ul>
`
	);
	var Xr = a(Yr, 2);
	(o(Xr, { kind: `item`, name: `Colossus`, ability: null }), t(Jr));
	var Zr = a(Jr, 2);
	r(Zr, 1, `item duration-extender`);
	var Qr = i(Zr);
	n(
		Qr,
		() => `
<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>
<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>
<ul><li>Ability Duration reduced from 16% to 14%</li><li>Now grants +8% Weapon Damage</li></ul>
`
	);
	var $r = a(Qr, 2);
	(o($r, { kind: `item`, name: `Duration Extender`, ability: null }), t(Zr));
	var ei = a(Zr, 2);
	r(ei, 1, `item enduring-speed`);
	var ti = i(ei);
	n(
		ti,
		() => `
<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>
<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>
<ul><li>Slow Resist reduced from 35% to 30%</li></ul>
`
	);
	var ni = a(ti, 2);
	(o(ni, { kind: `item`, name: `Enduring Speed`, ability: null }), t(ei));
	var ri = a(ei, 2);
	r(ri, 1, `item escalating-exposure`);
	var ii = i(ri);
	n(
		ii,
		() => `
<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>
<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>
<ul><li>Spirit Amp Per Stack reduced from 5% to 4%</li></ul>
`
	);
	var ai = a(ii, 2);
	(o(ai, { kind: `item`, name: `Escalating Exposure`, ability: null }), t(ri));
	var oi = a(ri, 2);
	r(oi, 1, `item ethereal-shift`);
	var si = i(oi);
	n(
		si,
		() => `
<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>
<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>
<ul><li>Active no longer grants 14 spirit power or reloads</li><li>Active now grants +3 Movespeed for 5 seconds after returning</li><li>Active now grants +40% Spirit Resist for 5 seconds after returning</li><li>Now grants +6 Spirit Power</li></ul>
`
	);
	var ci = a(si, 2);
	(o(ci, { kind: `item`, name: `Ethereal Shift`, ability: null }), t(oi));
	var li = a(oi, 2);
	r(li, 1, `item extra-health`);
	var ui = i(li);
	n(
		ui,
		() => `
<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>
<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>
<ul><li>Now upgrades into Fortitude</li></ul>
`
	);
	var di = a(ui, 2);
	(o(di, { kind: `item`, name: `Extra Health`, ability: null }), t(li));
	var fi = a(li, 2);
	r(fi, 1, `item extra-regen`);
	var pi = i(fi);
	n(
		pi,
		() => `
<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>
<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>
<ul><li>No longer grants +25 Health</li></ul>
`
	);
	var mi = a(pi, 2);
	(o(mi, { kind: `item`, name: `Extra Regen`, ability: null }), t(fi));
	var hi = a(fi, 2);
	r(hi, 1, `item extra-stamina`);
	var gi = i(hi);
	n(
		gi,
		() => `
<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>
<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>
<ul><li>Bonus Health increased from +25 to +35</li></ul>
`
	);
	var _i = a(gi, 2);
	(o(_i, { kind: `item`, name: `Extra Stamina`, ability: null }), t(hi));
	var vi = a(hi, 2);
	r(vi, 1, `item fortitude`);
	var yi = i(vi);
	n(
		yi,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Now upgrades from Extra Health</li><li>Health increased from 325 to 365</li><li>Restore delay reduced from 11s to 10s</li><li>Weapon Damage increased from 25% to 27%</li></ul>
`
	);
	var bi = a(yi, 2);
	(o(bi, { kind: `item`, name: `Fortitude`, ability: null }), t(vi));
	var xi = a(vi, 2);
	r(xi, 1, `item improved-spirit`);
	var Si = i(xi);
	n(
		Si,
		() => `
<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>
<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>
<ul><li>Spirit Power increased from 28 to 30</li></ul>
`
	);
	var Ci = a(Si, 2);
	(o(Ci, { kind: `item`, name: `Improved Spirit`, ability: null }), t(xi));
	var wi = a(xi, 2);
	r(wi, 1, `item knockdown`);
	var Ti = i(wi);
	n(
		Ti,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>updated effect animation to alert when it will stun</li></ul>
`
	);
	var Ei = a(Ti, 2);
	(o(Ei, { kind: `item`, name: `Knockdown`, ability: null }), t(wi));
	var Di = a(wi, 2);
	r(Di, 1, `item leech`);
	var Oi = i(Di);
	n(
		Oi,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Now has 12% Cooldown Reduction</li><li>No longer grants Spirit Power</li></ul>
`
	);
	var ki = a(Oi, 2);
	(o(ki, { kind: `item`, name: `Leech`, ability: null }), t(Di));
	var Ai = a(Di, 2);
	r(Ai, 1, `item long-range`);
	var ji = i(Ai);
	n(
		ji,
		() => `
<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>
<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>
<ul><li>No longer grants +25% Ammo</li><li>Now has -20% Reload Time</li></ul>
`
	);
	var Mi = a(ji, 2);
	(o(Mi, { kind: `item`, name: `Long Range`, ability: null }), t(Ai));
	var Ni = a(Ai, 2);
	r(Ni, 1, `item lucky-shot`);
	var Pi = i(Ni);
	n(
		Pi,
		() => `
<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>
<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>
<ul><li>Proc now pierces evasion</li></ul>
`
	);
	var Fi = a(Pi, 2);
	(o(Fi, { kind: `item`, name: `Lucky Shot`, ability: null }), t(Ni));
	var Ii = a(Ni, 2);
	r(Ii, 1, `item majestic-leap`);
	var Li = i(Ii);
	n(
		Li,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
`
	);
	var Ri = a(Li, 2),
		zi = i(Ri),
		Bi = i(zi);
	n(Bi, () => `Cooldown increased from 26s to 45s`);
	var Vi = a(Bi, 2);
	(s(Vi, {
		kind: `item`,
		name: `Majestic Leap`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 26s to 45s`
	}),
		t(zi));
	var Hi = a(zi, 2);
	(n(Hi, () => `Getting shot while in the air disables the drop-down ability`, !0),
		t(Hi),
		t(Ri));
	var Ui = a(Ri, 2);
	(o(Ui, { kind: `item`, name: `Majestic Leap`, ability: null }), t(Ii));
	var Wi = a(Ii, 2);
	r(Wi, 1, `item melee-charge`);
	var Gi = i(Wi);
	n(
		Gi,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>Weapon Damage reduced from 15% to 12%</li><li>Health reduced from 100 to 75</li></ul>
`
	);
	var Ki = a(Gi, 2);
	(o(Ki, { kind: `item`, name: `Melee Charge`, ability: null }), t(Wi));
	var qi = a(Wi, 2);
	r(qi, 1, `item monster-rounds`);
	var Ji = i(qi);
	n(
		Ji,
		() => `
<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>
<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>
<ul><li>Resist vs NPCs reduced from 30% to 25%</li></ul>
`
	);
	var Yi = a(Ji, 2);
	(o(Yi, { kind: `item`, name: `Monster Rounds`, ability: null }), t(qi));
	var Xi = a(qi, 2);
	r(Xi, 1, `item mystic-reverb`);
	var Zi = i(Xi);
	n(
		Zi,
		() => `
<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>
<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>
<ul><li>Slow now only affects the primary target</li><li>Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%</li></ul>
`
	);
	var Qi = a(Zi, 2);
	(o(Qi, { kind: `item`, name: `Mystic Reverb`, ability: null }), t(Xi));
	var $i = a(Xi, 2);
	r($i, 1, `item mystic-shot`);
	var ea = i($i);
	n(
		ea,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
`
	);
	var ta = a(ea, 2),
		na = i(ta);
	(n(na, () => `Proc cannot miss due to evasion`, !0), t(na));
	var ra = a(na, 2),
		ia = i(ra);
	n(ia, () => `Cooldown increased from 5.25 to 5.75`);
	var aa = a(ia, 2);
	(s(aa, {
		kind: `item`,
		name: `Mystic Shot`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 5.25 to 5.75`
	}),
		t(ra),
		t(ta));
	var oa = a(ta, 2);
	(o(oa, { kind: `item`, name: `Mystic Shot`, ability: null }), t($i));
	var sa = a($i, 2);
	r(sa, 1, `item mystic-slow`);
	var ca = i(sa);
	n(
		ca,
		() => `
<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>
<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>
<ul><li>Slow reduced from 30% to 25%</li><li>Health bonus increased from 100 to 140</li></ul>
`
	);
	var la = a(ca, 2);
	(o(la, { kind: `item`, name: `Mystic Slow`, ability: null }), t(sa));
	var ua = a(sa, 2);
	r(ua, 1, `item phantom-strike`);
	var da = i(ua);
	n(
		da,
		() => `
<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>
<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>
<ul><li>No longer grants 15% Bullet Resist</li><li>Now grants +15% Spirit Resist</li></ul>
`
	);
	var fa = a(da, 2);
	(o(fa, { kind: `item`, name: `Phantom Strike`, ability: null }), t(ua));
	var pa = a(ua, 2);
	r(pa, 1, `item rapid-rounds`);
	var ma = i(pa);
	n(
		ma,
		() => `
<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>
<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>
<ul><li>Fire Rate increased from 9% to 10%</li></ul>
`
	);
	var ha = a(ma, 2);
	(o(ha, { kind: `item`, name: `Rapid Rounds`, ability: null }), t(pa));
	var ga = a(pa, 2);
	r(ga, 1, `item reactive-barrier`);
	var _a = i(ga);
	n(
		_a,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
<ul><li>Ammo increased from 15% to 20%</li></ul>
`
	);
	var va = a(_a, 2);
	(o(va, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(ga));
	var ya = a(ga, 2);
	r(ya, 1, `item rescue-beam`);
	var ba = i(ya);
	n(
		ba,
		() => `
<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>
<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>
<ul><li>fixed some visual bugs on the effects</li><li>Pull speed reduced by 20%</li><li>Sprint reduced from +2 to +1</li></ul>
`
	);
	var xa = a(ba, 2);
	(o(xa, { kind: `item`, name: `Rescue Beam`, ability: null }), t(ya));
	var Sa = a(ya, 2);
	r(Sa, 1, `item restorative-shot`);
	var Ca = i(Sa);
	n(
		Ca,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
`
	);
	var wa = a(Ca, 2),
		Ta = i(wa);
	(n(Ta, () => `Weapon Damage reduced from 7% to 6%`, !0), t(Ta));
	var Ea = a(Ta, 2),
		Da = i(Ea);
	n(Da, () => `Cooldown increased from 5.5s to 6s`);
	var Oa = a(Da, 2);
	(s(Oa, {
		kind: `item`,
		name: `Restorative Shot`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 5.5s to 6s`
	}),
		t(Ea),
		t(wa));
	var ka = a(wa, 2);
	(o(ka, { kind: `item`, name: `Restorative Shot`, ability: null }), t(Sa));
	var Aa = a(Sa, 2);
	r(Aa, 1, `item sharpshooter`);
	var ja = i(Aa);
	n(
		ja,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>No longer grants +20% Ammo</li><li>Now has -20% Reload Time</li></ul>
`
	);
	var Ma = a(ja, 2);
	(o(Ma, { kind: `item`, name: `Sharpshooter`, ability: null }), t(Aa));
	var Na = a(Aa, 2);
	r(Na, 1, `item siphon-bullets`);
	var Pa = i(Na);
	n(
		Pa,
		() => `
<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>
<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>
<ul><li>Max HP Steal Per Bullet increased from 50 to 55</li></ul>
`
	);
	var Fa = a(Pa, 2);
	(o(Fa, { kind: `item`, name: `Siphon Bullets`, ability: null }), t(Na));
	var Ia = a(Na, 2);
	r(Ia, 1, `item slowing-hex`);
	var La = i(Ia);
	n(
		La,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
<ul><li>Slow reduced from 25% to 20%</li></ul>
`
	);
	var Ra = a(La, 2);
	(o(Ra, { kind: `item`, name: `Slowing Hex`, ability: null }), t(Ia));
	var $ = a(Ia, 2);
	r($, 1, `item soul-rebirth`);
	var za = i($);
	n(
		za,
		() => `
<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>
<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>
`
	);
	var Ba = a(za, 2),
		Va = i(Ba);
	(n(Va, () => `No longer grants +15% Cooldown Reduction`, !0), t(Va));
	var Ha = a(Va, 2),
		Ua = i(Ha);
	n(Ua, () => `Cooldown increased from 212s to 240s`);
	var Wa = a(Ua, 2);
	(s(Wa, {
		kind: `item`,
		name: `Soul Rebirth`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 212s to 240s`
	}),
		t(Ha),
		t(Ba));
	var Ga = a(Ba, 2);
	(o(Ga, { kind: `item`, name: `Soul Rebirth`, ability: null }), t($));
	var Ka = a($, 2);
	r(Ka, 1, `item superior-cooldown`);
	var qa = i(Ka);
	n(
		qa,
		() => `
<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>
<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>
<ul><li>Spirit Shield increased from 100 to 150</li></ul>
`
	);
	var Ja = a(qa, 2);
	(o(Ja, { kind: `item`, name: `Superior Cooldown`, ability: null }), t(Ka));
	var Ya = a(Ka, 2);
	r(Ya, 1, `item superior-duration`);
	var Xa = i(Ya);
	n(
		Xa,
		() => `
<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>
<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>
<ul><li>Non-Imbued duration increased from 26% to 27%</li><li>Imbued duration increased from 32% to 33%</li></ul>
`
	);
	var Za = a(Xa, 2);
	(o(Za, { kind: `item`, name: `Superior Duration`, ability: null }), t(Ya));
	var Qa = a(Ya, 2);
	r(Qa, 1, `item surge-of-power`);
	var $a = i(Qa);
	n(
		$a,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot)</li><li>Movespeed reduced from +3 to +2</li></ul>
`
	);
	var eo = a($a, 2);
	(o(eo, { kind: `item`, name: `Surge of Power`, ability: null }), t(Qa));
	var to = a(Qa, 2);
	r(to, 1, `item tesla-bullets`);
	var no = i(to);
	n(
		no,
		() => `
<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>
<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>
<ul><li>Proc cooldown can now be reduced by cooldown reduction</li></ul>
`
	);
	var ro = a(no, 2);
	(o(ro, { kind: `item`, name: `Tesla Bullets`, ability: null }), t(to));
	var io = a(to, 2);
	r(io, 1, `item titanic-magazine`);
	var ao = i(io);
	n(
		ao,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Now grants +12% Spirit Resist</li><li>No longer grants +18% Bullet Resist</li><li>Now grants +25% Melee Damage Resistance</li></ul>
`
	);
	var oo = a(ao, 2);
	(o(oo, { kind: `item`, name: `Titanic Magazine`, ability: null }), t(io));
	var so = a(io, 2);
	r(so, 1, `item unstoppable`);
	var co = i(so);
	n(
		co,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
<ul><li>No longer grants +15% Spirit Resist</li><li>Now grants +15% Bullet Resist</li><li>No longer grants 1 Move Speed</li></ul>
`
	);
	var lo = a(co, 2);
	(o(lo, { kind: `item`, name: `Unstoppable`, ability: null }), t(so));
	var uo = a(so, 2);
	r(uo, 1, `item vampiric-burst`);
	var fo = i(uo);
	n(
		fo,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
<ul><li>Health increased from 150 to 175</li></ul>
`
	);
	var po = a(fo, 2);
	(o(po, { kind: `item`, name: `Vampiric Burst`, ability: null }), t(uo));
	var mo = a(uo, 2);
	r(mo, 1, `item veil-walker`);
	var ho = i(mo);
	n(
		ho,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Bullet Shield increased from 200 to 250</li><li>Spirit Shield increased from 200 to 250</li></ul>
`
	);
	var go = a(ho, 2);
	(o(go, { kind: `item`, name: `Veil Walker`, ability: null }), t(mo), ee(e, ne));
}
export { fe as default, ce as metadata, ue as readingManifest, le as toc };
