import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/01-12.mg?embed=0
function _1_12_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Yamato']
	});
}
//#endregion
//#region changelogs/2025/01-12.mg?embed=1
function _1_12_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Alchemical Fire', 'Berserker', 'Frenzy', 'Restorative Shot']
	});
}
//#endregion
//#region changelogs/2025/01-12.mg
var metadata = {
	title: '01-12-2025 Update',
	thread_id: '53389',
	published: '2025-01-12T18:51:01-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Unstoppable state no longer blocks anti-heal effects Yamato Bullet damage growth reduced from 0.33 to 0.27 Shadow Transformation T1 reduced from +20% Fire Rate to +15% Alchemical Fire Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS) Berserker Weapon Damage per Stack reduced from 6% to 5% Bullet Resistance reduced from 9% to 8% Frenzy Weapon Damage per Stack reduced from 8% to 7% Bullet Resistance reduced from 10% to 8% Fire Rate reduced from 40% to 35% Low Health Bullet Resistance reduced from 55% to 50% Restorative Shot Cooldown increased from 7s to 9s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-01',
			to: '2025-01-13'
		},
		after: {
			from: '2025-01-14',
			to: '2025-01-17'
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
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-01',
			to: '2025-01-13'
		},
		after: {
			from: '2025-01-14',
			to: '2025-01-17'
		},
		siblings: []
	},
	open: false,
	sections: [
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
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		}
	],
	related: []
};
function _1_12_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Unstoppable state no longer blocks anti-heal effects</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_12_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Bullet damage growth reduced from 0.33 to 0.27</li></ul>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation T1 reduced from +20% Fire Rate to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_1_12_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Weapon Damage per Stack reduced from 6% to 5%</li><li>Bullet Resistance reduced from 9% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Weapon Damage per Stack reduced from 8% to 7%</li><li>Bullet Resistance reduced from 10% to 8%</li><li>Fire Rate reduced from 40% to 35%</li><li>Low Health Bullet Resistance reduced from 55% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 7s to 9s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 7s to 9s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _1_12_mg as default, metadata, readingManifest, toc };
