import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/04-10.mg?embed=0
function _4_10_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Billy',
			'Celeste',
			'Doorman',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Holliday',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mirage',
			'Paradox',
			'Rem',
			'Shiv',
			'Venator',
			'Victor',
			'Vyper',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2026/04-10.mg?embed=1
function _4_10_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Armor Piercing Rounds',
			'Cultist Sacrifice',
			'Decay',
			'Echo Shard',
			'Express Shot',
			'Golden Goose Egg',
			'Lightning Scroll',
			'Plated Armor',
			'Recharging Rush',
			'Return Fire',
			'Sharpshooter',
			'Silence Wave',
			'Spirit Shielding',
			'Titanic Magazine',
			'Toxic Bullets',
			'Weapon Shielding'
		]
	});
}
//#endregion
//#region changelogs/2026/04-10.mg
var metadata = {
	title: '04-10-2026 Update',
	thread_id: '125825',
	published: '2026-04-10T21:03:53-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Parrying is now allowed while ground dashing in order to bring it in-line with air dashing Parry anti mash protection previously would last for 0.25s after the parry success (so you couldn\'t parry again for that duration). It is now for 0.25s only after the initial parry input is provided, irrespective of when the parry success happens (this means there is less delay before you can do a back to back parry when parry success is done later in the duration) Medic Trooper missing health percent heal reduced from 16% to 14% Medic Trooper fixed regen growth per minute reduced from 4 to 3 Subsequent CC reduction increased from 10%/30% to 15/35% (window from 8s to 9s) Improved various abilities behavior when casting while sliding Bebop Weapon windup time reduced from 0.5s to 0.3s and fast windup time reduced from 0.1s to 0.05s Sticky Bomb can now be self cast again, but it deals 20% damage to yourself Sticky Bomb radius reduced from 10m to 8m Grapple Arm now deals light melee damage (0.7 scaling) Billy Bashdown T3 increased from -2s Charge Time to -3s Rising Ram T3 damage increased from 8% to 10% Celeste Base health reduced from 790 to 700 Health per boon reduced from 47 to 45 No longer has negative base bullet resistance Bullet damage rescaled from 22 + 0.7/boon to 18 + 0.82/boon Bullet cycle time increased from 0.6 to 0.65 (this is an 8% reduction in fire rate base and overall dps) Light Eater initial impact damage rescaled from 50 + 0.35 to 40 + 0.47 Light Eater on bullet hit rescaled from 20 + 0.28 to 15 + 0.34 Light Eater debuff duration reduced from 12s to 8s Light Eater debuff duration now scales with spirit (0.05) Dazzling Trick Barrier reduced from 120 to 100 Dazzling Trick T2 Barrier reduced from +100 to +80 Radiant Daggers T3 increased from 7% Fire Rate per Stack to 9% Shining Wonder damage increased from 105 + 0.63 to 120 + 0.73 Doorman Doorways now reveal on the minimap for enemies when they are within LOS Luggage Cart collision size reduced by 10% Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off) Dynamo Quantum Entanglement cooldown increased from 16s to 19s Grey Talon Spirit power per boon increased from 1.1 to 1.6 Charged Shot channeling move speed increased from 1.3m to 1.5m Guided Owl min speed reduced from 17.8m to 15m Guided Owl max speed increased from 35.56m to 36m Guided Owl duration increased from 18s to 20s Haze Sleep Dagger no longer takes you out of RMB zoom Sleep Dagger Wake Up delay now has spirit scaling (0.003) Sleep Dagger spirit scaling increased from 2.6 to 2.8 Sleep Dagger T2 increased from -15s Cooldown to -17s Sleep Dagger T3 sleep duration increased from +0.75s to +1s Sleep Dagger T3 slow duration increased from 2.5s to 3s Smoke Bomb spirit scaling increased from 0.08 to 0.1 Smoke Bomb T3 lifesteal increased from 30% to 40% Fixation Weapon Damage per stack increased from 0.18 to 0.2 Fixation T3 reduced from +0.14 Weapon Damage per stack to +0.12 Fixed being able to slide while using Bullet Dance Bullet Dance targeting is no longer a full radius around the hero, but instead is a cone in the direction you are aiming Bullet Dance cooldown reduced from 165s to 145s Bullet Dance no longer grants 60% Evasion Bullet Dance duration increased from 3s to 3.5s Bullet Dance duration spirit scaling reduced from 0.08 to 0.03 Bullet Dance fire rate increased from 20% to 25% Bullet Dance T3 changed from "+1 Additional Target and +3m Movespeed" to "+60% Evasion and +4m Movespeed" Holliday Various behavior and feel improvements to her gun Kelvin Frost Grenade healing spirit scaling reduced from 0.9 to 0.8 Frost Grenade T3 healing spirit scaling reduced from +1.0 to +0.9 Lady Geist Bullet damage rescaled from 21.94 + 0.946/boon to 20.7+1.0/boon Soul Exchange cooldown increased from 185s to 190s McGinnis Bullet damage increased from 6.2 + 0.16/boon to 6.4 + 0.17/boon Spectral Wall duration increased from 5.5s to 6s Spectral Wall segment count increased from 7 to 8 Mirage Fire Scarabs Health Steal per second reduced from 9 to 8 Fire Scarabs Health Steal per second spirit scaling reduced from 0.12 to 0.1 Djinn\'s Mark spirit scaling reduced from 0.38 to 0.35 Paradox Bullet damage increased from 6.42 + 0.242/boon to 6.8 + 0.26/boon Time Wall width increased from 7.5m to 8m Time Wall height increased from 3.5m to 4m Kinetic Carbine collision radius increased slightly Rem Fixed souls bug with breakables Tag Along can no longer be cancelled during the cast delay to prevent accidentally stopping it mid-cast Naptime radius increased from 17m to 19m Naptime T2 sleep duration increased from +0.5s to +0.75s Shiv Fixed Rage not building up against Barriers Venator Hex-Lined Snap Trap immobilize duration reduced from 1.5s to 1.25s Hex-Lined Snap Trap cooldown increased from 25s to 28s Hex-Lined Snap Trap T1 increased from -8s Cooldown to -11s Hex-Lined Snap Trap T2 increased from +0.75s Duration to +1s Victor Bullet damage increased from 12 to 13 Jumpstart T2 increased from +50 Total HP Regen to +70 Aura of Suffering now builds up over 8s instead of 6s Aura of Suffering T1 slow now also affects dashes Aura of Suffering T1 slow reduced from 30% to 25% Aura of Suffering Min DPS increased by 10% (affects base damage, AP and spirit scaling) Aura of Suffering Max DPS increased by 20% (affects base damage, AP and spirit scaling) Shocking Reanimation now applies a heavy diminishing slow immediately when you die Vyper Screwjab Dagger no longer takes you out of RMB zoom Screwjab Dagger charge time reduced from 4.5s to 4.0s Sliding uphill now allows for lateral movement Slither slide distance increased from +10% to +15% Yamato Fixed Crimson Slash not hitting through veils Recharging Rush Cooldown increased from 20s to 24s Titanic Magazine Ammo increased from 90% to 100% Weapon Damage increased from 12% to 14% Express Shot Secondary Fire Weapon Damage increased from 35% + 1%/boon to 40% + 1.3%/boon Toxic Bullets Buildup is now 10% slower Bleed reduced from 2% to 1.7% Anti Heal increased from -30% to -35% Sharpshooter Movement Speed penalty reduced from -1m to -0.7m Cultist Sacrifice Bonus Souls increased from 150% to 170% Armor Piercing Rounds Chance increased from 50% to 55% Return Fire Bullet damage returned increased from 50% to 60% Cooldown reduced from 25s to 23s Spirit Shielding Move Speed increased from 1.5m to 1.75m Barrier duration increased from 7s to 8s Weapon Shielding Move Speed increased from 1.5m to 1.75m Barrier duration increased from 7s to 8s Time Frame increased from 3.5s to 4s Plated Armor Bonus health increased from +100 to +130 Golden Goose Egg Souls required for permanent buff reduced from 150 to 100 Now only gives permanent buffs for actual accrued souls, not counting the initial 400 sellback amount (so it no longer instantly sells for permanent buffs) Decay Spirit scaling reduced from 0.0055 to 0.004 Silence Wave Damage reduced from 100 to 75 Spirit scaling reduced from 1.0 to 0.7 Cooldown increased from 30s to 42s Echo Shard Cooldown increased from 30s to 35s Lightning Scroll Fixed the stun delay being affected by debuff reducer making the stun go off faster',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-03-28',
			to: '2026-04-11'
		},
		after: {
			from: '2026-04-12',
			to: '2026-04-26'
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
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Bashdown',
		id: 'bashdown'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 2,
		title: 'Celeste',
		id: 'celeste'
	},
	{
		level: 3,
		title: 'Light Eater',
		id: 'light-eater'
	},
	{
		level: 3,
		title: 'Dazzling Trick Barrier',
		id: 'dazzling-trick-barrier'
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
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Doorways',
		id: 'doorways'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart'
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
		title: 'Charged Shot',
		id: 'charged-shot'
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
		title: 'Sleep Dagger Wake Up',
		id: 'sleep-dagger-wake-up'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger-1'
	},
	{
		level: 3,
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
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
		title: 'Holliday',
		id: 'holliday'
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
		title: 'Spectral Wall',
		id: 'spectral-wall'
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
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
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
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Tag Along',
		id: 'tag-along'
	},
	{
		level: 3,
		title: 'Naptime',
		id: 'naptime'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 2,
		title: 'Venator',
		id: 'venator'
	},
	{
		level: 3,
		title: 'Hex-Lined Snap Trap',
		id: 'hex-lined-snap-trap'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Screwjab Dagger',
		id: 'screwjab-dagger'
	},
	{
		level: 3,
		title: 'Slither',
		id: 'slither'
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
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Armor Piercing Rounds',
		id: 'armor-piercing-rounds'
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
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Golden Goose Egg',
		id: 'golden-goose-egg'
	},
	{
		level: 2,
		title: 'Lightning Scroll',
		id: 'lightning-scroll'
	},
	{
		level: 2,
		title: 'Plated Armor',
		id: 'plated-armor'
	},
	{
		level: 2,
		title: 'Recharging Rush',
		id: 'recharging-rush'
	},
	{
		level: 2,
		title: 'Return Fire',
		id: 'return-fire'
	},
	{
		level: 2,
		title: 'Sharpshooter',
		id: 'sharpshooter'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Spirit Shielding',
		id: 'spirit-shielding'
	},
	{
		level: 2,
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-03-28',
			to: '2026-04-11'
		},
		after: {
			from: '2026-04-12',
			to: '2026-04-26'
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
			name: 'Billy',
			id: 'billy'
		},
		{
			kind: 'hero',
			name: 'Celeste',
			id: 'celeste'
		},
		{
			kind: 'hero',
			name: 'Doorman',
			id: 'doorman'
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
			name: 'Holliday',
			id: 'holliday'
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
			name: 'Rem',
			id: 'rem'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
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
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Armor Piercing Rounds',
			id: 'armor-piercing-rounds'
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
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Golden Goose Egg',
			id: 'golden-goose-egg'
		},
		{
			kind: 'item',
			name: 'Lightning Scroll',
			id: 'lightning-scroll'
		},
		{
			kind: 'item',
			name: 'Plated Armor',
			id: 'plated-armor'
		},
		{
			kind: 'item',
			name: 'Recharging Rush',
			id: 'recharging-rush'
		},
		{
			kind: 'item',
			name: 'Return Fire',
			id: 'return-fire'
		},
		{
			kind: 'item',
			name: 'Sharpshooter',
			id: 'sharpshooter'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Spirit Shielding',
			id: 'spirit-shielding'
		},
		{
			kind: 'item',
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		}
	],
	related: []
};
function _4_10_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Parrying is now allowed while ground dashing in order to bring it in-line with air dashing</li><li>Parry anti mash protection previously would last for 0.25s after the parry success (so you couldn&#x27;t parry again for that duration). It is now for 0.25s only after the initial parry input is provided, irrespective of when the parry success happens (this means there is less delay before you can do a back to back parry when parry success is done later in the duration)</li><li>Medic Trooper missing health percent heal reduced from 16% to 14%</li><li>Medic Trooper fixed regen growth per minute reduced from 4 to 3</li><li>Subsequent CC reduction increased from 10%/30% to 15/35% (window from 8s to 9s)</li><li>Improved various abilities behavior when casting while sliding</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_4_10_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Weapon windup time reduced from 0.5s to 0.3s and fast windup time reduced from 0.1s to 0.05s</li></ul>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb can now be self cast again, but it deals 20% damage to yourself')}</li> <li>${html('Sticky Bomb radius reduced from 10m to 8m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Sticky Bomb radius reduced from 10m to 8m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Grapple Arm now deals light melee damage (0.7 scaling)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n')} <div class="ability bashdown">${html('\n<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>\n<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>\n<ul><li>Bashdown T3 increased from -2s Charge Time to -3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Bashdown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n')} <ul><li>${html('Rising Ram T3 damage increased from 8% to 10%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rising Ram T3 damage increased from 8% to 10%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n<ul><li>Base health reduced from 790 to 700</li><li>Health per boon reduced from 47 to 45</li><li>No longer has negative base bullet resistance</li><li>Bullet damage rescaled from 22 + 0.7/boon to 18 + 0.82/boon</li><li>Bullet cycle time increased from 0.6 to 0.65 (this is an 8% reduction in fire rate base and overall dps)</li></ul>\n')} <div class="ability light-eater">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>\n<h4 id="light-eater"><a href="/ability/light-eater">Light Eater</a></h4>\n<ul><li>Light Eater initial impact damage rescaled from 50 + 0.35 to 40 + 0.47</li><li>Light Eater on bullet hit rescaled from 20 + 0.28 to 15 + 0.34</li><li>Light Eater debuff duration reduced from 12s to 8s</li><li>Light Eater debuff duration now scales with spirit (0.05)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dazzling-trick-barrier">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick Barrier change history</a></p>\n<h4 id="dazzling-trick-barrier"><a href="/ability/dazzling-trick">Dazzling Trick Barrier</a></h4>\n<ul><li>Dazzling Trick Barrier reduced from 120 to 100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick Barrier'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n<ul><li>Dazzling Trick T2 Barrier reduced from +100 to +80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n<ul><li>Radiant Daggers T3 increased from 7% Fire Rate per Stack to 9%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder damage increased from 105 + 0.63 to 120 + 0.73</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability doorways">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorways change history</a></p>\n<h4 id="doorways"><a href="/ability/doorway">Doorways</a></h4>\n<ul><li>Doorways now reveal on the minimap for enemies when they are within LOS</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorways'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Luggage Cart collision size reduced by 10%</li><li>Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n')} <ul><li>${html('Quantum Entanglement cooldown increased from 16s to 19s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Quantum Entanglement cooldown increased from 16s to 19s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Spirit power per boon increased from 1.1 to 1.6</li></ul>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Charged Shot channeling move speed increased from 1.3m to 1.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl min speed reduced from 17.8m to 15m</li><li>Guided Owl max speed increased from 35.56m to 36m</li><li>Guided Owl duration increased from 18s to 20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger no longer takes you out of RMB zoom</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger-wake-up">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Wake Up change history</a></p>\n<h4 id="sleep-dagger-wake-up"><a href="/ability/sleep-dagger">Sleep Dagger Wake Up</a></h4>\n<ul><li>Sleep Dagger Wake Up delay now has spirit scaling (0.003)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger Wake Up'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger-1"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger spirit scaling increased from 2.6 to 2.8</li><li>Sleep Dagger T2 increased from -15s Cooldown to -17s</li><li>Sleep Dagger T3 sleep duration increased from +0.75s to +1s</li><li>Sleep Dagger T3 slow duration increased from 2.5s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb spirit scaling increased from 0.08 to 0.1</li><li>Smoke Bomb T3 lifesteal increased from 30% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation Weapon Damage per stack increased from 0.18 to 0.2</li><li>Fixation T3 reduced from +0.14 Weapon Damage per stack to +0.12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n')} <ul><li>${html('Fixed being able to slide while using Bullet Dance')}</li> <li>${html('Bullet Dance targeting is no longer a full radius around the hero, but instead is a cone in the direction you are aiming')}</li> <li>${html('Bullet Dance cooldown reduced from 165s to 145s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 5,
		bulletIndex: 2,
		text: 'Bullet Dance cooldown reduced from 165s to 145s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bullet Dance no longer grants 60% Evasion')}</li> <li>${html('Bullet Dance duration increased from 3s to 3.5s')}</li> <li>${html('Bullet Dance duration spirit scaling reduced from 0.08 to 0.03')}</li> <li>${html('Bullet Dance fire rate increased from 20% to 25%')}</li> <li>${html('Bullet Dance T3 changed from &quot;+1 Additional Target and +3m Movespeed&quot; to &quot;+60% Evasion and +4m Movespeed&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero holliday">\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n<ul><li>Various behavior and feel improvements to her gun</li></ul>\n</div>\n')} <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade healing spirit scaling reduced from 0.9 to 0.8</li><li>Frost Grenade T3 healing spirit scaling reduced from +1.0 to +0.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Bullet damage rescaled from 21.94 + 0.946/boon to 20.7+1.0/boon</li></ul>\n')} <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n')} <ul><li>${html('Soul Exchange cooldown increased from 185s to 190s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Soul Exchange cooldown increased from 185s to 190s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Bullet damage increased from 6.2 + 0.16/boon to 6.4 + 0.17/boon</li></ul>\n')} <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall duration increased from 5.5s to 6s</li><li>Spectral Wall segment count increased from 7 to 8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs Health Steal per second reduced from 9 to 8</li><li>Fire Scarabs Health Steal per second spirit scaling reduced from 0.12 to 0.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark spirit scaling reduced from 0.38 to 0.35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Bullet damage increased from 6.42 + 0.242/boon to 6.8 + 0.26/boon</li></ul>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall width increased from 7.5m to 8m</li><li>Time Wall height increased from 3.5m to 4m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine collision radius increased slightly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n<ul><li>Fixed souls bug with breakables</li></ul>\n')} <div class="ability tag-along">${html('\n<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>\n<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>\n<ul><li>Tag Along can no longer be cancelled during the cast delay to prevent accidentally stopping it mid-cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Tag Along'
	});
	$$renderer.push(
		`<!----></div> <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>\n')} <ul><li>${html('Naptime radius increased from 17m to 19m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Rem',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Naptime radius increased from 17m to 19m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Naptime T2 sleep duration increased from +0.5s to +0.75s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero shiv">\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Fixed Rage not building up against Barriers</li></ul>\n</div>\n')} <div class="hero venator">${html('\n<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>\n<h3 id="venator"><a href="/hero/venator">Venator</a></h3>\n')} <div class="ability hex-lined-snap-trap">${html('\n<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex-Lined Snap Trap change history</a></p>\n<h4 id="hex-lined-snap-trap"><a href="/ability/hex-lined-snap-trap">Hex-Lined Snap Trap</a></h4>\n')} <ul><li>${html('Hex-Lined Snap Trap immobilize duration reduced from 1.5s to 1.25s')}</li> <li>${html('Hex-Lined Snap Trap cooldown increased from 25s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Venator',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Hex-Lined Snap Trap cooldown increased from 25s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Hex-Lined Snap Trap T1 increased from -8s Cooldown to -11s')}</li> <li>${html('Hex-Lined Snap Trap T2 increased from +0.75s Duration to +1s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Hex-Lined Snap Trap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Bullet damage increased from 12 to 13</li></ul>\n')} <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart T2 increased from +50 Total HP Regen to +70</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering now builds up over 8s instead of 6s</li><li>Aura of Suffering T1 slow now also affects dashes</li><li>Aura of Suffering T1 slow reduced from 30% to 25%</li><li>Aura of Suffering Min DPS increased by 10% (affects base damage, AP and spirit scaling)</li><li>Aura of Suffering Max DPS increased by 20% (affects base damage, AP and spirit scaling)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n<ul><li>Shocking Reanimation now applies a heavy diminishing slow immediately when you die</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n<ul><li>Screwjab Dagger no longer takes you out of RMB zoom</li><li>Screwjab Dagger charge time reduced from 4.5s to 4.0s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Sliding uphill now allows for lateral movement</li></ul>\n')} <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither slide distance increased from +10% to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Fixed Crimson Slash not hitting through veils</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_4_10_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item armor-piercing-rounds">${html('\n<p><a href="/item/armor-piercing-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Armor Piercing Rounds patch history</a></p>\n<h3 id="armor-piercing-rounds"><a href="/item/armor-piercing-rounds">Armor Piercing Rounds</a></h3>\n<ul><li>Chance increased from 50% to 55%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Armor Piercing Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Bonus Souls increased from 150% to 170%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Spirit scaling reduced from 0.0055 to 0.004</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Secondary Fire Weapon Damage increased from 35% + 1%/boon to 40% + 1.3%/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item golden-goose-egg">${html('\n<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>\n<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>\n<ul><li>Souls required for permanent buff reduced from 150 to 100</li><li>Now only gives permanent buffs for actual accrued souls, not counting the initial 400 sellback amount (so it no longer instantly sells for permanent buffs)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Golden Goose Egg',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lightning-scroll">${html('\n<p><a href="/item/lightning-scroll"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lightning Scroll patch history</a></p>\n<h3 id="lightning-scroll"><a href="/item/lightning-scroll">Lightning Scroll</a></h3>\n<ul><li>Fixed the stun delay being affected by debuff reducer making the stun go off faster</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lightning Scroll',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item plated-armor">${html('\n<p><a href="/item/plated-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Plated Armor patch history</a></p>\n<h3 id="plated-armor"><a href="/item/plated-armor">Plated Armor</a></h3>\n<ul><li>Bonus health increased from +100 to +130</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Plated Armor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item recharging-rush">${html('\n<p><a href="/item/recharging-rush"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Recharging Rush patch history</a></p>\n<h3 id="recharging-rush"><a href="/item/recharging-rush">Recharging Rush</a></h3>\n')} <ul><li>${html('Cooldown increased from 20s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Recharging Rush',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 20s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Recharging Rush',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n')} <ul><li>${html('Bullet damage returned increased from 50% to 60%')}</li> <li>${html('Cooldown reduced from 25s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 25s to 23s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Movement Speed penalty reduced from -1m to -0.7m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n')} <ul><li>${html('Damage reduced from 100 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 100 to 75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit scaling reduced from 1.0 to 0.7')}</li> <li>${html('Cooldown increased from 30s to 42s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown increased from 30s to 42s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>Move Speed increased from 1.5m to 1.75m</li><li>Barrier duration increased from 7s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Ammo increased from 90% to 100%</li><li>Weapon Damage increased from 12% to 14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Buildup is now 10% slower</li><li>Bleed reduced from 2% to 1.7%</li><li>Anti Heal increased from -30% to -35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>Move Speed increased from 1.5m to 1.75m</li><li>Barrier duration increased from 7s to 8s</li><li>Time Frame increased from 3.5s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _4_10_mg as default, metadata, readingManifest, toc };
