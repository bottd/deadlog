import { createInfiniteQuery, type InfiniteData } from '@tanstack/svelte-query';
import type { ChangelogEntry, ChangelogWireEntry } from '$lib/types';
import {
	changelogsListKey,
	filtersToSearchParams,
	INITIAL_LOAD_COUNT,
	type ChangelogFilters
} from '$lib/queries/keys';

interface PageData {
	changelogs: ChangelogEntry[];
	hasMore: boolean;
}

interface WirePageData {
	changelogs: ChangelogWireEntry[];
	hasMore: boolean;
}

interface UseChangelogQueryOptions {
	getInitialChangelogs: () => ChangelogEntry[];
	getTotalCount: () => number;
	getFilters: () => Required<ChangelogFilters>;
}

const PAGE_SIZE = 12;

/** The prerendered page data holds only the unfiltered feed, so it may only seed the unfiltered query. */
function isUnfiltered(filters: ChangelogFilters): boolean {
	return filtersToSearchParams(filters).size === 0;
}

function reviveChangelog(entry: ChangelogWireEntry): ChangelogEntry {
	return {
		...entry,
		date: new Date(entry.date),
		updates: entry.updates?.map(reviveChangelog)
	};
}

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	return createInfiniteQuery<
		PageData,
		Error,
		InfiniteData<PageData, number>,
		ReturnType<typeof changelogsListKey>,
		number
	>(() => {
		const initialChangelogs = options.getInitialChangelogs();
		const filters = options.getFilters();

		return {
			queryKey: changelogsListKey(filters),
			initialData: isUnfiltered(filters)
				? {
						pages: [
							{
								changelogs: initialChangelogs,
								hasMore: options.getTotalCount() > initialChangelogs.length
							}
						],
						pageParams: [0]
					}
				: undefined,
			queryFn: async ({ pageParam, signal }) => {
				const limit = pageParam === 0 ? INITIAL_LOAD_COUNT : PAGE_SIZE;
				const offset =
					pageParam === 0 ? 0 : INITIAL_LOAD_COUNT + (pageParam - 1) * PAGE_SIZE;
				const searchParams = filtersToSearchParams(filters);
				searchParams.set('limit', String(limit));
				searchParams.set('offset', String(offset));

				const response = await fetch(`/api/changelogs?${searchParams.toString()}`, {
					signal
				});

				if (!response.ok) {
					throw new Error(`Failed to fetch changelogs: ${response.statusText}`);
				}

				const page = (await response.json()) as WirePageData;
				return { ...page, changelogs: page.changelogs.map(reviveChangelog) };
			},
			getNextPageParam: (lastPage, _pages, lastPageParam) =>
				lastPage.hasMore ? lastPageParam + 1 : undefined,
			initialPageParam: 0
		};
	});
}
