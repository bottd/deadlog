// @ts-nocheck
import {
	getRenderableItemSlugs,
	getItemBySlug,
	getItemContext,
	getPropertyLinks,
	getChangelogsByItemId,
	getHeroIconsByIds
} from '@deadlog/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { DEFAULT_SOCIAL_IMAGE, absoluteUrl } from '$lib/seo';
import { toPageContext } from '$lib/components/entity/pageContext';
import { previousChangeLookup } from '$lib/components/entity/previousChanges';
import { boughtByRows, buyTime } from '$lib/components/entity/shareRows';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getRenderableItemSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
	const item = await getItemBySlug(locals.db, params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	const [changelogs, context, links] = await Promise.all([
		getChangelogsByItemId(locals.db, item.id),
		getItemContext(locals.db, item.id),
		getPropertyLinks(locals.db, 'item', item.id)
	]);
	const previousFor = previousChangeLookup(links, item.name);
	const heroes = await getHeroIconsByIds(
		locals.db,
		changelogs.flatMap(
			(changelog) => changelog.boughtBy?.heroes.map((hero) => hero.id) ?? []
		)
	);

	const enrichedChangelogs = changelogs.map(({ boughtBy, ...changelog }) => ({
		...changelog,
		boughtBy: boughtBy ? boughtByRows(boughtBy, heroes) : null,
		buyTime: buyTime(changelog.impact),
		date: new Date(changelog.pubDate),
		changeGroups:
			changelog.changeGroups?.map((group, groupIndex) => ({
				...group,
				previous: previousFor(changelog, group, groupIndex)
			})) ?? null
	}));

	return {
		item,
		changelogs: enrichedChangelogs,
		about: context ? toPageContext(context) : null,
		title: `${item.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${item.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: item.isReleased
			? absoluteUrl(`/assets/meta/item/${params.slug}.png`)
			: DEFAULT_SOCIAL_IMAGE
	};
};
