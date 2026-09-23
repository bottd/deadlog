<script lang="ts">
	import { formatDate, type PatchStats } from '@deadlog/utils';
	import {
		WINDOW_CAP_DAYS,
		RELATED_MIN_APPEARANCES,
		RELATED_MIN_BUYERS
	} from '@deadlog/stats';

	type Section =
		'details' | 'previous' | 'related' | 'maxedFirst' | 'boughtBy' | 'buyTime';

	let {
		stats,
		has,
		shipped = 'this patch',
		contextVersions = []
	}: {
		stats: PatchStats | null;
		has: Partial<Record<Section, boolean>>;
		shipped?: string;
		contextVersions?: number[];
	} = $props();

	const appearances = RELATED_MIN_APPEARANCES.toLocaleString('en-US');
	const matchData = $derived(
		!!(has.related || has.maxedFirst || has.boughtBy || has.buyTime)
	);
	const any = $derived(matchData || !!has.details || !!has.previous);
</script>

{#if any}
	<section
		id="method"
		aria-labelledby="method-heading"
		class="text-muted-foreground border-subtle mt-8 max-w-[72ch] scroll-mt-44 space-y-2 border-t pt-4 text-sm leading-relaxed"
	>
		<h2 id="method-heading" class="text-foreground text-base font-semibold">
			{matchData ? 'How these shares are measured' : 'Reading context and sources'}
		</h2>
		{#if matchData}
			<p>
				These are observed shares, before and after the patch. Other changes land in the
				same days, so a difference is not the effect of any one line.
			</p>
			<p>
				{`Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to ${WINDOW_CAP_DAYS} days; "so far" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches.${stats ? ` Last collected ${formatDate(new Date(stats.collectedAt))}.` : ''}`}
			</p>
		{/if}
		{#if has.maxedFirst}
			<p>
				Maxed first is the share of a hero's matches in which each ability was the first
				to reach its third upgrade. Each side needs {appearances} matches.
			</p>
		{/if}
		{#if has.related}
			<p>
				Also changed lists up to three items changed in the same patch, ranked by the
				share of the hero's player-matches in which each was bought before the patch. It
				needs
				{appearances} hero appearances and {RELATED_MIN_BUYERS} buyers. These are reading links,
				not build recommendations.
			</p>
		{/if}
		{#if has.boughtBy}
			<p>
				Bought most by lists up to three heroes whose players bought the item most often
				before the patch, as a share of each hero's player-matches. Each hero needs
				{appearances} appearances and {RELATED_MIN_BUYERS} buyers.
			</p>
		{/if}
		{#if has.buyTime}
			<p>Bought at is the average game time at which the item's buyers bought it.</p>
		{/if}
		{#if has.details}
			<p>
				{`Current details describe ${contextVersions.length ? `game client ${contextVersions.join(', ')}` : 'the currently recorded game assets'}, not the game as it was when ${shipped} shipped. Base values exclude upgrades and scaling.`}
			</p>
		{/if}
		{#if has.previous}
			<p>
				Previous recorded change links connect verified, explicit changes to the same
				property. They cover part of the archive, not a complete history of game values.
			</p>
		{/if}
		<p>
			{matchData ? 'Match data' : has.details ? 'Current details' : 'Entity data'} from the
			<a
				href="https://deadlock-api.com"
				rel="noopener"
				class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
				>Deadlock API</a
			>.
		</p>
	</section>
{/if}
