import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getHeroBySlug,
	getChangelogsByHeroId,
	getChangelogIcons
} from '@deadlog/scraper';

function getHeroImage(hero: { images: Record<string, string> }): string {
	return (
		hero.images?.icon_hero_card_webp ||
		hero.images?.icon_hero_card ||
		hero.images?.icon_image_small_webp ||
		hero.images?.icon_image_small ||
		(hero.images ? Object.values(hero.images)[0] : '') ||
		''
	);
}

export const GET: RequestHandler = async ({ params, locals, setHeaders }) => {
	try {
		const hero = await getHeroBySlug(locals.db, params.slug);

		if (!hero) {
			throw error(404, { message: 'Hero not found' });
		}

		setHeaders({
			'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
		});

		const changelogs = await getChangelogsByHeroId(locals.db, hero.id);

		if (changelogs.length === 0) {
			return json({
				hero: { ...hero, image: getHeroImage(hero) },
				changelogs: []
			});
		}

		const changelogIds = changelogs.map((c) => c.id);
		const iconsMap = await getChangelogIcons(locals.db, changelogIds);

		const enrichedChangelogs = changelogs.map((changelog) => ({
			...changelog,
			date: new Date(changelog.pubDate).toISOString(),
			icons: iconsMap[changelog.id] ?? { heroes: [], items: [] }
		}));

		return json({
			hero: { ...hero, image: getHeroImage(hero) },
			changelogs: enrichedChangelogs
		});
	} catch (err) {
		// Re-throw SvelteKit errors (404s, etc.)
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error('API Error fetching hero:', err);
		throw error(500, 'Internal Server Error');
	}
};
