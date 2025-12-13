<script lang="ts">
	import { formatDate } from '@deadlog/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';

	interface Patch {
		id: string;
		date: Date;
	}

	interface Props {
		patches: Patch[];
		class?: string;
	}

	let { patches, class: className = '' }: Props = $props();

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
</script>

{#if sortedPatches.length > 1}
	<div class="flex flex-col gap-2 {className}">
		<div class="flex items-center gap-2">
			{#each sortedPatches as patch, i (patch.id)}
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							{#snippet child({ props })}
								<a
									href="/change/{patch.id}"
									{...props}
									class="bg-primary hover:bg-primary/80 size-2.5 rounded-full transition-all hover:scale-150 focus:scale-150 focus:outline-none"
									aria-label="View patch from {formatDate(patch.date)}"
								></a>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p class="text-sm">{formatDate(patch.date)}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
				{#if i < sortedPatches.length - 1}
					<div class="bg-border h-px max-w-6 min-w-2 flex-1"></div>
				{/if}
			{/each}
		</div>
		<div class="text-muted-foreground flex justify-between text-xs">
			{#if firstDate && lastDate}
				<span>{formatMonth(firstDate)}</span>
				<span>{formatMonth(lastDate)}</span>
			{/if}
		</div>
	</div>
{/if}
