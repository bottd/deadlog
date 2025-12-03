import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { queryChangelogs, getAllHeroes, getAllItems } from '@deadlog/scraper';
import {
	enrichChangelogs,
	resolveHeroIds,
	resolveItemIds
} from '$lib/server/changelog-utils';
import { parseCSV } from '$lib/stores/searchParams.svelte';

function parseApiParams(url: URL) {
	return {
		limit: Number(url.searchParams.get('limit')) || 5,
		offset: Number(url.searchParams.get('offset')) || 0,
		hero: parseCSV(url.searchParams.get('hero')),
		item: parseCSV(url.searchParams.get('item')),
		q: url.searchParams.get('q') ?? ''
	};
}

export const GET: RequestHandler = async ({ url, locals }) => {
	const { limit, offset, hero, item, q } = parseApiParams(url);

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
