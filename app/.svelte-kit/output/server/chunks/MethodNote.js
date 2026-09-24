import { O as escape_html, a as derived } from './server2.js';
import { a as formatDate } from './src2.js';
import { o as RELATED_MIN_APPEARANCES } from './readingContext.js';
//#region src/lib/components/changelog/MethodNote.svelte
function MethodNote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { stats, has, shipped = 'this patch', contextVersions = [] } = $$props;
		const appearances = RELATED_MIN_APPEARANCES.toLocaleString('en-US');
		const matchData = derived(
			() => !!(has.related || has.maxedFirst || has.boughtBy || has.buyTime)
		);
		if (derived(() => matchData() || !!has.details || !!has.previous)()) {
			$$renderer.push(
				`<!--[0--><section id="method" aria-labelledby="method-heading" class="text-muted-foreground border-subtle mt-8 max-w-[72ch] scroll-mt-44 space-y-2 border-t pt-4 text-sm leading-relaxed"><h2 id="method-heading" class="text-foreground text-base font-semibold">${escape_html(matchData() ? 'How these shares are measured' : 'Reading context and sources')}</h2> `
			);
			if (matchData())
				$$renderer.push(`<!--[0--><p>These are observed shares, before and after the patch. Other changes land in the
				same days, so a difference is not the effect of any one line.</p> <p>${escape_html(`Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to 14 days; "so far" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches.${stats ? ` Last collected ${formatDate(new Date(stats.collectedAt))}.` : ''}`)}</p>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.maxedFirst)
				$$renderer.push(`<!--[0--><p>Maxed first is the share of a hero's matches in which each ability was the first
				to reach its third upgrade. Each side needs ${escape_html(appearances)} matches.</p>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.related)
				$$renderer.push(`<!--[0--><p>Also changed lists up to three items changed in the same patch, ranked by the
				share of the hero's player-matches in which each was bought before the patch. It
				needs
				${escape_html(appearances)} hero appearances and ${escape_html(100)} buyers. These are reading links,
				not build recommendations.</p>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.boughtBy)
				$$renderer.push(`<!--[0--><p>Bought most by lists up to three heroes whose players bought the item most often
				before the patch, as a share of each hero's player-matches. Each hero needs
				${escape_html(appearances)} appearances and ${escape_html(100)} buyers.</p>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.buyTime)
				$$renderer.push(
					`<!--[0--><p>Bought at is the average game time at which the item's buyers bought it.</p>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.details)
				$$renderer.push(
					`<!--[0--><p>${escape_html(`Current details describe ${contextVersions.length ? `game client ${contextVersions.join(', ')}` : 'the currently recorded game assets'}, not the game as it was when ${shipped} shipped. Base values exclude upgrades and scaling.`)}</p>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (has.previous)
				$$renderer.push(`<!--[0--><p>Previous recorded change links connect verified, explicit changes to the same
				property. They cover part of the archive, not a complete history of game values.</p>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--> <p>${escape_html(matchData() ? 'Match data' : has.details ? 'Current details' : 'Entity data')} from the <a href="https://deadlock-api.com" rel="noopener" class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline">Deadlock API</a>.</p></section>`
			);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { MethodNote as t };
