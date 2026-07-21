<script lang="ts">
	import { getEntityMaps, resolveEntity } from './entityContext';

	interface Props {
		name: string;
		type: 'hero' | 'item';
	}

	let { name, type }: Props = $props();

	const maps = getEntityMaps();
	const entity = $derived(resolveEntity(maps, type, name));

	const slug = $derived(
		(entity?.slug ?? name)
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
	);

	const displayName = $derived(entity?.name ?? name);
</script>

<header
	id={slug}
	data-entity-name={displayName}
	data-entity-slug={entity?.slug}
	class="entity-heading group relative mb-4 flex scroll-mt-20 items-center gap-4 py-2"
>
	<div
		class="bg-primary/25 group-hover:bg-primary/50 absolute inset-y-0 left-0 w-px transition-colors duration-200"
		aria-hidden="true"
	></div>

	{#if entity?.image}
		<img
			src={entity.image}
			alt={displayName}
			width="40"
			height="40"
			loading="lazy"
			decoding="async"
			class="border-border bg-card ml-3 size-10 rounded-lg border object-cover shadow-sm"
		/>
	{/if}
	<h3 class="text-foreground text-base font-semibold tracking-tight">
		{#if entity}
			<a href="/{type}/{entity.slug}" class="hover:text-signal transition-colors"
				>{displayName}</a
			>
		{:else}
			{displayName}
		{/if}
	</h3>
</header>
