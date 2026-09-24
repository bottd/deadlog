import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/04-17.mg?embed=0
function _4_17_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Calico',
			'Grey Talon',
			'Haze',
			'Holliday',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mirage',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Sinclair',
			'Vindicta',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2025/04-17.mg?embed=1
function _4_17_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Debuff Reducer',
			'Decay',
			'Divine Barrier',
			'Echo Shard',
			'Ethereal Shift',
			'Fortitude',
			'Healbane',
			'Healing Rite',
			'Knockdown',
			'Phantom Strike',
			'Restorative Locket',
			'Spirit Strike'
		]
	});
}
//#endregion
//#region changelogs/2025/04-17.mg
var metadata = {
	title: '04-17-2025 Update',
	thread_id: '61382',
	published: '2025-04-17T18:40:16-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Soul Orbs no longer have special duplication rules before 8 minutes. Soul splitting rules are now the same before 8 minutes as afterwards. Adjusted trooper economy to compensate. There is also no longer a bounty bump that occurs at 8 minutes. Wave interval increased from 25s to 30s (bounty values adjusted by the same ratio) Guardians attack range reduced from 38.1m to 35m Guardians melee attempt range reduced from 6.1m to 5m Guardians melee damage range reduced from 8m to 7m Players can no longer Parry troopers Medic Trooper: Heal no longer has charges (was 3) Medic Trooper: Cooldown reduced from 35s to 6s (this was the previous setup before) Medic Trooper: Fixed healing sometimes not functioning on bounce when there are walls nearby Troopers will no longer aggro to you when you shoot them while they are attacking a Guardian Urn now reveals you immediately First urn is now considered for comeback mechanics (15% NW delta) Urn now has a visual indication on the model to indicate if its a side favored pickup Urn will no longer wait indefinitely for someone nearby to pick him up. He'll ignore loiterers after 20 seconds in aggregate and start running back home Fixed Debuff Resistance affecting Urn pickup time Heavy Melee Cancel momentum is significantly reduced Melee troopers will no longer see and follow players around corners and through veils Smoothed out trooper navigation in some spots of the map where they need to drop down Troopers that are attacking shrines are no longer distracted from their task by distant enemy troopers Troopers now know to cross the base and attack the other shrine once their near one is defeated Fixed a bug where troopers would rapidly change targets when multiple enemies are in range Fixed a bug where troopers would fidget with their facing direction when walking without a target Fixed a bug where troopers would fear really steep stairs Fixed a bug where troopers would flash their targeting flare at the targeted player every time they came into camera or line of sight Hollow Point Ward: Spirit Shield reduced from 95 to 70 Hollow Point Ward: Weapon Damage reduced from 20% to 18% Enchanter's Barrier: Reduced from 300 to 250 Combat Barrier: Reduced from 325 to 275 Bebop Base stamina reduced from 3 to 2 Base regen reduced from 3 to 1.5 No longer gains +1% Spirit Resist Per Boon Calico Base ammo reduced from 12 to 9 Gun damage growth reduced by 25% Gloom Bombs T1 and T2 swapped Grey Talon HP regen reduced from 2.5 to 1.5 Move Speed spirit scaling reduced from 0.025 to 0.014 Charged Shot damage reduced from 100 to 90 Charged Shot spirit scaling reduced from 1.6 to 1.2 Charged Shot T3 spirit scaling increased from +0.9 to +1.3 Haze Sleep Dagger now causes the target to be unable to slide while drowsy Sleep Dagger T2 now also reduces Stamina Regeneration by 60% for 6s Bullet Dance Fire Rate increased from +30% to +35% Bullet Dance T2 increased from -40s Cooldown to -50s Holliday Base gun damage reduced from 29 to 26 Gun damage growth increased from 1.53 to 1.72 Lasso bonus bounce pad duration reduced from 1.5 to 1s Fixed being able to Heavy Melee while casting Lasso Ivy Headshot hitbox is smaller now (no longer includes the ears) Fixed visibility issues with Air Drop Kelvin Base Spirit Resist reduced from 15% to 0 Now gains +1% Spirit Resist per boon Base Sprint reduced from 2 to 1.5 Frozen Shelter cooldown increased from 130s to 140s Frozen Shelter T2 Cooldown increased from -40s to -50s Lady Geist Fixed some cases where Life Swap did not work Lash Ground Strike base damage reduced from 90 to 75 Death Slam lock-on time increased from 0.6s to 0.7s McGinnis Mini Turrets tracking speed increased by 15% Mini Turrets bullet velocity increased by 10% Mini Turrets T3 now also increases duration by 18s Mirage Base Health reduced from 550 to 500 Djinn's Mark T1 slow reduced from 80% to 60% Fire Scarabs Bullet Resist Reduction reduced from -10% to -8% Mo & Krill Burrow T2 reduced from +140 Damage to +100 Burrow spirit scaling increased from 1.4 to 1.7 Combo DPS reduced from 60 to 40 Combo spirit scaling increased from 1.1 to 1.3 Paradox Kinetic Carbine T2 reduced from -10s Cooldown to -8s Pocket Base bullet damage reduced from 4.5 to 3.9 Bullet damage growth increased from 0.28 to 0.32 Enchanter's Satchel damage reduced from 100 to 70 Enchanter's Satchel T2 damage increased from +80 to +110 Seven Storm Cloud lightning bolt damage reduced from 150 to 100 Storm Cloud lightning bolt radius increased from 6m to 7m Sinclair Bullet damage reduced from 23 to 20 Fixed Rabbit Hex Damage Amp not affecting allied damage Rabbit Hex Damage Amp reduced from 25% to 15% Rabbit Hex Damage Amp spirit scaling reduced from 0.1 to 0.06 Rabbit Hex T3 now also increases Damage Amp by +5% Rabbit Hex Move Speed increased from 15% to 22% Rabbit Hex no longer deals 80 damage Vexing Bolt min damage reduced from 75 to 65 Vexing Bolt max damage reduced from 150 to 130 Vindicta Crow Familiar Cooldown increased from 26s to 28s Crow Familiar T3 Spirit and Bullet Resist Reduction reduced from -12% to -8% Warden Base health increased from 550 to 575 Base regen increased from 2 to 3 Fixed Phantom Strike and Warp Stone working through Binding Ward capture Healing Rite Total HP Regen reduced from 370 to 350 Cooldown increased from 64s to 70s Healbane Heal on kill changed from 350 to 275 Divine Barrier Cooldown increased from 30s to 40s Restorative Locket Range to gain charges reduced from 50m to 35m Heal per stack reduced from 32 to 30 Debuff Reducer Health reduced from 125 to 75 Debuff Reduction reduced from 28 to 24% Fortitude Weapon Damage reduced from 27% to 23% Out of combat time increased from 10s to 13s Phantom Strike Cooldown increased from 26s to 30s Spirit Strike Spirit Resist Reduction reduced from 12% to 8% Decay Health Regen reduced from 1.5 to 1 Spirit Power reduced from +7 to +4 Cooldown increased from 33s to 36s Knockdown Now removes all momentum and brings heroes straight down Ethereal Shift Moved from Tier 3 to Tier 4 Can now be canceled early Duration increased from 3.5s to 4s Max speed during activation increased from 2m/s to 3m/s Echo Shard Cooldown increased from 21s to 23s",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-04-05',
			to: '2025-04-18'
		},
		after: {
			from: '2025-04-19',
			to: '2025-05-03'
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
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Charged Shot',
		id: 'charged-shot'
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
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
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
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike'
	},
	{
		level: 3,
		title: 'Death Slam',
		id: 'death-slam'
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
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Burrow',
		id: 'burrow'
	},
	{
		level: 3,
		title: 'Combo DPS',
		id: 'combo-dps'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Sinclair',
		id: 'sinclair'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex'
	},
	{
		level: 3,
		title: 'Rabbit Hex Damage Amp',
		id: 'rabbit-hex-damage-amp'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex-1'
	},
	{
		level: 3,
		title: 'Rabbit Hex Move Speed',
		id: 'rabbit-hex-move-speed'
	},
	{
		level: 3,
		title: 'Rabbit Hex',
		id: 'rabbit-hex-2'
	},
	{
		level: 3,
		title: 'Vexing Bolt',
		id: 'vexing-bolt'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Crow Familiar Cooldown',
		id: 'crow-familiar-cooldown'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Debuff Reducer',
		id: 'debuff-reducer'
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
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Fortitude',
		id: 'fortitude'
	},
	{
		level: 2,
		title: 'Healbane',
		id: 'healbane'
	},
	{
		level: 2,
		title: 'Healing Rite',
		id: 'healing-rite'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
	},
	{
		level: 2,
		title: 'Spirit Strike',
		id: 'spirit-strike'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-04-05',
			to: '2025-04-18'
		},
		after: {
			from: '2025-04-19',
			to: '2025-05-03'
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
			name: 'Grey Talon',
			id: 'grey-talon'
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
			name: 'Ivy',
			id: 'ivy'
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
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Paradox',
			id: 'paradox'
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
			name: 'Sinclair',
			id: 'sinclair'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'item',
			name: 'Debuff Reducer',
			id: 'debuff-reducer'
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
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Fortitude',
			id: 'fortitude'
		},
		{
			kind: 'item',
			name: 'Healbane',
			id: 'healbane'
		},
		{
			kind: 'item',
			name: 'Healing Rite',
			id: 'healing-rite'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		},
		{
			kind: 'item',
			name: 'Spirit Strike',
			id: 'spirit-strike'
		}
	],
	related: []
};
function _4_17_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Soul Orbs no longer have special duplication rules before 8 minutes. Soul splitting rules are now the same before 8 minutes as afterwards. Adjusted trooper economy to compensate. There is also no longer a bounty bump that occurs at 8 minutes.</li><li>Wave interval increased from 25s to 30s (bounty values adjusted by the same ratio)</li><li>Guardians attack range reduced from 38.1m to 35m</li><li>Guardians melee attempt range reduced from 6.1m to 5m</li><li>Guardians melee damage range reduced from 8m to 7m</li><li>Players can no longer Parry troopers</li><li>Medic Trooper: Heal no longer has charges (was 3)</li><li>Medic Trooper: Cooldown reduced from 35s to 6s (this was the previous setup before)</li><li>Medic Trooper: Fixed healing sometimes not functioning on bounce when there are walls nearby</li><li>Troopers will no longer aggro to you when you shoot them while they are attacking a Guardian</li><li>Urn now reveals you immediately</li><li>First urn is now considered for comeback mechanics (15% NW delta)</li><li>Urn now has a visual indication on the model to indicate if its a side favored pickup</li><li>Urn will no longer wait indefinitely for someone nearby to pick him up. He&#x27;ll ignore loiterers after 20 seconds in aggregate and start running back home</li><li>Fixed Debuff Resistance affecting Urn pickup time</li><li>Heavy Melee Cancel momentum is significantly reduced</li><li>Melee troopers will no longer see and follow players around corners and through veils</li><li>Smoothed out trooper navigation in some spots of the map where they need to drop down</li><li>Troopers that are attacking shrines are no longer distracted from their task by distant enemy troopers</li><li>Troopers now know to cross the base and attack the other shrine once their near one is defeated</li><li>Fixed a bug where troopers would rapidly change targets when multiple enemies are in range</li><li>Fixed a bug where troopers would fidget with their facing direction when walking without a target</li><li>Fixed a bug where troopers would fear really steep stairs</li><li>Fixed a bug where troopers would flash their targeting flare at the targeted player every time they came into camera or line of sight</li><li>Hollow Point Ward: Spirit Shield reduced from 95 to 70</li><li>Hollow Point Ward: Weapon Damage reduced from 20% to 18%</li><li>Enchanter&#x27;s Barrier: Reduced from 300 to 250</li><li>Combat Barrier: Reduced from 325 to 275</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_4_17_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<div class="hero bebop">\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Base stamina reduced from 3 to 2</li><li>Base regen reduced from 3 to 1.5</li><li>No longer gains +1% Spirit Resist Per Boon</li></ul>\n</div>\n')} <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Base ammo reduced from 12 to 9</li><li>Gun damage growth reduced by 25%</li></ul>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n<ul><li>Gloom Bombs T1 and T2 swapped</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>HP regen reduced from 2.5 to 1.5</li><li>Move Speed spirit scaling reduced from 0.025 to 0.014</li></ul>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n')} <ul><li>${html('Charged Shot damage reduced from 100 to 90')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Charged Shot damage reduced from 100 to 90'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Charged Shot spirit scaling reduced from 1.6 to 1.2')}</li> <li>${html('Charged Shot T3 spirit scaling increased from +0.9 to +1.3')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger now causes the target to be unable to slide while drowsy</li><li>Sleep Dagger T2 now also reduces Stamina Regeneration by 60% for 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance Fire Rate increased from +30% to +35%</li><li>Bullet Dance T2 increased from -40s Cooldown to -50s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n<ul><li>Base gun damage reduced from 29 to 26</li><li>Gun damage growth increased from 1.53 to 1.72</li></ul>\n')} <div class="ability spirit-lasso">${html('\n<p><a href="/ability/spirit-lasso"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Lasso change history</a></p>\n<h4 id="spirit-lasso"><a href="/ability/spirit-lasso">Spirit Lasso</a></h4>\n<ul><li>Lasso bonus bounce pad duration reduced from 1.5 to 1s</li><li>Fixed being able to Heavy Melee while casting Lasso</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Spirit Lasso'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Headshot hitbox is smaller now (no longer includes the ears)</li></ul>\n')} <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Fixed visibility issues with Air Drop</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Base Spirit Resist reduced from 15% to 0</li><li>Now gains +1% Spirit Resist per boon</li><li>Base Sprint reduced from 2 to 1.5</li></ul>\n')} <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n')} <ul><li>${html('Frozen Shelter cooldown increased from 130s to 140s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Frozen Shelter cooldown increased from 130s to 140s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frozen Shelter T2 Cooldown increased from -40s to -50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Frozen Shelter T2 Cooldown increased from -40s to -50s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero lady-geist">\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Fixed some cases where Life Swap did not work</li></ul>\n</div>\n')} <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n')} <ul><li>${html('Ground Strike base damage reduced from 90 to 75')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Ground Strike base damage reduced from 90 to 75'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam lock-on time increased from 0.6s to 0.7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turrets tracking speed increased by 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets bullet velocity increased by 10%</li><li>Mini Turrets T3 now also increases duration by 18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n<ul><li>Base Health reduced from 550 to 500</li></ul>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark T1 slow reduced from 80% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs Bullet Resist Reduction reduced from -10% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow T2 reduced from +140 Damage to +100</li><li>Burrow spirit scaling increased from 1.4 to 1.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo-dps">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>\n<h4 id="combo-dps"><a href="/ability/combo">Combo DPS</a></h4>\n<ul><li>Combo DPS reduced from 60 to 40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo spirit scaling increased from 1.1 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T2 reduced from -10s Cooldown to -8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Base bullet damage reduced from 4.5 to 3.9</li><li>Bullet damage growth increased from 0.28 to 0.32</li></ul>\n')} <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n')} <ul><li>${html('Enchanter&#x27;s Satchel damage reduced from 100 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 0,
		text: "Enchanter's Satchel damage reduced from 100 to 70"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Enchanter&#x27;s Satchel T2 damage increased from +80 to +110')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 1,
		text: "Enchanter's Satchel T2 damage increased from +80 to +110"
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud lightning bolt damage reduced from 150 to 100</li><li>Storm Cloud lightning bolt radius increased from 6m to 7m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero sinclair">${html('\n<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>\n<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>\n<ul><li>Bullet damage reduced from 23 to 20</li></ul>\n')} <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n<ul><li>Fixed Rabbit Hex Damage Amp not affecting allied damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex-damage-amp">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex Damage Amp change history</a></p>\n<h4 id="rabbit-hex-damage-amp"><a href="/ability/rabbit-hex">Rabbit Hex Damage Amp</a></h4>\n<ul><li>Rabbit Hex Damage Amp reduced from 25% to 15%</li><li>Rabbit Hex Damage Amp spirit scaling reduced from 0.1 to 0.06</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex-1"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n<ul><li>Rabbit Hex T3 now also increases Damage Amp by +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex-move-speed">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex Move Speed change history</a></p>\n<h4 id="rabbit-hex-move-speed"><a href="/ability/rabbit-hex">Rabbit Hex Move Speed</a></h4>\n<ul><li>Rabbit Hex Move Speed increased from 15% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex Move Speed'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rabbit-hex">${html('\n<p><a href="/ability/rabbit-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rabbit Hex change history</a></p>\n<h4 id="rabbit-hex-2"><a href="/ability/rabbit-hex">Rabbit Hex</a></h4>\n<ul><li>Rabbit Hex no longer deals 80 damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Rabbit Hex'
	});
	$$renderer.push(
		`<!----></div> <div class="ability vexing-bolt">${html('\n<p><a href="/ability/vexing-bolt"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Vexing Bolt change history</a></p>\n<h4 id="vexing-bolt"><a href="/ability/vexing-bolt">Vexing Bolt</a></h4>\n<ul><li>Vexing Bolt min damage reduced from 75 to 65</li><li>Vexing Bolt max damage reduced from 150 to 130</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Sinclair',
		ability: 'Vexing Bolt'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability crow-familiar-cooldown">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar Cooldown change history</a></p>\n<h4 id="crow-familiar-cooldown"><a href="/ability/crow-familiar">Crow Familiar Cooldown</a></h4>\n<ul><li>Crow Familiar Cooldown increased from 26s to 28s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar Cooldown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar T3 Spirit and Bullet Resist Reduction reduced from -12% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero warden">\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base health increased from 550 to 575</li><li>Base regen increased from 2 to 3</li><li>Fixed Phantom Strike and Warp Stone working through Binding Ward capture</li></ul>\n</div>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_4_17_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Health reduced from 125 to 75</li><li>Debuff Reduction reduced from 28 to 24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Health Regen reduced from 1.5 to 1')}</li> <li>${html('Spirit Power reduced from +7 to +4')}</li> <li>${html('Cooldown increased from 33s to 36s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown increased from 33s to 36s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n')} <ul><li>${html('Cooldown increased from 21s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 21s to 23s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n<ul><li>Moved from Tier 3 to Tier 4</li><li>Can now be canceled early</li><li>Duration increased from 3.5s to 4s</li><li>Max speed during activation increased from 2m/s to 3m/s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Weapon Damage reduced from 27% to 23%</li><li>Out of combat time increased from 10s to 13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healbane">${html('\n<p><a href="/item/healbane"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healbane patch history</a></p>\n<h3 id="healbane"><a href="/item/healbane">Healbane</a></h3>\n<ul><li>Heal on kill changed from 350 to 275</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healbane',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n')} <ul><li>${html('Total HP Regen reduced from 370 to 350')}</li> <li>${html('Cooldown increased from 64s to 70s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 64s to 70s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Now removes all momentum and brings heroes straight down</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n')} <ul><li>${html('Cooldown increased from 26s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 26s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Range to gain charges reduced from 50m to 35m</li><li>Heal per stack reduced from 32 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>Spirit Resist Reduction reduced from 12% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _4_17_mg as default, metadata, readingManifest, toc };
