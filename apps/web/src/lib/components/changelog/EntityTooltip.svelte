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
		class="cursor-pointer"
		aria-label="Filter by {name}"
	>
		{@render children()}
	</HoverCard.Trigger>
	<HoverCard.Content class="w-56">
		<div class="flex gap-3">
			{#if imageSrc}
				<img src={imageSrc} alt={name} class="avatar" />
			{/if}
			<div class="flex flex-col justify-center">
				<p class="font-display text-sm">{name}</p>
				<p class="text-muted-foreground text-xs">Click to filter by {type}</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>

<style lang="postcss">
	@reference "../../../app.css";

	.avatar {
		@apply border-border bg-card size-12 rounded-full border-2 object-cover;
	}
</style>
