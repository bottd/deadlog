import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/08-18.mg?embed=0
function _8_18_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Restorative Locket']
	});
}
//#endregion
//#region changelogs/2024/08-18.mg
var metadata = {
	title: '08-18-2024 Update',
	thread_id: '18377',
	published: '2024-08-18T22:46:34-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Restorative Locket Spirit Resist reduced from 10% to 8% Cooldown increased from 24s to 28s Heal reduced from 40 per stack to 35 Stamina restore changed from max stamina to 1 charge',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-17',
			to: '2024-08-19'
		},
		after: {
			from: '2024-08-20',
			to: '2024-08-23'
		}
	}
};
var toc = [
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
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
			from: '2024-08-17',
			to: '2024-08-19'
		},
		after: {
			from: '2024-08-20',
			to: '2024-08-23'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		}
	],
	related: []
};
function _8_18_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_8_18_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n')} <ul><li>${html('Spirit Resist reduced from 10% to 8%')}</li> <li>${html('Cooldown increased from 24s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 24s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heal reduced from 40 per stack to 35')}</li> <li>${html('Stamina restore changed from max stamina to 1 charge')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _8_18_mg as default, metadata, readingManifest, toc };
