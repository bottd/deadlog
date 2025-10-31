<script lang="ts">
	interface Props {
		isExpanded: boolean;
		toggle: () => void;
	}

	let { isExpanded, toggle }: Props = $props();
</script>

<div
	class="flex justify-center {isExpanded
		? 'sticky bottom-0 z-10 -mx-6 mt-4 -mb-6 border-t border-[#1a1a1a] bg-[#121212]/95 px-6 py-3 backdrop-blur-sm'
		: ''}"
>
	<button
		onclick={toggle}
		class="rounded-full bg-[#c89b3c]/10 px-4 py-1.5 text-xs font-medium text-[#c89b3c] transition-colors hover:bg-[#c89b3c]/20 hover:text-[#d4a854]"
	>
		{isExpanded ? 'Read less' : 'Read more'}
	</button>
</div>
