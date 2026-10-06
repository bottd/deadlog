<script lang="ts">
	import type { Component } from 'svelte';
	import { entityFragmentId } from '@deadlog/utils';
	import { setEntityIcons, type EntityIconsContext } from './entityContext';
	import ImageLightbox from './ImageLightbox.svelte';

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

	const filterMogContent = (node: HTMLElement) => applyEntityFilter(node, selectedSlugs);

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
			if (el.matches('h2[data-mog-section]')) {
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

<ImageLightbox>
	{#key Content}
		<section
			class="mog-content"
			aria-label="Changelog details"
			{@attach filterMogContent}
		>
			<Content />
		</section>
	{/key}
</ImageLightbox>

<style lang="postcss">
	.mog-content {
		@apply max-w-none text-base leading-relaxed;

		& > :global(p:has(> img)) {
			@apply my-6 max-w-none;
		}

		& > :global(p > img) {
			@apply changelog-image h-auto max-h-[32rem];
		}
	}

	.mog-content :global {
		h2[data-mog-section] {
			@apply font-display text-foreground mt-8 mb-4 text-[28px] leading-tight font-semibold tracking-wide first:mt-0;
		}

		h2 {
			@apply text-primary mt-8 mb-4 text-xl leading-tight font-semibold tracking-tight;
		}

		h3 {
			@apply text-foreground mt-6 mb-3 text-lg leading-tight font-semibold tracking-tight;
		}

		h4 {
			@apply text-foreground mt-5 mb-2 text-base leading-snug font-semibold tracking-tight;
		}

		/* `=hero:abrams:` wraps an entity's portrait, heading and notes in one block, so
		   what used to live in EntityHeading.svelte is styling on that container. The
		   portrait is a sibling of the heading, hence the grid rather than a flex row. */
		div.hero,
		div.item {
			@apply mt-8 grid pt-6;
			grid-template-columns: auto minmax(0, 1fr);
			column-gap: 1rem;
		}

		/* The portrait sits in the left column, spanning heading and notes. The link's
		   assistive label is a text node after the image, and as a paragraph it took a
		   full line box below the portrait — a 40px icon in a 66px cell, so the icon read
		   a line high of the heading it labels. Flex centres the portrait in the row
		   instead, whether the heading is one line or two. */
		div.hero > p:has(img),
		div.item > p:has(img) {
			@apply col-start-1 row-start-1 m-0 flex items-center;
		}

		/* The Mog link label names the image link for assistive technology. */
		div.hero > p:has(img) > a,
		div.item > p:has(img) > a,
		div.ability > p:has(img) > a {
			font-size: 0;
		}

		/* Descendant selector: the portrait img may sit inside the history-page link. */
		div.hero > img,
		div.item > img,
		div.hero > p img,
		div.item > p img {
			@apply border-border bg-card size-10 rounded-lg border object-cover shadow-sm;
		}

		div.hero > h3,
		div.item > h3 {
			@apply text-foreground col-start-2 m-0 scroll-mt-20 self-center text-2xl leading-tight font-semibold tracking-tight;
		}

		/* Notes and nested abilities share the content column. */
		div.hero > :not(p:has(img)):not(h3),
		div.item > :not(p:has(img)):not(h3) {
			@apply col-start-2;
		}

		div.ability {
			@apply mt-4 grid;
			grid-template-columns: auto minmax(0, 1fr);
			column-gap: 0.625rem;
		}

		div.ability > p:has(img) {
			@apply col-start-1 row-start-1 m-0 flex items-center;
		}

		/* Descendant selector: the icon may sit inside the ability deep link. */
		div.ability > img,
		div.ability > p img {
			@apply size-6 rounded object-cover;
		}

		div.ability > h4 {
			@apply text-foreground col-start-2 m-0 scroll-mt-20 self-center text-lg leading-tight font-semibold;
		}

		div.ability > :not(p:has(img)):not(h4) {
			@apply col-start-2;
		}

		ul.section-preview + div.hero,
		ul.section-preview + div.item {
			@apply mt-2 pt-0;
		}

		p {
			@apply text-foreground/90 my-3 max-w-[72ch] leading-relaxed;
		}

		ul:not([class]) {
			@apply my-3 ml-5 list-none space-y-2.5;
		}

		ol:not([class]) {
			@apply marker:text-primary/40 my-3 ml-5 list-decimal space-y-2.5;
		}

		:is(ul, ol):not([class]) > li {
			@apply text-foreground/90 relative max-w-[72ch] leading-relaxed;
		}

		ul:not([class]) > li::before {
			content: '';
			@apply bg-primary/40 absolute top-[0.55em] -left-4 size-1.5 rounded-full;
		}

		li > :is(ul, ol):not([class]) {
			@apply my-1.5;
		}

		li > ul:not([class]) > li::before {
			@apply bg-primary/20;
		}

		/* Links — but not the video cards, which are blocks, not body copy */
		a:not(.video-link) {
			@apply text-primary font-medium underline-offset-2 transition-all duration-200 hover:underline hover:opacity-80;
		}

		/* Entity and ability headings link out but read as headings, not body links */
		div.hero > h3 > a,
		div.item > h3 > a,
		div.ability > h4 > a {
			@apply text-foreground font-semibold no-underline hover:no-underline hover:opacity-100;
		}

		/* Ability icon and heading share one hover state, like the entity block above. */
		div.ability:has(> h4 a:hover, > p a:hover) > h4 > a {
			@apply text-signal;
		}

		div.ability:has(> h4 a:hover, > p a:hover) > p img {
			@apply ring-signal ring-1;
		}

		/* Portrait and heading link to the same page, so they share one hover state:
		   hovering either highlights both. */
		div.hero:has(> h3 a:hover, > p a:hover) > h3 > a,
		div.item:has(> h3 a:hover, > p a:hover) > h3 > a {
			@apply text-signal;
		}

		div.hero:has(> h3 a:hover, > p a:hover) > p img,
		div.item:has(> h3 a:hover, > p a:hover) > p img {
			@apply border-signal;
		}

		strong {
			@apply text-foreground font-semibold;
		}

		em {
			@apply italic;
		}

		code {
			@apply border-primary/10 bg-primary/5 text-primary rounded border px-1.5 py-0.5 font-mono text-xs;
		}

		pre {
			@apply border-border bg-card/50 my-4 overflow-x-auto rounded-lg border p-4;
		}

		pre code {
			@apply border-0 bg-transparent p-0;
		}

		blockquote {
			@apply border-primary/30 text-foreground/70 my-4 border-l-2 pl-4 italic;
		}

		hr {
			@apply border-border my-8;
		}

		table {
			@apply border-border my-4 w-full border-collapse border;
		}

		th,
		td {
			@apply border-border border px-3 py-2 text-left;
		}

		th {
			@apply bg-muted/50 font-semibold;
		}

		@media (max-width: 639px) {
			div.hero > :not(p:has(img)):not(h3),
			div.item > :not(p:has(img)):not(h3),
			div.ability > :not(p:has(img)):not(h4) {
				grid-column: 1 / -1;
			}
			:is(ul, ol):not([class]) {
				margin-left: 1rem;
			}
		}
	}
</style>
