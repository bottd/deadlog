import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/10-07.mg?embed=0
function _0_07_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Wraith']
	});
}
//#endregion
//#region changelogs/2024/10-07.mg?embed=1
function _0_07_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Shadow Weave']
	});
}
//#endregion
//#region changelogs/2024/10-07.mg
var metadata = {
	title: '10-07-2024 Update',
	thread_id: '36441',
	published: '2024-10-07T12:45:09-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Fixed various cases where you could target/select units behind walls with abilities (like Yamato's Flying Strike) Wraith Card Trick Spirit scaling reduced from 1.5 to 1.2 Shadow Weave Ambush Fire Rate reduced from +40% to +30%",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-04',
			to: '2024-10-07'
		},
		after: {
			from: '2024-10-08',
			to: '2024-10-10'
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
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Card Trick Spirit',
		id: 'card-trick-spirit'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-04',
			to: '2024-10-07'
		},
		after: {
			from: '2024-10-08',
			to: '2024-10-10'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
		}
	],
	related: []
};
function _0_07_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Fixed various cases where you could target/select units behind walls with abilities (like Yamato&#x27;s Flying Strike)</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_07_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick-spirit">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Spirit change history</a></p>\n<h4 id="card-trick-spirit"><a href="/ability/card-trick">Card Trick Spirit</a></h4>\n<ul><li>Card Trick Spirit scaling reduced from 1.5 to 1.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick Spirit'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_07_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Ambush Fire Rate reduced from +40% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_07_mg as default, metadata, readingManifest, toc };
