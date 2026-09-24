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
	l(e, { type: `hero`, names: [`Viscous`] });
}
var d = {
		title: `08-06-2024 Update`,
		thread_id: `14283`,
		published: `2024-08-06T16:19:49-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion) Server performance improvements New categories added to builds are now wider by default Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature Viscous Added a directional arrow particle effect to Goo Ball for Viscous Added additional particles while using Goo Ball Fixed hit detection on Puddle Punch and Goo Ball Fixed Puddle Punch having 2x the range of the tooltip. Fixed Puddle Punch being able to target behind puddle Fixed Puddle Punch using Guardians as a surface to punch from Puddle Punch Range reduced from 70m to 60m Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit. Splatter Cooldown from 18s to 20s Splatter Base Damage from 120 to 110`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-02`, to: `2024-08-06` },
			after: { from: `2024-08-07`, to: `2024-08-15` }
		}
	},
	f = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `Puddle Punch Range`, id: `puddle-punch-range` },
		{ level: 3, title: `Splatter`, id: `splatter` }
	],
	p = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-02`, to: `2024-08-06` },
			after: { from: `2024-08-07`, to: `2024-08-15` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `hero`, name: `Viscous`, id: `viscous` }],
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
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion)</li><li>Server performance improvements</li><li>New categories added to builds are now wider by default</li><li>Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var f = s(d, 2);
	u(f, {});
	var p = s(f, 2);
	a(p, 1, `hero viscous`);
	var h = o(p);
	r(
		h,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var g = s(h, 2);
	a(g, 1, `ability goo-ball`);
	var _ = o(g);
	r(
		_,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Added a directional arrow particle effect to Goo Ball for Viscous</li><li>Added additional particles while using Goo Ball</li></ul>
`
	);
	var v = s(_, 2);
	(c(v, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), t(g));
	var y = s(g, 2);
	a(y, 1, `ability puddle-punch`);
	var b = o(y);
	r(
		b,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Fixed hit detection on Puddle Punch and Goo Ball</li><li>Fixed Puddle Punch having 2x the range of the tooltip.</li><li>Fixed Puddle Punch being able to target behind puddle</li><li>Fixed Puddle Punch using Guardians as a surface to punch from</li></ul>
`
	);
	var x = s(b, 2);
	(c(x, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), t(y));
	var S = s(y, 2);
	a(S, 1, `ability puddle-punch-range`);
	var C = o(S);
	r(
		C,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch Range change history</a></p>
<h4 id="puddle-punch-range"><a href="/ability/puddle-punch">Puddle Punch Range</a></h4>
<ul><li>Puddle Punch Range reduced from 70m to 60m</li></ul>
`
	);
	var w = s(C, 2);
	(c(w, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch Range` }), t(S));
	var T = s(S, 2);
	a(T, 1, `ability splatter`);
	var E = o(T);
	r(
		E,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit.</li><li>Splatter Cooldown from 18s to 20s</li><li>Splatter Base Damage from 120 to 110</li></ul>
`
	);
	var D = s(E, 2);
	(c(D, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), t(T), t(p), n(e, l));
}
export { h as default, d as metadata, p as readingManifest, f as toc };
