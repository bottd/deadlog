<script lang="ts">
	import type { Component } from 'svelte';
	import {
		entityFragmentId,
		setEntityIcons,
		type EntityIconsContext
	} from './entityContext';

	interface Props {
		content: Component;
		icons: EntityIconsContext;
		filter?: { heroes: string[]; items: string[] };
	}

	let { content: Content, icons, filter }: Props = $props();

	setEntityIcons({
		get heroes() {
			return icons.heroes;
		},
		get items() {
			return icons.items;
		}
	});

	const selectedSlugs = $derived(
		new Set([...(filter?.heroes ?? []), ...(filter?.items ?? [])].map(entityFragmentId))
	);

	function filterMogContent(node: HTMLElement) {
		void Content;
		applyEntityFilter(node, selectedSlugs);
	}

	/** `=hero:abrams:` renders as `<div class="hero abrams">`, so the slug is a class. */
	const isSelectedEntity = (el: HTMLElement, selected: Set<string>) =>
		(el.classList.contains('hero') || el.classList.contains('item')) &&
		[...el.classList].some((name) => selected.has(name));

	function applyEntityFilter(root: HTMLElement, selected: Set<string>) {
		const children = Array.from(root.children) as HTMLElement[];
		for (const el of children) el.style.removeProperty('display');
		if (selected.size === 0) return;

		// Each entity is a self-contained block, so a section is worth showing exactly
		// when one of its own blocks matched — no need to infer which section is which.
		let section: { heading: HTMLElement; members: HTMLElement[] } | null = null;
		const sections: { heading: HTMLElement; members: HTMLElement[] }[] = [];

		for (const el of children) {
			if (el.tagName === 'H1') {
				section = { heading: el, members: [] };
				sections.push(section);
			} else section?.members.push(el);
		}

		for (const { heading, members } of sections) {
			const shown = members.filter((el) => isSelectedEntity(el, selected));
			heading.style.display = shown.length ? '' : 'none';
			for (const el of members) el.style.display = shown.includes(el) ? '' : 'none';
		}
	}
</script>

<section class="mog-content" aria-label="Changelog details" {@attach filterMogContent}>
	<Content />
</section>

<style lang="postcss">
	@reference "../../../app.css";

	.mog-content {
		@apply max-w-none text-base leading-relaxed;

		/* Section headings — editorial treatment */
		:global(h1) {
			@apply text-foreground font-display mt-12 mb-6 text-[28px] leading-tight font-semibold tracking-wide first:mt-0;
		}

		:global(h2) {
			@apply text-primary mt-8 mb-4 text-xl leading-tight font-semibold tracking-tight;
		}

		:global(h3) {
			@apply text-foreground mt-6 mb-3 text-lg leading-tight font-semibold tracking-tight;
		}

		:global(h4) {
			@apply text-foreground mt-5 mb-2 text-base leading-snug font-semibold tracking-tight;
		}

		/* `=hero:abrams:` wraps an entity's portrait, heading and notes in one block, so
		   what used to live in EntityHeading.svelte is styling on that container. The
		   portrait is a sibling of the heading, hence the grid rather than a flex row. */
		:global(div.hero),
		:global(div.item) {
			@apply border-border/30 mt-8 grid border-t pt-6;
			grid-template-columns: auto 1fr;
			column-gap: 1rem;
		}

		/* The portrait sits in the left column, spanning heading and notes. */
		:global(div.hero > p:has(img)),
		:global(div.item > p:has(img)) {
			@apply col-start-1 row-start-1 m-0;
		}

		/* The Mog link label names the image link for assistive technology. */
		:global(div.hero > p:has(img) > a),
		:global(div.item > p:has(img) > a),
		:global(div.ability > p:has(img) > a) {
			font-size: 0;
		}

		/* Descendant selector: the portrait img may sit inside the history-page link. */
		:global(div.hero > img),
		:global(div.item > img),
		:global(div.hero > p img),
		:global(div.item > p img) {
			@apply border-border bg-card size-10 rounded-lg border object-cover shadow-sm;
		}

		:global(div.hero > h2),
		:global(div.item > h2) {
			@apply text-foreground col-start-2 m-0 scroll-mt-20 self-center text-2xl leading-tight font-semibold tracking-tight;
		}

		/* Notes and nested abilities share the content column. */
		:global(div.hero > :not(p:has(img)):not(h2)),
		:global(div.item > :not(p:has(img)):not(h2)) {
			@apply col-start-2;
		}

		:global(div.ability) {
			@apply mt-4 grid;
			grid-template-columns: auto 1fr;
			column-gap: 0.625rem;
		}

		:global(div.ability > p:has(img)) {
			@apply col-start-1 row-start-1 m-0;
		}

		/* Descendant selector: the icon may sit inside the ability deep link. */
		:global(div.ability > img),
		:global(div.ability > p img) {
			@apply size-6 rounded object-cover;
		}

		:global(div.ability > h3) {
			@apply text-foreground col-start-2 m-0 scroll-mt-20 self-center text-lg leading-tight font-semibold;
		}

		:global(div.ability > :not(p:has(img)):not(h3)) {
			@apply col-start-2;
		}

		/* First entity after the section preview — minimal gap */
		:global(ul.section-preview + div.hero),
		:global(ul.section-preview + div.item) {
			@apply mt-2 border-t-0 pt-0;
		}

		/* Paragraphs */
		:global(p) {
			@apply text-foreground/90 my-3 max-w-[72ch] leading-relaxed;
		}

		& > :global(p:has(> img)) {
			@apply my-6 max-w-none;
		}

		& > :global(p > img) {
			@apply border-border bg-muted/20 h-auto max-h-[32rem] w-full rounded-lg border object-contain shadow-lg;
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

		/* Links — but not the video cards, which are blocks, not body copy */
		:global(a:not(.video-link)) {
			@apply text-primary font-medium underline-offset-2 transition-all duration-200 hover:underline hover:opacity-80;
		}

		/* Entity and ability headings link out but read as headings, not body links */
		:global(div.hero > h2 > a),
		:global(div.item > h2 > a),
		:global(div.ability > h3 > a) {
			@apply text-foreground font-semibold no-underline hover:no-underline hover:opacity-100;
		}

		/* Ability icon and heading share one hover state, like the entity block above. */
		:global(div.ability:has(> h3 a:hover, > p a:hover) > h3 > a) {
			@apply text-signal;
		}

		:global(div.ability:has(> h3 a:hover, > p a:hover) > p img) {
			@apply ring-signal ring-1;
		}

		/* Portrait and heading link to the same page, so they share one hover state:
		   hovering either highlights both. */
		:global(div.hero:has(> h2 a:hover, > p a:hover) > h2 > a),
		:global(div.item:has(> h2 a:hover, > p a:hover) > h2 > a) {
			@apply text-signal;
		}

		:global(div.hero:has(> h2 a:hover, > p a:hover) > p img),
		:global(div.item:has(> h2 a:hover, > p a:hover) > p img) {
			@apply border-signal;
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
