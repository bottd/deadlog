import { queryChangelogs, getChangelogsCount } from '@deadlog/db';
import type { PageServerLoad } from './$types';
import { buildPatchSummaries } from '$lib/server/changelog-utils';
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
	const enriched = await buildPatchSummaries(locals.db, changelogs, {
		isFirstPage: true
	});

	return {
		changelogs: enriched,
		totalCount,
		lastUpdate: enriched[0]?.date ?? new Date().toISOString()
	};
};
