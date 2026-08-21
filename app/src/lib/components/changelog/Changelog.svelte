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

<main container m="x-auto t-8 b-24" p="x-4">
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
					text="muted-foreground xs"
					m="b-4"
					font="mono"
					uppercase
					class="tracking-wider"
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
				grid="cols-1"
				gap="4"
				class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{#each gridEntries as entry, i (entry.id)}
					{#if i === firstSeenIdx && firstSeenIdx > 0}
						<div
							role="presentation"
							aria-hidden="true"
							m="y-1 b-4"
							items="center"
							gap="4"
							class="col-span-full flex"
						>
							<div bg="signal/35" h="px" flex="1"></div>
							<span
								text="signal"
								font="mono bold"
								uppercase
								class="text-[10px] tracking-widest"
							>
								{newCount} new since your last visit
							</span>
							<div bg="primary/30" h="px" flex="1"></div>
						</div>
					{/if}
					<div
						data-patch-card
						h="full"
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
				border="border/50 2"
				bg="card"
				relative
				p="12"
				text="center"
				class="clip-corner overflow-hidden"
				in:scale={{ start: 0.95, duration: 400 }}
				role="status"
			>
				<CornerAccents tlSize="2rem" tlColor="bg-muted-foreground/30" />
				<div
					border="border ~"
					bg="muted/30"
					m="x-auto b-6"
					items="center"
					justify="center"
					class="clip-corner-sm size-20 flex"
				>
					<Frown class="text-muted-foreground size-10" />
				</div>
				<p text="muted-foreground xs" m="b-2" font="mono" uppercase class="tracking-wide">
					No Results
				</p>
				<h3 font="display medium" text="foreground 2xl" m="b-3" class="tracking-wide">
					No changes found
				</h3>
				<p text="muted-foreground" m="x-auto b-8" class="max-w-md">
					No changelog entries match your filters.
				</p>
				<button
					type="button"
					onclick={() => params.reset()}
					border="primary/30 ~"
					bg="primary/10"
					text="primary sm"
					p="x-6 y-3"
					font="mono semibold"
					class="clip-corner-sm hover:bg-primary/20 transition-all hover:scale-105"
				>
					Clear Filters
				</button>
			</div>
		{/if}

		{#if allChangelogs.length > 0}
			<div
				flex="~ col"
				items="center"
				gap="4"
				p="y-12"
				aria-live="polite"
				aria-busy={query.isFetchingNextPage}
			>
				{#if query.isFetchNextPageError}
					<div flex="~ col" items="center" gap="3" text="center" role="alert">
						<p text="destructive sm" font="medium">Failed to load more patches.</p>
						<button
							type="button"
							onclick={() => query.fetchNextPage()}
							border="destructive/30 ~"
							text="destructive xs"
							p="x-5 y-2"
							font="mono semibold"
							class="hover:bg-destructive/10"
						>
							Retry
						</button>
					</div>
				{:else if query.isFetchingNextPage}
					<div flex="~ col" items="center" gap="3" role="status">
						<div
							border="primary/30 2 t-transparent"
							rounded="lg"
							class="size-10 animate-spin"
						></div>
						<span text="muted-foreground xs" font="mono" uppercase class="tracking-wider"
							>Loading...</span
						>
					</div>
				{:else if query.hasNextPage}
					<div
						data-load-more-sentinel
						h="px"
						w="full"
						aria-hidden="true"
						{@attach loadMoreWhenVisible}
					></div>
				{:else}
					<div items="center" gap="4" class="flex" in:fly={{ y: 10, duration: 400 }}>
						<div bg="primary/30" h="px" w="16"></div>
						<p text="muted-foreground xs" font="mono" uppercase class="tracking-wider">
							End of Log
						</p>
						<div bg="primary/30" h="px" w="16"></div>
					</div>
				{/if}
			</div>
		{/if}
	{/if}
</main>
