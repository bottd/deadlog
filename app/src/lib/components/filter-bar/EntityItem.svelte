<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';

	interface Props {
		id: string;
		value: string;
		name: string;
		imageSrc?: string;
		isSelected: boolean;
		colorClass: 'hero' | 'item';
		onSelect: () => void;
	}

	let { id, value, name, imageSrc, isSelected, colorClass, onSelect }: Props = $props();

	const bgClass = $derived(colorClass === 'hero' ? 'bg-primary/10' : 'bg-signal/10');
	const textClass = $derived(colorClass === 'hero' ? 'text-primary' : 'text-signal');
	const dotClass = $derived(colorClass === 'hero' ? 'bg-primary' : 'bg-signal');
	const typeLabel = $derived(colorClass === 'hero' ? 'Hero' : 'Item');
</script>

<Command.Item
	{id}
	{value}
	{onSelect}
	class={cn(
		'hover:bg-secondary data-[selected]:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors',
		isSelected && bgClass
	)}
>
	{#snippet child({ props })}
		<div
			{...props}
			aria-selected={isSelected}
			aria-label="{name}, {typeLabel}, {isSelected ? 'selected' : 'not selected'}"
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
					class={cn(
						'block truncate text-sm',
						isSelected ? `font-medium ${textClass}` : 'text-foreground'
					)}
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
					{typeLabel}
				</span>
			</span>
			{#if isSelected}
				<span class="font-mono text-[9px] tracking-wider uppercase {textClass}"
					>Selected</span
				>
				<span class="size-2 rounded-full {dotClass}" aria-hidden="true"></span>
			{/if}
		</div>
	{/snippet}
</Command.Item>
