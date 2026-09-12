import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { queryChangelogs, getEntityNames } from '@deadlog/db';
import {
	buildPatchSummaries,
	resolveEntityIds,
	parseApiParams,
	splitPage
} from '$lib/server/changelog-utils';

export const GET: RequestHandler = async ({ url, locals }) => {
	const { limit, offset, hero, item, q, major } = parseApiParams(url);

	const [heroes, items] = await Promise.all([
		hero.length > 0 ? getEntityNames(locals.db, 'hero') : [],
		item.length > 0 ? getEntityNames(locals.db, 'item') : []
	]);

	const heroIds = resolveEntityIds(hero, heroes);
	const itemIds = resolveEntityIds(item, items);

	const changelogs = await queryChangelogs(locals.db, {
		heroIds,
		itemIds,
		searchQuery: q,
		majorOnly: major,
		limit: limit + 1,
		offset
	});
	const page = splitPage(changelogs, limit);

	const enriched = await buildPatchSummaries(locals.db, page.rows, {
		heroIds,
		itemIds,
		q,
		isFirstPage: offset === 0
	});

	return json({
		changelogs: enriched,
		hasMore: page.hasMore
	});
};
