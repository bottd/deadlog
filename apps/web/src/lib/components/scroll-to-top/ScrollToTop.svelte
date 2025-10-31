<script lang="ts">
	import { onMount } from 'svelte';
	let showScrollTop = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const handleScroll = () => {
			showScrollTop = window.scrollY > 500;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showScrollTop}
	<button
		onclick={scrollToTop}
		class="fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full bg-[#c89b3c] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#d4a854]"
		aria-label="Scroll to top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	</button>
{/if}
