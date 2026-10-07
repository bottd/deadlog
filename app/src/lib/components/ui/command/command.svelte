<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	bind:value
	bind:ref
	data-slot="command"
	class={className}
	{...restProps}
/>
