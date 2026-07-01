<script lang="ts">
	import { untrack } from 'svelte';
	import type { Component } from 'svelte';
	import { setEntityMaps, type EntityMaps } from './entityContext';

	interface Props {
		content: Component;
		heroMap?: EntityMaps['heroMap'];
		itemMap?: EntityMaps['itemMap'];
		abilityMap?: EntityMaps['abilityMap'];
		filter?: { heroes: string[]; items: string[] };
	}

	let {
		content: Content,
		heroMap = {},
		itemMap = {},
		abilityMap = {},
		filter
	}: Props = $props();

	untrack(() => setEntityMaps({ heroMap, itemMap, abilityMap }));

	let sectionEl = $state<HTMLElement>();

	function slug(name: string): string {
		return name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	const selectedSlugs = $derived(
		new Set([...(filter?.heroes ?? []), ...(filter?.items ?? [])].map(slug))
	);

	// the patch body is a prerendered component — filter by toggling block display
	$effect(() => {
		if (sectionEl) applyEntityFilter(sectionEl, selectedSlugs);
	});

	// A numeric value token: optional sign, leading digit, then digits/units/slashes.
	const VALUE = String.raw`[+\-]?\d[\w%./-]*`;
	const DELTA_RE = new RegExp(`\\bfrom:?\\s+(${VALUE})\\s+to\\s+(${VALUE})`, 'gi');

	function escapeHtml(s: string): string {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	function numberOf(token: string): number | null {
		if (token.includes('/')) return null; // arrays like 20/15/10 — ambiguous
		const m = token.match(/-?\d+(?:\.\d+)?/);
		if (!m) return null;
		const n = /^\+/.test(token) ? Math.abs(parseFloat(m[0])) : parseFloat(m[0]);
		return Number.isNaN(n) ? null : n;
	}

	function unitOf(token: string): string {
		const m = token.match(/[%a-zA-Z]+$/);
		return m ? m[0].toLowerCase() : '';
	}

	// Direction of the numeric change. Only colour when both sides share a unit
	// and parse cleanly; otherwise stay neutral (graceful degrade on ambiguous lines).
	function directionClass(a: string, b: string): string {
		const na = numberOf(a);
		const nb = numberOf(b);
		if (na === null || nb === null || unitOf(a) !== unitOf(b)) return 'nd-flat';
		if (nb > na) return 'nd-up';
		if (nb < na) return 'nd-down';
		return 'nd-flat';
	}

	function styleDeltas(text: string): string | null {
		let changed = false;
		const html = escapeHtml(text).replace(DELTA_RE, (_full, a: string, b: string) => {
			changed = true;
			const dir = directionClass(a, b);
			return `from <span class="norg-delta ${dir}"><span class="nd-from">${a}</span><span class="nd-arrow" aria-hidden="true">→</span><span class="sr-only"> to </span><span class="nd-to">${b}</span></span>`;
		});
		return changed ? html : null;
	}

	function enhanceContent(node: HTMLElement) {
		// Section headings (norg '*' compiles to <h1>): give an anchor id and
		// re-level to 2 for the document outline (the page <h1> is the patch date).
		for (const heading of node.querySelectorAll('h1, h2')) {
			if (!heading.id && heading.textContent) heading.id = slug(heading.textContent);
			if (heading.tagName === 'H1') {
				heading.setAttribute('role', 'heading');
				heading.setAttribute('aria-level', '2');
			}
		}
		// Emphasise "from A to B" balance deltas on plain-text bullets (buffs vs nerfs).
		for (const li of node.querySelectorAll('li')) {
			if (li.children.length > 0) continue; // skip bullets with inline markup/links
			const styled = styleDeltas(li.textContent ?? '');
			if (styled !== null) li.innerHTML = styled;
		}
	}

	function sectionOf(h1: HTMLElement): 'general' | 'hero' | 'item' {
		const id = h1.id || slug(h1.textContent ?? '');
		if (id.includes('hero')) return 'hero';
		if (id.includes('item')) return 'item';
		return 'general';
	}

	function applyEntityFilter(root: HTMLElement, selected: Set<string>) {
		const children = Array.from(root.children) as HTMLElement[];
		for (const el of children) el.style.removeProperty('display');
		if (selected.size === 0) return;

		// which top-level sections contain at least one selected entity
		const matched: Record<string, boolean> = {};
		let sec: 'general' | 'hero' | 'item' = 'general';
		for (const el of children) {
			if (el.tagName === 'H1') sec = sectionOf(el);
			else if (el.classList.contains('entity-heading') && selected.has(el.id))
				matched[sec] = true;
		}

		// a heading owns its siblings until the next heading; hide general changes,
		// empty sections, and non-selected entities
		let mode: 'show' | 'hide' = 'hide';
		for (const el of children) {
			if (el.tagName === 'H1') {
				sec = sectionOf(el);
				el.style.display = sec !== 'general' && matched[sec] ? '' : 'none';
				mode = 'hide';
			} else if (el.classList.contains('entity-heading')) {
				mode = selected.has(el.id) ? 'show' : 'hide';
				el.style.display = mode === 'show' ? '' : 'none';
			} else {
				el.style.display = mode === 'show' ? '' : 'none';
			}
		}
	}
</script>

<section
	class="norg-content"
	aria-label="Changelog details"
	bind:this={sectionEl}
	use:enhanceContent
>
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
			@apply text-foreground/90 my-3 max-w-[68ch] leading-relaxed;
		}

		/* Lists */
		:global(ul) {
			@apply my-3 ml-5 list-none space-y-2.5;
		}

		:global(ol) {
			@apply marker:text-primary/40 my-3 ml-5 list-decimal space-y-2.5;
		}

		:global(li) {
			@apply text-foreground/90 relative max-w-[68ch] leading-relaxed;
		}

		/* Balance deltas — "from A to B" gets mono tabular figures with a
		   direction-coded delta (value up = green, value down = red). */
		:global(.norg-delta) {
			@apply font-mono tabular-nums;
		}
		:global(.norg-delta .nd-from) {
			@apply text-muted-foreground font-normal;
		}
		:global(.norg-delta .nd-arrow) {
			@apply mx-1;
		}
		:global(.norg-delta .nd-to) {
			@apply font-semibold;
		}
		:global(.norg-delta.nd-up) {
			color: var(--item-vitality);
		}
		:global(.norg-delta.nd-down) {
			color: var(--destructive);
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
