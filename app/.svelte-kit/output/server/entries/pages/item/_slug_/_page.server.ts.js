import {
	C as getItemContext,
	E as getPropertyLinks,
	f as getChangelogsByItemId,
	k as getRenderableItemSlugs,
	x as getItemBySlug,
	y as getHeroIconsByIds
} from '../../../../chunks/src.js';
import { c as absoluteUrl, n as DEFAULT_SOCIAL_IMAGE } from '../../../../chunks/seo.js';
import { n as boughtByRows, r as buyTime } from '../../../../chunks/shareRows.js';
import {
	n as toPageContext,
	t as previousChangeLookup
} from '../../../../chunks/previousChanges.js';
import { error } from '@sveltejs/kit';
//#region src/routes/item/[slug]/+page.server.ts
var prerender = true;
var entries = async () => {
	const { getLibsqlDb } = await import('../../../../chunks/src3.js');
	const db = getLibsqlDb();
	return (await getRenderableItemSlugs(db)).map((slug) => ({ slug }));
};
var load = async ({ params, locals }) => {
	const item = await getItemBySlug(locals.db, params.slug);
	if (!item) throw error(404, 'Item not found');
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
	return {
		item,
		changelogs: changelogs.map(({ boughtBy, ...changelog }) => ({
			...changelog,
			boughtBy: boughtBy ? boughtByRows(boughtBy, heroes) : null,
			buyTime: buyTime(changelog.impact),
			date: new Date(changelog.pubDate),
			changeGroups:
				changelog.changeGroups?.map((group, groupIndex) => ({
					...group,
					previous: previousFor(changelog, group, groupIndex)
				})) ?? null
		})),
		about: context ? toPageContext(context) : null,
		title: `${item.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${item.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: item.isReleased
			? absoluteUrl(`/assets/meta/item/${params.slug}.png`)
			: DEFAULT_SOCIAL_IMAGE
	};
};
//#endregion
export { entries, load, prerender };
