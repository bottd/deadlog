<script lang="ts">
	import { formatDate } from '@deadlog/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Patch {
		id: string;
		date: Date;
	}

	interface Props {
		patches: Patch[];
		class?: string;
		timelineColor?: 'marksman' | 'mystic' | 'brawler' | null;
	}

	let { patches, class: className = '', timelineColor = null }: Props = $props();

	// Sort patches by date (oldest first for timeline display)
	const sortedPatches = $derived(
		[...patches].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
	);

	const firstDate = $derived(sortedPatches[0]?.date);
	const lastDate = $derived(sortedPatches[sortedPatches.length - 1]?.date);

	const formatMonth = (date: Date) => {
		return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
			new Date(date)
		);
	};

	// Type-specific styles using Svelte $derived
	const colorClass = $derived(() => {
		if (!timelineColor) return 'bg-primary';
		const colors: Record<string, string> = {
			marksman: 'bg-amber-500',
			mystic: 'bg-purple-500',
			brawler: 'bg-red-500'
		};
		return colors[timelineColor] || 'bg-primary';
	});

	const colorHoverClass = $derived(() => {
		if (!timelineColor) return 'group-hover:bg-primary/80';
		const colors: Record<string, string> = {
			marksman: 'group-hover:bg-amber-500/80',
			mystic: 'group-hover:bg-purple-500/80',
			brawler: 'group-hover:bg-red-500/80'
		};
		return colors[timelineColor] || 'group-hover:bg-primary/80';
	});

	const barColor = $derived(() => {
		if (!timelineColor) return 'bg-primary/20';
		const colors: Record<string, string> = {
			marksman: 'bg-amber-500/20',
			mystic: 'bg-purple-500/20',
			brawler: 'bg-red-500/20'
		};
		return colors[timelineColor] || 'bg-primary/20';
	});
</script>

{#if sortedPatches.length > 1}
	<div
		class="flex flex-col gap-3 {className}"
		in:scale={{ start: 0.95, duration: 400, easing: quintOut }}
	>
		<div class="group flex items-center gap-1.5">
			{#each sortedPatches as patch, i (patch.id)}
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<a
								href="/change/{patch.id}"
								class="relative flex items-center justify-center"
								aria-label="View patch from {formatDate(patch.date)}"
							>
								<div
									class="{colorClass} {colorHoverClass} focus-visible:ring-ring relative z-10 size-3 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
								></div>
							</a>
						</Tooltip.Trigger>
						<Tooltip.Content side="top" class="text-xs">
							<p class="text-sm font-medium">{formatDate(patch.date)}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
				{#if i < sortedPatches.length - 1}
					<div
						class="{barColor} h-0.5 flex-1 rounded-full transition-all group-hover:h-1"
					></div>
				{/if}
			{/each}
		</div>
		<div
			class="text-muted-foreground flex justify-between text-xs font-medium tracking-wide"
		>
			{#if firstDate && lastDate}
				<span class="flex items-center gap-1" in:fly={{ x: -5, duration: 400 }}>
					<span class="bg-border inline-block size-1 rounded-full"></span>
					{formatMonth(firstDate)}
				</span>
				<span class="flex items-center gap-1" in:fly={{ x: 5, duration: 400 }}>
					{formatMonth(lastDate)}
					<span class="bg-border inline-block size-1 rounded-full"></span>
				</span>
			{/if}
		</div>
	</div>
{/if}
