<script lang="ts">
	import { entityFragmentId, getEntityMaps, resolveEntity } from './entityContext';

	interface Props {
		type: 'hero' | 'item';
		names: string[];
	}

	let { type, names }: Props = $props();

	const maps = getEntityMaps();

	const icons = $derived.by(() => {
		return names
			.map((name) => {
				const entity = resolveEntity(maps, type, name);
				const displayName = entity?.name ?? name;
				return {
					name: displayName,
					image: entity?.image,
					slug: entityFragmentId(displayName)
				};
			})
			.filter((e) => e.image);
	});
</script>

{#if icons.length > 0}
	<ul
		class="section-preview mb-5 flex list-none flex-wrap gap-1 p-0"
		aria-label="Affected {type}s"
	>
		{#each icons as icon (icon.name)}
			<li>
				<a
					href="#{icon.slug}"
					class="group/badge border-border/60 hover:border-primary/30 hover:bg-primary/5 flex items-center gap-1.5 rounded-sm border py-0.5 pr-2 pl-0.5 transition-colors"
				>
					<img
						src={icon.image}
						alt=""
						width="20"
						height="20"
						loading="lazy"
						decoding="async"
						class="size-5 rounded-sm object-cover"
					/>
					<span
						class="text-muted-foreground group-hover/badge:text-foreground text-[11px] font-medium transition-colors"
					>
						{icon.name}
					</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}
