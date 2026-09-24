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
	u(e, { type: `hero`, names: [`Ivy`, `Shiv`] });
}
var f = {
		title: `08-16-2024 Update`,
		thread_id: `17251`,
		published: `2024-08-16T15:28:51-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Fixed spectating ending 1 minute before the game ended Fixed Hero Demo starting you at max level Fixed Lady Geist not being able to jump during Life Drain Fixed the boon level display in the hero pages not working correctly Changed default shop music back to original Shiv Gun base damage reduced from 6.3 to 5.7 Serrated Knives collision size reduced by 10% Serrated Knives projectile speed reduced by 10% Serrated Knives base damage reduced from 75 to 35 Serrated Knives spirit scaling reduced from 1 to 0.6 Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16 Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed Fixed Serrated Knives bouncing to other units even if it did not impact the target Fixed Rage and Bloodletting not clearing out on death Fixed Bloodletting deferred damage waking him up from sleep Fixed Killing Blow falling through the world sometimes Ivy Restored previous audio processing Air Drop cooldown increased from 70s to 80s Air Drop duration reduced from 20s to 17s Air Drop bomb no longer silences in the base (now part of t3) Air Drop bomb slow duration increased from 3s to 4.5s Air Drop T2 now also has +5m radius Air Drop T3 no longer has +12m radius Air Drop T3 no longer extends debuff duration by +2s Air Drop T3 silences enemies for 4.5s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: null, to: null },
			after: { from: `2024-08-17`, to: `2024-08-19` }
		}
	},
	p = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives` },
		{ level: 3, title: `Serrated Knives DPS`, id: `serrated-knives-dps` },
		{ level: 3, title: `Serrated Knives`, id: `serrated-knives-1` },
		{ level: 3, title: `Bloodletting`, id: `bloodletting` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: null,
			after: { from: `2024-08-17`, to: `2024-08-19` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` }
		],
		related: []
	},
	h = e(
		`<!> <!> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div>`,
		1
	);
function g(e) {
	var u = h(),
		f = i(u);
	r(
		f,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Fixed spectating ending 1 minute before the game ended</li><li>Fixed Hero Demo starting you at max level</li><li>Fixed Lady Geist not being able to jump during Life Drain</li><li>Fixed the boon level display in the hero pages not working correctly</li><li>Changed default shop music back to original</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var p = s(f, 2);
	d(p, {});
	var m = s(p, 2);
	a(m, 1, `hero ivy`);
	var g = o(m);
	r(
		g,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
<ul><li>Restored previous audio processing</li></ul>
`
	);
	var _ = s(g, 2);
	a(_, 1, `ability air-drop`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
`
	);
	var y = s(v, 2),
		b = o(y),
		x = o(b);
	r(x, () => `Air Drop cooldown increased from 70s to 80s`);
	var S = s(x, 2);
	(l(S, {
		kind: `hero`,
		name: `Ivy`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Air Drop cooldown increased from 70s to 80s`
	}),
		t(b));
	var C = s(b, 2);
	(r(C, () => `Air Drop duration reduced from 20s to 17s`, !0), t(C));
	var w = s(C, 2);
	(r(w, () => `Air Drop bomb no longer silences in the base (now part of t3)`, !0), t(w));
	var T = s(w, 2);
	(r(T, () => `Air Drop bomb slow duration increased from 3s to 4.5s`, !0), t(T));
	var E = s(T, 2);
	(r(E, () => `Air Drop T2 now also has +5m radius`, !0), t(E));
	var D = s(E, 2);
	(r(D, () => `Air Drop T3 no longer has +12m radius`, !0), t(D));
	var O = s(D, 2);
	(r(O, () => `Air Drop T3 no longer extends debuff duration by +2s`, !0), t(O));
	var k = s(O, 2);
	(r(k, () => `Air Drop T3 silences enemies for 4.5s`, !0), t(k), t(y));
	var A = s(y, 2);
	(c(A, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(_), t(m));
	var j = s(m, 2);
	a(j, 1, `hero shiv`);
	var M = o(j);
	r(
		M,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Gun base damage reduced from 6.3 to 5.7</li></ul>
`
	);
	var N = s(M, 2);
	a(N, 1, `ability serrated-knives`);
	var P = o(N);
	r(
		P,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
`
	);
	var F = s(P, 2),
		I = o(F);
	(r(I, () => `Serrated Knives collision size reduced by 10%`, !0), t(I));
	var L = s(I, 2);
	(r(L, () => `Serrated Knives projectile speed reduced by 10%`, !0), t(L));
	var R = s(L, 2),
		z = o(R);
	r(z, () => `Serrated Knives base damage reduced from 75 to 35`);
	var B = s(z, 2);
	(l(B, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 1,
		bulletIndex: 2,
		text: `Serrated Knives base damage reduced from 75 to 35`
	}),
		t(R));
	var V = s(R, 2);
	(r(V, () => `Serrated Knives spirit scaling reduced from 1 to 0.6`, !0), t(V), t(F));
	var H = s(F, 2);
	(c(H, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), t(N));
	var U = s(N, 2);
	a(U, 1, `ability serrated-knives-dps`);
	var W = o(U);
	r(
		W,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives DPS change history</a></p>
<h4 id="serrated-knives-dps"><a href="/ability/serrated-knives">Serrated Knives DPS</a></h4>
<ul><li>Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16</li></ul>
`
	);
	var G = s(W, 2);
	(c(G, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives DPS` }), t(U));
	var K = s(U, 2);
	a(K, 1, `ability serrated-knives`);
	var q = o(K);
	r(
		q,
		() => `
<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>
<h4 id="serrated-knives-1"><a href="/ability/serrated-knives">Serrated Knives</a></h4>
<ul><li>Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed</li><li>Fixed Serrated Knives bouncing to other units even if it did not impact the target</li></ul>
`
	);
	var J = s(q, 2);
	(c(J, { kind: `hero`, name: `Shiv`, ability: `Serrated Knives` }), t(K));
	var Y = s(K, 2);
	a(Y, 1, `ability bloodletting`);
	var X = o(Y);
	r(
		X,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>
<ul><li>Fixed Rage and Bloodletting not clearing out on death</li><li>Fixed Bloodletting deferred damage waking him up from sleep</li></ul>
`
	);
	var Z = s(X, 2);
	(c(Z, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), t(Y));
	var Q = s(Y, 2);
	a(Q, 1, `ability killing-blow`);
	var $ = o(Q);
	r(
		$,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Fixed Killing Blow falling through the world sometimes</li></ul>
`
	);
	var ee = s($, 2);
	(c(ee, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), t(Q), t(j), n(e, u));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
