<script lang="ts">
	import type { EntityType } from '$lib/utils/types';

	interface EntityIcon {
		id: number;
		src: string;
		alt: string;
		type: EntityType;
	}

	interface Props {
		heroes: EntityIcon[];
		items: EntityIcon[];
		maxIconsPerRow?: number;
	}

	let { heroes, items, maxIconsPerRow = 19 }: Props = $props();

	// Limit icons per row
	const displayedHeroes = heroes.slice(0, maxIconsPerRow);
	const remainingHeroesCount = Math.max(0, heroes.length - maxIconsPerRow);

	const displayedItems = items.slice(0, maxIconsPerRow);
	const remainingItemsCount = Math.max(0, items.length - maxIconsPerRow);

	// Calculate overlap based on count - more items = more overlap
	// Start at -8px for 5 items, scale up to -20px for 15+ items
	function calculateOverlap(count: number): number {
		if (count <= 3) return 0;
		if (count <= 5) return -8;
		if (count <= 8) return -12;
		if (count <= 12) return -16;
		return -20;
	}

	const heroOverlap = calculateOverlap(displayedHeroes.length);
	const itemOverlap = calculateOverlap(displayedItems.length);
</script>

<div class="flex flex-col gap-2">
	{#if displayedHeroes.length > 0}
		<div class="flex items-center">
			{#each displayedHeroes as hero, i (hero.id)}
				<img
					src={hero.src}
					alt={hero.alt}
					title={hero.alt}
					width="36"
					height="36"
					loading="lazy"
					decoding="async"
					class="border-border bg-card size-9 rounded-full border-2 object-cover transition-transform hover:z-10 hover:scale-110"
					style="margin-left:{i === 0 ? 0 : heroOverlap}px"
				/>
			{/each}
			{#if remainingHeroesCount > 0}
				<span
					class="border-primary/30 bg-card text-primary flex size-9 items-center justify-center rounded-full border-2 text-xs font-semibold"
					style="margin-left:{heroOverlap}px"
				>
					...
				</span>
			{/if}
		</div>
	{/if}

	{#if displayedItems.length > 0}
		<div class="flex items-center">
			{#each displayedItems as item, i (item.id)}
				<img
					src={item.src}
					alt={item.alt}
					title={item.alt}
					width="36"
					height="36"
					loading="lazy"
					decoding="async"
					class="border-border bg-card size-9 rounded-md border-2 object-cover transition-transform hover:z-10 hover:scale-110"
					style="margin-left:{i === 0 ? 0 : itemOverlap}px"
				/>
			{/each}
			{#if remainingItemsCount > 0}
				<span
					class="border-primary/30 bg-card text-primary flex size-9 items-center justify-center rounded-md border-2 text-xs font-semibold"
					style="margin-left:{itemOverlap}px"
				>
					...
				</span>
			{/if}
		</div>
	{/if}
</div>
