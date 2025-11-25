<script lang="ts">
	import { page } from '$app/state';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import FilterBadge from './FilterBadge.svelte';
	import FilterDropdown from './FilterDropdown.svelte';
	import type { EnrichedHero, EnrichedItem } from '$lib/utils/types';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';
	import {
		getSelectedHeroObjects,
		getSelectedItemObjects
	} from '$lib/utils/selectedEntities.svelte';

	type FilterMode = 'all' | 'heroes' | 'items';

	interface MergedEntity {
		type: 'hero' | 'item';
		data: EnrichedHero | EnrichedItem;
		isSelected: boolean;
	}

	const params = getSearchParams();

	const selectedHeroObjects = $derived(getSelectedHeroObjects());
	const selectedItemObjects = $derived(getSelectedItemObjects());

	const { heroes, items } = page.data;

	let open = $state(false);
	let inputValue = $state(params.q);
	let filterMode = $state<FilterMode>('all');

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

	const mergedList = $derived.by((): MergedEntity[] => {
		if (filterMode !== 'all') return [];

		const heroEntities: MergedEntity[] = filteredHeroes.map((hero: EnrichedHero) => ({
			type: 'hero',
			data: hero,
			isSelected: params.hero.includes(hero.name)
		}));

		const itemEntities: MergedEntity[] = filteredItems.map((item: EnrichedItem) => ({
			type: 'item',
			data: item,
			isSelected: params.item.includes(item.name)
		}));

		return [...heroEntities, ...itemEntities].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});

	function selectHero(heroId: number) {
		const hero = heroes.find((h: EnrichedHero) => h.id === heroId);
		if (hero) {
			params.update({ hero: toggle(params.hero, hero.name) });
		}
	}

	function selectItem(itemId: number) {
		const item = items.find((i: EnrichedItem) => i.id === itemId);
		if (item) {
			params.update({ item: toggle(params.item, item.name) });
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

	const hasFilters = $derived(
		selectedHeroObjects.length > 0 || selectedItemObjects.length > 0 || params.q
	);
</script>

<div class="filter-container">
	<div class="relative">
		<form onsubmit={handleSubmit} class="filter-form">
			<div class="filter-badges">
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

				<input
					type="text"
					placeholder="Add more filters or search..."
					class="filter-input"
					bind:value={inputValue}
					onfocus={() => (open = true)}
					onkeydown={(e) => !open && e.key !== 'Escape' && (open = true)}
				/>
			</div>

			{#if hasFilters}
				<button
					type="button"
					onclick={(e) => {
						e.stopPropagation();
						clearAll();
					}}
					class="clear-button"
					aria-label="Clear all filters"
				>
					<XIcon class="text-muted-foreground size-4" />
				</button>
			{/if}

			<button
				type="submit"
				class="search-button"
				aria-label="Apply search"
				title="Press Enter or click to search"
			>
				<SearchIcon class="text-primary-foreground size-3.5" />
			</button>
		</form>

		{#if open}
			<FilterDropdown
				{filterMode}
				onFilterModeChange={(mode) => (filterMode = mode)}
				{mergedList}
				{filteredHeroes}
				{filteredItems}
				selectedHeroNames={params.hero}
				selectedItemNames={params.item}
				onSelectHero={selectHero}
				onSelectItem={selectItem}
				onClose={() => (open = false)}
			/>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.filter-container {
		@apply sticky z-40 w-full;
		top: max(64px, env(safe-area-inset-top));
	}

	.filter-form {
		@apply border-border bg-card/80 text-foreground focus-within:border-primary focus-within:ring-primary/20 flex min-h-[44px] w-full items-center gap-2 rounded-md border-2 px-3 py-2 text-sm backdrop-blur-sm transition-colors focus-within:ring-1;
	}

	.filter-badges {
		@apply flex min-w-0 flex-1 flex-wrap items-center gap-1.5;
	}

	.filter-input {
		@apply placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent outline-none sm:min-w-[200px];
	}

	.clear-button {
		@apply hover:bg-secondary shrink-0 rounded-sm p-1 transition-colors;
	}

	.search-button {
		@apply bg-primary shrink-0 rounded-sm p-1.5 transition-colors hover:opacity-80;
	}
</style>
