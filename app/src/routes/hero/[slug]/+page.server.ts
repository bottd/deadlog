import {
	getRenderableHeroSlugs,
	getHeroBySlug,
	getHeroAbilities,
	getChangelogsByHeroId
} from '@deadlog/db';
import { error } from '@sveltejs/kit';
import { getHeroCardImage } from '$lib/utils/entityImages';
import { DEFAULT_SOCIAL_IMAGE, absoluteUrl } from '$lib/seo';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getRenderableHeroSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals }) => {
	const hero = await getHeroBySlug(locals.db, params.slug);

	if (!hero) {
		throw error(404, 'Hero not found');
	}

	const [changelogs, abilities] = await Promise.all([
		getChangelogsByHeroId(locals.db, hero.id),
		getHeroAbilities(locals.db, hero.id)
	]);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate),
		changeGroups:
			changelog.changeGroups?.map((group) => ({
				...group,
				icon:
					abilities.find((ability) => ability.slug === group.abilitySlug)?.image ?? null
			})) ?? null
	}));

	return {
		// Explicit field list: `images` is resolved to one URL here and never read by
		// the page, so the 15-key blob stays out of every prerendered hero page.
		hero: {
			id: hero.id,
			name: hero.name,
			slug: hero.slug,
			heroType: hero.heroType,
			isReleased: hero.isReleased,
			image: getHeroCardImage(hero)
		},
		changelogs: enrichedChangelogs,
		abilities,
		title: `${hero.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${hero.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: hero.isReleased
			? absoluteUrl(`/assets/meta/hero/${params.slug}.png`)
			: DEFAULT_SOCIAL_IMAGE
	};
};
