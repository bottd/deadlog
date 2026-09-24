import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/05-10.mg?embed=0
function _5_10_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Grey Talon',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/05-10.mg?embed=1
function _5_10_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Alchemical Fire',
			'Crippling Headshot',
			'Decay',
			'Divine Barrier',
			"Diviner's Kevlar",
			'Enduring Speed',
			'Escalating Resilience',
			'Heroic Aura',
			'Knockdown',
			'Lifestrike',
			'Melee Lifesteal',
			'Mystic Reverb',
			'Phantom Strike',
			'Reactive Barrier',
			'Restorative Locket',
			'Return Fire',
			'Shadow Weave',
			'Slowing Hex',
			'Spirit Strike',
			'Suppressor',
			'Unstoppable',
			'Vampiric Burst',
			'Warp Stone'
		]
	});
}
//#endregion
//#region changelogs/2024/05-10.mg
var metadata = {
	title: '05-10-2024 Update',
	thread_id: '689',
	published: '2024-05-10T14:38:18-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Sandbox mode now supports entering it with your party Sandbox mode now has troopers spawning on the left side Added Search By Match ID to the Watch Tab Added Filter By Hero to the Watch Tab You can now see an indicator for enemy troopers when near them if they are behind a wall or offscreen (primarly improves tracking their positions during the lane) Map is now precached while in the queue to improve loading times into matches Visual and Audio updates to the shop Added a key for toggling replays being paused (defaults to P) Pocket Affliction visual and sound effects reworked Pocket Enchanter’s Satchel visual effects updated Fixed a bug where Pocket’s briefcase would stop animating when the duration upgrade was taken Updated Divine Barrier sound effects Updated Dynamo VO for Quantum Entanglement and a few other missing lines Hero death voices are now broadcast more widely Fixed being unable to ping while casting or channeling Fixed various issues with hero abilities causing you to be stuck in walls Fixed players being able to kill themselves pre-match and run around in the map Fixed Ice Dome effects disappearing while still active if Kelvin dies during it Simplify some visuals with Seven’s Storm Cloud radius indicator to help clarify the bounds Fixed Stamina not appearing to regenerate while spectating Improve the text display when a replay is still processing after a match Fixed Walker boss moving around while the game is paused Fixed some controller input issues Fortitude now starts on cooldown to prevent purchasing and selling in the field for significant regen Updated Decay item sound effects Updated Berserker item visuals Fixed visual bug on Spirit Urn when dropping on the ground Fixed Restorative Locket Spirit Resist not working Fixed items not updating in the UI when purchased from the shop while spectating a teammate Hollow Point Ward: Spirit Shield increased from +70 to +80 Quicksilver: Now passively has a +10% reload time penalty Withering Whip: Cast range increased from 12m to 20m Superior Stamina: Spirit buff duration increased from 5s to 8s Curse: Now provides +15% Clip Curse: Duration increased from 3.5s to 3.75s Sprint is now always considered active as long as you are out of combat (haven’t taken or dealt damage for 5s, healthbar is now a little transparent when out of combat). Fixed various inconsistencies and scenarios with how Sprint speed was calculated. Previously there were many conditions that could result in you losing the bonus. Patron (Weakened) now has 40hp/s regen when it has not taken damage for 30s Medic Troopers no longer use their heal on troopers if there is a hero within 30m Zipline Speed Boost cooldown reduced from 420s to 380s Damage over time no longer prevents zipline usage Adjusted how the Anti Backdoor system works. It does a little less % damage reduction now, but it regens “backdoor damage” dealt to it over time. Backdoor damage is defined as any damage taken with no candle troopers within 50m in the last 20 seconds. Troopers run speed increased from 9.1 m/s to 10 m/s Troopers DPS vs Patrons reduced from 110 DPS to 80 DPS Troopers DPS vs Walkers from 110 DPS to 80 DPS Troopers DPS vs Base Guardians from 110 DPS to 80 DPS Crate Powerups: Removed Zipline buff as a potential drop Crate Powerups: Increased Health Regen drop from 1.25% Regen to 1.5% Crate Powerups: Added Fire Rate drop, provides +20% Fire Rate for 25s Vault base bounty increased from 200 to 225 Fixed some issues that allowed players to more easily camp players in the spawn area Abrams Reduced chances that Leap gets stuck on geometry during the downward phase Bebop No longer has an innate +15% Spirit Resist Now has innate +20% Bullet Resist Hook cooldown reduced from 27s to 22s Hook T3 reduced from -15s to -12s Cooldown Hook Speed increased from 2700 to 3000 Hook Return Speed increased from 1800 to 2200 Hyper Beam DPS increased from 180 to 210 Grey Talon Charged Shot damage increased from 105 to 115 Rain of Arrows Multishot increased from 3 to 5 Kelvin Frost Grenade cooldown reduced from 30s to 26s Infernus Fixed Afterburn refreshing from item damage Ivy Base stamina increased from 3 to 4 Lash Ground Strike now additionally damages enemies within 2m of Lash on impact Ground Strike radius reduced from 16m to 14m Ground Strike's ground preview now lines up under Lash when cast on the ground Ground Strike T3 reduced from +100% to +85% Bullet Damage growth increased from 0.76 to 1.0 Death Slam tether visuals now improved to communicate the different phases its in Lady Geist Malice now comes out quicker and no longer slows you McGinnis Mini Turret Spirit Resistance increased 50% to 60% Mini Turret Health increased from 30% to 40% Mini Turret T2 increased from +5m Range to +10m Fixed issues with Heavy Barrage not damaging units within the target area Mo & Krill Base HP increased from 650 to 700 Scorn damage increased from 40 to 50 Scorn T3 debuff duration increased from 10s to 16s Sand Blast duration increased from 3.5s to 4s Combo T3 DPS increased from +30 to +40 Paradox Time Wall bullet freeze duration no longer increases with Spirit or Duration Extender Time Wall bullet freeze base duration reduced from 1.5 to 1.25 Time Wall no longer deals damage to Mid Boss Kinetic Carbine: Max Damage Amp reduced from 150% to 125% Kinetic Carbine T3 no longer provides +50% Min Damage Amp Kinetic Carbine T3 reduced from +125% Max Damage to +75% Pocket Gun damage per bullet reduced from 6 to 5.6 Affliction DPS reduced from 30 to 26 Seven Power Surge rebalanced around no longer reducing fire rate (similar shock value effectiveness as before) Warden Alchemical Flask damage increased from 48 to 55 Yamato Crimson Slash cooldown reduced from 13s to 11s Power Slash physics/world collision reduced from 15 to 4 (allowing it to be more easily used near objects) Shadow Explosion radius increased from 14m to 16m Shadow Explosion Fire Rate and Spirit buff duration increased from 15s to 20s Shadow Explosion T3 Spirit bonus increased from +10% to +15% Shadow Explosion T3 Fire Rate bonus increased from +5% to +10% Spirit Strike Buff duration increased from 12s to 18s Melee damage bonus increased from 15% to 20% Melee Lifesteal Cooldown reduced from 10s to 8s Alchemical Fire Min/Max DPS increased from 30/60 to 40/80 Restorative Locket Max Stacks increased from 12 to 15 Cooldown increased from 15s to 18s Reactive Barrier Barrier duration increased from 10s to 13s Cooldown reduced from 60s to 40s Return Fire No longer has Spirit and Fire Rate bonus during the active Now passively always gives +7 Spirit and +7% Fire Rate Slowing Hex Cooldown reduced from 30s to 25s Decay Cooldown reduced from 25s to 22s Cast range increased from 20m to 30m Enduring Speed Movement Speed increased from 1 to 1.25 Suppressor Now provides +50 Health Divine Barrier No longer restores any Stamina on the target (previously fully restored it) Warp Stone No longer slows your hero for 3s Bullet Resist duration increased from 3s to 5s Knockdown Cooldown reduced from 55s to 50s Now provides +200 Spirit Shield Escalating Resilience Resist per stack increased from 1% to 2% Lifestrike Slow duration increased from 1s to 1.5s Cooldown reduced from 10s to 8s Heroic Aura Active radius increased from 20m to 30m Shadow Weave Now provides +15 Health Regen Phantom Strike No longer passively provides +500 Bullet Shield Now provides +200 Health When using the active, gain a temporary +500 Bullet Shield for 7 seconds Now deals 200 damage on impact Vampiric Burst Active Bullet Lifesteal increased from 40% to 60% Unstoppable Movement Speed increased from +1 to +1.25 Mystic Reverb Spirit Lifesteal increased from +10% to +15% Spirit Resist increased from +10% to +15% Crippling Headshot Headshot Resistance Reduction increased from 30% to 35% Diviner's Kevlar Channeling Spirit bonus increased from +40 to +50"
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
		title: 'Hook Speed',
		id: 'hook-speed'
	},
	{
		level: 3,
		title: 'Hook Return Speed',
		id: 'hook-return-speed'
	},
	{
		level: 3,
		title: 'Hyper Beam DPS',
		id: 'hyper-beam-dps'
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
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
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
		level: 2,
		title: 'Ivy',
		id: 'ivy'
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
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
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
		title: 'Mini Turret Spirit Resistance',
		id: 'mini-turret-spirit-resistance'
	},
	{
		level: 3,
		title: 'Mini Turret Health',
		id: 'mini-turret-health'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
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
		level: 3,
		title: 'Combo',
		id: 'combo'
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
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Affliction DPS',
		id: 'affliction-dps'
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
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash'
	},
	{
		level: 3,
		title: 'Shadow Explosion',
		id: 'shadow-explosion'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	},
	{
		level: 3,
		title: 'Shadow Explosion',
		id: 'shadow-explosion-1'
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
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
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
		title: "Diviner's Kevlar",
		id: 'diviner-s-kevlar'
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
		title: 'Heroic Aura',
		id: 'heroic-aura'
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
		title: 'Suppressor',
		id: 'suppressor'
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
		title: 'Warp Stone',
		id: 'warp-stone'
	}
];
var readingManifest = {
	stats: null,
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
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
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
			name: "Diviner's Kevlar",
			id: 'diviner-s-kevlar'
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
			name: 'Heroic Aura',
			id: 'heroic-aura'
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
			name: 'Suppressor',
			id: 'suppressor'
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
			name: 'Warp Stone',
			id: 'warp-stone'
		}
	],
	related: []
};
function _5_10_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Sandbox mode now supports entering it with your party</li><li>Sandbox mode now has troopers spawning on the left side</li><li>Added Search By Match ID to the Watch Tab</li><li>Added Filter By Hero to the Watch Tab</li><li>You can now see an indicator for enemy troopers when near them if they are behind a wall or offscreen (primarly improves tracking their positions during the lane)</li><li>Map is now precached while in the queue to improve loading times into matches</li><li>Visual and Audio updates to the shop</li><li>Added a key for toggling replays being paused (defaults to P)</li><li>Pocket Affliction visual and sound effects reworked</li><li>Pocket Enchanter’s Satchel visual effects updated</li><li>Fixed a bug where Pocket’s briefcase would stop animating when the duration upgrade was taken</li><li>Updated Divine Barrier sound effects</li><li>Updated Dynamo VO for Quantum Entanglement and a few other missing lines</li><li>Hero death voices are now broadcast more widely</li><li>Fixed being unable to ping while casting or channeling</li><li>Fixed various issues with hero abilities causing you to be stuck in walls</li><li>Fixed players being able to kill themselves pre-match and run around in the map</li><li>Fixed Ice Dome effects disappearing while still active if Kelvin dies during it</li><li>Simplify some visuals with Seven’s Storm Cloud radius indicator to help clarify the bounds</li><li>Fixed Stamina not appearing to regenerate while spectating</li><li>Improve the text display when a replay is still processing after a match</li><li>Fixed Walker boss moving around while the game is paused</li><li>Fixed some controller input issues</li><li>Fortitude now starts on cooldown to prevent purchasing and selling in the field for significant regen</li><li>Updated Decay item sound effects</li><li>Updated Berserker item visuals</li><li>Fixed visual bug on Spirit Urn when dropping on the ground</li><li>Fixed Restorative Locket Spirit Resist not working</li><li>Fixed items not updating in the UI when purchased from the shop while spectating a teammate</li><li>Hollow Point Ward: Spirit Shield increased from +70 to +80</li><li>Quicksilver: Now passively has a +10% reload time penalty</li><li>Withering Whip: Cast range increased from 12m to 20m</li><li>Superior Stamina: Spirit buff duration increased from 5s to 8s</li><li>Curse: Now provides +15% Clip</li><li>Curse: Duration increased from 3.5s to 3.75s</li><li>Sprint is now always considered active as long as you are out of combat (haven’t taken or dealt damage for 5s, healthbar is now a little transparent when out of combat).</li><li>Fixed various inconsistencies and scenarios with how Sprint speed was calculated. Previously there were many conditions that could result in you losing the bonus.</li><li>Patron (Weakened) now has 40hp/s regen when it has not taken damage for 30s</li><li>Medic Troopers no longer use their heal on troopers if there is a hero within 30m</li><li>Zipline Speed Boost cooldown reduced from 420s to 380s</li><li>Damage over time no longer prevents zipline usage</li><li>Adjusted how the Anti Backdoor system works. It does a little less % damage reduction now, but it regens “backdoor damage” dealt to it over time. Backdoor damage is defined as any damage taken with no candle troopers within 50m in the last 20 seconds.</li><li>Troopers run speed increased from 9.1 m/s to 10 m/s</li><li>Troopers DPS vs Patrons reduced from 110 DPS to 80 DPS</li><li>Troopers DPS vs Walkers from 110 DPS to 80 DPS</li><li>Troopers DPS vs Base Guardians from 110 DPS to 80 DPS</li><li>Crate Powerups: Removed Zipline buff as a potential drop</li><li>Crate Powerups: Increased Health Regen drop from 1.25% Regen to 1.5%</li><li>Crate Powerups: Added Fire Rate drop, provides +20% Fire Rate for 25s</li><li>Vault base bounty increased from 200 to 225</li><li>Fixed some issues that allowed players to more easily camp players in the spawn area</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_10_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<div class="hero abrams">\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Reduced chances that Leap gets stuck on geometry during the downward phase</li></ul>\n</div>\n')} <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>No longer has an innate +15% Spirit Resist</li><li>Now has innate +20% Bullet Resist</li></ul>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n')} <ul><li>${html('Hook cooldown reduced from 27s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Hook cooldown reduced from 27s to 22s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Hook T3 reduced from -15s to -12s Cooldown')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook-speed">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook Speed change history</a></p>\n<h4 id="hook-speed"><a href="/ability/grapple-arm">Hook Speed</a></h4>\n<ul><li>Hook Speed increased from 2700 to 3000</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook Speed'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook-return-speed">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook Return Speed change history</a></p>\n<h4 id="hook-return-speed"><a href="/ability/grapple-arm">Hook Return Speed</a></h4>\n<ul><li>Hook Return Speed increased from 1800 to 2200</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook Return Speed'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam-dps">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam DPS change history</a></p>\n<h4 id="hyper-beam-dps"><a href="/ability/hyper-beam">Hyper Beam DPS</a></h4>\n<ul><li>Hyper Beam DPS increased from 180 to 210</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n')} <ul><li>${html('Charged Shot damage increased from 105 to 115')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Charged Shot damage increased from 105 to 115'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows Multishot increased from 3 to 5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Fixed Afterburn refreshing from item damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero ivy">\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Base stamina increased from 3 to 4</li></ul>\n</div>\n')} <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade cooldown reduced from 30s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Frost Grenade cooldown reduced from 30s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice now comes out quicker and no longer slows you</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n')} <ul><li>${html('Ground Strike now additionally damages enemies within 2m of Lash on impact')}</li> <li>${html('Ground Strike radius reduced from 16m to 14m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Ground Strike radius reduced from 16m to 14m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Ground Strike&#x27;s ground preview now lines up under Lash when cast on the ground')}</li> <li>${html('Ground Strike T3 reduced from +100% to +85%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet Damage growth increased from 0.76 to 1.0</li></ul>\n')} <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam tether visuals now improved to communicate the different phases its in</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret-spirit-resistance">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret Spirit Resistance change history</a></p>\n<h4 id="mini-turret-spirit-resistance"><a href="/ability/mini-turret">Mini Turret Spirit Resistance</a></h4>\n<ul><li>Mini Turret Spirit Resistance increased 50% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret Spirit Resistance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turret-health">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret Health change history</a></p>\n<h4 id="mini-turret-health"><a href="/ability/mini-turret">Mini Turret Health</a></h4>\n<ul><li>Mini Turret Health increased from 30% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret Health'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret T2 increased from +5m Range to +10m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Fixed issues with Heavy Barrage not damaging units within the target area</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Base HP increased from 650 to 700</li></ul>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n')} <ul><li>${html('Scorn damage increased from 40 to 50')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Scorn damage increased from 40 to 50'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Scorn T3 debuff duration increased from 10s to 16s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast duration increased from 3.5s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo T3 DPS increased from +30 to +40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall bullet freeze duration no longer increases with Spirit or Duration Extender</li><li>Time Wall bullet freeze base duration reduced from 1.5 to 1.25</li><li>Time Wall no longer deals damage to Mid Boss</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine: Max Damage Amp reduced from 150% to 125%</li><li>Kinetic Carbine T3 no longer provides +50% Min Damage Amp</li><li>Kinetic Carbine T3 reduced from +125% Max Damage to +75%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Gun damage per bullet reduced from 6 to 5.6</li></ul>\n')} <div class="ability affliction-dps">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction DPS change history</a></p>\n<h4 id="affliction-dps"><a href="/ability/affliction">Affliction DPS</a></h4>\n<ul><li>Affliction DPS reduced from 30 to 26</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge rebalanced around no longer reducing fire rate (similar shock value effectiveness as before)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n')} <ul><li>${html('Alchemical Flask damage increased from 48 to 55')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Alchemical Flask damage increased from 48 to 55'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n')} <ul><li>${html('Crimson Slash cooldown reduced from 13s to 11s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Crimson Slash cooldown reduced from 13s to 11s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash physics/world collision reduced from 15 to 4 (allowing it to be more easily used near objects)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-explosion">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Explosion change history</a></p>\n<h4 id="shadow-explosion"><a href="/ability/shadow-transformation">Shadow Explosion</a></h4>\n')} <ul><li>${html('Shadow Explosion radius increased from 14m to 16m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Shadow Explosion radius increased from 14m to 16m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Explosion'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Explosion Fire Rate and Spirit buff duration increased from 15s to 20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-explosion">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Explosion change history</a></p>\n<h4 id="shadow-explosion-1"><a href="/ability/shadow-transformation">Shadow Explosion</a></h4>\n<ul><li>Shadow Explosion T3 Spirit bonus increased from +10% to +15%</li><li>Shadow Explosion T3 Fire Rate bonus increased from +5% to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Explosion'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_10_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Min/Max DPS increased from 30/60 to 40/80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>Headshot Resistance Reduction increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Cooldown reduced from 25s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 25s to 22s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Cast range increased from 20m to 30m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>No longer restores any Stamina on the target (previously fully restored it)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Channeling Spirit bonus increased from +40 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Movement Speed increased from 1 to 1.25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Resist per stack increased from 1% to 2%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n<ul><li>Active radius increased from 20m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n')} <ul><li>${html('Cooldown reduced from 55s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 55s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now provides +200 Spirit Shield')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n')} <ul><li>${html('Slow duration increased from 1s to 1.5s')}</li> <li>${html('Cooldown reduced from 10s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 10s to 8s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n')} <ul><li>${html('Cooldown reduced from 10s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 10s to 8s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>Spirit Lifesteal increased from +10% to +15%</li><li>Spirit Resist increased from +10% to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n<ul><li>No longer passively provides +500 Bullet Shield</li><li>Now provides +200 Health</li><li>When using the active, gain a temporary +500 Bullet Shield for 7 seconds</li><li>Now deals 200 damage on impact</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Barrier duration increased from 10s to 13s')}</li> <li>${html('Cooldown reduced from 60s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 60s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n')} <ul><li>${html('Max Stacks increased from 12 to 15')}</li> <li>${html('Cooldown increased from 15s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 15s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>No longer has Spirit and Fire Rate bonus during the active</li><li>Now passively always gives +7 Spirit and +7% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Now provides +15 Health Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Buff duration increased from 12s to 18s</li><li>Melee damage bonus increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Now provides +50 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Movement Speed increased from +1 to +1.25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Active Bullet Lifesteal increased from 40% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>No longer slows your hero for 3s</li><li>Bullet Resist duration increased from 3s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_10_mg as default, metadata, readingManifest, toc };
