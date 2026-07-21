import { getAllHeroSlugs, getHeroBySlug, getChangelogsByHeroId } from '@deadlog/scraper';
import { error, redirect } from '@sveltejs/kit';
import { getHeroCardImage } from '$lib/utils/entityImages';
import { absoluteUrl } from '$lib/seo';
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
	if (hero.slug !== params.slug) redirect(308, `/hero/${hero.slug}`);

	const changelogs = await getChangelogsByHeroId(locals.db, hero.id);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate)
	}));

	return {
		hero: {
			...hero,
			image: getHeroCardImage(hero)
		},
		changelogs: enrichedChangelogs,
		title: `${hero.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${hero.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: absoluteUrl(`/assets/meta/hero/${params.slug}.png`)
	};
};
