import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getItemBySlug,
	getChangelogsByItemId,
	getChangelogIcons
} from '@deadlog/scraper';

export const GET: RequestHandler = async ({ params, locals, setHeaders }) => {
	try {
		const item = await getItemBySlug(locals.db, params.slug);

		if (!item) {
			throw error(404, { message: 'Item not found' });
		}

		setHeaders({
			'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
		});

		const changelogs = await getChangelogsByItemId(locals.db, item.id);

		if (changelogs.length === 0) {
			return json({ item, changelogs: [] });
		}

		const changelogIds = changelogs.map((c) => c.id);
		const iconsMap = await getChangelogIcons(locals.db, changelogIds);

		const enrichedChangelogs = changelogs.map((changelog) => ({
			...changelog,
			date: new Date(changelog.pubDate).toISOString(),
			icons: iconsMap[changelog.id] ?? { heroes: [], items: [] }
		}));

		return json({
			item,
			changelogs: enrichedChangelogs
		});
	} catch (err) {
		// Re-throw SvelteKit errors (404s, etc.)
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error('API Error fetching item:', err);
		throw error(500, 'Internal Server Error');
	}
};
