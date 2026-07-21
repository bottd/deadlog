<script lang="ts">
	import { page } from '$app/state';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import * as Command from '$lib/components/ui/command';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import FilterBadge from './FilterBadge.svelte';
	import EntityItem from './EntityItem.svelte';
	import type { EnrichedHero, EnrichedItem } from '$lib/types';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import {
		getSelectedHeroObjects,
		getSelectedItemObjects
	} from '$lib/utils/selectedEntities.svelte';
	import { getHeroImage, getItemImage } from '$lib/utils/entityImages';
	import { FilterState } from './filterState.svelte';

	const DESKTOP_LIST_ID = 'filter-options';
	const MOBILE_INPUT_ID = 'mobile-filter-input';
	const MOBILE_LIST_ID = 'mobile-filter-options';
	const MAX_OPTIONS = 60;

	const selectedHeroObjects = $derived(getSelectedHeroObjects());
	const selectedItemObjects = $derived(getSelectedItemObjects());
	const filterCount = $derived(
		selectedHeroObjects.length + selectedItemObjects.length + (params.q ? 1 : 0)
	);

	const filterState = new FilterState(
		() => page.data.heroes ?? [],
		() => page.data.items ?? []
	);

	let open = $state(false);
	let sheetOpen = $state(false);
	let desktopCommandValue = $state('');
	let mobileCommandValue = $state('');

	const placeholder = $derived.by(() => {
		const hasHeroes = selectedHeroObjects.length > 0;
		const hasItems = selectedItemObjects.length > 0;
		if (hasHeroes && hasItems) return 'Add more filters...';
		if (hasHeroes) return 'Add items or more heroes...';
		if (hasItems) return 'Add heroes or more items...';
		return 'Search heroes, items, or keywords...';
	});

	const availableOptionCount = $derived.by(() => {
		if (filterState.filterMode === 'all') return filterState.mergedList.length;
		return filterState.filteredHeroes.length + filterState.filteredItems.length;
	});

	$effect(() => {
		filterState.syncSearch(params.q);
	});

	function getOptionId(prefix: 'desktop' | 'mobile', value: string) {
		return value ? `${prefix}-option-${value}` : undefined;
	}

	function clearAll() {
		open = false;
		sheetOpen = false;
		filterState.clearAll();
	}

	function submitSearch(closeSheet = false) {
		filterState.updateSearch();
		open = false;
		if (closeSheet) sheetOpen = false;
	}

	function handleSubmit(event: SubmitEvent, closeSheet = false) {
		event.preventDefault();
		submitSearch(closeSheet);
	}

	function handleComboboxKeydown(event: KeyboardEvent, mobile = false) {
		if (event.key === 'Escape') {
			event.preventDefault();
			event.stopPropagation();
			if (mobile) sheetOpen = false;
			else open = false;
			return;
		}

		if (!mobile && !open) {
			if (
				event.key === 'ArrowDown' ||
				event.key === 'ArrowUp' ||
				event.key.length === 1
			) {
				open = true;
			}
		}

		if (event.key === 'Enter' && availableOptionCount === 0) {
			event.preventDefault();
			event.stopPropagation();
			submitSearch(mobile);
		}
	}

	function handleFocusOut(event: FocusEvent) {
		const container = event.currentTarget as HTMLElement;
		requestAnimationFrame(() => {
			if (!container.contains(document.activeElement)) open = false;
		});
	}
</script>

{#snippet selectedFilters()}
	{#each selectedHeroObjects as hero (hero.id)}
		<FilterBadge
			name={hero.name}
			icon={Object.values(hero.images)[0] as string}
			onRemove={() => filterState.selectHero(hero.id)}
			badgeColor="hero"
		/>
	{/each}
	{#each selectedItemObjects as item (item.id)}
		<FilterBadge
			name={item.name}
			icon={item.image}
			onRemove={() => filterState.selectItem(item.id)}
			badgeColor="item"
		/>
	{/each}
{/snippet}

{#snippet filterContent(listId: string, optionPrefix: 'desktop' | 'mobile')}
	<div
		class="border-border flex border-b p-2"
		onkeydown={(event) => event.stopPropagation()}
	>
		<ToggleGroup.Root
			type="single"
			bind:value={filterState.filterMode}
			class="w-full"
			aria-label="Filter entity type"
		>
			<ToggleGroup.Item value="all" class="flex-1 text-xs">All</ToggleGroup.Item>
			<ToggleGroup.Item value="heroes" class="flex-1 text-xs">Heroes</ToggleGroup.Item>
			<ToggleGroup.Item value="items" class="flex-1 text-xs">Items</ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>

	<Command.List
		id={listId}
		aria-label="Available hero and item filters"
		aria-multiselectable="true"
		class="max-h-[350px] overflow-y-auto p-2"
	>
		{#if availableOptionCount === 0}
			<Command.Empty class="text-muted-foreground py-6 text-center text-sm">
				No entity matches. Submit to search the patch archive for this keyword.
			</Command.Empty>
		{:else if filterState.filterMode === 'all'}
			<Command.Group heading="Heroes and items">
				{#each filterState.mergedList.slice(0, MAX_OPTIONS) as entity (entity.type === 'hero' ? `hero-${entity.data.id}` : `item-${entity.data.id}`)}
					{@const value = `${entity.type}-${entity.data.id}`}
					<EntityItem
						id={`${optionPrefix}-option-${value}`}
						{value}
						name={entity.data.name}
						imageSrc={entity.type === 'hero'
							? getHeroImage(entity.data as EnrichedHero)
							: getItemImage(entity.data as EnrichedItem)}
						isSelected={entity.isSelected}
						colorClass={entity.type}
						onSelect={() =>
							entity.type === 'hero'
								? filterState.selectHero(entity.data.id)
								: filterState.selectItem(entity.data.id)}
					/>
				{/each}
			</Command.Group>
		{:else}
			{#if filterState.filteredHeroes.length > 0}
				<Command.Group heading="Heroes">
					{#each filterState.filteredHeroes.slice(0, MAX_OPTIONS) as hero (hero.id)}
						<EntityItem
							id={`${optionPrefix}-option-hero-${hero.id}`}
							value={`hero-${hero.id}`}
							name={hero.name}
							imageSrc={getHeroImage(hero)}
							isSelected={filterState.isHeroSelected(hero.name)}
							colorClass="hero"
							onSelect={() => filterState.selectHero(hero.id)}
						/>
					{/each}
				</Command.Group>
			{/if}

			{#if filterState.filteredItems.length > 0}
				<Command.Group heading="Items">
					{#each filterState.filteredItems.slice(0, MAX_OPTIONS) as item (item.id)}
						<EntityItem
							id={`${optionPrefix}-option-item-${item.id}`}
							value={`item-${item.id}`}
							name={item.name}
							imageSrc={getItemImage(item)}
							isSelected={filterState.isItemSelected(item.name)}
							colorClass="item"
							onSelect={() => filterState.selectItem(item.id)}
						/>
					{/each}
				</Command.Group>
			{/if}
		{/if}
	</Command.List>

	{#if availableOptionCount > MAX_OPTIONS}
		<p
			class="text-muted-foreground border-border border-t px-3 py-2 text-xs"
			role="status"
		>
			Showing the first {MAX_OPTIONS} of {availableOptionCount} matches. Type to narrow the
			list.
		</p>
	{/if}
{/snippet}

<div class="sticky z-40 w-full" style="top: max(64px, env(safe-area-inset-top));">
	<div class="relative">
		<!-- Desktop combobox -->
		<div class="hidden sm:block" onfocusout={handleFocusOut}>
			<Command.Root
				bind:value={desktopCommandValue}
				shouldFilter={false}
				loop
				label="Search the archive by hero, item, or keyword"
				class="h-auto overflow-visible rounded-none bg-transparent"
			>
				<form onsubmit={handleSubmit} class="filter-form">
					<div class="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
						{@render selectedFilters()}
						<input
							id="filter-input"
							type="text"
							role="combobox"
							aria-autocomplete="list"
							aria-haspopup="listbox"
							aria-expanded={open}
							aria-controls={open ? DESKTOP_LIST_ID : undefined}
							aria-activedescendant={open
								? getOptionId('desktop', desktopCommandValue)
								: undefined}
							autocomplete="off"
							{placeholder}
							class="placeholder:text-muted-foreground min-w-[200px] flex-1 bg-transparent outline-none"
							bind:value={filterState.inputValue}
							onfocus={() => (open = true)}
							onkeydown={(event) => handleComboboxKeydown(event)}
						/>
					</div>

					{#if filterCount > 0}
						<button
							type="button"
							onclick={clearAll}
							onkeydown={(event) => event.stopPropagation()}
							class="hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors"
							aria-label="Clear all archive filters"
						>
							<XIcon class="text-muted-foreground size-4" />
						</button>
					{/if}

					<button
						type="submit"
						onkeydown={(event) => event.stopPropagation()}
						class="bg-primary -my-[10px] -mr-[13px] flex shrink-0 items-center self-stretch rounded-r px-3 transition-colors hover:opacity-80"
						aria-label="Search patch archive"
						title="Search patch archive"
					>
						<SearchIcon class="text-primary-foreground size-5 stroke-[2.5]" />
					</button>
				</form>

				{#if open}
					<div class="filter-dropdown">
						{@render filterContent(DESKTOP_LIST_ID, 'desktop')}
					</div>
				{/if}
			</Command.Root>

			{#if open}
				<button
					type="button"
					class="fixed inset-0 z-40"
					onclick={() => (open = false)}
					aria-label="Close filter options"
					tabindex="-1"
				></button>
			{/if}
		</div>

		<!-- Mobile filter summary and dialog trigger -->
		<div class="filter-form sm:hidden">
			<div class="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
				{@render selectedFilters()}
				{#if selectedHeroObjects.length === 0 && selectedItemObjects.length === 0}
					<span class="text-muted-foreground flex-1">Search the patch archive</span>
				{/if}
			</div>

			{#if filterCount > 0}
				<button
					type="button"
					onclick={clearAll}
					class="hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors"
					aria-label="Clear all archive filters"
				>
					<XIcon class="text-muted-foreground size-4" />
				</button>
			{/if}

			<Sheet.Root bind:open={sheetOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							type="button"
							variant="ghost"
							size="sm"
							class="text-muted-foreground"
						>
							<FilterIcon class="size-4" />
							<span>Filters</span>
							{#if filterCount > 0}
								<span class="bg-primary text-primary-foreground rounded px-1 text-[10px]">
									{filterCount}
								</span>
							{/if}
						</Button>
					{/snippet}
				</Sheet.Trigger>

				<Sheet.Content side="bottom" class="pb-safe max-h-[85vh] rounded-t-xl">
					<div
						class="bg-muted mx-auto mb-4 h-1 w-12 rounded-full"
						aria-hidden="true"
					></div>
					<Sheet.Header>
						<Sheet.Title>Search the patch archive</Sheet.Title>
						<Sheet.Description>
							Patches must match every selected hero, item, and keyword.
						</Sheet.Description>
					</Sheet.Header>

					<Command.Root
						bind:value={mobileCommandValue}
						shouldFilter={false}
						loop
						label="Search the archive by hero, item, or keyword"
						class="mt-4 h-auto bg-transparent"
					>
						<form onsubmit={(event) => handleSubmit(event, true)}>
							<label
								for={MOBILE_INPUT_ID}
								class="text-foreground mb-1.5 block text-sm font-medium"
							>
								Hero, item, or keyword
							</label>
							<div
								class="border-border flex items-center gap-2 rounded-md border px-3 py-2"
							>
								<SearchIcon class="text-muted-foreground size-4 shrink-0" />
								<input
									id={MOBILE_INPUT_ID}
									type="text"
									role="combobox"
									aria-autocomplete="list"
									aria-haspopup="listbox"
									aria-expanded={sheetOpen}
									aria-controls={MOBILE_LIST_ID}
									aria-activedescendant={getOptionId('mobile', mobileCommandValue)}
									autocomplete="off"
									placeholder="Search heroes, items, or patch text..."
									class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-sm outline-none"
									bind:value={filterState.inputValue}
									onkeydown={(event) => handleComboboxKeydown(event, true)}
								/>
								<Button
									type="submit"
									variant="ghost"
									size="sm"
									onkeydown={(event) => event.stopPropagation()}
								>
									Search
								</Button>
							</div>
						</form>

						{@render filterContent(MOBILE_LIST_ID, 'mobile')}
					</Command.Root>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.filter-form {
		@apply flex min-h-[44px] w-full items-center gap-2 rounded-md border-2 px-3 py-2 text-sm transition-colors;
		@apply border-border bg-card/80 text-foreground backdrop-blur-sm;
		@apply focus-within:border-signal focus-within:ring-signal/20 focus-within:ring-1;
	}

	.filter-dropdown {
		@apply absolute inset-x-0 top-full z-50 mt-2 hidden max-h-[450px] overflow-hidden rounded-md border shadow-2xl sm:block;
		@apply border-border bg-background/95 backdrop-blur-lg;
	}
</style>
