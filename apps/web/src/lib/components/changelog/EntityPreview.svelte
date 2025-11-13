<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';

	interface Props {
		entities: EntityIcon[];
	}

	let { entities }: Props = $props();
	const maxIconsPerRow = 19;

	const overlap = $derived.by(function (): number {
		const { length } = entities;

		if (length === undefined) return 0;
		if (length <= 3) return 0;
		if (length <= 5) return -8;
		if (length <= 8) return -12;
		if (length <= 12) return -16;
		return -20;
	});
</script>

<div class="flex justify-end">
	{#each entities.slice(0, maxIconsPerRow) as hero, i (hero.id)}
		<img
			src={hero.src}
			alt={hero.alt}
			title={hero.alt}
			width="36"
			height="36"
			loading="lazy"
			decoding="async"
			style="margin-left:{i === 0 ? 0 : overlap}px"
		/>
	{/each}
	{#if entities.length > maxIconsPerRow}
		<span class="ellipse" style="margin-left:{overlap}px"> ... </span>
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
