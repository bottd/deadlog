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
	const typeLabel = $derived(badgeColor === 'hero' ? 'Hero' : 'Item');

	function handleKeydown(event: KeyboardEvent) {
		event.stopPropagation();
		if (event.key !== 'Enter' && event.key !== ' ') return;
		event.preventDefault();
		onRemove();
	}
</script>

<button
	type="button"
	onclick={onRemove}
	onkeydown={handleKeydown}
	class="group/badge rounded-md transition-transform hover:scale-105 focus-visible:outline-none"
	aria-label="Remove {typeLabel} filter: {name}"
>
	<Badge
		variant={badgeColor === 'hero' ? 'default' : 'signal'}
		class="hover:shadow-primary/10 group-focus-visible/badge:ring-signal/50 cursor-pointer transition-all duration-200 group-hover/badge:pr-2 group-hover/badge:shadow-md group-focus-visible/badge:ring-2"
	>
		{#if icon}
			<img
				src={icon}
				alt=""
				width="18"
				height="18"
				loading="lazy"
				decoding="async"
				class="size-[18px] rounded object-cover transition-all duration-200 group-hover/badge:scale-110"
			/>
		{/if}
		<span class="font-mono text-[9px] tracking-wider uppercase opacity-75"
			>{typeLabel}</span
		>
		<span aria-hidden="true" class="opacity-50">/</span>
		<span class="text-xs font-medium tracking-tight">{name}</span>
		<XIcon
			class="size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100"
		/>
	</Badge>
</button>
