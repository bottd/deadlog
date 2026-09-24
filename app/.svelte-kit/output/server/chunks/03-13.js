import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/03-13.mg?embed=0
function _3_13_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Haze', 'Holliday', 'Sinclair']
	});
}
//#endregion
//#region changelogs/2025/03-13.mg?embed=1
function _3_13_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Cold Front']
	});
}
//#endregion
//#region changelogs/2025/03-13.mg
var metadata = {
	title: '03-13-2025 Update',
	thread_id: '58592',
	published: '2025-03-13T11:40:11-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Increased horizontal soul orb movement a bit Soul Orb spawn delay increased a bit and added some variability Neutrals soul values reduced by 15%  (including Sinner's Sacrifice) Sinner's Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5 Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes Golden Statue Buffs adjustments Level 1 Ammo reduced from 4% to 3% Level 2 Ammo reduced from 6% to 5% Level 3 Ammo reduced from 8% to 7% Level 1 HP reduced from 20 to 15 Level 2 HP reduced from 30 to 25 Level 3 HP reduced from 40 to 35 Level 3 Weapon Power reduced from 7% to 6% Level 3 Spirit reduced from 5 to 4 Minor respawn curve adjustments Holliday Powder Keg T2 decreased from +120 to +100 Bounce Pad cooldown increased from 37s to 41s Bounce Pad T1 is now T2 Bounce Pad New T1 is -10s cooldown Bounce Pad T2 is now T3. Removed T3 Stun Haze Bullet Dance bonus damage is now weapon damage instead of spirit Sinclair Assistant damage now follows his gun's falloff range Assistant base damage reduced from 30 to 20 Cold Front No longer does double damage to creeps",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-02-27',
			to: '2025-03-13'
		},
		after: {
			from: '2025-03-14',
			to: '2025-03-17'
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
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Powder Keg',
		id: 'powder-keg'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
	},
	{
		level: 3,
		title: 'Bounce Pad New',
		id: 'bounce-pad-new'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad-1'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Assistant',
		id: 'assistant'
	},
	{
		level: 3,
		title: 'Spectral Assistant',
		id: 'spectral-assistant'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Cold Front',
		id: 'cold-front'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-02-27',
			to: '2025-03-13'
		},
		after: {
			from: '2025-03-14',
			to: '2025-03-17'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
		},
		{
			kind: 'hero',
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'item',
			name: 'Cold Front',
			id: 'cold-front'
		}
	],
	related: []
};
function _3_13_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Increased horizontal soul orb movement a bit</li><li>Soul Orb spawn delay increased a bit and added some variability</li><li>Neutrals soul values reduced by 15%  (including Sinner&#x27;s Sacrifice)</li><li>Sinner&#x27;s Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5</li><li>Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes</li><li>Golden Statue Buffs adjustments</li><li>Level 1 Ammo reduced from 4% to 3%</li><li>Level 2 Ammo reduced from 6% to 5%</li><li>Level 3 Ammo reduced from 8% to 7%</li><li>Level 1 HP reduced from 20 to 15</li><li>Level 2 HP reduced from 30 to 25</li><li>Level 3 HP reduced from 40 to 35</li><li>Level 3 Weapon Power reduced from 7% to 6%</li><li>Level 3 Spirit reduced from 5 to 4</li><li>Minor respawn curve adjustments</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_3_13_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance bonus damage is now weapon damage instead of spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg T2 decreased from +120 to +100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n')} <ul><li>${html('Bounce Pad cooldown increased from 37s to 41s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Bounce Pad cooldown increased from 37s to 41s'
	});
	$$renderer.push(`<!----></li> <li>${html('Bounce Pad T1 is now T2')}</li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad-new">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad New change history</a></p>\n<h4 id="bounce-pad-new"><a href="/ability/bounce-pad">Bounce Pad New</a></h4>\n<ul><li>Bounce Pad New T1 is -10s cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad New'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad-1"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n<ul><li>Bounce Pad T2 is now T3. Removed T3 Stun</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n')} <div class="ability assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assistant change history</a></p>\n<h4 id="assistant"><a href="/ability/spectral-assistant">Assistant</a></h4>\n<ul><li>Assistant damage now follows his gun&#x27;s falloff range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Assistant'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>\n<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>\n<ul><li>Assistant base damage reduced from 30 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Spectral Assistant'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_3_13_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n<ul><li>No longer does double damage to creeps</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _3_13_mg as default, metadata, readingManifest, toc };
