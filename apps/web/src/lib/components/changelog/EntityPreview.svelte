<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import EntityTooltip from './EntityTooltip.svelte';

	interface Props {
		entities: EntityIcon[];
	}

	let { entities }: Props = $props();
	const params = getSearchParams();
	const maxIconsPerRow = 9;

	const overlap = $derived.by(() => {
		const len = entities.length;
		if (len <= 3) return 0;
		if (len <= 5) return -8;
		if (len <= 8) return -12;
		if (len <= 12) return -16;
		return -20;
	});

	function handleSelect(entity: EntityIcon) {
		const name = entity.alt;
		if (entity.type === 'hero') {
			params.hero = [...new Set([...params.hero, name])];
		} else {
			params.item = [...new Set([...params.item, name])];
		}
	}
</script>

<div class="flex justify-end">
	{#each entities.slice(0, maxIconsPerRow) as entity, i (entity.id)}
		<EntityTooltip
			name={entity.alt}
			imageSrc={entity.src}
			type={entity.type}
			onSelect={() => handleSelect(entity)}
		>
			<img
				src={entity.src}
				alt={entity.alt}
				width="36"
				height="36"
				loading="lazy"
				decoding="async"
				class="border-border bg-card size-9 rounded-full border-2 object-cover transition-transform hover:z-10 hover:scale-110"
				style="margin-left:{i === 0 ? 0 : overlap}px"
			/>
		</EntityTooltip>
	{/each}
	{#if entities.length > maxIconsPerRow}
		<span class="ellipse" style="margin-left:{overlap}px"> ... </span>
	{/if}
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.ellipse {
		@apply border-primary/30 bg-card text-primary flex size-9 items-center justify-center rounded-md border-2 text-xs font-semibold;
	}
</style>
