import { ct as e, et as t } from './CSrylp8p.js';
import { n, s as r } from './Cips59vp.js';
import { n as i } from './CfafoLPj.js';
import './DQOGthuy.js';
function a(a) {
	let o = Object.keys(a),
		s = e({}),
		c,
		l = (e) =>
			s[e] ??
			(r ? `` : e in i.state ? (i.state[e] ?? ``) : (i.url.searchParams.get(e) ?? ``));
	function u() {
		clearTimeout(c);
		let e = new URL(location.href),
			t = { ...i.state };
		for (let n of o) {
			let r = l(n);
			(e.searchParams.delete(n),
				r && e.searchParams.set(n, r),
				(t[n] = r),
				(s[n] = void 0));
		}
		n(e, t);
	}
	return (
		t(() => () => clearTimeout(c)),
		Object.defineProperties(
			{},
			Object.fromEntries(
				o.map((e) => [
					e,
					{
						get: () => l(e),
						set(t) {
							((s[e] = t), clearTimeout(c), a[e] ? (c = setTimeout(u, a[e])) : u());
						}
					}
				])
			)
		)
	);
}
export { a as t };
