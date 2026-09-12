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
		flex="~"
		type="button"
		onclick={scrollToTop}
		bg="popover/90"
		text="signal"
		fixed
		z="50"
		items="center"
		justify="center"
		rounded="md"
		class="ui-focus-ring right-6 bottom-6 size-12 border backdrop-blur-xl transition-all hover:(border-signal/60 text-foreground shadow-xl) active:scale-[0.97]"
		aria-label="Scroll to top"
		in:fly={{ y: 10, duration: 250, easing: quintOut }}
		out:fly={{ y: 10, duration: 200 }}
	>
		<ArrowUp class="size-5" />
	</button>
{/if}
