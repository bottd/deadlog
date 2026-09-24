import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/08-22.mg?embed=0
function _8_22_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Ivy', 'Shiv']
	});
}
//#endregion
//#region changelogs/2024/08-22.mg?embed=1
function _8_22_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Reactive Barrier', 'Return Fire']
	});
}
//#endregion
//#region changelogs/2024/08-22.mg
var metadata = {
	title: '08-22-2024 Update',
	thread_id: '19716',
	published: '2024-08-22T18:55:55-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Fixed High-Velocity Mag affecting some abilities Silence Glyph: Damage reduced from 150 to 100 Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0 Silence Glyph: Cast range reduced from 40m to 25m Silence Glyph: Sprint reduced from 2 to 1 Silence Glyph: Spirit Shield reduced from +225 to +200 Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back) Fixed Siphon Bullets acting as spirit damage for procs Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after Ivy Air Drop now silences the ally being carried until they are released Shiv Bloodletting incoming damage deferred reduced from 40% to 35% Reactive Barrier Cooldown increased from 20s to 30s Return Fire Bullet damage returned reduced form 80% to 70%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-20',
			to: '2024-08-23'
		},
		after: {
			from: '2024-08-24',
			to: '2024-08-29'
		},
		siblings: '19948'
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
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Return Fire',
		id: 'return-fire'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-20',
			to: '2024-08-23'
		},
		after: {
			from: '2024-08-24',
			to: '2024-08-29'
		},
		siblings: ['19948']
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Return Fire',
			id: 'return-fire'
		}
	],
	related: []
};
function _8_22_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Fixed High-Velocity Mag affecting some abilities</li><li>Silence Glyph: Damage reduced from 150 to 100</li><li>Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0</li><li>Silence Glyph: Cast range reduced from 40m to 25m</li><li>Silence Glyph: Sprint reduced from 2 to 1</li><li>Silence Glyph: Spirit Shield reduced from +225 to +200</li><li>Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back)</li><li>Fixed Siphon Bullets acting as spirit damage for procs</li><li>Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies</li><li>Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_22_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop now silences the ally being carried until they are released</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting incoming damage deferred reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_22_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 20s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 20s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Bullet damage returned reduced form 80% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_22_mg as default, metadata, readingManifest, toc };
