import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/05-11.mg?embed=0
function _5_11_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Lady Geist', 'Pocket', 'Shiv', 'Vyper']
	});
}
//#endregion
//#region changelogs/2025/05-11.mg?embed=1
function _5_11_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Boundless Spirit',
			'Capacitor',
			'Cultist Sacrifice',
			'Decay',
			'Divine Barrier',
			'Fleetfoot',
			'Headhunter',
			'Inhibitor',
			'Mercurial Magnum',
			'Silence Wave',
			'Spirit Burn',
			'Spirit Rend',
			'Split Shot',
			'Tankbuster'
		]
	});
}
//#endregion
//#region changelogs/2025/05-11.mg
var metadata = {
	title: '05-11-2025 Update',
	thread_id: '64113',
	published: '2025-05-11T12:06:03-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Weapon tree investment bonus increased by 6-12% (from 6/8/12/18/26/36/52/68/78/88% to 7/9/13/20/29/40/58/72/83/93) Spirit Power scaling globally reduced by -7% Kelvin Beam: Arctic Beam DPS reduced from 60 to 50 Mystic Regen: Duration reduced from 6s to 5s Mystic Regen: Spirit Power scaling reduced from 0.06 to 0.05 Lady Geist Malice now costs 6% of your Current HP Malice damage reduced from 32 to 25 Malice damage spirit scaling reduced from 0.72 to 0.6 T2 Malice reduced from 40 to 30 Shiv Slice and Dice damage reduced from 100 to 80 Bullet damage growth reduced from 0.246 to 0.22 Vyper Lethal Venom T2 reduced from -60% Healing Reduction to -40% Slither T3 reduced from +25% Resist to +20% Pocket Affliction duration reduced from 14s to 12s Fleetfoot Cooldown reduced from 12s to 11s Split Shot Shot count increased from 4 to 5 Active Reload Cooldown reduced from 14s to 12s Headhunter Bonus Headshot damage reduced from 150 to 120 Spirit Rend Cooldown increased from 2s to 2.5s Cultist Sacrifice Health reduced from 350 to 300 Capacitor Cooldown increased from 30s to 40s Divine Barrier Cooldown increased from 36s to 45s Inhibitor Duration increased from 2.5s to 3s Silence Wave Cooldown increased from 24s to 28s Tankbuster Fixed working on mid boss and objectives Decay Spirit power scaling reduced from 0.007 to 0.005 Cooldown increased from 22s to 24s Cast range spirit scaling reduced from 0.16 to 0.14 Boundless Spirit Heal reduced from 100 to 75 Mercurial Magnum Fire Rate bonus reduced from +30% to +25% Spirit Power scaling reduced from 0.6 to 0.5 Spirit Burn Healing Reduction reduced from -80% to -70%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-09',
			to: '2025-05-11'
		},
		after: {
			from: '2025-05-12',
			to: '2025-05-20'
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
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction'
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
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Lethal Venom',
		id: 'lethal-venom'
	},
	{
		level: 3,
		title: 'Slither',
		id: 'slither'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Active Reload',
		id: 'active-reload'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Capacitor',
		id: 'capacitor'
	},
	{
		level: 2,
		title: 'Cultist Sacrifice',
		id: 'cultist-sacrifice'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Headhunter',
		id: 'headhunter'
	},
	{
		level: 2,
		title: 'Inhibitor',
		id: 'inhibitor'
	},
	{
		level: 2,
		title: 'Mercurial Magnum',
		id: 'mercurial-magnum'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Spirit Burn',
		id: 'spirit-burn'
	},
	{
		level: 2,
		title: 'Spirit Rend',
		id: 'spirit-rend'
	},
	{
		level: 2,
		title: 'Split Shot',
		id: 'split-shot'
	},
	{
		level: 2,
		title: 'Tankbuster',
		id: 'tankbuster'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-09',
			to: '2025-05-11'
		},
		after: {
			from: '2025-05-12',
			to: '2025-05-20'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Lady Geist',
			id: 'lady-geist'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'item',
			name: 'Active Reload',
			id: 'active-reload'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Capacitor',
			id: 'capacitor'
		},
		{
			kind: 'item',
			name: 'Cultist Sacrifice',
			id: 'cultist-sacrifice'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Headhunter',
			id: 'headhunter'
		},
		{
			kind: 'item',
			name: 'Inhibitor',
			id: 'inhibitor'
		},
		{
			kind: 'item',
			name: 'Mercurial Magnum',
			id: 'mercurial-magnum'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Spirit Burn',
			id: 'spirit-burn'
		},
		{
			kind: 'item',
			name: 'Spirit Rend',
			id: 'spirit-rend'
		},
		{
			kind: 'item',
			name: 'Split Shot',
			id: 'split-shot'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
		}
	],
	related: []
};
function _5_11_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Weapon tree investment bonus increased by 6-12% (from 6/8/12/18/26/36/52/68/78/88% to 7/9/13/20/29/40/58/72/83/93)</li><li>Spirit Power scaling globally reduced by -7%</li><li>Kelvin Beam: Arctic Beam DPS reduced from 60 to 50</li><li>Mystic Regen: Duration reduced from 6s to 5s</li><li>Mystic Regen: Spirit Power scaling reduced from 0.06 to 0.05</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_11_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n')} <ul><li>${html('Malice now costs 6% of your Current HP')}</li> <li>${html('Malice damage reduced from 32 to 25')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Malice damage reduced from 32 to 25'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Malice damage spirit scaling reduced from 0.72 to 0.6')}</li> <li>${html('T2 Malice reduced from 40 to 30')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction duration reduced from 14s to 12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n')} <ul><li>${html('Slice and Dice damage reduced from 100 to 80')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Slice and Dice damage reduced from 100 to 80'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage growth reduced from 0.246 to 0.22</li></ul>\n')}</div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability lethal-venom">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom change history</a></p>\n<h4 id="lethal-venom"><a href="/ability/lethal-venom">Lethal Venom</a></h4>\n<ul><li>Lethal Venom T2 reduced from -60% Healing Reduction to -40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither T3 reduced from +25% Resist to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_11_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n')} <ul><li>${html('Cooldown reduced from 14s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 14s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Heal reduced from 100 to 75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Health reduced from 350 to 300</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Spirit power scaling reduced from 0.007 to 0.005')}</li> <li>${html('Cooldown increased from 22s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 22s to 24s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Cast range spirit scaling reduced from 0.16 to 0.14')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 36s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 36s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n')} <ul><li>${html('Cooldown reduced from 12s to 11s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 12s to 11s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headhunter">${html('\n<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>\n<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>\n<ul><li>Bonus Headshot damage reduced from 150 to 120</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Duration increased from 2.5s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mercurial-magnum">${html('\n<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>\n<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>\n<ul><li>Fire Rate bonus reduced from +30% to +25%</li><li>Spirit Power scaling reduced from 0.6 to 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mercurial Magnum',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n')} <ul><li>${html('Cooldown increased from 24s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 24s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>Healing Reduction reduced from -80% to -70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n')} <ul><li>${html('Cooldown increased from 2s to 2.5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 2s to 2.5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item split-shot">${html('\n<p><a href="/item/split-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Split Shot patch history</a></p>\n<h3 id="split-shot"><a href="/item/split-shot">Split Shot</a></h3>\n<ul><li>Shot count increased from 4 to 5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n<ul><li>Fixed working on mid boss and objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_11_mg as default, metadata, readingManifest, toc };
