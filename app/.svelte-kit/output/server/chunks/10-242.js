import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/10-24.mg?embed=0
function _0_24_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Calico',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Infernus',
			'Kelvin',
			'McGinnis',
			'Paradox',
			'Seven',
			'Shiv',
			'Victor',
			'Vyper',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2025/10-24.mg?embed=1
function _0_24_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Capacitor',
			'Divine Barrier',
			'Ethereal Shift',
			'Fortitude',
			'Guardian Ward',
			'Majestic Leap',
			'Mystic Shot',
			'Reactive Barrier',
			'Rusted Barrel',
			'Silence Wave',
			'Spirit Shielding',
			'Spirit Snatch',
			'Trophy Collector',
			'Warp Stone',
			'Weapon Shielding'
		]
	});
}
//#endregion
//#region changelogs/2025/10-24.mg
var metadata = {
	title: '10-24-2025 Update',
	thread_id: '87198',
	published: '2025-10-24T16:54:51-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines). Curse: Cooldown reduced from 50s to 45s Calico Gloom Bombs cooldown increased from 10s to 12s Gloom Bombs base damage from 55 to 45 Gloom Bombs spirit scaling reduced from 0.74 to 0.64 Gloom Bombs multi bomb damage ratio increased from 50% to 65% Ava no longer replenishes stamina on usage Doorman Bullet damage growth per boon reduced from 1.15 to 1.0 Outgoing headshot damage multiplier reduced by 25% Call Bell explosion damage spirit scaling increased from 1.5 to 1.7 Drifter Bloodscent isolated kill bonus reduced from 5% to 4% Base bullet damage increased from 20.9 to 21.3 Bullet damage growth increased from 0.52 to 0.56 Dynamo Quantum Entanglement Fire Rate increased from +25% to +30% Rejuvenating Aurora cooldown reduced from 48s to 45s Infernus Bullet damage growth per boon reduced from 0.12 to 0.08 Flame Dash T2 reduced from +35 to +30 Afterburn T1 reduced from -25% Spirit Damage to -20% Afterburn T3 reduced from +28 DPS to +26 Kelvin Base regen reduced from 2 to 1 Headshot reduction reduced from -20% to -25% Frozen Shelter cooldown increased from 150s to 170s McGinnis Medicinal Specter now has a 1s linger time Paradox Base bullet damage reduced from 6.48 to 6.15 Paradoxical Swap cooldown increased from 70s to 75s Seven Lightning Ball spirit scaling increased from 0.43 to 0.55 Shiv Alt fire knockback reduced by 10% Victor Pain Battery T1 and T2 swapped Aura of Suffering max damage reduced from 80 to 70 Aura of Suffering T2 reduced from +10/50 to +8/40 Vyper Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4 Warden Base bullet damage increased from 15 to 16.2 Binding Word range increased from 19m to 20m Mystic Shot Base damage reduced from 55 to 45 Spirit scaling increased from 0.65 to 0.75 Warp Stone Bullet Resist reduced from 40% to 35% Capacitor Fire Rate reduced from 8% to 5% Cooldown increased from 40s to 60s Guardian Ward Cooldown increased from 40s to 45s Reactive Barrier Cooldown increased from 24s to 26s Spirit Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Weapon Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Fortitude Damage taken duration to regen reduced from 14s to 13s Trophy Collector Souls per Minute increased from 25 to 30 Majestic Leap Cooldown increased from 28s to 32s Divine Barrier Cooldown increased from 40s to 45s Rusted Barrel Bonus health increased from 60 to 70 Silence Wave Cooldown increased from 30s to 35s (affects component) Spirit Snatch Duration reduced from 14s to 10s Bonus damage reduced from 75 to 50 Ethereal Shift Cooldown increased from 20s to 45s Movespeed during phase reduced from 4m to 3m Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-10-10',
			to: '2025-10-24'
		},
		after: {
			from: '2025-10-25',
			to: '2025-11-08'
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
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Call Bell',
		id: 'call-bell'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Bloodscent',
		id: 'bloodscent'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Quantum Entanglement Fire Rate',
		id: 'quantum-entanglement-fire-rate'
	},
	{
		level: 3,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
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
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
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
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Lightning Ball',
		id: 'lightning-ball'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Pain Battery',
		id: 'pain-battery'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Screwjab Dagger',
		id: 'screwjab-dagger'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Capacitor',
		id: 'capacitor'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Rusted Barrel',
		id: 'rusted-barrel'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Spirit Shielding',
		id: 'spirit-shielding'
	},
	{
		level: 2,
		title: 'Spirit Snatch',
		id: 'spirit-snatch'
	},
	{
		level: 2,
		title: 'Trophy Collector',
		id: 'trophy-collector'
	},
	{
		level: 2,
		title: 'Warp Stone',
		id: 'warp-stone'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-10-10',
			to: '2025-10-24'
		},
		after: {
			from: '2025-10-25',
			to: '2025-11-08'
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
			name: 'Doorman',
			id: 'doorman'
		},
		{
			kind: 'hero',
			name: 'Drifter',
			id: 'drifter'
		},
		{
			kind: 'hero',
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
		},
		{
			kind: 'hero',
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'item',
			name: 'Capacitor',
			id: 'capacitor'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Rusted Barrel',
			id: 'rusted-barrel'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Spirit Shielding',
			id: 'spirit-shielding'
		},
		{
			kind: 'item',
			name: 'Spirit Snatch',
			id: 'spirit-snatch'
		},
		{
			kind: 'item',
			name: 'Trophy Collector',
			id: 'trophy-collector'
		},
		{
			kind: 'item',
			name: 'Warp Stone',
			id: 'warp-stone'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		}
	],
	related: []
};
function _0_24_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines).</li><li>Curse: Cooldown reduced from 50s to 45s</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_24_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n')} <ul><li>${html('Gloom Bombs cooldown increased from 10s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Gloom Bombs cooldown increased from 10s to 12s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Gloom Bombs base damage from 55 to 45')}</li> <li>${html('Gloom Bombs spirit scaling reduced from 0.74 to 0.64')}</li> <li>${html('Gloom Bombs multi bomb damage ratio increased from 50% to 65%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava no longer replenishes stamina on usage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n<ul><li>Bullet damage growth per boon reduced from 1.15 to 1.0</li><li>Outgoing headshot damage multiplier reduced by 25%</li></ul>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n<ul><li>Call Bell explosion damage spirit scaling increased from 1.5 to 1.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability bloodscent">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>\n<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>\n<ul><li>Bloodscent isolated kill bonus reduced from 5% to 4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base bullet damage increased from 20.9 to 21.3</li><li>Bullet damage growth increased from 0.52 to 0.56</li></ul>\n')}</div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement-fire-rate">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement Fire Rate change history</a></p>\n<h4 id="quantum-entanglement-fire-rate"><a href="/ability/quantum-entanglement">Quantum Entanglement Fire Rate</a></h4>\n<ul><li>Quantum Entanglement Fire Rate increased from +25% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement Fire Rate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n')} <ul><li>${html('Rejuvenating Aurora cooldown reduced from 48s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rejuvenating Aurora cooldown reduced from 48s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n<ul><li>Bullet damage growth per boon reduced from 0.12 to 0.08</li></ul>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash T2 reduced from +35 to +30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T1 reduced from -25% Spirit Damage to -20%</li><li>Afterburn T3 reduced from +28 DPS to +26</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Base regen reduced from 2 to 1</li><li>Headshot reduction reduced from -20% to -25%</li></ul>\n')} <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n')} <ul><li>${html('Frozen Shelter cooldown increased from 150s to 170s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Frozen Shelter cooldown increased from 150s to 170s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter now has a 1s linger time</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Base bullet damage reduced from 6.48 to 6.15</li></ul>\n')} <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n')} <ul><li>${html('Paradoxical Swap cooldown increased from 70s to 75s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Paradoxical Swap cooldown increased from 70s to 75s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball spirit scaling increased from 0.43 to 0.55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero shiv">\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Alt fire knockback reduced by 10%</li></ul>\n</div>\n')} <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n')} <div class="ability pain-battery">${html('\n<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>\n<h4 id="pain-battery"><a href="/ability/pain-battery">Pain Battery</a></h4>\n<ul><li>Pain Battery T1 and T2 swapped</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Pain Battery'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering max damage reduced from 80 to 70</li><li>Aura of Suffering T2 reduced from +10/50 to +8/40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n<ul><li>Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base bullet damage increased from 15 to 16.2</li></ul>\n')} <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word range increased from 19m to 20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_24_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Fire Rate reduced from 8% to 5%')}</li> <li>${html('Cooldown increased from 40s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 40s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 40s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 40s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown increased from 20s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 20s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Movespeed during phase reduced from 4m to 3m')}</li> <li>${html('Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Damage taken duration to regen reduced from 14s to 13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n')} <ul><li>${html('Cooldown increased from 40s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 40s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown increased from 28s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 28s to 32s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Base damage reduced from 55 to 45')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Base damage reduced from 55 to 45'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit scaling increased from 0.65 to 0.75')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 24s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 24s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n<ul><li>Bonus health increased from 60 to 70</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n<ul><li>Cooldown increased from 30s to 35s (affects component)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>Barrier reduced from 325 to 300</li><li>Barrier boon scaling increased from 4 to 5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Duration reduced from 14s to 10s</li><li>Bonus damage reduced from 75 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Souls per Minute increased from 25 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Bullet Resist reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>Barrier reduced from 325 to 300</li><li>Barrier boon scaling increased from 4 to 5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_24_mg as default, metadata, readingManifest, toc };
