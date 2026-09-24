import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/11-07.mg?embed=0
function _1_07_mg$2($$renderer) {
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
			'Lash',
			'McGinnis',
			'Mirage',
			'Paradox',
			'Pocket',
			'Vindicta',
			'Viscous',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/11-07.mg?embed=1
function _1_07_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Ammo Scavenger',
			'Berserker',
			'Bullet Armor',
			'Close Quarters',
			'Debuff Reducer',
			'Decay',
			'Divine Barrier',
			'Extra Health',
			'Fortitude',
			'Frenzy',
			'Glass Cannon',
			'Healbane',
			'Healing Nova',
			'Healing Rite',
			'Heroic Aura',
			'Inhibitor',
			'Intensifying Magazine',
			'Lifestrike',
			'Long Range',
			'Lucky Shot',
			'Magic Carpet',
			'Melee Charge',
			'Metal Skin',
			'Mystic Burst',
			'Phantom Strike',
			'Reactive Barrier',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Shadow Weave',
			'Sharpshooter',
			'Silencer',
			'Siphon Bullets',
			'Slowing Bullets',
			'Slowing Hex',
			'Soul Rebirth',
			'Spirit Armor',
			'Superior Cooldown',
			'Toxic Bullets',
			'Vampiric Burst',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/11-07.mg
var metadata = {
	title: '11-07-2024 Update',
	thread_id: '44786',
	steam_gid: '6148070194801611991',
	published: '2024-11-07T13:31:34-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added Trapper to Hero Labs. Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time. Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs. Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase. The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases. Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit). Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent. Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives. Added checkbox in settings to force the game to take focus when the game is unpaused. You can now hover party members on the dashboard while in queue to view their roster. Active Reload indicator UI slightly adjusted. Added \"Frenzied\" text when you own Frenzy and go below 50% health. Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility. Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration. Added hover tooltip descriptions to stats on the left side of the hud. Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base. Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain. Fixed Commends for All Heroes not showing up correctly in player profiles. Updated McGinnis Barrage explosions to show the edge of the aoe better. Fixed the 'x' button in the shop search not clearing the search box. Sinners Sacrifice now has a final damage state for clear read on final hit. Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry. Fixed various bugs with Duplicate Hero not working properly in private lobbies. Fixed Grey Talon getting assist credit while flying Guided Owl. Fixed Sinner's Sacrifice changing facing direction sometimes. Fixed a rare bug where shields would never regenerate. Fixed some cases where troopers could get stuck in the base. Fixed using melee to secure orbs being a little unresponsive. New effects for Viscous heavy melee. Added an ambient looping sound for each bridge powerup. Fixed some animation issues with Vindicta. Added new zipline animation for Vindicta. Looped music will resume playing if interrupted by a transient cue. Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time. Improved animation readability for Mo & Krill heavy melee. Reduced visual clutter on Seven's tracers with high fire rate. Reduced visual clutter on Wraith's tracers with high fire rate. Effects updates for Fortitude. Added missing lean animation near walls for Mirage. Sand Blast distance and aoe read improvements. Fixed issues where health regen effect will begin popping on and off if player is at max health. New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities. New sounds added to Lash’s Ground Strike and Flog abilities. Renamed \"Mouse Wheel\" to \"Chat Wheel.\" Steam Input support: Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​. Added a \"Replay Controls\" action set​. Allow Steam Deck to see the Key Bindings Screen​. Improved Glyph Swapping behavior when mixing controller and keyboard inputs​. Added Controller tab to house Controller specific options.​ Added a Steam Input Configurator launch button.​ Added Glyph Locking options: { Automatic | Keyboard & Mouse Only | Game Pad Only }​. Fixed crash in spectator mode when querying controller button state​. Fixed Controller not working until loading a level​. Official Steam Input configs for SteamDeck and DualSense have been updated​. Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​ Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don't split souls). Troopers no longer increase their bounty by 20% at 8 minutes. Hero Kill gold increased from 150->1400 to 175->2000 (from 0 min to 45 min). Neutral Creeps now give 5% less souls. Troopers now take 28% more damage from Guardians. Walkers damage vs players increased by 10%. Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian. Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes. Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out. Biased Urn delivery locations moved slightly closer to neutral positions. Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m). Walker armor loss over time now happens at 16m instead of 14m. Troopers Spirit resist goes to 30% instead of 40% at 25 minutes. Mid Boss Rejuv Trooper Health increased by 30%. Fixed Troopers resistance against Base Guardians not working properly. Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings. Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location. Removed all railings from fire escape stairs. Pass at making rooftops smoother to navigate. Removed angled supports from chimney. Removed collision from small props. Added stairs on top of Bodega. Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations. Replaced temp antennae with more \"menacing\" version to designate zap trigger locations. New Hotel building art pass. Changed exit location from the player spawn area to the rest of the base to the angled walls. Combat Barrier: Fire Rate increased from 6% to 7%. Debuff Remover: Debuff Resistance increased from 35% to 40%. Debuff Remover: Cooldown reduced from 48s to 45s. Withering Whip: Bullet Resist reduction reduced from -14% to -11%. Withering Whip: Cooldown reduced from 22s to 18s. Withering Whip: Now deals 50 Spirit Damage. Improved Cooldown: Cooldown Reduction reduced from 16% to 14%. Improved Cooldown: Spirit Shield improved from 75 to 100. Improved Cooldown: Now grants +10% Ammo. Improved Burst: Now triggers on your base damage, rather than how much the target receives. Improved Burst: Max HP damage reduced from 9% to 8%. Abrams Reverted Melee attack speed reduction. Shoulder Charge can now again use left/right strafe to slightly change direction. Shoulder Charge now carries momentum at the end of the charge. Siphon Life spirit scaling increased from 0.3 to 0.36. Infernal Resilience Damage Regen reduced from 15% to 14%. Infernal Resilience Damage Regen duration increased from 18s to 20s. Infernal Resilience T3 reduced from +8% to +7%. Fixed an issue where Seismic impact would travel more downwards instead of the facing direction. Bebop Sticky Bomb damage gained per hero impact increased from 1% to 1.5%. Sticky Bomb damage gained per hero kill reduced from 5% to 4%. Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor's debuff). Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations). Sticky Bomb now has 2x cast range when used on allies. Hook damage reduced from 40 to 10. Hook damage now has spirit scaling of 2x. Hyper Beam now goes on cooldown for 3 seconds when canceled during precast. Dynamo Now gains 1% Bullet Resist per Boon (0->14%). Fixed Quantum Entanglement sometimes not moving you to the destination properly. Singularity now deals 1.5% Max HP in the base ability. Singularity T3 increased from 3.8% to 4%. Singularity Base DPS reduced from 60 to 45. Grey Talon Base bullet damage reduced from 27 to 24. Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on). Falloff range rescaled from 22m->58m to 18m->54m. Rain of Arrows strafe distance with stamina reduced by 30%. Charged Shot hitbox size reduced by 20%. Haze Bullet Dance no longer hits 2 targets. Bullet Dance now grants +30% Fire Rate. Bullet Dance now allows you to use items during it. Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate. Infernus Catalyst slow reduced from 40% to 35%. Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%. Ivy Watcher's Covenant Fire Rate spirit scaling increased from 0.2 to 0.3. Watcher's Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3. Lash Ground Strike can now be cast while on the zipline. Fixed interaction between Mirage's tornado and Death Slam. Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently). McGinnis Mini Turrets DPS reduced from 60 to 40. Mini Turrets health reduced from 20% max HP to 15%. Mirage Bullet size reduced from 6 to 5. Tornado speed reduced from 20m to 18m. Tornado Lift Duration reduced from 1.1s to 1s. Fire Scarabs T2 reduced from -15% Bullet Resist to -10%. Paradox Bullet velocity increased from 411 to 525. Time Wall no longer has charges. Time Wall no longer deals 10% Max Health Damage. Time Wall cooldown reduced from 37s to 25s. Time Wall T2 is now Deals 10% Max Health Damage. Kinetic Carbine Max Damage Amp increased from 85% to 100%. Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance). Pocket Barrage spirit scaling increased from 0.4 to 0.5. Light melee damage increased from 63 to 75. Vindicta Base bullet damage reduced from 15 to 13. Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on). Stake duration increased from 1.75s to 2s. Flight T2 reduced from +8s to +6s. Crow Familiar tick rate changed from every 0.5s to every 1s. Assassinate starts at 25% power instead of 50% power. Viscous The Cube health regen now scales with spirit at 0.2. Goo Ball down dash ability moved from T3 to base ability. Goo Ball size now increases with range upgrades (doesn't affect collision with world). Fixed some hit detection issues with Goo Ball. Warden Now has +1 Sprint. Bullet Velocity increased from 213 to 290. Last Stand now goes on cooldown if you die or the ability is interrupted while cast. Last Stand T3 no longer grants unstoppable during channel. Last Stand now grants +50% Spirit Resist during channel. Wraith Telekinesis cast time increased from 0.6 to 0.7. Telekinesis damage reduced from 200 to 175. Yamato Shadow Transformation now affects the grapple time speed. Shadow Transformation duration increased from 4s to 6s. Shadow Transformation no longer prevents death. Shadow Transformation now grants +60% Bullet and Spirit Resist. Shadow Transformation now heals for 30% hp (done after the dispel). Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session). Close Quarters No longer grants +85 Bullet Shield Health. Now grants +5% Bullet Resist. Restorative Shot No longer grants +7% Bullet Resist. Now grants +90 Bullet Shield. Now procs on orb shots for NPC heal value. Melee Charge No longer grants +1 HP Regen. Weapon Damage reduced from 12% to 10%. Long Range Long range Weapon Damage reduced from 40% to 30%. Now grants +10% Weapon Damage. Berserker Bullet Resist increased from 7% to 9%. Active Reload Now grants +50 Health. Slowing Bullets Spirit Power increased from +5 to +6. Sharpshooter Long range Weapon Damage reduced from 70% to 50%. Now grants +20% Weapon Damage. Alchemical Fire Now grants +1 Sprint. Heroic Aura Cooldown reduced from 32s to 25s. Intensifying Magazine Time to reach Max Damage reduced from 3s to 2.7s. Toxic Bullets Damage changed from 5% of Current Health to 2.5% of Max Health. Shadow Weave Detection range increased from 18m to 22m. Glass Cannon Health loss reduced from -15% to -12%. Frenzy Low HP bullet resist increased from 45% to 55%. Lucky Shot Fixed it causing proc effects to roll twice whenever it procced. Silencer Now grants +12% Spirit Resist. Vampiric Burst Cooldown reduced from 34s to 30s. Extra Health Weapon Damage increased from 6% to 7%. Healing Rite Duration increased from 19s to 20s (total health restored unchanged). Bullet Armor Bullet Resist increased from 25% to 26%. Return Fire Duration reduced from 7s to 6s. Healing Nova Now grants +6% Ability Range. Debuff Reducer Health increased from +75 to +125. Healbane Healing reduction increased from -40% to -45%. Reactive Barrier Restores 1 stamina on proc. Spirit Armor Spirit Resist increased from 20% to 22%. Divine Barrier No longer grants +8% Ability Range. Now grants +6 Spirit Power. Restorative Locket No longer grants +5 Spirit Power. Now grants +25% Melee Resistance. Metal Skin No longer blocks melee damage. Veil Walker Ammo increased from 12% to 15%. Weapon Damage increased from 10% to 15%. Fortitude Health increased from 365 to 400. Lifestrike Bullet resistance increased from 8% to 10%. Soul Rebirth Removed from the game. Inhibitor Slow reduced from 25% to 20%. Siphon Bullets Now grants +15% Weapon Damage. Phantom Strike Now grounds any flying targets on impact (similar to how Slowing Hex used to work). Ammo Scavenger Duration increased from 35s to 45s. Mystic Burst Now triggers on your base damage, rather than how much the target receives. Slowing Hex Now uses Enduring Spirit as a component. Now gains +10% Spirit Lifesteal and +75 Bonus Health. Spirit Power reduced from 5 to 4. No longer grants +1 Sprint. Damage reduced from 70 to 40. Decay Now grants +1.5 HP Regen. Now grants +8% Ability Duration. Healing reduction increased from -50% to -70%. Bleed Damage reduced from 3.1% to 1%. Cooldown reduced from 45s to 33s. Superior Cooldown Now grants +15% Ammo. Magic Carpet Now grants +10% Ability Range.",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-11-02',
			to: '2024-11-07'
		},
		after: {
			from: '2024-11-08',
			to: '2024-11-10'
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
		title: 'Siphon Life',
		id: 'siphon-life'
	},
	{
		level: 3,
		title: 'Infernal Resilience Damage Regen',
		id: 'infernal-resilience-damage-regen'
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
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
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
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 3,
		title: 'Singularity Base DPS',
		id: 'singularity-base-dps'
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
		title: 'Bullet Dance',
		id: 'bullet-dance'
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
		title: 'Catalyst',
		id: 'catalyst'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: "Watcher's Covenant Fire Rate",
		id: 'watcher-s-covenant-fire-rate'
	},
	{
		level: 3,
		title: "Watcher's Covenant Bullet Lifesteal",
		id: 'watcher-s-covenant-bullet-lifesteal'
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
		title: 'Mini Turrets DPS',
		id: 'mini-turrets-dps'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Tornado',
		id: 'tornado'
	},
	{
		level: 3,
		title: 'Tornado Lift Duration',
		id: 'tornado-lift-duration'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
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
		title: 'Kinetic Carbine Max Damage Amp',
		id: 'kinetic-carbine-max-damage-amp'
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
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
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
		title: 'Goo Ball',
		id: 'goo-ball'
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
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
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
		title: 'Bullet Armor',
		id: 'bullet-armor'
	},
	{
		level: 2,
		title: 'Close Quarters',
		id: 'close-quarters'
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
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Extra Health',
		id: 'extra-health'
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
		title: 'Healbane',
		id: 'healbane'
	},
	{
		level: 2,
		title: 'Healing Nova',
		id: 'healing-nova'
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
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Metal Skin',
		id: 'metal-skin'
	},
	{
		level: 2,
		title: 'Mystic Burst',
		id: 'mystic-burst'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
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
		title: 'Spirit Armor',
		id: 'spirit-armor'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
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
			from: '2024-11-02',
			to: '2024-11-07'
		},
		after: {
			from: '2024-11-08',
			to: '2024-11-10'
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
			name: 'Bullet Armor',
			id: 'bullet-armor'
		},
		{
			kind: 'item',
			name: 'Close Quarters',
			id: 'close-quarters'
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
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Extra Health',
			id: 'extra-health'
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
			name: 'Healbane',
			id: 'healbane'
		},
		{
			kind: 'item',
			name: 'Healing Nova',
			id: 'healing-nova'
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
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Metal Skin',
			id: 'metal-skin'
		},
		{
			kind: 'item',
			name: 'Mystic Burst',
			id: 'mystic-burst'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
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
			name: 'Spirit Armor',
			id: 'spirit-armor'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
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
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		}
	],
	related: []
};
function _1_07_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added Trapper to Hero Labs.</li><li>Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time.</li><li>Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs.</li><li>Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase.</li><li>The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases.</li><li>Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit).</li><li>Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent.</li><li>Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives.</li><li>Added checkbox in settings to force the game to take focus when the game is unpaused.</li><li>You can now hover party members on the dashboard while in queue to view their roster.</li><li>Active Reload indicator UI slightly adjusted.</li><li>Added &quot;Frenzied&quot; text when you own Frenzy and go below 50% health.</li><li>Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility.</li><li>Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration.</li><li>Added hover tooltip descriptions to stats on the left side of the hud.</li><li>Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base.</li><li>Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain.</li><li>Fixed Commends for All Heroes not showing up correctly in player profiles.</li><li>Updated McGinnis Barrage explosions to show the edge of the aoe better.</li><li>Fixed the &#x27;x&#x27; button in the shop search not clearing the search box.</li><li>Sinners Sacrifice now has a final damage state for clear read on final hit.</li><li>Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry.</li><li>Fixed various bugs with Duplicate Hero not working properly in private lobbies.</li><li>Fixed Grey Talon getting assist credit while flying Guided Owl.</li><li>Fixed Sinner&#x27;s Sacrifice changing facing direction sometimes.</li><li>Fixed a rare bug where shields would never regenerate.</li><li>Fixed some cases where troopers could get stuck in the base.</li><li>Fixed using melee to secure orbs being a little unresponsive.</li><li>New effects for Viscous heavy melee.</li><li>Added an ambient looping sound for each bridge powerup.</li><li>Fixed some animation issues with Vindicta.</li><li>Added new zipline animation for Vindicta.</li><li>Looped music will resume playing if interrupted by a transient cue.</li><li>Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time.</li><li>Improved animation readability for Mo &amp; Krill heavy melee.</li><li>Reduced visual clutter on Seven&#x27;s tracers with high fire rate.</li><li>Reduced visual clutter on Wraith&#x27;s tracers with high fire rate.</li><li>Effects updates for Fortitude.</li><li>Added missing lean animation near walls for Mirage.</li><li>Sand Blast distance and aoe read improvements.</li><li>Fixed issues where health regen effect will begin popping on and off if player is at max health.</li><li>New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities.</li><li>New sounds added to Lash’s Ground Strike and Flog abilities.</li><li>Renamed &quot;Mouse Wheel&quot; to &quot;Chat Wheel.&quot;</li><li>Steam Input support:</li><li>Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​.</li><li>Added a &quot;Replay Controls&quot; action set​.</li><li>Allow Steam Deck to see the Key Bindings Screen​.</li><li>Improved Glyph Swapping behavior when mixing controller and keyboard inputs​.</li><li>Added Controller tab to house Controller specific options.​</li><li>Added a Steam Input Configurator launch button.​</li><li>Added Glyph Locking options: { Automatic | Keyboard &amp; Mouse Only | Game Pad Only }.</li><li>Fixed crash in spectator mode when querying controller button state​.</li><li>Fixed Controller not working until loading a level​.</li><li>Official Steam Input configs for SteamDeck and DualSense have been updated​.</li><li>Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​</li><li>Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don&#x27;t split souls).</li><li>Troopers no longer increase their bounty by 20% at 8 minutes.</li><li>Hero Kill gold increased from 150-&gt;1400 to 175-&gt;2000 (from 0 min to 45 min).</li><li>Neutral Creeps now give 5% less souls.</li><li>Troopers now take 28% more damage from Guardians.</li><li>Walkers damage vs players increased by 10%.</li><li>Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian.</li><li>Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes.</li><li>Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out.</li><li>Biased Urn delivery locations moved slightly closer to neutral positions.</li><li>Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m).</li><li>Walker armor loss over time now happens at 16m instead of 14m.</li><li>Troopers Spirit resist goes to 30% instead of 40% at 25 minutes.</li><li>Mid Boss Rejuv Trooper Health increased by 30%.</li><li>Fixed Troopers resistance against Base Guardians not working properly.</li><li>Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings.</li><li>Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location.</li><li>Removed all railings from fire escape stairs.</li><li>Pass at making rooftops smoother to navigate.</li><li>Removed angled supports from chimney.</li><li>Removed collision from small props.</li><li>Added stairs on top of Bodega.</li><li>Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations.</li><li>Replaced temp antennae with more &quot;menacing&quot; version to designate zap trigger locations.</li><li>New Hotel building art pass.</li><li>Changed exit location from the player spawn area to the rest of the base to the angled walls.</li><li>Combat Barrier: Fire Rate increased from 6% to 7%.</li><li>Debuff Remover: Debuff Resistance increased from 35% to 40%.</li><li>Debuff Remover: Cooldown reduced from 48s to 45s.</li><li>Withering Whip: Bullet Resist reduction reduced from -14% to -11%.</li><li>Withering Whip: Cooldown reduced from 22s to 18s.</li><li>Withering Whip: Now deals 50 Spirit Damage.</li><li>Improved Cooldown: Cooldown Reduction reduced from 16% to 14%.</li><li>Improved Cooldown: Spirit Shield improved from 75 to 100.</li><li>Improved Cooldown: Now grants +10% Ammo.</li><li>Improved Burst: Now triggers on your base damage, rather than how much the target receives.</li><li>Improved Burst: Max HP damage reduced from 9% to 8%.</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_07_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Reverted Melee attack speed reduction.</li></ul>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge can now again use left/right strafe to slightly change direction.</li><li>Shoulder Charge now carries momentum at the end of the charge.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life spirit scaling increased from 0.3 to 0.36.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience-damage-regen">${html('\n<h4 id="infernal-resilience-damage-regen"><a href="/ability/infernal-resilience">Infernal Resilience Damage Regen</a></h4>\n<ul><li>Infernal Resilience Damage Regen reduced from 15% to 14%.</li><li>Infernal Resilience Damage Regen duration increased from 18s to 20s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience Damage Regen'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T3 reduced from +8% to +7%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Fixed an issue where Seismic impact would travel more downwards instead of the facing direction.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb damage gained per hero impact increased from 1% to 1.5%.</li><li>Sticky Bomb damage gained per hero kill reduced from 5% to 4%.</li><li>Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor&#x27;s debuff).</li><li>Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations).</li><li>Sticky Bomb now has 2x cast range when used on allies.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook">${html('\n<h4 id="hook">Hook</h4>\n')} <ul><li>${html('Hook damage reduced from 40 to 10.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Hook damage reduced from 40 to 10.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Hook damage now has spirit scaling of 2x.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam now goes on cooldown for 3 seconds when canceled during precast.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Now gains 1% Bullet Resist per Boon (0-&gt;14%).</li></ul>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Fixed Quantum Entanglement sometimes not moving you to the destination properly.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity now deals 1.5% Max HP in the base ability.</li><li>Singularity T3 increased from 3.8% to 4%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity-base-dps">${html('\n<h4 id="singularity-base-dps"><a href="/ability/singularity">Singularity Base DPS</a></h4>\n<ul><li>Singularity Base DPS reduced from 60 to 45.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity Base DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Base bullet damage reduced from 27 to 24.</li><li>Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on).</li><li>Falloff range rescaled from 22m-&gt;58m to 18m-&gt;54m.</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows strafe distance with stamina reduced by 30%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Charged Shot hitbox size reduced by 20%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance no longer hits 2 targets.</li><li>Bullet Dance now grants +30% Fire Rate.</li><li>Bullet Dance now allows you to use items during it.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability catalyst">${html('\n<h4 id="catalyst">Catalyst</h4>\n<ul><li>Catalyst slow reduced from 40% to 35%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability watcher-s-covenant-fire-rate">${html('\n<h4 id="watcher-s-covenant-fire-rate">Watcher&#x27;s Covenant Fire Rate</h4>\n<ul><li>Watcher&#x27;s Covenant Fire Rate spirit scaling increased from 0.2 to 0.3.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant Fire Rate"
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant-bullet-lifesteal">${html('\n<h4 id="watcher-s-covenant-bullet-lifesteal">Watcher&#x27;s Covenant Bullet Lifesteal</h4>\n<ul><li>Watcher&#x27;s Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant Bullet Lifesteal"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike can now be cast while on the zipline.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Fixed interaction between Mirage&#x27;s tornado and Death Slam.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike-1"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turrets-dps">${html('\n<h4 id="mini-turrets-dps"><a href="/ability/mini-turret">Mini Turrets DPS</a></h4>\n<ul><li>Mini Turrets DPS reduced from 60 to 40.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets">${html('\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets health reduced from 20% max HP to 15%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n<ul><li>Bullet size reduced from 6 to 5.</li></ul>\n')} <div class="ability tornado">${html('\n<h4 id="tornado">Tornado</h4>\n<ul><li>Tornado speed reduced from 20m to 18m.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Tornado'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tornado-lift-duration">${html('\n<h4 id="tornado-lift-duration">Tornado Lift Duration</h4>\n<ul><li>Tornado Lift Duration reduced from 1.1s to 1s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Tornado Lift Duration'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs T2 reduced from -15% Bullet Resist to -10%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Bullet velocity increased from 411 to 525.</li></ul>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n')} <ul><li>${html('Time Wall no longer has charges.')}</li> <li>${html('Time Wall no longer deals 10% Max Health Damage.')}</li> <li>${html('Time Wall cooldown reduced from 37s to 25s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Time Wall cooldown reduced from 37s to 25s.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Time Wall T2 is now Deals 10% Max Health Damage.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine-max-damage-amp">${html('\n<h4 id="kinetic-carbine-max-damage-amp"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Damage Amp</a></h4>\n<ul><li>Kinetic Carbine Max Damage Amp increased from 85% to 100%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine Max Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage spirit scaling increased from 0.4 to 0.5.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Light melee damage increased from 63 to 75.</li></ul>\n')}</div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Base bullet damage reduced from 15 to 13.</li><li>Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on).</li></ul>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake duration increased from 1.75s to 2s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight T2 reduced from +8s to +6s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar tick rate changed from every 0.5s to every 1s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate starts at 25% power instead of 50% power.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube health regen now scales with spirit at 0.2.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball down dash ability moved from T3 to base ability.</li><li>Goo Ball size now increases with range upgrades (doesn&#x27;t affect collision with world).</li><li>Fixed some hit detection issues with Goo Ball.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Now has +1 Sprint.</li><li>Bullet Velocity increased from 213 to 290.</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand now goes on cooldown if you die or the ability is interrupted while cast.</li><li>Last Stand T3 no longer grants unstoppable during channel.</li><li>Last Stand now grants +50% Spirit Resist during channel.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n')} <ul><li>${html('Telekinesis cast time increased from 0.6 to 0.7.')}</li> <li>${html('Telekinesis damage reduced from 200 to 175.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Telekinesis damage reduced from 200 to 175.'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation now affects the grapple time speed.</li><li>Shadow Transformation duration increased from 4s to 6s.</li><li>Shadow Transformation no longer prevents death.</li><li>Shadow Transformation now grants +60% Bullet and Spirit Resist.</li><li>Shadow Transformation now heals for 30% hp (done after the dispel).</li><li>Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_1_07_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Now grants +50 Health.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Now grants +1 Sprint.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Duration increased from 35s to 45s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Bullet Resist increased from 7% to 9%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-armor">${html('\n<p><a href="/item/bullet-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Armor patch history</a></p>\n<h3 id="bullet-armor"><a href="/item/bullet-armor">Bullet Armor</a></h3>\n<ul><li>Bullet Resist increased from 25% to 26%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Armor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item close-quarters">${html('\n<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>\n<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>\n<ul><li>No longer grants +85 Bullet Shield Health.</li><li>Now grants +5% Bullet Resist.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Close Quarters',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Health increased from +75 to +125.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Now grants +1.5 HP Regen.')}</li> <li>${html('Now grants +8% Ability Duration.')}</li> <li>${html('Healing reduction increased from -50% to -70%.')}</li> <li>${html('Bleed Damage reduced from 3.1% to 1%.')}</li> <li>${html('Cooldown reduced from 45s to 33s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 4,
		text: 'Cooldown reduced from 45s to 33s.'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>No longer grants +8% Ability Range.</li><li>Now grants +6 Spirit Power.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Weapon Damage increased from 6% to 7%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Health increased from 365 to 400.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Low HP bullet resist increased from 45% to 55%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Health loss reduced from -15% to -12%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healbane">${html('\n<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>\n<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>\n<ul><li>Healing reduction increased from -40% to -45%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healbane',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-nova">${html('\n<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>\n<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>\n<ul><li>Now grants +6% Ability Range.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Duration increased from 19s to 20s (total health restored unchanged).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n')} <ul><li>${html('Cooldown reduced from 32s to 25s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 32s to 25s.'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Slow reduced from 25% to 20%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Time to reach Max Damage reduced from 3s to 2.7s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Bullet resistance increased from 8% to 10%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Long range Weapon Damage reduced from 40% to 30%.</li><li>Now grants +10% Weapon Damage.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Fixed it causing proc effects to roll twice whenever it procced.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n<ul><li>Now grants +10% Ability Range.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>No longer grants +1 HP Regen.</li><li>Weapon Damage reduced from 12% to 10%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n<ul><li>No longer blocks melee damage.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-burst">${html('\n<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>\n<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>\n<ul><li>Now triggers on your base damage, rather than how much the target receives.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>Now grounds any flying targets on impact (similar to how Slowing Hex used to work).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Restores 1 stamina on proc.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>No longer grants +5 Spirit Power.</li><li>Now grants +25% Melee Resistance.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>No longer grants +7% Bullet Resist.</li><li>Now grants +90 Bullet Shield.</li><li>Now procs on orb shots for NPC heal value.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Duration reduced from 7s to 6s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Detection range increased from 18m to 22m.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Long range Weapon Damage reduced from 70% to 50%.</li><li>Now grants +20% Weapon Damage.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Now grants +12% Spirit Resist.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Now grants +15% Weapon Damage.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>Spirit Power increased from +5 to +6.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Now uses Enduring Spirit as a component.')}</li> <li>${html('Now gains +10% Spirit Lifesteal and +75 Bonus Health.')}</li> <li>${html('Spirit Power reduced from 5 to 4.')}</li> <li>${html('No longer grants +1 Sprint.')}</li> <li>${html('Damage reduced from 70 to 40.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 4,
		text: 'Damage reduced from 70 to 40.'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n<ul><li>Removed from the game.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-armor">${html('\n<p><a href="/item/spirit-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Armor patch history</a></p>\n<h3 id="spirit-armor"><a href="/item/spirit-armor">Spirit Armor</a></h3>\n<ul><li>Spirit Resist increased from 20% to 22%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Armor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Now grants +15% Ammo.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Damage changed from 5% of Current Health to 2.5% of Max Health.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n')} <ul><li>${html('Cooldown reduced from 34s to 30s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 34s to 30s.'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Ammo increased from 12% to 15%.</li><li>Weapon Damage increased from 10% to 15%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _1_07_mg as default, metadata, readingManifest, toc };
