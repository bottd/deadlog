<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		content: Component;
	}

	let { content: Content }: Props = $props();
</script>

<div class="norg-content">
	<Content />
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.norg-content {
		@apply max-w-none text-sm leading-relaxed;

		/* Headings */
		:global(h1) {
			@apply text-foreground font-display mt-8 mb-6 text-2xl tracking-tight first:mt-0;
		}

		:global(h2) {
			@apply text-primary font-display mt-6 mb-4 text-xl tracking-tight;
		}

		:global(h3) {
			@apply text-foreground/90 font-display mt-4 mb-3 text-lg tracking-tight;
		}

		:global(h4) {
			@apply text-foreground/80 mt-3 mb-2 text-base font-semibold;
		}

		/* Paragraphs */
		:global(p) {
			@apply text-foreground/85 my-3 leading-relaxed;
		}

		/* Lists */
		:global(ul) {
			@apply marker:text-primary/40 my-3 ml-5 list-disc space-y-1.5;
		}

		:global(ol) {
			@apply marker:text-primary/40 my-3 ml-5 list-decimal space-y-1.5;
		}

		:global(li) {
			@apply text-foreground/85 leading-relaxed;
		}

		/* Nested lists */
		:global(li > ul),
		:global(li > ol) {
			@apply my-1.5;
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

		/* Scaling patterns - highlight numbers */
		:global(.scale-pattern) {
			@apply text-primary font-mono;
		}
	}
</style>
