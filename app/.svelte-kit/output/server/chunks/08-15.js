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
//#region changelogs/2024/08-15.mg?embed=0
function _8_15_mg$9($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/bounce_update-mp4.10434/',
		label: 'bounce update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=1
function _8_15_mg$8($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/speed_boost_update-mp4.10433/',
		label: 'speed boost update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=2
function _8_15_mg$7($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/rooftop_update-mp4.10417/',
		label: 'rooftop update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=3
function _8_15_mg$6($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/yellow_update-mp4.10421/',
		label: 'yellow update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=4
function _8_15_mg$5($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/orange_update-mp4.10423/',
		label: 'orange update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=5
function _8_15_mg$4($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/blue_update-mp4.10425/',
		label: 'blue update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=6
function _8_15_mg$3($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/purple_update-mp4.10427/',
		label: 'purple update'
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=7
function _8_15_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Ivy',
			'Kelvin',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Vindicta',
			'Viscous',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/08-15.mg?embed=8
function _8_15_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Ammo Scavenger',
			'Berserker',
			'Bullet Lifesteal',
			'Cold Front',
			'Colossus',
			'Decay',
			'Divine Barrier',
			"Diviner's Kevlar",
			'Escalating Exposure',
			'Escalating Resilience',
			'Ethereal Shift',
			'Extra Regen',
			'Fortitude',
			'Glass Cannon',
			'Headshot Booster',
			'Healing Booster',
			'Healing Rite',
			'Heroic Aura',
			'Infuser',
			'Inhibitor',
			'Intensifying Magazine',
			'Kinetic Dash',
			'Lifestrike',
			'Long Range',
			'Majestic Leap',
			'Melee Lifesteal',
			'Metal Skin',
			'Monster Rounds',
			'Mystic Shot',
			'Mystic Slow',
			'Phantom Strike',
			'Point Blank',
			'Quicksilver Reload',
			'Refresher',
			'Rescue Beam',
			'Restorative Locket',
			'Restorative Shot',
			'Ricochet',
			'Sharpshooter',
			'Silencer',
			'Siphon Bullets',
			'Slowing Bullets',
			'Slowing Hex',
			'Soul Rebirth',
			'Spirit Strike',
			'Superior Cooldown',
			'Superior Duration',
			'Surge of Power',
			'Titanic Magazine',
			'Warp Stone'
		]
	});
}
//#endregion
//#region changelogs/2024/08-15.mg
var metadata = {
	title: '08-15-2024 Update',
	thread_id: '16378',
	published: '2024-08-15T14:18:32-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added a new hero, Shiv Games can now be watched by an unlimited number of spectators Spectator games now have 1 minute delay Added localization for Simplified Chinese, Russian, Brazilian Portuguese, Spanish (Spain), Spanish (Latin America), Turkish, Ukrainian, Czech, and French. These are currently a work-in-progress. Language can be selected from the settings menu Matchmaking windows are now open 1 hour earlier in all regions You can now prioritize your roster into three groups to indicate your preference ordering to the matchmaker: Selected, Priority, High Priority Added customization options for your crosshair Builds: You can now author a suggested ordering of Ability Upgrades Builds: You can now add per-item author comments by right clicking on items while editing builds that will show up in the item tooltip for users of the build Fixed a bug that allowed published build data to overwrite local changes to a published build Fixed a bug that prevented the last used hero build from loading when it was not a favorited build Hovering items in the shop will now highlight their components, or which item they are components of Reworked the Hero Stats UI in the shop Hero Stats in the shop have been expanded and are now broken up by Weapon, Vitality, and Spirit. Various additional stats that were previously hidden have been added here. Individual stats can now be hovered over to see a breakdown of all the bonuses contributing to a value, including things like golden statues Added descriptive gun information to each hero Added Spirit Power Impact panel that displays the effect of Spirit Power on your Abilities and Items Added Outgoing Damage as a UI display mode that you can toggle through Added a setting to let you customize the ability cancel hotkey (default is spacebar) Added a \"Friends Only\" checkbox to filter the watch tab Added an option to control zoom sensitivity Fixed Candle Troopers sometimes instantly disappearing on death rather than going into their death flash state Using an active item or ability removes the undo option for the item/AP Fixed some abuse cases with undoing AP cooldown reductions Added a video setting to reduce flashing effects Unpause hotkey is now displayed when the game is paused Pause cooldown per player increased from 10 minutes to 15 minutes Improved visual clarity of Grey Talon's trap armed state Replaced the Urn drop parachute with new effects Fixed some cases where the comeback souls would be higher than intended in the early game Fixed being unable to ping while dead Fixed Bebop's Sticky Bomb sometimes misfiring Improved smoothing of spectator camera position and angles Fixed a bug that allowed teleporters to be used while carrying the Soul Urn Fixed targeting previews that draw a model (like McGinnis's turrets) to update every frame, instead of being fixed at 60hz Fixed stuns resetting their duration if you were on the ground and became airborne Fixed some cases where Lash's Ground Strike would cause your hero to be stuck Fixed Ricochet sometimes shooting the extra bullet from your gun rather than the target Fixed Arctic Beam T3 range not being calculated correctly when you have range increase items Fixed ESC not working to close Settings popup sometimes Various visual adjustments on highlight and strobe effects being too loud in some cases Holding M1 down while Flame Dash ends will now cause you to fire your gun instead of requiring you to let go and press again Added popup to bot games to indicate that they tend to be much longer games than normal ones Improved Abrams Siphon and Seismic Impact visuals to not obstruct player view as much Added new Silence status effect sound Updated bullet whizby sounds for nearly all characters Updated Haze Sleep Dagger cast, projectile loop and whizby Updated Haze Smoke Bomb sound Removed Haze Smoke Bomb voice line for everyone except the casting player and spectators Fixed some spectator/replay sound and music bugs Various sound related performance improvements More impactful damage indication sound for attackers Remastered Abrams, Pocket, and Dynamo weapon fire sounds Improved lighting performance around shop Improved Wraith tracers to feel more connected to their bullet Improved visibility of AOE around Bebop while casting Hyper Beam Improved effects around Lady Geist Soul Exchange to help with clarity Updated Infernus tracer, muzzle, and impact fx revisions for better performance Fixed Mimic options in sandbox not working properly Added a sound for movement being restricted by Slowing Hex and Vindicta tether Revised sounds for Pocket Flying Cloak duration and warp Clarified Vindicta Flight T1 tooltip Added alternate shop music Added Refresher cast sound Teleporter activation no longer gets canceled on incoming damage. Teleporter channel time increased from 4s to 5s Walkers now require you to be within 30m to deal damage to them Walker Health increased by 15% Base Guardian Health increased by 20% Patron damage increased by 30% after it is vulnerable Weakened Patron Health increased by 15% Weakened Patron now has a Torment Pulse style effect, hitting up to 2 enemies in the pit for 75 damage per second You can now use melee hotkey while zoomed to exit zoom and perform a melee Added Bounce Pads in various areas of the map that launch you in a defined direction Added one-way defender exits beside each outer lane entrance Added Speed Boost Volumes in the defender passages on the outsides of the base Firehouse (building next to Sapphire Yellow Guardian) has been reworked to match the layout of the Chapel Low roof buildings beside Amber Purple Guardian and Sapphire Yellow Guardian are now valid play spaces Removed zap triggers Added truck on the back side of those buildings to allow climbing up Removed rooftop props for those buildings Added billboards to the edge closest to the lane Low roof buildings between inner lane Walker arenas are now valid play spaces Expanded rooftop size Added fire escape stairs to allow access from the upper level from the Mid Walker Arena - Amber Yellow/Sapphire Purple: Added catwalks from high ground defender area to building across the street Added passage through building and stairs up to a peek spot toward the Guardian Replaced upper floor juke spot with a connection through building across from new peek spot Walker Arena - Amber Orange/Sapphire Blue: Added catwalk from the low roof building to the building across the street Replaced juke spot in the courtyard with passage connecting to the new catwalk Widened hallway above Underground Shop Removed railing and added stairs in the passage toward the Guardian Courtyard floor opening to the Underground Shop moved closer to above the shop Bounce Pad added to allow easier navigation from the Underground Shop to the upper courtyard. Replaces a juke spot. Walker Arena - Amber Blue/Sapphire Orange: Added interior shaft with Bounce Pad to an upper level balcony from defender side to face the Guardian Added a Bounce Pad on the ground floor of the Police Station/Garment Building to the upper floor Added a juke spot inside the Police Station/Garment Building Added a juke spot down the stairs from the Guardian to the left Walker Arena - Amber Purple/Sapphire Yellow: Added an interior corridor through the building between the base and the Walker Added a balcony that borders the arena on the back side of the Walker Soul Shredder Bullets: Now grants +6% Weapon Damage Soul Shredder Bullets:  Debuff duration increased from 5s to 6s Health Nova: Health increased from +75 to +100 Combat Barrier: Weapon Damage While Shielded increased from +24% to +28% Enchanter's Barrier: Spirit Power while Shielded increased from +17 to +20 Superior Stamina: Air Jump/Dash Distance reduced from +50% to +40% Superior Stamina: Fire Rate reduced from 10% to 7% Debuff Remover: Debuff resistance reduced from +40% to +35% Mystic Reach: Now gives +5% Spirit Resist Withering Whip: Now applies -40% Fire Rate instead of a Disarm Withering Whip: Duration increased from 3s to 4.5s Withering Whip: Cast range increased from 18m to 24m Improved Cooldown: Cooldown reduction increased from 14% to 15% Improved Burst: Reduced Weapon Damage from +12% to +8% Improved Reach: Now gives +10% Spirit Resist Silence Glyph: No longer reduces Spirit Resist Silence Glyph: Now deals +150 damage on impact Curse: Cooldown increased from 40s to 50s Added a new T1 Weapon item. Grants +35% Bullet Projectile Speed, +14% Weapon Damage and +50 Bullet Shield. Added a new T4 Spirit item, Magic Carpet: Active - After a 1.3s delay, a magic carpet arrives to pick you up. You gain full flight controls and have +6 m/s movement speed. Lasts 7 seconds. If you cast abilities or use your gun, the carpet disappears. While on the Magic Carpet you gain +400 Bullet and +400 Spirit Shields. Passively grants +150 Health, +10% Ability Duration, and +15 Spirit Power. Cooldown: 40s Abrams Fixed Seismic Impact often not dragging enemies in the air along with you when you are slamming down Fixed Shoulder Charge not always placing enemies in front of you Seismic Impact damage reduced from 175 to 150 Bebop Gun range reduced from 50m to 30m + 2.5m/boon (max of 58m) Speed while shooting increased from 55% to 70% Base regen increased from 2.5 to 3 Base Bullet Resist increased from 0% to 10% Bullet Resist per boon reduced from 2.5% to 1.6% (same overall bullet resist at max) Hook range reduced from 40m to 35m Hook T2 increased from +25m to +30m Exploding Uppercut now has a slight angle limitation to prevent straight-up direction Exploding Uppercut radius increased from 10m to 14m Exploding Uppercut T1 increased from -10s Cooldown to -11s Fixed hooking through veils sometimes not working Sticky Bomb radius increased from 10m to 12m Sticky Bomb can now be cast on self using alt cast hotkey Hyper Beam T2 reduced from +140 to +100 Hyper Beam spirit scaling increased from 2.4 to 3.0 Hyper Beam turn rate improved by 10% Hyper Beam nearby radius increased from 4.5m to 5m Hyper Beam nearby damage now does 25% less than the full amount Dynamo Rejuvenating Aurora can now be canceled by using stamina instead of needing to manually exit first (pre T3) Fixed Kinetic Pulse sometimes getting caught on stairs Singularity now has a 0.1s cast point Kinetic Pulse width increased from 4.5m to 5m Kinetic Pulse T3 increased from +115 Damage to +125 Grey Talon Charged Shot collision radius reduced by 10% Fixed T3 Guided Owl not triggering correctly sometimes when the target has Spirit Armor Haze Sleep Dagger now puts you in a brief drowsy state for 0.25s seconds where you move slowly before falling asleep (you still have the ability to shoot/cast/move/etc during this period) Fixation T2 from +6s Duration to +5s Fixation T3 reduced from +0.25 to +0.2 Bullet Dance T1 increased from +6 to +7 Ivy Fixed melee still going through when casting Stone Form after initiating a melee attack Stone Form T2 stun reduced from 0.75s to 0.5s Watcher's Covenant T1 reduced from +15% Fire Rate to +10% Now has a new ultimate ability, Air Drop. Take flight with an Ally (or self-cast to carry a bomb). You fly and drop the ally or bomb onto an area, dealing damage, slowing, and silencing enemies. Ivy and the ally gain a bullet shield when they are dropped. Allies can drop by themselves at any time. When using the ability without an ally (carrying a bomb), it has a 1 second cast time. Kelvin Arctic Beam no longer applies a Disarm Arctic Beam now slows Fire Rate (same values as slow) Arctic Beam max slow reduced from 90% to 60% Arctic Beam time to reach max slow increased from 1.2s to 2s Frozen Shelter can now be cast while using Arctic Beam Lash Health per boon increased from 37 to 42 Base spirit resist increased from 8% to 15% Flog cooldown reduced from 30s to 25s Flog T3 now also reduces Fire Rate by 35% McGinnis Speed while shooting increased from 55% to 70% Mini Turrets now prioritize any heroes McGinnis is shooting at Medicinal Specter duration Spirit Power scaling increased from 0.09 to 0.12 Heavy Barrage T1 changed to Rockets apply 35% slow Mo & Krill Scorn T3 now affects all damage types Paradox Base ammo reduced from 45 to 40 Kinetic Carbine projectile size reduced by 10% Kinetic Carbine cooldown increased from 24s to 28s Kinetic Carbine speed duration reduced from 4s to 3.5s Kinetic Carbine no longer affects channels, cast times or things like Lash's Death Slam Kinetic Carbine T1 reduced from +0.75s Max Stop duration to +0.5s Kinetic Carbine T2 cd reduction increased from -8s to -10s Time Wall T3 silence duration reduced from 3.5s to 3s Paradoxical Swap projectile size reduced by 10% Pocket Barrage now respects line of sight Barrage amp effect now shows on Pocket Base Bullet Resist increased from -15% to 0% Base Spirit Resist reduced from 0% to -15% Barrage Amp per stack reduced from 10% to 8% Barrage T3 changed to +5% Amp Per Stack Fixed the camera moving too slowly after teleporting with Cloak Seven Fixed multiple instances of Static Charge not working correctly Lightning Ball duration increased from 4s to 5s Static Charge stun delay reduced from 4s to 3.5s Vindicta Stake base duration reduced from 2.5s to 2.25s Stake T1 duration reduced from 1s to 0.75s Viscous Fixed Splatter direct hits counting as the second hit Fix Damage prevention after being hit by Viscous' Goo Ball being reduced by Debuff Reducer The Cube cast range increased from 25m to 30m The Cube T2 cooldown reduced from -25s to -22s Puddle Punch now deals light melee damage and is affected by melee items Puddle Punch Charge Delay increased from 0.5s to 1.5s Goo Ball duration reduced from 12s to 10s Goo Ball T1 duration reduced from +6s to +5s Goo Ball cooldown increased from 80s to 90s Goo Ball now deals 50% damage to bosses Goo Ball spirit resist reduced from 80% to 70% Goo Ball bullet resist reduced from 70% to 60% Goo Ball can now only stun and damage a target once every 1.5s, up from once every 1.0s Goo Ball acceleration lowered a bit Stunning or immobilizing Viscous now stops the ball from moving, and prevents him from doing damage and stunning Warden Binding Word no longer drains 1 stamina Alchemical Flask cooldown reduced from 16s to 13s Alchemical Flask T2 changed from -10s Cooldown to Drains 1 Stamina Alchemical Flask T3 now also reduces cooldown by -7s Binding Word immobilize duration reduced from 2s to 1.75 Binding Word now has a quick cast behavior (same as Static Charge) Wraith Card Trick now has 0.5s cd per cast Telekinesis T2 duration reduced from +0.75s to +0.5s Full Auto T2 changed to Imbues Bullets with +5 Spirit Damage (only affects Wraith) Fixed being able to melee and parry while stunned by Wraith's Telekinesis Yamato Base melee damage increased by 10% Flying Strike T3 now procs after the ability ends, rather than when connecting to the target Headshot Booster No longer has +40 Bonus Health Now has +40 Bullet Shield Monster Rounds Health reduced from +65 to +50 Now grants +30% Bullet Resistance vs NPCs Restorative Shot Weapon Damage increased from 6% to 8% Active Reload Lifesteal reduced from 40% to 30% Fire Rate reduced from 24% to 20% Kinetic Dash HP regen increased from 1 to 1.5 Long Range Min distance reduced from 18m to 15m Mystic Shot Cooldown increased from 5s to 6s Slowing Bullets Now grants +5 Spirit Berserker Fixed gaining stacks much faster than intended when taking damage from troopers Warp Stone Active Bullet Resist reduced from +60% to +40% No longer grants +2 Sprint Now gains +8 Spirit Point Blank No longer grants +300 Bullet Shield Now grants +15% Bullet Armor Escalating Resilience Max Bullet Resist increased from 30% to 36% Heroic Aura Lifesteal increased from 18% to 20% Alchemical Fire Bullet Shield increased from 175 to 225 Sharpshooter Min distance reduced from 18m to 15m Titanic Magazine Weapon Damage increased from 16% to 18% Bullet Resist increased from 8% to 10% Intensifying Magazine Time for Max Damage reduced from 3.5s to 3s (this is a buff) Ricochet Fire Rate increased from +8% to +12% Health increased from +125 to +150 Siphon Bullets You permanently steal 1 stack (45 HP) from the enemy if they die under the debuff. If an enemy you stole a stack from kills you, they regain 1 stack back. Silencer Reduced active duration from 6s to 4s Glass Cannon Now gives +1 Movement Speed No longer gives +2 ammo on kill Weapon Damage reduced from +75% to +70% Now gives +10% Weapon Damage per kill (up to +50%) When you die you lose a stack Melee Lifesteal Heal effectiveness vs non-heroes increased from 25% to 35% Health increased from +70 to +75 Extra Regen Regen increased from 2.7 to 2.8 Healing Rite Cooldown reduced from 75s to 65s Cast Range increased from 20m to 30m Healing Booster Spirit Resist reduced from +7% to +6% Bullet Resist reduced from +7% to +6% Divine Barrier Duration increased from 4s to 5s Cooldown reduced from 30s to 28s Restorative Locket Max Stacks reduced from 20 to 15 Heal per stack increased from 30 to 40 Bullet Lifesteal Lifesteal increased from +26% to 28% Lifestrike Heal effectiveness vs non-heroes increased from 25% to 35% Heal increased from 45% of melee damage to +55% Majestic Leap Health increased from +100 to +125 Spirit Power increased from +8 to +10 Metal Skin Cooldown reduced from 30s to 25s Fortitude Out of combat regen timer reduced from 13s to 12s Rescue Beam Cooldown reduced from 30s to 25s Soul Rebirth Rebirth Health increased from 40% to 50% Cooldown reduced from 240s to 200s Inhibitor Weapon Damage increased from 20% to 25% Colossus Slow increased from 20% to 25% Slow now affects stamina distances Phantom Strike Cast range reduced from 35m to 30m Infuser No longer gives +7% Spirit Resist Now gives +50 Health Spirit Strike Spirit damage increased from 40 to 50 Debuff increased from -10% Spirit Resist to -12% Ammo Scavenger Spirit Power Duration increased from 24s to 35s Cold Front Damage reduced from 100 to 75 Damage Spirit Power scaling increased from 1.25 to 1.5 Decay Healing Reduction reduced from -70% to -50% Bleed increased from 2.8% to 3.1% Cooldown increased from 25s to 30s Slowing Hex Debuff no longer cancels active mobility spells, it only prevents them from being casted Damage reduced from 100 to 70 Cast range reduced from 35m to 25m Now also reduces stamina distance by 30% Projectile speed increased from 1200 to 1350 Quicksilver Reload Infused ability bonus damage increased from +30 to +50 Ethereal Shift No longer provides +10% Fire Rate Cooldown increased from 25s to 30s Surge of Power Movespeed duration increased from 5s to 6s Imbued Spirit increased from +26 to +28 Now grants +75 Health Superior Duration Now provides +15% Weapon Damage Mystic Slow Fire Rate reduction increased from -30% to -40% Superior Cooldown Non-Imbued ability cd reduction increased from 22% to 24% Escalating Exposure Max Interval improved from 1s to 0.7s Diviner's Kevlar Cooldown increased from 30s to 60s Refresher Spirit Resist increased from 14% to 16%",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-07',
			to: '2024-08-15'
		},
		after: {
			from: null,
			to: null
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
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact-1'
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
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
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
		level: 3,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse-1'
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
		title: 'Guided Owl',
		id: 'guided-owl'
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
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form'
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
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog'
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
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 3,
		title: 'Time Wall',
		id: 'time-wall'
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
		level: 3,
		title: 'Barrage',
		id: 'barrage-1'
	},
	{
		level: 3,
		title: 'Flying Cloak',
		id: 'flying-cloak'
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
		title: 'Lightning Ball',
		id: 'lightning-ball'
	},
	{
		level: 3,
		title: 'Static Charge',
		id: 'static-charge-1'
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
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 3,
		title: 'The Cube',
		id: 'the-cube'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 3,
		title: 'Puddle Punch Charge Delay',
		id: 'puddle-punch-charge-delay'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball-1'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 3,
		title: 'Alchemical Flask',
		id: 'alchemical-flask'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word-1'
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
		level: 3,
		title: 'Full Auto',
		id: 'full-auto'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis-1'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Flying Strike',
		id: 'flying-strike'
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
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Bullet Lifesteal',
		id: 'bullet-lifesteal'
	},
	{
		level: 2,
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Colossus',
		id: 'colossus'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: "Diviner's Kevlar",
		id: 'diviner-s-kevlar'
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
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Glass Cannon',
		id: 'glass-cannon'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
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
		title: 'Infuser',
		id: 'infuser'
	},
	{
		level: 2,
		title: 'Inhibitor',
		id: 'inhibitor'
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
		title: 'Majestic Leap',
		id: 'majestic-leap'
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
		title: 'Point Blank',
		id: 'point-blank'
	},
	{
		level: 2,
		title: 'Quicksilver Reload',
		id: 'quicksilver-reload'
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
		title: 'Restorative Locket',
		id: 'restorative-locket'
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
		title: 'Sharpshooter',
		id: 'sharpshooter'
	},
	{
		level: 2,
		title: 'Silencer',
		id: 'silencer'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Slowing Bullets',
		id: 'slowing-bullets'
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
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
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
			from: '2024-08-07',
			to: '2024-08-15'
		},
		after: null,
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
			name: 'McGinnis',
			id: 'mcginnis'
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
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Bullet Lifesteal',
			id: 'bullet-lifesteal'
		},
		{
			kind: 'item',
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Colossus',
			id: 'colossus'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: "Diviner's Kevlar",
			id: 'diviner-s-kevlar'
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
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Glass Cannon',
			id: 'glass-cannon'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
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
			name: 'Infuser',
			id: 'infuser'
		},
		{
			kind: 'item',
			name: 'Inhibitor',
			id: 'inhibitor'
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
			name: 'Majestic Leap',
			id: 'majestic-leap'
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
			name: 'Point Blank',
			id: 'point-blank'
		},
		{
			kind: 'item',
			name: 'Quicksilver Reload',
			id: 'quicksilver-reload'
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
			name: 'Restorative Locket',
			id: 'restorative-locket'
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
			name: 'Sharpshooter',
			id: 'sharpshooter'
		},
		{
			kind: 'item',
			name: 'Silencer',
			id: 'silencer'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Slowing Bullets',
			id: 'slowing-bullets'
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
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
		},
		{
			kind: 'item',
			name: 'Warp Stone',
			id: 'warp-stone'
		}
	],
	related: []
};
function _8_15_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a new hero, Shiv</li><li>Games can now be watched by an unlimited number of spectators</li><li>Spectator games now have 1 minute delay</li><li>Added localization for Simplified Chinese, Russian, Brazilian Portuguese, Spanish (Spain), Spanish (Latin America), Turkish, Ukrainian, Czech, and French. These are currently a work-in-progress.</li><li>Language can be selected from the settings menu</li><li>Matchmaking windows are now open 1 hour earlier in all regions</li><li>You can now prioritize your roster into three groups to indicate your preference ordering to the matchmaker: Selected, Priority, High Priority</li><li>Added customization options for your crosshair</li><li>Builds: You can now author a suggested ordering of Ability Upgrades</li><li>Builds: You can now add per-item author comments by right clicking on items while editing builds that will show up in the item tooltip for users of the build</li><li>Fixed a bug that allowed published build data to overwrite local changes to a published build</li><li>Fixed a bug that prevented the last used hero build from loading when it was not a favorited build</li><li>Hovering items in the shop will now highlight their components, or which item they are components of</li><li>Reworked the Hero Stats UI in the shop</li><li>Hero Stats in the shop have been expanded and are now broken up by Weapon, Vitality, and Spirit. Various additional stats that were previously hidden have been added here.</li><li>Individual stats can now be hovered over to see a breakdown of all the bonuses contributing to a value, including things like golden statues</li><li>Added descriptive gun information to each hero</li><li>Added Spirit Power Impact panel that displays the effect of Spirit Power on your Abilities and Items</li><li>Added Outgoing Damage as a UI display mode that you can toggle through</li><li>Added a setting to let you customize the ability cancel hotkey (default is spacebar)</li><li>Added a &quot;Friends Only&quot; checkbox to filter the watch tab</li><li>Added an option to control zoom sensitivity</li><li>Fixed Candle Troopers sometimes instantly disappearing on death rather than going into their death flash state</li><li>Using an active item or ability removes the undo option for the item/AP</li><li>Fixed some abuse cases with undoing AP cooldown reductions</li><li>Added a video setting to reduce flashing effects</li><li>Unpause hotkey is now displayed when the game is paused</li><li>Pause cooldown per player increased from 10 minutes to 15 minutes</li><li>Improved visual clarity of Grey Talon&#x27;s trap armed state</li><li>Replaced the Urn drop parachute with new effects</li><li>Fixed some cases where the comeback souls would be higher than intended in the early game</li><li>Fixed being unable to ping while dead</li><li>Fixed Bebop&#x27;s Sticky Bomb sometimes misfiring</li><li>Improved smoothing of spectator camera position and angles</li><li>Fixed a bug that allowed teleporters to be used while carrying the Soul Urn</li><li>Fixed targeting previews that draw a model (like McGinnis&#x27;s turrets) to update every frame, instead of being fixed at 60hz</li><li>Fixed stuns resetting their duration if you were on the ground and became airborne</li><li>Fixed some cases where Lash&#x27;s Ground Strike would cause your hero to be stuck</li><li>Fixed Ricochet sometimes shooting the extra bullet from your gun rather than the target</li><li>Fixed Arctic Beam T3 range not being calculated correctly when you have range increase items</li><li>Fixed ESC not working to close Settings popup sometimes</li><li>Various visual adjustments on highlight and strobe effects being too loud in some cases</li><li>Holding M1 down while Flame Dash ends will now cause you to fire your gun instead of requiring you to let go and press again</li><li>Added popup to bot games to indicate that they tend to be much longer games than normal ones</li><li>Improved Abrams Siphon and Seismic Impact visuals to not obstruct player view as much</li><li>Added new Silence status effect sound</li><li>Updated bullet whizby sounds for nearly all characters</li><li>Updated Haze Sleep Dagger cast, projectile loop and whizby</li><li>Updated Haze Smoke Bomb sound</li><li>Removed Haze Smoke Bomb voice line for everyone except the casting player and spectators</li><li>Fixed some spectator/replay sound and music bugs</li><li>Various sound related performance improvements</li><li>More impactful damage indication sound for attackers</li><li>Remastered Abrams, Pocket, and Dynamo weapon fire sounds</li><li>Improved lighting performance around shop</li><li>Improved Wraith tracers to feel more connected to their bullet</li><li>Improved visibility of AOE around Bebop while casting Hyper Beam</li><li>Improved effects around Lady Geist Soul Exchange to help with clarity</li><li>Updated Infernus tracer, muzzle, and impact fx revisions for better performance</li><li>Fixed Mimic options in sandbox not working properly</li><li>Added a sound for movement being restricted by Slowing Hex and Vindicta tether</li><li>Revised sounds for Pocket Flying Cloak duration and warp</li><li>Clarified Vindicta Flight T1 tooltip</li><li>Added alternate shop music</li><li>Added Refresher cast sound</li><li>Teleporter activation no longer gets canceled on incoming damage.</li><li>Teleporter channel time increased from 4s to 5s</li><li>Walkers now require you to be within 30m to deal damage to them</li><li>Walker Health increased by 15%</li><li>Base Guardian Health increased by 20%</li><li>Patron damage increased by 30% after it is vulnerable</li><li>Weakened Patron Health increased by 15%</li><li>Weakened Patron now has a Torment Pulse style effect, hitting up to 2 enemies in the pit for 75 damage per second</li><li>You can now use melee hotkey while zoomed to exit zoom and perform a melee</li><li>Added Bounce Pads in various areas of the map that launch you in a defined direction</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10426-255433f613d4aef9b85be903d8999953.jpg?hash=jqLV72_mck" alt="bounce pad locations"  decoding="async" loading="eager"/></p>\n')} `
	);
	_8_15_mg$9($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Added one-way defender exits beside each outer lane entrance</li><li>Added Speed Boost Volumes in the defender passages on the outsides of the base</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10444-75cc741c53122763a7a48f9839eed303.jpg?hash=JvPor2GyaR" alt="base speed boost"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$8($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Firehouse (building next to Sapphire Yellow Guardian) has been reworked to match the layout of the Chapel</li><li>Low roof buildings beside Amber Purple Guardian and Sapphire Yellow Guardian are now valid play spaces</li><li>Removed zap triggers</li><li>Added truck on the back side of those buildings to allow climbing up</li><li>Removed rooftop props for those buildings</li><li>Added billboards to the edge closest to the lane</li><li>Low roof buildings between inner lane Walker arenas are now valid play spaces</li><li>Expanded rooftop size</li><li>Added fire escape stairs to allow access from the upper level from the Mid</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10430-f72af25a6d7d29a25a4d111251c64b7c.jpg?hash=XlgYymrk1u" alt="rooftop locations large"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$7($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Walker Arena - Amber Yellow/Sapphire Purple:</li><li>Added catwalks from high ground defender area to building across the street</li><li>Added passage through building and stairs up to a peek spot toward the Guardian</li><li>Replaced upper floor juke spot with a connection through building across from new peek spot</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10432-d718486425f9de7051a49f8d42c194a1.jpg?hash=IgJnWMJNZG" alt="amber yellow walker arena"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$6($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Walker Arena - Amber Orange/Sapphire Blue:</li><li>Added catwalk from the low roof building to the building across the street</li><li>Replaced juke spot in the courtyard with passage connecting to the new catwalk</li><li>Widened hallway above Underground Shop</li><li>Removed railing and added stairs in the passage toward the Guardian</li><li>Courtyard floor opening to the Underground Shop moved closer to above the shop</li><li>Bounce Pad added to allow easier navigation from the Underground Shop to the upper courtyard. Replaces a juke spot.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10434-50c695d943074b2c2f750bdb4221ea2e.jpg?hash=WdF_JkaGYI" alt="amber orange walker arena"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$5($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Walker Arena - Amber Blue/Sapphire Orange:</li><li>Added interior shaft with Bounce Pad to an upper level balcony from defender side to face the Guardian</li><li>Added a Bounce Pad on the ground floor of the Police Station/Garment Building to the upper floor</li><li>Added a juke spot inside the Police Station/Garment Building</li><li>Added a juke spot down the stairs from the Guardian to the left</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10436-d9fac3d3741dbeef70155f7de243a14d.jpg?hash=U3L4JG5Hk2" alt="amber blue walker arena"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$4($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Walker Arena - Amber Purple/Sapphire Yellow:</li><li>Added an interior corridor through the building between the base and the Walker</li><li>Added a balcony that borders the arena on the back side of the Walker</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/10/10438-7f748d681e68886ae3ac4cc5c7acbe0c.jpg?hash=uWC1vvRBxt" alt="amber purple walker arena"  decoding="async" loading="lazy"/></p>\n')} `
	);
	_8_15_mg$3($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Soul Shredder Bullets: Now grants +6% Weapon Damage</li><li>Soul Shredder Bullets:  Debuff duration increased from 5s to 6s</li><li>Health Nova: Health increased from +75 to +100</li><li>Combat Barrier: Weapon Damage While Shielded increased from +24% to +28%</li><li>Enchanter&#x27;s Barrier: Spirit Power while Shielded increased from +17 to +20</li><li>Superior Stamina: Air Jump/Dash Distance reduced from +50% to +40%</li><li>Superior Stamina: Fire Rate reduced from 10% to 7%</li><li>Debuff Remover: Debuff resistance reduced from +40% to +35%</li><li>Mystic Reach: Now gives +5% Spirit Resist</li><li>Withering Whip: Now applies -40% Fire Rate instead of a Disarm</li><li>Withering Whip: Duration increased from 3s to 4.5s</li><li>Withering Whip: Cast range increased from 18m to 24m</li><li>Improved Cooldown: Cooldown reduction increased from 14% to 15%</li><li>Improved Burst: Reduced Weapon Damage from +12% to +8%</li><li>Improved Reach: Now gives +10% Spirit Resist</li><li>Silence Glyph: No longer reduces Spirit Resist</li><li>Silence Glyph: Now deals +150 damage on impact</li><li>Curse: Cooldown increased from 40s to 50s</li><li>Added a new T1 Weapon item. Grants +35% Bullet Projectile Speed, +14% Weapon Damage and +50 Bullet Shield.</li><li>Added a new T4 Spirit item, Magic Carpet: Active - After a 1.3s delay, a magic carpet arrives to pick you up. You gain full flight controls and have +6 m/s movement speed. Lasts 7 seconds. If you cast abilities or use your gun, the carpet disappears. While on the Magic Carpet you gain +400 Bullet and +400 Spirit Shields. Passively grants +150 Health, +10% Ability Duration, and +15 Spirit Power. Cooldown: 40s</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_15_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Fixed Seismic Impact often not dragging enemies in the air along with you when you are slamming down</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed Shoulder Charge not always placing enemies in front of you</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact-1"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Seismic Impact damage reduced from 175 to 150')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Seismic Impact damage reduced from 175 to 150'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Gun range reduced from 50m to 30m + 2.5m/boon (max of 58m)</li><li>Speed while shooting increased from 55% to 70%</li><li>Base regen increased from 2.5 to 3</li><li>Base Bullet Resist increased from 0% to 10%</li><li>Bullet Resist per boon reduced from 2.5% to 1.6% (same overall bullet resist at max)</li></ul>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook range reduced from 40m to 35m</li><li>Hook T2 increased from +25m to +30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n')} <ul><li>${html('Exploding Uppercut now has a slight angle limitation to prevent straight-up direction')}</li> <li>${html('Exploding Uppercut radius increased from 10m to 14m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Exploding Uppercut radius increased from 10m to 14m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Exploding Uppercut T1 increased from -10s Cooldown to -11s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Fixed hooking through veils sometimes not working</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb radius increased from 10m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Sticky Bomb radius increased from 10m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sticky Bomb can now be cast on self using alt cast hotkey')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam T2 reduced from +140 to +100</li><li>Hyper Beam spirit scaling increased from 2.4 to 3.0</li><li>Hyper Beam turn rate improved by 10%</li><li>Hyper Beam nearby radius increased from 4.5m to 5m</li><li>Hyper Beam nearby damage now does 25% less than the full amount</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora can now be canceled by using stamina instead of needing to manually exit first (pre T3)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Fixed Kinetic Pulse sometimes getting caught on stairs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity now has a 0.1s cast point</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse-1"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse width increased from 4.5m to 5m</li><li>Kinetic Pulse T3 increased from +115 Damage to +125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Charged Shot collision radius reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Fixed T3 Guided Owl not triggering correctly sometimes when the target has Spirit Armor</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger now puts you in a brief drowsy state for 0.25s seconds where you move slowly before falling asleep (you still have the ability to shoot/cast/move/etc during this period)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation T2 from +6s Duration to +5s</li><li>Fixation T3 reduced from +0.25 to +0.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance T1 increased from +6 to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Fixed melee still going through when casting Stone Form after initiating a melee attack</li><li>Stone Form T2 stun reduced from 0.75s to 0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>\n<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>\n<ul><li>Watcher&#x27;s Covenant T1 reduced from +15% Fire Rate to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Now has a new ultimate ability, Air Drop. Take flight with an Ally (or self-cast to carry a bomb). You fly and drop the ally or bomb onto an area, dealing damage, slowing, and silencing enemies. Ivy and the ally gain a bullet shield when they are dropped. Allies can drop by themselves at any time. When using the ability without an ally (carrying a bomb), it has a 1 second cast time.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam no longer applies a Disarm</li><li>Arctic Beam now slows Fire Rate (same values as slow)</li><li>Arctic Beam max slow reduced from 90% to 60%</li><li>Arctic Beam time to reach max slow increased from 1.2s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter can now be cast while using Arctic Beam</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Health per boon increased from 37 to 42</li><li>Base spirit resist increased from 8% to 15%</li></ul>\n')} <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n')} <ul><li>${html('Flog cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Flog cooldown reduced from 30s to 25s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flog T3 now also reduces Fire Rate by 35%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Speed while shooting increased from 55% to 70%</li></ul>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets now prioritize any heroes McGinnis is shooting at</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter duration Spirit Power scaling increased from 0.09 to 0.12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Heavy Barrage T1 changed to Rockets apply 35% slow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>Scorn T3 now affects all damage types</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Base ammo reduced from 45 to 40</li></ul>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n')} <ul><li>${html('Kinetic Carbine projectile size reduced by 10%')}</li> <li>${html('Kinetic Carbine cooldown increased from 24s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Kinetic Carbine cooldown increased from 24s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kinetic Carbine speed duration reduced from 4s to 3.5s')}</li> <li>${html('Kinetic Carbine no longer affects channels, cast times or things like Lash&#x27;s Death Slam')}</li> <li>${html('Kinetic Carbine T1 reduced from +0.75s Max Stop duration to +0.5s')}</li> <li>${html('Kinetic Carbine T2 cd reduction increased from -8s to -10s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall T3 silence duration reduced from 3.5s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Paradoxical Swap projectile size reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage now respects line of sight</li><li>Barrage amp effect now shows on Pocket</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base Bullet Resist increased from -15% to 0%</li><li>Base Spirit Resist reduced from 0% to -15%</li></ul>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage-1"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage Amp per stack reduced from 10% to 8%</li><li>Barrage T3 changed to +5% Amp Per Stack</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Fixed the camera moving too slowly after teleporting with Cloak</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n<ul><li>Fixed multiple instances of Static Charge not working correctly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball duration increased from 4s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge-1"><a href="/ability/static-charge">Static Charge</a></h4>\n<ul><li>Static Charge stun delay reduced from 4s to 3.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake base duration reduced from 2.5s to 2.25s</li><li>Stake T1 duration reduced from 1s to 0.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Fixed Splatter direct hits counting as the second hit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Fix Damage prevention after being hit by Viscous&#x27; Goo Ball being reduced by Debuff Reducer</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n')} <ul><li>${html('The Cube cast range increased from 25m to 30m')}</li> <li>${html('The Cube T2 cooldown reduced from -25s to -22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'The Cube T2 cooldown reduced from -25s to -22s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch now deals light melee damage and is affected by melee items</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch-charge-delay">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch Charge Delay change history</a></p>\n<h4 id="puddle-punch-charge-delay"><a href="/ability/puddle-punch">Puddle Punch Charge Delay</a></h4>\n<ul><li>Puddle Punch Charge Delay increased from 0.5s to 1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch Charge Delay'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball-1"><a href="/ability/goo-ball">Goo Ball</a></h4>\n')} <ul><li>${html('Goo Ball duration reduced from 12s to 10s')}</li> <li>${html('Goo Ball T1 duration reduced from +6s to +5s')}</li> <li>${html('Goo Ball cooldown increased from 80s to 90s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 5,
		bulletIndex: 2,
		text: 'Goo Ball cooldown increased from 80s to 90s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Goo Ball now deals 50% damage to bosses')}</li> <li>${html('Goo Ball spirit resist reduced from 80% to 70%')}</li> <li>${html('Goo Ball bullet resist reduced from 70% to 60%')}</li> <li>${html('Goo Ball can now only stun and damage a target once every 1.5s, up from once every 1.0s')}</li> <li>${html('Goo Ball acceleration lowered a bit')}</li> <li>${html('Stunning or immobilizing Viscous now stops the ball from moving, and prevents him from doing damage and stunning')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word no longer drains 1 stamina</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div> <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n')} <ul><li>${html('Alchemical Flask cooldown reduced from 16s to 13s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Alchemical Flask cooldown reduced from 16s to 13s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask T2 changed from -10s Cooldown to Drains 1 Stamina')}</li> <li>${html('Alchemical Flask T3 now also reduces cooldown by -7s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word-1"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word immobilize duration reduced from 2s to 1.75</li><li>Binding Word now has a quick cast behavior (same as Static Charge)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick now has 0.5s cd per cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis T2 duration reduced from +0.75s to +0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div> <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>\n<ul><li>Full Auto T2 changed to Imbues Bullets with +5 Spirit Damage (only affects Wraith)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis-1"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Fixed being able to melee and parry while stunned by Wraith&#x27;s Telekinesis</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Base melee damage increased by 10%</li></ul>\n')} <div class="ability flying-strike">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Strike change history</a></p>\n<h4 id="flying-strike"><a href="/ability/flying-slash">Flying Strike</a></h4>\n<ul><li>Flying Strike T3 now procs after the ability ends, rather than when connecting to the target</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Strike'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_15_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Lifesteal reduced from 40% to 30%</li><li>Fire Rate reduced from 24% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Bullet Shield increased from 175 to 225</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Spirit Power Duration increased from 24s to 35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Fixed gaining stacks much faster than intended when taking damage from troopers</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Lifesteal increased from +26% to 28%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Damage reduced from 100 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 100 to 75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Damage Spirit Power scaling increased from 1.25 to 1.5')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Slow increased from 20% to 25%</li><li>Slow now affects stamina distances</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Healing Reduction reduced from -70% to -50%')}</li> <li>${html('Bleed increased from 2.8% to 3.1%')}</li> <li>${html('Cooldown increased from 25s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown increased from 25s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n')} <ul><li>${html('Duration increased from 4s to 5s')}</li> <li>${html('Cooldown reduced from 30s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 30s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Max Interval improved from 1s to 0.7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Max Bullet Resist increased from 30% to 36%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('No longer provides +10% Fire Rate')}</li> <li>${html('Cooldown increased from 25s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 25s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen increased from 2.7 to 2.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Out of combat regen timer reduced from 13s to 12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Now gives +1 Movement Speed</li><li>No longer gives +2 ammo on kill</li><li>Weapon Damage reduced from +75% to +70%</li><li>Now gives +10% Weapon Damage per kill (up to +50%)</li><li>When you die you lose a stack</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>No longer has +40 Bonus Health</li><li>Now has +40 Bullet Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-booster">${html('\n<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>\n<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>\n<ul><li>Spirit Resist reduced from +7% to +6%</li><li>Bullet Resist reduced from +7% to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n')} <ul><li>${html('Cooldown reduced from 75s to 65s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 75s to 65s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Cast Range increased from 20m to 30m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n<ul><li>Lifesteal increased from 18% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>No longer gives +7% Spirit Resist</li><li>Now gives +50 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Weapon Damage increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Time for Max Damage reduced from 3.5s to 3s (this is a buff)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>HP regen increased from 1 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Heal effectiveness vs non-heroes increased from 25% to 35%</li><li>Heal increased from 45% of melee damage to +55%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Min distance reduced from 18m to 15m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Health increased from +100 to +125</li><li>Spirit Power increased from +8 to +10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Heal effectiveness vs non-heroes increased from 25% to 35%</li><li>Health increased from +70 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Health reduced from +65 to +50</li><li>Now grants +30% Bullet Resistance vs NPCs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 5s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 5s to 6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Fire Rate reduction increased from -30% to -40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>Cast range reduced from 35m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>No longer grants +300 Bullet Shield</li><li>Now grants +15% Bullet Armor</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n<ul><li>Infused ability bonus damage increased from +30 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Spirit Resist increased from 14% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Max Stacks reduced from 20 to 15</li><li>Heal per stack increased from 30 to 40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Weapon Damage increased from 6% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Fire Rate increased from +8% to +12%</li><li>Health increased from +125 to +150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Min distance reduced from 18m to 15m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Reduced active duration from 6s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>You permanently steal 1 stack (45 HP) from the enemy if they die under the debuff. If an enemy you stole a stack from kills you, they regain 1 stack back.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>Now grants +5 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Debuff no longer cancels active mobility spells, it only prevents them from being casted')}</li> <li>${html('Damage reduced from 100 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Damage reduced from 100 to 70'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Cast range reduced from 35m to 25m')}</li> <li>${html('Now also reduces stamina distance by 30%')}</li> <li>${html('Projectile speed increased from 1200 to 1350')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n')} <ul><li>${html('Rebirth Health increased from 40% to 50%')}</li> <li>${html('Cooldown reduced from 240s to 200s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 240s to 200s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Spirit damage increased from 40 to 50</li><li>Debuff increased from -10% Spirit Resist to -12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Non-Imbued ability cd reduction increased from 22% to 24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-duration">${html('\n<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>\n<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>\n<ul><li>Now provides +15% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Duration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Movespeed duration increased from 5s to 6s</li><li>Imbued Spirit increased from +26 to +28</li><li>Now grants +75 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Weapon Damage increased from 16% to 18%</li><li>Bullet Resist increased from 8% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Active Bullet Resist reduced from +60% to +40%</li><li>No longer grants +2 Sprint</li><li>Now gains +8 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_15_mg as default, metadata, readingManifest, toc };
