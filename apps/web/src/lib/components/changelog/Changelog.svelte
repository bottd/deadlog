<script lang="ts">
	import { page } from '$app/state';
	import ChangeListItem from './ChangeListItem.svelte';
	import { GutterLine } from '../gutter-line';
	import { ChangelogEntry } from '.';
	import {
		getVisibleHeroNames,
		getVisibleItemNames,
		shouldShowGeneralNotes,
		type FilterState,
		type FilteredChangelog
	} from '$lib/utils/filterChanges';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import {
		getSelectedHeroObjects,
		getSelectedItemObjects
	} from '$lib/utils/selectedEntities.svelte';
	import { createInfiniteQuery } from '@tanstack/svelte-query';
	import { useIntersectionObserver } from 'runed';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import Frown from '@lucide/svelte/icons/frown';
	import ChangelogSkeleton from './ChangelogSkeleton.svelte';

	const params = getSearchParams();
	const { changelogs, heroes, items, initialLoadCount, totalCount } = page.data;

	interface PageData {
		changelogs: FilteredChangelog[];
		hasMore: boolean;
	}
	interface InfiniteData {
		pages: PageData[];
		pageParams: number[];
	}

	const query = createInfiniteQuery<
		PageData,
		Error,
		InfiniteData,
		(string | string[])[],
		number
	>(() => ({
		queryKey: ['changelogs', params.hero, params.item, params.q],
		initialData: {
			pages: [
				{
					changelogs,
					hasMore:
						totalCount > 0
							? totalCount > initialLoadCount
							: changelogs.length === initialLoadCount
				}
			],
			pageParams: [0]
		},
		queryFn: async ({ pageParam }) => {
			const limit = 5;
			// pageParam 0 is initialData, pageParam 1+ are new fetches
			const offset = initialLoadCount + (pageParam - 1) * limit;
			const searchParams = params.toURLSearchParams();
			searchParams.set('limit', String(limit));
			searchParams.set('offset', String(offset));

			const url = `/api/changelogs?${searchParams.toString()}`;
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch changelogs: ${response.statusText}`);
			}

			return (await response.json()) as PageData;
		},
		getNextPageParam: (lastPage, pages) => {
			return lastPage.hasMore ? pages.length : undefined;
		},
		initialPageParam: 0,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
		retry: 3,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
	}));

	let trigger = $state<HTMLDivElement | null>(null);

	useIntersectionObserver(
		() => trigger,
		(entries) => {
			const entry = entries[0];
			if (!entry) return;

			// Only fetch if intersecting, there's a next page, not already fetching, and no errors
			if (
				entry.isIntersecting &&
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

	// Build hero and item maps for lookups (ID -> data)
	const heroMap = $derived.by(() => {
		const map: Record<number, { name: string; images: Record<string, string> }> = {};
		for (const hero of heroes) {
			if (hero.id) {
				map[hero.id] = {
					name: hero.name,
					images: hero.images
				};
			}
		}
		return map;
	});

	const itemMap = $derived.by(() => {
		const map: Record<
			number,
			{ name: string; images?: { png?: string; webp?: string } | null }
		> = {};
		for (const item of items) {
			if (item.id) {
				map[item.id] = {
					name: item.name,
					images: item.images
				};
			}
		}
		return map;
	});

	const filterState = $derived.by(
		(): FilterState => ({
			selectedHeroNames: new Set(getSelectedHeroObjects().map((hero) => hero.name)),
			selectedItemNames: new Set(getSelectedItemObjects().map((item) => item.name)),
			searchQuery: params.q || ''
		})
	);

	const isFiltered = $derived(
		filterState.selectedHeroNames.size > 0 ||
			filterState.selectedItemNames.size > 0 ||
			filterState.searchQuery.length > 0
	);

	const filteredChangelogs = $derived.by(() => {
		const allChangelogs = ((query.data?.pages || []) as PageData[]).flatMap(
			(page) => page.changelogs
		);

		if (!isFiltered) return allChangelogs;

		return allChangelogs.filter((changelog: FilteredChangelog) => {
			const heroes = getVisibleHeroNames(changelog, filterState);
			const items = getVisibleItemNames(changelog, filterState);
			const notes = shouldShowGeneralNotes(changelog, filterState);

			if ((heroes?.size ?? 0) > 0 || (items?.size ?? 0) > 0 || notes) return true;

			// Check updates
			return (
				changelog.updates?.some((update: FilteredChangelog) => {
					const updateItems = getVisibleItemNames(update, filterState);
					return (updateItems?.size ?? 0) > 0;
				}) ?? false
			);
		});
	});
</script>

<main
	class="bg-background bg-gradient-mesh relative container mx-auto mt-8 min-h-screen"
	aria-label="Changelog entries"
>
	<GutterLine />

	{#if query.isError}
		<div class="flex flex-col items-center justify-center py-16 text-center">
			<div class="mb-4 rounded-full bg-red-950/50 p-6">
				<AlertCircle class="size-12 text-red-500" />
			</div>
			<h3 class="text-foreground mb-2 text-xl font-semibold">
				Failed to load changelogs
			</h3>
			<p class="text-muted-foreground mb-6 max-w-md">
				{query.error?.message || 'An error occurred while fetching changelogs'}
			</p>
			<button
				onclick={() => query.refetch()}
				class="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-80"
			>
				Try again
			</button>
		</div>
	{/if}

	{#if query.isPending && !query.data}
		<div class="space-y-8 md:ml-14">
			{#each { length: 3 }, i (i)}
				<ChangelogSkeleton delay={i * 100} />
			{/each}
		</div>
	{/if}

	<!-- Changelog entries -->
	{#if !query.isError && query.data}
		<div class="relative space-y-8 md:ml-14">
			{#each filteredChangelogs as entry, entryIndex (entry.id)}
				{@const showNotes = shouldShowGeneralNotes(entry, filterState)}

				<!-- Render updates first (most recent) if they exist -->
				{#if entry.updates && entry.updates.length > 0}
					{#each entry.updates.slice().reverse() as update, updateIndex (update.id)}
						{#if !isFiltered || (getVisibleHeroNames(update, filterState)?.size ?? 0) > 0 || (getVisibleItemNames(update, filterState)?.size ?? 0) > 0}
							<ChangelogEntry isBigUpdate={false} {entryIndex}>
								<ChangeListItem
									id={update.id}
									date={update.date}
									author={update.author}
									authorImage={update.authorImage}
									icons={update.icons}
									contentJson={update.contentJson}
									{heroMap}
									{itemMap}
									{isFiltered}
									forceShowNotes={shouldShowGeneralNotes(update, filterState)}
									defaultOpen={entryIndex === 0 && updateIndex === 0}
								/>
							</ChangelogEntry>
						{/if}
					{/each}
				{/if}

				{#if !isFiltered || (getVisibleHeroNames(entry, filterState)?.size ?? 0) > 0 || (getVisibleItemNames(entry, filterState)?.size ?? 0) > 0 || showNotes}
					<ChangelogEntry isBigUpdate={false} {entryIndex}>
						<ChangeListItem
							id={entry.id}
							date={entry.date}
							author={entry.author}
							authorImage={entry.authorImage}
							icons={entry.icons}
							contentJson={entry.contentJson}
							{heroMap}
							{itemMap}
							{isFiltered}
							forceShowNotes={showNotes}
							defaultOpen={entryIndex === 0 &&
								(!entry.updates || entry.updates.length === 0)}
						/>
					</ChangelogEntry>
				{/if}
			{:else}
				<div class="flex flex-col items-center justify-center py-16 text-center">
					<div class="mb-4 rounded-full bg-card p-6">
						<Frown class="size-12 text-muted-foreground" />
					</div>
					<h3 class="mb-2 text-xl font-semibold text-foreground">No changes found</h3>
					<p class="mb-6 max-w-md text-muted-foreground">
						No changelog entries match your current filters. Try adjusting your search or
						clearing the filters.
					</p>
					<button
						onclick={() => params.reset()}
						class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-80"
					>
						Clear all filters
					</button>
				</div>
			{/each}

			<!-- Infinite scroll trigger and load more button -->
			<div bind:this={trigger} class="flex flex-col items-center gap-4 py-8">
				{#if query.isFetchingNextPage}
					<div class="flex items-center justify-center">
						<div
							class="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent"
						></div>
					</div>
				{:else if query.hasNextPage}
					<!-- Manual load more button as fallback -->
					<button
						onclick={() => query.fetchNextPage()}
						disabled={query.isFetchingNextPage}
						class="bg-primary/10 text-primary hover:bg-primary/20 rounded-md px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50"
					>
						Load more changes
					</button>
				{:else if !query.hasNextPage && filteredChangelogs.length > 0}
					<p class="text-muted-foreground text-sm">All changes loaded</p>
				{/if}
			</div>
		</div>
	{/if}
</main>
