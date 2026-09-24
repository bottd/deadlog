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
	u(e, { type: `hero`, names: [`Bebop`, `McGinnis`] });
}
function f(e) {
	u(e, { type: `item`, names: [`Ammo Scavenger`] });
}
var p = {
		title: `09-14-2024 Update`,
		thread_id: `29586`,
		published: `2024-09-14T21:05:26-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Bebop Hyper Beam cooldown increased from 117 to 130 Hyper Beam T1 reduced from -38s to -30s Hyper Beam end radius reduced from 5m to 4m Hyper Beam slow reduced from 40% to 30% Hyper Beam DPS reduced from 220 to 205 Hyper Beam DPS spirit scaling reduced from 3 to 2.7 McGinnis Medicinal Specter radius spirit power reduced from 0.07 to 0.05 Ammo Scavenger Buff duration reduced from 40s to 35s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-13`, to: `2024-09-15` },
			after: { from: `2024-09-16`, to: `2024-09-17` }
		}
	},
	m = [
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 3, title: `Hyper Beam DPS`, id: `hyper-beam-dps` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Medicinal Specter`, id: `medicinal-specter` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-13`, to: `2024-09-15` },
			after: { from: `2024-09-16`, to: `2024-09-17` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <!> <!> <div><!> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
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
	a(v, 1, `ability hyper-beam`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
`
	);
	var b = s(y, 2),
		x = o(b),
		S = o(x);
	r(S, () => `Hyper Beam cooldown increased from 117 to 130`);
	var C = s(S, 2);
	(l(C, {
		kind: `hero`,
		name: `Bebop`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Hyper Beam cooldown increased from 117 to 130`
	}),
		t(x));
	var w = s(x, 2);
	(r(w, () => `Hyper Beam T1 reduced from -38s to -30s`, !0), t(w));
	var T = s(w, 2);
	(r(T, () => `Hyper Beam end radius reduced from 5m to 4m`, !0), t(T));
	var E = s(T, 2);
	(r(E, () => `Hyper Beam slow reduced from 40% to 30%`, !0), t(E), t(b));
	var D = s(b, 2);
	(c(D, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), t(v));
	var O = s(v, 2);
	a(O, 1, `ability hyper-beam-dps`);
	var k = o(O);
	r(
		k,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam DPS change history</a></p>
<h4 id="hyper-beam-dps"><a href="/ability/hyper-beam">Hyper Beam DPS</a></h4>
<ul><li>Hyper Beam DPS reduced from 220 to 205</li><li>Hyper Beam DPS spirit scaling reduced from 3 to 2.7</li></ul>
`
	);
	var A = s(k, 2);
	(c(A, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam DPS` }), t(O), t(h));
	var j = s(h, 2);
	a(j, 1, `hero mcginnis`);
	var M = o(j);
	r(
		M,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var N = s(M, 2);
	a(N, 1, `ability medicinal-specter`);
	var P = o(N);
	r(
		P,
		() => `
<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>
<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>
<ul><li>Medicinal Specter radius spirit power reduced from 0.07 to 0.05</li></ul>
`
	);
	var F = s(P, 2);
	(c(F, { kind: `hero`, name: `McGinnis`, ability: `Medicinal Specter` }), t(N), t(j));
	var I = s(j, 2);
	r(
		I,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var L = s(I, 2);
	f(L, {});
	var R = s(L, 2);
	a(R, 1, `item ammo-scavenger`);
	var z = o(R);
	r(
		z,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Buff duration reduced from 40s to 35s</li></ul>
`
	);
	var B = s(z, 2);
	(c(B, { kind: `item`, name: `Ammo Scavenger`, ability: null }), t(R), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
