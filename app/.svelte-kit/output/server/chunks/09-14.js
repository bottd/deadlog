import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/09-14.mg?embed=0
function _9_14_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Bebop', 'McGinnis']
	});
}
//#endregion
//#region changelogs/2024/09-14.mg?embed=1
function _9_14_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Ammo Scavenger']
	});
}
//#endregion
//#region changelogs/2024/09-14.mg
var metadata = {
	title: '09-14-2024 Update',
	thread_id: '29586',
	published: '2024-09-14T21:05:26-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Bebop Hyper Beam cooldown increased from 117 to 130 Hyper Beam T1 reduced from -38s to -30s Hyper Beam end radius reduced from 5m to 4m Hyper Beam slow reduced from 40% to 30% Hyper Beam DPS reduced from 220 to 205 Hyper Beam DPS spirit scaling reduced from 3 to 2.7 McGinnis Medicinal Specter radius spirit power reduced from 0.07 to 0.05 Ammo Scavenger Buff duration reduced from 40s to 35s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-13',
			to: '2024-09-15'
		},
		after: {
			from: '2024-09-16',
			to: '2024-09-17'
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
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 3,
		title: 'Hyper Beam DPS',
		id: 'hyper-beam-dps'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Ammo Scavenger',
		id: 'ammo-scavenger'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-13',
			to: '2024-09-15'
		},
		after: {
			from: '2024-09-16',
			to: '2024-09-17'
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
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'item',
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		}
	],
	related: []
};
function _9_14_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_9_14_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n')} <ul><li>${html('Hyper Beam cooldown increased from 117 to 130')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Hyper Beam cooldown increased from 117 to 130'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Hyper Beam T1 reduced from -38s to -30s')}</li> <li>${html('Hyper Beam end radius reduced from 5m to 4m')}</li> <li>${html('Hyper Beam slow reduced from 40% to 30%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam-dps">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam DPS change history</a></p>\n<h4 id="hyper-beam-dps"><a href="/ability/hyper-beam">Hyper Beam DPS</a></h4>\n<ul><li>Hyper Beam DPS reduced from 220 to 205</li><li>Hyper Beam DPS spirit scaling reduced from 3 to 2.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter radius spirit power reduced from 0.07 to 0.05</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_9_14_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Buff duration reduced from 40s to 35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _9_14_mg as default, metadata, readingManifest, toc };
