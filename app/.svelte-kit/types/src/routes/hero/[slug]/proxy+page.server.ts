// @ts-nocheck
import {
	getRenderableHeroSlugs,
	getHeroBySlug,
	getHeroAbilities,
	getHeroAbilityContexts,
	getItemChangesInPatches,
	getPropertyLinks,
	getChangelogsByHeroId
} from '@deadlog/db';
import { error } from '@sveltejs/kit';
import { getHeroCardImage } from '$lib/utils/entityImages';
import { toPageContext } from '$lib/components/entity/pageContext';
import { relatedChanges } from '$lib/components/entity/relatedChanges';
import { maxedFirstRows } from '$lib/components/entity/shareRows';
import { previousChangeLookup } from '$lib/components/entity/previousChanges';
import { DEFAULT_SOCIAL_IMAGE, absoluteUrl } from '$lib/seo';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getRenderableHeroSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
	const hero = await getHeroBySlug(locals.db, params.slug);

	if (!hero) {
		throw error(404, 'Hero not found');
	}

	const [changelogs, abilities, abilityContexts] = await Promise.all([
		getChangelogsByHeroId(locals.db, hero.id),
		getHeroAbilities(locals.db, hero.id),
		getHeroAbilityContexts(locals.db, hero.id)
	]);

	const changedSlugs = new Set(
		changelogs.flatMap(
			(changelog) => changelog.changeGroups?.map((group) => group.abilitySlug) ?? []
		)
	);
	const contexts = Object.fromEntries(
		abilityContexts
			.filter(({ slug }) => changedSlugs.has(slug))
			.map(({ slug, context }) => [slug, toPageContext(context)])
	);

	const itemChanges = await getItemChangesInPatches(
		locals.db,
		changelogs.flatMap(
			(changelog) =>
				changelog.relatedItems?.items.map((item) => ({
					changelogId: changelog.id,
					itemId: item.id
				})) ?? []
		)
	);

	const previousFor = previousChangeLookup(
		await getPropertyLinks(locals.db, 'hero', hero.id),
		hero.name
	);

	const enrichedChangelogs = changelogs.map(
		({ relatedItems, abilityOrder, ...changelog }) => ({
			...changelog,
			related: relatedChanges({ ...changelog, relatedItems }, itemChanges),
			maxedFirst: abilityOrder
				? maxedFirstRows(abilityOrder, abilities, changelog.changeGroups)
				: null,
			date: new Date(changelog.pubDate),
			changeGroups:
				changelog.changeGroups?.map((group, groupIndex) => ({
					...group,
					previous: previousFor(changelog, group, groupIndex),
					icon:
						abilities.find((ability) => ability.slug === group.abilitySlug)?.image ?? null
				})) ?? null
		})
	);

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
		contexts,
		title: `${hero.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${hero.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: hero.isReleased
			? absoluteUrl(`/assets/meta/hero/${params.slug}.png`)
			: DEFAULT_SOCIAL_IMAGE
	};
};
