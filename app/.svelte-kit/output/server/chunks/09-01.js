import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/09-01.mg?embed=0
function _9_01_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Infernus', 'Ivy', 'Seven', 'Viscous']
	});
}
//#endregion
//#region changelogs/2024/09-01.mg
var metadata = {
	title: '09-01-2024 Update',
	thread_id: '24093',
	published: '2024-09-01T13:40:48-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Rope climb speed increased from 11 to 13 Rope activation range increased from 2.2m to 2.4m Fixed an HTML parsing exploit with builds Infernus Flame Dash now has 30% Slow Resistance Ivy Air Drop self cast time reduced from 2 to 1.3 Seven Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7 Viscous Puddle Punch base cast range from 60m to 40m Puddle Punch T2 damage from +50 to +35 Puddle Punch base cooldown increased from 24 to 28 Puddle Punch now knocks people less high into the air Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-30',
			to: '2024-09-01'
		},
		after: {
			from: '2024-09-02',
			to: '2024-09-12'
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
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-30',
			to: '2024-09-01'
		},
		after: {
			from: '2024-09-02',
			to: '2024-09-12'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		}
	],
	related: []
};
function _9_01_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Rope climb speed increased from 11 to 13</li><li>Rope activation range increased from 2.2m to 2.4m</li><li>Fixed an HTML parsing exploit with builds</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_9_01_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash now has 30% Slow Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop self cast time reduced from 2 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n')} <ul><li>${html('Puddle Punch base cast range from 60m to 40m')}</li> <li>${html('Puddle Punch T2 damage from +50 to +35')}</li> <li>${html('Puddle Punch base cooldown increased from 24 to 28')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Puddle Punch base cooldown increased from 24 to 28'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Puddle Punch now knocks people less high into the air')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets</li></ul>\n')}</div>`
	);
}
//#endregion
export { _9_01_mg as default, metadata, readingManifest, toc };
