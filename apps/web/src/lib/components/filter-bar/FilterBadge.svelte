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

	const colorClasses = {
		hero: 'border-primary/30 bg-primary/20 text-primary hover:bg-primary/30',
		item: 'border-blue-500/30 bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
	};

	const hoverClasses = {
		hero: 'hover:bg-primary/50',
		item: 'hover:bg-blue-500/50'
	};
</script>

<Badge
	class="flex items-center gap-1.5 py-1 pr-1 pl-1.5 transition-colors {colorClasses[
		badgeColor
	]}"
>
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
	<button
		type="button"
		onclick={onRemove}
		class="ml-0.5 rounded-sm p-0.5 transition-colors {hoverClasses[badgeColor]}"
		aria-label="Remove {name}"
	>
		<XIcon class="size-3" />
	</button>
</Badge>
