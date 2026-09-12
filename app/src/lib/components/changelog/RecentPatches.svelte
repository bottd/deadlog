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
	<p class="text-muted-foreground mb-2 text-xs">
		Most recent {recent.length} of {patches.length} patches
	</p>
	<div class="flex flex-wrap gap-2">
		{#each recent as patch (patch.id)}
			<a
				href={entityPatchHref(patch, entity)}
				class="ui-focus-ring border-subtle text-signal hover:border-signal inline-flex min-h-11 items-center rounded-md border px-3 font-mono text-xs"
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
