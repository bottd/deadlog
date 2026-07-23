<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	type ButtonVariant = 'ghost';
	type ButtonSize = 'sm' | 'icon';

	const buttonBase =
		'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all active:scale-[0.97] focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*=size-])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0';
	const buttonVariantClasses = {
		ghost: 'hover:bg-accent hover:text-accent-foreground'
	} satisfies Record<ButtonVariant, string>;
	const buttonSizeClasses = {
		sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
		icon: 'size-9'
	} satisfies Record<ButtonSize, string>;

	export function buttonVariants({
		variant = 'ghost',
		size = 'sm'
	}: { variant?: ButtonVariant; size?: ButtonSize } = {}) {
		return cn(buttonBase, buttonVariantClasses[variant], buttonSizeClasses[size]);
	}

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = 'ghost',
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
		class={cn(buttonVariants({ variant, size }), className)}
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
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
