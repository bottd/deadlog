import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/05-16.mg?embed=0
function _5_16_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Vindicta',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/05-16.mg?embed=1
function _5_16_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Alchemical Fire',
			'Berserker',
			'Close Quarters',
			'Decay',
			"Diviner's Kevlar",
			'Echo Shard',
			'Frenzy',
			'Headshot Booster',
			'Healing Rite',
			'Kinetic Dash',
			'Knockdown',
			'Lifestrike',
			'Majestic Leap',
			'Mystic Burst',
			'Mystic Reverb',
			'Mystic Shot',
			'Mystic Slow',
			'Reactive Barrier',
			'Restorative Locket',
			'Return Fire',
			'Warp Stone'
		]
	});
}
//#endregion
//#region changelogs/2024/05-16.mg
var metadata = {
	title: '05-16-2024 Update',
	thread_id: '902',
	published: '2024-05-16T12:36:56-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Playtesting times are now starting 1 hour earlier. Weekdays are 6PM PDT and weekends are 4PM PDT. Redesigned the Walker model and visuals Added ambient sound effects Added jar smash sound effects Updated Cold Front sound effects Improved NPC/minion weapon fire audio feedback for victims Improved player damage received audio feedback Updated Lash Death Slam sound effects Various minor fixes to Ground Strike and Death Slam effects Warden's Last Stand has improved visual effects Fixed a bug where the shopping book visuals could get stuck on your hero Vindicta's Crow Familiar projectile effect indicates the radius more accurately now New voice for Warden (in advance of upcoming model swap) Patrons will now play a voice warning when Rejuvenator time is close to expiring as well as when it's expired Updated VO for Amber Hand's Patron Increased the duration of the item-used popup text a bit Fixed a bug where Warden's second and third abilities were swapped VO wise Fixed Time Wall damaging units that don't move multiple times instead of once per walk through Added a short wall between Shrines level of the base and the Weakened Patron level Moved the taxi back into the street to fix players getting stuck between the front and the building corner Moved a truck away from the garage to give wide enough path for Mo & Krill Added clips to both sides of the overpass on outer lanes to keep from hitting your head on the ledge when climbing Added clips at outer lane T1 stairs where you could get stuck doing a roll slide Fixed Vindicta being able to shoot above the base wall Fixed gaps where you could climb outside of the map Added a wall between the T1 shop and the hallway on the outer lanes by the Fire House and the Chapel to prevent attackers from shooting the T1 without taking damage Fixed a couple of spots where Mo could get stuck between a truck and wall Replaced news stand that was close to the T1 with different cover kiosk building to avoid shop confusion Fixed no collision on water tower on the garage roof. Medium and Hard neutrals now spawn at 7 minutes Neutrals now have 20% Spirit Resist Basement neutrals now have +2 Medium neutrals and -4 Small neutrals Basement neutrals are now classified as a Medium camp instead of a Small camp (for the purposes of spawn time) Fixed various abuses where you can shoot neutrals without them being able to shoot back. Neutrals now become invulnerable when they have no line of sight of you for 2 seconds. Spirit scaling reduced by ~19% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst) Respawn curve adjusted slightly (results in a few seconds of increased respawn time in the mid phase, same overall max respawn time) Zipline Boost ability is now available at the start of the game (used to start on cooldown) Shield break cooldown reduced from 80s to 60s Troopers run speed increased from 10 m/s to 11 m/s Medic Trooper health increased from 200 to 240 Added a new T3 Spirit Item, Shifting Shroud. Innate: +10% Fire Rate. Active: You become invulnerable for 2.5s, during which you cannot move or perform any actions. When your invulnerability expires, your gun is instantly reloaded and you gain 14 bonus Spirit for 6s. Cooldown: 70s. Medic Bullets: Cooldown reduced from 5s to 4s Health Nova: Now provides +50 Health Silence Glyph: Now applies 8% Spirit Amp instead of -15% Bullet Resist Silence Glyph: Cooldown increased from 20s to 35s Improved Burst: Max HP bonus damage reduced from 13% to 11% Withering Whip: Now applies -25% Bullet Resist instead of 25% Spirit Amp Withering Whip: Now grants +15% Ammo Bebop Sticky Bomb T3 now applies the silence on cast instead of detonation Sticky Bomb T3 silence duration reduced from 5s to 3.5s Sticky Bomb now uses a new instant cast mechanism. When you are in range there is a valid target indicator. Kelvin Now has +10% Base Spirit Resistance Frozen Shelter T1 increased from +35% to +40% Fire Rate Slow Ice Path T3 Now gains 1 Spirit per meter of Ice Path trail created. Max of 40 Spirit. Grey Talon Charged Shot cooldown reduced from 18s to 16s Haze Sleep Dagger cooldown increased from 25s to 27s Smoke Bomb cooldown reduced from 45s to 35s Smoke Bomb T1 changed to +4 Invis Sprint Smoke Bomb T2 is now -20s Cooldown Infernus Afterburn T2 now reduces enemy Spirit damage by 30% Ivy True Form cooldown reduced from 50s to 40s Lady Geist Soul Exchange now uses a new instant cast mechanism. When you are in range there is a valid target indicator. Lash Ground Strike Stomp Damage reduced from 125 to 110 Death Slam cooldown increased from 110s to 130s Grapple Bullet Damage bonus increased from +4 to +6 Grapple cooldown decreased from 45s to 40s McGinnis Mini Turret T1 is now +1 Charge and +25% Movement Slow Mini Turret T2 is now +10m Attack Range and +10% Fire Rate Spectral Wall cooldown reduced from 40s to 35s Mo & Krill Combo now uses a new instant cast mechanism. When you are in range there is a valid target indicator. Paradox Kinetic Carbine T3 reduced from +75% to +50% Vindicta Flight spirit bullet damage now has range effectiveness (previously the magic bullets did max damage from any range) Flight spirit damage per bullet increased from 8 to 12 Flight T2 bonus spirit damage per bullet increased from 8 to 12 Warden Last Stand no longer goes on cooldown when it is interrupted during its initial cast delay Yamato Shadow Explosion cooldown reduced from 120s to 90s Mystic Burst Bonus damage reduced from +40 to +35 Headshot Booster Headshot damage increased from +30 to +50 Close Quarters Bullet Shield increased from 70 to 85 Weapon Damage reduced from 30% to 25% Healing Rite Cooldown reduced from 90s to 80s Kinetic Dash No longer gives +1 Stamina Now causes your dash-jumps to only require 1 stamina Berserker Weapon Damage Per Stack increased from 5% to 6% Mystic Shot Cooldown increased from 3s to 5s Reactive Barrier Now provides a Spirit Shield instead of a Bullet Shield Return Fire Now also reflects 30% of Spirit damage (requires line of sight) Bullet damage returned reduced from 75% to 60% Fixed not returning fire to McGinnis' sentries Decay Now does 2.2% Max HP DPS instead of flat DPS Restorative Locket Now gives +4 Spirit Alchemical Fire Moved from T2 to T3 Now grants +150 Bullet Shield Now grants +12% Weapon Damage Min/Max DPS increased from 40/80 to 45/85 Majestic Leap You can now use the active again while in the air to dive down faster Knockdown Cast range increased from 40m to 50m Mystic Slow Now requires Suppressor as a component Now provides +75 Health, +3 Regen and +6 spirit Fire Rate slow increased from 20% to 35% Lifestrike Cooldown reduced from 8s to 5s Warp Stone Removed cast time Diviner's Kevlar Now triggers off of casting ultimates. Grants 700 bullet shield and 40 spirit for 10 seconds. Echo Shard No longer gives +20 Spirit for the second cast Mystic Reverb Extra damage on the reverb reduced from 40% to 35% Frenzy Bonus health increased from +150 to +200",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-14',
			to: '2024-05-16'
		},
		after: {
			from: '2024-05-17',
			to: '2024-05-19'
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
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
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
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'True Form',
		id: 'true-form'
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
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike Stomp Damage',
		id: 'ground-strike-stomp-damage'
	},
	{
		level: 3,
		title: 'Death Slam',
		id: 'death-slam'
	},
	{
		level: 3,
		title: 'Grapple Bullet Damage',
		id: 'grapple-bullet-damage'
	},
	{
		level: 3,
		title: 'Grapple',
		id: 'grapple'
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
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Shadow Explosion',
		id: 'shadow-explosion'
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
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Close Quarters',
		id: 'close-quarters'
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
		title: 'Echo Shard',
		id: 'echo-shard'
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
		title: 'Healing Rite',
		id: 'healing-rite'
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
		title: 'Mystic Burst',
		id: 'mystic-burst'
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
		title: 'Mystic Slow',
		id: 'mystic-slow'
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
		title: 'Warp Stone',
		id: 'warp-stone'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-14',
			to: '2024-05-16'
		},
		after: {
			from: '2024-05-17',
			to: '2024-05-19'
		},
		siblings: []
	},
	open: false,
	sections: [
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
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Close Quarters',
			id: 'close-quarters'
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
			name: 'Echo Shard',
			id: 'echo-shard'
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
			name: 'Healing Rite',
			id: 'healing-rite'
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
			name: 'Mystic Burst',
			id: 'mystic-burst'
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
			name: 'Mystic Slow',
			id: 'mystic-slow'
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
			name: 'Warp Stone',
			id: 'warp-stone'
		}
	],
	related: []
};
function _5_16_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Playtesting times are now starting 1 hour earlier. Weekdays are 6PM PDT and weekends are 4PM PDT.</li><li>Redesigned the Walker model and visuals</li><li>Added ambient sound effects</li><li>Added jar smash sound effects</li><li>Updated Cold Front sound effects</li><li>Improved NPC/minion weapon fire audio feedback for victims</li><li>Improved player damage received audio feedback</li><li>Updated Lash Death Slam sound effects</li><li>Various minor fixes to Ground Strike and Death Slam effects</li><li>Warden&#x27;s Last Stand has improved visual effects</li><li>Fixed a bug where the shopping book visuals could get stuck on your hero</li><li>Vindicta&#x27;s Crow Familiar projectile effect indicates the radius more accurately now</li><li>New voice for Warden (in advance of upcoming model swap)</li><li>Patrons will now play a voice warning when Rejuvenator time is close to expiring as well as when it&#x27;s expired</li><li>Updated VO for Amber Hand&#x27;s Patron</li><li>Increased the duration of the item-used popup text a bit</li><li>Fixed a bug where Warden&#x27;s second and third abilities were swapped VO wise</li><li>Fixed Time Wall damaging units that don&#x27;t move multiple times instead of once per walk through</li><li>Added a short wall between Shrines level of the base and the Weakened Patron level</li><li>Moved the taxi back into the street to fix players getting stuck between the front and the building corner</li><li>Moved a truck away from the garage to give wide enough path for Mo &amp; Krill</li><li>Added clips to both sides of the overpass on outer lanes to keep from hitting your head on the ledge when climbing</li><li>Added clips at outer lane T1 stairs where you could get stuck doing a roll slide</li><li>Fixed Vindicta being able to shoot above the base wall</li><li>Fixed gaps where you could climb outside of the map</li><li>Added a wall between the T1 shop and the hallway on the outer lanes by the Fire House and the Chapel to prevent attackers from shooting the T1 without taking damage</li><li>Fixed a couple of spots where Mo could get stuck between a truck and wall</li><li>Replaced news stand that was close to the T1 with different cover kiosk building to avoid shop confusion</li><li>Fixed no collision on water tower on the garage roof.</li><li>Medium and Hard neutrals now spawn at 7 minutes</li><li>Neutrals now have 20% Spirit Resist</li><li>Basement neutrals now have +2 Medium neutrals and -4 Small neutrals</li><li>Basement neutrals are now classified as a Medium camp instead of a Small camp (for the purposes of spawn time)</li><li>Fixed various abuses where you can shoot neutrals without them being able to shoot back. Neutrals now become invulnerable when they have no line of sight of you for 2 seconds.</li><li>Spirit scaling reduced by ~19% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst)</li><li>Respawn curve adjusted slightly (results in a few seconds of increased respawn time in the mid phase, same overall max respawn time)</li><li>Zipline Boost ability is now available at the start of the game (used to start on cooldown)</li><li>Shield break cooldown reduced from 80s to 60s</li><li>Troopers run speed increased from 10 m/s to 11 m/s</li><li>Medic Trooper health increased from 200 to 240</li><li>Added a new T3 Spirit Item, Shifting Shroud. Innate: +10% Fire Rate. Active: You become invulnerable for 2.5s, during which you cannot move or perform any actions. When your invulnerability expires, your gun is instantly reloaded and you gain 14 bonus Spirit for 6s. Cooldown: 70s.</li><li>Medic Bullets: Cooldown reduced from 5s to 4s</li><li>Health Nova: Now provides +50 Health</li><li>Silence Glyph: Now applies 8% Spirit Amp instead of -15% Bullet Resist</li><li>Silence Glyph: Cooldown increased from 20s to 35s</li><li>Improved Burst: Max HP bonus damage reduced from 13% to 11%</li><li>Withering Whip: Now applies -25% Bullet Resist instead of 25% Spirit Amp</li><li>Withering Whip: Now grants +15% Ammo</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_16_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb T3 now applies the silence on cast instead of detonation</li><li>Sticky Bomb T3 silence duration reduced from 5s to 3.5s</li><li>Sticky Bomb now uses a new instant cast mechanism. When you are in range there is a valid target indicator.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n')} <ul><li>${html('Charged Shot cooldown reduced from 18s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Charged Shot cooldown reduced from 18s to 16s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n')} <ul><li>${html('Sleep Dagger cooldown increased from 25s to 27s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Sleep Dagger cooldown increased from 25s to 27s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n')} <ul><li>${html('Smoke Bomb cooldown reduced from 45s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Smoke Bomb cooldown reduced from 45s to 35s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Smoke Bomb T1 changed to +4 Invis Sprint')}</li> <li>${html('Smoke Bomb T2 is now -20s Cooldown')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T2 now reduces enemy Spirit damage by 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability true-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> True Form change history</a></p>\n<h4 id="true-form"><a href="/ability/stone-form">True Form</a></h4>\n')} <ul><li>${html('True Form cooldown reduced from 50s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'True Form cooldown reduced from 50s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'True Form'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Now has +10% Base Spirit Resistance</li></ul>\n')} <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter T1 increased from +35% to +40% Fire Rate Slow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path T3 Now gains 1 Spirit per meter of Ice Path trail created. Max of 40 Spirit.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange now uses a new instant cast mechanism. When you are in range there is a valid target indicator.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike-stomp-damage">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike Stomp Damage change history</a></p>\n<h4 id="ground-strike-stomp-damage"><a href="/ability/ground-strike">Ground Strike Stomp Damage</a></h4>\n<ul><li>Ground Strike Stomp Damage reduced from 125 to 110</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike Stomp Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n')} <ul><li>${html('Death Slam cooldown increased from 110s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Death Slam cooldown increased from 110s to 130s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-bullet-damage">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Bullet Damage change history</a></p>\n<h4 id="grapple-bullet-damage"><a href="/ability/grapple">Grapple Bullet Damage</a></h4>\n<ul><li>Grapple Bullet Damage bonus increased from +4 to +6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple Bullet Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n')} <ul><li>${html('Grapple cooldown decreased from 45s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Grapple cooldown decreased from 45s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret T1 is now +1 Charge and +25% Movement Slow</li><li>Mini Turret T2 is now +10m Attack Range and +10% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n')} <ul><li>${html('Spectral Wall cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Spectral Wall cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo now uses a new instant cast mechanism. When you are in range there is a valid target indicator.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T3 reduced from +75% to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight spirit bullet damage now has range effectiveness (previously the magic bullets did max damage from any range)</li><li>Flight spirit damage per bullet increased from 8 to 12</li><li>Flight T2 bonus spirit damage per bullet increased from 8 to 12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand no longer goes on cooldown when it is interrupted during its initial cast delay</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-explosion">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Explosion change history</a></p>\n<h4 id="shadow-explosion"><a href="/ability/shadow-transformation">Shadow Explosion</a></h4>\n')} <ul><li>${html('Shadow Explosion cooldown reduced from 120s to 90s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Shadow Explosion cooldown reduced from 120s to 90s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Explosion'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_16_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Moved from T2 to T3</li><li>Now grants +150 Bullet Shield</li><li>Now grants +12% Weapon Damage</li><li>Min/Max DPS increased from 40/80 to 45/85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Weapon Damage Per Stack increased from 5% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item close-quarters">${html('\n<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>\n<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>\n<ul><li>Bullet Shield increased from 70 to 85</li><li>Weapon Damage reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Close Quarters',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Now does 2.2% Max HP DPS instead of flat DPS</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Now triggers off of casting ultimates. Grants 700 bullet shield and 40 spirit for 10 seconds.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>No longer gives +20 Spirit for the second cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Bonus health increased from +150 to +200</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Headshot damage increased from +30 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n')} <ul><li>${html('Cooldown reduced from 90s to 80s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 90s to 80s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>No longer gives +1 Stamina</li><li>Now causes your dash-jumps to only require 1 stamina</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Cast range increased from 40m to 50m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n')} <ul><li>${html('Cooldown reduced from 8s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 8s to 5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>You can now use the active again while in the air to dive down faster</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-burst">${html('\n<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>\n<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>\n<ul><li>Bonus damage reduced from +40 to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>Extra damage on the reverb reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 3s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 3s to 5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Now requires Suppressor as a component</li><li>Now provides +75 Health, +3 Regen and +6 spirit</li><li>Fire Rate slow increased from 20% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Now provides a Spirit Shield instead of a Bullet Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Now gives +4 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Now also reflects 30% of Spirit damage (requires line of sight)</li><li>Bullet damage returned reduced from 75% to 60%</li><li>Fixed not returning fire to McGinnis&#x27; sentries</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Removed cast time</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_16_mg as default, metadata, readingManifest, toc };
