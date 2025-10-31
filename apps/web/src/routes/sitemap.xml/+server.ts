import { getAllChangelogs } from '@deadlog/scraper';
import type { RequestHandler } from './$types';

const site = 'https://deadlock.drake.dev';

export const GET: RequestHandler = async ({ locals }) => {
	const changelogs = await getAllChangelogs(locals.db);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}</loc>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>
  ${changelogs
		.map(
			(entry) => `
  <url>
    <loc>${site}/?change=${encodeURIComponent(entry.id)}</loc>
    <lastmod>${entry.date.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
		)
		.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};

export const prerender = false;
