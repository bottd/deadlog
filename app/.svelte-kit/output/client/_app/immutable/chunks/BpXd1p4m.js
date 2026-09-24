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
	u(e, { type: `hero`, names: [`Bebop`, `Grey Talon`, `Mirage`, `Paradox`] });
}
function f(e) {
	u(e, { type: `item`, names: [`Metal Skin`, `Siphon Bullets`] });
}
var p = {
		title: `11-01-2024 Update`,
		thread_id: `43705`,
		published: `2024-11-01T16:12:33-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Improved Burst: Damage threshold requirement reduced from 200 to 175 Grey Talon Base bullet damage reduced from 30 to 27 Movement speed scaling from Spirit Power reduced from 0.032 to 0.025 Mirage Fire Scarabs cooldown increased from 32s to 40s HP per boon reduced from 41 to 37 Bebop Sticky Bomb now gains 1% stack on attach (still gains 5% on target death) Paradox Time Wall T3 silence duration reduced from 3s to 2.5s Metal Skin Cooldown increased from 21s to 28s Siphon Bullets Max HP Steal is now affected by falloff`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-30`, to: `2024-11-01` },
			after: { from: `2024-11-02`, to: `2024-11-07` }
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Metal Skin`, id: `metal-skin` },
		{ level: 2, title: `Siphon Bullets`, id: `siphon-bullets` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-30`, to: `2024-11-01` },
			after: { from: `2024-11-02`, to: `2024-11-07` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `item`, name: `Metal Skin`, id: `metal-skin` },
			{ kind: `item`, name: `Siphon Bullets`, id: `siphon-bullets` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <!> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <!></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Improved Burst: Damage threshold requirement reduced from 200 to 175</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var m = s(p, 2);
	d(m, {});
	var h = s(m, 2);
	a(h, 1, `hero bebop`);
	var _ = o(h);
	r(
		_,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var v = s(_, 2);
	a(v, 1, `ability sticky-bomb`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
<ul><li>Sticky Bomb now gains 1% stack on attach (still gains 5% on target death)</li></ul>
`
	);
	var b = s(y, 2);
	(c(b, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), t(v), t(h));
	var x = s(h, 2);
	r(
		x,
		() => `
<div class="hero grey-talon">
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
<ul><li>Base bullet damage reduced from 30 to 27</li><li>Movement speed scaling from Spirit Power reduced from 0.032 to 0.025</li></ul>
</div>
`
	);
	var S = s(x, 2);
	a(S, 1, `hero mirage`);
	var C = o(S);
	r(
		C,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var w = s(C, 2);
	a(w, 1, `ability fire-scarabs`);
	var T = o(w);
	r(
		T,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
`
	);
	var E = s(T, 2),
		D = o(E),
		O = o(D);
	r(O, () => `Fire Scarabs cooldown increased from 32s to 40s`);
	var k = s(O, 2);
	(l(k, {
		kind: `hero`,
		name: `Mirage`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Fire Scarabs cooldown increased from 32s to 40s`
	}),
		t(D),
		t(E));
	var A = s(E, 2);
	(c(A, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), t(w));
	var j = s(w, 2);
	(r(
		j,
		() => `
<ul><li>HP per boon reduced from 41 to 37</li></ul>
`
	),
		t(S));
	var M = s(S, 2);
	a(M, 1, `hero paradox`);
	var N = o(M);
	r(
		N,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var P = s(N, 2);
	a(P, 1, `ability time-wall`);
	var F = o(P);
	r(
		F,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
<ul><li>Time Wall T3 silence duration reduced from 3s to 2.5s</li></ul>
`
	);
	var I = s(F, 2);
	(c(I, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), t(P), t(M));
	var L = s(M, 2);
	r(
		L,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var R = s(L, 2);
	f(R, {});
	var z = s(R, 2);
	a(z, 1, `item metal-skin`);
	var B = o(z);
	r(
		B,
		() => `
<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>
<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>
`
	);
	var V = s(B, 2),
		H = o(V),
		U = o(H);
	r(U, () => `Cooldown increased from 21s to 28s`);
	var W = s(U, 2);
	(l(W, {
		kind: `item`,
		name: `Metal Skin`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 21s to 28s`
	}),
		t(H),
		t(V));
	var G = s(V, 2);
	(c(G, { kind: `item`, name: `Metal Skin`, ability: null }), t(z));
	var K = s(z, 2);
	a(K, 1, `item siphon-bullets`);
	var q = o(K);
	r(
		q,
		() => `
<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>
<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>
<ul><li>Max HP Steal is now affected by falloff</li></ul>
`
	);
	var J = s(q, 2);
	(c(J, { kind: `item`, name: `Siphon Bullets`, ability: null }), t(K), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
