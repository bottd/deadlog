import { createInfiniteQuery, type InfiniteData } from '@tanstack/svelte-query';
import type { PatchSummary } from '$lib/types';
import { searchParams } from '$lib/stores/searchParams.svelte';
import {
	changelogsListKey,
	filtersToSearchParams,
	INITIAL_LOAD_COUNT,
	type ChangelogFilters
} from '$lib/queries/keys';

interface PageData {
	changelogs: PatchSummary[];
	hasMore: boolean;
}

/** The prerendered feed the query starts from, read fresh so it stays reactive. */
interface UseChangelogQueryOptions {
	getSeed: () => { changelogs: PatchSummary[]; totalCount: number };
}

const PAGE_SIZE = 12;

/** The prerendered page data holds only the unfiltered feed, so it may only seed the unfiltered query. */
function isUnfiltered(filters: ChangelogFilters): boolean {
	return filtersToSearchParams(filters).size === 0;
}

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	return createInfiniteQuery<
		PageData,
		Error,
		InfiniteData<PageData, number>,
		ReturnType<typeof changelogsListKey>,
		number
	>(() => {
		const seed = options.getSeed();
		const filters = searchParams.filters;

		return {
			queryKey: changelogsListKey(filters),
			initialData: isUnfiltered(filters)
				? {
						pages: [
							{
								changelogs: seed.changelogs,
								hasMore: seed.totalCount > seed.changelogs.length
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

				return (await response.json()) as PageData;
			},
			getNextPageParam: (lastPage, _pages, lastPageParam) =>
				lastPage.hasMore ? lastPageParam + 1 : undefined,
			initialPageParam: 0
		};
	});
}
