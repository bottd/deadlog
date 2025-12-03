<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus, Minus } from '@lucide/svelte';

	interface Props {
		isExpanded: boolean;
		toggle: () => void;
	}

	let { isExpanded, toggle }: Props = $props();
</script>

<div
	class="flex justify-center {isExpanded
		? 'from-card via-card sticky bottom-0 z-10 -mx-6 mt-6 -mb-6 bg-gradient-to-t to-transparent px-6 py-4'
		: 'mt-2'}"
>
	<Button
		onclick={toggle}
		variant="ghost"
		size="sm"
		class="group bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary/20 text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
	>
		{#if isExpanded}
			<Minus class="size-3.5 transition-transform duration-300 group-hover:scale-110" />
			Read Less
		{:else}
			<Plus
				class="size-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90"
			/>
			Read More
		{/if}
	</Button>
</div>
