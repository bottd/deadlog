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
	u(e, { type: `hero`, names: [`Ivy`, `Mirage`, `Pocket`] });
}
var f = {
		title: `10-02-2024 Update`,
		thread_id: `35439`,
		published: `2024-10-02T17:18:25-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Respawn time at 20min reduced from 50s to 45s (was 40s previous patch) Zipline Boost cooldown reduced from 340s (5.6min) to 280s (4.6min) Fixed certain player name lengths not being reportable Ivy Kudzu Bomb damage spirit scaling reduced from 0.7 to 0.6 Kudzu Bomb T3 damage reduced from +60 to +50 Kudzu Bomb vertical radius is now a fixed 2m pancake shape instead of the full radius of the ability Air Drop explosion now respects line of sight Mirage Bullet radius reduced from 8 to 6 Tornado time for victims to reach max height reduced from 0.3s to 0.2s Tornado lift duration reduced from 1.2s to 1.1s Fixed Tornado being castable while busy (such as while channeling Traveler) Djinn's Mark T1 now only applies the slow when the multiplier is 2x or higher Djinn's Mark damage is now treated as a DoT in terms of zipline rules (doesn't prevent ziplining or knock you off) Fixed Djinn's Mark applying bullet procs with Return Fire Pocket Fixed Mystic Reverb causing Affliction damage be lethal`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-30`, to: `2024-10-03` },
			after: { from: `2024-10-04`, to: `2024-10-07` }
		}
	},
	p = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Kudzu Bomb`, id: `kudzu-bomb` },
		{ level: 3, title: `Entangling Thorns`, id: `entangling-thorns` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Dust Devil`, id: `dust-devil` },
		{ level: 3, title: `Djinn's Mark`, id: `djinn-s-mark` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Affliction`, id: `affliction` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-30`, to: `2024-10-03` },
			after: { from: `2024-10-04`, to: `2024-10-07` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` }
		],
		related: []
	},
	h = e(
		`<!> <!> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div>`,
		1
	);
function g(e) {
	var u = h(),
		f = i(u);
	r(
		f,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Respawn time at 20min reduced from 50s to 45s (was 40s previous patch)</li><li>Zipline Boost cooldown reduced from 340s (5.6min) to 280s (4.6min)</li><li>Fixed certain player name lengths not being reportable</li></ul>
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
`
	);
	var _ = s(g, 2);
	a(_, 1, `ability kudzu-bomb`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>
<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>
`
	);
	var y = s(v, 2),
		b = o(y);
	(r(b, () => `Kudzu Bomb damage spirit scaling reduced from 0.7 to 0.6`, !0), t(b));
	var x = s(b, 2),
		S = o(x);
	r(S, () => `Kudzu Bomb T3 damage reduced from +60 to +50`);
	var C = s(S, 2);
	(l(C, {
		kind: `hero`,
		name: `Ivy`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Kudzu Bomb T3 damage reduced from +60 to +50`
	}),
		t(x),
		t(y));
	var w = s(y, 2);
	(c(w, { kind: `hero`, name: `Ivy`, ability: `Kudzu Bomb` }), t(_));
	var T = s(_, 2);
	a(T, 1, `ability entangling-thorns`);
	var E = o(T);
	r(
		E,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>
<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>
<ul><li>Kudzu Bomb vertical radius is now a fixed 2m pancake shape instead of the full radius of the ability</li></ul>
`
	);
	var D = s(E, 2);
	(c(D, { kind: `hero`, name: `Ivy`, ability: `Entangling Thorns` }), t(T));
	var O = s(T, 2);
	a(O, 1, `ability air-drop`);
	var k = o(O);
	r(
		k,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop explosion now respects line of sight</li></ul>
`
	);
	var A = s(k, 2);
	(c(A, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(O), t(m));
	var j = s(m, 2);
	a(j, 1, `hero mirage`);
	var M = o(j);
	r(
		M,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
<ul><li>Bullet radius reduced from 8 to 6</li></ul>
`
	);
	var N = s(M, 2);
	a(N, 1, `ability dust-devil`);
	var P = o(N);
	r(
		P,
		() => `
<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>
<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>
<ul><li>Tornado time for victims to reach max height reduced from 0.3s to 0.2s</li><li>Tornado lift duration reduced from 1.2s to 1.1s</li><li>Fixed Tornado being castable while busy (such as while channeling Traveler)</li></ul>
`
	);
	var F = s(P, 2);
	(c(F, { kind: `hero`, name: `Mirage`, ability: `Dust Devil` }), t(N));
	var I = s(N, 2);
	a(I, 1, `ability djinn-s-mark`);
	var L = o(I);
	r(
		L,
		() => `
<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>
<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>
<ul><li>Djinn&#x27;s Mark T1 now only applies the slow when the multiplier is 2x or higher</li><li>Djinn&#x27;s Mark damage is now treated as a DoT in terms of zipline rules (doesn&#x27;t prevent ziplining or knock you off)</li><li>Fixed Djinn&#x27;s Mark applying bullet procs with Return Fire</li></ul>
`
	);
	var R = s(L, 2);
	(c(R, { kind: `hero`, name: `Mirage`, ability: `Djinn's Mark` }), t(I), t(j));
	var z = s(j, 2);
	a(z, 1, `hero pocket`);
	var B = o(z);
	r(
		B,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var V = s(B, 2);
	a(V, 1, `ability affliction`);
	var H = o(V);
	r(
		H,
		() => `
<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>
<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>
<ul><li>Fixed Mystic Reverb causing Affliction damage be lethal</li></ul>
`
	);
	var U = s(H, 2);
	(c(U, { kind: `hero`, name: `Pocket`, ability: `Affliction` }), t(V), t(z), n(e, u));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
