import {
	$ as e,
	At as t,
	B as n,
	C as r,
	D as i,
	Dt as a,
	E as o,
	F as s,
	H as c,
	I as l,
	K as u,
	O as d,
	Ot as f,
	P as p,
	R as m,
	V as h,
	W as g,
	Y as _,
	_ as v,
	a as y,
	at as b,
	bt as x,
	ct as S,
	et as C,
	f as w,
	ft as T,
	g as E,
	gt as D,
	it as O,
	j as k,
	k as A,
	m as j,
	mt as M,
	o as N,
	ot as P,
	pt as F,
	r as ee,
	rt as I,
	s as L,
	st as R,
	tt as z,
	ut as B,
	w as V,
	xt as H,
	y as te,
	z as U
} from './CSrylp8p.js';
import './xihTtKlq.js';
import { n as ne, t as W } from './CfafoLPj.js';
import {
	B as G,
	C as re,
	D as ie,
	L as ae,
	M as oe,
	N as se,
	O as K,
	P as ce,
	R as q,
	St as J,
	T as Y,
	Tt as X,
	a as le,
	d as ue,
	f as de,
	ft as fe,
	j as Z,
	k as pe,
	m as me,
	n as he,
	o as ge,
	p as _e,
	pt as ve,
	rt as ye,
	s as be,
	t as xe,
	ut as Se,
	v as Ce,
	vt as we,
	w as Q,
	x as Te,
	xt as Ee,
	yt as De,
	z as Oe
} from './1gFtTxxl.js';
import {
	_ as ke,
	a as Ae,
	d as je,
	f as $,
	g as Me,
	i as Ne,
	m as Pe,
	o as Fe,
	p as Ie,
	u as Le,
	v as Re
} from './bGGqeocG.js';
import { u as ze } from './BkQs74dv.js';
import { t as Be } from './BZA8fNAE.js';
import { t as Ve } from './C4XnHIoE.js';
var He = Se({ component: `avatar`, parts: [`root`, `image`, `fallback`] }),
	Ue = new De(`Avatar.Root`),
	We = class e {
		static create(t) {
			return Ue.set(new e(t));
		}
		opts;
		domContext;
		attachment;
		constructor(e) {
			((this.opts = e),
				(this.domContext = new ve(this.opts.ref)),
				(this.loadImage = this.loadImage.bind(this)),
				(this.attachment = fe(this.opts.ref)));
		}
		loadImage(e, t, n) {
			if (this.opts.loadingStatus.current === `loaded`) return;
			let r,
				i = new Image();
			return (
				(i.src = e),
				t !== void 0 && (i.crossOrigin = t),
				n && (i.referrerPolicy = n),
				(this.opts.loadingStatus.current = `loading`),
				(i.onload = () => {
					r = this.domContext.setTimeout(() => {
						this.opts.loadingStatus.current = `loaded`;
					}, this.opts.delayMs.current);
				}),
				(i.onerror = () => {
					this.opts.loadingStatus.current = `error`;
				}),
				() => {
					((i.onload = null), (i.onerror = null), r && this.domContext.clearTimeout(r));
				}
			);
		}
		#e = M(() => ({
			id: this.opts.id.current,
			[He.root]: ``,
			'data-status': this.opts.loadingStatus.current,
			...this.attachment
		}));
		get props() {
			return u(this.#e);
		}
		set props(e) {
			B(this.#e, e);
		}
	},
	Ge = class e {
		static create(t) {
			return new e(t, Ue.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e),
				(this.root = t),
				(this.attachment = fe(this.opts.ref)),
				we.pre(
					[() => this.opts.src.current, () => this.opts.crossOrigin.current],
					([e, t]) => {
						if (!e) {
							this.root.opts.loadingStatus.current = `error`;
							return;
						}
						return this.root.loadImage(e, t, this.opts.referrerPolicy.current);
					}
				));
		}
		#e = M(() => ({
			id: this.opts.id.current,
			style: {
				display: this.root.opts.loadingStatus.current === `loaded` ? `block` : `none`
			},
			'data-status': this.root.opts.loadingStatus.current,
			[He.image]: ``,
			src: this.opts.src.current,
			crossorigin: this.opts.crossOrigin.current,
			referrerpolicy: this.opts.referrerPolicy.current,
			...this.attachment
		}));
		get props() {
			return u(this.#e);
		}
		set props(e) {
			B(this.#e, e);
		}
	},
	Ke = class e {
		static create(t) {
			return new e(t, Ue.get());
		}
		opts;
		root;
		attachment;
		constructor(e, t) {
			((this.opts = e), (this.root = t), (this.attachment = fe(this.opts.ref)));
		}
		#e = M(() =>
			this.root.opts.loadingStatus.current === `loaded` ? { display: `none` } : void 0
		);
		get style() {
			return u(this.#e);
		}
		set style(e) {
			B(this.#e, e);
		}
		#t = M(() => ({
			style: this.style,
			'data-status': this.root.opts.loadingStatus.current,
			[He.fallback]: ``,
			...this.attachment
		}));
		get props() {
			return u(this.#t);
		}
		set props(e) {
			B(this.#t, e);
		}
	},
	qe = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`delayMs`,
		`loadingStatus`,
		`onLoadingStatusChange`,
		`child`,
		`children`,
		`id`,
		`ref`
	]),
	Je = l(`<div><!></div>`);
function Ye(e, n) {
	let r = m();
	H(n, !0);
	let i = y(n, `delayMs`, 3, 0),
		a = y(n, `loadingStatus`, 15, `loading`),
		o = y(n, `id`, 19, () => ye(r)),
		c = y(n, `ref`, 15, null),
		l = N(n, qe),
		d = We.create({
			delayMs: X(() => i()),
			loadingStatus: X(
				() => a(),
				(e) => {
					a() !== e && (a(e), n.onLoadingStatusChange?.(e));
				}
			),
			id: X(() => o()),
			ref: X(
				() => c(),
				(e) => c(e)
			)
		}),
		h = M(() => J(l, d.props));
	var g = s(),
		_ = b(g),
		v = (e) => {
			var t = s(),
				r = b(t);
			(V(
				r,
				() => n.child,
				() => ({ props: u(h) })
			),
				p(e, t));
		},
		S = (e) => {
			var r = Je();
			w(r, () => ({ ...u(h) }));
			var i = O(r);
			(V(i, () => n.children ?? t), f(r), p(e, r));
		};
	(A(_, (e) => {
		n.child ? e(v) : e(S, -1);
	}),
		p(e, g),
		x());
}
var Xe = new Set([
		`$$slots`,
		`$$events`,
		`$$legacy`,
		`src`,
		`child`,
		`id`,
		`ref`,
		`crossorigin`,
		`referrerpolicy`
	]),
	Ze = l(`<img/>`);
function Qe(e, t) {
	let n = m();
	H(t, !0);
	let r = y(t, `id`, 19, () => ye(n)),
		i = y(t, `ref`, 15, null),
		a = y(t, `crossorigin`, 3, void 0),
		o = y(t, `referrerpolicy`, 3, void 0),
		c = N(t, Xe),
		l = Ge.create({
			src: X(() => t.src),
			id: X(() => r()),
			ref: X(
				() => i(),
				(e) => i(e)
			),
			crossOrigin: X(() => a()),
			referrerPolicy: X(() => o())
		}),
		d = M(() => J(c, l.props));
	var f = s(),
		h = b(f),
		_ = (e) => {
			var n = s(),
				r = b(n);
			(V(
				r,
				() => t.child,
				() => ({ props: u(d) })
			),
				p(e, n));
		},
		v = (e) => {
			var n = Ze();
			(w(n, () => ({ ...u(d), src: t.src })), g(n), p(e, n));
		};
	(A(h, (e) => {
		t.child ? e(_) : e(v, -1);
	}),
		p(e, f),
		x());
}
var $e = new Set([`$$slots`, `$$events`, `$$legacy`, `children`, `child`, `id`, `ref`]),
	et = l(`<span><!></span>`);
function tt(e, n) {
	let r = m();
	H(n, !0);
	let i = y(n, `id`, 19, () => ye(r)),
		a = y(n, `ref`, 15, null),
		o = N(n, $e),
		c = Ke.create({
			id: X(() => i()),
			ref: X(
				() => a(),
				(e) => a(e)
			)
		}),
		l = M(() => J(o, c.props));
	var d = s(),
		h = b(d),
		g = (e) => {
			var t = s(),
				r = b(t);
			(V(
				r,
				() => n.child,
				() => ({ props: u(l) })
			),
				p(e, t));
		},
		_ = (e) => {
			var r = et();
			w(r, () => ({ ...u(l) }));
			var i = O(r);
			(V(i, () => n.children ?? t), f(r), p(e, r));
		};
	(A(h, (e) => {
		n.child ? e(g) : e(_, -1);
	}),
		p(e, d),
		x());
}
function nt(e) {
	return e
		.split(/\s+/)
		.flatMap((e) => e.split(/(?<=\p{Ll})(?=\p{Lu})/u))
		.filter((e) => /^[\p{L}\p{N}]/u.test(e));
}
function rt(e) {
	let [t, n] = nt(e);
	if (!t) return `?`;
	let r = [...t];
	return (n ? r[0] + [...n][0] : r.slice(0, 2).join(``)).toUpperCase();
}
var it = (e, t) => (t && e !== void 0 ? e / t : null),
	at = (e, t) => ({
		before: t.buyers / e.appearances,
		after: it(t.after, e.afterAppearances)
	}),
	ot = class extends _e {
		#e;
		#t = void 0;
		#n = void 0;
		#r = void 0;
		#i;
		#a;
		#o;
		#s;
		#c;
		#l;
		#u;
		#d;
		#f;
		#p = new Set();
		constructor(e, t) {
			(super(),
				(this.options = t),
				(this.#e = e),
				(this.#o = null),
				this.bindMethods(),
				this.setOptions(t));
		}
		bindMethods() {
			this.refetch = this.refetch.bind(this);
		}
		onSubscribe() {
			this.listeners.size === 1 &&
				(this.#t.addObserver(this),
				ct(this.#t, this.options) ? this.#m() : this.updateResult(),
				this.#y());
		}
		onUnsubscribe() {
			this.hasListeners() || this.destroy();
		}
		shouldFetchOnReconnect() {
			return lt(this.#t, this.options, this.options.refetchOnReconnect);
		}
		shouldFetchOnWindowFocus() {
			return lt(this.#t, this.options, this.options.refetchOnWindowFocus);
		}
		destroy() {
			((this.listeners = new Set()), this.#b(), this.#x(), this.#t.removeObserver(this));
		}
		setOptions(e) {
			let t = this.options,
				n = this.#t;
			if (
				((this.options = this.#e.defaultQueryOptions(e)),
				this.options.enabled !== void 0 &&
					typeof this.options.enabled != `boolean` &&
					typeof this.options.enabled != `function` &&
					typeof Q(this.options.enabled, this.#t) != `boolean`)
			)
				throw Error(
					`Expected enabled to be a boolean or a callback that returns a boolean`
				);
			(this.#S(),
				this.#t.setOptions(this.options),
				t._defaulted &&
					!Y(this.options, t) &&
					this.#e
						.getQueryCache()
						.notify({ type: `observerOptionsUpdated`, query: this.#t, observer: this }));
			let r = this.hasListeners();
			(r && ut(this.#t, n, this.options, t) && this.#m(),
				this.updateResult(),
				r &&
					(this.#t !== n ||
						Q(this.options.enabled, this.#t) !== Q(t.enabled, this.#t) ||
						Q(this.options.staleTime, this.#t) !== Q(t.staleTime, this.#t)) &&
					this.#g());
			let i = this.#_();
			r &&
				(this.#t !== n ||
					Q(this.options.enabled, this.#t) !== Q(t.enabled, this.#t) ||
					i !== this.#f) &&
				this.#v(i);
		}
		getOptimisticResult(e) {
			let t = this.#e.getQueryCache().build(this.#e, e),
				n = this.createResult(t, e);
			return (
				Y(this.getCurrentResult(), n) ||
					((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
				n
			);
		}
		getCurrentResult() {
			return this.#r;
		}
		trackResult(e, t) {
			return new Proxy(e, {
				get: (e, n) => (this.trackProp(n), t?.(n), Reflect.get(e, n))
			});
		}
		trackProp(e) {
			this.#p.add(e);
		}
		getCurrentQuery() {
			return this.#t;
		}
		refetch({ ...e } = {}) {
			return this.fetch({ ...e });
		}
		fetchOptimistic(e) {
			let t = this.#e.defaultQueryOptions(e),
				n = this.#e.getQueryCache().build(this.#e, t),
				r = () => {},
				i,
				a = new Promise((e) => {
					((i = e),
						(r = this.#e.getQueryCache().subscribe((i) => {
							i.type === `updated` &&
								i.query.queryHash === n.queryHash &&
								n.state.data !== void 0 &&
								(r(), e(this.createResult(n, t)));
						})));
				});
			return Promise.race([
				n
					.fetch()
					.then(() => {
						let e = this.createResult(n, t);
						return (i?.(e), e);
					})
					.finally(() => {
						r();
					}),
				a
			]);
		}
		fetch(e) {
			return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
				() => (this.updateResult(), this.#r)
			);
		}
		#m(e) {
			this.#S();
			let t = this.#t.fetch(this.options, e);
			return (e?.throwOnError || (t = t.catch(Te)), t);
		}
		#h(e) {
			return !me() && Q(this.options.enabled, this.#t) !== !1 && Ce(e);
		}
		#g() {
			this.#b();
			let e = Q(this.options.staleTime, this.#t);
			if (this.#r.isStale || !this.#h(e)) return;
			let t = ie(this.#r.dataUpdatedAt, e) + 1;
			this.#u = K.setTimeout(() => {
				this.#r.isStale || this.updateResult();
			}, t);
		}
		#_() {
			return Q(this.options.refetchInterval, this.#t) ?? !1;
		}
		#v(e) {
			(this.#x(),
				(this.#f = e),
				this.#f !== 0 &&
					this.#h(this.#f) &&
					(this.#d = K.setInterval(() => {
						(this.options.refetchIntervalInBackground || de.isFocused()) && this.#m();
					}, this.#f)));
		}
		#y() {
			(this.#g(), this.#v(this.#_()));
		}
		#b() {
			this.#u !== void 0 && (K.clearTimeout(this.#u), (this.#u = void 0));
		}
		#x() {
			this.#d !== void 0 && (K.clearInterval(this.#d), (this.#d = void 0));
		}
		createResult(e, t) {
			let n = this.#t,
				r = this.options,
				i = this.#r,
				a = this.#i,
				o = this.#a,
				s = e === n ? this.#n : e.state,
				{ state: c } = e,
				l = { ...c },
				u = !1,
				d;
			if (t._optimisticResults) {
				let i = this.hasListeners(),
					a = !i && ct(e, t),
					o = i && ut(e, n, t, r);
				((a || o) && (l = { ...l, ...le(c.data, e.options) }),
					t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
			}
			let { error: f, errorUpdatedAt: p, status: m } = l;
			d = l.data;
			let h = !1;
			if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
				let e;
				(i?.isPlaceholderData && t.placeholderData === o?.placeholderData
					? ((e = i.data), (h = !0))
					: (e =
							typeof t.placeholderData == `function`
								? t.placeholderData(this.#l?.state.data, this.#l)
								: t.placeholderData),
					e !== void 0 && ((m = `success`), (d = re(i?.data, e, t)), (u = !0)));
			}
			if (t.select && d !== void 0 && !h) {
				if (i && d === a?.data && t.select === this.#s) d = this.#c;
				else
					try {
						((this.#s = t.select),
							(d = t.select(d)),
							(d = re(i?.data, d, t)),
							(this.#c = d),
							(this.#o = null));
					} catch (e) {
						this.#o = e;
					}
			} else d === void 0 && (this.#o = null);
			this.#o &&
				((f = this.#o), (d = this.#c), (p = Date.now()), (m = `error`), (u = !1));
			let g = l.fetchStatus === `fetching`,
				_ = m === `pending`,
				v = m === `error`,
				y = _ && g,
				b = d !== void 0;
			return {
				status: m,
				fetchStatus: l.fetchStatus,
				isPending: _,
				isSuccess: m === `success`,
				isError: v,
				isInitialLoading: y,
				isLoading: y,
				data: d,
				dataUpdatedAt: l.dataUpdatedAt,
				error: f,
				errorUpdatedAt: p,
				failureCount: l.fetchFailureCount,
				failureReason: l.fetchFailureReason,
				errorUpdateCount: l.errorUpdateCount,
				isFetched: e.isFetched(),
				isFetchedAfterMount:
					l.dataUpdateCount > s.dataUpdateCount ||
					l.errorUpdateCount > s.errorUpdateCount,
				isFetching: g,
				isRefetching: g && !_,
				isLoadingError: v && !b,
				isPaused: l.fetchStatus === `paused`,
				isPlaceholderData: u,
				isRefetchError: v && b,
				isStale: dt(e, t),
				refetch: this.refetch,
				isEnabled: Q(t.enabled, e) !== !1
			};
		}
		updateResult() {
			let e = this.#r,
				t = this.createResult(this.#t, this.options);
			if (
				((this.#i = this.#t.state),
				(this.#a = this.options),
				this.#i.data !== void 0 && (this.#l = this.#t),
				Y(t, e))
			)
				return;
			this.#r = t;
			let n = (() => {
				if (!e) return !0;
				let { notifyOnChangeProps: t } = this.options,
					n = typeof t == `function` ? t() : t;
				if (n === `all` || (!n && !this.#p.size)) return !0;
				let r = new Set(n ?? this.#p);
				return (
					this.options.throwOnError && r.add(`error`),
					Object.keys(this.#r).some((t) => {
						let n = t;
						return this.#r[n] !== e[n] && r.has(n);
					})
				);
			})();
			ue.batch(() => {
				(n &&
					this.listeners.forEach((e) => {
						e(this.#r);
					}),
					this.#e
						.getQueryCache()
						.notify({ query: this.#t, type: `observerResultsUpdated` }));
			});
		}
		#S() {
			let e = this.#e.getQueryCache().build(this.#e, this.options);
			if (e === this.#t) return;
			let t = this.#t;
			((this.#t = e),
				(this.#n = e.state),
				this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
		}
		onQueryUpdate() {
			(this.updateResult(), this.hasListeners() && this.#y());
		}
	};
function st(e, t) {
	return (
		Q(t.enabled, e) !== !1 &&
		e.state.data === void 0 &&
		(e.state.status !== `error` || Q(t.retryOnMount, e) !== !1)
	);
}
function ct(e, t) {
	return st(e, t) || (e.state.data !== void 0 && lt(e, t, t.refetchOnMount));
}
function lt(e, t, n) {
	if (Q(t.enabled, e) !== !1 && Q(t.staleTime, e) !== `static`) {
		let r = Q(n, e);
		return r === `always` || (r !== !1 && dt(e, t));
	}
	return !1;
}
function ut(e, t, n, r) {
	return (
		(e !== t || Q(r.enabled, e) === !1) &&
		(!n.suspense || e.state.status !== `error`) &&
		dt(e, n)
	);
}
function dt(e, t) {
	return Q(t.enabled, e) !== !1 && e.isStaleByTime(Q(t.staleTime, e));
}
var ft = class extends ot {
	constructor(e, t) {
		super(e, t);
	}
	bindMethods() {
		(super.bindMethods(),
			(this.fetchNextPage = this.fetchNextPage.bind(this)),
			(this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
	}
	setOptions(e) {
		((e._type = `infinite`), super.setOptions(e));
	}
	getOptimisticResult(e) {
		return ((e._type = `infinite`), super.getOptimisticResult(e));
	}
	fetchNextPage(e) {
		return this.fetch({ ...e, meta: { fetchMore: { direction: `forward` } } });
	}
	fetchPreviousPage(e) {
		return this.fetch({ ...e, meta: { fetchMore: { direction: `backward` } } });
	}
	createResult(e, t) {
		let { state: n } = e,
			r = super.createResult(e, t),
			{ isFetching: i, isRefetching: a, isError: o, isRefetchError: s } = r,
			c = n.fetchMeta?.fetchMore?.direction,
			l = o && c === `forward`,
			u = i && c === `forward`,
			d = o && c === `backward`,
			f = i && c === `backward`;
		return {
			...r,
			fetchNextPage: this.fetchNextPage,
			fetchPreviousPage: this.fetchPreviousPage,
			hasNextPage: ge(t, n.data),
			hasPreviousPage: be(t, n.data),
			isFetchNextPageError: l,
			isFetchingNextPage: u,
			isFetchPreviousPageError: d,
			isFetchingPreviousPage: f,
			isRefetchError: s && !l && !d,
			isRefetching: a && !u && !f
		};
	}
};
function pt() {
	return xe();
}
function mt(e) {
	return e || he();
}
function ht(e) {
	let t = Array.isArray(e) ? [] : {},
		n = new Ee(),
		r = T(0),
		i = () => u(r),
		a = new Proxy(t, {
			get(e, t, r) {
				return (
					(n.has(t) || !(t in e) || (Array.isArray(e) && t === `length`)) && i(),
					Reflect.get(e, t, r)
				);
			},
			set(e, t, r, i) {
				if ((n.delete(t), t in e)) return Reflect.set(e, t, r, i);
				let a = T(r);
				return (
					Object.defineProperty(e, t, {
						configurable: !0,
						enumerable: !0,
						get: () => (u(a) && vt(u(a)) ? u(a)() : u(a)),
						set: (e) => {
							B(a, e);
						}
					}),
					!0
				);
			},
			has: (e, t) => !n.has(t) && t in e,
			ownKeys(e) {
				return Reflect.ownKeys(e).filter((e) => !n.has(e));
			},
			getOwnPropertyDescriptor(e, t) {
				if (!n.has(t)) return Reflect.getOwnPropertyDescriptor(e, t);
			},
			deleteProperty(e, t) {
				return t in e && ((e[t] = void 0), n.add(t), Array.isArray(e) && e.length--, !0);
			}
		});
	function o(e) {
		let t = Object.keys(a),
			n = Object.keys(e),
			i = t.filter((e) => !n.includes(e));
		Array.isArray(e) && i.sort((e, t) => Number(t) - Number(e));
		let o = n.some((e) => !t.includes(e));
		for (let e of i) delete a[e];
		for (let t of n) a[t] = _t(() => e[t]);
		(o || i.length > 0) && F(r);
	}
	return (o(e), [a, o]);
}
var gt = Symbol(`LazyValue`);
function _t(e) {
	return ((e[gt] = !0), e);
}
function vt(e) {
	return !!e[gt];
}
function yt(e, t) {
	switch (e) {
		case `post`:
			C(t);
			break;
		case `pre`:
			z(t);
	}
}
var bt = (e, t, n) => {
	let r = !1,
		i = Array.isArray(e) ? [] : void 0;
	yt(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!r) {
			((r = !0), (i = t));
			return;
		}
		let a = _(() => n(t, i));
		return ((i = t), a);
	});
};
function xt(e, t, n) {
	let r = M(() => mt(n?.())),
		i = pt(),
		a = M(() => {
			let t = u(r).defaultQueryOptions(e());
			return ((t._optimisticResults = i.current ? `isRestoring` : `optimistic`), t);
		}),
		o = T(S(new t(u(r), u(a))));
	bt(
		() => u(r),
		`pre`,
		() => {
			B(o, new t(u(r), u(a)), !0);
		}
	);
	function s() {
		let e = u(o).getOptimisticResult(u(a));
		return u(a).notifyOnChangeProps ? e : u(o).trackResult(e);
	}
	let [c, l] = ht(s());
	return (
		C(() => {
			let e = i.current ? () => void 0 : u(o).subscribe(() => l(s()));
			return (u(o).updateResult(), e);
		}),
		bt(
			() => u(a),
			`pre`,
			() => {
				u(o).setOptions(u(a));
			}
		),
		bt(
			() => [u(a), u(o)],
			`pre`,
			() => {
				l(s());
			}
		),
		c
	);
}
function St(e, t) {
	return xt(e, ft, t);
}
var Ct = 100,
	wt = 1e5;
function Tt(e, t) {
	let n = Re(t, (e) => e.name);
	return [...new Set(e.map((e) => ke(n, e)?.id ?? -1))];
}
function Et(e, t) {
	return { rows: e.slice(0, t), hasMore: e.length > t };
}
function Dt(e, t, n = 240) {
	let r = (e ?? ``).replace(/\s+/g, ` `).trim(),
		i = r.toLowerCase().indexOf(t.toLowerCase());
	if (i < 0) return Le(r, n);
	let a = Math.min(60, Math.max(0, Math.floor((n - t.length) / 2))),
		o = Math.max(0, i - a),
		s = r.indexOf(` `, o),
		c = o > 0 && s >= 0 && s < i ? s + 1 : o;
	return `${c > 0 ? `…` : ``}${Le(r.slice(c), n)}`;
}
function Ot(e, t, n) {
	return Number.isFinite(e) ? Math.min(n, Math.max(t, Math.trunc(e))) : t;
}
function kt(e, t, n) {
	let r = n.toLowerCase();
	return e.title.toLowerCase().includes(r) || (t[e.id] ?? ``).toLowerCase().includes(r);
}
function At(e, t) {
	if (t.length === 0) return !0;
	let n = new Set(e.map((e) => e.id));
	return t.every((e) => n.has(e));
}
function jt(e, t, n, { limit: r = 5, offset: i = 0 } = {}) {
	let { heroIds: a, itemIds: o, q: s, majorOnly: c } = n;
	if (s && !t) throw Error(`queryFeed needs the text tier when a search query is set`);
	let l = Ot(r, 1, Ct),
		u = Ot(i, 0, wt);
	return Et(
		e.rows
			.filter(
				(e) =>
					(!s || kt(e, t ?? {}, s)) &&
					(!c || e.majorUpdate) &&
					At(e.heroes, a) &&
					At(e.items, o)
			)
			.slice(u, u + l + 1),
		l
	);
}
function Mt(e, t) {
	return e.alt < t.alt ? -1 : +(e.alt > t.alt);
}
function Nt(e, t) {
	let n = [];
	for (let r of e.heroes) {
		let e = t.heroes.get(r.id);
		e &&
			n.push({
				id: e.id,
				src: e.src,
				alt: e.name,
				slug: e.slug,
				heroType: e.heroType,
				changeCount: r.changeCount,
				type: `hero`
			});
	}
	let r = [];
	for (let n of e.items) {
		let e = t.items.get(n.id);
		e &&
			r.push({
				id: e.id,
				src: e.src,
				alt: e.name,
				slug: e.slug,
				changeCount: n.changeCount,
				type: `item`,
				itemCategory: e.itemCategory
			});
	}
	return { heroes: n.sort(Mt), items: r.sort(Mt) };
}
function Pt(e) {
	return {
		heroes: new Map(e.heroes.map((e) => [e.id, e])),
		items: new Map(e.items.map((e) => [e.id, e]))
	};
}
function Ft(e, t, n) {
	return e[`${t.id}:${n.type}:${n.id}`] ?? [];
}
function It(
	e,
	t,
	n,
	{ heroIds: r = [], itemIds: i = [], q: a = ``, isFirstPage: o = !1 } = {}
) {
	let { text: s, groups: c } = n;
	if (r.length + i.length > 0 && !c)
		throw Error(`assembleSummaries needs the groups tier when entities are selected`);
	let l = Pt(t),
		u = (e) => (e.type === `hero` ? r : i).includes(e.id),
		d = r.length + i.length > 0 || a !== ``,
		f = o && !d;
	return e.map((e, t) => {
		let n = Nt(e, l),
			r = f && t === 0 ? 14 : 6,
			i = 6,
			o = [...n.heroes, ...n.items].filter(u).map((t) => {
				let n = Ft(c ?? {}, e, t)
					.flatMap((e) => e.bullets.map((t) => ({ ability: e.ability, text: t })))
					.slice(0, Math.min(3, i))
					.map((e) => ({ ...e, text: Le(e.text, 320) }));
				return (
					(i -= n.length),
					{
						id: t.id,
						type: t.type,
						name: t.alt,
						slug: t.slug,
						changeCount: t.changeCount,
						changes: n
					}
				);
			});
		return {
			id: e.id,
			slug: e.slug,
			title: e.title,
			date: e.date,
			author: e.author,
			authorImage: e.authorImage,
			previewImage: e.previewImage,
			majorUpdate: e.majorUpdate,
			summary: a ? Dt(s?.[e.id] ?? ``, a) : o.length ? `` : e.summary,
			icons: {
				heroes: d ? [] : n.heroes.slice(0, r),
				items: d ? [] : n.items.slice(0, r)
			},
			counts: { heroes: n.heroes.length, items: n.items.length },
			matches: o
		};
	});
}
var Lt = null,
	Rt = null,
	zt = null;
async function Bt(e, t) {
	let n = await fetch(e, { signal: t });
	if (!n.ok) throw Error(`Failed to load ${e}: ${n.status} ${n.statusText}`);
	return await n.json();
}
function Vt() {
	return (
		(Lt ??= Bt(`/feed-index.json`).catch((e) => {
			throw ((Lt = null), e);
		})),
		Lt
	);
}
function Ht() {
	return (
		(Rt ??= Bt(`/feed-text.json`).catch((e) => {
			throw ((Rt = null), e);
		})),
		Rt
	);
}
function Ut() {
	return (
		(zt ??= Bt(`/feed-groups.json`).catch((e) => {
			throw ((zt = null), e);
		})),
		zt
	);
}
function Wt(e, t) {
	return Bt(`/feed-page/${e}.json`, t);
}
var Gt = 12;
function Kt(e) {
	return e === 0 ? { limit: 15, offset: 0 } : { limit: Gt, offset: 15 + (e - 1) * Gt };
}
function qt(e) {
	return G(e).size === 0;
}
function Jt(e) {
	return St(() => {
		let t = e.getSeed(),
			n = q.filters;
		return {
			queryKey: Oe(n),
			initialData: qt(n)
				? {
						pages: [
							{ changelogs: t.changelogs, hasMore: t.totalCount > t.changelogs.length }
						],
						pageParams: [0]
					}
				: void 0,
			queryFn: async ({ pageParam: e, signal: t }) => {
				if (qt(n)) return Wt(e, t);
				let { limit: r, offset: i } = Kt(e),
					a = n.hero.length + n.item.length > 0,
					[o, s, c] = await Promise.all([Vt(), n.q ? Ht() : null, a ? Ut() : null]);
				if (t.aborted) throw new DOMException(`Aborted`, `AbortError`);
				let l = Tt(n.hero, o.heroes),
					u = Tt(n.item, o.items),
					d = jt(
						o,
						s,
						{ heroIds: l, itemIds: u, q: n.q, majorOnly: n.major },
						{ limit: r, offset: i }
					);
				return {
					changelogs: It(
						d.rows,
						o,
						{ text: s, groups: c },
						{ heroIds: l, itemIds: u, q: n.q, isFirstPage: i === 0 }
					),
					hasMore: d.hasMore
				};
			},
			getNextPageParam: (e, t, n) => (e.hasMore ? n + 1 : void 0),
			initialPageParam: 0
		};
	});
}
var Yt = new Set([`$$slots`, `$$events`, `$$legacy`]);
function Xt(e, t) {
	let n = N(t, Yt),
		r = {
			name: `face-slightly-frowning`,
			size: 24,
			node: [
				[`path`, { d: `M15 10V9` }],
				[`path`, { d: `M9 10V9` }],
				[`path`, { d: `M9 16a5 5 0 016 0` }],
				[`circle`, { cx: `12`, cy: `12`, r: `10` }]
			],
			aliases: [`frown`]
		};
	W(
		e,
		L(() => n, {
			get icon() {
				return r;
			}
		})
	);
}
var Zt = (n, r = t, i = t) => {
		var a = $t(),
			o = O(a),
			s = P(o, !0),
			c = R(o, 2);
		(f(a),
			e(() => k(s, r())),
			h(`click`, c, function (...e) {
				i()?.apply(this, e);
			}),
			p(n, a));
	},
	Qt = (e) => {
		var t = en();
		p(e, t);
	},
	$t = l(
		`<div flex="~ col" items="center" gap="3" text="center" role="alert"><p text="destructive sm" font="medium"> </p> <button type="button" border="destructive/30 ~" text="destructive xs" p="x-5 y-2" font="mono semibold" class="hover:bg-destructive/10">Retry</button></div>`
	),
	en = l(
		`<div flex="~ col" items="center" gap="3" role="status"><div border="primary/30 2 t-transparent" rounded="full" class="size-10 animate-spin"></div> <span text="muted-foreground xs" font="mono" uppercase="" class="tracking-wider">Loading...</span></div>`
	),
	tn = l(
		`<p flex="~" text="muted-foreground" m="t-3" items="center" gap="2" kicker-sm=""><span text="primary" font="bold"> </span> <a href="/archive" class="underline-offset-4 hover:text-signal hover:underline"> </a></p>`
	),
	nn = l(
		`<div aria-hidden="true" class="filter-progress fixed inset-x-0 top-0 z-60 h-0.5 overflow-hidden svelte-h2pzr3"></div>`
	),
	rn = l(
		`<span class="mt-1 block normal-case">Latest matching patch: <time> </time></span>`
	),
	an = l(
		`<p text="muted-foreground xs" m="b-4" font="mono" uppercase="" class="tracking-wider" role="status" aria-live="polite"> <!> <!></p>`
	),
	on = l(
		`<p flex="~" text="muted-foreground xs" m="b-4" items="center" gap="2" font="mono" class="tracking-wider uppercase"><span text="primary" font="bold"> </span> <span> </span></p>`
	),
	sn = l(
		`<div flex="~" role="presentation" aria-hidden="true" m="y-1 b-4" items="center" gap="4" class="col-span-full"><div bg="signal/35" h="px" flex="1"></div> <span text="muted-foreground" kicker-sm="">Seen before</span> <div bg="primary/30" h="px" flex="1"></div></div>`
	),
	cn = l(`<!> <div data-patch-card="" h="full"><!></div>`, 1),
	ln = l(`<!> <!> <!> <div data-patch-grid="" gap="4"></div>`, 1),
	un = l(`Nothing matches <span text="foreground" font="mono"> </span> `, 1),
	dn = l(
		`<p text="muted-foreground" m="x-auto b-8" class="max-w-md"><!></p> <button type="button" border="primary/30 ~" bg="primary/10" text="primary sm" p="x-6 y-3" font="mono semibold" class="ui-focus-ring min-h-11 rounded-md transition-all hover:bg-primary/20 active:scale-[0.97]">Clear Filters</button>`,
		1
	),
	fn = l(
		`<p text="muted-foreground" m="x-auto" class="max-w-md">The log has no entries yet.</p>`
	),
	pn = l(
		`<div border="border/50 2" bg="card" relative="" p="12" text="center" class="clip-corner overflow-hidden" role="status"><!> <div flex="~" border="border ~" bg="muted/30" m="x-auto b-6" items="center" justify="center" class="clip-corner-sm size-20"><!></div> <p text="muted-foreground xs" m="b-2" font="mono" uppercase="" class="tracking-wide">No Results</p> <h2 font="display medium" text="foreground 2xl" m="b-3" class="tracking-wide">No changes found</h2> <!></div>`
	),
	mn = l(`<div data-load-more-sentinel="" h="px" w="full" aria-hidden="true"></div>`),
	hn = l(
		`<div flex="~" items="center" gap="4"><div bg="primary/30" h="px" w="16"></div> <p text="muted-foreground xs" font="mono" uppercase="" class="tracking-wider">End of Log</p> <div bg="primary/30" h="px" w="16"></div></div>`
	),
	gn = l(
		`<div flex="~ col" items="center" gap="4" p="y-12" aria-live="polite"><!></div>`
	),
	_n = l(`<!> <!>`, 1),
	vn = l(`<div p="y-16"><!></div>`),
	yn = l(`<div p="y-16" class="js-only"><!></div> <noscript></noscript>`, 1),
	bn = l(
		`<main container="" m="x-auto t-8 b-24" p="x-4"><header m="b-5" class="max-w-3xl"><h1 font="display medium" text="foreground 3xl" class="heading-glow tracking-wide sm:text-4xl"> </h1> <p text="muted-foreground sm" m="t-2" class="max-w-2xl leading-relaxed"> </p> <!></header> <div class="js-only mb-5 flex flex-wrap items-start gap-x-4 gap-y-2"><details><summary class="ui-focus-ring text-muted-foreground cursor-pointer rounded-sm py-3 text-sm">Quick hero filters</summary> <!></details> <button type="button" class="ui-focus-ring border-border text-muted-foreground min-h-11 rounded-md border px-3 text-xs font-medium transition-colors idle-hover:border-primary/40 idle-hover:text-foreground selected:border-primary/60 selected:bg-primary/15 selected:text-primary">Major updates only</button></div> <!> <p aria-live="polite" class="sr-only"> </p> <!></main>`
	);
function xn(t, n) {
	H(n, !0);
	let r = M(() => ne.data.changelogs ?? []),
		i = M(() => ne.data.totalCount ?? 0),
		s = M(() => q.filters),
		l = Jt({ getSeed: () => ({ changelogs: u(r), totalCount: u(i) }) }),
		d = M(() => q.activeFilterCount),
		m = M(() => q.isSearching),
		g = M(() => (l.data?.pages ?? []).flatMap((e) => e.changelogs)),
		_ = M(() => q.isPending),
		v = `deadlog:lastVisited`,
		y = T(null),
		S = !1;
	function C() {
		S || ((S = !0), localStorage.setItem(v, String(Date.now())));
	}
	ee(() => {
		let e = localStorage.getItem(v);
		B(y, e ? Number(e) : null, !0);
		let t = setTimeout(C, 1e4);
		return () => clearTimeout(t);
	});
	let w = (e) => u(y) !== null && new Date(e.date).getTime() > u(y),
		D = M(() => u(g).slice(+!u(m))),
		N = M(() => (u(y) === null || u(m) ? 0 : u(D).filter(w).length)),
		F = M(() => (u(y) === null || u(m) ? -1 : u(D).findIndex((e) => !w(e))));
	function z(e) {
		let t = new IntersectionObserver(
			([e]) => {
				e?.isIntersecting && l.fetchNextPage({ cancelRefetch: !1 });
			},
			{ rootMargin: `0px 0px 200px 0px` }
		);
		return (t.observe(e), () => t.disconnect());
	}
	var V = bn();
	c(`pagehide`, I, C);
	var W = O(V),
		G = O(W),
		re = P(G, !0),
		ie = R(G, 2),
		ae = P(ie, !0),
		oe = R(ie, 2),
		se = (t) => {
			var n = tn(),
				r = O(n),
				a = P(r, !0),
				o = R(r, 2),
				s = P(o);
			(f(n),
				e(
					(e) => {
						(k(a, u(i)), k(s, `${e ?? ``} in the archive`));
					},
					[() => $(u(i), `patch`, `patches`)]
				),
				p(t, n));
		};
	(A(oe, (e) => {
		u(i) > 0 && e(se);
	}),
		f(W));
	var K = R(W, 2),
		ce = O(K),
		J = R(O(ce), 2);
	(pe(J, {}), f(ce));
	var Y = R(ce, 2);
	f(K);
	var X = R(K, 2),
		le = (e) => {
			var t = nn();
			p(e, t);
		};
	A(X, (e) => {
		u(_) && e(le);
	});
	var ue = R(X, 2),
		de = P(ue, !0),
		fe = R(ue, 2),
		Z = (t) => {
			var n = _n(),
				r = b(n),
				i = (t) => {
					var n = ln(),
						r = b(n),
						i = (t) => {
							var n = an(),
								r = O(n),
								i = R(r),
								a = (t) => {
									var n = U();
									(e(() => k(n, `· all ${u(d) ?? ``} filters`)), p(t, n));
								};
							A(i, (e) => {
								u(d) > 1 && e(a);
							});
							var o = R(i, 2),
								s = (t) => {
									var n = rn(),
										r = R(O(n)),
										i = P(r, !0);
									(f(n),
										e(
											(e) => {
												(j(r, `datetime`, u(g)[0].date), k(i, e));
											},
											[() => Ae(u(g)[0].date)]
										),
										p(t, n));
								};
							(A(o, (e) => {
								u(m) && u(g)[0] && e(s);
							}),
								f(n),
								e(
									(e) =>
										k(
											r,
											`${u(g).length ?? ``}${l.hasNextPage ? `+` : ``} matching
					${e ?? ``} `
										),
									[() => (l.hasNextPage ? `patches` : $(u(g).length, `patch`, `patches`))]
								),
								p(t, n));
						};
					A(r, (e) => {
						u(d) > 0 && e(i);
					});
					var a = R(r, 2),
						s = (e) => {
							Fn(
								e,
								L(() => u(g)[0])
							);
						};
					A(a, (e) => {
						u(m) || e(s);
					});
					var c = R(a, 2),
						h = (t) => {
							var n = on(),
								r = O(n),
								i = P(r, !0),
								a = R(r, 2),
								o = P(a);
							(f(n),
								e(
									(e) => {
										(k(i, u(N)), k(o, `new ${e ?? ``} since your last visit`));
									},
									[() => $(u(N), `patch`, `patches`)]
								),
								p(t, n));
						};
					A(c, (e) => {
						u(N) > 0 && e(h);
					});
					var v = R(c, 2);
					(o(
						v,
						23,
						() => u(D),
						(e) => e.id,
						(e, t, n) => {
							var r = cn(),
								i = b(r),
								a = (e) => {
									var t = sn();
									p(e, t);
								};
							A(i, (e) => {
								u(n) === u(F) && u(F) > 0 && e(a);
							});
							var o = R(i, 2),
								s = O(o);
							{
								let e = M(() => w(u(t)));
								mr(
									s,
									L(() => u(t), {
										get isNew() {
											return u(e);
										}
									})
								);
							}
							(f(o), p(e, r));
						}
					),
						f(v),
						e(() => {
							(j(v, `aria-busy`, u(_)),
								E(
									v,
									1,
									`grid grid-cols-1 transition-opacity duration-200 ${u(m) ? `max-w-3xl` : `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`} ${u(_) ? `pointer-events-none opacity-60` : ``}`
								));
						}),
						p(t, n));
				},
				a = (t) => {
					var n = pn(),
						r = O(n);
					Ve(r, { tlSize: `2rem`, tlColor: `bg-muted-foreground/30` });
					var i = R(r, 2);
					(Xt(O(i), { class: `text-muted-foreground size-10` }), f(i));
					var a = R(i, 6),
						o = (t) => {
							var n = dn(),
								r = b(n),
								i = O(r),
								a = (t) => {
									var n = un(),
										r = R(b(n)),
										i = P(r),
										a = R(r);
									(e(
										(e) => {
											(k(i, `“${u(s).q ?? ``}”`), k(a, `${e ?? ``}.`));
										},
										[
											() =>
												u(d) > 1
													? ` and your other ${u(d) - 1} ${$(u(d) - 1, `filter`)}`
													: ``
										]
									),
										p(t, n));
								},
								o = (t) => {
									var n = U();
									(e(() =>
										k(
											n,
											`No changelog entries match your
							${u(d) === 1 ? `filter` : `${u(d)} filters`}.`
										)
									),
										p(t, n));
								};
							(A(i, (e) => {
								u(s).q ? e(a) : e(o, -1);
							}),
								f(r));
							var c = R(r, 2);
							(h(`click`, c, () => q.reset()), p(t, n));
						},
						c = (e) => {
							var t = fn();
							p(e, t);
						};
					(A(a, (e) => {
						u(d) > 0 ? e(o) : e(c, -1);
					}),
						f(n),
						p(t, n));
				};
			A(r, (e) => {
				u(g).length > 0 ? e(i) : e(a, -1);
			});
			var c = R(r, 2),
				v = (t) => {
					var n = gn(),
						r = O(n),
						i = (e) => {
							Zt(
								e,
								() => `Failed to load more patches.`,
								() => () => l.fetchNextPage()
							);
						},
						a = (e) => {
							Qt(e);
						},
						o = (e) => {
							var t = mn();
							(te(t, () => z), p(e, t));
						},
						s = (e) => {
							var t = hn();
							p(e, t);
						};
					(A(r, (e) => {
						l.isFetchNextPageError
							? e(i)
							: l.isFetchingNextPage
								? e(a, 1)
								: l.hasNextPage
									? e(o, 2)
									: e(s, -1);
					}),
						f(n),
						e(() => j(n, `aria-busy`, l.isFetchingNextPage)),
						p(t, n));
				};
			(A(c, (e) => {
				u(g).length > 0 && e(v);
			}),
				p(t, n));
		},
		me = (e) => {
			var t = vn();
			(Zt(
				O(t),
				() => `Failed to load patches.`,
				() => () => l.refetch()
			),
				f(t),
				p(e, t));
		},
		he = (e) => {
			var t = yn(),
				n = b(t);
			(Qt(O(n)), f(n), a(2), p(e, t));
		};
	(A(fe, (e) => {
		l.data ? e(Z) : l.isError ? e(me, 1) : e(he, -1);
	}),
		f(V),
		e(() => {
			(k(re, u(m) ? `Matching patch notes` : `Deadlock Patch Notes & Changelog`),
				k(
					ae,
					u(m)
						? `Changes for your selected heroes, items, and keywords.`
						: `Every gameplay update, hero adjustment, and item balance change.`
				),
				j(Y, `aria-pressed`, q.major),
				k(de, u(_) ? `Updating patches…` : ``));
		}),
		h(`click`, Y, () => q.update({ major: !q.major })),
		p(t, V),
		x());
}
n([`click`]);
var Sn = { searching: !1, changeCount: null, label: null, tone: Z.hero.text };
function Cn(e) {
	if (!q.isSearching) return Sn;
	let t = e.matches,
		n = t.filter((e) => e.changeCount != null),
		r = n.length ? n.reduce((e, t) => e + (t.changeCount ?? 0), 0) : null;
	return {
		searching: !0,
		changeCount: r,
		label:
			r === null
				? null
				: t.length === 1
					? `${t[0].name} ${$(r, `change`)}`
					: `matched ${$(r, `change`)}`,
		tone: t.every((e) => e.type === `item`) ? Z.item.text : Z.hero.text
	};
}
function wn(e) {
	let t = q.toURLSearchParams(),
		n = t.toString(),
		r = `${ze(e)}${n ? `?${n}` : ``}`;
	return {
		href: r,
		entityHref: (n) => {
			let i = `#${Ne(n.alt)}`,
				a = n.type,
				o = a === `hero` ? q.hero : q.item;
			if (q.hero.length + q.item.length === 0) return `${r}${i}`;
			let s = new URLSearchParams(t);
			if (!oe(o, n.alt)) {
				let e = o.slice(0, 19);
				s.set(a, [...e, n.alt].join(`,`));
			}
			return `${ze(e)}?${s.toString()}${i}`;
		}
	};
}
function Tn(e, t = !1) {
	let { heroes: n, items: r } = e.icons,
		i = [
			{
				type: `heroes`,
				label: `Heroes`,
				tone: Z.hero.text,
				list: n,
				extra: Math.max(0, e.counts.heroes - n.length)
			},
			{
				type: `items`,
				label: `Items`,
				tone: Z.item.text,
				list: r,
				extra: Math.max(0, e.counts.items - r.length)
			}
		].filter((e) => e.list.length > 0),
		a = [
			{
				n: e.counts.heroes,
				noun: $(e.counts.heroes, `hero`, `heroes`),
				tone: Z.hero.text
			},
			{ n: e.counts.items, noun: $(e.counts.items, `item`), tone: Z.item.text }
		].filter((e) => e.n > 0),
		o = a.map((e) => `${e.n} ${e.noun}`),
		{ named: s, date: c, heading: l } = je(e);
	return {
		rows: i,
		counts: a,
		totals: o.join(` · `),
		initials: rt(e.author),
		heading: l,
		date: c,
		named: s,
		accessibleLabel: `${t ? `Latest patch, ` : ``}${s ? `${e.title}, ${c}` : c}, by ${e.author}${o.length ? `, affecting ${o.join(` and `)}` : ``}. View full patch.`
	};
}
var En = new Set([`$$slots`, `$$events`, `$$legacy`]),
	Dn = l(`· <time> </time>`, 1),
	On = l(`<p class="text-foreground/90 mt-4 max-w-[72ch] text-sm leading-relaxed"> </p>`),
	kn = l(
		`<a class="ui-focus-outline relative z-10 flex size-11 items-center justify-center rounded-md hover:bg-signal/10"><img alt="" width="32" height="32" loading="lazy" decoding="async" class="border-subtle bg-background size-8 rounded border object-cover"/></a>`
	),
	An = l(`<span class="text-muted-foreground font-mono text-xs"> </span>`),
	jn = l(
		`<div class="flex items-center gap-3"><span> </span> <div class="flex flex-wrap gap-1.5"></div> <!></div>`
	),
	Mn = l(`<div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2"></div>`),
	Nn = l(
		`<div class="relative h-40 shrink-0 md:h-auto md:w-64"><img data-patch-preview="" alt="" width="640" height="360" decoding="async" fetchpriority="high" class="absolute inset-0 size-full object-cover"/></div>`
	),
	Pn = l(
		`<div class="mb-7"><article class="clip-corner-lg card-glow border-primary/40 bg-card group relative overflow-hidden border md:flex"><!> <div class="min-w-0 flex-1 p-5 sm:p-6"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><h2 class="font-display text-foreground group-hover:text-primary text-3xl leading-tight font-medium tracking-wide transition-colors sm:text-4xl"><a class="stretched-link"> </a></h2> <span class="bg-primary/10 text-primary rounded-sm px-2 py-1 font-mono text-xs">Latest Patch</span></div> <p class="text-muted-foreground mt-2 text-xs"> <!></p> <!> <!> <div class="border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3"><span class="text-muted-foreground text-xs"> </span> <span class="text-signal inline-flex items-center gap-2 text-sm">View full patch <!></span></div></div> <!></article> <p class="text-muted-foreground mt-6 text-sm">Previous patches</p></div>`
	);
function Fn(t, n) {
	H(n, !0);
	let r = N(n, En),
		i = M(() => Tn(r, !0)),
		s = M(() => wn(r));
	var c = Pn(),
		l = O(c),
		d = O(l);
	Ve(d, {
		tlSize: `2rem`,
		brSize: `1.5rem`,
		tlColor: `bg-primary`,
		brColor: `bg-signal/60`
	});
	var m = R(d, 2),
		h = O(m),
		g = O(h),
		_ = O(g),
		v = P(_, !0);
	(f(g), a(2), f(h));
	var y = R(h, 2),
		S = O(y),
		C = R(S),
		w = (t) => {
			var r = Dn(),
				a = R(b(r)),
				o = P(a, !0);
			(e(() => {
				(j(a, `datetime`, n.date), k(o, u(i).date));
			}),
				p(t, r));
		};
	(A(C, (e) => {
		u(i).named && e(w);
	}),
		f(y));
	var T = R(y, 2),
		D = (t) => {
			var r = On(),
				i = P(r, !0);
			(e(() => k(i, n.summary)), p(t, r));
		};
	A(T, (e) => {
		n.summary && e(D);
	});
	var F = R(T, 2),
		ee = (t) => {
			var n = Mn();
			(o(
				n,
				21,
				() => u(i).rows,
				(e) => e.type,
				(t, n) => {
					var r = jn(),
						i = O(r),
						a = P(i, !0),
						c = R(i, 2);
					(o(
						c,
						21,
						() => u(n).list,
						(e) => e.id,
						(t, n) => {
							var r = kn(),
								i = P(r);
							(e(
								(e) => {
									(j(r, `href`, e),
										j(r, `aria-label`, `Jump to ${u(n).alt ?? ``} in this patch`),
										j(i, `src`, u(n).src));
								},
								[() => u(s).entityHref(u(n))]
							),
								p(t, r));
						}
					),
						f(c));
					var l = R(c, 2),
						d = (t) => {
							var r = An(),
								i = P(r);
							(e(() => k(i, `+${u(n).extra ?? ``}`)), p(t, r));
						};
					(A(l, (e) => {
						u(n).extra > 0 && e(d);
					}),
						f(r),
						e(() => {
							(E(i, 1, `w-12 shrink-0 text-xs ${u(n).tone ?? ``}`), k(a, u(n).label));
						}),
						p(t, r));
				}
			),
				f(n),
				p(t, n));
		};
	A(F, (e) => {
		u(i).rows.length && e(ee);
	});
	var I = R(F, 2),
		L = O(I),
		z = P(L, !0),
		B = R(L, 2),
		V = R(O(B));
	(Be(V, { class: `size-4` }), f(B), f(I), f(m));
	var te = R(m, 2),
		U = (t) => {
			var r = Nn(),
				i = P(r);
			(e(() => j(i, `src`, n.previewImage)), p(t, r));
		};
	(A(te, (e) => {
		n.previewImage && e(U);
	}),
		f(l),
		a(2),
		f(c),
		e(() => {
			(j(_, `href`, u(s).href),
				j(_, `aria-label`, u(i).accessibleLabel),
				k(v, u(i).heading),
				k(S, `By ${n.author ?? ``}`),
				k(z, u(i).totals));
		}),
		p(t, c),
		x());
}
var In = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `loadingStatus`, `class`]);
function Ln(e, t) {
	H(t, !0);
	let n = y(t, `ref`, 15, null),
		i = y(t, `loadingStatus`, 15, `loading`),
		a = N(t, In);
	var o = s(),
		c = b(o);
	{
		let e = M(() => t.class ?? ``);
		r(
			c,
			() => Ye,
			(t, r) => {
				r(
					t,
					L(
						{
							'data-slot': `avatar`,
							get class() {
								return `relative flex shrink-0 overflow-hidden rounded-full ${u(e) ?? ``}`;
							}
						},
						() => a,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							},
							get loadingStatus() {
								return i();
							},
							set loadingStatus(e) {
								i(e);
							}
						}
					)
				);
			}
		);
	}
	(p(e, o), x());
}
var Rn = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function zn(e, t) {
	H(t, !0);
	let n = y(t, `ref`, 15, null),
		i = N(t, Rn);
	var a = s(),
		o = b(a);
	{
		let e = M(() => t.class ?? ``);
		r(
			o,
			() => Qe,
			(t, r) => {
				r(
					t,
					L(
						{
							'data-slot': `avatar-image`,
							get class() {
								return `aspect-square size-full ${u(e) ?? ``}`;
							}
						},
						() => i,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(p(e, a), x());
}
var Bn = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);
function Vn(e, t) {
	H(t, !0);
	let n = y(t, `ref`, 15, null),
		i = N(t, Bn);
	var a = s(),
		o = b(a);
	{
		let e = M(() => t.class ?? ``);
		r(
			o,
			() => tt,
			(t, r) => {
				r(
					t,
					L(
						{
							'data-slot': `avatar-fallback`,
							get class() {
								return `flex size-full items-center justify-center rounded-full bg-muted ${u(e) ?? ``}`;
							}
						},
						() => i,
						{
							get ref() {
								return n();
							},
							set ref(e) {
								n(e);
							}
						}
					)
				);
			}
		);
	}
	(p(e, a), x());
}
var Hn = null;
function Un(e, t) {
	if (!t) return [e];
	if (Hn?.query !== t) {
		let e = t.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
		Hn = { query: t, pattern: RegExp(`(${e})`, `gi`) };
	}
	return e.split(Hn.pattern);
}
var Wn = l(`<mark class="bg-primary/15 text-primary rounded-sm px-0.5"> </mark>`);
function Gn(t, n) {
	H(n, !0);
	let r = y(n, `query`, 3, ``),
		a = M(() => Un(n.text, r()));
	var c = s(),
		l = b(c);
	(o(
		l,
		17,
		() => u(a),
		i,
		(t, n, i) => {
			var a = s(),
				o = b(a),
				c = (t) => {
					var r = Wn(),
						i = P(r, !0);
					(e(() => k(i, u(n))), p(t, r));
				},
				l = (t) => {
					var r = U();
					(e(() => k(r, u(n))), p(t, r));
				};
			(A(o, (e) => {
				r() && i % 2 == 1 ? e(c) : e(l, -1);
			}),
				p(t, a));
		}
	),
		p(t, c),
		x());
}
var Kn = new Set([`$$slots`, `$$events`, `$$legacy`, `isNew`]),
	qn = l(
		`<span bg="primary" text="primary-foreground" absolute="" z="20" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm top-2 right-2">New</span>`
	),
	Jn = l(
		`<img data-patch-preview="" alt="" width="640" height="360" loading="lazy" decoding="async" class="size-full object-cover transition-transform duration-500 group-hover:scale-105"/> <div absolute="" bg="gradient-to-b" class="from-card/0 via-card/10 to-card/55 pointer-events-none inset-0" aria-hidden="true"></div>`,
		1
	),
	Yn = l(
		`<div border="border/70 b" relative="" h="28" shrink="0" class="overflow-hidden"><!></div>`
	),
	Xn = l(
		`<span border="primary/40 ~" bg="primary/15" text="primary" m="l-auto" shrink="0" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm">Major</span>`
	),
	Zn = l(`<!> <!>`, 1),
	Qn = l(`<span aria-hidden="true">&middot;</span> <time> </time>`, 1),
	$n = l(`<span class="text-foreground font-medium"> </span>`),
	er = l(`<li><!> <!></li>`),
	tr = l(`<p class="text-muted-foreground mt-2 text-xs"> </p>`),
	nr = l(`<ul class="max-w-[72ch] space-y-2 text-sm leading-relaxed"></ul> <!>`, 1),
	rr = l(`<p class="text-muted-foreground text-sm"> </p>`),
	ir = l(
		`<section><div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 class="text-sm font-semibold"> </h3> <a class="ui-focus-ring text-signal relative z-10 inline-flex min-h-11 items-center gap-1 rounded-sm text-xs underline-offset-4 hover:underline">Full history <!></a></div> <!></section>`
	),
	ar = l(`<div class="space-y-4" data-matched-changes=""></div>`),
	or = l(`<p><!></p>`),
	sr = l(
		`<a relative="" z="10" rounded="md" class="group/icon ui-focus-outline flex size-11 items-center justify-center transition-all duration-200 sm:size-7 hover:z-20 hover:-translate-y-0.5 hover:scale-110"><img alt="" width="28" height="28" loading="lazy" decoding="async"/></a>`
	),
	cr = l(`<span> </span>`),
	lr = l(
		`<div class="flex flex-wrap items-center gap-1 sm:flex-nowrap sm:gap-0 sm:[&amp;>a+a]:-ml-1.5"><!> <!></div>`
	),
	ur = l(
		`<span flex="~" items="baseline" gap="1"><span> </span> <span text="foreground"> </span></span> <span text="muted-foreground" class="ml-auto hidden text-xs sm:inline"> </span>`,
		1
	),
	dr = l(
		`<span flex="~" items="baseline" gap="1"><span> </span> <span text="muted-foreground"> </span></span>`
	),
	fr = l(
		`<a class="ui-focus-ring text-signal ml-auto inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-sm text-xs">Full patch <!></a>`
	),
	pr = l(
		`<div><!> <!> <!> <div absolute="" bg="gradient-to-br" class="from-primary/0 group-hover:from-primary/5 pointer-events-none inset-0 to-transparent transition-all duration-200"></div> <div z="10" flex="~ 1 col" gap="3" p="4"><div><div flex="~" m="b-1.5" items="center" gap="2"><h2 text="foreground base" font="semibold" class="group-hover:text-primary line-clamp-2 min-w-0 tracking-tight transition-colors duration-300"><a> </a></h2> <!></div> <div flex="~" text="muted-foreground xs" items="center" gap="2"><!> <span truncate=""> </span> <!></div></div> <!> <!> <!> <div flex="~" border="border/50 t" m="t-auto" items="center" gap="3" p="t-3" text="xs"><!> <!></div></div></div>`
	);
function mr(t, n) {
	H(n, !0);
	let c = y(n, `isNew`, 3, !1),
		l = N(n, Kn),
		d = M(() => Cn(l)),
		m = M(() => Tn(l)),
		h = M(() => wn(l)),
		g = M(() => !!n.majorUpdate);
	var _ = pr(),
		S = O(_);
	{
		let e = M(() => (u(g) ? `bg-primary` : `bg-signal/45`)),
			t = M(() => (u(g) ? `bg-primary/30` : `bg-signal/20`)),
			n = M(() => (u(g) ? `` : `group-hover:bg-signal`)),
			r = M(() => (u(g) ? `group-hover:bg-primary/60` : `group-hover:bg-signal/60`));
		Ve(S, {
			tlSize: `1.5rem`,
			brSize: `1rem`,
			get tlColor() {
				return u(e);
			},
			get brColor() {
				return u(t);
			},
			get tlHover() {
				return u(n);
			},
			get brHover() {
				return u(r);
			},
			thickness: `0.125rem`
		});
	}
	var C = R(S, 2),
		w = (e) => {
			var t = qn();
			p(e, t);
		};
	A(C, (e) => {
		c() && e(w);
	});
	var T = R(C, 2),
		D = (t) => {
			var r = Yn(),
				i = O(r),
				o = (t) => {
					var r = Jn(),
						i = b(r);
					(a(2), e(() => j(i, `src`, n.previewImage)), p(t, r));
				};
			(A(i, (e) => {
				n.previewImage && e(o);
			}),
				f(r),
				p(t, r));
		};
	A(T, (e) => {
		!u(d).searching && n.previewImage && e(D);
	});
	var F = R(T, 4),
		ee = O(F),
		I = O(ee),
		L = O(I),
		z = O(L),
		B = P(z, !0);
	f(L);
	var V = R(L, 2),
		te = (e) => {
			var t = Xn();
			p(e, t);
		};
	(A(V, (e) => {
		u(g) && e(te);
	}),
		f(I));
	var ne = R(I, 2),
		W = O(ne);
	r(
		W,
		() => Ln,
		(t, i) => {
			i(t, {
				class: `border-primary/20 group-hover:border-primary/50 size-6 border transition-all duration-300`,
				children: (t, i) => {
					var o = Zn(),
						s = b(o);
					r(
						s,
						() => zn,
						(e, t) => {
							t(e, {
								get src() {
									return n.authorImage;
								},
								alt: ``
							});
						}
					);
					var c = R(s, 2);
					(r(
						c,
						() => Vn,
						(t, n) => {
							n(t, {
								text: `muted-foreground`,
								font: `mono`,
								class: `text-[11px] tracking-wide`,
								children: (t, n) => {
									a();
									var r = U();
									(e(() => k(r, u(m).initials)), p(t, r));
								},
								$$slots: { default: !0 }
							});
						}
					),
						p(t, o));
				},
				$$slots: { default: !0 }
			});
		}
	);
	var G = R(W, 2),
		re = P(G, !0),
		ie = R(G, 2),
		ae = (t) => {
			var r = Qn(),
				i = R(b(r), 2),
				a = P(i, !0);
			(e(() => {
				(j(i, `datetime`, n.date), k(a, u(m).date));
			}),
				p(t, r));
		};
	(A(ie, (e) => {
		u(m).named && e(ae);
	}),
		f(ne),
		f(ee));
	var oe = R(ee, 2),
		se = (t) => {
			var r = ar();
			(o(
				r,
				21,
				() => n.matches,
				(e) => `${e.type}:${e.id}`,
				(t, n) => {
					var r = ir(),
						a = O(r),
						s = O(a),
						c = P(s, !0),
						l = R(s, 2),
						d = R(O(l));
					(Be(d, { class: `size-3.5` }), f(l), f(a));
					var m = R(a, 2),
						h = (t) => {
							var r = nr(),
								a = b(r);
							(o(
								a,
								21,
								() => u(n).changes,
								i,
								(t, n) => {
									var r = er(),
										i = O(r),
										a = (t) => {
											var r = $n(),
												i = P(r);
											(e(() => k(i, `${u(n).ability ?? ``}:`)), p(t, r));
										},
										o = M(
											() =>
												u(n).ability &&
												!u(n).text.toLowerCase().startsWith(u(n).ability.toLowerCase())
										);
									(A(i, (e) => {
										u(o) && e(a);
									}),
										Gn(R(i, 2), {
											get text() {
												return u(n).text;
											},
											get query() {
												return q.q;
											}
										}),
										f(r),
										p(t, r));
								}
							),
								f(a));
							var s = R(a, 2),
								c = (t) => {
									var r = tr(),
										i = P(r);
									(e(() =>
										k(
											i,
											`${u(n).changeCount - u(n).changes.length} more changes in the full patch`
										)
									),
										p(t, r));
								};
							(A(s, (e) => {
								u(n).changeCount !== null &&
									u(n).changeCount > u(n).changes.length &&
									e(c);
							}),
								p(t, r));
						},
						g = (t) => {
							var r = rr(),
								i = P(r, !0);
							(e(() =>
								k(
									i,
									u(n).changeCount === null
										? `Mentioned in this patch; see the full notes for context.`
										: `See the full patch for these changes.`
								)
							),
								p(t, r));
						};
					(A(m, (e) => {
						u(n).changes.length ? e(h) : e(g, -1);
					}),
						f(r),
						e(() => {
							(j(r, `aria-label`, `${u(n).name ?? ``} changes`),
								k(c, u(n).name),
								j(l, `href`, `/${u(n).type ?? ``}/${u(n).slug ?? ``}`),
								j(l, `aria-label`, `${u(n).name ?? ``} full history`));
						}),
						p(t, r));
				}
			),
				f(r),
				p(t, r));
		};
	A(oe, (e) => {
		n.matches.length > 0 && e(se);
	});
	var K = R(oe, 2),
		ce = (t) => {
			var r = or();
			(Gn(O(r), {
				get text() {
					return n.summary;
				},
				get query() {
					return q.q;
				}
			}),
				f(r),
				e(() =>
					E(
						r,
						1,
						`text-muted-foreground max-w-[72ch] leading-relaxed ${u(d).searching ? `text-sm` : `line-clamp-2 text-xs`}`
					)
				),
				p(t, r));
		};
	A(K, (e) => {
		n.summary && e(ce);
	});
	var J = R(K, 2);
	o(
		J,
		17,
		() => u(m).rows,
		(e) => e.type,
		(t, n) => {
			let r = M(() => u(n).type === `items`);
			var i = lr(),
				a = O(i);
			o(
				a,
				17,
				() => u(n).list,
				(e) => e.id,
				(t, n) => {
					var i = sr(),
						a = P(i);
					(e(
						(e) => {
							(j(i, `href`, e),
								j(i, `aria-label`, `Jump to ${u(n).alt ?? ``} in this patch`),
								j(a, `src`, u(n).src),
								E(
									a,
									1,
									`border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-colors duration-200 ${u(r) ? `group-hover/icon:border-signal/60` : `group-hover/icon:border-primary/50`}`
								));
						},
						[() => u(h).entityHref(u(n))]
					),
						p(t, i));
				}
			);
			var s = R(a, 2),
				c = (t) => {
					var i = cr(),
						a = P(i);
					(e(() => {
						(E(
							i,
							1,
							`bg-muted/80 text-muted-foreground flex size-11 items-center justify-center rounded-md font-mono text-[11px] font-semibold transition-all duration-300 sm:ml-1.5 sm:size-7 ${u(r) ? `group-hover:bg-signal/15 group-hover:text-signal` : `group-hover:bg-primary/15 group-hover:text-primary`}`
						),
							k(a, `+${u(n).extra ?? ``}`));
					}),
						p(t, i));
				};
			(A(s, (e) => {
				u(n).extra > 0 && e(c);
			}),
				f(i),
				p(t, i));
		}
	);
	var Y = R(J, 2),
		X = O(Y),
		le = (t) => {
			var n = ur(),
				r = b(n),
				i = O(r),
				a = P(i, !0),
				o = R(i, 2),
				s = P(o, !0);
			f(r);
			var c = R(r, 2),
				l = P(c);
			(e(() => {
				(E(i, 1, `font-mono font-bold ${u(d).tone ?? ``}`),
					k(a, u(d).changeCount),
					k(s, u(d).label),
					k(l, `${u(m).totals ?? ``} in full patch`));
			}),
				p(t, n));
		},
		ue = (t) => {
			var n = s(),
				r = b(n);
			(o(
				r,
				17,
				() => u(m).counts,
				(e) => e.noun,
				(t, n) => {
					var r = dr(),
						i = O(r),
						a = P(i, !0),
						o = R(i, 2),
						s = P(o, !0);
					(f(r),
						e(() => {
							(E(i, 1, `font-mono font-bold ${u(n).tone ?? ``}`),
								k(a, u(n).n),
								k(s, u(n).noun));
						}),
						p(t, r));
				}
			),
				p(t, n));
		};
	A(X, (e) => {
		u(d).label ? e(le) : e(ue, -1);
	});
	var de = R(X, 2),
		fe = (t) => {
			var n = fr(),
				r = R(O(n));
			(Be(r, { class: `size-3.5` }), f(n), e(() => j(n, `href`, u(h).href)), p(t, n));
		},
		Z = (e) => {
			Be(e, { class: `text-signal ml-auto size-3.5` });
		};
	(A(de, (e) => {
		u(d).searching ? e(fe) : e(Z, -1);
	}),
		f(Y),
		f(F),
		f(_),
		e(() => {
			(E(
				_,
				1,
				`clip-corner-sm group bg-card hover:bg-card-accent/30 relative flex h-full flex-col overflow-hidden border transition-colors duration-200 ${u(d).searching ? `` : `min-h-[200px]`} ${u(g) ? `border-primary/50 hover:border-primary/80` : `border-border hover:border-signal/45`}`
			),
				j(z, `href`, u(h).href),
				j(z, `aria-label`, u(m).accessibleLabel),
				E(z, 1, v(u(d).searching ? `ui-focus-ring rounded-sm` : `stretched-link`)),
				k(B, u(m).heading),
				k(re, n.author));
		}),
		p(t, _),
		x());
}
var hr = [`general-changes`, `hero-changes`, `item-changes`];
function gr({ toc: e, heroes: t, items: n }) {
	return t.length + n.length === 0 ? e.filter((e) => !hr.includes(e.id)) : [];
}
function _r(e) {
	let { heroes: t, items: n, hideGeneral: r } = e;
	return (
		+!r +
		gr(e).length +
		(t.length > 0 ? t.length + 1 : 0) +
		(n.length > 0 ? n.length + 1 : 0)
	);
}
var vr = l(
		`<div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div> <p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">Contents</p>`,
		1
	),
	yr = l(
		`<a href="#general-changes" class="toc-section svelte-1dqdqxt"><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> General</a>`
	),
	br = l(
		`<a><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> <span class="line-clamp-2 leading-tight"> </span></a>`
	),
	xr = l(
		`<img alt="" loading="lazy" decoding="async" class="toc-ability-icon toc-ability-img svelte-1dqdqxt"/>`
	),
	Sr = l(`<span class="toc-ability-icon svelte-1dqdqxt" aria-hidden="true"></span>`),
	Cr = l(
		`<li><a class="toc-ability toc-link svelte-1dqdqxt"><!> <span truncate=""> </span></a></li>`
	),
	wr = l(`<ul space="y-px" class="svelte-1dqdqxt"></ul>`),
	Tr = l(
		`<li><a class="toc-entity toc-link min-w-0 svelte-1dqdqxt"><img alt="" loading="lazy" decoding="async" class="toc-entity-img svelte-1dqdqxt"/> <span truncate=""> </span></a> <!></li>`
	),
	Er = l(
		`<div class="toc-group svelte-1dqdqxt"><a class="toc-section svelte-1dqdqxt"><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> <span class="toc-count svelte-1dqdqxt"> </span></a> <ul class="toc-entities svelte-1dqdqxt"></ul></div>`
	),
	Dr = l(
		`<nav aria-label="Table of contents"><!> <div class="toc-tree svelte-1dqdqxt" data-toc-tree=""><!> <!> <!></div></nav>`
	);
function Or(t, n) {
	H(n, !0);
	let r = y(n, `abilityIcons`, 19, () => []),
		s = y(n, `size`, 3, `sm`),
		c = y(n, `hideGeneral`, 3, !1),
		l = y(n, `toc`, 19, () => []),
		d = M(() => {
			let e = new Map();
			for (let t of r()) {
				let n = e.get(t.heroId) ?? [];
				(n.push(t), e.set(t.heroId, n));
			}
			return e;
		}),
		m = M(() => gr({ toc: l(), heroes: n.heroes, items: n.items })),
		g = M(() =>
			s() === `lg` ? { entity: 28, ability: 20 } : { entity: 16, ability: 14 }
		),
		_ = M(() => {
			let e = new Map(),
				t = new Map(),
				r,
				i;
			for (let n of l()) {
				if (n.level === 3) {
					i?.push(n);
					continue;
				}
				((i = void 0),
					n.level === 1
						? ((r = new Map()), e.set(n.id, r))
						: n.level === 2 && (r?.set(n.id, r.size), (i = []), t.set(n.id, i)));
			}
			return [
				{ id: `hero-changes`, label: `Heroes`, entities: n.heroes },
				{ id: `item-changes`, label: `Items`, entities: n.items }
			]
				.filter((e) => e.entities.length > 0)
				.map((n) => {
					let r = e.get(n.id),
						i = (e) => r?.get(Ne(e.alt)) ?? 2 ** 53 - 1;
					return {
						...n,
						entities: n.entities
							.toSorted((e, t) => i(e) - i(t))
							.map((e) => {
								let n = Ne(e.alt),
									r = u(d).get(e.id) ?? [];
								return {
									...e,
									fragment: n,
									abilities: (t.get(n) ?? []).map((e) => {
										let t = Ie(e.title, r);
										return { ...e, image: r.find((e) => e.slug === t)?.image };
									})
								};
							})
					};
				});
		});
	var v = Dr(),
		b = O(v),
		S = (e) => {
			var t = vr();
			(a(2), p(e, t));
		};
	A(b, (e) => {
		s() === `sm` && e(S);
	});
	var C = R(b, 2),
		w = O(C),
		T = (e) => {
			var t = yr();
			(h(`click`, t, function (...e) {
				n.onnavigate?.apply(this, e);
			}),
				p(e, t));
		};
	A(w, (e) => {
		c() || e(T);
	});
	var D = R(w, 2);
	o(
		D,
		17,
		() => u(m),
		(e) => e.id,
		(t, r) => {
			var i = br(),
				a = R(O(i), 2),
				o = P(a, !0);
			(f(i),
				e(() => {
					(j(i, `href`, `#${u(r).id ?? ``}`),
						E(
							i,
							1,
							`toc-section ${u(r).level > 1 ? `toc-subsection` : ``}`,
							`svelte-1dqdqxt`
						),
						k(o, u(r).title));
				}),
				h(`click`, i, function (...e) {
					n.onnavigate?.apply(this, e);
				}),
				p(t, i));
		}
	);
	var N = R(D, 2);
	(o(
		N,
		17,
		() => u(_),
		(e) => e.id,
		(t, r) => {
			var a = Er(),
				s = O(a),
				c = R(O(s)),
				l = R(c),
				d = P(l, !0);
			f(s);
			var m = R(s, 2);
			(o(
				m,
				21,
				() => u(r).entities,
				(e) => e.id,
				(t, r) => {
					var a = Tr(),
						s = O(a),
						c = O(s),
						l = R(c, 2),
						d = P(l, !0);
					f(s);
					var m = R(s, 2),
						_ = (t) => {
							var a = wr();
							(o(
								a,
								21,
								() => u(r).abilities,
								i,
								(t, r) => {
									var i = Cr(),
										a = O(i),
										o = O(a),
										s = (t) => {
											var n = xr();
											(e(() => {
												(j(n, `src`, u(r).image),
													j(n, `width`, u(g).ability),
													j(n, `height`, u(g).ability));
											}),
												p(t, n));
										},
										c = (e) => {
											var t = Sr();
											p(e, t);
										};
									A(o, (e) => {
										u(r).image ? e(s) : e(c, -1);
									});
									var l = R(o, 2),
										d = P(l, !0);
									(f(a),
										f(i),
										e(() => {
											(j(a, `href`, `#${u(r).id ?? ``}`), k(d, u(r).title));
										}),
										h(`click`, a, function (...e) {
											n.onnavigate?.apply(this, e);
										}),
										p(t, i));
								}
							),
								f(a),
								p(t, a));
						};
					(A(m, (e) => {
						u(r).abilities.length > 0 && e(_);
					}),
						f(a),
						e(() => {
							(j(s, `href`, `#${u(r).fragment ?? ``}`),
								j(c, `src`, u(r).src),
								j(c, `width`, u(g).entity),
								j(c, `height`, u(g).entity),
								k(d, u(r).alt));
						}),
						h(`click`, s, function (...e) {
							n.onnavigate?.apply(this, e);
						}),
						p(t, a));
				}
			),
				f(m),
				f(a),
				e(() => {
					(j(s, `href`, `#${u(r).id ?? ``}`),
						k(c, ` ${u(r).label ?? ``} `),
						k(d, u(r).entities.length));
				}),
				h(`click`, s, function (...e) {
					n.onnavigate?.apply(this, e);
				}),
				p(t, a));
		}
	),
		f(C),
		f(v),
		e(() => E(v, 1, `toc ${s() ?? ``} toc-panel clip-corner-sm`, `svelte-1dqdqxt`)),
		p(t, v),
		x());
}
n([`click`]);
var [kr, Ar] = D(),
	jr = 1e3,
	Mr = (e, t, n) => `${e}:${t}${n ? `:${Pe(n)}` : ``}`,
	Nr = (e, t, n, r) => `${e}:${t}:${n}:${r}`,
	[Pr, Fr] = D();
function Ir(e, t, n) {
	let r = e?.stats?.before;
	if (!e || !r) return {};
	let i = e.related.flatMap(({ name: i, record: a }) => {
		let o = t.heroes.find((e) => Me(e.alt, i));
		if (!o || a.status !== `complete` || a.appearances < 1e3) return [];
		let s = a.items
			.flatMap((r) => {
				if (r.buyers < 100 || r.buyers > a.appearances) return [];
				let i = t.items.find((e) => e.id === r.id);
				if (!i) return [];
				let o = e.sections.filter((e) => e.kind === `item` && Me(e.name, i.alt));
				return o.length === 1
					? [{ name: i.alt, image: i.src, ...at(a, r), href: `${n}#${o[0].id}` }]
					: [];
			})
			.slice(0, 3);
		return s.length
			? [
					[
						String(o.id),
						{ stats: { before: r, after: e.stats?.after ?? null }, items: s }
					]
				]
			: [];
	});
	return Object.fromEntries(i);
}
var Lr = l(
	`<section class="mog-content svelte-15qe8qj" aria-label="Changelog details"><!></section>`
);
function Rr(e, t) {
	H(t, !0);
	let n = y(t, `stats`, 3, null),
		i = y(t, `open`, 3, !1),
		a = y(t, `reading`, 19, () => ({
			details: {},
			previous: {},
			maxedFirst: {},
			boughtBy: {},
			buyTime: {}
		})),
		o = y(t, `related`, 19, () => ({}));
	(Fr({
		get details() {
			return a().details;
		},
		get previous() {
			return a().previous;
		},
		get maxedFirst() {
			return a().maxedFirst;
		},
		get boughtBy() {
			return a().boughtBy;
		},
		get buyTime() {
			return a().buyTime;
		},
		get related() {
			return o();
		}
	}),
		Ar({
			get stats() {
				return n();
			},
			get entryYear() {
				return t.entryYear;
			},
			get open() {
				return i();
			}
		}),
		ae({
			get heroes() {
				return t.icons.heroes;
			},
			get items() {
				return t.icons.items;
			}
		}));
	let c = M(
			() => new Set([...(t.filter?.heroes ?? []), ...(t.filter?.items ?? [])].map(Ne))
		),
		l = (e) => h(e, u(c)),
		m = (e, t) =>
			(e.classList.contains(`hero`) || e.classList.contains(`item`)) &&
			[...e.classList].some((e) => t.has(e));
	function h(e, t) {
		let n = Array.from(e.children);
		for (let e of n) e.style.removeProperty(`display`);
		if (t.size === 0) return;
		let r = null,
			i = [];
		for (let e of n)
			e.matches(`h2[data-mog-section]`)
				? ((r = { heading: e, members: [] }), i.push(r))
				: r?.members.push(e);
		for (let { heading: e, members: n } of i) {
			let r = n.filter((e) => m(e, t));
			e.style.display = r.length ? `` : `none`;
			for (let e of n) e.style.display = r.includes(e) ? `` : `none`;
		}
	}
	var g = s(),
		_ = b(g);
	(d(
		_,
		() => t.content,
		(e) => {
			var n = Lr(),
				i = O(n);
			(r(
				i,
				() => t.content,
				(e, t) => {
					t(e, {});
				}
			),
				f(n),
				te(n, () => l),
				p(e, n));
		}
	),
		p(e, g),
		x());
}
var zr = l(
		`<a class="ui-focus-ring border-subtle text-signal hover:border-signal inline-flex min-h-11 items-center rounded-md border px-3 font-mono text-xs"><time data-timeline-date=""> </time></a>`
	),
	Br = l(
		`<nav><p class="text-muted-foreground mb-2 text-xs"> </p> <div class="flex flex-wrap gap-2"></div></nav>`
	);
function Vr(t, n) {
	H(n, !0);
	let r = M(() => n.patches.slice(0, 6));
	var i = Br(),
		a = O(i),
		s = P(a),
		c = R(a, 2);
	(o(
		c,
		21,
		() => u(r),
		(e) => e.id,
		(t, r) => {
			var i = zr(),
				a = O(i),
				o = P(a, !0);
			(f(i),
				e(
					(e, t, r, s, c) => {
						(j(i, `href`, e),
							j(
								i,
								`aria-label`,
								`View ${n.entity.name ?? ``} in the ${t ?? ``} patch, ${r ?? ``}`
							),
							j(a, `datetime`, s),
							k(o, c));
					},
					[
						() => ce(u(r), n.entity),
						() => Fe(u(r).date),
						() => se(u(r).changeCount),
						() => u(r).date.toISOString(),
						() => Fe(u(r).date)
					]
				),
				p(t, i));
		}
	),
		f(c),
		f(i),
		e(() => {
			(j(i, `aria-label`, `Recent patches for ${n.entity.name ?? ``}`),
				k(s, `Most recent ${u(r).length ?? ``} of ${n.patches.length ?? ``} patches`));
		}),
		p(t, i),
		x());
}
export {
	Nr as a,
	kr as c,
	Vn as d,
	zn as f,
	rt as h,
	Pr as i,
	Or as l,
	xn as m,
	Rr as n,
	Ir as o,
	Ln as p,
	Mr as r,
	jr as s,
	Vr as t,
	_r as u
};
