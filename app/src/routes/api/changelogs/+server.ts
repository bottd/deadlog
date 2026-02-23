import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { queryChangelogs, getAllHeroes, getAllItems } from '@deadlog/scraper';
import {
	enrichChangelogs,
	resolveEntityIds,
	parseApiParams
} from '$lib/server/changelog-utils';

export const GET: RequestHandler = async ({ url, locals }) => {
	const { limit, offset, hero, item, q } = parseApiParams(url);

	const heroIdsParam = url.searchParams.get('heroIds');
	const itemIdsParam = url.searchParams.get('itemIds');

	let heroIds = heroIdsParam ? heroIdsParam.split(',').map(Number) : [];
	let itemIds = itemIdsParam ? itemIdsParam.split(',').map(Number) : [];

	if (hero.length > 0 && heroIds.length === 0) {
		const heroes = await getAllHeroes(locals.db);
		heroIds = resolveEntityIds(hero, heroes);
	}

	if (item.length > 0 && itemIds.length === 0) {
		const items = await getAllItems(locals.db);
		itemIds = resolveEntityIds(item, items);
	}

	const changelogs = await queryChangelogs(locals.db, {
		heroIds,
		itemIds,
		searchQuery: q,
		limit,
		offset
	});

	const enriched = await enrichChangelogs(locals.db, changelogs);

	return json({
		changelogs: enriched,
		hasMore: enriched.length === limit
	});
};
