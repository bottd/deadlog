<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		imageSrc?: string;
		type?: 'hero' | 'item';
		onSelect?: () => void;
		children: Snippet;
	}

	let { name, imageSrc, type = 'hero', onSelect, children }: Props = $props();
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		onclick={onSelect}
		class="cursor-pointer transition-all duration-200 hover:scale-105"
		aria-label="Filter by {name}"
	>
		{@render children()}
	</HoverCard.Trigger>
	<HoverCard.Content class="border-border/60 shadow-primary/5 w-64 shadow-xl">
		<div class="flex gap-4">
			{#if imageSrc}
				<div class="relative">
					<div class="bg-primary/10 absolute inset-0 rounded-lg blur-sm"></div>
					<img
						src={imageSrc}
						alt={name}
						class="border-primary/30 bg-card hover:border-primary/50 relative size-14 rounded-lg border-2 object-cover shadow-md transition-all duration-300 hover:scale-105"
					/>
				</div>
			{/if}
			<div class="flex flex-col justify-center gap-1">
				<p class="font-display text-foreground text-base tracking-tight">{name}</p>
				<p class="text-muted-foreground text-xs tracking-tight">
					Click to filter by {type}
				</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
