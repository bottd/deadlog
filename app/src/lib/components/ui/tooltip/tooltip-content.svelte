<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import type { WithoutChildrenOrChild } from '#lib/utils.ts';

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 0,
		side = 'top',
		children,
		arrowClasses,
		portalProps,
		...restProps
	}: TooltipPrimitive.ContentProps & {
		arrowClasses?: string;
		portalProps?: WithoutChildrenOrChild<TooltipPrimitive.PortalProps>;
	} = $props();
</script>

<TooltipPrimitive.Portal {...portalProps}>
	<TooltipPrimitive.Content
		bind:ref
		data-slot="tooltip-content"
		{sideOffset}
		{side}
		class={className}
		{...restProps}
	>
		{@render children?.()}
		<TooltipPrimitive.Arrow>
			{#snippet child({ props })}
				<div class={['tooltip-arrow', arrowClasses]} {...props}></div>
			{/snippet}
		</TooltipPrimitive.Arrow>
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
