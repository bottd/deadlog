import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/11-13.mg?embed=0
function _1_13_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Haze', 'Paradox', 'Vindicta', 'Yamato']
	});
}
//#endregion
//#region changelogs/2024/11-13.mg
var metadata = {
	title: '11-13-2024 Update',
	thread_id: '46391',
	published: '2024-11-13T17:10:08-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Troopers now do 20% more damage to each other Soul Sharing ratios post-lane reduced from 100/75/50/35/28/22% to 100/70/45/33/25/20% (for 1/2/3/4/5/6 players) First Urn is now always neutral regardless of NW lead Guardian resistance changed from -35% at 8 minutes to -50% at 10 minutes Heavy Melee canceling can no longer be done with some abilities (only items atm) Team vs Team NW comeback formula toned down Haze Bullet Dance bonus bullet damage increased from +2 to +5 Paradox Time Wall Time Stop duration reduced from 0.7s to 0.6s Time Wall duration reduced from 7s to 6s Vindicta Assassinate damage reduced by 5% Yamato Shadow Transformation Bullet and Spirit resist reduced from 50% to 45% Shadow Transformation duration reduced from 5.5s to 5s Shadow Transformation heal reduced from 25% to 20%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-11-11',
			to: '2024-11-14'
		},
		after: {
			from: '2024-11-15',
			to: '2024-11-21'
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
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Time Wall Time Stop',
		id: 'time-wall-time-stop'
	},
	{
		level: 3,
		title: 'Time Wall',
		id: 'time-wall'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-11-11',
			to: '2024-11-14'
		},
		after: {
			from: '2024-11-15',
			to: '2024-11-21'
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
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		}
	],
	related: []
};
function _1_13_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Troopers now do 20% more damage to each other</li><li>Soul Sharing ratios post-lane reduced from 100/75/50/35/28/22% to 100/70/45/33/25/20% (for 1/2/3/4/5/6 players)</li><li>First Urn is now always neutral regardless of NW lead</li><li>Guardian resistance changed from -35% at 8 minutes to -50% at 10 minutes</li><li>Heavy Melee canceling can no longer be done with some abilities (only items atm)</li><li>Team vs Team NW comeback formula toned down</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_13_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance bonus bullet damage increased from +2 to +5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall-time-stop">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall Time Stop change history</a></p>\n<h4 id="time-wall-time-stop"><a href="/ability/time-wall">Time Wall Time Stop</a></h4>\n<ul><li>Time Wall Time Stop duration reduced from 0.7s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall Time Stop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall duration reduced from 7s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate damage reduced by 5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation Bullet and Spirit resist reduced from 50% to 45%</li><li>Shadow Transformation duration reduced from 5.5s to 5s</li><li>Shadow Transformation heal reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _1_13_mg as default, metadata, readingManifest, toc };
