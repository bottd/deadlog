function e(e) {
	let t = history.pushState;
	history.pushState = function (n, r) {
		(t.apply(this, arguments), e());
	};
	let n = () => {
		e();
	};
	return (
		addEventListener(`popstate`, n),
		() => {
			((history.pushState = t), removeEventListener(`popstate`, n));
		}
	);
}
function t(e) {
	return /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(e);
}
function n(e, t = !1) {
	if (t && typeof document < `u`) {
		let t = document.createElement(`a`);
		return ((t.href = e), { hostname: t.protocol + `//` + t.hostname, path: t.pathname });
	}
	{
		let t = new URL(e);
		return { hostname: t.protocol + `//` + t.hostname, path: t.pathname };
	}
}
function r(e, t) {
	return !t || t.indexOf(e) >= 0 ? `` : t.split(`?`)[0] || ``;
}
function i(e) {
	let t = {},
		n = e.indexOf(`?`);
	if (n === -1) return t;
	let r = e.substring(n + 1),
		i = new URLSearchParams(r),
		a = i.get(`utm_source`),
		o = i.get(`utm_medium`),
		s = i.get(`utm_campaign`),
		c = i.get(`utm_term`),
		l = i.get(`utm_content`);
	return (
		a && (t.us = a),
		o && (t.um = o),
		s && (t.uc = s),
		c && (t.ut = c),
		l && (t.uco = l),
		t
	);
}
function a(e, t = !1) {
	return (
		`?` +
		Object.keys(e)
			.filter((n) => !(e[n] === void 0 || (t && e[n] === ``)))
			.map(function (t) {
				return encodeURIComponent(t) + `=` + encodeURIComponent(e[t]);
			})
			.join(`&`)
	);
}
function o(e, t, n, r, i = {}, a) {
	let o = { p: n, h: t, r, sid: e };
	return (a && (o.ht = a), Object.assign(o, i), o);
}
function s(e, t, n = !1) {
	return e + a(t, n);
}
var c = 1e3;
function l(e, t) {
	return new Promise((n) => {
		let r = { ht: 1 },
			i = `${e.replace(/\/collect$/, `/cache`)}?sid=${encodeURIComponent(t)}`,
			a = new XMLHttpRequest();
		(a.open(`GET`, i, !0),
			(a.timeout = c),
			a.setRequestHeader(`Content-Type`, `text/plain`),
			(a.onload = function () {
				if (a.status === 200)
					try {
						n(JSON.parse(a.responseText));
					} catch {
						n(r);
					}
				else n(r);
			}),
			(a.onerror = () => n(r)),
			(a.ontimeout = () => n(r)),
			a.send());
	});
}
function u(e, t) {
	let n = new XMLHttpRequest(),
		r = s(e, t);
	(n.open(`GET`, r, !0),
		n.setRequestHeader(`Content-Type`, `text/plain`),
		(n.timeout = c),
		n.send());
}
function d(t) {
	let n = e(() => {
		m(t);
	});
	return (m(t), n);
}
function f() {
	let e = document.querySelector(`link[rel="canonical"][href]`);
	if (!e) return null;
	let t = document.createElement(`a`);
	return ((t.href = e.href), t);
}
function p(e, t) {
	if (t) return r(e, t);
	if (document.referrer && document.referrer.indexOf(e) < 0)
		return r(e, document.referrer);
	let n = new URLSearchParams(window.location.search);
	for (let t of [`ref`, `referer`, `referrer`, `source`, `utm_source`]) {
		let i = n.get(t);
		if (i) return r(e, i);
	}
	return r(e, ``);
}
async function m(e, r = {}) {
	let a = f() ?? window.location;
	if (
		(!e.reportOnLocalhost && t(window.location.hostname)) ||
		(a.host === `` && navigator.userAgent.indexOf(`Electron`) < 0)
	)
		return;
	let s = r.url || a.pathname + a.search || `/`,
		{ hostname: c, path: d } = n(s, !0),
		m = p(c, r.referrer || ``),
		h = i(s),
		g;
	try {
		g = (await l(e.reporterUrl, e.siteId)).ht.toString();
	} catch {}
	let _ = o(e.siteId, c, d, m, h, g);
	u(e.reporterUrl, _);
}
var h = class {
		siteId;
		reporterUrl;
		reportOnLocalhost = !1;
		_cleanupAutoTrackPageviews;
		constructor(e) {
			((this.siteId = e.siteId),
				(this.reporterUrl = e.reporterUrl),
				e.reportOnLocalhost && (this.reportOnLocalhost = e.reportOnLocalhost),
				(e.autoTrackPageviews === void 0 || e.autoTrackPageviews) &&
					setTimeout(() => {
						this._cleanupAutoTrackPageviews = d(this);
					}, 0));
		}
		cleanup() {
			this._cleanupAutoTrackPageviews && this._cleanupAutoTrackPageviews();
		}
	},
	g = { client: void 0 };
function _(e) {
	g.client ||= new h(e);
}
export { _ as init };
