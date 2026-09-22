<script lang="ts">
	import { plural, type EntityImpact, type PatchStats } from '@deadlog/utils';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import {
		impactDetails,
		impactSummary,
		type ImpactKind,
		type ImpactSummary
	} from '$lib/utils/impactFormat';

	let {
		impact,
		kind,
		stats = null,
		entryYear
	}: {
		impact: EntityImpact;
		kind: ImpactKind;
		stats?: PatchStats | null;
		entryYear: number;
	} = $props();

	const summary = $derived(impactSummary(impact, kind));
	const rows = $derived(stats ? impactDetails(impact, stats, kind, entryYear) : []);
	const siblings = $derived(stats?.siblings.length ?? 0);
	const tone = (tier: string) =>
		tier === 'all' ? 'text-muted-foreground' : 'text-muted-foreground/80';
</script>

{#snippet grid(summary: ImpactSummary)}
	<span class="sr-only">{summary.label}</span>
	<span aria-hidden="true" class="impact-grid block min-w-0">
		<span class="grid w-fit grid-cols-[auto_auto_auto] gap-x-4" data-impact-grid>
			<span></span>
			{#each summary.columns as column (column)}
				<span class="text-muted-foreground/80 whitespace-nowrap">{column}</span>
			{/each}
			{#each summary.rows as row (row.tier)}
				<span class={tone(row.tier)} data-impact-row={row.tier}
					><span class="tier-long">{row.label}</span><span class="tier-short"
						>{row.label.split(' ')[0]}</span
					></span
				>
				{#each row.cells as cell, index (index)}
					<span class="{tone(row.tier)} whitespace-nowrap" data-impact-cell>{cell}</span>
				{/each}
			{/each}
		</span>
		{#if summary.notes.length}
			<span class="text-muted-foreground/80 block" data-impact-notes
				>{summary.notes.join(' · ')}</span
			>
		{/if}
	</span>
{/snippet}

{#if summary}
	<div class="impact mt-3 font-mono text-xs leading-relaxed" data-patch-impact>
		{#if rows.length}
			<details>
				<summary
					class="ui-focus-ring flex min-h-11 cursor-pointer list-none items-start gap-2 rounded-sm py-2"
				>
					<ChevronRight
						aria-hidden="true"
						class="text-muted-foreground/80 details-marker mt-0.5 size-3.5 shrink-0"
					/>
					<span class="min-w-0">{@render grid(summary)}</span>
				</summary>
				<div class="space-y-2 pb-2 pl-5.5">
					<table class="w-full max-w-lg table-fixed">
						<thead>
							<tr class="text-muted-foreground/80">
								<td></td>
								<th scope="col" class="py-0.5 pr-2 text-left font-normal">BEFORE</th>
								<th scope="col" class="py-0.5 text-left font-normal">AFTER</th>
							</tr>
						</thead>
						<tbody>
							{#each rows as row (row.label)}
								<tr>
									<th
										scope="row"
										class="text-muted-foreground/80 py-0.5 pr-2 text-left align-top font-normal"
										><span class="sr-only">{row.spoken}</span><span aria-hidden="true"
											>{row.label}</span
										></th
									>
									<td class="text-muted-foreground py-0.5 pr-2 align-top wrap-anywhere"
										>{row.before}</td
									>
									<td class="text-muted-foreground py-0.5 align-top wrap-anywhere"
										>{row.after}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
					{#if siblings > 0}
						<p class="text-muted-foreground font-sans text-xs">
							{`Shares its windows with ${siblings} other ${plural(siblings, 'patch', 'patches')} released the same day.`}
						</p>
					{/if}
					<p class="font-sans">
						<a
							href="#method"
							class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
							>How this is measured</a
						>
					</p>
				</div>
			</details>
		{:else}
			<p>{@render grid(summary)}</p>
		{/if}
	</div>
{/if}

<style>
	.impact {
		container-type: inline-size;
	}
	.tier-short {
		display: none;
	}
	@container (max-width: 300px) {
		.impact-grid {
			font-size: 11px;
		}
		.tier-long {
			display: none;
		}
		.tier-short {
			display: inline;
		}
		:global([data-impact-cell]) {
			word-spacing: -1ch;
		}
	}
	details[open] :global(.details-marker) {
		transform: rotate(90deg);
	}
	:global(.details-marker) {
		transition: transform 150ms;
	}
	summary::-webkit-details-marker {
		display: none;
	}
</style>
