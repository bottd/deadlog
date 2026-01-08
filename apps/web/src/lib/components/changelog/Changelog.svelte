<script lang="ts">
	import { page } from '$app/state';
	import { ChangelogCard } from './index';
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
	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
		<div
			class="bg-card border-border relative overflow-hidden rounded-xl border p-12 text-center"
			in:scale={{ start: 0.9, duration: 400 }}
		>
			<div
				class="bg-destructive/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full"
			>
				<AlertCircle class="text-destructive size-10" />
			</div>
			<h3 class="text-foreground font-display mb-3 text-2xl tracking-tight">
				Failed to load changelogs
			</h3>
			<p class="text-muted-foreground mx-auto mb-8 max-w-md">
				{query.error?.message || 'An error occurred while fetching changelogs'}
			</p>
			<button
				onclick={() => query.refetch()}
				class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
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
					style:animation-delay="{i * 50}ms"
				></div>
			{/each}
		</div>
	{/if}

	{#if !query.isError && query.data}
		{#if filteredChangelogs.length > 0}
			<!-- Latest update featured section -->
			{#each filteredChangelogs as entry, i (entry.id)}
				{#if i === 0 && !isFiltered}
					<div in:fly={{ y: 20, duration: 350, easing: quintOut }}>
						<ChangelogCard
							id={entry.id}
							date={entry.date}
							author={entry.author}
							authorImage={entry.authorImage}
							icons={entry.icons}
							isLatest={true}
						/>
					</div>
				{/if}
			{/each}

			<!-- Grid for remaining changes -->
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each filteredChangelogs as entry, i (entry.id)}
					{#if i !== 0 || isFiltered}
						<div
							in:fly={{
								y: 20,
								delay: Math.min(i, 8) * 30,
								duration: 350,
								easing: quintOut
							}}
						>
							<ChangelogCard
								id={entry.id}
								date={entry.date}
								author={entry.author}
								authorImage={entry.authorImage}
								icons={entry.icons}
								isLatest={false}
							/>
						</div>
					{/if}
				{/each}
			</div>
		{:else}
			<div
				class="bg-card border-border relative overflow-hidden rounded-xl border p-12 text-center"
				in:scale={{ start: 0.95, duration: 400 }}
			>
				<div
					class="bg-muted/50 mx-auto mb-6 flex size-20 items-center justify-center rounded-full"
				>
					<Frown class="text-muted-foreground size-10" />
				</div>
				<h3 class="text-foreground font-display mb-3 text-2xl tracking-tight">
					No changes found
				</h3>
				<p class="text-muted-foreground mx-auto mb-8 max-w-md">
					No changelog entries match your current filters. Try adjusting your search or
					clearing the filters.
				</p>
				<button
					onclick={() => params.reset()}
					class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
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
					class="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50"
				>
					Load more changes
				</button>
			{:else if !query.hasNextPage && filteredChangelogs.length > 0}
				<div
					class="text-muted-foreground flex items-center gap-2"
					in:fly={{ opacity: 0, duration: 400 }}
				>
					<span class="bg-border size-1.5 rounded-full"></span>
					<p class="text-sm">All changes loaded</p>
					<span class="bg-border size-1.5 rounded-full"></span>
				</div>
			{/if}
		</div>
	{/if}
</main>
