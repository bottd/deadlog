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
	u(e, { type: `hero`, names: [`Celeste`] });
}
function f(e) {
	u(e, { type: `item`, names: [`Radiant Regeneration`, `Restorative Locket`] });
}
var p = {
		title: `Minor Update - 08-22-2026`,
		alias: `2026/minor-08-22`,
		thread_id: `162571`,
		steam_gid: `1841579228672283`,
		published: `2026-08-22T21:40:46.000Z`,
		author: `IceFrog`,
		author_image: `/assets/authors/icefrog.webp`,
		major_update: !1,
		content_text: `Celeste Dazzling Trick cooldown increased from 32s to 34s Dazzling Trick T2 barrier rescaled from "+80 and +0.7 scaling" to "+70 and +0.76" Dazzling Trick T3 cooldown increased from -18s to -20s Dazzling Trick T3 reduced from +1.5s Silence to +1.25s Radiant Daggers Spirit Amp per stack reduced from +8% to +7% Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4% Shining Wonder bounce range reduced from 17.5m to 16.5m Shining Wonder damage reduced from 165 to 140 Shining Wonder spirit scaling reduced from 0.9 to 0.6 Shining Wonder T2 now also increases spirit scaling by +0.45 Radiant Regeneration Heal on cast reduced from 70 to 65 Restorative Locket Spirit Resistance reduced from 10% to 8%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-08-13`, to: `2026-08-22` },
			after: { from: `2026-08-23`, to: `2026-09-06` }
		}
	},
	m = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Celeste`, id: `celeste` },
		{ level: 3, title: `Dazzling Trick`, id: `dazzling-trick` },
		{ level: 3, title: `Radiant Daggers`, id: `radiant-daggers` },
		{ level: 3, title: `Shining Wonder`, id: `shining-wonder` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Radiant Regeneration`, id: `radiant-regeneration` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` }
	],
	h = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-08-13`, to: `2026-08-22` },
			after: { from: `2026-08-23`, to: `2026-09-06` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Celeste`, id: `celeste` },
			{ kind: `item`, name: `Radiant Regeneration`, id: `radiant-regeneration` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` }
		],
		related: []
	},
	g = e(
		`<!> <!> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function _(e) {
	var u = g(),
		p = i(u);
	r(
		p,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var m = s(p, 2);
	d(m, {});
	var h = s(m, 2);
	a(h, 1, `hero celeste`);
	var _ = o(h);
	r(
		_,
		() => `
<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>
<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>
`
	);
	var v = s(_, 2);
	a(v, 1, `ability dazzling-trick`);
	var y = o(v);
	r(
		y,
		() => `
<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>
<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>
`
	);
	var b = s(y, 2),
		x = o(b),
		S = o(x);
	r(S, () => `Dazzling Trick cooldown increased from 32s to 34s`);
	var C = s(S, 2);
	(l(C, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Dazzling Trick cooldown increased from 32s to 34s`
	}),
		t(x));
	var w = s(x, 2);
	(r(
		w,
		() =>
			`Dazzling Trick T2 barrier rescaled from &quot;+80 and +0.7 scaling&quot; to &quot;+70 and +0.76&quot;`,
		!0
	),
		t(w));
	var T = s(w, 2),
		E = o(T);
	r(E, () => `Dazzling Trick T3 cooldown increased from -18s to -20s`);
	var D = s(E, 2);
	(l(D, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Dazzling Trick T3 cooldown increased from -18s to -20s`
	}),
		t(T));
	var O = s(T, 2);
	(r(O, () => `Dazzling Trick T3 reduced from +1.5s Silence to +1.25s`, !0), t(O), t(b));
	var k = s(b, 2);
	(c(k, { kind: `hero`, name: `Celeste`, ability: `Dazzling Trick` }), t(v));
	var A = s(v, 2);
	a(A, 1, `ability radiant-daggers`);
	var j = o(A);
	r(
		j,
		() => `
<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>
<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>
<ul><li>Radiant Daggers Spirit Amp per stack reduced from +8% to +7%</li><li>Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4%</li></ul>
`
	);
	var M = s(j, 2);
	(c(M, { kind: `hero`, name: `Celeste`, ability: `Radiant Daggers` }), t(A));
	var N = s(A, 2);
	a(N, 1, `ability shining-wonder`);
	var P = o(N);
	r(
		P,
		() => `
<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>
<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>
`
	);
	var F = s(P, 2),
		I = o(F);
	(r(I, () => `Shining Wonder bounce range reduced from 17.5m to 16.5m`, !0), t(I));
	var L = s(I, 2),
		R = o(L);
	r(R, () => `Shining Wonder damage reduced from 165 to 140`);
	var z = s(R, 2);
	(l(z, {
		kind: `hero`,
		name: `Celeste`,
		groupIndex: 2,
		bulletIndex: 1,
		text: `Shining Wonder damage reduced from 165 to 140`
	}),
		t(L));
	var B = s(L, 2);
	(r(B, () => `Shining Wonder spirit scaling reduced from 0.9 to 0.6`, !0), t(B));
	var V = s(B, 2);
	(r(V, () => `Shining Wonder T2 now also increases spirit scaling by +0.45`, !0),
		t(V),
		t(F));
	var H = s(F, 2);
	(c(H, { kind: `hero`, name: `Celeste`, ability: `Shining Wonder` }), t(N), t(h));
	var U = s(h, 2);
	r(
		U,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var W = s(U, 2);
	f(W, {});
	var G = s(W, 2);
	a(G, 1, `item radiant-regeneration`);
	var K = o(G);
	r(
		K,
		() => `
<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>
<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>
<ul><li>Heal on cast reduced from 70 to 65</li></ul>
`
	);
	var q = s(K, 2);
	(c(q, { kind: `item`, name: `Radiant Regeneration`, ability: null }), t(G));
	var J = s(G, 2);
	a(J, 1, `item restorative-locket`);
	var Y = o(J);
	r(
		Y,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>Spirit Resistance reduced from 10% to 8%</li></ul>
`
	);
	var X = s(Y, 2);
	(c(X, { kind: `item`, name: `Restorative Locket`, ability: null }), t(J), n(e, u));
}
export { _ as default, p as metadata, h as readingManifest, m as toc };
