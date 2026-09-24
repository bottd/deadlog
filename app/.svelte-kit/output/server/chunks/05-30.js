import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/05-30.mg?embed=0
function _5_30_mg$2($$renderer) {
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
			'Lady Geist',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Vindicta',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/05-30.mg?embed=1
function _5_30_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Alchemical Fire',
			'Boundless Spirit',
			'Decay',
			'Enduring Speed',
			'Enduring Spirit',
			'Glass Cannon',
			'Headshot Booster',
			'Knockdown',
			'Leech',
			'Lifestrike',
			'Mystic Reverb',
			'Refresher',
			'Restorative Locket',
			'Shadow Weave',
			'Silencer',
			'Slowing Hex',
			'Spirit Strike',
			'Spiritual Overflow',
			'Suppressor',
			'Swift Striker',
			'Toxic Bullets',
			'Vampiric Burst'
		]
	});
}
//#endregion
//#region changelogs/2024/05-30.mg
var metadata = {
	title: '05-30-2024 Update',
	thread_id: '2514',
	published: '2024-05-30T14:06:51-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Bots will now replace a human player if the player has been disconnected for more than 30 seconds (hero will retreat home first and then after 30 seconds the bot takes over). After 4 minutes it will start using souls to buy items. During laning phase it will go to its assigned lane, afterwards it will aim to stick near where most allies are located. If the player rejoins the bot will leave. We will work on improving the bot behavior as we get feedback. Added a temporary matchmaking ban system for people that leave games Reworked the Watch tab to highlight suggested matches to watch. There is currently a limit on the number of people that can watch the same match, so it'll recommend different games if the best suggestions are full. We are working on removing the spectator limit for a future update. Matches in the watch tab will now indicate if a friend is in that match A paused a game can only be unpaused by the player that paused for the first 30 seconds Once you pause a game, you cannot pause it again within 5 minutes Pause now says the player name pausing it Added a view cone for your player on the minimap to help with finding yourself and the direction you are pointed Added a sound when you receive a chat message Increased the base font size for text chat Increased the duration text chat is visible You can now ping enemy items on the scoreboard to say alert players that the hero has that item. You can now middle mouse click an ability to say its on cooldown You can now alt click your active items to say if they are ready or not Candle Troopers and other NPCS can no longer see or shoot through Cosmic Veils Changed F1-F5 keys to instantly snap to the team mates rather than move there more slowly Adjusted the health bar on Walkers to be easier to see Match found sound now plays regardless of window focus Added option to give fast stamina regen in Hero Sandbox Minimap player icons now dynamically shrink and adjust positions slightly when there are many overlapping Fixed zooming bypassing the shooting speed penalty Added new effects for Shifting Shroud T1 Boss now has quicker melee animations Fixed Turrets causing backdoor protection to be lost Fixed Guided Owl flying while the game is paused Fixed a bug with using Melee in the air that could cause you to move a lot Fixed some sound issues with Pulse Grenade Added new sprint animations for Abrams Various fixes to Lash's Ground Strike visual effects Fixed various bugs and crashes with hero guides Fixed Turrets not proccing things like Mystic Vulnerability Fixed some outdated details on the minimap Grey Talon's Charged Shot effect matches the damage radius better Added visual tell for when Assassinate is active Fixed some bugs that could cause McGinnis gun to be stuck Updated Zipline Boost hint to say ACTIVE when it is active and only show the cooldown timer when its done Fixed an edge case with Unstoppable and a debuff being applied on the same frame Reduced minimum delay before you can press a button again to cancel a channel/precast from 0.5 to 0.2 Fixed getting stuck going up the ramp on the inner lane street Fixed corner neutral camps not burrowing if they lose line of sight Fixed being able to get on top of the tall border building behind the Chapel and behind the Firehouse Lane Guardian HP increased from 3750 to 4600 Various adjustments to lane layout to give defenders more options for forward positions near their Guardian Midlane Walkers HP reduced a little bit to match the same HP as the sidelane Walkers Base Guardians moved a little bit further towards the outside of the base Airborne Heavy Melee now triggers when the charge up is complete, rather than waiting for the player to land on the ground (you had to manually release it before) Airborne Heavy Melee distance increased to match ground version Heavy Melee time reduced from 0.6 to 0.55 (same for Air) Crate powerups can now only spawn after 2 minutes (when the small neutrals spawn) Added breakable crates inside each lane's Cosmic Veil Expanded space in some of the lane's Cosmic Veils Audible distance of enemy footsteps is reduced Special 15 minute melee creep now upgrades again at 25 minutes Base zipline speed increased by 10% Extended inner lane urn bridge buildings toward the T1 and added a doorway to allow defenders to shoot down into the canal Removed 3 bush trees on each inner lane near the urn bridge buildings Carved out interior of inner lane tower buildings beside the Guardian and connected to the neutral camp in the underground areas Moved outer lane Walker on Factory and Mansion sides slightly closer to the stairs Carved out interior of outer lane wall buildings beside the Walker to allow forward position for defenders Reduced width of forward base lookout bridges Basic Magazine: Ammo reduced from +16% to +15% Basic Magazine: Weapon Damage reduced from +16% to +15% Soul Shredder Bullets: Spirit Amp reduced from 14% to 12% Shifting Shroud: Duration increased from 2.75 to 3 Shifting Shroud: Can now be canceled early Shifting Shroud: Cooldown reduced from 55s to 45s Superior Stamina: Spirit buff duration increased from 8s to 12s Curse: Now grants +8 Spirit Abrams Seismic Impact is now faster to play out Seismic Impact now has a very brief busy state upon landing Bebop Hyperbeam width increased from 2.7m to 2.9m Base bullet armor increased from 20% to 24% Dynamo Quantum Entanglement fire rate bonus reduced from 35% to 30% Singularity T1 range increased from +2m to +3m Grey Talon Charge Shot spirit scaling improved from 1 to 1.3 Guided Owl duration increased from 13s to 14s Guided Owl T3 increased from 20% to 22% Guided Owl player collision sized increased to regular sizes for these kind of projectiles Haze Sleep Dagger cooldown increased from 27 to 29 Sleep Dagger spirit scaling increased from 2.2 to 2.5 Smoke Bomb T2 and T3 swapped Smoke Bomb T3 cooldown improved from -20s to -25s Infernus Afterburn T3 reduced from +40 dps to +35 Flame Dash T1 duration reduced from 8s to 7s Flame Dash T1 Fire Rate slow increased from +30% to +35% Flame Dash T2 increased from +40 DPS to +45 Flame Dash T3 increased from -15s to -20s Ivy Kudzu Bomb T3 improved from +50 DPS to +60 Kelvin Base health increased from 550 to 600 Frost Grenade radius increased from 6 to 6.5 Frost Grenade charge time reduced from 10s to 8s Players can now slide down the Ice Path Ice Path slow resistance increased from 50% to 60% Ice Path T3 max spirit increased from 40 to 55 Lady Geist Soul Exchange cast time reduced from 0.5 to 0.2 McGinnis Rocket Barrage now does less damage to objectives similar to other ability damage Mo & Krill Sand Blast no longer affects bosses Paradox Bullet base damage reduced from 8 to 7.2 (indirectly affects Kinetic Carbine) Bullet growth reduced from 0.48 to 0.42 (indirectly affects Kinetic Carbine) Kinetic Carbine damage reduced from +100% to +85% Paradoxical Swap range reduced from 40m to 35m Fixed Paradoxical Swap being able to grab multiple heroes if they were really close to each other Pocket Barrage radius increased from 5m to 6m Barrage cooldown reduced from 35 to 30 Barrage T3 increased from 100% to 150% Flying Cloak speed increased by 7% Flying Cloak T3 increased from +5 damage to +7 Vindicta Now has -10% Base Bullet Resist Flight no longer grants +1 bonus air speed Flight falloff damage increase reduced from +20% to +10% Fixed flight spirit damage being able to pierce Metal Skin Warden Willpower T1 improved from +15% to +20% Last Stand duration increased from 5s to 6s Wraith Project Mind cooldown reduced from 50s to 45s Yamato Power Slash spirit scaling improved from 1.6 to 2.0 Power Slash no longer does a very minor movement on enemies hit Fixed Power Slash sometimes not being a full charge when channeled fully during the Shadow Transformation Shadow Transformation's ability speedup now affects the post-cast durations as well Shadow Transformation's ability speedup now improves the visual animations (cosmetic only change) Headshot Booster Cooldown reduced from 9s to 5s Spirit Strike Health Regen increased from 0.7 to 1 Enduring Spirit No longer provides +1 Sprint +10% Spirit Lifesteal Slowing Hex Cooldown increased from 25 to 27 Restorative Locket Spirit increased from +4 to +5 Decay Cast range now scales with Spirit (0.2 factor) Suppressor Fire rate slow increased from 30% to 35% Enduring Speed Move Speed increased from +1.25 to +1.4 Swift Striker Bullet Resist penalty reduced from -8% to -7% Alchemical Fire Now grants +5 Spirit Bullet Shield Health increased from +150 to +175 Cooldown reduced from 37 to 34 Knockdown Cooldown reduced from 50s to 40s Lifestrike Melee damage increased from +35% to +40% Toxic Bullets Now deals half damage against troopers and neutrals Leech No longer gives +8 Spirit Glass Cannon Weapon Damage reduced from +70% to +65% Mystic Reverb No longer stops the echo if the target dies Vampiric Burst Duration reduced from 5s to 4.5s Lifesteal increased from 60% to 70% Shadow Weave Invis Sprint increased from +3 to +5 Refresher Spirit Resist increased from +10% to +12% Silencer Ammo increased from +15% to +20% Spiritual Overflow Spirit bonus increased from 30 to 35 Boundless Spirit Spirit increased from +40 to +45",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-25',
			to: '2024-05-30'
		},
		after: {
			from: '2024-05-31',
			to: '2024-06-01'
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
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
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
		title: 'Charge Shot',
		id: 'charge-shot'
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
		title: 'Afterburn',
		id: 'afterburn'
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
		title: 'Kudzu Bomb',
		id: 'kudzu-bomb'
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
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Soul Exchange',
		id: 'soul-exchange'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Rocket Barrage',
		id: 'rocket-barrage'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Sand Blast',
		id: 'sand-blast'
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
		title: 'Flying Cloak',
		id: 'flying-cloak'
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
		title: 'Willpower',
		id: 'willpower'
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
		title: 'Project Mind',
		id: 'project-mind'
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
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Alchemical Fire',
		id: 'alchemical-fire'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Enduring Speed',
		id: 'enduring-speed'
	},
	{
		level: 2,
		title: 'Enduring Spirit',
		id: 'enduring-spirit'
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
		title: 'Mystic Reverb',
		id: 'mystic-reverb'
	},
	{
		level: 2,
		title: 'Refresher',
		id: 'refresher'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
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
		title: 'Slowing Hex',
		id: 'slowing-hex'
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
		title: 'Suppressor',
		id: 'suppressor'
	},
	{
		level: 2,
		title: 'Swift Striker',
		id: 'swift-striker'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	},
	{
		level: 2,
		title: 'Vampiric Burst',
		id: 'vampiric-burst'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-25',
			to: '2024-05-30'
		},
		after: {
			from: '2024-05-31',
			to: '2024-06-01'
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
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Enduring Speed',
			id: 'enduring-speed'
		},
		{
			kind: 'item',
			name: 'Enduring Spirit',
			id: 'enduring-spirit'
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
			name: 'Mystic Reverb',
			id: 'mystic-reverb'
		},
		{
			kind: 'item',
			name: 'Refresher',
			id: 'refresher'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
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
			name: 'Slowing Hex',
			id: 'slowing-hex'
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
			name: 'Suppressor',
			id: 'suppressor'
		},
		{
			kind: 'item',
			name: 'Swift Striker',
			id: 'swift-striker'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		},
		{
			kind: 'item',
			name: 'Vampiric Burst',
			id: 'vampiric-burst'
		}
	],
	related: []
};
function _5_30_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Bots will now replace a human player if the player has been disconnected for more than 30 seconds (hero will retreat home first and then after 30 seconds the bot takes over). After 4 minutes it will start using souls to buy items. During laning phase it will go to its assigned lane, afterwards it will aim to stick near where most allies are located. If the player rejoins the bot will leave. We will work on improving the bot behavior as we get feedback.</li><li>Added a temporary matchmaking ban system for people that leave games</li><li>Reworked the Watch tab to highlight suggested matches to watch. There is currently a limit on the number of people that can watch the same match, so it&#x27;ll recommend different games if the best suggestions are full. We are working on removing the spectator limit for a future update.</li><li>Matches in the watch tab will now indicate if a friend is in that match</li><li>A paused a game can only be unpaused by the player that paused for the first 30 seconds</li><li>Once you pause a game, you cannot pause it again within 5 minutes</li><li>Pause now says the player name pausing it</li><li>Added a view cone for your player on the minimap to help with finding yourself and the direction you are pointed</li><li>Added a sound when you receive a chat message</li><li>Increased the base font size for text chat</li><li>Increased the duration text chat is visible</li><li>You can now ping enemy items on the scoreboard to say alert players that the hero has that item.</li><li>You can now middle mouse click an ability to say its on cooldown</li><li>You can now alt click your active items to say if they are ready or not</li><li>Candle Troopers and other NPCS can no longer see or shoot through Cosmic Veils</li><li>Changed F1-F5 keys to instantly snap to the team mates rather than move there more slowly</li><li>Adjusted the health bar on Walkers to be easier to see</li><li>Match found sound now plays regardless of window focus</li><li>Added option to give fast stamina regen in Hero Sandbox</li><li>Minimap player icons now dynamically shrink and adjust positions slightly when there are many overlapping</li><li>Fixed zooming bypassing the shooting speed penalty</li><li>Added new effects for Shifting Shroud</li><li>T1 Boss now has quicker melee animations</li><li>Fixed Turrets causing backdoor protection to be lost</li><li>Fixed Guided Owl flying while the game is paused</li><li>Fixed a bug with using Melee in the air that could cause you to move a lot</li><li>Fixed some sound issues with Pulse Grenade</li><li>Added new sprint animations for Abrams</li><li>Various fixes to Lash&#x27;s Ground Strike visual effects</li><li>Fixed various bugs and crashes with hero guides</li><li>Fixed Turrets not proccing things like Mystic Vulnerability</li><li>Fixed some outdated details on the minimap</li><li>Grey Talon&#x27;s Charged Shot effect matches the damage radius better</li><li>Added visual tell for when Assassinate is active</li><li>Fixed some bugs that could cause McGinnis gun to be stuck</li><li>Updated Zipline Boost hint to say ACTIVE when it is active and only show the cooldown timer when its done</li><li>Fixed an edge case with Unstoppable and a debuff being applied on the same frame</li><li>Reduced minimum delay before you can press a button again to cancel a channel/precast from 0.5 to 0.2</li><li>Fixed getting stuck going up the ramp on the inner lane street</li><li>Fixed corner neutral camps not burrowing if they lose line of sight</li><li>Fixed being able to get on top of the tall border building behind the Chapel and behind the Firehouse</li><li>Lane Guardian HP increased from 3750 to 4600</li><li>Various adjustments to lane layout to give defenders more options for forward positions near their Guardian</li><li>Midlane Walkers HP reduced a little bit to match the same HP as the sidelane Walkers</li><li>Base Guardians moved a little bit further towards the outside of the base</li><li>Airborne Heavy Melee now triggers when the charge up is complete, rather than waiting for the player to land on the ground (you had to manually release it before)</li><li>Airborne Heavy Melee distance increased to match ground version</li><li>Heavy Melee time reduced from 0.6 to 0.55 (same for Air)</li><li>Crate powerups can now only spawn after 2 minutes (when the small neutrals spawn)</li><li>Added breakable crates inside each lane&#x27;s Cosmic Veil</li><li>Expanded space in some of the lane&#x27;s Cosmic Veils</li><li>Audible distance of enemy footsteps is reduced</li><li>Special 15 minute melee creep now upgrades again at 25 minutes</li><li>Base zipline speed increased by 10%</li><li>Extended inner lane urn bridge buildings toward the T1 and added a doorway to allow defenders to shoot down into the canal</li><li>Removed 3 bush trees on each inner lane near the urn bridge buildings</li><li>Carved out interior of inner lane tower buildings beside the Guardian and connected to the neutral camp in the underground areas</li><li>Moved outer lane Walker on Factory and Mansion sides slightly closer to the stairs</li><li>Carved out interior of outer lane wall buildings beside the Walker to allow forward position for defenders</li><li>Reduced width of forward base lookout bridges</li><li>Basic Magazine: Ammo reduced from +16% to +15%</li><li>Basic Magazine: Weapon Damage reduced from +16% to +15%</li><li>Soul Shredder Bullets: Spirit Amp reduced from 14% to 12%</li><li>Shifting Shroud: Duration increased from 2.75 to 3</li><li>Shifting Shroud: Can now be canceled early</li><li>Shifting Shroud: Cooldown reduced from 55s to 45s</li><li>Superior Stamina: Spirit buff duration increased from 8s to 12s</li><li>Curse: Now grants +8 Spirit</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_30_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact is now faster to play out</li><li>Seismic Impact now has a very brief busy state upon landing</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam width increased from 2.7m to 2.9m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base bullet armor increased from 20% to 24%</li></ul>\n')}</div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement fire rate bonus reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity T1 range increased from +2m to +3m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charge-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charge Shot change history</a></p>\n<h4 id="charge-shot"><a href="/ability/charged-shot">Charge Shot</a></h4>\n<ul><li>Charge Shot spirit scaling improved from 1 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charge Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl duration increased from 13s to 14s</li><li>Guided Owl T3 increased from 20% to 22%</li><li>Guided Owl player collision sized increased to regular sizes for these kind of projectiles</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n')} <ul><li>${html('Sleep Dagger cooldown increased from 27 to 29')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Sleep Dagger cooldown increased from 27 to 29'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sleep Dagger spirit scaling increased from 2.2 to 2.5')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n')} <ul><li>${html('Smoke Bomb T2 and T3 swapped')}</li> <li>${html('Smoke Bomb T3 cooldown improved from -20s to -25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Smoke Bomb T3 cooldown improved from -20s to -25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T3 reduced from +40 dps to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash T1 duration reduced from 8s to 7s</li><li>Flame Dash T1 Fire Rate slow increased from +30% to +35%</li><li>Flame Dash T2 increased from +40 DPS to +45</li><li>Flame Dash T3 increased from -15s to -20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability kudzu-bomb">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>\n<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>\n<ul><li>Kudzu Bomb T3 improved from +50 DPS to +60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Base health increased from 550 to 600</li></ul>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade radius increased from 6 to 6.5')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Frost Grenade radius increased from 6 to 6.5'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frost Grenade charge time reduced from 10s to 8s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Players can now slide down the Ice Path</li><li>Ice Path slow resistance increased from 50% to 60%</li><li>Ice Path T3 max spirit increased from 40 to 55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange cast time reduced from 0.5 to 0.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability rocket-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rocket Barrage change history</a></p>\n<h4 id="rocket-barrage"><a href="/ability/heavy-barrage">Rocket Barrage</a></h4>\n<ul><li>Rocket Barrage now does less damage to objectives similar to other ability damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Rocket Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast no longer affects bosses</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n')} <ul><li>${html('Bullet base damage reduced from 8 to 7.2 (indirectly affects Kinetic Carbine)')}</li> <li>${html('Bullet growth reduced from 0.48 to 0.42 (indirectly affects Kinetic Carbine)')}</li> <li>${html('Kinetic Carbine damage reduced from +100% to +85%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Kinetic Carbine damage reduced from +100% to +85%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Paradoxical Swap range reduced from 40m to 35m</li><li>Fixed Paradoxical Swap being able to grab multiple heroes if they were really close to each other</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n')} <ul><li>${html('Barrage radius increased from 5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Barrage radius increased from 5m to 6m'
	});
	$$renderer.push(`<!----></li> <li>${html('Barrage cooldown reduced from 35 to 30')} `);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Barrage cooldown reduced from 35 to 30'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Barrage T3 increased from 100% to 150%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak speed increased by 7%</li><li>Flying Cloak T3 increased from +5 damage to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Now has -10% Base Bullet Resist</li></ul>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight no longer grants +1 bonus air speed</li><li>Flight falloff damage increase reduced from +20% to +10%</li><li>Fixed flight spirit damage being able to pierce Metal Skin</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n<ul><li>Willpower T1 improved from +15% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n')} <ul><li>${html('Project Mind cooldown reduced from 50s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Project Mind cooldown reduced from 50s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash spirit scaling improved from 1.6 to 2.0</li><li>Power Slash no longer does a very minor movement on enemies hit</li><li>Fixed Power Slash sometimes not being a full charge when channeled fully during the Shadow Transformation</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation&#x27;s ability speedup now affects the post-cast durations as well</li><li>Shadow Transformation&#x27;s ability speedup now improves the visual animations (cosmetic only change)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_30_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n')} <ul><li>${html('Now grants +5 Spirit')}</li> <li>${html('Bullet Shield Health increased from +150 to +175')}</li> <li>${html('Cooldown reduced from 37 to 34')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 37 to 34'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Spirit increased from +40 to +45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Cast range now scales with Spirit (0.2 factor)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Move Speed increased from +1.25 to +1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-spirit">${html('\n<p><a href="/item/enduring-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_armor/resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Spirit patch history</a></p>\n<h3 id="enduring-spirit"><a href="/item/enduring-spirit">Enduring Spirit</a></h3>\n<ul><li>No longer provides +1 Sprint</li><li>+10% Spirit Lifesteal</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Weapon Damage reduced from +70% to +65%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown reduced from 9s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 9s to 5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n')} <ul><li>${html('Cooldown reduced from 50s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 50s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>No longer gives +8 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Melee damage increased from +35% to +40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>No longer stops the echo if the target dies</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Spirit Resist increased from +10% to +12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Spirit increased from +4 to +5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Invis Sprint increased from +3 to +5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Ammo increased from +15% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Cooldown increased from 25 to 27')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 25 to 27'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Health Regen increased from 0.7 to 1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Spirit bonus increased from 30 to 35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Fire rate slow increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item swift-striker">${html('\n<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>\n<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>\n<ul><li>Bullet Resist penalty reduced from -8% to -7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Swift Striker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Now deals half damage against troopers and neutrals</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Duration reduced from 5s to 4.5s</li><li>Lifesteal increased from 60% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_30_mg as default, metadata, readingManifest, toc };
