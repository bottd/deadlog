import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2025/03-16.mg?embed=0
function _3_16_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Divine Barrier', 'Restorative Locket']
	});
}
//#endregion
//#region changelogs/2025/03-16.mg
var metadata = {
	title: '03-16-2025 Update',
	thread_id: '58880',
	published: '2025-03-16T17:30:59-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Neutral bounty increased by 5% Sinner's Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min) Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday) Restorative Locket No longer grants +10% Spirit Resist Divine Barrier Shields reduced from 260 to 230",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-03-14',
			to: '2025-03-17'
		},
		after: {
			from: '2025-03-18',
			to: '2025-03-20'
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
		title: 'Divine Barrier',
		id: 'divine-barrier'
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
			from: '2025-03-14',
			to: '2025-03-17'
		},
		after: {
			from: '2025-03-18',
			to: '2025-03-20'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		}
	],
	related: []
};
function _3_16_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Neutral bounty increased by 5%</li><li>Sinner&#x27;s Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min)</li><li>Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday)</li></ul>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_3_16_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Shields reduced from 260 to 230</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>No longer grants +10% Spirit Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _3_16_mg as default, metadata, readingManifest, toc };
