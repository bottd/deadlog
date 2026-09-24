import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/12-31.mg?embed=0
function _2_31_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Infernus', 'Kelvin', 'Mirage', 'Shiv', 'Vindicta', 'Warden', 'Yamato']
	});
}
//#endregion
//#region changelogs/2024/12-31.mg?embed=1
function _2_31_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Rapid Recharge']
	});
}
//#endregion
//#region changelogs/2024/12-31.mg
var metadata = {
	title: '12-31-2024 Update',
	thread_id: '52769',
	published: '2024-12-31T00:52:42-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Yamato Bullet damage growth reduced from 0.35 to 0.33 Shadow Transformation cooldown increased from 85s to 100s Mirage Fire Scarabs base damage reduced from 90 to 75 Infernus Flame Dash cooldown increased from 35s to 38s Flame Dash spirit scaling increased from 0.7 to 0.8 Flame Dash T2 reduced from +45 to +40 Flame Dash T3 Charge Time increased from 18s to 20s Kelvin Base Spirit Resistance increased from 10% to 15% Ice Path cooldown increased from 42s to 46s Warden Base bullet damage reduced from 19.8 to 19.5 Last Stand base DPS reduced from 100 to 90 Last Stand DPS spirit power scaling increased from 1.2 to 1.4 Vindicta Bullet Velocity reduced from 889 to 810 Assassinate T2 reduced from +130 to +120 Assassinate Charge Time increased from 2s to 2.5s Shiv Bullet growth reduced from +0.31 to +0.27 Serrated Knives T3 increased from +5 Bleed DPS to +7 Rapid Recharge Charge Time reduced from -60% to -45% Weapon Power increased from 12% to 18%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-12-22',
			to: '2024-12-31'
		},
		after: {
			from: '2025-01-01',
			to: '2025-01-13'
		}
	}
};
var toc = [
	{
		level: 1,
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash'
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
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
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
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 3,
		title: 'Assassinate Charge Time',
		id: 'assassinate-charge-time'
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
		level: 3,
		title: 'Last Stand DPS',
		id: 'last-stand-dps'
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
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-12-22',
			to: '2024-12-31'
		},
		after: {
			from: '2025-01-01',
			to: '2025-01-13'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
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
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		}
	],
	related: []
};
function _2_31_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_2_31_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n')} <ul><li>${html('Flame Dash cooldown increased from 35s to 38s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Flame Dash cooldown increased from 35s to 38s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flame Dash spirit scaling increased from 0.7 to 0.8')}</li> <li>${html('Flame Dash T2 reduced from +45 to +40')}</li> <li>${html('Flame Dash T3 Charge Time increased from 18s to 20s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Base Spirit Resistance increased from 10% to 15%</li></ul>\n')} <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n')} <ul><li>${html('Ice Path cooldown increased from 42s to 46s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Ice Path cooldown increased from 42s to 46s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n')} <ul><li>${html('Fire Scarabs base damage reduced from 90 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Fire Scarabs base damage reduced from 90 to 75'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Bullet growth reduced from +0.31 to +0.27</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives T3 increased from +5 Bleed DPS to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Bullet Velocity reduced from 889 to 810</li></ul>\n')} <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate T2 reduced from +130 to +120</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate-charge-time">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Charge Time change history</a></p>\n<h4 id="assassinate-charge-time"><a href="/ability/assassinate">Assassinate Charge Time</a></h4>\n<ul><li>Assassinate Charge Time increased from 2s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate Charge Time'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base bullet damage reduced from 19.8 to 19.5</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand base DPS reduced from 100 to 90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand-dps">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand DPS change history</a></p>\n<h4 id="last-stand-dps"><a href="/ability/last-stand">Last Stand DPS</a></h4>\n<ul><li>Last Stand DPS spirit power scaling increased from 1.2 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Bullet damage growth reduced from 0.35 to 0.33</li></ul>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n')} <ul><li>${html('Shadow Transformation cooldown increased from 85s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Shadow Transformation cooldown increased from 85s to 100s'
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
	_2_31_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Charge Time reduced from -60% to -45%</li><li>Weapon Power increased from 12% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _2_31_mg as default, metadata, readingManifest, toc };
