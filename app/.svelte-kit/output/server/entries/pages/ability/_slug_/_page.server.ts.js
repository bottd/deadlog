import {
	D as getReleasedAbilities,
	E as getPropertyLinks,
	_ as getHeroAbilityContexts,
	d as getChangelogsByHeroId,
	g as getHeroAbilities,
	n as getAbilityBySlug
} from '../../../../chunks/src.js';
import '../../../../chunks/src2.js';
import { n as heroImage } from '../../../../chunks/entityImages.js';
import { c as absoluteUrl } from '../../../../chunks/seo.js';
import {
	n as toPageContext,
	t as previousChangeLookup
} from '../../../../chunks/previousChanges.js';
import { error } from '@sveltejs/kit';
//#region src/routes/ability/[slug]/+page.server.ts
var prerender = true;
var entries = async () => {
	const { getLibsqlDb } = await import('../../../../chunks/src3.js');
	const db = getLibsqlDb();
	return (await getReleasedAbilities(db)).map(({ slug }) => ({ slug }));
};
var load = async ({ params, locals }) => {
	const match = await getAbilityBySlug(locals.db, params.slug);
	if (!match) throw error(404, 'Ability not found');
	const { ability, hero } = match;
	const [changelogs, abilities, abilityContexts] = await Promise.all([
		getChangelogsByHeroId(locals.db, hero.id),
		getHeroAbilities(locals.db, hero.id),
		getHeroAbilityContexts(locals.db, hero.id)
	]);
	const own = abilityContexts.find(({ slug }) => slug === ability.slug);
	const previousFor = previousChangeLookup(
		await getPropertyLinks(locals.db, 'hero', hero.id),
		hero.name
	);
	const enrichedChangelogs = changelogs
		.map((changelog) => {
			const changeGroups =
				changelog.changeGroups
					?.map((group, groupIndex) => ({
						...group,
						icon: ability.image,
						previous: previousFor(changelog, group, groupIndex)
					}))
					.filter((group) => group.abilitySlug === ability.slug) ?? [];
			return {
				id: changelog.id,
				title: changelog.title,
				slug: changelog.slug,
				pubDate: changelog.pubDate,
				author: changelog.author,
				date: new Date(changelog.pubDate),
				changeCount: changeGroups.reduce((total, g) => total + g.bullets.length, 0),
				changeGroups
			};
		})
		.filter((changelog) => changelog.changeGroups.length > 0);
	return {
		ability,
		hero: {
			name: hero.name,
			slug: hero.slug,
			heroType: hero.heroType,
			image: heroImage(hero.images)
		},
		changelogs: enrichedChangelogs,
		abilities,
		about: own ? toPageContext(own.context) : null,
		title: `${ability.name} Changes: ${hero.name} | Deadlog`,
		description: `Track every ${ability.name} buff, nerf, and balance change for ${hero.name} across Deadlock patch notes in chronological order.`,
		image: absoluteUrl(`/assets/meta/hero/${hero.slug}.png`)
	};
};
//#endregion
export { entries, load, prerender };
