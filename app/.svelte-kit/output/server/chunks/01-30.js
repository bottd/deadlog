import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/01-30.mg?embed=0
function _1_30_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Apollo',
			'Bebop',
			'Billy',
			'Calico',
			'Celeste',
			'Drifter',
			'Dynamo',
			'Graves',
			'Grey Talon',
			'Holliday',
			'Ivy',
			'Kelvin',
			'Lash',
			'McGinnis',
			'Mina',
			'Mirage',
			'Paige',
			'Rem',
			'Seven',
			'Shiv',
			'Silver',
			'Venator',
			'Victor',
			'Vindicta',
			'Viscous',
			'Vyper',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2026/01-30.mg?embed=1
function _1_30_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Alchemical Fire',
			'Arctic Blast',
			'Bullet Resilience',
			'Bullet Resist Shredder',
			'Capacitor',
			'Cold Front',
			'Debuff Reducer',
			'Dispel Magic',
			'Echo Shard',
			'Extra Regen',
			'Fury Trance',
			'Glass Cannon',
			'Healing Booster',
			'Healing Tempo',
			'Hollow Point',
			'Inhibitor',
			'Intensifying Magazine',
			'Kinetic Dash',
			'Lifestrike',
			'Lightning Scroll',
			'Lucky Shot',
			'Melee Lifesteal',
			'Mercurial Magnum',
			'Metal Skin',
			'Mystic Regeneration',
			'Mystic Reverb',
			'Mystic Slow',
			'Prism Blast',
			'Quicksilver Reload',
			'Radiant Regeneration',
			'Rapid Recharge',
			'Restorative Locket',
			'Silence Wave',
			'Slowing Bullets',
			'Spellbreaker',
			'Spirit Burn',
			'Spirit Resilience',
			'Stamina Mastery',
			'Unstoppable'
		]
	});
}
//#endregion
//#region changelogs/2026/01-30.mg
var metadata = {
	title: '01-30-2026 Update',
	thread_id: '102822',
	published: '2026-01-30T15:57:51-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added hero banning to Standard Mode and Street Brawl. You can now select one hero in your roster screen (using middle click) to tell the matchmaker that you prefer to avoid that hero. When the game starts, it will tell you which heroes were banned. We are doing just 2 total bans for now. This does not affect new heroes in the initial release window. Parties of 3+ players now need to have an additional hero in their roster (from 3 to 4) Fire Rate increases and reductions from most abilities and items are reduced globally by a small amount Updated various on bullet hit resistance reduction debuffs to apply increased damage for subsequent hits rather than initial hit (similar to the spirit damage proc cases) Added Dash Speed to the Vitality stat screen Debuff Remover: Now renamed to Dispel Magic Curse: Renamed Curse to Cursed Relic Curse: No longer grants +15% Weapon Damage Curse: While holding this item you have a -8% Total Damage Penalty Street Brawl now has custom balancing for heroes and items. These will be used on occasion as needed. The tooltip will now show a special mark (similar to how Enhanced Items work), where you can see what was changed on that ability. Selecting the 'Random Hero' option will now grant you a bonus reroll for round 1 and 2 Troopers now have 20% Spirit Resist. During overtime they have an additional 20% Spirit Resist. Legendary items drop rates increased very slightly Ultimates initial cooldown increased by 5s Trooper Spawn Rate from: 20/20/20/15/15 to 18/18/15/15/15 Trooper Overtime DPS bonus increased by 20% Objective resist decay now peaks at 2.2 minutes rather than 2.5 minutes Objective resist decay now goes to -60% instead of -50% Removed global 40% healing reduction (balance note: it didn't actually work on many things that it was supposed to work on. We'll be adjusting specific things that need healing reductions directly instead.) Enhanced Unstable Concoction: Now increases Bonus Health, Weapon Damage, Spirit Power and Stun Duration Enhanced Unstable Concoction: No longer increases duration or cooldown Curse: Duration reduced from 3.25s to 2.75s Street Brawl: Healing in base is now 2x faster Street Brawl: Randoming bonus reroll now also affects round 3 Street Brawl: McGinnis Heavy Barrage duration reduced from 13s to 8s Street Brawl: Graves Jar of Dead charge cooldown increased from 13s to 16s Troopers now get stronger for the specific lane that the shrine died in, rather than only after both shrines died (when both die, middle lane also gets improved) Shrines HP reduced by 10% Improved blue zipline attach speed and fixed various bugs Street Brawl: There is now a global time slow when the round ends Street Brawl: You can now move around in the spawn area after buying phase ends Quick Silver Reload and Mercurial Magnum now proc on non-spirit ability sources Abrams Gun Falloff range reduced from 20m-46m to 17m-40m Bullet damage growth reduced from +0.154 to +0.13 Siphon Life T3 reduced from +31 DPS to +20 DPS and Increased Spirit Scaling (+0.12) Fixed Shoulder Charge T1 triggering from non-heroes Seismic Impact damage increased from 55 to 75 Seismic Impact stun duration increased from 1.5s to 1.6s Improved collision consistency with Seismic Impact Bebop Exploding Uppercut T3 no longer grants +100% Ammo Exploding Uppercut T3 now also restores 20% of your Missing HP on enemy hero hit Fixed some bugs with Sticky Bomb tooltip Sticky Bomb stacks now diminish after 60 hits and 7 kills (rather than 100/10) Sticky Bomb now drops on the ground and continues counting down when dispelled Sticky Bomb can no longer be selfcast Sticky Bomb T2 increased from +70 Damage to +75 Hyperbeam duration reduced from 11s to 7s Sticky Bomb on hit/kill spirit scaling reduced from 0.0025/0.015 to 0.002/0.012 Sticky Bomb T3 duration increased from 3s to 5s Sticky Bomb T3 now grants +20% Fire Rate Uppercut T3 heal reduced from 20% Missing Health to 17% Sticky Bomb fuse timer increased from 3.0 to 3.5 Sticky Bomb radius reduced from 12m to 10m Sticky Bomb hit/kill spirit scaling reduced from 0.002/0.012 to 0.0015/0.01 Billy Bullet damage growth reduced from 0.18 to 0.165 Blasted Amp increased from 9% to 10% Blasted Melee Bonus Health reduced from 80 to 70 Blasted Melee Bonus Health spirit scaling increased from 0.7 to 0.8 Chain Gang damage reduced from 150 to 120 Chain Gang now always goes on full cooldown after interruption Drifter Bloodscent Isolation Range reduced from 25m to 20m Stalker's Mark T3 now also increases duration by 2s Fixed Stalkers Mark not gaining charges from items after upgrading the T3 Eternal Night cooldown reduced from 130s to 120s Bloodscent Isolation Range reduced from 20m to 10m Grey Talon Rain of Arrows air speed from 3.8 to 4.1 Spirit Snare lifetime increased from 20s to 22s Guided Owl cooldown reduced from 120s to 110s Guided Owl spirit power per kill increased from 8 to 10 Ivy No longer has reduced melee damage Air Drop now has a very brief period where allies cannot cancel to prevent accidental cancels Kelvin Ice Path T2 increased from -15s Cooldown to -17s Ice Path T3 max spirit increased from 75 to 90 Ice Path T3 duration increased from 8s to 9s Frozen Shelter duration increased from 5s to 5.25s Lash Ground Strike rotation is restricted to 90 degrees rather than 360 Fixed bugs with Ground Strike where it would sometimes not do damage on ramps and special locations Grapple T1 reduced from -19s Cooldown to -17s Flog damage spirit scaling reduced from 1.1 to 0.85 Death Slam throw distance reduced by 30% Ground Strike damage reduced by 10% Mina Move speed reduced from 6.6 to 6.5 Stamina cooldown increased from 3.6s to 3.9s Rake Heal spirit scaling reduced from 0.5 to 0.43 Love Bites bonus damage spirit power scaling reduced from 1.7 to 1.6 Love Bites T3 reduced from -2 Stamina to -1 Paige Defend and Fight barrier reduced from 150 to 125 Captivating Read damage reduced from 120 to 90 Shiv Serrated Knives impact damage spirit ratio reduced from 0.558 to 0.25 Health growth per boon reduced from 48 to 45 Serrated Knives overall damage reduced by 12% Victor Aura of Suffering spirit scaling reduced from 0.23/1.15 to 0.18/0.92 Viscous Spirit per boon increased from 1.1 to 1.3 Bullet damage per boon reduced from +0.5 to +0.36 The Cube T3 no longer removes ult debuffs Puddle Punch displacement duration reduced from 1s to 0.8s Vyper Lethal Venom Max Venom damage reduced from 165 to 140 Lethal Venom Max Damage now happens at 30% HP instead of 25% Lethal Venom cooldown increased from 20s to 24s Lethal Venom T2 now also reduces cooldown by 8s Screwjab Dagger T3 increased from 40% Charge Cooldown to 55% Petrifying Bola damage increased from 45/165 to 50/180 Vindicta Stake Tether Length no longer increases when Capture Radius increases Assassinate now grants +5% Weapon Damage per kill rather than Bonus Souls Assassinate T3 now provides an additional +4% Weapon Damage per kill (retroactive) Warden Bullet damage growth reduced from 0.47 to 0.44 Last Stand healing reduced by 25% McGinnis Mini Turret cooldown increased from 18s to 26s Medicinal Specter regen reduced by 20% (was unaffected by the global regen change previously) Seven Storm Cloud damage reduced by 25% Dynamo Rejuvenating Aurora T3 reduced from 2.5% to 2% (was previously being reduced) Singularity max HP damage reduced from 1.5% to 1% Graves Borrowed Decree duration reduced by 30% Borrowed Decree ghoul damage reduced by 30% Jar of Dead overall damage reduced by 18% Jar of Dead distances deadheads bounce off enemies is reduced Jar of Dead deadheads now die a little faster to damage Borrowed Decree T3 changed from 5% Max HP to 5% Current HP Fixed her weapon not working with Close Quarters & Point Blank Fixed Fire Rate bonuses sometimes increasing the fire rate by a lower amount than intended Reduced gun range from 18m to 16m Increase base move speed from 6.6 to 7.0m Jar of Dead initial charges from 1 to 2 Jar of Dead initial attacks more staggered, rather than all at once Jar of Dead pickup range for death from 10m to 18m Borrowed Decree ghouls are now slowed by 20% for 0.5s when taking bullet damage Borrowed Decree cooldown increased from 110s to 120s Base damage from 4.2 to 4.0 Max attack range increased from 16m to 17m Grasping Hands width reduced from 20m to 14m Grasping Hands duration reduced from 7s to 5s Grasping Hands damage spirit scaling 1.3 to 1.9 Jar of Dead max duration reduced from 15s to 10s Jar of Dead damage increased from 16 to 20 Borrowed Decree spawn interval improved from every 5s to every 4s (same total ghouls over the duration) Borrowed Decree duration reduced from 20s to 16s (spirit scaling from 0.05 to 0.04) Holliday Crackshot Spirit Scaling increased from 1.1 to 2.5 Bounce Pad cooldown reduced by 20s Mirage Traveler Cooldown reduced from 155s to 60s Calico Return to Shadows cooldown reduced from 90s to 60s Rem Pillow Toss Cooldown On Pillow Hit from -4s to -5s Tag Along T2 Item and Barrier effectiveness increase from 20% to 25% Lil Helpers T2 increased from +1m Move Speed to +1.5 Naptime T3 increased from -40s Cooldown to -55s Light Melee damage increased by 15% Pillow Toss time between charges reduced from 12s to 10s Pillow Toss T2 now also grants +2m Radius Pillow Toss T3 no longer grants +2m Radius Pillow Toss T3 now also grants +1 Charge Lil Helpers souls gained on troopers when no nearby allies are around increased from 50% to 100% Lil Helpers troopers now grants +20% Bonus Bounty to the killer Lil Helpers following trooper heal reduced from 14/s to 10/s Lil Helpers following trooper heal spirit scaling increased from 0.1 to 0.125 Lil Helpers trooper resistance reduced from 35% to 30% Lil Helpers T3 increased from +15% Resistance to +20% Enemies attacking a Sinner's Sacrifice while your helpers are on it will now cause them to get scared and go back to you Naptime T3 increased from -55s Cooldown to -65s Silver Improved base fire rate (cycle rate from 1 to 0.9, this is a 11% DPS increase) Increase base magazine size from 5 to 6 Increase base regen from 2 to 2.5 Slam Fire Cooldown increased from 20s to 22s Slam Fire T1 changed from -4s cooldown to +15% Weapon Damage Slam Fire T2 changed from +30% Weapon Damage to -7s Cooldown Slam Fire T3 reduced from 10% Current Health to 8% Boot Kick T3 changed from -25% damage to +80 spirit damage and -35% damage Entangling Bola T3 changed from ricocheting bolas to ricocheting bolas and -5s cooldown Lycan Curse increase attack range from 5.5m to 6.0m Lycan Curse Headshot Resistance reduced from -35% to -20% Fixed slowing down when using her weapon in Lycan Curse (was doing that in human form rather than in Lycan Curse) Fixed her weapon not working with Close Quarters & Point Blank when in Lycan Curse Lycan Curse requires more damage to transform later in the game Lycan Curse Cooldown from 22s to 35s Lycan Curse base health bonus from 350 to 100 Lycan Curse movespeed bonus from +3m to +2m Go for the Throat Missing Health Damage reduced from 8% to 6% Go for the Throat T3 Missing Health Damage reduced from 5% to 4% Go For The Throat Cooldown from 5s to 6.5s Base health increased from 725 to 800 Falloff range changed from 16m-46m to 20m-46m Ammo increased from 6 to 7 Boot Kick spirit scaling increased from 1 to 2 Entangling Bola spirit scaling increased from 1 to 1.6 Go For The Throat range increased from 7m to 7.5m Lycan Curse buildup rate improved a bit Lycan Curse resist reduced from 20% to 14% (T1 from 15% to 14%) Celeste Now has a base -6% Bullet Resistance Base damage reduced from 29 to 25 Light Eater Spirit Lifesteal no longer grants lifesteal to allies doing damage Light Eater now respects line of sight Dazzling Trick explosion radius reduced from 15m to 14m Radiant Daggers damage reduced from 65 to 60 Radiant Daggers spirit scaling reduced from 0.49 to 0.42 Shining Wonder damage reduced from 115 to 105 Shining Wonder now causes you glide down more slowly while channeling it if cast in the air Air Acceleration reduced from 25% to 18% (gravity/air control part unchanged) Bullet damage rescaled from 25 + 0.4/boon to 18 + 0.6/boon Light Eater T1 and T2 swapped the Lifesteal and Cooldown Reduction Radiant Daggers base damage reduced from 60 to 55 Radiant Daggers CD increased by 3s (moved to T2) Shining Wonder bounce speed reduced a bit Shining Wonder air glide now falls faster after a short period Venator Health increased from 720 to 750 Consecrating Grenade T2 now also increases debuff duration by +1s Gutshot cooldown reduced from 26s to 23s Gutshot added tooltip for wall stun distance. Gutshot fixed wall stun distance not scaling with ability range Gutshot increased wall stun distance from 6.5m to 7m Gutshot on wall hit bonus damage scaling increased from 0.4 to 0.9 Gutshot T2 changed from -8s cooldown and 2.5m range to -10s cooldown and +0.4s stun duration Hex Lined Snap Trap now spawns in line with the crosshair, rather than in line with Venator Hex-Lined Snap Trap clarified tooltip Hex-Lined Snap Trap spirit scaling increased from 1.6 to 2.2 Hex-Lined Snap Trap reveal duration increased from 5s to 6s Hex-Lined Snap Trap cooldown reduced from 30s to 25s Hex-Lined Snap Trap T2 reduced from -12s to -8s Hex-Lined Snap Trap T3 increased from 20% to 25% Ira Domini reduced weapon damage scaling from 1.7 to 1.5 Ira Domini now has a laser visual & sound effect where Venator is aiming Ira Domini T2 reduced from -15s cooldown and 150 damage to -15s cooldown and 65 damage Apollo Bullet damage growth increased from 0.6 to 0.75 Flawless Advance T2 now also increases bullet resist while performing the hold/lunge Fixed Slowing Hex not preventing Disengaging Sigil Riposte On Pummel Hit changed from -15% Bullet Resist to -22% Melee Resist (affects T2 as well) Flawless Advance hit radius reduced by ~10% Flawless Advance Base Hold Damage reduced from 30 to 25 Flawless Advance Base Hold Damage spirit scaling reduced from 0.7 to 0.55 Flawless Advance Max Hold Damage reduced from 45 to 40 Flawless Advance Max Hold Damage spirit scaling reduced from 1.1 to 0.9 Flawless Advance Perfect Damage reduced from 75 to 65 Flawless Advance Perfect Damage spirit scaling reduced from 1.65 to 1.55 Flawless Advance T3 reduced from +75 Perfect Damage to +65 Flawless Advance T3 spirit scaling indirectly reduced (it is +15% Spirit Scaling) Flawless Advance T1 heal on hit reduced from 35 to 30 Itani Lo Sahn now goes on cooldown when interrupted Fixed Itani Lo Sahn hitting targets behind him Itani Lo Sahn base damage reduced from 250 to 225 Itani Lo Sahn spirit scaling reduced from 1.75 to 1.6 Kinetic Dash Bonus ammo no longer scales with % increase Intensifying Magazine Time for Max Damage reduced from 3s to 2.5s Slowing Bullets No longer provides Fire Rate Now provides +15% Weapon Damage Dash Distance reduction increased from -20% to -25% Minor improvement in buildup rate Hollow Point Bullet Resist Reduction reduced from -12% to -9% Alchemical Fire Bullet Resist Reduction reduced from -8% to -7% Bullet Resist Reduction spirit scaling reduced from 0.07 to 0.055 Damage reduced by 30% Glass Cannon Max Health penalty increased from -13% to -15% Lucky Shot Ammo reduced from +40% to +30% Crit reduced from 110% to 100% Capacitor Debuff duration reduced from 4s to 3s Cooldown reduced from 50s to 40s Melee Lifesteal Light Melee cooldown penalty reduced from 2x to 1.5x Lifestrike Light Melee cooldown penalty reduced from 2x to 1.5x Extra Regen Now provides +1 Out of Combat Regen Healing Booster Now provides +1 Out of Combat Regen Healing Tempo Now provides +4 Out of Combat Regen Restorative Locket Cooldown reduced from 30s to 20s Changed from +6% Spirit Resist to +8% Changed to self cast only Now restores up to 3 stamina based on the percentage of stacks you have relative to the max Fury Trance Bullet Lifesteal reduced from 22% to 18% Fire Rate reduced from 35% to 30% Stamina Mastery Air Dash distance reduced from 30% to 23% Stamina recovery reduced from 20% to 18% Metal Skin Cooldown increased from 20s to 24s Bullet Resilience Low HP threshold increased from 30% to 35% health Health Threshold trigger from 35% to 40% HP Threshold Bullet Resistance bonus reduced from 30% to 22% Spirit Resilience Low HP threshold increased from 30% to 35% health Health Threshold trigger from 35% to 40% HP Threshold Spirit Resistance bonus reduced from 30% to 22% Dispel Magic No longer builds from Debuff Reducer No longer grants +30% Debuff Resistance Now grants +14% Spirit Resistance No longer grants +100 HP Move Speed bonus reduced from 2.25 to 2 Spirit Resist increased from 14% to 16% Debuff Reducer Debuff Resistance increased from 20% to 25% No longer grants +50 Health Unstoppable Bonus Health increased from +75 to +125 Debuff Resistance increased from 20% to 25% Spellbreaker Now builds out of Debuff Reducer Spirit Resistance reduced from 25% to 18% Inhibitor Weapon Damage increased from 15% to 22% Bonus Health increased from 125 to 150 Bullet Resist Shredder Bullet Resistance increased from 7% to 8% Bullet Resist Reduction reduced from -12% to -10% Mystic Regeneration Now provides +40 Health Radiant Regeneration Now provides +65 Health Cold Front Vertical hitbox increased from 2.5m to 3.5m Spread duration increased from 0.5s to 0.6s Arctic Blast Vertical hitbox increased from 2.5m to 3.5m Spread duration increased from 0.5s to 0.6s Mystic Slow Dash distance increased from -10% to -12% Lightning Scroll Dash distance increased from -10% to -12% Quicksilver Reload Bonus damage now has spirit scaling (0.16) Mercurial Magnum Bonus damage now has spirit scaling (0.16) Silence Wave Spirit damage scaling increased from 0.3 to 0.6 Rapid Recharge Bonus Spirit Power for Charged Abilities reduced from +16 to +10 Time between charges reduced from +50% to +30% Now reduces cooldown on charged abilities by 14% Mystic Reverb Spirit Lifesteal reduced from 15% to 10% Imbued ability now provides +30% Spirit Lifesteal for any damage it does (including the reverb) Imbued Lifesteal from 30% to 27% Echo Shard Removed cast time Spirit Burn Burn DPS now scales with spirit power (0.05) Prism Blast DPS reduced from 300 to 270",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2026-01-31',
			to: '2026-02-02'
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
		title: 'Siphon Life',
		id: 'siphon-life'
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
		title: 'Apollo',
		id: 'apollo'
	},
	{
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance'
	},
	{
		level: 3,
		title: 'Disengaging Sigil',
		id: 'disengaging-sigil'
	},
	{
		level: 3,
		title: 'Riposte On Pummel Hit',
		id: 'riposte-on-pummel-hit'
	},
	{
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance-1'
	},
	{
		level: 3,
		title: 'Flawless Advance Base Hold Damage',
		id: 'flawless-advance-base-hold-damage'
	},
	{
		level: 3,
		title: 'Flawless Advance Max Hold Damage',
		id: 'flawless-advance-max-hold-damage'
	},
	{
		level: 3,
		title: 'Flawless Advance Perfect Damage',
		id: 'flawless-advance-perfect-damage'
	},
	{
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance-2'
	},
	{
		level: 3,
		title: 'Itani Lo Sahn',
		id: 'itani-lo-sahn'
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
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb-1'
	},
	{
		level: 3,
		title: 'Uppercut',
		id: 'uppercut'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb-2'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Blasted Amp',
		id: 'blasted-amp'
	},
	{
		level: 3,
		title: 'Blasted Melee Bonus Health',
		id: 'blasted-melee-bonus-health'
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
		title: 'Return to Shadows',
		id: 'return-to-shadows'
	},
	{
		level: 2,
		title: 'Celeste',
		id: 'celeste'
	},
	{
		level: 3,
		title: 'Light Eater Spirit Lifesteal',
		id: 'light-eater-spirit-lifesteal'
	},
	{
		level: 3,
		title: 'Light Eater',
		id: 'light-eater'
	},
	{
		level: 3,
		title: 'Dazzling Trick',
		id: 'dazzling-trick'
	},
	{
		level: 3,
		title: 'Radiant Daggers',
		id: 'radiant-daggers'
	},
	{
		level: 3,
		title: 'Shining Wonder',
		id: 'shining-wonder'
	},
	{
		level: 3,
		title: 'Air Acceleration',
		id: 'air-acceleration'
	},
	{
		level: 3,
		title: 'Light Eater',
		id: 'light-eater-1'
	},
	{
		level: 3,
		title: 'Radiant Daggers',
		id: 'radiant-daggers-1'
	},
	{
		level: 3,
		title: 'Radiant Daggers CD',
		id: 'radiant-daggers-cd'
	},
	{
		level: 3,
		title: 'Shining Wonder',
		id: 'shining-wonder-1'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Bloodscent Isolation Range',
		id: 'bloodscent-isolation-range'
	},
	{
		level: 3,
		title: "Stalker's Mark",
		id: 'stalker-s-mark'
	},
	{
		level: 3,
		title: 'Eternal Night',
		id: 'eternal-night'
	},
	{
		level: 3,
		title: 'Bloodscent Isolation Range',
		id: 'bloodscent-isolation-range-1'
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
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Graves',
		id: 'graves'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree-1'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead-1'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree-2'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead-2'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree-3'
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
		title: 'Spirit Snare',
		id: 'spirit-snare'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Crackshot Spirit Scaling',
		id: 'crackshot-spirit-scaling'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
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
		title: 'Ice Path',
		id: 'ice-path'
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
		title: 'Ground Strike',
		id: 'ground-strike'
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
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike-1'
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
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 2,
		title: 'Mina',
		id: 'mina'
	},
	{
		level: 3,
		title: 'Rake Heal',
		id: 'rake-heal'
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
		title: 'Traveler Cooldown',
		id: 'traveler-cooldown'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
	},
	{
		level: 3,
		title: 'Captivating Read',
		id: 'captivating-read'
	},
	{
		level: 2,
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Pillow Toss',
		id: 'pillow-toss'
	},
	{
		level: 3,
		title: 'Tag Along',
		id: 'tag-along'
	},
	{
		level: 3,
		title: 'Lil Helpers',
		id: 'lil-helpers'
	},
	{
		level: 3,
		title: 'Naptime',
		id: 'naptime'
	},
	{
		level: 3,
		title: 'Pillow Toss',
		id: 'pillow-toss-1'
	},
	{
		level: 3,
		title: 'Lil Helpers',
		id: 'lil-helpers-1'
	},
	{
		level: 3,
		title: 'Naptime',
		id: 'naptime-1'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
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
		title: 'Serrated Knives',
		id: 'serrated-knives-1'
	},
	{
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Slam Fire Cooldown',
		id: 'slam-fire-cooldown'
	},
	{
		level: 3,
		title: 'Slam Fire',
		id: 'slam-fire'
	},
	{
		level: 3,
		title: 'Boot Kick',
		id: 'boot-kick'
	},
	{
		level: 3,
		title: 'Entangling Bola',
		id: 'entangling-bola'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse'
	},
	{
		level: 3,
		title: 'Lycan Curse Headshot Resistance',
		id: 'lycan-curse-headshot-resistance'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse-1'
	},
	{
		level: 3,
		title: 'Boot Kick',
		id: 'boot-kick-1'
	},
	{
		level: 3,
		title: 'Entangling Bola',
		id: 'entangling-bola-1'
	},
	{
		level: 3,
		title: 'Go For The Throat',
		id: 'go-for-the-throat'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse-2'
	},
	{
		level: 2,
		title: 'Venator',
		id: 'venator'
	},
	{
		level: 3,
		title: 'Consecrating Grenade',
		id: 'consecrating-grenade'
	},
	{
		level: 3,
		title: 'Gutshot',
		id: 'gutshot'
	},
	{
		level: 3,
		title: 'Hex Lined Snap Trap',
		id: 'hex-lined-snap-trap'
	},
	{
		level: 3,
		title: 'Hex-Lined Snap Trap',
		id: 'hex-lined-snap-trap-1'
	},
	{
		level: 3,
		title: 'Ira Domini',
		id: 'ira-domini'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Stake Tether Length',
		id: 'stake-tether-length'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
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
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Lethal Venom Max Venom',
		id: 'lethal-venom-max-venom'
	},
	{
		level: 3,
		title: 'Lethal Venom Max Damage',
		id: 'lethal-venom-max-damage'
	},
	{
		level: 3,
		title: 'Lethal Venom',
		id: 'lethal-venom'
	},
	{
		level: 3,
		title: 'Screwjab Dagger',
		id: 'screwjab-dagger'
	},
	{
		level: 3,
		title: 'Petrifying Bola',
		id: 'petrifying-bola'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
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
		title: 'Arctic Blast',
		id: 'arctic-blast'
	},
	{
		level: 2,
		title: 'Bullet Resilience',
		id: 'bullet-resilience'
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
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Debuff Reducer',
		id: 'debuff-reducer'
	},
	{
		level: 2,
		title: 'Dispel Magic',
		id: 'dispel-magic'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Fury Trance',
		id: 'fury-trance'
	},
	{
		level: 2,
		title: 'Glass Cannon',
		id: 'glass-cannon'
	},
	{
		level: 2,
		title: 'Healing Booster',
		id: 'healing-booster'
	},
	{
		level: 2,
		title: 'Healing Tempo',
		id: 'healing-tempo'
	},
	{
		level: 2,
		title: 'Hollow Point',
		id: 'hollow-point'
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
		title: 'Lightning Scroll',
		id: 'lightning-scroll'
	},
	{
		level: 2,
		title: 'Lucky Shot',
		id: 'lucky-shot'
	},
	{
		level: 2,
		title: 'Melee Lifesteal',
		id: 'melee-lifesteal'
	},
	{
		level: 2,
		title: 'Mercurial Magnum',
		id: 'mercurial-magnum'
	},
	{
		level: 2,
		title: 'Metal Skin',
		id: 'metal-skin'
	},
	{
		level: 2,
		title: 'Mystic Regeneration',
		id: 'mystic-regeneration'
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
		title: 'Prism Blast',
		id: 'prism-blast'
	},
	{
		level: 2,
		title: 'Quicksilver Reload',
		id: 'quicksilver-reload'
	},
	{
		level: 2,
		title: 'Radiant Regeneration',
		id: 'radiant-regeneration'
	},
	{
		level: 2,
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Slowing Bullets',
		id: 'slowing-bullets'
	},
	{
		level: 2,
		title: 'Spellbreaker',
		id: 'spellbreaker'
	},
	{
		level: 2,
		title: 'Spirit Burn',
		id: 'spirit-burn'
	},
	{
		level: 2,
		title: 'Spirit Resilience',
		id: 'spirit-resilience'
	},
	{
		level: 2,
		title: 'Stamina Mastery',
		id: 'stamina-mastery'
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
		before: null,
		after: {
			from: '2026-01-31',
			to: '2026-02-02'
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
			name: 'Apollo',
			id: 'apollo'
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
			name: 'Celeste',
			id: 'celeste'
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
			name: 'Graves',
			id: 'graves'
		},
		{
			kind: 'hero',
			name: 'Grey Talon',
			id: 'grey-talon'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
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
			name: 'Paige',
			id: 'paige'
		},
		{
			kind: 'hero',
			name: 'Rem',
			id: 'rem'
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
			name: 'Silver',
			id: 'silver'
		},
		{
			kind: 'hero',
			name: 'Venator',
			id: 'venator'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
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
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'item',
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Arctic Blast',
			id: 'arctic-blast'
		},
		{
			kind: 'item',
			name: 'Bullet Resilience',
			id: 'bullet-resilience'
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
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Debuff Reducer',
			id: 'debuff-reducer'
		},
		{
			kind: 'item',
			name: 'Dispel Magic',
			id: 'dispel-magic'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Fury Trance',
			id: 'fury-trance'
		},
		{
			kind: 'item',
			name: 'Glass Cannon',
			id: 'glass-cannon'
		},
		{
			kind: 'item',
			name: 'Healing Booster',
			id: 'healing-booster'
		},
		{
			kind: 'item',
			name: 'Healing Tempo',
			id: 'healing-tempo'
		},
		{
			kind: 'item',
			name: 'Hollow Point',
			id: 'hollow-point'
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
			name: 'Lightning Scroll',
			id: 'lightning-scroll'
		},
		{
			kind: 'item',
			name: 'Lucky Shot',
			id: 'lucky-shot'
		},
		{
			kind: 'item',
			name: 'Melee Lifesteal',
			id: 'melee-lifesteal'
		},
		{
			kind: 'item',
			name: 'Mercurial Magnum',
			id: 'mercurial-magnum'
		},
		{
			kind: 'item',
			name: 'Metal Skin',
			id: 'metal-skin'
		},
		{
			kind: 'item',
			name: 'Mystic Regeneration',
			id: 'mystic-regeneration'
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
			name: 'Prism Blast',
			id: 'prism-blast'
		},
		{
			kind: 'item',
			name: 'Quicksilver Reload',
			id: 'quicksilver-reload'
		},
		{
			kind: 'item',
			name: 'Radiant Regeneration',
			id: 'radiant-regeneration'
		},
		{
			kind: 'item',
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Slowing Bullets',
			id: 'slowing-bullets'
		},
		{
			kind: 'item',
			name: 'Spellbreaker',
			id: 'spellbreaker'
		},
		{
			kind: 'item',
			name: 'Spirit Burn',
			id: 'spirit-burn'
		},
		{
			kind: 'item',
			name: 'Spirit Resilience',
			id: 'spirit-resilience'
		},
		{
			kind: 'item',
			name: 'Stamina Mastery',
			id: 'stamina-mastery'
		},
		{
			kind: 'item',
			name: 'Unstoppable',
			id: 'unstoppable'
		}
	],
	related: []
};
function _1_30_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added hero banning to Standard Mode and Street Brawl. You can now select one hero in your roster screen (using middle click) to tell the matchmaker that you prefer to avoid that hero. When the game starts, it will tell you which heroes were banned. We are doing just 2 total bans for now. This does not affect new heroes in the initial release window.</li><li>Parties of 3+ players now need to have an additional hero in their roster (from 3 to 4)</li><li>Fire Rate increases and reductions from most abilities and items are reduced globally by a small amount</li><li>Updated various on bullet hit resistance reduction debuffs to apply increased damage for subsequent hits rather than initial hit (similar to the spirit damage proc cases)</li><li>Added Dash Speed to the Vitality stat screen</li><li>Debuff Remover: Now renamed to Dispel Magic</li><li>Curse: Renamed Curse to Cursed Relic</li><li>Curse: No longer grants +15% Weapon Damage</li><li>Curse: While holding this item you have a -8% Total Damage Penalty</li><li>Street Brawl now has custom balancing for heroes and items. These will be used on occasion as needed. The tooltip will now show a special mark (similar to how Enhanced Items work), where you can see what was changed on that ability.</li><li>Selecting the &#x27;Random Hero&#x27; option will now grant you a bonus reroll for round 1 and 2</li><li>Troopers now have 20% Spirit Resist. During overtime they have an additional 20% Spirit Resist.</li><li>Legendary items drop rates increased very slightly</li><li>Ultimates initial cooldown increased by 5s</li><li>Trooper Spawn Rate from: 20/20/20/15/15 to 18/18/15/15/15</li><li>Trooper Overtime DPS bonus increased by 20%</li><li>Objective resist decay now peaks at 2.2 minutes rather than 2.5 minutes</li><li>Objective resist decay now goes to -60% instead of -50%</li><li>Removed global 40% healing reduction (balance note: it didn&#x27;t actually work on many things that it was supposed to work on. We&#x27;ll be adjusting specific things that need healing reductions directly instead.)</li><li>Enhanced Unstable Concoction: Now increases Bonus Health, Weapon Damage, Spirit Power and Stun Duration</li><li>Enhanced Unstable Concoction: No longer increases duration or cooldown</li><li>Curse: Duration reduced from 3.25s to 2.75s</li><li>Street Brawl: Healing in base is now 2x faster</li><li>Street Brawl: Randoming bonus reroll now also affects round 3</li><li>Street Brawl: McGinnis Heavy Barrage duration reduced from 13s to 8s</li><li>Street Brawl: Graves Jar of Dead charge cooldown increased from 13s to 16s</li><li>Troopers now get stronger for the specific lane that the shrine died in, rather than only after both shrines died (when both die, middle lane also gets improved)</li><li>Shrines HP reduced by 10%</li><li>Improved blue zipline attach speed and fixed various bugs</li><li>Street Brawl: There is now a global time slow when the round ends</li><li>Street Brawl: You can now move around in the spawn area after buying phase ends</li><li>Quick Silver Reload and Mercurial Magnum now proc on non-spirit ability sources</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_30_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Gun Falloff range reduced from 20m-46m to 17m-40m</li><li>Bullet damage growth reduced from +0.154 to +0.13</li></ul>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life T3 reduced from +31 DPS to +20 DPS and Increased Spirit Scaling (+0.12)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed Shoulder Charge T1 triggering from non-heroes</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Seismic Impact damage increased from 55 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Seismic Impact damage increased from 55 to 75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Seismic Impact stun duration increased from 1.5s to 1.6s')}</li> <li>${html('Improved collision consistency with Seismic Impact')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n<ul><li>Bullet damage growth increased from 0.6 to 0.75</li></ul>\n')} <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance T2 now also increases bullet resist while performing the hold/lunge</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability disengaging-sigil">${html('\n<p><a href="/ability/disengaging-sigil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Disengaging Sigil change history</a></p>\n<h4 id="disengaging-sigil"><a href="/ability/disengaging-sigil">Disengaging Sigil</a></h4>\n<ul><li>Fixed Slowing Hex not preventing Disengaging Sigil</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Disengaging Sigil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability riposte-on-pummel-hit">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte On Pummel Hit change history</a></p>\n<h4 id="riposte-on-pummel-hit"><a href="/ability/riposte">Riposte On Pummel Hit</a></h4>\n<ul><li>Riposte On Pummel Hit changed from -15% Bullet Resist to -22% Melee Resist (affects T2 as well)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte On Pummel Hit'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance-1"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance hit radius reduced by ~10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance-base-hold-damage">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance Base Hold Damage change history</a></p>\n<h4 id="flawless-advance-base-hold-damage"><a href="/ability/flawless-advance">Flawless Advance Base Hold Damage</a></h4>\n<ul><li>Flawless Advance Base Hold Damage reduced from 30 to 25</li><li>Flawless Advance Base Hold Damage spirit scaling reduced from 0.7 to 0.55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance Base Hold Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance-max-hold-damage">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance Max Hold Damage change history</a></p>\n<h4 id="flawless-advance-max-hold-damage"><a href="/ability/flawless-advance">Flawless Advance Max Hold Damage</a></h4>\n<ul><li>Flawless Advance Max Hold Damage reduced from 45 to 40</li><li>Flawless Advance Max Hold Damage spirit scaling reduced from 1.1 to 0.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance Max Hold Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance-perfect-damage">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance Perfect Damage change history</a></p>\n<h4 id="flawless-advance-perfect-damage"><a href="/ability/flawless-advance">Flawless Advance Perfect Damage</a></h4>\n<ul><li>Flawless Advance Perfect Damage reduced from 75 to 65</li><li>Flawless Advance Perfect Damage spirit scaling reduced from 1.65 to 1.55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance Perfect Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance-2"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance T3 reduced from +75 Perfect Damage to +65</li><li>Flawless Advance T3 spirit scaling indirectly reduced (it is +15% Spirit Scaling)</li><li>Flawless Advance T1 heal on hit reduced from 35 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability itani-lo-sahn">${html('\n<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>\n<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>\n')} <ul><li>${html('Itani Lo Sahn now goes on cooldown when interrupted')}</li> <li>${html('Fixed Itani Lo Sahn hitting targets behind him')}</li> <li>${html('Itani Lo Sahn base damage reduced from 250 to 225')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		groupIndex: 9,
		bulletIndex: 2,
		text: 'Itani Lo Sahn base damage reduced from 250 to 225'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Itani Lo Sahn spirit scaling reduced from 1.75 to 1.6')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Itani Lo Sahn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Exploding Uppercut T3 no longer grants +100% Ammo</li><li>Exploding Uppercut T3 now also restores 20% of your Missing HP on enemy hero hit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Fixed some bugs with Sticky Bomb tooltip</li><li>Sticky Bomb stacks now diminish after 60 hits and 7 kills (rather than 100/10)</li><li>Sticky Bomb now drops on the ground and continues counting down when dispelled</li><li>Sticky Bomb can no longer be selfcast</li><li>Sticky Bomb T2 increased from +70 Damage to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam duration reduced from 11s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb-1"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb on hit/kill spirit scaling reduced from 0.0025/0.015 to 0.002/0.012</li><li>Sticky Bomb T3 duration increased from 3s to 5s</li><li>Sticky Bomb T3 now grants +20% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Uppercut change history</a></p>\n<h4 id="uppercut"><a href="/ability/exploding-uppercut">Uppercut</a></h4>\n<ul><li>Uppercut T3 heal reduced from 20% Missing Health to 17%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb-2"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb fuse timer increased from 3.0 to 3.5')}</li> <li>${html('Sticky Bomb radius reduced from 12m to 10m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Sticky Bomb radius reduced from 12m to 10m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sticky Bomb hit/kill spirit scaling reduced from 0.002/0.012 to 0.0015/0.01')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Bullet damage growth reduced from 0.18 to 0.165</li></ul>\n')} <div class="ability blasted-amp">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted Amp change history</a></p>\n<h4 id="blasted-amp"><a href="/ability/blasted">Blasted Amp</a></h4>\n<ul><li>Blasted Amp increased from 9% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability blasted-melee-bonus-health">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted Melee Bonus Health change history</a></p>\n<h4 id="blasted-melee-bonus-health"><a href="/ability/blasted">Blasted Melee Bonus Health</a></h4>\n<ul><li>Blasted Melee Bonus Health reduced from 80 to 70</li><li>Blasted Melee Bonus Health spirit scaling increased from 0.7 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted Melee Bonus Health'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n')} <ul><li>${html('Chain Gang damage reduced from 150 to 120')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Chain Gang damage reduced from 150 to 120'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Chain Gang now always goes on full cooldown after interruption')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n')} <ul><li>${html('Return to Shadows cooldown reduced from 90s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Return to Shadows cooldown reduced from 90s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n<ul><li>Now has a base -6% Bullet Resistance</li><li>Base damage reduced from 29 to 25</li></ul>\n')} <div class="ability light-eater-spirit-lifesteal">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater Spirit Lifesteal change history</a></p>\n<h4 id="light-eater-spirit-lifesteal"><a href="/ability/light-eater">Light Eater Spirit Lifesteal</a></h4>\n<ul><li>Light Eater Spirit Lifesteal no longer grants lifesteal to allies doing damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater Spirit Lifesteal'
	});
	$$renderer.push(
		`<!----></div> <div class="ability light-eater">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>\n<h4 id="light-eater"><a href="/ability/light-eater">Light Eater</a></h4>\n<ul><li>Light Eater now respects line of sight</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n<ul><li>Dazzling Trick explosion radius reduced from 15m to 14m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n')} <ul><li>${html('Radiant Daggers damage reduced from 65 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Radiant Daggers damage reduced from 65 to 60'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Radiant Daggers spirit scaling reduced from 0.49 to 0.42')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n')} <ul><li>${html('Shining Wonder damage reduced from 115 to 105')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Shining Wonder damage reduced from 115 to 105'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shining Wonder now causes you glide down more slowly while channeling it if cast in the air')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-acceleration">${html('\n<h4 id="air-acceleration">Air Acceleration</h4>\n<ul><li>Air Acceleration reduced from 25% to 18% (gravity/air control part unchanged)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Air Acceleration'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage rescaled from 25 + 0.4/boon to 18 + 0.6/boon</li></ul>\n')} <div class="ability light-eater">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>\n<h4 id="light-eater-1"><a href="/ability/light-eater">Light Eater</a></h4>\n<ul><li>Light Eater T1 and T2 swapped the Lifesteal and Cooldown Reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers-1"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n')} <ul><li>${html('Radiant Daggers base damage reduced from 60 to 55')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 9,
		bulletIndex: 0,
		text: 'Radiant Daggers base damage reduced from 60 to 55'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers-cd">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers CD change history</a></p>\n<h4 id="radiant-daggers-cd"><a href="/ability/radiant-daggers">Radiant Daggers CD</a></h4>\n<ul><li>Radiant Daggers CD increased by 3s (moved to T2)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers CD'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder-1"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder bounce speed reduced a bit</li><li>Shining Wonder air glide now falls faster after a short period</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability bloodscent-isolation-range">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent Isolation Range change history</a></p>\n<h4 id="bloodscent-isolation-range"><a href="/ability/bloodscent">Bloodscent Isolation Range</a></h4>\n<ul><li>Bloodscent Isolation Range reduced from 25m to 20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent Isolation Range'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stalker-s-mark">${html('\n<p><a href="/ability/stalkers-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stalker&#x27;s Mark change history</a></p>\n<h4 id="stalker-s-mark"><a href="/ability/stalkers-mark">Stalker&#x27;s Mark</a></h4>\n<ul><li>Stalker&#x27;s Mark T3 now also increases duration by 2s</li><li>Fixed Stalkers Mark not gaining charges from items after upgrading the T3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: "Stalker's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability eternal-night">${html('\n<p><a href="/ability/eternal-night"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Eternal Night change history</a></p>\n<h4 id="eternal-night"><a href="/ability/eternal-night">Eternal Night</a></h4>\n')} <ul><li>${html('Eternal Night cooldown reduced from 130s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Eternal Night cooldown reduced from 130s to 120s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Eternal Night'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodscent-isolation-range">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent Isolation Range change history</a></p>\n<h4 id="bloodscent-isolation-range-1"><a href="/ability/bloodscent">Bloodscent Isolation Range</a></h4>\n<ul><li>Bloodscent Isolation Range reduced from 20m to 10m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent Isolation Range'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora T3 reduced from 2.5% to 2% (was previously being reduced)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity max HP damage reduced from 1.5% to 1%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Borrowed Decree duration reduced by 30%</li><li>Borrowed Decree ghoul damage reduced by 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead overall damage reduced by 18%</li><li>Jar of Dead distances deadheads bounce off enemies is reduced</li><li>Jar of Dead deadheads now die a little faster to damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree-1"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Borrowed Decree T3 changed from 5% Max HP to 5% Current HP</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fixed her weapon not working with Close Quarters &amp; Point Blank</li><li>Fixed Fire Rate bonuses sometimes increasing the fire rate by a lower amount than intended</li><li>Reduced gun range from 18m to 16m</li><li>Increase base move speed from 6.6 to 7.0m</li></ul>\n')} <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead-1"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead initial charges from 1 to 2</li><li>Jar of Dead initial attacks more staggered, rather than all at once</li><li>Jar of Dead pickup range for death from 10m to 18m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree-2"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n')} <ul><li>${html('Borrowed Decree ghouls are now slowed by 20% for 0.5s when taking bullet damage')}</li> <li>${html('Borrowed Decree cooldown increased from 110s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Graves',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Borrowed Decree cooldown increased from 110s to 120s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base damage from 4.2 to 4.0</li><li>Max attack range increased from 16m to 17m</li></ul>\n')} <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands width reduced from 20m to 14m</li><li>Grasping Hands duration reduced from 7s to 5s</li><li>Grasping Hands damage spirit scaling 1.3 to 1.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead-2"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n')} <ul><li>${html('Jar of Dead max duration reduced from 15s to 10s')}</li> <li>${html('Jar of Dead damage increased from 16 to 20')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Graves',
		groupIndex: 8,
		bulletIndex: 1,
		text: 'Jar of Dead damage increased from 16 to 20'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree-3"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Borrowed Decree spawn interval improved from every 5s to every 4s (same total ghouls over the duration)</li><li>Borrowed Decree duration reduced from 20s to 16s (spirit scaling from 0.05 to 0.04)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows air speed from 3.8 to 4.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spirit-snare">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>\n<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>\n<ul><li>Spirit Snare lifetime increased from 20s to 22s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Spirit Snare'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl cooldown reduced from 120s to 110s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Guided Owl cooldown reduced from 120s to 110s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Guided Owl spirit power per kill increased from 8 to 10')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability crackshot-spirit-scaling">${html('\n<p><a href="/ability/crackshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crackshot Spirit Scaling change history</a></p>\n<h4 id="crackshot-spirit-scaling"><a href="/ability/crackshot">Crackshot Spirit Scaling</a></h4>\n<ul><li>Crackshot Spirit Scaling increased from 1.1 to 2.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Crackshot Spirit Scaling'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n<ul><li>Bounce Pad cooldown reduced by 20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>No longer has reduced melee damage</li></ul>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop now has a very brief period where allies cannot cancel to prevent accidental cancels</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path T2 increased from -15s Cooldown to -17s</li><li>Ice Path T3 max spirit increased from 75 to 90</li><li>Ice Path T3 duration increased from 8s to 9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter duration increased from 5s to 5.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike rotation is restricted to 90 degrees rather than 360</li><li>Fixed bugs with Ground Strike where it would sometimes not do damage on ramps and special locations</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n<ul><li>Grapple T1 reduced from -19s Cooldown to -17s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n<ul><li>Flog damage spirit scaling reduced from 1.1 to 0.85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam throw distance reduced by 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike-1"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike damage reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n')} <ul><li>${html('Mini Turret cooldown increased from 18s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Mini Turret cooldown increased from 18s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter regen reduced by 20% (was unaffected by the global regen change previously)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n<ul><li>Move speed reduced from 6.6 to 6.5</li><li>Stamina cooldown increased from 3.6s to 3.9s</li></ul>\n')} <div class="ability rake-heal">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake Heal change history</a></p>\n<h4 id="rake-heal"><a href="/ability/rake">Rake Heal</a></h4>\n<ul><li>Rake Heal spirit scaling reduced from 0.5 to 0.43</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake Heal'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>\n<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>\n<ul><li>Love Bites bonus damage spirit power scaling reduced from 1.7 to 1.6</li><li>Love Bites T3 reduced from -2 Stamina to -1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability traveler-cooldown">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler Cooldown change history</a></p>\n<h4 id="traveler-cooldown"><a href="/ability/traveler">Traveler Cooldown</a></h4>\n<ul><li>Traveler Cooldown reduced from 155s to 60s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler Cooldown'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n<ul><li>Defend and Fight barrier reduced from 150 to 125</li></ul>\n')} <div class="ability captivating-read">${html('\n<p><a href="/ability/captivating-read"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_blindinglight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Captivating Read change history</a></p>\n<h4 id="captivating-read"><a href="/ability/captivating-read">Captivating Read</a></h4>\n')} <ul><li>${html('Captivating Read damage reduced from 120 to 90')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Captivating Read damage reduced from 120 to 90'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Captivating Read'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n')} <div class="ability pillow-toss">${html('\n<p><a href="/ability/pillow-toss"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_pillow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pillow Toss change history</a></p>\n<h4 id="pillow-toss"><a href="/ability/pillow-toss">Pillow Toss</a></h4>\n<ul><li>Pillow Toss Cooldown On Pillow Hit from -4s to -5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Pillow Toss'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tag-along">${html('\n<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>\n<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>\n<ul><li>Tag Along T2 Item and Barrier effectiveness increase from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Tag Along'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lil-helpers">${html('\n<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>\n<h4 id="lil-helpers"><a href="/ability/lil-helpers">Lil Helpers</a></h4>\n<ul><li>Lil Helpers T2 increased from +1m Move Speed to +1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Lil Helpers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>\n<ul><li>Naptime T3 increased from -40s Cooldown to -55s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Light Melee damage increased by 15%</li></ul>\n')} <div class="ability pillow-toss">${html('\n<p><a href="/ability/pillow-toss"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_pillow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pillow Toss change history</a></p>\n<h4 id="pillow-toss-1"><a href="/ability/pillow-toss">Pillow Toss</a></h4>\n<ul><li>Pillow Toss time between charges reduced from 12s to 10s</li><li>Pillow Toss T2 now also grants +2m Radius</li><li>Pillow Toss T3 no longer grants +2m Radius</li><li>Pillow Toss T3 now also grants +1 Charge</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Pillow Toss'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lil-helpers">${html('\n<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>\n<h4 id="lil-helpers-1"><a href="/ability/lil-helpers">Lil Helpers</a></h4>\n<ul><li>Lil Helpers souls gained on troopers when no nearby allies are around increased from 50% to 100%</li><li>Lil Helpers troopers now grants +20% Bonus Bounty to the killer</li><li>Lil Helpers following trooper heal reduced from 14/s to 10/s</li><li>Lil Helpers following trooper heal spirit scaling increased from 0.1 to 0.125</li><li>Lil Helpers trooper resistance reduced from 35% to 30%</li><li>Lil Helpers T3 increased from +15% Resistance to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Lil Helpers'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Enemies attacking a Sinner&#x27;s Sacrifice while your helpers are on it will now cause them to get scared and go back to you</li></ul>\n')} <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime-1"><a href="/ability/naptime">Naptime</a></h4>\n<ul><li>Naptime T3 increased from -55s Cooldown to -65s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud damage reduced by 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives impact damage spirit ratio reduced from 0.558 to 0.25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Health growth per boon reduced from 48 to 45</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives-1"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives overall damage reduced by 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n<ul><li>Improved base fire rate (cycle rate from 1 to 0.9, this is a 11% DPS increase)</li><li>Increase base magazine size from 5 to 6</li><li>Increase base regen from 2 to 2.5</li></ul>\n')} <div class="ability slam-fire-cooldown">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire Cooldown change history</a></p>\n<h4 id="slam-fire-cooldown"><a href="/ability/slam-fire">Slam Fire Cooldown</a></h4>\n<ul><li>Slam Fire Cooldown increased from 20s to 22s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire Cooldown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slam-fire">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire change history</a></p>\n<h4 id="slam-fire"><a href="/ability/slam-fire">Slam Fire</a></h4>\n<ul><li>Slam Fire T1 changed from -4s cooldown to +15% Weapon Damage</li><li>Slam Fire T2 changed from +30% Weapon Damage to -7s Cooldown</li><li>Slam Fire T3 reduced from 10% Current Health to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire'
	});
	$$renderer.push(
		`<!----></div> <div class="ability boot-kick">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Boot Kick change history</a></p>\n<h4 id="boot-kick"><a href="/ability/boot-kick">Boot Kick</a></h4>\n<ul><li>Boot Kick T3 changed from -25% damage to +80 spirit damage and -35% damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Boot Kick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-bola">${html('\n<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>\n<h4 id="entangling-bola"><a href="/ability/entangling-bola">Entangling Bola</a></h4>\n<ul><li>Entangling Bola T3 changed from ricocheting bolas to ricocheting bolas and -5s cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Entangling Bola'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Lycan Curse increase attack range from 5.5m to 6.0m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse-headshot-resistance">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse Headshot Resistance change history</a></p>\n<h4 id="lycan-curse-headshot-resistance"><a href="/ability/lycan-curse">Lycan Curse Headshot Resistance</a></h4>\n<ul><li>Lycan Curse Headshot Resistance reduced from -35% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse Headshot Resistance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse-1"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Fixed slowing down when using her weapon in Lycan Curse (was doing that in human form rather than in Lycan Curse)</li><li>Fixed her weapon not working with Close Quarters &amp; Point Blank when in Lycan Curse</li><li>Lycan Curse requires more damage to transform later in the game</li><li>Lycan Curse Cooldown from 22s to 35s</li><li>Lycan Curse base health bonus from 350 to 100</li><li>Lycan Curse movespeed bonus from +3m to +2m</li><li>Go for the Throat Missing Health Damage reduced from 8% to 6%</li><li>Go for the Throat T3 Missing Health Damage reduced from 5% to 4%</li><li>Go For The Throat Cooldown from 5s to 6.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base health increased from 725 to 800</li><li>Falloff range changed from 16m-46m to 20m-46m</li><li>Ammo increased from 6 to 7</li></ul>\n')} <div class="ability boot-kick">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Boot Kick change history</a></p>\n<h4 id="boot-kick-1"><a href="/ability/boot-kick">Boot Kick</a></h4>\n<ul><li>Boot Kick spirit scaling increased from 1 to 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Boot Kick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-bola">${html('\n<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>\n<h4 id="entangling-bola-1"><a href="/ability/entangling-bola">Entangling Bola</a></h4>\n<ul><li>Entangling Bola spirit scaling increased from 1 to 1.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Entangling Bola'
	});
	$$renderer.push(
		`<!----></div> <div class="ability go-for-the-throat">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Go For The Throat change history</a></p>\n<h4 id="go-for-the-throat"><a href="/ability/lycan-curse">Go For The Throat</a></h4>\n<ul><li>Go For The Throat range increased from 7m to 7.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Go For The Throat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse-2"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Lycan Curse buildup rate improved a bit</li><li>Lycan Curse resist reduced from 20% to 14% (T1 from 15% to 14%)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero venator">${html('\n<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>\n<h3 id="venator"><a href="/hero/venator">Venator</a></h3>\n<ul><li>Health increased from 720 to 750</li></ul>\n')} <div class="ability consecrating-grenade">${html('\n<p><a href="/ability/consecrating-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Consecrating Grenade change history</a></p>\n<h4 id="consecrating-grenade"><a href="/ability/consecrating-grenade">Consecrating Grenade</a></h4>\n<ul><li>Consecrating Grenade T2 now also increases debuff duration by +1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Consecrating Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability gutshot">${html('\n<p><a href="/ability/gutshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gutshot change history</a></p>\n<h4 id="gutshot"><a href="/ability/gutshot">Gutshot</a></h4>\n')} <ul><li>${html('Gutshot cooldown reduced from 26s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Venator',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Gutshot cooldown reduced from 26s to 23s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Gutshot added tooltip for wall stun distance.')}</li> <li>${html('Gutshot fixed wall stun distance not scaling with ability range')}</li> <li>${html('Gutshot increased wall stun distance from 6.5m to 7m')}</li> <li>${html('Gutshot on wall hit bonus damage scaling increased from 0.4 to 0.9')}</li> <li>${html('Gutshot T2 changed from -8s cooldown and 2.5m range to -10s cooldown and +0.4s stun duration')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Gutshot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hex-lined-snap-trap">${html('\n<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex Lined Snap Trap change history</a></p>\n<h4 id="hex-lined-snap-trap"><a href="/ability/hex-lined-snap-trap">Hex Lined Snap Trap</a></h4>\n<ul><li>Hex Lined Snap Trap now spawns in line with the crosshair, rather than in line with Venator</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Hex Lined Snap Trap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hex-lined-snap-trap">${html('\n<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex-Lined Snap Trap change history</a></p>\n<h4 id="hex-lined-snap-trap-1"><a href="/ability/hex-lined-snap-trap">Hex-Lined Snap Trap</a></h4>\n')} <ul><li>${html('Hex-Lined Snap Trap clarified tooltip')}</li> <li>${html('Hex-Lined Snap Trap spirit scaling increased from 1.6 to 2.2')}</li> <li>${html('Hex-Lined Snap Trap reveal duration increased from 5s to 6s')}</li> <li>${html('Hex-Lined Snap Trap cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Venator',
		groupIndex: 4,
		bulletIndex: 3,
		text: 'Hex-Lined Snap Trap cooldown reduced from 30s to 25s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Hex-Lined Snap Trap T2 reduced from -12s to -8s')}</li> <li>${html('Hex-Lined Snap Trap T3 increased from 20% to 25%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Hex-Lined Snap Trap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ira-domini">${html('\n<p><a href="/ability/ira-domini"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_crossbow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ira Domini change history</a></p>\n<h4 id="ira-domini"><a href="/ability/ira-domini">Ira Domini</a></h4>\n<ul><li>Ira Domini reduced weapon damage scaling from 1.7 to 1.5</li><li>Ira Domini now has a laser visual &amp; sound effect where Venator is aiming</li><li>Ira Domini T2 reduced from -15s cooldown and 150 damage to -15s cooldown and 65 damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Ira Domini'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n')} <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering spirit scaling reduced from 0.23/1.15 to 0.18/0.92</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability stake-tether-length">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake Tether Length change history</a></p>\n<h4 id="stake-tether-length"><a href="/ability/stake">Stake Tether Length</a></h4>\n<ul><li>Stake Tether Length no longer increases when Capture Radius increases</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake Tether Length'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate now grants +5% Weapon Damage per kill rather than Bonus Souls</li><li>Assassinate T3 now provides an additional +4% Weapon Damage per kill (retroactive)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n<ul><li>Spirit per boon increased from 1.1 to 1.3</li><li>Bullet damage per boon reduced from +0.5 to +0.36</li></ul>\n')} <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube T3 no longer removes ult debuffs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch displacement duration reduced from 1s to 0.8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability lethal-venom-max-venom">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom Max Venom change history</a></p>\n<h4 id="lethal-venom-max-venom"><a href="/ability/lethal-venom">Lethal Venom Max Venom</a></h4>\n')} <ul><li>${html('Lethal Venom Max Venom damage reduced from 165 to 140')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lethal Venom Max Venom damage reduced from 165 to 140'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom Max Venom'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lethal-venom-max-damage">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom Max Damage change history</a></p>\n<h4 id="lethal-venom-max-damage"><a href="/ability/lethal-venom">Lethal Venom Max Damage</a></h4>\n<ul><li>Lethal Venom Max Damage now happens at 30% HP instead of 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom Max Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lethal-venom">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom change history</a></p>\n<h4 id="lethal-venom"><a href="/ability/lethal-venom">Lethal Venom</a></h4>\n')} <ul><li>${html('Lethal Venom cooldown increased from 20s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Lethal Venom cooldown increased from 20s to 24s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lethal Venom T2 now also reduces cooldown by 8s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom'
	});
	$$renderer.push(
		`<!----></div> <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n<ul><li>Screwjab Dagger T3 increased from 40% Charge Cooldown to 55%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability petrifying-bola">${html('\n<p><a href="/ability/petrifying-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Petrifying Bola change history</a></p>\n<h4 id="petrifying-bola"><a href="/ability/petrifying-bola">Petrifying Bola</a></h4>\n<ul><li>Petrifying Bola damage increased from 45/165 to 50/180</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Petrifying Bola'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet damage growth reduced from 0.47 to 0.44</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand healing reduced by 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_1_30_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Bullet Resist Reduction reduced from -8% to -7%</li><li>Bullet Resist Reduction spirit scaling reduced from 0.07 to 0.055</li><li>Damage reduced by 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arctic-blast">${html('\n<p><a href="/item/arctic-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arctic Blast patch history</a></p>\n<h3 id="arctic-blast"><a href="/item/arctic-blast">Arctic Blast</a></h3>\n<ul><li>Vertical hitbox increased from 2.5m to 3.5m</li><li>Spread duration increased from 0.5s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arctic Blast',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resilience">${html('\n<p><a href="/item/bullet-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resilience patch history</a></p>\n<h3 id="bullet-resilience"><a href="/item/bullet-resilience">Bullet Resilience</a></h3>\n<ul><li>Low HP threshold increased from 30% to 35% health</li><li>Health Threshold trigger from 35% to 40% HP</li><li>Threshold Bullet Resistance bonus reduced from 30% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>Bullet Resistance increased from 7% to 8%</li><li>Bullet Resist Reduction reduced from -12% to -10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Debuff duration reduced from 4s to 3s')}</li> <li>${html('Cooldown reduced from 50s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 50s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n<ul><li>Vertical hitbox increased from 2.5m to 3.5m</li><li>Spread duration increased from 0.5s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Debuff Resistance increased from 20% to 25%</li><li>No longer grants +50 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item dispel-magic">${html('\n<p><a href="/item/dispel-magic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dispel Magic patch history</a></p>\n<h3 id="dispel-magic"><a href="/item/dispel-magic">Dispel Magic</a></h3>\n<ul><li>No longer builds from Debuff Reducer</li><li>No longer grants +30% Debuff Resistance</li><li>Now grants +14% Spirit Resistance</li><li>No longer grants +100 HP</li><li>Move Speed bonus reduced from 2.25 to 2</li><li>Spirit Resist increased from 14% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Dispel Magic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Removed cast time</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Now provides +1 Out of Combat Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fury-trance">${html('\n<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>\n<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>\n<ul><li>Bullet Lifesteal reduced from 22% to 18%</li><li>Fire Rate reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Max Health penalty increased from -13% to -15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-booster">${html('\n<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>\n<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>\n<ul><li>Now provides +1 Out of Combat Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-tempo">${html('\n<p><a href="/item/healing-tempo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Tempo patch history</a></p>\n<h3 id="healing-tempo"><a href="/item/healing-tempo">Healing Tempo</a></h3>\n<ul><li>Now provides +4 Out of Combat Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Tempo',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hollow-point">${html('\n<p><a href="/item/hollow-point"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hollow Point patch history</a></p>\n<h3 id="hollow-point"><a href="/item/hollow-point">Hollow Point</a></h3>\n<ul><li>Bullet Resist Reduction reduced from -12% to -9%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Hollow Point',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Weapon Damage increased from 15% to 22%</li><li>Bonus Health increased from 125 to 150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Time for Max Damage reduced from 3s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>Bonus ammo no longer scales with % increase</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Light Melee cooldown penalty reduced from 2x to 1.5x</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lightning-scroll">${html('\n<p><a href="/item/lightning-scroll"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lightning Scroll patch history</a></p>\n<h3 id="lightning-scroll"><a href="/item/lightning-scroll">Lightning Scroll</a></h3>\n<ul><li>Dash distance increased from -10% to -12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lightning Scroll',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Ammo reduced from +40% to +30%</li><li>Crit reduced from 110% to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Light Melee cooldown penalty reduced from 2x to 1.5x</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mercurial-magnum">${html('\n<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>\n<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>\n<ul><li>Bonus damage now has spirit scaling (0.16)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mercurial Magnum',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n')} <ul><li>${html('Cooldown increased from 20s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 20s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-regeneration">${html('\n<p><a href="/item/mystic-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Regeneration patch history</a></p>\n<h3 id="mystic-regeneration"><a href="/item/mystic-regeneration">Mystic Regeneration</a></h3>\n<ul><li>Now provides +40 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>Spirit Lifesteal reduced from 15% to 10%</li><li>Imbued ability now provides +30% Spirit Lifesteal for any damage it does (including the reverb)</li><li>Imbued Lifesteal from 30% to 27%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Dash distance increased from -10% to -12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item prism-blast">${html('\n<p><a href="/item/prism-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/prism_blast.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Prism Blast patch history</a></p>\n<h3 id="prism-blast"><a href="/item/prism-blast">Prism Blast</a></h3>\n<ul><li>DPS reduced from 300 to 270</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Prism Blast',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n<ul><li>Bonus damage now has spirit scaling (0.16)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item radiant-regeneration">${html('\n<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>\n<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>\n<ul><li>Now provides +65 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Radiant Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Bonus Spirit Power for Charged Abilities reduced from +16 to +10</li><li>Time between charges reduced from +50% to +30%</li><li>Now reduces cooldown on charged abilities by 14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Changed from +6% Spirit Resist to +8%')}</li> <li>${html('Changed to self cast only')}</li> <li>${html('Now restores up to 3 stamina based on the percentage of stacks you have relative to the max')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n<ul><li>Spirit damage scaling increased from 0.3 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>No longer provides Fire Rate</li><li>Now provides +15% Weapon Damage</li><li>Dash Distance reduction increased from -20% to -25%</li><li>Minor improvement in buildup rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n<ul><li>Now builds out of Debuff Reducer</li><li>Spirit Resistance reduced from 25% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>Burn DPS now scales with spirit power (0.05)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-resilience">${html('\n<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>\n<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>\n<ul><li>Low HP threshold increased from 30% to 35% health</li><li>Health Threshold trigger from 35% to 40% HP</li><li>Threshold Spirit Resistance bonus reduced from 30% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item stamina-mastery">${html('\n<p><a href="/item/stamina-mastery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Stamina Mastery patch history</a></p>\n<h3 id="stamina-mastery"><a href="/item/stamina-mastery">Stamina Mastery</a></h3>\n<ul><li>Air Dash distance reduced from 30% to 23%</li><li>Stamina recovery reduced from 20% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Stamina Mastery',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Bonus Health increased from +75 to +125</li><li>Debuff Resistance increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _1_30_mg as default, metadata, readingManifest, toc };
