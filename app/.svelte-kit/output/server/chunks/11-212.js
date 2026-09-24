import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/11-21.mg?embed=0
function _1_21_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Billy',
			'Calico',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Holliday',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mina',
			'Mirage',
			'Mo &amp; Krill',
			'Paige',
			'Paradox',
			'Pocket',
			'Seven',
			'Shiv',
			'Sinclair',
			'Viscous',
			'Vyper',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2025/11-21.mg?embed=1
function _1_21_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Blood Tribute',
			'Bullet Resist Shredder',
			'Capacitor',
			'Cheat Death',
			'Compress Cooldown',
			'Crippling Headshot',
			'Cultist Sacrifice',
			'Decay',
			'Echo Shard',
			"Enchanter's Emblem",
			'Escalating Resilience',
			'Express Shot',
			'Fleetfoot',
			'Focus Lens',
			'Glass Cannon',
			'Headshot Booster',
			'Inhibitor',
			'Lucky Shot',
			'Majestic Leap',
			'Mystic Shot',
			'Mystic Vulnerability',
			'Opening Rounds',
			'Reactive Barrier',
			'Return Fire',
			'Scourge',
			'Shadow Weave',
			'Silence Wave',
			'Silencer',
			'Spellbreaker',
			'Spellslinger',
			'Spirit Sap',
			'Spirit Shielding',
			'Spirit Snatch',
			'Spiritual Overflow',
			'Split Shot',
			'Superior Cooldown',
			'Tesla Bullets',
			'Transcendent Cooldown',
			'Trophy Collector',
			'Warp Stone',
			'Weapon Shielding',
			'Weighted Shots'
		]
	});
}
//#endregion
//#region changelogs/2025/11-21.mg
var metadata = {
	title: '11-21-2025 Update',
	thread_id: '90383',
	steam_gid: '1816849002015766',
	published: '2025-11-21T14:53:12-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Trooper bounty mechanics have been reworked. The first half of the souls still fly out as deniable orb, however rather than the other half being instantly given to nearby players it will fall to the ground as an orb that you need to get near to pick up. It has a 18m capture radius where it\'ll travel to you once you get within. Only one player needs to claim it, share rules remain the same as before. They last for 18s on the ground. Duration increases by 2s per minute up to 40s after 10 minutes. Enemy orbs are visible as faint colorless soul orbs to your team, but cannot be claimed. Amount of souls in the flying orb that can be secured/denied reduced from 50% to 40% Very small tweaks to the secure/deny lag calculation to improve it Increased trooper range to be considered in range for souls to drop from 35m to 45m Medic troopers no longer have a passive healing pulse ability Medic troopers now drop a medic pack when you kill them. Has same pickup range/duration mechanics as the soul orbs on the ground. Heals everyone in a 30m radius for 10% of their missing health as well as 75 plus 2 per minute game time. Starting souls count increased from 400 to 600 Trooper bounty values increased by 10% Trooper bounty split ratios updated from 1/0.65/0.28/0.15/0.12/0.08 to 1/0.54/0.36/0.25/0.2/0.16 Reworked the position of your player camera and various details that affect visibility around your hero Neutrals bounty increased by 10% Neutrals HP increased by +15% Small neutrals damage +15% Small neutral camps respawn time 180s to 120s Medium neutrals spirit resist from 30% to 40% Medium neutrals damage increased by 25% Hard neutrals spirit resist increased from 35% to 50% Hard neutrals damage increased by 30% Sinner\'s Sacrifice: Return damage increased from 60 to 80 Minimum unsecured gold to drop increased from 100 to 150 Sprint/Out of Combat regen timer against neutrals increased from 0.5s to 2.5s (takes longer to start sprinting/regening) Reduced all AP damage upgrades by 10% Base gun damage and gun damage growth increased by 10% (excluding Paige) Headshot multiplier reduced from 1.8x to 1.65x Weapon Investment Bonuses: Now grants an additional +20% Weapon Damage at 4800 souls spent Vitality Investment Bonuses: Now grants an additional +12% Bonus Health at 4800 souls spent Spirit Investment Bonuses: Now grants an additional +20 Spirit Power at 4800 souls spent Added a UI highlight to 4800 reward row of the investment bonuses Initial wall jump now costs 0.25 stamina Stamina regen rate reduced by 5% (5s to 5.25s) After 35 minutes all troopers gain +50% HP. Guardians HP increased from 3500 to 4250 HP Walker HP increased by 40% Walker on the Side Lanes now have same HP as Midlane (rather than ~37% less) Walker engagement ranges reduced (ranges for attacks, being attacked, stomps, etc) Walker stomp cooldown reduced from 10s to 6s Walker stomp damage increased from 350 + 10% Max HP to 350 + 15% Max HP Walker fireballs radius from 5m to 6m Walker fireballs debuff now lingers for 4s Walker fireballs now reduce bullet and spirit resistance by 10% Walker area in mid lane adjusted Bullet Damage is no longer reduced by 35% of a Hero\'s Base Bullet damage against T1\'s Guardians now start with 75% Damage Resist that decay\'s to -50% over the first 10 minutes of a match Walkers now start with 75% Damage Resist that decay\'s to -50% over the first 20 minutes of a match Note: The Walker resistance change used to be in the client a couple months ago, but it got bugged. Base slot count increased from 8 to 9 and Flex slot count reduced from 4 to 3. One is given for each Walker killed. Previously the 4 were given for: "3 Guardians", "1 Walker", "3 Walkers", and "Set of Base Guardians" Rejuv buff no longer grants +10% Max HP, +15% Fire Rate and +15% Spirit Damage Amp Mid Boss base health increased from 13000 to 14000 Mid Boss health growth per minute increased from 200 to 230 Team that kills Mid Boss gets +2 permanent buffs for each player Dropping / Throwing the Urn now causes Parry to go on CD Soul Urn no longer grants +1 AP to the person dropping it off Soul Urn now provides 4 Permanent Buffs to the person dropping it off Added two levels at 47k and 49k to let you get all ability upgrades Jump Pad stun window increased from 0.6s to 0.9s When meleeing an enemy that is mantling and the mantle slow is applied, mantle sliding right after wards is no longer allowed Subsequent CC reduction increased from 7%/21% to 8/24% Survival Buff hp regen changed from 0.5->1.5% Max HP to 4->40 Fixed Regen Gun Buff ammo increased from 20->60% to 35->70% Gun Buff now reloads your ammo on pickup Casting Buff spirit power increased from 15>40 to 15->65 Casting Buff cooldown reduction rescaled from 12->25% to 12->20% Movement Buff stamina from 1->4 to 2->4 Added new trooper anti-stuck behavior to fix some places where you can move a trooper to get them stuck. Fixed a bug where troopers could clip into the world while running up stairs and over obstacles Golden Statue: Cooldown Reduction reduced from 0.75/1.0/1.5% to 0.5/0.75/1% High Velocity Rounds: Bullet Velocity increased from +45% to +50% (affects upgrades) Toxic Bullets duration increased from 3s to 4s Curse: Now dispels buffs Curse: Cooldown increased from 45s to 55s Curse: Weapon Damage reduced from 20% to 15% Gun base damage reduced by 5% (not growth) Medic Pack missing health % reduced from 10% to 8% Stamina regen returned from 5.25s to 5s Neutrals bounty increased by 5% Fixed a bug with falloff calculation that was often causing guns to do much more damage than intended. We\'ll be monitoring to do subsequent adjustments after this. Hero kill bounty split efficiency for 1/2/3/4/5/6 players changed from 100/100/90/84/65/72% to 100/100/85/70/55/50% Guardians HP increased from 4250 to 5500 Guardians armor decay peak at 12m instead of 10m Fixed Base Guardians HP not matching Lane Guardians (were 1000 less) Hero base health increased by 50 Medic Pack now heal amounts increased by 2x Medic Pack heal now splits its value evenly based on the number of nearby heroes (so 1 hero is 100%, 2 heroes is 50%, 3 heroes is 33%, etc. Other nearby units also get the reduced values.) Medic Pack regen applied over 2s instead of 1s Medic Pack ally search radius from 30 to 35 Medic Pack pickup range scales after 10 minutes (similar to the expiry duration), from 18m at 10 minutes scaling up by 1m per minute up to 26m range. Walkers now have escalating health after each one dies. From a constant 12880 to 8000/11000/14000 (model scale slightly smaller for 1st and slightly bigger for last) Neutrals HP increases by 0.5% per minute Neutrals damage increases by 0.5% per minute Neutrals base damage reduced by 30% Hard neutrals now take +20% more melee damage Sprint/Out of Combat regen timer against neutrals increased from 2.5s to 4s (takes longer to start sprinting/regening) Sprint ramp rate reduced from 1/sec to 0.75/sec (first +3 sprint is immediate, then it starts ramping) Walkers and Mid Boss now have +15% Bullet Resistance and -15% HP Walker ally aura (grants +15% Bullet and Spirit Resist) range reduced from 32m to 28m Getting shot now slows your move speed by 10% for 0.7s When using Spectate teammate buttons (F1-F5) your camera angles are no longer overridden by your teammates Fix for FOV "pop" in Vindicta\'s Assassination Abrams Shoulder Charge cooldown reduced from 37s to 33s Shoulder Charge T3 reduced from -22s Cooldown to -18s Seismic Impact T3 duration increased from 3s to 4s Bebop Health growth reduced from 54 to 46 Exploding Uppercut cooldown increased from 19s to 22s Exploding Uppercut spirit scaling increased from 0.49 to 0.6 Sticky Bomb T3 changed from "On Attach: -30% Outgoing Damage for 5s" to "On Cast: +5 m/s for 3s". Multiple instances stack independently. Hyperbeam DPS reduced from 190 to 160 Hyperbeam T2 increased from +90 to +120 Billy Rising Ram T2 increased from +25% Weapon Damage to +35% Rising Ram T3 increased from 6% Max Health as spirit damage to 6.5% Blasted no longer works against Sinner\'s Sacrifice Blasted Max Health melee spirit scaling reduced from 0.78 to 0.7 Chain Gang will now break slightly faster when target is out of LOS Chain Gang can no longer be broken by mantling Calico Clip size increased from 10 to 12 Reload time increased from 2.5s to 2.6s Gloom Bombs cooldown increased from 12s to 14s Return To Shadows T3 Damage Amp reduced from +24% to +18% Return To Shadows T3 duration increased from 5s to 6s Doorman Base regen from 2 to 1 Bullet damage falloff and effectiveness now use the actual distance traveled, rather than the distance between the starting position and end position. This fixes shooting through portals not using the right distance for falloff. Call Bell explosion damage reduced from 60 to 55 Call Bell T2 explosion damage reduced from +50 to +45 Call Bell impact damage spirit scaling increased from 0.7 to 1.0 Drifter Rend cooldown reduced from 15s to 13s Base regen increased from 2.5 to 3.5 Base health reduced from 750 to 675 Base bullet damage reduced from 22.25 to 19.5 Dynamo Base regen increased from 2 to 2.5 Kinetic Pulse range increased from 15m to 20m Kinetic Pulse cooldown reduced from 26s to 22s Kinetic Pulse range spirit scaling reduced from 0.256 to 0.2 Holliday Base regen reduced from 2.0 to 1.0 Base bullet growth reduced from 1.23 to 1.04 Base damage reduced from 22 to 18 Bounce Pad damage reduced from 80 to 60 Fixed a bug where you could get extra speed/distance with dash jump/bounce pad timing Infernus Afterburn buildup is now 10% slower on body shots Napalm T3 damage amp reduced from +20% to +17% Base bullet damage reduced from 6.2 to 5.5 Bullet falloff range from 20-58 to 18-55 Afterburn now only adds 0.5s to the duration for each bullet that is hit after it procs, rather than fully refreshing the duration. Adds 1.0s for headshots. Ivy Kudzu Bomb damage reduced from 50 to 40 Kudzu Bomb spirit scaling increased from 0.56 to 0.65 Stone Form cooldown reduced from 42s to 37s Watcher’s Covenant bullet lifesteal increased from 10% to 15% Air Drop damage penalty for ally you are carrying reduced from -50% to -30% Air Drop cast range increased from 12m to 14m Kelvin Bullet Velocity reduced from 254 to 160 Frost Grenade base damage reduced from 74 to 60 Frozen Shelter T2 changed from "-45s Cooldown" to "+1s Duration" Frozen Shelter duration reduced from 5.5s to 5s Lash Grapple cooldown reduced from 42s to 35s Flog heal vs heroes increased from 50% to 60% Flog damage increased from 60 to 65 Flog cooldown reduced from 26s to 24 Flog T2 increased from -14s to -12s Death Slam cooldown reduced from 155s to 145s Lady Geist Soul Exchange T3 radius increased from 15m to 25m Mina Sanguine Retreat cooldown increased from 30s to 32s Sanguine Retreat no longer resets air jump and dash limits Love Bites cooldown increased from 7s to 8s Love Bites T3 from -1 Stamina to -2 McGinnis Mini Turrets health per boon increased from 10 to 13 Spectral Wall speed increased by 10% Mirage Fire Scarabs Max Health steal increased from 37 to 45 Traveler can now target friendly objectives Traveler cooldown reduced from 160s to 145s Traveler T1 now also reduces cooldown by 25s Mo & Krill Health Regen reduced from 3 to 1 Paige Bullet damage growth reduced from 0.66 to 0.52 Defend and Fight! barrier reduced from 200 to 150 Defend and Fight! duration reduced from 7s to 5s Defend and Fight! T1 changed from +50 Barrier to +16% Fire Rate (with 0.15 Spirit Power scaling) Defend and Fight! T2 changed from +25% Fire Rate to +100 Barrier Defend and Fight! T2 now also grants +2s Duration Paradox Base regen reduced from 2.0 to 1.0 Bullet damage growth reduced from 0.27 to 0.22 Base health reduced from 700 to 650 Health per boon reduced from 47 to 45 Pulse Grenade damage reduced from 40 to 35 Pulse Grenade spirit scaling increased from 0.43 to 0.55 Fixed a bug where you could airdash further then expected with Kinetic Carbine Pocket Base regen reduced from 2 to 1 Flying Cloak damage reduced from 85 to 70 Flying Cloak T2 increased from +75 to +85 Seven Lightning Ball radius increased from 3.5m to 4.25m Crit reduction increased from 25% to 35% Shiv Alt fire knockback reduced by 10% Alt fire ammo cost increased from 2 to 3 Killing Blow Rage Damage Bonus reduced from 17% to 15% Killing Blow T2 Rage Damage bonus reduced from 8% to 6% Killing Blow Rage state now causes your alt fire knockback to push you a little further Fixed some bugs with Barriers and Spirit Damage Scaling (fixes other cases as well) Rage now builds 8% slower Sinclair Health reduced from 700 to 650 Regen reduced from 3 to 2 Spectral Assistant total swaps allowed increased from 1 to 2 Audience Participation cooldown reduced from 50% to 40% Viscous Splatter cooldown increased from 21s to 30s Splatter T1 changed from "-6s Cooldown" to "+40 Damage and +1m Radius" Splatter T2 changed from "+45 Damage and +1m Radius" to "-12s Cooldown" Splatter T3 now also increases spirit scaling by 0.4 The Cube duration reduced from 4s to 3s The Cube regen increased from 30 to 40 The Cube T2 now also increases duration by +1s Vyper Health per boon increased from 33 to 35 Warden Bullet damage increased from 16.2 to 16.6 Bullet damage growth increased from 0.44 to 0.48 Health regen reduced from 3 to 2 Alchemical Flask radius reduced from 6.5m to 5.5m Alchemical Flask T2 now also grants +1m Bullet damage growth per boon reduced from 0.53 to 0.47 Wraith Card Trick base damage increased from 55 to 60 Project Mind cooldown reduced from 48s to 42s Card Trick spirit scaling reduced from 1.2 to 1.0 Card Toss T2 reduced from +40 Damage to +35 Yamato Base regen reduced from 2.0 to 1.0 Power Slash low charge damage from 40% to 30% Power Slash medium charge damage from 60% to 50% Crimson Slash cooldown increased from 11.5s to 15s Crimson Slash T3 increased from -5.75s Cooldown to -9s Enchanter\'s Emblem Cooldown Reduction reduced from +7% to +5% Compress Cooldown Cooldown Reduction reduced from +22% to +18% Superior Cooldown Cooldown Reduction reduced from +25% to +20% Transcendent Cooldown Cooldown Reduction reduced from +30% to +25% Spellslinger Cooldown Reduction reduced from +12% to +6% Fire Rate per stack increased from 10% to 12% Spiritual Overflow Cooldown Reduction reduced from +20% to +12% Fire Rate increased from +30% to +35% Echo Shard No longer grants +5% Cooldown Reduction Now grants +5% Ability Range (no longer has the +5% CD Reduction) Scourge Cooldown Reduction reduced from +6% to +4% Max Health damage per second increased from 3.25% to 3.5% Cooldown reduced from 38s to 35s Headshot Booster Cooldown increased from 8 to 9 Split Shot Cooldown increased from 14s to 32s Mystic Shot Proc damage reduced from 45 to 40 Spirit power scaling increased from 0.75 to 0.8 Opening Rounds Spirit Power increased from +7 to +8 Blood Tribute Debuff Resistance reduced from +50% to +40% Cultist Sacrifice Now provides Weapon Damage instead of Fire Rate Express Shot Weapon Damage now scales with boons (+2) Weapon Damage reduced from 185% to 170% Secondary Fire Weapon Damage now scales with boons (+1) Secondary Fire Weapon Damage reduced from 75% to 45% Ammo consumed increased from 30% to 40% No longer has a no shooting for 3s requirement Now has a 8s cooldown Primary fire damage reduced from 170% to 125% Secondary fire damage reduced from 45% to 35% Ammo drain reduced from 40% to 30% Weighted Shots Weapon Damage increased from +30% to +35% Warp Stone Bullet Resist reduced from 35% to 30% Escalating Resilience Bonus Health reduced from 125 to 100 Tesla Bullets Shock damage reduced from 40 to 33 Shock damage spirit power growth increased from 0.14 to 0.19 Capacitor Shock damage reduced from 50 to 43 Shock damage spirit power growth increased from 0.14 to 0.19 No longer dispels buffs (moved to Curse) Cooldown reduced from 60s to 50s Slow duration reduced from 5s to 4s (75%->0%) Slow debuff now prevents stamina usage and silences movement abilities Shadow Weave Reveal distance reduced from 20m to 18m Full invisibility distance reduced from 50m to 30m Lucky Shot Damage reduced from 125% to 110% Glass Cannon Max Health reduced from -10% to -13% Crippling Headshot Healing Reduction increased from -30% to -35% Silencer Spirit Resist increased from 14% to 15% Reactive Barrier Cooldown increased from 26s to 40s Duration reduced from 12s to 10s Spirit Shielding Cooldown increased from 35s to 45s Damage threshold increased from 175 to 225 Duration reduced from 8s to 7s Weapon Shielding Cooldown increased from 35s to 45s Duration reduced from 8s to 7s Majestic Leap Cooldown increased from 32s to 34s Cheat Death Removes all non-stun debuffs on proc Inhibitor Healing Reduction increased from -35% to -40% Spellbreaker Cooldown reduced from 10s to 9s Bullet Resist Shredder Bullet Resist Reduction reduced from 13% to 12% Mystic Vulnerability Duration increased from 6s to 7s Spirit Sap Cooldown reduced from 35s to 25s (matches Focus Lens) Decay Healing Reduction increased from -40% to -45% Silence Wave No longer upgrades from Spirit Sap No longer reduces Spirit Resistance or Spirit Power Now deals 100 Impact Damage (0.3 spirit power growth) Spirit Snatch Instead of increasing CD to 2x on light melee hit, the effects of Spirit Snatch are reduced to 70% effectiveness (Damage, Spirit Power, Spirit Resist) Focus Lens Now builds from Spirit Sap Now reduces Spirit Resistance by 12% and reduces Spirit Power by 30 for 12s Fire Rate reduced from +16 to +13 Cooldown increased from 25s to 32s (Spirit Sap now matches this too) Cooldown increased from 32s to 38s Duration reduced from 4.25s to 4s Cooldown increased from 38s to 45s Trophy Collector Souls per minute reduced from 30 to 22 Health per stack reduced from 25 to 20 Fleetfoot Speed duration reduced from 6s to 5s Return Fire Bullet damage returned increased from 50% to 60%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-11-07',
			to: '2025-11-21'
		},
		after: {
			from: '2025-11-22',
			to: '2025-12-06'
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
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 3,
		title: 'Hyperbeam DPS',
		id: 'hyperbeam-dps'
	},
	{
		level: 3,
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 3,
		title: 'Blasted',
		id: 'blasted'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 3,
		title: 'Return To Shadows',
		id: 'return-to-shadows'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Call Bell',
		id: 'call-bell'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend'
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
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
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
		title: 'Napalm',
		id: 'napalm'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn-1'
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
		level: 3,
		title: 'Stone Form',
		id: 'stone-form'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection'
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
		title: 'Flog',
		id: 'flog'
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
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 2,
		title: 'Mina',
		id: 'mina'
	},
	{
		level: 3,
		title: 'Sanguine Retreat',
		id: 'sanguine-retreat'
	},
	{
		level: 3,
		title: 'Love Bites',
		id: 'love-bites'
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
		title: 'Traveler',
		id: 'traveler'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
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
		title: 'Lightning Ball',
		id: 'lightning-ball'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Spectral Assistant',
		id: 'spectral-assistant'
	},
	{
		level: 3,
		title: 'Audience Participation',
		id: 'audience-participation'
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
		title: 'The Cube',
		id: 'the-cube'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
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
		level: 3,
		title: 'Card Trick',
		id: 'card-trick-1'
	},
	{
		level: 3,
		title: 'Card Toss',
		id: 'card-toss'
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
		title: 'Bullet Resist Shredder',
		id: 'bullet-resist-shredder'
	},
	{
		level: 2,
		title: 'Capacitor',
		id: 'capacitor'
	},
	{
		level: 2,
		title: 'Cheat Death',
		id: 'cheat-death'
	},
	{
		level: 2,
		title: 'Compress Cooldown',
		id: 'compress-cooldown'
	},
	{
		level: 2,
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
	},
	{
		level: 2,
		title: 'Cultist Sacrifice',
		id: 'cultist-sacrifice'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: "Enchanter's Emblem",
		id: 'enchanter-s-emblem'
	},
	{
		level: 2,
		title: 'Escalating Resilience',
		id: 'escalating-resilience'
	},
	{
		level: 2,
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Focus Lens',
		id: 'focus-lens'
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
		title: 'Inhibitor',
		id: 'inhibitor'
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
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Mystic Vulnerability',
		id: 'mystic-vulnerability'
	},
	{
		level: 2,
		title: 'Opening Rounds',
		id: 'opening-rounds'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Return Fire',
		id: 'return-fire'
	},
	{
		level: 2,
		title: 'Scourge',
		id: 'scourge'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Silencer',
		id: 'silencer'
	},
	{
		level: 2,
		title: 'Spellbreaker',
		id: 'spellbreaker'
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
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
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
		title: 'Tesla Bullets',
		id: 'tesla-bullets'
	},
	{
		level: 2,
		title: 'Transcendent Cooldown',
		id: 'transcendent-cooldown'
	},
	{
		level: 2,
		title: 'Trophy Collector',
		id: 'trophy-collector'
	},
	{
		level: 2,
		title: 'Warp Stone',
		id: 'warp-stone'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
	},
	{
		level: 2,
		title: 'Weighted Shots',
		id: 'weighted-shots'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-11-07',
			to: '2025-11-21'
		},
		after: {
			from: '2025-11-22',
			to: '2025-12-06'
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
			name: 'Billy',
			id: 'billy'
		},
		{
			kind: 'hero',
			name: 'Calico',
			id: 'calico'
		},
		{
			kind: 'hero',
			name: 'Doorman',
			id: 'doorman'
		},
		{
			kind: 'hero',
			name: 'Drifter',
			id: 'drifter'
		},
		{
			kind: 'hero',
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
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
			name: 'Mina',
			id: 'mina'
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
			name: 'Paige',
			id: 'paige'
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
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Vyper',
			id: 'vyper'
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
			name: 'Blood Tribute',
			id: 'blood-tribute'
		},
		{
			kind: 'item',
			name: 'Bullet Resist Shredder',
			id: 'bullet-resist-shredder'
		},
		{
			kind: 'item',
			name: 'Capacitor',
			id: 'capacitor'
		},
		{
			kind: 'item',
			name: 'Cheat Death',
			id: 'cheat-death'
		},
		{
			kind: 'item',
			name: 'Compress Cooldown',
			id: 'compress-cooldown'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
		},
		{
			kind: 'item',
			name: 'Cultist Sacrifice',
			id: 'cultist-sacrifice'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: "Enchanter's Emblem",
			id: 'enchanter-s-emblem'
		},
		{
			kind: 'item',
			name: 'Escalating Resilience',
			id: 'escalating-resilience'
		},
		{
			kind: 'item',
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Focus Lens',
			id: 'focus-lens'
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
			name: 'Inhibitor',
			id: 'inhibitor'
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
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Mystic Vulnerability',
			id: 'mystic-vulnerability'
		},
		{
			kind: 'item',
			name: 'Opening Rounds',
			id: 'opening-rounds'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Return Fire',
			id: 'return-fire'
		},
		{
			kind: 'item',
			name: 'Scourge',
			id: 'scourge'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Silencer',
			id: 'silencer'
		},
		{
			kind: 'item',
			name: 'Spellbreaker',
			id: 'spellbreaker'
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
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
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
			name: 'Tesla Bullets',
			id: 'tesla-bullets'
		},
		{
			kind: 'item',
			name: 'Transcendent Cooldown',
			id: 'transcendent-cooldown'
		},
		{
			kind: 'item',
			name: 'Trophy Collector',
			id: 'trophy-collector'
		},
		{
			kind: 'item',
			name: 'Warp Stone',
			id: 'warp-stone'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		},
		{
			kind: 'item',
			name: 'Weighted Shots',
			id: 'weighted-shots'
		}
	],
	related: []
};
function _1_21_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Trooper bounty mechanics have been reworked. The first half of the souls still fly out as deniable orb, however rather than the other half being instantly given to nearby players it will fall to the ground as an orb that you need to get near to pick up. It has a 18m capture radius where it&#x27;ll travel to you once you get within. Only one player needs to claim it, share rules remain the same as before.</li><li>They last for 18s on the ground. Duration increases by 2s per minute up to 40s after 10 minutes.</li><li>Enemy orbs are visible as faint colorless soul orbs to your team, but cannot be claimed.</li><li>Amount of souls in the flying orb that can be secured/denied reduced from 50% to 40%</li><li>Very small tweaks to the secure/deny lag calculation to improve it</li><li>Increased trooper range to be considered in range for souls to drop from 35m to 45m</li><li>Medic troopers no longer have a passive healing pulse ability</li><li>Medic troopers now drop a medic pack when you kill them. Has same pickup range/duration mechanics as the soul orbs on the ground. Heals everyone in a 30m radius for 10% of their missing health as well as 75 plus 2 per minute game time.</li><li>Starting souls count increased from 400 to 600</li><li>Trooper bounty values increased by 10%</li><li>Trooper bounty split ratios updated from 1/0.65/0.28/0.15/0.12/0.08 to 1/0.54/0.36/0.25/0.2/0.16</li><li>Reworked the position of your player camera and various details that affect visibility around your hero</li><li>Neutrals bounty increased by 10%</li><li>Neutrals HP increased by +15%</li><li>Small neutrals damage +15%</li><li>Small neutral camps respawn time 180s to 120s</li><li>Medium neutrals spirit resist from 30% to 40%</li><li>Medium neutrals damage increased by 25%</li><li>Hard neutrals spirit resist increased from 35% to 50%</li><li>Hard neutrals damage increased by 30%</li><li>Sinner&#x27;s Sacrifice: Return damage increased from 60 to 80</li><li>Minimum unsecured gold to drop increased from 100 to 150</li><li>Sprint/Out of Combat regen timer against neutrals increased from 0.5s to 2.5s (takes longer to start sprinting/regening)</li><li>Reduced all AP damage upgrades by 10%</li><li>Base gun damage and gun damage growth increased by 10% (excluding Paige)</li><li>Headshot multiplier reduced from 1.8x to 1.65x</li><li>Weapon Investment Bonuses: Now grants an additional +20% Weapon Damage at 4800 souls spent</li><li>Vitality Investment Bonuses: Now grants an additional +12% Bonus Health at 4800 souls spent</li><li>Spirit Investment Bonuses: Now grants an additional +20 Spirit Power at 4800 souls spent</li><li>Added a UI highlight to 4800 reward row of the investment bonuses</li><li>Initial wall jump now costs 0.25 stamina</li><li>Stamina regen rate reduced by 5% (5s to 5.25s)</li><li>After 35 minutes all troopers gain +50% HP.</li><li>Guardians HP increased from 3500 to 4250 HP</li><li>Walker HP increased by 40%</li><li>Walker on the Side Lanes now have same HP as Midlane (rather than ~37% less)</li><li>Walker engagement ranges reduced (ranges for attacks, being attacked, stomps, etc)</li><li>Walker stomp cooldown reduced from 10s to 6s</li><li>Walker stomp damage increased from 350 + 10% Max HP to 350 + 15% Max HP</li><li>Walker fireballs radius from 5m to 6m</li><li>Walker fireballs debuff now lingers for 4s</li><li>Walker fireballs now reduce bullet and spirit resistance by 10%</li><li>Walker area in mid lane adjusted</li><li>Bullet Damage is no longer reduced by 35% of a Hero&#x27;s Base Bullet damage against T1&#x27;s</li><li>Guardians now start with 75% Damage Resist that decay&#x27;s to -50% over the first 10 minutes of a match</li><li>Walkers now start with 75% Damage Resist that decay&#x27;s to -50% over the first 20 minutes of a match</li><li>Note: The Walker resistance change used to be in the client a couple months ago, but it got bugged.</li><li>Base slot count increased from 8 to 9 and Flex slot count reduced from 4 to 3. One is given for each Walker killed. Previously the 4 were given for: &quot;3 Guardians&quot;, &quot;1 Walker&quot;, &quot;3 Walkers&quot;, and &quot;Set of Base Guardians&quot;</li><li>Rejuv buff no longer grants +10% Max HP, +15% Fire Rate and +15% Spirit Damage Amp</li><li>Mid Boss base health increased from 13000 to 14000</li><li>Mid Boss health growth per minute increased from 200 to 230</li><li>Team that kills Mid Boss gets +2 permanent buffs for each player</li><li>Dropping / Throwing the Urn now causes Parry to go on CD</li><li>Soul Urn no longer grants +1 AP to the person dropping it off</li><li>Soul Urn now provides 4 Permanent Buffs to the person dropping it off</li><li>Added two levels at 47k and 49k to let you get all ability upgrades</li><li>Jump Pad stun window increased from 0.6s to 0.9s</li><li>When meleeing an enemy that is mantling and the mantle slow is applied, mantle sliding right after wards is no longer allowed</li><li>Subsequent CC reduction increased from 7%/21% to 8/24%</li><li>Survival Buff hp regen changed from 0.5-&gt;1.5% Max HP to 4-&gt;40 Fixed Regen</li><li>Gun Buff ammo increased from 20-&gt;60% to 35-&gt;70%</li><li>Gun Buff now reloads your ammo on pickup</li><li>Casting Buff spirit power increased from 15&gt;40 to 15-&gt;65</li><li>Casting Buff cooldown reduction rescaled from 12-&gt;25% to 12-&gt;20%</li><li>Movement Buff stamina from 1-&gt;4 to 2-&gt;4</li><li>Added new trooper anti-stuck behavior to fix some places where you can move a trooper to get them stuck.</li><li>Fixed a bug where troopers could clip into the world while running up stairs and over obstacles</li><li>Golden Statue: Cooldown Reduction reduced from 0.75/1.0/1.5% to 0.5/0.75/1%</li><li>High Velocity Rounds: Bullet Velocity increased from +45% to +50% (affects upgrades)</li><li>Toxic Bullets duration increased from 3s to 4s</li><li>Curse: Now dispels buffs</li><li>Curse: Cooldown increased from 45s to 55s</li><li>Curse: Weapon Damage reduced from 20% to 15%</li><li>Gun base damage reduced by 5% (not growth)</li><li>Medic Pack missing health % reduced from 10% to 8%</li><li>Stamina regen returned from 5.25s to 5s</li><li>Neutrals bounty increased by 5%</li><li>Fixed a bug with falloff calculation that was often causing guns to do much more damage than intended. We&#x27;ll be monitoring to do subsequent adjustments after this.</li><li>Hero kill bounty split efficiency for 1/2/3/4/5/6 players changed from 100/100/90/84/65/72% to 100/100/85/70/55/50%</li><li>Guardians HP increased from 4250 to 5500</li><li>Guardians armor decay peak at 12m instead of 10m</li><li>Fixed Base Guardians HP not matching Lane Guardians (were 1000 less)</li><li>Hero base health increased by 50</li><li>Medic Pack now heal amounts increased by 2x</li><li>Medic Pack heal now splits its value evenly based on the number of nearby heroes (so 1 hero is 100%, 2 heroes is 50%, 3 heroes is 33%, etc. Other nearby units also get the reduced values.)</li><li>Medic Pack regen applied over 2s instead of 1s</li><li>Medic Pack ally search radius from 30 to 35</li><li>Medic Pack pickup range scales after 10 minutes (similar to the expiry duration), from 18m at 10 minutes scaling up by 1m per minute up to 26m range.</li><li>Walkers now have escalating health after each one dies. From a constant 12880 to 8000/11000/14000 (model scale slightly smaller for 1st and slightly bigger for last)</li><li>Neutrals HP increases by 0.5% per minute</li><li>Neutrals damage increases by 0.5% per minute</li><li>Neutrals base damage reduced by 30%</li><li>Hard neutrals now take +20% more melee damage</li><li>Sprint/Out of Combat regen timer against neutrals increased from 2.5s to 4s (takes longer to start sprinting/regening)</li><li>Sprint ramp rate reduced from 1/sec to 0.75/sec (first +3 sprint is immediate, then it starts ramping)</li><li>Walkers and Mid Boss now have +15% Bullet Resistance and -15% HP</li><li>Walker ally aura (grants +15% Bullet and Spirit Resist) range reduced from 32m to 28m</li><li>Getting shot now slows your move speed by 10% for 0.7s</li><li>When using Spectate teammate buttons (F1-F5) your camera angles are no longer overridden by your teammates</li><li>Fix for FOV &quot;pop&quot; in Vindicta&#x27;s Assassination</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_21_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n')} <ul><li>${html('Shoulder Charge cooldown reduced from 37s to 33s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Shoulder Charge cooldown reduced from 37s to 33s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shoulder Charge T3 reduced from -22s Cooldown to -18s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact T3 duration increased from 3s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Health growth reduced from 54 to 46</li></ul>\n')} <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n')} <ul><li>${html('Exploding Uppercut cooldown increased from 19s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Exploding Uppercut cooldown increased from 19s to 22s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Exploding Uppercut spirit scaling increased from 0.49 to 0.6')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb T3 changed from &quot;On Attach: -30% Outgoing Damage for 5s&quot; to &quot;On Cast: +5 m/s for 3s&quot;. Multiple instances stack independently.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam-dps">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam DPS change history</a></p>\n<h4 id="hyperbeam-dps"><a href="/ability/hyper-beam">Hyperbeam DPS</a></h4>\n<ul><li>Hyperbeam DPS reduced from 190 to 160</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam T2 increased from +90 to +120</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n')} <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram T2 increased from +25% Weapon Damage to +35%</li><li>Rising Ram T3 increased from 6% Max Health as spirit damage to 6.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div> <div class="ability blasted">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted change history</a></p>\n<h4 id="blasted"><a href="/ability/blasted">Blasted</a></h4>\n<ul><li>Blasted no longer works against Sinner&#x27;s Sacrifice</li><li>Blasted Max Health melee spirit scaling reduced from 0.78 to 0.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n<ul><li>Chain Gang will now break slightly faster when target is out of LOS</li><li>Chain Gang can no longer be broken by mantling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Clip size increased from 10 to 12</li><li>Reload time increased from 2.5s to 2.6s</li></ul>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n')} <ul><li>${html('Gloom Bombs cooldown increased from 12s to 14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Gloom Bombs cooldown increased from 12s to 14s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return To Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return To Shadows</a></h4>\n<ul><li>Return To Shadows T3 Damage Amp reduced from +24% to +18%</li><li>Return To Shadows T3 duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return To Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n<ul><li>Base regen from 2 to 1</li><li>Bullet damage falloff and effectiveness now use the actual distance traveled, rather than the distance between the starting position and end position. This fixes shooting through portals not using the right distance for falloff.</li></ul>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n<ul><li>Call Bell explosion damage reduced from 60 to 55</li><li>Call Bell T2 explosion damage reduced from +50 to +45</li><li>Call Bell impact damage spirit scaling increased from 0.7 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n')} <ul><li>${html('Rend cooldown reduced from 15s to 13s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Rend cooldown reduced from 15s to 13s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base regen increased from 2.5 to 3.5</li><li>Base health reduced from 750 to 675</li><li>Base bullet damage reduced from 22.25 to 19.5</li></ul>\n')}</div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Base regen increased from 2 to 2.5</li></ul>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n')} <ul><li>${html('Kinetic Pulse range increased from 15m to 20m')}</li> <li>${html('Kinetic Pulse cooldown reduced from 26s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Kinetic Pulse cooldown reduced from 26s to 22s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kinetic Pulse range spirit scaling reduced from 0.256 to 0.2')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n<ul><li>Base regen reduced from 2.0 to 1.0</li><li>Base bullet growth reduced from 1.23 to 1.04</li><li>Base damage reduced from 22 to 18</li></ul>\n')} <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n')} <ul><li>${html('Bounce Pad damage reduced from 80 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Bounce Pad damage reduced from 80 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fixed a bug where you could get extra speed/distance with dash jump/bounce pad timing</li></ul>\n')}</div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn buildup is now 10% slower on body shots</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability napalm">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Napalm change history</a></p>\n<h4 id="napalm"><a href="/ability/napalm">Napalm</a></h4>\n<ul><li>Napalm T3 damage amp reduced from +20% to +17%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Napalm'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base bullet damage reduced from 6.2 to 5.5</li><li>Bullet falloff range from 20-58 to 18-55</li></ul>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn-1"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn now only adds 0.5s to the duration for each bullet that is hit after it procs, rather than fully refreshing the duration. Adds 1.0s for headshots.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability kudzu-bomb">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>\n<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>\n')} <ul><li>${html('Kudzu Bomb damage reduced from 50 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Kudzu Bomb damage reduced from 50 to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kudzu Bomb spirit scaling increased from 0.56 to 0.65')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n')} <ul><li>${html('Stone Form cooldown reduced from 42s to 37s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Stone Form cooldown reduced from 42s to 37s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher’s Covenant bullet lifesteal increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop damage penalty for ally you are carrying reduced from -50% to -30%</li><li>Air Drop cast range increased from 12m to 14m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Bullet Velocity reduced from 254 to 160</li></ul>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade base damage reduced from 74 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Frost Grenade base damage reduced from 74 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter T2 changed from &quot;-45s Cooldown&quot; to &quot;+1s Duration&quot;</li><li>Frozen Shelter duration reduced from 5.5s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n')} <ul><li>${html('Soul Exchange T3 radius increased from 15m to 25m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Soul Exchange T3 radius increased from 15m to 25m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n')} <ul><li>${html('Grapple cooldown reduced from 42s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Grapple cooldown reduced from 42s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n')} <ul><li>${html('Flog heal vs heroes increased from 50% to 60%')}</li> <li>${html('Flog damage increased from 60 to 65')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Flog damage increased from 60 to 65'
	});
	$$renderer.push(`<!----></li> <li>${html('Flog cooldown reduced from 26s to 24')} `);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Flog cooldown reduced from 26s to 24'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flog T2 increased from -14s to -12s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n')} <ul><li>${html('Death Slam cooldown reduced from 155s to 145s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Death Slam cooldown reduced from 155s to 145s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets health per boon increased from 10 to 13</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall speed increased by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n')} <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n')} <ul><li>${html('Sanguine Retreat cooldown increased from 30s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Sanguine Retreat cooldown increased from 30s to 32s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sanguine Retreat no longer resets air jump and dash limits')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>\n<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>\n')} <ul><li>${html('Love Bites cooldown increased from 7s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Love Bites cooldown increased from 7s to 8s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Love Bites T3 from -1 Stamina to -2')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs Max Health steal increased from 37 to 45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n')} <ul><li>${html('Traveler can now target friendly objectives')}</li> <li>${html('Traveler cooldown reduced from 160s to 145s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Traveler cooldown reduced from 160s to 145s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Traveler T1 now also reduces cooldown by 25s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero mo-krill">\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Health Regen reduced from 3 to 1</li></ul>\n</div>\n<div class="hero paige">\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n<ul><li>Bullet damage growth reduced from 0.66 to 0.52</li><li>Defend and Fight! barrier reduced from 200 to 150</li><li>Defend and Fight! duration reduced from 7s to 5s</li><li>Defend and Fight! T1 changed from +50 Barrier to +16% Fire Rate (with 0.15 Spirit Power scaling)</li><li>Defend and Fight! T2 changed from +25% Fire Rate to +100 Barrier</li><li>Defend and Fight! T2 now also grants +2s Duration</li></ul>\n</div>\n')} <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Base regen reduced from 2.0 to 1.0</li><li>Bullet damage growth reduced from 0.27 to 0.22</li><li>Base health reduced from 700 to 650</li><li>Health per boon reduced from 47 to 45</li></ul>\n')} <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n')} <ul><li>${html('Pulse Grenade damage reduced from 40 to 35')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Pulse Grenade damage reduced from 40 to 35'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Pulse Grenade spirit scaling increased from 0.43 to 0.55')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Fixed a bug where you could airdash further then expected with Kinetic Carbine</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Base regen reduced from 2 to 1</li></ul>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n')} <ul><li>${html('Flying Cloak damage reduced from 85 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Flying Cloak damage reduced from 85 to 70'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flying Cloak T2 increased from +75 to +85')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n')} <ul><li>${html('Lightning Ball radius increased from 3.5m to 4.25m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lightning Ball radius increased from 3.5m to 4.25m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Crit reduction increased from 25% to 35%</li></ul>\n')}</div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Alt fire knockback reduced by 10%</li><li>Alt fire ammo cost increased from 2 to 3</li></ul>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow Rage Damage Bonus reduced from 17% to 15%</li><li>Killing Blow T2 Rage Damage bonus reduced from 8% to 6%</li><li>Killing Blow Rage state now causes your alt fire knockback to push you a little further</li><li>Fixed some bugs with Barriers and Spirit Damage Scaling (fixes other cases as well)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Rage now builds 8% slower</li></ul>\n')}</div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n<ul><li>Health reduced from 700 to 650</li><li>Regen reduced from 3 to 2</li></ul>\n')} <div class="ability spectral-assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>\n<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>\n<ul><li>Spectral Assistant total swaps allowed increased from 1 to 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Spectral Assistant'
	});
	$$renderer.push(
		`<!----></div> <div class="ability audience-participation">${html('\n<p><a href="/ability/audience-participation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Audience Participation change history</a></p>\n<h4 id="audience-participation"><a href="/ability/audience-participation">Audience Participation</a></h4>\n')} <ul><li>${html('Audience Participation cooldown reduced from 50% to 40%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Audience Participation cooldown reduced from 50% to 40%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Audience Participation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n')} <ul><li>${html('Splatter cooldown increased from 21s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Splatter cooldown increased from 21s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter T1 changed from &quot;-6s Cooldown&quot; to &quot;+40 Damage and +1m Radius&quot;')}</li> <li>${html('Splatter T2 changed from &quot;+45 Damage and +1m Radius&quot; to &quot;-12s Cooldown&quot;')}</li> <li>${html('Splatter T3 now also increases spirit scaling by 0.4')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube duration reduced from 4s to 3s</li><li>The Cube regen increased from 30 to 40</li><li>The Cube T2 now also increases duration by +1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero vyper">\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n<ul><li>Health per boon increased from 33 to 35</li></ul>\n</div>\n')} <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet damage increased from 16.2 to 16.6</li><li>Bullet damage growth increased from 0.44 to 0.48</li><li>Health regen reduced from 3 to 2</li></ul>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n')} <ul><li>${html('Alchemical Flask radius reduced from 6.5m to 5.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Alchemical Flask radius reduced from 6.5m to 5.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask T2 now also grants +1m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage growth per boon reduced from 0.53 to 0.47</li></ul>\n')}</div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick base damage increased from 55 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Card Trick base damage increased from 55 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n')} <ul><li>${html('Project Mind cooldown reduced from 48s to 42s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Project Mind cooldown reduced from 48s to 42s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick-1"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick spirit scaling reduced from 1.2 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-toss">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Toss change history</a></p>\n<h4 id="card-toss"><a href="/ability/card-trick">Card Toss</a></h4>\n<ul><li>Card Toss T2 reduced from +40 Damage to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Toss'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Base regen reduced from 2.0 to 1.0</li></ul>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash low charge damage from 40% to 30%</li><li>Power Slash medium charge damage from 60% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n')} <ul><li>${html('Crimson Slash cooldown increased from 11.5s to 15s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Crimson Slash cooldown increased from 11.5s to 15s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Crimson Slash T3 increased from -5.75s Cooldown to -9s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_1_21_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>Debuff Resistance reduced from +50% to +40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>Bullet Resist Reduction reduced from 13% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Shock damage reduced from 50 to 43')}</li> <li>${html('Shock damage spirit power growth increased from 0.14 to 0.19')}</li> <li>${html('No longer dispels buffs (moved to Curse)')}</li> <li>${html('Cooldown reduced from 60s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown reduced from 60s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Slow duration reduced from 5s to 4s (75%-&gt;0%)')}</li> <li>${html('Slow debuff now prevents stamina usage and silences movement abilities')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n<ul><li>Removes all non-stun debuffs on proc</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item compress-cooldown">${html('\n<p><a href="/item/compress-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Compress Cooldown patch history</a></p>\n<h3 id="compress-cooldown"><a href="/item/compress-cooldown">Compress Cooldown</a></h3>\n<ul><li>Cooldown Reduction reduced from +22% to +18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Compress Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>Healing Reduction increased from -30% to -35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Now provides Weapon Damage instead of Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Healing Reduction increased from -40% to -45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>No longer grants +5% Cooldown Reduction</li><li>Now grants +5% Ability Range (no longer has the +5% CD Reduction)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enchanter-s-emblem">${html('\n<p><a href="/item/enchanters-emblem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enchanter&#x27;s Emblem patch history</a></p>\n<h3 id="enchanter-s-emblem"><a href="/item/enchanters-emblem">Enchanter&#x27;s Emblem</a></h3>\n<ul><li>Cooldown Reduction reduced from +7% to +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Enchanter's Emblem",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Bonus Health reduced from 125 to 100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Weapon Damage now scales with boons (+2)</li><li>Weapon Damage reduced from 185% to 170%</li><li>Secondary Fire Weapon Damage now scales with boons (+1)</li><li>Secondary Fire Weapon Damage reduced from 75% to 45%</li><li>Ammo consumed increased from 30% to 40%</li><li>No longer has a no shooting for 3s requirement</li><li>Now has a 8s cooldown</li><li>Primary fire damage reduced from 170% to 125%</li><li>Secondary fire damage reduced from 45% to 35%</li><li>Ammo drain reduced from 40% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n<ul><li>Speed duration reduced from 6s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item focus-lens">${html('\n<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>\n<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>\n')} <ul><li>${html('Now builds from Spirit Sap')}</li> <li>${html('Now reduces Spirit Resistance by 12% and reduces Spirit Power by 30 for 12s')}</li> <li>${html('Fire Rate reduced from +16 to +13')}</li> <li>${html('Cooldown increased from 25s to 32s (Spirit Sap now matches this too)')}</li> <li>${html('Cooldown increased from 32s to 38s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		groupIndex: 0,
		bulletIndex: 4,
		text: 'Cooldown increased from 32s to 38s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration reduced from 4.25s to 4s')}</li> <li>${html('Cooldown increased from 38s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		groupIndex: 0,
		bulletIndex: 6,
		text: 'Cooldown increased from 38s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Max Health reduced from -10% to -13%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown increased from 8 to 9')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 8 to 9'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Healing Reduction increased from -35% to -40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n')} <ul><li>${html('Damage reduced from 125% to 110%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 125% to 110%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown increased from 32s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 32s to 34s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Proc damage reduced from 45 to 40</li><li>Spirit power scaling increased from 0.75 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-vulnerability">${html('\n<p><a href="/item/mystic-vulnerability"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Vulnerability patch history</a></p>\n<h3 id="mystic-vulnerability"><a href="/item/mystic-vulnerability">Mystic Vulnerability</a></h3>\n<ul><li>Duration increased from 6s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Vulnerability',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item opening-rounds">${html('\n<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>\n<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>\n<ul><li>Spirit Power increased from +7 to +8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Opening Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 26s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 26s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration reduced from 12s to 10s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Bullet damage returned increased from 50% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n')} <ul><li>${html('Cooldown Reduction reduced from +6% to +4%')}</li> <li>${html('Max Health damage per second increased from 3.25% to 3.5%')}</li> <li>${html('Cooldown reduced from 38s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Scourge',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 38s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Reveal distance reduced from 20m to 18m</li><li>Full invisibility distance reduced from 50m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n<ul><li>No longer upgrades from Spirit Sap</li><li>No longer reduces Spirit Resistance or Spirit Power</li><li>Now deals 100 Impact Damage (0.3 spirit power growth)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Spirit Resist increased from 14% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n')} <ul><li>${html('Cooldown reduced from 10s to 9s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 10s to 9s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellslinger">${html('\n<p><a href="/item/spellslinger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellslinger patch history</a></p>\n<h3 id="spellslinger"><a href="/item/spellslinger">Spellslinger</a></h3>\n<ul><li>Cooldown Reduction reduced from +12% to +6%</li><li>Fire Rate per stack increased from 10% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellslinger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-sap">${html('\n<p><a href="/item/spirit-sap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Sap patch history</a></p>\n<h3 id="spirit-sap"><a href="/item/spirit-sap">Spirit Sap</a></h3>\n<ul><li>Cooldown reduced from 35s to 25s (matches Focus Lens)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Sap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n')} <ul><li>${html('Cooldown increased from 35s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 35s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Damage threshold increased from 175 to 225')}</li> <li>${html('Duration reduced from 8s to 7s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Instead of increasing CD to 2x on light melee hit, the effects of Spirit Snatch are reduced to 70% effectiveness (Damage, Spirit Power, Spirit Resist)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Cooldown Reduction reduced from +20% to +12%</li><li>Fire Rate increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item split-shot">${html('\n<p><a href="/item/split-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Split Shot patch history</a></p>\n<h3 id="split-shot"><a href="/item/split-shot">Split Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 14s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 14s to 32s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Cooldown Reduction reduced from +25% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Shock damage reduced from 40 to 33</li><li>Shock damage spirit power growth increased from 0.14 to 0.19</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item transcendent-cooldown">${html('\n<p><a href="/item/transcendent-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Transcendent Cooldown patch history</a></p>\n<h3 id="transcendent-cooldown"><a href="/item/transcendent-cooldown">Transcendent Cooldown</a></h3>\n<ul><li>Cooldown Reduction reduced from +30% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Transcendent Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Souls per minute reduced from 30 to 22</li><li>Health per stack reduced from 25 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Bullet Resist reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n')} <ul><li>${html('Cooldown increased from 35s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 35s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration reduced from 8s to 7s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weighted-shots">${html('\n<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>\n<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>\n<ul><li>Weapon Damage increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weighted Shots',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _1_21_mg as default, metadata, readingManifest, toc };
