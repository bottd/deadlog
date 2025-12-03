<script lang="ts">
	import type { Snippet } from 'svelte';
	import { GutterNode } from '../gutter-line';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		children: Snippet;
		isBigUpdate?: boolean;
		entryIndex?: number;
	}

	let { children, isBigUpdate = false, entryIndex = 0 }: Props = $props();
</script>

<div
	class="group/entry relative"
	transition:fly={{ y: 16, duration: 600, delay: entryIndex * 100, easing: cubicOut }}
>
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<GutterNode bigUpdate={isBigUpdate} />
	</div>

	{#if entryIndex > 0}
		<div
			class="editorial-divider mb-10 opacity-0 transition-opacity duration-500 group-hover/entry:opacity-100"
		></div>
	{/if}

	{@render children()}
</div>
