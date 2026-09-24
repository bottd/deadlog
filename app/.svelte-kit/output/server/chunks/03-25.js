import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/03-25.mg?embed=0
function _3_25_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Calico',
			'Celeste',
			'Doorman',
			'Graves',
			'Holliday',
			'Infernus',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mirage',
			'Rem',
			'Silver',
			'Venator',
			'Victor'
		]
	});
}
//#endregion
//#region changelogs/2026/03-25.mg
var metadata = {
	title: '03-25-2026 Update',
	thread_id: '121766',
	published: '2026-03-25T17:36:42-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Street Brawl: You now have all AP unlocked by round 5 Bebop Base health regen increased from 1.5 to 2.5 Calico Leaping Slash base damage increased from 50 to 60 Celeste Base regen reduced from 2 to 1 Dazzling Trick T3 silence duration reduced from +2s to +1.5s Doorman Call Bell slow increased from 30% to 35% Call Bell radius increased from 5m to 6m Doorway Distance increased from 60m to 70m Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall Luggage Cart T3 stun duration reduced from 1.5s to 1.25s Graves Grasping Hands spirit damage scaling reduced from 1.9 to 1.6 Grasping Hands T3 reduced from 2 Ghouls Summoned to 1 Grasping Hands T3 now also reduces cooldown by 10s Borrowed Decree Ghoul HP reduced from 200 + 12/boon to 180 + 8/boon Borrowed Decree Ghouls damage reduced from 150 to 135 Jar of Dead T2 no longer grants +4s Duration Jar of Dead T3 changed from "+2 Deadheads and Deadheads apply Essence Theft" to "+2 Deadheads and +4s Duration" Essence Theft T3 changed from "+1 tether and improved targeting angle" to "Your summons now apply Essence Theft" Holliday Bounce Pad now provides allies with air control and stomp damage Crackshot T3 increased from -4s/-2s for hero/npc headshots to -6s/-3s Infernus Afterburn DPS increased from 12 to 14 Afterburn T1 DPS increased from +14 to +16 Concussive Combustion T2 increased from +85% Explosion Lifesteal to +100% Concussive Combustion T2 increased from -65s Cooldown to -75s Kelvin Frost Grenade damage spirit scaling reduced from 0.8 to 0.7 Frost Grenade T3 damage spirit scaling reduced from 0.9 to 0.8 Lady Geist Gun Falloff reduced from 20->52 to 17->48 Life Drain spirit scaling reduced from 0.536 to 0.43 Life Drain T3 spirit scaling increased from +0.3 to +0.4 McGinnis Medicinal Specter T3 duration increased from +1s to +1.5s Spectral Wall duration increased from 5s to 5.5s Mirage Fire Scarabs Health Steal Per Sec reduced from 10 to 9 Fire Scarabs T1 reduced from +8 Health Steal Per Sec to +7 Fire Scarabs T3 spirit scaling reduced from +0.23 to +0.17 Dust Devil cooldown increased from 32s to 36s Dust Devil T2 cooldown increased from -8s to -12s Dust Devil T3 now also increases lift duration by 0.3s Djinn\'s Mark spirit scaling reduced from 0.44 to 0.38 Rem Naptime T3 now also provides unstoppable while channeling Silver Bullet damage rescaled from 5.5+0.1206 to 5.4+0.124 Slam Fire cooldown increased from 22s to 25s Slam Fire T2 cooldown increased from -7s to -10s Venator Consecrating Grenade impact damage scaling reduced from 1.2 to 1.0 Gut Shot wall stun reduced from 0.65s to 0.6s Gut Shot damage scaling reduced from 1 to 0.8 Victor Restored health per boon back to 46 No longer has -30% Lifesteal Effectiveness Jumpstart T3 no longer purges non-ult debuffs Jumpstart T3 now adds +50% Debuff Resistance and cuts existing debuff durations by 50% Aura of Suffering radius reduced from 9.5m to 9m',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-03-22',
			to: '2026-03-26'
		},
		after: {
			from: '2026-03-27',
			to: '2026-04-10'
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
		level: 2,
		title: 'Celeste',
		id: 'celeste'
	},
	{
		level: 3,
		title: 'Dazzling Trick',
		id: 'dazzling-trick'
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
		level: 3,
		title: 'Doorway Distance',
		id: 'doorway-distance'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart'
	},
	{
		level: 2,
		title: 'Graves',
		id: 'graves'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands'
	},
	{
		level: 3,
		title: 'Borrowed Decree Ghoul HP',
		id: 'borrowed-decree-ghoul-hp'
	},
	{
		level: 3,
		title: 'Borrowed Decree Ghouls',
		id: 'borrowed-decree-ghouls'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead'
	},
	{
		level: 3,
		title: 'Essence Theft',
		id: 'essence-theft'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
	},
	{
		level: 3,
		title: 'Crackshot',
		id: 'crackshot'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Afterburn DPS',
		id: 'afterburn-dps'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain'
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
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
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
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	},
	{
		level: 2,
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Naptime',
		id: 'naptime'
	},
	{
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Slam Fire',
		id: 'slam-fire'
	},
	{
		level: 2,
		title: 'Venator',
		id: 'venator'
	},
	{
		level: 3,
		title: 'Consecrating Grenade',
		id: 'consecrating-grenade'
	},
	{
		level: 3,
		title: 'Gutshot',
		id: 'gutshot'
	},
	{
		level: 3,
		title: 'Gut Shot',
		id: 'gut-shot'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-03-22',
			to: '2026-03-26'
		},
		after: {
			from: '2026-03-27',
			to: '2026-04-10'
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
			name: 'Celeste',
			id: 'celeste'
		},
		{
			kind: 'hero',
			name: 'Doorman',
			id: 'doorman'
		},
		{
			kind: 'hero',
			name: 'Graves',
			id: 'graves'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
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
			name: 'Lady Geist',
			id: 'lady-geist'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Rem',
			id: 'rem'
		},
		{
			kind: 'hero',
			name: 'Silver',
			id: 'silver'
		},
		{
			kind: 'hero',
			name: 'Venator',
			id: 'venator'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
		}
	],
	related: []
};
function _3_25_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Street Brawl: You now have all AP unlocked by round 5</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_3_25_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<div class="hero bebop">\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Base health regen increased from 1.5 to 2.5</li></ul>\n</div>\n')} <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n')} <ul><li>${html('Leaping Slash base damage increased from 50 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Leaping Slash base damage increased from 50 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n<ul><li>Base regen reduced from 2 to 1</li></ul>\n')} <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n<ul><li>Dazzling Trick T3 silence duration reduced from +2s to +1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n')} <ul><li>${html('Call Bell slow increased from 30% to 35%')}</li> <li>${html('Call Bell radius increased from 5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Call Bell radius increased from 5m to 6m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div> <div class="ability doorway-distance">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway Distance change history</a></p>\n<h4 id="doorway-distance"><a href="/ability/doorway">Doorway Distance</a></h4>\n<ul><li>Doorway Distance increased from 60m to 70m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway Distance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall</li><li>Luggage Cart T3 stun duration reduced from 1.5s to 1.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands spirit damage scaling reduced from 1.9 to 1.6</li><li>Grasping Hands T3 reduced from 2 Ghouls Summoned to 1</li><li>Grasping Hands T3 now also reduces cooldown by 10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree-ghoul-hp">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree Ghoul HP change history</a></p>\n<h4 id="borrowed-decree-ghoul-hp"><a href="/ability/borrowed-decree">Borrowed Decree Ghoul HP</a></h4>\n<ul><li>Borrowed Decree Ghoul HP reduced from 200 + 12/boon to 180 + 8/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree Ghoul HP'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree-ghouls">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree Ghouls change history</a></p>\n<h4 id="borrowed-decree-ghouls"><a href="/ability/borrowed-decree">Borrowed Decree Ghouls</a></h4>\n')} <ul><li>${html('Borrowed Decree Ghouls damage reduced from 150 to 135')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Graves',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Borrowed Decree Ghouls damage reduced from 150 to 135'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree Ghouls'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead T2 no longer grants +4s Duration</li><li>Jar of Dead T3 changed from &quot;+2 Deadheads and Deadheads apply Essence Theft&quot; to &quot;+2 Deadheads and +4s Duration&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability essence-theft">${html('\n<p><a href="/ability/essence-theft"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Theft change history</a></p>\n<h4 id="essence-theft"><a href="/ability/essence-theft">Essence Theft</a></h4>\n<ul><li>Essence Theft T3 changed from &quot;+1 tether and improved targeting angle&quot; to &quot;Your summons now apply Essence Theft&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Essence Theft'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n<ul><li>Bounce Pad now provides allies with air control and stomp damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crackshot">${html('\n<p><a href="/ability/crackshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crackshot change history</a></p>\n<h4 id="crackshot"><a href="/ability/crackshot">Crackshot</a></h4>\n<ul><li>Crackshot T3 increased from -4s/-2s for hero/npc headshots to -6s/-3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Crackshot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn-dps">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn DPS change history</a></p>\n<h4 id="afterburn-dps"><a href="/ability/afterburn">Afterburn DPS</a></h4>\n<ul><li>Afterburn DPS increased from 12 to 14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn T1 DPS increased from +14 to +16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n<ul><li>Concussive Combustion T2 increased from +85% Explosion Lifesteal to +100%</li><li>Concussive Combustion T2 increased from -65s Cooldown to -75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade damage spirit scaling reduced from 0.8 to 0.7</li><li>Frost Grenade T3 damage spirit scaling reduced from 0.9 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Gun Falloff reduced from 20-&gt;52 to 17-&gt;48</li></ul>\n')} <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain spirit scaling reduced from 0.536 to 0.43</li><li>Life Drain T3 spirit scaling increased from +0.3 to +0.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter T3 duration increased from +1s to +1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall duration increased from 5s to 5.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs Health Steal Per Sec reduced from 10 to 9</li><li>Fire Scarabs T1 reduced from +8 Health Steal Per Sec to +7</li><li>Fire Scarabs T3 spirit scaling reduced from +0.23 to +0.17</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n')} <ul><li>${html('Dust Devil cooldown increased from 32s to 36s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Dust Devil cooldown increased from 32s to 36s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Dust Devil T2 cooldown increased from -8s to -12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Dust Devil T2 cooldown increased from -8s to -12s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Dust Devil T3 now also increases lift duration by 0.3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark spirit scaling reduced from 0.44 to 0.38</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n')} <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>\n<ul><li>Naptime T3 now also provides unstoppable while channeling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n<ul><li>Bullet damage rescaled from 5.5+0.1206 to 5.4+0.124</li></ul>\n')} <div class="ability slam-fire">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire change history</a></p>\n<h4 id="slam-fire"><a href="/ability/slam-fire">Slam Fire</a></h4>\n')} <ul><li>${html('Slam Fire cooldown increased from 22s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Slam Fire cooldown increased from 22s to 25s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Slam Fire T2 cooldown increased from -7s to -10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Slam Fire T2 cooldown increased from -7s to -10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero venator">${html('\n<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>\n<h3 id="venator"><a href="/hero/venator">Venator</a></h3>\n')} <div class="ability consecrating-grenade">${html('\n<p><a href="/ability/consecrating-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Consecrating Grenade change history</a></p>\n<h4 id="consecrating-grenade"><a href="/ability/consecrating-grenade">Consecrating Grenade</a></h4>\n<ul><li>Consecrating Grenade impact damage scaling reduced from 1.2 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Consecrating Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability gutshot">${html('\n<p><a href="/ability/gutshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gutshot change history</a></p>\n<h4 id="gutshot"><a href="/ability/gutshot">Gutshot</a></h4>\n<ul><li>Gut Shot wall stun reduced from 0.65s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Gutshot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability gut-shot">${html('\n<p><a href="/ability/gutshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gut Shot change history</a></p>\n<h4 id="gut-shot"><a href="/ability/gutshot">Gut Shot</a></h4>\n<ul><li>Gut Shot damage scaling reduced from 1 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Gut Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Restored health per boon back to 46</li><li>No longer has -30% Lifesteal Effectiveness</li></ul>\n')} <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart T3 no longer purges non-ult debuffs</li><li>Jumpstart T3 now adds +50% Debuff Resistance and cuts existing debuff durations by 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n')} <ul><li>${html('Aura of Suffering radius reduced from 9.5m to 9m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Aura of Suffering radius reduced from 9.5m to 9m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _3_25_mg as default, metadata, readingManifest, toc };
