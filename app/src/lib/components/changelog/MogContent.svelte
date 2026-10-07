<script lang="ts">
	import './mog-content.css';
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
