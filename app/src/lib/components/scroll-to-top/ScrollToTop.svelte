<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { scrollY } from 'svelte/reactivity/window';

	const showScrollTop = $derived((scrollY.current ?? 0) > 500);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if showScrollTop}
	<button
		type="button"
		onclick={scrollToTop}
		bg="primary"
		text="primary-foreground"
		fixed
		z="50"
		items="center"
		justify="center"
		rounded="full"
		shadow="lg"
		class="right-8 bottom-8 size-12 transition-all hover:scale-110 hover:opacity-80 active:scale-95 flex"
		aria-label="Scroll to top"
		in:fly={{ y: 10, duration: 250, easing: quintOut }}
		out:fly={{ y: 10, duration: 200 }}
	>
		<ArrowUp class="size-6" />
	</button>
{/if}
