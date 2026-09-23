<script lang="ts">
	import { plural, type EntityImpact, type PatchStats } from '@deadlog/utils';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { impactDetails, impactSummary, type ImpactKind } from '$lib/utils/impactFormat';

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

	const summary = $derived(impactSummary(impact, kind, stats, entryYear));
	const rows = $derived(stats ? impactDetails(impact, stats, kind) : []);
	const siblings = $derived(stats?.siblings.length ?? 0);
	const tone = (tier: string) =>
		tier === 'all' ? 'text-muted-foreground' : 'text-muted-foreground/80';
</script>

{#if summary}
	<details class="impact mt-3 font-mono text-xs leading-relaxed" data-patch-impact>
		<summary
			class="ui-focus-ring text-muted-foreground/80 flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm"
		>
			<ChevronRight aria-hidden="true" class="details-marker size-3.5 shrink-0" />
			<span data-impact-caption
				>Match results{#if summary.window}<span class="whitespace-nowrap"
						>{` · ${summary.window}`}</span
					>{/if}</span
			>
		</summary>
		<div class="space-y-2 pb-2 pl-5.5">
			<p class="sr-only">{summary.label}</p>
			<div aria-hidden="true" class="impact-grid min-w-0">
				<div class="grid w-fit grid-cols-[auto_auto_auto] gap-x-4" data-impact-grid>
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
							<span class="{tone(row.tier)} whitespace-nowrap" data-impact-cell
								>{cell}</span
							>
						{/each}
					{/each}
				</div>
				{#if summary.notes.length}
					<p class="text-muted-foreground/80" data-impact-notes>
						{summary.notes.join(' · ')}
					</p>
				{/if}
			</div>
			{#if rows.length}
				<table class="w-full max-w-lg table-fixed">
					<colgroup><col class="w-[40%]" /><col /><col /></colgroup>
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
			{/if}
			<p class="text-muted-foreground max-w-[60ch] font-sans">
				{`Other changes land in the same days${siblings > 0 ? `, and ${siblings} other ${plural(siblings, 'patch', 'patches')} released the same day ${plural(siblings, 'shares', 'share')} these windows` : ''}, so a difference is not the effect of any one line.`}
				<a
					href="#method"
					class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
					>How this is measured</a
				>
			</p>
		</div>
	</details>
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
