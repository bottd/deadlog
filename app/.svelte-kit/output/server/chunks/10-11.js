import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/10-11.mg?embed=0
function _0_11_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Bebop', 'Vindicta']
	});
}
//#endregion
//#region changelogs/2024/10-11.mg
var metadata = {
	title: '10-11-2024 Update',
	thread_id: '37641',
	published: '2024-10-11T16:54:46-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Torment Pulse now scales with cooldown again Torment Pulse Spirit power scaling reduced from 0.33 to 0.3 Fixed Ethereal Shift scaling with duration Pause no longer restricted before 3 minutes (we plan to bring this back in the future, but we want to allow this for now while we are early and have technical issues sometimes) Updated Heavy Barrage sound Bebop Sticky Bomb no longer has a cap (was 15 stacks) Sticky Bomb scaling per hero reduced from 4% to 3% (previous uncapped was 2.5%) Sticky Bomb still loses 2 stacks on death Fixed some hook bugs causing it to sometimes not grab heroes near cover but still in collision range Hook collision against troopers reduced to 12 (default is 33) Hook no longer kills troopers (so you can bomb/uppercut/melee them) Hyper Beam duration increased from 10s to 11s Vindicta Movespeed increased from 8.3 to 9',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2024-10-12',
			to: '2024-10-16'
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
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 3,
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: null,
		after: {
			from: '2024-10-12',
			to: '2024-10-16'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Bebop',
			id: 'bebop'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		}
	],
	related: []
};
function _0_11_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Torment Pulse now scales with cooldown again</li><li>Torment Pulse Spirit power scaling reduced from 0.33 to 0.3</li><li>Fixed Ethereal Shift scaling with duration</li><li>Pause no longer restricted before 3 minutes (we plan to bring this back in the future, but we want to allow this for now while we are early and have technical issues sometimes)</li><li>Updated Heavy Barrage sound</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_11_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb no longer has a cap (was 15 stacks)</li><li>Sticky Bomb scaling per hero reduced from 4% to 3% (previous uncapped was 2.5%)</li><li>Sticky Bomb still loses 2 stacks on death</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Fixed some hook bugs causing it to sometimes not grab heroes near cover but still in collision range</li><li>Hook collision against troopers reduced to 12 (default is 33)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook no longer kills troopers (so you can bomb/uppercut/melee them)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam duration increased from 10s to 11s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero vindicta">\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Movespeed increased from 8.3 to 9</li></ul>\n</div>\n')}`
	);
}
//#endregion
export { _0_11_mg as default, metadata, readingManifest, toc };
