<script lang="ts">
	import { page } from '$app/state';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import * as Sheet from '$lib/components/ui/sheet';
	import type { EnrichedHero, EnrichedItem, EntityIcon } from '$lib/types';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { findEntityName, indexEntityNames } from '@deadlog/utils';
	import { entityImage } from '$lib/utils/entityImages';
	import { resolveEntity } from '$lib/components/changelog/entityContext';
	import { FilterState } from './filterState.svelte';
	import type { EntityKind } from '$lib/entityTone';
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

<div class="js-only relative">
	<div class="hidden sm:block">
		<SearchForm {filterState} bind:open onsubmit={close} onclose={close} />
		{#if open}
			<button
				type="button"
				class="fixed inset-0 z-40"
				onclick={close}
				aria-label="Close filter options"
				tabindex="-1"
			></button>
		{/if}
	</div>
	<div class="sm:hidden">
		<Sheet.Root bind:open={sheetOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						type="button"
						class="ui-focus-ring border-border bg-card text-muted-foreground flex min-h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-base"
					>
						<SearchIcon class="text-signal size-4" />
						<span class="flex-1">Search &amp; filter</span>
						{#if params.activeFilterCount > 0}<span class="text-primary font-mono text-xs"
								>{params.activeFilterCount}</span
							>{/if}
					</button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content
				class="max-h-[85dvh] overflow-y-auto px-4 pb-6"
				style="padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));"
			>
				<Sheet.Header class="pr-12">
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
		<div class="mt-2 flex items-center gap-2">
			<div
				class="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto"
				aria-label="Active filters"
			>
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
						class="ui-focus-ring text-signal flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs"
						onclick={() => params.update({ q: '' })}
						aria-label="Remove keyword filter: {params.q}"
					>
						Keyword: “{params.q}” <XIcon class="size-3.5" />
					</button>
				{/if}
				{#if params.major}
					<button
						type="button"
						class="ui-focus-ring text-primary flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs"
						onclick={() => params.update({ major: false })}
						aria-label="Remove Major patches filter"
						>Major patches <XIcon class="size-3.5" /></button
					>
				{/if}
			</div>
			<button
				type="button"
				class="ui-focus-ring text-muted-foreground min-h-11 shrink-0 rounded px-2 text-xs hover:text-foreground"
				onclick={clear}>Clear all</button
			>
		</div>
	{/if}
</div>

<noscript>
	<p class="text-muted-foreground text-sm leading-relaxed">
		Search needs JavaScript. Browse <a class="text-signal underline" href="/heroes"
			>hero histories</a
		>,
		<a class="text-signal underline" href="/items">item histories</a>, or
		<a class="text-signal underline" href="/archive">all patches</a>.
	</p>
</noscript>
