<script lang="ts">
	import BuyTimeBlock from '../entity/BuyTimeBlock.svelte';
	import ShareBlock from '../entity/ShareBlock.svelte';
	import StatsBand from '../entity/StatsBand.svelte';
	import { getEntityIcons, resolveEntity } from './entityContext';
	import { getReadingContext } from './readingContext';
	import { getPatchStats } from './patchStatsContext';

	let { kind, name }: { kind: 'hero' | 'item'; name: string } = $props();
	const icons = getEntityIcons();
	const reading = getReadingContext();
	const patch = getPatchStats();
	const entity = $derived(resolveEntity(icons, kind, name));
	const key = $derived(entity ? String(entity.id) : '');
	const subject = $derived(entity?.alt ?? name);
	const maxedFirst = $derived(kind === 'hero' ? reading.maxedFirst[key] : undefined);
	const related = $derived(kind === 'hero' ? reading.related[key] : undefined);
	const boughtBy = $derived(kind === 'item' ? reading.boughtBy[key] : undefined);
	const buyTime = $derived(kind === 'item' ? reading.buyTime[key] : undefined);
	const windows = $derived(
		patch.stats
			? { stats: patch.stats, entryYear: patch.entryYear, open: patch.open }
			: null
	);
</script>

{#if entity && windows && (maxedFirst || related || boughtBy || buyTime)}
	<div class="mog-enrichment min-w-0" data-stats-reading={kind}>
		<StatsBand>
			{#if maxedFirst}
				<ShareBlock kind="maxed-first" level={4} {subject} rows={maxedFirst} {windows} />
			{/if}
			{#if related}
				<ShareBlock kind="related" level={4} {subject} rows={related.items} {windows} />
			{/if}
			{#if boughtBy}
				<ShareBlock kind="bought-by" level={4} {subject} rows={boughtBy} {windows} />
			{/if}
			{#if buyTime}
				<BuyTimeBlock item={subject} time={buyTime} {windows} level={4} />
			{/if}
		</StatsBand>
	</div>
{/if}
