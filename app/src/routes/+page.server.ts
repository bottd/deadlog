import {
	queryChangelogs,
	getChangelogsCount,
	getHeroByName,
	getItemByName,
	getAllHeroes,
	getAllItems
} from '@deadlog/scraper';
import type { PageServerLoad } from './$types';
import { absoluteUrl, DEFAULT_SOCIAL_IMAGE, SITE_DESCRIPTION } from '$lib/seo';
import {
	enrichChangelogs,
	resolveEntityIds,
	parseApiParams,
	splitPage
} from '$lib/server/changelog-utils';

export const prerender = false;

export const load: PageServerLoad = async ({ locals, url, parent }) => {
	const { hero, item, q, major } = parseApiParams(url);

	// Get heroes and items from layout data
	const { heroes, items } = await parent();
	const [filterHeroes, filterItems] = await Promise.all([
		hero.length > 0 ? getAllHeroes(locals.db) : heroes,
		item.length > 0 ? getAllItems(locals.db) : items
	]);

	const heroIds = resolveEntityIds(hero, filterHeroes);
	const itemIds = resolveEntityIds(item, filterItems);

	const initialLoadLimit = 15;

	const queriedChangelogs = await queryChangelogs(locals.db, {
		heroIds,
		itemIds,
		searchQuery: q,
		majorOnly: major,
		limit: initialLoadLimit + 1,
		offset: 0
	});
	const { rows: allChangelogs, hasMore: initialHasMore } = splitPage(
		queriedChangelogs,
		initialLoadLimit
	);

	const totalCount =
		hero.length === 0 && item.length === 0 && !q && !major
			? await getChangelogsCount(locals.db)
			: initialHasMore
				? initialLoadLimit + 1
				: allChangelogs.length;

	const enriched = await enrichChangelogs(locals.db, allChangelogs);

	let pageMeta = {
		title: 'Deadlock Patch Notes & Changelog | Deadlog',
		description: SITE_DESCRIPTION,
		image: DEFAULT_SOCIAL_IMAGE
	};

	if (hero[0]) {
		const data = await getHeroByName(locals.db, hero[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
				description: `Track every ${data.name} buff, nerf, and balance change across Deadlock patch notes.`,
				image: absoluteUrl(`/assets/meta/hero/${data.slug}.png`)
			};
		}
	} else if (item[0]) {
		const data = await getItemByName(locals.db, item[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
				description: `Track every ${data.name} buff, nerf, and balance change across Deadlock patch notes.`,
				image: absoluteUrl(`/assets/meta/item/${data.slug}.png`)
			};
		}
	}

	return {
		changelogs: enriched,
		filters: { hero, item, q, major },
		totalCount,
		initialLoadCount: initialLoadLimit,
		lastUpdate: (enriched[0]?.date ?? new Date()).toISOString(),
		title: pageMeta.title,
		description: pageMeta.description,
		image: pageMeta.image
	};
};
