<script lang="ts">
	import { formatDate } from '@deadlog/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Patch {
		id: string;
		date: Date;
	}

	interface Props {
		patches: Patch[];
		class?: string;
		/** CSS color for the timeline (e.g. a `var(--type-*)`/`var(--item-*)` token). */
		accent?: string;
	}

	let { patches, class: className = '', accent = 'var(--primary)' }: Props = $props();

	// Cap the dots so the strip stays within its container and keeps tappable
	// (24px) targets even for entities with a long history; older patches roll
	// into a "+N" indicator rather than overflowing the screen.
	const MAX_DOTS = 10;

	const sortedPatches = $derived(
		[...patches].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
	);
	const hiddenCount = $derived(Math.max(0, sortedPatches.length - MAX_DOTS));
	const shownPatches = $derived(
		hiddenCount > 0 ? sortedPatches.slice(-MAX_DOTS) : sortedPatches
	);

	const firstShownDate = $derived(shownPatches[0]?.date);
	const lastDate = $derived(shownPatches[shownPatches.length - 1]?.date);

	const formatMonth = (date: Date) =>
		new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
			new Date(date)
		);

	const trackAccent = $derived(`color-mix(in oklab, ${accent} 22%, transparent)`);
</script>

{#if sortedPatches.length > 1}
	<div
		class="flex w-full flex-col gap-2 {className}"
		in:scale={{ start: 0.97, duration: 350, easing: quintOut }}
	>
		<div class="flex items-center gap-2">
			{#if hiddenCount > 0}
				<span
					class="text-muted-foreground shrink-0 font-mono text-[10px] font-semibold"
					title="{hiddenCount} earlier patch{hiddenCount === 1 ? '' : 'es'} not shown"
				>
					+{hiddenCount}
				</span>
			{/if}
			<div class="relative flex flex-1 items-center justify-between">
				<div
					class="absolute inset-x-3 top-1/2 h-px -translate-y-1/2"
					style:background-color={trackAccent}
					aria-hidden="true"
				></div>
				{#each shownPatches as patch (patch.id)}
					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<a
									href="/change/{patch.id}"
									class="focus-visible:ring-ring relative flex size-6 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2"
									aria-label="View patch from {formatDate(patch.date)}"
								>
									<span class="size-2.5 rounded-full" style:background-color={accent}
									></span>
								</a>
							</Tooltip.Trigger>
							<Tooltip.Content side="top" class="text-xs">
								<p class="text-sm font-medium">{formatDate(patch.date)}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				{/each}
			</div>
		</div>
		<div
			class="text-muted-foreground flex justify-between text-xs font-medium tracking-wide"
		>
			{#if firstShownDate && lastDate}
				<span class="flex items-center gap-1">
					<span class="bg-border inline-block size-1 rounded-full"></span>
					{formatMonth(firstShownDate)}
				</span>
				<span class="flex items-center gap-1">
					{formatMonth(lastDate)}
					<span class="bg-border inline-block size-1 rounded-full"></span>
				</span>
			{/if}
		</div>
	</div>
{/if}
