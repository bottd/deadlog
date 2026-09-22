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
		hasDetails = false,
		hasPrevious = false,
		hasRelated = false,
		contextVersions = []
	}: {
		results: MogMatchResults | null;
		hasDetails?: boolean;
		hasPrevious?: boolean;
		hasRelated?: boolean;
		contextVersions?: number[];
	} = $props();
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
		{#if results.kinds.includes('hero')}
			<p>
				For heroes, win is how often the hero won, and pick is the share of matches the
				hero appeared in. These are hero-wide results, including all their abilities.
			</p>
		{/if}
		{#if results.kinds.includes('item')}
			<p>
				For items, bought is the share of players who bought the item, and buyer win is
				how often those players won, which depends on which heroes buy it. Samples count
				player-match observations.
			</p>
		{/if}
		<p>
			The figures compare complete UTC days before and after this patch, excluding its
			release day, between neighbouring patches and up to {WINDOW_CAP_DAYS} days each side.
			A side with fewer than {MIN_WINDOW_MATCHES.toLocaleString('en-US')} matches (for heroes)
			or player-match observations (for items) shows a dash. Missing cohort days mean data is
			unavailable. Open after-windows are still collecting results.
		</p>
		<p>
			Patches released on the same day share their windows, and other changes land in the
			same days, so a difference is not the effect of any one line. High rank counts
			matches whose average badge across both teams is {HIGH_RANK_LABEL} or higher (badge {HIGH_RANK_MIN_BADGE}).
		</p>
		{#if results.stats}
			<p>
				{`Normal-mode ranked and unranked matches. Method ${results.stats.methodVersion}, last collected ${formatDate(new Date(results.stats.collectedAt))}.`}
			</p>
		{:else}
			<p>These legacy results were recorded without a date-window breakdown.</p>
		{/if}
	{/if}
	{#if hasRelated}
		<p>
			Also changed lists up to three items changed in this patch, ranked by the share of
			the hero's player-matches in which each was bought before the patch, all ranks. It
			needs {RELATED_MIN_APPEARANCES.toLocaleString('en-US')} hero appearances and {RELATED_MIN_BUYERS}
			buyers. These are reading links, not build recommendations.
		</p>
	{/if}
	{#if hasDetails}
		<p>
			Current details describe {contextVersions.length
				? `game client ${contextVersions.join(', ')}`
				: 'the currently recorded game assets'}, not the game as it was when this patch
			shipped. Base values exclude upgrades and scaling.
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
