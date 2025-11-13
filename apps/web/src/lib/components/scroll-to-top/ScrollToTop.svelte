<script lang="ts">
	import ArrowUp from '@lucide/svelte/icons/arrow-up';
	let showScrollTop = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window onscroll={() => (showScrollTop = window.scrollY > 500)} />

{#if showScrollTop}
	<button
		onclick={scrollToTop}
		class="bg-primary text-primary-foreground fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:opacity-80"
		aria-label="Scroll to top"
	>
		<ArrowUp class="size-6" />
	</button>
{/if}
