<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';

	interface Props {
		heroes?: EntityIcon[];
		items?: EntityIcon[];
	}

	let { heroes = [], items = [] }: Props = $props();
	const maxIconsPerRow = 19;

	function getOverlap(count?: number): number {
		if (count === undefined) return 0;
		if (count <= 3) return 0;
		if (count <= 5) return -8;
		if (count <= 8) return -12;
		if (count <= 12) return -16;
		return -20;
	}

	const heroOverlap = getOverlap(heroes?.length);
	const itemOverlap = getOverlap(items?.length);
</script>

<div class="flex flex-col gap-2">
	{#if heroes.length > 0}
		<div class="flex justify-end">
			{#each heroes.slice(0, maxIconsPerRow) as hero, i (hero.id)}
				<img
					src={hero.src}
					alt={hero.alt}
					title={hero.alt}
					width="36"
					height="36"
					loading="lazy"
					decoding="async"
					style="margin-left:{i === 0 ? 0 : heroOverlap}px"
				/>
			{/each}
			{#if heroes.length > maxIconsPerRow}
				<span class="ellipse" style="margin-left:{heroOverlap}px"> ... </span>
			{/if}
		</div>
	{/if}

	{#if items.length > 0}
		<div class="flex items-center justify-end">
			{#each items.slice(0, maxIconsPerRow) as item, i (item.id)}
				<img
					src={item.src}
					alt={item.alt}
					title={item.alt}
					width="36"
					height="36"
					loading="lazy"
					decoding="async"
					style="margin-left:{i === 0 ? 0 : itemOverlap}px"
				/>
			{/each}
			{#if items.length > maxIconsPerRow}
				<span class="ellipse" style="margin-left:{itemOverlap}px"> ... </span>
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	@reference "../../../app.css";

	img {
		@apply border-border bg-card size-9 rounded-full border-2 object-cover transition-transform hover:z-10 hover:scale-110;
	}

	.ellipse {
		@apply border-primary/30 bg-card text-primary flex size-9 items-center justify-center rounded-md border-2 text-xs font-semibold;
	}
</style>
