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
	u(e, { type: `hero`, names: [`Shiv`] });
}
var f = {
		title: `Minor Update - 07-01-2026`,
		steam_gid: `1836506165566600`,
		published: `2026-07-01T22:54:59.000Z`,
		author: `IceFrog`,
		author_image: `/assets/authors/icefrog.webp`,
		major_update: !1,
		content_text: `Shiv Alt Fire ammo cost reduced from 5 to 4 Weapon now has fixed pellet spread Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies Slice and Dice damage increased from 60 to 75 Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: null, to: null },
			after: { from: `2026-07-02`, to: `2026-07-09` }
		}
	},
	p = [
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Slice and Dice`, id: `slice-and-dice` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: null,
			after: { from: `2026-07-02`, to: `2026-07-09` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `hero`, name: `Shiv`, id: `shiv` }],
		related: []
	},
	h = e(
		`<!> <!> <div><!> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div></div>`,
		1
	);
function g(e) {
	var u = h(),
		f = i(u);
	r(
		f,
		() => `<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var p = s(f, 2);
	d(p, {});
	var m = s(p, 2);
	a(m, 1, `hero shiv`);
	var g = o(m);
	r(
		g,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Alt Fire ammo cost reduced from 5 to 4</li><li>Weapon now has fixed pellet spread</li></ul>
`
	);
	var _ = s(g, 2);
	a(_, 1, `ability slice-and-dice`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>
<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>
`
	);
	var y = s(v, 2),
		b = o(y);
	(r(
		b,
		() =>
			`Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies`,
		!0
	),
		t(b));
	var x = s(b, 2),
		S = o(x);
	r(S, () => `Slice and Dice damage increased from 60 to 75`);
	var C = s(S, 2);
	(l(C, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 1,
		bulletIndex: 1,
		text: `Slice and Dice damage increased from 60 to 75`
	}),
		t(x),
		t(y));
	var w = s(y, 2);
	(c(w, { kind: `hero`, name: `Shiv`, ability: `Slice and Dice` }), t(_));
	var T = s(_, 2);
	a(T, 1, `ability killing-blow`);
	var E = o(T);
	r(
		E,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%</li></ul>
`
	);
	var D = s(E, 2);
	(c(D, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), t(T), t(m), n(e, u));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
