import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/12-29.mg?embed=0
function _2_29_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Billy',
			'Grey Talon',
			'Holliday',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Seven',
			'Sinclair',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2025/12-29.mg?embed=1
function _2_29_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Kinetic Dash', 'Toxic Bullets']
	});
}
//#endregion
//#region changelogs/2025/12-29.mg
var metadata = {
	title: '12-29-2025 Update',
	thread_id: '95233',
	published: '2025-12-29T22:33:52-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Respawn time at 19 minutes reduced from 35s to 30s Respawn time at 30 minutes reduced from 75s to 70s You now have a longer respawn time if you die and are meaningfully richer than the enemy team's average net worth (scales from +6s to +22s penalty, based on networth being 15 to 30% higher and game time being 10min to 25min, if under 15% NW or 10min, nothing happens) Neutral respawn times, hp, and bounty reduced by 30% (sinner's sacrifice unaffected) Urn no longer requires a drop off channel time Urn is now knocked out of your hands with a light melee (instead of only with a heavy melee) Urn pickup channel time is reset if you get hit with a light or heavy melee Can no longer parry while channeling to pickup the urn Urn carrier resist reduced from 50% to 30% Down Dash stamina cost reduced from 1 to 0.5 Stamina Regen in the healing zone is now dramatically increased Urn now drops if it travels through doorman portals Bebop Stamina increased from 2 to 3 Stamina regeneration cooldown increased from 4.55s to 6s Bebop Health per boon increased from +46 to +52 Sticky Bomb base damage reduced from 100 to 75 Sticky Bomb T2 damage reduced from 63 to 60 Sticky Bomb Spirit Scaling increased from 1.1 to 1.5 Sticky Bomb per hero hit from 1.5% to 1% + 0.0025% Spirit Scaling Sticky Bomb per hero kill from 4% to 2.5% + 0.015% Spirit Scaling Stamina regeneration cooldown improved from 6s to 5.5s Sticky Bomb stacks now count for half for each stack after a certain threshold (100 on hit and 10 on kill) Sticky Bomb base damage increased from 70 to 80 Sticky Bomb T2 increased from +60 to +70 Grey Talon Rain of Arrows cooldown reduced from 35s to 30s Rain of Arrows T3 now also grants +30% Bullet Evasion Guided Owl duration increased from 16s to 18s Guided Owl T1 damage increased from +81 to +85 Guided Owl Spirit Power per kill increased from 5 to 8 Holliday Powder Keg cooldown reduced from 32s to 28s Fixed Lasso being removed by Divine Barrier Ivy Watcher's Covenant Replicated Healing increased from 25% to 35% Watcher's Covenant Replicated Healing now scales with boons (0.5) Air Drop ally damage penalty reduced from -30% to -20% Kelvin Frost Grenade T3 now also reduces stamina regen by -30% Ice Path T3 Max Spirit Power increased from 55 to 75 Ice Path T3 Spirit Power linger duration increased from 6s to 8s Mo & Krill Burrow initial knockup vertical area detection improved Sand Blast now deals a fixed 40 damage Sand Blast can now be casted while Burrowed Sand Blast T2 increased from -19s Cooldown to -23s Sand Blast T3 now also slows dash distance by 40% Paradox Kinetic Carbine cooldown reduced from 30s to 27s Time Wall Width increased from 7m to 7.5m Seven Lightning Ball T3 increased from +1m to +1.5m Power Surge T2 reduced from -15% Spirit Resist for 8s to -10% for 6s Storm Cloud DPS increased from 90 to 95 Storm Cloud T3 increased from +54 DPS to 65 Storm Cloud T3 move speed increased from 2.5 to 3.8 Sinclair Spirit power growth increased from 1.1 to 1.3 Vexing Bolt initial velocity reduced from 1000 to 800 Vexing Bolt now only snaps to heroes Vexing Bolt max duration increased from 3s to 4s (max damage is still at 2s) Vexing Bolt now shows the target to redirect to (similar to Wraith's Cards) Rabbit Hex cooldown reduced from 30s to 26s Rabbit Hex radius increased from 6m to 6.5m Yamato Power Slash T3 bonus damage reduced from +166 to +150 Power Slash T3 now also increases spirit power scaling by 0.5 Shadow Transformation heal on kill increased from 12% to 15% Billy Base bullet damage reduced from 6.79 to 6.3 Lady Geist Ammo reduced from 10 to 9 Bullet Falloff from 58m to 52m McGinnis Medicinal Specter radius spirit scaling reduced from 0.0456 to 0.03 Medicinal Specter duration spirit scaling reduced from 0.11 to 0.05 Medicinal Specter T3 reduced from 3% Max Health to 2.5% Heavy Barrage T1 slow increased from 30% to 40% (and 20% dash slow) Heavy Barrage T3 spirit scaling increased from +0.1 to +0.2 Toxic Bullets Bleed damage reduced from 2.2% to 2% Buildup is 10% harder Kinetic Dash Ammo count reduced from +8 to +6",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-12-17',
			to: '2025-12-30'
		},
		after: {
			from: '2025-12-31',
			to: '2026-01-14'
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
		title: 'Sticky Bomb Spirit Scaling',
		id: 'sticky-bomb-spirit-scaling'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb-1'
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
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Powder Keg',
		id: 'powder-keg'
	},
	{
		level: 3,
		title: 'Spirit Lasso',
		id: 'spirit-lasso'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: "Watcher's Covenant Replicated Healing",
		id: 'watcher-s-covenant-replicated-healing'
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
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
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
		title: 'Burrow',
		id: 'burrow'
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
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 3,
		title: 'Time Wall Width',
		id: 'time-wall-width'
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
		level: 3,
		title: 'Power Surge',
		id: 'power-surge'
	},
	{
		level: 3,
		title: 'Storm Cloud DPS',
		id: 'storm-cloud-dps'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Vexing Bolt',
		id: 'vexing-bolt'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex'
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
		title: 'Kinetic Dash',
		id: 'kinetic-dash'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-12-17',
			to: '2025-12-30'
		},
		after: {
			from: '2025-12-31',
			to: '2026-01-14'
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
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Kinetic Dash',
			id: 'kinetic-dash'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		}
	],
	related: []
};
function _2_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Respawn time at 19 minutes reduced from 35s to 30s</li><li>Respawn time at 30 minutes reduced from 75s to 70s</li><li>You now have a longer respawn time if you die and are meaningfully richer than the enemy team&#x27;s average net worth (scales from +6s to +22s penalty, based on networth being 15 to 30% higher and game time being 10min to 25min, if under 15% NW or 10min, nothing happens)</li><li>Neutral respawn times, hp, and bounty reduced by 30% (sinner&#x27;s sacrifice unaffected)</li><li>Urn no longer requires a drop off channel time</li><li>Urn is now knocked out of your hands with a light melee (instead of only with a heavy melee)</li><li>Urn pickup channel time is reset if you get hit with a light or heavy melee</li><li>Can no longer parry while channeling to pickup the urn</li><li>Urn carrier resist reduced from 50% to 30%</li><li>Down Dash stamina cost reduced from 1 to 0.5</li><li>Stamina Regen in the healing zone is now dramatically increased</li><li>Urn now drops if it travels through doorman portals</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_2_29_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Stamina increased from 2 to 3</li><li>Stamina regeneration cooldown increased from 4.55s to 6s</li><li>Bebop Health per boon increased from +46 to +52</li></ul>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb base damage reduced from 100 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Sticky Bomb base damage reduced from 100 to 75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sticky Bomb T2 damage reduced from 63 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Sticky Bomb T2 damage reduced from 63 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb-spirit-scaling">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb Spirit Scaling change history</a></p>\n<h4 id="sticky-bomb-spirit-scaling"><a href="/ability/sticky-bomb">Sticky Bomb Spirit Scaling</a></h4>\n<ul><li>Sticky Bomb Spirit Scaling increased from 1.1 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb Spirit Scaling'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb-1"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb per hero hit from 1.5% to 1% + 0.0025% Spirit Scaling</li><li>Sticky Bomb per hero kill from 4% to 2.5% + 0.015% Spirit Scaling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Stamina regeneration cooldown improved from 6s to 5.5s</li></ul>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb-2"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb stacks now count for half for each stack after a certain threshold (100 on hit and 10 on kill)')}</li> <li>${html('Sticky Bomb base damage increased from 70 to 80')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Sticky Bomb base damage increased from 70 to 80'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sticky Bomb T2 increased from +60 to +70')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero billy">\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Base bullet damage reduced from 6.79 to 6.3</li></ul>\n</div>\n')} <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n')} <ul><li>${html('Rain of Arrows cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Rain of Arrows cooldown reduced from 35s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rain of Arrows T3 now also grants +30% Bullet Evasion')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl duration increased from 16s to 18s')}</li> <li>${html('Guided Owl T1 damage increased from +81 to +85')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Guided Owl T1 damage increased from +81 to +85'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Guided Owl Spirit Power per kill increased from 5 to 8')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n')} <ul><li>${html('Powder Keg cooldown reduced from 32s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Powder Keg cooldown reduced from 32s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spirit-lasso">${html('\n<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>\n<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>\n<ul><li>Fixed Lasso being removed by Divine Barrier</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Spirit Lasso'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability watcher-s-covenant-replicated-healing">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant Replicated Healing change history</a></p>\n<h4 id="watcher-s-covenant-replicated-healing"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant Replicated Healing</a></h4>\n<ul><li>Watcher&#x27;s Covenant Replicated Healing increased from 25% to 35%</li><li>Watcher&#x27;s Covenant Replicated Healing now scales with boons (0.5)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant Replicated Healing"
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop ally damage penalty reduced from -30% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade T3 now also reduces stamina regen by -30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path T3 Max Spirit Power increased from 55 to 75</li><li>Ice Path T3 Spirit Power linger duration increased from 6s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero lady-geist">\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Ammo reduced from 10 to 9</li><li>Bullet Falloff from 58m to 52m</li></ul>\n</div>\n')} <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter radius spirit scaling reduced from 0.0456 to 0.03</li><li>Medicinal Specter duration spirit scaling reduced from 0.11 to 0.05</li><li>Medicinal Specter T3 reduced from 3% Max Health to 2.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Heavy Barrage T1 slow increased from 30% to 40% (and 20% dash slow)</li><li>Heavy Barrage T3 spirit scaling increased from +0.1 to +0.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow initial knockup vertical area detection improved</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast now deals a fixed 40 damage</li><li>Sand Blast can now be casted while Burrowed</li><li>Sand Blast T2 increased from -19s Cooldown to -23s</li><li>Sand Blast T3 now also slows dash distance by 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n')} <ul><li>${html('Kinetic Carbine cooldown reduced from 30s to 27s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Kinetic Carbine cooldown reduced from 30s to 27s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall-width">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall Width change history</a></p>\n<h4 id="time-wall-width"><a href="/ability/time-wall">Time Wall Width</a></h4>\n<ul><li>Time Wall Width increased from 7m to 7.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall Width'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball T3 increased from +1m to +1.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge T2 reduced from -15% Spirit Resist for 8s to -10% for 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud-dps">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud DPS change history</a></p>\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS increased from 90 to 95</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud T3 increased from +54 DPS to 65</li><li>Storm Cloud T3 move speed increased from 2.5 to 3.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n<ul><li>Spirit power growth increased from 1.1 to 1.3</li></ul>\n')} <div class="ability vexing-bolt">${html('\n<p><a href="/ability/vexing-bolt"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Vexing Bolt change history</a></p>\n<h4 id="vexing-bolt"><a href="/ability/vexing-bolt">Vexing Bolt</a></h4>\n<ul><li>Vexing Bolt initial velocity reduced from 1000 to 800</li><li>Vexing Bolt now only snaps to heroes</li><li>Vexing Bolt max duration increased from 3s to 4s (max damage is still at 2s)</li><li>Vexing Bolt now shows the target to redirect to (similar to Wraith&#x27;s Cards)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Vexing Bolt'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n')} <ul><li>${html('Rabbit Hex cooldown reduced from 30s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Rabbit Hex cooldown reduced from 30s to 26s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rabbit Hex radius increased from 6m to 6.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Rabbit Hex radius increased from 6m to 6.5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash T3 bonus damage reduced from +166 to +150</li><li>Power Slash T3 now also increases spirit power scaling by 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation heal on kill increased from 12% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_2_29_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>Ammo count reduced from +8 to +6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Bleed damage reduced from 2.2% to 2%</li><li>Buildup is 10% harder</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _2_29_mg as default, metadata, readingManifest, toc };
