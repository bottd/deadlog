import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/minor-07-01.mg?embed=0
function Minor_07_01_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Shiv']
	});
}
//#endregion
//#region changelogs/2026/minor-07-01.mg
var metadata = {
	title: 'Minor Update - 07-01-2026',
	steam_gid: '1836506165566600',
	published: '2026-07-01T22:54:59.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Shiv Alt Fire ammo cost reduced from 5 to 4 Weapon now has fixed pellet spread Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies Slice and Dice damage increased from 60 to 75 Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2026-07-02',
			to: '2026-07-09'
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
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Slice and Dice',
		id: 'slice-and-dice'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: null,
		after: {
			from: '2026-07-02',
			to: '2026-07-09'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		}
	],
	related: []
};
function Minor_07_01_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	Minor_07_01_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Alt Fire ammo cost reduced from 5 to 4</li><li>Weapon now has fixed pellet spread</li></ul>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n')} <ul><li>${html('Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies')}</li> <li>${html('Slice and Dice damage increased from 60 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Slice and Dice damage increased from 60 to 75'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { Minor_07_01_mg as default, metadata, readingManifest, toc };
