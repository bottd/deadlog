import {
	I as ee,
	Ot as e,
	P as te,
	T as t,
	at as ne,
	g as n,
	it as r,
	st as i
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a, i as o, n as s } from './vWaTnxY_.js';
function re(ee) {
	s(ee, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Infernus`,
			`Kelvin`,
			`Lady Geist`,
			`Lash`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Vindicta`,
			`Yamato`
		]
	});
}
var c = {
		title: `05-03-2024 Update`,
		thread_id: `427`,
		published: `2024-05-03T13:02:54-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added a Recommend A Friend button to the dashboard that you can use to send us requests for people to include in our playtesting Added a Resources page to the dashboard which contains a browsable item shop Added overhead text display when another hero uses active items The hotkeys F1-F5 to change cameras to allied heroes now maps directly to the order of heroes on the top bar left to right Added the Patron to the spectate-when-dead cycle if the enemy is in your base or everyone on your team is dead Added support for Flex Items in the Hero Sandbox Increased the range of the mouse sensitivity slider from 0.5->4.0 to 0.05->8.0 Increased the default framerate cap from 120 to 400 Improved UI display when endgame objectives are being attacked Added music for when the base is under attack Changed the local player icon on the the minimap to always be on top of enemy icons Shop music will now only play for shops players can access Postgame graphs now default to team stats rather than individual Added borders around hero icons on the minimap when watching replays/spectating Top bar now shows incoming players before they are fully connected Added console command to hide the bar at the bottom in replays ('citadel_hide_replay_hud 1' to hide it, 'citadel_hide_replay_hud 0' to bring it back) Various VOIP improvements Fixed open mic threshold Fixed various consistency issues with the presentation of Souls terminology, icons, etc Fixed Flying Cloak teleporting players into geometry or out of the world Fixed Warp Stone teleporting you through geometry Fixed Fixation decimal point display Fixed Parry animation not playing Fixed various issues with the spectate UI display Removed the slow climbing vertical recoil on Yamato's alt fire Fixed AP count not showing if you are dead, spectating a team mate or when holding alt/tab to upgrade your abilities Troopers DPS vs Lane Guardians reduced from 44 to 36 Objectives now have 80% damage reduction anti-backdoor defense when there haven't been creeps nearby in a while The uncapturable zipline nodes near your base now extend out 2 more nodes (this means attackers can't capture ziplines quite as close to the enemy base) You are now silenced while carrying the Urn Urn bounty increased from 900 + 160/minute to 900 + 200/minute Vaults base bounty increased from 150 to 200 Abrams Base Health increased from 550 to 600 Siphon DPS increased from 24 to 35 Bebop Weapon no longer has horizontal/vertical recoil Dynamo Singularity DPS increased from 48 to 60 Singularity T3 Max HP DPS increased from 3.2% to 3.8% Grey Talon Charge Shot damage increased from 95 to 105 Charge Shot T2 damage reduced from 80 to 70 Guided Owl damage increased from 200 to 300 Haze Bullet Dance bonus Fire Rate reduced from +30 to +20 Smoke Bomb duration scaling from Spirit improved from 0.2 to 0.3 Infernus Catalyst no longer slows Infernus to 1.3 m/s during the cast delay Concussive Combustion damage increased from 130 to 160 Kelvin Frost Grenade T3 bonus damage increased from +100 to +175 Lady Geist Blood Bomb damage increased from 80 to 100 Blood Bomb T2 damage increased from +65 to +70 Blood Bomb tooltip fixed to reference the correct self damage type and that it can be reduced with armor Malice damage amp per shard increased from 10% to 15% Lash Grapple cooldown reduced from 55 to 45 Flog Damage increased from 55 to 65 Flog lifesteal from heroes increased from 70% to 80% of damage dealt Flog lifesteal from non-heroes reduced from 35% to 30% of damage dealt Death Slam T1 from +3m to +5m Fixed Death Slam's targeting cone not finding enemies near the edges Fixed Death Slam to only target enemies who stay in the targeting cone McGinnis Heavy Barrage now reduces your speed rather than setting it to a low cap (by itself this change isn't a buff or a nerf, but it allows you to buy items to move faster during the ultimate) Heavy Barrage camera interaction with Fleetfoot Boots has been fixed Mo & Krill Sand Blast range increased from 25m to 30m Sand Blast width increased from 3m to 5m Sand Blast is now permissive with small obstructions in the way Burrow no longer loses its state as you change elevations Burrow now knocks enemies up when you come up Combo DPS increased from 50 to 60 No longer listed as a recommended new player hero Vindicta Base Bullet Damage reduced from 15 to 14 Bullet Damage gained per boon reduced from 0.88 to 0.7 (these are gained occasionally as you earn souls, up to 11 times) Stake T1 bonus duration reduced from +1.5s to +1.0s Is now a recommended hero for new players Yamato Crimson Slash radius increased from 11m to 12m Crimson Slash fire rate debuff duration increased from 3s to 4s Crimson Slash T2 changed from "-5s Cooldown" to "10% Max Health heal on hero hit" Crimson Slash T3 changed from "12% Max Health heal on hero hit" to "-6s Cooldown" Power Slash T1 Bullet Resist increased from 40% to 60% Flying Strike cooldown reduced from 35 to 20 Flying Strike T2 changed from "-15s Cooldown" to "+20 Cast Range" Flying Strike range no longer scales with Spirit Shadow Explosion bonus Spirit per victim increased from 10 to 15 Shadow Explosion bonus Fire Rate per victim increased from 5 to 10 Shadow Explosion buff duration increased from 8s to 15s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-04-19`, to: `2024-05-03` },
			after: { from: `2024-05-04`, to: `2024-05-10` }
		}
	},
	l = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Siphon DPS`, id: `siphon-dps` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Singularity DPS`, id: `singularity-dps` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Charge Shot`, id: `charge-shot` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Catalyst`, id: `catalyst` },
		{ level: 3, title: `Concussive Combustion`, id: `concussive-combustion` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Blood Bomb`, id: `blood-bomb` },
		{ level: 3, title: `Essence Bomb`, id: `essence-bomb` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Grapple`, id: `grapple` },
		{ level: 3, title: `Flog Damage`, id: `flog-damage` },
		{ level: 3, title: `Flog`, id: `flog` },
		{ level: 3, title: `Death Slam`, id: `death-slam` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Heavy Barrage`, id: `heavy-barrage` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Sand Blast`, id: `sand-blast` },
		{ level: 3, title: `Burrow`, id: `burrow` },
		{ level: 3, title: `Combo DPS`, id: `combo-dps` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 3, title: `Power Slash`, id: `power-slash` },
		{ level: 3, title: `Flying Strike`, id: `flying-strike` },
		{ level: 3, title: `Shadow Explosion`, id: `shadow-explosion` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` }
	],
	u = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-04-19`, to: `2024-05-03` },
			after: { from: `2024-05-04`, to: `2024-05-10` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` }
		],
		related: []
	},
	ie = ee(
		`<!> <!> <div><!> <div><!> <!></div></div> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <!></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div>`,
		1
	);
function d(ee) {
	var s = ie(),
		c = ne(s);
	t(
		c,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added a Recommend A Friend button to the dashboard that you can use to send us requests for people to include in our playtesting</li><li>Added a Resources page to the dashboard which contains a browsable item shop</li><li>Added overhead text display when another hero uses active items</li><li>The hotkeys F1-F5 to change cameras to allied heroes now maps directly to the order of heroes on the top bar left to right</li><li>Added the Patron to the spectate-when-dead cycle if the enemy is in your base or everyone on your team is dead</li><li>Added support for Flex Items in the Hero Sandbox</li><li>Increased the range of the mouse sensitivity slider from 0.5-&gt;4.0 to 0.05-&gt;8.0</li><li>Increased the default framerate cap from 120 to 400</li><li>Improved UI display when endgame objectives are being attacked</li><li>Added music for when the base is under attack</li><li>Changed the local player icon on the the minimap to always be on top of enemy icons</li><li>Shop music will now only play for shops players can access</li><li>Postgame graphs now default to team stats rather than individual</li><li>Added borders around hero icons on the minimap when watching replays/spectating</li><li>Top bar now shows incoming players before they are fully connected</li><li>Added console command to hide the bar at the bottom in replays (&#x27;citadel_hide_replay_hud 1&#x27; to hide it, &#x27;citadel_hide_replay_hud 0&#x27; to bring it back)</li><li>Various VOIP improvements</li><li>Fixed open mic threshold</li><li>Fixed various consistency issues with the presentation of Souls terminology, icons, etc</li><li>Fixed Flying Cloak teleporting players into geometry or out of the world</li><li>Fixed Warp Stone teleporting you through geometry</li><li>Fixed Fixation decimal point display</li><li>Fixed Parry animation not playing</li><li>Fixed various issues with the spectate UI display</li><li>Removed the slow climbing vertical recoil on Yamato&#x27;s alt fire</li><li>Fixed AP count not showing if you are dead, spectating a team mate or when holding alt/tab to upgrade your abilities</li><li>Troopers DPS vs Lane Guardians reduced from 44 to 36</li><li>Objectives now have 80% damage reduction anti-backdoor defense when there haven&#x27;t been creeps nearby in a while</li><li>The uncapturable zipline nodes near your base now extend out 2 more nodes (this means attackers can&#x27;t capture ziplines quite as close to the enemy base)</li><li>You are now silenced while carrying the Urn</li><li>Urn bounty increased from 900 + 160/minute to 900 + 200/minute</li><li>Vaults base bounty increased from 150 to 200</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var l = i(c, 2);
	re(l, {});
	var u = i(l, 2);
	n(u, 1, `hero abrams`);
	var d = r(u);
	t(
		d,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
<ul><li>Base Health increased from 550 to 600</li></ul>
`
	);
	var f = i(d, 2);
	n(f, 1, `ability siphon-dps`);
	var ae = r(f);
	t(
		ae,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon DPS change history</a></p>
<h4 id="siphon-dps"><a href="/ability/siphon-life">Siphon DPS</a></h4>
<ul><li>Siphon DPS increased from 24 to 35</li></ul>
`
	);
	var oe = i(ae, 2);
	(a(oe, { kind: `hero`, name: `Abrams`, ability: `Siphon DPS` }), e(f), e(u));
	var se = i(u, 2);
	t(
		se,
		() => `
<div class="hero bebop">
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
<ul><li>Weapon no longer has horizontal/vertical recoil</li></ul>
</div>
`
	);
	var p = i(se, 2);
	n(p, 1, `hero dynamo`);
	var ce = r(p);
	t(
		ce,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var m = i(ce, 2);
	n(m, 1, `ability singularity-dps`);
	var le = r(m);
	t(
		le,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity DPS change history</a></p>
<h4 id="singularity-dps"><a href="/ability/singularity">Singularity DPS</a></h4>
<ul><li>Singularity DPS increased from 48 to 60</li></ul>
`
	);
	var ue = i(le, 2);
	(a(ue, { kind: `hero`, name: `Dynamo`, ability: `Singularity DPS` }), e(m));
	var h = i(m, 2);
	n(h, 1, `ability singularity`);
	var de = r(h);
	t(
		de,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
<ul><li>Singularity T3 Max HP DPS increased from 3.2% to 3.8%</li></ul>
`
	);
	var fe = i(de, 2);
	(a(fe, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), e(h), e(p));
	var g = i(p, 2);
	n(g, 1, `hero grey-talon`);
	var pe = r(g);
	t(
		pe,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var _ = i(pe, 2);
	n(_, 1, `ability charge-shot`);
	var me = r(_);
	t(
		me,
		() => `
<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charge Shot change history</a></p>
<h4 id="charge-shot"><a href="/ability/charged-shot">Charge Shot</a></h4>
`
	);
	var he = i(me, 2),
		ge = r(he),
		_e = r(ge);
	t(_e, () => `Charge Shot damage increased from 95 to 105`);
	var ve = i(_e, 2);
	(o(ve, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Charge Shot damage increased from 95 to 105`
	}),
		e(ge));
	var ye = i(ge, 2),
		be = r(ye);
	t(be, () => `Charge Shot T2 damage reduced from 80 to 70`);
	var xe = i(be, 2);
	(o(xe, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Charge Shot T2 damage reduced from 80 to 70`
	}),
		e(ye),
		e(he));
	var Se = i(he, 2);
	(a(Se, { kind: `hero`, name: `Grey Talon`, ability: `Charge Shot` }), e(_));
	var v = i(_, 2);
	n(v, 1, `ability guided-owl`);
	var Ce = r(v);
	t(
		Ce,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
`
	);
	var y = i(Ce, 2),
		we = r(y),
		Te = r(we);
	t(Te, () => `Guided Owl damage increased from 200 to 300`);
	var Ee = i(Te, 2);
	(o(Ee, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Guided Owl damage increased from 200 to 300`
	}),
		e(we),
		e(y));
	var De = i(y, 2);
	(a(De, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), e(v), e(g));
	var b = i(g, 2);
	n(b, 1, `hero haze`);
	var Oe = r(b);
	t(
		Oe,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var x = i(Oe, 2);
	n(x, 1, `ability bullet-dance`);
	var ke = r(x);
	t(
		ke,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance bonus Fire Rate reduced from +30 to +20</li></ul>
`
	);
	var Ae = i(ke, 2);
	(a(Ae, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), e(x));
	var S = i(x, 2);
	n(S, 1, `ability smoke-bomb`);
	var je = r(S);
	t(
		je,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb duration scaling from Spirit improved from 0.2 to 0.3</li></ul>
`
	);
	var Me = i(je, 2);
	(a(Me, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), e(S), e(b));
	var C = i(b, 2);
	n(C, 1, `hero infernus`);
	var Ne = r(C);
	t(
		Ne,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var w = i(Ne, 2);
	n(w, 1, `ability catalyst`);
	var Pe = r(w);
	t(
		Pe,
		() => `
<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst change history</a></p>
<h4 id="catalyst"><a href="/ability/napalm">Catalyst</a></h4>
<ul><li>Catalyst no longer slows Infernus to 1.3 m/s during the cast delay</li></ul>
`
	);
	var Fe = i(Pe, 2);
	(a(Fe, { kind: `hero`, name: `Infernus`, ability: `Catalyst` }), e(w));
	var T = i(w, 2);
	n(T, 1, `ability concussive-combustion`);
	var Ie = r(T);
	t(
		Ie,
		() => `
<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>
<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>
`
	);
	var E = i(Ie, 2),
		Le = r(E),
		Re = r(Le);
	t(Re, () => `Concussive Combustion damage increased from 130 to 160`);
	var ze = i(Re, 2);
	(o(ze, {
		kind: `hero`,
		name: `Infernus`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Concussive Combustion damage increased from 130 to 160`
	}),
		e(Le),
		e(E));
	var Be = i(E, 2);
	(a(Be, { kind: `hero`, name: `Infernus`, ability: `Concussive Combustion` }),
		e(T),
		e(C));
	var D = i(C, 2);
	n(D, 1, `hero kelvin`);
	var Ve = r(D);
	t(
		Ve,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var O = i(Ve, 2);
	n(O, 1, `ability frost-grenade`);
	var He = r(O);
	t(
		He,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
<ul><li>Frost Grenade T3 bonus damage increased from +100 to +175</li></ul>
`
	);
	var Ue = i(He, 2);
	(a(Ue, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), e(O), e(D));
	var k = i(D, 2);
	n(k, 1, `hero lady-geist`);
	var We = r(k);
	t(
		We,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var A = i(We, 2);
	n(A, 1, `ability blood-bomb`);
	var Ge = r(A);
	t(
		Ge,
		() => `
<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blood Bomb change history</a></p>
<h4 id="blood-bomb"><a href="/ability/essence-bomb">Blood Bomb</a></h4>
`
	);
	var Ke = i(Ge, 2),
		qe = r(Ke),
		Je = r(qe);
	t(Je, () => `Blood Bomb damage increased from 80 to 100`);
	var Ye = i(Je, 2);
	(o(Ye, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Blood Bomb damage increased from 80 to 100`
	}),
		e(qe));
	var Xe = i(qe, 2),
		Ze = r(Xe);
	t(Ze, () => `Blood Bomb T2 damage increased from +65 to +70`);
	var Qe = i(Ze, 2);
	(o(Qe, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Blood Bomb T2 damage increased from +65 to +70`
	}),
		e(Xe),
		e(Ke));
	var $e = i(Ke, 2);
	(a($e, { kind: `hero`, name: `Lady Geist`, ability: `Blood Bomb` }), e(A));
	var j = i(A, 2);
	n(j, 1, `ability essence-bomb`);
	var et = r(j);
	t(
		et,
		() => `
<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>
<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>
<ul><li>Blood Bomb tooltip fixed to reference the correct self damage type and that it can be reduced with armor</li></ul>
`
	);
	var tt = i(et, 2);
	(a(tt, { kind: `hero`, name: `Lady Geist`, ability: `Essence Bomb` }), e(j));
	var M = i(j, 2);
	n(M, 1, `ability malice`);
	var nt = r(M);
	t(
		nt,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
<ul><li>Malice damage amp per shard increased from 10% to 15%</li></ul>
`
	);
	var rt = i(nt, 2);
	(a(rt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), e(M), e(k));
	var N = i(k, 2);
	n(N, 1, `hero lash`);
	var it = r(N);
	t(
		it,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var P = i(it, 2);
	n(P, 1, `ability grapple`);
	var at = r(P);
	t(
		at,
		() => `
<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>
<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>
`
	);
	var F = i(at, 2),
		ot = r(F),
		st = r(ot);
	t(st, () => `Grapple cooldown reduced from 55 to 45`);
	var ct = i(st, 2);
	(o(ct, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Grapple cooldown reduced from 55 to 45`
	}),
		e(ot),
		e(F));
	var lt = i(F, 2);
	(a(lt, { kind: `hero`, name: `Lash`, ability: `Grapple` }), e(P));
	var I = i(P, 2);
	n(I, 1, `ability flog-damage`);
	var ut = r(I);
	t(
		ut,
		() => `
<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog Damage change history</a></p>
<h4 id="flog-damage"><a href="/ability/flog">Flog Damage</a></h4>
<ul><li>Flog Damage increased from 55 to 65</li></ul>
`
	);
	var dt = i(ut, 2);
	(a(dt, { kind: `hero`, name: `Lash`, ability: `Flog Damage` }), e(I));
	var L = i(I, 2);
	n(L, 1, `ability flog`);
	var ft = r(L);
	t(
		ft,
		() => `
<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>
<h4 id="flog"><a href="/ability/flog">Flog</a></h4>
<ul><li>Flog lifesteal from heroes increased from 70% to 80% of damage dealt</li><li>Flog lifesteal from non-heroes reduced from 35% to 30% of damage dealt</li></ul>
`
	);
	var pt = i(ft, 2);
	(a(pt, { kind: `hero`, name: `Lash`, ability: `Flog` }), e(L));
	var R = i(L, 2);
	n(R, 1, `ability death-slam`);
	var mt = r(R);
	t(
		mt,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>
<ul><li>Death Slam T1 from +3m to +5m</li><li>Fixed Death Slam&#x27;s targeting cone not finding enemies near the edges</li><li>Fixed Death Slam to only target enemies who stay in the targeting cone</li></ul>
`
	);
	var ht = i(mt, 2);
	(a(ht, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), e(R), e(N));
	var z = i(N, 2);
	n(z, 1, `hero mcginnis`);
	var gt = r(z);
	t(
		gt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var B = i(gt, 2);
	n(B, 1, `ability heavy-barrage`);
	var _t = r(B);
	t(
		_t,
		() => `
<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>
<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>
<ul><li>Heavy Barrage now reduces your speed rather than setting it to a low cap (by itself this change isn&#x27;t a buff or a nerf, but it allows you to buy items to move faster during the ultimate)</li><li>Heavy Barrage camera interaction with Fleetfoot Boots has been fixed</li></ul>
`
	);
	var vt = i(_t, 2);
	(a(vt, { kind: `hero`, name: `McGinnis`, ability: `Heavy Barrage` }), e(B), e(z));
	var V = i(z, 2);
	n(V, 1, `hero mo-krill`);
	var yt = r(V);
	t(
		yt,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var H = i(yt, 2);
	n(H, 1, `ability sand-blast`);
	var bt = r(H);
	t(
		bt,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>
<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>
<ul><li>Sand Blast range increased from 25m to 30m</li><li>Sand Blast width increased from 3m to 5m</li><li>Sand Blast is now permissive with small obstructions in the way</li></ul>
`
	);
	var xt = i(bt, 2);
	(a(xt, { kind: `hero`, name: `Mo & Krill`, ability: `Sand Blast` }), e(H));
	var U = i(H, 2);
	n(U, 1, `ability burrow`);
	var St = r(U);
	t(
		St,
		() => `
<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>
<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>
<ul><li>Burrow no longer loses its state as you change elevations</li><li>Burrow now knocks enemies up when you come up</li></ul>
`
	);
	var Ct = i(St, 2);
	(a(Ct, { kind: `hero`, name: `Mo & Krill`, ability: `Burrow` }), e(U));
	var W = i(U, 2);
	n(W, 1, `ability combo-dps`);
	var wt = r(W);
	t(
		wt,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>
<h4 id="combo-dps"><a href="/ability/combo">Combo DPS</a></h4>
<ul><li>Combo DPS increased from 50 to 60</li></ul>
`
	);
	var Tt = i(wt, 2);
	(a(Tt, { kind: `hero`, name: `Mo & Krill`, ability: `Combo DPS` }), e(W));
	var Et = i(W, 2);
	(t(
		Et,
		() => `
<ul><li>No longer listed as a recommended new player hero</li></ul>
`
	),
		e(V));
	var G = i(V, 2);
	n(G, 1, `hero vindicta`);
	var Dt = r(G);
	t(
		Dt,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Base Bullet Damage reduced from 15 to 14</li><li>Bullet Damage gained per boon reduced from 0.88 to 0.7 (these are gained occasionally as you earn souls, up to 11 times)</li></ul>
`
	);
	var K = i(Dt, 2);
	n(K, 1, `ability stake`);
	var Ot = r(K);
	t(
		Ot,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
<ul><li>Stake T1 bonus duration reduced from +1.5s to +1.0s</li></ul>
`
	);
	var kt = i(Ot, 2);
	(a(kt, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), e(K));
	var At = i(K, 2);
	(t(
		At,
		() => `
<ul><li>Is now a recommended hero for new players</li></ul>
`
	),
		e(G));
	var q = i(G, 2);
	n(q, 1, `hero yamato`);
	var jt = r(q);
	t(
		jt,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var J = i(jt, 2);
	n(J, 1, `ability crimson-slash`);
	var Mt = r(J);
	t(
		Mt,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
`
	);
	var Y = i(Mt, 2),
		Nt = r(Y),
		Pt = r(Nt);
	t(Pt, () => `Crimson Slash radius increased from 11m to 12m`);
	var Ft = i(Pt, 2);
	(o(Ft, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Crimson Slash radius increased from 11m to 12m`
	}),
		e(Nt));
	var It = i(Nt, 2);
	(t(It, () => `Crimson Slash fire rate debuff duration increased from 3s to 4s`, !0),
		e(It));
	var Lt = i(It, 2);
	(t(
		Lt,
		() =>
			`Crimson Slash T2 changed from &quot;-5s Cooldown&quot; to &quot;10% Max Health heal on hero hit&quot;`,
		!0
	),
		e(Lt));
	var Rt = i(Lt, 2);
	(t(
		Rt,
		() =>
			`Crimson Slash T3 changed from &quot;12% Max Health heal on hero hit&quot; to &quot;-6s Cooldown&quot;`,
		!0
	),
		e(Rt),
		e(Y));
	var zt = i(Y, 2);
	(a(zt, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), e(J));
	var X = i(J, 2);
	n(X, 1, `ability power-slash`);
	var Bt = r(X);
	t(
		Bt,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>
<ul><li>Power Slash T1 Bullet Resist increased from 40% to 60%</li></ul>
`
	);
	var Vt = i(Bt, 2);
	(a(Vt, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), e(X));
	var Z = i(X, 2);
	n(Z, 1, `ability flying-strike`);
	var Ht = r(Z);
	t(
		Ht,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Strike change history</a></p>
<h4 id="flying-strike"><a href="/ability/flying-slash">Flying Strike</a></h4>
`
	);
	var Ut = i(Ht, 2),
		Q = r(Ut),
		Wt = r(Q);
	t(Wt, () => `Flying Strike cooldown reduced from 35 to 20`);
	var Gt = i(Wt, 2);
	(o(Gt, {
		kind: `hero`,
		name: `Yamato`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Flying Strike cooldown reduced from 35 to 20`
	}),
		e(Q));
	var Kt = i(Q, 2);
	(t(
		Kt,
		() =>
			`Flying Strike T2 changed from &quot;-15s Cooldown&quot; to &quot;+20 Cast Range&quot;`,
		!0
	),
		e(Kt));
	var qt = i(Kt, 2);
	(t(qt, () => `Flying Strike range no longer scales with Spirit`, !0), e(qt), e(Ut));
	var Jt = i(Ut, 2);
	(a(Jt, { kind: `hero`, name: `Yamato`, ability: `Flying Strike` }), e(Z));
	var $ = i(Z, 2);
	n($, 1, `ability shadow-explosion`);
	var Yt = r($);
	t(
		Yt,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Explosion change history</a></p>
<h4 id="shadow-explosion"><a href="/ability/shadow-transformation">Shadow Explosion</a></h4>
<ul><li>Shadow Explosion bonus Spirit per victim increased from 10 to 15</li><li>Shadow Explosion bonus Fire Rate per victim increased from 5 to 10</li></ul>
`
	);
	var Xt = i(Yt, 2);
	(a(Xt, { kind: `hero`, name: `Yamato`, ability: `Shadow Explosion` }), e($));
	var Zt = i($, 2);
	n(Zt, 1, `ability shadow-transformation`);
	var Qt = r(Zt);
	t(
		Qt,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Explosion buff duration increased from 8s to 15s</li></ul>
`
	);
	var $t = i(Qt, 2);
	(a($t, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		e(Zt),
		e(q),
		te(ee, s));
}
export { d as default, c as metadata, u as readingManifest, l as toc };
