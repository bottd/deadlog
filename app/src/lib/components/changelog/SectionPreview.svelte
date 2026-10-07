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
	<ul class="section-preview" data-prose-ui aria-label="Affected {type}s">
		{#each icons as icon (icon.name)}
			<li>
				<a href="#{icon.slug}" class="preview-link">
					<img
						src={icon.image}
						alt=""
						width="20"
						height="20"
						loading="lazy"
						decoding="async"
					/>
					<span>
						{icon.name}
					</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	@layer components.features {
		.section-preview {
			display: flex;
			flex-wrap: wrap;
			gap: 0.875rem 0.25rem;
			margin-bottom: 1.25rem;
		}
		.preview-link {
			display: flex;
			align-items: center;
			gap: 0.375rem;
			padding: 0.125rem 0.5rem 0.125rem 0.125rem;
			border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
			border-radius: var(--radius-sm);
			color: var(--muted-foreground);
			font-size: var(--text-2xs);
			font-weight: 500;
			text-underline-offset: 2px;
			transition:
				border-color var(--duration-normal),
				background-color var(--duration-normal),
				color var(--duration-normal),
				opacity var(--duration-normal);
			&:hover {
				border-color: color-mix(in srgb, var(--primary) 30%, transparent);
				background: color-mix(in srgb, var(--primary) 5%, transparent);
				color: var(--foreground);
				text-decoration: underline;
				opacity: 0.8;
			}
			& img {
				inline-size: 1.25rem;
				block-size: 1.25rem;
				border-radius: var(--radius-sm);
				object-fit: cover;
			}
		}
	}
</style>
