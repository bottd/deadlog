import {
	I as e,
	K as t,
	P as n,
	at as r,
	bt as i,
	k as a,
	mt as o,
	s,
	st as c,
	xt as l
} from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import { R as u } from '../chunks/1gFtTxxl.js';
import { m as d } from '../chunks/DGUGVeMZ.js';
import { a as f, i as p, n as m, o as h, p as g, s as _ } from '../chunks/BkQs74dv.js';
import { n as v, t as y } from '../chunks/dp17nrVd.js';
var b = e(`<!> <!> <!>`, 1);
function x(e, x) {
	l(x, !0);
	let S = o(() => u.toURLSearchParams().toString()),
		C = o(() => t(S) !== ``),
		w = o(() => (t(S) ? `${_}/?${t(S)}` : _));
	var T = b(),
		E = r(T);
	{
		let e = o(() => g({ title: h, description: p, canonical: t(w), indexable: !t(C) }));
		v(
			E,
			s(() => t(e))
		);
	}
	var D = c(E, 2),
		O = (e) => {
			{
				let n = o(() => ({
					'@graph': [
						{
							'@type': `WebSite`,
							'@id': `${_}/#website`,
							url: _,
							name: f,
							alternateName: `Deadlock Changelog`,
							description: p,
							inLanguage: `en-US`
						},
						{
							'@type': `CollectionPage`,
							'@id': `${_}/#webpage`,
							url: _,
							name: h,
							description: p,
							image: m,
							dateModified: x.data.lastUpdate,
							inLanguage: `en-US`,
							isPartOf: { '@id': `${_}/#website` },
							about: { '@type': `VideoGame`, name: `Deadlock` }
						}
					]
				}));
				y(e, {
					get schema() {
						return t(n);
					}
				});
			}
		};
	a(D, (e) => {
		t(C) || e(O);
	});
	var k = c(D, 2);
	(d(k, {}), n(e, T), i());
}
export { x as component };
