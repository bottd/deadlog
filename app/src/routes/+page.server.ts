import { getFeedIndex } from '@deadlog/db';
import type { PageServerLoad } from './$types';
import { unfilteredFeedPage } from '$lib/feed/pages';

// The default (unfiltered) feed is baked at build time. Filtered views are noindex
// and hydrate client-side from the static feed index, so this load must not touch
// url.searchParams — that also keeps client-side filter navigation from refetching
// page data.
export const prerender = true;

export const load: PageServerLoad = async ({ locals }) => {
	const index = await getFeedIndex(locals.db);
	const { changelogs } = unfilteredFeedPage(index, 0);

	return {
		changelogs,
		totalCount: index.rows.length,
		lastUpdate: changelogs[0]?.date ?? new Date().toISOString()
	};
};
