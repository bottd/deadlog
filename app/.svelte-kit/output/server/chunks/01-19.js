import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/01-19.mg?embed=0
function _1_19_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Calico',
			'Holliday',
			'Kelvin',
			'Mirage',
			'Shiv',
			'Vindicta',
			'Vyper',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2025/01-19.mg?embed=1
function _1_19_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Alchemical Fire', 'Extra Stamina', "Hunter's Aura", 'Sharpshooter']
	});
}
//#endregion
//#region changelogs/2025/01-19.mg
var metadata = {
	title: '01-19-2025 Update',
	thread_id: '53961',
	published: '2025-01-19T16:02:37-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"The Magnificent Sinclair: Rabbit Hex movespeed increased from 25% to 35% The Magnificent Sinclair: Rabbit Hex can no longer be applied to Unstoppable The Magnificent Sinclair: Rabbit Hex now triggers Reactive Barrier The Magnificent Sinclair: Fixed Debuff Reducer not working on Rabbit The Magnificent Sinclair: Teleporting now drops the Urn The Magnificent Sinclair: Vexing Bolt base damage reduced from 120 to 110 The Magnificent Sinclair: Spectral Assistant base cooldown increased from 30s to 40s The Magnificent Sinclair: Spectral Assistant base duration decreased from 8s to 6s All heroes base gun damage and growth reduced by 10% (numbers listed above are before this global reduction) Bebop Hook T1 reduced from 30% more weapon damage to 25% Exploding Uppercut T2 reduced from +60% weapon damage to +50% Sticky Bomb damage reduced from 120 to 110 Sticky Bomb T2 reduced from +80 Damage to +75 Calico Bullet Damage increased from 2 to 2.2 Leaping Slash Radius increased from 4m to 4.5m Leaping Slash T2 damage increased from +50 to +75 Ava now destroys breakables it runs through Ava T2 increased from 25% movespeed to 35% Holliday Bullet damage growth increased from 1.5 to 1.7 Powder Keg T2 reduced from 140 to 120 Crackshot now triggers on units. Uses half cooldown when triggered this way. Crackshot damage reduced from 75 to 60 Crackshot spirit scaling increased from 1 to 1.2 Crackshot T2 increased from 75 to 85 Crackshot T3 now also has -2s on creeps Fixed Crackshot applying Slowing Hex's anti-teleport debuff Spirit Lasso T2 duration increased from +0.5 to +0.75 Fixed height on damage from Bounce Pad sometimes causing it to not hurt heroes on your lasso Kelvin Health increased from 600 to 650 Mirage Fire Scarabs Max Health Steal reduced from 75 to 50 Fire Scarabs Max Health Steal spirit scaling increased from 0.9 to 1.4 Shiv Bullet Damage reduced from 5.7 to 5.5 Slice and Dice damage reduced from 110 to 100 Slice and Dice T2 reduced from +70 to +60 Slice and Dice spirit scaling increased from 1.3 to 1.55 Bloodletting deferred damage duration reduced from 13s to 12s Bloodletting cooldown increased from 50s to 60s Vindicta Movespeed reduced from 9 to 8 Bullet Velocity reduced from 810 to 740 Vyper Bullet Damage decreased from 9 to 7 Move Speed reduced from 7.3 to 7.0 Lethal Venom Max Damage reduced from 200 to 180 Slither T3 spirit and bullet resist while sliding reduced from +30% to +25% Wraith Card Trick spirit scaling reduced from 1.1 to 0.9 Card Trick cooldown increased from 0.65 to 0.75 Card Trick summon rate from non-heroes reduced from 0.35 to 0.25 Telekinesis silence and disarm duration increased from 2.5s to 3s Telekinesis cast delay reduced from 0.4s to 0.3s Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher Yamato Bullet damage growth reduced from 0.27 to 0.24 Extra Stamina Fire Rate reduced from 5% to 4% Alchemical Fire Reduced from -40% Effectiveness vs non-heroes to -50% Weapon Damage in radius reduced from +50% to +40% Hunter's Aura Bullet Resist Reduction reduced from -9% to -8% Fire Rate Slow increased from -9% to -10% Sharpshooter Weapon Damage reduced from 30% to 20% Movespeed penalty increased from -0.5 to -1",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-18',
			to: '2025-01-20'
		},
		after: {
			from: '2025-01-21',
			to: '2025-01-28'
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
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 3,
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Leaping Slash Radius',
		id: 'leaping-slash-radius'
	},
	{
		level: 3,
		title: 'Leaping Slash',
		id: 'leaping-slash'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
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
		level: 3,
		title: 'Spirit Lasso',
		id: 'spirit-lasso'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
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
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Lethal Venom Max Damage',
		id: 'lethal-venom-max-damage'
	},
	{
		level: 3,
		title: 'Slither',
		id: 'slither'
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
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Alchemical Fire',
		id: 'alchemical-fire'
	},
	{
		level: 2,
		title: 'Extra Stamina',
		id: 'extra-stamina'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Sharpshooter',
		id: 'sharpshooter'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-01-18',
			to: '2025-01-20'
		},
		after: {
			from: '2025-01-21',
			to: '2025-01-28'
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
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Extra Stamina',
			id: 'extra-stamina'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Sharpshooter',
			id: 'sharpshooter'
		}
	],
	related: []
};
function _1_19_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>The Magnificent Sinclair: Rabbit Hex movespeed increased from 25% to 35%</li><li>The Magnificent Sinclair: Rabbit Hex can no longer be applied to Unstoppable</li><li>The Magnificent Sinclair: Rabbit Hex now triggers Reactive Barrier</li><li>The Magnificent Sinclair: Fixed Debuff Reducer not working on Rabbit</li><li>The Magnificent Sinclair: Teleporting now drops the Urn</li><li>The Magnificent Sinclair: Vexing Bolt base damage reduced from 120 to 110</li><li>The Magnificent Sinclair: Spectral Assistant base cooldown increased from 30s to 40s</li><li>The Magnificent Sinclair: Spectral Assistant base duration decreased from 8s to 6s</li><li>All heroes base gun damage and growth reduced by 10% (numbers listed above are before this global reduction)</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_1_19_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook T1 reduced from 30% more weapon damage to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Exploding Uppercut T2 reduced from +60% weapon damage to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n')} <ul><li>${html('Sticky Bomb damage reduced from 120 to 110')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Sticky Bomb damage reduced from 120 to 110'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sticky Bomb T2 reduced from +80 Damage to +75')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Bullet Damage increased from 2 to 2.2</li></ul>\n')} <div class="ability leaping-slash-radius">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash Radius change history</a></p>\n<h4 id="leaping-slash-radius"><a href="/ability/leaping-slash">Leaping Slash Radius</a></h4>\n<ul><li>Leaping Slash Radius increased from 4m to 4.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash Radius'
	});
	$$renderer.push(
		`<!----></div> <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n')} <ul><li>${html('Leaping Slash T2 damage increased from +50 to +75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Leaping Slash T2 damage increased from +50 to +75'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava now destroys breakables it runs through</li><li>Ava T2 increased from 25% movespeed to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n<ul><li>Bullet damage growth increased from 1.5 to 1.7</li></ul>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg T2 reduced from 140 to 120</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crackshot">${html('\n<p><a href="/ability/crackshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crackshot change history</a></p>\n<h4 id="crackshot"><a href="/ability/crackshot">Crackshot</a></h4>\n')} <ul><li>${html('Crackshot now triggers on units. Uses half cooldown when triggered this way.')}</li> <li>${html('Crackshot damage reduced from 75 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Crackshot damage reduced from 75 to 60'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Crackshot spirit scaling increased from 1 to 1.2')}</li> <li>${html('Crackshot T2 increased from 75 to 85')}</li> <li>${html('Crackshot T3 now also has -2s on creeps')}</li> <li>${html('Fixed Crackshot applying Slowing Hex&#x27;s anti-teleport debuff')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Crackshot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spirit-lasso">${html('\n<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>\n<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>\n<ul><li>Spirit Lasso T2 duration increased from +0.5 to +0.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Spirit Lasso'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n<ul><li>Fixed height on damage from Bounce Pad sometimes causing it to not hurt heroes on your lasso</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero kelvin">\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Health increased from 600 to 650</li></ul>\n</div>\n')} <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs Max Health Steal reduced from 75 to 50</li><li>Fire Scarabs Max Health Steal spirit scaling increased from 0.9 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Bullet Damage reduced from 5.7 to 5.5</li></ul>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n')} <ul><li>${html('Slice and Dice damage reduced from 110 to 100')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Slice and Dice damage reduced from 110 to 100'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Slice and Dice T2 reduced from +70 to +60')}</li> <li>${html('Slice and Dice spirit scaling increased from 1.3 to 1.55')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n')} <ul><li>${html('Bloodletting deferred damage duration reduced from 13s to 12s')}</li> <li>${html('Bloodletting cooldown increased from 50s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Bloodletting cooldown increased from 50s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero vindicta">\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Movespeed reduced from 9 to 8</li><li>Bullet Velocity reduced from 810 to 740</li></ul>\n</div>\n')} <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n<ul><li>Bullet Damage decreased from 9 to 7</li><li>Move Speed reduced from 7.3 to 7.0</li></ul>\n')} <div class="ability lethal-venom-max-damage">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom Max Damage change history</a></p>\n<h4 id="lethal-venom-max-damage"><a href="/ability/lethal-venom">Lethal Venom Max Damage</a></h4>\n<ul><li>Lethal Venom Max Damage reduced from 200 to 180</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom Max Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither T3 spirit and bullet resist while sliding reduced from +30% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick spirit scaling reduced from 1.1 to 0.9')}</li> <li>${html('Card Trick cooldown increased from 0.65 to 0.75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Card Trick cooldown increased from 0.65 to 0.75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Card Trick summon rate from non-heroes reduced from 0.35 to 0.25')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis silence and disarm duration increased from 2.5s to 3s</li><li>Telekinesis cast delay reduced from 0.4s to 0.3s</li><li>Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero yamato">\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Bullet damage growth reduced from 0.27 to 0.24</li></ul>\n</div>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_1_19_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Reduced from -40% Effectiveness vs non-heroes to -50%</li><li>Weapon Damage in radius reduced from +50% to +40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Fire Rate reduced from 5% to 4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Bullet Resist Reduction reduced from -9% to -8%</li><li>Fire Rate Slow increased from -9% to -10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Weapon Damage reduced from 30% to 20%</li><li>Movespeed penalty increased from -0.5 to -1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _1_19_mg as default, metadata, readingManifest, toc };
