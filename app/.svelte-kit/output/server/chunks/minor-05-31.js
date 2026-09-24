import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/minor-05-31.mg?embed=0
function Minor_05_31_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Apollo', 'Graves', 'McGinnis', 'Pocket', 'Silver', 'Victor', 'Yamato']
	});
}
//#endregion
//#region changelogs/2026/minor-05-31.mg
var metadata = {
	title: 'Minor Update - 05-31-2026',
	steam_gid: '1833968530895860',
	published: '2026-05-31T19:45:54.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Apollo Disengaging Sigil T2 increased from +20% Fire Rate to +30% Flawless Advance T1 heal from 30+0.75 to 35+1.0 Flawless Advance T2 increased from -10s Cooldown to -12s Itani Lo Sahn damage increased from 190 to 200 Itani Lo Sahn spirit scaling increased from 2.3 to 2.6 Graves Jar of Dead damage reduced from 20 + 0.31/spirit to 17 + 0.27/spirit Ghouls damage reduced by 15% Ghouls bounty increased from 25+1/min to 35+2/min McGinnis Heavy Barrage range reduced from 50m to 36m Heavy Barrage T1 Dash Slow reduced from 30% to 18% (regular slow still 30%) Heavy Barrage T3 Damage Per Rocket reduced from +18 to +15 Pocket Flying Cloak T3 reduced from -14s Cooldown to -13s Affliction T3 reduced from +18 DPS to +14 Silver Slam Fire Current Health as Damage reduced from 3% to 2.5% Slam Fire T3 reduced from 8% Current Health as Damage to 7% Entangling Bola cooldown increased from 20s to 23s Entangling Bola T2 increased from -5s Cooldown to -8s Lycan Curse Fire Rate reduced from 65% to 60% Victor Shocking Reanimation T3 reduced from -130s Cooldown to -120s Yamato Power Slash spirit scaling reduced from 2.1 to 1.85 Flying Slash cast range reduced from 30m to 28m',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-05-29',
			to: '2026-05-31'
		},
		after: {
			from: '2026-06-01',
			to: '2026-06-04'
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
		title: 'Apollo',
		id: 'apollo'
	},
	{
		level: 3,
		title: 'Disengaging Sigil',
		id: 'disengaging-sigil'
	},
	{
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance'
	},
	{
		level: 3,
		title: 'Itani Lo Sahn',
		id: 'itani-lo-sahn'
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
		title: 'Ghouls',
		id: 'ghouls'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Flying Cloak',
		id: 'flying-cloak'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction'
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
		level: 3,
		title: 'Entangling Bola',
		id: 'entangling-bola'
	},
	{
		level: 3,
		title: 'Lycan Curse Fire Rate',
		id: 'lycan-curse-fire-rate'
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
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash'
	},
	{
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-05-29',
			to: '2026-05-31'
		},
		after: {
			from: '2026-06-01',
			to: '2026-06-04'
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
			name: 'Graves',
			id: 'graves'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
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
			name: 'Yamato',
			id: 'yamato'
		}
	],
	related: []
};
function Minor_05_31_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	Minor_05_31_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability disengaging-sigil">${html('\n<p><a href="/ability/disengaging-sigil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Disengaging Sigil change history</a></p>\n<h4 id="disengaging-sigil"><a href="/ability/disengaging-sigil">Disengaging Sigil</a></h4>\n<ul><li>Disengaging Sigil T2 increased from +20% Fire Rate to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Disengaging Sigil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance T1 heal from 30+0.75 to 35+1.0</li><li>Flawless Advance T2 increased from -10s Cooldown to -12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability itani-lo-sahn">${html('\n<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>\n<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>\n')} <ul><li>${html('Itani Lo Sahn damage increased from 190 to 200')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Itani Lo Sahn damage increased from 190 to 200'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Itani Lo Sahn spirit scaling increased from 2.3 to 2.6')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Itani Lo Sahn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead damage reduced from 20 + 0.31/spirit to 17 + 0.27/spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ghouls">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ghouls change history</a></p>\n<h4 id="ghouls"><a href="/ability/borrowed-decree">Ghouls</a></h4>\n<ul><li>Ghouls damage reduced by 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Ghouls'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Ghouls bounty increased from 25+1/min to 35+2/min</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Heavy Barrage range reduced from 50m to 36m</li><li>Heavy Barrage T1 Dash Slow reduced from 30% to 18% (regular slow still 30%)</li><li>Heavy Barrage T3 Damage Per Rocket reduced from +18 to +15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak T3 reduced from -14s Cooldown to -13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction T3 reduced from +18 DPS to +14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n')} <div class="ability slam-fire">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire change history</a></p>\n<h4 id="slam-fire"><a href="/ability/slam-fire">Slam Fire</a></h4>\n<ul><li>Slam Fire Current Health as Damage reduced from 3% to 2.5%</li><li>Slam Fire T3 reduced from 8% Current Health as Damage to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-bola">${html('\n<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>\n<h4 id="entangling-bola"><a href="/ability/entangling-bola">Entangling Bola</a></h4>\n')} <ul><li>${html('Entangling Bola cooldown increased from 20s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Entangling Bola cooldown increased from 20s to 23s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Entangling Bola T2 increased from -5s Cooldown to -8s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Entangling Bola'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse-fire-rate">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse Fire Rate change history</a></p>\n<h4 id="lycan-curse-fire-rate"><a href="/ability/lycan-curse">Lycan Curse Fire Rate</a></h4>\n<ul><li>Lycan Curse Fire Rate reduced from 65% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse Fire Rate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n')} <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n<ul><li>Shocking Reanimation T3 reduced from -130s Cooldown to -120s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash spirit scaling reduced from 2.1 to 1.85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Flying Slash cast range reduced from 30m to 28m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { Minor_05_31_mg as default, metadata, readingManifest, toc };
