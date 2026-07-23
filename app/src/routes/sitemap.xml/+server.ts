import { getAllChangelogs, getAllHeroes, getAllItems } from '@deadlog/scraper';
import { absoluteUrl, SITE_URL } from '$lib/seo';
import type { RequestHandler } from './$types';

interface SitemapEntry {
	url: string;
	lastModified?: string;
}

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
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
	const [changelogs, heroes, items] = await Promise.all([
		getAllChangelogs(locals.db),
		getAllHeroes(locals.db),
		getAllItems(locals.db)
	]);

	const sortedChangelogs = [...changelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);
	const latestUpdate = sortedChangelogs[0]?.pubDate
		? new Date(sortedChangelogs[0].pubDate).toISOString()
		: undefined;

	const entries: SitemapEntry[] = [
		{ url: SITE_URL, lastModified: latestUpdate },
		{ url: absoluteUrl('/heroes') },
		{ url: absoluteUrl('/items') },
		...sortedChangelogs
			.filter((changelog) => changelog.contentText?.trim())
			.map((changelog) => ({
				url: absoluteUrl(`/change/${encodeURIComponent(changelog.id)}`),
				lastModified: new Date(changelog.pubDate).toISOString()
			})),
		...heroes
			.filter((hero) => hero.isReleased && hero.slug)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((hero) => ({ url: absoluteUrl(`/hero/${encodeURIComponent(hero.slug)}`) })),
		...items
			.filter((item) => item.isReleased && item.slug)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((item) => ({ url: absoluteUrl(`/item/${encodeURIComponent(item.slug)}`) }))
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(renderEntry).join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control':
				'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
			'X-Content-Type-Options': 'nosniff'
		}
	});
};

export const prerender = false;
