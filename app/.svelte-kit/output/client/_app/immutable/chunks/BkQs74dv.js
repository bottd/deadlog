var e = `https://deadlog.io`,
	t = `Deadlog`,
	n = `Deadlock Patch Notes & Changelog | Deadlog`,
	r = `Track every Deadlock update in one searchable changelog. Browse the latest patch notes, hero buffs and nerfs, item changes, and balance updates.`,
	i = `${e}/assets/meta/index.png`;
function a(t = ``) {
	return !t || t === `/` ? e : `${e}${t.startsWith(`/`) ? t : `/${t}`}`;
}
function o(e) {
	return `/change/` + e.slug.split(`/`).map(encodeURIComponent).join(`/`);
}
function s(e) {
	let {
		title: n,
		description: r,
		canonical: a,
		image: o = i,
		indexable: s = !0,
		openGraph: c
	} = e;
	return {
		title: n,
		description: r,
		canonical: a,
		robots: s ? `index,follow` : `noindex,follow`,
		additionalRobotsProps: {
			maxImagePreview: `large`,
			maxSnippet: -1,
			maxVideoPreview: -1
		},
		openGraph: {
			type: `website`,
			url: a,
			title: n,
			description: r,
			siteName: t,
			locale: `en_US`,
			images: [{ url: o, width: 1200, height: 630, type: `image/png`, alt: n }],
			...c
		},
		twitter: {
			cardType: `summary_large_image`,
			title: n,
			description: r,
			image: o,
			imageAlt: n
		}
	};
}
function c(t) {
	return {
		'@graph': [
			{
				'@type': `CollectionPage`,
				'@id': `${t.canonical}#webpage`,
				url: t.canonical,
				name: t.title,
				description: t.description,
				image: t.image,
				dateModified: t.dateModified,
				inLanguage: `en-US`,
				isPartOf: { '@id': `${e}/#website` },
				about: t.about,
				mainEntity: {
					'@type': `ItemList`,
					numberOfItems: t.items.length,
					itemListElement: t.items.map((e, t) => ({
						'@type': `ListItem`,
						position: t + 1,
						name: e.name,
						url: e.url
					}))
				}
			},
			f(t.breadcrumbs)
		]
	};
}
var l = { '@type': `VideoGame`, name: `Deadlock` },
	u = {
		hero: { path: `/heroes`, label: `Heroes` },
		item: { path: `/items`, label: `Items` },
		ability: { path: `/heroes`, label: `Heroes` }
	};
function d(e) {
	let {
			entity: n,
			path: r,
			title: i,
			description: s,
			image: d,
			changelogs: f,
			parent: p
		} = e,
		m = u[n.type];
	return c({
		canonical: a(r),
		title: i,
		description: s,
		image: d,
		dateModified: f[0]?.date.toISOString(),
		about: [l, { '@type': `Thing`, name: n.name, image: n.image }],
		items: f.map((e) => ({ name: e.title, url: a(o(e)) })),
		breadcrumbs: [
			{ name: t, path: `/` },
			{ name: m.label, path: m.path },
			...(p ? [p] : []),
			{ name: n.name, path: r }
		]
	});
}
function f(e) {
	return {
		'@type': `BreadcrumbList`,
		itemListElement: e.map((e, t) => ({
			'@type': `ListItem`,
			position: t + 1,
			name: e.name,
			item: a(e.path)
		}))
	};
}
export {
	t as a,
	a as c,
	c as d,
	d as f,
	r as i,
	f as l,
	i as n,
	n as o,
	s as p,
	u as r,
	e as s,
	l as t,
	o as u
};
