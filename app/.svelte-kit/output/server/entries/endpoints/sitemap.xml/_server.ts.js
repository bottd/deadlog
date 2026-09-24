import {
	D as getReleasedAbilities,
	a as getAllChangelogs,
	b as getHeroLastModified,
	o as getAllHeroes,
	r as getAbilityLastModified,
	s as getAllItems,
	w as getItemLastModified
} from '../../../chunks/src.js';
import { c as absoluteUrl, s as SITE_URL, u as changePath } from '../../../chunks/seo.js';
//#region src/routes/sitemap.xml/+server.ts
function escapeXml(value) {
	return value.replaceAll('&', '&amp;');
}
function toIsoDate(pubDate) {
	if (!pubDate) return void 0;
	const date = new Date(pubDate);
	return Number.isNaN(date.getTime()) ? void 0 : date.toISOString();
}
function renderEntry({ url, lastModified }) {
	return [
		'  <url>',
		`    <loc>${escapeXml(url)}</loc>`,
		lastModified ? `    <lastmod>${escapeXml(lastModified)}</lastmod>` : '',
		'  </url>'
	]
		.filter(Boolean)
		.join('\n');
}
var GET = async ({ locals }) => {
	const [
		changelogs,
		heroes,
		items,
		abilities,
		heroLastModified,
		itemLastModified,
		abilityLastModified
	] = await Promise.all([
		getAllChangelogs(locals.db),
		getAllHeroes(locals.db),
		getAllItems(locals.db),
		getReleasedAbilities(locals.db),
		getHeroLastModified(locals.db),
		getItemLastModified(locals.db),
		getAbilityLastModified(locals.db)
	]);
	const sortedChangelogs = [...changelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);
	const latestUpdate = toIsoDate(sortedChangelogs[0]?.pubDate);
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
	{
		url: SITE_URL,
		lastModified: latestUpdate
	},
	{
		url: absoluteUrl('/heroes'),
		lastModified: latestUpdate
	},
	{
		url: absoluteUrl('/items'),
		lastModified: latestUpdate
	},
	{
		url: absoluteUrl('/archive'),
		lastModified: latestUpdate
	},
	...sortedChangelogs
		.filter((changelog) => changelog.contentText?.trim())
		.map((changelog) => ({
			url: absoluteUrl(changePath(changelog)),
			lastModified: toIsoDate(changelog.pubDate)
		})),
	...heroes
		.filter((hero) => hero.isReleased && hero.slug)
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((hero) => ({
			url: absoluteUrl(`/hero/${encodeURIComponent(hero.slug)}`),
			lastModified: toIsoDate(heroLastModified.get(hero.id))
		})),
	...items
		.filter((item) => item.isReleased && item.slug)
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((item) => ({
			url: absoluteUrl(`/item/${encodeURIComponent(item.slug)}`),
			lastModified: toIsoDate(itemLastModified.get(item.id))
		})),
	...abilities.map((ability) => ({
		url: absoluteUrl(`/ability/${encodeURIComponent(ability.slug)}`),
		lastModified: toIsoDate(abilityLastModified.get(ability.slug))
	}))
]
	.map(renderEntry)
	.join('\n')}
</urlset>`.trim();
	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};
var prerender = true;
//#endregion
export { GET, prerender };
