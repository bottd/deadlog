import {
	getAbilityBySlug,
	getReleasedAbilities,
	getHeroAbilities,
	getChangelogsByHeroId
} from '@deadlog/db';
import { heroImage } from '@deadlog/utils';
import { error } from '@sveltejs/kit';
import { absoluteUrl } from '$lib/seo';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const abilities = await getReleasedAbilities(db);
	return abilities.map(({ slug }) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals }) => {
	const match = await getAbilityBySlug(locals.db, params.slug);

	if (!match) {
		throw error(404, 'Ability not found');
	}

	const { ability, hero } = match;

	const [changelogs, abilities] = await Promise.all([
		getChangelogsByHeroId(locals.db, hero.id),
		getHeroAbilities(locals.db, hero.id)
	]);

	// The hero's history narrowed to one ability: drop the other abilities' groups,
	// then drop the patches left with nothing. `changeCount` has to be recomputed,
	// since the query counted every bullet the patch gave the hero.
	const enrichedChangelogs = changelogs
		.map((changelog) => {
			const changeGroups =
				changelog.changeGroups
					?.filter((group) => group.abilitySlug === ability.slug)
					.map((group) => ({ ...group, icon: ability.image })) ?? [];

			return {
				...changelog,
				date: new Date(changelog.pubDate),
				changeCount: changeGroups.reduce((total, g) => total + g.bullets.length, 0),
				changeGroups
			};
		})
		.filter((changelog) => changelog.changeGroups.length > 0);

	return {
		ability,
		// Explicit field list, as on the hero page: `images` resolves to one URL here
		// so the 15-key blob stays out of every prerendered ability page.
		hero: {
			name: hero.name,
			slug: hero.slug,
			heroType: hero.heroType,
			image: heroImage(hero.images)
		},
		changelogs: enrichedChangelogs,
		abilities,
		title: `${ability.name} Changes: ${hero.name} | Deadlog`,
		description: `Track every ${ability.name} buff, nerf, and balance change for ${hero.name} across Deadlock patch notes in chronological order.`,
		// Reuses the parent hero's preview rather than minting 152 more images.
		image: absoluteUrl(`/assets/meta/hero/${hero.slug}.png`)
	};
};
