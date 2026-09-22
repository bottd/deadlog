<script lang="ts">
	import PreviousChangeLink from '../entity/PreviousChangeLink.svelte';
	import { getEntityIcons, resolveEntity } from './entityContext';
	import { getReadingContext, previousKey } from './readingContext';
	let {
		kind,
		name,
		groupIndex,
		bulletIndex,
		text
	}: {
		kind: 'hero' | 'item';
		name: string;
		groupIndex: number;
		bulletIndex: number;
		text: string;
	} = $props();
	const icons = getEntityIcons();
	const reading = getReadingContext();
	const entity = $derived(resolveEntity(icons, kind, name));
	const previous = $derived(
		entity
			? reading.previous[previousKey(kind, entity.id, groupIndex, bulletIndex)]
			: undefined
	);
</script>

{#if previous && previous.bullet === text}
	<span class="mog-enrichment"><PreviousChangeLink {previous} /></span>
{/if}
