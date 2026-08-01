import { createInfiniteQuery, useQueryClient } from '@tanstack/svelte-query';
import type { ChangelogEntry, ChangelogWireEntry } from '$lib/types';
import {
	changelogsListKey,
	filtersToSearchParams,
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

interface InfiniteData {
	pages: PageData[];
	pageParams: number[];
}

interface UseChangelogQueryOptions {
	getInitialChangelogs: () => ChangelogEntry[];
	getInitialLoadCount: () => number;
	getTotalCount: () => number;
	getFilters: () => Required<Omit<ChangelogFilters, 'initialCount'>>;
}

const PAGE_SIZE = 12;

function reviveChangelog(entry: ChangelogWireEntry): ChangelogEntry {
	return {
		...entry,
		date: new Date(entry.date),
		updates: entry.updates?.map(reviveChangelog)
	};
}

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	const queryClient = useQueryClient();

	// Not redundant with initialData below: initialData only seeds a missing cache
	// entry, while this refreshes an existing one when navigation brings newer SSR data.
	$effect(() => {
		const changelogs = options.getInitialChangelogs();
		const initialCount = options.getInitialLoadCount();
		const filters = options.getFilters();
		queryClient.setQueryData<InfiniteData>(
			changelogsListKey({ ...filters, initialCount }),
			{
				pages: [
					{
						changelogs,
						hasMore: options.getTotalCount() > changelogs.length
					}
				],
				pageParams: [0]
			}
		);
	});

	return createInfiniteQuery<
		PageData,
		Error,
		InfiniteData,
		ReturnType<typeof changelogsListKey>,
		number
	>(() => {
		const initialChangelogs = options.getInitialChangelogs();
		const initialCount = options.getInitialLoadCount();
		const { hero, item, q, major } = options.getFilters();

		return {
			queryKey: changelogsListKey({ hero, item, q, major, initialCount }),
			initialData: {
				pages: [
					{
						changelogs: initialChangelogs,
						hasMore: options.getTotalCount() > initialChangelogs.length
					}
				],
				pageParams: [0]
			},
			queryFn: async ({ pageParam, signal }) => {
				const limit = pageParam === 0 ? initialCount : PAGE_SIZE;
				const offset = pageParam === 0 ? 0 : initialCount + (pageParam - 1) * PAGE_SIZE;
				const searchParams = filtersToSearchParams({ hero, item, q, major });
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
