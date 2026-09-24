import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/05-27.mg?embed=0
function _5_27_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Calico',
			'Grey Talon',
			'Holliday',
			'Infernus',
			'McGinnis',
			'Mo &amp; Krill',
			'Pocket',
			'Seven',
			'Shiv',
			'Sinclair',
			'Viscous',
			'Warden',
			'Wraith'
		]
	});
}
//#endregion
//#region changelogs/2025/05-27.mg?embed=1
function _5_27_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Armor Piercing Rounds',
			'Blood Tribute',
			'Boundless Spirit',
			'Counterspell',
			'Crippling Headshot',
			'Crushing Fists',
			'Cultist Sacrifice',
			'Decay',
			'Express Shot',
			'Fleetfoot',
			'Headhunter',
			'Headshot Booster',
			'Healing Nova',
			'Lightning Scroll',
			'Melee Charge',
			'Mercurial Magnum',
			'Restorative Shot',
			'Siphon Bullets',
			'Spellbreaker',
			'Superior Cooldown',
			'Tankbuster',
			'Vortex Web'
		]
	});
}
//#endregion
//#region changelogs/2025/05-27.mg
var metadata = {
	title: '05-27-2025 Update',
	thread_id: '66453',
	published: '2025-05-27T16:47:06-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Breakable souls rescaled from 28.5 + 2.375/min to 23 + 2.6/min Trooper resistance near base reduced from 40% to 35% Fixed a bug where Urn can be invisibly carried on the hero by throwing it in certain areas like the air vents Fixed Neutrals near the base gaining the "near base" trooper resist Added news kiosk structure in between Mid Lane Walker and base entrance Added wall partition structures outside of Outer Lane base entrances Improved lighting in Mid Boss area Abrams Health growth per boon reduced from 81 to 78 Infernal Resilience Damage Regenerated increased from 10% to 12% Infernal Resilience T3 increased from 5% to 6% Various network related fixed for Shoulder Charge Shoulder Charge wall stun from 0.85s to 0.6s Shoulder Charge T2 changed from -12s Cooldown to +0.45s Wall Stun Shoulder Charge T3 changed to -18s Cooldown Seismic Impact cooldown increased from 160s to 170s Bebop Hyperbeam cooldown reduced from 130s to 110s Fixed some issues with lag compensation and Hook Calico Ammo increased from 9 to 10 Ava self slow on damage duration increased from 1.5s to 2s Ava self slow on damage increased from -50% to -65% Ava duration reduced from 15s to 14s Ava T1 duration reduced from +20s to +14s Ava recent damage window increased from 5s to 6s Fixed Curse and stuns not interrupting Ava (similar to Ice Path and Flame Dash) Grey Talon Spirit Snare radius increased from 6.2 to 6.5 Guided Owl duration increased from 14s to 16s Guided Owl cooldown decreased from 127s to 125s Guided Owl T2 cooldown improved from -47s to -50s Holliday Fixed some issues with lag compensation and Lasso Spirit Lasso cooldown increased from 100s to 105s Spirit Lasso T3 improved from -30s Cooldown to -35s Infernus Afterburn headshot buildup rate improved by 10% McGinnis Fixed Turret bugs when thrown at the Patron Throne Mo & Krill Base gun damage increased from 2.6 to 2.7 Scorn spirit scaling increased from 0.39 to 0.42 Combo cooldown increased from 75s to 80s Pocket Flying Cloak spirit damage scaling increased from 1.04 to 1.3 Seven Fixed Health Regen being 3 instead of 1.5 Power Surge spirit scaling increased from 0.148 to 0.16 Storm Cloud DPS reduced from 120 to 115 Storm Cloud T3 reduced from +75 to +70 Storm Cloud spirit scaling increased from 0.65 to 0.7 Storm Cloud cooldown increased from 148s to 155s Shiv Alt Fire base damage reduced by 15% Rage per weapon damage reduced by 10% Sinclair Vexing Bolt radius increased from 3m to 3.5m Vexing Bolt radius fixed to scale with radius increase now Spectral Assistant T2 duration increased from +5s to +7s Rabbit Hex cooldown reduced from 35s to 30s Viscous Goo Ball duration reduced from 10s to 9s Warden Bullet damage per boon reduced from 0.74 to 0.6 Last Stand interrupt cooldown increased from 20s to 30s Wraith Telekinesis duration reduced from 3s to 2.75s Restorative Shot Now only procs when the center pellet hits (in the case of shotguns, like how Mystic Shot works) Headshot Booster Now requires the center pellet hit the head hitbox to count Fleetfoot Cooldown increased from 10s to 16s Duration increased from 4s to 6s No longer grants +125 Bonus Health Now grants +10% Bullet Resistance While active, you gain +40% Slow Resistance Melee Charge Fixed always giving 25% more damage against objectives Headhunter Now requires the center pellet hit the head hitbox to count Bonus Headshot Damage now scales with Boons rather than Spirit Power (5.0 per Boon) Bonus Headshot Damage reduced from 100 to 75 Heal now scales with Boons rather than Spirit Power (0.1 per Boon) Cultist Sacrifice Out of Combat Regen reduced from 4 to 2 Weapon Damage vs NPC reduced from 35% to 30% Bullet Resist vs NPC reduced from 35% to 30% Fire Rate reduced from 25% to 10% Fire Rate now scales with Boons (1.25%) Health Bonus reduced from 250 to 100 Health Bonus now scales with Boons (11) Blood Tribute Fire Rate increased from 35% to 40% Express Shot Fixed shotguns with express shot instantly applying buildups Crippling Headshot No longer has a 3s cooldown Debuff duration reduced from 10s to 8s Armor Piercing Rounds Bullet Velocity increased from 30% to 35% (to match the component) Crushing Fists Fixed always giving 25% more damage against objectives Healing Nova Now a T3 item Base heal increased from 260 to 325 Heal now scales with Boons rather than Spirit Power (7 per Boon) Now grants +8 Spirit Power Cooldown reduced from 70s to 60s Counterspell Duration increased from 0.8s to 1s Spellbreaker Fixed it affecting Lady Geist\'s Soul Exchange Siphon Bullets Cooldown increased from 0.7s to 0.8s Fixed various bugs with stat stealing and Capacitor/Debuff Remover Superior Cooldown Cooldown Reduction reduced from 26% to 25% Tankbuster Fixed various bugs when multiple abilities hit on the same frame Decay Damage no longer procs item effects (like Affliction) Lightning Scroll Fixed bugs when used with Refresher Boundless Spirit Spirit % bonus increased from +10% to +13% Vortex Web Adjusted cast arc to be more similar to other grenades Mercurial Magnum Fixed an interaction bug with Split Shot',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-22',
			to: '2025-05-27'
		},
		after: {
			from: '2025-05-28',
			to: '2025-06-11'
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
		title: 'Abrams',
		id: 'abrams'
	},
	{
		level: 3,
		title: 'Infernal Resilience Damage Regenerated',
		id: 'infernal-resilience-damage-regenerated'
	},
	{
		level: 3,
		title: 'Infernal Resilience',
		id: 'infernal-resilience'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Spirit Snare',
		id: 'spirit-snare'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Spirit Lasso',
		id: 'spirit-lasso'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo'
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
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Power Surge',
		id: 'power-surge'
	},
	{
		level: 3,
		title: 'Storm Cloud DPS',
		id: 'storm-cloud-dps'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Vexing Bolt',
		id: 'vexing-bolt'
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
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
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
		title: 'Armor Piercing Rounds',
		id: 'armor-piercing-rounds'
	},
	{
		level: 2,
		title: 'Blood Tribute',
		id: 'blood-tribute'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Counterspell',
		id: 'counterspell'
	},
	{
		level: 2,
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
	},
	{
		level: 2,
		title: 'Crushing Fists',
		id: 'crushing-fists'
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
		title: 'Express Shot',
		id: 'express-shot'
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
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Healing Nova',
		id: 'healing-nova'
	},
	{
		level: 2,
		title: 'Lightning Scroll',
		id: 'lightning-scroll'
	},
	{
		level: 2,
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Mercurial Magnum',
		id: 'mercurial-magnum'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Spellbreaker',
		id: 'spellbreaker'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
	},
	{
		level: 2,
		title: 'Tankbuster',
		id: 'tankbuster'
	},
	{
		level: 2,
		title: 'Vortex Web',
		id: 'vortex-web'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-22',
			to: '2025-05-27'
		},
		after: {
			from: '2025-05-28',
			to: '2025-06-11'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Abrams',
			id: 'abrams'
		},
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
			name: 'Grey Talon',
			id: 'grey-talon'
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
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
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
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'item',
			name: 'Armor Piercing Rounds',
			id: 'armor-piercing-rounds'
		},
		{
			kind: 'item',
			name: 'Blood Tribute',
			id: 'blood-tribute'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Counterspell',
			id: 'counterspell'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
		},
		{
			kind: 'item',
			name: 'Crushing Fists',
			id: 'crushing-fists'
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
			name: 'Express Shot',
			id: 'express-shot'
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
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Healing Nova',
			id: 'healing-nova'
		},
		{
			kind: 'item',
			name: 'Lightning Scroll',
			id: 'lightning-scroll'
		},
		{
			kind: 'item',
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Mercurial Magnum',
			id: 'mercurial-magnum'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Spellbreaker',
			id: 'spellbreaker'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
		},
		{
			kind: 'item',
			name: 'Vortex Web',
			id: 'vortex-web'
		}
	],
	related: []
};
function _5_27_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Breakable souls rescaled from 28.5 + 2.375/min to 23 + 2.6/min</li><li>Trooper resistance near base reduced from 40% to 35%</li><li>Fixed a bug where Urn can be invisibly carried on the hero by throwing it in certain areas like the air vents</li><li>Fixed Neutrals near the base gaining the &quot;near base&quot; trooper resist</li><li>Added news kiosk structure in between Mid Lane Walker and base entrance</li><li>Added wall partition structures outside of Outer Lane base entrances</li><li>Improved lighting in Mid Boss area</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_27_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Health growth per boon reduced from 81 to 78</li></ul>\n')} <div class="ability infernal-resilience-damage-regenerated">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience Damage Regenerated change history</a></p>\n<h4 id="infernal-resilience-damage-regenerated"><a href="/ability/infernal-resilience">Infernal Resilience Damage Regenerated</a></h4>\n<ul><li>Infernal Resilience Damage Regenerated increased from 10% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience Damage Regenerated'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T3 increased from 5% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Various network related fixed for Shoulder Charge</li><li>Shoulder Charge wall stun from 0.85s to 0.6s</li><li>Shoulder Charge T2 changed from -12s Cooldown to +0.45s Wall Stun</li><li>Shoulder Charge T3 changed to -18s Cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Seismic Impact cooldown increased from 160s to 170s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Seismic Impact cooldown increased from 160s to 170s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n')} <ul><li>${html('Hyperbeam cooldown reduced from 130s to 110s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Hyperbeam cooldown reduced from 130s to 110s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Fixed some issues with lag compensation and Hook</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Ammo increased from 9 to 10</li></ul>\n')} <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava self slow on damage duration increased from 1.5s to 2s</li><li>Ava self slow on damage increased from -50% to -65%</li><li>Ava duration reduced from 15s to 14s</li><li>Ava T1 duration reduced from +20s to +14s</li><li>Ava recent damage window increased from 5s to 6s</li><li>Fixed Curse and stuns not interrupting Ava (similar to Ice Path and Flame Dash)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability spirit-snare">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>\n<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>\n')} <ul><li>${html('Spirit Snare radius increased from 6.2 to 6.5')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Spirit Snare radius increased from 6.2 to 6.5'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Spirit Snare'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl duration increased from 14s to 16s')}</li> <li>${html('Guided Owl cooldown decreased from 127s to 125s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Guided Owl cooldown decreased from 127s to 125s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Guided Owl T2 cooldown improved from -47s to -50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Guided Owl T2 cooldown improved from -47s to -50s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability spirit-lasso">${html('\n<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>\n<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>\n')} <ul><li>${html('Fixed some issues with lag compensation and Lasso')}</li> <li>${html('Spirit Lasso cooldown increased from 100s to 105s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Spirit Lasso cooldown increased from 100s to 105s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit Lasso T3 improved from -30s Cooldown to -35s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Spirit Lasso'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn headshot buildup rate improved by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Fixed Turret bugs when thrown at the Patron Throne</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Base gun damage increased from 2.6 to 2.7</li></ul>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>Scorn spirit scaling increased from 0.39 to 0.42</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n')} <ul><li>${html('Combo cooldown increased from 75s to 80s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Combo cooldown increased from 75s to 80s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak spirit damage scaling increased from 1.04 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Fixed Health Regen being 3 instead of 1.5</li></ul>\n')} <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge spirit scaling increased from 0.148 to 0.16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud-dps">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud DPS change history</a></p>\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS reduced from 120 to 115</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n')} <ul><li>${html('Storm Cloud T3 reduced from +75 to +70')}</li> <li>${html('Storm Cloud spirit scaling increased from 0.65 to 0.7')}</li> <li>${html('Storm Cloud cooldown increased from 148s to 155s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 3,
		bulletIndex: 2,
		text: 'Storm Cloud cooldown increased from 148s to 155s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero shiv">\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Alt Fire base damage reduced by 15%</li><li>Rage per weapon damage reduced by 10%</li></ul>\n</div>\n')} <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n')} <div class="ability vexing-bolt">${html('\n<p><a href="/ability/vexing-bolt"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Vexing Bolt change history</a></p>\n<h4 id="vexing-bolt"><a href="/ability/vexing-bolt">Vexing Bolt</a></h4>\n')} <ul><li>${html('Vexing Bolt radius increased from 3m to 3.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Vexing Bolt radius increased from 3m to 3.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Vexing Bolt radius fixed to scale with radius increase now')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Vexing Bolt'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-assistant">${html('\n<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>\n<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>\n<ul><li>Spectral Assistant T2 duration increased from +5s to +7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Spectral Assistant'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n')} <ul><li>${html('Rabbit Hex cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Rabbit Hex cooldown reduced from 35s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball duration reduced from 10s to 9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.74 to 0.6</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand interrupt cooldown increased from 20s to 30s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis duration reduced from 3s to 2.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_27_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item armor-piercing-rounds">${html('\n<p><a href="/item/armor-piercing-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Armor Piercing Rounds patch history</a></p>\n<h3 id="armor-piercing-rounds"><a href="/item/armor-piercing-rounds">Armor Piercing Rounds</a></h3>\n<ul><li>Bullet Velocity increased from 30% to 35% (to match the component)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Armor Piercing Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>Fire Rate increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Spirit % bonus increased from +10% to +13%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item counterspell">${html('\n<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>\n<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>\n<ul><li>Duration increased from 0.8s to 1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>No longer has a 3s cooldown</li><li>Debuff duration reduced from 10s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n<ul><li>Fixed always giving 25% more damage against objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Out of Combat Regen reduced from 4 to 2</li><li>Weapon Damage vs NPC reduced from 35% to 30%</li><li>Bullet Resist vs NPC reduced from 35% to 30%</li><li>Fire Rate reduced from 25% to 10%</li><li>Fire Rate now scales with Boons (1.25%)</li><li>Health Bonus reduced from 250 to 100</li><li>Health Bonus now scales with Boons (11)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Damage no longer procs item effects (like Affliction)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Fixed shotguns with express shot instantly applying buildups</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n')} <ul><li>${html('Cooldown increased from 10s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 10s to 16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration increased from 4s to 6s')}</li> <li>${html('No longer grants +125 Bonus Health')}</li> <li>${html('Now grants +10% Bullet Resistance')}</li> <li>${html('While active, you gain +40% Slow Resistance')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headhunter">${html('\n<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>\n<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>\n<ul><li>Now requires the center pellet hit the head hitbox to count</li><li>Bonus Headshot Damage now scales with Boons rather than Spirit Power (5.0 per Boon)</li><li>Bonus Headshot Damage reduced from 100 to 75</li><li>Heal now scales with Boons rather than Spirit Power (0.1 per Boon)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Now requires the center pellet hit the head hitbox to count</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-nova">${html('\n<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>\n<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>\n')} <ul><li>${html('Now a T3 item')}</li> <li>${html('Base heal increased from 260 to 325')}</li> <li>${html('Heal now scales with Boons rather than Spirit Power (7 per Boon)')}</li> <li>${html('Now grants +8 Spirit Power')}</li> <li>${html('Cooldown reduced from 70s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		groupIndex: 0,
		bulletIndex: 4,
		text: 'Cooldown reduced from 70s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lightning-scroll">${html('\n<p><a href="/item/lightning-scroll"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lightning Scroll patch history</a></p>\n<h3 id="lightning-scroll"><a href="/item/lightning-scroll">Lightning Scroll</a></h3>\n<ul><li>Fixed bugs when used with Refresher</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lightning Scroll',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Fixed always giving 25% more damage against objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mercurial-magnum">${html('\n<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>\n<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>\n<ul><li>Fixed an interaction bug with Split Shot</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mercurial Magnum',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Now only procs when the center pellet hits (in the case of shotguns, like how Mystic Shot works)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n')} <ul><li>${html('Cooldown increased from 0.7s to 0.8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 0.7s to 0.8s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fixed various bugs with stat stealing and Capacitor/Debuff Remover')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n<ul><li>Fixed it affecting Lady Geist&#x27;s Soul Exchange</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Cooldown Reduction reduced from 26% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n<ul><li>Fixed various bugs when multiple abilities hit on the same frame</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vortex-web">${html('\n<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>\n<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>\n<ul><li>Adjusted cast arc to be more similar to other grenades</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vortex Web',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_27_mg as default, metadata, readingManifest, toc };
