<script lang="ts">
	import { formatInterval } from '$lib/utils/impactFormat';
	import { formatShare } from '../entity/relatedChanges';
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
		<ul class="mt-1 flex list-none flex-wrap gap-x-4" aria-label="Related item changes">
			{#each related.items as item (item.href)}
				<li>
					<a
						href={item.href}
						class="ui-focus-ring hover:bg-signal/5 -mx-1 flex min-h-11 items-center gap-2 rounded-sm px-1"
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
						<span class="text-signal text-sm">{item.name}</span>
						<span class="text-muted-foreground font-mono text-xs"
							>{formatShare(item.share)}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
