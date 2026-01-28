import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getChangelogById,
	getChangelogIcons,
	getAllHeroes,
	getAllItems
} from '@deadlog/scraper';

export const GET: RequestHandler = async ({ params, locals, setHeaders }) => {
	try {
		const changelog = await getChangelogById(locals.db, params.id);

		if (!changelog) {
			throw error(404, { message: 'Changelog not found' });
		}

		// Cache successful lookups - changelog data rarely changes
		setHeaders({
			'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
		});

		const [iconsMap, heroes, items] = await Promise.all([
			getChangelogIcons(locals.db, [changelog.id]),
			getAllHeroes(locals.db),
			getAllItems(locals.db)
		]);

		const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };

		const heroMap: Record<number, { name: string; images: Record<string, string> }> = {};
		for (const hero of heroes) {
			if (hero.id) {
				heroMap[hero.id] = { name: hero.name, images: hero.images };
			}
		}

		const itemMap: Record<number, { name: string; image: string }> = {};
		for (const item of items) {
			if (item.id) {
				itemMap[item.id] = { name: item.name, image: item.image };
			}
		}

		return json({
			changelog: {
				...changelog,
				date: new Date(changelog.pubDate).toISOString(),
				icons
			},
			heroMap,
			itemMap
		});
	} catch (err) {
		// Re-throw SvelteKit errors (404s, etc.)
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error('API Error fetching changelog:', err);
		throw error(500, 'Internal Server Error');
	}
};
