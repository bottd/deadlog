import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/07-04.mg?embed=0
function _7_04_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Seven',
			'Vindicta',
			'Warden',
			'Wraith'
		]
	});
}
//#endregion
//#region changelogs/2024/07-04.mg?embed=1
function _7_04_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Berserker',
			'Boundless Spirit',
			'Bullet Lifesteal',
			'Bullet Resist Shredder',
			'Burst Fire',
			'Colossus',
			'Crippling Headshot',
			'Debuff Reducer',
			'Decay',
			"Diviner's Kevlar",
			'Duration Extender',
			'Enduring Speed',
			'Escalating Resilience',
			'Ethereal Shift',
			'Extra Health',
			'Extra Spirit',
			'Extra Stamina',
			'Fortitude',
			'Headshot Booster',
			'Healbane',
			"Hunter's Aura",
			'Improved Spirit',
			'Infuser',
			'Inhibitor',
			'Intensifying Magazine',
			'Knockdown',
			'Leech',
			'Lucky Shot',
			'Majestic Leap',
			'Monster Rounds',
			'Mystic Reverb',
			'Mystic Slow',
			'Point Blank',
			'Quicksilver Reload',
			'Reactive Barrier',
			'Rescue Beam',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Ricochet',
			'Shadow Weave',
			'Silencer',
			'Siphon Bullets',
			'Sprint Boots',
			'Superior Duration',
			'Suppressor',
			'Tesla Bullets',
			'Titanic Magazine',
			'Unstoppable'
		]
	});
}
//#endregion
//#region changelogs/2024/07-04.mg
var metadata = {
	title: '07-04-2024 Update',
	thread_id: '9652',
	published: '2024-07-04T14:16:32-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added Asia servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in China Standard Time (GMT+8). Added South America servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in Atlantic Standard Time (GMT-4). Added a new Damage Report feature. You can now open a flyout panel within the shop to view a breakdown of your hero's incoming and outgoing damage throughout the course of a match. You can also hover an enemy hero to view a quick breakdown of their key stats and items. The data can be filtered by last respawn, 10 minutes, 5 minutes, 3 minutes, 1 minute, or 30 seconds. Reworked the top bar HUD to reduce overall height While spectating or watching replays, the game now has a free cursor mode without needing to hold modifiers down (defaulted to on). Can toggle it off while spectating using the 'J' key. Minimap now displays dead heroes for 5 seconds after their death Reworked the default suggested items for heroes to be much more simple (oriented more strongly for new player onboarding) Parties will now be a little more likely to be in the same lane, if there isn't a wide skill gap or other factors preventing it All instances of collecting souls  (whether claiming your own or denying an opponent) will share the same sound. Being denied a soul orb by an enemy will have its own unique sound. Fixed the HUD cooldown state thrashing while picking up the Soul Urn Fixed Spectral Wall sometimes not spawning depending on the map geometry nearby Added descriptive tooltips to Render and Audio options within settings. Render tooltips include an estimate of performance impact where applicable. Fixed a bug where bullets could penetrate close range targets and hit 2 targets when not intended (was primarily obvious with neutral farming) Reduced the end of match delay from 10s to 4s Added a shatter sound effect for meleeing the mid boss rejuvenator Added ghost models inside the doorways of the juke closets to help clarify which are dead ends Fixed position of the \"All Walkers Destroyed\" Flex slot to be the 2nd slot rather than the 4th Added a sound for when Infernus's Afterburn procs Added rejuvenator pickup sound Minimap now highlights Soul Urn dropoff location Updated Wraith Full Auto cast sound Added audio feedback for environmental damage Fixed sounds associated with last hit playing unreliably Updated sounds for Wraith Card Trick projectile, impact, and when you gain a card Added traffic and construction ambient sounds and updated general ambience mix Urn count changed from 2 to 1 (previous souls value restored) Urn pickup location moved to closer to the outer lanes (on the opposite side of the lane pillar, facing towards the bridge) Urn drop-off location now move to the same spot as the pickup (opposite end of the map, depending on which location the Urn spawns in) Urn pickup time reduced from 4s to 2s Urn now has a 2s drop-off time Urn no longer applies a 15% slow Urn now prevents you from using the zipline while carrying it The person delivering the urn now gets +25% soul bonus Reworked how Powerups work. There are now only 2 locations where they spawn instead of 6 (the two at the strong camps near the middle far edges of the map). The different powerup types are reduced from 6 to 4 and they have been reworked: Powerups now always cycle which ones spawn until they have each spawned, and then they are randomly allocated again Base Guardians and Shrines now have +40% Bullet Resistance. They lose 20% for each enemy hero nearby (down to a minimum of 0% bullet resistance). When they haven't taken damage for 60 seconds, they regenerate 4% max hp per second. Fixed Walkers not using their stomp properly Troopers now deal 25% less damage to other troopers Troopers spawn rate before 10 minutes is now the same as after 10 minutes (30s->25s) Breakables are no longer pre-placed on the map, they now spawn in when they are able to roll for drops (3 minutes) Breakables now use pseudorandom rolls (makes streaks of success or failure less likely) Golden Statue bonuses now have some dynamic weighting based on what has already dropped (makes it less likely that you have too many of one specific bonus over the course of the game) Golden Statue's CD Reduction bonus increased from 0.5% to 0.75% After 25 minutes, the Golden Statue bonuses that drop are slightly stronger: Bullet falloff damage now starts at 25m instead of 27m Inner lane Walker arena (Amber Orange and Sapphire Blue): Added hallway on street level from the warehouse interior to underneath the overpass Reworked stairs for defenders to reach the overpass to start near the Walker and exit with line of sight down the lane Added some juke closets around the map Added some balconies/awnings around the map Shortened the underground tunnels from the Subway entrance side Doorways into the Authority Building and Jazz Club are now offset Moved the new cover barrier in front of the inner lane Guardian closer to the Guardian Basic Magazine: Ammo increased from 15% to 20% Medic Bullets: Renamed to Restorative Shot Superior Stamina: Removed spirit bonus when doing 2x air jumps/dash Superior Stamina: Now grants +8 Spirit Superior Stamina: Now grants +30% Air Dash and Air Jump distance Withering Whip: Now grants +50 Health Improved Burst: No longer applies 50% slow Improved Burst: Now grants +100 Spirit Shield Health Improved Burst: Now grants +12% Weapon Damage Escalating Exposure now has a base of -12% Spirit Resist reduction Abrams Seismic Impact T3 is now Gain +100 Max HP and +15% Fire Rate per enemy hero hit for 25s Bebop Base HP regen reduced from 2 to 1 Hyper Beam cast range increased from 60m to 70m Grey Talon Guided Owl now grants +4 permanent Spirit Power for each hero killed with it Fixed Charged Shot not piercing if it collides with a Mini Turret Haze Smoke Bomb no longer instantly grants sprint Smoke Bomb duration increased from 6s to 8s Smoke Bomb T1 is now -15s CD Smoke Bomb T2 is now +6 Invis Sprint Smoke Bomb T3 is now Gain +30% Bullet Lifesteal for 8s Sleep Dagger T1 changed from +1s Sleep Duration to Drains 1 Stamina Infernus Flame Dash dps linger duration increased from 0.4s to 1s Ivy Fixed some bugs with Watcher's Covenant that caused it to sometimes disconnect/reconnect unintentionally Watcher's Covenant distance threshold to pick a new target increased from 2.5m to 6m Watcher's Covenant can now be cast again on an ally while the buff is active to make it prioritize that hero when possible Kelvin Fixed Frost Grenade not going where you had targeted if you moved quickly during the cast Ice Path T3 bonus now lingers for 6s extra Lash Death Slam time to lock on increased from 0.8s to 0.9s McGinnis Mini Turret damage reduction against troopers/neutrals increased from -30% to -40% Mini Turret damage reduction against objectives increased from -50% to -60% Mini Turret falloff damage increased from -30% to -35% Mini Turret cooldown reduced from 30s to 28s Mini Turret recharge time reduced from 6s to 5s Spectral Wall T1 and T2 swapped Spectral Wall T1 stamina drain reduced from 2 to 1 Mo & Krill Fixed Combo not gaining bonus HP when enemies died during it unless you got the killing blow Health growth per boon reduced from 47 to 44 While burrowed you have the same cast rules as the unborrow phase (i.e. can cast items and Scorn) Seven Static Charge cast range now scales with Spirit (0.1) Vindicta Flight cooldown reduced from 50s to 45s Flight up and down speed improved a bit Warden Binding Word now drains 1 stamina from the target on cast Wraith Project Mind T3 cooldown reduced from -35s to -30s Headshot Booster Cooldown increased from 5s to 7s Fixed the item not visually going on cooldown when it procs Restorative Shot Cooldown increased from 4s to 6s Monster Rounds Damage vs NPCs increased from +30% to +35% Active Reload Cooldown reduced from 25s to 23s Active fire rate bonus increased from 15% to 18% Berserker Weapon Damage per stack reduced from +6% to +5% Titanic Magazine Reload penalty reduced from -15% to -10% Intensifying Magazine Ammo reduced from 30% to 25% Point Blank Now gives +1 Stamina Hunter's Aura Bullet Resist reduction reduced from -15% to -10% Fire Rate slow reduced from -15% to -10% Solo enemy hero case increased from 2x to 3x Burst Fire Slide distance increased from +35% to +50% Tesla Bullets Damage is now affected by falloff Proc chance reduced from 30% to 25% Jump radius reduced from 9m to 8m Escalating Resilience Now gives +14% Ammo Lucky Shot Slow duration reduced from 2s to 1.5s No longer provides +20% Weapon Damage Ricochet Ricochet damage increased from 45% to 50% Silencer Debuff duration reduced from 3s to 2s Crippling Headshot Bullet and Spirit Resist reductions reduced from -30% to -24% Siphon Bullets Steal duration increased from 15s to 20s Sprint Boots Sprint Speed reduced from +3 to +2 Now a component of Enduring Speed Extra Stamina Now provides +10% Stamina Recovery Extra Health Increased from +140 to +150 Enduring Speed Now requires Sprint Boots Now grants +2 Sprint Restorative Locket Can now be cast on allies (30m cast range) Radius on gaining charges increased from 40m to 50m Cooldown increased from 18s to 24s Reactive Barrier Now procs on displacement abilities (e.g. Hook, Paradoxical Swap, Upper Cut) Healbane Debuff duration reduced from 7s to 6s Return Fire Health bonus increased from +75 to +100 Fixed spirit damage returned counting as bullet damage Bullet Lifesteal Increased from 22% to 24% Rescue Beam Cooldown reduced from 40s to 35s Fortitude Duration required to start regenerating reduced from 14s to 13s Majestic Leap Shields no longer prevent the item from being disabled Debuff Reducer The active now reduces the duration of existing debuffs by 80% of their current values. Grants +2m/s for 3s if a debuff was reduced. Passive debuff resistance increased from 30% to 35% Now gives +125 Health Cooldown reduced from 45s to 25s Unstoppable No longer has components (loses slow resist and movespeed bonus) Colossus Cooldown reduced from 65s to 45s Model size increase from 10% to 20% Inhibitor No longer grants +10% Fire Rate Slow reduced from 35% to 25% Leech Spirit Power increased from +7 to +10 Weapon Damage increased from +8% to +12% Bonus Health increased from +125 to +150 Shadow Weave Ambush Fire Rate reduced from +60% to +40% Cooldown increased from 35s to 45s No longer instantly grants sprint Infuser Spirit Power reduced from +18 to +16 Extra Spirit Now gives +25 Health Quicksilver Reload Cooldown increased from 5s to 12s Suppressor Duration reduced from 2.5s to 2s Decay Bleed damage increased from 2.6% of current HP to 2.8% Spirit bonus increased from +5 to +7 Duration Extender Now grants +1.5 hp regen Bullet Resist Shredder Debuff duration increased from 6s to 8s Now gives +5% Bullet Armor Mystic Slow Duration reduced from 2.5s to 2s Superior Duration Imbued duration increased from +30% to +32% Non-imbued duration increased from +22% to +24% Improved Spirit Now grants +75 Health Knockdown Cooldown increased from 30s to 45s Ethereal Shift Cooldown reduced from 30s to 25s Mystic Reverb The target is now slowed by 50% during the 3s delay Diviner's Kevlar Now provides +8% Cooldown Reduction Fixed the duration missing in the tooltip Buff duration increased from 10s to 12s Now grants +700 Spirit Shield and +700 Bullet Shield Boundless Spirit Health Regen increased from +10 to +15 Bonus Health increased from +200 to +300",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-06-28',
			to: '2024-07-04'
		},
		after: {
			from: '2024-07-05',
			to: '2024-07-11'
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
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 3,
		title: 'Charged Shot',
		id: 'charged-shot'
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
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
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
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Death Slam',
		id: 'death-slam'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
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
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Project Mind',
		id: 'project-mind'
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
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Bullet Lifesteal',
		id: 'bullet-lifesteal'
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
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
	},
	{
		level: 2,
		title: 'Debuff Reducer',
		id: 'debuff-reducer'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
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
		title: 'Enduring Speed',
		id: 'enduring-speed'
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
		title: 'Extra Health',
		id: 'extra-health'
	},
	{
		level: 2,
		title: 'Extra Spirit',
		id: 'extra-spirit'
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
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Healbane',
		id: 'healbane'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Improved Spirit',
		id: 'improved-spirit'
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
		title: 'Mystic Slow',
		id: 'mystic-slow'
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
		title: 'Shadow Weave',
		id: 'shadow-weave'
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
		title: 'Sprint Boots',
		id: 'sprint-boots'
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
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-06-28',
			to: '2024-07-04'
		},
		after: {
			from: '2024-07-05',
			to: '2024-07-11'
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
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'item',
			name: 'Active Reload',
			id: 'active-reload'
		},
		{
			kind: 'item',
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Bullet Lifesteal',
			id: 'bullet-lifesteal'
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
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
		},
		{
			kind: 'item',
			name: 'Debuff Reducer',
			id: 'debuff-reducer'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
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
			name: 'Enduring Speed',
			id: 'enduring-speed'
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
			name: 'Extra Health',
			id: 'extra-health'
		},
		{
			kind: 'item',
			name: 'Extra Spirit',
			id: 'extra-spirit'
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
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Healbane',
			id: 'healbane'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Improved Spirit',
			id: 'improved-spirit'
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
			name: 'Mystic Slow',
			id: 'mystic-slow'
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
			name: 'Shadow Weave',
			id: 'shadow-weave'
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
			name: 'Sprint Boots',
			id: 'sprint-boots'
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
		}
	],
	related: []
};
function _7_04_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added Asia servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in China Standard Time (GMT+8).</li><li>Added South America servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in Atlantic Standard Time (GMT-4).</li><li>Added a new Damage Report feature. You can now open a flyout panel within the shop to view a breakdown of your hero&#x27;s incoming and outgoing damage throughout the course of a match. You can also hover an enemy hero to view a quick breakdown of their key stats and items. The data can be filtered by last respawn, 10 minutes, 5 minutes, 3 minutes, 1 minute, or 30 seconds.</li><li>Reworked the top bar HUD to reduce overall height</li><li>While spectating or watching replays, the game now has a free cursor mode without needing to hold modifiers down (defaulted to on). Can toggle it off while spectating using the &#x27;J&#x27; key.</li><li>Minimap now displays dead heroes for 5 seconds after their death</li><li>Reworked the default suggested items for heroes to be much more simple (oriented more strongly for new player onboarding)</li><li>Parties will now be a little more likely to be in the same lane, if there isn&#x27;t a wide skill gap or other factors preventing it</li><li>All instances of collecting souls  (whether claiming your own or denying an opponent) will share the same sound. Being denied a soul orb by an enemy will have its own unique sound.</li><li>Fixed the HUD cooldown state thrashing while picking up the Soul Urn</li><li>Fixed Spectral Wall sometimes not spawning depending on the map geometry nearby</li><li>Added descriptive tooltips to Render and Audio options within settings. Render tooltips include an estimate of performance impact where applicable.</li><li>Fixed a bug where bullets could penetrate close range targets and hit 2 targets when not intended (was primarily obvious with neutral farming)</li><li>Reduced the end of match delay from 10s to 4s</li><li>Added a shatter sound effect for meleeing the mid boss rejuvenator</li><li>Added ghost models inside the doorways of the juke closets to help clarify which are dead ends</li><li>Fixed position of the &quot;All Walkers Destroyed&quot; Flex slot to be the 2nd slot rather than the 4th</li><li>Added a sound for when Infernus&#x27;s Afterburn procs</li><li>Added rejuvenator pickup sound</li><li>Minimap now highlights Soul Urn dropoff location</li><li>Updated Wraith Full Auto cast sound</li><li>Added audio feedback for environmental damage</li><li>Fixed sounds associated with last hit playing unreliably</li><li>Updated sounds for Wraith Card Trick projectile, impact, and when you gain a card</li><li>Added traffic and construction ambient sounds and updated general ambience mix</li><li>Urn count changed from 2 to 1 (previous souls value restored)</li><li>Urn pickup location moved to closer to the outer lanes (on the opposite side of the lane pillar, facing towards the bridge)</li><li>Urn drop-off location now move to the same spot as the pickup (opposite end of the map, depending on which location the Urn spawns in)</li><li>Urn pickup time reduced from 4s to 2s</li><li>Urn now has a 2s drop-off time</li><li>Urn no longer applies a 15% slow</li><li>Urn now prevents you from using the zipline while carrying it</li><li>The person delivering the urn now gets +25% soul bonus</li><li>Reworked how Powerups work. There are now only 2 locations where they spawn instead of 6 (the two at the strong camps near the middle far edges of the map). The different powerup types are reduced from 6 to 4 and they have been reworked:</li><li>Powerups now always cycle which ones spawn until they have each spawned, and then they are randomly allocated again</li><li>Base Guardians and Shrines now have +40% Bullet Resistance. They lose 20% for each enemy hero nearby (down to a minimum of 0% bullet resistance). When they haven&#x27;t taken damage for 60 seconds, they regenerate 4% max hp per second.</li><li>Fixed Walkers not using their stomp properly</li><li>Troopers now deal 25% less damage to other troopers</li><li>Troopers spawn rate before 10 minutes is now the same as after 10 minutes (30s-&gt;25s)</li><li>Breakables are no longer pre-placed on the map, they now spawn in when they are able to roll for drops (3 minutes)</li><li>Breakables now use pseudorandom rolls (makes streaks of success or failure less likely)</li><li>Golden Statue bonuses now have some dynamic weighting based on what has already dropped (makes it less likely that you have too many of one specific bonus over the course of the game)</li><li>Golden Statue&#x27;s CD Reduction bonus increased from 0.5% to 0.75%</li><li>After 25 minutes, the Golden Statue bonuses that drop are slightly stronger:</li><li>Bullet falloff damage now starts at 25m instead of 27m</li><li>Inner lane Walker arena (Amber Orange and Sapphire Blue):</li><li>Added hallway on street level from the warehouse interior to underneath the overpass</li><li>Reworked stairs for defenders to reach the overpass to start near the Walker and exit with line of sight down the lane</li><li>Added some juke closets around the map</li><li>Added some balconies/awnings around the map</li><li>Shortened the underground tunnels from the Subway entrance side</li><li>Doorways into the Authority Building and Jazz Club are now offset</li><li>Moved the new cover barrier in front of the inner lane Guardian closer to the Guardian</li><li>Basic Magazine: Ammo increased from 15% to 20%</li><li>Medic Bullets: Renamed to Restorative Shot</li><li>Superior Stamina: Removed spirit bonus when doing 2x air jumps/dash</li><li>Superior Stamina: Now grants +8 Spirit</li><li>Superior Stamina: Now grants +30% Air Dash and Air Jump distance</li><li>Withering Whip: Now grants +50 Health</li><li>Improved Burst: No longer applies 50% slow</li><li>Improved Burst: Now grants +100 Spirit Shield Health</li><li>Improved Burst: Now grants +12% Weapon Damage</li><li>Escalating Exposure now has a base of -12% Spirit Resist reduction</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_7_04_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact T3 is now Gain +100 Max HP and +15% Fire Rate per enemy hero hit for 25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Base HP regen reduced from 2 to 1</li></ul>\n')} <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam cast range increased from 60m to 70m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl now grants +4 permanent Spirit Power for each hero killed with it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div> <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Fixed Charged Shot not piercing if it collides with a Mini Turret</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb no longer instantly grants sprint</li><li>Smoke Bomb duration increased from 6s to 8s</li><li>Smoke Bomb T1 is now -15s CD</li><li>Smoke Bomb T2 is now +6 Invis Sprint</li><li>Smoke Bomb T3 is now Gain +30% Bullet Lifesteal for 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T1 changed from +1s Sleep Duration to Drains 1 Stamina</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash dps linger duration increased from 0.4s to 1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Fixed some bugs with Watcher&#x27;s Covenant that caused it to sometimes disconnect/reconnect unintentionally</li><li>Watcher&#x27;s Covenant distance threshold to pick a new target increased from 2.5m to 6m</li><li>Watcher&#x27;s Covenant can now be cast again on an ally while the buff is active to make it prioritize that hero when possible</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Fixed Frost Grenade not going where you had targeted if you moved quickly during the cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path T3 bonus now lingers for 6s extra</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam time to lock on increased from 0.8s to 0.9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n')} <ul><li>${html('Mini Turret damage reduction against troopers/neutrals increased from -30% to -40%')}</li> <li>${html('Mini Turret damage reduction against objectives increased from -50% to -60%')}</li> <li>${html('Mini Turret falloff damage increased from -30% to -35%')}</li> <li>${html('Mini Turret cooldown reduced from 30s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Mini Turret cooldown reduced from 30s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Mini Turret recharge time reduced from 6s to 5s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall T1 and T2 swapped</li><li>Spectral Wall T1 stamina drain reduced from 2 to 1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Fixed Combo not gaining bonus HP when enemies died during it unless you got the killing blow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Health growth per boon reduced from 47 to 44</li></ul>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>While burrowed you have the same cast rules as the unborrow phase (i.e. can cast items and Scorn)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n<ul><li>Static Charge cast range now scales with Spirit (0.1)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n')} <ul><li>${html('Flight cooldown reduced from 50s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Flight cooldown reduced from 50s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flight up and down speed improved a bit')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word now drains 1 stamina from the target on cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n')} <ul><li>${html('Project Mind T3 cooldown reduced from -35s to -30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Project Mind T3 cooldown reduced from -35s to -30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_7_04_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n')} <ul><li>${html('Cooldown reduced from 25s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 25s to 23s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Active fire rate bonus increased from 15% to 18%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Weapon Damage per stack reduced from +6% to +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Health Regen increased from +10 to +15</li><li>Bonus Health increased from +200 to +300</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Increased from 22% to 24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>Debuff duration increased from 6s to 8s</li><li>Now gives +5% Bullet Armor</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n<ul><li>Slide distance increased from +35% to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n')} <ul><li>${html('Cooldown reduced from 65s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Colossus',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 65s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Model size increase from 10% to 20%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>Bullet and Spirit Resist reductions reduced from -30% to -24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n')} <ul><li>${html('The active now reduces the duration of existing debuffs by 80% of their current values. Grants +2m/s for 3s if a debuff was reduced.')}</li> <li>${html('Passive debuff resistance increased from 30% to 35%')}</li> <li>${html('Now gives +125 Health')}</li> <li>${html('Cooldown reduced from 45s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown reduced from 45s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Bleed damage increased from 2.6% of current HP to 2.8%</li><li>Spirit bonus increased from +5 to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Now provides +8% Cooldown Reduction</li><li>Fixed the duration missing in the tooltip</li><li>Buff duration increased from 10s to 12s</li><li>Now grants +700 Spirit Shield and +700 Bullet Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item duration-extender">${html('\n<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>\n<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>\n<ul><li>Now grants +1.5 hp regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Duration Extender',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Now requires Sprint Boots</li><li>Now grants +2 Sprint</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Now gives +14% Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Increased from +140 to +150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-spirit">${html('\n<p><a href="/item/extra-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Spirit patch history</a></p>\n<h3 id="extra-spirit"><a href="/item/extra-spirit">Extra Spirit</a></h3>\n<ul><li>Now gives +25 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Now provides +10% Stamina Recovery</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Duration required to start regenerating reduced from 14s to 13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown increased from 5s to 7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 5s to 7s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fixed the item not visually going on cooldown when it procs')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healbane">${html('\n<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>\n<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>\n<ul><li>Debuff duration reduced from 7s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healbane',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Bullet Resist reduction reduced from -15% to -10%</li><li>Fire Rate slow reduced from -15% to -10%</li><li>Solo enemy hero case increased from 2x to 3x</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Now grants +75 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Spirit Power reduced from +18 to +16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>No longer grants +10% Fire Rate</li><li>Slow reduced from 35% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Ammo reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Spirit Power increased from +7 to +10</li><li>Weapon Damage increased from +8% to +12%</li><li>Bonus Health increased from +125 to +150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Slow duration reduced from 2s to 1.5s</li><li>No longer provides +20% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Shields no longer prevent the item from being disabled</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Damage vs NPCs increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>The target is now slowed by 50% during the 3s delay</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Duration reduced from 2.5s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>Now gives +1 Stamina</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n')} <ul><li>${html('Cooldown increased from 5s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 5s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Now procs on displacement abilities (e.g. Hook, Paradoxical Swap, Upper Cut)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n')} <ul><li>${html('Cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n')} <ul><li>${html('Can now be cast on allies (30m cast range)')}</li> <li>${html('Radius on gaining charges increased from 40m to 50m')}</li> <li>${html('Cooldown increased from 18s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown increased from 18s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 4s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 4s to 6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Health bonus increased from +75 to +100</li><li>Fixed spirit damage returned counting as bullet damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Ricochet damage increased from 45% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n')} <ul><li>${html('Ambush Fire Rate reduced from +60% to +40%')}</li> <li>${html('Cooldown increased from 35s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 35s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('No longer instantly grants sprint')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Debuff duration reduced from 3s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Steal duration increased from 15s to 20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sprint-boots">${html('\n<p><a href="/item/sprint-boots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sprint Boots patch history</a></p>\n<h3 id="sprint-boots"><a href="/item/sprint-boots">Sprint Boots</a></h3>\n<ul><li>Sprint Speed reduced from +3 to +2</li><li>Now a component of Enduring Speed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sprint Boots',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-duration">${html('\n<p><a href="/item/superior-duration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Duration patch history</a></p>\n<h3 id="superior-duration"><a href="/item/superior-duration">Superior Duration</a></h3>\n<ul><li>Imbued duration increased from +30% to +32%</li><li>Non-imbued duration increased from +22% to +24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Duration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Duration reduced from 2.5s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Damage is now affected by falloff</li><li>Proc chance reduced from 30% to 25%</li><li>Jump radius reduced from 9m to 8m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Reload penalty reduced from -15% to -10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>No longer has components (loses slow resist and movespeed bonus)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _7_04_mg as default, metadata, readingManifest, toc };
