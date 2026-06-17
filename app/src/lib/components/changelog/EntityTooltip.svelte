<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { BadgeVariant } from '$lib/components/ui/badge/badge.svelte';
	import type { Snippet } from 'svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import { toSlug } from '@deadlog/utils';

	interface Props {
		name: string;
		imageSrc?: string;
		type?: 'hero' | 'item';
		heroType?: string | null;
		itemCategory?: 'weapon' | 'ability' | 'upgrade';
		onSelect?: () => void;
		children: Snippet;
	}

	let {
		name,
		imageSrc,
		type = 'hero',
		heroType,
		itemCategory,
		onSelect,
		children
	}: Props = $props();

	const entityUrl = $derived(`/${type}/${toSlug(name)}`);

	const badgeVariant = $derived.by((): BadgeVariant => {
		if (type === 'hero' && heroType) {
			return heroType.toLowerCase() as BadgeVariant;
		}
		if (type === 'item' && itemCategory) {
			const categoryMap: Record<string, BadgeVariant> = {
				weapon: 'weapon',
				ability: 'vitality',
				upgrade: 'spirit'
			};
			return categoryMap[itemCategory] || 'default';
		}
		return 'default';
	});

	const badgeLabel = $derived.by(() => {
		if (type === 'hero' && heroType) {
			return heroType;
		}
		if (type === 'item' && itemCategory) {
			const labelMap: Record<string, string> = {
				weapon: 'Weapon',
				ability: 'Vitality',
				upgrade: 'Spirit'
			};
			return labelMap[itemCategory] || itemCategory;
		}
		return null;
	});
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		{#snippet child({ props })}
			<!-- Rendered as a span (not the default anchor) so it is valid when nested
			     inside a clickable card link; hover still opens the preview. -->
			<span
				{...props}
				class="inline-flex cursor-pointer align-middle transition-transform duration-200 hover:scale-105"
			>
				{@render children()}
			</span>
		{/snippet}
	</HoverCard.Trigger>
	<HoverCard.Content class="border-border/60 shadow-primary/5 w-72 shadow-xl">
		<div class="flex gap-4">
			{#if imageSrc}
				<div class="relative">
					<div class="bg-primary/10 absolute inset-0 rounded-lg blur-sm"></div>
					<img
						src={imageSrc}
						alt=""
						class="border-primary/30 bg-card relative size-14 rounded-md border-2 object-cover shadow-md"
					/>
				</div>
			{/if}
			<div class="flex flex-col justify-center gap-1.5">
				<div class="flex items-center gap-2">
					<p class="text-foreground text-base font-semibold tracking-tight">{name}</p>
					{#if badgeLabel}
						<Badge variant={badgeVariant}>{badgeLabel}</Badge>
					{/if}
				</div>
				<a
					href={entityUrl}
					class="text-primary hover:text-primary/80 mt-1 flex items-center gap-1 text-xs font-medium transition-colors"
				>
					View all changes
					<ArrowRight class="size-3" />
				</a>
				{#if onSelect}
					<button
						type="button"
						onclick={onSelect}
						class="text-muted-foreground hover:text-foreground hover:border-primary/40 border-border/60 mt-0.5 flex w-fit items-center gap-1.5 rounded-sm border px-2 py-1 text-xs font-medium transition-colors"
					>
						<FilterIcon class="size-3" />
						Filter by {name}
					</button>
				{/if}
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
