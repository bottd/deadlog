<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';

	interface Props {
		name: string;
		imageSrc?: string;
		isSelected: boolean;
		colorClass: 'hero' | 'item';
		onSelect: () => void;
	}

	let { name, imageSrc, isSelected, colorClass, onSelect }: Props = $props();

	const bgClass = $derived(colorClass === 'hero' ? 'bg-primary/10' : 'bg-primary/5');
	const textClass = 'text-primary';
	const dotClass = 'bg-primary';
</script>

<Command.Item
	value={name}
	{onSelect}
	class={cn(
		'hover:bg-secondary aria-selected:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors',
		isSelected && bgClass
	)}
>
	{#if imageSrc}
		<img
			src={imageSrc}
			alt={name}
			class="border-border bg-card size-8 rounded border object-cover"
		/>
	{:else}
		<div class="bg-secondary size-8 rounded"></div>
	{/if}
	<span
		class={cn(
			'flex-1 text-sm',
			isSelected ? `font-medium ${textClass}` : 'text-foreground'
		)}
	>
		{name}
	</span>
	{#if isSelected}
		<div class="size-2 rounded-full {dotClass}" aria-label="Selected"></div>
	{/if}
</Command.Item>
