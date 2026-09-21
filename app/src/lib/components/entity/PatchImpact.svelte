<script lang="ts">
	import type { EntityImpact } from '@deadlog/utils';
	import { impactLines } from '$lib/utils/impactFormat';

	let { impact }: { impact: EntityImpact } = $props();

	const lines = $derived(impactLines(impact));
</script>

{#if lines.length}
	<div class="mt-4 space-y-1 font-mono text-xs leading-relaxed" data-patch-impact>
		{#each lines as line (line.tier)}
			<p
				class={line.tier === 'all' ? 'text-muted-foreground' : 'text-muted-foreground/80'}
			>
				<span class="sr-only">{line.label}</span>
				<span aria-hidden="true">{line.text}</span>
			</p>
		{/each}
	</div>
{/if}
