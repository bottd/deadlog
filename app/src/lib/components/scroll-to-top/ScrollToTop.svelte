<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let showScrollTop = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window onscroll={() => (showScrollTop = window.scrollY > 500)} />

{#if showScrollTop}
	<button
		onclick={scrollToTop}
		class="bg-primary text-primary-foreground fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:opacity-80 active:scale-95"
		aria-label="Scroll to top"
		in:fly={{ y: 10, duration: 250, easing: quintOut }}
		out:fly={{ y: 10, duration: 200 }}
	>
		<ArrowUp class="size-6" />
	</button>
{/if}
