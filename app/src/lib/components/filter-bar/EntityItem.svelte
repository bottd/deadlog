<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { ENTITY_TONE, type EntityKind } from '$lib/entityTone';

	interface Props {
		id: string;
		value: string;
		name: string;
		imageSrc?: string;
		isSelected: boolean;
		kind: EntityKind;
		onSelect: () => void;
	}

	let { id, value, name, imageSrc, isSelected, kind, onSelect }: Props = $props();

	const tone = $derived(ENTITY_TONE[kind]);
</script>

<Command.Item
	{id}
	{value}
	{onSelect}
	class="hover:bg-secondary data-[selected]:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors {isSelected
		? tone.subtle
		: ''}"
>
	{#snippet child({ props })}
		<div
			{...props}
			aria-selected={isSelected}
			aria-label="{name}, {tone.label}, {isSelected ? 'selected' : 'not selected'}"
		>
			{#if imageSrc}
				<img
					src={imageSrc}
					alt=""
					width="32"
					height="32"
					loading="lazy"
					decoding="async"
					border="border ~"
					bg="card"
					class="size-8 rounded object-cover"
				/>
			{:else}
				<div bg="secondary" class="size-8 rounded" aria-hidden="true"></div>
			{/if}
			<span flex="1" class="min-w-0">
				<span
					class="block truncate text-sm {isSelected
						? `font-medium ${tone.text}`
						: 'text-foreground'}"
				>
					{name}
				</span>
				<span
					text="muted-foreground"
					block
					font="mono"
					uppercase
					class="text-[9px] tracking-wider"
				>
					{tone.label}
				</span>
			</span>
			{#if isSelected}
				<span class="font-mono text-[9px] tracking-wider uppercase {tone.text}"
					>Selected</span
				>
				<span class="size-2 rounded-full {tone.dot}" aria-hidden="true"></span>
			{/if}
		</div>
	{/snippet}
</Command.Item>
