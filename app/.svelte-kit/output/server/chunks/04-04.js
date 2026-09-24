import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/04-04.mg?embed=0
function _4_04_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Calico', 'Holliday', 'Mirage', 'Seven', 'Sinclair', 'Vindicta']
	});
}
//#endregion
//#region changelogs/2025/04-04.mg?embed=1
function _4_04_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Infuser']
	});
}
//#endregion
//#region changelogs/2025/04-04.mg
var metadata = {
	title: '04-04-2025 Update',
	thread_id: '60284',
	published: '2025-04-04T16:35:38-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Added an option to allow canceling abilities with the ability key to the main options page. Soul orb spawn delay range increased from 0.2-0.7 to 0.4-0.7 Soul orb size increased by 10% Soul orb lag compensation buffer increased from 120ms to 140ms Fixed issues with denying melee soul orbs Fixed various other timing related bugs with Soul orbs Fixed shotguns doing too much damage to Guardians Removed the outer lanes teleporters Sprint increased by +0.5 for all heroes Removed the top of the mid arch from being able to be occupied Lifesteal provided by things like Soul Shredder bullets now properly diminishes in stacking with other sources of lifesteal Fix an edge case where a player can claim the Rejuv but also get parried Fixed spellslinger headshots providing more bonuses than intended Fixed some misc mispredictions during Ice Path movement Fixed Ice Path being overly sticky for allies Fixed Ivy, Viscous and Magic Carpet moving faster than desired when holding the soul urn Urn reveal time reduced from 25s to 15s Urn speed limit increased from 13 m/s to 15 m/s Wall Jump\'s behavior has been reworked so that lateral velocity is now modified by WASD movement direction into/away from the wall Mantle now requires pushing WASD Direction toward a ledge Improved Camera positions while character is backed up against walls When attaching to a zipline, movement direction can override the travel direction When holding "Jump/Mantle" after attaching to a rope, continue to move up the rope Calico Health growth per boon reduced from 41 to 34 Leaping Slash Heal reduced from 50 to 40 Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1 Holliday Powder Keg T2 bonus damage reduced from 100 to 80 Crackshot T2 bonus damage reduced from 85 to 60 Mirage Djinn\'s Mark T2 reduced from +4s Multiplier Duration to +2.5s Seven Health Regen reduced from 3 to 1.5 Sinclair Vexing Bolt cooldown increased from 15 to 24 Vexing Bolt T1 changed from -4s Cooldown to "Bolt Apply -25% Fire Rate for 5s" Vexing Bolt T2 changed from "Bolt Apply -25% Fire Rate for 5s" to -13s Cooldown Vindicta Crow Familiar duration spirit scaling reduced from 0.03 to 0.024 Crow Familiar Health Drain reduced from 3% to 2.3% Infuser Spirit Lifesteal reduced from 20% to 15% Bonus Spirit reduced from 16 to 13',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-03-21',
			to: '2025-04-04'
		},
		after: {
			from: '2025-04-05',
			to: '2025-04-18'
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
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Leaping Slash Heal',
		id: 'leaping-slash-heal'
	},
	{
		level: 3,
		title: 'Leaping Slash Heal Spirit Scaling',
		id: 'leaping-slash-heal-spirit-scaling'
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
		title: 'Crackshot',
		id: 'crackshot'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Vexing Bolt',
		id: 'vexing-bolt'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
	},
	{
		level: 3,
		title: 'Crow Familiar Health Drain',
		id: 'crow-familiar-health-drain'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Infuser',
		id: 'infuser'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-03-21',
			to: '2025-04-04'
		},
		after: {
			from: '2025-04-05',
			to: '2025-04-18'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Calico',
			id: 'calico'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'item',
			name: 'Infuser',
			id: 'infuser'
		}
	],
	related: []
};
function _4_04_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added an option to allow canceling abilities with the ability key to the main options page.</li><li>Soul orb spawn delay range increased from 0.2-0.7 to 0.4-0.7</li><li>Soul orb size increased by 10%</li><li>Soul orb lag compensation buffer increased from 120ms to 140ms</li><li>Fixed issues with denying melee soul orbs</li><li>Fixed various other timing related bugs with Soul orbs</li><li>Fixed shotguns doing too much damage to Guardians</li><li>Removed the outer lanes teleporters</li><li>Sprint increased by +0.5 for all heroes</li><li>Removed the top of the mid arch from being able to be occupied</li><li>Lifesteal provided by things like Soul Shredder bullets now properly diminishes in stacking with other sources of lifesteal</li><li>Fix an edge case where a player can claim the Rejuv but also get parried</li><li>Fixed spellslinger headshots providing more bonuses than intended</li><li>Fixed some misc mispredictions during Ice Path movement</li><li>Fixed Ice Path being overly sticky for allies</li><li>Fixed Ivy, Viscous and Magic Carpet moving faster than desired when holding the soul urn</li><li>Urn reveal time reduced from 25s to 15s</li><li>Urn speed limit increased from 13 m/s to 15 m/s</li><li>Wall Jump&#x27;s behavior has been reworked so that lateral velocity is now modified by WASD movement direction into/away from the wall</li><li>Mantle now requires pushing WASD Direction toward a ledge</li><li>Improved Camera positions while character is backed up against walls</li><li>When attaching to a zipline, movement direction can override the travel direction</li><li>When holding &quot;Jump/Mantle&quot; after attaching to a rope, continue to move up the rope</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_4_04_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Health growth per boon reduced from 41 to 34</li></ul>\n')} <div class="ability leaping-slash-heal">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash Heal change history</a></p>\n<h4 id="leaping-slash-heal"><a href="/ability/leaping-slash">Leaping Slash Heal</a></h4>\n<ul><li>Leaping Slash Heal reduced from 50 to 40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash Heal'
	});
	$$renderer.push(
		`<!----></div> <div class="ability leaping-slash-heal-spirit-scaling">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash Heal Spirit Scaling change history</a></p>\n<h4 id="leaping-slash-heal-spirit-scaling"><a href="/ability/leaping-slash">Leaping Slash Heal Spirit Scaling</a></h4>\n<ul><li>Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash Heal Spirit Scaling'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg T2 bonus damage reduced from 100 to 80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crackshot">${html('\n<p><a href="/ability/crackshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crackshot change history</a></p>\n<h4 id="crackshot"><a href="/ability/crackshot">Crackshot</a></h4>\n<ul><li>Crackshot T2 bonus damage reduced from 85 to 60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Crackshot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark T2 reduced from +4s Multiplier Duration to +2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero seven">\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Health Regen reduced from 3 to 1.5</li></ul>\n</div>\n')} <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n')} <div class="ability vexing-bolt">${html('\n<p><a href="/ability/vexing-bolt"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Vexing Bolt change history</a></p>\n<h4 id="vexing-bolt"><a href="/ability/vexing-bolt">Vexing Bolt</a></h4>\n')} <ul><li>${html('Vexing Bolt cooldown increased from 15 to 24')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Vexing Bolt cooldown increased from 15 to 24'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Vexing Bolt T1 changed from -4s Cooldown to &quot;Bolt Apply -25% Fire Rate for 5s&quot;')}</li> <li>${html('Vexing Bolt T2 changed from &quot;Bolt Apply -25% Fire Rate for 5s&quot; to -13s Cooldown')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Vexing Bolt'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar duration spirit scaling reduced from 0.03 to 0.024</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar-health-drain">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar Health Drain change history</a></p>\n<h4 id="crow-familiar-health-drain"><a href="/ability/crow-familiar">Crow Familiar Health Drain</a></h4>\n<ul><li>Crow Familiar Health Drain reduced from 3% to 2.3%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar Health Drain'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_4_04_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Spirit Lifesteal reduced from 20% to 15%</li><li>Bonus Spirit reduced from 16 to 13</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _4_04_mg as default, metadata, readingManifest, toc };
