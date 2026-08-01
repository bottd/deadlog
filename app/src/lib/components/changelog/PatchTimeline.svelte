<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import {
		changeCountLabel,
		entityPatchHref,
		type EntityFilterContext
	} from './entityContext';
	import { formatDate } from '@deadlog/utils';

	interface Patch {
		id: string;
		slug: string;
		date: Date;
		changeCount: number | null;
	}

	interface Props {
		patches: Patch[];
		entity: EntityFilterContext;
		accent?: string;
	}

	let { patches, entity, accent = 'var(--signal)' }: Props = $props();

	const sortedPatches = $derived(
		[...patches].sort((a, b) => a.date.getTime() - b.date.getTime())
	);
	const mobileSlice = $derived(aggregatePatches(sortedPatches, 6));
	const desktopSlice = $derived(aggregatePatches(sortedPatches, 12));
	const trackColor = $derived(`color-mix(in oklab, ${accent} 28%, transparent)`);

	function aggregatePatches(allPatches: Patch[], limit: number): Patch[] {
		if (allPatches.length <= limit) return allPatches;
		return [allPatches[0], ...allPatches.slice(-(limit - 1))];
	}

	function formatTimelineDate(date: Date): string {
		const match = formatDate(date).match(/^(\S+)\s+(\d+)(?:st|nd|rd|th),\s+(\d{4})$/);
		return match
			? `${match[1].slice(0, 3)} ${match[2]} '${match[3].slice(-2)}`
			: formatDate(date);
	}
</script>

{#snippet timelineRow(visiblePatches: Patch[])}
	<div class="relative flex items-start justify-between">
		<div
			class="absolute inset-x-3 top-3 h-px -translate-y-1/2"
			style:background-color={trackColor}
			aria-hidden="true"
		></div>
		{#each visiblePatches as patch (patch.id)}
			<div class="relative z-10 flex min-w-0 flex-col items-center gap-1">
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								{...props}
								href={entityPatchHref(patch, entity)}
								class="bg-card focus-visible:ring-ring flex size-6 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:outline-none"
								aria-label="View {entity.name} in the {formatDate(
									patch.date
								)} patch, {changeCountLabel(patch.changeCount)}"
							>
								<span
									class="size-2.5 rounded-full border"
									style:background-color={accent}
									style:border-color="color-mix(in oklab, {accent} 65%, var(--card))"
								></span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="top" class="text-xs">
						<p class="text-sm font-medium">{formatDate(patch.date)}</p>
						<p class="text-muted-foreground">{changeCountLabel(patch.changeCount)}</p>
					</Tooltip.Content>
				</Tooltip.Root>
				<time
					datetime={patch.date.toISOString()}
					class="text-muted-foreground font-mono text-[9px] tracking-tight whitespace-nowrap"
					data-timeline-date
				>
					{formatTimelineDate(patch.date)}
				</time>
			</div>
		{/each}
	</div>
{/snippet}

{#if sortedPatches.length > 1}
	<Tooltip.Provider>
		<div class="w-full" role="group" aria-label="Patch timeline for {entity.name}">
			<div class="md:hidden">{@render timelineRow(mobileSlice)}</div>
			<div class="hidden md:block">{@render timelineRow(desktopSlice)}</div>
		</div>
	</Tooltip.Provider>
{/if}
