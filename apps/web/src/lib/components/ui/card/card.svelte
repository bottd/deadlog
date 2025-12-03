<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		'bg-card text-card-foreground border-border/60 hover:border-border hover:shadow-primary/5 flex flex-col gap-6 rounded-lg border transition-all duration-300 hover:shadow-lg',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
