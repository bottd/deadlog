import {
	E as getPropertyLinks,
	O as getRenderableHeroSlugs,
	S as getItemChangesInPatches,
	_ as getHeroAbilityContexts,
	d as getChangelogsByHeroId,
	g as getHeroAbilities,
	v as getHeroBySlug
} from '../../../../chunks/src.js';
import { i as entityFragmentId } from '../../../../chunks/src2.js';
import { r as relatedShare } from '../../../../chunks/relatedItems.js';
import {
	c as absoluteUrl,
	n as DEFAULT_SOCIAL_IMAGE,
	u as changePath
} from '../../../../chunks/seo.js';
import { n as getHeroCardImage } from '../../../../chunks/entityImages2.js';
import { i as maxedFirstRows } from '../../../../chunks/shareRows.js';
import {
	n as toPageContext,
	t as previousChangeLookup
} from '../../../../chunks/previousChanges.js';
import { error } from '@sveltejs/kit';
//#region src/lib/components/entity/relatedChanges.ts
function relatedChanges(patch, changes) {
	const related = patch.relatedItems;
	const before = patch.stats?.before;
	if (!related || related.status !== 'complete' || !before) return null;
	const items = related.items.flatMap((item) => {
		const change = changes.find(
			(entry) => entry.changelogId === patch.id && entry.itemId === item.id
		);
		if (!change) {
			console.warn(
				`Related item ${item.id} has no change section in ${patch.slug}; omitted`
			);
			return [];
		}
		return [
			{
				name: change.name,
				image: change.image,
				...relatedShare(related, item),
				groups: change.changeGroups,
				href: `${changePath(patch)}#${entityFragmentId(change.name)}`
			}
		];
	});
	return items.length > 0
		? {
				stats: {
					before,
					after: patch.stats?.after ?? null
				},
				items
			}
		: null;
}
//#endregion
//#region src/routes/hero/[slug]/+page.server.ts
var prerender = true;
var entries = async () => {
	const { getLibsqlDb } = await import('../../../../chunks/src3.js');
	const db = getLibsqlDb();
	return (await getRenderableHeroSlugs(db)).map((slug) => ({ slug }));
};
var load = async ({ params, locals }) => {
	const hero = await getHeroBySlug(locals.db, params.slug);
	if (!hero) throw error(404, 'Hero not found');
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
			related: relatedChanges(
				{
					...changelog,
					relatedItems
				},
				itemChanges
			),
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
//#endregion
export { entries, load, prerender };
