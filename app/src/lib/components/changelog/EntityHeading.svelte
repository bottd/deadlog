<script lang="ts">
	import { getEntityMaps } from './entityContext';

	interface Props {
		name: string;
		type: 'hero' | 'item';
	}

	let { name, type }: Props = $props();

	const maps = getEntityMaps();

	const slug = $derived(
		name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
	);

	const image = $derived.by(() => {
		if (type === 'hero') {
			const hero = Object.values(maps.heroMap).find(
				(h) => h.name.toLowerCase() === name.toLowerCase()
			);
			if (!hero) return undefined;
			return (
				hero.images.icon_image_small_webp ||
				hero.images.icon_image_small ||
				Object.values(hero.images)[0]
			);
		} else {
			const item = Object.values(maps.itemMap).find(
				(i) => i.name.toLowerCase() === name.toLowerCase()
			);
			return item?.image;
		}
	});
</script>

<header
	id={slug}
	class="entity-heading group relative mb-4 flex scroll-mt-20 items-center gap-4 py-2"
>
	<div
		class="bg-primary/25 group-hover:bg-primary/50 absolute inset-y-0 left-0 w-px transition-colors duration-200"
		aria-hidden="true"
	></div>

	{#if image}
		<img
			src={image}
			alt={name}
			width="40"
			height="40"
			loading="lazy"
			decoding="async"
			class="border-border bg-card ml-3 size-10 rounded-lg border object-cover shadow-sm"
		/>
	{/if}
	<h3 class="text-foreground font-display text-base tracking-tight">
		{name}
	</h3>
</header>
