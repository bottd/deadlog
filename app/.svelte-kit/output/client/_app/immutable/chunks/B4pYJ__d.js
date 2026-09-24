import {
	I as e,
	Ot as t,
	P as ee,
	T as n,
	at as te,
	g as r,
	it as i,
	st as a
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a as o, i as s, n as c } from './vWaTnxY_.js';
function ne(e) {
	c(e, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Infernus`,
			`Ivy`,
			`Lash`,
			`McGinnis`,
			`Mirage`,
			`Paradox`,
			`Pocket`,
			`Vindicta`,
			`Viscous`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function re(e) {
	c(e, {
		type: `item`,
		names:
			`Active Reload.Alchemical Fire.Ammo Scavenger.Berserker.Bullet Armor.Close Quarters.Debuff Reducer.Decay.Divine Barrier.Extra Health.Fortitude.Frenzy.Glass Cannon.Healbane.Healing Nova.Healing Rite.Heroic Aura.Inhibitor.Intensifying Magazine.Lifestrike.Long Range.Lucky Shot.Magic Carpet.Melee Charge.Metal Skin.Mystic Burst.Phantom Strike.Reactive Barrier.Restorative Locket.Restorative Shot.Return Fire.Shadow Weave.Sharpshooter.Silencer.Siphon Bullets.Slowing Bullets.Slowing Hex.Soul Rebirth.Spirit Armor.Superior Cooldown.Toxic Bullets.Vampiric Burst.Veil Walker`.split(
				`.`
			)
	});
}
var ie = {
		title: `11-07-2024 Update`,
		thread_id: `44786`,
		steam_gid: `6148070194801611991`,
		published: `2024-11-07T13:31:34-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added Trapper to Hero Labs. Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time. Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs. Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase. The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases. Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit). Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent. Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives. Added checkbox in settings to force the game to take focus when the game is unpaused. You can now hover party members on the dashboard while in queue to view their roster. Active Reload indicator UI slightly adjusted. Added "Frenzied" text when you own Frenzy and go below 50% health. Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility. Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration. Added hover tooltip descriptions to stats on the left side of the hud. Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base. Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain. Fixed Commends for All Heroes not showing up correctly in player profiles. Updated McGinnis Barrage explosions to show the edge of the aoe better. Fixed the 'x' button in the shop search not clearing the search box. Sinners Sacrifice now has a final damage state for clear read on final hit. Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry. Fixed various bugs with Duplicate Hero not working properly in private lobbies. Fixed Grey Talon getting assist credit while flying Guided Owl. Fixed Sinner's Sacrifice changing facing direction sometimes. Fixed a rare bug where shields would never regenerate. Fixed some cases where troopers could get stuck in the base. Fixed using melee to secure orbs being a little unresponsive. New effects for Viscous heavy melee. Added an ambient looping sound for each bridge powerup. Fixed some animation issues with Vindicta. Added new zipline animation for Vindicta. Looped music will resume playing if interrupted by a transient cue. Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time. Improved animation readability for Mo & Krill heavy melee. Reduced visual clutter on Seven's tracers with high fire rate. Reduced visual clutter on Wraith's tracers with high fire rate. Effects updates for Fortitude. Added missing lean animation near walls for Mirage. Sand Blast distance and aoe read improvements. Fixed issues where health regen effect will begin popping on and off if player is at max health. New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities. New sounds added to Lash’s Ground Strike and Flog abilities. Renamed "Mouse Wheel" to "Chat Wheel." Steam Input support: Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​. Added a "Replay Controls" action set​. Allow Steam Deck to see the Key Bindings Screen​. Improved Glyph Swapping behavior when mixing controller and keyboard inputs​. Added Controller tab to house Controller specific options.​ Added a Steam Input Configurator launch button.​ Added Glyph Locking options: { Automatic | Keyboard & Mouse Only | Game Pad Only }​. Fixed crash in spectator mode when querying controller button state​. Fixed Controller not working until loading a level​. Official Steam Input configs for SteamDeck and DualSense have been updated​. Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​ Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don't split souls). Troopers no longer increase their bounty by 20% at 8 minutes. Hero Kill gold increased from 150->1400 to 175->2000 (from 0 min to 45 min). Neutral Creeps now give 5% less souls. Troopers now take 28% more damage from Guardians. Walkers damage vs players increased by 10%. Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian. Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes. Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out. Biased Urn delivery locations moved slightly closer to neutral positions. Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m). Walker armor loss over time now happens at 16m instead of 14m. Troopers Spirit resist goes to 30% instead of 40% at 25 minutes. Mid Boss Rejuv Trooper Health increased by 30%. Fixed Troopers resistance against Base Guardians not working properly. Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings. Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location. Removed all railings from fire escape stairs. Pass at making rooftops smoother to navigate. Removed angled supports from chimney. Removed collision from small props. Added stairs on top of Bodega. Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations. Replaced temp antennae with more "menacing" version to designate zap trigger locations. New Hotel building art pass. Changed exit location from the player spawn area to the rest of the base to the angled walls. Combat Barrier: Fire Rate increased from 6% to 7%. Debuff Remover: Debuff Resistance increased from 35% to 40%. Debuff Remover: Cooldown reduced from 48s to 45s. Withering Whip: Bullet Resist reduction reduced from -14% to -11%. Withering Whip: Cooldown reduced from 22s to 18s. Withering Whip: Now deals 50 Spirit Damage. Improved Cooldown: Cooldown Reduction reduced from 16% to 14%. Improved Cooldown: Spirit Shield improved from 75 to 100. Improved Cooldown: Now grants +10% Ammo. Improved Burst: Now triggers on your base damage, rather than how much the target receives. Improved Burst: Max HP damage reduced from 9% to 8%. Abrams Reverted Melee attack speed reduction. Shoulder Charge can now again use left/right strafe to slightly change direction. Shoulder Charge now carries momentum at the end of the charge. Siphon Life spirit scaling increased from 0.3 to 0.36. Infernal Resilience Damage Regen reduced from 15% to 14%. Infernal Resilience Damage Regen duration increased from 18s to 20s. Infernal Resilience T3 reduced from +8% to +7%. Fixed an issue where Seismic impact would travel more downwards instead of the facing direction. Bebop Sticky Bomb damage gained per hero impact increased from 1% to 1.5%. Sticky Bomb damage gained per hero kill reduced from 5% to 4%. Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor's debuff). Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations). Sticky Bomb now has 2x cast range when used on allies. Hook damage reduced from 40 to 10. Hook damage now has spirit scaling of 2x. Hyper Beam now goes on cooldown for 3 seconds when canceled during precast. Dynamo Now gains 1% Bullet Resist per Boon (0->14%). Fixed Quantum Entanglement sometimes not moving you to the destination properly. Singularity now deals 1.5% Max HP in the base ability. Singularity T3 increased from 3.8% to 4%. Singularity Base DPS reduced from 60 to 45. Grey Talon Base bullet damage reduced from 27 to 24. Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on). Falloff range rescaled from 22m->58m to 18m->54m. Rain of Arrows strafe distance with stamina reduced by 30%. Charged Shot hitbox size reduced by 20%. Haze Bullet Dance no longer hits 2 targets. Bullet Dance now grants +30% Fire Rate. Bullet Dance now allows you to use items during it. Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate. Infernus Catalyst slow reduced from 40% to 35%. Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%. Ivy Watcher's Covenant Fire Rate spirit scaling increased from 0.2 to 0.3. Watcher's Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3. Lash Ground Strike can now be cast while on the zipline. Fixed interaction between Mirage's tornado and Death Slam. Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently). McGinnis Mini Turrets DPS reduced from 60 to 40. Mini Turrets health reduced from 20% max HP to 15%. Mirage Bullet size reduced from 6 to 5. Tornado speed reduced from 20m to 18m. Tornado Lift Duration reduced from 1.1s to 1s. Fire Scarabs T2 reduced from -15% Bullet Resist to -10%. Paradox Bullet velocity increased from 411 to 525. Time Wall no longer has charges. Time Wall no longer deals 10% Max Health Damage. Time Wall cooldown reduced from 37s to 25s. Time Wall T2 is now Deals 10% Max Health Damage. Kinetic Carbine Max Damage Amp increased from 85% to 100%. Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance). Pocket Barrage spirit scaling increased from 0.4 to 0.5. Light melee damage increased from 63 to 75. Vindicta Base bullet damage reduced from 15 to 13. Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on). Stake duration increased from 1.75s to 2s. Flight T2 reduced from +8s to +6s. Crow Familiar tick rate changed from every 0.5s to every 1s. Assassinate starts at 25% power instead of 50% power. Viscous The Cube health regen now scales with spirit at 0.2. Goo Ball down dash ability moved from T3 to base ability. Goo Ball size now increases with range upgrades (doesn't affect collision with world). Fixed some hit detection issues with Goo Ball. Warden Now has +1 Sprint. Bullet Velocity increased from 213 to 290. Last Stand now goes on cooldown if you die or the ability is interrupted while cast. Last Stand T3 no longer grants unstoppable during channel. Last Stand now grants +50% Spirit Resist during channel. Wraith Telekinesis cast time increased from 0.6 to 0.7. Telekinesis damage reduced from 200 to 175. Yamato Shadow Transformation now affects the grapple time speed. Shadow Transformation duration increased from 4s to 6s. Shadow Transformation no longer prevents death. Shadow Transformation now grants +60% Bullet and Spirit Resist. Shadow Transformation now heals for 30% hp (done after the dispel). Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session). Close Quarters No longer grants +85 Bullet Shield Health. Now grants +5% Bullet Resist. Restorative Shot No longer grants +7% Bullet Resist. Now grants +90 Bullet Shield. Now procs on orb shots for NPC heal value. Melee Charge No longer grants +1 HP Regen. Weapon Damage reduced from 12% to 10%. Long Range Long range Weapon Damage reduced from 40% to 30%. Now grants +10% Weapon Damage. Berserker Bullet Resist increased from 7% to 9%. Active Reload Now grants +50 Health. Slowing Bullets Spirit Power increased from +5 to +6. Sharpshooter Long range Weapon Damage reduced from 70% to 50%. Now grants +20% Weapon Damage. Alchemical Fire Now grants +1 Sprint. Heroic Aura Cooldown reduced from 32s to 25s. Intensifying Magazine Time to reach Max Damage reduced from 3s to 2.7s. Toxic Bullets Damage changed from 5% of Current Health to 2.5% of Max Health. Shadow Weave Detection range increased from 18m to 22m. Glass Cannon Health loss reduced from -15% to -12%. Frenzy Low HP bullet resist increased from 45% to 55%. Lucky Shot Fixed it causing proc effects to roll twice whenever it procced. Silencer Now grants +12% Spirit Resist. Vampiric Burst Cooldown reduced from 34s to 30s. Extra Health Weapon Damage increased from 6% to 7%. Healing Rite Duration increased from 19s to 20s (total health restored unchanged). Bullet Armor Bullet Resist increased from 25% to 26%. Return Fire Duration reduced from 7s to 6s. Healing Nova Now grants +6% Ability Range. Debuff Reducer Health increased from +75 to +125. Healbane Healing reduction increased from -40% to -45%. Reactive Barrier Restores 1 stamina on proc. Spirit Armor Spirit Resist increased from 20% to 22%. Divine Barrier No longer grants +8% Ability Range. Now grants +6 Spirit Power. Restorative Locket No longer grants +5 Spirit Power. Now grants +25% Melee Resistance. Metal Skin No longer blocks melee damage. Veil Walker Ammo increased from 12% to 15%. Weapon Damage increased from 10% to 15%. Fortitude Health increased from 365 to 400. Lifestrike Bullet resistance increased from 8% to 10%. Soul Rebirth Removed from the game. Inhibitor Slow reduced from 25% to 20%. Siphon Bullets Now grants +15% Weapon Damage. Phantom Strike Now grounds any flying targets on impact (similar to how Slowing Hex used to work). Ammo Scavenger Duration increased from 35s to 45s. Mystic Burst Now triggers on your base damage, rather than how much the target receives. Slowing Hex Now uses Enduring Spirit as a component. Now gains +10% Spirit Lifesteal and +75 Bonus Health. Spirit Power reduced from 5 to 4. No longer grants +1 Sprint. Damage reduced from 70 to 40. Decay Now grants +1.5 HP Regen. Now grants +8% Ability Duration. Healing reduction increased from -50% to -70%. Bleed Damage reduced from 3.1% to 1%. Cooldown reduced from 45s to 33s. Superior Cooldown Now grants +15% Ammo. Magic Carpet Now grants +10% Ability Range.`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-11-02`, to: `2024-11-07` },
			after: { from: `2024-11-08`, to: `2024-11-10` }
		}
	},
	ae = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{
			level: 3,
			title: `Infernal Resilience Damage Regen`,
			id: `infernal-resilience-damage-regen`
		},
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 3, title: `Hook`, id: `hook` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 3, title: `Singularity Base DPS`, id: `singularity-base-dps` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 3, title: `Charged Shot`, id: `charged-shot` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Catalyst`, id: `catalyst` },
		{ level: 3, title: `Afterburn`, id: `afterburn` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{
			level: 3,
			title: `Watcher's Covenant Fire Rate`,
			id: `watcher-s-covenant-fire-rate`
		},
		{
			level: 3,
			title: `Watcher's Covenant Bullet Lifesteal`,
			id: `watcher-s-covenant-bullet-lifesteal`
		},
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Death Slam`, id: `death-slam` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike-1` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turrets DPS`, id: `mini-turrets-dps` },
		{ level: 3, title: `Mini Turrets`, id: `mini-turrets` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Tornado`, id: `tornado` },
		{ level: 3, title: `Tornado Lift Duration`, id: `tornado-lift-duration` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{
			level: 3,
			title: `Kinetic Carbine Max Damage Amp`,
			id: `kinetic-carbine-max-damage-amp`
		},
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Barrage`, id: `barrage` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `The Cube`, id: `the-cube` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Telekinesis`, id: `telekinesis` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Bullet Armor`, id: `bullet-armor` },
		{ level: 2, title: `Close Quarters`, id: `close-quarters` },
		{ level: 2, title: `Debuff Reducer`, id: `debuff-reducer` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Extra Health`, id: `extra-health` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Glass Cannon`, id: `glass-cannon` },
		{ level: 2, title: `Healbane`, id: `healbane` },
		{ level: 2, title: `Healing Nova`, id: `healing-nova` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Inhibitor`, id: `inhibitor` },
		{ level: 2, title: `Intensifying Magazine`, id: `intensifying-magazine` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Long Range`, id: `long-range` },
		{ level: 2, title: `Lucky Shot`, id: `lucky-shot` },
		{ level: 2, title: `Magic Carpet`, id: `magic-carpet` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Metal Skin`, id: `metal-skin` },
		{ level: 2, title: `Mystic Burst`, id: `mystic-burst` },
		{ level: 2, title: `Phantom Strike`, id: `phantom-strike` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Return Fire`, id: `return-fire` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Siphon Bullets`, id: `siphon-bullets` },
		{ level: 2, title: `Slowing Bullets`, id: `slowing-bullets` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Soul Rebirth`, id: `soul-rebirth` },
		{ level: 2, title: `Spirit Armor`, id: `spirit-armor` },
		{ level: 2, title: `Superior Cooldown`, id: `superior-cooldown` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	l = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-11-02`, to: `2024-11-07` },
			after: { from: `2024-11-08`, to: `2024-11-10` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Bullet Armor`, id: `bullet-armor` },
			{ kind: `item`, name: `Close Quarters`, id: `close-quarters` },
			{ kind: `item`, name: `Debuff Reducer`, id: `debuff-reducer` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Extra Health`, id: `extra-health` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Glass Cannon`, id: `glass-cannon` },
			{ kind: `item`, name: `Healbane`, id: `healbane` },
			{ kind: `item`, name: `Healing Nova`, id: `healing-nova` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Inhibitor`, id: `inhibitor` },
			{ kind: `item`, name: `Intensifying Magazine`, id: `intensifying-magazine` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Long Range`, id: `long-range` },
			{ kind: `item`, name: `Lucky Shot`, id: `lucky-shot` },
			{ kind: `item`, name: `Magic Carpet`, id: `magic-carpet` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Metal Skin`, id: `metal-skin` },
			{ kind: `item`, name: `Mystic Burst`, id: `mystic-burst` },
			{ kind: `item`, name: `Phantom Strike`, id: `phantom-strike` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Return Fire`, id: `return-fire` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Siphon Bullets`, id: `siphon-bullets` },
			{ kind: `item`, name: `Slowing Bullets`, id: `slowing-bullets` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Soul Rebirth`, id: `soul-rebirth` },
			{ kind: `item`, name: `Spirit Armor`, id: `spirit-armor` },
			{ kind: `item`, name: `Superior Cooldown`, id: `superior-cooldown` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	oe = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li></li> <li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li></li> <li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div>`,
		1
	);
function se(e) {
	var c = oe(),
		ie = te(c);
	n(
		ie,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added Trapper to Hero Labs.</li><li>Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time.</li><li>Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs.</li><li>Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase.</li><li>The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases.</li><li>Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit).</li><li>Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent.</li><li>Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives.</li><li>Added checkbox in settings to force the game to take focus when the game is unpaused.</li><li>You can now hover party members on the dashboard while in queue to view their roster.</li><li>Active Reload indicator UI slightly adjusted.</li><li>Added &quot;Frenzied&quot; text when you own Frenzy and go below 50% health.</li><li>Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility.</li><li>Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration.</li><li>Added hover tooltip descriptions to stats on the left side of the hud.</li><li>Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base.</li><li>Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain.</li><li>Fixed Commends for All Heroes not showing up correctly in player profiles.</li><li>Updated McGinnis Barrage explosions to show the edge of the aoe better.</li><li>Fixed the &#x27;x&#x27; button in the shop search not clearing the search box.</li><li>Sinners Sacrifice now has a final damage state for clear read on final hit.</li><li>Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry.</li><li>Fixed various bugs with Duplicate Hero not working properly in private lobbies.</li><li>Fixed Grey Talon getting assist credit while flying Guided Owl.</li><li>Fixed Sinner&#x27;s Sacrifice changing facing direction sometimes.</li><li>Fixed a rare bug where shields would never regenerate.</li><li>Fixed some cases where troopers could get stuck in the base.</li><li>Fixed using melee to secure orbs being a little unresponsive.</li><li>New effects for Viscous heavy melee.</li><li>Added an ambient looping sound for each bridge powerup.</li><li>Fixed some animation issues with Vindicta.</li><li>Added new zipline animation for Vindicta.</li><li>Looped music will resume playing if interrupted by a transient cue.</li><li>Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time.</li><li>Improved animation readability for Mo &amp; Krill heavy melee.</li><li>Reduced visual clutter on Seven&#x27;s tracers with high fire rate.</li><li>Reduced visual clutter on Wraith&#x27;s tracers with high fire rate.</li><li>Effects updates for Fortitude.</li><li>Added missing lean animation near walls for Mirage.</li><li>Sand Blast distance and aoe read improvements.</li><li>Fixed issues where health regen effect will begin popping on and off if player is at max health.</li><li>New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities.</li><li>New sounds added to Lash’s Ground Strike and Flog abilities.</li><li>Renamed &quot;Mouse Wheel&quot; to &quot;Chat Wheel.&quot;</li><li>Steam Input support:</li><li>Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​.</li><li>Added a &quot;Replay Controls&quot; action set​.</li><li>Allow Steam Deck to see the Key Bindings Screen​.</li><li>Improved Glyph Swapping behavior when mixing controller and keyboard inputs​.</li><li>Added Controller tab to house Controller specific options.​</li><li>Added a Steam Input Configurator launch button.​</li><li>Added Glyph Locking options: { Automatic | Keyboard &amp; Mouse Only | Game Pad Only }.</li><li>Fixed crash in spectator mode when querying controller button state​.</li><li>Fixed Controller not working until loading a level​.</li><li>Official Steam Input configs for SteamDeck and DualSense have been updated​.</li><li>Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​</li><li>Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don&#x27;t split souls).</li><li>Troopers no longer increase their bounty by 20% at 8 minutes.</li><li>Hero Kill gold increased from 150-&gt;1400 to 175-&gt;2000 (from 0 min to 45 min).</li><li>Neutral Creeps now give 5% less souls.</li><li>Troopers now take 28% more damage from Guardians.</li><li>Walkers damage vs players increased by 10%.</li><li>Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian.</li><li>Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes.</li><li>Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out.</li><li>Biased Urn delivery locations moved slightly closer to neutral positions.</li><li>Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m).</li><li>Walker armor loss over time now happens at 16m instead of 14m.</li><li>Troopers Spirit resist goes to 30% instead of 40% at 25 minutes.</li><li>Mid Boss Rejuv Trooper Health increased by 30%.</li><li>Fixed Troopers resistance against Base Guardians not working properly.</li><li>Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings.</li><li>Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location.</li><li>Removed all railings from fire escape stairs.</li><li>Pass at making rooftops smoother to navigate.</li><li>Removed angled supports from chimney.</li><li>Removed collision from small props.</li><li>Added stairs on top of Bodega.</li><li>Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations.</li><li>Replaced temp antennae with more &quot;menacing&quot; version to designate zap trigger locations.</li><li>New Hotel building art pass.</li><li>Changed exit location from the player spawn area to the rest of the base to the angled walls.</li><li>Combat Barrier: Fire Rate increased from 6% to 7%.</li><li>Debuff Remover: Debuff Resistance increased from 35% to 40%.</li><li>Debuff Remover: Cooldown reduced from 48s to 45s.</li><li>Withering Whip: Bullet Resist reduction reduced from -14% to -11%.</li><li>Withering Whip: Cooldown reduced from 22s to 18s.</li><li>Withering Whip: Now deals 50 Spirit Damage.</li><li>Improved Cooldown: Cooldown Reduction reduced from 16% to 14%.</li><li>Improved Cooldown: Spirit Shield improved from 75 to 100.</li><li>Improved Cooldown: Now grants +10% Ammo.</li><li>Improved Burst: Now triggers on your base damage, rather than how much the target receives.</li><li>Improved Burst: Max HP damage reduced from 9% to 8%.</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var ae = a(ie, 2);
	ne(ae, {});
	var l = a(ae, 2);
	r(l, 1, `hero abrams`);
	var se = i(l);
	n(
		se,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
<ul><li>Reverted Melee attack speed reduction.</li></ul>
`
	);
	var u = a(se, 2);
	r(u, 1, `ability shoulder-charge`);
	var ce = i(u);
	n(
		ce,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Shoulder Charge can now again use left/right strafe to slightly change direction.</li><li>Shoulder Charge now carries momentum at the end of the charge.</li></ul>
`
	);
	var le = a(ce, 2);
	(o(le, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), t(u));
	var d = a(u, 2);
	r(d, 1, `ability siphon-life`);
	var ue = i(d);
	n(
		ue,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>
<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>
<ul><li>Siphon Life spirit scaling increased from 0.3 to 0.36.</li></ul>
`
	);
	var de = a(ue, 2);
	(o(de, { kind: `hero`, name: `Abrams`, ability: `Siphon Life` }), t(d));
	var f = a(d, 2);
	r(f, 1, `ability infernal-resilience-damage-regen`);
	var fe = i(f);
	n(
		fe,
		() => `
<h4 id="infernal-resilience-damage-regen"><a href="/ability/infernal-resilience">Infernal Resilience Damage Regen</a></h4>
<ul><li>Infernal Resilience Damage Regen reduced from 15% to 14%.</li><li>Infernal Resilience Damage Regen duration increased from 18s to 20s.</li></ul>
`
	);
	var pe = a(fe, 2);
	(o(pe, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience Damage Regen` }),
		t(f));
	var p = a(f, 2);
	r(p, 1, `ability infernal-resilience`);
	var me = i(p);
	n(
		me,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience T3 reduced from +8% to +7%.</li></ul>
`
	);
	var he = a(me, 2);
	(o(he, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), t(p));
	var ge = a(p, 2);
	r(ge, 1, `ability seismic-impact`);
	var _e = i(ge);
	n(
		_e,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Fixed an issue where Seismic impact would travel more downwards instead of the facing direction.</li></ul>
`
	);
	var ve = a(_e, 2);
	(o(ve, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), t(ge), t(l));
	var m = a(l, 2);
	r(m, 1, `hero bebop`);
	var ye = i(m);
	n(
		ye,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var h = a(ye, 2);
	r(h, 1, `ability sticky-bomb`);
	var be = i(h);
	n(
		be,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
<ul><li>Sticky Bomb damage gained per hero impact increased from 1% to 1.5%.</li><li>Sticky Bomb damage gained per hero kill reduced from 5% to 4%.</li><li>Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor&#x27;s debuff).</li><li>Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations).</li><li>Sticky Bomb now has 2x cast range when used on allies.</li></ul>
`
	);
	var xe = a(be, 2);
	(o(xe, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(h));
	var g = a(h, 2);
	r(g, 1, `ability hook`);
	var Se = i(g);
	n(
		Se,
		() => `
<h4 id="hook">Hook</h4>
`
	);
	var Ce = a(Se, 2),
		we = i(Ce),
		Te = i(we);
	n(Te, () => `Hook damage reduced from 40 to 10.`);
	var Ee = a(Te, 2);
	(s(Ee, {
		kind: `hero`,
		name: `Bebop`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Hook damage reduced from 40 to 10.`
	}),
		t(we));
	var De = a(we, 2);
	(n(De, () => `Hook damage now has spirit scaling of 2x.`, !0), t(De), t(Ce));
	var Oe = a(Ce, 2);
	(o(Oe, { kind: `hero`, name: `Bebop`, ability: `Hook` }), t(g));
	var ke = a(g, 2);
	r(ke, 1, `ability hyper-beam`);
	var Ae = i(ke);
	n(
		Ae,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam now goes on cooldown for 3 seconds when canceled during precast.</li></ul>
`
	);
	var je = a(Ae, 2);
	(o(je, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), t(ke), t(m));
	var _ = a(m, 2);
	r(_, 1, `hero dynamo`);
	var Me = i(_);
	n(
		Me,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
<ul><li>Now gains 1% Bullet Resist per Boon (0-&gt;14%).</li></ul>
`
	);
	var v = a(Me, 2);
	r(v, 1, `ability quantum-entanglement`);
	var Ne = i(v);
	n(
		Ne,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Fixed Quantum Entanglement sometimes not moving you to the destination properly.</li></ul>
`
	);
	var Pe = a(Ne, 2);
	(o(Pe, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), t(v));
	var y = a(v, 2);
	r(y, 1, `ability singularity`);
	var Fe = i(y);
	n(
		Fe,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
<ul><li>Singularity now deals 1.5% Max HP in the base ability.</li><li>Singularity T3 increased from 3.8% to 4%.</li></ul>
`
	);
	var Ie = a(Fe, 2);
	(o(Ie, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), t(y));
	var Le = a(y, 2);
	r(Le, 1, `ability singularity-base-dps`);
	var Re = i(Le);
	n(
		Re,
		() => `
<h4 id="singularity-base-dps"><a href="/ability/singularity">Singularity Base DPS</a></h4>
<ul><li>Singularity Base DPS reduced from 60 to 45.</li></ul>
`
	);
	var ze = a(Re, 2);
	(o(ze, { kind: `hero`, name: `Dynamo`, ability: `Singularity Base DPS` }), t(Le), t(_));
	var b = a(_, 2);
	r(b, 1, `hero grey-talon`);
	var Be = i(b);
	n(
		Be,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
<ul><li>Base bullet damage reduced from 27 to 24.</li><li>Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on).</li><li>Falloff range rescaled from 22m-&gt;58m to 18m-&gt;54m.</li></ul>
`
	);
	var x = a(Be, 2);
	r(x, 1, `ability rain-of-arrows`);
	var Ve = i(x);
	n(
		Ve,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
<ul><li>Rain of Arrows strafe distance with stamina reduced by 30%.</li></ul>
`
	);
	var He = a(Ve, 2);
	(o(He, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), t(x));
	var Ue = a(x, 2);
	r(Ue, 1, `ability charged-shot`);
	var We = i(Ue);
	n(
		We,
		() => `
<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>
<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>
<ul><li>Charged Shot hitbox size reduced by 20%.</li></ul>
`
	);
	var Ge = a(We, 2);
	(o(Ge, { kind: `hero`, name: `Grey Talon`, ability: `Charged Shot` }), t(Ue), t(b));
	var S = a(b, 2);
	r(S, 1, `hero haze`);
	var Ke = i(S);
	n(
		Ke,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var C = a(Ke, 2);
	r(C, 1, `ability bullet-dance`);
	var qe = i(C);
	n(
		qe,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance no longer hits 2 targets.</li><li>Bullet Dance now grants +30% Fire Rate.</li><li>Bullet Dance now allows you to use items during it.</li></ul>
`
	);
	var Je = a(qe, 2);
	(o(Je, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(C));
	var Ye = a(C, 2);
	r(Ye, 1, `ability sleep-dagger`);
	var Xe = i(Ye);
	n(
		Xe,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate.</li></ul>
`
	);
	var Ze = a(Xe, 2);
	(o(Ze, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), t(Ye), t(S));
	var w = a(S, 2);
	r(w, 1, `hero infernus`);
	var Qe = i(w);
	n(
		Qe,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var T = a(Qe, 2);
	r(T, 1, `ability catalyst`);
	var $e = i(T);
	n(
		$e,
		() => `
<h4 id="catalyst">Catalyst</h4>
<ul><li>Catalyst slow reduced from 40% to 35%.</li></ul>
`
	);
	var et = a($e, 2);
	(o(et, { kind: `hero`, name: `Infernus`, ability: `Catalyst` }), t(T));
	var tt = a(T, 2);
	r(tt, 1, `ability afterburn`);
	var nt = i(tt);
	n(
		nt,
		() => `
<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>
<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>
<ul><li>Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%.</li></ul>
`
	);
	var rt = a(nt, 2);
	(o(rt, { kind: `hero`, name: `Infernus`, ability: `Afterburn` }), t(tt), t(w));
	var E = a(w, 2);
	r(E, 1, `hero ivy`);
	var it = i(E);
	n(
		it,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var D = a(it, 2);
	r(D, 1, `ability watcher-s-covenant-fire-rate`);
	var at = i(D);
	n(
		at,
		() => `
<h4 id="watcher-s-covenant-fire-rate">Watcher&#x27;s Covenant Fire Rate</h4>
<ul><li>Watcher&#x27;s Covenant Fire Rate spirit scaling increased from 0.2 to 0.3.</li></ul>
`
	);
	var ot = a(at, 2);
	(o(ot, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant Fire Rate` }), t(D));
	var st = a(D, 2);
	r(st, 1, `ability watcher-s-covenant-bullet-lifesteal`);
	var ct = i(st);
	n(
		ct,
		() => `
<h4 id="watcher-s-covenant-bullet-lifesteal">Watcher&#x27;s Covenant Bullet Lifesteal</h4>
<ul><li>Watcher&#x27;s Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3.</li></ul>
`
	);
	var lt = a(ct, 2);
	(o(lt, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant Bullet Lifesteal` }),
		t(st),
		t(E));
	var O = a(E, 2);
	r(O, 1, `hero lash`);
	var ut = i(O);
	n(
		ut,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var k = a(ut, 2);
	r(k, 1, `ability ground-strike`);
	var dt = i(k);
	n(
		dt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike can now be cast while on the zipline.</li></ul>
`
	);
	var ft = a(dt, 2);
	(o(ft, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(k));
	var A = a(k, 2);
	r(A, 1, `ability death-slam`);
	var pt = i(A);
	n(
		pt,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>
<ul><li>Fixed interaction between Mirage&#x27;s tornado and Death Slam.</li></ul>
`
	);
	var mt = a(pt, 2);
	(o(mt, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), t(A));
	var ht = a(A, 2);
	r(ht, 1, `ability ground-strike`);
	var gt = i(ht);
	n(
		gt,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike-1"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently).</li></ul>
`
	);
	var _t = a(gt, 2);
	(o(_t, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), t(ht), t(O));
	var j = a(O, 2);
	r(j, 1, `hero mcginnis`);
	var vt = i(j);
	n(
		vt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var M = a(vt, 2);
	r(M, 1, `ability mini-turrets-dps`);
	var yt = i(M);
	n(
		yt,
		() => `
<h4 id="mini-turrets-dps"><a href="/ability/mini-turret">Mini Turrets DPS</a></h4>
<ul><li>Mini Turrets DPS reduced from 60 to 40.</li></ul>
`
	);
	var bt = a(yt, 2);
	(o(bt, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets DPS` }), t(M));
	var xt = a(M, 2);
	r(xt, 1, `ability mini-turrets`);
	var St = i(xt);
	n(
		St,
		() => `
<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>
<ul><li>Mini Turrets health reduced from 20% max HP to 15%.</li></ul>
`
	);
	var Ct = a(St, 2);
	(o(Ct, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets` }), t(xt), t(j));
	var N = a(j, 2);
	r(N, 1, `hero mirage`);
	var wt = i(N);
	n(
		wt,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
<ul><li>Bullet size reduced from 6 to 5.</li></ul>
`
	);
	var P = a(wt, 2);
	r(P, 1, `ability tornado`);
	var Tt = i(P);
	n(
		Tt,
		() => `
<h4 id="tornado">Tornado</h4>
<ul><li>Tornado speed reduced from 20m to 18m.</li></ul>
`
	);
	var Et = a(Tt, 2);
	(o(Et, { kind: `hero`, name: `Mirage`, ability: `Tornado` }), t(P));
	var F = a(P, 2);
	r(F, 1, `ability tornado-lift-duration`);
	var Dt = i(F);
	n(
		Dt,
		() => `
<h4 id="tornado-lift-duration">Tornado Lift Duration</h4>
<ul><li>Tornado Lift Duration reduced from 1.1s to 1s.</li></ul>
`
	);
	var Ot = a(Dt, 2);
	(o(Ot, { kind: `hero`, name: `Mirage`, ability: `Tornado Lift Duration` }), t(F));
	var kt = a(F, 2);
	r(kt, 1, `ability fire-scarabs`);
	var At = i(kt);
	n(
		At,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
<ul><li>Fire Scarabs T2 reduced from -15% Bullet Resist to -10%.</li></ul>
`
	);
	var jt = a(At, 2);
	(o(jt, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), t(kt), t(N));
	var I = a(N, 2);
	r(I, 1, `hero paradox`);
	var Mt = i(I);
	n(
		Mt,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
<ul><li>Bullet velocity increased from 411 to 525.</li></ul>
`
	);
	var L = a(Mt, 2);
	r(L, 1, `ability time-wall`);
	var Nt = i(L);
	n(
		Nt,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
`
	);
	var Pt = a(Nt, 2),
		Ft = i(Pt);
	(n(Ft, () => `Time Wall no longer has charges.`, !0), t(Ft));
	var It = a(Ft, 2);
	(n(It, () => `Time Wall no longer deals 10% Max Health Damage.`, !0), t(It));
	var Lt = a(It, 2),
		Rt = i(Lt);
	n(Rt, () => `Time Wall cooldown reduced from 37s to 25s.`);
	var zt = a(Rt, 2);
	(s(zt, {
		kind: `hero`,
		name: `Paradox`,
		groupIndex: 1,
		bulletIndex: 2,
		text: `Time Wall cooldown reduced from 37s to 25s.`
	}),
		t(Lt));
	var Bt = a(Lt, 2);
	(n(Bt, () => `Time Wall T2 is now Deals 10% Max Health Damage.`, !0), t(Bt), t(Pt));
	var Vt = a(Pt, 2);
	(o(Vt, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), t(L));
	var R = a(L, 2);
	r(R, 1, `ability kinetic-carbine-max-damage-amp`);
	var Ht = i(R);
	n(
		Ht,
		() => `
<h4 id="kinetic-carbine-max-damage-amp"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Damage Amp</a></h4>
<ul><li>Kinetic Carbine Max Damage Amp increased from 85% to 100%.</li></ul>
`
	);
	var Ut = a(Ht, 2);
	(o(Ut, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine Max Damage Amp` }),
		t(R));
	var Wt = a(R, 2);
	r(Wt, 1, `ability paradoxical-swap`);
	var Gt = i(Wt);
	n(
		Gt,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
<ul><li>Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance).</li></ul>
`
	);
	var Kt = a(Gt, 2);
	(o(Kt, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), t(Wt), t(I));
	var z = a(I, 2);
	r(z, 1, `hero pocket`);
	var qt = i(z);
	n(
		qt,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var B = a(qt, 2);
	r(B, 1, `ability barrage`);
	var Jt = i(B);
	n(
		Jt,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>
<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>
<ul><li>Barrage spirit scaling increased from 0.4 to 0.5.</li></ul>
`
	);
	var Yt = a(Jt, 2);
	(o(Yt, { kind: `hero`, name: `Pocket`, ability: `Barrage` }), t(B));
	var Xt = a(B, 2);
	(n(
		Xt,
		() => `
<ul><li>Light melee damage increased from 63 to 75.</li></ul>
`
	),
		t(z));
	var V = a(z, 2);
	r(V, 1, `hero vindicta`);
	var Zt = i(V);
	n(
		Zt,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Base bullet damage reduced from 15 to 13.</li><li>Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on).</li></ul>
`
	);
	var H = a(Zt, 2);
	r(H, 1, `ability stake`);
	var Qt = i(H);
	n(
		Qt,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
<ul><li>Stake duration increased from 1.75s to 2s.</li></ul>
`
	);
	var $t = a(Qt, 2);
	(o($t, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), t(H));
	var U = a(H, 2);
	r(U, 1, `ability flight`);
	var en = i(U);
	n(
		en,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
<ul><li>Flight T2 reduced from +8s to +6s.</li></ul>
`
	);
	var tn = a(en, 2);
	(o(tn, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), t(U));
	var W = a(U, 2);
	r(W, 1, `ability crow-familiar`);
	var nn = i(W);
	n(
		nn,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar tick rate changed from every 0.5s to every 1s.</li></ul>
`
	);
	var rn = a(nn, 2);
	(o(rn, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), t(W));
	var an = a(W, 2);
	r(an, 1, `ability assassinate`);
	var on = i(an);
	n(
		on,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate starts at 25% power instead of 50% power.</li></ul>
`
	);
	var sn = a(on, 2);
	(o(sn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), t(an), t(V));
	var G = a(V, 2);
	r(G, 1, `hero viscous`);
	var cn = i(G);
	n(
		cn,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var K = a(cn, 2);
	r(K, 1, `ability the-cube`);
	var ln = i(K);
	n(
		ln,
		() => `
<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>
<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>
<ul><li>The Cube health regen now scales with spirit at 0.2.</li></ul>
`
	);
	var un = a(ln, 2);
	(o(un, { kind: `hero`, name: `Viscous`, ability: `The Cube` }), t(K));
	var dn = a(K, 2);
	r(dn, 1, `ability goo-ball`);
	var fn = i(dn);
	n(
		fn,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball down dash ability moved from T3 to base ability.</li><li>Goo Ball size now increases with range upgrades (doesn&#x27;t affect collision with world).</li><li>Fixed some hit detection issues with Goo Ball.</li></ul>
`
	);
	var pn = a(fn, 2);
	(o(pn, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(dn), t(G));
	var q = a(G, 2);
	r(q, 1, `hero warden`);
	var mn = i(q);
	n(
		mn,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Now has +1 Sprint.</li><li>Bullet Velocity increased from 213 to 290.</li></ul>
`
	);
	var hn = a(mn, 2);
	r(hn, 1, `ability last-stand`);
	var gn = i(hn);
	n(
		gn,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand now goes on cooldown if you die or the ability is interrupted while cast.</li><li>Last Stand T3 no longer grants unstoppable during channel.</li><li>Last Stand now grants +50% Spirit Resist during channel.</li></ul>
`
	);
	var _n = a(gn, 2);
	(o(_n, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), t(hn), t(q));
	var J = a(q, 2);
	r(J, 1, `hero wraith`);
	var vn = i(J);
	n(
		vn,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
`
	);
	var yn = a(vn, 2);
	r(yn, 1, `ability telekinesis`);
	var bn = i(yn);
	n(
		bn,
		() => `
<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>
<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>
`
	);
	var xn = a(bn, 2),
		Sn = i(xn);
	(n(Sn, () => `Telekinesis cast time increased from 0.6 to 0.7.`, !0), t(Sn));
	var Cn = a(Sn, 2),
		wn = i(Cn);
	n(wn, () => `Telekinesis damage reduced from 200 to 175.`);
	var Tn = a(wn, 2);
	(s(Tn, {
		kind: `hero`,
		name: `Wraith`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Telekinesis damage reduced from 200 to 175.`
	}),
		t(Cn),
		t(xn));
	var En = a(xn, 2);
	(o(En, { kind: `hero`, name: `Wraith`, ability: `Telekinesis` }), t(yn), t(J));
	var Y = a(J, 2);
	r(Y, 1, `hero yamato`);
	var Dn = i(Y);
	n(
		Dn,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var On = a(Dn, 2);
	r(On, 1, `ability shadow-transformation`);
	var kn = i(On);
	n(
		kn,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation now affects the grapple time speed.</li><li>Shadow Transformation duration increased from 4s to 6s.</li><li>Shadow Transformation no longer prevents death.</li><li>Shadow Transformation now grants +60% Bullet and Spirit Resist.</li><li>Shadow Transformation now heals for 30% hp (done after the dispel).</li><li>Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session).</li></ul>
`
	);
	var An = a(kn, 2);
	(o(An, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		t(On),
		t(Y));
	var jn = a(Y, 2);
	n(
		jn,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Mn = a(jn, 2);
	re(Mn, {});
	var X = a(Mn, 2);
	r(X, 1, `item active-reload`);
	var Nn = i(X);
	n(
		Nn,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>Now grants +50 Health.</li></ul>
`
	);
	var Pn = a(Nn, 2);
	(o(Pn, { kind: `item`, name: `Active Reload`, ability: null }), t(X));
	var Z = a(X, 2);
	r(Z, 1, `item alchemical-fire`);
	var Fn = i(Z);
	n(
		Fn,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Now grants +1 Sprint.</li></ul>
`
	);
	var In = a(Fn, 2);
	(o(In, { kind: `item`, name: `Alchemical Fire`, ability: null }), t(Z));
	var Q = a(Z, 2);
	r(Q, 1, `item ammo-scavenger`);
	var Ln = i(Q);
	n(
		Ln,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Duration increased from 35s to 45s.</li></ul>
`
	);
	var Rn = a(Ln, 2);
	(o(Rn, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(Q));
	var $ = a(Q, 2);
	r($, 1, `item berserker`);
	var zn = i($);
	n(
		zn,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Bullet Resist increased from 7% to 9%.</li></ul>
`
	);
	var Bn = a(zn, 2);
	(o(Bn, { kind: `item`, name: `Berserker`, ability: null }), t($));
	var Vn = a($, 2);
	r(Vn, 1, `item bullet-armor`);
	var Hn = i(Vn);
	n(
		Hn,
		() => `
<p><a href="/item/bullet-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Armor patch history</a></p>
<h3 id="bullet-armor"><a href="/item/bullet-armor">Bullet Armor</a></h3>
<ul><li>Bullet Resist increased from 25% to 26%.</li></ul>
`
	);
	var Un = a(Hn, 2);
	(o(Un, { kind: `item`, name: `Bullet Armor`, ability: null }), t(Vn));
	var Wn = a(Vn, 2);
	r(Wn, 1, `item close-quarters`);
	var Gn = i(Wn);
	n(
		Gn,
		() => `
<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>
<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>
<ul><li>No longer grants +85 Bullet Shield Health.</li><li>Now grants +5% Bullet Resist.</li></ul>
`
	);
	var Kn = a(Gn, 2);
	(o(Kn, { kind: `item`, name: `Close Quarters`, ability: null }), t(Wn));
	var qn = a(Wn, 2);
	r(qn, 1, `item debuff-reducer`);
	var Jn = i(qn);
	n(
		Jn,
		() => `
<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>
<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>
<ul><li>Health increased from +75 to +125.</li></ul>
`
	);
	var Yn = a(Jn, 2);
	(o(Yn, { kind: `item`, name: `Debuff Reducer`, ability: null }), t(qn));
	var Xn = a(qn, 2);
	r(Xn, 1, `item decay`);
	var Zn = i(Xn);
	n(
		Zn,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
`
	);
	var Qn = a(Zn, 2),
		$n = i(Qn);
	(n($n, () => `Now grants +1.5 HP Regen.`, !0), t($n));
	var er = a($n, 2);
	(n(er, () => `Now grants +8% Ability Duration.`, !0), t(er));
	var tr = a(er, 2);
	(n(tr, () => `Healing reduction increased from -50% to -70%.`, !0), t(tr));
	var nr = a(tr, 2);
	(n(nr, () => `Bleed Damage reduced from 3.1% to 1%.`, !0), t(nr));
	var rr = a(nr, 2),
		ir = i(rr);
	n(ir, () => `Cooldown reduced from 45s to 33s.`);
	var ar = a(ir, 2);
	(s(ar, {
		kind: `item`,
		name: `Decay`,
		groupIndex: 0,
		bulletIndex: 4,
		text: `Cooldown reduced from 45s to 33s.`
	}),
		t(rr),
		t(Qn));
	var or = a(Qn, 2);
	(o(or, { kind: `item`, name: `Decay`, ability: null }), t(Xn));
	var sr = a(Xn, 2);
	r(sr, 1, `item divine-barrier`);
	var cr = i(sr);
	n(
		cr,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
<ul><li>No longer grants +8% Ability Range.</li><li>Now grants +6 Spirit Power.</li></ul>
`
	);
	var lr = a(cr, 2);
	(o(lr, { kind: `item`, name: `Divine Barrier`, ability: null }), t(sr));
	var ur = a(sr, 2);
	r(ur, 1, `item extra-health`);
	var dr = i(ur);
	n(
		dr,
		() => `
<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>
<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>
<ul><li>Weapon Damage increased from 6% to 7%.</li></ul>
`
	);
	var fr = a(dr, 2);
	(o(fr, { kind: `item`, name: `Extra Health`, ability: null }), t(ur));
	var pr = a(ur, 2);
	r(pr, 1, `item fortitude`);
	var mr = i(pr);
	n(
		mr,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Health increased from 365 to 400.</li></ul>
`
	);
	var hr = a(mr, 2);
	(o(hr, { kind: `item`, name: `Fortitude`, ability: null }), t(pr));
	var gr = a(pr, 2);
	r(gr, 1, `item frenzy`);
	var _r = i(gr);
	n(
		_r,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Low HP bullet resist increased from 45% to 55%.</li></ul>
`
	);
	var vr = a(_r, 2);
	(o(vr, { kind: `item`, name: `Frenzy`, ability: null }), t(gr));
	var yr = a(gr, 2);
	r(yr, 1, `item glass-cannon`);
	var br = i(yr);
	n(
		br,
		() => `
<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>
<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>
<ul><li>Health loss reduced from -15% to -12%.</li></ul>
`
	);
	var xr = a(br, 2);
	(o(xr, { kind: `item`, name: `Glass Cannon`, ability: null }), t(yr));
	var Sr = a(yr, 2);
	r(Sr, 1, `item healbane`);
	var Cr = i(Sr);
	n(
		Cr,
		() => `
<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>
<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>
<ul><li>Healing reduction increased from -40% to -45%.</li></ul>
`
	);
	var wr = a(Cr, 2);
	(o(wr, { kind: `item`, name: `Healbane`, ability: null }), t(Sr));
	var Tr = a(Sr, 2);
	r(Tr, 1, `item healing-nova`);
	var Er = i(Tr);
	n(
		Er,
		() => `
<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>
<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>
<ul><li>Now grants +6% Ability Range.</li></ul>
`
	);
	var Dr = a(Er, 2);
	(o(Dr, { kind: `item`, name: `Healing Nova`, ability: null }), t(Tr));
	var Or = a(Tr, 2);
	r(Or, 1, `item healing-rite`);
	var kr = i(Or);
	n(
		kr,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
<ul><li>Duration increased from 19s to 20s (total health restored unchanged).</li></ul>
`
	);
	var Ar = a(kr, 2);
	(o(Ar, { kind: `item`, name: `Healing Rite`, ability: null }), t(Or));
	var jr = a(Or, 2);
	r(jr, 1, `item heroic-aura`);
	var Mr = i(jr);
	n(
		Mr,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
`
	);
	var Nr = a(Mr, 2),
		Pr = i(Nr),
		Fr = i(Pr);
	n(Fr, () => `Cooldown reduced from 32s to 25s.`);
	var Ir = a(Fr, 2);
	(s(Ir, {
		kind: `item`,
		name: `Heroic Aura`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 32s to 25s.`
	}),
		t(Pr),
		t(Nr));
	var Lr = a(Nr, 2);
	(o(Lr, { kind: `item`, name: `Heroic Aura`, ability: null }), t(jr));
	var Rr = a(jr, 2);
	r(Rr, 1, `item inhibitor`);
	var zr = i(Rr);
	n(
		zr,
		() => `
<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>
<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>
<ul><li>Slow reduced from 25% to 20%.</li></ul>
`
	);
	var Br = a(zr, 2);
	(o(Br, { kind: `item`, name: `Inhibitor`, ability: null }), t(Rr));
	var Vr = a(Rr, 2);
	r(Vr, 1, `item intensifying-magazine`);
	var Hr = i(Vr);
	n(
		Hr,
		() => `
<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>
<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>
<ul><li>Time to reach Max Damage reduced from 3s to 2.7s.</li></ul>
`
	);
	var Ur = a(Hr, 2);
	(o(Ur, { kind: `item`, name: `Intensifying Magazine`, ability: null }), t(Vr));
	var Wr = a(Vr, 2);
	r(Wr, 1, `item lifestrike`);
	var Gr = i(Wr);
	n(
		Gr,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
<ul><li>Bullet resistance increased from 8% to 10%.</li></ul>
`
	);
	var Kr = a(Gr, 2);
	(o(Kr, { kind: `item`, name: `Lifestrike`, ability: null }), t(Wr));
	var qr = a(Wr, 2);
	r(qr, 1, `item long-range`);
	var Jr = i(qr);
	n(
		Jr,
		() => `
<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>
<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>
<ul><li>Long range Weapon Damage reduced from 40% to 30%.</li><li>Now grants +10% Weapon Damage.</li></ul>
`
	);
	var Yr = a(Jr, 2);
	(o(Yr, { kind: `item`, name: `Long Range`, ability: null }), t(qr));
	var Xr = a(qr, 2);
	r(Xr, 1, `item lucky-shot`);
	var Zr = i(Xr);
	n(
		Zr,
		() => `
<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>
<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>
<ul><li>Fixed it causing proc effects to roll twice whenever it procced.</li></ul>
`
	);
	var Qr = a(Zr, 2);
	(o(Qr, { kind: `item`, name: `Lucky Shot`, ability: null }), t(Xr));
	var $r = a(Xr, 2);
	r($r, 1, `item magic-carpet`);
	var ei = i($r);
	n(
		ei,
		() => `
<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>
<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>
<ul><li>Now grants +10% Ability Range.</li></ul>
`
	);
	var ti = a(ei, 2);
	(o(ti, { kind: `item`, name: `Magic Carpet`, ability: null }), t($r));
	var ni = a($r, 2);
	r(ni, 1, `item melee-charge`);
	var ri = i(ni);
	n(
		ri,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>No longer grants +1 HP Regen.</li><li>Weapon Damage reduced from 12% to 10%.</li></ul>
`
	);
	var ii = a(ri, 2);
	(o(ii, { kind: `item`, name: `Melee Charge`, ability: null }), t(ni));
	var ai = a(ni, 2);
	r(ai, 1, `item metal-skin`);
	var oi = i(ai);
	n(
		oi,
		() => `
<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>
<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>
<ul><li>No longer blocks melee damage.</li></ul>
`
	);
	var si = a(oi, 2);
	(o(si, { kind: `item`, name: `Metal Skin`, ability: null }), t(ai));
	var ci = a(ai, 2);
	r(ci, 1, `item mystic-burst`);
	var li = i(ci);
	n(
		li,
		() => `
<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>
<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>
<ul><li>Now triggers on your base damage, rather than how much the target receives.</li></ul>
`
	);
	var ui = a(li, 2);
	(o(ui, { kind: `item`, name: `Mystic Burst`, ability: null }), t(ci));
	var di = a(ci, 2);
	r(di, 1, `item phantom-strike`);
	var fi = i(di);
	n(
		fi,
		() => `
<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>
<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>
<ul><li>Now grounds any flying targets on impact (similar to how Slowing Hex used to work).</li></ul>
`
	);
	var pi = a(fi, 2);
	(o(pi, { kind: `item`, name: `Phantom Strike`, ability: null }), t(di));
	var mi = a(di, 2);
	r(mi, 1, `item reactive-barrier`);
	var hi = i(mi);
	n(
		hi,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
<ul><li>Restores 1 stamina on proc.</li></ul>
`
	);
	var gi = a(hi, 2);
	(o(gi, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(mi));
	var _i = a(mi, 2);
	r(_i, 1, `item restorative-locket`);
	var vi = i(_i);
	n(
		vi,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>No longer grants +5 Spirit Power.</li><li>Now grants +25% Melee Resistance.</li></ul>
`
	);
	var yi = a(vi, 2);
	(o(yi, { kind: `item`, name: `Restorative Locket`, ability: null }), t(_i));
	var bi = a(_i, 2);
	r(bi, 1, `item restorative-shot`);
	var xi = i(bi);
	n(
		xi,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>No longer grants +7% Bullet Resist.</li><li>Now grants +90 Bullet Shield.</li><li>Now procs on orb shots for NPC heal value.</li></ul>
`
	);
	var Si = a(xi, 2);
	(o(Si, { kind: `item`, name: `Restorative Shot`, ability: null }), t(bi));
	var Ci = a(bi, 2);
	r(Ci, 1, `item return-fire`);
	var wi = i(Ci);
	n(
		wi,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
<ul><li>Duration reduced from 7s to 6s.</li></ul>
`
	);
	var Ti = a(wi, 2);
	(o(Ti, { kind: `item`, name: `Return Fire`, ability: null }), t(Ci));
	var Ei = a(Ci, 2);
	r(Ei, 1, `item shadow-weave`);
	var Di = i(Ei);
	n(
		Di,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
<ul><li>Detection range increased from 18m to 22m.</li></ul>
`
	);
	var Oi = a(Di, 2);
	(o(Oi, { kind: `item`, name: `Shadow Weave`, ability: null }), t(Ei));
	var ki = a(Ei, 2);
	r(ki, 1, `item sharpshooter`);
	var Ai = i(ki);
	n(
		Ai,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Long range Weapon Damage reduced from 70% to 50%.</li><li>Now grants +20% Weapon Damage.</li></ul>
`
	);
	var ji = a(Ai, 2);
	(o(ji, { kind: `item`, name: `Sharpshooter`, ability: null }), t(ki));
	var Mi = a(ki, 2);
	r(Mi, 1, `item silencer`);
	var Ni = i(Mi);
	n(
		Ni,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Now grants +12% Spirit Resist.</li></ul>
`
	);
	var Pi = a(Ni, 2);
	(o(Pi, { kind: `item`, name: `Silencer`, ability: null }), t(Mi));
	var Fi = a(Mi, 2);
	r(Fi, 1, `item siphon-bullets`);
	var Ii = i(Fi);
	n(
		Ii,
		() => `
<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>
<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>
<ul><li>Now grants +15% Weapon Damage.</li></ul>
`
	);
	var Li = a(Ii, 2);
	(o(Li, { kind: `item`, name: `Siphon Bullets`, ability: null }), t(Fi));
	var Ri = a(Fi, 2);
	r(Ri, 1, `item slowing-bullets`);
	var zi = i(Ri);
	n(
		zi,
		() => `
<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>
<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>
<ul><li>Spirit Power increased from +5 to +6.</li></ul>
`
	);
	var Bi = a(zi, 2);
	(o(Bi, { kind: `item`, name: `Slowing Bullets`, ability: null }), t(Ri));
	var Vi = a(Ri, 2);
	r(Vi, 1, `item slowing-hex`);
	var Hi = i(Vi);
	n(
		Hi,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
`
	);
	var Ui = a(Hi, 2),
		Wi = i(Ui);
	(n(Wi, () => `Now uses Enduring Spirit as a component.`, !0), t(Wi));
	var Gi = a(Wi, 2);
	(n(Gi, () => `Now gains +10% Spirit Lifesteal and +75 Bonus Health.`, !0), t(Gi));
	var Ki = a(Gi, 2);
	(n(Ki, () => `Spirit Power reduced from 5 to 4.`, !0), t(Ki));
	var qi = a(Ki, 2);
	(n(qi, () => `No longer grants +1 Sprint.`, !0), t(qi));
	var Ji = a(qi, 2),
		Yi = i(Ji);
	n(Yi, () => `Damage reduced from 70 to 40.`);
	var Xi = a(Yi, 2);
	(s(Xi, {
		kind: `item`,
		name: `Slowing Hex`,
		groupIndex: 0,
		bulletIndex: 4,
		text: `Damage reduced from 70 to 40.`
	}),
		t(Ji),
		t(Ui));
	var Zi = a(Ui, 2);
	(o(Zi, { kind: `item`, name: `Slowing Hex`, ability: null }), t(Vi));
	var Qi = a(Vi, 2);
	r(Qi, 1, `item soul-rebirth`);
	var $i = i(Qi);
	n(
		$i,
		() => `
<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>
<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>
<ul><li>Removed from the game.</li></ul>
`
	);
	var ea = a($i, 2);
	(o(ea, { kind: `item`, name: `Soul Rebirth`, ability: null }), t(Qi));
	var ta = a(Qi, 2);
	r(ta, 1, `item spirit-armor`);
	var na = i(ta);
	n(
		na,
		() => `
<p><a href="/item/spirit-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Armor patch history</a></p>
<h3 id="spirit-armor"><a href="/item/spirit-armor">Spirit Armor</a></h3>
<ul><li>Spirit Resist increased from 20% to 22%.</li></ul>
`
	);
	var ra = a(na, 2);
	(o(ra, { kind: `item`, name: `Spirit Armor`, ability: null }), t(ta));
	var ia = a(ta, 2);
	r(ia, 1, `item superior-cooldown`);
	var aa = i(ia);
	n(
		aa,
		() => `
<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>
<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>
<ul><li>Now grants +15% Ammo.</li></ul>
`
	);
	var oa = a(aa, 2);
	(o(oa, { kind: `item`, name: `Superior Cooldown`, ability: null }), t(ia));
	var sa = a(ia, 2);
	r(sa, 1, `item toxic-bullets`);
	var ca = i(sa);
	n(
		ca,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>Damage changed from 5% of Current Health to 2.5% of Max Health.</li></ul>
`
	);
	var la = a(ca, 2);
	(o(la, { kind: `item`, name: `Toxic Bullets`, ability: null }), t(sa));
	var ua = a(sa, 2);
	r(ua, 1, `item vampiric-burst`);
	var da = i(ua);
	n(
		da,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
`
	);
	var fa = a(da, 2),
		pa = i(fa),
		ma = i(pa);
	n(ma, () => `Cooldown reduced from 34s to 30s.`);
	var ha = a(ma, 2);
	(s(ha, {
		kind: `item`,
		name: `Vampiric Burst`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 34s to 30s.`
	}),
		t(pa),
		t(fa));
	var ga = a(fa, 2);
	(o(ga, { kind: `item`, name: `Vampiric Burst`, ability: null }), t(ua));
	var _a = a(ua, 2);
	r(_a, 1, `item veil-walker`);
	var va = i(_a);
	n(
		va,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Ammo increased from 12% to 15%.</li><li>Weapon Damage increased from 10% to 15%.</li></ul>
`
	);
	var ya = a(va, 2);
	(o(ya, { kind: `item`, name: `Veil Walker`, ability: null }), t(_a), ee(e, c));
}
export { se as default, ie as metadata, l as readingManifest, ae as toc };
