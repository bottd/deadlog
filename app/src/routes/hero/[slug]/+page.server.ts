import {
	getAllHeroSlugs,
	getHeroBySlug,
	getChangelogsByHeroId,
	getChangelogIcons
} from '@deadlog/scraper';
import { error } from '@sveltejs/kit';
import { getHeroCardImage } from '$lib/utils/entityImages';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getAllHeroSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals }) => {
	const hero = await getHeroBySlug(locals.db, params.slug);

	if (!hero) {
		throw error(404, 'Hero not found');
	}

	const changelogs = await getChangelogsByHeroId(locals.db, hero.id);

	const changelogIds = changelogs.map((c) => c.id);
	const iconsMap = await getChangelogIcons(locals.db, changelogIds);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate),
		icons: iconsMap[changelog.id] || { heroes: [], items: [] }
	}));

	return {
		hero: {
			...hero,
			image: getHeroCardImage(hero)
		},
		changelogs: enrichedChangelogs,
		title: `${hero.name} Changelog - Deadlog`,
		description: `View all ${hero.name} balance changes and updates in Deadlock`,
		image: `https://deadlog.io/assets/meta/hero/${params.slug}.png`
	};
};
