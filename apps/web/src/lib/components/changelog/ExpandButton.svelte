<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus, Minus } from '@lucide/svelte';

	interface Props {
		isExpanded: boolean;
		toggle: () => void;
	}

	let { isExpanded, toggle }: Props = $props();
</script>

<div class:expanded={isExpanded} class="flex justify-center">
	<Button onclick={toggle} variant="ghost" size="sm">
		{#if isExpanded}
			<Minus />
			Read Less
		{:else}
			<Plus />
			Read More
		{/if}
	</Button>
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.expanded {
		@apply sticky bottom-0 z-10 -mx-6 mt-4 -mb-6 px-6 py-3;
	}

	div :global(button) {
		@apply bg-primary/10 text-primary hover:bg-primary/20 text-xs;
	}

	div :global(svg) {
		@apply size-3.5;
	}
</style>
