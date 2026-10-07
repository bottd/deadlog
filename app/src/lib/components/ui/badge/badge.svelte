<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { type WithElementRef } from '#lib/utils.ts';

	type BadgeVariant = 'default' | 'signal';

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = 'default',
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	data-slot="badge"
	{href}
	data-variant={variant}
	class={className}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
