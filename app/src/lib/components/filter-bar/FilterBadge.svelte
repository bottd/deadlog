<script lang="ts">
	import XIcon from '@lucide/svelte/icons/x';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { ENTITY_TONE, type EntityKind } from '$lib/entityTone';

	interface Props {
		name: string;
		icon?: string;
		onRemove: () => void;
		kind?: EntityKind;
	}

	let { name, icon, onRemove, kind = 'hero' }: Props = $props();
	const tone = $derived(ENTITY_TONE[kind]);

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
	rounded="md"
	class="group/badge transition-transform hover:scale-105 focus-visible:outline-none"
	aria-label="Remove {tone.label} filter: {name}"
>
	<Badge
		variant={tone.badgeVariant}
		class="group-focus-visible/badge:ring-signal/50 hover:shadow-primary/10 cursor-pointer transition-all duration-200 group-hover/badge:pr-2 group-hover/badge:shadow-md group-focus-visible/badge:ring-2"
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
		<span font="mono" uppercase op="75" class="text-[9px] tracking-wider"
			>{tone.label}</span
		>
		<span aria-hidden="true" op="50">/</span>
		<span text="xs" font="medium" class="tracking-tight">{name}</span>
		<XIcon
			class="size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100"
		/>
	</Badge>
</button>
