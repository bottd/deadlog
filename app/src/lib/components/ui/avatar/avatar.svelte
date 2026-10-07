<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		loadingStatus = $bindable('loading'),
		class: className,
		...restProps
	}: AvatarPrimitive.RootProps = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	bind:loadingStatus
	data-slot="avatar"
	class={className}
	{...restProps}
/>
