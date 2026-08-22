<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { type WithElementRef } from '$lib/utils.js';

	type BadgeVariant = 'default' | 'signal';

	/** Spelled out so UnoCSS's extractor sees the shortcut names as literals. */
	const variants = {
		default: 'badge-default',
		signal: 'badge-signal'
	} satisfies Record<BadgeVariant, string>;

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
	class="{variants[variant]} {className ?? ''}"
	{...restProps}
>
	{@render children?.()}
</svelte:element>
