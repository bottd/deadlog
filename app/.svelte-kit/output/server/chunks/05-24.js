import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/05-24.mg?embed=0
function _5_24_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Decay']
	});
}
//#endregion
//#region changelogs/2024/05-24.mg
var metadata = {
	title: '05-24-2024 Update',
	thread_id: '1359',
	published: '2024-05-24T16:58:19-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Withering Whip: No longer has +1 Stamina Withering Whip: Duration reduced from 3.5s to 3s Withering Whip: Bullet Resist Reduction reduced from -20% to -14% Decay Cast range reduced from 30m to 15m',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2024-05-25',
			to: '2024-05-30'
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
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: null,
		after: {
			from: '2024-05-25',
			to: '2024-05-30'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		}
	],
	related: []
};
function _5_24_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Withering Whip: No longer has +1 Stamina</li><li>Withering Whip: Duration reduced from 3.5s to 3s</li><li>Withering Whip: Bullet Resist Reduction reduced from -20% to -14%</li></ul>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_24_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Cast range reduced from 30m to 15m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_24_mg as default, metadata, readingManifest, toc };
