<script lang="ts">
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { changeCountLabel } from '$lib/components/changelog/entityContext';
	import { formatInterval } from '$lib/utils/impactFormat';
	import { formatShare, type RelatedChanges } from './relatedChanges';

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
	<div class="mt-1">
		{#each related.items as item (item.href)}
			<details>
				<summary
					class="ui-focus-ring flex min-h-11 cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-0.5 rounded-sm"
				>
					<ChevronRight
						aria-hidden="true"
						class="text-muted-foreground/80 details-marker -mr-1 size-3.5 shrink-0"
					/>
					<img
						src={item.image}
						alt=""
						width="24"
						height="24"
						loading="lazy"
						decoding="async"
						class="size-6 shrink-0 object-contain"
					/>
					<span class="text-foreground text-sm">{item.name}</span>
					<span
						class="text-muted-foreground ml-auto flex gap-4 font-mono text-xs max-[359px]:ml-0 max-[359px]:basis-full max-[359px]:pl-[58px]"
					>
						<span>{changeCountLabel(item.changeCount)}</span>
						<span class="min-w-[4ch] text-right">{formatShare(item.share)}</span>
					</span>
				</summary>
				<div class="space-y-2 pb-3 pl-[58px]">
					{#each item.groups as group, groupIndex (groupIndex)}
						<ul
							class="marker:text-primary/60 ml-4 list-disc space-y-1.5 text-sm leading-relaxed"
						>
							{#each group.bullets as bullet, index (index)}<li class="pl-1">
									{bullet}
								</li>{/each}
						</ul>
					{/each}
					<p class="text-sm">
						<a
							href={item.href}
							class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
							>{item.name} in this patch</a
						>
					</p>
				</div>
			</details>
		{/each}
	</div>
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
