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
		? 'sticky bottom-0 z-10 -mx-6 mt-4 -mb-6 px-6 py-3'
		: ''}"
>
	<Button
		onclick={toggle}
		variant="ghost"
		size="sm"
		class="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
	>
		{#if isExpanded}
			<Minus class="size-3.5" />
			Read Less
		{:else}
			<Plus class="size-3.5" />
			Read More
		{/if}
	</Button>
</div>
