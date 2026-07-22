<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { entityPatchHref, type EntityFilterContext } from './entityContext';
	import { formatDate } from '@deadlog/utils';

	interface Patch {
		id: string;
		date: Date;
		changeCount: number | null;
	}

	interface TimelineSlice {
		patches: Patch[];
		hiddenCount: number;
	}

	interface Props {
		patches: Patch[];
		entity: EntityFilterContext;
		class?: string;
		accent?: string;
	}

	let {
		patches,
		entity,
		class: className = '',
		accent = 'var(--signal)'
	}: Props = $props();

	const sortedPatches = $derived(
		[...patches].sort((a, b) => a.date.getTime() - b.date.getTime())
	);
	const firstDate = $derived(sortedPatches[0]?.date);
	const lastDate = $derived(sortedPatches.at(-1)?.date);
	const mobileSlice = $derived(aggregatePatches(sortedPatches, 6));
	const desktopSlice = $derived(aggregatePatches(sortedPatches, 12));
	const trackColor = $derived(`color-mix(in oklab, ${accent} 28%, transparent)`);

	function aggregatePatches(allPatches: Patch[], limit: number): TimelineSlice {
		if (allPatches.length <= limit) return { patches: allPatches, hiddenCount: 0 };
		return {
			patches: [allPatches[0], ...allPatches.slice(-(limit - 1))],
			hiddenCount: allPatches.length - limit
		};
	}

	function formatMonth(date: Date): string {
		const match = formatDate(date).match(/^(\S+)\s+.+,\s+(\d{4})$/);
		return match ? `${match[1].slice(0, 3)} ${match[2]}` : formatDate(date);
	}

	function countLabel(count: number | null): string {
		if (count === null) return 'change count unavailable';
		return `${count} change${count === 1 ? '' : 's'}`;
	}
</script>

{#snippet timelineRow(slice: TimelineSlice)}
	<div class="relative flex min-h-6 items-center justify-between">
		<div
			class="absolute inset-x-3 top-1/2 h-px -translate-y-1/2"
			style:background-color={trackColor}
			aria-hidden="true"
		></div>
		{#each slice.patches as patch, index (patch.id)}
			{#if slice.hiddenCount > 0 && index === 1}
				<span
					class="bg-card text-muted-foreground relative z-10 flex min-h-6 min-w-6 items-center justify-center px-1.5 font-mono text-[10px] font-semibold"
					aria-label="{slice.hiddenCount} intermediate patch{slice.hiddenCount === 1
						? ''
						: 'es'} not shown"
					title="{slice.hiddenCount} intermediate patch{slice.hiddenCount === 1
						? ''
						: 'es'} not shown"
				>
					+{slice.hiddenCount}
				</span>
			{/if}
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<a
							{...props}
							href={entityPatchHref(patch.id, entity)}
							class="focus-visible:ring-ring relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:outline-none"
							aria-label="View {entity.name} in the {formatDate(
								patch.date
							)} patch, {countLabel(patch.changeCount)}"
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
					<p class="text-muted-foreground">{countLabel(patch.changeCount)}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</div>
{/snippet}

{#if sortedPatches.length > 1}
	<Tooltip.Provider>
		<div
			class="flex w-full flex-col gap-2 {className}"
			role="group"
			aria-label="Patch timeline for {entity.name}"
		>
			<div class="sm:hidden">{@render timelineRow(mobileSlice)}</div>
			<div class="hidden sm:block">{@render timelineRow(desktopSlice)}</div>
			<div
				class="text-muted-foreground flex justify-between font-mono text-[10px] tracking-wide"
			>
				{#if firstDate && lastDate}
					<span>{formatMonth(firstDate)}</span>
					<span>{formatMonth(lastDate)}</span>
				{/if}
			</div>
		</div>
	</Tooltip.Provider>
{/if}
