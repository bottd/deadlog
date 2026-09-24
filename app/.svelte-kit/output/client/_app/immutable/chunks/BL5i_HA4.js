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
/* empty css        */ import { a as c, n as l } from './vWaTnxY_.js';
function u(e) {
	l(e, { type: `hero`, names: [`Mirage`] });
}
var d = {
		title: `09-27-2024 Update`,
		thread_id: `33816`,
		published: `2024-09-27T17:33:18-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Mirage Tornado lift duration reduced from 1.5s to 1.2s Tornado T1 bonus lift duration reduced from +0.5s to +0.4s Tornado base bullet evasion reduced from 30% to 25% Djinn's Mark T3 now also reduces Multiplier Cooldown by 0.5s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-27`, to: `2024-09-28` },
			after: { from: null, to: null }
		}
	},
	f = [
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Dust Devil`, id: `dust-devil` },
		{ level: 3, title: `Tornado`, id: `tornado` },
		{ level: 3, title: `Dust Devil`, id: `dust-devil-1` },
		{ level: 3, title: `Djinn's Mark`, id: `djinn-s-mark` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-27`, to: `2024-09-28` },
			after: null,
			siblings: []
		},
		open: !1,
		sections: [{ kind: `hero`, name: `Mirage`, id: `mirage` }],
		related: []
	},
	m = e(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div>`,
		1
	);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `hero mirage`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var g = s(h, 2);
	a(g, 1, `ability dust-devil`);
	var _ = o(g);
	r(
		_,
		() => `
<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>
<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>
<ul><li>Tornado lift duration reduced from 1.5s to 1.2s</li></ul>
`
	);
	var v = s(_, 2);
	(c(v, { kind: `hero`, name: `Mirage`, ability: `Dust Devil` }), t(g));
	var y = s(g, 2);
	a(y, 1, `ability tornado`);
	var b = o(y);
	r(
		b,
		() => `
<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tornado change history</a></p>
<h4 id="tornado"><a href="/ability/dust-devil">Tornado</a></h4>
<ul><li>Tornado T1 bonus lift duration reduced from +0.5s to +0.4s</li></ul>
`
	);
	var x = s(b, 2);
	(c(x, { kind: `hero`, name: `Mirage`, ability: `Tornado` }), t(y));
	var S = s(y, 2);
	a(S, 1, `ability dust-devil`);
	var C = o(S);
	r(
		C,
		() => `
<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>
<h4 id="dust-devil-1"><a href="/ability/dust-devil">Dust Devil</a></h4>
<ul><li>Tornado base bullet evasion reduced from 30% to 25%</li></ul>
`
	);
	var w = s(C, 2);
	(c(w, { kind: `hero`, name: `Mirage`, ability: `Dust Devil` }), t(S));
	var T = s(S, 2);
	a(T, 1, `ability djinn-s-mark`);
	var E = o(T);
	r(
		E,
		() => `
<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>
<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>
<ul><li>Djinn&#x27;s Mark T3 now also reduces Multiplier Cooldown by 0.5s</li></ul>
`
	);
	var D = s(E, 2);
	(c(D, { kind: `hero`, name: `Mirage`, ability: `Djinn's Mark` }), t(T), t(p), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
