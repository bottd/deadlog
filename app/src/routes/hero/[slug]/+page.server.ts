import {
	getReleasedHeroSlugs,
	getHeroBySlug,
	getHeroAbilities,
	getChangelogsByHeroId,
	getMainChangelogIdSequence
} from '@deadlog/scraper';
import { computeStreaks, resolveHeroAbilitySlug } from '@deadlog/utils';
import { error, redirect } from '@sveltejs/kit';
import { getHeroCardImage } from '$lib/utils/entityImages';
import { absoluteUrl } from '$lib/seo';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = 'auto';

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getReleasedHeroSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals, url }) => {
	const hero = await getHeroBySlug(locals.db, params.slug);

	if (!hero) {
		throw error(404, 'Hero not found');
	}
	if (hero.slug !== params.slug) redirect(308, `/hero/${hero.slug}${url.search}`);

	const [changelogs, patchSequence, abilities] = await Promise.all([
		getChangelogsByHeroId(locals.db, hero.id),
		getMainChangelogIdSequence(locals.db),
		getHeroAbilities(locals.db, hero.id)
	]);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate),
		changeGroups:
			changelog.changeGroups?.map((group) => {
				const slug = group.ability
					? resolveHeroAbilitySlug(group.ability, abilities)
					: null;
				const ability = abilities.find((candidate) => candidate.slug === slug);
				return {
					...group,
					abilitySlug: ability?.slug ?? null,
					icon: ability?.image ?? null
				};
			}) ?? null
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
		streaks: computeStreaks(patchSequence, new Set(changelogs.map((c) => c.id))),
		title: `${hero.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${hero.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: absoluteUrl(`/assets/meta/hero/${params.slug}.png`)
	};
};
