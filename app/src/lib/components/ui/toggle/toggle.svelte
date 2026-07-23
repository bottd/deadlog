<script lang="ts" module>
	import { cn } from '$lib/utils.js';
	export type ToggleVariant = 'default' | 'outline';
	export type ToggleSize = 'default' | 'sm' | 'lg';

	const toggleBase =
		"hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0";
	const toggleVariantClasses = {
		default: 'bg-transparent',
		outline:
			'border-input shadow-xs hover:bg-accent hover:text-accent-foreground border bg-transparent'
	} satisfies Record<ToggleVariant, string>;
	const toggleSizeClasses = {
		default: 'h-9 min-w-9 px-2',
		sm: 'h-8 min-w-8 px-1.5',
		lg: 'h-10 min-w-10 px-2.5'
	} satisfies Record<ToggleSize, string>;

	export function toggleVariants({
		variant = 'default',
		size = 'default'
	}: ToggleVariants = {}) {
		return cn(toggleBase, toggleVariantClasses[variant], toggleSizeClasses[size]);
	}
	export type ToggleVariants = { variant?: ToggleVariant; size?: ToggleSize };
</script>

<script lang="ts">
	import { Toggle as TogglePrimitive } from 'bits-ui';
	let {
		ref = $bindable(null),
		pressed = $bindable(false),
		class: className,
		size = 'default',
		variant = 'default',
		...restProps
	}: TogglePrimitive.RootProps & {
		variant?: ToggleVariant;
		size?: ToggleSize;
	} = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	data-slot="toggle"
	class={cn(toggleVariants({ variant, size }), className)}
	{...restProps}
/>
