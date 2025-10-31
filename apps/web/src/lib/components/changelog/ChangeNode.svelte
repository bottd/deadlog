<script lang="ts">
	import { Star } from '@lucide/svelte';

	interface Props {
		bigUpdate?: boolean;
		active?: boolean;
	}

	let { bigUpdate = false, active = false }: Props = $props();

	const isActive = active || bigUpdate;
</script>

<div
	class="flex size-12 items-center justify-center rounded-full border-4 {isActive
		? 'border-[#c89b3c] bg-[#c89b3c] shadow-lg shadow-[#c89b3c]/50'
		: 'border-[#1a1a1a] bg-[#0a0a0a] transition-all'}"
>
	{#if bigUpdate}
		<Star class="size-6 fill-black text-black" />
	{:else}
		<div class="size-3 rounded-full bg-[#c89b3c]"></div>
	{/if}
</div>
