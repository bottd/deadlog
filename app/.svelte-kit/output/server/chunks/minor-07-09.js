import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/minor-07-09.mg?embed=0
function Minor_07_09_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Billy',
			'Doorman',
			'Drifter',
			'Graves',
			'Haze',
			'Holliday',
			'Mirage',
			'Pocket',
			'Shiv',
			'Silver',
			'Victor',
			'Viscous',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2026/minor-07-09.mg?embed=1
function Minor_07_09_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Scourge']
	});
}
//#endregion
//#region changelogs/2026/minor-07-09.mg
var metadata = {
	title: 'Minor Update - 07-09-2026',
	steam_gid: '1836506165584438',
	published: '2026-07-09T19:26:55.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Urn Runner sprint bonus reduced from +2m to 0 (trailing bonus reduced from +7m to +5m) Urn Runner move speed bonus reduced from +3.5m to +2m Urn Runner Stamina Recovery increased from +15% to +25% Urn talking frequency increased from every 8s to every 6s Urn talking sound distance increased (easier to hear a nearby Urn Runner) Unstable Rift warning time reduced from 25s to 20s Rift Troopers now have Spirit Resist (30/35/40/45%) Rift Troopers now have Melee Resistance (25%) Rift Troopers spawn interval increased from every 0.3s to 0.5s (spawns slightly more staggered) Unstable Rift comeback resist aura radius increased from 20m to 35m Rift Troopers max comeback count increased from 12 to 14 Objectives bounty split for nearby heroes reduced from 40% to 30% (this means slightly more portion of the bounty is split team wide rather than towards an individual player) Billy Rising Ram T3 spirit scaling reduced from 0.035 to 0.03 Doorman Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19 Crit scaling reduced from -25% to -30% Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s Drifter Bullet damage per boon reduced from +0.616 to +0.49 Bloodscent T3 reduced from +12% to +11% Stalker\'s Mark cooldown increased from 20s to 24s Stalker\'s Mark T2 increased from -8s Cooldown to -12s Stalker\'s Mark T3 reduced from +2% Bleed to +1.5% Graves Jar of Dead T1 heal spirit scaling increased from 0.1 to 0.16 Jar of Dead now build up faster from neutral creeps Grasping Hands immobilize duration reduced from 1.25s to 1s Grasping Hands T3 cooldown increased from -10s to -14s Essence Theft now procs from melee hits Essence Theft T3 now also increases Max Steal Targets from 3 to 4 Borrowed Decree T1 changed from "-15s Cooldown" to "-15s Cooldown and +25% Ghoul Speed" Borrowed Decree T2 changed from "+25% Ghoul Speed and +10s Duration" to "-0.3s Time to Spawn and +10s Duration" Haze Sleep Dagger T2 now also applies 15 Fixation Stacks Sleep Dagger T2 reduced from -18s Cooldown to -17s Holliday Powder Keg spirit scaling reduced from 1.2 to 1.05 Mirage Fire Scarabs T3 spirit scaling reduced from +0.17 to +0.13 Dust Devil T3 spirit scaling reduced from +1 to +0.6 Djinn\'s Mark cooldown reduced from 3s to 2.75 Djinn\'s Mark T3 cooldown reduced from -1s Cooldown to -0.75s Traveler T3 increased from -70s Cooldown to -90s Pocket Affliction duration reduced from 11s to 10s Shiv Serrated Knives T3 spirit scaling reduced from +0.09 to +0.07 Slice and Dice spirit scaling reduced from 1.44 to 1.2 Slice and Dice T2 reduced from -6% Spirit Resist to -4% Bloodletting cooldown increased from 20s to 25s Bloodletting T1 increased from -10s Cooldown to -15s Bloodletting Damage Cleared reduced from 35% to 30% Bloodletting T2 Damage Cleared increased from 35% to 40% Killing Blow Health Threshold reduced from 20% to 18% Killing Blow T3 Health Threshold increased from +8% to +10% Silver Lycan Curse cooldown reduced from 80s to 60s Victor Shocking Reanimation cooldown reduced from 275s to 240s Viscous Splatter T3 spirit scaling reduced from +1.0 to +0.9 Yamato Flying Slash range reduced from 28m to 26m Flying Slash T3 Charge Delay increased from 3s to 4s Flying Slash T3 Ally Targeting now requires alt cast input Scourge Max Health Per Second reduced from 2.6% to 2.5%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-02',
			to: '2026-07-09'
		},
		after: {
			from: '2026-07-10',
			to: '2026-07-24'
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
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Hotel Guest',
		id: 'hotel-guest'
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
		level: 3,
		title: "Stalker's Mark",
		id: 'stalker-s-mark'
	},
	{
		level: 2,
		title: 'Graves',
		id: 'graves'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands'
	},
	{
		level: 3,
		title: 'Essence Theft',
		id: 'essence-theft'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
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
		level: 3,
		title: 'Traveler',
		id: 'traveler'
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
		title: 'Serrated Knives',
		id: 'serrated-knives'
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
		level: 3,
		title: 'Bloodletting Damage Cleared',
		id: 'bloodletting-damage-cleared'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting-1'
	},
	{
		level: 3,
		title: 'Killing Blow Health Threshold',
		id: 'killing-blow-health-threshold'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Scourge',
		id: 'scourge'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-02',
			to: '2026-07-09'
		},
		after: {
			from: '2026-07-10',
			to: '2026-07-24'
		},
		siblings: []
	},
	open: false,
	sections: [
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
			name: 'Graves',
			id: 'graves'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
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
			name: 'Silver',
			id: 'silver'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Scourge',
			id: 'scourge'
		}
	],
	related: []
};
function Minor_07_09_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn Runner sprint bonus reduced from +2m to 0 (trailing bonus reduced from +7m to +5m)</li><li>Urn Runner move speed bonus reduced from +3.5m to +2m</li><li>Urn Runner Stamina Recovery increased from +15% to +25%</li><li>Urn talking frequency increased from every 8s to every 6s</li><li>Urn talking sound distance increased (easier to hear a nearby Urn Runner)</li><li>Unstable Rift warning time reduced from 25s to 20s</li><li>Rift Troopers now have Spirit Resist (30/35/40/45%)</li><li>Rift Troopers now have Melee Resistance (25%)</li><li>Rift Troopers spawn interval increased from every 0.3s to 0.5s (spawns slightly more staggered)</li><li>Unstable Rift comeback resist aura radius increased from 20m to 35m</li><li>Rift Troopers max comeback count increased from 12 to 14</li><li>Objectives bounty split for nearby heroes reduced from 40% to 30% (this means slightly more portion of the bounty is split team wide rather than towards an individual player)</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	Minor_07_09_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n')} <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram T3 spirit scaling reduced from 0.035 to 0.03</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n<ul><li>Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19</li><li>Crit scaling reduced from -25% to -30%</li></ul>\n')} <div class="ability hotel-guest">${html('\n<p><a href="/ability/hotel-guest"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_elevator.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hotel Guest change history</a></p>\n<h4 id="hotel-guest"><a href="/ability/hotel-guest">Hotel Guest</a></h4>\n<ul><li>Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Hotel Guest'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n<ul><li>Bullet damage per boon reduced from +0.616 to +0.49</li></ul>\n')} <div class="ability bloodscent">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>\n<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>\n<ul><li>Bloodscent T3 reduced from +12% to +11%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stalker-s-mark">${html('\n<p><a href="/ability/stalkers-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stalker&#x27;s Mark change history</a></p>\n<h4 id="stalker-s-mark"><a href="/ability/stalkers-mark">Stalker&#x27;s Mark</a></h4>\n')} <ul><li>${html('Stalker&#x27;s Mark cooldown increased from 20s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 2,
		bulletIndex: 0,
		text: "Stalker's Mark cooldown increased from 20s to 24s"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Stalker&#x27;s Mark T2 increased from -8s Cooldown to -12s')}</li> <li>${html('Stalker&#x27;s Mark T3 reduced from +2% Bleed to +1.5%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: "Stalker's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead T1 heal spirit scaling increased from 0.1 to 0.16</li><li>Jar of Dead now build up faster from neutral creeps</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n')} <ul><li>${html('Grasping Hands immobilize duration reduced from 1.25s to 1s')}</li> <li>${html('Grasping Hands T3 cooldown increased from -10s to -14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Graves',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Grasping Hands T3 cooldown increased from -10s to -14s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability essence-theft">${html('\n<p><a href="/ability/essence-theft"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Theft change history</a></p>\n<h4 id="essence-theft"><a href="/ability/essence-theft">Essence Theft</a></h4>\n<ul><li>Essence Theft now procs from melee hits</li><li>Essence Theft T3 now also increases Max Steal Targets from 3 to 4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Essence Theft'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Borrowed Decree T1 changed from &quot;-15s Cooldown&quot; to &quot;-15s Cooldown and +25% Ghoul Speed&quot;</li><li>Borrowed Decree T2 changed from &quot;+25% Ghoul Speed and +10s Duration&quot; to &quot;-0.3s Time to Spawn and +10s Duration&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T2 now also applies 15 Fixation Stacks</li><li>Sleep Dagger T2 reduced from -18s Cooldown to -17s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg spirit scaling reduced from 1.2 to 1.05</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs T3 spirit scaling reduced from +0.17 to +0.13</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Dust Devil T3 spirit scaling reduced from +1 to +0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n')} <ul><li>${html('Djinn&#x27;s Mark cooldown reduced from 3s to 2.75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 2,
		bulletIndex: 0,
		text: "Djinn's Mark cooldown reduced from 3s to 2.75"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Djinn&#x27;s Mark T3 cooldown reduced from -1s Cooldown to -0.75s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n<ul><li>Traveler T3 increased from -70s Cooldown to -90s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction duration reduced from 11s to 10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives T3 spirit scaling reduced from +0.09 to +0.07</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice spirit scaling reduced from 1.44 to 1.2</li><li>Slice and Dice T2 reduced from -6% Spirit Resist to -4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n')} <ul><li>${html('Bloodletting cooldown increased from 20s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Bloodletting cooldown increased from 20s to 25s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bloodletting T1 increased from -10s Cooldown to -15s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting-damage-cleared">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Damage Cleared change history</a></p>\n<h4 id="bloodletting-damage-cleared"><a href="/ability/bloodletting">Bloodletting Damage Cleared</a></h4>\n<ul><li>Bloodletting Damage Cleared reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting Damage Cleared'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting-1"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting T2 Damage Cleared increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow-health-threshold">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Health Threshold change history</a></p>\n<h4 id="killing-blow-health-threshold"><a href="/ability/killing-blow">Killing Blow Health Threshold</a></h4>\n<ul><li>Killing Blow Health Threshold reduced from 20% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow Health Threshold'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow T3 Health Threshold increased from +8% to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n')} <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n')} <ul><li>${html('Lycan Curse cooldown reduced from 80s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lycan Curse cooldown reduced from 80s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n')} <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation cooldown reduced from 275s to 240s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Shocking Reanimation cooldown reduced from 275s to 240s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter T3 spirit scaling reduced from +1.0 to +0.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Flying Slash range reduced from 28m to 26m</li><li>Flying Slash T3 Charge Delay increased from 3s to 4s</li><li>Flying Slash T3 Ally Targeting now requires alt cast input</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	Minor_07_09_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n<ul><li>Max Health Per Second reduced from 2.6% to 2.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { Minor_07_09_mg as default, metadata, readingManifest, toc };
