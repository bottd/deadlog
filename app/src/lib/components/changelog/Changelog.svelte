<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { plural } from '@deadlog/utils';
	import { FeaturedPatchCard, PatchCard } from './index';
	import { HeroRail } from '$lib/components/filter-bar';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { useChangelogQuery } from '$lib/hooks/useChangelogQuery.svelte';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import Frown from '@lucide/svelte/icons/frown';
	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { ChangelogEntry } from '$lib/types';

	const changelogs = $derived(page.data.changelogs ?? []);
	const initialLoadCount = $derived(page.data.initialLoadCount ?? 12);
	const totalCount = $derived(page.data.totalCount ?? 0);

	const query = useChangelogQuery({
		getInitialChangelogs: () => changelogs,
		getInitialLoadCount: () => initialLoadCount,
		getTotalCount: () => totalCount,
		getFilters: () => page.data.filters ?? { hero: [], item: [], q: '', major: false }
	});

	const filterCount = $derived(params.activeFilterCount);
	const isFiltered = $derived(filterCount > 0);

	// All filtering (text search, hero, item) is server-side — just flatten pages
	const allChangelogs = $derived((query.data?.pages ?? []).flatMap((p) => p.changelogs));

	const hasNextPage = $derived(query.hasNextPage);

	// "new since last visit": client-only high-water mark, null until a prior visit exists
	let lastVisit = $state<number | null>(null);
	onMount(() => {
		const KEY = 'deadlog:lastVisited';
		const prev = localStorage.getItem(KEY);
		lastVisit = prev ? Number(prev) : null;
		localStorage.setItem(KEY, String(Date.now()));
	});
	const isNew = (entry: ChangelogEntry) =>
		lastVisit !== null && new Date(entry.date).getTime() > lastVisit;

	// Keep every fetched page in one grid so new cards fill the final incomplete row.
	const gridEntries = $derived(allChangelogs.slice(isFiltered ? 0 : 1));
	const newCount = $derived(
		lastVisit === null || isFiltered ? 0 : allChangelogs.filter(isNew).length
	);
	// boundary between new and already-seen cards within the grid (-1 = none)
	const firstSeenIdx = $derived(
		lastVisit === null || isFiltered ? -1 : gridEntries.findIndex((e) => !isNew(e))
	);

	function loadMoreWhenVisible(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (
					entry?.isIntersecting &&
					query.hasNextPage &&
					!query.isFetchingNextPage &&
					!query.isFetchNextPageError
				) {
					void query.fetchNextPage();
				}
			},
			{ rootMargin: '0px 0px 200px 0px' }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}
</script>

<main class="container mx-auto mt-8 mb-24 px-4">
	<HeroRail />

	<button
		type="button"
		onclick={() => params.update({ major: !params.major })}
		aria-pressed={params.major}
		class="clip-corner-sm mb-6 border px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-colors {params.major
			? 'border-primary/60 bg-primary/15 text-primary'
			: 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'}"
	>
		Major updates only
	</button>

	{#if query.data}
		{#if allChangelogs.length > 0}
			{#if isFiltered}
				<p
					class="text-muted-foreground mb-4 font-mono text-xs tracking-wider uppercase"
					role="status"
					aria-live="polite"
				>
					&mdash; {allChangelogs.length}{hasNextPage ? '+' : ''}
					{hasNextPage ? 'patches' : plural(allChangelogs.length, 'patch', 'patches')} matching
					all
					{filterCount}
					{plural(filterCount, 'filter')}
				</p>
			{:else}
				<div in:fly={{ y: 20, duration: 350, easing: quintOut }}>
					<FeaturedPatchCard {...allChangelogs[0]} />
				</div>
			{/if}

			<div
				data-patch-grid
				class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{#each gridEntries as entry, i (entry.id)}
					{#if i === firstSeenIdx && firstSeenIdx > 0}
						<div
							role="presentation"
							aria-hidden="true"
							class="col-span-full my-1 mb-4 flex items-center gap-4"
						>
							<div class="bg-signal/35 h-px flex-1"></div>
							<span
								class="text-signal font-mono text-[10px] font-bold tracking-widest uppercase"
							>
								{newCount} new since your last visit
							</span>
							<div class="bg-primary/30 h-px flex-1"></div>
						</div>
					{/if}
					<div
						data-patch-card
						class="h-full"
						in:fly={{
							y: 20,
							delay: Math.min(i, 8) * 30,
							duration: 350,
							easing: quintOut
						}}
					>
						<PatchCard {...entry} isNew={isNew(entry)} />
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="clip-corner bg-card border-border/50 relative overflow-hidden border-2 p-12 text-center"
				in:scale={{ start: 0.95, duration: 400 }}
				role="status"
			>
				<CornerAccents tlSize="2rem" tlColor="bg-muted-foreground/30" />
				<div
					class="clip-corner-sm bg-muted/30 border-border mx-auto mb-6 flex size-20 items-center justify-center border"
				>
					<Frown class="text-muted-foreground size-10" />
				</div>
				<p class="text-muted-foreground mb-2 font-mono text-xs tracking-wide uppercase">
					No Results
				</p>
				<h3 class="text-foreground font-display mb-3 text-2xl font-medium tracking-wide">
					No changes found
				</h3>
				<p class="text-muted-foreground mx-auto mb-8 max-w-md">
					No changelog entries match your filters.
				</p>
				<button
					type="button"
					onclick={() => params.reset()}
					class="clip-corner-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 border px-6 py-3 font-mono text-sm font-semibold transition-all hover:scale-105"
				>
					Clear Filters
				</button>
			</div>
		{/if}

		{#if allChangelogs.length > 0}
			<div
				class="flex flex-col items-center gap-4 py-12"
				aria-live="polite"
				aria-busy={query.isFetchingNextPage}
			>
				{#if query.isFetchNextPageError}
					<div class="flex flex-col items-center gap-3 text-center" role="alert">
						<p class="text-destructive text-sm font-medium">
							Failed to load more patches.
						</p>
						<button
							type="button"
							onclick={() => query.fetchNextPage()}
							class="border-destructive/30 text-destructive hover:bg-destructive/10 border px-5 py-2 font-mono text-xs font-semibold"
						>
							Retry
						</button>
					</div>
				{:else if query.isFetchingNextPage}
					<div class="flex flex-col items-center gap-3" role="status">
						<div
							class="border-primary/30 size-10 animate-spin rounded-lg border-2 border-t-transparent"
						></div>
						<span class="text-muted-foreground font-mono text-xs tracking-wider uppercase"
							>Loading...</span
						>
					</div>
				{:else if query.hasNextPage}
					<div
						data-load-more-sentinel
						class="h-px w-full"
						aria-hidden="true"
						{@attach loadMoreWhenVisible}
					></div>
				{:else}
					<div class="flex items-center gap-4" in:fly={{ y: 10, duration: 400 }}>
						<div class="bg-primary/30 h-px w-16"></div>
						<p class="text-muted-foreground font-mono text-xs tracking-wider uppercase">
							End of Log
						</p>
						<div class="bg-primary/30 h-px w-16"></div>
					</div>
				{/if}
			</div>
		{/if}
	{/if}
</main>
