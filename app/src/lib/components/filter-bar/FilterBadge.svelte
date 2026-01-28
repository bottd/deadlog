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

<Badge
	variant={badgeColor === 'hero' ? 'default' : 'secondary'}
	onclick={onRemove}
	class="group/badge hover:shadow-primary/10 cursor-pointer transition-all duration-200 hover:scale-105 hover:pr-2 hover:shadow-md"
>
	{#if icon}
		<img
			src={icon}
			alt={name}
			width="18"
			height="18"
			loading="lazy"
			decoding="async"
			class="size-[18px] rounded object-cover transition-all duration-200 group-hover/badge:scale-110"
		/>
	{/if}
	<span class="text-xs font-medium tracking-tight">{name}</span>
	<XIcon
		class="size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100"
	/>
</Badge>
