import {
	c as getChangelogAbilityIcons,
	i as getAllChangelogSlugs,
	l as getChangelogBySlug,
	t as getPatchReadingData,
	u as getChangelogIcons
} from '../../../../chunks/src.js';
import {
	_ as entityNamesMatch,
	a as formatDate,
	m as toSlug,
	u as makeSummary
} from '../../../../chunks/src2.js';
import { c as absoluteUrl, u as changePath } from '../../../../chunks/seo.js';
import { r as previousKey, t as detailKey } from '../../../../chunks/readingContext.js';
import {
	i as maxedFirstRows,
	n as boughtByRows,
	r as buyTime
} from '../../../../chunks/shareRows.js';
import {
	n as toPageContext,
	t as previousChangeLookup
} from '../../../../chunks/previousChanges.js';
import { error } from '@sveltejs/kit';
import { createHash } from 'node:crypto';
//#region src/lib/server/patchReading.ts
var tocModules = /* #__PURE__ */ Object.assign({
	'../../../changelogs/2024/05-03.mg': () =>
		import('../../../../chunks/05-03.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-10.mg': () =>
		import('../../../../chunks/05-10.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-13.mg': () =>
		import('../../../../chunks/05-13.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-16.mg': () =>
		import('../../../../chunks/05-16.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-19.mg': () =>
		import('../../../../chunks/05-19.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-23.mg': () =>
		import('../../../../chunks/05-23.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-24.mg': () =>
		import('../../../../chunks/05-24.js').then((m) => m['toc']),
	'../../../changelogs/2024/05-30.mg': () =>
		import('../../../../chunks/05-30.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-01.mg': () =>
		import('../../../../chunks/06-01.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-06.mg': () =>
		import('../../../../chunks/06-06.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-07.mg': () =>
		import('../../../../chunks/06-07.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-13.mg': () =>
		import('../../../../chunks/06-13.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-14.mg': () =>
		import('../../../../chunks/06-14.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-16.mg': () =>
		import('../../../../chunks/06-16.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-20.mg': () =>
		import('../../../../chunks/06-20.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-23.mg': () =>
		import('../../../../chunks/06-23.js').then((m) => m['toc']),
	'../../../changelogs/2024/06-27.mg': () =>
		import('../../../../chunks/06-27.js').then((m) => m['toc']),
	'../../../changelogs/2024/07-04.mg': () =>
		import('../../../../chunks/07-04.js').then((m) => m['toc']),
	'../../../changelogs/2024/07-11.mg': () =>
		import('../../../../chunks/07-11.js').then((m) => m['toc']),
	'../../../changelogs/2024/07-18.mg': () =>
		import('../../../../chunks/07-18.js').then((m) => m['toc']),
	'../../../changelogs/2024/07-23.mg': () =>
		import('../../../../chunks/07-23.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-01.mg': () =>
		import('../../../../chunks/08-01.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-06.mg': () =>
		import('../../../../chunks/08-06.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-15.mg': () =>
		import('../../../../chunks/08-15.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-16.mg': () =>
		import('../../../../chunks/08-16.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-18.mg': () =>
		import('../../../../chunks/08-18.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-22.mg': () =>
		import('../../../../chunks/08-22.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-23.mg': () =>
		import('../../../../chunks/08-23.js').then((m) => m['toc']),
	'../../../changelogs/2024/08-29.mg': () =>
		import('../../../../chunks/08-29.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-01.mg': () =>
		import('../../../../chunks/09-01.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-12.mg': () =>
		import('../../../../chunks/09-12.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-14.mg': () =>
		import('../../../../chunks/09-14.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-17.mg': () =>
		import('../../../../chunks/09-17.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-19.mg': () =>
		import('../../../../chunks/09-19.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-26.mg': () =>
		import('../../../../chunks/09-26.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-27.mg': () =>
		import('../../../../chunks/09-27.js').then((m) => m['toc']),
	'../../../changelogs/2024/09-29.mg': () =>
		import('../../../../chunks/09-29.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-02.mg': () =>
		import('../../../../chunks/10-02.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-07.mg': () =>
		import('../../../../chunks/10-07.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-10.mg': () =>
		import('../../../../chunks/10-10.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-11.mg': () =>
		import('../../../../chunks/10-11.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-15.mg': () =>
		import('../../../../chunks/10-15.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-18-2.mg': () =>
		import('../../../../chunks/10-18-2.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-18.mg': () =>
		import('../../../../chunks/10-18.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-24.mg': () =>
		import('../../../../chunks/10-24.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-27.mg': () =>
		import('../../../../chunks/10-27.js').then((m) => m['toc']),
	'../../../changelogs/2024/10-29.mg': () =>
		import('../../../../chunks/10-29.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-01.mg': () =>
		import('../../../../chunks/11-01.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-07.mg': () =>
		import('../../../../chunks/11-07.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-10.mg': () =>
		import('../../../../chunks/11-10.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-13.mg': () =>
		import('../../../../chunks/11-13.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-21.mg': () =>
		import('../../../../chunks/11-21.js').then((m) => m['toc']),
	'../../../changelogs/2024/11-29.mg': () =>
		import('../../../../chunks/11-29.js').then((m) => m['toc']),
	'../../../changelogs/2024/12-06.mg': () =>
		import('../../../../chunks/12-06.js').then((m) => m['toc']),
	'../../../changelogs/2024/12-17.mg': () =>
		import('../../../../chunks/12-17.js').then((m) => m['toc']),
	'../../../changelogs/2024/12-21.mg': () =>
		import('../../../../chunks/12-21.js').then((m) => m['toc']),
	'../../../changelogs/2024/12-31.mg': () =>
		import('../../../../chunks/12-31.js').then((m) => m['toc']),
	'../../../changelogs/2025/01-12.mg': () =>
		import('../../../../chunks/01-12.js').then((m) => m['toc']),
	'../../../changelogs/2025/01-17.mg': () =>
		import('../../../../chunks/01-17.js').then((m) => m['toc']),
	'../../../changelogs/2025/01-19.mg': () =>
		import('../../../../chunks/01-19.js').then((m) => m['toc']),
	'../../../changelogs/2025/01-27.mg': () =>
		import('../../../../chunks/01-27.js').then((m) => m['toc']),
	'../../../changelogs/2025/02-11.mg': () =>
		import('../../../../chunks/02-11.js').then((m) => m['toc']),
	'../../../changelogs/2025/02-25.mg': () =>
		import('../../../../chunks/02-25.js').then((m) => m['toc']),
	'../../../changelogs/2025/03-13.mg': () =>
		import('../../../../chunks/03-13.js').then((m) => m['toc']),
	'../../../changelogs/2025/03-16.mg': () =>
		import('../../../../chunks/03-16.js').then((m) => m['toc']),
	'../../../changelogs/2025/03-19.mg': () =>
		import('../../../../chunks/03-19.js').then((m) => m['toc']),
	'../../../changelogs/2025/04-04.mg': () =>
		import('../../../../chunks/04-04.js').then((m) => m['toc']),
	'../../../changelogs/2025/04-17.mg': () =>
		import('../../../../chunks/04-17.js').then((m) => m['toc']),
	'../../../changelogs/2025/05-08.mg': () =>
		import('../../../../chunks/05-08.js').then((m) => m['toc']),
	'../../../changelogs/2025/05-11.mg': () =>
		import('../../../../chunks/05-11.js').then((m) => m['toc']),
	'../../../changelogs/2025/05-19.mg': () =>
		import('../../../../chunks/05-192.js').then((m) => m['toc']),
	'../../../changelogs/2025/05-21.mg': () =>
		import('../../../../chunks/05-21.js').then((m) => m['toc']),
	'../../../changelogs/2025/05-27.mg': () =>
		import('../../../../chunks/05-27.js').then((m) => m['toc']),
	'../../../changelogs/2025/06-17.mg': () =>
		import('../../../../chunks/06-17.js').then((m) => m['toc']),
	'../../../changelogs/2025/07-04.mg': () =>
		import('../../../../chunks/07-042.js').then((m) => m['toc']),
	'../../../changelogs/2025/07-29.mg': () =>
		import('../../../../chunks/07-29.js').then((m) => m['toc']),
	'../../../changelogs/2025/08-18.mg': () =>
		import('../../../../chunks/08-182.js').then((m) => m['toc']),
	'../../../changelogs/2025/09-04.mg': () =>
		import('../../../../chunks/09-04.js').then((m) => m['toc']),
	'../../../changelogs/2025/10-02.mg': () =>
		import('../../../../chunks/10-022.js').then((m) => m['toc']),
	'../../../changelogs/2025/10-24.mg': () =>
		import('../../../../chunks/10-242.js').then((m) => m['toc']),
	'../../../changelogs/2025/11-21.mg': () =>
		import('../../../../chunks/11-212.js').then((m) => m['toc']),
	'../../../changelogs/2025/12-16.mg': () =>
		import('../../../../chunks/12-16.js').then((m) => m['toc']),
	'../../../changelogs/2025/12-29.mg': () =>
		import('../../../../chunks/12-29.js').then((m) => m['toc']),
	'../../../changelogs/2025/billy-comes-in-swinging.mg': () =>
		import('../../../../chunks/billy-comes-in-swinging.js').then((m) => m['toc']),
	'../../../changelogs/2025/drifter-emerges-from-the-shadows.mg': () =>
		import('../../../../chunks/drifter-emerges-from-the-shadows.js').then(
			(m) => m['toc']
		),
	'../../../changelogs/2025/paige-writes-her-own-story.mg': () =>
		import('../../../../chunks/paige-writes-her-own-story.js').then((m) => m['toc']),
	'../../../changelogs/2025/the-doorman-at-your-service.mg': () =>
		import('../../../../chunks/the-doorman-at-your-service.js').then((m) => m['toc']),
	'../../../changelogs/2025/you-cant-kill-victor.mg': () =>
		import('../../../../chunks/you-cant-kill-victor.js').then((m) => m['toc']),
	'../../../changelogs/2026/01-30.mg': () =>
		import('../../../../chunks/01-30.js').then((m) => m['toc']),
	'../../../changelogs/2026/03-06.mg': () =>
		import('../../../../chunks/03-06.js').then((m) => m['toc']),
	'../../../changelogs/2026/03-21.mg': () =>
		import('../../../../chunks/03-21.js').then((m) => m['toc']),
	'../../../changelogs/2026/03-25.mg': () =>
		import('../../../../chunks/03-25.js').then((m) => m['toc']),
	'../../../changelogs/2026/04-10.mg': () =>
		import('../../../../chunks/04-10.js').then((m) => m['toc']),
	'../../../changelogs/2026/04-30.mg': () =>
		import('../../../../chunks/04-30.js').then((m) => m['toc']),
	'../../../changelogs/2026/05-22.mg': () =>
		import('../../../../chunks/05-22.js').then((m) => m['toc']),
	'../../../changelogs/2026/06-30.mg': () =>
		import('../../../../chunks/06-30.js').then((m) => m['toc']),
	'../../../changelogs/2026/08-12.mg': () =>
		import('../../../../chunks/08-12.js').then((m) => m['toc']),
	'../../../changelogs/2026/08-22.mg': () =>
		import('../../../../chunks/08-222.js').then((m) => m['toc']),
	'../../../changelogs/2026/09-16.mg': () =>
		import('../../../../chunks/09-16.js').then((m) => m['toc']),
	'../../../changelogs/2026/apollo-a-cut-above.mg': () =>
		import('../../../../chunks/apollo-a-cut-above.js').then((m) => m['toc']),
	'../../../changelogs/2026/graves-prefers-the-dead.mg': () =>
		import('../../../../chunks/graves-prefers-the-dead.js').then((m) => m['toc']),
	'../../../changelogs/2026/introducing-the-dazzling-celeste.mg': () =>
		import('../../../../chunks/introducing-the-dazzling-celeste.js').then(
			(m) => m['toc']
		),
	'../../../changelogs/2026/matchmaking.mg': () =>
		import('../../../../chunks/matchmaking.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-05-25.mg': () =>
		import('../../../../chunks/minor-05-25.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-05-28.mg': () =>
		import('../../../../chunks/minor-05-28.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-05-31.mg': () =>
		import('../../../../chunks/minor-05-31.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-06-04.mg': () =>
		import('../../../../chunks/minor-06-04.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-06-11.mg': () =>
		import('../../../../chunks/minor-06-11.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-07-01.mg': () =>
		import('../../../../chunks/minor-07-01.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-07-09.mg': () =>
		import('../../../../chunks/minor-07-09.js').then((m) => m['toc']),
	'../../../changelogs/2026/minor-07-28.mg': () =>
		import('../../../../chunks/minor-07-28.js').then((m) => m['toc']),
	'../../../changelogs/2026/old-gods-new-blood.mg': () =>
		import('../../../../chunks/old-gods-new-blood.js').then((m) => m['toc']),
	'../../../changelogs/2026/rem-enters-the-city-that-never-sleeps.mg': () =>
		import('../../../../chunks/rem-enters-the-city-that-never-sleeps.js').then(
			(m) => m['toc']
		),
	'../../../changelogs/2026/some-are-merciful-the-venator-is-not.mg': () =>
		import('../../../../chunks/some-are-merciful-the-venator-is-not.js').then(
			(m) => m['toc']
		),
	'../../../changelogs/2026/the-curse-beckons-for-silver.mg': () =>
		import('../../../../chunks/the-curse-beckons-for-silver.js').then((m) => m['toc'])
});
var tocCache = /* @__PURE__ */ new Map();
function patchToc(slug) {
	let pending = tocCache.get(slug);
	if (!pending) {
		const loader = tocModules[`../../../changelogs/${slug}.mg`];
		pending = loader ? loader().then((value) => value) : Promise.resolve([]);
		tocCache.set(slug, pending);
	}
	return pending;
}
async function projectPatchReading(data, patch, loadToc = patchToc) {
	const details = {};
	for (const item of data.items)
		if (item.context && item.groups?.some((group) => group.bullets.length))
			details[detailKey('item', item.id)] = {
				name: item.name,
				historyHref: `/item/${item.slug}`,
				context: toPageContext(item.context)
			};
	for (const ability of data.abilities) {
		const exact = data.heroes
			.find((hero) => hero.id === ability.heroId)
			?.groups?.some(
				(group) =>
					group.ability &&
					group.bullets.length &&
					group.abilitySlug === ability.slug &&
					toSlug(group.ability) === ability.slug
			);
		if (ability.context && exact)
			details[detailKey('hero', ability.heroId, ability.slug)] = {
				name: ability.name,
				historyHref: `/ability/${ability.slug}`,
				context: toPageContext(ability.context)
			};
	}
	const previous = {};
	await Promise.all(
		data.links.map(async (link) => {
			if (
				link.extractionVersion !== 1 ||
				link.previousOld === null ||
				link.previousNew === null
			)
				return;
			const entity = (link.entityType === 'hero' ? data.heroes : data.items).find(
				(entity) => entity.id === link.entityId
			);
			const group = entity?.groups?.[link.groupIndex];
			const bullet = group?.bullets[link.bulletIndex];
			if (
				!entity ||
				!group ||
				!bullet ||
				createHash('sha256').update(bullet).digest('hex').slice(0, 16) !== link.digest
			)
				return;
			const toc = await loadToc(link.previousSlug);
			let owner = null;
			const headings = toc.filter((heading) => {
				if (heading.level <= 2) owner = heading.level === 2 ? heading.title : null;
				return group.ability
					? heading.level === 3 &&
							heading.title === group.ability &&
							owner !== null &&
							entityNamesMatch(owner, entity.name)
					: heading.level === 2 && entityNamesMatch(heading.title, entity.name);
			});
			if (headings.length !== 1) return;
			const annotation = previousChangeLookup(
				[
					{
						...link,
						previousOld: link.previousOld,
						previousNew: link.previousNew
					}
				],
				entity.name
			)(patch, group, link.groupIndex)?.[link.bulletIndex];
			if (annotation)
				previous[
					previousKey(link.entityType, entity.id, link.groupIndex, link.bulletIndex)
				] = {
					...annotation,
					bullet,
					href: `${changePath({ slug: link.previousSlug })}#${headings[0].id}`
				};
		})
	);
	const maxedFirst = {};
	for (const hero of data.heroes) {
		if (!hero.abilityOrder) continue;
		const abilities = data.abilities.filter((ability) => ability.heroId === hero.id);
		const rows = maxedFirstRows(hero.abilityOrder, abilities, hero.groups);
		if (rows.length) maxedFirst[String(hero.id)] = rows;
	}
	const boughtBy = {};
	const buyTimes = {};
	for (const item of data.items) {
		const rows = item.boughtBy ? boughtByRows(item.boughtBy, data.heroIcons) : [];
		if (rows.length) boughtBy[String(item.id)] = rows;
		const time = buyTime(item.impact);
		if (time) buyTimes[String(item.id)] = time;
	}
	return {
		details,
		previous,
		maxedFirst,
		boughtBy,
		buyTime: buyTimes
	};
}
//#endregion
//#region src/lib/server/changelog-utils.ts
async function buildChangePageData(db, changelog) {
	const [iconsMap, abilityIcons, readingData] = await Promise.all([
		getChangelogIcons(db, [changelog.id]),
		getChangelogAbilityIcons(db, changelog.id),
		getPatchReadingData(db, changelog.id)
	]);
	const icons = iconsMap[changelog.id] ?? {
		heroes: [],
		items: []
	};
	const date = new Date(changelog.pubDate);
	const description =
		makeSummary(changelog.contentText, 155) ||
		`Read the ${formatDate(date)} Deadlock patch notes, including hero, item, and gameplay balance changes.`;
	const { contentText, ...changelogFields } = changelog;
	return {
		reading: await projectPatchReading(readingData, changelog),
		changelog: {
			...changelogFields,
			date,
			icons,
			abilityIcons
		},
		title: `${changelog.title} | Deadlock Patch Notes`,
		description,
		image: absoluteUrl(`/assets/meta/change/${changelog.id}.png`),
		isIndexable: Boolean(contentText?.trim())
	};
}
//#endregion
//#region src/routes/change/[...slug]/+page.server.ts
var prerender = true;
var entries = async () => {
	const { getLibsqlDb } = await import('../../../../chunks/src3.js');
	const db = getLibsqlDb();
	return (await getAllChangelogSlugs(db)).map((slug) => ({ slug }));
};
var load = async ({ params, locals }) => {
	const changelog = await getChangelogBySlug(locals.db, params.slug);
	if (!changelog) throw error(404, 'Changelog not found');
	return buildChangePageData(locals.db, changelog);
};
//#endregion
export { entries, load, prerender };
