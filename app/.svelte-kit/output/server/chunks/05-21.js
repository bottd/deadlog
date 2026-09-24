import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/05-21.mg?embed=0
function _5_21_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Decay',
			'Express Shot',
			'Frenzy',
			'Headhunter',
			'Headshot Booster',
			'Siphon Bullets',
			'Spirit Rend',
			'Superior Cooldown'
		]
	});
}
//#endregion
//#region changelogs/2025/05-21.mg
var metadata = {
	title: '05-21-2025 Update',
	thread_id: '65674',
	published: '2025-05-21T15:55:33-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Troopers will now only flinch from player damage if it is a headshot while the trooper is busy running. Trooper resistance near base reduced from 50% to 40% Fixed Breakable souls being counted as secured souls rather than unsecured souls (this fix was released yesterday) Added Breakable souls to the post game Souls by Source graph (was previously bundled in with Urn) Melee damage growth per boon reduced by 5% Cultists Sacrifice: Bonus health reduced from 275 to 250 Cultists Sacrifice: Bonus duration reduced from 170s to 160s Added statues in front of Mid Lane entrances for cover. Moved Shrines away from the back walls a bit. Extended shrine low ground closer to the throne. Redesigned cover in front of the throne. Removed a tree in front of the Mid Lane entrance. Tweaked trooper nodes to go around new statues. Removed a misplaced Curiosity Shop sign. Express Shot Weapon Damage increased from 125% to 150% Now does reduced damage for non-primary gun damage (alt fires, carbine), 150% to 75% Headshot Booster Health reduced from 65 to 40 Headhunter Heal reduced from 6% to 4% Heal now scales with spirit power (0.014) Bonus damage reduced from 120 to 100 Bonus damage now scales with spirit power (0.3) Spirit Rend Fixed being able to get 2 stacks without using the cooldown Frenzy Active Spirit Resistance reduced from 40% to 30% Siphon Bullets Steal per hit reduced from 65 to 55 Spirit Resistance reduced from 12% to 10% Fixed the cooldown not being consumed when blocked by Plated Armor Decay Cast range spirit scaling reduced from 0.13 to 0.1 Damage reduced from 2.5% to 2.4% Damage spirit scaling reduced from 0.00465 to 0.0038 Cooldown increased from 30s to 36s Healing Reduction increased from -35% to -40% Superior Cooldown Cooldown Reduction reduced from 27% to 26%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: null,
			to: null
		},
		after: {
			from: '2025-05-22',
			to: '2025-05-27'
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
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Headhunter',
		id: 'headhunter'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Spirit Rend',
		id: 'spirit-rend'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: null,
		after: {
			from: '2025-05-22',
			to: '2025-05-27'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Headhunter',
			id: 'headhunter'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Spirit Rend',
			id: 'spirit-rend'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
		}
	],
	related: []
};
function _5_21_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Troopers will now only flinch from player damage if it is a headshot while the trooper is busy running.</li><li>Trooper resistance near base reduced from 50% to 40%</li><li>Fixed Breakable souls being counted as secured souls rather than unsecured souls (this fix was released yesterday)</li><li>Added Breakable souls to the post game Souls by Source graph (was previously bundled in with Urn)</li><li>Melee damage growth per boon reduced by 5%</li><li>Cultists Sacrifice: Bonus health reduced from 275 to 250</li><li>Cultists Sacrifice: Bonus duration reduced from 170s to 160s</li><li>Added statues in front of Mid Lane entrances for cover.</li><li>Moved Shrines away from the back walls a bit.</li><li>Extended shrine low ground closer to the throne.</li><li>Redesigned cover in front of the throne.</li><li>Removed a tree in front of the Mid Lane entrance.</li><li>Tweaked trooper nodes to go around new statues.</li><li>Removed a misplaced Curiosity Shop sign.</li></ul>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_21_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Cast range spirit scaling reduced from 0.13 to 0.1')}</li> <li>${html('Damage reduced from 2.5% to 2.4%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Damage reduced from 2.5% to 2.4%'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Damage spirit scaling reduced from 0.00465 to 0.0038')}</li> <li>${html('Cooldown increased from 30s to 36s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown increased from 30s to 36s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Healing Reduction increased from -35% to -40%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Weapon Damage increased from 125% to 150%</li><li>Now does reduced damage for non-primary gun damage (alt fires, carbine), 150% to 75%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Active Spirit Resistance reduced from 40% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headhunter">${html('\n<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>\n<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>\n<ul><li>Heal reduced from 6% to 4%</li><li>Heal now scales with spirit power (0.014)</li><li>Bonus damage reduced from 120 to 100</li><li>Bonus damage now scales with spirit power (0.3)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Health reduced from 65 to 40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Steal per hit reduced from 65 to 55</li><li>Spirit Resistance reduced from 12% to 10%</li><li>Fixed the cooldown not being consumed when blocked by Plated Armor</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n<ul><li>Fixed being able to get 2 stacks without using the cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Cooldown Reduction reduced from 27% to 26%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_21_mg as default, metadata, readingManifest, toc };
