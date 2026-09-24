import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/10-27.mg?embed=0
function _0_27_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Grey Talon',
			'Kelvin',
			'McGinnis',
			'Paradox',
			'Seven',
			'Shiv',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/10-27.mg?embed=1
function _0_27_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Majestic Leap']
	});
}
//#endregion
//#region changelogs/2024/10-27.mg
var metadata = {
	title: '10-27-2024 Update',
	thread_id: '42492',
	published: '2024-10-27T18:43:19-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Urn NW lead requirement increased from 8% to 10% Shiv Killing Blow cast range increased from 13m to 14m Killing Blow rage per weapon damage increased from 0.015 to 0.017 Killing Blow drain rate reduced from 0.3 to 0.25 Bebop Sticky Bomb stacks no longer decrease on death Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks) Sticky Bomb damage per stack increased from 3% to 5% Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2 Sticky Bomb T1 improved from -7.5s to -8s Sticky Bomb cooldown reduced from 19s to 18s Grey Talon Movespeed spirit scaling reduced from 0.04 to 0.032 Bullet damage spirit scaling reduced from 0.13 to 0.12 Kelvin Ice Path cooldown increased from 38s to 42s McGinnis Mini Turrets Spirit Resist reduced from 80% to 70% Spectral Wall cooldown increased from 37s to 46s Spectral Wall T2 cooldown improved from -14s to -23s Paradox Pulse Grenade T3 reduced from +1m per Pulse to +0.75m Seven Storm Cloud DPS increased from 110 to 120 Yamato Shadow Transformation cooldown reduced from 90s to 85s Majestic Leap Cooldown reduced from 45s to 40s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-25',
			to: '2024-10-28'
		},
		after: {
			from: null,
			to: null
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
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turrets Spirit Resist',
		id: 'mini-turrets-spirit-resist'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
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
		title: 'Majestic Leap',
		id: 'majestic-leap'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-25',
			to: '2024-10-28'
		},
		after: null,
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
			name: 'Kelvin',
			id: 'kelvin'
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
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		}
	],
	related: []
};
function _0_27_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn NW lead requirement increased from 8% to 10%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_27_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb stacks no longer decrease on death')}</li> <li>${html('Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks)')}</li> <li>${html('Sticky Bomb damage per stack increased from 3% to 5%')}</li> <li>${html('Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2')}</li> <li>${html('Sticky Bomb T1 improved from -7.5s to -8s')}</li> <li>${html('Sticky Bomb cooldown reduced from 19s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 0,
		bulletIndex: 5,
		text: 'Sticky Bomb cooldown reduced from 19s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero grey-talon">\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Movespeed spirit scaling reduced from 0.04 to 0.032</li><li>Bullet damage spirit scaling reduced from 0.13 to 0.12</li></ul>\n</div>\n')} <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n')} <ul><li>${html('Ice Path cooldown increased from 38s to 42s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Ice Path cooldown increased from 38s to 42s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turrets-spirit-resist">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets Spirit Resist change history</a></p>\n<h4 id="mini-turrets-spirit-resist"><a href="/ability/mini-turret">Mini Turrets Spirit Resist</a></h4>\n<ul><li>Mini Turrets Spirit Resist reduced from 80% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets Spirit Resist'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n')} <ul><li>${html('Spectral Wall cooldown increased from 37s to 46s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Spectral Wall cooldown increased from 37s to 46s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spectral Wall T2 cooldown improved from -14s to -23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Spectral Wall T2 cooldown improved from -14s to -23s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade T3 reduced from +1m per Pulse to +0.75m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud-dps">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud DPS change history</a></p>\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS increased from 110 to 120</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow cast range increased from 13m to 14m</li><li>Killing Blow rage per weapon damage increased from 0.015 to 0.017</li><li>Killing Blow drain rate reduced from 0.3 to 0.25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n')} <ul><li>${html('Shadow Transformation cooldown reduced from 90s to 85s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Shadow Transformation cooldown reduced from 90s to 85s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_27_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown reduced from 45s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 45s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_27_mg as default, metadata, readingManifest, toc };
