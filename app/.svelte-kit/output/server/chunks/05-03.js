import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/05-03.mg?embed=0
function _5_03_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Vindicta',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/05-03.mg
var metadata = {
	title: '05-03-2024 Update',
	thread_id: '427',
	published: '2024-05-03T13:02:54-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Added a Recommend A Friend button to the dashboard that you can use to send us requests for people to include in our playtesting Added a Resources page to the dashboard which contains a browsable item shop Added overhead text display when another hero uses active items The hotkeys F1-F5 to change cameras to allied heroes now maps directly to the order of heroes on the top bar left to right Added the Patron to the spectate-when-dead cycle if the enemy is in your base or everyone on your team is dead Added support for Flex Items in the Hero Sandbox Increased the range of the mouse sensitivity slider from 0.5->4.0 to 0.05->8.0 Increased the default framerate cap from 120 to 400 Improved UI display when endgame objectives are being attacked Added music for when the base is under attack Changed the local player icon on the the minimap to always be on top of enemy icons Shop music will now only play for shops players can access Postgame graphs now default to team stats rather than individual Added borders around hero icons on the minimap when watching replays/spectating Top bar now shows incoming players before they are fully connected Added console command to hide the bar at the bottom in replays (\'citadel_hide_replay_hud 1\' to hide it, \'citadel_hide_replay_hud 0\' to bring it back) Various VOIP improvements Fixed open mic threshold Fixed various consistency issues with the presentation of Souls terminology, icons, etc Fixed Flying Cloak teleporting players into geometry or out of the world Fixed Warp Stone teleporting you through geometry Fixed Fixation decimal point display Fixed Parry animation not playing Fixed various issues with the spectate UI display Removed the slow climbing vertical recoil on Yamato\'s alt fire Fixed AP count not showing if you are dead, spectating a team mate or when holding alt/tab to upgrade your abilities Troopers DPS vs Lane Guardians reduced from 44 to 36 Objectives now have 80% damage reduction anti-backdoor defense when there haven\'t been creeps nearby in a while The uncapturable zipline nodes near your base now extend out 2 more nodes (this means attackers can\'t capture ziplines quite as close to the enemy base) You are now silenced while carrying the Urn Urn bounty increased from 900 + 160/minute to 900 + 200/minute Vaults base bounty increased from 150 to 200 Abrams Base Health increased from 550 to 600 Siphon DPS increased from 24 to 35 Bebop Weapon no longer has horizontal/vertical recoil Dynamo Singularity DPS increased from 48 to 60 Singularity T3 Max HP DPS increased from 3.2% to 3.8% Grey Talon Charge Shot damage increased from 95 to 105 Charge Shot T2 damage reduced from 80 to 70 Guided Owl damage increased from 200 to 300 Haze Bullet Dance bonus Fire Rate reduced from +30 to +20 Smoke Bomb duration scaling from Spirit improved from 0.2 to 0.3 Infernus Catalyst no longer slows Infernus to 1.3 m/s during the cast delay Concussive Combustion damage increased from 130 to 160 Kelvin Frost Grenade T3 bonus damage increased from +100 to +175 Lady Geist Blood Bomb damage increased from 80 to 100 Blood Bomb T2 damage increased from +65 to +70 Blood Bomb tooltip fixed to reference the correct self damage type and that it can be reduced with armor Malice damage amp per shard increased from 10% to 15% Lash Grapple cooldown reduced from 55 to 45 Flog Damage increased from 55 to 65 Flog lifesteal from heroes increased from 70% to 80% of damage dealt Flog lifesteal from non-heroes reduced from 35% to 30% of damage dealt Death Slam T1 from +3m to +5m Fixed Death Slam\'s targeting cone not finding enemies near the edges Fixed Death Slam to only target enemies who stay in the targeting cone McGinnis Heavy Barrage now reduces your speed rather than setting it to a low cap (by itself this change isn\'t a buff or a nerf, but it allows you to buy items to move faster during the ultimate) Heavy Barrage camera interaction with Fleetfoot Boots has been fixed Mo & Krill Sand Blast range increased from 25m to 30m Sand Blast width increased from 3m to 5m Sand Blast is now permissive with small obstructions in the way Burrow no longer loses its state as you change elevations Burrow now knocks enemies up when you come up Combo DPS increased from 50 to 60 No longer listed as a recommended new player hero Vindicta Base Bullet Damage reduced from 15 to 14 Bullet Damage gained per boon reduced from 0.88 to 0.7 (these are gained occasionally as you earn souls, up to 11 times) Stake T1 bonus duration reduced from +1.5s to +1.0s Is now a recommended hero for new players Yamato Crimson Slash radius increased from 11m to 12m Crimson Slash fire rate debuff duration increased from 3s to 4s Crimson Slash T2 changed from "-5s Cooldown" to "10% Max Health heal on hero hit" Crimson Slash T3 changed from "12% Max Health heal on hero hit" to "-6s Cooldown" Power Slash T1 Bullet Resist increased from 40% to 60% Flying Strike cooldown reduced from 35 to 20 Flying Strike T2 changed from "-15s Cooldown" to "+20 Cast Range" Flying Strike range no longer scales with Spirit Shadow Explosion bonus Spirit per victim increased from 10 to 15 Shadow Explosion bonus Fire Rate per victim increased from 5 to 10 Shadow Explosion buff duration increased from 8s to 15s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-04-19',
			to: '2024-05-03'
		},
		after: {
			from: '2024-05-04',
			to: '2024-05-10'
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
		title: 'Siphon DPS',
		id: 'siphon-dps'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Singularity DPS',
		id: 'singularity-dps'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Charge Shot',
		id: 'charge-shot'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 3,
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Catalyst',
		id: 'catalyst'
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
		title: 'Blood Bomb',
		id: 'blood-bomb'
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
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Grapple',
		id: 'grapple'
	},
	{
		level: 3,
		title: 'Flog Damage',
		id: 'flog-damage'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog'
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
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Sand Blast',
		id: 'sand-blast'
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
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash'
	},
	{
		level: 3,
		title: 'Flying Strike',
		id: 'flying-strike'
	},
	{
		level: 3,
		title: 'Shadow Explosion',
		id: 'shadow-explosion'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-04-19',
			to: '2024-05-03'
		},
		after: {
			from: '2024-05-04',
			to: '2024-05-10'
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
			name: 'Dynamo',
			id: 'dynamo'
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
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		}
	],
	related: []
};
function _5_03_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a Recommend A Friend button to the dashboard that you can use to send us requests for people to include in our playtesting</li><li>Added a Resources page to the dashboard which contains a browsable item shop</li><li>Added overhead text display when another hero uses active items</li><li>The hotkeys F1-F5 to change cameras to allied heroes now maps directly to the order of heroes on the top bar left to right</li><li>Added the Patron to the spectate-when-dead cycle if the enemy is in your base or everyone on your team is dead</li><li>Added support for Flex Items in the Hero Sandbox</li><li>Increased the range of the mouse sensitivity slider from 0.5-&gt;4.0 to 0.05-&gt;8.0</li><li>Increased the default framerate cap from 120 to 400</li><li>Improved UI display when endgame objectives are being attacked</li><li>Added music for when the base is under attack</li><li>Changed the local player icon on the the minimap to always be on top of enemy icons</li><li>Shop music will now only play for shops players can access</li><li>Postgame graphs now default to team stats rather than individual</li><li>Added borders around hero icons on the minimap when watching replays/spectating</li><li>Top bar now shows incoming players before they are fully connected</li><li>Added console command to hide the bar at the bottom in replays (&#x27;citadel_hide_replay_hud 1&#x27; to hide it, &#x27;citadel_hide_replay_hud 0&#x27; to bring it back)</li><li>Various VOIP improvements</li><li>Fixed open mic threshold</li><li>Fixed various consistency issues with the presentation of Souls terminology, icons, etc</li><li>Fixed Flying Cloak teleporting players into geometry or out of the world</li><li>Fixed Warp Stone teleporting you through geometry</li><li>Fixed Fixation decimal point display</li><li>Fixed Parry animation not playing</li><li>Fixed various issues with the spectate UI display</li><li>Removed the slow climbing vertical recoil on Yamato&#x27;s alt fire</li><li>Fixed AP count not showing if you are dead, spectating a team mate or when holding alt/tab to upgrade your abilities</li><li>Troopers DPS vs Lane Guardians reduced from 44 to 36</li><li>Objectives now have 80% damage reduction anti-backdoor defense when there haven&#x27;t been creeps nearby in a while</li><li>The uncapturable zipline nodes near your base now extend out 2 more nodes (this means attackers can&#x27;t capture ziplines quite as close to the enemy base)</li><li>You are now silenced while carrying the Urn</li><li>Urn bounty increased from 900 + 160/minute to 900 + 200/minute</li><li>Vaults base bounty increased from 150 to 200</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_03_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Base Health increased from 550 to 600</li></ul>\n')} <div class="ability siphon-dps">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon DPS change history</a></p>\n<h4 id="siphon-dps"><a href="/ability/siphon-life">Siphon DPS</a></h4>\n<ul><li>Siphon DPS increased from 24 to 35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon DPS'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero bebop">\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Weapon no longer has horizontal/vertical recoil</li></ul>\n</div>\n')} <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability singularity-dps">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity DPS change history</a></p>\n<h4 id="singularity-dps"><a href="/ability/singularity">Singularity DPS</a></h4>\n<ul><li>Singularity DPS increased from 48 to 60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity T3 Max HP DPS increased from 3.2% to 3.8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charge-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charge Shot change history</a></p>\n<h4 id="charge-shot"><a href="/ability/charged-shot">Charge Shot</a></h4>\n')} <ul><li>${html('Charge Shot damage increased from 95 to 105')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Charge Shot damage increased from 95 to 105'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Charge Shot T2 damage reduced from 80 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Charge Shot T2 damage reduced from 80 to 70'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charge Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl damage increased from 200 to 300')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Guided Owl damage increased from 200 to 300'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance bonus Fire Rate reduced from +30 to +20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb duration scaling from Spirit improved from 0.2 to 0.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability catalyst">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst change history</a></p>\n<h4 id="catalyst"><a href="/ability/napalm">Catalyst</a></h4>\n<ul><li>Catalyst no longer slows Infernus to 1.3 m/s during the cast delay</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n')} <ul><li>${html('Concussive Combustion damage increased from 130 to 160')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Concussive Combustion damage increased from 130 to 160'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade T3 bonus damage increased from +100 to +175</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability blood-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blood Bomb change history</a></p>\n<h4 id="blood-bomb"><a href="/ability/essence-bomb">Blood Bomb</a></h4>\n')} <ul><li>${html('Blood Bomb damage increased from 80 to 100')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Blood Bomb damage increased from 80 to 100'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Blood Bomb T2 damage increased from +65 to +70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Blood Bomb T2 damage increased from +65 to +70'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Blood Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Blood Bomb tooltip fixed to reference the correct self damage type and that it can be reduced with armor</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice damage amp per shard increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n')} <ul><li>${html('Grapple cooldown reduced from 55 to 45')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Grapple cooldown reduced from 55 to 45'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog-damage">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog Damage change history</a></p>\n<h4 id="flog-damage"><a href="/ability/flog">Flog Damage</a></h4>\n<ul><li>Flog Damage increased from 55 to 65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n<ul><li>Flog lifesteal from heroes increased from 70% to 80% of damage dealt</li><li>Flog lifesteal from non-heroes reduced from 35% to 30% of damage dealt</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam T1 from +3m to +5m</li><li>Fixed Death Slam&#x27;s targeting cone not finding enemies near the edges</li><li>Fixed Death Slam to only target enemies who stay in the targeting cone</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Heavy Barrage now reduces your speed rather than setting it to a low cap (by itself this change isn&#x27;t a buff or a nerf, but it allows you to buy items to move faster during the ultimate)</li><li>Heavy Barrage camera interaction with Fleetfoot Boots has been fixed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast range increased from 25m to 30m</li><li>Sand Blast width increased from 3m to 5m</li><li>Sand Blast is now permissive with small obstructions in the way</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div> <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow no longer loses its state as you change elevations</li><li>Burrow now knocks enemies up when you come up</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo-dps">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>\n<h4 id="combo-dps"><a href="/ability/combo">Combo DPS</a></h4>\n<ul><li>Combo DPS increased from 50 to 60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo DPS'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>No longer listed as a recommended new player hero</li></ul>\n')}</div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Base Bullet Damage reduced from 15 to 14</li><li>Bullet Damage gained per boon reduced from 0.88 to 0.7 (these are gained occasionally as you earn souls, up to 11 times)</li></ul>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake T1 bonus duration reduced from +1.5s to +1.0s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Is now a recommended hero for new players</li></ul>\n')}</div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n')} <ul><li>${html('Crimson Slash radius increased from 11m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Crimson Slash radius increased from 11m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Crimson Slash fire rate debuff duration increased from 3s to 4s')}</li> <li>${html('Crimson Slash T2 changed from &quot;-5s Cooldown&quot; to &quot;10% Max Health heal on hero hit&quot;')}</li> <li>${html('Crimson Slash T3 changed from &quot;12% Max Health heal on hero hit&quot; to &quot;-6s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash T1 Bullet Resist increased from 40% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-strike">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Strike change history</a></p>\n<h4 id="flying-strike"><a href="/ability/flying-slash">Flying Strike</a></h4>\n')} <ul><li>${html('Flying Strike cooldown reduced from 35 to 20')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Flying Strike cooldown reduced from 35 to 20'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flying Strike T2 changed from &quot;-15s Cooldown&quot; to &quot;+20 Cast Range&quot;')}</li> <li>${html('Flying Strike range no longer scales with Spirit')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-explosion">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Explosion change history</a></p>\n<h4 id="shadow-explosion"><a href="/ability/shadow-transformation">Shadow Explosion</a></h4>\n<ul><li>Shadow Explosion bonus Spirit per victim increased from 10 to 15</li><li>Shadow Explosion bonus Fire Rate per victim increased from 5 to 10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Explosion'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Explosion buff duration increased from 8s to 15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _5_03_mg as default, metadata, readingManifest, toc };
