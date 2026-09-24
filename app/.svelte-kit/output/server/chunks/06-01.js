import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/06-01.mg?embed=0
function _6_01_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Return Fire']
	});
}
//#endregion
//#region changelogs/2024/06-01.mg
var metadata = {
	title: '06-01-2024 Update',
	thread_id: '3004',
	published: '2024-06-01T13:34:03-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Return Fire No longer applies procs Bullet damage return increased from 60% to 70%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-31',
			to: '2024-06-01'
		},
		after: {
			from: '2024-06-02',
			to: '2024-06-06'
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
			from: '2024-05-31',
			to: '2024-06-01'
		},
		after: {
			from: '2024-06-02',
			to: '2024-06-06'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Return Fire',
			id: 'return-fire'
		}
	],
	related: []
};
function _6_01_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_6_01_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>No longer applies procs</li><li>Bullet damage return increased from 60% to 70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _6_01_mg as default, metadata, readingManifest, toc };
