<script lang="ts">
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { plural } from '@deadlog/utils';
	import ShareBlock from './ShareBlock.svelte';
	import type { RelatedChanges } from './relatedChanges';
	import type { ShareWindows } from './shareRows';

	let {
		related,
		heroName,
		windows
	}: { related: RelatedChanges; heroName: string; windows: ShareWindows } = $props();
</script>

<div data-related-items>
	<ShareBlock kind="related" subject={heroName} rows={related.items} {windows}>
		<details class="mt-1 text-sm" data-related-notes>
			<summary
				class="ui-focus-ring text-muted-foreground flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm"
			>
				<ChevronRight aria-hidden="true" class="details-marker size-3.5 shrink-0" />
				{`Their notes · ${related.items.length} ${plural(related.items.length, 'item')}`}
			</summary>
			<div class="space-y-3 pb-2 pl-5.5">
				{#each related.items as item (item.href)}
					<div>
						<h6 class="text-foreground flex items-center gap-2 text-sm font-semibold">
							<img
								src={item.image}
								alt=""
								width="20"
								height="20"
								loading="lazy"
								decoding="async"
								class="size-5 shrink-0 object-contain"
							/>{item.name}
						</h6>
						{#each item.groups as group, groupIndex (groupIndex)}
							<ul
								class="marker:text-muted-foreground mt-1 ml-4 list-disc space-y-1.5 leading-relaxed"
							>
								{#each group.bullets as bullet, index (index)}<li class="pl-1">
										{bullet}
									</li>{/each}
							</ul>
						{/each}
					</div>
				{/each}
			</div>
		</details>
	</ShareBlock>
</div>

<style>
	details[open] :global(.details-marker) {
		transform: rotate(90deg);
	}
	:global(.details-marker) {
		transition: transform 150ms;
	}
	summary::-webkit-details-marker {
		display: none;
	}
</style>
