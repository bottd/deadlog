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
	l(e, { type: `hero`, names: [`Seven`, `Shiv`] });
}
var d = {
		title: `10-15-2024 Update`,
		thread_id: `38925`,
		published: `2024-10-15T17:07:44-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Urn now reveals you after 20s from initial pickup Urn sprint changed from +3/5 for winning/losing team to +2/6 First flex slot is now granted after 3 Guardians die instead of 4 Base kill bounty reduced from 225 to 150 (still scales to 1400 over time) Respawn time at 20 minutes reduced from 45s to 40s T3 Golden Statues spawn time moved from 25 min to 30 min Range to attack lane Guardians increased from 19m to 20m Seven Lightning Ball T3 reduced from +2m Radius to +1m Shiv Rage decay rate increased from 0.25 to 0.3 Rage buffer duration reduced from 12s to 10s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-12`, to: `2024-10-16` },
			after: { from: `2024-10-17`, to: `2024-10-18` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Lightning Ball`, id: `lightning-ball` },
		{ level: 2, title: `Shiv`, id: `shiv` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-10-12`, to: `2024-10-16` },
			after: { from: `2024-10-17`, to: `2024-10-18` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` }
		],
		related: []
	},
	m = e(`<!> <!> <div><!> <div><!> <!></div></div> <!>`, 1);
function h(e) {
	var l = m(),
		d = i(l);
	r(
		d,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Urn now reveals you after 20s from initial pickup</li><li>Urn sprint changed from +3/5 for winning/losing team to +2/6</li><li>First flex slot is now granted after 3 Guardians die instead of 4</li><li>Base kill bounty reduced from 225 to 150 (still scales to 1400 over time)</li><li>Respawn time at 20 minutes reduced from 45s to 40s</li><li>T3 Golden Statues spawn time moved from 25 min to 30 min</li><li>Range to attack lane Guardians increased from 19m to 20m</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `hero seven`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var g = s(h, 2);
	a(g, 1, `ability lightning-ball`);
	var _ = o(g);
	r(
		_,
		() => `
<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>
<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>
<ul><li>Lightning Ball T3 reduced from +2m Radius to +1m</li></ul>
`
	);
	var v = s(_, 2);
	(c(v, { kind: `hero`, name: `Seven`, ability: `Lightning Ball` }), t(g), t(p));
	var y = s(p, 2);
	(r(
		y,
		() => `
<div class="hero shiv">
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
<ul><li>Rage decay rate increased from 0.25 to 0.3</li><li>Rage buffer duration reduced from 12s to 10s</li></ul>
</div>
`
	),
		n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
