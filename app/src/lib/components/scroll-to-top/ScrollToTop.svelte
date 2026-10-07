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
		class="ui-focus-ring scroll-top"
		aria-label="Scroll to top"
		in:fly={{ y: 10, duration: 250, easing: quintOut }}
		out:fly={{ y: 10, duration: 200 }}
	>
		<ArrowUp class="icon-lg" />
	</button>
{/if}

<style>
	@layer components.features {
		.scroll-top {
			position: fixed;
			right: 1.5rem;
			bottom: 1.5rem;
			z-index: 50;
			display: flex;
			inline-size: 3rem;
			block-size: 3rem;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			background: color-mix(in srgb, var(--popover) 90%, transparent);
			color: var(--signal);
			backdrop-filter: blur(24px);
			transition:
				border-color var(--duration-normal),
				color var(--duration-normal),
				box-shadow var(--duration-normal),
				scale var(--duration-normal);
			&:hover {
				border-color: color-mix(in srgb, var(--signal) 60%, transparent);
				color: var(--foreground);
				box-shadow: var(--shadow-xl);
			}
			&:active {
				scale: 0.97;
			}
		}
	}
</style>
