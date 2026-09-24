import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/07-04.mg?embed=0
function _7_04_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mirage',
			'Paradox',
			'Pocket',
			'Seven',
			'Sinclair',
			'Warden',
			'Wraith'
		]
	});
}
//#endregion
//#region changelogs/2025/07-04.mg?embed=1
function _7_04_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Blood Tribute',
			'Boundless Spirit',
			'Cheat Death',
			'Counterspell',
			'Disarming Hex',
			'Divine Barrier',
			'Ethereal Shift',
			'Express Shot',
			'Fortitude',
			'Guardian Ward',
			'Inhibitor',
			'Knockdown',
			'Lifestrike',
			'Melee Lifesteal',
			'Rapid Recharge',
			'Reactive Barrier',
			'Rebuttal',
			'Restorative Shot',
			'Ricochet',
			'Rusted Barrel',
			'Shadow Weave',
			'Siphon Bullets',
			'Slowing Hex',
			'Spellslinger',
			'Spirit Sap',
			'Spirit Shielding',
			'Spirit Snatch',
			'Spirit Strike',
			'Split Shot',
			'Superior Cooldown',
			'Swift Striker',
			'Toxic Bullets',
			'Trophy Collector',
			'Unstoppable',
			'Vortex Web',
			'Weakening Headshot',
			'Weapon Shielding',
			'Witchmail'
		]
	});
}
//#endregion
//#region changelogs/2025/07-04.mg
var metadata = {
	title: '07-04-2025 Update',
	thread_id: '70156',
	published: '2025-07-04T13:03:43-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Bullet Cycle Time for all heroes increased by 5% (effectively reduces gun DPS globally by 5%) Spirit bonus based on souls spent in the tree is increased by 25% Ability base damage and AP bonus damage reduced by ~8% (spirit power growth unaffected) Spirit gained from leveling reduced from 1.25 to 1.1 Ultimate cooldowns increased by 10% (affects base and upgrades, so the total CD with AP is 10% longer) 300 Souls Boon now gives an AP instead of an Ability Unlock 600 Souls Boon now gives an Ability Unlock instead of a AP Small neutral camp bounty increased by 15% Zip Line after taking Base Guardians in a lane increased from +120% to +140% Zip Line after taking Base Guardians in a lane ramp up time reduced from 4s to 3s Rejuv bonus duration changed from 4 minutes to 3/4/5 Rejuv trooper health bonus reduced from 200/230/260% to 170/200/230% Mid Boss total bounty increased from 500 + 50/min to 2000 + 50/min (evenly split among the team that kills the boss, unrelated to rejuv secure) Mid Boss shield regeneration changed from 100 + 8/min to 50 + 7/min Mid Boss HP increased by 15% Mid Boss warning sound now plays at 70% HP rather than 60% Rejuv drop duration reduced from 8s to 7s Mid Boss Spirit Resistance from abilities reduced from 30% to 20% Mid Boss Spirit Resistance from items reduced from 50% to 20% Walker Spirit resistance reduced from 30% to 25% Guardian base resistance increased from 40% to 60% (decays 10 minutes still, same values as creeps) Guardian total bounty reduced from 1650 to 1000 Walker total bounty reduced from 4500 to 3500 Base hero kill value reduced from 300 to 250 (still ramps to end value over 40 minutes, so primarily affects the very early phase) End hero kill value increased from 2000 to 2200 Bullet Lifesteal vs creeps increased from 50% to 60% Spirit Lifesteal vs creeps increased from 33% to 40% Comeback values are now roughly 25% stronger (this was released before this patch in a recent update) Fixed a bug causing soul orb shots towards the end of the contested window to not register as hits on the server Fixed some AoE abilities not hitting midboss (Kelvin Frost Grenade, Lady Geist Blood Bomb, Holliday Barrel) Fixed various camera issues with Calico's Ava Form and Viscous's Goo Ball Fixed an issue where Souls were shared with anyone that punched a Sinner's Sacrifice, regardless of the duration or team Fixed a bug where players could exit the map if they tried to teleport into specific corners Express Shot cooldown reduced from 4s to 3s Cultists Sacrifice: Cooldown reduced from 260s to 250s Veilwalker: Heal now scales with boons (+3) Cooldown Reduction stat is now renamed to Ability Cooldown Reduction and no longer affects items (all existing CDR is now Ability Cooldown Reduction) Added a new T4 Spirit Item, Transcendent Cooldown. Builds from Superior Cooldown. Provides +30% Ability Cooldown Reduction and +30% Item Cooldown Reduction Abrams Shoulder Charge T3 increased from -18s to -22s Infernal Resilience T3 increased from +6% to +7% Infernus Bullet damage growth per boon reduced from 0.16 to 0.12 Afterburn DPS reduced by 13% (still affected by the global base reductions as well, so the total amount is larger than this. This applies to all other patch note lines that reduces damage as well) Afterburn spirit scaling increased from 0.56 to 0.66 Flame Dash T2 DPS reduced by 10% Flame Dash spirit power scaling increased from 0.7 to 0.8 Ivy Bullet growth reduced from 0.16 to 0.15 No longer ignores shooting speed penalty Watcher’s Covenant now grants the shooting speed benefit to you and your tethered ally Kelvin Frozen Shelter now freezes Urn (like it does other objectives) Lady Geist Base bullet damage reduced from 23 to 21 Essence Bomb arming time increased from 0.5s to 0.65s Malice health cost increased from 6% to 7% Malice T2 changed from \"+30 Damage and 7% Damage Amp” to “+30 Damage and +4 Blood Shards” Malice T3 changed from \"+6 Blood Shards\" to \"+7% Damage Amp\" Soul Exchange cast range reduced from 6m to 5.5m Lash Flog cast range reduced from 25m to 20m Ground Strike damage height reduced from 3.3m to 3m McGinnis Medicinal Specter now comes out faster and has a better visual que Heavy Barrage DPS increased by 6% Fixed Mini Turrets missing targets that are on the ground from Stun or Sliding Fixed Mini Turrets not targeting Phase 1 of the Patron after shields are down Health per boon increased from 52 to 56 Mirage Djinn's Mark now has a range limit on application (45m) Fixed Cases where Mirage's Tornado would get Stuck and/or Go through Walls Paradox Gun recoil adjustments to make it smoother Pocket Fixed Cloak sliding up walls very quickly Fixed Cloak sometimes getting stuck on the lip of a corner Fixed Cloak issue where you would teleport far shoter than expected Seven Storm Cloud DPS reduced by 10% Sinclair Base bullet damage reduced from 20 to 17 Bullet velocity reduced from 340 to 300 Rabbit Hex cast range reduced from 30m to 24m Rabbit Hex detonation delay increased from 0.7 to 0.9 Rabbit Hex move speed increased from 22% to 36% Can no longer teleport back to assistant while silenced or cursed Warden Base bullet damage reduced from 17.6 to 17 Wraith Card Trick T3 slow increased from 25% to 30% Card Trick spirit scaling increased from 1.1 to 1.2 Project Mind fixed going no where if the player is on uneven ground Restorative Shot Heal from heroes increased from 40 to 50 Heal from NPCs/Orbs increased from 15 to 20 Split Shot Duration increased from 4.5s to 5s Cooldown reduced from 16s to 14s Weakening Headshot No longer has a 3s cooldown Swift Striker Fire Rate reduced from 20% to 18% Toxic Bullets Buildup is now 15% harder Blood Tribute Health Drain reduced from 50 to 40 No longer grants +125 Bonus Health Now grants +8% Spirit Resist Express Shot Weapon Damage increased from 150% to 165% Fixed Kinetic Carbine using the primary values rather than secondary values on the item Ricochet Fire Rate reduced from 25% to 20% No longer bounces off objectives Shadow Weave Ambush Fire Rate increased from +30% to +35% Spellslinger Now only activates while in combat Melee Lifesteal Now has double cooldown when triggered via light melee Rebuttal Bonus Health increased from +50 to +75 Weapon Shielding Move Speed bonus increased from 1 to 1.5 Cooldown reduced from 40s to 35s Spirit Shielding Move Speed bonus increased from 1 to 1.5 Cooldown reduced from 40s to 35s Guardian Ward Buff duration increased from 5s to 6s Reactive Barrier Spirit Resist increased from +5% to +6% Lifestrike Now has double cooldown when triggered via light melee. Fortitude Regen reduced from 3% to 2% No longer grants +22% Weapon Damage Counterspell Cooldown reduced from 25s to 20s Now also grants +100 Health and +8 Spirit Power Successful parry now provides +150 Heal Trophy Collector Souls per minute increased from 20 to 23 Inhibitor Now uses the buildup proc mechanic Debuff duration increased from 3s to 4s Siphon Bullets Now grants Bullet Resistance instead of Spirit Resistance Cheat Death Now grants Bullet Resistance instead of Spirit Resistance Cooldown reduced from 120s to 100s Divine Barrier Buff duration increased from 5s to 6s Witchmail Cooldown reduction per hit increased from 3s to 4s Unstoppable Fixed Silencer’s passive interaction during this state Rusted Barrel Health increased from +50 to +60 Now provides +0.5 Sprint Cooldown reduced from 30s to 25s Disarming Hex Cooldown reduced from 30s to 25s Spirit Strike Now has double cooldown when triggered via light melee. Slowing Hex Now provides +0.5 Sprint Debuff effects stays on for longer so it's easier to see Spirit Sap Spirit Power reduction increased from -12 to -15 Spirit Snatch Now has double cooldown when triggered via light melee. Knockdown Now provides +6% Ability Range Cooldown reduced from 40s to 35s Rapid Recharge Spirit Power for charged abilities increased from +16 to +20 Superior Cooldown Ability Cooldown Reduction increased from 24% to 25% Boundless Spirit Percentage spirit bonus increased from 13% to 15% Vortex Web Now provides +1 Sprint Capture Radius increased from 11m to 12m Ethereal Shift Cooldown reduced from 22s to 20s Move Speed while channeling increased from 3.5 to 4",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-06-20',
			to: '2025-07-04'
		},
		after: {
			from: '2025-07-05',
			to: '2025-07-19'
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
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Afterburn DPS',
		id: 'afterburn-dps'
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
		title: 'Essence Bomb',
		id: 'essence-bomb'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
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
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 3,
		title: 'Heavy Barrage DPS',
		id: 'heavy-barrage-dps'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	},
	{
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
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
		title: 'Storm Cloud DPS',
		id: 'storm-cloud-dps'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex'
	},
	{
		level: 3,
		title: 'Spectral Assistant',
		id: 'spectral-assistant'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
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
		title: 'Blood Tribute',
		id: 'blood-tribute'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Cheat Death',
		id: 'cheat-death'
	},
	{
		level: 2,
		title: 'Counterspell',
		id: 'counterspell'
	},
	{
		level: 2,
		title: 'Disarming Hex',
		id: 'disarming-hex'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: 'Inhibitor',
		id: 'inhibitor'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
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
		title: 'Rebuttal',
		id: 'rebuttal'
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
		title: 'Rusted Barrel',
		id: 'rusted-barrel'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
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
		title: 'Spellslinger',
		id: 'spellslinger'
	},
	{
		level: 2,
		title: 'Spirit Sap',
		id: 'spirit-sap'
	},
	{
		level: 2,
		title: 'Spirit Shielding',
		id: 'spirit-shielding'
	},
	{
		level: 2,
		title: 'Spirit Snatch',
		id: 'spirit-snatch'
	},
	{
		level: 2,
		title: 'Spirit Strike',
		id: 'spirit-strike'
	},
	{
		level: 2,
		title: 'Split Shot',
		id: 'split-shot'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
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
		title: 'Trophy Collector',
		id: 'trophy-collector'
	},
	{
		level: 2,
		title: 'Unstoppable',
		id: 'unstoppable'
	},
	{
		level: 2,
		title: 'Vortex Web',
		id: 'vortex-web'
	},
	{
		level: 2,
		title: 'Weakening Headshot',
		id: 'weakening-headshot'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
	},
	{
		level: 2,
		title: 'Witchmail',
		id: 'witchmail'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-06-20',
			to: '2025-07-04'
		},
		after: {
			from: '2025-07-05',
			to: '2025-07-19'
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
			name: 'Mirage',
			id: 'mirage'
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
			name: 'Sinclair',
			id: 'sinclair'
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
			name: 'Blood Tribute',
			id: 'blood-tribute'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Cheat Death',
			id: 'cheat-death'
		},
		{
			kind: 'item',
			name: 'Counterspell',
			id: 'counterspell'
		},
		{
			kind: 'item',
			name: 'Disarming Hex',
			id: 'disarming-hex'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: 'Inhibitor',
			id: 'inhibitor'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
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
			name: 'Rebuttal',
			id: 'rebuttal'
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
			name: 'Rusted Barrel',
			id: 'rusted-barrel'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
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
			name: 'Spellslinger',
			id: 'spellslinger'
		},
		{
			kind: 'item',
			name: 'Spirit Sap',
			id: 'spirit-sap'
		},
		{
			kind: 'item',
			name: 'Spirit Shielding',
			id: 'spirit-shielding'
		},
		{
			kind: 'item',
			name: 'Spirit Snatch',
			id: 'spirit-snatch'
		},
		{
			kind: 'item',
			name: 'Spirit Strike',
			id: 'spirit-strike'
		},
		{
			kind: 'item',
			name: 'Split Shot',
			id: 'split-shot'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
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
			name: 'Trophy Collector',
			id: 'trophy-collector'
		},
		{
			kind: 'item',
			name: 'Unstoppable',
			id: 'unstoppable'
		},
		{
			kind: 'item',
			name: 'Vortex Web',
			id: 'vortex-web'
		},
		{
			kind: 'item',
			name: 'Weakening Headshot',
			id: 'weakening-headshot'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		},
		{
			kind: 'item',
			name: 'Witchmail',
			id: 'witchmail'
		}
	],
	related: []
};
function _7_04_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Bullet Cycle Time for all heroes increased by 5% (effectively reduces gun DPS globally by 5%)</li><li>Spirit bonus based on souls spent in the tree is increased by 25%</li><li>Ability base damage and AP bonus damage reduced by ~8% (spirit power growth unaffected)</li><li>Spirit gained from leveling reduced from 1.25 to 1.1</li><li>Ultimate cooldowns increased by 10% (affects base and upgrades, so the total CD with AP is 10% longer)</li><li>300 Souls Boon now gives an AP instead of an Ability Unlock</li><li>600 Souls Boon now gives an Ability Unlock instead of a AP</li><li>Small neutral camp bounty increased by 15%</li><li>Zip Line after taking Base Guardians in a lane increased from +120% to +140%</li><li>Zip Line after taking Base Guardians in a lane ramp up time reduced from 4s to 3s</li><li>Rejuv bonus duration changed from 4 minutes to 3/4/5</li><li>Rejuv trooper health bonus reduced from 200/230/260% to 170/200/230%</li><li>Mid Boss total bounty increased from 500 + 50/min to 2000 + 50/min (evenly split among the team that kills the boss, unrelated to rejuv secure)</li><li>Mid Boss shield regeneration changed from 100 + 8/min to 50 + 7/min</li><li>Mid Boss HP increased by 15%</li><li>Mid Boss warning sound now plays at 70% HP rather than 60%</li><li>Rejuv drop duration reduced from 8s to 7s</li><li>Mid Boss Spirit Resistance from abilities reduced from 30% to 20%</li><li>Mid Boss Spirit Resistance from items reduced from 50% to 20%</li><li>Walker Spirit resistance reduced from 30% to 25%</li><li>Guardian base resistance increased from 40% to 60% (decays 10 minutes still, same values as creeps)</li><li>Guardian total bounty reduced from 1650 to 1000</li><li>Walker total bounty reduced from 4500 to 3500</li><li>Base hero kill value reduced from 300 to 250 (still ramps to end value over 40 minutes, so primarily affects the very early phase)</li><li>End hero kill value increased from 2000 to 2200</li><li>Bullet Lifesteal vs creeps increased from 50% to 60%</li><li>Spirit Lifesteal vs creeps increased from 33% to 40%</li><li>Comeback values are now roughly 25% stronger (this was released before this patch in a recent update)</li><li>Fixed a bug causing soul orb shots towards the end of the contested window to not register as hits on the server</li><li>Fixed some AoE abilities not hitting midboss (Kelvin Frost Grenade, Lady Geist Blood Bomb, Holliday Barrel)</li><li>Fixed various camera issues with Calico&#x27;s Ava Form and Viscous&#x27;s Goo Ball</li><li>Fixed an issue where Souls were shared with anyone that punched a Sinner&#x27;s Sacrifice, regardless of the duration or team</li><li>Fixed a bug where players could exit the map if they tried to teleport into specific corners</li><li>Express Shot cooldown reduced from 4s to 3s</li><li>Cultists Sacrifice: Cooldown reduced from 260s to 250s</li><li>Veilwalker: Heal now scales with boons (+3)</li><li>Cooldown Reduction stat is now renamed to Ability Cooldown Reduction and no longer affects items (all existing CDR is now Ability Cooldown Reduction)</li><li>Added a new T4 Spirit Item, Transcendent Cooldown. Builds from Superior Cooldown. Provides +30% Ability Cooldown Reduction and +30% Item Cooldown Reduction</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_7_04_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge T3 increased from -18s to -22s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T3 increased from +6% to +7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n<ul><li>Bullet damage growth per boon reduced from 0.16 to 0.12</li></ul>\n')} <div class="ability afterburn-dps">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn DPS change history</a></p>\n<h4 id="afterburn-dps"><a href="/ability/afterburn">Afterburn DPS</a></h4>\n<ul><li>Afterburn DPS reduced by 13% (still affected by the global base reductions as well, so the total amount is larger than this. This applies to all other patch note lines that reduces damage as well)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn spirit scaling increased from 0.56 to 0.66</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash T2 DPS reduced by 10%</li><li>Flame Dash spirit power scaling increased from 0.7 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Bullet growth reduced from 0.16 to 0.15</li><li>No longer ignores shooting speed penalty</li></ul>\n')} <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher’s Covenant now grants the shooting speed benefit to you and your tethered ally</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter now freezes Urn (like it does other objectives)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Base bullet damage reduced from 23 to 21</li></ul>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Essence Bomb arming time increased from 0.5s to 0.65s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice health cost increased from 6% to 7%</li><li>Malice T2 changed from &quot;+30 Damage and 7% Damage Amp” to “+30 Damage and +4 Blood Shards”</li><li>Malice T3 changed from &quot;+6 Blood Shards&quot; to &quot;+7% Damage Amp&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange cast range reduced from 6m to 5.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n<ul><li>Flog cast range reduced from 25m to 20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike damage height reduced from 3.3m to 3m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter now comes out faster and has a better visual que</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage-dps">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage DPS change history</a></p>\n<h4 id="heavy-barrage-dps"><a href="/ability/heavy-barrage">Heavy Barrage DPS</a></h4>\n<ul><li>Heavy Barrage DPS increased by 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Fixed Mini Turrets missing targets that are on the ground from Stun or Sliding</li><li>Fixed Mini Turrets not targeting Phase 1 of the Patron after shields are down</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Health per boon increased from 52 to 56</li></ul>\n')}</div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark now has a range limit on application (45m)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Fixed Cases where Mirage&#x27;s Tornado would get Stuck and/or Go through Walls</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero paradox">\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Gun recoil adjustments to make it smoother</li></ul>\n</div>\n')} <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Fixed Cloak sliding up walls very quickly</li><li>Fixed Cloak sometimes getting stuck on the lip of a corner</li><li>Fixed Cloak issue where you would teleport far shoter than expected</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud-dps">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud DPS change history</a></p>\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n<ul><li>Base bullet damage reduced from 20 to 17</li><li>Bullet velocity reduced from 340 to 300</li></ul>\n')} <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n<ul><li>Rabbit Hex cast range reduced from 30m to 24m</li><li>Rabbit Hex detonation delay increased from 0.7 to 0.9</li><li>Rabbit Hex move speed increased from 22% to 36%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>\n<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>\n<ul><li>Can no longer teleport back to assistant while silenced or cursed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Spectral Assistant'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero warden">\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base bullet damage reduced from 17.6 to 17</li></ul>\n</div>\n')} <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick T3 slow increased from 25% to 30%</li><li>Card Trick spirit scaling increased from 1.1 to 1.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n<ul><li>Project Mind fixed going no where if the player is on uneven ground</li></ul>\n')} `
	);
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
		`<!----> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>Health Drain reduced from 50 to 40</li><li>No longer grants +125 Bonus Health</li><li>Now grants +8% Spirit Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Percentage spirit bonus increased from 13% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n')} <ul><li>${html('Now grants Bullet Resistance instead of Spirit Resistance')}</li> <li>${html('Cooldown reduced from 120s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 120s to 100s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item counterspell">${html('\n<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>\n<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>\n')} <ul><li>${html('Cooldown reduced from 25s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 25s to 20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now also grants +100 Health and +8 Spirit Power')}</li> <li>${html('Successful parry now provides +150 Heal')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item disarming-hex">${html('\n<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>\n<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Buff duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown reduced from 22s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 22s to 20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Move Speed while channeling increased from 3.5 to 4')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Weapon Damage increased from 150% to 165%</li><li>Fixed Kinetic Carbine using the primary values rather than secondary values on the item</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Regen reduced from 3% to 2%</li><li>No longer grants +22% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n<ul><li>Buff duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Now uses the buildup proc mechanic</li><li>Debuff duration increased from 3s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n')} <ul><li>${html('Now provides +6% Ability Range')}</li> <li>${html('Cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Now has double cooldown when triggered via light melee.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Now has double cooldown when triggered via light melee</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Spirit Power for charged abilities increased from +16 to +20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Spirit Resist increased from +5% to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rebuttal">${html('\n<p><a href="/item/rebuttal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rebuttal patch history</a></p>\n<h3 id="rebuttal"><a href="/item/rebuttal">Rebuttal</a></h3>\n<ul><li>Bonus Health increased from +50 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rebuttal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Heal from heroes increased from 40 to 50</li><li>Heal from NPCs/Orbs increased from 15 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Fire Rate reduced from 25% to 20%</li><li>No longer bounces off objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n')} <ul><li>${html('Health increased from +50 to +60')}</li> <li>${html('Now provides +0.5 Sprint')}</li> <li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Ambush Fire Rate increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Now grants Bullet Resistance instead of Spirit Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Now provides +0.5 Sprint</li><li>Debuff effects stays on for longer so it&#x27;s easier to see</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellslinger">${html('\n<p><a href="/item/spellslinger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellslinger patch history</a></p>\n<h3 id="spellslinger"><a href="/item/spellslinger">Spellslinger</a></h3>\n<ul><li>Now only activates while in combat</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellslinger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-sap">${html('\n<p><a href="/item/spirit-sap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Sap patch history</a></p>\n<h3 id="spirit-sap"><a href="/item/spirit-sap">Spirit Sap</a></h3>\n<ul><li>Spirit Power reduction increased from -12 to -15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Sap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n')} <ul><li>${html('Move Speed bonus increased from 1 to 1.5')}</li> <li>${html('Cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Now has double cooldown when triggered via light melee.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Now has double cooldown when triggered via light melee.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item split-shot">${html('\n<p><a href="/item/split-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Split Shot patch history</a></p>\n<h3 id="split-shot"><a href="/item/split-shot">Split Shot</a></h3>\n')} <ul><li>${html('Duration increased from 4.5s to 5s')}</li> <li>${html('Cooldown reduced from 16s to 14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 16s to 14s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Ability Cooldown Reduction increased from 24% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item swift-striker">${html('\n<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>\n<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>\n<ul><li>Fire Rate reduced from 20% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Swift Striker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Buildup is now 15% harder</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Souls per minute increased from 20 to 23</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Fixed Silencer’s passive interaction during this state</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vortex-web">${html('\n<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>\n<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>\n<ul><li>Now provides +1 Sprint</li><li>Capture Radius increased from 11m to 12m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vortex Web',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weakening-headshot">${html('\n<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>\n<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>\n<ul><li>No longer has a 3s cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weakening Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n')} <ul><li>${html('Move Speed bonus increased from 1 to 1.5')}</li> <li>${html('Cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item witchmail">${html('\n<p><a href="/item/witchmail"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Witchmail patch history</a></p>\n<h3 id="witchmail"><a href="/item/witchmail">Witchmail</a></h3>\n<ul><li>Cooldown reduction per hit increased from 3s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Witchmail',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _7_04_mg as default, metadata, readingManifest, toc };
