import {
	getAllChangelogs,
	getAllHeroes,
	getAllItems,
	getHeroLastModified,
	getItemLastModified
} from '@deadlog/scraper';
import { absoluteUrl, changePath, SITE_URL } from '$lib/seo';
import type { RequestHandler } from './$types';

interface SitemapEntry {
	url: string;
	lastModified?: string;
}

// Values here are encoded URLs and ISO dates, where `&` is the only reachable
// XML-special character (from query strings).
function escapeXml(value: string): string {
	return value.replaceAll('&', '&amp;');
}

function toIsoDate(pubDate: string | undefined): string | undefined {
	if (!pubDate) return undefined;
	const date = new Date(pubDate);
	return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

function renderEntry({ url, lastModified }: SitemapEntry): string {
	return [
		'  <url>',
		`    <loc>${escapeXml(url)}</loc>`,
		lastModified ? `    <lastmod>${escapeXml(lastModified)}</lastmod>` : '',
		'  </url>'
	]
		.filter(Boolean)
		.join('\n');
}

export const GET: RequestHandler = async ({ locals }) => {
	const [changelogs, heroes, items, heroLastModified, itemLastModified] =
		await Promise.all([
			getAllChangelogs(locals.db),
			getAllHeroes(locals.db),
			getAllItems(locals.db),
			getHeroLastModified(locals.db),
			getItemLastModified(locals.db)
		]);

	const sortedChangelogs = [...changelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);
	const latestUpdate = toIsoDate(sortedChangelogs[0]?.pubDate);

	const entries: SitemapEntry[] = [
		{ url: SITE_URL, lastModified: latestUpdate },
		// The directories list entities and their patch counts, so they go stale with
		// the newest patch just like the homepage does.
		{ url: absoluteUrl('/heroes'), lastModified: latestUpdate },
		{ url: absoluteUrl('/items'), lastModified: latestUpdate },
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
			}))
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(renderEntry).join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};

// Avoid scanning the build-time data again on every crawler request.
export const prerender = true;
