<script lang="ts" module>
	import { cn } from '$lib/utils.js';

	export type BadgeVariant =
		| 'default'
		| 'signal'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'marksman'
		| 'mystic'
		| 'brawler'
		| 'assassin'
		| 'weapon'
		| 'vitality'
		| 'spirit';

	const badgeBase =
		'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3';
	const badgeVariantClasses = {
		default:
			'bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
		signal: 'bg-signal/15 text-signal border-signal/25 [a&]:hover:bg-signal/25',
		secondary:
			'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent',
		destructive:
			'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70 border-transparent text-white',
		outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
		marksman:
			'bg-[var(--type-marksman)] border-transparent text-white [a&]:hover:opacity-90',
		mystic: 'bg-[var(--type-mystic)] border-transparent text-white [a&]:hover:opacity-90',
		brawler:
			'bg-[var(--type-brawler)] border-transparent text-white [a&]:hover:opacity-90',
		assassin:
			'bg-[var(--type-assassin)] border-transparent text-white [a&]:hover:opacity-90',
		weapon: 'bg-[var(--item-weapon)] border-transparent text-white [a&]:hover:opacity-90',
		vitality:
			'bg-[var(--item-vitality)] border-transparent text-white [a&]:hover:opacity-90',
		spirit: 'bg-[var(--item-spirit)] border-transparent text-white [a&]:hover:opacity-90'
	} satisfies Record<BadgeVariant, string>;

	export function badgeVariants({
		variant = 'default'
	}: { variant?: BadgeVariant } = {}) {
		return cn(badgeBase, badgeVariantClasses[variant]);
	}
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { type WithElementRef } from '$lib/utils.js';

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
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
