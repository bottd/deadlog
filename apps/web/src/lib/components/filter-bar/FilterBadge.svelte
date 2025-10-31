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
		hero: 'border-[#c89b3c]/30 bg-[#c89b3c]/20 text-[#c89b3c] hover:bg-[#c89b3c]/30',
		item: 'border-[#4a9eff]/30 bg-[#4a9eff]/20 text-[#4a9eff] hover:bg-[#4a9eff]/30'
	};

	const hoverClasses = {
		hero: 'hover:bg-[#c89b3c]/50',
		item: 'hover:bg-[#4a9eff]/50'
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
