import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/02-11.mg?embed=0
function _2_11_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Calico', 'Holliday', 'Sinclair', 'Wraith']
	});
}
//#endregion
//#region changelogs/2025/02-11.mg?embed=1
function _2_11_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Ammo Scavenger', 'Extra Stamina', 'Restorative Shot']
	});
}
//#endregion
//#region changelogs/2025/02-11.mg
var metadata = {
	title: '02-11-2025 Update',
	thread_id: '55677',
	published: '2025-02-11T16:23:52-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Calico Leaping Slash T2 damage decreased from +75 to +60 Return to Shadows cooldown increased from 90s to 100s Return to Shadows speed reduced from +50% to +30% Return to Shadows T2 now also grants +20% speed Holliday Powder Keg cooldown between charges increased from 2s to 3.5s Bounce Pad T2 damage reduced from +100 to +80 Sinclair Bullet Damage reduced by 15% Bullet velocity increased from 86 to 340 Spectral Assistant now has new VFX Rabbit Hex targeting mechanism has been reworked. It is now an AoE target ability in the base. It has a 0.7s delay before the area is affected. Cast range increased from 20m to 30m, Movespeed reduced from 35% to 15% and cooldown reduced from 45s to 35s. Rabbit Hex now has new VFX Audience Participation range increased from 10m to 20m Audience Participation copy duration decreased from 20s to 10s Various new and improved SFX Wraith Card Trick base radius reduced from 5m to 4m Telekinesis base damage reduced from 175 to 140 Ammo Scavenger Max Stacks reduced from 20 to 18 No longer grants +40 health Extra Stamina No longer grants +4% Fire Rate Restorative Shot No longer grants +3% Weapon Damage',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-29',
			to: '2025-02-12'
		},
		after: {
			from: '2025-02-13',
			to: '2025-02-25'
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
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Leaping Slash',
		id: 'leaping-slash'
	},
	{
		level: 3,
		title: 'Return to Shadows',
		id: 'return-to-shadows'
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
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Spectral Assistant',
		id: 'spectral-assistant'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex'
	},
	{
		level: 3,
		title: 'Audience Participation',
		id: 'audience-participation'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
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
	},
	{
		level: 2,
		title: 'Extra Stamina',
		id: 'extra-stamina'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-29',
			to: '2025-02-12'
		},
		after: {
			from: '2025-02-13',
			to: '2025-02-25'
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
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'item',
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		},
		{
			kind: 'item',
			name: 'Extra Stamina',
			id: 'extra-stamina'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		}
	],
	related: []
};
function _2_11_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_2_11_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n')} <ul><li>${html('Leaping Slash T2 damage decreased from +75 to +60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Leaping Slash T2 damage decreased from +75 to +60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n')} <ul><li>${html('Return to Shadows cooldown increased from 90s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Return to Shadows cooldown increased from 90s to 100s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Return to Shadows speed reduced from +50% to +30%')}</li> <li>${html('Return to Shadows T2 now also grants +20% speed')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg cooldown between charges increased from 2s to 3.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n')} <ul><li>${html('Bounce Pad T2 damage reduced from +100 to +80')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Bounce Pad T2 damage reduced from +100 to +80'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n<ul><li>Bullet Damage reduced by 15%</li><li>Bullet velocity increased from 86 to 340</li></ul>\n')} <div class="ability spectral-assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>\n<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>\n<ul><li>Spectral Assistant now has new VFX</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Spectral Assistant'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n<ul><li>Rabbit Hex targeting mechanism has been reworked. It is now an AoE target ability in the base. It has a 0.7s delay before the area is affected. Cast range increased from 20m to 30m, Movespeed reduced from 35% to 15% and cooldown reduced from 45s to 35s.</li><li>Rabbit Hex now has new VFX</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div> <div class="ability audience-participation">${html('\n<p><a href="/ability/audience-participation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Audience Participation change history</a></p>\n<h4 id="audience-participation"><a href="/ability/audience-participation">Audience Participation</a></h4>\n<ul><li>Audience Participation range increased from 10m to 20m</li><li>Audience Participation copy duration decreased from 20s to 10s</li><li>Various new and improved SFX</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Audience Participation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick base radius reduced from 5m to 4m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Card Trick base radius reduced from 5m to 4m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n')} <ul><li>${html('Telekinesis base damage reduced from 175 to 140')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Telekinesis base damage reduced from 175 to 140'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_2_11_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Max Stacks reduced from 20 to 18</li><li>No longer grants +40 health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>No longer grants +4% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>No longer grants +3% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _2_11_mg as default, metadata, readingManifest, toc };
