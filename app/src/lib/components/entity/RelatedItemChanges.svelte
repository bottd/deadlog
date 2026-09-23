<script lang="ts">
	import { formatInterval } from '$lib/utils/impactFormat';
	import RelatedShareList from './RelatedShareList.svelte';
	import type { RelatedChanges } from './relatedChanges';

	let {
		related,
		heroName,
		entryYear
	}: { related: RelatedChanges; heroName: string; entryYear: number } = $props();

	const range = $derived(formatInterval(related.before, entryYear));
</script>

<div data-related-items>
	<h5 class="text-foreground text-sm font-semibold">Also changed in this patch</h5>
	<p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">
		{`Share of ${heroName} players who bought each, ${range}, before this patch.`}
	</p>
	<RelatedShareList items={related.items}>
		{#snippet notes(item)}
			{#each item.groups as group, groupIndex (groupIndex)}
				<ul
					class="marker:text-primary/60 ml-4 list-disc space-y-1.5 text-sm leading-relaxed"
				>
					{#each group.bullets as bullet, index (index)}<li class="pl-1">
							{bullet}
						</li>{/each}
				</ul>
			{/each}
		{/snippet}
	</RelatedShareList>
</div>
