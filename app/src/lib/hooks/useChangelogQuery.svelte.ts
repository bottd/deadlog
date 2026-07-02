import { createInfiniteQuery } from '@tanstack/svelte-query';
import { useIntersectionObserver } from 'runed';
import type { ChangelogEntry } from '$lib/types';
import { searchParams as params } from '$lib/stores/searchParams.svelte';
import { queryKeys } from '$lib/queries/keys';

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
}

const PAGE_SIZE = 12;

export function useChangelogQuery(options: UseChangelogQueryOptions) {
	let trigger = $state<HTMLDivElement | null>(null);

	const query = createInfiniteQuery<
		PageData,
		Error,
		InfiniteData,
		ReturnType<typeof queryKeys.changelogsList>,
		number
	>(() => ({
		// count is part of the key: the offset math below depends on it, so cached
		// pages from a ?change= deep link (larger initial load) must not be reused
		// after navigating to the plain feed.
		queryKey: queryKeys.changelogsList({
			hero: params.hero,
			item: params.item,
			q: params.q,
			count: options.getInitialLoadCount()
		}),
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
			// Page 0 normally comes from SSR initialData, but TanStack re-runs it on
			// refetch/invalidate — it must re-request the same window, not a PAGE_SIZE
			// slice at a negative offset.
			const initial = options.getInitialLoadCount();
			const limit = pageParam === 0 ? initial : PAGE_SIZE;
			const offset = pageParam === 0 ? 0 : initial + (pageParam - 1) * PAGE_SIZE;
			const searchParams = params.toURLSearchParams();
			searchParams.set('limit', String(limit));
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
