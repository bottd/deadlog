<script lang="ts">
	import { page } from '$app/state';
	import { ChangelogCard } from './index';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import { useChangelogQuery } from '$lib/hooks/useChangelogQuery.svelte';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
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

	const isFiltered = $derived(
		params.hero.length > 0 || params.item.length > 0 || params.q.length > 0
	);

	// All filtering (text search, hero, item) is server-side — just flatten pages
	const allChangelogs = $derived((query.data?.pages ?? []).flatMap((p) => p.changelogs));

	const hasNextPage = $derived(query.hasNextPage);
	const filterCount = $derived(
		params.hero.length + params.item.length + (params.q.length > 0 ? 1 : 0)
	);
</script>

<main class="container mx-auto mt-8 mb-24 px-4" aria-label="Changelog entries">
	{#if query.isError}
		<div
			class="clip-corner bg-card border-destructive/30 relative overflow-hidden border-2 p-12 text-center"
			in:scale={{ start: 0.9, duration: 400 }}
		>
			<CornerAccents tlSize="2rem" tlColor="bg-destructive/50" />
			<div
				class="clip-corner-sm bg-destructive/10 border-destructive/20 mx-auto mb-6 flex size-20 items-center justify-center border"
			>
				<AlertCircle class="text-destructive size-10" />
			</div>
			<h3 class="text-foreground font-display mb-3 text-2xl font-medium tracking-wide">
				Connection Failed
			</h3>
			<p
				class="text-muted-foreground mx-auto mb-2 font-mono text-xs tracking-wide uppercase"
			>
				Error: {query.error?.message || 'FETCH_FAILED'}
			</p>
			<button
				onclick={() => query.refetch()}
				class="clip-corner-sm bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/30 mt-6 border px-6 py-3 font-mono text-sm font-semibold transition-all hover:scale-105"
			>
				Retry
			</button>
		</div>
	{/if}

	{#if query.isPending && !query.data}
		<div
			class="clip-corner-lg shimmer border-primary/20 mb-8 h-64 border-2 md:h-52"
		></div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each { length: 12 }, i (i)}
				<div
					class="clip-corner-sm shimmer border-border/50 relative h-[200px] border"
					style:animation-delay="{i * 80}ms"
				>
					<CornerAccents tlSize="1.5rem" tlColor="bg-primary/20" />
					<div class="flex flex-col gap-3 p-4">
						<div class="bg-muted/50 h-4 w-24 rounded"></div>
						<div class="bg-muted/30 h-3 w-16 rounded"></div>
						<div class="mt-2 flex gap-1">
							{#each { length: 4 }, j (j)}<div
									class="bg-muted/40 size-7 rounded-md"
								></div>{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if !query.isError && query.data}
		{#if allChangelogs.length > 0}
			{#if isFiltered}
				<p class="text-muted-foreground mb-4 font-mono text-xs tracking-wider uppercase">
					&mdash; {allChangelogs.length}{hasNextPage ? '+' : ''} patch{allChangelogs.length ===
						1 && !hasNextPage
						? ''
						: 'es'} matching all {filterCount} filter{filterCount === 1 ? '' : 's'}
				</p>
			{:else}
				<div in:fly={{ y: 20, duration: 350, easing: quintOut }}>
					<ChangelogCard {...allChangelogs[0]} isLatest={true} />
				</div>
			{/if}

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each allChangelogs.slice(isFiltered ? 0 : 1) as entry, i (entry.id)}
					<div
						in:fly={{
							y: 20,
							delay: Math.min(i, 8) * 30,
							duration: 350,
							easing: quintOut
						}}
					>
						<ChangelogCard {...entry} isLatest={false} />
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="clip-corner bg-card border-border/50 relative overflow-hidden border-2 p-12 text-center"
				in:scale={{ start: 0.95, duration: 400 }}
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
					onclick={() => params.reset()}
					class="clip-corner-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 border px-6 py-3 font-mono text-sm font-semibold transition-all hover:scale-105"
				>
					Clear Filters
				</button>
			</div>
		{/if}

		{#if allChangelogs.length > 0}
			<div bind:this={queryState.trigger} class="flex flex-col items-center gap-4 py-12">
				{#if query.isFetchingNextPage}
					<div class="flex flex-col items-center gap-3">
						<div
							class="border-primary/30 size-10 animate-spin rounded-lg border-2 border-t-transparent"
						></div>
						<span class="text-muted-foreground font-mono text-xs tracking-wider uppercase"
							>Loading...</span
						>
					</div>
				{:else if query.hasNextPage}
					<button
						onclick={() => query.fetchNextPage()}
						class="clip-corner-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 group border px-8 py-3 font-mono text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50"
					>
						Load More
					</button>
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
