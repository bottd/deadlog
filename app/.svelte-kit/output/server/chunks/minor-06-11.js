import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/minor-06-11.mg?embed=0
function Minor_06_11_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Apollo',
			'Bebop',
			'Calico',
			'Doorman',
			'Graves',
			'Grey Talon',
			'Holliday',
			'Infernus',
			'Ivy',
			'McGinnis',
			'Paige',
			'Pocket',
			'Seven',
			'Shiv',
			'Silver',
			'Victor',
			'Vindicta',
			'Viscous',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2026/minor-06-11.mg?embed=1
function Minor_06_11_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Arcane Surge', 'Opening Rounds']
	});
}
//#endregion
//#region changelogs/2026/minor-06-11.mg
var metadata = {
	title: 'Minor Update - 06-11-2026',
	steam_gid: '1835236783562074',
	published: '2026-06-12T00:59:18.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Urn give up time reduced from 75s to 60s Urn bounty reduced by 10% (unreduced for trailing team) Breakables health permanent bonus reduced from 15/25/35 to 15/20/30 for level 1/2/3 Kill comeback bounty values increased by 8% Street Brawl: All ability and item range/radius values are reduced by 10% Apollo Disengaging Sigil velocity increased by 50% Disengaging Sigil velocity\'s vertical:horizontal ratio changed from 1.5:1 to 1:1 Disengaging Sigil now allows input to alter the direction apollo launches himself (A/D biases to the left/right and W/S affect how much backwards motion is applied Disengaging Sigil T1 changed from "+30 Damage" to "Gain +25% Fire Rate and Bullet Speed for 8s" Disengaging Sigil T2 changed from "Gain +30% Fire Rate and +50% Bullet Speed for 10s" to "On Player Hit: +1 Stamina restored and resets Air Jump/Dash limit" Disengaging Sigil T3 changed from "On Player Hit: +2 stamina restored and reset Air Jump/Dash limit" to "Recast within 4s" Flawless Advance now allows Apollo to parry during it Bebop Exploding Uppercut T3 increased from +17% Missing Health to +18% Fixed Sticky Bomb T3 duration ending once the bomb went off rather than the 5s duration Sticky Bomb T3 changed from "On Cast: +5m Move Speed and +20% Fire Rate for 5s" to "On Cast: +5m Move Speed and +25% Debuff Resistance for 6s" (applies retroactively) Calico Gloom Bombs melee resist debuff now stacks additively Gloom Bombs T2 increased from -5% Melee Resist for 5s to -6% for 6s Gloom Bombs melee resist now applies on impact rather than explosion Return to Shadows damage increased from 140 to 150 Return to Shadows T2 damage increased from +65 to +75 Return to Shadows T3 heal increased from 350 to 450 Doorman Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2 Call Bell T3 spirit scaling reduced from 0.4 to 0.35 Graves Jar of Dead collection rate reduced by 20% (takes longer to gain a charge) Jar of Dead damage reduced from 17+0.27 to 16+0.25 Jar of Dead bounty increased from 5+0.25/boon to 7+0.5/boon Grasping Hands T3 Immobilize duration reduced from +1s to +0.75s Grey Talon Gun cycle time increased from 0.5775 to 0.6 (~4% DPS nerf) Bullet damage growth reduced from +1.0 to +0.85 Rain of Arrows cooldown increased from 22s to 23s Rain of Arrows T2 reduced from -13s Cooldown to -12s Holliday Powder Keg now has an alt cast behavior to place the barrel at her feet Powder Keg various improvements to the launch angles, velocities and feel of casting Powder Keg now starts with 2 charges Powder Keg Charge Time increased from 3.5s to 7s Powder Keg spirit scaling reduced from 1.6 to 1.4 Powder Keg T2 changed from "+58 Damage" to "+1 Charge" Powder Keg T3 changed from "+2 Charges and +0.4s Displacement" to "+100 Damage, +0.5 Spirit Scaling and -5s Charge Time" Fixed various issues with placing bounce pad on elevated areas Bounce Pad landing radius reduced from 12m to 9m Bounce Pad T3 changed from "+68 Stomp Damage and Improved Spirit Scaling" to "+0.7s Stomp Stun" (only triggers from Holliday) Infernus Fixed Afterburn Max duration refreshing not properly accounting for both Debuff Resist and +Ability Duration Fixed Concussive Combustion cooldown not updating when getting the T2 or other CD reducing items when the ability is on cooldown Ivy Fixed a bug where Stone Form could sometimes do significantly more damage than intended McGinnis Mini Turret DPS rescaled from 30+0.39 to 24+0.42 (break even at 200 spirit power) Mini Turrets T3 Fire Rate reduced from +30% to +25% Fixed some rare cases where Heavy Barrage would stop working Heavy Barrage DPS reduced from 22.5 to 21 Paige Rallying Charge distance for max amp reduced from 350m to 250m Rallying Charge T2 increased from -30s Cooldown to -50s Plot Armor barrier spirit scaling increased from 1.3 to 1.5 Plot Armor T3 barrier spirit scaling increased from +0.3 to +0.5 Pocket Bullet damage growth reduced from +0.2 to +0.16 Flying Cloak T3 reduced from -13s Cooldown to -12s Affliction now does half damage on objectives Seven Bullet damage growth reduced from 0.337 to 0.24 Power Surge T3 reduced from +12s Duration to +10s Storm Cloud now hits breakables Shiv Killing Blow now has +30% more cooldown whenever it does not impact a player Silver Lycan Curse cooldown increased from 40s to 70s Lycan Curse T3 no longer heals Viscous Puddle Punch T2 increased from +40% Lifesteal to +60% Goo Ball T2 now also increases Bullet and Spirit Resist by +10% Victor Aura of Suffering radius reduced from 9m to 8m Aura of Suffering T3 now also increases radius by +1m Fixed some client performance issues when using Aura of Suffering Shocking Reanimation cooldown increased from 230s to 240s Shocking Reanimation T3 reduced from -120s Cooldown to -110s Shocking Reanimation T3 increased from +150 Damage to +175 Vindicta Assassinate Max Bonus Damage spirit scaling increased from 1.7 to 2.0 Warden Bullet falloff reduced from 20m->58m to 18m->47m Alchemical Flask spirit scaling reduced from 0.73 to 0.63 Alchemical Flask T2 reduced from +40 Damage to +35 Alchemical Flask T2 increased from -20% Weapon Damage to -25% Willpower spirit scaling increased from +0.5 to +0.8 Binding Word T3 reduced from -18s Cooldown to -14s Last Stand lifesteal increased from 65% to 75% Last Stand T2 increased from -30s Cooldown to -35s Last Stand T3 increased from +3s Duration to +4s Opening Rounds Conditional Weapon Damage bonus reduced from 30% to 25% Spirit Power increased from +4 to +7 Arcane Surge Fixed various cases with the bonuses not working',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-06-05',
			to: '2026-06-12'
		},
		after: {
			from: '2026-06-13',
			to: '2026-06-27'
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
		title: 'Disengaging Sigil',
		id: 'disengaging-sigil'
	},
	{
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
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
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 3,
		title: 'Return to Shadows',
		id: 'return-to-shadows'
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
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
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
		title: 'Powder Keg Charge Time',
		id: 'powder-keg-charge-time'
	},
	{
		level: 3,
		title: 'Powder Keg',
		id: 'powder-keg-1'
	},
	{
		level: 3,
		title: 'Bounce Pad',
		id: 'bounce-pad'
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
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion'
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
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 3,
		title: 'Heavy Barrage DPS',
		id: 'heavy-barrage-dps'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
	},
	{
		level: 3,
		title: 'Rallying Charge',
		id: 'rallying-charge'
	},
	{
		level: 3,
		title: 'Plot Armor',
		id: 'plot-armor'
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
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
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
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Assassinate Max Bonus Damage',
		id: 'assassinate-max-bonus-damage'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
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
		title: 'Alchemical Flask',
		id: 'alchemical-flask'
	},
	{
		level: 3,
		title: 'Willpower',
		id: 'willpower'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Arcane Surge',
		id: 'arcane-surge'
	},
	{
		level: 2,
		title: 'Opening Rounds',
		id: 'opening-rounds'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-06-05',
			to: '2026-06-12'
		},
		after: {
			from: '2026-06-13',
			to: '2026-06-27'
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
			name: 'Ivy',
			id: 'ivy'
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
			name: 'Vindicta',
			id: 'vindicta'
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
			kind: 'item',
			name: 'Arcane Surge',
			id: 'arcane-surge'
		},
		{
			kind: 'item',
			name: 'Opening Rounds',
			id: 'opening-rounds'
		}
	],
	related: []
};
function Minor_06_11_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn give up time reduced from 75s to 60s</li><li>Urn bounty reduced by 10% (unreduced for trailing team)</li><li>Breakables health permanent bonus reduced from 15/25/35 to 15/20/30 for level 1/2/3</li><li>Kill comeback bounty values increased by 8%</li><li>Street Brawl: All ability and item range/radius values are reduced by 10%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	Minor_06_11_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability disengaging-sigil">${html('\n<p><a href="/ability/disengaging-sigil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Disengaging Sigil change history</a></p>\n<h4 id="disengaging-sigil"><a href="/ability/disengaging-sigil">Disengaging Sigil</a></h4>\n<ul><li>Disengaging Sigil velocity increased by 50%</li><li>Disengaging Sigil velocity&#x27;s vertical:horizontal ratio changed from 1.5:1 to 1:1</li><li>Disengaging Sigil now allows input to alter the direction apollo launches himself (A/D biases to the left/right and W/S affect how much backwards motion is applied</li><li>Disengaging Sigil T1 changed from &quot;+30 Damage&quot; to &quot;Gain +25% Fire Rate and Bullet Speed for 8s&quot;</li><li>Disengaging Sigil T2 changed from &quot;Gain +30% Fire Rate and +50% Bullet Speed for 10s&quot; to &quot;On Player Hit: +1 Stamina restored and resets Air Jump/Dash limit&quot;</li><li>Disengaging Sigil T3 changed from &quot;On Player Hit: +2 stamina restored and reset Air Jump/Dash limit&quot; to &quot;Recast within 4s&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Disengaging Sigil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance now allows Apollo to parry during it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Exploding Uppercut T3 increased from +17% Missing Health to +18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Fixed Sticky Bomb T3 duration ending once the bomb went off rather than the 5s duration</li><li>Sticky Bomb T3 changed from &quot;On Cast: +5m Move Speed and +20% Fire Rate for 5s&quot; to &quot;On Cast: +5m Move Speed and +25% Debuff Resistance for 6s&quot; (applies retroactively)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n<ul><li>Gloom Bombs melee resist debuff now stacks additively</li><li>Gloom Bombs T2 increased from -5% Melee Resist for 5s to -6% for 6s</li><li>Gloom Bombs melee resist now applies on impact rather than explosion</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n')} <ul><li>${html('Return to Shadows damage increased from 140 to 150')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Return to Shadows damage increased from 140 to 150'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Return to Shadows T2 damage increased from +65 to +75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Return to Shadows T2 damage increased from +65 to +75'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Return to Shadows T3 heal increased from 350 to 450')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n<ul><li>Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2</li><li>Call Bell T3 spirit scaling reduced from 0.4 to 0.35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead collection rate reduced by 20% (takes longer to gain a charge)</li><li>Jar of Dead damage reduced from 17+0.27 to 16+0.25</li><li>Jar of Dead bounty increased from 5+0.25/boon to 7+0.5/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands T3 Immobilize duration reduced from +1s to +0.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Gun cycle time increased from 0.5775 to 0.6 (~4% DPS nerf)</li><li>Bullet damage growth reduced from +1.0 to +0.85</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n')} <ul><li>${html('Rain of Arrows cooldown increased from 22s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rain of Arrows cooldown increased from 22s to 23s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rain of Arrows T2 reduced from -13s Cooldown to -12s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg now has an alt cast behavior to place the barrel at her feet</li><li>Powder Keg various improvements to the launch angles, velocities and feel of casting</li><li>Powder Keg now starts with 2 charges</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability powder-keg-charge-time">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg Charge Time change history</a></p>\n<h4 id="powder-keg-charge-time"><a href="/ability/powder-keg">Powder Keg Charge Time</a></h4>\n<ul><li>Powder Keg Charge Time increased from 3.5s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg Charge Time'
	});
	$$renderer.push(
		`<!----></div> <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg-1"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg spirit scaling reduced from 1.6 to 1.4</li><li>Powder Keg T2 changed from &quot;+58 Damage&quot; to &quot;+1 Charge&quot;</li><li>Powder Keg T3 changed from &quot;+2 Charges and +0.4s Displacement&quot; to &quot;+100 Damage, +0.5 Spirit Scaling and -5s Charge Time&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bounce-pad">${html('\n<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>\n<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>\n<ul><li>Fixed various issues with placing bounce pad on elevated areas</li><li>Bounce Pad landing radius reduced from 12m to 9m</li><li>Bounce Pad T3 changed from &quot;+68 Stomp Damage and Improved Spirit Scaling&quot; to &quot;+0.7s Stomp Stun&quot; (only triggers from Holliday)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Bounce Pad'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Fixed Afterburn Max duration refreshing not properly accounting for both Debuff Resist and +Ability Duration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n<ul><li>Fixed Concussive Combustion cooldown not updating when getting the T2 or other CD reducing items when the ability is on cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Fixed a bug where Stone Form could sometimes do significantly more damage than intended</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret DPS rescaled from 30+0.39 to 24+0.42 (break even at 200 spirit power)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets T3 Fire Rate reduced from +30% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Fixed some rare cases where Heavy Barrage would stop working</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage-dps">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage DPS change history</a></p>\n<h4 id="heavy-barrage-dps"><a href="/ability/heavy-barrage">Heavy Barrage DPS</a></h4>\n<ul><li>Heavy Barrage DPS reduced from 22.5 to 21</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n<ul><li>Rallying Charge distance for max amp reduced from 350m to 250m</li><li>Rallying Charge T2 increased from -30s Cooldown to -50s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability plot-armor">${html('\n<p><a href="/ability/plot-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Plot Armor change history</a></p>\n<h4 id="plot-armor"><a href="/ability/plot-armor">Plot Armor</a></h4>\n<ul><li>Plot Armor barrier spirit scaling increased from 1.3 to 1.5</li><li>Plot Armor T3 barrier spirit scaling increased from +0.3 to +0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Plot Armor'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Bullet damage growth reduced from +0.2 to +0.16</li></ul>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak T3 reduced from -13s Cooldown to -12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction now does half damage on objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Bullet damage growth reduced from 0.337 to 0.24</li></ul>\n')} <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge T3 reduced from +12s Duration to +10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud now hits breakables</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow now has +30% more cooldown whenever it does not impact a player</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n')} <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n')} <ul><li>${html('Lycan Curse cooldown increased from 40s to 70s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Lycan Curse cooldown increased from 40s to 70s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lycan Curse T3 no longer heals')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n')} <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n')} <ul><li>${html('Aura of Suffering radius reduced from 9m to 8m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Aura of Suffering radius reduced from 9m to 8m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Aura of Suffering T3 now also increases radius by +1m')}</li> <li>${html('Fixed some client performance issues when using Aura of Suffering')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation cooldown increased from 230s to 240s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Shocking Reanimation cooldown increased from 230s to 240s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation T3 reduced from -120s Cooldown to -110s')}</li> <li>${html('Shocking Reanimation T3 increased from +150 Damage to +175')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability assassinate-max-bonus-damage">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Max Bonus Damage change history</a></p>\n<h4 id="assassinate-max-bonus-damage"><a href="/ability/assassinate">Assassinate Max Bonus Damage</a></h4>\n<ul><li>Assassinate Max Bonus Damage spirit scaling increased from 1.7 to 2.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate Max Bonus Damage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch T2 increased from +40% Lifesteal to +60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball T2 now also increases Bullet and Spirit Resist by +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet falloff reduced from 20m-&gt;58m to 18m-&gt;47m</li></ul>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n<ul><li>Alchemical Flask spirit scaling reduced from 0.73 to 0.63</li><li>Alchemical Flask T2 reduced from +40 Damage to +35</li><li>Alchemical Flask T2 increased from -20% Weapon Damage to -25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n<ul><li>Willpower spirit scaling increased from +0.5 to +0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div> <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word T3 reduced from -18s Cooldown to -14s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand lifesteal increased from 65% to 75%</li><li>Last Stand T2 increased from -30s Cooldown to -35s</li><li>Last Stand T3 increased from +3s Duration to +4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	Minor_06_11_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item arcane-surge">${html('\n<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>\n<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>\n<ul><li>Fixed various cases with the bonuses not working</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arcane Surge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item opening-rounds">${html('\n<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>\n<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>\n<ul><li>Conditional Weapon Damage bonus reduced from 30% to 25%</li><li>Spirit Power increased from +4 to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Opening Rounds',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { Minor_06_11_mg as default, metadata, readingManifest, toc };
