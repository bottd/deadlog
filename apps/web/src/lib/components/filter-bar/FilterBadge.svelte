<script lang="ts">
	import XIcon from '@lucide/svelte/icons/x';
	import { Badge } from '$lib/components/ui/badge';

	interface Props {
		name: string;
		icon?: string;
		onRemove: () => void;
		badgeColor?: 'hero' | 'item';
	}

	let { name, icon, onRemove, badgeColor = 'hero' }: Props = $props();
</script>

<Badge variant={badgeColor === 'hero' ? 'default' : 'secondary'} onclick={onRemove}>
	{#if icon}
		<img
			src={icon}
			alt={name}
			width="16"
			height="16"
			loading="lazy"
			decoding="async"
			class="size-4 rounded-sm object-cover"
		/>
	{/if}
	<span class="text-xs font-medium">{name}</span>
	<XIcon class="size-3" />
</Badge>
