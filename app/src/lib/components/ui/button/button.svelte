<script lang="ts" module>
	import type { WithElementRef } from '$lib/utils.js';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export type ButtonSize = 'sm' | 'icon';

	/** Spelled out so UnoCSS's extractor sees the shortcut names as literals. */
	export const buttonSizes = {
		sm: 'btn-sm',
		icon: 'btn-icon'
	} satisfies Record<ButtonSize, string>;

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		size = 'sm',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class="btn-ghost {buttonSizes[size]} {className ?? ''}"
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? 'link' : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class="btn-ghost {buttonSizes[size]} {className ?? ''}"
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
