<script lang="ts">
	import { entityFragmentId } from '@deadlog/utils';
	import { getEntityIcons, resolveEntity } from './entityContext';

	interface Props {
		type: 'hero' | 'item';
		names: string[];
	}

	let { type, names }: Props = $props();

	const entityIcons = getEntityIcons();

	const icons = $derived.by(() => {
		return names
			.map((name) => {
				const entity = resolveEntity(entityIcons, type, name);
				const displayName = entity?.alt ?? name;
				return {
					name: displayName,
					image: entity?.src,
					slug: entityFragmentId(displayName)
				};
			})
			.filter((e) => e.image);
	});
</script>

{#if icons.length > 0}
	<ul
		m="b-5"
		flex="~ wrap"
		list="none"
		gap="1"
		p="0"
		class="section-preview"
		aria-label="Affected {type}s"
	>
		{#each icons as icon (icon.name)}
			<li>
				<a
					href="#{icon.slug}"
					border="border/60 ~"
					items="center"
					gap="1.5"
					rounded="sm"
					p="y-0.5 r-2 l-0.5"
					class="group/badge hover:border-primary/30 hover:bg-primary/5 transition-colors flex"
				>
					<img
						src={icon.image}
						alt=""
						width="20"
						height="20"
						loading="lazy"
						decoding="async"
						rounded="sm"
						class="size-5 object-cover"
					/>
					<span
						text="muted-foreground"
						font="medium"
						class="group-hover/badge:text-foreground text-[11px] transition-colors"
					>
						{icon.name}
					</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}
