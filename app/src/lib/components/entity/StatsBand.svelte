<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="stats-band mt-5 min-w-0" data-stats-band>
	<div class="band-grid grid gap-x-8 gap-y-5">
		{@render children()}
	</div>
</div>

<style>
	.stats-band {
		container-type: inline-size;
	}
	.band-grid {
		grid-template-columns: minmax(0, 1fr);
	}
	@container (min-width: 36rem) {
		.band-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
