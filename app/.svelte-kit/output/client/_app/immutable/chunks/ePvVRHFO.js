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
	u(e, { type: `item`, names: [`Restorative Locket`] });
}
var f = {
		title: `08-18-2024 Update`,
		thread_id: `18377`,
		published: `2024-08-18T22:46:34-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Restorative Locket Spirit Resist reduced from 10% to 8% Cooldown increased from 24s to 28s Heal reduced from 40 per stack to 35 Stamina restore changed from max stamina to 1 charge`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-17`, to: `2024-08-19` },
			after: { from: `2024-08-20`, to: `2024-08-23` }
		}
	},
	p = [
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` }
	],
	m = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-08-17`, to: `2024-08-19` },
			after: { from: `2024-08-20`, to: `2024-08-23` },
			siblings: []
		},
		open: !1,
		sections: [{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` }],
		related: []
	},
	h = e(
		`<!> <!> <div><!> <ul><li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div>`,
		1
	);
function g(e) {
	var u = h(),
		f = i(u);
	r(
		f,
		() => `<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var p = s(f, 2);
	d(p, {});
	var m = s(p, 2);
	a(m, 1, `item restorative-locket`);
	var g = o(m);
	r(
		g,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
`
	);
	var _ = s(g, 2),
		v = o(_);
	(r(v, () => `Spirit Resist reduced from 10% to 8%`, !0), t(v));
	var y = s(v, 2),
		b = o(y);
	r(b, () => `Cooldown increased from 24s to 28s`);
	var x = s(b, 2);
	(l(x, {
		kind: `item`,
		name: `Restorative Locket`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 24s to 28s`
	}),
		t(y));
	var S = s(y, 2);
	(r(S, () => `Heal reduced from 40 per stack to 35`, !0), t(S));
	var C = s(S, 2);
	(r(C, () => `Stamina restore changed from max stamina to 1 charge`, !0), t(C), t(_));
	var w = s(_, 2);
	(c(w, { kind: `item`, name: `Restorative Locket`, ability: null }), t(m), n(e, u));
}
export { g as default, f as metadata, m as readingManifest, p as toc };
