<script lang="ts">
	import { getEntityMaps } from './entityContext';

	interface Props {
		name: string;
	}

	let { name }: Props = $props();

	const maps = getEntityMaps();

	const slug = $derived(
		name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
	);

	const abilityData = $derived(maps.abilityMap[name.toLowerCase()]);
</script>

<header
	id={slug}
	class="ability-heading relative mb-2 flex scroll-mt-20 items-center gap-2.5 py-1 pl-3"
>
	<div
		class="bg-primary/15 absolute top-1/2 left-0 h-3 w-px -translate-y-1/2"
		aria-hidden="true"
	></div>

	{#if abilityData?.image}
		<img
			src={abilityData.image}
			alt={name}
			width="20"
			height="20"
			loading="lazy"
			decoding="async"
			class="border-border/60 size-5 rounded border object-cover"
		/>
	{/if}
	<h4 class="text-foreground/80 text-xs font-semibold tracking-tight">
		{name}
	</h4>
</header>
