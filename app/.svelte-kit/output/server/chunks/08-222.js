import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/08-22.mg?embed=0
function _8_22_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Celeste']
	});
}
//#endregion
//#region changelogs/2026/08-22.mg?embed=1
function _8_22_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Radiant Regeneration', 'Restorative Locket']
	});
}
//#endregion
//#region changelogs/2026/08-22.mg
var metadata = {
	title: 'Minor Update - 08-22-2026',
	alias: '2026/minor-08-22',
	thread_id: '162571',
	steam_gid: '1841579228672283',
	published: '2026-08-22T21:40:46.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Celeste Dazzling Trick cooldown increased from 32s to 34s Dazzling Trick T2 barrier rescaled from "+80 and +0.7 scaling" to "+70 and +0.76" Dazzling Trick T3 cooldown increased from -18s to -20s Dazzling Trick T3 reduced from +1.5s Silence to +1.25s Radiant Daggers Spirit Amp per stack reduced from +8% to +7% Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4% Shining Wonder bounce range reduced from 17.5m to 16.5m Shining Wonder damage reduced from 165 to 140 Shining Wonder spirit scaling reduced from 0.9 to 0.6 Shining Wonder T2 now also increases spirit scaling by +0.45 Radiant Regeneration Heal on cast reduced from 70 to 65 Restorative Locket Spirit Resistance reduced from 10% to 8%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-08-13',
			to: '2026-08-22'
		},
		after: {
			from: '2026-08-23',
			to: '2026-09-06'
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
		title: 'Celeste',
		id: 'celeste'
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
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Radiant Regeneration',
		id: 'radiant-regeneration'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-08-13',
			to: '2026-08-22'
		},
		after: {
			from: '2026-08-23',
			to: '2026-09-06'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Celeste',
			id: 'celeste'
		},
		{
			kind: 'item',
			name: 'Radiant Regeneration',
			id: 'radiant-regeneration'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		}
	],
	related: []
};
function _8_22_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_22_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n')} <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n')} <ul><li>${html('Dazzling Trick cooldown increased from 32s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Dazzling Trick cooldown increased from 32s to 34s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Dazzling Trick T2 barrier rescaled from &quot;+80 and +0.7 scaling&quot; to &quot;+70 and +0.76&quot;')}</li> <li>${html('Dazzling Trick T3 cooldown increased from -18s to -20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Dazzling Trick T3 cooldown increased from -18s to -20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Dazzling Trick T3 reduced from +1.5s Silence to +1.25s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n<ul><li>Radiant Daggers Spirit Amp per stack reduced from +8% to +7%</li><li>Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n')} <ul><li>${html('Shining Wonder bounce range reduced from 17.5m to 16.5m')}</li> <li>${html('Shining Wonder damage reduced from 165 to 140')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Shining Wonder damage reduced from 165 to 140'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shining Wonder spirit scaling reduced from 0.9 to 0.6')}</li> <li>${html('Shining Wonder T2 now also increases spirit scaling by +0.45')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_22_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item radiant-regeneration">${html('\n<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>\n<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>\n<ul><li>Heal on cast reduced from 70 to 65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Radiant Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Spirit Resistance reduced from 10% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_22_mg as default, metadata, readingManifest, toc };
