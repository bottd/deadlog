<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import * as Command from '$lib/components/ui/command';
	import * as Sheet from '$lib/components/ui/sheet';
	import Button from '$lib/components/ui/button/button.svelte';
	import FilterBadge from './FilterBadge.svelte';
	import EntityItem from './EntityItem.svelte';
	import type { EnrichedHero, EnrichedItem, EntityIcon } from '$lib/types';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { getHeroImage, getItemImage } from '$lib/utils/entityImages';
	import { FilterState, hasEntity } from './filterState.svelte';
	import { MAX_QUERY_LENGTH } from '$lib/queries/keys';

	const DESKTOP_LIST_ID = 'filter-options';
	const MOBILE_INPUT_ID = 'mobile-filter-input';
	const MOBILE_LIST_ID = 'mobile-filter-options';
	const MAX_OPTIONS = 60;

	const patchIcons = $derived(
		(
			page.data as {
				changelog?: { icons?: { heroes: EntityIcon[]; items: EntityIcon[] } };
			}
		).changelog?.icons
	);
	const selectedHeroObjects = $derived(
		params.hero.map((name, index) => {
			const entity = ((page.data.heroes ?? []) as EnrichedHero[]).find((hero) =>
				hasEntity([name], hero.name)
			);
			const icon = patchIcons?.heroes.find((hero) => hasEntity([name], hero.alt));
			return {
				key: `${name}-${index}`,
				index,
				name: entity?.name ?? icon?.alt ?? name,
				icon: entity ? getHeroImage(entity) : icon?.src
			};
		})
	);
	const selectedItemObjects = $derived(
		params.item.map((name, index) => {
			const entity = ((page.data.items ?? []) as EnrichedItem[]).find((item) =>
				hasEntity([name], item.name)
			);
			const icon = patchIcons?.items.find((item) => hasEntity([name], item.alt));
			return {
				key: `${name}-${index}`,
				index,
				name: entity?.name ?? icon?.alt ?? name,
				icon: entity ? getItemImage(entity) : icon?.src
			};
		})
	);
	const filterCount = $derived(params.activeFilterCount);

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

	const availableOptionCount = $derived(filterState.mergedList.length);

	afterNavigate(({ to }) => {
		filterState.syncSearch(to?.url.searchParams.get('q') ?? '');
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

	function filterRemovalHref(key: 'hero' | 'item' | 'major', index?: number) {
		const next = params.toURLSearchParams();
		if (key === 'major') {
			next.delete(key);
		} else {
			const values = [...(key === 'hero' ? params.hero : params.item)];
			if (index !== undefined) values.splice(index, 1);
			if (values.length > 0) next.set(key, values.join(','));
			else next.delete(key);
		}

		const query = next.toString();
		return `${resolve('/', {})}${query ? `?${query}` : ''}`;
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
</script>

{#snippet selectedFilters()}
	{#each selectedHeroObjects as hero (hero.key)}
		<FilterBadge
			name={hero.name}
			icon={hero.icon}
			onRemove={() => filterState.toggleHero(hero.name)}
			badgeColor="hero"
		/>
	{/each}
	{#each selectedItemObjects as item (item.key)}
		<FilterBadge
			name={item.name}
			icon={item.icon}
			onRemove={() => filterState.toggleItem(item.name)}
			badgeColor="item"
		/>
	{/each}
{/snippet}

{#snippet filterFields()}
	{#if params.hero.length > 0}
		<input type="hidden" name="hero" value={params.hero.join(',')} />
	{/if}
	{#if params.item.length > 0}
		<input type="hidden" name="item" value={params.item.join(',')} />
	{/if}
	{#if params.major}
		<input type="hidden" name="major" value="true" />
	{/if}
{/snippet}

{#snippet filterContent(listId: string, optionPrefix: 'desktop' | 'mobile')}
	<Command.List
		id={listId}
		aria-label="Available hero and item filters"
		aria-multiselectable="true"
		class="max-h-[350px] overflow-y-auto p-2"
	>
		{#if availableOptionCount === 0}
			<Command.Empty class="text-muted-foreground py-6 text-center text-sm">
				No entity matches. Submit to search the changelog for this keyword.
			</Command.Empty>
		{:else}
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
		<div class="hidden sm:block">
			<Command.Root
				bind:value={desktopCommandValue}
				shouldFilter={false}
				loop
				label="Search by hero, item, or keyword"
				class="relative z-50 h-auto overflow-visible rounded-none bg-transparent"
			>
				<form
					method="GET"
					action={resolve('/', {})}
					onsubmit={handleSubmit}
					class="filter-form flex"
				>
					{@render filterFields()}
					<div class="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
						{@render selectedFilters()}
						<input
							id="filter-input"
							name="q"
							maxlength={MAX_QUERY_LENGTH}
							type="text"
							aria-label="Search by hero, item, or keyword"
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
							oninput={() => (open = true)}
							onkeydown={(event) => handleComboboxKeydown(event)}
						/>
					</div>

					{#if filterCount > 0}
						<button
							type="button"
							onclick={clearAll}
							onkeydown={(event) => event.stopPropagation()}
							class="hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors"
							aria-label="Clear all filters"
						>
							<XIcon class="text-muted-foreground size-4" />
						</button>
					{/if}

					<button
						type="submit"
						onkeydown={(event) => event.stopPropagation()}
						class="bg-primary -my-[10px] -mr-[13px] flex shrink-0 items-center self-stretch rounded-r px-3 transition-colors hover:opacity-80"
						aria-label="Search changelog"
						title="Search changelog"
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
		<form
			method="GET"
			action={resolve('/', {})}
			class="filter-form no-js-mobile-filter flex-wrap"
		>
			{@render filterFields()}
			{#if selectedHeroObjects.length > 0 || selectedItemObjects.length > 0 || params.major}
				<div class="flex w-full flex-wrap items-center gap-1.5 pb-1">
					{#each selectedHeroObjects as hero (hero.key)}
						<a
							href={filterRemovalHref('hero', hero.index)}
							class="border-primary/30 bg-primary/10 text-foreground inline-flex items-center gap-1 rounded border px-2 py-1 text-xs"
							aria-label="Remove Hero filter: {hero.name}"
						>
							Hero: {hero.name}
							<XIcon class="size-3" />
						</a>
					{/each}
					{#each selectedItemObjects as item (item.key)}
						<a
							href={filterRemovalHref('item', item.index)}
							class="border-signal/30 bg-signal/10 text-foreground inline-flex items-center gap-1 rounded border px-2 py-1 text-xs"
							aria-label="Remove Item filter: {item.name}"
						>
							Item: {item.name}
							<XIcon class="size-3" />
						</a>
					{/each}
					{#if params.major}
						<a
							href={filterRemovalHref('major')}
							class="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
							aria-label="Remove Major patches filter"
						>
							Major patches
							<XIcon class="size-3" />
						</a>
					{/if}
					<a
						href={resolve('/', {})}
						class="text-muted-foreground ml-auto text-xs underline underline-offset-2"
					>
						Clear all
					</a>
				</div>
			{/if}
			<label for="no-js-filter-input" class="sr-only">Search the changelog</label>
			<input
				id="no-js-filter-input"
				name="q"
				type="search"
				maxlength={MAX_QUERY_LENGTH}
				value={params.q}
				placeholder="Search the changelog..."
				class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent outline-none"
			/>
			<button
				type="submit"
				class="bg-primary text-primary-foreground -my-2 -mr-3 px-3"
				aria-label="Search changelog"
			>
				<SearchIcon class="size-5" />
			</button>
		</form>

		<div class="filter-form enhanced-mobile-filter">
			<div class="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
				{@render selectedFilters()}
				{#if selectedHeroObjects.length === 0 && selectedItemObjects.length === 0}
					<span class="text-muted-foreground flex-1">Search the changelog</span>
				{/if}
			</div>

			{#if filterCount > 0}
				<button
					type="button"
					onclick={clearAll}
					class="hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors"
					aria-label="Clear all filters"
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

				<Sheet.Content
					side="bottom"
					class="max-h-[85vh] rounded-t-xl"
					style="padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));"
				>
					<div
						class="bg-muted mx-auto mb-4 h-1 w-12 rounded-full"
						aria-hidden="true"
					></div>
					<Sheet.Header>
						<Sheet.Title>Search the changelog</Sheet.Title>
						<Sheet.Description>
							Patches must match every selected hero, item, and keyword.
						</Sheet.Description>
					</Sheet.Header>

					<Command.Root
						bind:value={mobileCommandValue}
						shouldFilter={false}
						loop
						label="Search by hero, item, or keyword"
						class="mt-4 h-auto bg-transparent"
					>
						<form
							method="GET"
							action={resolve('/', {})}
							onsubmit={(event) => handleSubmit(event, true)}
						>
							{@render filterFields()}
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
									name="q"
									maxlength={MAX_QUERY_LENGTH}
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
		@apply min-h-[44px] w-full items-center gap-2 rounded-md border-2 px-3 py-2 text-sm transition-colors;
		@apply border-border bg-card/80 text-foreground backdrop-blur-sm;
		@apply focus-within:border-signal focus-within:ring-signal/20 focus-within:ring-1;
	}

	.filter-dropdown {
		@apply absolute inset-x-0 top-full z-50 mt-2 hidden max-h-[450px] overflow-hidden rounded-md border shadow-2xl sm:block;
		@apply border-border bg-background/95 backdrop-blur-lg;
	}

	.no-js-mobile-filter {
		display: flex;
	}

	.enhanced-mobile-filter {
		display: none;
	}

	:global([data-app-ready='true']) .no-js-mobile-filter {
		display: none;
	}

	:global([data-app-ready='true']) .enhanced-mobile-filter {
		display: flex;
	}

	@media (min-width: 640px) {
		.no-js-mobile-filter,
		.enhanced-mobile-filter,
		:global([data-app-ready='true']) .enhanced-mobile-filter {
			display: none;
		}
	}
</style>
