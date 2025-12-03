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
	import type { EnrichedHero, EnrichedItem } from '$lib/utils/types';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import {
		getSelectedHeroObjects,
		getSelectedItemObjects
	} from '$lib/utils/selectedEntities.svelte';

	function getHeroImage(hero: EnrichedHero): string {
		return Object.values(hero.images)[0] as string;
	}

	function getItemImage(item: EnrichedItem): string | undefined {
		return item.images?.png || item.images?.webp;
	}

	const params = getSearchParams();

	const selectedHeroObjects = $derived(getSelectedHeroObjects());
	const selectedItemObjects = $derived(getSelectedItemObjects());

	const heroes = $derived(page.data.heroes ?? []);
	const items = $derived(page.data.items ?? []);

	let open = $state(false);
	let sheetOpen = $state(false);
	let inputValue = $state(params.q);
	let filterMode = $state<'all' | 'heroes' | 'items'>('all');

	function toggle<T>(array: T[], id: T): T[] {
		return array.includes(id) ? array.filter((i) => i !== id) : [...array, id];
	}

	const filteredHeroes = $derived(
		heroes
			.filter((hero: EnrichedHero) => {
				if (!hero.isReleased) return false;
				if (filterMode === 'items') return false;
				if (!inputValue) return true;
				return hero.name.toLowerCase().includes(inputValue.toLowerCase());
			})
			.sort((a: EnrichedHero, b: EnrichedHero) => {
				const aSelected = params.hero.includes(a.name);
				const bSelected = params.hero.includes(b.name);
				if (aSelected && !bSelected) return -1;
				if (!aSelected && bSelected) return 1;
				return a.name.localeCompare(b.name);
			})
	);

	const filteredItems = $derived(
		items
			.filter((item: EnrichedItem) => {
				if (filterMode === 'heroes') return false;
				if (!item.name || item.name.trim() === '' || item.name.includes('_'))
					return false;
				if (!item.isReleased) return false;
				if (!inputValue) return true;
				return item.name.toLowerCase().includes(inputValue.toLowerCase());
			})
			.sort((a: EnrichedItem, b: EnrichedItem) => {
				const aSelected = params.item.includes(a.name);
				const bSelected = params.item.includes(b.name);
				if (aSelected && !bSelected) return -1;
				if (!aSelected && bSelected) return 1;
				return a.name.localeCompare(b.name);
			})
	);

	type MergedEntity =
		| { type: 'hero'; data: EnrichedHero; isSelected: boolean }
		| { type: 'item'; data: EnrichedItem; isSelected: boolean };

	const mergedList = $derived.by(() => {
		if (filterMode !== 'all') return [];

		const heroEntities: MergedEntity[] = filteredHeroes.map((hero: EnrichedHero) => ({
			type: 'hero' as const,
			data: hero,
			isSelected: params.hero.includes(hero.name)
		}));

		const itemEntities = filteredItems.map(
			(item: EnrichedItem) =>
				({
					type: 'item' as const,
					data: item,
					isSelected: params.item.includes(item.name)
				}) satisfies MergedEntity
		);

		return [...heroEntities, ...itemEntities].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});

	function selectHero(heroId: number) {
		const hero = heroes.find((h: EnrichedHero) => h.id === heroId);
		if (hero) {
			params.hero = toggle(params.hero, hero.name);
		}
	}

	function selectItem(itemId: number) {
		const item = items.find((i: EnrichedItem) => i.id === itemId);
		if (item) {
			params.item = toggle(params.item, item.name);
		}
	}

	function clearAll() {
		open = false;
		inputValue = '';
		params.reset();
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		params.update({ q: inputValue });
		open = false;
	}
</script>

{#snippet filterContent()}
	<div class="border-border flex border-b p-2">
		<ToggleGroup.Root type="single" bind:value={filterMode} class="w-full">
			<ToggleGroup.Item value="all" class="flex-1 text-xs">All</ToggleGroup.Item>
			<ToggleGroup.Item value="heroes" class="flex-1 text-xs">Heroes</ToggleGroup.Item>
			<ToggleGroup.Item value="items" class="flex-1 text-xs">Items</ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>

	<Command.Root class="bg-transparent" shouldFilter={false}>
		<Command.List class="max-h-[350px] overflow-y-auto p-2">
			{#if (filterMode === 'all' && mergedList.length === 0) || (filterMode !== 'all' && filteredHeroes.length === 0 && filteredItems.length === 0)}
				<Command.Empty class="text-muted-foreground py-6 text-center text-sm">
					No results found.
				</Command.Empty>
			{:else if filterMode === 'all'}
				<Command.Group>
					{#each mergedList as entity (entity.type === 'hero' ? `hero-${entity.data.id}` : `item-${entity.data.id}`)}
						<EntityItem
							name={entity.data.name}
							imageSrc={entity.type === 'hero'
								? getHeroImage(entity.data as EnrichedHero)
								: getItemImage(entity.data as EnrichedItem)}
							isSelected={entity.isSelected}
							colorClass={entity.type}
							onSelect={() =>
								entity.type === 'hero'
									? selectHero(entity.data.id)
									: selectItem(entity.data.id)}
						/>
					{/each}
				</Command.Group>
			{:else}
				{#if filteredHeroes.length > 0}
					<Command.Group>
						{#each filteredHeroes as hero (hero.id)}
							<EntityItem
								name={hero.name}
								imageSrc={getHeroImage(hero)}
								isSelected={params.hero.includes(hero.name)}
								colorClass="hero"
								onSelect={() => selectHero(hero.id)}
							/>
						{/each}
					</Command.Group>
				{/if}

				{#if filteredItems.length > 0}
					<Command.Group>
						{#each filteredItems as item (item.id)}
							<EntityItem
								name={item.name}
								imageSrc={getItemImage(item)}
								isSelected={params.item.includes(item.name)}
								colorClass="item"
								onSelect={() => selectItem(item.id)}
							/>
						{/each}
					</Command.Group>
				{/if}
			{/if}
		</Command.List>
	</Command.Root>
{/snippet}

<div class="sticky z-40 w-full" style="top: max(64px, env(safe-area-inset-top));">
	<div class="relative">
		<form onsubmit={handleSubmit} class="filter-form">
			<div class="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
				{#each selectedHeroObjects as hero (hero.id)}
					<FilterBadge
						name={hero.name}
						icon={Object.values(hero.images)[0] as string}
						onRemove={() => selectHero(hero.id)}
						badgeColor="hero"
					/>
				{/each}
				{#each selectedItemObjects as item (item.id)}
					<FilterBadge
						name={item.name}
						icon={item.images?.png || item.images?.webp}
						onRemove={() => selectItem(item.id)}
						badgeColor="item"
					/>
				{/each}

				<!-- Desktop: show input that opens dropdown -->
				<input
					type="text"
					placeholder="Add more filters or search..."
					class="placeholder:text-muted-foreground hidden min-w-0 flex-1 bg-transparent outline-none sm:block sm:min-w-[200px]"
					bind:value={inputValue}
					onfocus={() => (open = true)}
					onkeydown={(e) => !open && e.key !== 'Escape' && (open = true)}
				/>

				<!-- Mobile: placeholder text -->
				<span class="text-muted-foreground flex-1 sm:hidden">
					{selectedHeroObjects.length || selectedItemObjects.length
						? ''
						: 'Tap filter to add...'}
				</span>
			</div>

			{#if selectedHeroObjects.length || selectedItemObjects.length || params.q}
				<button
					type="button"
					onclick={(e) => {
						e.stopPropagation();
						clearAll();
					}}
					class="hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors"
					aria-label="Clear all filters"
				>
					<XIcon class="text-muted-foreground size-4" />
				</button>
			{/if}

			<!-- Mobile: Sheet trigger -->
			<Sheet.Root bind:open={sheetOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon-sm"
							class="text-muted-foreground sm:hidden"
							aria-label="Open filters"
						>
							<FilterIcon class="size-4" />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="bottom" class="pb-safe max-h-[85vh] rounded-t-xl">
					<!-- Drag handle -->
					<div class="bg-muted mx-auto mb-4 h-1 w-12 rounded-full"></div>
					<Sheet.Header>
						<Sheet.Title>Filter changelog</Sheet.Title>
						<Sheet.Description>Select heroes and items to filter by</Sheet.Description>
					</Sheet.Header>
					{@render filterContent()}
				</Sheet.Content>
			</Sheet.Root>

			<button
				type="submit"
				class="bg-primary shrink-0 rounded-sm p-1.5 transition-colors hover:opacity-80"
				aria-label="Apply search"
				title="Press Enter or click to search"
			>
				<SearchIcon class="text-primary-foreground size-3.5" />
			</button>
		</form>

		<!-- Desktop dropdown (hidden on mobile) -->
		{#if open}
			<div class="filter-dropdown">
				{@render filterContent()}
			</div>
			<button
				type="button"
				class="fixed inset-0 z-40 hidden sm:block"
				onclick={() => (open = false)}
				aria-label="Close dropdown"
				tabindex="-1"
			></button>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.filter-form {
		@apply flex min-h-[44px] w-full items-center gap-2 rounded-md border-2 px-3 py-2 text-sm transition-colors;
		@apply border-border bg-card/80 text-foreground backdrop-blur-sm;
		@apply focus-within:border-primary focus-within:ring-primary/20 focus-within:ring-1;
	}

	.filter-dropdown {
		@apply absolute inset-x-0 top-full z-50 mt-2 hidden max-h-[450px] overflow-hidden rounded-md border shadow-2xl sm:block;
		@apply border-border bg-background/95 backdrop-blur-lg;
	}
</style>
