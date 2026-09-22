<script lang="ts">
	import type { EntityImpact } from '@deadlog/utils';
	import type { ImpactKind } from '$lib/utils/impactFormat';
	import PatchImpact from '../entity/PatchImpact.svelte';
	import { getPatchStats } from './patchStatsContext';

	let { impact, kind }: { impact: EntityImpact; kind: ImpactKind } = $props();
	const context = getPatchStats();
</script>

<div class="mog-enrichment min-w-0">
	<PatchImpact {impact} {kind} stats={context.stats} entryYear={context.entryYear} />
</div>
