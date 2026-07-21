import { createInfiniteQuery } from '@tanstack/svelte-query';
import { useIntersectionObserver } from 'runed';
import { page } from '$app/state';
import type { ChangelogEntry } from '$lib/types';
import { queryKeys } from '$lib/queries/keys';
import { parseCSV, toCSV } from '$lib/utils/csv';

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
	>(() => {
		const initialChangelogs = options.getInitialChangelogs();
		const initialCount = options.getInitialLoadCount();
		const hero = parseCSV(page.url.searchParams.get('hero'));
		const item = parseCSV(page.url.searchParams.get('item'));
		const q = page.url.searchParams.get('q') ?? '';

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
