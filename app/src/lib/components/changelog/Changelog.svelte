<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { formatDate, plural } from '@deadlog/utils';
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
	const totalCount = $derived(page.data.totalCount ?? 0);
	const lastUpdate = $derived(page.data.lastUpdate as string | undefined);

	// Page data is prerendered without query parameters; filters remain URL-derived.
	const filters = $derived(params.filters);
	const query = useChangelogQuery({
		getInitialChangelogs: () => changelogs,
		getTotalCount: () => totalCount,
		getFilters: () => filters
	});

	const filterCount = $derived(params.activeFilterCount);
	const isSearching = $derived(
		filters.hero.length > 0 || filters.item.length > 0 || filters.q !== ''
	);

	// All filtering (text search, hero, item) is server-side — just flatten pages
	const allChangelogs = $derived((query.data?.pages ?? []).flatMap((p) => p.changelogs));

	const hasNextPage = $derived(query.hasNextPage);

	const isFilterPending = $derived(params.isPending);

	// "new since last visit": client-only high-water mark, null until a prior visit exists
	let lastVisit = $state<number | null>(null);
	onMount(() => {
		const KEY = 'deadlog:lastVisited';
		const stored = localStorage.getItem(KEY);
		lastVisit = stored ? Number(stored) : null;

		let committed = false;
		const commit = () => {
			if (committed) return;
			committed = true;
			localStorage.setItem(KEY, String(Date.now()));
		};
		const dwell = setTimeout(commit, 10_000);
		addEventListener('pagehide', commit);

		return () => {
			clearTimeout(dwell);
			removeEventListener('pagehide', commit);
		};
	});
	const isNew = (entry: ChangelogEntry) =>
		lastVisit !== null && new Date(entry.date).getTime() > lastVisit;

	// Keep every fetched page in one grid so new cards fill the final incomplete row.
	const gridEntries = $derived(allChangelogs.slice(isSearching ? 0 : 1));
	const newCount = $derived(
		lastVisit === null || isSearching ? 0 : allChangelogs.filter(isNew).length
	);
	// boundary between new and already-seen cards within the grid (-1 = none)
	const firstSeenIdx = $derived(
		lastVisit === null || isSearching ? -1 : gridEntries.findIndex((e) => !isNew(e))
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

{#snippet retryPrompt(message: string, retry: () => void)}
	<div flex="~ col" items="center" gap="3" text="center" role="alert">
		<p text="destructive sm" font="medium">{message}</p>
		<button
			type="button"
			onclick={retry}
			border="destructive/30 ~"
			text="destructive xs"
			p="x-5 y-2"
			font="mono semibold"
			class="hover:bg-destructive/10"
		>
			Retry
		</button>
	</div>
{/snippet}

{#snippet loadingSpinner()}
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
{/snippet}

<main container m="x-auto t-8 b-24" p="x-4">
	<header m="b-7" class="max-w-3xl">
		<h1
			font="display medium"
			text="foreground 3xl"
			class="heading-glow tracking-wide sm:text-4xl"
		>
			Deadlock Patch Notes &amp; Changelog
		</h1>
		<p text="muted-foreground sm" m="t-2" class="max-w-2xl leading-relaxed">
			Search every gameplay update, hero adjustment, and item balance change in one log.
		</p>
		{#if totalCount > 0}
			<p
				flex="~"
				text="muted-foreground"
				m="t-3"
				items="center"
				gap="2"
				class="kicker text-[10px]"
			>
				<span text="primary" font="bold">{totalCount}</span>
				<span>{plural(totalCount, 'patch', 'patches')} indexed</span>
				{#if lastUpdate}
					<span bg="border" h="px" w="3" aria-hidden="true"></span>
					<span>
						latest <time datetime={lastUpdate}>{formatDate(lastUpdate)}</time>
					</span>
				{/if}
			</p>
		{/if}
	</header>

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

	{#if isFilterPending}
		<div
			aria-hidden="true"
			class="filter-progress fixed inset-x-0 top-0 z-60 h-0.5 overflow-hidden"
		></div>
	{/if}
	<p aria-live="polite" class="sr-only">
		{isFilterPending ? 'Updating patches\u2026' : ''}
	</p>

	{#if query.data}
		{#if allChangelogs.length > 0}
			{#if filterCount > 0}
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
			{/if}

			{#if !isSearching}
				<div in:fly={{ y: 20, duration: 350, easing: quintOut }}>
					<FeaturedPatchCard {...allChangelogs[0]} />
				</div>
			{/if}

			{#if newCount > 0}
				<p
					flex="~"
					text="muted-foreground xs"
					m="b-4"
					items="center"
					gap="2"
					font="mono"
					class="tracking-wider uppercase"
					role="status"
					aria-live="polite"
				>
					<span text="primary" font="bold">{newCount}</span>
					<span>new {plural(newCount, 'patch', 'patches')} since your last visit</span>
				</p>
			{/if}

			<div
				data-patch-grid
				grid="~ cols-1"
				gap="4"
				aria-busy={isFilterPending}
				class="transition-opacity duration-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 {isFilterPending
					? 'pointer-events-none opacity-60'
					: ''}"
			>
				{#each gridEntries as entry, i (entry.id)}
					{#if i === firstSeenIdx && firstSeenIdx > 0}
						<div
							flex="~"
							role="presentation"
							aria-hidden="true"
							m="y-1 b-4"
							items="center"
							gap="4"
							class="col-span-full"
						>
							<div bg="signal/35" h="px" flex="1"></div>
							<span text="muted-foreground" class="kicker text-[10px]">
								Seen before
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
					flex="~"
					border="border ~"
					bg="muted/30"
					m="x-auto b-6"
					items="center"
					justify="center"
					class="clip-corner-sm size-20"
				>
					<Frown class="text-muted-foreground size-10" />
				</div>
				<p text="muted-foreground xs" m="b-2" font="mono" uppercase class="tracking-wide">
					No Results
				</p>
				<h2 font="display medium" text="foreground 2xl" m="b-3" class="tracking-wide">
					No changes found
				</h2>
				{#if filterCount > 0}
					<p text="muted-foreground" m="x-auto b-8" class="max-w-md">
						No changelog entries match your
						{filterCount === 1 ? 'filter' : `${filterCount} filters`}.
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
				{:else}
					<p text="muted-foreground" m="x-auto" class="max-w-md">
						The log has no entries yet.
					</p>
				{/if}
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
					{@render retryPrompt('Failed to load more patches.', () =>
						query.fetchNextPage()
					)}
				{:else if query.isFetchingNextPage}
					{@render loadingSpinner()}
				{:else if query.hasNextPage}
					<div
						data-load-more-sentinel
						h="px"
						w="full"
						aria-hidden="true"
						{@attach loadMoreWhenVisible}
					></div>
				{:else}
					<div flex="~" items="center" gap="4" in:fly={{ y: 10, duration: 400 }}>
						<div bg="primary/30" h="px" w="16"></div>
						<p text="muted-foreground xs" font="mono" uppercase class="tracking-wider">
							End of Log
						</p>
						<div bg="primary/30" h="px" w="16"></div>
					</div>
				{/if}
			</div>
		{/if}
	{:else if query.isError}
		<div p="y-16">
			{@render retryPrompt('Failed to load patches.', () => query.refetch())}
		</div>
	{:else}
		<div p="y-16">
			{@render loadingSpinner()}
		</div>
	{/if}
</main>

<style lang="postcss">
	@keyframes filter-progress {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}

	.filter-progress {
		background: oklch(from var(--primary) l c h / 0.18);
	}

	.filter-progress::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to right,
			transparent,
			oklch(from var(--primary) l c h / 0.95) 50%,
			transparent
		);
		animation: filter-progress 1.1s cubic-bezier(0.23, 1, 0.32, 1) infinite;
	}
</style>
