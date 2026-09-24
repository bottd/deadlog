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
function f(e) {
	u(e, { type: `item`, names: [`Reactive Barrier`, `Return Fire`] });
}
var p = {
		title: `08-22-2024 Update`,
		thread_id: `19716`,
		published: `2024-08-22T18:55:55-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Fixed High-Velocity Mag affecting some abilities Silence Glyph: Damage reduced from 150 to 100 Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0 Silence Glyph: Cast range reduced from 40m to 25m Silence Glyph: Sprint reduced from 2 to 1 Silence Glyph: Spirit Shield reduced from +225 to +200 Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back) Fixed Siphon Bullets acting as spirit damage for procs Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after Ivy Air Drop now silences the ally being carried until they are released Shiv Bloodletting incoming damage deferred reduced from 40% to 35% Reactive Barrier Cooldown increased from 20s to 30s Return Fire Bullet damage returned reduced form 80% to 70%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-20`, to: `2024-08-23` },
			after: { from: `2024-08-24`, to: `2024-08-29` },
			siblings: `19948`
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Bloodletting`, id: `bloodletting` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Return Fire`, id: `return-fire` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-20`, to: `2024-08-23` },
			after: { from: `2024-08-24`, to: `2024-08-29` },
			siblings: [`19948`]
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Return Fire`, id: `return-fire` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Fixed High-Velocity Mag affecting some abilities</li><li>Silence Glyph: Damage reduced from 150 to 100</li><li>Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0</li><li>Silence Glyph: Cast range reduced from 40m to 25m</li><li>Silence Glyph: Sprint reduced from 2 to 1</li><li>Silence Glyph: Spirit Shield reduced from +225 to +200</li><li>Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back)</li><li>Fixed Siphon Bullets acting as spirit damage for procs</li><li>Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies</li><li>Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var m = s(p, 2);
	d(m, {});
	var h = s(m, 2);
	a(h, 1, `hero ivy`);
	var _ = o(h);
	r(
		_,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var v = s(_, 2);
	a(v, 1, `ability air-drop`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop now silences the ally being carried until they are released</li></ul>
`
	);
	var b = s(y, 2);
	(c(b, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(v), t(h));
	var x = s(h, 2);
	a(x, 1, `hero shiv`);
	var S = o(x);
	r(
		S,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var C = s(S, 2);
	a(C, 1, `ability bloodletting`);
	var w = o(C);
	r(
		w,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>
<ul><li>Bloodletting incoming damage deferred reduced from 40% to 35%</li></ul>
`
	);
	var T = s(w, 2);
	(c(T, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), t(C), t(x));
	var E = s(x, 2);
	r(
		E,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var D = s(E, 2);
	f(D, {});
	var O = s(D, 2);
	a(O, 1, `item reactive-barrier`);
	var k = o(O);
	r(
		k,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
`
	);
	var A = s(k, 2),
		j = o(A),
		M = o(j);
	r(M, () => `Cooldown increased from 20s to 30s`);
	var N = s(M, 2);
	(l(N, {
		kind: `item`,
		name: `Reactive Barrier`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 20s to 30s`
	}),
		t(j),
		t(A));
	var P = s(A, 2);
	(c(P, { kind: `item`, name: `Reactive Barrier`, ability: null }), t(O));
	var F = s(O, 2);
	a(F, 1, `item return-fire`);
	var I = o(F);
	r(
		I,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
<ul><li>Bullet damage returned reduced form 80% to 70%</li></ul>
`
	);
	var L = s(I, 2);
	(c(L, { kind: `item`, name: `Return Fire`, ability: null }), t(F), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
