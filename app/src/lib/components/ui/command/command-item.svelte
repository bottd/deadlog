<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: CommandPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<CommandPrimitive.Item
	bind:ref
	data-slot="command-item"
	class="menu-item {className ?? ''}"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</CommandPrimitive.Item>
