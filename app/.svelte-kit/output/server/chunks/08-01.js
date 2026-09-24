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
//#region changelogs/2024/08-01.mg?embed=0
function _8_01_mg$9($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/dl_builds-mp4.8588/',
		label: 'dl builds'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=1
function _8_01_mg$8($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/dl_minimap_teleporter-mp4.8589/',
		label: 'dl minimap teleporter'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=2
function _8_01_mg$7($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/dl_minimap_tunnels-mp4.8590/',
		label: 'DL minimap tunnels'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=3
function _8_01_mg$6($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/mid_update-1-mp4.8594/',
		label: 'mid update 1'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=4
function _8_01_mg$5($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/station_update-2-mp4.8595/',
		label: 'station update 2'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=5
function _8_01_mg$4($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/mid_update_2-1-mp4.8596/',
		label: 'mid update 2 1'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=6
function _8_01_mg$3($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/climb_update-1-mp4.8598/',
		label: 'climb update 1'
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=7
function _8_01_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Vindicta',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/08-01.mg?embed=8
function _8_01_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Ammo Scavenger',
			'Berserker',
			'Cold Front',
			'Colossus',
			'Divine Barrier',
			"Diviner's Kevlar",
			'Duration Extender',
			'Echo Shard',
			'Escalating Exposure',
			'Extra Regen',
			'Glass Cannon',
			'Heroic Aura',
			"Hunter's Aura",
			'Inhibitor',
			'Intensifying Magazine',
			'Kinetic Dash',
			'Leech',
			'Lifestrike',
			'Melee Lifesteal',
			'Metal Skin',
			'Monster Rounds',
			'Mystic Shot',
			'Phantom Strike',
			'Point Blank',
			'Rapid Rounds',
			'Reactive Barrier',
			'Refresher',
			'Rescue Beam',
			'Restorative Locket',
			'Return Fire',
			'Ricochet',
			'Silencer',
			'Siphon Bullets',
			'Slowing Bullets',
			'Soul Rebirth',
			'Spirit Strike',
			'Spiritual Overflow',
			'Superior Duration',
			'Surge of Power',
			'Titanic Magazine',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/08-01.mg
var metadata = {
	title: '08-01-2024 Update',
	thread_id: '13369',
	published: '2024-08-01T14:47:26-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added a new hero, Viscous. He's green. Improved client performance Reworked the Hero Builds system. Browsing and editing builds now happens within the Shop UI (accessible via Sandbox or during a normal game). You can create custom categories for items with unique names and descriptions that can be independently resized and positioned. The interface for browsing builds has also been improved, public builds will now be sorted by popularity (number of favorites). Old builds are incompatible with this system, so they won't be visible in this UI, but we'll have a console command we'll release soon that you can use to print out your older guides if you need them for reference. North America (NA) servers have been moved from the west coast to closer to the middle of the country to make latency between east and west coast a little more even, as the majority of users are east coast now. The total average ping amongst all players will be lower as a result of this (a little higher for some and a lot lower for others). NA region testing times now start 1 hour earlier weekdays and weekends Minimum hero roster requirement reduced from 4 to 3 Added Oceanic servers and matchmaking region. Testing times are displayed in the client Added Teleporter icons on the minimap. The icons glow when you get close to them and pulse on the teleporter's exit location to show you the destination when you are about to enter it. When using the underground tunnels, the primary minimap fades out and an underground map for that area shows you your path and the exit locations. Reworked the invite system in the client to streamline the process. Emails are no longer required, the users will now receive access directly through Steam and Discord/Forum access will be available through the client. The UI will now also group users into three categories: available to invite, already invited, and already have access. This new system will result in less invitations stuck in limbo, and any previous invites that have not already claimed the game will be granted through this system as well. Hero Sandbox: Added an orb spawner for practicing last-hitting orbs Hero Sandbox: Added a dummy hero that patrols left and right to practice targeting Added a checkbox on the startup development dialog to be able to choose to not show it again Your vision through a Cosmic Veil is now based on your hero position rather than camera position Adjusted Zipline camera positions for various heroes to help with visibility Double tap threshold increased from 0.2s to 0.3s Fixed Candle Troopers near-death flash sometimes occurring while moving or doing other active animations Candle Trooper behind-wall HUD indicator now also shows near-death state Fixed taking damage not interrupting teleporters Fixed clicking on the top bar or minimap to change spectate targets being unreliable Fixed Function keys (F1-F5) being broken recently and not spectating team mates Fixed various abilities not showing the cast preview correctly on the first use (Mini Turrets, Quantum Entanglement, etc) Fixed Paradox Swap sometimes putting players behind walls Fixed Lash's Ground Strike sometimes causing the hero to be stuck for the rest of the match Fixed Abrams' Charge and Siphon pings not playing the correct VO Fixed Walkers having a pause at the end of their Rocket Barrage Fixed multiple instances of \"Killing Blow\" in the Damage Report Temporarily disabled the audio reminder on being unable to damage the patron while the shrines are alive Fixed Spectral Wall forcing itself into the first ability slot if its cooldown is refreshed Changed camera to more closely track the followed hero angles when watching replays Player names no longer show up above hero's heads when in replay free-cam mode Increased post-game time by 1s Fixed upgrading abilities via hotkeys not working while dead Fixed dead player minimap icons showing over enemy players who are below street level and over shop icons Fixed various bugs with Infernus that caused significant lag Fixed Shrines not having collision Fixed crosshair sometimes being stuck hidden for Yamato after Flying Strike was interrupted Added a bunch of new Ivy lines including updated pings, kill lines, etc Improved mix clarity for game dialog Improved distinction between orb collect and orb deny sounds Fixed various cheat/debug commands being accessible Updated Pocket animations: New crouch walk and aim, updated slide animation, and new firing from slide animation. Updated Mo & Krill Burrow start, duration, and end sounds Updated Mo & Krill Combo sound Updated Mo & Krill Sand Blast cast sound mix Updated Warden Alchemical Flask impact sounds Updated Warden Binding Word sound mix for teammates Updated Pocket Enchanted Satchel cast and delay sounds Added sleep status sound Updated Wraith zipline animations Fixed a bug with Urn that could cause you to be permanently silenced Fixed shop close sounds playing whenever the player enters the radius of a closed shop Added new visual effects for Lash's Ground Strike Improved ground impact effects for Ivy's True Form The client now culls more sounds when they are below a volume threshold The server no longer tells clients to play certain sounds when players and spectators are outside of audible range Shortened weapons and abilities volume attenuation over distance Fixed the console command zoom_sensitivity_ratio affecting both zoomed in and out Replaced two oil trucks with a new vehicle prop Improved visibility of low health state on troopers about to die Fixed Pocket's Cloak being able to tunnel through some ceilings and out of the world Reworked the location of the Walker on Amber Yellow and Sapphire Purple lanes. They are a little further towards the map edges. Nearby terrain has been reworked as well. The shooting experience near corners has been improved. Previously if your hero's eyes were obstructed at all, you would be unable to shoot altogether even if a large portion of your body was clearly visible. The check will now be a little more sophisticated and custom per hero, to allow you to shoot if your body is reasonably exposed. A part of this will also involve your hero leaning out a bit if not enough of your model is exposed to enemies. Soul Orbs now fly out in different initial directions before floating up. There is a 1/3rd chance it goes left, 1/3rd chance it goes right, and 1/3rd chance it goes up. Teleporters are now in pairs that send you between them to traverse the map horizontally Removed outer lane teleporters Added teleporters to areas between lanes (one in each quadrant). Total of 6 teleporters. Old teleport exit location changed to a connection to the street that slopes down to Mid Added connection from the underground teleport station to the outer lane Guardian (previously a juke spot) Added steam tunnel connection from Amber Blue Guardian and Sapphire Orange Guardian to Mid (one-way) Each trooper you shoot at will now consider you a higher priority than Guardians/Walkers; that trooper will stop shooting the Guardians/Walkers and consider you its target for a few seconds Walker laser DPS vs troopers increased from 150 to 190 Parrying a Guardian attack will no longer cause the Guardian to be stunned When Shrines are destroyed the Patron gets more aggressive, moves faster, and does more damage Weakened Patron HP regen increased from 80 to 120 Weakened Patron out of combat delay reduced from 30s to 20s Rejuv bonus reduced from 75% to 50% respawn time reduction Mid Boss health gained per minute increased from 350 to 425 Urn now gives the team that is behind +2 more sprint when carrying it Bullet damage falloff now maxes out at ~60m instead of ~65m Movement Powerup: Stamina regen increased from 20% to 30% Movement Powerup: Sprint speed increased from +2 to +3 Movement Powerup: Zipline bonus increased from 30% to 50% Gun Powerup: Ammo increased from +30% to +40% Powerup durations increased from 150s to 160s Reworked the climb-up exit from the Cosmic Veil space on the outer lanes Moved kiosk cover prop in the outer lanes to space out trooper paths Moved delivery truck out from the street curb near the underground shop Moved breakable idols from the street level juke spots to other locations Removed the tree in front of the Walkers on Amber Orange and Sapphire Blue Replaced some trees on the Amber side with steam vents Moved barrel cover barrier to block the Guardian shop opening on Amber Purple and Sapphire Yellow Raised the sign on the roof of the garage Removed the smoke wall from the end of the alleys Hollow Point Ward: Bonus damage reduced from 25% to 20% Added a new T3 Weapon Item, Pristine Emblem: Gives +25% Weapon Damage, +12 Spirit Power, and +12% Spirit Armor. When an enemy is above 50% HP, you deal an additional +25% Weapon Damage. Health Nova: Bonus HP increased from +50 to +75 Superior Stamina: Fire Rate reduced from 15% to 10% Silence Glyph: Spirit Shield increased from 150 to 225 Torment: Now has a regular cooldown that is reduced by cooldown reduction Abrams Fixed Shoulder Charge not stunning the target when colliding with Kelvin's Ice Dome Fixed some cases where Shoulder Charge did not stun when hitting a wall Fixed enemies being able to double jump out of Seismic Impact Shoulder Charge T3 reduced from +6.5 to +5.5 Weapon Damage Seismic Impact damage reduced from 200 to 175 Bebop Bullet Resistance growth per boon increased from 2% to 2.5% Sticky Bomb now prioritizes enemies over allies Hyper Beam duration now scales with Spirit (0.08) Hyper Beam spirit scaling increased from 2.2 to 2.4 Dynamo Kinetic Pulse width increased from 4m to 4.5m Kinetic Pulse recharge time reduced from 6s to 5s Rejuvenating Aurora regen Spirit Power scaling increased from 0.4 to 0.5 Grey Talon Charged Shot collision size reduced by 10% Guided Owl explosion radius increased from 10m to 12m Guided Owl cooldown reduced from 120s to 110s Haze Bullet damage falloff is now 20% more falloff than default Can now cast Smoke Bomb while on zipline Infernus Fixed Infernus being unable to slide out of Flame Dash Afterburn T1 and T2 Swapped Afterburn base DPS reduced from 18 to 15 Afterburn T3 DPS reduced from 33 to 30 Afterburn spirit scaling increased from 0.4 to 0.5 Kelvin Fixed Arctic Beam not having proper lag compensation Fixed some cases where Frost Grenade would explode and not hit anyone Arctic Beam can now be canceled directly by using parry Frost Grenade cast time reduced from 0.2s to 0.1s Frost Grenade recharge time reduced from 8s to 7s Ice Path sprint is now granted immediately on use Lady Geist Base sprint reduced from 2 to 1 Lash Base sprint reduced from 3 to 1 Ground Strike Damage Per Meter reduced from 6.3 to 6.0 McGinnis Mini Turrets no longer target immune structures Heavy Barrage cast/aim behavior improved for indoors and close range Reverted recent melee damage reduction Fixed Health Nova not working on Mini Turrets (when Health Nova was cast by McGinnis) Mini Turret base HP increased from +50 to +75 Mo & Krill Can now reload while burrowed Paradox Kinetic Carbine Time Slowed targets that were moving before the time slow will now resume their momentum when time slow wears off Bullet (and Kinetic Carbine) projectile speed reduced by 10% Ammo count reduced from 54 to 45 Pocket Affliction damage is dealt over 18s instead of 16s (same total damage, lower DPS) Enchanter's Satchel T3 changed from Disarms for 2.5s to Applies -40% Fire Rate for 4s Seven Static Charge stun duration reduced from 1.25s to 1.1s Static Charge T3 stun duration reduced from 1.25s to 1.1s Static Charge T2 radius increased from +5m to +7m Headshot damage taken reduced by 25% Vindicta Flight cooldown reduced from 45 to 40 Gun damage growth increased from 0.85 to 1.0 Wraith Card Trick post cast time reduced from 0.5s to 0.2s Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot Yamato Power Slash collision size reduced by 10% Bullet damage growth increased from 0.4 to 0.5 Monster Rounds HP Bonus increased from +50 to +65 Rapid Rounds HP Penalty increased from -40 HP to -50 HP Mystic Shot Base Spirit Damage reduced from +70 to +65 Berserker Damage required to earn a stack increased from 100 to 110 Kinetic Dash Now gives 1 HP regen Slowing Bullets Weapon Damage increased from 14% to 16% Hunter's Aura No longer grants +16% Ammo Now grants +150 Health Point Blank Bullet Shield increased from 250 to 300 Weapon Damage increased from 40% to 45% Titanic Magazine Now gives +8% Bullet resistance Heroic Aura Bonus Health increased from +125 to +150 Intensifying Magazine Fixed a bug that allowed you to gain weapon damage without firing Ricochet Bonus Health increased from 100 to 125 Now gives +8% Fire Rate Glass Cannon Weapon Damage increased from 70% to 75% Silencer Cooldown increased from 25s to 34s Siphon Bullets Weapon damage is no longer conditional on 15m, now always gives +40% Weapon Damage (previously gave +45% when close) Spiritual Overflow Now grants +10% Spirit Lifesteal Extra Regen Regen increased from 2.5 to 2.7 Melee Lifesteal Bonus health increased from +50 to +70 Restorative Locket When consuming at max stacks, replenishes target's stamina fully Return Fire Bullet Damage returned increased from 70% to 80% Bonus HP increased from +100 to +125 Divine Barrier Cast range increased from 30m to 35m Now grants +1.5 HP Regen Reactive Barrier Now grants +75 HP Rescue Beam Pull speed is now 25% faster Now grants +2 Sprint Bonus HP increased from +100 to +125 Metal Skin Duration increased from 3s to 3.5s Lifestrike Bullet Resist increased from 6% to 8% Veil Walker Bullet and Spirit Shields increased from 185 to 200 Cooldown reduced from 20s to 18s Weapon Damage increased from 6% to 10% Colossus Bonus HP increased from 500 to 600 Soul Rebirth Cooldown reduction increased from 10% to 15% Phantom Strike Cast range increased from 30m to 35m Inhibitor Debuff duration increased from 2s to 2.5s Leech Now provides +30% Degen Resistance (reduces anti heal effects by 30%) Spirit Strike Spirit Damage increased from 30 to 40 Ammo Scavenger Spirit Power duration increased from 18s to 24s Cold Front Damage reduced from 115 to 100 Spirit Power damage scaling increased from 0.98 to 1.25 Duration Extender Bonus HP increased from 75 to 100 Superior Duration Bonus HP increased from 125 to 175 Surge of Power Imbued Spirit Power increased from +24 to +26 Escalating Exposure First stack no longer does double amp value Now passively applies -12% Spirit Resist when dealing Spirit Damage Refresher Cooldown reduced from 220s to 200s Spirit Resist increased from 12% to 14% Echo Shard Bullet Resist increased from 10% to 16% Diviner's Kevlar Buff duration increased from 12s to 15s",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-07-24',
			to: '2024-08-01'
		},
		after: {
			from: '2024-08-02',
			to: '2024-08-06'
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
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge-1'
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
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 3,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
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
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
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
		title: 'Afterburn',
		id: 'afterburn'
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
		title: 'Arctic Beam',
		id: 'arctic-beam-1'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade-1'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike Damage Per Meter',
		id: 'ground-strike-damage-per-meter'
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
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Can',
		id: 'can'
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
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
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
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight'
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
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
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
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Glass Cannon',
		id: 'glass-cannon'
	},
	{
		level: 2,
		title: 'Heroic Aura',
		id: 'heroic-aura'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
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
		title: 'Return Fire',
		id: 'return-fire'
	},
	{
		level: 2,
		title: 'Ricochet',
		id: 'ricochet'
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
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
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
			from: '2024-07-24',
			to: '2024-08-01'
		},
		after: {
			from: '2024-08-02',
			to: '2024-08-06'
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
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Glass Cannon',
			id: 'glass-cannon'
		},
		{
			kind: 'item',
			name: 'Heroic Aura',
			id: 'heroic-aura'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
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
			name: 'Return Fire',
			id: 'return-fire'
		},
		{
			kind: 'item',
			name: 'Ricochet',
			id: 'ricochet'
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
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
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
			name: 'Veil Walker',
			id: 'veil-walker'
		}
	],
	related: []
};
function _8_01_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a new hero, Viscous. He&#x27;s green.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/8/8606-5e65b8fab4e5d8bfec0c89803747f777.jpg?hash=iAqrn-aLP0" alt="1722549138302"  decoding="async" loading="eager"/></p>\n<ul><li>Improved client performance</li><li>Reworked the Hero Builds system. Browsing and editing builds now happens within the Shop UI (accessible via Sandbox or during a normal game). You can create custom categories for items with unique names and descriptions that can be independently resized and positioned. The interface for browsing builds has also been improved, public builds will now be sorted by popularity (number of favorites). Old builds are incompatible with this system, so they won&#x27;t be visible in this UI, but we&#x27;ll have a console command we&#x27;ll release soon that you can use to print out your older guides if you need them for reference.</li></ul>\n')} `
	);
	_8_01_mg$9($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>North America (NA) servers have been moved from the west coast to closer to the middle of the country to make latency between east and west coast a little more even, as the majority of users are east coast now. The total average ping amongst all players will be lower as a result of this (a little higher for some and a lot lower for others).</li><li>NA region testing times now start 1 hour earlier weekdays and weekends</li><li>Minimum hero roster requirement reduced from 4 to 3</li><li>Added Oceanic servers and matchmaking region. Testing times are displayed in the client</li><li>Added Teleporter icons on the minimap. The icons glow when you get close to them and pulse on the teleporter&#x27;s exit location to show you the destination when you are about to enter it.</li></ul>\n')} `
	);
	_8_01_mg$8($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>When using the underground tunnels, the primary minimap fades out and an underground map for that area shows you your path and the exit locations.</li></ul>\n')} `
	);
	_8_01_mg$7($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Reworked the invite system in the client to streamline the process. Emails are no longer required, the users will now receive access directly through Steam and Discord/Forum access will be available through the client. The UI will now also group users into three categories: available to invite, already invited, and already have access. This new system will result in less invitations stuck in limbo, and any previous invites that have not already claimed the game will be granted through this system as well.</li><li>Hero Sandbox: Added an orb spawner for practicing last-hitting orbs</li><li>Hero Sandbox: Added a dummy hero that patrols left and right to practice targeting</li><li>Added a checkbox on the startup development dialog to be able to choose to not show it again</li><li>Your vision through a Cosmic Veil is now based on your hero position rather than camera position</li><li>Adjusted Zipline camera positions for various heroes to help with visibility</li><li>Double tap threshold increased from 0.2s to 0.3s</li><li>Fixed Candle Troopers near-death flash sometimes occurring while moving or doing other active animations</li><li>Candle Trooper behind-wall HUD indicator now also shows near-death state</li><li>Fixed taking damage not interrupting teleporters</li><li>Fixed clicking on the top bar or minimap to change spectate targets being unreliable</li><li>Fixed Function keys (F1-F5) being broken recently and not spectating team mates</li><li>Fixed various abilities not showing the cast preview correctly on the first use (Mini Turrets, Quantum Entanglement, etc)</li><li>Fixed Paradox Swap sometimes putting players behind walls</li><li>Fixed Lash&#x27;s Ground Strike sometimes causing the hero to be stuck for the rest of the match</li><li>Fixed Abrams&#x27; Charge and Siphon pings not playing the correct VO</li><li>Fixed Walkers having a pause at the end of their Rocket Barrage</li><li>Fixed multiple instances of &quot;Killing Blow&quot; in the Damage Report</li><li>Temporarily disabled the audio reminder on being unable to damage the patron while the shrines are alive</li><li>Fixed Spectral Wall forcing itself into the first ability slot if its cooldown is refreshed</li><li>Changed camera to more closely track the followed hero angles when watching replays</li><li>Player names no longer show up above hero&#x27;s heads when in replay free-cam mode</li><li>Increased post-game time by 1s</li><li>Fixed upgrading abilities via hotkeys not working while dead</li><li>Fixed dead player minimap icons showing over enemy players who are below street level and over shop icons</li><li>Fixed various bugs with Infernus that caused significant lag</li><li>Fixed Shrines not having collision</li><li>Fixed crosshair sometimes being stuck hidden for Yamato after Flying Strike was interrupted</li><li>Added a bunch of new Ivy lines including updated pings, kill lines, etc</li><li>Improved mix clarity for game dialog</li><li>Improved distinction between orb collect and orb deny sounds</li><li>Fixed various cheat/debug commands being accessible</li><li>Updated Pocket animations: New crouch walk and aim, updated slide animation, and new firing from slide animation.</li><li>Updated Mo &amp; Krill Burrow start, duration, and end sounds</li><li>Updated Mo &amp; Krill Combo sound</li><li>Updated Mo &amp; Krill Sand Blast cast sound mix</li><li>Updated Warden Alchemical Flask impact sounds</li><li>Updated Warden Binding Word sound mix for teammates</li><li>Updated Pocket Enchanted Satchel cast and delay sounds</li><li>Added sleep status sound</li><li>Updated Wraith zipline animations</li><li>Fixed a bug with Urn that could cause you to be permanently silenced</li><li>Fixed shop close sounds playing whenever the player enters the radius of a closed shop</li><li>Added new visual effects for Lash&#x27;s Ground Strike</li><li>Improved ground impact effects for Ivy&#x27;s True Form</li><li>The client now culls more sounds when they are below a volume threshold</li><li>The server no longer tells clients to play certain sounds when players and spectators are outside of audible range</li><li>Shortened weapons and abilities volume attenuation over distance</li><li>Fixed the console command zoom_sensitivity_ratio affecting both zoomed in and out</li><li>Replaced two oil trucks with a new vehicle prop</li><li>Improved visibility of low health state on troopers about to die</li><li>Fixed Pocket&#x27;s Cloak being able to tunnel through some ceilings and out of the world</li><li>Reworked the location of the Walker on Amber Yellow and Sapphire Purple lanes. They are a little further towards the map edges. Nearby terrain has been reworked as well.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/8/8600-bec5521cea56fd07b5b4d9a10f29ec7f.jpg?hash=w44NZ_-AdQ" alt="DL Yellow changes"  decoding="async" loading="lazy"/></p>\n<ul><li>The shooting experience near corners has been improved. Previously if your hero&#x27;s eyes were obstructed at all, you would be unable to shoot altogether even if a large portion of your body was clearly visible. The check will now be a little more sophisticated and custom per hero, to allow you to shoot if your body is reasonably exposed. A part of this will also involve your hero leaning out a bit if not enough of your model is exposed to enemies.</li><li>Soul Orbs now fly out in different initial directions before floating up. There is a 1/3rd chance it goes left, 1/3rd chance it goes right, and 1/3rd chance it goes up.</li><li>Teleporters are now in pairs that send you between them to traverse the map horizontally</li><li>Removed outer lane teleporters</li><li>Added teleporters to areas between lanes (one in each quadrant). Total of 6 teleporters.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/8/8602-b267b561ab0628e1cc782e934d30cdac.jpg?hash=ageyfsv0Wt" alt="teleporter locations map"  decoding="async" loading="lazy"/></p>\n<ul><li>Old teleport exit location changed to a connection to the street that slopes down to Mid</li></ul>\n')} `
	);
	_8_01_mg$6($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Added connection from the underground teleport station to the outer lane Guardian (previously a juke spot)</li></ul>\n')} `
	);
	_8_01_mg$5($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Added steam tunnel connection from Amber Blue Guardian and Sapphire Orange Guardian to Mid (one-way)</li></ul>\n')} `
	);
	_8_01_mg$4($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Each trooper you shoot at will now consider you a higher priority than Guardians/Walkers; that trooper will stop shooting the Guardians/Walkers and consider you its target for a few seconds</li><li>Walker laser DPS vs troopers increased from 150 to 190</li><li>Parrying a Guardian attack will no longer cause the Guardian to be stunned</li><li>When Shrines are destroyed the Patron gets more aggressive, moves faster, and does more damage</li><li>Weakened Patron HP regen increased from 80 to 120</li><li>Weakened Patron out of combat delay reduced from 30s to 20s</li><li>Rejuv bonus reduced from 75% to 50% respawn time reduction</li><li>Mid Boss health gained per minute increased from 350 to 425</li><li>Urn now gives the team that is behind +2 more sprint when carrying it</li><li>Bullet damage falloff now maxes out at ~60m instead of ~65m</li><li>Movement Powerup: Stamina regen increased from 20% to 30%</li><li>Movement Powerup: Sprint speed increased from +2 to +3</li><li>Movement Powerup: Zipline bonus increased from 30% to 50%</li><li>Gun Powerup: Ammo increased from +30% to +40%</li><li>Powerup durations increased from 150s to 160s</li><li>Reworked the climb-up exit from the Cosmic Veil space on the outer lanes</li></ul>\n')} `
	);
	_8_01_mg$3($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Moved kiosk cover prop in the outer lanes to space out trooper paths</li><li>Moved delivery truck out from the street curb near the underground shop</li><li>Moved breakable idols from the street level juke spots to other locations</li><li>Removed the tree in front of the Walkers on Amber Orange and Sapphire Blue</li><li>Replaced some trees on the Amber side with steam vents</li><li>Moved barrel cover barrier to block the Guardian shop opening on Amber Purple and Sapphire Yellow</li><li>Raised the sign on the roof of the garage</li><li>Removed the smoke wall from the end of the alleys</li><li>Hollow Point Ward: Bonus damage reduced from 25% to 20%</li><li>Added a new T3 Weapon Item, Pristine Emblem: Gives +25% Weapon Damage, +12 Spirit Power, and +12% Spirit Armor. When an enemy is above 50% HP, you deal an additional +25% Weapon Damage.</li><li>Health Nova: Bonus HP increased from +50 to +75</li><li>Superior Stamina: Fire Rate reduced from 15% to 10%</li><li>Silence Glyph: Spirit Shield increased from 150 to 225</li><li>Torment: Now has a regular cooldown that is reduced by cooldown reduction</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_01_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed Shoulder Charge not stunning the target when colliding with Kelvin&#x27;s Ice Dome</li><li>Fixed some cases where Shoulder Charge did not stun when hitting a wall</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Fixed enemies being able to double jump out of Seismic Impact</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge-1"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge T3 reduced from +6.5 to +5.5 Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact-1"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Seismic Impact damage reduced from 200 to 175')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Seismic Impact damage reduced from 200 to 175'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Bullet Resistance growth per boon increased from 2% to 2.5%</li></ul>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb now prioritizes enemies over allies</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam duration now scales with Spirit (0.08)</li><li>Hyper Beam spirit scaling increased from 2.2 to 2.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse width increased from 4m to 4.5m</li><li>Kinetic Pulse recharge time reduced from 6s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora regen Spirit Power scaling increased from 0.4 to 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Charged Shot collision size reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl explosion radius increased from 10m to 12m')}</li> <li>${html('Guided Owl cooldown reduced from 120s to 110s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Guided Owl cooldown reduced from 120s to 110s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n<ul><li>Bullet damage falloff is now 20% more falloff than default</li></ul>\n')} <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Can now cast Smoke Bomb while on zipline</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Fixed Infernus being unable to slide out of Flame Dash</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T1 and T2 Swapped</li><li>Afterburn base DPS reduced from 18 to 15</li><li>Afterburn T3 DPS reduced from 33 to 30</li><li>Afterburn spirit scaling increased from 0.4 to 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Fixed Arctic Beam not having proper lag compensation</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Fixed some cases where Frost Grenade would explode and not hit anyone</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam-1"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam can now be canceled directly by using parry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade-1"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade cast time reduced from 0.2s to 0.1s</li><li>Frost Grenade recharge time reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path sprint is now granted immediately on use</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero lady-geist">\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Base sprint reduced from 2 to 1</li></ul>\n</div>\n')} <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Base sprint reduced from 3 to 1</li></ul>\n')} <div class="ability ground-strike-damage-per-meter">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike Damage Per Meter change history</a></p>\n<h4 id="ground-strike-damage-per-meter"><a href="/ability/ground-strike">Ground Strike Damage Per Meter</a></h4>\n<ul><li>Ground Strike Damage Per Meter reduced from 6.3 to 6.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike Damage Per Meter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets no longer target immune structures</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Heavy Barrage cast/aim behavior improved for indoors and close range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Reverted recent melee damage reduction</li></ul>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Fixed Health Nova not working on Mini Turrets (when Health Nova was cast by McGinnis)</li><li>Mini Turret base HP increased from +50 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability can">${html('\n<h4 id="can">Can</h4>\n<ul><li>Can now reload while burrowed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Can'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine Time Slowed targets that were moving before the time slow will now resume their momentum when time slow wears off</li><li>Bullet (and Kinetic Carbine) projectile speed reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Ammo count reduced from 54 to 45</li></ul>\n')}</div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction damage is dealt over 18s instead of 16s (same total damage, lower DPS)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel T3 changed from Disarms for 2.5s to Applies -40% Fire Rate for 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n')} <ul><li>${html('Static Charge stun duration reduced from 1.25s to 1.1s')}</li> <li>${html('Static Charge T3 stun duration reduced from 1.25s to 1.1s')}</li> <li>${html('Static Charge T2 radius increased from +5m to +7m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Static Charge T2 radius increased from +5m to +7m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Headshot damage taken reduced by 25%</li></ul>\n')}</div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n')} <ul><li>${html('Flight cooldown reduced from 45 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Flight cooldown reduced from 45 to 40'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Gun damage growth increased from 0.85 to 1.0</li></ul>\n')}</div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick post cast time reduced from 0.5s to 0.2s</li><li>Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash collision size reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage growth increased from 0.4 to 0.5</li></ul>\n')}</div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_01_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Spirit Power duration increased from 18s to 24s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Damage required to earn a stack increased from 100 to 110</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Damage reduced from 115 to 100')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 115 to 100'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit Power damage scaling increased from 0.98 to 1.25')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Bonus HP increased from 500 to 600</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Cast range increased from 30m to 35m</li><li>Now grants +1.5 HP Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Buff duration increased from 12s to 15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item duration-extender">${html('\n<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>\n<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>\n<ul><li>Bonus HP increased from 75 to 100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Duration Extender',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Bullet Resist increased from 10% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>First stack no longer does double amp value</li><li>Now passively applies -12% Spirit Resist when dealing Spirit Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen increased from 2.5 to 2.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Weapon Damage increased from 70% to 75%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n<ul><li>Bonus Health increased from +125 to +150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>No longer grants +16% Ammo</li><li>Now grants +150 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Debuff duration increased from 2s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Fixed a bug that allowed you to gain weapon damage without firing</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>Now gives 1 HP regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Now provides +30% Degen Resistance (reduces anti heal effects by 30%)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Bullet Resist increased from 6% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Bonus health increased from +50 to +70</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n<ul><li>Duration increased from 3s to 3.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>HP Bonus increased from +50 to +65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Base Spirit Damage reduced from +70 to +65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>Cast range increased from 30m to 35m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>Bullet Shield increased from 250 to 300</li><li>Weapon Damage increased from 40% to 45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-rounds">${html('\n<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>\n<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>\n<ul><li>HP Penalty increased from -40 HP to -50 HP</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Now grants +75 HP</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n')} <ul><li>${html('Cooldown reduced from 220s to 200s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Refresher',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 220s to 200s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit Resist increased from 12% to 14%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Pull speed is now 25% faster</li><li>Now grants +2 Sprint</li><li>Bonus HP increased from +100 to +125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>When consuming at max stacks, replenishes target&#x27;s stamina fully</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Bullet Damage returned increased from 70% to 80%</li><li>Bonus HP increased from +100 to +125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Bonus Health increased from 100 to 125</li><li>Now gives +8% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n')} <ul><li>${html('Cooldown increased from 25s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silencer',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 25s to 34s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Weapon damage is no longer conditional on 15m, now always gives +40% Weapon Damage (previously gave +45% when close)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>Weapon Damage increased from 14% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n<ul><li>Cooldown reduction increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Spirit Damage increased from 30 to 40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Now grants +10% Spirit Lifesteal</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-duration">${html('\n<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>\n<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>\n<ul><li>Bonus HP increased from 125 to 175</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Duration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Imbued Spirit Power increased from +24 to +26</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Now gives +8% Bullet resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('Bullet and Spirit Shields increased from 185 to 200')}</li> <li>${html('Cooldown reduced from 20s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 20s to 18s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Weapon Damage increased from 6% to 10%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_01_mg as default, metadata, readingManifest, toc };
