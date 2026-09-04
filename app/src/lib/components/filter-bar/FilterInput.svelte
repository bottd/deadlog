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
	import { getHeroCardImage, getItemImage } from '$lib/utils/entityImages';
	import { FilterState, hasEntity } from './filterState.svelte';
	import { ENTITY_TONE, type EntityKind } from '$lib/entityTone';
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

	const entityImage = (kind: EntityKind, entity: EnrichedHero | EnrichedItem) =>
		kind === 'hero'
			? getHeroCardImage(entity as EnrichedHero)
			: getItemImage(entity as EnrichedItem);

	/**
	 * A selected name resolves to the roster entry when there is one, else to the icon
	 * this patch carries, else to the raw name — an off-roster filter still reads as a name.
	 */
	function selectedEntities(kind: EntityKind) {
		const names = kind === 'hero' ? params.hero : params.item;
		const roster = ((kind === 'hero' ? page.data.heroes : page.data.items) ?? []) as (
			EnrichedHero | EnrichedItem
		)[];
		const fallbacks = kind === 'hero' ? patchIcons?.heroes : patchIcons?.items;

		return names.map((name, index) => {
			const entity = roster.find((candidate) => hasEntity([name], candidate.name));
			const icon = fallbacks?.find((candidate) => hasEntity([name], candidate.alt));
			return {
				key: `${kind}-${name}-${index}`,
				kind,
				index,
				name: entity?.name ?? icon?.alt ?? name,
				icon: entity ? entityImage(kind, entity) : icon?.src
			};
		});
	}

	const selectedHeroes = $derived(selectedEntities('hero'));
	const selectedItems = $derived(selectedEntities('item'));
	const selectedAll = $derived([...selectedHeroes, ...selectedItems]);
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
		const hasHeroes = selectedHeroes.length > 0;
		const hasItems = selectedItems.length > 0;
		if (hasHeroes && hasItems) return 'Add more filters...';
		if (hasHeroes) return 'Add items or more heroes...';
		if (hasItems) return 'Add heroes or more items...';
		return 'Search heroes, items, or keywords...';
	});

	const availableOptionCount = $derived(filterState.mergedList.length);

	afterNavigate(({ to }) => {
		filterState.syncSearch(to?.url.searchParams.get('q') ?? '');
	});

	const optionId = (prefix: 'desktop' | 'mobile', value: string) =>
		`${prefix}-option-${value}`;

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
	{#each selectedAll as entity (entity.key)}
		<FilterBadge
			name={entity.name}
			icon={entity.icon}
			kind={entity.kind}
			onRemove={() => filterState.toggle(entity.kind, entity.name)}
		/>
	{/each}
{/snippet}

<!-- The no-JS fallback removes a filter by navigating, so its chips are links, not buttons. -->
{#snippet removeChip(href: string, label: string, ariaLabel: string, tone: string)}
	<a
		{href}
		text="xs"
		items="center"
		gap="1"
		p="x-2 y-1"
		class="inline-flex rounded {tone}"
		aria-label={ariaLabel}
	>
		{label}
		<XIcon class="size-3" />
	</a>
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
				{#each filterState.mergedList.slice(0, MAX_OPTIONS) as entity (entity.key)}
					<EntityItem
						id={optionId(optionPrefix, entity.key)}
						value={entity.key}
						name={entity.data.name}
						imageSrc={entityImage(entity.type, entity.data)}
						isSelected={entity.isSelected}
						kind={entity.type}
						onSelect={() => filterState.selectById(entity.type, entity.data.id)}
					/>
				{/each}
			</Command.Group>
		{/if}
	</Command.List>

	{#if availableOptionCount > MAX_OPTIONS}
		<p border="border t" text="muted-foreground xs" p="x-3 y-2" role="status">
			Showing the first {MAX_OPTIONS} of {availableOptionCount} matches. Type to narrow the
			list.
		</p>
	{/if}
{/snippet}

<div sticky z="40" w="full" style="top: max(64px, env(safe-area-inset-top));">
	<div relative>
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
					<div flex="~ 1 wrap" items="center" gap="1.5" class="min-w-0">
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
							aria-activedescendant={open && desktopCommandValue
								? optionId('desktop', desktopCommandValue)
								: undefined}
							autocomplete="off"
							{placeholder}
							flex="1"
							bg="transparent"
							class="placeholder:text-muted-foreground min-w-[200px] outline-none"
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
							shrink="0"
							rounded="sm"
							p="1"
							class="hover:bg-secondary transition-colors"
							aria-label="Clear all filters"
						>
							<XIcon class="text-muted-foreground size-4" />
						</button>
					{/if}

					<button
						flex="~"
						type="submit"
						onkeydown={(event) => event.stopPropagation()}
						bg="primary"
						shrink="0"
						items="center"
						rounded="r"
						p="x-3"
						class="-my-[10px] -mr-[13px] self-stretch transition-colors hover:opacity-80"
						aria-label="Search changelog"
						title="Search changelog"
					>
						<SearchIcon class="text-primary-foreground size-5 stroke-2.5" />
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
					fixed
					z="40"
					class="inset-0"
					onclick={() => (open = false)}
					aria-label="Close filter options"
					tabindex="-1"
				></button>
			{/if}
		</div>

		<form
			method="GET"
			action={resolve('/', {})}
			flex="wrap"
			class="filter-form no-js-mobile-filter"
		>
			{@render filterFields()}
			{#if selectedAll.length > 0 || params.major}
				<div flex="~ wrap" w="full" items="center" gap="1.5" p="b-1">
					{#each selectedAll as entity (entity.key)}
						{@const label = ENTITY_TONE[entity.kind].label}
						{@render removeChip(
							filterRemovalHref(entity.kind, entity.index),
							`${label}: ${entity.name}`,
							`Remove ${label} filter: ${entity.name}`,
							`${ENTITY_TONE[entity.kind].chip} text-foreground`
						)}
					{/each}
					{#if params.major}
						{@render removeChip(
							filterRemovalHref('major'),
							'Major patches',
							'Remove Major patches filter',
							'bg-secondary text-secondary-foreground'
						)}
					{/if}
					<a
						href={resolve('/', {})}
						text="muted-foreground xs"
						m="l-auto"
						underline
						class="underline-offset-2"
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
				flex="1"
				bg="transparent"
				class="placeholder:text-muted-foreground min-w-0 outline-none"
			/>
			<button
				type="submit"
				bg="primary"
				text="primary-foreground"
				p="x-3"
				class="-my-2 -mr-3"
				aria-label="Search changelog"
			>
				<SearchIcon class="size-5" />
			</button>
		</form>

		<div class="filter-form enhanced-mobile-filter">
			<div flex="~ 1 wrap" items="center" gap="1.5" class="min-w-0">
				{@render selectedFilters()}
				{#if selectedAll.length === 0}
					<span text="muted-foreground" flex="1">Search the changelog</span>
				{/if}
			</div>

			{#if filterCount > 0}
				<button
					type="button"
					onclick={clearAll}
					shrink="0"
					rounded="sm"
					p="1"
					class="hover:bg-secondary transition-colors"
					aria-label="Clear all filters"
				>
					<XIcon class="text-muted-foreground size-4" />
				</button>
			{/if}

			<Sheet.Root bind:open={sheetOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button {...props} type="button" size="sm" class="text-muted-foreground">
							<FilterIcon class="size-4" />
							<span>Filters</span>
							{#if filterCount > 0}
								<span
									bg="primary"
									text="primary-foreground"
									p="x-1"
									class="rounded text-[10px]"
								>
									{filterCount}
								</span>
							{/if}
						</Button>
					{/snippet}
				</Sheet.Trigger>

				<Sheet.Content
					class="max-h-[85vh] rounded-t-xl"
					style="padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));"
				>
					<div
						bg="muted"
						m="x-auto b-4"
						h="1"
						w="12"
						rounded="full"
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
								text="foreground sm"
								m="b-1.5"
								block
								font="medium"
							>
								Hero, item, or keyword
							</label>
							<div
								flex="~"
								border="border ~"
								items="center"
								gap="2"
								rounded="md"
								p="x-3 y-2"
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
									aria-activedescendant={mobileCommandValue
										? optionId('mobile', mobileCommandValue)
										: undefined}
									autocomplete="off"
									placeholder="Search heroes, items, or patch text..."
									flex="1"
									bg="transparent"
									text="sm"
									class="placeholder:text-muted-foreground min-w-0 outline-none"
									bind:value={filterState.inputValue}
									onkeydown={(event) => handleComboboxKeydown(event, true)}
								/>
								<Button
									type="submit"
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
