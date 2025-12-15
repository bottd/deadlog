<script lang="ts">
	import { page } from '$app/state';
	import ChangelogCard from './ChangelogCard.svelte';
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
	import { useChangelogQuery } from '$lib/hooks/useChangelogQuery.svelte';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import Frown from '@lucide/svelte/icons/frown';

	const params = getSearchParams();

	const changelogs = $derived(page.data.changelogs ?? []);
	const initialLoadCount = $derived(page.data.initialLoadCount ?? 12);
	const totalCount = $derived(page.data.totalCount ?? 0);

	const queryState = useChangelogQuery({
		getInitialChangelogs: () => changelogs,
		getInitialLoadCount: () => initialLoadCount,
		getTotalCount: () => totalCount
	});

	const query = $derived(queryState.query);

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
		const allChangelogs = (query.data?.pages ?? []).flatMap((p) => p.changelogs);

		if (!isFiltered) return allChangelogs;

		return allChangelogs.filter((changelog: FilteredChangelog) => {
			const heroes = getVisibleHeroNames(changelog, filterState);
			const items = getVisibleItemNames(changelog, filterState);
			const notes = shouldShowGeneralNotes(changelog, filterState);

			if ((heroes?.size ?? 0) > 0 || (items?.size ?? 0) > 0 || notes) return true;

			return (
				changelog.updates?.some((update: FilteredChangelog) => {
					const updateItems = getVisibleItemNames(update, filterState);
					return (updateItems?.size ?? 0) > 0;
				}) ?? false
			);
		});
	});
</script>

<main class="container mx-auto mt-8 mb-24 px-4" aria-label="Changelog entries">
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
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each { length: 12 }, i (i)}
				<div
					class="bg-card border-border h-36 animate-pulse rounded-lg border"
					style="animation-delay: {i * 50}ms"
				></div>
			{/each}
		</div>
	{/if}

	{#if !query.isError && query.data}
		{#if filteredChangelogs.length > 0}
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each filteredChangelogs as entry, i (entry.id)}
					<ChangelogCard
						id={entry.id}
						date={entry.date}
						author={entry.author}
						authorImage={entry.authorImage}
						icons={entry.icons}
						isLatest={i === 0 && !isFiltered}
					/>
				{/each}
			</div>
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

		<div bind:this={queryState.trigger} class="flex flex-col items-center gap-4 py-8">
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
