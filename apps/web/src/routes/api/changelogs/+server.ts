import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { queryChangelogs, getAllHeroes, getAllItems } from '@deadlog/scraper';
import { validateSearchParams } from 'runed/kit';
import { z } from 'zod';
import {
	enrichChangelogs,
	resolveHeroIds,
	resolveItemIds
} from '$lib/server/changelog-utils';

const apiParamSchema = z.object({
	limit: z.number().default(5),
	offset: z.number().default(0),
	hero: z.array(z.string()).default([]),
	item: z.array(z.string()).default([]),
	q: z.string().default('')
});

export const GET: RequestHandler = async ({ url, locals }) => {
	const {
		data: { limit, offset, hero, item, q }
	} = validateSearchParams(url, apiParamSchema);

	const [heroes, items] = await Promise.all([
		getAllHeroes(locals.db),
		getAllItems(locals.db)
	]);

	const heroIds = resolveHeroIds(hero, heroes);
	const itemIds = resolveItemIds(item, items);

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
