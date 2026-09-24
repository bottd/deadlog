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
	u(e, { type: `hero`, names: [`Infernus`, `Ivy`, `Seven`, `Viscous`] });
}
var f = {
		title: `09-01-2024 Update`,
		thread_id: `24093`,
		published: `2024-09-01T13:40:48-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Rope climb speed increased from 11 to 13 Rope activation range increased from 2.2m to 2.4m Fixed an HTML parsing exploit with builds Infernus Flame Dash now has 30% Slow Resistance Ivy Air Drop self cast time reduced from 2 to 1.3 Seven Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7 Viscous Puddle Punch base cast range from 60m to 40m Puddle Punch T2 damage from +50 to +35 Puddle Punch base cooldown increased from 24 to 28 Puddle Punch now knocks people less high into the air Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-30`, to: `2024-09-01` },
			after: { from: `2024-09-02`, to: `2024-09-12` }
		}
	},
	p = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-30`, to: `2024-09-01` },
			after: { from: `2024-09-02`, to: `2024-09-12` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` }
		],
		related: []
	},
	h = e(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li></ul> <!></div> <!></div>`,
		1
	);
function g(e) {
	var u = h(),
		f = i(u);
	r(
		f,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Rope climb speed increased from 11 to 13</li><li>Rope activation range increased from 2.2m to 2.4m</li><li>Fixed an HTML parsing exploit with builds</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var p = s(f, 2);
	d(p, {});
	var m = s(p, 2);
	a(m, 1, `hero infernus`);
	var g = o(m);
	r(
		g,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var _ = s(g, 2);
	a(_, 1, `ability flame-dash`);
	var v = o(_);
	r(
		v,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
<ul><li>Flame Dash now has 30% Slow Resistance</li></ul>
`
	);
	var y = s(v, 2);
	(c(y, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), t(_), t(m));
	var b = s(m, 2);
	a(b, 1, `hero ivy`);
	var x = o(b);
	r(
		x,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var S = s(x, 2);
	a(S, 1, `ability air-drop`);
	var C = o(S);
	r(
		C,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Air Drop self cast time reduced from 2 to 1.3</li></ul>
`
	);
	var w = s(C, 2);
	(c(w, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), t(S), t(b));
	var T = s(b, 2);
	a(T, 1, `hero seven`);
	var E = o(T);
	r(
		E,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var D = s(E, 2);
	a(D, 1, `ability storm-cloud`);
	var O = o(D);
	r(
		O,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7</li></ul>
`
	);
	var k = s(O, 2);
	(c(k, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), t(D), t(T));
	var A = s(T, 2);
	a(A, 1, `hero viscous`);
	var j = o(A);
	r(
		j,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var M = s(j, 2);
	a(M, 1, `ability puddle-punch`);
	var N = o(M);
	r(
		N,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
`
	);
	var P = s(N, 2),
		F = o(P);
	(r(F, () => `Puddle Punch base cast range from 60m to 40m`, !0), t(F));
	var I = s(F, 2);
	(r(I, () => `Puddle Punch T2 damage from +50 to +35`, !0), t(I));
	var L = s(I, 2),
		R = o(L);
	r(R, () => `Puddle Punch base cooldown increased from 24 to 28`);
	var z = s(R, 2);
	(l(z, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Puddle Punch base cooldown increased from 24 to 28`
	}),
		t(L));
	var B = s(L, 2);
	(r(B, () => `Puddle Punch now knocks people less high into the air`, !0), t(B), t(P));
	var V = s(P, 2);
	(c(V, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), t(M));
	var H = s(M, 2);
	(r(
		H,
		() => `
<ul><li>Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets</li></ul>
`
	),
		t(A),
		n(e, u));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
