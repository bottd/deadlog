<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetPrimitive.OverlayProps = $props();
</script>

<SheetPrimitive.Overlay
	bind:ref
	data-slot="sheet-overlay"
	class="overlay data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out {className ??
		''}"
	{...restProps}
/>
