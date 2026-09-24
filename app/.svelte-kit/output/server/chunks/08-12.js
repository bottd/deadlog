import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/08-12.mg?embed=0
function _8_12_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Apollo',
			'Billy',
			'Doorman',
			'Drifter',
			'Holliday',
			'Ivy',
			'Lash',
			'McGinnis',
			'Paige',
			'Seven',
			'Vindicta',
			'Vyper',
			'Wraith'
		]
	});
}
//#endregion
//#region changelogs/2026/08-12.mg
var metadata = {
	title: 'Minor Update - 08-12-2026',
	alias: '2026/minor-08-12',
	thread_id: '162570',
	steam_gid: '1840944183775204',
	published: '2026-08-12T22:57:44.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Apollo Riposte melee resist reduction increased from -22% to -25% Riposte T2 changed from "-30% Melee Resist" to "-25% Melee Resist and +0.4s Stun Duration" Riposte T3 increased from 60% Lifesteal for 7s to 75% Lifesteal for 13s Fixed Itani Lo Sahn being canceled with movement abilities Billy Base health regen reduced from 2.5 to 2.0 Rising Ram T3 changed from "On Impact: Deal 7% max health as spirit damage" to "On hero hit: +10% Max HP for 16s" Chain Gang spirit scaling reduced from 1 to 0.7 Doorman Doorway range reduced from 70m to 65m Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets Drifter Rend spirit scaling reduced from 1.7 to 1.4 Stalker\'s Mark cooldown increased from 24s to 26s Stalker\'s Mark T2 reduced from -12s Cooldown to -10s Holliday Powder Keg now does half its damage immediately and half over 3s as a damage over time burn (same overall damage, multiple instances stack) Ivy Stone Form T3 stun duration reduced from +1s to +0.75s Lash Falloff range reduced from 20m->58m to 18m->54m McGinnis Bullet damage base and growth values reduced by 5% Spirit Resist per boon reduced from +0.625% to +0.35% Mini Turrets no longer shoots heroes on ziplines Mini Turrets no longer have 80% decaying resist for the first 6s Mini Turrets health increased from 90 + 7.8/boon to 100 + 9/boon Medicinal Specter T1 changed from "Provides +40% Spirit Resist" to "+1.5s Duration" Medicinal Specter T3 no longer increases duration by +1.5s Medicinal Specter T3 now also increases spirit resistance by +40% Paige Plot Armor weapon damage scaling increased from 0.2 to 0.3 Seven Lightning Ball T3 radius increased from +1.5m to +1.75m Vindicta Stake T1 reduced from +65 Damage to +45 Vyper Petrifying Bola radius increased from 8m to 12m Petrifying Bola petrify duration increased from 2s to 2.2s Wraith Card Trick Heart heal spirit scaling reduced from 1 to 0.75 Full Auto T3 spirit scaling reduced from +0.06 to +0.045',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-31',
			to: '2026-08-12'
		},
		after: {
			from: '2026-08-13',
			to: '2026-08-22'
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
		title: 'Apollo',
		id: 'apollo'
	},
	{
		level: 3,
		title: 'Riposte',
		id: 'riposte'
	},
	{
		level: 3,
		title: 'Itani Lo Sahn',
		id: 'itani-lo-sahn'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Doorway',
		id: 'doorway'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend'
	},
	{
		level: 3,
		title: "Stalker's Mark",
		id: 'stalker-s-mark'
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
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
	},
	{
		level: 3,
		title: 'Plot Armor',
		id: 'plot-armor'
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
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Petrifying Bola',
		id: 'petrifying-bola'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Card Trick Heart',
		id: 'card-trick-heart'
	},
	{
		level: 3,
		title: 'Full Auto',
		id: 'full-auto'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-31',
			to: '2026-08-12'
		},
		after: {
			from: '2026-08-13',
			to: '2026-08-22'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Apollo',
			id: 'apollo'
		},
		{
			kind: 'hero',
			name: 'Billy',
			id: 'billy'
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
			name: 'Holliday',
			id: 'holliday'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Lash',
			id: 'lash'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Paige',
			id: 'paige'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
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
		}
	],
	related: []
};
function _8_12_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_12_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Riposte melee resist reduction increased from -22% to -25%</li><li>Riposte T2 changed from &quot;-30% Melee Resist&quot; to &quot;-25% Melee Resist and +0.4s Stun Duration&quot;</li><li>Riposte T3 increased from 60% Lifesteal for 7s to 75% Lifesteal for 13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div> <div class="ability itani-lo-sahn">${html('\n<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>\n<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>\n<ul><li>Fixed Itani Lo Sahn being canceled with movement abilities</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Itani Lo Sahn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Base health regen reduced from 2.5 to 2.0</li></ul>\n')} <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram T3 changed from &quot;On Impact: Deal 7% max health as spirit damage&quot; to &quot;On hero hit: +10% Max HP for 16s&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n<ul><li>Chain Gang spirit scaling reduced from 1 to 0.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorway range reduced from 70m to 65m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off</li><li>Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend spirit scaling reduced from 1.7 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stalker-s-mark">${html('\n<p><a href="/ability/stalkers-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stalker&#x27;s Mark change history</a></p>\n<h4 id="stalker-s-mark"><a href="/ability/stalkers-mark">Stalker&#x27;s Mark</a></h4>\n')} <ul><li>${html('Stalker&#x27;s Mark cooldown increased from 24s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 1,
		bulletIndex: 0,
		text: "Stalker's Mark cooldown increased from 24s to 26s"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Stalker&#x27;s Mark T2 reduced from -12s Cooldown to -10s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: "Stalker's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg now does half its damage immediately and half over 3s as a damage over time burn (same overall damage, multiple instances stack)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form T3 stun duration reduced from +1s to +0.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero lash">\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Falloff range reduced from 20m-&gt;58m to 18m-&gt;54m</li></ul>\n</div>\n')} <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Bullet damage base and growth values reduced by 5%</li><li>Spirit Resist per boon reduced from +0.625% to +0.35%</li></ul>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets no longer shoots heroes on ziplines</li><li>Mini Turrets no longer have 80% decaying resist for the first 6s</li><li>Mini Turrets health increased from 90 + 7.8/boon to 100 + 9/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter T1 changed from &quot;Provides +40% Spirit Resist&quot; to &quot;+1.5s Duration&quot;</li><li>Medicinal Specter T3 no longer increases duration by +1.5s</li><li>Medicinal Specter T3 now also increases spirit resistance by +40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability plot-armor">${html('\n<p><a href="/ability/plot-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Plot Armor change history</a></p>\n<h4 id="plot-armor"><a href="/ability/plot-armor">Plot Armor</a></h4>\n<ul><li>Plot Armor weapon damage scaling increased from 0.2 to 0.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Plot Armor'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n')} <ul><li>${html('Lightning Ball T3 radius increased from +1.5m to +1.75m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lightning Ball T3 radius increased from +1.5m to +1.75m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake T1 reduced from +65 Damage to +45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability petrifying-bola">${html('\n<p><a href="/ability/petrifying-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Petrifying Bola change history</a></p>\n<h4 id="petrifying-bola"><a href="/ability/petrifying-bola">Petrifying Bola</a></h4>\n')} <ul><li>${html('Petrifying Bola radius increased from 8m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Petrifying Bola radius increased from 8m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Petrifying Bola petrify duration increased from 2s to 2.2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Petrifying Bola'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick-heart">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Heart change history</a></p>\n<h4 id="card-trick-heart"><a href="/ability/card-trick">Card Trick Heart</a></h4>\n<ul><li>Card Trick Heart heal spirit scaling reduced from 1 to 0.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick Heart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>\n<ul><li>Full Auto T3 spirit scaling reduced from +0.06 to +0.045</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _8_12_mg as default, metadata, readingManifest, toc };
