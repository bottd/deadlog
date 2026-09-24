import {
	I as e,
	Ot as t,
	P as n,
	T as r,
	at as i,
	g as a,
	it as o,
	st as s
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a as c, i as l, n as u } from './vWaTnxY_.js';
function d(e) {
	u(e, { type: `hero`, names: [`Haze`, `Holliday`, `Sinclair`] });
}
function f(e) {
	u(e, { type: `item`, names: [`Cold Front`] });
}
var p = {
		title: `03-13-2025 Update`,
		thread_id: `58592`,
		published: `2025-03-13T11:40:11-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Increased horizontal soul orb movement a bit Soul Orb spawn delay increased a bit and added some variability Neutrals soul values reduced by 15%  (including Sinner's Sacrifice) Sinner's Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5 Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes Golden Statue Buffs adjustments Level 1 Ammo reduced from 4% to 3% Level 2 Ammo reduced from 6% to 5% Level 3 Ammo reduced from 8% to 7% Level 1 HP reduced from 20 to 15 Level 2 HP reduced from 30 to 25 Level 3 HP reduced from 40 to 35 Level 3 Weapon Power reduced from 7% to 6% Level 3 Spirit reduced from 5 to 4 Minor respawn curve adjustments Holliday Powder Keg T2 decreased from +120 to +100 Bounce Pad cooldown increased from 37s to 41s Bounce Pad T1 is now T2 Bounce Pad New T1 is -10s cooldown Bounce Pad T2 is now T3. Removed T3 Stun Haze Bullet Dance bonus damage is now weapon damage instead of spirit Sinclair Assistant damage now follows his gun's falloff range Assistant base damage reduced from 30 to 20 Cold Front No longer does double damage to creeps`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-02-27`, to: `2025-03-13` },
			after: { from: `2025-03-14`, to: `2025-03-17` }
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 3, title: `Powder Keg`, id: `powder-keg` },
		{ level: 3, title: `Bounce Pad`, id: `bounce-pad` },
		{ level: 3, title: `Bounce Pad New`, id: `bounce-pad-new` },
		{ level: 3, title: `Bounce Pad`, id: `bounce-pad-1` },
		{ level: 2, title: `Sinclair`, id: `sinclair` },
		{ level: 3, title: `Assistant`, id: `assistant` },
		{ level: 3, title: `Spectral Assistant`, id: `spectral-assistant` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Cold Front`, id: `cold-front` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2025-02-27`, to: `2025-03-13` },
			after: { from: `2025-03-14`, to: `2025-03-17` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Sinclair`, id: `sinclair` },
			{ kind: `item`, name: `Cold Front`, id: `cold-front` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Increased horizontal soul orb movement a bit</li><li>Soul Orb spawn delay increased a bit and added some variability</li><li>Neutrals soul values reduced by 15%  (including Sinner&#x27;s Sacrifice)</li><li>Sinner&#x27;s Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5</li><li>Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes</li><li>Golden Statue Buffs adjustments</li><li>Level 1 Ammo reduced from 4% to 3%</li><li>Level 2 Ammo reduced from 6% to 5%</li><li>Level 3 Ammo reduced from 8% to 7%</li><li>Level 1 HP reduced from 20 to 15</li><li>Level 2 HP reduced from 30 to 25</li><li>Level 3 HP reduced from 40 to 35</li><li>Level 3 Weapon Power reduced from 7% to 6%</li><li>Level 3 Spirit reduced from 5 to 4</li><li>Minor respawn curve adjustments</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var m = s(p, 2);
	d(m, {});
	var h = s(m, 2);
	a(h, 1, `hero haze`);
	var _ = o(h);
	r(
		_,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var v = s(_, 2);
	a(v, 1, `ability bullet-dance`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance bonus damage is now weapon damage instead of spirit</li></ul>
`
	);
	var b = s(y, 2);
	(c(b, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), t(v), t(h));
	var x = s(h, 2);
	a(x, 1, `hero holliday`);
	var S = o(x);
	r(
		S,
		() => `
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
`
	);
	var C = s(S, 2);
	a(C, 1, `ability powder-keg`);
	var w = o(C);
	r(
		w,
		() => `
<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>
<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>
<ul><li>Powder Keg T2 decreased from +120 to +100</li></ul>
`
	);
	var T = s(w, 2);
	(c(T, { kind: `hero`, name: `Holliday`, ability: `Powder Keg` }), t(C));
	var E = s(C, 2);
	a(E, 1, `ability bounce-pad`);
	var D = o(E);
	r(
		D,
		() => `
<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>
<h4 id="bounce-pad"><a href="/ability/bounce-pad">Bounce Pad</a></h4>
`
	);
	var O = s(D, 2),
		k = o(O),
		A = o(k);
	r(A, () => `Bounce Pad cooldown increased from 37s to 41s`);
	var j = s(A, 2);
	(l(j, {
		kind: `hero`,
		name: `Holliday`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Bounce Pad cooldown increased from 37s to 41s`
	}),
		t(k));
	var M = s(k, 2);
	(r(M, () => `Bounce Pad T1 is now T2`, !0), t(M), t(O));
	var N = s(O, 2);
	(c(N, { kind: `hero`, name: `Holliday`, ability: `Bounce Pad` }), t(E));
	var P = s(E, 2);
	a(P, 1, `ability bounce-pad-new`);
	var F = o(P);
	r(
		F,
		() => `
<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad New change history</a></p>
<h4 id="bounce-pad-new"><a href="/ability/bounce-pad">Bounce Pad New</a></h4>
<ul><li>Bounce Pad New T1 is -10s cooldown</li></ul>
`
	);
	var I = s(F, 2);
	(c(I, { kind: `hero`, name: `Holliday`, ability: `Bounce Pad New` }), t(P));
	var L = s(P, 2);
	a(L, 1, `ability bounce-pad`);
	var R = o(L);
	r(
		R,
		() => `
<p><a href="/ability/bounce-pad"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bounce Pad change history</a></p>
<h4 id="bounce-pad-1"><a href="/ability/bounce-pad">Bounce Pad</a></h4>
<ul><li>Bounce Pad T2 is now T3. Removed T3 Stun</li></ul>
`
	);
	var z = s(R, 2);
	(c(z, { kind: `hero`, name: `Holliday`, ability: `Bounce Pad` }), t(L), t(x));
	var B = s(x, 2);
	a(B, 1, `hero sinclair`);
	var V = o(B);
	r(
		V,
		() => `
<p><a href="/hero/sinclair"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sinclair patch history</a></p>
<h3 id="sinclair"><a href="/hero/sinclair">Sinclair</a></h3>
`
	);
	var H = s(V, 2);
	a(H, 1, `ability assistant`);
	var U = o(H);
	r(
		U,
		() => `
<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assistant change history</a></p>
<h4 id="assistant"><a href="/ability/spectral-assistant">Assistant</a></h4>
<ul><li>Assistant damage now follows his gun&#x27;s falloff range</li></ul>
`
	);
	var W = s(U, 2);
	(c(W, { kind: `hero`, name: `Sinclair`, ability: `Assistant` }), t(H));
	var G = s(H, 2);
	a(G, 1, `ability spectral-assistant`);
	var K = o(G);
	r(
		K,
		() => `
<p><a href="/ability/spectral-assistant"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Assistant change history</a></p>
<h4 id="spectral-assistant"><a href="/ability/spectral-assistant">Spectral Assistant</a></h4>
<ul><li>Assistant base damage reduced from 30 to 20</li></ul>
`
	);
	var q = s(K, 2);
	(c(q, { kind: `hero`, name: `Sinclair`, ability: `Spectral Assistant` }), t(G), t(B));
	var J = s(B, 2);
	r(
		J,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Y = s(J, 2);
	f(Y, {});
	var X = s(Y, 2);
	a(X, 1, `item cold-front`);
	var Z = o(X);
	r(
		Z,
		() => `
<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>
<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>
<ul><li>No longer does double damage to creeps</li></ul>
`
	);
	var Q = s(Z, 2);
	(c(Q, { kind: `item`, name: `Cold Front`, ability: null }), t(X), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
