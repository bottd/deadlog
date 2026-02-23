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

	const [heroes, items] = await Promise.all([
		hero.length > 0 ? getAllHeroes(locals.db) : [],
		item.length > 0 ? getAllItems(locals.db) : []
	]);

	const heroIds = resolveEntityIds(hero, heroes);
	const itemIds = resolveEntityIds(item, items);

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
