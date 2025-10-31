<script lang="ts">
	import { page } from '$app/state';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import * as Command from '$lib/components/ui/command';
	import FilterBadge from './FilterBadge.svelte';
	import type { EnrichedHero, EnrichedItem } from '$lib/utils/types';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';
	import {
		getSelectedHeroObjects,
		getSelectedItemObjects
	} from '$lib/utils/selectedEntities.svelte';

	const params = getSearchParams();

	// Derived values for selected hero/item objects
	const selectedHeroObjects = $derived(getSelectedHeroObjects());
	const selectedItemObjects = $derived(getSelectedItemObjects());

	const { heroes, items } = page.data;

	let open = $state(false);
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
			params.update({
				hero: toggle(params.hero, hero.name)
			});
		}
	}

	function selectItem(itemId: number) {
		const item = items.find((i: EnrichedItem) => i.id === itemId);
		if (item) {
			params.update({
				item: toggle(params.item, item.name)
			});
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

<div
	class="sticky z-40 -mx-4 w-full bg-[#0a0a0a] px-4 py-4"
	style="top: max(64px, env(safe-area-inset-top));"
>
	<div class="relative">
		<form
			onsubmit={handleSubmit}
			class="flex min-h-[44px] w-full items-center gap-2 rounded-md border border-[#2a2a2a] bg-[#121212]/80 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors focus-within:border-[#c89b3c] focus-within:ring-1 focus-within:ring-[#c89b3c]/20"
		>
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

				<input
					type="text"
					placeholder="Add more filters or search..."
					class="min-w-0 flex-1 bg-transparent outline-none placeholder:text-gray-600 sm:min-w-[200px]"
					bind:value={inputValue}
					onfocus={() => (open = true)}
					onkeydown={(e) => !open && e.key !== 'Escape' && (open = true)}
				/>
			</div>

			{#if selectedHeroObjects.length || selectedItemObjects.length || params.q}
				<button
					type="button"
					onclick={(e) => {
						e.stopPropagation();
						clearAll();
					}}
					class="shrink-0 rounded-sm p-1 transition-colors hover:bg-[#2a2a2a]"
					aria-label="Clear all filters"
				>
					<XIcon class="size-4 text-gray-500" />
				</button>
			{/if}

			<button
				type="submit"
				class="shrink-0 rounded-sm bg-[#c89b3c] p-1.5 transition-colors hover:bg-[#d4a84a]"
				aria-label="Apply search"
				title="Press Enter or click to search"
			>
				<SearchIcon class="size-3.5 text-white" />
			</button>
		</form>

		{#if open}
			<div
				class="absolute inset-x-0 top-full z-50 mt-2 max-h-[450px] overflow-hidden rounded-md border border-[#2a2a2a] bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-lg"
			>
				<div class="flex border-b border-[#2a2a2a] p-2">
					<button
						type="button"
						onclick={() => (filterMode = 'all')}
						class="flex-1 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors {filterMode ===
						'all'
							? 'bg-[#c89b3c] text-white'
							: 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'}"
					>
						All
					</button>
					<button
						type="button"
						onclick={() => (filterMode = 'heroes')}
						class="flex-1 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors {filterMode ===
						'heroes'
							? 'bg-[#c89b3c] text-white'
							: 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'}"
					>
						Heroes
					</button>
					<button
						type="button"
						onclick={() => (filterMode = 'items')}
						class="flex-1 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors {filterMode ===
						'items'
							? 'bg-[#c89b3c] text-white'
							: 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'}"
					>
						Items
					</button>
				</div>

				<Command.Root class="bg-transparent" shouldFilter={false}>
					<Command.List class="max-h-[350px] overflow-y-auto p-2">
						{#if (filterMode === 'all' && mergedList.length === 0) || (filterMode !== 'all' && filteredHeroes.length === 0 && filteredItems.length === 0)}
							<Command.Empty class="py-6 text-center text-sm text-gray-500">
								No results found.
							</Command.Empty>
						{:else if filterMode === 'all'}
							<Command.Group>
								{#each mergedList as entity (entity.type === 'hero' ? `hero-${entity.data.id}` : `item-${entity.data.id}`)}
									{#if entity.type === 'hero'}
										<Command.Item
											value={entity.data.name}
											onSelect={() => selectHero(entity.data.id)}
											class="flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors hover:bg-[#1a1a1a] aria-selected:bg-[#1a1a1a] {entity.isSelected &&
												'bg-[#c89b3c]/10'}"
										>
											<img
												src={Object.values(entity.data.images)[0] as string}
												alt={entity.data.name}
												class="size-8 rounded object-cover"
											/>
											<span
												class="flex-1 text-sm {entity.isSelected
													? 'font-medium text-[#c89b3c]'
													: 'text-white'}"
											>
												{entity.data.name}
											</span>
											{#if entity.isSelected}
												<div
													class="size-2 rounded-full bg-[#c89b3c]"
													aria-label="Selected"
												></div>
											{/if}
										</Command.Item>
									{:else}
										<Command.Item
											value={entity.data.name}
											onSelect={() => selectItem(entity.data.id)}
											class="flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors hover:bg-[#1a1a1a] aria-selected:bg-[#1a1a1a] {entity.isSelected &&
												'bg-[#4a9eff]/10'}"
										>
											{#if entity.data.images?.png || entity.data.images?.webp}
												<img
													src={entity.data.images?.png || entity.data.images?.webp}
													alt={entity.data.name}
													class="size-8 rounded object-cover"
												/>
											{:else}
												<div class="size-8 rounded bg-[#2a2a2a]"></div>
											{/if}
											<span
												class="flex-1 text-sm {entity.isSelected
													? 'font-medium text-[#4a9eff]'
													: 'text-white'}"
											>
												{entity.data.name}
											</span>
											{#if entity.isSelected}
												<div
													class="size-2 rounded-full bg-[#4a9eff]"
													aria-label="Selected"
												></div>
											{/if}
										</Command.Item>
									{/if}
								{/each}
							</Command.Group>
						{:else}
							{#if filteredHeroes.length > 0}
								<Command.Group>
									{#each filteredHeroes as hero (hero.id)}
										{@const isSelected = params.hero.includes(hero.name)}
										<Command.Item
											value={hero.name}
											onSelect={() => selectHero(hero.id)}
											class="flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors hover:bg-[#1a1a1a] aria-selected:bg-[#1a1a1a] {isSelected &&
												'bg-[#c89b3c]/10'}"
										>
											<img
												src={Object.values(hero.images)[0] as string}
												alt={hero.name}
												class="size-8 rounded object-cover"
											/>
											<span
												class="flex-1 text-sm {isSelected
													? 'font-medium text-[#c89b3c]'
													: 'text-white'}"
											>
												{hero.name}
											</span>
											{#if isSelected}
												<div
													class="size-2 rounded-full bg-[#c89b3c]"
													aria-label="Selected"
												></div>
											{/if}
										</Command.Item>
									{/each}
								</Command.Group>
							{/if}

							{#if filteredItems.length > 0}
								<Command.Group>
									{#each filteredItems as item (item.id)}
										{@const isSelected = params.item.includes(item.name)}
										<Command.Item
											value={item.name}
											onSelect={() => selectItem(item.id)}
											class="flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors hover:bg-[#1a1a1a] aria-selected:bg-[#1a1a1a] {isSelected &&
												'bg-[#4a9eff]/10'}"
										>
											{#if item.images?.png || item.images?.webp}
												<img
													src={item.images?.png || item.images?.webp}
													alt={item.name}
													class="size-8 rounded object-cover"
												/>
											{:else}
												<div class="size-8 rounded bg-[#2a2a2a]"></div>
											{/if}
											<span
												class="flex-1 text-sm {isSelected
													? 'font-medium text-[#4a9eff]'
													: 'text-white'}"
											>
												{item.name}
											</span>
											{#if isSelected}
												<div
													class="size-2 rounded-full bg-[#4a9eff]"
													aria-label="Selected"
												></div>
											{/if}
										</Command.Item>
									{/each}
								</Command.Group>
							{/if}
						{/if}
					</Command.List>
				</Command.Root>
			</div>

			<button
				type="button"
				class="fixed inset-0 z-40"
				onclick={() => (open = false)}
				aria-label="Close dropdown"
				tabindex="-1"
			></button>
		{/if}
	</div>

	{#if selectedHeroObjects.length || selectedItemObjects.length || params.q}
		<p class="mt-2 text-xs text-gray-500">
			{#if selectedHeroObjects.length}
				Filtering by {selectedHeroObjects.length} hero{selectedHeroObjects.length !== 1
					? 's'
					: ''}
			{/if}
			{#if selectedHeroObjects.length && selectedItemObjects.length}
				•
			{/if}
			{#if selectedItemObjects.length}
				{selectedItemObjects.length} item{selectedItemObjects.length !== 1 ? 's' : ''}
			{/if}
			{#if (selectedHeroObjects.length || selectedItemObjects.length) && params.q}
				•
			{/if}
			{#if params.q}
				Searching: "{params.q}"
			{/if}
		</p>
	{/if}
</div>
