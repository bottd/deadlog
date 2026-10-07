<script lang="ts">
	import { formatDateShort } from '@deadlog/utils';
	import {
		changeCountLabel,
		entityPatchHref,
		type EntityFilterContext
	} from './entityContext';
	let {
		patches,
		entity
	}: {
		patches: { id: string; slug: string; date: Date; changeCount: number | null }[];
		entity: EntityFilterContext;
	} = $props();
	const recent = $derived(patches.slice(0, 6));
</script>

<nav aria-label="Recent patches for {entity.name}">
	<p>
		Most recent {recent.length} of {patches.length} patches
	</p>
	<div class="recent-links">
		{#each recent as patch (patch.id)}
			<a
				href={entityPatchHref(patch, entity)}
				class="ui-focus-ring recent-link"
				aria-label="View {entity.name} in the {formatDateShort(
					patch.date
				)} patch, {changeCountLabel(patch.changeCount)}"
			>
				<time datetime={patch.date.toISOString()} data-timeline-date
					>{formatDateShort(patch.date)}</time
				>
			</a>
		{/each}
	</div>
</nav>

<style>
	@layer components.features {
		p {
			margin-bottom: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
		}
		.recent-links {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
		.recent-link {
			display: inline-flex;
			min-block-size: 2.75rem;
			align-items: center;
			border: 1px solid var(--border-subtle);
			border-radius: var(--radius-md);
			padding-inline: 0.75rem;
			color: var(--signal);
			font: var(--text-xs) var(--font-mono);
			&:hover {
				border-color: var(--signal);
			}
		}
	}
</style>
