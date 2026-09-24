var e = /^(the|a|an)\s+/;
function t(e) {
	return e
		.replace(/&amp;/g, `&`)
		.replace(/&quot;/g, `"`)
		.replace(/&apos;|&#39;/g, `'`);
}
function n(e) {
	return t(e).toLowerCase().trim().replace(/\s+/g, ` `);
}
function r(t) {
	let r = n(t),
		i = r.replace(e, ``);
	return i === r ? [r] : [r, i];
}
function i(e, t) {
	let n = new Set(r(t));
	return r(e).some((e) => n.has(e));
}
function a(e, t) {
	let n = new Map();
	for (let i of e) for (let e of r(t(i))) n.has(e) || n.set(e, i);
	return n;
}
function o(e, t) {
	for (let n of r(t)) {
		let t = e?.get(n);
		if (t !== void 0) return t;
	}
}
function s(e) {
	return e
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, ``)
		.replace(/\s+/g, `-`)
		.replace(/-+/g, `-`)
		.replace(/^-|-$/g, ``);
}
function c(e) {
	return e?.reduce((e, t) => e + t.bullets.length, 0) ?? null;
}
var l = [`weapon`, `vitality`, `spirit`];
function u(e) {
	return l.includes(e);
}
function d(e) {
	return e
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, `-`)
		.replace(/^-+|-+$/g, ``);
}
function f(e) {
	return d(r(e).at(-1) ?? ``);
}
function p(e) {
	return e
		.split(`-`)
		.map((e) => (e.length > 3 && e.endsWith(`s`) ? e.slice(0, -1) : e))
		.join(`-`);
}
function m(e, t) {
	let n = t.replaceAll(`-`, ``);
	return (
		e === t ||
		e.startsWith(`${t}-`) ||
		e === n ||
		e.startsWith(`${n}-`) ||
		e.replaceAll(`-`, ``) === n
	);
}
function h(e, t) {
	let n = s(e),
		r = [n, p(n)],
		i = null;
	for (let { slug: e } of t)
		r.some((t) => [e, p(e)].some((e) => m(t, e))) &&
			(!i || e.length > i.length) &&
			(i = e);
	return i;
}
var g = {
		'should-charge': `shoulder-charge`,
		siphon: `siphon-life`,
		hook: `grapple-arm`,
		uppercut: `exploding-uppercut`,
		'charge-shot': `charged-shot`,
		'immobilizing-trap': `spirit-snare`,
		'rain-of-fire': `rain-of-arrows`,
		catalyst: `napalm`,
		'kudzu-bomb': `entangling-thorns`,
		'watchers-covenant': `kudzu-connection`,
		'true-form': `stone-form`,
		'blood-bomb': `essence-bomb`,
		'ground-slam': `ground-strike`,
		ghouls: `borrowed-decree`,
		turret: `mini-turret`,
		'medicinal-spectre': `medicinal-specter`,
		'rocket-barrage': `heavy-barrage`,
		tornado: `dust-devil`,
		bookworm: `bookwyrm`,
		'conjure-dragon': `bookwyrm`,
		bararge: `barrage`,
		'tail-whack': `boot-kick`,
		'mauling-leap': `entangling-bola`,
		'go-for-the-throat': `lycan-curse`,
		assistant: `spectral-assistant`,
		crow: `crow-familiar`,
		'royal-flush': `card-trick`,
		'card-toss': `card-trick`,
		'flying-strike': `flying-slash`,
		'shadow-explosion': `shadow-transformation`
	},
	_ = Object.keys(g).map((e) => ({ slug: e }));
function v(e, t) {
	let n = h(e, t);
	if (n) return n;
	let r = h(e, _),
		i = r ? g[r] : null;
	return i && t.some((e) => e.slug === i) ? i : null;
}
var y = String.raw`\[\[([^\[\]]*)\]\]\(\(([^()]*)\)\)`;
(new RegExp(y, `g`), RegExp(`^${y}$`));
var b = String.raw`\*\*|__|~~|\$\$|\[\[|\]\]|\(\(|\)\)|\{\{|\}\}|\|\|`;
(RegExp(`${y}|(?<!\\\\)(${b})`, `g`), new RegExp(String.raw`\\(${b})`, `g`));
function x(e, t = 140) {
	if (!e) return ``;
	let n = e.replace(/\s+/g, ` `).trim();
	if (n.length <= t) return n;
	let r = n.slice(0, t),
		i = r.lastIndexOf(` `);
	return (i > t * 0.6 ? r.slice(0, i) : r).trimEnd() + `…`;
}
function S(e) {
	return e instanceof Date ? e : new Date(e);
}
function C(e) {
	return e >= 11 && e <= 13 ? `th` : ([`th`, `st`, `nd`, `rd`][e % 10] ?? `th`);
}
function w(e, t, n = `${t}s`) {
	return e === 1 ? t : n;
}
var T = `America/Los_Angeles`,
	E = new Intl.DateTimeFormat(`en-US`, {
		timeZone: T,
		month: `long`,
		day: `numeric`,
		year: `numeric`
	});
function D(e) {
	let t = E.formatToParts(S(e)),
		n = (e) => t.find((t) => t.type === e)?.value ?? ``,
		r = Number(n(`day`));
	return `${n(`month`)} ${r}${C(r)}, ${n(`year`)}`;
}
var O = new Intl.DateTimeFormat(`en-US`, { timeZone: T, dateStyle: `medium` });
function k(e) {
	return O.format(S(e));
}
var A = new Intl.DateTimeFormat(`en-US`, { timeZone: T, year: `numeric` });
function j(e) {
	return A.format(S(e));
}
var M = new Intl.DateTimeFormat(`en-US`, {
	timeZone: T,
	hour: `numeric`,
	minute: `2-digit`,
	hour12: !0
});
function N(e) {
	return M.format(S(e));
}
function P(e) {
	let t = D(e.date),
		n = !/\d{2}-\d{2}-\d{4}/.test(e.title);
	return { named: n, date: t, heading: n ? e.title : t };
}
export {
	o as _,
	D as a,
	j as c,
	P as d,
	w as f,
	i as g,
	r as h,
	f as i,
	u as l,
	s as m,
	d as n,
	k as o,
	v as p,
	c as r,
	N as s,
	l as t,
	x as u,
	a as v
};
