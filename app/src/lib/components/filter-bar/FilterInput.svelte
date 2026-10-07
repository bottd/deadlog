<script lang="ts">
	import { page } from '$app/state';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import * as Sheet from '#lib/components/ui/sheet/index.ts';
	import type { EnrichedHero, EnrichedItem, EntityIcon } from '#lib/types.ts';
	import { searchParams as params } from '#lib/stores/searchParams.svelte.ts';
	import { findEntityName, indexEntityNames } from '@deadlog/utils';
	import { entityImage } from '#lib/utils/entityImages.ts';
	import { resolveEntity } from '#lib/components/changelog/entityContext.ts';
	import { FilterState } from './filterState.svelte';
	import type { EntityKind } from '#lib/entityKinds.ts';
	import FilterBadge from './FilterBadge.svelte';
	import SearchForm from './SearchForm.svelte';

	const filterState = new FilterState(
		() => page.data.heroes ?? [],
		() => page.data.items ?? []
	);
	let open = $state(false);
	let sheetOpen = $state(false);
	const patchIcons = $derived(
		(
			page.data as {
				changelog?: { icons?: { heroes: EntityIcon[]; items: EntityIcon[] } };
			}
		).changelog?.icons
	);

	const rosters: Record<EntityKind, Map<string, EnrichedHero | EnrichedItem>> = $derived({
		hero: indexEntityNames<EnrichedHero | EnrichedItem>(
			page.data.heroes ?? [],
			(hero) => hero.name
		),
		item: indexEntityNames<EnrichedHero | EnrichedItem>(
			page.data.items ?? [],
			(item) => item.name
		)
	});

	function selectedEntities(kind: EntityKind) {
		const names = kind === 'hero' ? params.hero : params.item;
		return names.map((name) => {
			const entity = findEntityName(rosters[kind], name);
			const fallback = patchIcons ? resolveEntity(patchIcons, kind, name) : undefined;
			return {
				key: `${kind}:${name}`,
				kind,
				name: entity?.name ?? fallback?.alt ?? name,
				icon: entity ? entityImage(entity) : fallback?.src
			};
		});
	}
	const selected = $derived([...selectedEntities('hero'), ...selectedEntities('item')]);

	function close() {
		open = false;
		sheetOpen = false;
	}
	function clear() {
		close();
		filterState.clearAll();
	}
</script>

<div class="js-only">
	<div class="desktop-search">
		<SearchForm {filterState} bind:open onsubmit={close} onclose={close} />
		{#if open}
			<button
				type="button"
				class="filter-backdrop"
				onclick={close}
				aria-label="Close filter options"
				tabindex="-1"
			></button>
		{/if}
	</div>
	<div class="mobile-search">
		<Sheet.Root bind:open={sheetOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<button {...props} type="button" class="ui-focus-ring search-trigger">
						<SearchIcon class="icon" />
						<span class="trigger-label">Search &amp; filter</span>
						{#if params.activeFilterCount > 0}<span class="metadata filter-count"
								>{params.activeFilterCount}</span
							>{/if}
					</button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content class="search-sheet">
				<Sheet.Header>
					<Sheet.Title>Search all patch notes</Sheet.Title>
					<Sheet.Description
						>Find a hero's history or combine filters to narrow the archive.</Sheet.Description
					>
				</Sheet.Header>
				<SearchForm {filterState} mobile onsubmit={close} onclose={close} />
			</Sheet.Content>
		</Sheet.Root>
	</div>
	{#if params.activeFilterCount > 0}
		<div class="active-filter-row">
			<div class="active-filters" aria-label="Active filters">
				{#each selected as entity (entity.key)}
					<FilterBadge
						name={entity.name}
						icon={entity.icon}
						kind={entity.kind}
						onRemove={() => filterState.toggle(entity.kind, entity.name)}
					/>
				{/each}
				{#if params.q}
					<button
						type="button"
						class="ui-focus-ring filter-chip"
						onclick={() => params.update({ q: '' })}
						aria-label="Remove keyword filter: {params.q}"
					>
						Keyword: “{params.q}” <XIcon class="icon-sm" />
					</button>
				{/if}
				{#if params.major}
					<button
						type="button"
						class="ui-focus-ring filter-chip major"
						onclick={() => params.update({ major: false })}
						aria-label="Remove Major patches filter"
						>Major patches <XIcon class="icon-sm" /></button
					>
				{/if}
			</div>
			<button type="button" class="ui-focus-ring clear-filters" onclick={clear}
				>Clear all</button
			>
		</div>
	{/if}
</div>

<noscript>
	<p class="search-fallback">
		Search needs JavaScript. Browse <a href="/heroes">hero histories</a>,
		<a href="/items">item histories</a>, or
		<a href="/archive">all patches</a>.
	</p>
</noscript>

<style>
	@layer components.features {
		.desktop-search {
			display: none;
		}
		.filter-backdrop {
			position: fixed;
			inset: 0;
			z-index: 40;
		}
		.search-trigger {
			display: flex;
			min-block-size: 2.75rem;
			inline-size: 100%;
			align-items: center;
			gap: 0.75rem;
			padding-inline: 0.75rem;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			background: var(--card);
			color: var(--muted-foreground);
			font-size: var(--text-base);
			line-height: var(--leading-base);
			text-align: left;
			& :global(svg) {
				color: var(--signal);
			}
		}
		.trigger-label {
			flex: 1;
		}
		.filter-count {
			color: var(--primary);
		}
		:global(.search-sheet) {
			max-block-size: 85dvh;
			overflow-y: auto;
			padding-inline: 1rem;
			padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));
		}
		.active-filter-row {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-top: 0.5rem;
		}
		.active-filters {
			display: flex;
			min-inline-size: 0;
			flex: 1;
			align-items: center;
			gap: 0.5rem;
			overflow-x: auto;
		}
		.filter-chip,
		.clear-filters {
			min-block-size: 2.75rem;
			flex-shrink: 0;
			border-radius: var(--radius-md);
			padding-inline: 0.5rem;
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.filter-chip {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			color: var(--signal);
			&.major {
				color: var(--primary);
			}
		}
		.clear-filters {
			color: var(--muted-foreground);
			&:hover {
				color: var(--foreground);
			}
		}
		.search-fallback {
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
			& a {
				color: var(--signal);
				text-decoration: underline;
			}
		}
		@media (min-width: 40rem) {
			.desktop-search {
				display: block;
			}
			.mobile-search {
				display: none;
			}
		}
	}
</style>
