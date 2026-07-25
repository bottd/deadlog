<script lang="ts">
	import { abilityFragmentId } from '@deadlog/utils';
	import { getEntityMaps } from './entityContext';

	interface Props {
		name: string;
		/** Set by the generator only when this ability heads more than one group. */
		id?: string;
	}

	let { name, id }: Props = $props();

	const maps = getEntityMaps();

	const slug = $derived(id ?? abilityFragmentId(name));

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
			alt=""
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
