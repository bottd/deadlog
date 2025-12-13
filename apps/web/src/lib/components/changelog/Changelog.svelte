<script lang="ts">
	import { page } from '$app/state';
	import PatchPreviewCard from './PatchPreviewCard.svelte';
	import LatestUpdateBanner from './LatestUpdateBanner.svelte';
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
	import { fly } from 'svelte/transition';
	import { untrack } from 'svelte';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import Frown from '@lucide/svelte/icons/frown';
	import History from '@lucide/svelte/icons/history';
	import { browser } from '$app/environment';

	// Check for reduced motion preference
	let reducedMotion = $state(false);
	$effect(() => {
		if (browser) {
			const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			reducedMotion = mediaQuery.matches;
			const handler = (e: MediaQueryListEvent) => {
				reducedMotion = e.matches;
			};
			mediaQuery.addEventListener('change', handler);
			return () => mediaQuery.removeEventListener('change', handler);
		}
	});

	const params = getSearchParams();

	// Make these reactive to handle navigation
	// Guard against undefined data (can happen during navigation)
	const changelogs = $derived(page.data.changelogs ?? []);
	const initialLoadCount = $derived(page.data.initialLoadCount ?? 5);
	const totalCount = $derived(page.data.totalCount ?? 0);

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
		// Always enable - we have initialData from SSR
		enabled: true,
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
		initialPageParam: 0
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

	// Flatten all entries (updates + main changelogs) into a single ordered list
	interface FlatEntry {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: FilteredChangelog['icons'];
	}

	const flattenedEntries = $derived.by((): FlatEntry[] => {
		const entries: FlatEntry[] = [];

		for (const changelog of filteredChangelogs) {
			const showNotes = shouldShowGeneralNotes(changelog, filterState);

			// Add updates first (reversed so newest is first)
			if (changelog.updates && changelog.updates.length > 0) {
				for (const update of changelog.updates.slice().reverse()) {
					if (
						!isFiltered ||
						(getVisibleHeroNames(update, filterState)?.size ?? 0) > 0 ||
						(getVisibleItemNames(update, filterState)?.size ?? 0) > 0
					) {
						entries.push({
							id: update.id,
							date: update.date,
							author: update.author,
							authorImage: update.authorImage,
							icons: update.icons
						});
					}
				}
			}

			// Add main changelog entry
			if (
				!isFiltered ||
				(getVisibleHeroNames(changelog, filterState)?.size ?? 0) > 0 ||
				(getVisibleItemNames(changelog, filterState)?.size ?? 0) > 0 ||
				showNotes
			) {
				entries.push({
					id: changelog.id,
					date: changelog.date,
					author: changelog.author,
					authorImage: changelog.authorImage,
					icons: changelog.icons
				});
			}
		}

		return entries;
	});

	// Separate latest entry from history
	const latestEntry = $derived(flattenedEntries[0]);
	const historyEntries = $derived(flattenedEntries.slice(1));

	// Intentionally capture initial length only (don't track changes) for animation
	const initialLoadSize = untrack(() => changelogs.length);
</script>

<main class="container mx-auto mt-12 mb-24 px-4" aria-label="Changelog entries">
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
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each { length: 6 }, i (i)}
				<div
					class="bg-card border-border/60 h-44 animate-pulse rounded-lg border"
					style="animation-delay: {i * 100}ms"
				></div>
			{/each}
		</div>
	{/if}

	<!-- Changelog entries -->
	{#if !query.isError && query.data}
		{#if flattenedEntries.length > 0}
			<!-- Latest Update Banner -->
			{#if latestEntry}
				<div in:fly={reducedMotion ? { duration: 0 } : { y: 20, duration: 300 }}>
					<LatestUpdateBanner
						id={latestEntry.id}
						date={latestEntry.date}
						author={latestEntry.author}
						authorImage={latestEntry.authorImage}
						icons={latestEntry.icons}
					/>
				</div>
			{/if}

			<!-- Change History Section -->
			{#if historyEntries.length > 0}
				<div class="mt-12 mb-6">
					<div class="flex items-center gap-3">
						<History class="text-muted-foreground size-5" />
						<h2 class="text-foreground font-display text-xl font-semibold tracking-tight">
							Change History
						</h2>
					</div>
					<div class="border-border/60 mt-3 border-t"></div>
				</div>

				<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{#each historyEntries as entry, i (entry.id)}
						{@const shouldAnimate = i < initialLoadSize - 1}
						<div
							class="h-full"
							in:fly={reducedMotion || !shouldAnimate
								? { duration: 0 }
								: { y: 20, duration: 300, delay: Math.min(i, 10) * 50 }}
						>
							<PatchPreviewCard
								id={entry.id}
								date={entry.date}
								author={entry.author}
								authorImage={entry.authorImage}
								icons={entry.icons}
							/>
						</div>
					{/each}
				</div>
			{/if}
		{:else}
			<div class="flex flex-col items-center justify-center py-16 text-center">
				<div class="bg-card mb-4 rounded-full p-6">
					<Frown class="text-muted-foreground size-12" />
				</div>
				<h3 class="text-foreground mb-2 text-xl font-semibold">No changes found</h3>
				<p class="text-muted-foreground mb-6 max-w-md">
					No changelog entries match your current filters. Try adjusting your search or
					clearing the filters.
				</p>
				<button
					onclick={() => params.reset()}
					class="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-80"
				>
					Clear all filters
				</button>
			</div>
		{/if}

		<div bind:this={trigger} class="flex flex-col items-center gap-4 py-8">
			{#if query.isFetchingNextPage}
				<div class="flex items-center justify-center">
					<div
						class="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent"
					></div>
				</div>
			{:else if query.hasNextPage}
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
	{/if}
</main>
