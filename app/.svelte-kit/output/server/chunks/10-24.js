import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview,
	t as VideoLink
} from './VideoLink.js';
//#region changelogs/2024/10-24.mg?embed=0
function _0_24_mg$5($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/canal_update_102424-mp4.26017/',
		label: 'canal update 102424'
	});
}
//#endregion
//#region changelogs/2024/10-24.mg?embed=1
function _0_24_mg$4($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/purple_update_102424-mp4.26019/',
		label: 'purple update 102424'
	});
}
//#endregion
//#region changelogs/2024/10-24.mg?embed=2
function _0_24_mg$3($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/garage_nightclub_102424-mp4.26021/',
		label: 'garage nightclub 102424'
	});
}
//#endregion
//#region changelogs/2024/10-24.mg?embed=3
function _0_24_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Grey Talon',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mirage',
			'Mo &amp; Krill',
			'Paradox',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/10-24.mg?embed=4
function _0_24_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Ammo Scavenger',
			'Boundless Spirit',
			'Bullet Resist Shredder',
			'Burst Fire',
			'Colossus',
			'Duration Extender',
			'Enduring Speed',
			'Escalating Exposure',
			'Ethereal Shift',
			'Extra Health',
			'Extra Regen',
			'Extra Stamina',
			'Fortitude',
			'Improved Spirit',
			'Knockdown',
			'Leech',
			'Long Range',
			'Lucky Shot',
			'Majestic Leap',
			'Melee Charge',
			'Monster Rounds',
			'Mystic Reverb',
			'Mystic Shot',
			'Mystic Slow',
			'Phantom Strike',
			'Rapid Rounds',
			'Reactive Barrier',
			'Rescue Beam',
			'Restorative Shot',
			'Sharpshooter',
			'Siphon Bullets',
			'Slowing Hex',
			'Soul Rebirth',
			'Superior Cooldown',
			'Superior Duration',
			'Surge of Power',
			'Tesla Bullets',
			'Titanic Magazine',
			'Unstoppable',
			'Vampiric Burst',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/10-24.mg
var metadata = {
	title: '10-24-2024 Update',
	thread_id: '40951',
	steam_gid: '6212245217911837451',
	published: '2024-10-24T12:39:08-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don't get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection. Added Commends. You can commend players you've enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you've received on each hero will be displayed in your profile. Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models Updated environment lighting and sky Added sequential kill streak music cues Added keybinds for \"Fly Up\" and \"Fly Down\".  Used for flying abilities like Ivy's Air Drop and Vindicta's Flight Fixed being unable to report/mute disconnected players You can now drag and drop build categories to move them around Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser. Added indication of game mode within match history Added Rank badge to matches on the Watch page Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval Flash Windows Taskbar icon if the game window isn't in focus and you have 3 seconds until you respawn Fixed issue in several languages where team net worth number shrunk to an unreadable size Fixed Urns sometimes appearing to stay in the world after being picked up Fixed jittering from Lash's gun firing while running and aiming (this should reduce screen noise significantly in this case) Lash melee animation updates Added Melee Resistance to Vitality stat screen Lowered pitch of Haze voice processing Added teleporter channel and appear sounds Added Healing Rite end sound Added Mystic Shot proc sound Added Magic Carpet cast, cast delay, loop, and end sounds Updated Slowing Hex projectile loop, hit, and debuff sounds Yamato's Flying Strike now stops tracking targets that teleport Shiv's Killing Blow now stops tracking targets that teleport McGinnis melee animation updates Fixing hitting ESC to close to intro movie also closing the ranked summary popup Fixed pregame countdown drawing over the shop UI Pocket climb animation adjustments Mirage Traveler now previews Mirage's model at destination to show facing direction Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards Silenced debuff revisions to reduce obstructed vision of player Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise Mirage Djinn's Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI Mirage gun revisions to tracer, muzzle flash, and impacts Shiv Dagger: reduced size of stuck dagger in victim Unstoppable vfx has a more obvious start Lady Geist Malice: revisions to reduce vfx noise and obstructions Lady Geist Malice: reduced brightness of vfx for players close to it Shiv Slice and Dice: reduced vfx noise for players close to it Ivy Kudzu Bomb effects properly display visuals when above ground Lash Flog: new effects Play a sound when a debuff is applied to player but is purged due to some invulnerability Fixed instances where mix ducking occurs too early in a sound event's lifetime Fixed audio occlusion filtering artifacts during high rates of change Enabled certain music cues like 'respawn' to interrupt base attack music Denied orb sound will no longer play beyond 2500 game units from the player Reduced visual noise of Wraith's tracers when close up or when Wraith has a high fire rate Increased intelligibility of team-specific hero death sound Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately Added looping telegraph for Seven Static Charge ability Added victim-specific sound for Static Charge the moment it is applied Bots are better at coming together to defend and push lanes Bots will prioritize assisting human allies on offense Reduced visual noise of Seven's tracers, especially when close up or when Seven has a high fire rate Added a \"Mouse Sensitivity: Vertical Scaling\" setting Added a \"Reset Camera\" bind (available in Steam Input) Fixed Steam Input \"Melee\" Action not resetting the camera vertically Added new Steam Input Analog Action: \"Aim\". This uses Angle-based sensitivity options in Steam Input (work-in-progress feature). Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y) Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined. AP is no longer granted for Walkers Shrine/Patron no longer have Soul/AP bounties Shrine Flex Slot moved to \"All Shrines\" Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying Trooper soul changed from 50/50% in the kill/orb to 60/40% Breakables spawn time increased from 2 minutes to 3 minutes Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min Urn comeback properties now require an 8% net worth lead to kick in Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn't a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team's side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is. If the Urn hasn't been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this. Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds. Increased speed Urn walks back Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren't) Backdoor protection removal now has a 20s buffer (so it doesn't go into protection mode immediately once creeps die) Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes The 70s respawn time now happens at 30 min instead of 35 min There is now a respawn curve that goes from 70s to 75s over 30->40 minutes Base Guardians and Shrines no longer have out-of-combat regen Parry active window increased from 0.7 to 0.75 Parry cooldown reduced from 5s to 4.5s Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own] Medic Trooper heal cooldown increased from 6s to 35s Sinner's Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player) Redesigned stairs from central canal to the outer lanes (near Urn spawn) Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas Added a Bounce Pad from these connection hallways to the front of the overpass Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner's Sacrifice neutrals Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club Added more zipline nodes to outer lanes High-Velocity Mag: Bullet Velocity reduced from 25% to 20% High-Velocity Mag: Bullet Shield Health increased from 50 to 65 High-Velocity Mag: Weapon damage increased from 12% to 13% Superior Stamina: Spirit Power increased from 8 to 12 Mystic Reach: Ability Range reduced from 18% to 15% Mystic Reach: Bullet Resist increased from 6% to 7% Improved Cooldown: Now grants +75 Spirit Shield Withering Whip: Projectile speed increased by 30% Cold Front now does double damage to NPC units Improved Reach: Non-Imbued Ability Range increased from 25% to 26% Improved Reach: Bullet Resist increased from 12% to 13% Improved Burst: Max HP Damage increased from 7% to 9% Improved Burst: Threshold damage increased from 125 to 200 Infernus reduced darkness of players affected by Catalyst debuff reduced brightness and lingering of Concussive Combustion effects reduced visual noise of tracers and firerate increases Afterburn T1 reduced from 30% to 25% Viscous cleaner effect for viscous alt-fire Bullet damage reduced from 12 to 11 Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6) The Cube T2 moved to T3 The Cube T2 is now +35 HP regen Splatter T2 reduced from +60 Damage to +50 Goo Ball Spirit Resist reduced from 70% to 60% Abrams Melee attack rate reduced by 15% (time between attacks) Gun falloff damage starts at 20m instead of 22m Fixed some cases where Shoulder Charge would do a 180/360 on spell cast Fixed Shoulder Charge sliding against wall surfaces incorrectly Fixed Seismic Impact sometimes getting stuck on objects Bebop Bullet damage growth increased from 0.29 to 0.33 No longer gains 1% Bullet Resist per boon Now gains 1% Spirit Resist per boon Sticky Bomb now loses 20% of your stacks on death (rounds up) Hook now returns troopers 75% faster than normal Grey Talon Base regen increased from 2 to 2.5 Gun spirit scaling increased from 0.1 to 0.13 Movespeed now scales with Spirit Power again Rain of Arrows strafe speed with stamina increased by 30% Ivy Base bullet damage increased from 4.5 to 5 Bullet damage growth reduced from 0.39 to 0.36 Air Drop slow reduced from 35% to 30% Kelvin Arctic Beam slow reduced from 50% to 40% Frost Grenade T2 heal reduced from 145 to 125 Fixed Frozen Shelter not freezing weakened patron Lady Geist Malice slow reduced from 20% to 15% Malice debuff duration reduced from 13s to 9s Malice Damage Amp reduced from 15% to 8% Malice T2 now also increases damage amp by 7% Malice no longer causes you to un-zoom on cast McGinnis Gun spin decay rate improved from 0.65 to 0.25 Mini Turrets cooldown reduced from 24s to 18s Mini Turrets spirit resist increased from 60% to 80% Spectral Wall slow reduced from 25% to 20% Spectral Wall T1 damage amp reduced from 25% to 15% Heavy Barrage minimum range increased from 6m to 7m Heavy Barrage cooldown increased from 106s to 140s Heavy Barrage T2 cooldown improved from -47s to -50s Heavy Barrage T1 slow reduced from 35% to 30% Mirage Fire Scarabs T3 max health steal increased from +70 to +80 Djinn's Mark T3 cooldown between multipliers improved from -0.5s to -0.75s Traveler Fire Rate increased from 20% to 30% Traveler T2 cooldown reduction improved from -30s to -40s Traveler T3 now grants Unstoppable for 3s on arrival Mo & Krill Now has 20% Headshot Crit reduction Burrow bullet and spirit resist now persist while spinning out of the burrow Paradox Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender) Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration Pulse Grenade T2 improved from -7.5s to -8s Kinetic Carbine T2 improved from -9.5s Cooldown to -10s Kinetic Carbine shots cannot miss due to evasion Kinetic Carbine can now pierce breakables Kinetic Carbine now does 15% more damage on a headshot Kinetic Carbine sound level reduced a little bit Seven Lightning Ball cooldown increased from 23s to 26s Lightning Ball radius reduced from 4m to 3.5m Lightning Ball T2 slow reduced from 40% to 35% Movespeed reduced from 7.3 to 7.1 Storm Cloud expand time reduced from 3s to 2s Storm Cloud range increased from 25m to 30m Shiv Base speed reduced from 7.3 to 7.0 Serrated Knives collision radius reduced by 20% Bloodletting cooldown increased from 21s to 50s Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s) Bloodletting duration increased from 10s to 13s Bloodletting Incoming Damage Deferred reduced from 30% to 22% Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration) Killing Blow range reduced from 20m to 13m Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75 Killing Blow Rage buffer duration reduced from 10s to 9s Killing Blow Rage buildup vs creeps reduced by 50% Vindicta Gun cycle time improved from 0.26s to 0.22s Bullet damage growth per boon increased from 0.55 to 0.65 Fire rate now scales with Spirit Power (0.14) Assassinate no longer splits to allies Flight duration increased from 8s to 12s Flight T2 duration increased from +6s to +8s Assassinate bullet radius increased from 3\" to 4\" Assassinate scope is now automatically canceled when Paradoxical Swap hits you Warden Alchemical Flask slow duration reduced from 6s to 3s Alchemical Flask weapon damage duration increased from 6s to 7s Binding Word escape time reduced from 2.9s to 2.8s Binding Word escape range increased from 18.5m to 19m Last Stand T3 now also grants you unstoppable during the 2s channel Wraith Card Trick base damage reduced from 80 to 70 Card Trick cooldown increased from 0.5s to 0.65s Telekinesis cooldown increased from 95s to 100s Telekinesis T1 cooldown improved from -28s to -30s Yamato Fixed being able to cast an ability while casting Flying Strike Fixed Crimson Slash following in the direction of dash instead of cross hair Shadow Transformation T1 changed to +20% Fire Rate Shadow Transformation Cooldown reduced from 106s to 90s Rescue Beam fixed some visual bugs on the effects Pull speed reduced by 20% Sprint reduced from +2 to +1 Knockdown updated effect animation to alert when it will stun Ammo Scavenger proc sound only plays when applying a stack Duration increased from 30s to 35s Restorative Shot Weapon Damage reduced from 7% to 6% Cooldown increased from 5.5s to 6s Rapid Rounds Fire Rate increased from 9% to 10% Monster Rounds Resist vs NPCs reduced from 30% to 25% Melee Charge Weapon Damage reduced from 15% to 12% Health reduced from 100 to 75 Long Range No longer grants +25% Ammo Now has -20% Reload Time Active Reload No longer grants -20% Reload Time Now grants +18% Ammo Mystic Shot Proc cannot miss due to evasion Cooldown increased from 5.25 to 5.75 Burst Fire Now grants +20% Slow Resistance Sharpshooter No longer grants +20% Ammo Now has -20% Reload Time Tesla Bullets Proc cooldown can now be reduced by cooldown reduction Titanic Magazine Now grants +12% Spirit Resist No longer grants +18% Bullet Resist Now grants +25% Melee Damage Resistance Lucky Shot Proc now pierces evasion Vampiric Burst Health increased from 150 to 175 Extra Regen No longer grants +25 Health Extra Stamina Bonus Health increased from +25 to +35 Extra Health Now upgrades into Fortitude Enduring Speed Slow Resist reduced from 35% to 30% Reactive Barrier Ammo increased from 15% to 20% Majestic Leap Cooldown increased from 26s to 45s Getting shot while in the air disables the drop-down ability Fortitude Now upgrades from Extra Health Health increased from 325 to 365 Restore delay reduced from 11s to 10s Weapon Damage increased from 25% to 27% Veil Walker Bullet Shield increased from 200 to 250 Spirit Shield increased from 200 to 250 Soul Rebirth No longer grants +15% Cooldown Reduction Cooldown increased from 212s to 240s Siphon Bullets Max HP Steal Per Bullet increased from 50 to 55 Leech Now has 12% Cooldown Reduction No longer grants Spirit Power Phantom Strike No longer grants 15% Bullet Resist Now grants +15% Spirit Resist Unstoppable No longer grants +15% Spirit Resist Now grants +15% Bullet Resist No longer grants 1 Move Speed Colossus Slow reduced from 35% to 30% Slow radius reduced from 14m to 12m Slowing Hex Slow reduced from 25% to 20% Duration Extender Ability Duration reduced from 16% to 14% Now grants +8% Weapon Damage Bullet Resist Shredder No longer grants +5% Bullet Resist Now grants +15% Melee damage resistance Surge of Power When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot) Movespeed reduced from +3 to +2 Mystic Slow Slow reduced from 30% to 25% Health bonus increased from 100 to 140 Superior Cooldown Spirit Shield increased from 100 to 150 Superior Duration Non-Imbued duration increased from 26% to 27% Imbued duration increased from 32% to 33% Ethereal Shift Active no longer grants 14 spirit power or reloads Active now grants +3 Movespeed for 5 seconds after returning Active now grants +40% Spirit Resist for 5 seconds after returning Now grants +6 Spirit Power Improved Spirit Spirit Power increased from 28 to 30 Boundless Spirit Spirit Power increased from 60 to 65 Weapon Power increased from 25% to 30% Escalating Exposure Spirit Amp Per Stack reduced from 5% to 4% Mystic Reverb Slow now only affects the primary target Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-19',
			to: '2024-10-24'
		},
		after: {
			from: '2024-10-25',
			to: '2024-10-28'
		}
	}
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	},
	{
		level: 1,
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Abrams',
		id: 'abrams'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 3,
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Napalm',
		id: 'napalm'
	},
	{
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Arctic Beam',
		id: 'arctic-beam'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 3,
		title: 'Malice Damage Amp',
		id: 'malice-damage-amp'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice-1'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	},
	{
		level: 3,
		title: 'Traveler Fire Rate',
		id: 'traveler-fire-rate'
	},
	{
		level: 3,
		title: 'Traveler',
		id: 'traveler'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Burrow',
		id: 'burrow'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Lightning Ball',
		id: 'lightning-ball'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Serrated Knives',
		id: 'serrated-knives'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 3,
		title: 'Bloodletting Incoming Damage Deferred',
		id: 'bloodletting-incoming-damage-deferred'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting-1'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate-1'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'The Cube',
		id: 'the-cube'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 3,
		title: 'Goo Ball Spirit Resist',
		id: 'goo-ball-spirit-resist'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Alchemical Flask',
		id: 'alchemical-flask'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	},
	{
		level: 3,
		title: 'Shadow Transformation Cooldown',
		id: 'shadow-transformation-cooldown'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Active Reload',
		id: 'active-reload'
	},
	{
		level: 2,
		title: 'Ammo Scavenger',
		id: 'ammo-scavenger'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Bullet Resist Shredder',
		id: 'bullet-resist-shredder'
	},
	{
		level: 2,
		title: 'Burst Fire',
		id: 'burst-fire'
	},
	{
		level: 2,
		title: 'Colossus',
		id: 'colossus'
	},
	{
		level: 2,
		title: 'Duration Extender',
		id: 'duration-extender'
	},
	{
		level: 2,
		title: 'Enduring Speed',
		id: 'enduring-speed'
	},
	{
		level: 2,
		title: 'Escalating Exposure',
		id: 'escalating-exposure'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Extra Health',
		id: 'extra-health'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Extra Stamina',
		id: 'extra-stamina'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Improved Spirit',
		id: 'improved-spirit'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
	},
	{
		level: 2,
		title: 'Leech',
		id: 'leech'
	},
	{
		level: 2,
		title: 'Long Range',
		id: 'long-range'
	},
	{
		level: 2,
		title: 'Lucky Shot',
		id: 'lucky-shot'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Monster Rounds',
		id: 'monster-rounds'
	},
	{
		level: 2,
		title: 'Mystic Reverb',
		id: 'mystic-reverb'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Mystic Slow',
		id: 'mystic-slow'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Rapid Rounds',
		id: 'rapid-rounds'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Rescue Beam',
		id: 'rescue-beam'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	},
	{
		level: 2,
		title: 'Sharpshooter',
		id: 'sharpshooter'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Slowing Hex',
		id: 'slowing-hex'
	},
	{
		level: 2,
		title: 'Soul Rebirth',
		id: 'soul-rebirth'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
	},
	{
		level: 2,
		title: 'Superior Duration',
		id: 'superior-duration'
	},
	{
		level: 2,
		title: 'Surge of Power',
		id: 'surge-of-power'
	},
	{
		level: 2,
		title: 'Tesla Bullets',
		id: 'tesla-bullets'
	},
	{
		level: 2,
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
	},
	{
		level: 2,
		title: 'Unstoppable',
		id: 'unstoppable'
	},
	{
		level: 2,
		title: 'Vampiric Burst',
		id: 'vampiric-burst'
	},
	{
		level: 2,
		title: 'Veil Walker',
		id: 'veil-walker'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-19',
			to: '2024-10-24'
		},
		after: {
			from: '2024-10-25',
			to: '2024-10-28'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Abrams',
			id: 'abrams'
		},
		{
			kind: 'hero',
			name: 'Bebop',
			id: 'bebop'
		},
		{
			kind: 'hero',
			name: 'Grey Talon',
			id: 'grey-talon'
		},
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'Lady Geist',
			id: 'lady-geist'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Active Reload',
			id: 'active-reload'
		},
		{
			kind: 'item',
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Bullet Resist Shredder',
			id: 'bullet-resist-shredder'
		},
		{
			kind: 'item',
			name: 'Burst Fire',
			id: 'burst-fire'
		},
		{
			kind: 'item',
			name: 'Colossus',
			id: 'colossus'
		},
		{
			kind: 'item',
			name: 'Duration Extender',
			id: 'duration-extender'
		},
		{
			kind: 'item',
			name: 'Enduring Speed',
			id: 'enduring-speed'
		},
		{
			kind: 'item',
			name: 'Escalating Exposure',
			id: 'escalating-exposure'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Extra Health',
			id: 'extra-health'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Extra Stamina',
			id: 'extra-stamina'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Improved Spirit',
			id: 'improved-spirit'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
		},
		{
			kind: 'item',
			name: 'Leech',
			id: 'leech'
		},
		{
			kind: 'item',
			name: 'Long Range',
			id: 'long-range'
		},
		{
			kind: 'item',
			name: 'Lucky Shot',
			id: 'lucky-shot'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Monster Rounds',
			id: 'monster-rounds'
		},
		{
			kind: 'item',
			name: 'Mystic Reverb',
			id: 'mystic-reverb'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Mystic Slow',
			id: 'mystic-slow'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Rapid Rounds',
			id: 'rapid-rounds'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Rescue Beam',
			id: 'rescue-beam'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		},
		{
			kind: 'item',
			name: 'Sharpshooter',
			id: 'sharpshooter'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Slowing Hex',
			id: 'slowing-hex'
		},
		{
			kind: 'item',
			name: 'Soul Rebirth',
			id: 'soul-rebirth'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
		},
		{
			kind: 'item',
			name: 'Superior Duration',
			id: 'superior-duration'
		},
		{
			kind: 'item',
			name: 'Surge of Power',
			id: 'surge-of-power'
		},
		{
			kind: 'item',
			name: 'Tesla Bullets',
			id: 'tesla-bullets'
		},
		{
			kind: 'item',
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
		},
		{
			kind: 'item',
			name: 'Unstoppable',
			id: 'unstoppable'
		},
		{
			kind: 'item',
			name: 'Vampiric Burst',
			id: 'vampiric-burst'
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		}
	],
	related: []
};
function _0_24_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don&#x27;t get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection.</li><li>Added Commends. You can commend players you&#x27;ve enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you&#x27;ve received on each hero will be displayed in your profile.</li><li>Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/26/26043-0a7f28f92179f3eb7fa034e749847461.jpg?hash=TFfcNYdH9K" alt="lighting changes"  decoding="async" loading="eager"/></p>\n<ul><li>Updated environment lighting and sky</li><li>Added sequential kill streak music cues</li><li>Added keybinds for &quot;Fly Up&quot; and &quot;Fly Down&quot;.  Used for flying abilities like Ivy&#x27;s Air Drop and Vindicta&#x27;s Flight</li><li>Fixed being unable to report/mute disconnected players</li><li>You can now drag and drop build categories to move them around</li><li>Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser.</li><li>Added indication of game mode within match history</li><li>Added Rank badge to matches on the Watch page</li><li>Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval</li><li>Flash Windows Taskbar icon if the game window isn&#x27;t in focus and you have 3 seconds until you respawn</li><li>Fixed issue in several languages where team net worth number shrunk to an unreadable size</li><li>Fixed Urns sometimes appearing to stay in the world after being picked up</li><li>Fixed jittering from Lash&#x27;s gun firing while running and aiming (this should reduce screen noise significantly in this case)</li><li>Lash melee animation updates</li><li>Added Melee Resistance to Vitality stat screen</li><li>Lowered pitch of Haze voice processing</li><li>Added teleporter channel and appear sounds</li><li>Added Healing Rite end sound</li><li>Added Mystic Shot proc sound</li><li>Added Magic Carpet cast, cast delay, loop, and end sounds</li><li>Updated Slowing Hex projectile loop, hit, and debuff sounds</li><li>Yamato&#x27;s Flying Strike now stops tracking targets that teleport</li><li>Shiv&#x27;s Killing Blow now stops tracking targets that teleport</li><li>McGinnis melee animation updates</li><li>Fixing hitting ESC to close to intro movie also closing the ranked summary popup</li><li>Fixed pregame countdown drawing over the shop UI</li><li>Pocket climb animation adjustments</li><li>Mirage Traveler now previews Mirage&#x27;s model at destination to show facing direction</li><li>Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards</li><li>Silenced debuff revisions to reduce obstructed vision of player</li><li>Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise</li><li>Mirage Djinn&#x27;s Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI</li><li>Mirage gun revisions to tracer, muzzle flash, and impacts</li><li>Shiv Dagger: reduced size of stuck dagger in victim</li><li>Unstoppable vfx has a more obvious start</li><li>Lady Geist Malice: revisions to reduce vfx noise and obstructions</li><li>Lady Geist Malice: reduced brightness of vfx for players close to it</li><li>Shiv Slice and Dice: reduced vfx noise for players close to it</li><li>Ivy Kudzu Bomb effects properly display visuals when above ground</li><li>Lash Flog: new effects</li><li>Play a sound when a debuff is applied to player but is purged due to some invulnerability</li><li>Fixed instances where mix ducking occurs too early in a sound event&#x27;s lifetime</li><li>Fixed audio occlusion filtering artifacts during high rates of change</li><li>Enabled certain music cues like &#x27;respawn&#x27; to interrupt base attack music</li><li>Denied orb sound will no longer play beyond 2500 game units from the player</li><li>Reduced visual noise of Wraith&#x27;s tracers when close up or when Wraith has a high fire rate</li><li>Increased intelligibility of team-specific hero death sound</li><li>Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately</li><li>Added looping telegraph for Seven Static Charge ability</li><li>Added victim-specific sound for Static Charge the moment it is applied</li><li>Bots are better at coming together to defend and push lanes</li><li>Bots will prioritize assisting human allies on offense</li><li>Reduced visual noise of Seven&#x27;s tracers, especially when close up or when Seven has a high fire rate</li><li>Added a &quot;Mouse Sensitivity: Vertical Scaling&quot; setting</li><li>Added a &quot;Reset Camera&quot; bind (available in Steam Input)</li><li>Fixed Steam Input &quot;Melee&quot; Action not resetting the camera vertically</li><li>Added new Steam Input Analog Action: &quot;Aim&quot;. This uses Angle-based sensitivity options in Steam Input (work-in-progress feature).</li><li>Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y)</li><li>Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined.</li><li>AP is no longer granted for Walkers</li><li>Shrine/Patron no longer have Soul/AP bounties</li><li>Shrine Flex Slot moved to &quot;All Shrines&quot;</li><li>Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average</li><li>Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying</li><li>Trooper soul changed from 50/50% in the kill/orb to 60/40%</li><li>Breakables spawn time increased from 2 minutes to 3 minutes</li><li>Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min</li><li>Urn comeback properties now require an 8% net worth lead to kick in</li><li>Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn&#x27;t a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team&#x27;s side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/26/26029-316e26e32d5d9c28711b7b32c47c9ec2.jpg?hash=Bcy1Su9gev" alt="urn 01"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/26/26030-66b9044d013d7baf5a1aa5a85be4cda7.jpg?hash=kSgwnPOjDr" alt="urn 02"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/26/26031-964938f678db211578e57da87f872680.jpg?hash=u8rCtcD0c_" alt="urn 03"  decoding="async" loading="lazy"/></p>\n<ul><li>If the Urn hasn&#x27;t been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this.</li><li>Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds.</li><li>Increased speed Urn walks back</li><li>Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground</li><li>Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes</li><li>Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes</li><li>Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes</li><li>Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes</li><li>Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes</li><li>Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren&#x27;t)</li><li>Backdoor protection removal now has a 20s buffer (so it doesn&#x27;t go into protection mode immediately once creeps die)</li><li>Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes</li><li>The 70s respawn time now happens at 30 min instead of 35 min</li><li>There is now a respawn curve that goes from 70s to 75s over 30-&gt;40 minutes</li><li>Base Guardians and Shrines no longer have out-of-combat regen</li><li>Parry active window increased from 0.7 to 0.75</li><li>Parry cooldown reduced from 5s to 4.5s</li><li>Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own]</li><li>Medic Trooper heal cooldown increased from 6s to 35s</li><li>Sinner&#x27;s Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player)</li><li>Redesigned stairs from central canal to the outer lanes (near Urn spawn)</li><li>Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings</li></ul>\n')} `
	);
	_0_24_mg$5($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<p><img src="https://project8-data.community.forum/attachments/26/26034-dadcc55de196610454a06ffd805d0234.jpg?hash=a48dE8_vh4" alt="canal"  decoding="async" loading="lazy"/></p>\n<ul><li>Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas</li><li>Added a Bounce Pad from these connection hallways to the front of the overpass</li><li>Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor</li></ul>\n')} `
	);
	_0_24_mg$4($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<p><img src="https://project8-data.community.forum/attachments/26/26036-93a05dca9721d8ccbea072fb616bb646.jpg?hash=A8rfo7fvQ4" alt="outer lane connection 102424"  decoding="async" loading="lazy"/></p>\n<ul><li>Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner&#x27;s Sacrifice neutrals</li><li>Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club</li></ul>\n')} `
	);
	_0_24_mg$3($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Added more zipline nodes to outer lanes</li><li>High-Velocity Mag: Bullet Velocity reduced from 25% to 20%</li><li>High-Velocity Mag: Bullet Shield Health increased from 50 to 65</li><li>High-Velocity Mag: Weapon damage increased from 12% to 13%</li><li>Superior Stamina: Spirit Power increased from 8 to 12</li><li>Mystic Reach: Ability Range reduced from 18% to 15%</li><li>Mystic Reach: Bullet Resist increased from 6% to 7%</li><li>Improved Cooldown: Now grants +75 Spirit Shield</li><li>Withering Whip: Projectile speed increased by 30%</li><li>Cold Front now does double damage to NPC units</li><li>Improved Reach: Non-Imbued Ability Range increased from 25% to 26%</li><li>Improved Reach: Bullet Resist increased from 12% to 13%</li><li>Improved Burst: Max HP Damage increased from 7% to 9%</li><li>Improved Burst: Threshold damage increased from 125 to 200</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_24_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Melee attack rate reduced by 15% (time between attacks)</li><li>Gun falloff damage starts at 20m instead of 22m</li></ul>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed some cases where Shoulder Charge would do a 180/360 on spell cast</li><li>Fixed Shoulder Charge sliding against wall surfaces incorrectly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Fixed Seismic Impact sometimes getting stuck on objects</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Bullet damage growth increased from 0.29 to 0.33</li><li>No longer gains 1% Bullet Resist per boon</li><li>Now gains 1% Spirit Resist per boon</li></ul>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb now loses 20% of your stacks on death (rounds up)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook now returns troopers 75% faster than normal</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Base regen increased from 2 to 2.5</li><li>Gun spirit scaling increased from 0.1 to 0.13</li><li>Movespeed now scales with Spirit Power again</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows strafe speed with stamina increased by 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability napalm">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Napalm change history</a></p>\n<h4 id="napalm"><a href="/ability/napalm">Napalm</a></h4>\n<ul><li>reduced darkness of players affected by Catalyst debuff</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Napalm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n<ul><li>reduced brightness and lingering of Concussive Combustion effects</li><li>reduced visual noise of tracers and firerate increases</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T1 reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Base bullet damage increased from 4.5 to 5</li><li>Bullet damage growth reduced from 0.39 to 0.36</li></ul>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop slow reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam slow reduced from 50% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade T2 heal reduced from 145 to 125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Fixed Frozen Shelter not freezing weakened patron</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice slow reduced from 20% to 15%</li><li>Malice debuff duration reduced from 13s to 9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice-damage-amp">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice Damage Amp change history</a></p>\n<h4 id="malice-damage-amp"><a href="/ability/malice">Malice Damage Amp</a></h4>\n<ul><li>Malice Damage Amp reduced from 15% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice-1"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice T2 now also increases damage amp by 7%</li><li>Malice no longer causes you to un-zoom on cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Gun spin decay rate improved from 0.65 to 0.25</li></ul>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n')} <ul><li>${html('Mini Turrets cooldown reduced from 24s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Mini Turrets cooldown reduced from 24s to 18s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Mini Turrets spirit resist increased from 60% to 80%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall slow reduced from 25% to 20%</li><li>Spectral Wall T1 damage amp reduced from 25% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n')} <ul><li>${html('Heavy Barrage minimum range increased from 6m to 7m')}</li> <li>${html('Heavy Barrage cooldown increased from 106s to 140s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 3,
		bulletIndex: 1,
		text: 'Heavy Barrage cooldown increased from 106s to 140s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heavy Barrage T2 cooldown improved from -47s to -50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 3,
		bulletIndex: 2,
		text: 'Heavy Barrage T2 cooldown improved from -47s to -50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heavy Barrage T1 slow reduced from 35% to 30%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs T3 max health steal increased from +70 to +80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark T3 cooldown between multipliers improved from -0.5s to -0.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler-fire-rate">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler Fire Rate change history</a></p>\n<h4 id="traveler-fire-rate"><a href="/ability/traveler">Traveler Fire Rate</a></h4>\n<ul><li>Traveler Fire Rate increased from 20% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler Fire Rate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n<ul><li>Traveler T2 cooldown reduction improved from -30s to -40s</li><li>Traveler T3 now grants Unstoppable for 3s on arrival</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Now has 20% Headshot Crit reduction</li></ul>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow bullet and spirit resist now persist while spinning out of the burrow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender)</li><li>Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration</li><li>Pulse Grenade T2 improved from -7.5s to -8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T2 improved from -9.5s Cooldown to -10s</li><li>Kinetic Carbine shots cannot miss due to evasion</li><li>Kinetic Carbine can now pierce breakables</li><li>Kinetic Carbine now does 15% more damage on a headshot</li><li>Kinetic Carbine sound level reduced a little bit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n')} <ul><li>${html('Lightning Ball cooldown increased from 23s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lightning Ball cooldown increased from 23s to 26s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lightning Ball radius reduced from 4m to 3.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Lightning Ball radius reduced from 4m to 3.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lightning Ball T2 slow reduced from 40% to 35%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Movespeed reduced from 7.3 to 7.1</li></ul>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud expand time reduced from 3s to 2s</li><li>Storm Cloud range increased from 25m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Base speed reduced from 7.3 to 7.0</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives collision radius reduced by 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n')} <ul><li>${html('Bloodletting cooldown increased from 21s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Bloodletting cooldown increased from 21s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s)')}</li> <li>${html('Bloodletting duration increased from 10s to 13s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting-incoming-damage-deferred">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Incoming Damage Deferred change history</a></p>\n<h4 id="bloodletting-incoming-damage-deferred"><a href="/ability/bloodletting">Bloodletting Incoming Damage Deferred</a></h4>\n<ul><li>Bloodletting Incoming Damage Deferred reduced from 30% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting Incoming Damage Deferred'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting-1"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow range reduced from 20m to 13m</li><li>Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75</li><li>Killing Blow Rage buffer duration reduced from 10s to 9s</li><li>Killing Blow Rage buildup vs creeps reduced by 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Gun cycle time improved from 0.26s to 0.22s</li><li>Bullet damage growth per boon increased from 0.55 to 0.65</li><li>Fire rate now scales with Spirit Power (0.14)</li></ul>\n')} <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate no longer splits to allies</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight duration increased from 8s to 12s</li><li>Flight T2 duration increased from +6s to +8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate-1"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate bullet radius increased from 3&quot; to 4&quot;</li><li>Assassinate scope is now automatically canceled when Paradoxical Swap hits you</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n<ul><li>cleaner effect for viscous alt-fire</li><li>Bullet damage reduced from 12 to 11</li><li>Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6)</li></ul>\n')} <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube T2 moved to T3</li><li>The Cube T2 is now +35 HP regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter T2 reduced from +60 Damage to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball-spirit-resist">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball Spirit Resist change history</a></p>\n<h4 id="goo-ball-spirit-resist"><a href="/ability/goo-ball">Goo Ball Spirit Resist</a></h4>\n<ul><li>Goo Ball Spirit Resist reduced from 70% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball Spirit Resist'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n<ul><li>Alchemical Flask slow duration reduced from 6s to 3s</li><li>Alchemical Flask weapon damage duration increased from 6s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word escape time reduced from 2.9s to 2.8s</li><li>Binding Word escape range increased from 18.5m to 19m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand T3 now also grants you unstoppable during the 2s channel</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick base damage reduced from 80 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Card Trick base damage reduced from 80 to 70'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Card Trick cooldown increased from 0.5s to 0.65s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Card Trick cooldown increased from 0.5s to 0.65s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n')} <ul><li>${html('Telekinesis cooldown increased from 95s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Telekinesis cooldown increased from 95s to 100s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Telekinesis T1 cooldown improved from -28s to -30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Telekinesis T1 cooldown improved from -28s to -30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Fixed being able to cast an ability while casting Flying Strike</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Fixed Crimson Slash following in the direction of dash instead of cross hair</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation T1 changed to +20% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation-cooldown">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation Cooldown change history</a></p>\n<h4 id="shadow-transformation-cooldown"><a href="/ability/shadow-transformation">Shadow Transformation Cooldown</a></h4>\n<ul><li>Shadow Transformation Cooldown reduced from 106s to 90s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation Cooldown'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_24_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>No longer grants -20% Reload Time</li><li>Now grants +18% Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>proc sound only plays when applying a stack</li><li>Duration increased from 30s to 35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Spirit Power increased from 60 to 65</li><li>Weapon Power increased from 25% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>No longer grants +5% Bullet Resist</li><li>Now grants +15% Melee damage resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n<ul><li>Now grants +20% Slow Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Slow reduced from 35% to 30%</li><li>Slow radius reduced from 14m to 12m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item duration-extender">${html('\n<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>\n<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>\n<ul><li>Ability Duration reduced from 16% to 14%</li><li>Now grants +8% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Duration Extender',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Slow Resist reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Spirit Amp Per Stack reduced from 5% to 4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n<ul><li>Active no longer grants 14 spirit power or reloads</li><li>Active now grants +3 Movespeed for 5 seconds after returning</li><li>Active now grants +40% Spirit Resist for 5 seconds after returning</li><li>Now grants +6 Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Now upgrades into Fortitude</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>No longer grants +25 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Bonus Health increased from +25 to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Now upgrades from Extra Health</li><li>Health increased from 325 to 365</li><li>Restore delay reduced from 11s to 10s</li><li>Weapon Damage increased from 25% to 27%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Spirit Power increased from 28 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>updated effect animation to alert when it will stun</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Now has 12% Cooldown Reduction</li><li>No longer grants Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>No longer grants +25% Ammo</li><li>Now has -20% Reload Time</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Proc now pierces evasion</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown increased from 26s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 26s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Getting shot while in the air disables the drop-down ability')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Weapon Damage reduced from 15% to 12%</li><li>Health reduced from 100 to 75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Resist vs NPCs reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>Slow now only affects the primary target</li><li>Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Proc cannot miss due to evasion')}</li> <li>${html('Cooldown increased from 5.25 to 5.75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 5.25 to 5.75'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Slow reduced from 30% to 25%</li><li>Health bonus increased from 100 to 140</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>No longer grants 15% Bullet Resist</li><li>Now grants +15% Spirit Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-rounds">${html('\n<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>\n<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>\n<ul><li>Fire Rate increased from 9% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Ammo increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>fixed some visual bugs on the effects</li><li>Pull speed reduced by 20%</li><li>Sprint reduced from +2 to +1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n')} <ul><li>${html('Weapon Damage reduced from 7% to 6%')}</li> <li>${html('Cooldown increased from 5.5s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 5.5s to 6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>No longer grants +20% Ammo</li><li>Now has -20% Reload Time</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Max HP Steal Per Bullet increased from 50 to 55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Slow reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n')} <ul><li>${html('No longer grants +15% Cooldown Reduction')}</li> <li>${html('Cooldown increased from 212s to 240s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 212s to 240s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Spirit Shield increased from 100 to 150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-duration">${html('\n<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>\n<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>\n<ul><li>Non-Imbued duration increased from 26% to 27%</li><li>Imbued duration increased from 32% to 33%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Duration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot)</li><li>Movespeed reduced from +3 to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Proc cooldown can now be reduced by cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Now grants +12% Spirit Resist</li><li>No longer grants +18% Bullet Resist</li><li>Now grants +25% Melee Damage Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>No longer grants +15% Spirit Resist</li><li>Now grants +15% Bullet Resist</li><li>No longer grants 1 Move Speed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Health increased from 150 to 175</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Bullet Shield increased from 200 to 250</li><li>Spirit Shield increased from 200 to 250</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_24_mg as default, metadata, readingManifest, toc };
