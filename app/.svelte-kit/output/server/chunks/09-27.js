import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/09-27.mg?embed=0
function _9_27_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Mirage']
	});
}
//#endregion
//#region changelogs/2024/09-27.mg
var metadata = {
	title: '09-27-2024 Update',
	thread_id: '33816',
	published: '2024-09-27T17:33:18-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Mirage Tornado lift duration reduced from 1.5s to 1.2s Tornado T1 bonus lift duration reduced from +0.5s to +0.4s Tornado base bullet evasion reduced from 30% to 25% Djinn's Mark T3 now also reduces Multiplier Cooldown by 0.5s",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-27',
			to: '2024-09-28'
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
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil'
	},
	{
		level: 3,
		title: 'Tornado',
		id: 'tornado'
	},
	{
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil-1'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-27',
			to: '2024-09-28'
		},
		after: null,
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		}
	],
	related: []
};
function _9_27_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_9_27_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Tornado lift duration reduced from 1.5s to 1.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tornado">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tornado change history</a></p>\n<h4 id="tornado"><a href="/ability/dust-devil">Tornado</a></h4>\n<ul><li>Tornado T1 bonus lift duration reduced from +0.5s to +0.4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Tornado'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil-1"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Tornado base bullet evasion reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark T3 now also reduces Multiplier Cooldown by 0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _9_27_mg as default, metadata, readingManifest, toc };
