import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/07-18.mg?embed=0
function _7_18_mg$2($$renderer) {
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
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Paradox',
			'Pocket',
			'Seven'
		]
	});
}
//#endregion
//#region changelogs/2024/07-18.mg?embed=1
function _7_18_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Ammo Scavenger',
			'Berserker',
			'Bullet Lifesteal',
			'Burst Fire',
			'Debuff Reducer',
			'Divine Barrier',
			"Diviner's Kevlar",
			'Echo Shard',
			'Escalating Exposure',
			'Escalating Resilience',
			'Ethereal Shift',
			'Extra Health',
			'Extra Regen',
			'Extra Stamina',
			'Fleetfoot',
			'Fortitude',
			'Frenzy',
			'Headshot Booster',
			'Healbane',
			'Healing Rite',
			'Improved Spirit',
			'Infuser',
			'Kinetic Dash',
			'Knockdown',
			'Leech',
			'Lifestrike',
			'Majestic Leap',
			'Melee Lifesteal',
			'Mystic Reverb',
			'Mystic Shot',
			'Phantom Strike',
			'Point Blank',
			'Rapid Recharge',
			'Rescue Beam',
			'Restorative Shot',
			'Ricochet',
			'Shadow Weave',
			'Sharpshooter',
			'Silencer',
			'Siphon Bullets',
			'Slowing Hex',
			'Spirit Lifesteal',
			'Spirit Strike',
			'Superior Cooldown',
			'Surge of Power',
			'Titanic Magazine',
			'Torment Pulse',
			'Vampiric Burst',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/07-18.mg
var metadata = {
	title: '07-18-2024 Update',
	thread_id: '11831',
	published: '2024-07-18T14:44:15-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Accounts that are banned for cheating will now have all their invited accounts banned as well The Damage Report's Damage List now aggregates damage from all units, and displays both hero and ability icons You can view per-hero damage in the Damage Report by hovering the damage type breakdown above each hero portrait Added a 'Compact' Damage Report mode that shows less information but takes up less space.  This is the default after dying. Clicking the top bar will now toggle the Damage Report between minimized, compact, and full view Opening the shop now always minimizes the Damage Report Updated effects on Pocket effects to improve visibility Added new cast effect for Grey Talon's Guided Owl Updated effects for heavy melee Updated bullet resist debuff effects Added new Cold Front visual effects Added new Echo Shard visual effects Added new Refresher visual effects Added Knockdown select, cast, delay, and impact sound effects Added Warden Alchemical Flask cast, projectile, and impact sound effects Raised volume of Wraith Card Trick charge up sound effect Raised volume of party invite, join, and roster select sound effects Guardians now fade out from the world 10 seconds after dying Fixed a bug that allowed you to shoot through walls Fixed a bug where Infernus could get stuck in his Flame Dash pose Fixed a speed exploit with Infernus Flame Dash Fixed a bug that allowed your gun to be very accurate while holding tab Reverted a change from last update to Warden's Alchemical Flask – it now launches where the reticle is aiming at the end of the cast Reworked building just outside Amber's base in the Yellow lane to match Sapphire Purple Started replacing older style rollup doors with new ones with larger dimensions Improved game startup time ALT+SPACE can now be used to select the previous player when spectating Changed spectator camera to not force itself into roaming mode for up/down key pressed (forward/back/side only) Added additional voice lines for Abrams Removed voice lines / fixed text that referenced the urn being delivered to the temple Added Midboss arrive, low health, and death sound effects Removed pause cooldown while in Sandbox Added a small delay so kill lines play after death sound effects rather than under them Reworked the mid temple area as well adding various different entrances to it Reworked the upper mid temple area and the drop down entrances to the bottom pit Changed the neutrals in the top mid temple area to a strong, a medium and a small creep (2 of these) The bridges are now a bit wider and have higher side walls that reduce extended line of sight Base entrance window area can no longer be invaded from the outside by double jumping Reduced the front entrances to the two single story buildings from 2 to 1 (entrances are larger) Added more juke spots Removed the long fx trail from unsecured souls on your hero so it doesn't give away your position when juking/hiding Sounds occluded by level geometry will now be quieter Powerup spawn locations moved to the bridges Powerup buff duration increased from 130s to 150s Golden Statues level 2 drops now happen at 15 minutes instead of 20 Increased golden statue drop chance by 4% Guardian HP increased by 10% Guardian melee no longer does a double instant melee attack sometimes Guardian melee attack no longer has a splash range much larger than its visuals Walker in mid lanes health increased by 12% Walker stomp can no longer be dodged with double jump Walker stomp area increased a bit Weakened Patron health increased by 20% Mid Boss starting health increased from 4500 to 5000 Mid Boss health gained per minute increased from 200 to 275 Rejuv drop time reduced from 12.5s to 9s Midboss makes a global sound when at 35% hp Reworked comeback formula to be less weighted towards team vs team net worth and more towards the net worth of the dying hero compared to the average of your team (regardless if your team is leading or not) Base ammo increased by 5% (except for Haze and Wraith) T2 items cost increased from 1200 to 1250 T4 Items cost reduced from 6500 to 6300 Vitality base health bonus increased from 8/12/16/20% to 11/14/17/20% Can no longer use the Teleporter while carrying the Urn Teleporter now has the same damage rules as zipline (DoT no longer prevents usage) Cooldown reduction now stacks diminishingly Reduced the momentum coming off of the zipline a bit Rapid Rounds (new T1 Weapon item): +12% Fire Rate, +1 Sprint, -40 HP Health Nova: Cooldown reduced from 65s to 60s Health Nova: Now heals over 2s instead of 3s Superior Stamina: Air Jump/Dash Distance increased from +30% to +50% Soul Rebirth (new T4 Vitality item): After you die, you will respawn in 4 seconds where you died with 40% of your Max Health. Cooldown: 220s. Also innately grants +20% Weapon Damage and +10% Cooldown Reduction. Improved Cooldown: Cooldown Reduction increased from +13% to +14% Withering Whip: Cast Range increased from 17m to 18m Silence Glyph: Now grants +2 Sprint Silence Glyph: Now reduces Spirit Resist instead of providing Spirit Amplification Curse: No longer grants +20% Ammo Abrams Shoulder Charge now considers Spectral Wall and Frozen Shelter as walls Infernal Resilience duration to regen increased from 14s to 16s (this is a nerf) Infernal Resilience damage regenerated reduced from 18% to 17% Infernal Resilience T3 increased from +8% to +9% Improved reliability of Seismic Impact Seismic Impact base radius increased from 6m to 9m Seismic Impact T1 changed from +4m Impact Radius to -40s Cooldown Seismic Impact T3 moved to T2 (was -70s Cooldown) Seismic Impact T3 is now Gains Unstoppable while in air and 3s after landing Bebop Base HP regen increased from 1 to 2.5 No longer has 24% base bullet resistance Now gains +2% Bullet Resistance per boon (happens 11 times) Hook speed reduced from 3000 to 2850 Uppercut horizontal distance knockback on enemy heroes is reduced from 25m to 20m Fixed enemies being able to use heavy melee to cancel Uppercut's momentum Hyperbeam is now very wide in the area right in front of the hero, then narrows into the current size a few meters away Hyperbeam Spirit Power damage scaling increased from 1.96 to 2.2 Hyperbeam T2 increased from +120 to +140 Dynamo Gun damage growth increased from 0.8 to 0.9 Kinetic Pulse spirit power scaling increased from 1.2 to 1.4 Singularity duration reduced from 3 to 2.75 Grey Talon Charged Shot damage reduced from 115 to 105 Charged Shot spirit scaling increased from 1.3 to 1.6 Haze Sleep Dagger min sleep time reduced from 0.3 to 0.2 Sleep Dagger wake-up time reduced from 0.15 to 0.1 Sleep Dagger projectile size reduced by 10% Fixation T1 and T2 swapped Fixation damage per stack reduced from 0.25 to 0.2 Bullet Dance fire rate increased from +20% to +25% Bullet Dance radius increased from 14m to 15m Ivy Base damage reduced from 5.0 to 4.5 Kudzu Bomb DPS spirit scaling increased from 0.4 to 0.6 Watcher's Covenant replicated healing reduced from 35% to 30% Kelvin Frost Grenade cooldown reduced from 23s to 21s Ice Path trail duration increased from 15s to 18s Arctic Beam T3 now hits up to 2 additional targets Lady Geist Base bullet damage reduced from 28 to 25 Bullet damage growth increased from 1.84 to 2.1 Essence Bomb T2 reduced from +70 to +60 Essence Bomb T3 increased from 20% to 22% Life Drain self slow reduced from -40% to -25% Soul Exchange can be cast on enemies that are lower health. It will always steal a minimum of 30% of their current health. Lash Grapple weapon damage is now added into the T2 instead of in the base Ground Strike radius reduced from 13m to 11m Death Slam grab time reduced from 0.8s to 0.6s Death Slam cast range increased from 14m to 18m Death Slam throw distance reduced from 20m to 12m Death Slam T1 changed from +4m Cast Range to +8m Throw Distance McGinnis Spectral Wall cooldown increased from 30s to 35s Base melee damage reduced by 20% Spectral Wall segments that are touching the Rejuv will be destroyed Paradox Time Wall projectile stop duration reduced from 1.25s to 1s Pulse Grenade amp duration increased from 6s to 8s Paradoxical Swap projectile size reduced by 10% Pocket Base bullet resistance improved from -20% to -15% Base gun damage reduced from 5.6 to 5.0 Gun damage growth increased from 0.35 to 0.4 Seven Base regen increased from 1 to 1.5 Base bullet resistance reduced from 20% to 8% Now gains +1% Bullet Resistance per boon (happens 11 times) Power Surge scaling reduced from 0.2 to 0.16 Restorative Shot Bullet Resist reduced from 8% to 7% Headshot Booster Fire Rate reduced from 6% to 5% Fleetfoot Now gives +25% Slide Distance Mystic Shot Now gives +4 Spirit Active Reload Cooldown reduced from 21s to 17s Initial grace period increased from 0.2s to 0.3s Berserker Bullet Resist reduced from 10% to 8% Kinetic Dash Cooldown reduced from 12s to 10s Veil Walker Moved to T3 Vitality Moved from T2 Weapon to T3 Vitality Invisibility and speed duration increased from 4s to 5s Cooldown reduced from 25s to 20s Bullet Shield Health increased from 150 to 185 Now gives +185 Spirit Shield Health Burst Fire Now gives +2 m/s Move Speed during the 3s active Escalating Resilience No longer grants +14% Ammo Stack duration increased from 14s to 20s Point Blank Bullet Shield Health increased from 225 to 250 Alchemical Fire Spirit Power increased from +5 to +7 Sharpshooter Ammo increased from 15% to 20% Titanic Magazine Ammo increased from 90% to 100% Siphon Bullets Max frequency improved from 1s to 0.8s Silencer No longer provides +20% Ammo Ricochet Now gives +100 Health Frenzy Low Health Spirit Resist increased from 40% to 45% Vampiric Burst Active now adds +50% to your clip one time on cast. If you are reloading, it interrupts that process and gives you +50% to your clip. Cooldown increased from 24s to 35s Healing Rite Active now gives +2 Sprint Extra Health Health increased from +150 to +160 Extra Stamina Fire Rate reduced from 8% to 7% Extra Regen Regen increased from 2.3 to 2.5 Melee Lifesteal Works against creeps for 25% effectiveness Healbane Heal on hero kill reduced from 400 to 350 Divine Barrier Cast range increased from 25m to 30m Bullet Lifesteal Health increased from +50 to +75 Spirit Lifesteal No longer grants +8 Spirit Power Now grants +75 Health Debuff Reducer Weapon Damage reduced from 10% to 6% Fortitude Bonus health increased from +250 to +275 Rescue Beam Cooldown reduced from 35s to 30s Heal amount increased from 25% to 30% Majestic Leap Health increased from +75 to +100 Lifestrike Works against creeps for 25% effectiveness Leech Bonus health increased from 150 to 175 Spirit Power increased from +10 to +12 Weapon Damage increased from +12% to +15% Shadow Weave Invis sprint speed reduced from +5 to +2 Phantom Strike No longer grants +200 Health Now grants +15% Bullet Resist Weapon Damage increased from 20% to 30% No longer grants Bullet Shield on teleport Now disarms the enemy for the slow duration (3s) Ammo Scavenger Spirit Power Per Soul reduced from 3 to 2 Infuser Spirit Resistance reduced from 8% to 7% Spirit Strike Passive replaced. Now causes your melee against heroes to deal +30 Spirit damage and applies -10% Spirit Resist to the target for 8 seconds. Cooldown: 8 Slowing Hex Sprint reduced from +2 to +1 Improved Spirit Spirit Power increased from +18 to +21 Torment Pulse Target count increased from 1 to 2 Fixed sometimes waking up neutrals Rapid Recharge Bonus Ability Charges increased from +2 to +3 Knockdown Cast range reduced from 50m to 35m Superior Cooldown Imbued Cooldown Reduction increased from +30% to +32% Non-Imbued Cooldown Reduction increased from +20% to +22% Surge of Power Cooldown reduced from 12s to 10s Ethereal Shift Fixed a bug that could prevent you from shooting when you came out Diviner's Kevlar Cooldown reduction increased from +8% to +12% Mystic Reverb Slow now applies in the radius around the target Radius increased from 12m to 16m Echo Shard Now grants +10% Bullet Resistance Escalating Exposure Now grants +125 Health",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-07-12',
			to: '2024-07-18'
		},
		after: {
			from: '2024-07-19',
			to: '2024-07-23'
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
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 3,
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 3,
		title: 'Hyperbeam Spirit Power',
		id: 'hyperbeam-spirit-power'
	},
	{
		level: 3,
		title: 'Hyperbeam',
		id: 'hyperbeam-1'
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
		title: 'Kudzu Bomb DPS',
		id: 'kudzu-bomb-dps'
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
		level: 3,
		title: 'Arctic Beam',
		id: 'arctic-beam'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Essence Bomb',
		id: 'essence-bomb'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain'
	},
	{
		level: 3,
		title: 'Soul Exchange',
		id: 'soul-exchange'
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
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall-1'
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
		title: 'Pulse Grenade',
		id: 'pulse-grenade'
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
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Power Surge',
		id: 'power-surge'
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
		title: 'Fleetfoot',
		id: 'fleetfoot'
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
		title: 'Healing Rite',
		id: 'healing-rite'
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
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
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
		title: 'Slowing Hex',
		id: 'slowing-hex'
	},
	{
		level: 2,
		title: 'Spirit Lifesteal',
		id: 'spirit-lifesteal'
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
		title: 'Torment Pulse',
		id: 'torment-pulse'
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
			from: '2024-07-12',
			to: '2024-07-18'
		},
		after: {
			from: '2024-07-19',
			to: '2024-07-23'
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
			name: 'Fleetfoot',
			id: 'fleetfoot'
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
			name: 'Healing Rite',
			id: 'healing-rite'
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
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
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
			name: 'Slowing Hex',
			id: 'slowing-hex'
		},
		{
			kind: 'item',
			name: 'Spirit Lifesteal',
			id: 'spirit-lifesteal'
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
			name: 'Torment Pulse',
			id: 'torment-pulse'
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
function _7_18_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Accounts that are banned for cheating will now have all their invited accounts banned as well</li><li>The Damage Report&#x27;s Damage List now aggregates damage from all units, and displays both hero and ability icons</li><li>You can view per-hero damage in the Damage Report by hovering the damage type breakdown above each hero portrait</li><li>Added a &#x27;Compact&#x27; Damage Report mode that shows less information but takes up less space.  This is the default after dying.</li><li>Clicking the top bar will now toggle the Damage Report between minimized, compact, and full view</li><li>Opening the shop now always minimizes the Damage Report</li><li>Updated effects on Pocket effects to improve visibility</li><li>Added new cast effect for Grey Talon&#x27;s Guided Owl</li><li>Updated effects for heavy melee</li><li>Updated bullet resist debuff effects</li><li>Added new Cold Front visual effects</li><li>Added new Echo Shard visual effects</li><li>Added new Refresher visual effects</li><li>Added Knockdown select, cast, delay, and impact sound effects</li><li>Added Warden Alchemical Flask cast, projectile, and impact sound effects</li><li>Raised volume of Wraith Card Trick charge up sound effect</li><li>Raised volume of party invite, join, and roster select sound effects</li><li>Guardians now fade out from the world 10 seconds after dying</li><li>Fixed a bug that allowed you to shoot through walls</li><li>Fixed a bug where Infernus could get stuck in his Flame Dash pose</li><li>Fixed a speed exploit with Infernus Flame Dash</li><li>Fixed a bug that allowed your gun to be very accurate while holding tab</li><li>Reverted a change from last update to Warden&#x27;s Alchemical Flask – it now launches where the reticle is aiming at the end of the cast</li><li>Reworked building just outside Amber&#x27;s base in the Yellow lane to match Sapphire Purple</li><li>Started replacing older style rollup doors with new ones with larger dimensions</li><li>Improved game startup time</li><li>ALT+SPACE can now be used to select the previous player when spectating</li><li>Changed spectator camera to not force itself into roaming mode for up/down key pressed (forward/back/side only)</li><li>Added additional voice lines for Abrams</li><li>Removed voice lines / fixed text that referenced the urn being delivered to the temple</li><li>Added Midboss arrive, low health, and death sound effects</li><li>Removed pause cooldown while in Sandbox</li><li>Added a small delay so kill lines play after death sound effects rather than under them</li><li>Reworked the mid temple area as well adding various different entrances to it</li><li>Reworked the upper mid temple area and the drop down entrances to the bottom pit</li><li>Changed the neutrals in the top mid temple area to a strong, a medium and a small creep (2 of these)</li><li>The bridges are now a bit wider and have higher side walls that reduce extended line of sight</li><li>Base entrance window area can no longer be invaded from the outside by double jumping</li><li>Reduced the front entrances to the two single story buildings from 2 to 1 (entrances are larger)</li><li>Added more juke spots</li><li>Removed the long fx trail from unsecured souls on your hero so it doesn&#x27;t give away your position when juking/hiding</li><li>Sounds occluded by level geometry will now be quieter</li><li>Powerup spawn locations moved to the bridges</li><li>Powerup buff duration increased from 130s to 150s</li><li>Golden Statues level 2 drops now happen at 15 minutes instead of 20</li><li>Increased golden statue drop chance by 4%</li><li>Guardian HP increased by 10%</li><li>Guardian melee no longer does a double instant melee attack sometimes</li><li>Guardian melee attack no longer has a splash range much larger than its visuals</li><li>Walker in mid lanes health increased by 12%</li><li>Walker stomp can no longer be dodged with double jump</li><li>Walker stomp area increased a bit</li><li>Weakened Patron health increased by 20%</li><li>Mid Boss starting health increased from 4500 to 5000</li><li>Mid Boss health gained per minute increased from 200 to 275</li><li>Rejuv drop time reduced from 12.5s to 9s</li><li>Midboss makes a global sound when at 35% hp</li><li>Reworked comeback formula to be less weighted towards team vs team net worth and more towards the net worth of the dying hero compared to the average of your team (regardless if your team is leading or not)</li><li>Base ammo increased by 5% (except for Haze and Wraith)</li><li>T2 items cost increased from 1200 to 1250</li><li>T4 Items cost reduced from 6500 to 6300</li><li>Vitality base health bonus increased from 8/12/16/20% to 11/14/17/20%</li><li>Can no longer use the Teleporter while carrying the Urn</li><li>Teleporter now has the same damage rules as zipline (DoT no longer prevents usage)</li><li>Cooldown reduction now stacks diminishingly</li><li>Reduced the momentum coming off of the zipline a bit</li><li>Rapid Rounds (new T1 Weapon item): +12% Fire Rate, +1 Sprint, -40 HP</li><li>Health Nova: Cooldown reduced from 65s to 60s</li><li>Health Nova: Now heals over 2s instead of 3s</li><li>Superior Stamina: Air Jump/Dash Distance increased from +30% to +50%</li><li>Soul Rebirth (new T4 Vitality item): After you die, you will respawn in 4 seconds where you died with 40% of your Max Health. Cooldown: 220s. Also innately grants +20% Weapon Damage and +10% Cooldown Reduction.</li><li>Improved Cooldown: Cooldown Reduction increased from +13% to +14%</li><li>Withering Whip: Cast Range increased from 17m to 18m</li><li>Silence Glyph: Now grants +2 Sprint</li><li>Silence Glyph: Now reduces Spirit Resist instead of providing Spirit Amplification</li><li>Curse: No longer grants +20% Ammo</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_7_18_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge now considers Spectral Wall and Frozen Shelter as walls</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience duration to regen increased from 14s to 16s (this is a nerf)</li><li>Infernal Resilience damage regenerated reduced from 18% to 17%</li><li>Infernal Resilience T3 increased from +8% to +9%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Improved reliability of Seismic Impact')}</li> <li>${html('Seismic Impact base radius increased from 6m to 9m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Seismic Impact base radius increased from 6m to 9m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Seismic Impact T1 changed from +4m Impact Radius to -40s Cooldown')}</li> <li>${html('Seismic Impact T3 moved to T2 (was -70s Cooldown)')}</li> <li>${html('Seismic Impact T3 is now Gains Unstoppable while in air and 3s after landing')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Base HP regen increased from 1 to 2.5</li><li>No longer has 24% base bullet resistance</li><li>Now gains +2% Bullet Resistance per boon (happens 11 times)</li></ul>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook speed reduced from 3000 to 2850</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Uppercut horizontal distance knockback on enemy heroes is reduced from 25m to 20m</li><li>Fixed enemies being able to use heavy melee to cancel Uppercut&#x27;s momentum</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam is now very wide in the area right in front of the hero, then narrows into the current size a few meters away</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam-spirit-power">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam Spirit Power change history</a></p>\n<h4 id="hyperbeam-spirit-power"><a href="/ability/hyper-beam">Hyperbeam Spirit Power</a></h4>\n<ul><li>Hyperbeam Spirit Power damage scaling increased from 1.96 to 2.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam Spirit Power'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam-1"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam T2 increased from +120 to +140</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Gun damage growth increased from 0.8 to 0.9</li></ul>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse spirit power scaling increased from 1.2 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity duration reduced from 3 to 2.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n')} <ul><li>${html('Charged Shot damage reduced from 115 to 105')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Charged Shot damage reduced from 115 to 105'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Charged Shot spirit scaling increased from 1.3 to 1.6')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger min sleep time reduced from 0.3 to 0.2</li><li>Sleep Dagger wake-up time reduced from 0.15 to 0.1</li><li>Sleep Dagger projectile size reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation T1 and T2 swapped</li><li>Fixation damage per stack reduced from 0.25 to 0.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n')} <ul><li>${html('Bullet Dance fire rate increased from +20% to +25%')}</li> <li>${html('Bullet Dance radius increased from 14m to 15m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Bullet Dance radius increased from 14m to 15m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Base damage reduced from 5.0 to 4.5</li></ul>\n')} <div class="ability kudzu-bomb-dps">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb DPS change history</a></p>\n<h4 id="kudzu-bomb-dps"><a href="/ability/entangling-thorns">Kudzu Bomb DPS</a></h4>\n<ul><li>Kudzu Bomb DPS spirit scaling increased from 0.4 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher&#x27;s Covenant replicated healing reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade cooldown reduced from 23s to 21s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Frost Grenade cooldown reduced from 23s to 21s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path trail duration increased from 15s to 18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam T3 now hits up to 2 additional targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Base bullet damage reduced from 28 to 25</li><li>Bullet damage growth increased from 1.84 to 2.1</li></ul>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Essence Bomb T2 reduced from +70 to +60</li><li>Essence Bomb T3 increased from 20% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain self slow reduced from -40% to -25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange can be cast on enemies that are lower health. It will always steal a minimum of 30% of their current health.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n<ul><li>Grapple weapon damage is now added into the T2 instead of in the base</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n')} <ul><li>${html('Ground Strike radius reduced from 13m to 11m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Ground Strike radius reduced from 13m to 11m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam grab time reduced from 0.8s to 0.6s</li><li>Death Slam cast range increased from 14m to 18m</li><li>Death Slam throw distance reduced from 20m to 12m</li><li>Death Slam T1 changed from +4m Cast Range to +8m Throw Distance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n')} <ul><li>${html('Spectral Wall cooldown increased from 30s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Spectral Wall cooldown increased from 30s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base melee damage reduced by 20%</li></ul>\n')} <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall-1"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall segments that are touching the Rejuv will be destroyed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall projectile stop duration reduced from 1.25s to 1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade amp duration increased from 6s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
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
		`<!----></div></div> ${html('\n<div class="hero pocket">\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Base bullet resistance improved from -20% to -15%</li><li>Base gun damage reduced from 5.6 to 5.0</li><li>Gun damage growth increased from 0.35 to 0.4</li></ul>\n</div>\n')} <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Base regen increased from 1 to 1.5</li><li>Base bullet resistance reduced from 20% to 8%</li><li>Now gains +1% Bullet Resistance per boon (happens 11 times)</li></ul>\n')} <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge scaling reduced from 0.2 to 0.16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_7_18_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n')} <ul><li>${html('Cooldown reduced from 21s to 17s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 21s to 17s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Initial grace period increased from 0.2s to 0.3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Spirit Power increased from +5 to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Spirit Power Per Soul reduced from 3 to 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Bullet Resist reduced from 10% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Health increased from +50 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n<ul><li>Now gives +2 m/s Move Speed during the 3s active</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Weapon Damage reduced from 10% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Cast range increased from 25m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Cooldown reduction increased from +8% to +12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Now grants +10% Bullet Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Now grants +125 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>No longer grants +14% Ammo</li><li>Stack duration increased from 14s to 20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n<ul><li>Fixed a bug that could prevent you from shooting when you came out</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Health increased from +150 to +160</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen increased from 2.3 to 2.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Fire Rate reduced from 8% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n<ul><li>Now gives +25% Slide Distance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Bonus health increased from +250 to +275</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Low Health Spirit Resist increased from 40% to 45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Fire Rate reduced from 6% to 5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healbane">${html('\n<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>\n<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>\n<ul><li>Heal on hero kill reduced from 400 to 350</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healbane',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Active now gives +2 Sprint</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Spirit Power increased from +18 to +21</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Spirit Resistance reduced from 8% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n')} <ul><li>${html('Cooldown reduced from 12s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 12s to 10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Cast range reduced from 50m to 35m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Bonus health increased from 150 to 175</li><li>Spirit Power increased from +10 to +12</li><li>Weapon Damage increased from +12% to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Works against creeps for 25% effectiveness</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Health increased from +75 to +100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Works against creeps for 25% effectiveness</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n')} <ul><li>${html('Slow now applies in the radius around the target')}</li> <li>${html('Radius increased from 12m to 16m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Radius increased from 12m to 16m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Now gives +4 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>No longer grants +200 Health</li><li>Now grants +15% Bullet Resist</li><li>Weapon Damage increased from 20% to 30%</li><li>No longer grants Bullet Shield on teleport</li><li>Now disarms the enemy for the slow duration (3s)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>Bullet Shield Health increased from 225 to 250</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Bonus Ability Charges increased from +2 to +3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n')} <ul><li>${html('Cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 35s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heal amount increased from 25% to 30%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Bullet Resist reduced from 8% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Now gives +100 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Invis sprint speed reduced from +5 to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Ammo increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>No longer provides +20% Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Max frequency improved from 1s to 0.8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Sprint reduced from +2 to +1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-lifesteal">${html('\n<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>\n<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>\n<ul><li>No longer grants +8 Spirit Power</li><li>Now grants +75 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Passive replaced. Now causes your melee against heroes to deal +30 Spirit damage and applies -10% Spirit Resist to the target for 8 seconds. Cooldown: 8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Imbued Cooldown Reduction increased from +30% to +32%</li><li>Non-Imbued Cooldown Reduction increased from +20% to +22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n')} <ul><li>${html('Cooldown reduced from 12s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 12s to 10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Ammo increased from 90% to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Target count increased from 1 to 2</li><li>Fixed sometimes waking up neutrals</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n')} <ul><li>${html('Active now adds +50% to your clip one time on cast. If you are reloading, it interrupts that process and gives you +50% to your clip.')}</li> <li>${html('Cooldown increased from 24s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 24s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('Moved to T3 Vitality')}</li> <li>${html('Moved from T2 Weapon to T3 Vitality')}</li> <li>${html('Invisibility and speed duration increased from 4s to 5s')}</li> <li>${html('Cooldown reduced from 25s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown reduced from 25s to 20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bullet Shield Health increased from 150 to 185')}</li> <li>${html('Now gives +185 Spirit Shield Health')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _7_18_mg as default, metadata, readingManifest, toc };
