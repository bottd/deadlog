<script lang="ts" generics="Item extends RelatedShareItem">
	import type { Snippet } from 'svelte';
	import { formatShare, type RelatedShareItem } from './relatedChanges';

	let { items, notes }: { items: Item[]; notes?: Snippet<[Item]> } = $props();
</script>

<ul class="mt-2 list-none space-y-1" aria-label="Related item changes">
	{#each items as item (item.href)}
		<li>
			<a
				href={item.href}
				class="ui-focus-ring group hover:bg-signal/5 -mx-1 flex min-h-11 max-w-md items-center gap-3 rounded-sm px-1"
			>
				<img
					src={item.image}
					alt=""
					width="24"
					height="24"
					loading="lazy"
					decoding="async"
					class="size-6 shrink-0 object-contain"
				/>
				<span
					class="text-signal min-w-0 flex-1 text-sm underline-offset-4 group-hover:underline"
					>{item.name}</span
				>
				<span
					aria-hidden="true"
					class="bg-border/60 h-1.5 w-16 shrink-0 overflow-hidden rounded-full sm:w-32"
					data-share-bar
					><span
						class="bg-muted-foreground block h-full min-w-0.5 rounded-full"
						style:width="{Math.min(item.share, 1) * 100}%"
					></span></span
				>
				<span class="text-foreground w-[4ch] shrink-0 text-right font-mono text-xs"
					>{formatShare(item.share)}</span
				>
			</a>
			{#if notes}
				<div class="pb-2 pl-9">{@render notes(item)}</div>
			{/if}
		</li>
	{/each}
</ul>
