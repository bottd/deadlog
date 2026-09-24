import {
	$ as e,
	At as t,
	I as n,
	P as r,
	_ as i,
	a,
	at as o,
	g as s,
	h as c,
	k as l,
	st as u
} from './CSrylp8p.js';
import './xihTtKlq.js';
var d = n(`<div aria-hidden="true"></div>`),
	f = n(`<!> <!>`, 1),
	p = n(`<!> <!> <!>`, 1);
function m(n, m) {
	let h = (n, a = t, o = t, l = t, u = t, f = t) => {
			var p = d();
			let m;
			(e(() => {
				(s(p, 1, i([`absolute`, a(), o(), l(), x(), `transition-colors duration-300`])),
					(m = c(p, ``, m, { height: u(), width: f() })));
			}),
				r(n, p));
		},
		g = a(m, `tlColor`, 3, `bg-primary/40`),
		_ = a(m, `brColor`, 3, `bg-primary/20`),
		v = a(m, `tlHover`, 3, ``),
		y = a(m, `brHover`, 3, ``),
		b = a(m, `thickness`, 3, `1px`),
		x = a(m, `class`, 3, ``);
	var S = p(),
		C = o(S);
	h(
		C,
		() => `top-0 left-0`,
		g,
		v,
		() => m.tlSize,
		b
	);
	var w = u(C, 2);
	h(
		w,
		() => `top-0 left-0`,
		g,
		v,
		b,
		() => m.tlSize
	);
	var T = u(w, 2),
		E = (e) => {
			var t = f(),
				n = o(t);
			h(
				n,
				() => `right-0 bottom-0`,
				_,
				y,
				() => m.brSize,
				b
			);
			var i = u(n, 2);
			(h(
				i,
				() => `right-0 bottom-0`,
				_,
				y,
				b,
				() => m.brSize
			),
				r(e, t));
		};
	(l(T, (e) => {
		m.brSize && e(E);
	}),
		r(n, S));
}
export { m as t };
