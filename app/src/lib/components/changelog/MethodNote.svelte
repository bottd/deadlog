<script lang="ts">
	import { formatDate } from '@deadlog/utils';
	import {
		HIGH_RANK_LABEL,
		HIGH_RANK_MIN_BADGE,
		MIN_WINDOW_MATCHES,
		WINDOW_CAP_DAYS,
		RELATED_MIN_APPEARANCES,
		RELATED_MIN_BUYERS
	} from '@deadlog/stats';
	import { IMPACT_HEADING } from '$lib/utils/impactFormat';
	import type { MogMatchResults } from './patchStatsContext';

	let {
		results,
		shipped = 'this patch',
		hasDetails = false,
		hasPrevious = false,
		hasRelated = false,
		contextVersions = []
	}: {
		results: MogMatchResults | null;
		shipped?: string;
		hasDetails?: boolean;
		hasPrevious?: boolean;
		hasRelated?: boolean;
		contextVersions?: number[];
	} = $props();

	const floor = MIN_WINDOW_MATCHES.toLocaleString('en-US');
	const terms = $derived(
		results
			? [
					...(results.kinds.includes('hero')
						? [
								['WIN', 'How often the hero won, across all their abilities.'],
								['PICK', 'The share of matches the hero appeared in.']
							]
						: []),
					...(results.kinds.includes('item')
						? [
								['BOUGHT', 'The share of players who bought the item.'],
								[
									'BUYER WIN',
									'How often those players won, which depends on which heroes buy it.'
								]
							]
						: []),
					[
						'HIGH RANK',
						`Matches whose average badge across both teams is ${HIGH_RANK_LABEL} or higher (badge ${HIGH_RANK_MIN_BADGE}).`
					],
					[
						'—',
						results.kinds.length > 1
							? `Fewer than ${floor} matches (heroes) or player-matches (items) on that side, or days missing from the data.`
							: `Fewer than ${floor} ${results.kinds[0] === 'item' ? 'player-matches' : 'matches'} on that side, or days missing from the data.`
					]
				]
			: []
	);
</script>

<section
	id="method"
	aria-labelledby="method-heading"
	class="text-muted-foreground border-subtle mt-8 max-w-[72ch] scroll-mt-44 space-y-2 border-t pt-4 text-sm leading-relaxed"
>
	<h2 id="method-heading" class="text-foreground text-base font-semibold">
		{results ? IMPACT_HEADING : 'Reading context and sources'}
	</h2>
	{#if results}
		<p>
			These are observed rates. Other changes land in the same days, and patches released
			on the same day share their windows, so a difference is not the effect of any one
			line.
		</p>
		<dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
			{#each terms as [term, meaning] (term)}
				<dt
					class="text-muted-foreground/80 font-mono text-xs leading-relaxed whitespace-nowrap"
				>
					{#if term === '—'}<span aria-hidden="true">—</span><span class="sr-only"
							>Dash</span
						>{:else}{term}{/if}
				</dt>
				<dd>{meaning}</dd>
			{/each}
		</dl>
		<p>
			{`Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to ${WINDOW_CAP_DAYS} days. An open after-window is still collecting results.`}
		</p>
		{#if results.stats}
			<p>
				{`Normal-mode ranked and unranked matches. Method ${results.stats.methodVersion}, last collected ${formatDate(new Date(results.stats.collectedAt))}.`}
			</p>
		{/if}
	{/if}
	{#if hasRelated}
		<p>
			Also changed lists up to three items changed in the same patch, ranked by the share
			of the hero's player-matches in which each was bought before the patch, all ranks.
			It needs {RELATED_MIN_APPEARANCES.toLocaleString('en-US')} hero appearances and {RELATED_MIN_BUYERS}
			buyers. These are reading links, not build recommendations.
		</p>
	{/if}
	{#if hasDetails}
		<p>
			{`Current details describe ${contextVersions.length ? `game client ${contextVersions.join(', ')}` : 'the currently recorded game assets'}, not the game as it was when ${shipped} shipped. Base values exclude upgrades and scaling.`}
		</p>
	{/if}
	{#if hasPrevious}
		<p>
			Previous recorded change links connect verified, explicit changes to the same
			property. They cover part of the archive, not a complete history of game values.
		</p>
	{/if}
	<p>
		{results || hasRelated
			? 'Match data'
			: hasDetails
				? 'Current details'
				: 'Entity data'} from the
		<a
			href="https://deadlock-api.com"
			rel="noopener"
			class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
			>Deadlock API</a
		>.
	</p>
</section>
