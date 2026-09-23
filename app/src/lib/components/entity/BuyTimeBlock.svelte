<script lang="ts">
	import { shareSpan, type BuyTime, type ShareWindows } from './shareRows';

	let {
		item,
		time,
		windows,
		level = 5
	}: { item: string; time: BuyTime; windows: ShareWindows; level?: 4 | 5 } = $props();
</script>

<div class="min-w-0" data-share-block="bought-at">
	<svelte:element this={`h${level}`} class="text-foreground text-sm font-semibold"
		>Bought at</svelte:element
	>
	<p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">
		{`Average game time ${item} buyers bought it, ${shareSpan(windows, true)}.`}
	</p>
	<p
		class="text-foreground mt-2 flex min-h-11 items-center font-mono text-sm"
		aria-label={`${time.before} before, ${time.after} after`}
	>
		{`${time.before} → ${time.after}`}
	</p>
</div>
