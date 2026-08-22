<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import type { WithoutChildrenOrChild } from '$lib/utils.js';

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
		class="popover w-fit origin-(--bits-tooltip-content-transform-origin) px-3 py-1.5 text-xs text-balance data-[state=delayed-open]:animate-pop-in data-[state=closed]:animate-pop-out {className ??
			''}"
		{...restProps}
	>
		{@render children?.()}
		<TooltipPrimitive.Arrow>
			{#snippet child({ props })}
				<div
					class="z-50 size-2.5 rotate-45 rounded-[2px] bg-popover
						data-[side=top]:(translate-x-1/2 translate-y-[calc(-50%_+_2px)])
						data-[side=bottom]:(-translate-x-1/2 -translate-y-[calc(-50%_+_1px)])
						data-[side=right]:(translate-x-[calc(50%_+_2px)] translate-y-1/2)
						data-[side=left]:-translate-y-[calc(50%_-_3px)] {arrowClasses ?? ''}"
					{...props}
				></div>
			{/snippet}
		</TooltipPrimitive.Arrow>
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
