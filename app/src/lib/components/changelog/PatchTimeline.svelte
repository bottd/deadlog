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
	<div flex="~" relative items="start" justify="between">
		<div
			absolute
			h="px"
			class="inset-x-3 top-3 -translate-y-1/2"
			style:background-color={trackColor}
			aria-hidden="true"
		></div>
		{#each visiblePatches as patch (patch.id)}
			<div relative z="10" flex="~ col" items="center" gap="1" class="min-w-0">
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								flex="~"
								{...props}
								href={entityPatchHref(patch, entity)}
								bg="card"
								shrink="0"
								items="center"
								justify="center"
								rounded="full"
								class="focus-visible:ring-ring size-6 transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:outline-none"
								aria-label="View {entity.name} in the {formatDate(
									patch.date
								)} patch, {changeCountLabel(patch.changeCount)}"
							>
								<span
									rounded="full"
									class="size-2.5 border"
									style:background-color={accent}
									style:border-color="color-mix(in oklab, {accent} 65%, var(--card))"
								></span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="top" class="text-xs">
						<p text="sm" font="medium">{formatDate(patch.date)}</p>
						<p text="muted-foreground">{changeCountLabel(patch.changeCount)}</p>
					</Tooltip.Content>
				</Tooltip.Root>
				<time
					datetime={patch.date.toISOString()}
					text="muted-foreground"
					font="mono"
					class="text-[9px] tracking-tight whitespace-nowrap"
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
		<div w="full" role="group" aria-label="Patch timeline for {entity.name}">
			<div class="md:hidden">{@render timelineRow(mobileSlice)}</div>
			<div class="hidden md:block">{@render timelineRow(desktopSlice)}</div>
		</div>
	</Tooltip.Provider>
{/if}
