import { createInfiniteQuery, type InfiniteData } from '@tanstack/svelte-query';
import type { PatchSummary } from '$lib/types';
import { searchParams } from '$lib/stores/searchParams.svelte';
import { assembleSummaries, queryFeed, resolveEntityIds } from '$lib/feed/assemble';
import {
	loadFeedGroups,
	loadFeedIndex,
	loadFeedPage,
	loadFeedText
} from '$lib/feed/load';
import { feedWindow, type FeedPage } from '$lib/feed/pages';
import {
	changelogsListKey,
	filtersToSearchParams,
	type ChangelogFilters
} from '$lib/queries/keys';

type PageData = FeedPage;

/** The prerendered feed the query starts from, read fresh so it stays reactive. */
interface UseChangelogQueryOptions {
	getSeed: () => { changelogs: PatchSummary[]; totalCount: number };
}

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
				if (isUnfiltered(filters)) return loadFeedPage(pageParam, signal);

				const { limit, offset } = feedWindow(pageParam);
				const selectsEntities = filters.hero.length + filters.item.length > 0;
				const [index, text, groups] = await Promise.all([
					loadFeedIndex(),
					filters.q ? loadFeedText() : null,
					selectsEntities ? loadFeedGroups() : null
				]);
				if (signal.aborted) throw new DOMException('Aborted', 'AbortError');

				const heroIds = resolveEntityIds(filters.hero, index.heroes);
				const itemIds = resolveEntityIds(filters.item, index.items);
				const scope = { heroIds, itemIds, q: filters.q, majorOnly: filters.major };

				const page = queryFeed(index, text, scope, { limit, offset });

				return {
					changelogs: assembleSummaries(
						page.rows,
						index,
						{ text, groups },
						{
							heroIds,
							itemIds,
							q: filters.q,
							isFirstPage: offset === 0
						}
					),
					hasMore: page.hasMore
				};
			},
			getNextPageParam: (lastPage, _pages, lastPageParam) =>
				lastPage.hasMore ? lastPageParam + 1 : undefined,
			initialPageParam: 0
		};
	});
}
