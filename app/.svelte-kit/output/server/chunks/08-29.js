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
//#region changelogs/2024/08-29.mg?embed=0
function _8_29_mg$4($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/deadlock_ropes-mp4.13983/',
		label: 'Deadlock Ropes'
	});
}
//#endregion
//#region changelogs/2024/08-29.mg?embed=1
function _8_29_mg$3($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/ropes_passages-mp4.13956/',
		label: 'ropes passages'
	});
}
//#endregion
//#region changelogs/2024/08-29.mg?embed=2
function _8_29_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lash',
			'Paradox',
			'Pocket',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/08-29.mg?embed=3
function _8_29_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Ammo Scavenger',
			'Boundless Spirit',
			'Burst Fire',
			'Colossus',
			'Divine Barrier',
			'Duration Extender',
			'Echo Shard',
			'Escalating Exposure',
			'Escalating Resilience',
			'Extra Charge',
			'Extra Spirit',
			'Fortitude',
			'Frenzy',
			'Healing Booster',
			'Healing Rite',
			'Heroic Aura',
			'Improved Spirit',
			'Intensifying Magazine',
			'Kinetic Dash',
			'Knockdown',
			'Leech',
			'Lifestrike',
			'Long Range',
			'Lucky Shot',
			'Magic Carpet',
			'Majestic Leap',
			'Melee Charge',
			'Melee Lifesteal',
			'Metal Skin',
			'Monster Rounds',
			'Phantom Strike',
			'Rapid Recharge',
			'Reactive Barrier',
			'Refresher',
			'Rescue Beam',
			'Restorative Shot',
			'Ricochet',
			'Shadow Weave',
			'Sharpshooter',
			'Siphon Bullets',
			'Slowing Hex',
			'Soul Rebirth',
			'Spirit Strike',
			'Superior Duration',
			'Suppressor',
			'Surge of Power',
			'Swift Striker',
			'Titanic Magazine',
			'Torment Pulse',
			'Toxic Bullets',
			'Unstoppable',
			'Veil Walker',
			'Warp Stone'
		]
	});
}
//#endregion
//#region changelogs/2024/08-29.mg
var metadata = {
	title: '08-29-2024 Update',
	thread_id: '22253',
	published: '2024-08-29T14:28:47-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added a new Profile page that displays a breakdown of recent matches and all-time player and hero statistics (Note: the newly added stats 'Souls Collected' and 'Healing' are starting at 0 for all players) Added Report button to ESC menu player list to allow reporting of teammates in-game Improved visibility of report button on post-game screen You can now drag-and-drop items between categories in Builds Added search to the Public Builds list, you can search by keyword within build names Newly published hero builds now store the language of the build Added 'Show All Languages' checkbox in Public Builds list, can be unchecked to only see builds in your language Fixed issue with builds list not updating when changing between heroes in sandbox Added localization support for German, Polish, and Korean. Matchmaking window is now open 1 hour earlier on weekdays and weekends Players can only pause once per game A team can only pause at most 3 times in total amongst all the players The game application now flashes when the game is unpaused Various client and server performance improvements Added streamer setting to the options panel. Causes player names in the game UI panels to be hidden. Added a Melee Trainer bot in the 'gym' area of hero sandbox Added new \"Game out of Date\" status message at the top of the hud, so you can quickly know when there is an update rather than finding out at queue time Added a checkbox on the post game survey to make it not show again in the future Items now show their spirit power impact when using alt Fixed profile match history not remembering the history page you were on Added Heal Amp and Debuff Resist to the Vitality stats in the shop Hero details on the dashboard now show spirit information with alt, rather than requiring you to be in-game (this was added in a hotfix patch recently) The game will now prevent any quick ability upgrades for 2 seconds after death, to help prevent against accidental upgrades Can now reliably spectate a friend's game via the Friendlist Miscellaneous fixes to friends and party menus Added unavailable state to Zipline UI when zipline is on damage cooldown Spectating controls now use Left/Right mouse buttons to switch between players on a team and space to switch teams. This now works with free cursor mode, and you can still click on portraits/minimap to spectate individual heroes. Added new respawn countdown music 5 seconds before respawn Added alternate shop music which plays in the neutral shop Spectator count is now shown in-game Player names are now shown to spectators Added object motion blur Optimized performance of distance field ambient occlusion Fixed selling an item not removing charges correctly. Now you can't buy Extra Charge and immediately sell it and keep that readied charge. Fixed some tooltips not showing golden statue bonuses if it wasn't the direct stat (i.e. you got fire rate but bullets per second didn't show the golden statue) Fixed Sharpshooter showing up in stats for bullet velocity even though it doesn't increase your bullet velocity Fixed a bug that caused items in the build page to not be dimmed when the shop was out of range Fixed bug with Lash not hearing his own Ground Strike impact explosion sound Added new effects for Withering Whip Updated Ethereal Shift effects Fixed the disarmed spinner not showing up on your crosshair when you get disarmed Fixed parts of Shiv's coat being considered a headshot Build list will now refresh if you change heroes in the sandbox Fixed Zipline speed from Base Guardian killing and Zip booster ability not stacking properly Fixed Base Guardian boost not properly doing its ramp up and instead instantly being fast Added custom effects for Abram's Seismic Impact T3 buff Fixed a bug where someone could be holding down M1 and still be attacking when the magic carpet arrives Updated Lash Grapple cast sound Added Decay impact sound Removed wind and city ambient looping sounds Volume and playback tweaks to one shot ambient sounds Removed vent sounds in places where vents had been removed Fixed some spectator music bugs Updated negative feedback sound for clarity Added hit confirm audio functionality to Warden's Alchemical Flask Updated Majestic Leap sound Updated bounce pad sound Improved some Binding Word effects to be less noisy Increased charged melee volume and falloff for victims Reduced likelihood of irrelevant announcer and hero dialog lines playing during combat exchanges Improved clarity of Dynamo Singularity sound for team and opponents Updated Viscous primary fire sound Soul jar return effect tinted red like minimap to make it more clear it's the return location Player's low health screen effect more visible for longer if you're below 20% of your max HP Teleporter model and effect updated Updated Alchemical Flask projectile effect Fixed Bebop being able to sprint while his gun is spun up Added new voice content for Seven and Lash Added Shadow Weave cast and ambush sounds Fixed bullets hitting the world immediately when looking sharply upward Fixed Sinner's Sacrifice not always correctly animating Fixed an issue where some kill lines that were only intended for the killer were playing for the victim as well (killstreak taunts still play for everyone) Some heroes can now comment on being alone in enemy territory, losing sight of an injured enemy, or leaving their teammates alone in a lane Fixed a bunch of minor typos / grammar errors in various texts Added 'Express' state to zipline indicators when speed had increased from defeating Enemy Base Guardians Added wall jumping (does not consume stamina, requires input direction away from the wall, can be done once) Moved a flex slot from \"Set of enemy Base Guardians\" to \"All Enemy Lane Guardians\" Added ropes to some buildings to let you climb up (hold jump key to latch onto them). Can shoot while hanging on them. A pair of teleporters has been added to the outer lanes at the midpoint (near the three red neutral creeps) Four teleporters have changed locations The upper floor teleporters have moved to the street level The interior teleporters have moved to the Bodega building and the Theater Teleporters are closed for the first 10 minutes (they look visually closed) Guardians no longer give 1 AP AP is now added to the following Soul levels: 3500, 5200, 8000, 9700 Parry cooldown reduced from 6s to 5s Urn delivery sprint bonus increased from +2 to +3 The minimum range the player must be to attack a walker is increased from 30m to 32m Golden Statues drop rate increased by 6% Replaced some bounce pads with ropes if the purpose was to go straight up Added two bounce pads next to sidelane walkers at cultural center and courthouse Added bounce pad from the Amber Orange/Sapphire Blue Walker walkway to the low roofs toward the Walker. Removed some rooftop zap volumes that damage players Several buildings have been made taller to make their rooftops out of bounds Several buildings have been made shorter to make them more accessible A few of the buildings have new passageways at higher floors that are along the way to the rooftop Breakable containers have been added to the new playable rooftops Juke closets have replaced the previous location of the upper floor teleporters The half of the underground tunnel towards the outer lanes has been made wider Tunnel walls now have the color of the lane that the exit is closest to Removed the archway leading to the underground shop Placed temporary signage for interior buildings and storefronts for future reference Two upper floor juke spots have been converted to passages through buildings Added a new upper floor juke spot to each side Stairwell from Amber Orange/Sapphire Blue Walker catwalk to the courtyard now less cramped Lowered the statue pedestals in the inner lanes outside of Mid Hollow Point Rounds: Spirit Shield increased from +80 to +85 High-Velocity Mag: Bullet Velocity reduced from +35% to +30% (now has an upgrade) Added new T3 Weapon Item, Headhunter: Requires High-Velocity Mag. Grants +50% Bullet Velocity, +15% Weapon Damage and +150 Bullet Shield. Passive cooldown: Landing a headshot on heroes deals bonus +140 Damage, heals you for +8% Max HP and grants +2 m/s for 3 seconds. Cooldown: 6 seconds. Combat Barrier: Now also grants +8% Fire Rate while active Enchanter's Barrer: Now also grants +8% Cooldown Reduction while active Superior Stamina: Air Jump/Dash Distance reduced from +40% to +30% Withering Whip: No longer grants +20% Ammo Withering Whip: Now grants +8% Fire Rate Withering Whip: Fire Rate slow reduced from -40% to -30% Withering Whip: Cooldown reduced from 40s to 25s Quicksilver: No longer has +10% Reload Time Improved Cooldown: Cooldown Reduction increased from 15% to 16% Silence Glyph: Duration reduced from 3.5s to 3s Improved Reach: Spirit Resist increased from +10% to +12% Curse: Duration reduced from 3.5 to 3.25 Abrams Infernal Resilience Regeneration Time increased from 16s to 18s (this is a nerf) Now does pull ups on the zipline once again (this is a buff) Fixed Shoulder Charge sometimes stunning enemies on stairs Fixed Seismic Impact sometimes not going to the area selected Bebop Gun range increased from 30m to 32m Hook now only targets enemies when used by default. If you use with alt cast (middle mouse) it will be ally only mode. Hyper Beam can now be canceled by using Parry Dynamo Rejuvenating Aurora can now be canceled by using Parry Fixed Kinetic Pulse not traveling properly when cast near corners Gun damage reduced from 15 to 13 Singularity cast time increased from 0.1 to 0.2 Singularity range reduced from 9m to 8m Grey Talon Charged Shot collision size reduced by 8% Charged Shot base damage reduced from 105 to 100 Charged Shot T2 reduced from +70 to +65 Fire Rate now scales with Spirit (0.25) Can now use multiple air dashes while using Rain of Fire Immobilizing Trap root duration reduced from 2s to 1.25s Immobilizing Trap now applies a 50% movement slow for 1 seconds after the root Immobilizing Trap T2 changed from +1s Root to +2s Slow Haze Base bullet damage increased from 5.3 to 5.6 Sleep Dagger impact damage happens immediately, rather than after the brief drowsy period Sleep Dagger drowsy period before sleep kicks in increased from 0.25 to 0.35 Sleep Dagger cooldown reduced from 27s to 25s Smoke Bomb radius reduced from 20m to 18m Fixation T2 max stacks increased from +30 to +40 Bullet Dance now provides +2 Weapon Damage in the base ability (similar to the T1) Infernus Reduced vertical reach on Flame Dash dps Flame Dash speed is now affected by slows Flame Dash trail now gets wider with Ability Range bonus Flame Dash T1 duration reduced from 7s to 6s Catalyst Damage Amplification reduced from 30% to 25% Catalyst T3 Damage Amplification increased from +10% to +15% Catalyst T2 reduced from +20% Lifesteal to +15% Ivy Bullet damage growth per boon reduced from 0.55 to 0.5 Health growth per boon reduced from +41 to +35 Watcher's Covenant T2 reduced from +3 m/s to +2 Air Drop no longer silences allies Air Drop now causes allies to deal 50% less damage while being carried Air Drop movement adjusted to be a little less frantic Fixed Air Drop bomb disappearing if you cancel your ultimate after dropping it but before it lands Air Drop self cast cast time increased from 1s to 2s Air Drop max move speed reduced from 20 to 18 During Air Drop flight you can pitch up and down with Dash/Crouch buttons Fixed getting stuck under bridges and in buildings while Air Drop flying Kelvin Bullet radius increased from 5 to 6 Base health growth per boon increased from +45 to +50 Arctic Beam max slow increased from 60% to 80% Arctic Beam now affects soul orbs (secures/denies them) Arctic Beam T3 range reduced from 15m to 13m Fixed Ice Path jitter Frost Grenade T2 Heal increased from 135 to 145 Lash Improved firing arm position to be a little bit more out of the way from the reticle Grapple no longer gives a stamina charge on use Paradox Fixed Paradoxical Swap still going through even if Paradox dies during it Pocket Barrage amp reduced from 8% to 7% per stack Fixed Barrage amp visual not showing properly Seven Static Charge radius increased from 5m to 6m Static Charge T2 radius increased from +7m to +8m Storm Cloud spirit power scaling reduced from 1.1 to 0.8 Storm Cloud time to reach maximum radius reduced from 6s to 3s Storm Cloud Now provides +20% Bullet Resistance in the base ability Shiv Bullet damage growth per boon reduced from 0.5 to 0.4 Gun falloff range reduced by 10% Health growth per boon reduced from +41 to +35 Slice and Dice T2 reduced from +100 to +85 Slice and Dice T3 now considers creeps for only half value Bloodletting deferred damage reduced from 35% to 30% The targeting UI for Shiv's Killing Blow is now more clear about when the target will be killed Vindicta Stake duration reduced from 2.25s to 2s Crow Familiar Spirit Power duration scaling reduced from 0.05 to 0.04 Fixed left clicks sometimes deselecting the ability when charges aren't ready Viscous Primary Fire redesigned to make it more usable and have improved damage and scaling Now has an Alt Fire that has limited range, but deals AOE damage that cannot headshot Splatter Spirit Scaling increased from 1.4 to 1.5 Splatter Damage on 2nd and 3rd hit increased from 66% and 33% to 70% and 50% Puddle Punch damage increased from 100% to 110% of Light Melee Puddle Punch T2 is now +50 damage and +20% movement slow (was -10s cooldown) Puddle Punch T3 is now -12s cooldown (was +80 damage and +20% movement slow) Puddle Punch: delay before punch increased from 0.25s to 0.35s Goo Ball Spirit Scaling increased from 1.05 to 1.3 Goo Ball acceleration increased Goo Ball base turn radius and turn radius after bouncing has been increased Fixed a bug where Goo Ball would have the direction and trail particle stuck on Warden Base movement speed reduced from 6.5 to 6 Fire Rate scaling with spirit reduced from 0.375 Fire Rate per Spirit to 0.3 Yamato Power Slash max damage time requirement reduced from 1.5s to 1.4s Power Slash collision radius reduced by 8% Crimson Slash radius increased from 12m to 13m Fixed being able to die during Shadow Transformation if hit by Grey Talon's Owl Fixed some cases where Flying Strike could get into a stuck state Fixed some cases where Crimson Slash would appear to be cast when it wasn't Monster Rounds Bullet Resist vs NPC increased from 30% to 35% Restorative Shot Heal from heroes increased from 30 to 35 Active Reload Lifesteal reduced from 30% to 22% Buff duration reduced from 8s to 7s Kinetic Dash Active Fire Rate reduced from 30% to 25% Long Range Now grants +90 Bullet Shield Melee Charge Now grants +1 HP regen Swift Striker Now grants +10% Ammo Titanic Magazine Bullet Armor increased from 10% to 15% Toxic Bullets Heal Reduction increased from -55% to -65% Bleed damage reduced from 6% to 5% Now grants +100 Health Intensifying Magazine Now steadily ramps back down to 0% when you stop shooting rather than instantly emptying Warp Stone Active Bullet Resistance reduced from 40% to 30% Sharpshooter Now grants +175 Bullet Shield No longer provides bonus headshot damage Weapon damage increased from 60% to 70% Burst Fire Active duration increased from 3s to 4s Escalating Resilience Max Bullet Resist increased from 36% to 40% Alchemical Fire Cooldown reduced from 28s to 26s Heroic Aura Active duration increased from 5s to 6s Siphon Bullets Weapon Damage reduced from 40% to 28% Frenzy Ammo increased from +9 to +12 Lucky Shot Proc chance increased from 30% to 35% Ricochet Bounce damage increased from 50% to 60% Fixed not applying spirit bonus damage from Vindicta and Wraith abilities Melee Lifesteal Effectiveness vs non-heroes increased from 35% to 40% Healing Rite Cooldown reduced from 65s to 60s Divine Barrier No longer grants +7% Bullet Resist No longer grants +1.5 Health Regen Now grants +1 Sprint Now grants +75 Health Now grants +8% Ability Range Reactive Barrier Duration reduced from 13s to 9s Healing Booster Now has also 15% Heal Reduction Resist (Leech no longer has it) No longer has +6% Bullet Resist Metal Skin Cooldown reduced from 25s to 22s Rescue Beam Channel duration reduced from 3s to 2.5s Lifestrike Effectiveness vs non-heroes increased from 35% to 40% Fortitude Damage taken duration threshold reduced from 12s to 11s Veil Walker Cooldown reduced from 18s to 17s Majestic Leap Cooldown reduced from 26s to 24s Leech No longer has 30% Heal Reduction Resist Unstoppable Can now be cast while channeling Cooldown reduced from 65s to 60s Soul Rebirth Cooldown reduction increased from +15% to +18% Now grants +12 Spirit Fixed being able to purchase globally during its brief respawn period Fixed the camera moving away from the player if you will respawn, rather than following the ragdoll Colossus Slow increased from 25% to 35% Shadow Weave Spirit Shield health increased from +200 to +300 Spot radius reduced from 20m to 18m Phantom Strike Cast range reduced from 30m to 25m Ammo Scavenger Health increased from +50 to +60 Extra Charge Cooldown reduction increased from +8% to +10% Spirit Strike Debuff duration increased from 8s to 13s Spirit Shield increased from +85 to +100 Extra Spirit Health increased from +25 to +35 Suppressor Health regen reduced from 3 to 2.5 Fire Rate reduction reduced from -30% to -25% Duration Extender Health regen increased from 1.5 to 1.75 Slowing Hex Projectile speed increased by 30% Cooldown reduced from 27s to 25s Rapid Recharge Charge count reduced from +3 to +2 Faster Time Between Charges increased from +40% to +55% Cooldown for charged abilities increased from +20% to +25% Knockdown Delay reduced from 3s to 2s Stun reduced from 1.25s to 0.9s Cast range increased from 35m to 45m Torment Pulse Spirit damage scaling increased from 0.2 to 0.24 Surge of Power Imbued Ability Spirit Power increased from +28 to +34 Superior Duration Non-Imbued duration increased from +24% to +26% Improved Spirit Health Regen increased from 2 to 3 Health increased from +75 to +100 Magic Carpet You are now unslowable while on the Magic Carpet Cooldown reduced from 40s to 30s Barriers now last for 16s Echo Shard Now grants +8 Spirit Power Escalating Exposure Base Spirit Resist reduction increased from -12% to -15% Refresher Now grants +8% Bullet Resist Boundless Spirit Sprint reduced from +4 to +3 Now grants +25% Weapon Damage",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-24',
			to: '2024-08-29'
		},
		after: {
			from: '2024-08-30',
			to: '2024-09-01'
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
		title: 'Infernal Resilience Regeneration Time',
		id: 'infernal-resilience-regeneration-time'
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
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
	},
	{
		level: 3,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Charged Shot',
		id: 'charged-shot'
	},
	{
		level: 3,
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
	},
	{
		level: 3,
		title: 'Spirit Snare',
		id: 'spirit-snare'
	},
	{
		level: 3,
		title: 'Immobilizing Trap',
		id: 'immobilizing-trap'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
	},
	{
		level: 3,
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
	},
	{
		level: 3,
		title: 'Fixation',
		id: 'fixation'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash'
	},
	{
		level: 3,
		title: 'Catalyst Damage Amplification',
		id: 'catalyst-damage-amplification'
	},
	{
		level: 3,
		title: 'Catalyst',
		id: 'catalyst'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: "Watcher's Covenant",
		id: 'watcher-s-covenant'
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
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Grapple',
		id: 'grapple'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Barrage',
		id: 'barrage'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Static Charge',
		id: 'static-charge'
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
		title: 'Slice and Dice',
		id: 'slice-and-dice'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
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
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 3,
		title: 'Crow Familiar Spirit Power',
		id: 'crow-familiar-spirit-power'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Splatter Spirit Scaling',
		id: 'splatter-spirit-scaling'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 3,
		title: 'Goo Ball Spirit Scaling',
		id: 'goo-ball-spirit-scaling'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash'
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
		title: 'Flying Slash',
		id: 'flying-slash'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash-1'
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
		title: 'Alchemical Fire',
		id: 'alchemical-fire'
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
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Duration Extender',
		id: 'duration-extender'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: 'Escalating Exposure',
		id: 'escalating-exposure'
	},
	{
		level: 2,
		title: 'Escalating Resilience',
		id: 'escalating-resilience'
	},
	{
		level: 2,
		title: 'Extra Charge',
		id: 'extra-charge'
	},
	{
		level: 2,
		title: 'Extra Spirit',
		id: 'extra-spirit'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Healing Booster',
		id: 'healing-booster'
	},
	{
		level: 2,
		title: 'Healing Rite',
		id: 'healing-rite'
	},
	{
		level: 2,
		title: 'Heroic Aura',
		id: 'heroic-aura'
	},
	{
		level: 2,
		title: 'Improved Spirit',
		id: 'improved-spirit'
	},
	{
		level: 2,
		title: 'Intensifying Magazine',
		id: 'intensifying-magazine'
	},
	{
		level: 2,
		title: 'Kinetic Dash',
		id: 'kinetic-dash'
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
		title: 'Lifestrike',
		id: 'lifestrike'
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
		title: 'Magic Carpet',
		id: 'magic-carpet'
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
		title: 'Melee Lifesteal',
		id: 'melee-lifesteal'
	},
	{
		level: 2,
		title: 'Metal Skin',
		id: 'metal-skin'
	},
	{
		level: 2,
		title: 'Monster Rounds',
		id: 'monster-rounds'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Refresher',
		id: 'refresher'
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
		title: 'Ricochet',
		id: 'ricochet'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
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
		title: 'Spirit Strike',
		id: 'spirit-strike'
	},
	{
		level: 2,
		title: 'Superior Duration',
		id: 'superior-duration'
	},
	{
		level: 2,
		title: 'Suppressor',
		id: 'suppressor'
	},
	{
		level: 2,
		title: 'Surge of Power',
		id: 'surge-of-power'
	},
	{
		level: 2,
		title: 'Swift Striker',
		id: 'swift-striker'
	},
	{
		level: 2,
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
	},
	{
		level: 2,
		title: 'Torment Pulse',
		id: 'torment-pulse'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	},
	{
		level: 2,
		title: 'Unstoppable',
		id: 'unstoppable'
	},
	{
		level: 2,
		title: 'Veil Walker',
		id: 'veil-walker'
	},
	{
		level: 2,
		title: 'Warp Stone',
		id: 'warp-stone'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-24',
			to: '2024-08-29'
		},
		after: {
			from: '2024-08-30',
			to: '2024-09-01'
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
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Grey Talon',
			id: 'grey-talon'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
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
			name: 'Lash',
			id: 'lash'
		},
		{
			kind: 'hero',
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
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
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
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
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Duration Extender',
			id: 'duration-extender'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: 'Escalating Exposure',
			id: 'escalating-exposure'
		},
		{
			kind: 'item',
			name: 'Escalating Resilience',
			id: 'escalating-resilience'
		},
		{
			kind: 'item',
			name: 'Extra Charge',
			id: 'extra-charge'
		},
		{
			kind: 'item',
			name: 'Extra Spirit',
			id: 'extra-spirit'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Healing Booster',
			id: 'healing-booster'
		},
		{
			kind: 'item',
			name: 'Healing Rite',
			id: 'healing-rite'
		},
		{
			kind: 'item',
			name: 'Heroic Aura',
			id: 'heroic-aura'
		},
		{
			kind: 'item',
			name: 'Improved Spirit',
			id: 'improved-spirit'
		},
		{
			kind: 'item',
			name: 'Intensifying Magazine',
			id: 'intensifying-magazine'
		},
		{
			kind: 'item',
			name: 'Kinetic Dash',
			id: 'kinetic-dash'
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
			name: 'Lifestrike',
			id: 'lifestrike'
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
			name: 'Magic Carpet',
			id: 'magic-carpet'
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
			name: 'Melee Lifesteal',
			id: 'melee-lifesteal'
		},
		{
			kind: 'item',
			name: 'Metal Skin',
			id: 'metal-skin'
		},
		{
			kind: 'item',
			name: 'Monster Rounds',
			id: 'monster-rounds'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Refresher',
			id: 'refresher'
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
			name: 'Ricochet',
			id: 'ricochet'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
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
			name: 'Spirit Strike',
			id: 'spirit-strike'
		},
		{
			kind: 'item',
			name: 'Superior Duration',
			id: 'superior-duration'
		},
		{
			kind: 'item',
			name: 'Suppressor',
			id: 'suppressor'
		},
		{
			kind: 'item',
			name: 'Surge of Power',
			id: 'surge-of-power'
		},
		{
			kind: 'item',
			name: 'Swift Striker',
			id: 'swift-striker'
		},
		{
			kind: 'item',
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
		},
		{
			kind: 'item',
			name: 'Torment Pulse',
			id: 'torment-pulse'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		},
		{
			kind: 'item',
			name: 'Unstoppable',
			id: 'unstoppable'
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		},
		{
			kind: 'item',
			name: 'Warp Stone',
			id: 'warp-stone'
		}
	],
	related: []
};
function _8_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a new Profile page that displays a breakdown of recent matches and all-time player and hero statistics (Note: the newly added stats &#x27;Souls Collected&#x27; and &#x27;Healing&#x27; are starting at 0 for all players)</li><li>Added Report button to ESC menu player list to allow reporting of teammates in-game</li><li>Improved visibility of report button on post-game screen</li><li>You can now drag-and-drop items between categories in Builds</li><li>Added search to the Public Builds list, you can search by keyword within build names</li><li>Newly published hero builds now store the language of the build</li><li>Added &#x27;Show All Languages&#x27; checkbox in Public Builds list, can be unchecked to only see builds in your language</li><li>Fixed issue with builds list not updating when changing between heroes in sandbox</li><li>Added localization support for German, Polish, and Korean.</li><li>Matchmaking window is now open 1 hour earlier on weekdays and weekends</li><li>Players can only pause once per game</li><li>A team can only pause at most 3 times in total amongst all the players</li><li>The game application now flashes when the game is unpaused</li><li>Various client and server performance improvements</li><li>Added streamer setting to the options panel. Causes player names in the game UI panels to be hidden.</li><li>Added a Melee Trainer bot in the &#x27;gym&#x27; area of hero sandbox</li><li>Added new &quot;Game out of Date&quot; status message at the top of the hud, so you can quickly know when there is an update rather than finding out at queue time</li><li>Added a checkbox on the post game survey to make it not show again in the future</li><li>Items now show their spirit power impact when using alt</li><li>Fixed profile match history not remembering the history page you were on</li><li>Added Heal Amp and Debuff Resist to the Vitality stats in the shop</li><li>Hero details on the dashboard now show spirit information with alt, rather than requiring you to be in-game (this was added in a hotfix patch recently)</li><li>The game will now prevent any quick ability upgrades for 2 seconds after death, to help prevent against accidental upgrades</li><li>Can now reliably spectate a friend&#x27;s game via the Friendlist</li><li>Miscellaneous fixes to friends and party menus</li><li>Added unavailable state to Zipline UI when zipline is on damage cooldown</li><li>Spectating controls now use Left/Right mouse buttons to switch between players on a team and space to switch teams. This now works with free cursor mode, and you can still click on portraits/minimap to spectate individual heroes.</li><li>Added new respawn countdown music 5 seconds before respawn</li><li>Added alternate shop music which plays in the neutral shop</li><li>Spectator count is now shown in-game</li><li>Player names are now shown to spectators</li><li>Added object motion blur</li><li>Optimized performance of distance field ambient occlusion</li><li>Fixed selling an item not removing charges correctly. Now you can&#x27;t buy Extra Charge and immediately sell it and keep that readied charge.</li><li>Fixed some tooltips not showing golden statue bonuses if it wasn&#x27;t the direct stat (i.e. you got fire rate but bullets per second didn&#x27;t show the golden statue)</li><li>Fixed Sharpshooter showing up in stats for bullet velocity even though it doesn&#x27;t increase your bullet velocity</li><li>Fixed a bug that caused items in the build page to not be dimmed when the shop was out of range</li><li>Fixed bug with Lash not hearing his own Ground Strike impact explosion sound</li><li>Added new effects for Withering Whip</li><li>Updated Ethereal Shift effects</li><li>Fixed the disarmed spinner not showing up on your crosshair when you get disarmed</li><li>Fixed parts of Shiv&#x27;s coat being considered a headshot</li><li>Build list will now refresh if you change heroes in the sandbox</li><li>Fixed Zipline speed from Base Guardian killing and Zip booster ability not stacking properly</li><li>Fixed Base Guardian boost not properly doing its ramp up and instead instantly being fast</li><li>Added custom effects for Abram&#x27;s Seismic Impact T3 buff</li><li>Fixed a bug where someone could be holding down M1 and still be attacking when the magic carpet arrives</li><li>Updated Lash Grapple cast sound</li><li>Added Decay impact sound</li><li>Removed wind and city ambient looping sounds</li><li>Volume and playback tweaks to one shot ambient sounds</li><li>Removed vent sounds in places where vents had been removed</li><li>Fixed some spectator music bugs</li><li>Updated negative feedback sound for clarity</li><li>Added hit confirm audio functionality to Warden&#x27;s Alchemical Flask</li><li>Updated Majestic Leap sound</li><li>Updated bounce pad sound</li><li>Improved some Binding Word effects to be less noisy</li><li>Increased charged melee volume and falloff for victims</li><li>Reduced likelihood of irrelevant announcer and hero dialog lines playing during combat exchanges</li><li>Improved clarity of Dynamo Singularity sound for team and opponents</li><li>Updated Viscous primary fire sound</li><li>Soul jar return effect tinted red like minimap to make it more clear it&#x27;s the return location</li><li>Player&#x27;s low health screen effect more visible for longer if you&#x27;re below 20% of your max HP</li><li>Teleporter model and effect updated</li><li>Updated Alchemical Flask projectile effect</li><li>Fixed Bebop being able to sprint while his gun is spun up</li><li>Added new voice content for Seven and Lash</li><li>Added Shadow Weave cast and ambush sounds</li><li>Fixed bullets hitting the world immediately when looking sharply upward</li><li>Fixed Sinner&#x27;s Sacrifice not always correctly animating</li><li>Fixed an issue where some kill lines that were only intended for the killer were playing for the victim as well (killstreak taunts still play for everyone)</li><li>Some heroes can now comment on being alone in enemy territory, losing sight of an injured enemy, or leaving their teammates alone in a lane</li><li>Fixed a bunch of minor typos / grammar errors in various texts</li><li>Added &#x27;Express&#x27; state to zipline indicators when speed had increased from defeating Enemy Base Guardians</li><li>Added wall jumping (does not consume stamina, requires input direction away from the wall, can be done once)</li><li>Moved a flex slot from &quot;Set of enemy Base Guardians&quot; to &quot;All Enemy Lane Guardians&quot;</li><li>Added ropes to some buildings to let you climb up (hold jump key to latch onto them). Can shoot while hanging on them.</li></ul>\n')} `
	);
	_8_29_mg$4($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>A pair of teleporters has been added to the outer lanes at the midpoint (near the three red neutral creeps)</li><li>Four teleporters have changed locations</li><li>The upper floor teleporters have moved to the street level</li><li>The interior teleporters have moved to the Bodega building and the Theater</li><li>Teleporters are closed for the first 10 minutes (they look visually closed)</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/13/13969-41bfe806f2a5904393285b5d54f572d5.jpg?hash=Z3N_uRZvPI" alt="teleporter locations screenshots update"  decoding="async" loading="eager"/></p>\n<ul><li>Guardians no longer give 1 AP</li><li>AP is now added to the following Soul levels: 3500, 5200, 8000, 9700</li><li>Parry cooldown reduced from 6s to 5s</li><li>Urn delivery sprint bonus increased from +2 to +3</li><li>The minimum range the player must be to attack a walker is increased from 30m to 32m</li><li>Golden Statues drop rate increased by 6%</li><li>Replaced some bounce pads with ropes if the purpose was to go straight up</li><li>Added two bounce pads next to sidelane walkers at cultural center and courthouse</li><li>Added bounce pad from the Amber Orange/Sapphire Blue Walker walkway to the low roofs toward the Walker.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/13/13974-0eb337cb00c2bf930185cbf14508683c.jpg?hash=pr6BYtLXhU" alt="new bouncepad"  decoding="async" loading="lazy"/></p>\n<ul><li>Removed some rooftop zap volumes that damage players</li><li>Several buildings have been made taller to make their rooftops out of bounds</li><li>Several buildings have been made shorter to make them more accessible</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/13/13984-5a1fedb7b5143f08f44bedc827e5b216.jpg?hash=sXLDC_xIMj" alt="valid rooftop locations"  decoding="async" loading="lazy"/></p>\n<ul><li>A few of the buildings have new passageways at higher floors that are along the way to the rooftop</li></ul>\n')} `
	);
	_8_29_mg$3($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Breakable containers have been added to the new playable rooftops</li><li>Juke closets have replaced the previous location of the upper floor teleporters</li><li>The half of the underground tunnel towards the outer lanes has been made wider</li><li>Tunnel walls now have the color of the lane that the exit is closest to</li><li>Removed the archway leading to the underground shop</li><li>Placed temporary signage for interior buildings and storefronts for future reference</li><li>Two upper floor juke spots have been converted to passages through buildings</li><li>Added a new upper floor juke spot to each side</li><li>Stairwell from Amber Orange/Sapphire Blue Walker catwalk to the courtyard now less cramped</li><li>Lowered the statue pedestals in the inner lanes outside of Mid</li><li>Hollow Point Rounds: Spirit Shield increased from +80 to +85</li><li>High-Velocity Mag: Bullet Velocity reduced from +35% to +30% (now has an upgrade)</li><li>Added new T3 Weapon Item, Headhunter: Requires High-Velocity Mag. Grants +50% Bullet Velocity, +15% Weapon Damage and +150 Bullet Shield. Passive cooldown: Landing a headshot on heroes deals bonus +140 Damage, heals you for +8% Max HP and grants +2 m/s for 3 seconds. Cooldown: 6 seconds.</li><li>Combat Barrier: Now also grants +8% Fire Rate while active</li><li>Enchanter&#x27;s Barrer: Now also grants +8% Cooldown Reduction while active</li><li>Superior Stamina: Air Jump/Dash Distance reduced from +40% to +30%</li><li>Withering Whip: No longer grants +20% Ammo</li><li>Withering Whip: Now grants +8% Fire Rate</li><li>Withering Whip: Fire Rate slow reduced from -40% to -30%</li><li>Withering Whip: Cooldown reduced from 40s to 25s</li><li>Quicksilver: No longer has +10% Reload Time</li><li>Improved Cooldown: Cooldown Reduction increased from 15% to 16%</li><li>Silence Glyph: Duration reduced from 3.5s to 3s</li><li>Improved Reach: Spirit Resist increased from +10% to +12%</li><li>Curse: Duration reduced from 3.5 to 3.25</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_29_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability infernal-resilience-regeneration-time">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience Regeneration Time change history</a></p>\n<h4 id="infernal-resilience-regeneration-time"><a href="/ability/infernal-resilience">Infernal Resilience Regeneration Time</a></h4>\n<ul><li>Infernal Resilience Regeneration Time increased from 16s to 18s (this is a nerf)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience Regeneration Time'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Now does pull ups on the zipline once again (this is a buff)</li></ul>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed Shoulder Charge sometimes stunning enemies on stairs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Fixed Seismic Impact sometimes not going to the area selected</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Gun range increased from 30m to 32m</li></ul>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook now only targets enemies when used by default. If you use with alt cast (middle mouse) it will be ally only mode.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam can now be canceled by using Parry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora can now be canceled by using Parry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Fixed Kinetic Pulse not traveling properly when cast near corners</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Gun damage reduced from 15 to 13</li></ul>\n')} <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity cast time increased from 0.1 to 0.2</li><li>Singularity range reduced from 9m to 8m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n')} <ul><li>${html('Charged Shot collision size reduced by 8%')}</li> <li>${html('Charged Shot base damage reduced from 105 to 100')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Charged Shot base damage reduced from 105 to 100'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Charged Shot T2 reduced from +70 to +65')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fire Rate now scales with Spirit (0.25)</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Can now use multiple air dashes while using Rain of Fire</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spirit-snare">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>\n<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>\n<ul><li>Immobilizing Trap root duration reduced from 2s to 1.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Spirit Snare'
	});
	$$renderer.push(
		`<!----></div> <div class="ability immobilizing-trap">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Immobilizing Trap change history</a></p>\n<h4 id="immobilizing-trap"><a href="/ability/spirit-snare">Immobilizing Trap</a></h4>\n<ul><li>Immobilizing Trap now applies a 50% movement slow for 1 seconds after the root</li><li>Immobilizing Trap T2 changed from +1s Root to +2s Slow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Immobilizing Trap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n<ul><li>Base bullet damage increased from 5.3 to 5.6</li></ul>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n')} <ul><li>${html('Sleep Dagger impact damage happens immediately, rather than after the brief drowsy period')}</li> <li>${html('Sleep Dagger drowsy period before sleep kicks in increased from 0.25 to 0.35')}</li> <li>${html('Sleep Dagger cooldown reduced from 27s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Sleep Dagger cooldown reduced from 27s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n')} <ul><li>${html('Smoke Bomb radius reduced from 20m to 18m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Smoke Bomb radius reduced from 20m to 18m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation T2 max stacks increased from +30 to +40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance now provides +2 Weapon Damage in the base ability (similar to the T1)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Reduced vertical reach on Flame Dash dps</li><li>Flame Dash speed is now affected by slows</li><li>Flame Dash trail now gets wider with Ability Range bonus</li><li>Flame Dash T1 duration reduced from 7s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability catalyst-damage-amplification">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst Damage Amplification change history</a></p>\n<h4 id="catalyst-damage-amplification"><a href="/ability/napalm">Catalyst Damage Amplification</a></h4>\n<ul><li>Catalyst Damage Amplification reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst Damage Amplification'
	});
	$$renderer.push(
		`<!----></div> <div class="ability catalyst">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst change history</a></p>\n<h4 id="catalyst"><a href="/ability/napalm">Catalyst</a></h4>\n<ul><li>Catalyst T3 Damage Amplification increased from +10% to +15%</li><li>Catalyst T2 reduced from +20% Lifesteal to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Bullet damage growth per boon reduced from 0.55 to 0.5</li><li>Health growth per boon reduced from +41 to +35</li></ul>\n')} <div class="ability watcher-s-covenant">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>\n<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>\n<ul><li>Watcher&#x27;s Covenant T2 reduced from +3 m/s to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop no longer silences allies</li><li>Air Drop now causes allies to deal 50% less damage while being carried</li><li>Air Drop movement adjusted to be a little less frantic</li><li>Fixed Air Drop bomb disappearing if you cancel your ultimate after dropping it but before it lands</li><li>Air Drop self cast cast time increased from 1s to 2s</li><li>Air Drop max move speed reduced from 20 to 18</li><li>During Air Drop flight you can pitch up and down with Dash/Crouch buttons</li><li>Fixed getting stuck under bridges and in buildings while Air Drop flying</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Bullet radius increased from 5 to 6</li><li>Base health growth per boon increased from +45 to +50</li></ul>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam max slow increased from 60% to 80%</li><li>Arctic Beam now affects soul orbs (secures/denies them)</li><li>Arctic Beam T3 range reduced from 15m to 13m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Fixed Ice Path jitter</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade T2 Heal increased from 135 to 145</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Improved firing arm position to be a little bit more out of the way from the reticle</li></ul>\n')} <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n<ul><li>Grapple no longer gives a stamina charge on use</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Fixed Paradoxical Swap still going through even if Paradox dies during it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage amp reduced from 8% to 7% per stack</li><li>Fixed Barrage amp visual not showing properly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n')} <ul><li>${html('Static Charge radius increased from 5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Static Charge radius increased from 5m to 6m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Static Charge T2 radius increased from +7m to +8m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Static Charge T2 radius increased from +7m to +8m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud spirit power scaling reduced from 1.1 to 0.8</li><li>Storm Cloud time to reach maximum radius reduced from 6s to 3s</li><li>Storm Cloud Now provides +20% Bullet Resistance in the base ability</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Bullet damage growth per boon reduced from 0.5 to 0.4</li><li>Gun falloff range reduced by 10%</li><li>Health growth per boon reduced from +41 to +35</li></ul>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice T2 reduced from +100 to +85</li><li>Slice and Dice T3 now considers creeps for only half value</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting deferred damage reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>The targeting UI for Shiv&#x27;s Killing Blow is now more clear about when the target will be killed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake duration reduced from 2.25s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar-spirit-power">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar Spirit Power change history</a></p>\n<h4 id="crow-familiar-spirit-power"><a href="/ability/crow-familiar">Crow Familiar Spirit Power</a></h4>\n<ul><li>Crow Familiar Spirit Power duration scaling reduced from 0.05 to 0.04</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar Spirit Power'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fixed left clicks sometimes deselecting the ability when charges aren&#x27;t ready</li></ul>\n')}</div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n<ul><li>Primary Fire redesigned to make it more usable and have improved damage and scaling</li><li>Now has an Alt Fire that has limited range, but deals AOE damage that cannot headshot</li></ul>\n')} <div class="ability splatter-spirit-scaling">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter Spirit Scaling change history</a></p>\n<h4 id="splatter-spirit-scaling"><a href="/ability/splatter">Splatter Spirit Scaling</a></h4>\n<ul><li>Splatter Spirit Scaling increased from 1.4 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter Spirit Scaling'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter Damage on 2nd and 3rd hit increased from 66% and 33% to 70% and 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch damage increased from 100% to 110% of Light Melee</li><li>Puddle Punch T2 is now +50 damage and +20% movement slow (was -10s cooldown)</li><li>Puddle Punch T3 is now -12s cooldown (was +80 damage and +20% movement slow)</li><li>Puddle Punch: delay before punch increased from 0.25s to 0.35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball-spirit-scaling">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball Spirit Scaling change history</a></p>\n<h4 id="goo-ball-spirit-scaling"><a href="/ability/goo-ball">Goo Ball Spirit Scaling</a></h4>\n<ul><li>Goo Ball Spirit Scaling increased from 1.05 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball Spirit Scaling'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball acceleration increased</li><li>Goo Ball base turn radius and turn radius after bouncing has been increased</li><li>Fixed a bug where Goo Ball would have the direction and trail particle stuck on</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero warden">\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base movement speed reduced from 6.5 to 6</li><li>Fire Rate scaling with spirit reduced from 0.375 Fire Rate per Spirit to 0.3</li></ul>\n</div>\n')} <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash max damage time requirement reduced from 1.5s to 1.4s</li><li>Power Slash collision radius reduced by 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n')} <ul><li>${html('Crimson Slash radius increased from 12m to 13m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Crimson Slash radius increased from 12m to 13m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Fixed being able to die during Shadow Transformation if hit by Grey Talon&#x27;s Owl</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Fixed some cases where Flying Strike could get into a stuck state</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash-1"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Fixed some cases where Crimson Slash would appear to be cast when it wasn&#x27;t</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_29_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Lifesteal reduced from 30% to 22%</li><li>Buff duration reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n')} <ul><li>${html('Cooldown reduced from 28s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 28s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Health increased from +50 to +60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Sprint reduced from +4 to +3</li><li>Now grants +25% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n<ul><li>Active duration increased from 3s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Slow increased from 25% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>No longer grants +7% Bullet Resist</li><li>No longer grants +1.5 Health Regen</li><li>Now grants +1 Sprint</li><li>Now grants +75 Health</li><li>Now grants +8% Ability Range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item duration-extender">${html('\n<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>\n<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>\n<ul><li>Health regen increased from 1.5 to 1.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Duration Extender',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Now grants +8 Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Base Spirit Resist reduction increased from -12% to -15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Max Bullet Resist increased from 36% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-charge">${html('\n<p><a href="/item/extra-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Charge patch history</a></p>\n<h3 id="extra-charge"><a href="/item/extra-charge">Extra Charge</a></h3>\n<ul><li>Cooldown reduction increased from +8% to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-spirit">${html('\n<p><a href="/item/extra-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Spirit patch history</a></p>\n<h3 id="extra-spirit"><a href="/item/extra-spirit">Extra Spirit</a></h3>\n<ul><li>Health increased from +25 to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Damage taken duration threshold reduced from 12s to 11s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Ammo increased from +9 to +12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-booster">${html('\n<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>\n<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>\n<ul><li>Now has also 15% Heal Reduction Resist (Leech no longer has it)</li><li>No longer has +6% Bullet Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n')} <ul><li>${html('Cooldown reduced from 65s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 65s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n<ul><li>Active duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Health Regen increased from 2 to 3</li><li>Health increased from +75 to +100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Now steadily ramps back down to 0% when you stop shooting rather than instantly emptying</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>Active Fire Rate reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Delay reduced from 3s to 2s</li><li>Stun reduced from 1.25s to 0.9s</li><li>Cast range increased from 35m to 45m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>No longer has 30% Heal Reduction Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Effectiveness vs non-heroes increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Now grants +90 Bullet Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Proc chance increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n')} <ul><li>${html('You are now unslowable while on the Magic Carpet')}</li> <li>${html('Cooldown reduced from 40s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 40s to 30s'
	});
	$$renderer.push(`<!----></li> <li>${html('Barriers now last for 16s')}</li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown reduced from 26s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 26s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Now grants +1 HP regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Effectiveness vs non-heroes increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n')} <ul><li>${html('Cooldown reduced from 25s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 25s to 22s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Bullet Resist vs NPC increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>Cast range reduced from 30m to 25m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Charge count reduced from +3 to +2</li><li>Faster Time Between Charges increased from +40% to +55%</li><li>Cooldown for charged abilities increased from +20% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Duration reduced from 13s to 9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Now grants +8% Bullet Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Channel duration reduced from 3s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Heal from heroes increased from 30 to 35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Bounce damage increased from 50% to 60%</li><li>Fixed not applying spirit bonus damage from Vindicta and Wraith abilities</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Spirit Shield health increased from +200 to +300</li><li>Spot radius reduced from 20m to 18m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Now grants +175 Bullet Shield</li><li>No longer provides bonus headshot damage</li><li>Weapon damage increased from 60% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Weapon Damage reduced from 40% to 28%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Projectile speed increased by 30%')}</li> <li>${html('Cooldown reduced from 27s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 27s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n<ul><li>Cooldown reduction increased from +15% to +18%</li><li>Now grants +12 Spirit</li><li>Fixed being able to purchase globally during its brief respawn period</li><li>Fixed the camera moving away from the player if you will respawn, rather than following the ragdoll</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Debuff duration increased from 8s to 13s</li><li>Spirit Shield increased from +85 to +100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-duration">${html('\n<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>\n<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>\n<ul><li>Non-Imbued duration increased from +24% to +26%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Duration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Health regen reduced from 3 to 2.5</li><li>Fire Rate reduction reduced from -30% to -25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Imbued Ability Spirit Power increased from +28 to +34</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item swift-striker">${html('\n<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>\n<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>\n<ul><li>Now grants +10% Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Swift Striker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Bullet Armor increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Spirit damage scaling increased from 0.2 to 0.24</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Heal Reduction increased from -55% to -65%</li><li>Bleed damage reduced from 6% to 5%</li><li>Now grants +100 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n')} <ul><li>${html('Can now be cast while channeling')}</li> <li>${html('Cooldown reduced from 65s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 65s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('Cooldown reduced from 18s to 17s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 18s to 17s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Active Bullet Resistance reduced from 40% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_29_mg as default, metadata, readingManifest, toc };
