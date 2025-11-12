<script lang="ts">
	interface Props {
		isExpanded: boolean;
		toggle: () => void;
	}

	let { isExpanded, toggle }: Props = $props();
</script>

<div
	class="flex justify-center {isExpanded
		? 'border-border bg-card/95 sticky bottom-0 z-10 -mx-6 mt-4 -mb-6 border-t px-6 py-3 backdrop-blur-sm'
		: ''}"
>
	<button
		onclick={toggle}
		class="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:opacity-80"
	>
		{isExpanded ? 'Read less' : 'Read more'}
	</button>
</div>
