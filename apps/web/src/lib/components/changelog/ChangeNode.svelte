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
	class="flex size-9 items-center justify-center rounded-full border-4 {isActive
		? 'border-primary bg-primary '
		: 'border-border bg-background transition-all'}"
>
	{#if bigUpdate}
		<Star class="fill-primary-foreground text-primary-foreground size-6" />
	{:else}
		<div class="bg-primary size-3 rounded-full"></div>
	{/if}
</div>
