import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/07-11.mg?embed=0
function _7_11_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Ivy',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Vindicta',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/07-11.mg?embed=1
function _7_11_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Ammo Scavenger',
			'Bullet Lifesteal',
			'Burst Fire',
			'Debuff Reducer',
			'Extra Charge',
			'Extra Regen',
			'Fortitude',
			'Frenzy',
			'Glass Cannon',
			'Headshot Booster',
			'Healing Rite',
			'Heroic Aura',
			'Kinetic Dash',
			'Leech',
			'Lifestrike',
			'Long Range',
			'Majestic Leap',
			'Melee Charge',
			'Melee Lifesteal',
			'Mystic Reverb',
			'Phantom Strike',
			'Restorative Shot',
			'Silencer',
			'Spirit Strike',
			'Surge of Power',
			'Titanic Magazine',
			'Unstoppable',
			'Vampiric Burst',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/07-11.mg
var metadata = {
	title: '07-11-2024 Update',
	thread_id: '10871',
	published: '2024-07-11T13:46:25-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Testing schedule now starts 1 hour earlier for all regions EU matchmaking region is now split up into two regions based on language Shop search now highlights the relevant sections of the item tooltip that match the search string you've put in Fixed the Shop search not finding all the types of bonuses an item has Various adjustments to the Damage Report feature Damage Report now shows up by default when dead or spectating Added HUD Notifications on Soul Urn drop off to let depositor know they gained +25% Souls and +1 AP Reworked how cycling through spectators works. Space bar now cycles between all the players. You can now click on the top bar hero icons to jump to a specific hero while spectating You no longer automatically switch to other players when the player you are watching dies Fixed not being able to click on the portrait of a dead hero while spectating Reduced the flash damage effect on heroes to reduce visual noise Added in-world confirmation text when an enemy denies your soul orbs Affliction now has an AoE indicator buildup during cast Affliction now has more toxic elements in the cast and linger Updated Restorative Shot impact and heal effects Updated Phantom Strike effects Updated Restorative Locket effects when casting on an ally Added Grey Talon Charged Shot sound effects Added currency sound effects for receiving small and large amount of souls Added new sound effects to picking up powerups and breakable drops Added a UI sound when entering hero select screen Fixed Vindicta's Stake sometimes moving units that aren't supposed to be moved Fixed Majestic Leap buff sticking around after attaching to zipline (caused audio bugs as well) Fixed Soul Urn walking back while the game is paused Fixed bugs with Guided Owl and pause Fixed the following abilities changing their launch direction if the player snapped their camera quickly during the cast time: Ivy's Kudzu Bomb,  Paradox's Pulse Grenade, Warden's Alchemical Flask, Vindicta's Stake, Alchemical Fire (T3 Weapon item) Fixed some instances of heroes being called by the wrong name Get Started tutorial VO has been replaced and some text has been updated Newsstand now has a lot more world lore news callouts Enabled support for FSR 2 by default Widened the street on the outer side of the factory/mansion Added street curb models around factory and mansion Added street curb overlay around factory and mansion Replaced temp arrows with street sign markings coming out of the mid temple Removed some fake doors to not confuse with juke closets Replaced older stone wall material with newer one in uptown areas Replaced item signs with new poster style and removed item signs on Yellow and Blue lanes Added rooftop smart prop trim where it was missing Reworked the core base area where the Weakened Patron goes. It is now in a low terrain pit and requires attackers be inside the pit to do damage to it. Redesigned exit from the base's regeneration area to the rest of the base Increased Weakened Patron's out of combat (30s) regeneration from 40 to 80 Removed platform blocking line of sight from regeneration area exit to the center Added window in fountain barrier beside exit Added two drop down chutes from fountain to the center Base respawn time increased from 8s to 12s (peak values unchanged) Guardian health increased by 10% Base Guardian health increased by 10% Zipline Boost duration increased from 25s to 32s Urn now grants the Urn Runner +1 AP Urn Runner now gains +2 sprint and is disarmed while carrying the Urn Urn bounty increased from 900 + 200/min to 1500 + 200/min (10 min spawn goes from 2900 to 3500) Urn display on the minimap is now pulsing a green rectangle showing where the destination is if an ally is carrying the urn, and a red rectangle at the destination if an enemy is carrying it Powerup Bonus duration increased from 100s to 130s Movement powerup now grants +20% stamina regeneration Fixed Movement powerup not replenishing stamina on pickup Golden Statues level 2 bonuses spawn time reduced from 25 minutes to 20 minutes Golden Statues Weapon Damage bonus increased from 2% to 3% (level 2 from 3% to 4%) Golden Statues Ammo bonus increased from 3% to 4% (level 2 from 5% to 6%) Capture radius for breakable drops increased very slightly Added an indicator near the reticle when Parry is on cooldown Added a visual effect when the Rejuvenator is attackable Global base Ammo increased by 5% (except for Wraith and Haze) The spawn area's regeneration buff now lingers for 1s Bullet falloff damage now starts at 22m instead of 25m Base Guardian and Shrines bullet resist per nearby hero increased from 40/20/0/0% (for 0/1/2/3 people) to 60/40/20/0% Trooper gold sharing radius from the location of the soul orb increased from 50m to 60m Fixed ability-based lifesteals not granting life from damage caused to shields (affects things like Hyperbeam T3, Siphon, Scorn, Life Drain, Flog and Concussive Combustion T3) Fixed dropping unsecured souls not lowering your net worth Fixed a bug that caused denies during the laning phase to sometimes be shared with allies and sometimes not Some tweaks to how the comeback formula works have been done over the past couple days and we'll continue iterating on it over the coming days Added several upper level juke closets from balconies/awnings and two on rooftops Shortened connection to the underground tunnel from the shop side Adjusted pathing in the underground tunnel to be a little less zig zagging Added more signage to the underground tunnel Redesigned interior of new stairwells beside inner lane Walkers Basic Magazine: Ammo increased from +20% to +24% Sharp Shooter: Min distance reduced from 20m to 18m Health Nova: Now grants +10% weapon damage Debuff Remover: T3 Vitality Item that upgrades from Debuff Reducer. Removes debuffs fully on cast again. Grants +3 m/s for 3s if any debuff is removed. Grants +40% debuff resist, +125 health, +20% weapon damage. Cooldown: 45 Withering Whip: Cast range increased from 15m to 17m Improved Cooldown: Cooldown reduction increased from 12% to 13% Silence Glyph: No longer has +75 health Silence Glyph: Now gives +150 spirit shield Improved Reach: Non-Imbued range increased from +20% to +25% Abrams Shoulder Charge speed increased by 25% Shoulder Charge distance increased by 15% Shoulder Charge now stuns enemies for 1s if it drags them into a wall Infernal Resilience now provides +1 Health Regen Infernal Resilience damage regenerated reduced from 20% to 18% Infernal Resilience T3 changed to +8% damage regenerated Fixed Siphon Life not healing you against shields Dynamo Quantum Entanglement ally radius increased from 8m to 9m Grey Talon Rain of Arrows flight duration reduced from 8s to 7s Guided Owl spirit gain per kill increased from 4 to 5 Guided Owl base ability now stuns for 0.75s Guided Owl base damage reduced from 300 to 250 Guided Owl T1 is now +100 damage Guided Owl collision size reduced Haze Ammo scaling with spirit power reduced from 0.6 to 0.5 Ivy Base damage growth increased from 0.35 to 0.55 Watcher's Covenant replicated healing reduced from 45% to 35% Watcher's Covenant bullet lifesteal now scales with spirit power (0.18) Watcher's Covenant fire rate reduced from 15% to 10% Watcher's Covenant fire rate now scales with spirit power (0.2) Fixed Kudzu Bomb not going where you had targeted if you moved quickly during the cast Lash Base bullet damage reduced from 11.5 to 10 Bullet damage growth increased from 1 to 1.15 Now has +8% spirit resist Ground Strike damage per meter reduced from 6.75 to 6.3 Ground Strike damage per meter spirit power scaling increased from 0.04 to 0.05 Death Slam range is now defined as the horizontal distance to the units rather than the distance from his position in the air (so being high up doesn't work against you) Death Slam range reduced from 19m to 14m Death Slam T1 reduced from +5m to +4m Death Slam cone increased from 60 degrees to 75 Death Slam grab time reduced from 0.9 to 0.8 McGinnis Turrets receive full damage from enemy guns regardless of distance (fall off is not considered when taking damage) Turrets outgoing damage fall off distance window (20m-35m) now scales with range upgrades Turrets duration reduced from 40s to 30s Mo & Krill Fixed Scorn not healing you against shields Sand Blast base duration reduced from 4s to 3.5s Sand Blast T1 reduced from +2s to +1.5s Paradox Fixed Time Wall projectiles and bullets being stuck in the wall for its full duration instead of for the shorter time stop duration Kinetic Carbine collision radius reduced by 10% Fixed Pulse Grenade not going where you had targeted if you moved quickly during the cast Pocket Enchanter's Satchel duration from 1.5s to 2s Enchanter's Satchel T3 changed to 2.5s Disarm Seven Static Charge cast range scaling reduced from 0.1 to 0.07 Static Charge base radius reduced from 8m to 5m Static Charge T2 changed to +5m radius Vindicta Crow Familiar duration spirit power scaling reduced from 0.07 to 0.05 Gun damage growth increased from 0.7 to 0.85 Warden Reload time no longer scales with spirit power Now innately gains additive fire rate from spirit power (scale factor is 0.015) Yamato Shadow Transformation incoming damage reduction reduced from 70% to 55% Shadow Transformation changed from 70% debuff reduction to the same buff as Unstoppable Headshot Booster Bonus health reduced from +50 to +40 Restorative Shot Weapon damage reduced from +8% to +6% Veil Walker Ammo reduced from 15% to 12% Weapon damage reduced from 8% to 6% Long Range Min distance reduced from 20m to 18m Active Reload Added 0.2s grace period where the reload start does not count any button presses Active fire rate increased from 18% to 24% Cooldown reduced from 23s to 21s Kinetic Dash Cooldown reduced from 14s to 12s Melee Charge Bonus health increased from 75 to 100 Burst Fire Now innately gives +12% fire rate Conditional fire rate now only triggers when you hit a hero, this bonus is reduced from 40% to 30% Heroic Aura Lifesteal increased from 16% to 18% Active duration reduced from 8s to 5s Active movement speed increased from 2 to 3 Active fire rate increased from 20% to 25% Titanic Magazine No longer has 10% reload penalty Silencer Now requires Slowing Bullets (total cost from 6500 to 7700) Innately gives 25% slow for 1.3s Active no longer applies 30% slow for 2s Weapon damage reduced from 25% to 15% Frenzy Active spirit resist increased from 30% to 40% Vampiric Burst Active lifesteal increased from 80% to 100% Glass Cannon Weapon damage increased from 65% to 70% Extra Regen Health regen increased from 2 to 2.3 Healing Rite Bonus health increased from 35 to 45 Melee Lifesteal Cooldown reduced from 8s to 7s Bullet Lifesteal Lifesteal increased from 24% to 26% Debuff Reducer Now a T2 Vitality item. Grants +30% debuff resist, +75 health and +10% weapon damage. No longer has an active. Fortitude Health increased from 225 to 250 Majestic Leap Added a brief period before you can press the hotkey again to prevent accidental uses of drop down Lifestrike Now grants +6% bullet resist Phantom Strike Fixed it sometimes malfunctioning and not teleporting to the target Leech Spirit Lifesteal increased from 33% to 35% Bullet Lifesteal increased from 30% to 35% Unstoppable Duration reduced from 9s to 6s No longer grants +20% spirit resist in the active Now grants +15% spirit resist innately Now grants +12 spirit power Now grants +1 m/s Extra Charge Now grants +6% weapon damage Ammo Scavenger Ammo reduced from +20% to +15% Spirit Strike Spirit shield increased from +75 to +85 Surge of Power Active movement speed increased from 2 to 3 Mystic Reverb Cooldown reduced from 8s to 6s Now gives +15% ability range",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-07-05',
			to: '2024-07-11'
		},
		after: {
			from: '2024-07-12',
			to: '2024-07-18'
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
		title: 'Infernal Resilience',
		id: 'infernal-resilience'
	},
	{
		level: 3,
		title: 'Siphon Life',
		id: 'siphon-life'
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
		level: 3,
		title: "Watcher's Covenant",
		id: 'watcher-s-covenant'
	},
	{
		level: 3,
		title: 'Entangling Thorns',
		id: 'entangling-thorns'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike'
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
		title: 'Turrets',
		id: 'turrets'
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
		title: 'Time Wall',
		id: 'time-wall'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
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
		title: 'Crow Familiar',
		id: 'crow-familiar'
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
		title: 'Bullet Lifesteal',
		id: 'bullet-lifesteal'
	},
	{
		level: 2,
		title: 'Burst Fire',
		id: 'burst-fire'
	},
	{
		level: 2,
		title: 'Debuff Reducer',
		id: 'debuff-reducer'
	},
	{
		level: 2,
		title: 'Extra Charge',
		id: 'extra-charge'
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
		title: 'Frenzy',
		id: 'frenzy'
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
		title: 'Mystic Reverb',
		id: 'mystic-reverb'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	},
	{
		level: 2,
		title: 'Silencer',
		id: 'silencer'
	},
	{
		level: 2,
		title: 'Spirit Strike',
		id: 'spirit-strike'
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
			from: '2024-07-05',
			to: '2024-07-11'
		},
		after: {
			from: '2024-07-12',
			to: '2024-07-18'
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
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		},
		{
			kind: 'item',
			name: 'Bullet Lifesteal',
			id: 'bullet-lifesteal'
		},
		{
			kind: 'item',
			name: 'Burst Fire',
			id: 'burst-fire'
		},
		{
			kind: 'item',
			name: 'Debuff Reducer',
			id: 'debuff-reducer'
		},
		{
			kind: 'item',
			name: 'Extra Charge',
			id: 'extra-charge'
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
			name: 'Frenzy',
			id: 'frenzy'
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
			name: 'Mystic Reverb',
			id: 'mystic-reverb'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		},
		{
			kind: 'item',
			name: 'Silencer',
			id: 'silencer'
		},
		{
			kind: 'item',
			name: 'Spirit Strike',
			id: 'spirit-strike'
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
function _7_11_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Testing schedule now starts 1 hour earlier for all regions</li><li>EU matchmaking region is now split up into two regions based on language</li><li>Shop search now highlights the relevant sections of the item tooltip that match the search string you&#x27;ve put in</li><li>Fixed the Shop search not finding all the types of bonuses an item has</li><li>Various adjustments to the Damage Report feature</li><li>Damage Report now shows up by default when dead or spectating</li><li>Added HUD Notifications on Soul Urn drop off to let depositor know they gained +25% Souls and +1 AP</li><li>Reworked how cycling through spectators works. Space bar now cycles between all the players.</li><li>You can now click on the top bar hero icons to jump to a specific hero while spectating</li><li>You no longer automatically switch to other players when the player you are watching dies</li><li>Fixed not being able to click on the portrait of a dead hero while spectating</li><li>Reduced the flash damage effect on heroes to reduce visual noise</li><li>Added in-world confirmation text when an enemy denies your soul orbs</li><li>Affliction now has an AoE indicator buildup during cast</li><li>Affliction now has more toxic elements in the cast and linger</li><li>Updated Restorative Shot impact and heal effects</li><li>Updated Phantom Strike effects</li><li>Updated Restorative Locket effects when casting on an ally</li><li>Added Grey Talon Charged Shot sound effects</li><li>Added currency sound effects for receiving small and large amount of souls</li><li>Added new sound effects to picking up powerups and breakable drops</li><li>Added a UI sound when entering hero select screen</li><li>Fixed Vindicta&#x27;s Stake sometimes moving units that aren&#x27;t supposed to be moved</li><li>Fixed Majestic Leap buff sticking around after attaching to zipline (caused audio bugs as well)</li><li>Fixed Soul Urn walking back while the game is paused</li><li>Fixed bugs with Guided Owl and pause</li><li>Fixed the following abilities changing their launch direction if the player snapped their camera quickly during the cast time: Ivy&#x27;s Kudzu Bomb,  Paradox&#x27;s Pulse Grenade, Warden&#x27;s Alchemical Flask, Vindicta&#x27;s Stake, Alchemical Fire (T3 Weapon item)</li><li>Fixed some instances of heroes being called by the wrong name</li><li>Get Started tutorial VO has been replaced and some text has been updated</li><li>Newsstand now has a lot more world lore news callouts</li><li>Enabled support for FSR 2 by default</li><li>Widened the street on the outer side of the factory/mansion</li><li>Added street curb models around factory and mansion</li><li>Added street curb overlay around factory and mansion</li><li>Replaced temp arrows with street sign markings coming out of the mid temple</li><li>Removed some fake doors to not confuse with juke closets</li><li>Replaced older stone wall material with newer one in uptown areas</li><li>Replaced item signs with new poster style and removed item signs on Yellow and Blue lanes</li><li>Added rooftop smart prop trim where it was missing</li><li>Reworked the core base area where the Weakened Patron goes. It is now in a low terrain pit and requires attackers be inside the pit to do damage to it.</li><li>Redesigned exit from the base&#x27;s regeneration area to the rest of the base</li><li>Increased Weakened Patron&#x27;s out of combat (30s) regeneration from 40 to 80</li><li>Removed platform blocking line of sight from regeneration area exit to the center</li><li>Added window in fountain barrier beside exit</li><li>Added two drop down chutes from fountain to the center</li><li>Base respawn time increased from 8s to 12s (peak values unchanged)</li><li>Guardian health increased by 10%</li><li>Base Guardian health increased by 10%</li><li>Zipline Boost duration increased from 25s to 32s</li><li>Urn now grants the Urn Runner +1 AP</li><li>Urn Runner now gains +2 sprint and is disarmed while carrying the Urn</li><li>Urn bounty increased from 900 + 200/min to 1500 + 200/min (10 min spawn goes from 2900 to 3500)</li><li>Urn display on the minimap is now pulsing a green rectangle showing where the destination is if an ally is carrying the urn, and a red rectangle at the destination if an enemy is carrying it</li><li>Powerup Bonus duration increased from 100s to 130s</li><li>Movement powerup now grants +20% stamina regeneration</li><li>Fixed Movement powerup not replenishing stamina on pickup</li><li>Golden Statues level 2 bonuses spawn time reduced from 25 minutes to 20 minutes</li><li>Golden Statues Weapon Damage bonus increased from 2% to 3% (level 2 from 3% to 4%)</li><li>Golden Statues Ammo bonus increased from 3% to 4% (level 2 from 5% to 6%)</li><li>Capture radius for breakable drops increased very slightly</li><li>Added an indicator near the reticle when Parry is on cooldown</li><li>Added a visual effect when the Rejuvenator is attackable</li><li>Global base Ammo increased by 5% (except for Wraith and Haze)</li><li>The spawn area&#x27;s regeneration buff now lingers for 1s</li><li>Bullet falloff damage now starts at 22m instead of 25m</li><li>Base Guardian and Shrines bullet resist per nearby hero increased from 40/20/0/0% (for 0/1/2/3 people) to 60/40/20/0%</li><li>Trooper gold sharing radius from the location of the soul orb increased from 50m to 60m</li><li>Fixed ability-based lifesteals not granting life from damage caused to shields (affects things like Hyperbeam T3, Siphon, Scorn, Life Drain, Flog and Concussive Combustion T3)</li><li>Fixed dropping unsecured souls not lowering your net worth</li><li>Fixed a bug that caused denies during the laning phase to sometimes be shared with allies and sometimes not</li><li>Some tweaks to how the comeback formula works have been done over the past couple days and we&#x27;ll continue iterating on it over the coming days</li><li>Added several upper level juke closets from balconies/awnings and two on rooftops</li><li>Shortened connection to the underground tunnel from the shop side</li><li>Adjusted pathing in the underground tunnel to be a little less zig zagging</li><li>Added more signage to the underground tunnel</li><li>Redesigned interior of new stairwells beside inner lane Walkers</li><li>Basic Magazine: Ammo increased from +20% to +24%</li><li>Sharp Shooter: Min distance reduced from 20m to 18m</li><li>Health Nova: Now grants +10% weapon damage</li><li>Debuff Remover: T3 Vitality Item that upgrades from Debuff Reducer. Removes debuffs fully on cast again. Grants +3 m/s for 3s if any debuff is removed. Grants +40% debuff resist, +125 health, +20% weapon damage. Cooldown: 45</li><li>Withering Whip: Cast range increased from 15m to 17m</li><li>Improved Cooldown: Cooldown reduction increased from 12% to 13%</li><li>Silence Glyph: No longer has +75 health</li><li>Silence Glyph: Now gives +150 spirit shield</li><li>Improved Reach: Non-Imbued range increased from +20% to +25%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_7_11_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge speed increased by 25%</li><li>Shoulder Charge distance increased by 15%</li><li>Shoulder Charge now stuns enemies for 1s if it drags them into a wall</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience now provides +1 Health Regen</li><li>Infernal Resilience damage regenerated reduced from 20% to 18%</li><li>Infernal Resilience T3 changed to +8% damage regenerated</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Fixed Siphon Life not healing you against shields</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement ally radius increased from 8m to 9m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows flight duration reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl spirit gain per kill increased from 4 to 5')}</li> <li>${html('Guided Owl base ability now stuns for 0.75s')}</li> <li>${html('Guided Owl base damage reduced from 300 to 250')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Guided Owl base damage reduced from 300 to 250'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Guided Owl T1 is now +100 damage')}</li> <li>${html('Guided Owl collision size reduced')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero haze">\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n<ul><li>Ammo scaling with spirit power reduced from 0.6 to 0.5</li></ul>\n</div>\n')} <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Base damage growth increased from 0.35 to 0.55</li></ul>\n')} <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher&#x27;s Covenant replicated healing reduced from 45% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>\n<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>\n<ul><li>Watcher&#x27;s Covenant bullet lifesteal now scales with spirit power (0.18)</li><li>Watcher&#x27;s Covenant fire rate reduced from 15% to 10%</li><li>Watcher&#x27;s Covenant fire rate now scales with spirit power (0.2)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-thorns">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>\n<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>\n<ul><li>Fixed Kudzu Bomb not going where you had targeted if you moved quickly during the cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Base bullet damage reduced from 11.5 to 10</li><li>Bullet damage growth increased from 1 to 1.15</li><li>Now has +8% spirit resist</li></ul>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike damage per meter reduced from 6.75 to 6.3</li><li>Ground Strike damage per meter spirit power scaling increased from 0.04 to 0.05</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam range is now defined as the horizontal distance to the units rather than the distance from his position in the air (so being high up doesn&#x27;t work against you)</li><li>Death Slam range reduced from 19m to 14m</li><li>Death Slam T1 reduced from +5m to +4m</li><li>Death Slam cone increased from 60 degrees to 75</li><li>Death Slam grab time reduced from 0.9 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Turrets receive full damage from enemy guns regardless of distance (fall off is not considered when taking damage)</li><li>Turrets outgoing damage fall off distance window (20m-35m) now scales with range upgrades</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Turrets change history</a></p>\n<h4 id="turrets"><a href="/ability/mini-turret">Turrets</a></h4>\n<ul><li>Turrets duration reduced from 40s to 30s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Turrets'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>Fixed Scorn not healing you against shields</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast base duration reduced from 4s to 3.5s</li><li>Sand Blast T1 reduced from +2s to +1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Fixed Time Wall projectiles and bullets being stuck in the wall for its full duration instead of for the shorter time stop duration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine collision radius reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Fixed Pulse Grenade not going where you had targeted if you moved quickly during the cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel duration from 1.5s to 2s</li><li>Enchanter&#x27;s Satchel T3 changed to 2.5s Disarm</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n')} <ul><li>${html('Static Charge cast range scaling reduced from 0.1 to 0.07')}</li> <li>${html('Static Charge base radius reduced from 8m to 5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Static Charge base radius reduced from 8m to 5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Static Charge T2 changed to +5m radius')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar duration spirit power scaling reduced from 0.07 to 0.05</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Gun damage growth increased from 0.7 to 0.85</li></ul>\n')}</div> ${html('\n<div class="hero warden">\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Reload time no longer scales with spirit power</li><li>Now innately gains additive fire rate from spirit power (scale factor is 0.015)</li></ul>\n</div>\n')} <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation incoming damage reduction reduced from 70% to 55%</li><li>Shadow Transformation changed from 70% debuff reduction to the same buff as Unstoppable</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_7_11_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n')} <ul><li>${html('Added 0.2s grace period where the reload start does not count any button presses')}</li> <li>${html('Active fire rate increased from 18% to 24%')}</li> <li>${html('Cooldown reduced from 23s to 21s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 23s to 21s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Ammo reduced from +20% to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Lifesteal increased from 24% to 26%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n<ul><li>Now innately gives +12% fire rate</li><li>Conditional fire rate now only triggers when you hit a hero, this bonus is reduced from 40% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Now a T2 Vitality item. Grants +30% debuff resist, +75 health and +10% weapon damage. No longer has an active.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-charge">${html('\n<p><a href="/item/extra-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Charge patch history</a></p>\n<h3 id="extra-charge"><a href="/item/extra-charge">Extra Charge</a></h3>\n<ul><li>Now grants +6% weapon damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Health regen increased from 2 to 2.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Health increased from 225 to 250</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Active spirit resist increased from 30% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Weapon damage increased from 65% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Bonus health reduced from +50 to +40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Bonus health increased from 35 to 45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n<ul><li>Lifesteal increased from 16% to 18%</li><li>Active duration reduced from 8s to 5s</li><li>Active movement speed increased from 2 to 3</li><li>Active fire rate increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n')} <ul><li>${html('Cooldown reduced from 14s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 14s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Spirit Lifesteal increased from 33% to 35%</li><li>Bullet Lifesteal increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Now grants +6% bullet resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Min distance reduced from 20m to 18m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Added a brief period before you can press the hotkey again to prevent accidental uses of drop down</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Bonus health increased from 75 to 100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n')} <ul><li>${html('Cooldown reduced from 8s to 7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 8s to 7s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n')} <ul><li>${html('Cooldown reduced from 8s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 8s to 6s'
	});
	$$renderer.push(`<!----></li> <li>${html('Now gives +15% ability range')}</li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>Fixed it sometimes malfunctioning and not teleporting to the target</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Weapon damage reduced from +8% to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Now requires Slowing Bullets (total cost from 6500 to 7700)</li><li>Innately gives 25% slow for 1.3s</li><li>Active no longer applies 30% slow for 2s</li><li>Weapon damage reduced from 25% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Spirit shield increased from +75 to +85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Active movement speed increased from 2 to 3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>No longer has 10% reload penalty</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Duration reduced from 9s to 6s</li><li>No longer grants +20% spirit resist in the active</li><li>Now grants +15% spirit resist innately</li><li>Now grants +12 spirit power</li><li>Now grants +1 m/s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Active lifesteal increased from 80% to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Ammo reduced from 15% to 12%</li><li>Weapon damage reduced from 8% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _7_11_mg as default, metadata, readingManifest, toc };
