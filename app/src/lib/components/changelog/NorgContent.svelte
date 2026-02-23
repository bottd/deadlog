<script lang="ts">
	import { untrack } from 'svelte';
	import type { Component } from 'svelte';
	import { setEntityMaps, type EntityMaps } from './entityContext';

	interface Props {
		content: Component;
		heroMap?: EntityMaps['heroMap'];
		itemMap?: EntityMaps['itemMap'];
		abilityMap?: EntityMaps['abilityMap'];
	}

	let { content: Content, heroMap = {}, itemMap = {}, abilityMap = {} }: Props = $props();

	untrack(() => setEntityMaps({ heroMap, itemMap, abilityMap }));

	function enhanceContent(node: HTMLElement) {
		for (const heading of node.querySelectorAll('h1, h2')) {
			if (!heading.id && heading.textContent) {
				heading.id = heading.textContent
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/^-+|-+$/g, '');
			}
		}
	}
</script>

<section class="norg-content" aria-label="Changelog details" use:enhanceContent>
	<Content />
</section>

<style lang="postcss">
	@reference "../../../app.css";

	.norg-content {
		@apply max-w-none text-[15px] leading-relaxed;

		/* Section headings — editorial treatment */
		:global(h1) {
			@apply text-foreground font-display relative mt-12 mb-6 pt-8 text-xl font-medium tracking-wide first:mt-0 first:pt-0;
		}

		:global(h1::before) {
			content: '';
			@apply from-primary/40 via-border to-border/0 absolute top-0 left-0 h-px w-full bg-gradient-to-r;
		}

		:global(h1:first-child::before) {
			@apply hidden;
		}

		:global(h2) {
			@apply text-primary mt-6 mb-4 text-lg font-semibold tracking-tight;
		}

		/* Entity/ability heading styling */
		:global(header.entity-heading) {
			@apply mt-8;
		}

		/* Separator between entity sections (list → next entity heading) */
		:global(ul:not(.section-preview) + header.entity-heading) {
			@apply border-border/30 mt-8 border-t pt-6;
		}

		:global(header.entity-heading h3) {
			@apply m-0 text-lg;
		}

		:global(header.ability-heading) {
			@apply mt-4;
		}

		:global(header.ability-heading h4) {
			@apply m-0 text-sm;
		}

		/* Indent notes under entity/ability headings */
		:global(header.entity-heading + ul) {
			@apply border-border/40 ml-14 border-l pl-3;
		}

		:global(header.ability-heading + ul) {
			@apply ml-9;
		}

		/* First entity after section preview — minimal gap */
		:global(ul.section-preview + header.entity-heading) {
			@apply mt-2 border-t-0 pt-0;
		}

		/* Paragraphs */
		:global(p) {
			@apply text-foreground/90 my-3 leading-relaxed;
		}

		/* Lists */
		:global(ul) {
			@apply my-3 ml-5 list-none space-y-2.5;
		}

		:global(ol) {
			@apply marker:text-primary/40 my-3 ml-5 list-decimal space-y-2.5;
		}

		:global(li) {
			@apply text-foreground/90 relative leading-relaxed;
		}

		/* Custom bullet markers */
		:global(ul > li::before) {
			content: '';
			@apply bg-primary/40 absolute top-[0.55em] -left-4 size-1.5 rounded-full;
		}

		/* Nested lists */
		:global(li > ul),
		:global(li > ol) {
			@apply my-1.5;
		}

		:global(li > ul > li::before) {
			@apply bg-primary/20;
		}

		/* Links */
		:global(a) {
			@apply text-primary font-medium underline-offset-2 transition-all duration-200 hover:underline hover:opacity-80;
		}

		/* Emphasis */
		:global(strong) {
			@apply text-foreground font-semibold;
		}

		:global(em) {
			@apply italic;
		}

		/* Code */
		:global(code) {
			@apply bg-primary/5 text-primary border-primary/10 rounded border px-1.5 py-0.5 font-mono text-xs;
		}

		:global(pre) {
			@apply border-border bg-card/50 my-4 overflow-x-auto rounded-lg border p-4;
		}

		:global(pre code) {
			@apply border-0 bg-transparent p-0;
		}

		/* Blockquotes */
		:global(blockquote) {
			@apply border-primary/30 text-foreground/70 my-4 border-l-2 pl-4 italic;
		}

		/* Horizontal rules */
		:global(hr) {
			@apply border-border my-8;
		}

		/* Tables */
		:global(table) {
			@apply border-border my-4 w-full border-collapse border;
		}

		:global(th),
		:global(td) {
			@apply border-border border px-3 py-2 text-left;
		}

		:global(th) {
			@apply bg-muted/50 font-semibold;
		}
	}
</style>
