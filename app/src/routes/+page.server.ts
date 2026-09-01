import { queryChangelogs, getChangelogsCount } from '@deadlog/scraper';
import type { PageServerLoad } from './$types';
import { enrichChangelogs } from '$lib/server/changelog-utils';
import { INITIAL_LOAD_COUNT } from '$lib/queries/keys';

// The default (unfiltered) feed is baked at build time. Filtered views are noindex
// and hydrate client-side through /api/changelogs, so this load must not touch
// url.searchParams — that also keeps client-side filter navigation from refetching
// page data.
export const prerender = true;

export const load: PageServerLoad = async ({ locals }) => {
	const [changelogs, totalCount] = await Promise.all([
		queryChangelogs(locals.db, { limit: INITIAL_LOAD_COUNT, offset: 0 }),
		getChangelogsCount(locals.db)
	]);
	const enriched = await enrichChangelogs(locals.db, changelogs);

	return {
		changelogs: enriched,
		totalCount,
		lastUpdate: (enriched[0]?.date ?? new Date()).toISOString()
	};
};
