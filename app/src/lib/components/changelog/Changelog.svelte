<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { formatDate, plural } from '@deadlog/utils';
	import { FeaturedPatchCard, PatchCard } from './index';
	import HeroRail from '#lib/components/filter-bar/HeroRail.svelte';
	import { searchParams as params } from '#lib/stores/searchParams.svelte.ts';
	import { toggleEntityFilter } from '#lib/components/filter-bar/filterState.svelte.ts';
	import { useChangelogQuery } from '#lib/hooks/useChangelogQuery.svelte.ts';
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import Frown from '@lucide/svelte/icons/frown';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import X from '@lucide/svelte/icons/x';
	import type { PatchSummary } from '#lib/types.ts';

	const changelogs = $derived(page.data.changelogs ?? []);
	const totalCount = $derived(page.data.totalCount ?? 0);

	// Page data is prerendered without query parameters; filters remain URL-derived.
	const filters = $derived(params.filters);
	const query = useChangelogQuery({ getSeed: () => ({ changelogs, totalCount }) });

	const filterCount = $derived(params.activeFilterCount);
	const isSearching = $derived(params.isSearching);

	const allChangelogs = $derived((query.data?.pages ?? []).flatMap((p) => p.changelogs));

	const isFilterPending = $derived(params.isPending);

	// "new since last visit": client-only high-water mark, null until a prior visit exists
	const LAST_VISIT_KEY = 'deadlog:lastVisited';
	let lastVisit = $state<number | null>(null);
	let visitCommitted = false;
	function commitVisit() {
		if (visitCommitted) return;
		visitCommitted = true;
		try {
			localStorage.setItem(LAST_VISIT_KEY, String(Date.now()));
		} catch {
			visitCommitted = false;
		}
	}
	function readLastVisit(): string | null {
		try {
			return localStorage.getItem(LAST_VISIT_KEY);
		} catch {
			return null;
		}
	}
	onMount(() => {
		const stored = readLastVisit();
		lastVisit = stored ? Number(stored) : null;
		const dwell = setTimeout(commitVisit, 10_000);
		return () => clearTimeout(dwell);
	});
	const isNew = (entry: PatchSummary) =>
		lastVisit !== null && new Date(entry.date).getTime() > lastVisit;

	// Keep every fetched page in one grid so new cards fill the final incomplete row.
	const gridEntries = $derived(allChangelogs.slice(isSearching ? 0 : 1));
	const newCount = $derived(
		lastVisit === null || isSearching ? 0 : gridEntries.filter(isNew).length
	);
	// boundary between new and already-seen cards within the grid (-1 = none)
	const firstSeenIdx = $derived(
		lastVisit === null || isSearching ? -1 : gridEntries.findIndex((e) => !isNew(e))
	);

	const matchCount = $derived.by(() => {
		const more = query.hasNextPage;
		return `${allChangelogs.length}${more ? '+' : ''} matching ${plural(more ? 2 : allChangelogs.length, 'patch', 'patches')}`;
	});
	const announcement = $derived.by(() => {
		if (isFilterPending) return 'Updating patches\u2026';
		if (!query.data || filterCount === 0) return '';
		return allChangelogs.length > 0 ? matchCount : 'No patches match these filters';
	});

	const activeFilters = $derived([
		...(['hero', 'item'] as const).flatMap((kind) =>
			filters[kind].map((name) => ({
				label: name,
				remove: () => toggleEntityFilter(kind, name)
			}))
		),
		...(filters.q
			? [{ label: `\u201c${filters.q}\u201d`, remove: () => params.update({ q: '' }) }]
			: []),
		...(filters.major
			? [{ label: 'Major updates only', remove: () => params.update({ major: false }) }]
			: [])
	]);

	function loadMoreWhenVisible(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) void query.fetchNextPage({ cancelRefetch: false });
			},
			{ rootMargin: '0px 0px 200px 0px' }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}
</script>

<svelte:window onpagehide={commitVisit} />

{#snippet retryPrompt(message: string, retry: () => void)}
	<div class="retry-prompt" role="alert">
		<p>{message}</p>
		<button
			type="button"
			onclick={retry}
			class="retry-button control-label ui-focus-ring"
		>
			Retry
		</button>
	</div>
{/snippet}

{#snippet loadingSpinner()}
	<div class="loading-status" role="status">
		<div class="spinner"></div>
		<span class="loading-label metadata caps">Loading...</span>
	</div>
{/snippet}

<main class="page-container changelog-page">
	<header class="page-header">
		<h1 class="page-title display-heading">
			{isSearching ? 'Matching patch notes' : 'Deadlock Patch Notes & Changelog'}
		</h1>
		{#if !isSearching}
			<p class="page-lede">
				Every gameplay update, hero adjustment, and item balance change.
			</p>
			{#if totalCount > 0}
				<p class="archive-summary kicker-sm">
					<strong>{totalCount}</strong>
					<a href="/archive" class="hit-44"
						>{plural(totalCount, 'patch', 'patches')} in the archive</a
					>
				</p>
			{/if}
		{/if}
		{#if filterCount > 0 && query.data && allChangelogs.length > 0}
			<p class="result-summary metadata">
				<strong>{matchCount}</strong
				>{#if filterCount > 1}{` · all ${filterCount} filters`}{/if}
				{#if isSearching}
					<span class="latest-match"
						>Latest matching patch: <time datetime={allChangelogs[0].date}
							>{formatDate(allChangelogs[0].date)}</time
						></span
					>
				{/if}
			</p>
		{/if}
	</header>

	<div class="js-only quick-filters">
		<details>
			<summary class="ui-focus-ring disclosure-summary filter-control"
				><ChevronRight class="disclosure-chevron" />Quick hero filters</summary
			>
			<HeroRail />
		</details>
		<button
			type="button"
			onclick={() => params.update({ major: !params.major })}
			aria-pressed={params.major}
			class="ui-focus-ring filter-control major-toggle"
		>
			Major updates only
		</button>
	</div>

	{#if isFilterPending}
		<div aria-hidden="true" class="filter-progress"></div>
	{/if}
	<p role="status" class="sr-only">{announcement}</p>

	{#if query.data}
		{#if allChangelogs.length > 0}
			{#if !isSearching}
				<FeaturedPatchCard {...allChangelogs[0]} />
			{/if}

			{#if newCount > 0}
				<p class="new-summary metadata caps">
					<strong>{newCount}</strong>
					<span>new {plural(newCount, 'patch', 'patches')} since your last visit</span>
				</p>
			{/if}

			<div
				data-patch-grid
				aria-busy={isFilterPending}
				class="patch-grid"
				data-searching={isSearching}
			>
				{#each gridEntries as entry, i (entry.id)}
					{#if i === firstSeenIdx && firstSeenIdx > 0}
						<div role="presentation" aria-hidden="true" class="seen-divider">
							<span class="kicker-sm"> Seen before </span>
						</div>
					{/if}
					<div data-patch-card>
						<PatchCard {...entry} isNew={isNew(entry)} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="empty-panel clip-corner">
				<CornerAccents tlSize="2rem" />
				<div class="empty-symbol clip-corner-sm">
					<Frown class="icon-xl" />
				</div>
				<p class="empty-label metadata">No Results</p>
				<h2 class="empty-heading">No changes found</h2>
				{#if filterCount > 0}
					<p class="empty-copy">
						{#if filters.q}
							Nothing matches <span class="query-text">&ldquo;{filters.q}&rdquo;</span
							>{filterCount > 1
								? ` and your other ${filterCount - 1} ${plural(filterCount - 1, 'filter')}`
								: ''}.
						{:else}
							No changelog entries match your
							{filterCount === 1 ? 'filter' : `${filterCount} filters`}.
						{/if}
					</p>
					<ul class="filter-removals" aria-label="Remove a filter">
						{#each activeFilters as filter (filter.label)}
							<li>
								<button
									type="button"
									onclick={filter.remove}
									class="ui-focus-ring filter-control remove-filter"
								>
									<X class="icon-sm" aria-hidden="true" />
									<span><span class="sr-only">Remove </span>{filter.label}</span>
								</button>
							</li>
						{/each}
					</ul>
					{#if filterCount > 1}
						<button
							type="button"
							onclick={() => params.reset()}
							class="ui-focus-ring clear-action"
						>
							Clear all filters
						</button>
					{/if}
				{:else}
					<p class="empty-copy">The log has no entries yet.</p>
				{/if}
			</div>
		{/if}

		{#if allChangelogs.length > 0}
			<div
				class="pagination-status"
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
						class="load-more-sentinel"
						aria-hidden="true"
						{@attach loadMoreWhenVisible}
					></div>
				{:else}
					<div class="end-of-log metadata caps">
						<p>End of Log</p>
					</div>
				{/if}
			</div>
		{/if}
	{:else if query.isError}
		<div class="initial-status">
			{@render retryPrompt('Failed to load patches.', () => query.refetch())}
		</div>
	{:else}
		<div class="js-only initial-status">
			{@render loadingSpinner()}
		</div>
		<noscript
			><p class="static-fallback">
				Open the <a href="/archive">complete patch archive</a> to browse without search.
			</p></noscript
		>
	{/if}
</main>

<style>
	@layer components.features {
		.changelog-page {
			margin-top: 2rem;
			margin-bottom: 6rem;
		}
		.page-header {
			max-inline-size: 48rem;
			margin-bottom: 1.25rem;
		}
		.page-title {
			font-size: var(--text-3xl);
			line-height: var(--leading-3xl);
		}
		.page-lede {
			max-inline-size: 42rem;
			margin-top: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
		}
		.archive-summary {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-top: 0.75rem;
			color: var(--muted-foreground);
			& strong {
				color: var(--primary);
			}
			& a {
				text-underline-offset: 4px;
				&:hover {
					color: var(--signal);
					text-decoration: underline;
				}
			}
		}
		.quick-filters {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			gap: 0.5rem 1rem;
			margin-bottom: 1.25rem;
		}
		.filter-control {
			min-block-size: 2.75rem;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			padding-inline: 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			font-weight: 500;
			&:hover {
				color: var(--foreground);
			}
		}
		details[open] > .filter-control {
			border-color: color-mix(in srgb, var(--signal) 45%, transparent);
			color: var(--foreground);
		}
		.major-toggle {
			transition:
				border-color var(--duration-normal),
				color var(--duration-normal),
				background-color var(--duration-normal);
			&:hover:not([aria-pressed='true']) {
				border-color: color-mix(in srgb, var(--primary) 40%, transparent);
			}
			&[aria-pressed='true'] {
				border-color: color-mix(in srgb, var(--primary) 60%, transparent);
				background: color-mix(in srgb, var(--primary) 15%, transparent);
				color: var(--primary);
			}
		}
		.result-summary {
			margin-top: 0.75rem;
		}
		.new-summary {
			margin-bottom: 1rem;
		}
		.result-summary strong {
			color: var(--primary);
			font-weight: 600;
		}
		.latest-match {
			display: block;
			margin-top: 0.25rem;
		}
		.new-summary {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			& strong {
				color: var(--primary);
			}
		}
		.patch-grid {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			gap: 1rem;
			transition: opacity var(--duration-normal);
			&[data-searching='true'] {
				max-inline-size: 48rem;
			}
			&[aria-busy='true'] {
				pointer-events: none;
				opacity: 0.6;
			}
		}
		[data-patch-card] {
			block-size: 100%;
		}
		.seen-divider {
			grid-column: 1 / -1;
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-block: 0.25rem 1rem;
			color: var(--muted-foreground);
			&::before,
			&::after {
				content: '';
				flex: 1;
				block-size: 1px;
				background: color-mix(in srgb, var(--signal) 35%, transparent);
			}
			&::after {
				background: color-mix(in srgb, var(--primary) 30%, transparent);
			}
		}
		.empty-label {
			margin-bottom: 0.5rem;
			letter-spacing: 0.025em;
			text-transform: uppercase;
		}
		.query-text {
			color: var(--foreground);
			font-family: var(--font-mono);
		}
		.filter-removals {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem;
			margin-bottom: 1rem;
		}
		.remove-filter {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			color: var(--foreground);
			transition: border-color var(--duration-normal);
			&:hover {
				border-color: color-mix(in srgb, var(--signal) 50%, transparent);
			}
			& :global(svg) {
				color: var(--muted-foreground);
			}
		}
		.clear-action {
			min-block-size: 2.75rem;
			border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
			border-radius: var(--radius-md);
			padding: 0.75rem 1.5rem;
			background: color-mix(in srgb, var(--primary) 10%, transparent);
			color: var(--primary);
			font: 600 var(--text-sm)/var(--leading-sm) var(--font-mono);
			&:hover {
				background: color-mix(in srgb, var(--primary) 20%, transparent);
			}
			&:active {
				scale: 0.97;
			}
		}
		.pagination-status {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			padding-block: 3rem;
		}
		.initial-status {
			padding-block: 4rem;
		}
		.load-more-sentinel {
			inline-size: 100%;
			block-size: 1px;
		}
		.end-of-log {
			display: flex;
			align-items: center;
			gap: 1rem;
			&::before,
			&::after {
				content: '';
				inline-size: 4rem;
				block-size: 1px;
				background: color-mix(in srgb, var(--primary) 30%, transparent);
			}
		}
		.retry-prompt,
		.loading-status {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.75rem;
		}
		.retry-prompt {
			text-align: center;
			color: var(--destructive);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			font-weight: 500;
		}
		.retry-button {
			min-block-size: 2.75rem;
			border: 1px solid color-mix(in srgb, var(--destructive) 30%, transparent);
			padding: 0.5rem 1.25rem;
			&:hover {
				background: color-mix(in srgb, var(--destructive) 10%, transparent);
			}
		}
		.spinner {
			inline-size: 2.5rem;
			block-size: 2.5rem;
			border: 2px solid color-mix(in srgb, var(--primary) 30%, transparent);
			border-top-color: transparent;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}
		.static-fallback {
			padding-block: 1.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			& a {
				color: var(--signal);
				text-decoration: underline;
			}
		}
		@keyframes spin {
			to {
				rotate: 360deg;
			}
		}
		@media (max-width: 39.99rem) {
			.page-lede {
				display: none;
			}
		}
		@media (min-width: 40rem) {
			.page-title {
				font-size: var(--text-4xl);
				line-height: var(--leading-4xl);
			}
			.patch-grid[data-searching='false'] {
				grid-template-columns: repeat(2, minmax(0, 1fr));
			}
		}
		@media (min-width: 64rem) {
			.patch-grid[data-searching='false'] {
				grid-template-columns: repeat(3, minmax(0, 1fr));
			}
		}
		@media (min-width: 80rem) {
			.patch-grid[data-searching='false'] {
				grid-template-columns: repeat(4, minmax(0, 1fr));
			}
		}
		@keyframes filter-progress {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(100%);
			}
		}

		.filter-progress {
			position: fixed;
			inset-inline: 0;
			top: 0;
			z-index: 60;
			block-size: 0.125rem;
			overflow: hidden;
			background: oklch(from var(--primary) l c h / 0.18);
			&::after {
				content: '';
				position: absolute;
				inset: 0;
				background: linear-gradient(
					to right,
					transparent,
					oklch(from var(--primary) l c h / 0.95) 50%,
					transparent
				);
				animation: filter-progress 1.1s var(--ease-out) infinite;
			}
		}
	}
</style>
