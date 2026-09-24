import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/08-16.mg?embed=0
function _8_16_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Ivy', 'Shiv']
	});
}
//#endregion
//#region changelogs/2024/08-16.mg
var metadata = {
	title: '08-16-2024 Update',
	thread_id: '17251',
	published: '2024-08-16T15:28:51-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Fixed spectating ending 1 minute before the game ended Fixed Hero Demo starting you at max level Fixed Lady Geist not being able to jump during Life Drain Fixed the boon level display in the hero pages not working correctly Changed default shop music back to original Shiv Gun base damage reduced from 6.3 to 5.7 Serrated Knives collision size reduced by 10% Serrated Knives projectile speed reduced by 10% Serrated Knives base damage reduced from 75 to 35 Serrated Knives spirit scaling reduced from 1 to 0.6 Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16 Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed Fixed Serrated Knives bouncing to other units even if it did not impact the target Fixed Rage and Bloodletting not clearing out on death Fixed Bloodletting deferred damage waking him up from sleep Fixed Killing Blow falling through the world sometimes Ivy Restored previous audio processing Air Drop cooldown increased from 70s to 80s Air Drop duration reduced from 20s to 17s Air Drop bomb no longer silences in the base (now part of t3) Air Drop bomb slow duration increased from 3s to 4.5s Air Drop T2 now also has +5m radius Air Drop T3 no longer has +12m radius Air Drop T3 no longer extends debuff duration by +2s Air Drop T3 silences enemies for 4.5s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2024-08-17',
			to: '2024-08-19'
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
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
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
		title: 'Serrated Knives DPS',
		id: 'serrated-knives-dps'
	},
	{
		level: 3,
		title: 'Serrated Knives',
		id: 'serrated-knives-1'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: null,
		after: {
			from: '2024-08-17',
			to: '2024-08-19'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		}
	],
	related: []
};
function _8_16_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Fixed spectating ending 1 minute before the game ended</li><li>Fixed Hero Demo starting you at max level</li><li>Fixed Lady Geist not being able to jump during Life Drain</li><li>Fixed the boon level display in the hero pages not working correctly</li><li>Changed default shop music back to original</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_16_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Restored previous audio processing</li></ul>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n')} <ul><li>${html('Air Drop cooldown increased from 70s to 80s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Air Drop cooldown increased from 70s to 80s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Air Drop duration reduced from 20s to 17s')}</li> <li>${html('Air Drop bomb no longer silences in the base (now part of t3)')}</li> <li>${html('Air Drop bomb slow duration increased from 3s to 4.5s')}</li> <li>${html('Air Drop T2 now also has +5m radius')}</li> <li>${html('Air Drop T3 no longer has +12m radius')}</li> <li>${html('Air Drop T3 no longer extends debuff duration by +2s')}</li> <li>${html('Air Drop T3 silences enemies for 4.5s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Gun base damage reduced from 6.3 to 5.7</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n')} <ul><li>${html('Serrated Knives collision size reduced by 10%')}</li> <li>${html('Serrated Knives projectile speed reduced by 10%')}</li> <li>${html('Serrated Knives base damage reduced from 75 to 35')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Serrated Knives base damage reduced from 75 to 35'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Serrated Knives spirit scaling reduced from 1 to 0.6')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability serrated-knives-dps">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives DPS change history</a></p>\n<h4 id="serrated-knives-dps"><a href="/ability/serrated-knives">Serrated Knives DPS</a></h4>\n<ul><li>Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives-1"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed</li><li>Fixed Serrated Knives bouncing to other units even if it did not impact the target</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Fixed Rage and Bloodletting not clearing out on death</li><li>Fixed Bloodletting deferred damage waking him up from sleep</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Fixed Killing Blow falling through the world sometimes</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _8_16_mg as default, metadata, readingManifest, toc };
