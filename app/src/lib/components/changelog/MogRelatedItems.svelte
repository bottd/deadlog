<script lang="ts">
	import { formatInterval } from '$lib/utils/impactFormat';
	import RelatedShareList from '../entity/RelatedShareList.svelte';
	import { getEntityIcons, resolveEntity } from './entityContext';
	import { getReadingContext } from './readingContext';
	import { getPatchStats } from './patchStatsContext';
	let { name }: { name: string } = $props();
	const icons = getEntityIcons();
	const reading = getReadingContext();
	const patch = getPatchStats();
	const hero = $derived(resolveEntity(icons, 'hero', name));
	const related = $derived(hero ? reading.related[String(hero.id)] : undefined);
</script>

{#if related}
	<div class="mog-enrichment mt-4 min-w-0" data-related-reading>
		<h4 class="text-foreground text-sm font-semibold">Also changed in this patch</h4>
		<p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">
			{`Share of ${hero?.alt ?? name} players who bought each, ${formatInterval(related.before, patch.entryYear)}, before this patch.`}
		</p>
		<RelatedShareList items={related.items} />
	</div>
{/if}
