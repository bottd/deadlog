import { createInfiniteQuery } from '@tanstack/svelte-query';
import { useIntersectionObserver } from 'runed';
import type { FilteredChangelog } from '$lib/utils/filterChanges';
import { getSearchParams } from '$lib/stores/searchParams.svelte';
import { queryKeys } from '$lib/queries/keys';

interface PageData {
	changelogs: FilteredChangelog[];
	hasMore: boolean;
}

interface InfiniteData {
	pages: PageData[];
	pageParams: number[];
}

interface UseChangelogQueryOptions {
	getInitialChangelogs: () => FilteredChangelog[];
	getInitialLoadCount: () => number;
	getTotalCount: () => number;
}

const PAGE_SIZE = 12;

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	const params = getSearchParams();
	let trigger = $state<HTMLDivElement | null>(null);

	const query = createInfiniteQuery<
		PageData,
		Error,
		InfiniteData,
		ReturnType<typeof queryKeys.changelogsList>,
		number
	>(() => ({
		queryKey: queryKeys.changelogsList({
			hero: params.hero,
			item: params.item,
			q: params.q
		}),
		enabled: true,
		initialData: {
			pages: [
				{
					changelogs: options.getInitialChangelogs(),
					hasMore:
						options.getTotalCount() > 0
							? options.getTotalCount() > options.getInitialLoadCount()
							: options.getInitialChangelogs().length === options.getInitialLoadCount()
				}
			],
			pageParams: [0]
		},
		queryFn: async ({ pageParam }) => {
			const offset = options.getInitialLoadCount() + (pageParam - 1) * PAGE_SIZE;
			const searchParams = params.toURLSearchParams();
			searchParams.set('limit', String(PAGE_SIZE));
			searchParams.set('offset', String(offset));

			const response = await fetch(`/api/changelogs?${searchParams.toString()}`);

			if (!response.ok) {
				throw new Error(`Failed to fetch changelogs: ${response.statusText}`);
			}

			return (await response.json()) as PageData;
		},
		getNextPageParam: (lastPage, pages) => (lastPage.hasMore ? pages.length : undefined),
		initialPageParam: 0
	}));

	useIntersectionObserver(
		() => trigger,
		(entries) => {
			const entry = entries[0];
			if (
				entry?.isIntersecting &&
				query.hasNextPage &&
				!query.isFetchingNextPage &&
				!query.isFetching &&
				query.status !== 'error'
			) {
				query.fetchNextPage();
			}
		},
		{ threshold: 0.1 }
	);

	return {
		get query() {
			return query;
		},
		get trigger() {
			return trigger;
		},
		set trigger(el: HTMLDivElement | null) {
			trigger = el;
		}
	};
}
