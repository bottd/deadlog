import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/12-16.mg?embed=0
function _2_16_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Billy', 'Dynamo', 'Lady Geist', 'Mirage', 'Shiv', 'Vindicta', 'Wraith']
	});
}
//#endregion
//#region changelogs/2025/12-16.mg?embed=1
function _2_16_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Colossus',
			'Crippling Headshot',
			'Cultist Sacrifice',
			'Fleetfoot',
			'Focus Lens',
			'Majestic Leap',
			'Siphon Bullets',
			'Spirit Snatch',
			'Sprint Boots',
			'Tankbuster'
		]
	});
}
//#endregion
//#region changelogs/2025/12-16.mg
var metadata = {
	title: '12-16-2025 Update',
	thread_id: '93983',
	published: '2025-12-16T10:33:38-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"The 10% move speed slow from taking damage is now a 20% slow only for the portion over the hero's base move speed Move Speed bonuses now stack diminishingly Base move speed reduced by 0.1 (except for heroes lower than 6.5) Heroes with move speed spirit scaling have the values reduced by 40% Updated move speed values on items: Sprint now starts accelerating for sprint speeds over +2.5 rather than only after +3 Base sprint speed reduced by 0.4 Updated sprint values on items: Bonus Health on all Weapon and Spirit items is reduced by ~25 Vitality investment tree bonuses changed from a % of base health to a fixed amount (from +8/10/13/17/34/39/44/48/52/56% to +75/125/200/275/525/625/750/1000/1200/1400) Spirit investment tree 4.8k bonus reduced from 45 to 38 Surge of Power Imbued Ability Spirit reduced from 28 to 24 Rapid Recharge Charged Ability Spirit reduced from 20 to 16 Trooper bounty reduced by 12% Shrines health increased from 3000 to 7000 Killing both enemy shrines will now make all of your troopers stronger (30% hp and 30% damage) Walker Rocket Barrage radius reduced from 6m to 5m Medic orbs now heals allied troopers 30% more Medic orbs regen on allied troopers is now applied over 8s instead of 2s Medic Trooper HP increased from 260 to 350 (default trooper is 300) Medic Trooper DPS vs other troopers increased from 35 to 45 (default trooper is 35) Medic Troopers attack range vs troopers and players increased by +5m over the default Medic Pack pickup range scales from 18m->26m to 18m->30m (over the same time period, 10min to 18min) Urn: Bounty increased from 700 + 230/min to 1300 + 230/min Urn: Comeback bounty now gives more souls Urn: Bullet and Spirit resist for carrier increased from 30% to 50% Urn: Bonus bounty for carrier increased from 25% to 35% Increased kill bounty for solo kills (1 attacker in the kill) by 25%, and by 15% for duo kills Increased portion of the bounty the killer gets relative to the assist portion Increased comeback bounties for losing team a bit Getting hit while on Jump Pad during the window now deals 15% max hp damage Neutral HP reduced by 20% Neutral HP growth increased from 0.5%/min to 2.1% (less HP before ~15 minutes, more afterwards) Neutrals spirit resistance increased by 5% Sinner's Sacrifice bounty reduced by 10% Unsecured souls claim period reworked. Previously the way it worked was any unsecured souls you gained were added to a rolling 165s window, where it was divided over that time and given out, with a minimum amount given per second of 1 soul. The new system drains 0.5% (of the remaining souls) + 1.6 (scales with the 8% bounty growth per minute). Fixed a bug causing AP Rounds to reduce damage on targets with negative resist When Armor Piercing Rounds Proc's, Plated Armor can no longer stop the Proc'd Bullet. Fixed Curse dispelling targets with Unstoppable state Initial wall jump no longer costs stamina Stamina now regenerates faster (from 5s to 4.5s for 1 stamina) Removed on bullet hit move slow Time delay before sprint starts working after hero/neutral interaction reduced from 4s to 3s Weakened Patron now gains 50% damage reduction if one defender is in the pit and 100% if two or more are (defenders must be in pit for at least 2s for reduction to kick in) Wraith Sprint speed spirit power scaling reduced from 0.6 to 0.5 Bullet damage per boon reduced from 0.17 to 0.14 Project Mind T2 spirit scaling reduced from 2.44 to 1.7 Billy Health regen reduced from 3 to 2.5 Blasted non-player effectiveness reduced from 35% to 25% Blasted light melee effectiveness reduced from 50% to 40% Chain Gang will now break slightly faster when target is out of LOS Dynamo Kinetic Pulse spirit scaling range reduced from 0.2 to 0.1 Health regen reduced from 2.5 to 1.75 Lady Geist Stamina dash distance moved to bucket 3 (slower) Essence Bomb self damage spirit scaling reduced from 1.6 to 1.8 Malice self damage increased from 7% to 9% Mirage Move speed reduced by 0.2 Bullet damage per boon reduced from 0.616 to 0.5 Djinn's Mark cooldown increased from 2.5s to 2.6s Djinn's Mark max range from 45m to 40m Traveler cooldown increased from 145s to 155s Traveler T1 cooldown from -25s to -35s Shiv Bloodletting deferred damage reduced from 30% to 25% Bloodletting T2 deferred damage increased from 10% to 15% Rage buildup rate reduced by 6% Killing Blow cast range reduced from 15m to 13m Vindicta Assassinate T2 reduced from +90 Max Bonus Damage to 80 Active Reload Move speed reduced from 1 to 0.75​- Backstabber: Move speed reduced from 1.75 to 1.5​- Fleetfoot: Move speed reduced from 3.5 to 3.25​- Enduring Speed: Move speed reduced from 2.25 to 2.0​- Guardian Ward: Move speed reduced from 3 to 2.75​- Spirit Shielding: Move speed reduced from 1.75 to 1.5​- Weapon Shielding: Move speed reduced from 1.75 to 1.5​- Blood Tribute: Move speed reduced from 2.25 to 2​- Burst Fire: Move speed reduced from 1.5 to 1.25​- Headhunter: Move speed reduced from 2 to 1.75​- Heroic Aura: Move speed reduced from 2.5 to 2.25​- Counterspell: Move speed reduced from 2 to 1.75​- Debuff Remover: Move speed reduced from 2.5 to 2.25​- Fortitude: Move speed reduced from 1.5 to 1.25​- Veil Walker: Invis move speed reduced from 4 to 3.5​- Radiant Regeneration: Move speed reduced from 2 to 1.75​- Surge of Power: Move speed reduced from 2 to 1.75​- Frenzy: Move speed reduced from 1 to 0.75​- Frenzy: Active move speed reduced from 3 to 2.5​- Divine Barrier: Move speed reduced from 3 to 2.75​- Healing Tempo: Move speed reduced from 1.5 to 1.25​- Juggernaut: Move speed reduced from 2.25 to 2​- Ethereal Shift: Move speed reduced from 3 to 2.5​- Sprint ramp rate reduced from 0.75/sec to 0.6/sec Sprint Boots Sprint reduced from 2.2 to 2.0​- Long Range: Sprint reduced from 1 to 0.75​- Swift Striker: Sprint reduced from 1 to 0.75​- Mystic Slow: Sprint reduced from 1 to 0.75​- Heroic Aura: Sprint reduced from 2 to 1.5​- Hunter's Aura: Sprint reduced from 1 to 0.75​- Sharpshooter: Sprint reduced from 1.5 to 1​- Rescue Beam: Sprint reduced from 1 to 0.75​- Trophy Collector: Sprint reduced from 2.2 to 2.0​- Disarming Hex: Sprint reduced from 1 to 0.75​- Shadow Weave: Sprint reduced from 2 to 1.5​- Lightning Scroll: Sprint reduced from 1 to 0.75​- Vortex Web: Sprint reduced from 1 to 0.75​- Enduring Speed: Slow resist reduced from 30% to 25% Fleetfoot Active slow resist reduced from 40% to 35% Majestic Leap Cooldown increased from 34s to 45s Barrier scaling per boon reduced from 10 to 8 Colossus Bonus Health reduced from +600 to +300 Now grants +15% Base Health Siphon Bullets Cooldown increased from 0.8s to 1.2s Crippling Headshot Bullet and Spirit Resist reduction from -18% to -16% Focus Lens Spirit Resist reduction reduced from -12% to -9% (affects Spirit Sap) Spirit Snatch Spirit Resist steal reduced from 15% to 12% Tankbuster Changed from doing % of Max Health to a % of Current Health Damage dealt increased from 5% to 7.5% Cultist Sacrifice Cooldown increased from 260s to 270s",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-12-02',
			to: '2025-12-16'
		},
		after: {
			from: '2025-12-17',
			to: '2025-12-30'
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
		title: 'Blasted',
		id: 'blasted'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Essence Bomb',
		id: 'essence-bomb'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
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
		title: 'Shiv',
		id: 'shiv'
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
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Project Mind',
		id: 'project-mind'
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
		title: 'Colossus',
		id: 'colossus'
	},
	{
		level: 2,
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
	},
	{
		level: 2,
		title: 'Cultist Sacrifice',
		id: 'cultist-sacrifice'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Focus Lens',
		id: 'focus-lens'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Spirit Snatch',
		id: 'spirit-snatch'
	},
	{
		level: 2,
		title: 'Sprint Boots',
		id: 'sprint-boots'
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
			from: '2025-12-02',
			to: '2025-12-16'
		},
		after: {
			from: '2025-12-17',
			to: '2025-12-30'
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
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Lady Geist',
			id: 'lady-geist'
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
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'item',
			name: 'Active Reload',
			id: 'active-reload'
		},
		{
			kind: 'item',
			name: 'Colossus',
			id: 'colossus'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
		},
		{
			kind: 'item',
			name: 'Cultist Sacrifice',
			id: 'cultist-sacrifice'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Focus Lens',
			id: 'focus-lens'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Spirit Snatch',
			id: 'spirit-snatch'
		},
		{
			kind: 'item',
			name: 'Sprint Boots',
			id: 'sprint-boots'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
		}
	],
	related: []
};
function _2_16_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>The 10% move speed slow from taking damage is now a 20% slow only for the portion over the hero&#x27;s base move speed</li><li>Move Speed bonuses now stack diminishingly</li><li>Base move speed reduced by 0.1 (except for heroes lower than 6.5)</li><li>Heroes with move speed spirit scaling have the values reduced by 40%</li><li>Updated move speed values on items:</li><li>Sprint now starts accelerating for sprint speeds over +2.5 rather than only after +3</li><li>Base sprint speed reduced by 0.4</li><li>Updated sprint values on items:</li><li>Bonus Health on all Weapon and Spirit items is reduced by ~25</li><li>Vitality investment tree bonuses changed from a % of base health to a fixed amount (from +8/10/13/17/34/39/44/48/52/56% to +75/125/200/275/525/625/750/1000/1200/1400)</li><li>Spirit investment tree 4.8k bonus reduced from 45 to 38</li><li>Surge of Power Imbued Ability Spirit reduced from 28 to 24</li><li>Rapid Recharge Charged Ability Spirit reduced from 20 to 16</li><li>Trooper bounty reduced by 12%</li><li>Shrines health increased from 3000 to 7000</li><li>Killing both enemy shrines will now make all of your troopers stronger (30% hp and 30% damage)</li><li>Walker Rocket Barrage radius reduced from 6m to 5m</li><li>Medic orbs now heals allied troopers 30% more</li><li>Medic orbs regen on allied troopers is now applied over 8s instead of 2s</li><li>Medic Trooper HP increased from 260 to 350 (default trooper is 300)</li><li>Medic Trooper DPS vs other troopers increased from 35 to 45 (default trooper is 35)</li><li>Medic Troopers attack range vs troopers and players increased by +5m over the default</li><li>Medic Pack pickup range scales from 18m-&gt;26m to 18m-&gt;30m (over the same time period, 10min to 18min)</li><li>Urn: Bounty increased from 700 + 230/min to 1300 + 230/min</li><li>Urn: Comeback bounty now gives more souls</li><li>Urn: Bullet and Spirit resist for carrier increased from 30% to 50%</li><li>Urn: Bonus bounty for carrier increased from 25% to 35%</li><li>Increased kill bounty for solo kills (1 attacker in the kill) by 25%, and by 15% for duo kills</li><li>Increased portion of the bounty the killer gets relative to the assist portion</li><li>Increased comeback bounties for losing team a bit</li><li>Getting hit while on Jump Pad during the window now deals 15% max hp damage</li><li>Neutral HP reduced by 20%</li><li>Neutral HP growth increased from 0.5%/min to 2.1% (less HP before ~15 minutes, more afterwards)</li><li>Neutrals spirit resistance increased by 5%</li><li>Sinner&#x27;s Sacrifice bounty reduced by 10%</li><li>Unsecured souls claim period reworked. Previously the way it worked was any unsecured souls you gained were added to a rolling 165s window, where it was divided over that time and given out, with a minimum amount given per second of 1 soul. The new system drains 0.5% (of the remaining souls) + 1.6 (scales with the 8% bounty growth per minute).</li><li>Fixed a bug causing AP Rounds to reduce damage on targets with negative resist</li><li>When Armor Piercing Rounds Proc&#x27;s, Plated Armor can no longer stop the Proc&#x27;d Bullet.</li><li>Fixed Curse dispelling targets with Unstoppable state</li><li>Initial wall jump no longer costs stamina</li><li>Stamina now regenerates faster (from 5s to 4.5s for 1 stamina)</li><li>Removed on bullet hit move slow</li><li>Time delay before sprint starts working after hero/neutral interaction reduced from 4s to 3s</li><li>Weakened Patron now gains 50% damage reduction if one defender is in the pit and 100% if two or more are (defenders must be in pit for at least 2s for reduction to kick in)</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_2_16_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Health regen reduced from 3 to 2.5</li></ul>\n')} <div class="ability blasted">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted change history</a></p>\n<h4 id="blasted"><a href="/ability/blasted">Blasted</a></h4>\n<ul><li>Blasted non-player effectiveness reduced from 35% to 25%</li><li>Blasted light melee effectiveness reduced from 50% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n<ul><li>Chain Gang will now break slightly faster when target is out of LOS</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse spirit scaling range reduced from 0.2 to 0.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Health regen reduced from 2.5 to 1.75</li></ul>\n')}</div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Stamina dash distance moved to bucket 3 (slower)</li></ul>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Essence Bomb self damage spirit scaling reduced from 1.6 to 1.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice self damage increased from 7% to 9%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n<ul><li>Move speed reduced by 0.2</li><li>Bullet damage per boon reduced from 0.616 to 0.5</li></ul>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n')} <ul><li>${html('Djinn&#x27;s Mark cooldown increased from 2.5s to 2.6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 1,
		bulletIndex: 0,
		text: "Djinn's Mark cooldown increased from 2.5s to 2.6s"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Djinn&#x27;s Mark max range from 45m to 40m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n')} <ul><li>${html('Traveler cooldown increased from 145s to 155s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Traveler cooldown increased from 145s to 155s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Traveler T1 cooldown from -25s to -35s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting deferred damage reduced from 30% to 25%</li><li>Bloodletting T2 deferred damage increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Rage buildup rate reduced by 6%</li></ul>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow cast range reduced from 15m to 13m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate T2 reduced from +90 Max Bonus Damage to 80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n<ul><li>Sprint speed spirit power scaling reduced from 0.6 to 0.5</li><li>Bullet damage per boon reduced from 0.17 to 0.14</li></ul>\n')} <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n<ul><li>Project Mind T2 spirit scaling reduced from 2.44 to 1.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_2_16_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Move speed reduced from 1 to 0.75​- Backstabber: Move speed reduced from 1.75 to 1.5​- Fleetfoot: Move speed reduced from 3.5 to 3.25​- Enduring Speed: Move speed reduced from 2.25 to 2.0​- Guardian Ward: Move speed reduced from 3 to 2.75​- Spirit Shielding: Move speed reduced from 1.75 to 1.5​- Weapon Shielding: Move speed reduced from 1.75 to 1.5​- Blood Tribute: Move speed reduced from 2.25 to 2​- Burst Fire: Move speed reduced from 1.5 to 1.25​- Headhunter: Move speed reduced from 2 to 1.75​- Heroic Aura: Move speed reduced from 2.5 to 2.25​- Counterspell: Move speed reduced from 2 to 1.75​- Debuff Remover: Move speed reduced from 2.5 to 2.25​- Fortitude: Move speed reduced from 1.5 to 1.25​- Veil Walker: Invis move speed reduced from 4 to 3.5​- Radiant Regeneration: Move speed reduced from 2 to 1.75​- Surge of Power: Move speed reduced from 2 to 1.75​- Frenzy: Move speed reduced from 1 to 0.75​- Frenzy: Active move speed reduced from 3 to 2.5​- Divine Barrier: Move speed reduced from 3 to 2.75​- Healing Tempo: Move speed reduced from 1.5 to 1.25​- Juggernaut: Move speed reduced from 2.25 to 2​- Ethereal Shift: Move speed reduced from 3 to 2.5​- Sprint ramp rate reduced from 0.75/sec to 0.6/sec</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Bonus Health reduced from +600 to +300</li><li>Now grants +15% Base Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>Bullet and Spirit Resist reduction from -18% to -16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n')} <ul><li>${html('Cooldown increased from 260s to 270s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 260s to 270s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n<ul><li>Active slow resist reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item focus-lens">${html('\n<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>\n<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>\n<ul><li>Spirit Resist reduction reduced from -12% to -9% (affects Spirit Sap)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown increased from 34s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 34s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Barrier scaling per boon reduced from 10 to 8')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n')} <ul><li>${html('Cooldown increased from 0.8s to 1.2s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 0.8s to 1.2s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Spirit Resist steal reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sprint-boots">${html('\n<p><a href="/item/sprint-boots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sprint Boots patch history</a></p>\n<h3 id="sprint-boots"><a href="/item/sprint-boots">Sprint Boots</a></h3>\n<ul><li>Sprint reduced from 2.2 to 2.0​- Long Range: Sprint reduced from 1 to 0.75​- Swift Striker: Sprint reduced from 1 to 0.75​- Mystic Slow: Sprint reduced from 1 to 0.75​- Heroic Aura: Sprint reduced from 2 to 1.5​- Hunter&#x27;s Aura: Sprint reduced from 1 to 0.75​- Sharpshooter: Sprint reduced from 1.5 to 1​- Rescue Beam: Sprint reduced from 1 to 0.75​- Trophy Collector: Sprint reduced from 2.2 to 2.0​- Disarming Hex: Sprint reduced from 1 to 0.75​- Shadow Weave: Sprint reduced from 2 to 1.5​- Lightning Scroll: Sprint reduced from 1 to 0.75​- Vortex Web: Sprint reduced from 1 to 0.75​- Enduring Speed: Slow resist reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sprint Boots',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n<ul><li>Changed from doing % of Max Health to a % of Current Health</li><li>Damage dealt increased from 5% to 7.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _2_16_mg as default, metadata, readingManifest, toc };
