import {
	$ as e,
	At as t,
	B as n,
	C as r,
	Dt as i,
	E as a,
	F as o,
	H as s,
	I as c,
	K as l,
	L as u,
	Mt as d,
	N as f,
	Ot as p,
	P as m,
	R as h,
	S as g,
	St as _,
	U as v,
	V as y,
	Y as b,
	_ as x,
	a as S,
	at as C,
	bt as w,
	c as T,
	ct as E,
	d as D,
	et as O,
	f as k,
	ft as A,
	g as j,
	h as ee,
	it as M,
	j as te,
	k as N,
	l as ne,
	m as P,
	mt as F,
	n as re,
	o as I,
	ot as ie,
	r as ae,
	s as L,
	st as R,
	ut as z,
	vt as oe,
	w as B,
	xt as V,
	y as se,
	yt as ce,
	z as le
} from '../chunks/CSrylp8p.js';
import '../chunks/xihTtKlq.js';
import '../chunks/B7jpYZsL.js';
import { n as H, t as U } from '../chunks/CfafoLPj.js';
import {
	$ as ue,
	A as de,
	Ct as fe,
	E as W,
	Et as G,
	Q as pe,
	S as me,
	St as K,
	Tt as q,
	U as J,
	V as he,
	W as ge,
	X as _e,
	Z as Y,
	_ as ve,
	_t as X,
	at as ye,
	b as be,
	bt as xe,
	c as Se,
	ct as Ce,
	d as Z,
	dt as we,
	et as Te,
	f as Ee,
	ft as De,
	g as Oe,
	gt as ke,
	h as Ae,
	ht as je,
	i as Me,
	it as Ne,
	l as Pe,
	lt as Fe,
	mt as Ie,
	nt as Le,
	ot as Q,
	p as Re,
	pt as ze,
	r as Be,
	rt as Ve,
	st as He,
	tt as Ue,
	u as We,
	ut as Ge,
	vt as Ke,
	w as qe,
	wt as Je,
	x as Ye,
	y as Xe,
	yt as Ze
} from '../chunks/1gFtTxxl.js';
function Qe(e) {
	O(() => b(() => e()));
}
var $e = [`top`, `right`, `bottom`, `left`],
	et = Math.min,
	tt = Math.max,
	nt = Math.round,
	rt = Math.floor,
	it = (e) => ({ x: e, y: e }),
	at = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function ot(e, t, n) {
	return tt(e, et(t, n));
}
function st(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function ct(e) {
	return e.split(`-`)[0];
}
function lt(e) {
	return e.split(`-`)[1];
}
function ut(e) {
	return e === `x` ? `y` : `x`;
}
function dt(e) {
	return e === `y` ? `height` : `width`;
}
function ft(e) {
	let t = e[0];
	return t === `t` || t === `b` ? `y` : `x`;
}
function pt(e) {
	return ut(ft(e));
}
function mt(e, t, n) {
	n === void 0 && (n = !1);
	let r = lt(e),
		i = pt(e),
		a = dt(i),
		o =
			i === `x`
				? r === (n ? `end` : `start`)
					? `right`
					: `left`
				: r === `start`
					? `bottom`
					: `top`;
	return (t.reference[a] > t.floating[a] && (o = Ct(o)), [o, Ct(o)]);
}
function ht(e) {
	let t = Ct(e);
	return [gt(e), t, gt(t)];
}
function gt(e) {
	return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`);
}
var _t = [`left`, `right`],
	vt = [`right`, `left`],
	yt = [`top`, `bottom`],
	bt = [`bottom`, `top`];
function xt(e, t, n) {
	switch (e) {
		case `top`:
		case `bottom`:
			return n ? (t ? vt : _t) : t ? _t : vt;
		case `left`:
		case `right`:
			return t ? yt : bt;
		default:
			return [];
	}
}
function St(e, t, n, r) {
	let i = lt(e),
		a = xt(ct(e), n === `start`, r);
	return (i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(gt)))), a);
}
function Ct(e) {
	let t = ct(e);
	return at[t] + e.slice(t.length);
}
function wt(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Tt(e) {
	return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : wt(e);
}
function Et(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
function Dt(e, t, n) {
	let { reference: r, floating: i } = e,
		a = ft(t),
		o = pt(t),
		s = dt(o),
		c = ct(t),
		l = a === `y`,
		u = r.x + r.width / 2 - i.width / 2,
		d = r.y + r.height / 2 - i.height / 2,
		f = r[s] / 2 - i[s] / 2,
		p;
	switch (c) {
		case `top`:
			p = { x: u, y: r.y - i.height };
			break;
		case `bottom`:
			p = { x: u, y: r.y + r.height };
			break;
		case `right`:
			p = { x: r.x + r.width, y: d };
			break;
		case `left`:
			p = { x: r.x - i.width, y: d };
			break;
		default:
			p = { x: r.x, y: r.y };
	}
	let m = lt(t);
	return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function Ot(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
		{
			boundary: c = `clippingAncestors`,
			rootBoundary: l = `viewport`,
			elementContext: u = `floating`,
			altBoundary: d = !1,
			padding: f = 0
		} = st(t, e),
		p = Tt(f),
		m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
		h = Et(
			await i.getClippingRect({
				element:
					((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
						? m
						: m.contextElement ||
							(await (i.getDocumentElement == null
								? void 0
								: i.getDocumentElement(o.floating))),
				boundary: c,
				rootBoundary: l,
				strategy: s
			})
		),
		g =
			u === `floating`
				? { x: n, y: r, width: a.floating.width, height: a.floating.height }
				: a.reference,
		_ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
		v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
			(await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
		y = Et(
			i.convertOffsetParentRelativeRectToViewportRelativeRect
				? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: o,
						rect: g,
						offsetParent: _,
						strategy: s
					})
				: g
		);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var kt = 50,
	At = async (e, t, n) => {
		let {
				placement: r = `bottom`,
				strategy: i = `absolute`,
				middleware: a = [],
				platform: o
			} = n,
			s = o.detectOverflow ? o : { ...o, detectOverflow: Ot },
			c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
			l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
			{ x: u, y: d } = Dt(l, r, c),
			f = r,
			p = 0,
			m = {};
		for (let n = 0; n < a.length; n++) {
			let h = a[n];
			if (!h) continue;
			let { name: g, fn: _ } = h,
				{
					x: v,
					y,
					data: b,
					reset: x
				} = await _({
					x: u,
					y: d,
					initialPlacement: r,
					placement: f,
					strategy: i,
					middlewareData: m,
					rects: l,
					platform: s,
					elements: { reference: e, floating: t }
				});
			((u = v ?? u),
				(d = y ?? d),
				(m[g] = { ...m[g], ...b }),
				x &&
					p < kt &&
					(p++,
					typeof x == `object` &&
						(x.placement && (f = x.placement),
						x.rects &&
							(l =
								x.rects === !0
									? await o.getElementRects({ reference: e, floating: t, strategy: i })
									: x.rects),
						({ x: u, y: d } = Dt(l, f, c))),
					(n = -1)));
		}
		return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
	},
	jt = (e) => ({
		name: `arrow`,
		options: e,
		async fn(t) {
			let {
					x: n,
					y: r,
					placement: i,
					rects: a,
					platform: o,
					elements: s,
					middlewareData: c
				} = t,
				{ element: l, padding: u = 0 } = st(e, t) || {};
			if (l == null) return {};
			let d = Tt(u),
				f = { x: n, y: r },
				p = pt(i),
				m = dt(p),
				h = await o.getDimensions(l),
				g = p === `y`,
				_ = g ? `top` : `left`,
				v = g ? `bottom` : `right`,
				y = g ? `clientHeight` : `clientWidth`,
				b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
				x = f[p] - a.reference[p],
				S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
				C = S ? S[y] : 0;
			(!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
				(C = s.floating[y] || a.floating[m]);
			let w = b / 2 - x / 2,
				T = C / 2 - h[m] / 2 - 1,
				E = et(d[_], T),
				D = et(d[v], T),
				O = C - h[m] - D,
				k = C / 2 - h[m] / 2 + w,
				A = ot(E, k, O),
				j =
					!c.arrow &&
					lt(i) != null &&
					k !== A &&
					a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0,
				ee = j ? (k < E ? k - E : k - O) : 0;
			return {
				[p]: f[p] + ee,
				data: { [p]: A, centerOffset: k - A - ee, ...(j && { alignmentOffset: ee }) },
				reset: j
			};
		}
	}),
	Mt = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: `flip`,
				options: e,
				async fn(t) {
					var n;
					let {
							placement: r,
							middlewareData: i,
							rects: a,
							initialPlacement: o,
							platform: s,
							elements: c
						} = t,
						{
							mainAxis: l = !0,
							crossAxis: u = !0,
							fallbackPlacements: d,
							fallbackStrategy: f = `bestFit`,
							fallbackAxisSideDirection: p = `none`,
							flipAlignment: m = !0,
							...h
						} = st(e, t);
					if ((n = i.arrow) != null && n.alignmentOffset) return {};
					let g = ct(r),
						_ = ft(o),
						v = ct(o) === o,
						y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
						b = d || (v || !m ? [Ct(o)] : ht(o)),
						x = p !== `none`;
					!d && x && b.push(...St(o, m, p, y));
					let S = [o, ...b],
						C = await s.detectOverflow(t, h),
						w = [],
						T = i.flip?.overflows || [];
					if ((l && w.push(C[g]), u)) {
						let e = mt(r, a, y);
						w.push(C[e[0]], C[e[1]]);
					}
					if (((T = [...T, { placement: r, overflows: w }]), !w.every((e) => e <= 0))) {
						let e = (i.flip?.index || 0) + 1,
							t = S[e];
						if (
							t &&
							(u !== `alignment` ||
								_ === ft(t) ||
								T.every((e) => ft(e.placement) !== _ || e.overflows[0] > 0))
						)
							return { data: { index: e, overflows: T }, reset: { placement: t } };
						let n = T.filter((e) => e.overflows[0] <= 0).sort(
							(e, t) => e.overflows[1] - t.overflows[1]
						)[0]?.placement;
						if (!n)
							switch (f) {
								case `bestFit`: {
									let e = T.filter((e) => {
										if (x) {
											let t = ft(e.placement);
											return t === _ || t === `y`;
										}
										return !0;
									})
										.map((e) => [
											e.placement,
											e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)
										])
										.sort((e, t) => e[1] - t[1])[0]?.[0];
									e && (n = e);
									break;
								}
								case `initialPlacement`:
									n = o;
							}
						if (r !== n) return { reset: { placement: n } };
					}
					return {};
				}
			}
		);
	};
function Nt(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Pt(e) {
	return $e.some((t) => e[t] >= 0);
}
var Ft = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: `hide`,
				options: e,
				async fn(t) {
					let { rects: n, platform: r } = t,
						{ strategy: i = `referenceHidden`, ...a } = st(e, t);
					switch (i) {
						case `referenceHidden`: {
							let e = Nt(
								await r.detectOverflow(t, { ...a, elementContext: `reference` }),
								n.reference
							);
							return { data: { referenceHiddenOffsets: e, referenceHidden: Pt(e) } };
						}
						case `escaped`: {
							let e = Nt(
								await r.detectOverflow(t, { ...a, altBoundary: !0 }),
								n.floating
							);
							return { data: { escapedOffsets: e, escaped: Pt(e) } };
						}
						default:
							return {};
					}
				}
			}
		);
	},
	It = new Set([`left`, `top`]);
async function Lt(e, t) {
	let { placement: n, platform: r, elements: i } = e,
		a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
		o = ct(n),
		s = lt(n),
		c = ft(n) === `y`,
		l = It.has(o) ? -1 : 1,
		u = a && c ? -1 : 1,
		d = st(t, e),
		{
			mainAxis: f,
			crossAxis: p,
			alignmentAxis: m
		} = typeof d == `number`
			? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
			: {
					mainAxis: d.mainAxis || 0,
					crossAxis: d.crossAxis || 0,
					alignmentAxis: d.alignmentAxis
				};
	return (
		s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
		c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
	);
}
var Rt = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: `offset`,
				options: e,
				async fn(t) {
					var n;
					let { x: r, y: i, placement: a, middlewareData: o } = t,
						s = await Lt(t, e);
					return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset
						? {}
						: { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
				}
			}
		);
	},
	zt = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: `shift`,
				options: e,
				async fn(t) {
					let { x: n, y: r, placement: i, platform: a } = t,
						{
							mainAxis: o = !0,
							crossAxis: s = !1,
							limiter: c = {
								fn: (e) => {
									let { x: t, y: n } = e;
									return { x: t, y: n };
								}
							},
							...l
						} = st(e, t),
						u = { x: n, y: r },
						d = await a.detectOverflow(t, l),
						f = ft(i),
						p = ut(f),
						m = u[p],
						h = u[f],
						g = (e, t) =>
							ot(
								t + d[e === `y` ? `top` : `left`],
								t,
								t - d[e === `y` ? `bottom` : `right`]
							);
					(o && (m = g(p, m)), s && (h = g(f, h)));
					let _ = c.fn({ ...t, [p]: m, [f]: h });
					return { ..._, data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } } };
				}
			}
		);
	},
	Bt = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
						{ offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = st(e, t),
						u = { x: n, y: r },
						d = ft(i),
						f = ut(d),
						p = u[f],
						m = u[d],
						h = st(s, t),
						g =
							typeof h == `number`
								? { mainAxis: h, crossAxis: 0 }
								: { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
					if (c) {
						let e = f === `y` ? `height` : `width`,
							t = a.reference[f] - a.floating[e] + g.mainAxis,
							n = a.reference[f] + a.reference[e] - g.mainAxis;
						p < t ? (p = t) : p > n && (p = n);
					}
					if (l) {
						let e = f === `y` ? `width` : `height`,
							t = It.has(ct(i)),
							n =
								a.reference[d] -
								a.floating[e] +
								((t && o.offset?.[d]) || 0) +
								(t ? 0 : g.crossAxis),
							r =
								a.reference[d] +
								a.reference[e] +
								(t ? 0 : o.offset?.[d] || 0) -
								(t ? g.crossAxis : 0);
						m < n ? (m = n) : m > r && (m = r);
					}
					return { [f]: p, [d]: m };
				}
			}
		);
	},
	Vt = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: `size`,
				options: e,
				async fn(t) {
					let { placement: n, rects: r, platform: i, elements: a } = t,
						{ apply: o = () => {}, ...s } = st(e, t),
						c = await i.detectOverflow(t, s),
						l = ct(n),
						u = lt(n),
						d = ft(n) === `y`,
						{ width: f, height: p } = r.floating,
						m,
						h;
					l === `top` || l === `bottom`
						? ((m = l),
							(h =
								u ===
								((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
									? `start`
									: `end`)
									? `left`
									: `right`))
						: ((h = l), (m = u === `end` ? `top` : `bottom`));
					let g = p - c.top - c.bottom,
						_ = f - c.left - c.right,
						v = et(p - c[m], g),
						y = et(f - c[h], _),
						b = t.middlewareData.shift,
						x = !b,
						S = v,
						C = y;
					(b != null && b.enabled.x && (C = _),
						b != null && b.enabled.y && (S = g),
						x &&
							!u &&
							(d ? (C = f - 2 * tt(c.left, c.right)) : (S = p - 2 * tt(c.top, c.bottom))),
						await o({ ...t, availableWidth: C, availableHeight: S }));
					let w = await i.getDimensions(a.floating);
					return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
				}
			}
		);
	};
function Ht() {
	return typeof window < `u`;
}
function Ut(e) {
	return Gt(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function $(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(e) {
	return ((Gt(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Gt(e) {
	return Ht() ? e instanceof Node || e instanceof $(e).Node : !1;
}
function Kt(e) {
	return Ht() ? e instanceof Element || e instanceof $(e).Element : !1;
}
function qt(e) {
	return Ht() ? e instanceof HTMLElement || e instanceof $(e).HTMLElement : !1;
}
function Jt(e) {
	return !Ht() || typeof ShadowRoot > `u`
		? !1
		: e instanceof ShadowRoot || e instanceof $(e).ShadowRoot;
}
function Yt(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = sn(e);
	return (
		/auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
		i !== `inline` &&
		i !== `contents`
	);
}
function Xt(e) {
	return /^(table|td|th)$/.test(Ut(e));
}
function Zt(e) {
	try {
		if (e.matches(`:popover-open`)) return !0;
	} catch {}
	try {
		return e.matches(`:modal`);
	} catch {
		return !1;
	}
}
var Qt = /transform|translate|scale|rotate|perspective|filter/,
	$t = /paint|layout|strict|content/,
	en = (e) => !!e && e !== `none`,
	tn;
function nn(e) {
	let t = Kt(e) ? sn(e) : e;
	return (
		en(t.transform) ||
		en(t.translate) ||
		en(t.scale) ||
		en(t.rotate) ||
		en(t.perspective) ||
		(!an() && (en(t.backdropFilter) || en(t.filter))) ||
		Qt.test(t.willChange || ``) ||
		$t.test(t.contain || ``)
	);
}
function rn(e) {
	let t = ln(e);
	for (; qt(t) && !on(t); ) {
		if (nn(t)) return t;
		if (Zt(t)) return null;
		t = ln(t);
	}
	return null;
}
function an() {
	return (
		(tn ??=
			typeof CSS < `u` &&
			CSS.supports &&
			CSS.supports(`-webkit-backdrop-filter`, `none`)),
		tn
	);
}
function on(e) {
	return /^(html|body|#document)$/.test(Ut(e));
}
function sn(e) {
	return $(e).getComputedStyle(e);
}
function cn(e) {
	return Kt(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ln(e) {
	if (Ut(e) === `html`) return e;
	let t = e.assignedSlot || e.parentNode || (Jt(e) && e.host) || Wt(e);
	return Jt(t) ? t.host : t;
}
function un(e) {
	let t = ln(e);
	return on(t) ? (e.ownerDocument || e).body : qt(t) && Yt(t) ? t : un(t);
}
function dn(e, t, n) {
	(t === void 0 && (t = []), n === void 0 && (n = !0));
	let r = un(e),
		i = r === e.ownerDocument?.body,
		a = $(r);
	if (i) {
		let e = fn(a);
		return t.concat(a, a.visualViewport || [], Yt(r) ? r : [], e && n ? dn(e) : []);
	}
	return t.concat(r, dn(r, [], n));
}
function fn(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pn(e) {
	let t = sn(e),
		n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0,
		i = qt(e),
		a = i ? e.offsetWidth : n,
		o = i ? e.offsetHeight : r,
		s = nt(n) !== a || nt(r) !== o;
	return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function mn(e) {
	return Kt(e) ? e : e.contextElement;
}
function hn(e) {
	let t = mn(e);
	if (!qt(t)) return it(1);
	let n = t.getBoundingClientRect(),
		{ width: r, height: i, $: a } = pn(t),
		o = (a ? nt(n.width) : n.width) / r,
		s = (a ? nt(n.height) : n.height) / i;
	return (
		(!o || !Number.isFinite(o)) && (o = 1),
		(!s || !Number.isFinite(s)) && (s = 1),
		{ x: o, y: s }
	);
}
var gn = it(0);
function _n(e) {
	let t = $(e);
	return !an() || !t.visualViewport
		? gn
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function vn(e, t, n) {
	return (t === void 0 && (t = !1), !!n && t && n === $(e));
}
function yn(e, t, n, r) {
	(t === void 0 && (t = !1), n === void 0 && (n = !1));
	let i = e.getBoundingClientRect(),
		a = mn(e),
		o = it(1);
	t && (r ? Kt(r) && (o = hn(r)) : (o = hn(e)));
	let s = vn(a, n, r) ? _n(a) : it(0),
		c = (i.left + s.x) / o.x,
		l = (i.top + s.y) / o.y,
		u = i.width / o.x,
		d = i.height / o.y;
	if (a && r) {
		let e = $(a),
			t = Kt(r) ? $(r) : r,
			n = e,
			i = fn(n);
		for (; i && t !== n; ) {
			let e = hn(i),
				t = i.getBoundingClientRect(),
				r = sn(i),
				a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
				o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			((c *= e.x),
				(l *= e.y),
				(u *= e.x),
				(d *= e.y),
				(c += a),
				(l += o),
				(n = $(i)),
				(i = fn(n)));
		}
	}
	return Et({ width: u, height: d, x: c, y: l });
}
function bn(e, t) {
	let n = cn(e).scrollLeft;
	return t ? t.left + n : yn(Wt(e)).left + n;
}
function xn(e, t) {
	let n = e.getBoundingClientRect();
	return { x: n.left + t.scrollLeft - bn(e, n), y: n.top + t.scrollTop };
}
function Sn(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
		a = i === `fixed`,
		o = Wt(r),
		s = t ? Zt(t.floating) : !1;
	if (r === o || (s && a)) return n;
	let c = { scrollLeft: 0, scrollTop: 0 },
		l = it(1),
		u = it(0),
		d = qt(r);
	if ((d || !a) && ((Ut(r) !== `body` || Yt(o)) && (c = cn(r)), d)) {
		let e = yn(r);
		((l = hn(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
	}
	let f = o && !d && !a ? xn(o, c) : it(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Cn(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function wn(e) {
	let t = cn(e),
		n = e.ownerDocument.body,
		r = tt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
		i = tt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
		a = -t.scrollLeft + bn(e),
		o = -t.scrollTop;
	return (
		sn(n).direction === `rtl` && (a += tt(e.clientWidth, n.clientWidth) - r),
		{ width: r, height: i, x: a, y: o }
	);
}
var Tn = 25;
function En(e, t, n) {
	n === void 0 && (n = `viewport`);
	let r = n === `layoutViewport`,
		i = $(e),
		a = Wt(e),
		o = i.visualViewport,
		s = a.clientWidth,
		c = a.clientHeight,
		l = 0,
		u = 0;
	if (o) {
		let e = !an() || t === `fixed`;
		r
			? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
			: ((s = o.width), (c = o.height), e && ((l = o.offsetLeft), (u = o.offsetTop)));
	}
	if (bn(a) <= 0) {
		let e = a.ownerDocument,
			t = e.body,
			n = getComputedStyle(t),
			r =
				(e.compatMode === `CSS1Compat` &&
					parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
				0,
			i = Math.abs(a.clientWidth - t.clientWidth - r),
			o = getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
		o <= Tn && (s -= o);
	}
	return { width: s, height: c, x: l, y: u };
}
function Dn(e, t) {
	let n = yn(e, !0, t === `fixed`),
		r = n.top + e.clientTop,
		i = n.left + e.clientLeft,
		a = hn(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function On(e, t, n) {
	let r;
	if (t === `viewport` || t === `layoutViewport`) r = En(e, n, t);
	else if (t === `document`) r = wn(Wt(e));
	else if (Kt(t)) r = Dn(t, n);
	else {
		let n = _n(e);
		r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
	}
	return Et(r);
}
function kn(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = dn(e, [], !1).filter((e) => Kt(e) && Ut(e) !== `body`),
		i = null,
		a = sn(e).position === `fixed`,
		o = a ? ln(e) : e;
	for (; Kt(o) && !on(o); ) {
		let e = sn(o),
			t = nn(o),
			n = i ? i.position : a ? `fixed` : ``;
		(!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
			? (r = r.filter((e) => e !== o))
			: (i = e),
			(o = ln(o)));
	}
	return (t.set(e, r), r);
}
function An(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
		a = [
			...(n === `clippingAncestors` ? (Zt(t) ? [] : kn(t, this._c)) : [].concat(n)),
			r
		],
		o = On(t, a[0], i),
		s = o.top,
		c = o.right,
		l = o.bottom,
		u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = On(t, a[e], i);
		((s = tt(n.top, s)),
			(c = et(n.right, c)),
			(l = et(n.bottom, l)),
			(u = tt(n.left, u)));
	}
	return { width: c - u, height: l - s, x: u, y: s };
}
function jn(e) {
	let { width: t, height: n } = pn(e);
	return { width: t, height: n };
}
function Mn(e, t, n) {
	let r = qt(t),
		i = Wt(t),
		a = n === `fixed`,
		o = yn(e, !0, a, t),
		s = { scrollLeft: 0, scrollTop: 0 },
		c = it(0);
	if ((r || !a) && ((Ut(t) !== `body` || Yt(i)) && (s = cn(t)), r)) {
		let e = yn(t, !0, a, t);
		((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
	}
	!r && i && (c.x = bn(i));
	let l = i && !r && !a ? xn(i, s) : it(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Nn(e) {
	return sn(e).position === `static`;
}
function Pn(e, t) {
	if (!qt(e) || sn(e).position === `fixed`) return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return (Wt(e) === n && (n = n.ownerDocument.body), n);
}
function Fn(e, t) {
	let n = $(e);
	if (Zt(e)) return n;
	if (!qt(e)) {
		let t = ln(e);
		for (; t && !on(t); ) {
			if (Kt(t) && !Nn(t)) return t;
			t = ln(t);
		}
		return n;
	}
	let r = Pn(e, t);
	for (; r && Xt(r) && Nn(r); ) r = Pn(r, t);
	return r && on(r) && Nn(r) && !nn(r) ? n : r || rn(e) || n;
}
var In = async function (e) {
	let t = this.getOffsetParent || Fn,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: Mn(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: r.width, height: r.height }
	};
};
function Ln(e) {
	return sn(e).direction === `rtl`;
}
var Rn = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Sn,
	getDocumentElement: Wt,
	getClippingRect: An,
	getOffsetParent: Fn,
	getElementRects: In,
	getClientRects: Cn,
	getDimensions: jn,
	getScale: hn,
	isElement: Kt,
	isRTL: Ln
};
function zn(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bn(e, t, n) {
	let r = null,
		i,
		a = Wt(e);
	function o() {
		var e;
		(clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
	}
	function s(n, c) {
		(n === void 0 && (n = !1), c === void 0 && (c = 1), o());
		let l = e.getBoundingClientRect(),
			{ left: u, top: d, width: f, height: p } = l;
		if ((n || t(), !f || !p)) return;
		let m = rt(d),
			h = rt(a.clientWidth - (u + f)),
			g = rt(a.clientHeight - (d + p)),
			_ = rt(u),
			v = {
				rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
				threshold: tt(0, et(1, c)) || 1
			},
			y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!zn(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n
					? s(!1, n)
					: (i = setTimeout(() => {
							s(!1, 1e-7);
						}, 1e3));
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = $(e),
		l = () => s(n);
	return (
		c.addEventListener(`resize`, l),
		s(!0),
		() => {
			(c.removeEventListener(`resize`, l), o());
		}
	);
}
function Vn(e, t, n, r) {
	r === void 0 && (r = {});
	let {
			ancestorScroll: i = !0,
			ancestorResize: a = !0,
			elementResize: o = typeof ResizeObserver == `function`,
			layoutShift: s = typeof IntersectionObserver == `function`,
			animationFrame: c = !1
		} = r,
		l = mn(e),
		u = i || a ? [...(l ? dn(l) : []), ...(t ? dn(t) : [])] : [];
	u.forEach((e) => {
		(i && e.addEventListener(`scroll`, n), a && e.addEventListener(`resize`, n));
	});
	let d = l && s ? Bn(l, n, a) : null,
		f = -1,
		p = null;
	o &&
		((p = new ResizeObserver((e) => {
			let [r] = e;
			(r &&
				r.target === l &&
				p &&
				t &&
				(p.unobserve(t),
				cancelAnimationFrame(f),
				(f = requestAnimationFrame(() => {
					var e;
					(e = p) == null || e.observe(t);
				}))),
				n());
		})),
		l && !c && p.observe(l),
		t && p.observe(t));
	let m,
		h = c ? yn(e) : null;
	c && g();
	function g() {
		let t = yn(e);
		(h && !zn(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
	}
	return (
		n(),
		() => {
			var e;
			(u.forEach((e) => {
				(i && e.removeEventListener(`scroll`, n),
					a && e.removeEventListener(`resize`, n));
			}),
				d?.(),
				(e = p) == null || e.disconnect(),
				(p = null),
				c && cancelAnimationFrame(m));
		}
	);
}
var Hn = Rt,
	Un = zt,
	Wn = Mt,
	Gn = Vt,
	Kn = Ft,
	qn = jt,
	Jn = Bt,
	Yn = (e, t, n) => {
		let r = new Map(),
			i = n ?? {},
			a = { ...Rn, ...i.platform, _c: r };
		return At(e, t, { ...i, platform: a });
	};
function Xn(e) {
	return typeof e == `function` ? e() : e;
}
function Zn(e) {
	return typeof window > `u`
		? 1
		: (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qn(e, t) {
	let n = Zn(e);
	return Math.round(t * n) / n;
}
function $n(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${e}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${e}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${e}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${e}-anchor-height`]: `var(--bits-floating-anchor-height)`
	};
}
function er(e) {
	let t = e.whileElementsMounted,
		n = F(() => Xn(e.open) ?? !0),
		r = F(() => Xn(e.middleware)),
		i = F(() => Xn(e.transform) ?? !0),
		a = F(() => Xn(e.placement) ?? `bottom`),
		o = F(() => Xn(e.strategy) ?? `absolute`),
		s = F(() => Xn(e.sideOffset) ?? 0),
		c = F(() => Xn(e.alignOffset) ?? 0),
		u = e.reference,
		d = A(0),
		f = A(0),
		p = G(null),
		m = A(E(l(o))),
		h = A(E(l(a))),
		g = A(E({})),
		_ = A(!1),
		v = !1,
		y = 0,
		b = F(() => {
			let e = p.current ? Qn(p.current, l(d)) : l(d),
				t = p.current ? Qn(p.current, l(f)) : l(f);
			return l(i)
				? {
						position: l(m),
						left: `0`,
						top: `0`,
						transform: `translate(${e}px, ${t}px)`,
						...(p.current && Zn(p.current) >= 1.5 && { willChange: `transform` })
					}
				: { position: l(m), left: `${e}px`, top: `${t}px` };
		}),
		x;
	function S() {
		if (u.current === null || p.current === null) return;
		let e = u.current,
			t = p.current,
			i = ++y;
		Yn(e, t, { middleware: l(r), placement: l(a), strategy: l(o) }).then((r) => {
			if (i === y && u.current === e && p.current === t) {
				if (tr(e)) {
					z(g, { ...l(g), hide: { ...l(g).hide, referenceHidden: !0 } }, !0);
					return;
				}
				if (!l(n) && l(d) !== 0 && l(f) !== 0) {
					let e = Math.max(Math.abs(l(s)), Math.abs(l(c)), 15);
					if (r.x <= e && r.y <= e) return;
				}
				(z(d, r.x, !0),
					z(f, r.y, !0),
					z(m, r.strategy, !0),
					z(h, r.placement, !0),
					z(g, r.middlewareData, !0),
					z(_, !0));
			}
		});
	}
	function C() {
		(typeof x == `function` && (x(), (x = void 0)), y++);
	}
	function w() {
		if ((C(), t === void 0)) {
			S();
			return;
		}
		l(n) && u.current !== null && p.current !== null && (x = t(u.current, p.current, S));
	}
	function T() {
		!l(n) && p.current === null && z(_, !1);
	}
	function D() {
		return [l(r), l(a), l(o), l(s), l(c), l(n)];
	}
	return (
		O(() => {
			t === void 0 && l(n) && S();
		}),
		O(w),
		O(() => {
			if (t !== void 0) {
				if ((D(), !l(n))) {
					v = !1;
					return;
				}
				if (!l(_)) {
					v = !1;
					return;
				}
				if (!v) {
					v = !0;
					return;
				}
				S();
			}
		}),
		O(T),
		O(() => C),
		{
			floating: p,
			reference: u,
			get strategy() {
				return l(m);
			},
			get placement() {
				return l(h);
			},
			get middlewareData() {
				return l(g);
			},
			get isPositioned() {
				return l(_);
			},
			get floatingStyles() {
				return l(b);
			},
			get update() {
				return S;
			}
		}
	);
}
function tr(e) {
	return e instanceof Element
		? !e.isConnected || (e instanceof HTMLElement && e.hidden)
			? !0
			: e.getClientRects().length === 0
		: !1;
}
var nr = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
	rr = new Ze(`Floating.Root`),
	ir = new Ze(`Floating.Content`),
	ar = new Ze(`Floating.Root`),
	or = class e {
		static create(t = !1) {
			return t ? ar.set(new e()) : rr.set(new e());
		}
		anchorNode = G(null);
		customAnchorNode = G(null);
		triggerNode = G(null);
		constructor() {
			O(() => {
				this.customAnchorNode.current
					? typeof this.customAnchorNode.current == `string`
						? (this.anchorNode.current = document.querySelector(
								this.customAnchorNode.current
							))
						: (this.anchorNode.current = this.customAnchorNode.current)
					: (this.anchorNode.current = this.triggerNode.current);
			});
		}
	},
	sr = class e {
		static create(t, n = !1) {
			return n ? ir.set(new e(t, ar.get())) : ir.set(new e(t, rr.get()));
		}
		opts;
		root;
		contentRef = G(null);
		wrapperRef = G(null);
		arrowRef = G(null);
		contentAttachment = De(this.contentRef);
		wrapperAttachment = De(this.wrapperRef);
		arrowAttachment = De(this.arrowRef);
		arrowId = G(Y());
		#e = F(() => {
			if (typeof this.opts.style == `string`) return Je(this.opts.style);
			if (!this.opts.style) return {};
		});
		#t = void 0;
		#n = new X(() => this.arrowRef.current ?? void 0);
		#r = F(() => this.#n?.width ?? 0);
		#i = F(() => this.#n?.height ?? 0);
		#a = F(
			() =>
				this.opts.side?.current +
				(this.opts.align.current === `center` ? `` : `-${this.opts.align.current}`)
		);
		#o = F(() =>
			Array.isArray(this.opts.collisionBoundary.current)
				? this.opts.collisionBoundary.current
				: [this.opts.collisionBoundary.current]
		);
		#s = F(() => l(this.#o).length > 0);
		get hasExplicitBoundaries() {
			return l(this.#s);
		}
		set hasExplicitBoundaries(e) {
			z(this.#s, e);
		}
		#c = F(() => ({
			padding: this.opts.collisionPadding.current,
			boundary: l(this.#o).filter(Ce),
			altBoundary: this.hasExplicitBoundaries
		}));
		get detectOverflowOptions() {
			return l(this.#c);
		}
		set detectOverflowOptions(e) {
			z(this.#c, e);
		}
		#l = A(void 0);
		#u = A(void 0);
		#d = A(void 0);
		#f = A(void 0);
		#p = F(() =>
			[
				Hn({
					mainAxis: this.opts.sideOffset.current + l(this.#i),
					alignmentAxis: this.opts.alignOffset.current
				}),
				this.opts.avoidCollisions.current &&
					Un({
						mainAxis: !0,
						crossAxis: !1,
						limiter: this.opts.sticky.current === `partial` ? Jn() : void 0,
						...this.detectOverflowOptions
					}),
				this.opts.avoidCollisions.current && Wn({ ...this.detectOverflowOptions }),
				Gn({
					...this.detectOverflowOptions,
					apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
						let { width: r, height: i } = e.reference;
						(z(this.#l, t, !0), z(this.#u, n, !0), z(this.#d, r, !0), z(this.#f, i, !0));
					}
				}),
				this.arrowRef.current &&
					qn({ element: this.arrowRef.current, padding: this.opts.arrowPadding.current }),
				lr({ arrowWidth: l(this.#r), arrowHeight: l(this.#i) }),
				this.opts.hideWhenDetached.current &&
					Kn({ strategy: `referenceHidden`, ...this.detectOverflowOptions })
			].filter(Boolean)
		);
		get middleware() {
			return l(this.#p);
		}
		set middleware(e) {
			z(this.#p, e);
		}
		floating;
		#m = F(() => dr(this.floating.placement));
		get placedSide() {
			return l(this.#m);
		}
		set placedSide(e) {
			z(this.#m, e);
		}
		#h = F(() => fr(this.floating.placement));
		get placedAlign() {
			return l(this.#h);
		}
		set placedAlign(e) {
			z(this.#h, e);
		}
		#g = F(() => this.floating.middlewareData.arrow?.x ?? 0);
		get arrowX() {
			return l(this.#g);
		}
		set arrowX(e) {
			z(this.#g, e);
		}
		#_ = F(() => this.floating.middlewareData.arrow?.y ?? 0);
		get arrowY() {
			return l(this.#_);
		}
		set arrowY(e) {
			z(this.#_, e);
		}
		#v = F(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
		get cannotCenterArrow() {
			return l(this.#v);
		}
		set cannotCenterArrow(e) {
			z(this.#v, e);
		}
		#y = A();
		get contentZIndex() {
			return l(this.#y);
		}
		set contentZIndex(e) {
			z(this.#y, e, !0);
		}
		#b = F(() => nr[this.placedSide]);
		get arrowBaseSide() {
			return l(this.#b);
		}
		set arrowBaseSide(e) {
			z(this.#b, e);
		}
		#x = F(() => ({
			id: this.opts.wrapperId.current,
			'data-bits-floating-content-wrapper': ``,
			style: {
				...this.floating.floatingStyles,
				transform: this.floating.isPositioned
					? this.floating.floatingStyles.transform
					: `translate(0, -200%)`,
				minWidth: `max-content`,
				zIndex: this.contentZIndex,
				'--bits-floating-transform-origin': `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
				'--bits-floating-available-width': `${l(this.#l)}px`,
				'--bits-floating-available-height': `${l(this.#u)}px`,
				'--bits-floating-anchor-width': `${l(this.#d)}px`,
				'--bits-floating-anchor-height': `${l(this.#f)}px`,
				...(this.floating.middlewareData.hide?.referenceHidden && {
					visibility: `hidden`,
					'pointer-events': `none`
				}),
				...l(this.#e)
			},
			dir: this.opts.dir.current,
			...this.wrapperAttachment
		}));
		get wrapperProps() {
			return l(this.#x);
		}
		set wrapperProps(e) {
			z(this.#x, e);
		}
		#S = F(() => ({
			'data-side': this.placedSide,
			'data-align': this.placedAlign,
			style: fe({ ...l(this.#e) }),
			...this.contentAttachment
		}));
		get props() {
			return l(this.#S);
		}
		set props(e) {
			z(this.#S, e);
		}
		#C = F(() => ({
			position: `absolute`,
			left: this.arrowX ? `${this.arrowX}px` : void 0,
			top: this.arrowY ? `${this.arrowY}px` : void 0,
			[this.arrowBaseSide]: 0,
			'transform-origin': { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[
				this.placedSide
			],
			transform: {
				top: `translateY(100%)`,
				right: `translateY(50%) rotate(90deg) translateX(-50%)`,
				bottom: `rotate(180deg)`,
				left: `translateY(50%) rotate(-90deg) translateX(50%)`
			}[this.placedSide],
			visibility: this.cannotCenterArrow ? `hidden` : void 0
		}));
		get arrowStyle() {
			return l(this.#C);
		}
		set arrowStyle(e) {
			z(this.#C, e);
		}
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.#t = e.updatePositionStrategy),
				e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current),
				Ke(
					() => e.customAnchor.current,
					(e) => {
						this.root.customAnchorNode.current = e;
					}
				),
				(this.floating = er({
					strategy: () => this.opts.strategy.current,
					placement: () => l(this.#a),
					middleware: () => this.middleware,
					reference: this.root.anchorNode,
					whileElementsMounted: (...e) =>
						Vn(...e, { animationFrame: this.#t?.current === `always` }),
					open: () => this.opts.enabled.current,
					sideOffset: () => this.opts.sideOffset.current,
					alignOffset: () => this.opts.alignOffset.current
				})),
				O(() => {
					this.floating.isPositioned && this.opts.onPlaced?.current();
				}),
				Ke(
					() => this.contentRef.current,
					(e) => {
						if (!e || !this.opts.enabled.current) return;
						let t = je(e),
							n = t.requestAnimationFrame(() => {
								if (this.contentRef.current !== e || !this.opts.enabled.current) return;
								let n = t.getComputedStyle(e).zIndex;
								n !== this.contentZIndex && (this.contentZIndex = n);
							});
						return () => {
							t.cancelAnimationFrame(n);
						};
					}
				),
				O(() => {
					this.floating.floating.current = this.wrapperRef.current;
				}));
		}
	},
	cr = class e {
		static create(t) {
			return new e(t, ir.get());
		}
		opts;
		content;
		constructor(e, t) {
			((this.opts = e), (this.content = t));
		}
		#e = F(() => ({
			id: this.opts.id.current,
			style: this.content.arrowStyle,
			'data-side': this.content.placedSide,
			...this.content.arrowAttachment
		}));
		get props() {
			return l(this.#e);
		}
		set props(e) {
			z(this.#e, e);
		}
	};
function lr(e) {
	return {
		name: `transformOrigin`,
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t,
				a = i.arrow?.centerOffset !== 0,
				o = a ? 0 : e.arrowWidth,
				s = a ? 0 : e.arrowHeight,
				[c, l] = ur(n),
				u = { start: `0%`, center: `50%`, end: `100%` }[l],
				d = (i.arrow?.x ?? 0) + o / 2,
				f = (i.arrow?.y ?? 0) + s / 2,
				p = ``,
				m = ``;
			return (
				c === `bottom`
					? ((p = a ? u : `${d}px`), (m = `${-s}px`))
					: c === `top`
						? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
						: c === `right`
							? ((p = `${-s}px`), (m = a ? u : `${f}px`))
							: c === `left` &&
								((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
				{ data: { x: p, y: m } }
			);
		}
	};
}
function ur(e) {
	let [t, n = `center`] = e.split(`-`);
	return [t, n];
}
function dr(e) {
	return ur(e)[0];
}
function fr(e) {
	return ur(e)[1];
}
function pr(e, n) {
	V(n, !0);
	let r = S(n, `tooltip`, 3, !1);
	or.create(r());
	var i = o(),
		a = C(i);
	(B(a, () => n.children ?? t), m(e, i), w());
}
var mr = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`id`,
		`children`,
		`child`,
		`width`,
		`height`
	]),
	hr = u(
		`<svg viewBox="0 0 30 10" preserveAspectRatio="none" data-arrow=""><polygon points="0,0 30,0 15,10" fill="currentColor"></polygon></svg>`
	),
	gr = c(`<span><!></span>`);
function _r(n, r) {
	V(r, !0);
	let i = S(r, `id`, 19, Y),
		a = S(r, `width`, 3, 10),
		s = S(r, `height`, 3, 5),
		c = I(r, mr),
		u = F(() => K(c, { id: i() }));
	var d = o(),
		f = C(d),
		h = (e) => {
			var t = o(),
				n = C(t);
			(B(
				n,
				() => r.child,
				() => ({ props: l(u) })
			),
				m(e, t));
		},
		g = (n) => {
			var i = gr();
			k(i, () => ({ ...l(u) }));
			var c = M(i),
				d = (e) => {
					var n = o(),
						i = C(n);
					(B(i, () => r.children ?? t), m(e, n));
				},
				f = (t) => {
					var n = hr();
					(e(() => {
						(P(n, `width`, a()), P(n, `height`, s()));
					}),
						m(t, n));
				};
			(N(c, (e) => {
				r.children ? e(d) : e(f, -1);
			}),
				p(i),
				m(n, i));
		};
	(N(f, (e) => {
		r.child ? e(h) : e(g, -1);
	}),
		m(n, d),
		w());
}
var vr = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`]);
function yr(e, t) {
	V(t, !0);
	let n = S(t, `id`, 19, Y),
		r = S(t, `ref`, 15, null),
		i = I(t, vr),
		a = cr.create({
			id: q(() => n()),
			ref: q(
				() => r(),
				(e) => r(e)
			)
		}),
		o = F(() => K(i, a.props));
	(_r(
		e,
		L(() => l(o))
	),
		w());
}
function br(e, n) {
	V(n, !0);
	let r = S(n, `side`, 3, `bottom`),
		i = S(n, `sideOffset`, 3, 0),
		a = S(n, `align`, 3, `center`),
		s = S(n, `alignOffset`, 3, 0),
		c = S(n, `arrowPadding`, 3, 0),
		u = S(n, `avoidCollisions`, 3, !0),
		d = S(n, `collisionBoundary`, 19, () => []),
		f = S(n, `collisionPadding`, 3, 0),
		p = S(n, `hideWhenDetached`, 3, !1),
		h = S(n, `onPlaced`, 3, () => {}),
		g = S(n, `sticky`, 3, `partial`),
		_ = S(n, `updatePositionStrategy`, 3, `optimized`),
		v = S(n, `strategy`, 3, `fixed`),
		y = S(n, `dir`, 3, `ltr`),
		b = S(n, `style`, 19, () => ({})),
		x = S(n, `wrapperId`, 19, Y),
		T = S(n, `customAnchor`, 3, null),
		E = S(n, `tooltip`, 3, !1),
		D = sr.create(
			{
				side: q(() => r()),
				sideOffset: q(() => i()),
				align: q(() => a()),
				alignOffset: q(() => s()),
				id: q(() => n.id),
				arrowPadding: q(() => c()),
				avoidCollisions: q(() => u()),
				collisionBoundary: q(() => d()),
				collisionPadding: q(() => f()),
				hideWhenDetached: q(() => p()),
				onPlaced: q(() => h()),
				sticky: q(() => g()),
				updatePositionStrategy: q(() => _()),
				strategy: q(() => v()),
				dir: q(() => y()),
				style: q(() => b()),
				enabled: q(() => n.enabled),
				wrapperId: q(() => x()),
				customAnchor: q(() => T())
			},
			E()
		),
		O = F(() => K(D.wrapperProps, { style: { pointerEvents: `auto` } }));
	var k = o(),
		A = C(k);
	(B(
		A,
		() => n.content ?? t,
		() => ({ props: D.props, wrapperProps: l(O) })
	),
		m(e, k),
		w());
}
function xr(e, n) {
	(V(n, !0),
		ae(() => {
			n.onPlaced?.();
		}));
	var r = o(),
		i = C(r);
	(B(
		i,
		() => n.content ?? t,
		() => ({ props: {}, wrapperProps: {} })
	),
		m(e, r),
		w());
}
var Sr = new Set([`$$slots`, `$$events`, `$$legacy`, `content`, `isStatic`, `onPlaced`]);
function Cr(e, t) {
	let n = S(t, `isStatic`, 3, !1),
		r = I(t, Sr);
	var i = o(),
		a = C(i),
		s = (e) => {
			xr(e, {
				get content() {
					return t.content;
				},
				get onPlaced() {
					return t.onPlaced;
				}
			});
		},
		c = (e) => {
			br(
				e,
				L(
					{
						get content() {
							return t.content;
						},
						get onPlaced() {
							return t.onPlaced;
						}
					},
					() => r
				)
			);
		};
	(N(a, (e) => {
		n() ? e(s) : e(c, -1);
	}),
		m(e, i));
}
var wr = new Set(
		`$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents`.split(
			`.`
		)
	),
	Tr = c(`<!> <!>`, 1);
function Er(e, n) {
	V(n, !0);
	let r = S(n, `interactOutsideBehavior`, 3, `close`),
		i = S(n, `trapFocus`, 3, !0),
		a = S(n, `isValidEvent`, 3, () => !1),
		s = S(n, `customAnchor`, 3, null),
		c = S(n, `isStatic`, 3, !1),
		u = S(n, `tooltip`, 3, !1),
		d = S(n, `contentPointerEvents`, 3, `auto`),
		f = I(n, wr),
		p = F(() => n.preventScroll ?? !0),
		h = F(() => n.strategy ?? (l(p) ? `fixed` : `absolute`));
	(Cr(e, {
		get isStatic() {
			return c();
		},
		get id() {
			return n.id;
		},
		get side() {
			return n.side;
		},
		get sideOffset() {
			return n.sideOffset;
		},
		get align() {
			return n.align;
		},
		get alignOffset() {
			return n.alignOffset;
		},
		get arrowPadding() {
			return n.arrowPadding;
		},
		get avoidCollisions() {
			return n.avoidCollisions;
		},
		get collisionBoundary() {
			return n.collisionBoundary;
		},
		get collisionPadding() {
			return n.collisionPadding;
		},
		get sticky() {
			return n.sticky;
		},
		get hideWhenDetached() {
			return n.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return n.updatePositionStrategy;
		},
		get strategy() {
			return l(h);
		},
		get dir() {
			return n.dir;
		},
		get wrapperId() {
			return n.wrapperId;
		},
		get style() {
			return n.style;
		},
		get onPlaced() {
			return n.onPlaced;
		},
		get customAnchor() {
			return s();
		},
		get enabled() {
			return n.enabled;
		},
		get tooltip() {
			return u();
		},
		content: (e, s) => {
			let c = () => (s?.()).props,
				u = () => (s?.()).wrapperProps;
			var h = Tr(),
				g = C(h),
				_ = (e) => {
					_e(e, {
						get preventScroll() {
							return l(p);
						}
					});
				},
				v = (e) => {
					_e(e, {
						get preventScroll() {
							return l(p);
						}
					});
				};
			N(g, (e) => {
				n.forceMount && n.enabled ? e(_) : n.forceMount || e(v, 1);
			});
			var y = R(g, 2);
			(ue(y, {
				get onOpenAutoFocus() {
					return n.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return n.onCloseAutoFocus;
				},
				get loop() {
					return n.loop;
				},
				get enabled() {
					return n.enabled;
				},
				get trapFocus() {
					return i();
				},
				get forceMount() {
					return n.forceMount;
				},
				get ref() {
					return n.ref;
				},
				focusScope: (e, i) => {
					let s = () => (i?.()).props;
					Te(e, {
						get onEscapeKeydown() {
							return n.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return n.escapeKeydownBehavior;
						},
						get enabled() {
							return n.enabled;
						},
						get ref() {
							return n.ref;
						},
						children: (e, i) => {
							Ue(e, {
								get id() {
									return n.id;
								},
								get onInteractOutside() {
									return n.onInteractOutside;
								},
								get onFocusOutside() {
									return n.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return r();
								},
								get isValidEvent() {
									return a();
								},
								get enabled() {
									return n.enabled;
								},
								get ref() {
									return n.ref;
								},
								children: (e, r) => {
									let i = () => (r?.()).props;
									pe(e, {
										get id() {
											return n.id;
										},
										get preventOverflowTextSelection() {
											return n.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return n.onPointerDown;
										},
										get onPointerUp() {
											return n.onPointerUp;
										},
										get enabled() {
											return n.enabled;
										},
										get ref() {
											return n.ref;
										},
										children: (e, r) => {
											var a = o(),
												p = C(a);
											{
												let e = F(() => ({
													props: K(f, c(), i(), s(), {
														id: n.id,
														style: { pointerEvents: d() }
													}),
													wrapperProps: u()
												}));
												B(
													p,
													() => n.popper ?? t,
													() => l(e)
												);
											}
											m(e, a);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { focusScope: !0 }
			}),
				m(e, h));
		},
		$$slots: { content: !0 }
	}),
		w());
}
var Dr = new Set(
	`$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender`.split(
		`.`
	)
);
function Or(e, t) {
	let n = S(t, `interactOutsideBehavior`, 3, `close`),
		r = S(t, `trapFocus`, 3, !0),
		i = S(t, `isValidEvent`, 3, () => !1),
		a = S(t, `customAnchor`, 3, null),
		s = S(t, `isStatic`, 3, !1),
		c = I(t, Dr);
	var l = o(),
		u = C(l),
		d = (e) => {
			Er(
				e,
				L(
					{
						get popper() {
							return t.popper;
						},
						get onEscapeKeydown() {
							return t.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return t.escapeKeydownBehavior;
						},
						get preventOverflowTextSelection() {
							return t.preventOverflowTextSelection;
						},
						get id() {
							return t.id;
						},
						get onPointerDown() {
							return t.onPointerDown;
						},
						get onPointerUp() {
							return t.onPointerUp;
						},
						get side() {
							return t.side;
						},
						get sideOffset() {
							return t.sideOffset;
						},
						get align() {
							return t.align;
						},
						get alignOffset() {
							return t.alignOffset;
						},
						get arrowPadding() {
							return t.arrowPadding;
						},
						get avoidCollisions() {
							return t.avoidCollisions;
						},
						get collisionBoundary() {
							return t.collisionBoundary;
						},
						get collisionPadding() {
							return t.collisionPadding;
						},
						get sticky() {
							return t.sticky;
						},
						get hideWhenDetached() {
							return t.hideWhenDetached;
						},
						get updatePositionStrategy() {
							return t.updatePositionStrategy;
						},
						get strategy() {
							return t.strategy;
						},
						get dir() {
							return t.dir;
						},
						get preventScroll() {
							return t.preventScroll;
						},
						get wrapperId() {
							return t.wrapperId;
						},
						get style() {
							return t.style;
						},
						get onPlaced() {
							return t.onPlaced;
						},
						get customAnchor() {
							return a();
						},
						get isStatic() {
							return s();
						},
						get enabled() {
							return t.open;
						},
						get onInteractOutside() {
							return t.onInteractOutside;
						},
						get onCloseAutoFocus() {
							return t.onCloseAutoFocus;
						},
						get onOpenAutoFocus() {
							return t.onOpenAutoFocus;
						},
						get interactOutsideBehavior() {
							return n();
						},
						get loop() {
							return t.loop;
						},
						get trapFocus() {
							return r();
						},
						get isValidEvent() {
							return i();
						},
						get onFocusOutside() {
							return t.onFocusOutside;
						},
						forceMount: !1,
						get ref() {
							return t.ref;
						}
					},
					() => c
				)
			);
		};
	(N(u, (e) => {
		t.shouldRender && e(d);
	}),
		m(e, l));
}
var kr = new Set(
	`$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled`.split(
		`.`
	)
);
function Ar(e, t) {
	let n = S(t, `interactOutsideBehavior`, 3, `close`),
		r = S(t, `trapFocus`, 3, !0),
		i = S(t, `isValidEvent`, 3, () => !1),
		a = S(t, `customAnchor`, 3, null),
		o = S(t, `isStatic`, 3, !1),
		s = I(t, kr);
	Er(
		e,
		L(
			{
				get popper() {
					return t.popper;
				},
				get onEscapeKeydown() {
					return t.onEscapeKeydown;
				},
				get escapeKeydownBehavior() {
					return t.escapeKeydownBehavior;
				},
				get preventOverflowTextSelection() {
					return t.preventOverflowTextSelection;
				},
				get id() {
					return t.id;
				},
				get onPointerDown() {
					return t.onPointerDown;
				},
				get onPointerUp() {
					return t.onPointerUp;
				},
				get side() {
					return t.side;
				},
				get sideOffset() {
					return t.sideOffset;
				},
				get align() {
					return t.align;
				},
				get alignOffset() {
					return t.alignOffset;
				},
				get arrowPadding() {
					return t.arrowPadding;
				},
				get avoidCollisions() {
					return t.avoidCollisions;
				},
				get collisionBoundary() {
					return t.collisionBoundary;
				},
				get collisionPadding() {
					return t.collisionPadding;
				},
				get sticky() {
					return t.sticky;
				},
				get hideWhenDetached() {
					return t.hideWhenDetached;
				},
				get updatePositionStrategy() {
					return t.updatePositionStrategy;
				},
				get strategy() {
					return t.strategy;
				},
				get dir() {
					return t.dir;
				},
				get preventScroll() {
					return t.preventScroll;
				},
				get wrapperId() {
					return t.wrapperId;
				},
				get style() {
					return t.style;
				},
				get onPlaced() {
					return t.onPlaced;
				},
				get customAnchor() {
					return a();
				},
				get isStatic() {
					return o();
				},
				get enabled() {
					return t.enabled;
				},
				get onInteractOutside() {
					return t.onInteractOutside;
				},
				get onCloseAutoFocus() {
					return t.onCloseAutoFocus;
				},
				get onOpenAutoFocus() {
					return t.onOpenAutoFocus;
				},
				get interactOutsideBehavior() {
					return n();
				},
				get loop() {
					return t.loop;
				},
				get trapFocus() {
					return r();
				},
				get isValidEvent() {
					return i();
				},
				get onFocusOutside() {
					return t.onFocusOutside;
				}
			},
			() => s,
			{ forceMount: !0 }
		)
	);
}
function jr(e, t) {
	let [n, r] = e,
		i = !1,
		a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] ?? [0, 0],
			[c, l] = t[o] ?? [0, 0];
		s >= r != l >= r && n <= ((c - a) * (r - s)) / (l - s) + a && (i = !i);
	}
	return i;
}
function Mr(e, t) {
	return e[0] >= t.left && e[0] <= t.right && e[1] >= t.top && e[1] <= t.bottom;
}
function Nr(e, t) {
	let n = e.left + e.width / 2,
		r = e.top + e.height / 2,
		i = t.left + t.width / 2,
		a = t.top + t.height / 2,
		o = i - n,
		s = a - r;
	return Math.abs(o) > Math.abs(s)
		? o > 0
			? `right`
			: `left`
		: s > 0
			? `bottom`
			: `top`;
}
var Pr = class {
		#e;
		#t;
		#n;
		#r = null;
		#i = null;
		#a = [];
		#o = null;
		#s = null;
		#c = null;
		#l() {
			this.#s !== null && (cancelAnimationFrame(this.#s), (this.#s = null));
		}
		#u() {
			(this.#l(),
				(this.#s = requestAnimationFrame(() => {
					((this.#s = null), this.#r && this.#i && (this.#m(), this.#e.onPointerExit()));
				})));
		}
		#d() {
			this.#c !== null && (clearTimeout(this.#c), (this.#c = null));
		}
		#f() {
			this.#n !== null &&
				(this.#d(),
				(this.#c = window.setTimeout(() => {
					((this.#c = null), this.#r && this.#i && (this.#m(), this.#e.onPointerExit()));
				}, this.#n)));
		}
		constructor(e) {
			((this.#e = e), (this.#t = e.buffer ?? 1));
			let t = e.transitIntentTimeout;
			((this.#n = typeof t == `number` && t > 0 ? t : null),
				Ke([e.triggerNode, e.contentNode, e.enabled], ([e, t, n]) => {
					if (!e || !t || !n) {
						((this.#o = null), this.#m());
						return;
					}
					(this.#o && this.#o !== e && this.#m(), (this.#o = e));
					let r = Ie(e);
					return [
						v(r, `pointermove`, (n) => {
							this.#p([n.clientX, n.clientY], e, t);
						}),
						v(e, `pointerleave`, (e) => {
							let n = e.relatedTarget;
							if (Q(n) && t.contains(n)) return;
							let r = this.#e.ignoredTargets?.() ?? [];
							(Q(n) && r.some((e) => e === n || e.contains(n))) ||
								((this.#a = Q(n) && r.length > 0 ? r.filter((e) => n.contains(e)) : []),
								(this.#r = [e.clientX, e.clientY]),
								(this.#i = `content`),
								this.#u());
						}),
						v(e, `pointerenter`, () => {
							this.#m();
						}),
						v(t, `pointerenter`, () => {
							this.#m();
						}),
						v(t, `pointerleave`, (t) => {
							let n = t.relatedTarget;
							(Q(n) && e.contains(n)) ||
								((this.#r = [t.clientX, t.clientY]), (this.#i = `trigger`), this.#u());
						})
					].reduce(
						(e, t) => () => {
							(e(), t());
						},
						() => {}
					);
				}));
		}
		#p(e, t, n) {
			if (!this.#r || !this.#i) return;
			(this.#l(), this.#f());
			let r = t.getBoundingClientRect(),
				i = n.getBoundingClientRect();
			if (this.#i === `content` && Mr(e, i)) {
				this.#m();
				return;
			}
			if (this.#i === `trigger` && Mr(e, r)) {
				this.#m();
				return;
			}
			if (this.#i === `content` && this.#a.length > 0)
				for (let t of this.#a) {
					let n = t.getBoundingClientRect();
					if (Mr(e, n)) return;
					let i = Nr(r, n),
						a = this.#h(r, n, i);
					if (a && jr(e, a)) return;
				}
			let a = Nr(r, i),
				o = this.#h(r, i, a);
			if (o && jr(e, o)) return;
			let s = this.#i === `content` ? i : r;
			jr(e, this.#g(this.#r, s, a, this.#i)) || (this.#m(), this.#e.onPointerExit());
		}
		#m() {
			((this.#r = null), (this.#i = null), (this.#a = []), this.#l(), this.#d());
		}
		#h(e, t, n) {
			let r = this.#t;
			switch (n) {
				case `top`:
					return [
						[Math.min(e.left, t.left) - r, e.top],
						[Math.min(e.left, t.left) - r, t.bottom],
						[Math.max(e.right, t.right) + r, t.bottom],
						[Math.max(e.right, t.right) + r, e.top]
					];
				case `bottom`:
					return [
						[Math.min(e.left, t.left) - r, e.bottom],
						[Math.min(e.left, t.left) - r, t.top],
						[Math.max(e.right, t.right) + r, t.top],
						[Math.max(e.right, t.right) + r, e.bottom]
					];
				case `left`:
					return [
						[e.left, Math.min(e.top, t.top) - r],
						[t.right, Math.min(e.top, t.top) - r],
						[t.right, Math.max(e.bottom, t.bottom) + r],
						[e.left, Math.max(e.bottom, t.bottom) + r]
					];
				case `right`:
					return [
						[e.right, Math.min(e.top, t.top) - r],
						[t.left, Math.min(e.top, t.top) - r],
						[t.left, Math.max(e.bottom, t.bottom) + r],
						[e.right, Math.max(e.bottom, t.bottom) + r]
					];
			}
		}
		#g(e, t, n, r) {
			let i = this.#t * 4,
				[a, o] = e;
			switch (r === `trigger` ? this.#_(n) : n) {
				case `top`:
					return [
						[a - i, o + i],
						[a + i, o + i],
						[t.right + i, t.bottom],
						[t.right + i, t.top],
						[t.left - i, t.top],
						[t.left - i, t.bottom]
					];
				case `bottom`:
					return [
						[a - i, o - i],
						[a + i, o - i],
						[t.right + i, t.top],
						[t.right + i, t.bottom],
						[t.left - i, t.bottom],
						[t.left - i, t.top]
					];
				case `left`:
					return [
						[a + i, o - i],
						[a + i, o + i],
						[t.right, t.bottom + i],
						[t.left, t.bottom + i],
						[t.left, t.top - i],
						[t.right, t.top - i]
					];
				case `right`:
					return [
						[a - i, o - i],
						[a - i, o + i],
						[t.left, t.bottom + i],
						[t.right, t.bottom + i],
						[t.right, t.top - i],
						[t.left, t.top - i]
					];
			}
		}
		#_(e) {
			switch (e) {
				case `top`:
					return `bottom`;
				case `bottom`:
					return `top`;
				case `left`:
					return `right`;
				case `right`:
					return `left`;
			}
		}
	},
	Fr = class {
		#e;
		#t;
		#n = null;
		constructor(e, t) {
			((this.#t = e),
				(this.#e = t),
				(this.stop = this.stop.bind(this)),
				(this.start = this.start.bind(this)),
				ke(this.stop));
		}
		#r() {
			this.#n !== null && (window.clearTimeout(this.#n), (this.#n = null));
		}
		stop() {
			this.#r();
		}
		start(...e) {
			(this.#r(),
				(this.#n = window.setTimeout(() => {
					((this.#n = null), this.#t(...e));
				}, this.#e)));
		}
	},
	Ir = Ge({ component: `tooltip`, parts: [`content`, `trigger`] }),
	Lr = new Ze(`Tooltip.Provider`),
	Rr = new Ze(`Tooltip.Root`),
	zr = class {
		#e = A(E(new Map()));
		get triggers() {
			return l(this.#e);
		}
		set triggers(e) {
			z(this.#e, e, !0);
		}
		#t = A(null);
		get activeTriggerId() {
			return l(this.#t);
		}
		set activeTriggerId(e) {
			z(this.#t, e, !0);
		}
		#n = F(() => {
			let e = this.activeTriggerId;
			return e === null ? null : (this.triggers.get(e)?.node ?? null);
		});
		get activeTriggerNode() {
			return l(this.#n);
		}
		set activeTriggerNode(e) {
			z(this.#n, e);
		}
		#r = F(() => {
			let e = this.activeTriggerId;
			return e === null ? null : (this.triggers.get(e)?.payload ?? null);
		});
		get activePayload() {
			return l(this.#r);
		}
		set activePayload(e) {
			z(this.#r, e);
		}
		register = (e) => {
			let t = new Map(this.triggers);
			(t.set(e.id, e), (this.triggers = t), this.#i());
		};
		update = (e) => {
			let t = new Map(this.triggers);
			(t.set(e.id, e), (this.triggers = t), this.#i());
		};
		unregister = (e) => {
			if (!this.triggers.has(e)) return;
			let t = new Map(this.triggers);
			(t.delete(e),
				(this.triggers = t),
				this.activeTriggerId === e && (this.activeTriggerId = null));
		};
		setActiveTrigger = (e) => {
			if (e === null) {
				this.activeTriggerId = null;
				return;
			}
			if (!this.triggers.has(e)) {
				this.activeTriggerId = null;
				return;
			}
			this.activeTriggerId = e;
		};
		get = (e) => this.triggers.get(e);
		has = (e) => this.triggers.has(e);
		getFirstTriggerId = () => {
			let e = this.triggers.entries().next();
			return e.done ? null : e.value[0];
		};
		#i = () => {
			let e = this.activeTriggerId;
			e !== null && (this.triggers.has(e) || (this.activeTriggerId = null));
		};
	},
	Br = class {
		registry = new zr();
		#e = A(null);
		get root() {
			return l(this.#e);
		}
		set root(e) {
			z(this.#e, e, !0);
		}
	},
	Vr = class {
		#e = new Br();
		get state() {
			return this.#e;
		}
		open(e) {
			this.#e.registry.has(e) &&
				(this.#e.registry.setActiveTrigger(e),
				this.#e.root?.setActiveTrigger(e),
				this.#e.root?.handleOpen());
		}
		close() {
			this.#e.root?.handleClose();
		}
		get isOpen() {
			return this.#e.root?.opts.open.current ?? !1;
		}
	};
function Hr() {
	return new Vr();
}
var Ur = class e {
		static create(t) {
			return Lr.set(new e(t));
		}
		opts;
		#e = A(!0);
		get isOpenDelayed() {
			return l(this.#e);
		}
		set isOpenDelayed(e) {
			z(this.#e, e, !0);
		}
		isPointerInTransit = G(!1);
		#t;
		#n = A(null);
		constructor(e) {
			((this.opts = e),
				(this.#t = new Fr(() => {
					this.isOpenDelayed = !0;
				}, this.opts.skipDelayDuration.current)),
				Qe(() =>
					v(window, `scroll`, (e) => {
						let t = l(this.#n);
						if (!t) return;
						let n = t.triggerNode;
						if (!n) return;
						let r = e.target;
						(r instanceof Element || r instanceof Document) &&
							r.contains(n) &&
							t.handleClose();
					})
				));
		}
		#r = () => {
			if (this.opts.skipDelayDuration.current === 0) {
				this.isOpenDelayed = !0;
				return;
			}
			this.#t.start();
		};
		#i = () => {
			this.#t.stop();
		};
		onOpen = (e) => {
			(l(this.#n) && l(this.#n) !== e && l(this.#n).handleClose(),
				this.#i(),
				(this.isOpenDelayed = !1),
				z(this.#n, e, !0));
		};
		onClose = (e) => {
			l(this.#n) === e && (z(this.#n, null), this.#r());
		};
		isTooltipOpen = (e) => l(this.#n) === e;
	},
	Wr = class e {
		static create(t) {
			return Rr.set(new e(t, Lr.get()));
		}
		opts;
		provider;
		#e = F(
			() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current
		);
		get delayDuration() {
			return l(this.#e);
		}
		set delayDuration(e) {
			z(this.#e, e);
		}
		#t = F(
			() =>
				this.opts.disableHoverableContent.current ??
				this.provider.opts.disableHoverableContent.current
		);
		get disableHoverableContent() {
			return l(this.#t);
		}
		set disableHoverableContent(e) {
			z(this.#t, e);
		}
		#n = F(
			() =>
				this.opts.disableCloseOnTriggerClick.current ??
				this.provider.opts.disableCloseOnTriggerClick.current
		);
		get disableCloseOnTriggerClick() {
			return l(this.#n);
		}
		set disableCloseOnTriggerClick(e) {
			z(this.#n, e);
		}
		#r = F(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
		get disabled() {
			return l(this.#r);
		}
		set disabled(e) {
			z(this.#r, e);
		}
		#i = F(
			() =>
				this.opts.ignoreNonKeyboardFocus.current ??
				this.provider.opts.ignoreNonKeyboardFocus.current
		);
		get ignoreNonKeyboardFocus() {
			return l(this.#i);
		}
		set ignoreNonKeyboardFocus(e) {
			z(this.#i, e);
		}
		registry;
		tether;
		#a = A(null);
		get contentNode() {
			return l(this.#a);
		}
		set contentNode(e) {
			z(this.#a, e, !0);
		}
		contentPresence;
		#o = A(!1);
		#s;
		#c = F(() =>
			this.opts.open.current ? (l(this.#o) ? `delayed-open` : `instant-open`) : `closed`
		);
		get stateAttr() {
			return l(this.#c);
		}
		set stateAttr(e) {
			z(this.#c, e);
		}
		constructor(e, t) {
			((this.opts = e),
				(this.provider = t),
				(this.tether = e.tether.current?.state ?? null),
				(this.registry = this.tether?.registry ?? new zr()),
				(this.#s = new Fr(() => {
					(z(this.#o, !0), (this.opts.open.current = !0));
				}, this.delayDuration ?? 0)),
				this.tether &&
					((this.tether.root = this),
					Qe(() => () => {
						this.tether?.root === this && (this.tether.root = null);
					})),
				(this.contentPresence = new ye({
					open: this.opts.open,
					ref: q(() => this.contentNode),
					onComplete: () => {
						this.opts.onOpenChangeComplete.current(this.opts.open.current);
					}
				})),
				Ke(
					() => this.delayDuration,
					() => {
						this.delayDuration !== void 0 &&
							(this.#s = new Fr(() => {
								(z(this.#o, !0), (this.opts.open.current = !0));
							}, this.delayDuration));
					}
				),
				Ke(
					() => this.opts.open.current,
					(e) => {
						e
							? (this.ensureActiveTrigger(), this.provider.onOpen(this))
							: this.provider.onClose(this);
					},
					{ lazy: !0 }
				),
				Ke(
					() => this.opts.triggerId.current,
					(e) => {
						e !== this.registry.activeTriggerId && this.registry.setActiveTrigger(e);
					}
				),
				Ke(
					() => this.registry.activeTriggerId,
					(e) => {
						this.opts.triggerId.current !== e && (this.opts.triggerId.current = e);
					}
				));
		}
		handleOpen = () => {
			(this.#s.stop(),
				z(this.#o, !1),
				this.ensureActiveTrigger(),
				(this.opts.open.current = !0));
		};
		handleClose = () => {
			(this.#s.stop(), (this.opts.open.current = !1));
		};
		cancelPendingOpen = () => {
			this.#s.stop();
		};
		#l = () => {
			this.#s.stop();
			let e = !this.provider.isOpenDelayed,
				t = this.delayDuration ?? 0;
			e || t === 0 ? (z(this.#o, !1), (this.opts.open.current = !0)) : this.#s.start();
		};
		onTriggerEnter = (e) => {
			(this.setActiveTrigger(e), this.#l());
		};
		onTriggerLeave = () => {
			this.disableHoverableContent ? this.handleClose() : this.#s.stop();
		};
		ensureActiveTrigger = () => {
			if (
				this.registry.activeTriggerId !== null &&
				this.registry.has(this.registry.activeTriggerId)
			)
				return;
			if (
				this.opts.triggerId.current !== null &&
				this.registry.has(this.opts.triggerId.current)
			) {
				this.registry.setActiveTrigger(this.opts.triggerId.current);
				return;
			}
			let e = this.registry.getFirstTriggerId();
			this.registry.setActiveTrigger(e);
		};
		setActiveTrigger = (e) => {
			this.registry.setActiveTrigger(e);
		};
		registerTrigger = (e) => {
			(this.registry.register(e),
				e.disabled &&
					this.registry.activeTriggerId === e.id &&
					this.opts.open.current &&
					this.handleClose());
		};
		updateTrigger = (e) => {
			(this.registry.update(e),
				e.disabled &&
					this.registry.activeTriggerId === e.id &&
					this.opts.open.current &&
					this.handleClose());
		};
		unregisterTrigger = (e) => {
			let t = this.registry.activeTriggerId === e;
			(this.registry.unregister(e), t && this.opts.open.current && this.handleClose());
		};
		isActiveTrigger = (e) => this.registry.activeTriggerId === e;
		get triggerNode() {
			return this.registry.activeTriggerNode;
		}
		get activePayload() {
			return this.registry.activePayload;
		}
		get activeTriggerId() {
			return this.registry.activeTriggerId;
		}
	},
	Gr = class e {
		static create(t) {
			return t.tether.current
				? new e(t, null, t.tether.current.state)
				: new e(t, Rr.get(), null);
		}
		opts;
		root;
		tether;
		attachment;
		#e = G(!1);
		#t = A(!1);
		domContext;
		#n = null;
		#r = !1;
		#i = null;
		constructor(e, t, n) {
			((this.opts = e),
				(this.root = t),
				(this.tether = n),
				(this.domContext = new ze(e.ref)),
				(this.attachment = De(this.opts.ref, (e) => this.#s(e))),
				Ke(
					() => this.opts.id.current,
					() => {
						this.#s(this.opts.ref.current);
					}
				),
				Ke(
					() => this.opts.payload.current,
					() => {
						this.#s(this.opts.ref.current);
					}
				),
				Ke(
					() => this.opts.disabled.current,
					() => {
						this.#s(this.opts.ref.current);
					}
				),
				Qe(
					() => (
						(this.#r = !0),
						this.#s(this.opts.ref.current),
						() => {
							let e = this.#a(),
								t = this.#i;
							(t &&
								(this.tether
									? this.tether.registry.unregister(t)
									: e?.unregisterTrigger(t)),
								(this.#i = null),
								(this.#r = !1));
						}
					)
				));
		}
		#a = () => this.tether?.root ?? this.root;
		#o = () => {
			let e = this.#a();
			return this.opts.disabled.current || !!e?.disabled;
		};
		#s = (e) => {
			if (!this.#r) return;
			let t = this.opts.id.current,
				n = this.opts.payload.current,
				r = this.opts.disabled.current;
			if (this.#i && this.#i !== t) {
				let e = this.#a();
				this.tether
					? this.tether.registry.unregister(this.#i)
					: e?.unregisterTrigger(this.#i);
			}
			let i = { id: t, node: e, payload: n, disabled: r },
				a = this.#a();
			(this.tether
				? (this.tether.registry.has(t)
						? this.tether.registry.update(i)
						: this.tether.registry.register(i),
					r &&
						this.tether.registry.activeTriggerId === t &&
						a?.opts.open.current &&
						a.handleClose())
				: a?.registry.has(t)
					? a.updateTrigger(i)
					: a?.registerTrigger(i),
				(this.#i = t));
		};
		#c = () => {
			this.#n !== null && (clearTimeout(this.#n), (this.#n = null));
		};
		handlePointerUp = () => {
			this.#e.current = !1;
		};
		#l = () => {
			this.#o() || (this.#e.current = !1);
		};
		#u = () => {
			if (this.#o()) return;
			let e = this.#a();
			(e &&
				!e.disableCloseOnTriggerClick &&
				(e.opts.open.current ? e.handleClose() : e.cancelPendingOpen()),
				(this.#e.current = !0),
				this.domContext.getDocument().addEventListener(
					`pointerup`,
					() => {
						this.handlePointerUp();
					},
					{ once: !0 }
				));
		};
		#d = (e) => {
			let t = this.#a();
			if (t) {
				if (this.#o()) {
					t.opts.open.current && t.handleClose();
					return;
				}
				if (e.pointerType !== `touch`) {
					if (t.provider.isPointerInTransit.current) {
						(this.#c(),
							(this.#n = window.setTimeout(() => {
								t.provider.isPointerInTransit.current &&
									((t.provider.isPointerInTransit.current = !1),
									t.onTriggerEnter(this.opts.id.current),
									z(this.#t, !0));
							}, 250)));
						return;
					}
					(t.onTriggerEnter(this.opts.id.current), z(this.#t, !0));
				}
			}
		};
		#f = (e) => {
			let t = this.#a();
			if (t) {
				if (this.#o()) {
					t.opts.open.current && t.handleClose();
					return;
				}
				e.pointerType !== `touch` &&
					(l(this.#t) ||
						(this.#c(),
						(t.provider.isPointerInTransit.current = !1),
						t.onTriggerEnter(this.opts.id.current),
						z(this.#t, !0)));
			}
		};
		#p = (e) => {
			let t = this.#a();
			if (!t || this.#o()) return;
			if ((this.#c(), !t.isActiveTrigger(this.opts.id.current))) {
				z(this.#t, !1);
				return;
			}
			let n = e.relatedTarget;
			if (Q(n)) {
				for (let e of t.registry.triggers.values())
					if (e.node === n) {
						if (t.provider.opts.skipDelayDuration.current > 0) {
							z(this.#t, !1);
							return;
						}
						(t.handleClose(), z(this.#t, !1));
						return;
					}
			}
			(t.onTriggerLeave(), z(this.#t, !1));
		};
		#m = (e) => {
			let t = this.#a();
			if (t && !this.#e.current) {
				if (this.#o()) {
					t.opts.open.current && t.handleClose();
					return;
				}
				(!t.ignoreNonKeyboardFocus || He(e.currentTarget)) &&
					(t.setActiveTrigger(this.opts.id.current), t.handleOpen());
			}
		};
		#h = () => {
			let e = this.#a();
			e && !this.#o() && e.handleClose();
		};
		#g = () => {
			let e = this.#a();
			!e || e.disableCloseOnTriggerClick || this.#o() || e.handleClose();
		};
		#_ = F(() => {
			let e = this.#a(),
				t = !!(e?.opts.open.current && e.isActiveTrigger(this.opts.id.current)),
				n = this.#o();
			return {
				id: this.opts.id.current,
				'aria-describedby': t ? e?.contentNode?.id : void 0,
				'data-state': t ? e?.stateAttr : `closed`,
				'data-disabled': Fe(n),
				'data-delay-duration': `${e?.delayDuration ?? 0}`,
				[Ir.trigger]: ``,
				tabindex: n ? void 0 : this.opts.tabindex.current,
				disabled: this.opts.disabled.current,
				onpointerup: this.#l,
				onpointerdown: this.#u,
				onpointerenter: this.#d,
				onpointermove: this.#f,
				onpointerleave: this.#p,
				onfocus: this.#m,
				onblur: this.#h,
				onclick: this.#g,
				...this.attachment
			};
		});
		get props() {
			return l(this.#_);
		}
		set props(e) {
			z(this.#_, e);
		}
	},
	Kr = class e {
		static create(t) {
			return new e(t, Rr.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = De(this.opts.ref, (e) => (this.root.contentNode = e))),
				new Pr({
					triggerNode: () => this.root.triggerNode,
					contentNode: () => this.root.contentNode,
					enabled: () =>
						this.root.opts.open.current && !this.root.disableHoverableContent,
					transitIntentTimeout: 180,
					ignoredTargets: () => {
						if (this.root.provider.opts.skipDelayDuration.current === 0) return [];
						let e = [],
							t = this.root.triggerNode;
						for (let n of this.root.registry.triggers.values())
							n.node && n.node !== t && e.push(n.node);
						return e;
					},
					onPointerExit: () => {
						this.root.provider.isTooltipOpen(this.root) && this.root.handleClose();
					}
				}));
		}
		onInteractOutside = (e) => {
			if (
				Q(e.target) &&
				this.root.triggerNode?.contains(e.target) &&
				this.root.disableCloseOnTriggerClick
			) {
				e.preventDefault();
				return;
			}
			(this.opts.onInteractOutside.current(e),
				!e.defaultPrevented && this.root.handleClose());
		};
		onEscapeKeydown = (e) => {
			(this.opts.onEscapeKeydown.current?.(e),
				!e.defaultPrevented && this.root.handleClose());
		};
		onOpenAutoFocus = (e) => {
			e.preventDefault();
		};
		onCloseAutoFocus = (e) => {
			e.preventDefault();
		};
		get shouldRender() {
			return this.root.contentPresence.shouldRender;
		}
		#e = F(() => ({ open: this.root.opts.open.current }));
		get snippetProps() {
			return l(this.#e);
		}
		set snippetProps(e) {
			z(this.#e, e);
		}
		#t = F(() => ({
			id: this.opts.id.current,
			'data-state': this.root.stateAttr,
			'data-disabled': Fe(this.root.disabled),
			...we(this.root.contentPresence.transitionStatus),
			style: { outline: `none` },
			[Ir.content]: ``,
			...this.attachment
		}));
		get props() {
			return l(this.#t);
		}
		set props(e) {
			z(this.#t, e);
		}
		popperProps = {
			onInteractOutside: this.onInteractOutside,
			onEscapeKeydown: this.onEscapeKeydown,
			onOpenAutoFocus: this.onOpenAutoFocus,
			onCloseAutoFocus: this.onCloseAutoFocus
		};
	};
function qr(e, n) {
	V(n, !0);
	let r = S(n, `open`, 15, !1),
		i = S(n, `triggerId`, 15, null),
		a = S(n, `onOpenChange`, 3, Ne),
		s = S(n, `onOpenChangeComplete`, 3, Ne),
		c = Wr.create({
			open: q(
				() => r(),
				(e) => {
					(r(e), a()(e));
				}
			),
			triggerId: q(
				() => i(),
				(e) => {
					i(e);
				}
			),
			delayDuration: q(() => n.delayDuration),
			disableCloseOnTriggerClick: q(() => n.disableCloseOnTriggerClick),
			disableHoverableContent: q(() => n.disableHoverableContent),
			ignoreNonKeyboardFocus: q(() => n.ignoreNonKeyboardFocus),
			disabled: q(() => n.disabled),
			onOpenChangeComplete: q(() => s()),
			tether: q(() => n.tether)
		});
	(pr(e, {
		tooltip: !0,
		children: (e, r) => {
			var i = o(),
				a = C(i);
			(B(
				a,
				() => n.children ?? t,
				() => ({
					open: c.opts.open.current,
					triggerId: c.activeTriggerId,
					payload: c.activePayload
				})
			),
				m(e, i));
		},
		$$slots: { default: !0 }
	}),
		w());
}
var Jr = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`children`,
		`child`,
		`id`,
		`ref`,
		`side`,
		`sideOffset`,
		`align`,
		`avoidCollisions`,
		`arrowPadding`,
		`sticky`,
		`strategy`,
		`hideWhenDetached`,
		`customAnchor`,
		`collisionPadding`,
		`onInteractOutside`,
		`onEscapeKeydown`,
		`forceMount`,
		`style`
	]),
	Yr = c(`<div><div><!></div></div>`);
function Xr(e, n) {
	let r = h();
	V(n, !0);
	let i = S(n, `id`, 19, () => Ve(r)),
		a = S(n, `ref`, 15, null),
		s = S(n, `side`, 3, `top`),
		c = S(n, `sideOffset`, 3, 0),
		u = S(n, `align`, 3, `center`),
		d = S(n, `avoidCollisions`, 3, !0),
		f = S(n, `arrowPadding`, 3, 0),
		g = S(n, `sticky`, 3, `partial`),
		_ = S(n, `hideWhenDetached`, 3, !1),
		v = S(n, `collisionPadding`, 3, 0),
		y = S(n, `onInteractOutside`, 3, Ne),
		b = S(n, `onEscapeKeydown`, 3, Ne),
		x = S(n, `forceMount`, 3, !1),
		T = I(n, Jr),
		E = Kr.create({
			id: q(() => i()),
			ref: q(
				() => a(),
				(e) => a(e)
			),
			onInteractOutside: q(() => y()),
			onEscapeKeydown: q(() => b())
		}),
		D = F(() => ({
			side: s(),
			sideOffset: c(),
			align: u(),
			avoidCollisions: d(),
			arrowPadding: f(),
			sticky: g(),
			hideWhenDetached: _(),
			collisionPadding: v(),
			strategy: n.strategy,
			customAnchor: n.customAnchor ?? E.root.triggerNode
		})),
		O = F(() => K(T, l(D), E.props));
	var A = o(),
		j = C(A),
		ee = (e) => {
			{
				let r = (e, r) => {
						let i = () => (r?.()).props,
							a = () => (r?.()).wrapperProps,
							s = F(() =>
								K(a(), {
									style: {
										pointerEvents: E.root.disableHoverableContent ? `none` : void 0
									}
								})
							),
							c = F(() => K(i(), { style: $n(`tooltip`) }, { style: n.style }));
						var u = o(),
							d = C(u),
							f = (e) => {
								var t = o(),
									r = C(t);
								{
									let e = F(() => ({
										props: l(c),
										wrapperProps: l(s),
										...E.snippetProps
									}));
									B(
										r,
										() => n.child,
										() => l(e)
									);
								}
								m(e, t);
							},
							h = (e) => {
								var r = Yr();
								k(r, () => ({ ...l(s) }));
								var i = M(r);
								k(i, () => ({ ...l(c) }));
								var a = M(i);
								(B(a, () => n.children ?? t), p(i), p(r), m(e, r));
							};
						(N(d, (e) => {
							n.child ? e(f) : e(h, -1);
						}),
							m(e, u));
					},
					a = F(() => (E.root.disableHoverableContent ? `none` : `auto`));
				Ar(
					e,
					L(
						() => l(O),
						() => E.popperProps,
						{
							get enabled() {
								return E.root.opts.open.current;
							},
							get id() {
								return i();
							},
							trapFocus: !1,
							loop: !1,
							preventScroll: !1,
							forceMount: !0,
							get ref() {
								return E.opts.ref;
							},
							tooltip: !0,
							get shouldRender() {
								return E.shouldRender;
							},
							get contentPointerEvents() {
								return l(a);
							},
							popper: r,
							$$slots: { popper: !0 }
						}
					)
				);
			}
		},
		te = (e) => {
			{
				let r = (e, r) => {
						let i = () => (r?.()).props,
							a = () => (r?.()).wrapperProps,
							s = F(() =>
								K(a(), {
									style: {
										pointerEvents: E.root.disableHoverableContent ? `none` : void 0
									}
								})
							),
							c = F(() => K(i(), { style: $n(`tooltip`) }, { style: n.style }));
						var u = o(),
							d = C(u),
							f = (e) => {
								var t = o(),
									r = C(t);
								{
									let e = F(() => ({
										props: l(c),
										wrapperProps: l(s),
										...E.snippetProps
									}));
									B(
										r,
										() => n.child,
										() => l(e)
									);
								}
								m(e, t);
							},
							h = (e) => {
								var r = Yr();
								k(r, () => ({ ...l(s) }));
								var i = M(r);
								k(i, () => ({ ...l(c) }));
								var a = M(i);
								(B(a, () => n.children ?? t), p(i), p(r), m(e, r));
							};
						(N(d, (e) => {
							n.child ? e(f) : e(h, -1);
						}),
							m(e, u));
					},
					a = F(() => (E.root.disableHoverableContent ? `none` : `auto`));
				Or(
					e,
					L(
						() => l(O),
						() => E.popperProps,
						{
							get open() {
								return E.root.opts.open.current;
							},
							get id() {
								return i();
							},
							trapFocus: !1,
							loop: !1,
							preventScroll: !1,
							forceMount: !1,
							get ref() {
								return E.opts.ref;
							},
							tooltip: !0,
							get shouldRender() {
								return E.shouldRender;
							},
							get contentPointerEvents() {
								return l(a);
							},
							popper: r,
							$$slots: { popper: !0 }
						}
					)
				);
			}
		};
	(N(j, (e) => {
		x() ? e(ee) : x() || e(te, 1);
	}),
		m(e, A),
		w());
}
var Zr = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`children`,
		`child`,
		`id`,
		`ref`,
		`onInteractOutside`,
		`onEscapeKeydown`,
		`forceMount`,
		`style`
	]),
	Qr = c(`<div><!></div>`);
function $r(e, n) {
	let r = h();
	V(n, !0);
	let i = S(n, `id`, 19, () => Ve(r)),
		a = S(n, `ref`, 15, null),
		s = S(n, `onInteractOutside`, 3, Ne),
		c = S(n, `onEscapeKeydown`, 3, Ne),
		u = S(n, `forceMount`, 3, !1),
		d = I(n, Zr),
		f = Kr.create({
			id: q(() => i()),
			ref: q(
				() => a(),
				(e) => a(e)
			),
			onInteractOutside: q(() => s()),
			onEscapeKeydown: q(() => c())
		}),
		g = F(() => K(d, f.props));
	var _ = o(),
		v = C(_),
		y = (e) => {
			Ar(
				e,
				L(
					() => l(g),
					() => f.popperProps,
					{
						isStatic: !0,
						get enabled() {
							return f.root.opts.open.current;
						},
						get id() {
							return i();
						},
						trapFocus: !1,
						loop: !1,
						preventScroll: !1,
						forceMount: !0,
						get ref() {
							return f.opts.ref;
						},
						tooltip: !0,
						get shouldRender() {
							return f.shouldRender;
						},
						popper: (e, r) => {
							let i = () => (r?.()).props,
								a = F(() => K(i(), { style: $n(`tooltip`) }, { style: n.style }));
							var s = o(),
								c = C(s),
								u = (e) => {
									var t = o(),
										r = C(t);
									{
										let e = F(() => ({ props: l(a), ...f.snippetProps }));
										B(
											r,
											() => n.child,
											() => l(e)
										);
									}
									m(e, t);
								},
								d = (e) => {
									var r = Qr();
									k(r, () => ({ ...l(a) }));
									var i = M(r);
									(B(i, () => n.children ?? t), p(r), m(e, r));
								};
							(N(c, (e) => {
								n.child ? e(u) : e(d, -1);
							}),
								m(e, s));
						},
						$$slots: { popper: !0 }
					}
				)
			);
		},
		b = (e) => {
			Or(
				e,
				L(
					() => l(g),
					() => f.popperProps,
					{
						tooltip: !0,
						isStatic: !0,
						get open() {
							return f.root.opts.open.current;
						},
						get id() {
							return i();
						},
						trapFocus: !1,
						loop: !1,
						preventScroll: !1,
						forceMount: !1,
						get ref() {
							return f.opts.ref;
						},
						get shouldRender() {
							return f.shouldRender;
						},
						popper: (e, r) => {
							let i = () => (r?.()).props,
								a = F(() => K(i(), { style: $n(`tooltip`) }, { style: n.style }));
							var s = o(),
								c = C(s),
								u = (e) => {
									var t = o(),
										r = C(t);
									{
										let e = F(() => ({ props: l(a), ...f.snippetProps }));
										B(
											r,
											() => n.child,
											() => l(e)
										);
									}
									m(e, t);
								},
								d = (e) => {
									var r = Qr();
									k(r, () => ({ ...l(a) }));
									var i = M(r);
									(B(i, () => n.children ?? t), p(r), m(e, r));
								};
							(N(c, (e) => {
								n.child ? e(u) : e(d, -1);
							}),
								m(e, s));
						},
						$$slots: { popper: !0 }
					}
				)
			);
		};
	(N(v, (e) => {
		u() ? e(y) : u() || e(b, 1);
	}),
		m(e, _),
		w());
}
var ei = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`children`,
		`child`,
		`id`,
		`disabled`,
		`payload`,
		`tether`,
		`type`,
		`tabindex`,
		`ref`
	]),
	ti = c(`<button><!></button>`);
function ni(e, n) {
	let r = h();
	V(n, !0);
	let i = S(n, `id`, 19, () => Ve(r)),
		a = S(n, `disabled`, 3, !1),
		s = S(n, `type`, 3, `button`),
		c = S(n, `tabindex`, 3, 0),
		u = S(n, `ref`, 15, null),
		d = I(n, ei),
		f = Gr.create({
			id: q(() => i()),
			disabled: q(() => a() ?? !1),
			tabindex: q(() => c() ?? 0),
			payload: q(() => n.payload),
			tether: q(() => n.tether),
			ref: q(
				() => u(),
				(e) => u(e)
			)
		}),
		g = F(() => K(d, f.props, { type: s() }));
	var _ = o(),
		v = C(_),
		y = (e) => {
			var t = o(),
				r = C(t);
			(B(
				r,
				() => n.child,
				() => ({ props: l(g) })
			),
				m(e, t));
		},
		b = (e) => {
			var r = ti();
			k(r, () => ({ ...l(g) }));
			var i = M(r);
			(B(i, () => n.children ?? t), p(r), m(e, r));
		};
	(N(v, (e) => {
		n.child ? e(y) : e(b, -1);
	}),
		m(e, _),
		w());
}
var ri = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`]);
function ii(e, t) {
	V(t, !0);
	let n = S(t, `ref`, 15, null),
		r = I(t, ri);
	(yr(
		e,
		L(() => r, {
			get ref() {
				return n();
			},
			set ref(e) {
				n(e);
			}
		})
	),
		w());
}
function ai(e, n) {
	V(n, !0);
	let r = S(n, `delayDuration`, 3, 700),
		i = S(n, `disableCloseOnTriggerClick`, 3, !1),
		a = S(n, `disableHoverableContent`, 3, !1),
		s = S(n, `disabled`, 3, !1),
		c = S(n, `ignoreNonKeyboardFocus`, 3, !1),
		l = S(n, `skipDelayDuration`, 3, 300);
	Ur.create({
		delayDuration: q(() => r()),
		disableCloseOnTriggerClick: q(() => i()),
		disableHoverableContent: q(() => a()),
		disabled: q(() => s()),
		ignoreNonKeyboardFocus: q(() => c()),
		skipDelayDuration: q(() => l())
	});
	var u = o(),
		d = C(u);
	(B(d, () => n.children ?? t), m(e, u), w());
}
var oi = d({
		Arrow: () => ii,
		Content: () => Xr,
		ContentStatic: () => $r,
		Portal: () => Le,
		Provider: () => ai,
		Root: () => qr,
		Trigger: () => ni,
		createTether: () => Hr
	}),
	si = Array(12).fill(0),
	ci = c(`<div class="sonner-loading-bar"></div>`),
	li = c(`<div><div class="sonner-spinner"></div></div>`);
function ui(t, n) {
	V(n, !0);
	var r = li(),
		i = M(r);
	(a(
		i,
		23,
		() => si,
		(e, t) => `spinner-bar-${t}`,
		(e, t) => {
			var n = ci();
			m(e, n);
		}
	),
		p(i),
		p(r),
		e(
			(e) => {
				(j(r, 1, e), P(r, `data-visible`, n.visible));
			},
			[() => x([`sonner-loading-wrapper`, n.class].filter(Boolean).join(` `))]
		),
		m(t, r),
		w());
}
var di = typeof window < `u` ? window : void 0;
(typeof window < `u` && window.document,
	typeof window < `u` && window.navigator,
	typeof window < `u` && window.location);
function fi(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot; ) {
		let e = t.shadowRoot.activeElement;
		if (e === t) break;
		t = e;
	}
	return t;
}
new (class {
	#e;
	#t;
	constructor(e = {}) {
		let { window: t = di, document: n = t?.document } = e;
		t !== void 0 &&
			((this.#e = n),
			(this.#t = f((e) => {
				let n = v(t, `focusin`, e),
					r = v(t, `focusout`, e);
				return () => {
					(n(), r());
				};
			})));
	}
	get current() {
		return (this.#t?.(), this.#e ? fi(this.#e) : null);
	}
})();
var pi = class {
	#e;
	#t;
	constructor(e) {
		((this.#e = e), (this.#t = Symbol(e)));
	}
	get key() {
		return this.#t;
	}
	exists() {
		return ce(this.#t);
	}
	get() {
		let e = oe(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = oe(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return _(this.#t, e);
	}
};
new pi(`richColorsContext`);
var mi = new pi(`<Toaster/>`);
function hi(e) {
	return e.label !== void 0;
}
function gi() {
	let e = A(E(typeof document < `u` && document.hidden));
	return (
		O(() =>
			v(document, `visibilitychange`, () => {
				z(e, document.hidden, !0);
			})
		),
		{
			get current() {
				return l(e);
			}
		}
	);
}
var _i = 4e3,
	vi = 14,
	yi = 45,
	bi = 200,
	xi = 0.05,
	Si = {
		toast: ``,
		title: ``,
		description: ``,
		loader: ``,
		closeButton: ``,
		cancelButton: ``,
		actionButton: ``,
		action: ``,
		warning: ``,
		error: ``,
		success: ``,
		default: ``,
		info: ``,
		loading: ``
	};
function Ci(e) {
	let [t, n] = e.split(`-`),
		r = [];
	return (t && r.push(t), n && r.push(n), r);
}
function wi(e) {
	return 1 / (1.5 + Math.abs(e) / 20);
}
var Ti = new Set(
		`$$slots.$$events.$$legacy.toast.index.expanded.invert.position.visibleToasts.expandByDefault.closeButton.interacting.cancelButtonStyle.actionButtonStyle.duration.descriptionClass.classes.unstyled.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.defaultRichColors.gap.swipeDirections.closeButtonAriaLabel.pauseWhenPageIsHidden`.split(
			`.`
		)
	),
	Ei = c(`<div><!></div>`),
	Di = c(`<button data-close-button=""><!></button>`),
	Oi = c(`<div data-icon=""><!> <!></div>`),
	ki = c(`<div data-description=""><!></div>`),
	Ai = c(`<button data-button="" data-cancel=""> </button>`),
	ji = c(`<button data-button=""> </button>`),
	Mi = c(`<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>`, 1),
	Ni = c(`<li aria-atomic="true" data-sonner-toast=""><!> <!></li>`);
function Pi(n, i) {
	V(i, !0);
	let a = (t) => {
			var n = o(),
				r = C(n),
				a = (t) => {
					var n = Ei(),
						r = M(n);
					(B(r, () => i.loadingIcon),
						p(n),
						e(
							(e) => {
								(j(n, 1, e), P(n, `data-visible`, l(W) === `loading`));
							},
							[() => x(ge(l(Ce)?.loader, i.toast?.classes?.loader, `sonner-loader`))]
						),
						m(t, n));
				},
				s = (e) => {
					{
						let t = F(() => ge(l(Ce)?.loader, i.toast.classes?.loader)),
							n = F(() => l(W) === `loading`);
						ui(e, {
							get class() {
								return l(t);
							},
							get visible() {
								return l(n);
							}
						});
					}
				};
			(N(r, (e) => {
				i.loadingIcon ? e(a) : e(s, -1);
			}),
				m(t, n));
		},
		c = S(i, `cancelButtonStyle`, 3, ``),
		u = S(i, `actionButtonStyle`, 3, ``),
		d = S(i, `descriptionClass`, 3, ``),
		f = S(i, `unstyled`, 3, !1),
		h = S(i, `defaultRichColors`, 3, !1),
		g = S(i, `gap`, 3, vi);
	I(i, Ti);
	let _ = { ...Si },
		v = A(!1),
		T = A(!1),
		E = A(!1),
		D = A(!1),
		k = A(!1),
		re = A(0),
		oe = A(0),
		se = i.toast.duration || i.duration || _i,
		ce = A(null),
		H = A(void 0),
		U = A(null),
		ue = A(null),
		de = F(() => i.index === 0),
		fe = F(() => i.index + 1 <= i.visibleToasts),
		W = F(() => i.toast.type),
		G = F(() =>
			i.toast.dismissible === void 0
				? i.toast.dismissable !== !1
				: i.toast.dismissible !== !1
		),
		pe = F(() => i.toast.class || ``),
		me = F(() => i.toast.descriptionClass || ``),
		K = F(() =>
			J.heights.filter(
				(e) => e.toasterId === i.toast.toasterId && e.position === i.position
			)
		),
		q = F(() => {
			let e = l(K).findIndex((e) => e.toastId === i.toast.id);
			return e === -1 ? 0 : e;
		}),
		he = F(() => i.toast.closeButton ?? i.closeButton),
		_e = F(() => i.toast.duration ?? i.duration ?? _i),
		Y = null,
		ve = F(() => i.position.split(`-`)),
		X = F(() => i.swipeDirections ?? Ci(i.position)),
		ye = F(() => l(K).reduce((e, t, n) => (n >= l(q) ? e : e + t.height), 0)),
		be = gi(),
		xe = F(() => i.toast.invert || i.invert),
		Se = F(() => l(W) === `loading`),
		Ce = F(() => ({ ..._, ...i.classes })),
		Z = F(() => i.toast.title),
		we = F(() => i.toast.description),
		Te = A(0),
		Ee = A(0),
		De = F(() => Math.round(l(q) * g() + l(ye)));
	O(() => {
		(l(Z), l(we));
		let e;
		e = i.expanded || i.expandByDefault ? 1 : 1 - i.index * xi;
		let t = b(() => l(H));
		if (t === void 0) return;
		t.style.setProperty(`height`, `auto`);
		let n = t.offsetHeight,
			r = t.getBoundingClientRect().height,
			a = Math.round((r / e + 2 ** -52) * 100) / 100;
		t.style.removeProperty(`height`);
		let o;
		((o = Math.abs(a - n) < 1 ? a : n),
			z(oe, o, !0),
			J.setHeight({
				toastId: i.toast.id,
				height: o,
				toasterId: i.toast.toasterId,
				position: i.position
			}));
	});
	function Oe() {
		(z(T, !0),
			z(re, l(De), !0),
			J.removeHeight(i.toast.id),
			J.markDismissed(i.toast.id),
			J.scheduleRemoval(i.toast.id, bi));
	}
	let ke,
		Ae = F(() => (i.toast.promise && l(W) === `loading`) || i.toast.duration === 1 / 0);
	function je() {
		(clearTimeout(ke),
			z(Te, new Date().getTime(), !0),
			(ke = setTimeout(() => {
				(i.toast.onAutoClose?.(i.toast), Oe());
			}, se)));
	}
	function Me() {
		if (l(Ee) < l(Te)) {
			let e = new Date().getTime() - l(Te);
			se -= e;
		}
		z(Ee, new Date().getTime(), !0);
	}
	(O(() => {
		i.toast.updated && (clearTimeout(ke), (se = l(_e)), l(Ae) || je());
	}),
		O(
			() => (
				l(Ae) ||
					(i.expanded || i.interacting || (i.pauseWhenPageIsHidden && be.current)
						? Me()
						: je()),
				() => clearTimeout(ke)
			)
		),
		ae(() => {
			z(v, !0);
			let e = l(H)?.getBoundingClientRect().height;
			return (
				z(oe, e, !0),
				J.setHeight({
					toastId: i.toast.id,
					height: e,
					toasterId: i.toast.toasterId,
					position: i.position
				}),
				() => {
					J.removeHeight(i.toast.id);
				}
			);
		}),
		O(() => {
			i.toast.delete &&
				b(() => {
					l(T) || (Oe(), i.toast.onDismiss?.(i.toast));
				});
		}),
		O(() => {
			!i.toast.delete &&
				!i.toast.dismiss &&
				l(T) &&
				b(() => {
					(z(T, !1),
						z(D, !1),
						z(k, !1),
						z(E, !1),
						z(U, null),
						z(ue, null),
						(Y = null),
						z(ce, null),
						l(H)?.style.removeProperty(`--swipe-amount-x`),
						l(H)?.style.removeProperty(`--swipe-amount-y`),
						clearTimeout(ke),
						(se = l(_e)),
						l(Ae) || je(),
						J.setHeight({
							toastId: i.toast.id,
							height: l(oe),
							toasterId: i.toast.toasterId,
							position: i.position
						}));
				});
		}));
	let Ne = (e) => {
			if (l(Se)) return;
			(z(ce, new Date(), !0), z(re, l(De), !0));
			let t = e.target;
			(t.setPointerCapture(e.pointerId),
				t.tagName !== `BUTTON` && (z(E, !0), (Y = { x: e.clientX, y: e.clientY })));
		},
		Pe = () => {
			if (l(D) || !l(G)) return;
			Y = null;
			let e = Number(
					l(H)?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``) || 0
				),
				t = Number(
					l(H)?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``) || 0
				),
				n = new Date().getTime() - (l(ce)?.getTime() ?? 0),
				r = l(U) === `x` ? e : t,
				a = Math.abs(r) / n;
			if (
				(l(U) === `x`
					? l(X).includes(e > 0 ? `right` : `left`)
					: l(X).includes(t > 0 ? `bottom` : `top`)) &&
				(Math.abs(r) >= yi || a > 0.11)
			) {
				(z(re, l(De), !0),
					i.toast.onDismiss?.(i.toast),
					l(U) === `x`
						? z(ue, e > 0 ? `right` : `left`, !0)
						: z(ue, t > 0 ? `down` : `up`, !0),
					Oe(),
					z(D, !0));
				return;
			}
			(l(H)?.style.setProperty(`--swipe-amount-x`, `0px`),
				l(H)?.style.setProperty(`--swipe-amount-y`, `0px`),
				z(k, !1),
				z(E, !1),
				z(U, null));
		},
		Fe = (e) => {
			if (!Y || !l(G) || (window.getSelection()?.toString().length ?? -1) > 0) return;
			let t = e.clientY - Y.y,
				n = e.clientX - Y.x;
			!l(U) &&
				(Math.abs(n) > 1 || Math.abs(t) > 1) &&
				z(U, Math.abs(n) > Math.abs(t) ? `x` : `y`, !0);
			let r = { x: 0, y: 0 };
			if (l(U) === `y`) {
				if (l(X).includes(`top`) || l(X).includes(`bottom`)) {
					if ((l(X).includes(`top`) && t < 0) || (l(X).includes(`bottom`) && t > 0))
						r.y = t;
					else {
						let e = t * wi(t);
						r.y = Math.abs(e) < Math.abs(t) ? e : t;
					}
				}
			} else if (l(U) === `x` && (l(X).includes(`left`) || l(X).includes(`right`))) {
				if ((l(X).includes(`left`) && n < 0) || (l(X).includes(`right`) && n > 0))
					r.x = n;
				else {
					let e = n * wi(n);
					r.x = Math.abs(e) < Math.abs(n) ? e : n;
				}
			}
			((Math.abs(r.x) > 0 || Math.abs(r.y) > 0) && z(k, !0),
				l(H)?.style.setProperty(`--swipe-amount-x`, `${r.x}px`),
				l(H)?.style.setProperty(`--swipe-amount-y`, `${r.y}px`));
		},
		Ie = () => {
			(z(E, !1), z(U, null), (Y = null));
		},
		Le = F(() =>
			i.toast.icon
				? i.toast.icon
				: l(W) === `success`
					? i.successIcon
					: l(W) === `error`
						? i.errorIcon
						: l(W) === `warning`
							? i.warningIcon
							: l(W) === `info`
								? i.infoIcon
								: l(W) === `loading`
									? i.loadingIcon
									: null
		);
	var Q = Ni();
	P(Q, `tabindex`, 0);
	let Re;
	var ze = M(Q),
		Be = (n) => {
			var r = Di(),
				a = M(r);
			(B(a, () => i.closeIcon ?? t),
				p(r),
				e(
					(e) => {
						(P(r, `aria-label`, i.closeButtonAriaLabel),
							P(r, `data-disabled`, l(Se)),
							j(r, 1, e));
					},
					[() => x(ge(l(Ce)?.closeButton, i.toast?.classes?.closeButton))]
				),
				y(`click`, r, () => {
					!l(Se) && l(G) && (Oe(), i.toast.onDismiss?.(i.toast));
				}),
				m(n, r));
		};
	N(ze, (e) => {
		l(he) && !i.toast.component && l(W) !== `loading` && i.closeIcon !== null && e(Be);
	});
	var Ve = R(ze, 2),
		He = (e) => {
			let t = F(() => i.toast.component);
			var n = o(),
				a = C(n);
			(r(
				a,
				() => l(t),
				(e, t) => {
					t(
						e,
						L(() => i.toast.componentProps, { closeToast: Oe })
					);
				}
			),
				m(e, n));
		},
		Ue = (n) => {
			var s = Mi(),
				f = C(s),
				h = (n) => {
					var s = Oi(),
						c = M(s),
						u = (e) => {
							var t = o(),
								n = C(t),
								s = (e) => {
									var t = o(),
										n = C(t);
									(r(
										n,
										() => i.toast.icon,
										(e, t) => {
											t(e, {});
										}
									),
										m(e, t));
								},
								c = (e) => {
									a(e);
								};
							(N(n, (e) => {
								i.toast.icon ? e(s) : e(c, -1);
							}),
								m(e, t));
						},
						d = (e) => {
							a(e);
						};
					N(c, (e) => {
						l(W) === `loading` ? e(u) : i.toast.promise && e(d, 1);
					});
					var f = R(c, 2),
						h = (e) => {
							var n = o(),
								a = C(n),
								s = (e) => {
									var t = o(),
										n = C(t);
									(r(
										n,
										() => i.toast.icon,
										(e, t) => {
											t(e, {});
										}
									),
										m(e, t));
								},
								c = (e) => {
									var n = o(),
										r = C(n);
									(B(r, () => i.successIcon ?? t), m(e, n));
								},
								u = (e) => {
									var n = o(),
										r = C(n);
									(B(r, () => i.errorIcon ?? t), m(e, n));
								},
								d = (e) => {
									var n = o(),
										r = C(n);
									(B(r, () => i.warningIcon ?? t), m(e, n));
								},
								f = (e) => {
									var n = o(),
										r = C(n);
									(B(r, () => i.infoIcon ?? t), m(e, n));
								};
							(N(a, (e) => {
								i.toast.icon
									? e(s)
									: l(W) === `success`
										? e(c, 1)
										: l(W) === `error`
											? e(u, 2)
											: l(W) === `warning`
												? e(d, 3)
												: l(W) === `info` && e(f, 4);
							}),
								m(e, n));
						};
					(N(f, (e) => {
						l(W) !== `loading` && e(h);
					}),
						p(s),
						e((e) => j(s, 1, e), [() => x(ge(l(Ce)?.icon, i.toast?.classes?.icon))]),
						m(n, s));
				};
			N(f, (e) => {
				(l(W) || i.toast.icon || i.toast.promise) &&
					i.toast.icon !== null &&
					(l(Le) !== null || i.toast.icon) &&
					e(h);
			});
			var g = R(f, 2),
				_ = M(g),
				v = M(_),
				b = (t) => {
					var n = o(),
						a = C(n),
						s = (e) => {
							let t = F(() => i.toast.title);
							var n = o(),
								a = C(n);
							(r(
								a,
								() => l(t),
								(e, t) => {
									t(
										e,
										L(() => i.toast.componentProps)
									);
								}
							),
								m(e, n));
						},
						c = (t) => {
							var n = le();
							(e(() => te(n, i.toast.title)), m(t, n));
						};
					(N(a, (e) => {
						typeof i.toast.title == `string` ? e(c, -1) : e(s);
					}),
						m(t, n));
				};
			(N(v, (e) => {
				i.toast.title && e(b);
			}),
				p(_));
			var S = R(_, 2),
				w = (t) => {
					var n = ki(),
						a = M(n),
						s = (e) => {
							let t = F(() => i.toast.description);
							var n = o(),
								a = C(n);
							(r(
								a,
								() => l(t),
								(e, t) => {
									t(
										e,
										L(() => i.toast.componentProps)
									);
								}
							),
								m(e, n));
						},
						c = (t) => {
							var n = le();
							(e(() => te(n, i.toast.description)), m(t, n));
						};
					(N(a, (e) => {
						typeof i.toast.description == `string` ? e(c, -1) : e(s);
					}),
						p(n),
						e(
							(e) => j(n, 1, e),
							[() => x(ge(d(), l(me), l(Ce)?.description, i.toast.classes?.description))]
						),
						m(t, n));
				};
			(N(S, (e) => {
				i.toast.description && e(w);
			}),
				p(g));
			var T = R(g, 2),
				E = (t) => {
					var n = o(),
						a = C(n),
						s = (e) => {
							var t = o(),
								n = C(t);
							(r(
								n,
								() => i.toast.cancel,
								(e, t) => {
									t(e, {});
								}
							),
								m(e, t));
						},
						u = (t) => {
							var n = Ai(),
								r = ie(n, !0);
							(e(
								(e) => {
									(ee(n, i.toast.cancelButtonStyle ?? c()),
										j(n, 1, e),
										te(r, i.toast.cancel.label));
								},
								[() => x(ge(l(Ce)?.cancelButton, i.toast?.classes?.cancelButton))]
							),
								y(`click`, n, (e) => {
									hi(i.toast.cancel) && l(G) && (i.toast.cancel?.onClick?.(e), Oe());
								}),
								m(t, n));
						},
						d = F(() => hi(i.toast.cancel));
					(N(a, (e) => {
						typeof i.toast.cancel == `function` ? e(s) : l(d) && e(u, 1);
					}),
						m(t, n));
				};
			N(T, (e) => {
				i.toast.cancel && e(E);
			});
			var D = R(T, 2),
				O = (t) => {
					var n = o(),
						a = C(n),
						s = (e) => {
							var t = o(),
								n = C(t);
							(r(
								n,
								() => i.toast.action,
								(e, t) => {
									t(e, {});
								}
							),
								m(e, t));
						},
						c = (t) => {
							var n = ji(),
								r = ie(n, !0);
							(e(
								(e) => {
									(ee(n, i.toast.actionButtonStyle ?? u()),
										j(n, 1, e),
										te(r, i.toast.action.label));
								},
								[() => x(ge(l(Ce)?.actionButton, i.toast?.classes?.actionButton))]
							),
								y(`click`, n, (e) => {
									hi(i.toast.action) &&
										(i.toast.action?.onClick(e), !e.defaultPrevented && Oe());
								}),
								m(t, n));
						},
						d = F(() => hi(i.toast.action));
					(N(a, (e) => {
						typeof i.toast.action == `function` ? e(s) : l(d) && e(c, 1);
					}),
						m(t, n));
				};
			(N(D, (e) => {
				i.toast.action && e(O);
			}),
				e(
					(e, t) => {
						(j(g, 1, e), j(_, 1, t));
					},
					[
						() => x(ge(l(Ce)?.content, i.toast?.classes?.content)),
						() => x(ge(l(Ce)?.title, i.toast?.classes?.title))
					]
				),
				m(n, s));
		};
	(N(Ve, (e) => {
		i.toast.component ? e(He) : e(Ue, -1);
	}),
		p(Q),
		ne(
			Q,
			(e) => z(H, e),
			() => l(H)
		),
		e(
			(e, t, n) => {
				(j(Q, 1, e),
					P(Q, `aria-live`, i.toast.important ? `assertive` : `polite`),
					P(Q, `data-rich-colors`, i.toast.richColors ?? h()),
					P(Q, `data-styled`, !(i.toast.component || i.toast.unstyled || f())),
					P(Q, `data-mounted`, l(v)),
					P(Q, `data-promise`, t),
					P(Q, `data-swiped`, l(k)),
					P(Q, `data-removed`, l(T)),
					P(Q, `data-visible`, l(fe)),
					P(Q, `data-y-position`, l(ve)[0]),
					P(Q, `data-x-position`, l(ve)[1]),
					P(Q, `data-index`, i.index),
					P(Q, `data-front`, l(de)),
					P(Q, `data-swiping`, l(E)),
					P(Q, `data-dismissible`, l(G)),
					P(Q, `data-type`, l(W)),
					P(Q, `data-invert`, l(xe)),
					P(Q, `data-swipe-out`, l(D)),
					P(Q, `data-swipe-direction`, l(ue)),
					P(Q, `data-expanded`, n),
					(Re = ee(Q, `${i.style} ${i.toast.style}`, Re, {
						'--index': i.index,
						'--toasts-before': i.index,
						'--z-index': J.toasts.length - i.index,
						'--offset': `${l(T) ? l(re) : l(De)}px`,
						'--initial-height': i.expandByDefault ? `auto` : `${l(oe)}px`
					})));
			},
			[
				() =>
					x(
						ge(
							i.class,
							l(pe),
							l(Ce)?.toast,
							i.toast?.classes?.toast,
							l(Ce)?.[l(W)],
							i.toast?.classes?.[l(W)]
						)
					),
				() => !!i.toast.promise,
				() => !!(i.expanded || (i.expandByDefault && l(v)))
			]
		),
		y(`pointermove`, Q, Fe),
		y(`pointerup`, Q, Pe),
		y(`pointerdown`, Q, Ne),
		s(`dragend`, Q, Ie),
		m(n, Q),
		w());
}
n([`pointermove`, `pointerup`, `pointerdown`, `click`]);
var Fi = u(
	`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`
);
function Ii(e) {
	var t = Fi();
	m(e, t);
}
var Li = u(
	`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`
);
function Ri(e) {
	var t = Li();
	m(e, t);
}
var zi = u(
	`<svg aria-hidden="true" viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`
);
function Bi(e) {
	var t = zi();
	m(e, t);
}
var Vi = u(
	`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`
);
function Hi(e) {
	var t = Vi();
	m(e, t);
}
var Ui = u(
	`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
);
function Wi(e) {
	var t = Ui();
	m(e, t);
}
var Gi = 3,
	Ki = `24px`,
	qi = `16px`,
	Ji = 4e3,
	Yi = 356,
	Xi = 14,
	Zi = `dark`,
	Qi = `light`;
function $i(e, t) {
	let n = {};
	return (
		[e, t].forEach((e, t) => {
			let r = t === 1,
				i = r ? `--mobile-offset` : `--offset`,
				a = r ? qi : Ki;
			function o(e) {
				[`top`, `right`, `bottom`, `left`].forEach((t) => {
					n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
				});
			}
			typeof e == `number` || typeof e == `string`
				? o(e)
				: typeof e == `object`
					? [`top`, `right`, `bottom`, `left`].forEach((t) => {
							let r = e[t];
							r === void 0
								? (n[`${i}-${t}`] = a)
								: (n[`${i}-${t}`] = typeof r == `number` ? `${r}px` : r);
						})
					: o(a);
		}),
		n
	);
}
var ea = new Set(
		`$$slots.$$events.$$legacy.id.invert.position.hotkey.expand.closeButton.offset.mobileOffset.theme.richColors.duration.visibleToasts.toastOptions.dir.gap.swipeDirections.pauseWhenPageIsHidden.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.containerAriaLabel.class.closeButtonAriaLabel.onblur.onfocus.onmouseenter.onmousemove.onmouseleave.ondragend.onpointerdown.onpointerup`.split(
			`.`
		)
	),
	ta = c(`<ol></ol>`),
	na = c(
		`<section aria-live="polite" aria-relevant="additions text" aria-atomic="false"><!></section>`
	);
function ra(n, r) {
	V(r, !0);
	function i(e) {
		return e === `system`
			? typeof window < `u` &&
				window.matchMedia &&
				window.matchMedia(`(prefers-color-scheme: dark)`).matches
				? Zi
				: Qi
			: e;
	}
	let s = S(r, `invert`, 3, !1),
		c = S(r, `position`, 3, `bottom-right`),
		u = S(r, `hotkey`, 19, () => [`altKey`, `KeyT`]),
		d = S(r, `expand`, 3, !1),
		f = S(r, `closeButton`, 3, !1),
		h = S(r, `offset`, 3, Ki),
		g = S(r, `mobileOffset`, 3, qi),
		_ = S(r, `theme`, 3, `light`),
		y = S(r, `richColors`, 3, !1),
		x = S(r, `duration`, 3, Ji),
		T = S(r, `visibleToasts`, 3, Gi),
		j = S(r, `toastOptions`, 19, () => ({})),
		ee = S(r, `dir`, 7, `auto`),
		te = S(r, `gap`, 3, Xi),
		re = S(r, `pauseWhenPageIsHidden`, 3, !1),
		ie = S(r, `containerAriaLabel`, 3, `Notifications`),
		L = S(r, `closeButtonAriaLabel`, 3, `Close toast`),
		R = I(r, ea);
	function oe() {
		if (ee() !== `auto`) return ee();
		if (typeof window > `u` || typeof document > `u`) return `ltr`;
		let e = document.documentElement.getAttribute(`dir`);
		return e === `auto` || !e
			? (b(() =>
					ee(window.getComputedStyle(document.documentElement).direction ?? `ltr`)
				),
				ee())
			: (b(() => ee(e)), e);
	}
	let se = F(() =>
			r.id
				? J.toasts.filter((e) => e.toasterId === r.id)
				: J.toasts.filter((e) => !e.toasterId)
		),
		ce = F(() =>
			Array.from(
				new Set(
					[
						c(),
						...l(se)
							.filter((e) => e.position)
							.map((e) => e.position)
					].filter(Boolean)
				)
			)
		),
		le = A(!1),
		H = A(!1),
		U = A(E(i(_()))),
		ue = A(void 0),
		de = A(null),
		fe = A(!1),
		W = null,
		G = F(() => u().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
	(O(() => {
		l(se).length <= 1 && z(le, !1);
	}),
		O(() => {
			let e = l(se).filter((e) => e.dismiss && !e.delete);
			if (e.length > 0) {
				let t = J.toasts.map((t) =>
					e.find((e) => e.id === t.id) ? { ...t, delete: !0 } : t
				);
				J.toasts = t;
			}
		}),
		O(() => () => {
			l(ue) && l(de) && (l(de).focus({ preventScroll: !0 }), z(de, null), z(fe, !1));
		}),
		ae(() =>
			v(document, `keydown`, (e) => {
				(u().every((t) => e[t] || e.code === t) && (z(le, !0), l(ue)?.focus()),
					e.code === `Escape` &&
						(document.activeElement === l(ue) ||
							l(ue)?.contains(document.activeElement)) &&
						z(le, !1));
			})
		),
		O(() => {
			if ((_() !== `system` && z(U, _()), typeof window < `u`)) {
				_() === `system` &&
					(window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches
						? z(U, Zi)
						: z(U, Qi));
				let e = window.matchMedia(`(prefers-color-scheme: dark)`),
					t = ({ matches: e }) => {
						_() === `system` && z(U, e ? Zi : Qi, !0);
					};
				`addEventListener` in e ? e.addEventListener(`change`, t) : e.addListener(t);
			}
		}));
	let pe = (e) => {
			(r.onblur?.(e),
				l(fe) &&
					!e.currentTarget.contains(e.relatedTarget) &&
					(z(fe, !1), l(de) && (l(de).focus({ preventScroll: !0 }), z(de, null))));
		},
		me = (e) => {
			(r.onfocus?.(e),
				!(e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) &&
					(l(fe) || (z(fe, !0), z(de, e.relatedTarget, !0))));
		},
		K = (e) => {
			(r.onpointerdown?.(e),
				!(e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) &&
					z(H, !0));
		},
		q = (e) => {
			(r.onmouseenter?.(e), (W = { x: e.clientX, y: e.clientY }), z(le, !0));
		},
		ge = (e) => {
			r.onmouseleave?.(e);
			let t = { x: e.clientX, y: e.clientY },
				n = !W || Math.abs(t.x - W.x) > 1 || Math.abs(t.y - W.y) > 1;
			!l(H) && n && z(le, !1);
		},
		_e = (e) => {
			(r.onmousemove?.(e), (W = { x: e.clientX, y: e.clientY }), z(le, !0));
		},
		Y = (e) => {
			(r.ondragend?.(e), z(le, !1));
		},
		ve = (e) => {
			(r.onpointerup?.(e), z(H, !1));
		};
	mi.set(new he());
	var X = na();
	P(X, `tabindex`, -1);
	var ye = M(X),
		be = (n) => {
			var i = o(),
				c = C(i);
			(a(
				c,
				18,
				() => l(ce),
				(e) => e,
				(n, i, c, u) => {
					let _ = F(() => {
							let [e, t] = i.split(`-`);
							return { y: e, x: t };
						}),
						v = F(() => $i(h(), g())),
						b = F(
							() =>
								J.heights.find((e) => e.toasterId === r.id && e.position === i)?.height ??
								0
						);
					var S = ta();
					(k(
						S,
						(e) => ({
							tabindex: -1,
							dir: e,
							class: r.class,
							'data-sonner-toaster': !0,
							'data-sonner-theme': l(U),
							'data-y-position': l(_).y,
							'data-x-position': l(_).x,
							style: r.style,
							onblur: pe,
							onfocus: me,
							onmouseenter: q,
							onmousemove: _e,
							onmouseleave: ge,
							ondragend: Y,
							onpointerdown: K,
							onpointerup: ve,
							...R,
							[D]: {
								'--front-toast-height': `${l(b)}px`,
								'--width': `${Yi}px`,
								'--gap': `${te()}px`,
								'--offset-top': l(v)[`--offset-top`],
								'--offset-right': l(v)[`--offset-right`],
								'--offset-bottom': l(v)[`--offset-bottom`],
								'--offset-left': l(v)[`--offset-left`],
								'--mobile-offset-top': l(v)[`--mobile-offset-top`],
								'--mobile-offset-right': l(v)[`--mobile-offset-right`],
								'--mobile-offset-bottom': l(v)[`--mobile-offset-bottom`],
								'--mobile-offset-left': l(v)[`--mobile-offset-left`]
							}
						}),
						[() => oe()]
					),
						a(
							S,
							23,
							() => l(se).filter((e) => (!e.position && l(c) === 0) || e.position === i),
							(e) => e.id,
							(e, n, a, c) => {
								{
									let c = (e) => {
											var n = o(),
												i = C(n),
												a = (e) => {
													var n = o(),
														i = C(n);
													(B(i, () => r.successIcon ?? t), m(e, n));
												},
												s = (e) => {
													Ii(e, {});
												};
											(N(i, (e) => {
												r.successIcon ? e(a) : r.successIcon !== null && e(s, 1);
											}),
												m(e, n));
										},
										u = (e) => {
											var n = o(),
												i = C(n),
												a = (e) => {
													var n = o(),
														i = C(n);
													(B(i, () => r.errorIcon ?? t), m(e, n));
												},
												s = (e) => {
													Ri(e, {});
												};
											(N(i, (e) => {
												r.errorIcon ? e(a) : r.errorIcon !== null && e(s, 1);
											}),
												m(e, n));
										},
										p = (e) => {
											var n = o(),
												i = C(n),
												a = (e) => {
													var n = o(),
														i = C(n);
													(B(i, () => r.warningIcon ?? t), m(e, n));
												},
												s = (e) => {
													Bi(e, {});
												};
											(N(i, (e) => {
												r.warningIcon ? e(a) : r.warningIcon !== null && e(s, 1);
											}),
												m(e, n));
										},
										h = (e) => {
											var n = o(),
												i = C(n),
												a = (e) => {
													var n = o(),
														i = C(n);
													(B(i, () => r.infoIcon ?? t), m(e, n));
												},
												s = (e) => {
													Hi(e, {});
												};
											(N(i, (e) => {
												r.infoIcon ? e(a) : r.infoIcon !== null && e(s, 1);
											}),
												m(e, n));
										},
										g = (e) => {
											var n = o(),
												i = C(n),
												a = (e) => {
													var n = o(),
														i = C(n);
													(B(i, () => r.closeIcon ?? t), m(e, n));
												},
												s = (e) => {
													Wi(e, {});
												};
											(N(i, (e) => {
												r.closeIcon ? e(a) : r.closeIcon !== null && e(s, 1);
											}),
												m(e, n));
										},
										_ = F(() => j()?.duration ?? x()),
										v = F(() => j()?.class ?? ``),
										b = F(() => j()?.descriptionClass || ``),
										S = F(() => j()?.closeButton ?? f()),
										w = F(() => j()?.style ?? ``),
										E = F(() => j().classes || {}),
										D = F(() => j().unstyled ?? !1),
										O = F(() => j()?.cancelButtonStyle ?? ``),
										k = F(() => j()?.actionButtonStyle ?? ``),
										A = F(() => j()?.closeButtonAriaLabel ?? L());
									Pi(e, {
										get index() {
											return l(a);
										},
										get toast() {
											return l(n);
										},
										get defaultRichColors() {
											return y();
										},
										get duration() {
											return l(_);
										},
										get class() {
											return l(v);
										},
										get descriptionClass() {
											return l(b);
										},
										get invert() {
											return s();
										},
										get visibleToasts() {
											return T();
										},
										get closeButton() {
											return l(S);
										},
										get interacting() {
											return l(H);
										},
										get position() {
											return i;
										},
										get gap() {
											return te();
										},
										get style() {
											return l(w);
										},
										get classes() {
											return l(E);
										},
										get unstyled() {
											return l(D);
										},
										get cancelButtonStyle() {
											return l(O);
										},
										get actionButtonStyle() {
											return l(k);
										},
										get closeButtonAriaLabel() {
											return l(A);
										},
										get expandByDefault() {
											return d();
										},
										get expanded() {
											return l(le);
										},
										get swipeDirections() {
											return r.swipeDirections;
										},
										get pauseWhenPageIsHidden() {
											return re();
										},
										get loadingIcon() {
											return r.loadingIcon;
										},
										successIcon: c,
										errorIcon: u,
										warningIcon: p,
										infoIcon: h,
										closeIcon: g,
										$$slots: {
											successIcon: !0,
											errorIcon: !0,
											warningIcon: !0,
											infoIcon: !0,
											closeIcon: !0
										}
									});
								}
							}
						),
						p(S),
						ne(
							S,
							(e) => z(ue, e),
							() => l(ue)
						),
						e(() => (S.dir = S.dir)),
						m(n, S));
				}
			),
				m(n, i));
		};
	(N(ye, (e) => {
		l(se).length > 0 && e(be);
	}),
		p(X),
		e(() => P(X, `aria-label`, `${ie() ?? ``} ${l(G) ?? ``}`)),
		m(n, X),
		w());
}
var ia = new Set([`$$slots`, `$$events`, `$$legacy`]);
function aa(e, t) {
	let n = I(t, ia),
		r = {
			name: `crosshair`,
			size: 24,
			node: [
				[`circle`, { cx: `12`, cy: `12`, r: `10` }],
				[`line`, { x1: `22`, x2: `18`, y1: `12`, y2: `12` }],
				[`line`, { x1: `6`, x2: `2`, y1: `12`, y2: `12` }],
				[`line`, { x1: `12`, x2: `12`, y1: `6`, y2: `2` }],
				[`line`, { x1: `12`, x2: `12`, y1: `22`, y2: `18` }]
			]
		};
	U(
		e,
		L(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var oa = (n, r = t, i = t, a = t) => {
		var o = sa(),
			s = ie(o, !0);
		(e(
			(e) => {
				(P(o, `href`, r()), P(o, `aria-current`, e), te(s, a()));
			},
			[() => (H.url.pathname.startsWith(i()) ? `page` : void 0)]
		),
			m(n, o));
	},
	sa = c(
		`<a class="ui-focus-ring text-muted-foreground inline-flex min-h-11 items-center rounded px-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-signal/10 hover:text-signal selected:bg-signal/10 selected:text-signal"> </a>`
	),
	ca = c(
		`<header border="signal/15 b" bg="card/90" sticky="" z="50" p="b-3" class="animate-entrance-down backdrop-blur-xl svelte-1i43yzn"><div container="" m="x-auto" p="x-4"><nav aria-label="Primary navigation"><div flex="~" h="16" items="center" justify="between"><a flex="~" href="/" aria-label="deadlog.io - Home" items="center" gap="4" class="group transition-all duration-300"><div relative=""><div flex="~" bg="primary/10" items="center" justify="center" rounded="lg" class="group-hover:bg-primary/20 size-10 transition-all duration-300"><!></div> <div bg="primary" absolute="" op="60" class="-top-0.5 -left-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"></div> <div bg="signal" absolute="" op="70" class="-right-0.5 -bottom-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"></div></div> <div flex="~ col"><div flex="~" items="baseline" gap="2"><span font="display medium" text="foreground 2xl" class="tracking-wide transition-colors duration-300 md:text-3xl">dead<span text="primary">log</span></span> <span bg="primary/10" text="primary" p="x-1.5 y-0.5" font="mono medium" uppercase="" class="hidden rounded text-[11px] tracking-wider md:inline-block">.io</span></div> <span text="muted-foreground xs" font="medium" class="hidden tracking-wide md:block">Deadlock Changelog</span></div></a> <div flex="~" items="center" gap="1" class="sm:gap-2"><!> <!></div></div></nav> <!></div></header>`
	);
function la(e, t) {
	(V(t, !1), T());
	var n = ca(),
		r = M(n),
		a = M(r),
		o = M(a),
		s = M(o),
		c = M(s),
		l = M(c);
	(aa(M(l), {
		class: `text-primary size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45`
	}),
		p(l),
		i(4),
		p(c),
		i(2),
		p(s));
	var u = R(s, 2),
		d = M(u);
	(oa(
		d,
		() => `/heroes`,
		() => `/hero`,
		() => `Heroes`
	),
		oa(
			R(d, 2),
			() => `/items`,
			() => `/item`,
			() => `Items`
		),
		p(u),
		p(o),
		p(a));
	var f = R(a, 2);
	(de(f, {}), p(r), p(n), m(e, n), w());
}
var ua = c(
	`<footer m="t-24" p="b-8"><div m="b-10" class="editorial-divider"></div> <div container="" m="x-auto" flex="~ col" items="center" gap="6" p="x-4"><a flex="~" href="/" items="center" gap="3" class="group transition-opacity hover:opacity-80"><div flex="~" bg="signal/10" items="center" justify="center" rounded="md" class="group-hover:bg-signal/15 size-7 transition-colors"><!></div> <span font="display semibold" text="muted-foreground sm" class="tracking-wide transition-colors">dead<span text="primary">log</span><span font="mono" class="text-[11px]">.io</span></span></a> <div flex="~ col" items="center" gap="1.5" text="center"><a href="/archive" class="ui-focus-ring text-signal mb-2 inline-flex min-h-11 items-center rounded-sm text-sm underline-offset-4 hover:underline">Browse all patches</a> <p text="muted-foreground" class="text-xs">Data provided by <a href="https://deadlock-api.com" text="signal" class="transition-colors hover:opacity-80" target="_blank" rel="noopener noreferrer">Deadlock API</a></p> <p text="muted-foreground" class="text-xs">Deadlock is a trademark of Valve Corporation</p></div> <div flex="~" items="center" gap="4"><div bg="signal/20" h="px" w="10"></div> <span text="muted-foreground" font="mono" uppercase="" class="terminal-flicker text-[11px] tracking-[0.25em]">// end transmission</span> <div bg="signal/20" h="px" w="10"></div></div></div></footer>`
);
function da(e) {
	var t = ua(),
		n = R(M(t), 2),
		r = M(n),
		a = M(r);
	(aa(M(a), { class: `text-signal size-3.5` }),
		p(a),
		i(2),
		p(r),
		i(4),
		p(n),
		p(t),
		m(e, t));
}
var fa = new Set([`$$slots`, `$$events`, `$$legacy`]);
function pa(e, t) {
	let n = I(t, fa),
		r = {
			name: `arrow-up`,
			size: 24,
			node: [
				[`path`, { d: `m5 12 7-7 7 7` }],
				[`path`, { d: `M12 19V5` }]
			]
		};
	U(
		e,
		L(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
function ma(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function ha(e) {
	let t = typeof e == `string` && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || `px`] : [e, `px`];
}
function ga(
	e,
	{
		delay: t = 0,
		duration: n = 400,
		easing: r = ma,
		x: i = 0,
		y: a = 0,
		opacity: o = 0
	} = {}
) {
	let s = getComputedStyle(e),
		c = +s.opacity,
		l = s.transform === `none` ? `` : s.transform,
		u = c * (1 - o),
		[d, f] = ha(i),
		[p, m] = ha(a);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `
			transform: ${l} translate(${(1 - e) * d}${f}, ${(1 - e) * p}${m});
			opacity: ${c - u * t}`
	};
}
function _a(e) {
	return --e * e * e * e * e + 1;
}
new xe(
	() => window.scrollX,
	(e) => v(window, `scroll`, e)
);
var va = new xe(
	() => window.scrollY,
	(e) => v(window, `scroll`, e)
);
(new xe(
	() => window.innerWidth,
	(e) => v(window, `resize`, e)
),
	new xe(
		() => window.innerHeight,
		(e) => v(window, `resize`, e)
	),
	new xe(
		() => window.outerWidth,
		(e) => v(window, `resize`, e)
	),
	new xe(
		() => window.outerHeight,
		(e) => v(window, `resize`, e)
	),
	new xe(
		() => window.screenLeft,
		(e) => {
			let t = window.screenLeft,
				n = requestAnimationFrame(function r() {
					((n = requestAnimationFrame(r)), t !== (t = window.screenLeft) && e());
				});
			return () => {
				cancelAnimationFrame(n);
			};
		}
	),
	new xe(
		() => window.screenTop,
		(e) => {
			let t = window.screenTop,
				n = requestAnimationFrame(function r() {
					((n = requestAnimationFrame(r)), t !== (t = window.screenTop) && e());
				});
			return () => {
				cancelAnimationFrame(n);
			};
		}
	),
	new xe(
		() => navigator.onLine,
		(e) => {
			let t = v(window, `online`, e),
				n = v(window, `offline`, e);
			return () => {
				(t(), n());
			};
		}
	));
var ya = c(
	`<button flex="~" type="button" bg="popover/90" text="signal" fixed="" z="50" items="center" justify="center" rounded="md" class="ui-focus-ring right-6 bottom-6 size-12 border backdrop-blur-xl transition-all hover:border-signal/60 hover:text-foreground hover:shadow-xl active:scale-[0.97]" aria-label="Scroll to top"><!></button>`
);
function ba(e, t) {
	V(t, !0);
	let n = F(() => (va.current ?? 0) > 500);
	function r() {
		window.scrollTo({ top: 0, behavior: `smooth` });
	}
	var i = o(),
		a = C(i),
		s = (e) => {
			var t = ya();
			(pa(M(t), { class: `size-5` }),
				p(t),
				y(`click`, t, r),
				g(
					1,
					t,
					() => ga,
					() => ({ y: 10, duration: 250, easing: _a })
				),
				g(
					2,
					t,
					() => ga,
					() => ({ y: 10, duration: 200 })
				),
				m(e, t));
		};
	(N(a, (e) => {
		l(n) && e(s);
	}),
		m(e, i),
		w());
}
n([`click`]);
var { Root: xa, Trigger: Sa, Provider: Ca, Portal: wa } = oi,
	Ta = class extends Se {
		#e;
		#t;
		#n;
		#r;
		constructor(e) {
			(super(),
				(this.#e = e.client),
				(this.mutationId = e.mutationId),
				(this.#n = e.mutationCache),
				(this.#t = []),
				(this.state = e.state || Ea()),
				this.setOptions(e.options),
				this.scheduleGc());
		}
		setOptions(e) {
			((this.options = e), this.updateGcTime(this.options.gcTime));
		}
		get meta() {
			return this.options.meta;
		}
		addObserver(e) {
			this.#t.includes(e) ||
				(this.#t.push(e),
				this.clearGcTimeout(),
				this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
		}
		removeObserver(e) {
			((this.#t = this.#t.filter((t) => t !== e)),
				this.scheduleGc(),
				this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
		}
		optionalRemove() {
			this.#t.length ||
				(this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this));
		}
		continue() {
			return (
				this.#r?.continue() ??
				(this.state.status === `pending`
					? this.execute(this.state.variables)
					: Promise.resolve())
			);
		}
		async execute(e) {
			let t = () => {
					this.#i({ type: `continue` });
				},
				n = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				},
				r = (this.#r = Pe({
					fn: () =>
						this.options.mutationFn
							? this.options.mutationFn(e, n)
							: Promise.reject(Error(`No mutationFn found`)),
					onFail: (e, t) => {
						this.#i({ type: `failed`, failureCount: e, error: t });
					},
					onPause: () => {
						this.#i({ type: `pause` });
					},
					onContinue: t,
					retry: this.options.retry ?? 0,
					retryDelay: this.options.retryDelay,
					networkMode: this.options.networkMode,
					canRun: () => this.#n.canRun(this)
				})),
				i = this.state.status === `pending`,
				a = !r.canStart();
			try {
				if (i) t();
				else {
					(this.#i({ type: `pending`, variables: e, isPaused: a }),
						this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, n)));
					let t = await this.options.onMutate?.(e, n);
					t !== this.state.context &&
						this.#i({ type: `pending`, context: t, variables: e, isPaused: a });
				}
				let o = await r.start();
				return (
					await this.#n.config.onSuccess?.(o, e, this.state.context, this, n),
					await this.options.onSuccess?.(o, e, this.state.context, n),
					await this.#n.config.onSettled?.(
						o,
						null,
						this.state.variables,
						this.state.context,
						this,
						n
					),
					await this.options.onSettled?.(o, null, e, this.state.context, n),
					this.#i({ type: `success`, data: o }),
					o
				);
			} catch (t) {
				try {
					await this.#n.config.onError?.(t, e, this.state.context, this, n);
				} catch (e) {
					Promise.reject(e);
				}
				try {
					await this.options.onError?.(t, e, this.state.context, n);
				} catch (e) {
					Promise.reject(e);
				}
				try {
					await this.#n.config.onSettled?.(
						void 0,
						t,
						this.state.variables,
						this.state.context,
						this,
						n
					);
				} catch (e) {
					Promise.reject(e);
				}
				try {
					await this.options.onSettled?.(void 0, t, e, this.state.context, n);
				} catch (e) {
					Promise.reject(e);
				}
				throw (this.#i({ type: `error`, error: t }), t);
			} finally {
				(this.#r === r && (this.#r = void 0), this.#n.runNext(this));
			}
		}
		#i(e) {
			let t = (t) => {
				switch (e.type) {
					case `failed`:
						return { ...t, failureCount: e.failureCount, failureReason: e.error };
					case `pause`:
						return { ...t, isPaused: !0 };
					case `continue`:
						return { ...t, isPaused: !1 };
					case `pending`:
						return {
							...t,
							context: e.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: e.isPaused,
							status: `pending`,
							variables: e.variables,
							submittedAt: Date.now()
						};
					case `success`:
						return {
							...t,
							data: e.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: `success`,
							isPaused: !1
						};
					case `error`:
						return {
							...t,
							data: void 0,
							error: e.error,
							failureCount: t.failureCount + 1,
							failureReason: e.error,
							isPaused: !1,
							status: `error`
						};
				}
			};
			((this.state = t(this.state)),
				Z.batch(() => {
					(this.#t.forEach((t) => {
						t.onMutationUpdate(e);
					}),
						this.#n.notify({ mutation: this, type: `updated`, action: e }));
				}));
		}
	};
function Ea() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: `idle`,
		variables: void 0,
		submittedAt: 0
	};
}
var Da = class extends Re {
	#e;
	#t;
	#n;
	constructor(e = {}) {
		(super(),
			(this.config = e),
			(this.#e = new Set()),
			(this.#t = new Map()),
			(this.#n = 0));
	}
	build(e, t, n) {
		let r = new Ta({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return (this.add(r), r);
	}
	add(e) {
		this.#e.add(e);
		let t = Oa(e);
		if (typeof t == `string`) {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({ type: `added`, mutation: e });
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = Oa(e);
			if (typeof t == `string`) {
				let n = this.#t.get(t);
				if (n) {
					if (n.length > 1) {
						let t = n.indexOf(e);
						t !== -1 && n.splice(t, 1);
					} else n[0] === e && this.#t.delete(t);
				}
			}
		}
		this.notify({ type: `removed`, mutation: e });
	}
	canRun(e) {
		let t = Oa(e);
		if (typeof t == `string`) {
			let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		let t = Oa(e);
		return typeof t == `string`
			? (this.#t
					.get(t)
					?.find((t) => t !== e && t.state.isPaused)
					?.continue() ?? Promise.resolve())
			: Promise.resolve();
	}
	clear() {
		Z.batch(() => {
			(this.#e.forEach((e) => {
				this.notify({ type: `removed`, mutation: e });
			}),
				this.#e.clear(),
				this.#t.clear());
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = { exact: !0, ...e };
		return this.getAll().find((e) => Xe(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => Xe(e, t));
	}
	notify(e) {
		Z.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return Z.batch(() => Promise.all(e.map((e) => e.continue().catch(Ye))));
	}
};
function Oa(e) {
	return e.options.scope?.id;
}
var ka = class extends Re {
		#e;
		constructor(e = {}) {
			(super(), (this.config = e), (this.#e = new Map()));
		}
		build(e, t, n) {
			let r = t.queryKey,
				i = t.queryHash ?? ve(r, t),
				a = this.get(i);
			return (
				a ||
					((a = new Me({
						client: e,
						queryKey: r,
						queryHash: i,
						options: e.defaultQueryOptions(t),
						state: n,
						defaultOptions: e.getQueryDefaults(r)
					})),
					this.add(a)),
				a
			);
		}
		add(e) {
			this.#e.has(e.queryHash) ||
				(this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
		}
		remove(e) {
			let t = this.#e.get(e.queryHash);
			t &&
				(e.destroy(),
				t === e && this.#e.delete(e.queryHash),
				this.notify({ type: `removed`, query: e }));
		}
		clear() {
			Z.batch(() => {
				this.getAll().forEach((e) => {
					this.remove(e);
				});
			});
		}
		get(e) {
			return this.#e.get(e);
		}
		getAll() {
			return [...this.#e.values()];
		}
		find(e) {
			let t = { exact: !0, ...e };
			return this.getAll().find((e) => be(t, e));
		}
		findAll(e = {}) {
			let t = this.getAll();
			return Object.keys(e).length > 0 ? t.filter((t) => be(e, t)) : t;
		}
		notify(e) {
			Z.batch(() => {
				this.listeners.forEach((t) => {
					t(e);
				});
			});
		}
		onFocus() {
			Z.batch(() => {
				this.getAll().forEach((e) => {
					e.onFocus();
				});
			});
		}
		onOnline() {
			Z.batch(() => {
				this.getAll().forEach((e) => {
					e.onOnline();
				});
			});
		}
	},
	Aa = class {
		#e;
		#t;
		#n;
		#r;
		#i;
		#a;
		#o;
		#s;
		constructor(e = {}) {
			((this.#e = e.queryCache || new ka()),
				(this.#t = e.mutationCache || new Da()),
				(this.#n = e.defaultOptions || {}),
				(this.#r = new Map()),
				(this.#i = new Map()),
				(this.#a = 0));
		}
		mount() {
			(this.#a++,
				this.#a === 1 &&
					((this.#o = Ee.subscribe(async (e) => {
						e && (await this.resumePausedMutations(), this.#e.onFocus());
					})),
					(this.#s = We.subscribe(async (e) => {
						e && (await this.resumePausedMutations(), this.#e.onOnline());
					}))));
		}
		unmount() {
			(this.#a--,
				this.#a === 0 &&
					(this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
		}
		isFetching(e) {
			return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
		}
		isMutating(e) {
			return this.#t.findAll({ ...e, status: `pending` }).length;
		}
		getQueryData(e) {
			let t = this.defaultQueryOptions({ queryKey: e });
			return this.#e.get(t.queryHash)?.state.data;
		}
		ensureQueryData(e) {
			let t = this.defaultQueryOptions(e),
				n = this.#e.build(this, t),
				r = n.state.data;
			return r === void 0
				? this.fetchQuery(e)
				: (e.revalidateIfStale &&
						n.isStaleByTime(qe(t.staleTime, n)) &&
						this.prefetchQuery(t),
					Promise.resolve(r));
		}
		getQueriesData(e) {
			return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
		}
		setQueryData(e, t, n) {
			let r = this.defaultQueryOptions({ queryKey: e }),
				i = this.#e.get(r.queryHash)?.state.data,
				a = Ae(t, i);
			if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
		}
		setQueriesData(e, t, n) {
			return Z.batch(() =>
				this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
			);
		}
		getQueryState(e) {
			let t = this.defaultQueryOptions({ queryKey: e });
			return this.#e.get(t.queryHash)?.state;
		}
		removeQueries(e) {
			let t = this.#e;
			Z.batch(() => {
				t.findAll(e).forEach((e) => {
					t.remove(e);
				});
			});
		}
		resetQueries(e, t) {
			let n = this.#e;
			return Z.batch(() => {
				let r = n.findAll(e),
					i = new Set(r);
				return (
					r.forEach((e) => {
						e.reset();
					}),
					this.refetchQueries({ type: `active`, predicate: (e) => i.has(e) }, t)
				);
			});
		}
		cancelQueries(e, t = {}) {
			let n = { revert: !0, ...t },
				r = Z.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
			return Promise.all(r).then(Ye).catch(Ye);
		}
		invalidateQueries(e, t = {}) {
			return Z.batch(
				() => (
					this.#e.findAll(e).forEach((e) => {
						e.invalidate();
					}),
					e?.refetchType === `none`
						? Promise.resolve()
						: this.refetchQueries(
								{ ...e, type: e?.refetchType ?? e?.type ?? `active` },
								t
							)
				)
			);
		}
		refetchQueries(e, t = {}) {
			let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
				r = Z.batch(() =>
					this.#e
						.findAll(e)
						.filter((e) => !e.isDisabled() && !e.isStatic())
						.map((e) => {
							let t = e.fetch(void 0, n);
							return (
								n.throwOnError || (t = t.catch(Ye)),
								e.state.fetchStatus === `paused` ? Promise.resolve() : t
							);
						})
				);
			return Promise.all(r).then(Ye);
		}
		async query(e) {
			let t = this.defaultQueryOptions(e);
			t.retry === void 0 && (t.retry = !1);
			let n = this.#e.build(this, t),
				r = n.isStaleByTime(qe(t.staleTime, n)) ? await n.fetch(t) : n.state.data,
				i = t.select;
			return i ? i(r) : r;
		}
		fetchQuery(e) {
			let t = this.defaultQueryOptions(e);
			t.retry === void 0 && (t.retry = !1);
			let n = this.#e.build(this, t);
			return n.isStaleByTime(qe(t.staleTime, n))
				? n.fetch(t)
				: Promise.resolve(n.state.data);
		}
		prefetchQuery(e) {
			return this.fetchQuery(e).then(Ye).catch(Ye);
		}
		infiniteQuery(e) {
			return ((e._type = `infinite`), this.query(e));
		}
		fetchInfiniteQuery(e) {
			return ((e._type = `infinite`), this.fetchQuery(e));
		}
		prefetchInfiniteQuery(e) {
			return this.fetchInfiniteQuery(e).then(Ye).catch(Ye);
		}
		ensureInfiniteQueryData(e) {
			return ((e._type = `infinite`), this.ensureQueryData(e));
		}
		resumePausedMutations() {
			return We.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
		}
		getQueryCache() {
			return this.#e;
		}
		getMutationCache() {
			return this.#t;
		}
		getDefaultOptions() {
			return this.#n;
		}
		setDefaultOptions(e) {
			this.#n = e;
		}
		setQueryDefaults(e, t) {
			this.#r.set(Oe(e), { queryKey: e, defaultOptions: t });
		}
		getQueryDefaults(e) {
			let t = [...this.#r.values()],
				n = {};
			return (
				t.forEach((t) => {
					me(e, t.queryKey) && Object.assign(n, t.defaultOptions);
				}),
				n
			);
		}
		setMutationDefaults(e, t) {
			this.#i.set(Oe(e), { mutationKey: e, defaultOptions: t });
		}
		getMutationDefaults(e) {
			let t = [...this.#i.values()],
				n = {};
			return (
				t.forEach((t) => {
					me(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
				}),
				n
			);
		}
		defaultQueryOptions(e) {
			if (e._defaulted) return e;
			let t = {
				...this.#n.queries,
				...this.getQueryDefaults(e.queryKey),
				...e,
				_defaulted: !0
			};
			return (
				(t.queryHash ||= ve(t.queryKey, t)),
				t.refetchOnReconnect === void 0 &&
					(t.refetchOnReconnect = t.networkMode !== `always`),
				t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
				!t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
				t.queryFn === W && (t.enabled = !1),
				t
			);
		}
		defaultMutationOptions(e) {
			return e?._defaulted
				? e
				: {
						...this.#n.mutations,
						...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
						...e,
						_defaulted: !0
					};
		}
		clear() {
			(this.#e.clear(), this.#t.clear());
		}
	};
function ja(e, t) {
	V(t, !0);
	let n = S(t, `client`, 19, () => new Aa());
	(ae(() => {
		n().mount();
	}),
		Be(n()),
		re(() => {
			n().unmount();
		}));
	var r = o(),
		i = C(r);
	(B(i, () => t.children), m(e, r), w());
}
var Ma = c(
	`<div bg="background" class="bg-wire-grid min-h-screen" data-app-ready="false"><a href="#main-content" class="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:tracking-wider focus:uppercase">Skip to content</a> <!> <!> <div id="main-content" tabindex="-1" class="animate-entrance-up outline-none"><!></div> <!> <!></div>`
);
function Na(e, n) {
	V(n, !0);
	let i = new Aa({
			defaultOptions: {
				queries: {
					enabled: !0,
					staleTime: 36e5,
					gcTime: 18e5,
					refetchOnWindowFocus: !1,
					refetchOnReconnect: !0,
					retry: 3,
					retryDelay: (e) => Math.min(1e3 * 2 ** e, 3e4)
				}
			}
		}),
		a = (e) => {
			e.dataset.appReady = `true`;
		};
	(ja(e, {
		get client() {
			return i;
		},
		children: (e, i) => {
			var s = o(),
				c = C(s);
			(r(
				c,
				() => Ca,
				(e, r) => {
					r(e, {
						children: (e, r) => {
							var i = Ma(),
								o = R(M(i), 2);
							ra(o, {
								theme: `dark`,
								class: `toaster group`,
								style: `--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border);`
							});
							var s = R(o, 2);
							la(s, {});
							var c = R(s, 2),
								l = M(c);
							(B(l, () => n.children ?? t), p(c));
							var u = R(c, 2);
							(da(u, {}), ba(R(u, 2), {}), p(i), se(i, () => a), m(e, i));
						},
						$$slots: { default: !0 }
					});
				}
			),
				m(e, s));
		},
		$$slots: { default: !0 }
	}),
		w());
}
export { Na as component };
