import { createInfiniteQuery, useQueryClient } from '@tanstack/svelte-query';
import type { ChangelogEntry } from '$lib/types';
import { queryKeys } from '$lib/queries/keys';
import { toCSV } from '$lib/utils/csv';

interface PageData {
	changelogs: ChangelogEntry[];
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
	getFilters: () => { hero: string[]; item: string[]; q: string };
}

const PAGE_SIZE = 12;

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	const queryClient = useQueryClient();

	$effect(() => {
		const changelogs = options.getInitialChangelogs();
		const initialCount = options.getInitialLoadCount();
		const filters = options.getFilters();
		queryClient.setQueryData<InfiniteData>(
			queryKeys.changelogsList({ ...filters, initialCount }),
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

	const query = createInfiniteQuery<
		PageData,
		Error,
		InfiniteData,
		ReturnType<typeof queryKeys.changelogsList>,
		number
	>(() => {
		const initialChangelogs = options.getInitialChangelogs();
		const initialCount = options.getInitialLoadCount();
		const { hero, item, q } = options.getFilters();

		return {
			queryKey: queryKeys.changelogsList({ hero, item, q, initialCount }),
			initialData: {
				pages: [
					{
						changelogs: initialChangelogs,
						hasMore: options.getTotalCount() > initialChangelogs.length
					}
				],
				pageParams: [0]
			},
			queryFn: async ({ pageParam }) => {
				const limit = pageParam === 0 ? initialCount : PAGE_SIZE;
				const offset = pageParam === 0 ? 0 : initialCount + (pageParam - 1) * PAGE_SIZE;
				const searchParams = new URLSearchParams();
				if (hero.length > 0) searchParams.set('hero', toCSV(hero));
				if (item.length > 0) searchParams.set('item', toCSV(item));
				if (q) searchParams.set('q', q);
				searchParams.set('limit', String(limit));
				searchParams.set('offset', String(offset));

				const response = await fetch(`/api/changelogs?${searchParams.toString()}`);

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

	return {
		get query() {
			return query;
		}
	};
}
