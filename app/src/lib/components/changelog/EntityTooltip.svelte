<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { BadgeVariant } from '$lib/components/ui/badge/badge.svelte';
	import type { Snippet } from 'svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { toSlug } from '@deadlog/utils';
	import { useQueryClient } from '@tanstack/svelte-query';
	import { queryKeys } from '$lib/queries/keys';

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

	const queryClient = useQueryClient();
	const slug = $derived(toSlug(name));
	const entityUrl = $derived(`/${type}/${slug}`);

	// Track the specific slug that was last prefetched to handle prop changes
	let lastPrefetchedSlug = $state('');
	let debounceTimer: ReturnType<typeof setTimeout>;

	function attemptPrefetch() {
		// Prevent duplicate fetching for the same entity
		if (lastPrefetchedSlug === slug) return;

		const queryKey = type === 'hero' ? queryKeys.hero(slug) : queryKeys.item(slug);

		// Check if we already have fresh data in cache
		const state = queryClient.getQueryState(queryKey);
		if (state?.data && state.dataUpdatedAt > Date.now() - 1000 * 60 * 60) {
			lastPrefetchedSlug = slug;
			return;
		}

		const apiUrl = `/api/${type}/${slug}`;

		queryClient.prefetchQuery({
			queryKey,
			queryFn: () => fetch(apiUrl).then((r) => r.json()),
			staleTime: 60 * 60 * 1000 // 1 hour - matches QueryClient default
		});

		lastPrefetchedSlug = slug;
	}

	function handleInteraction() {
		clearTimeout(debounceTimer);
		// Small delay to prevent spamming while moving mouse across grid
		debounceTimer = setTimeout(attemptPrefetch, 200);
	}

	function handleLeave() {
		clearTimeout(debounceTimer);
	}

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
	<HoverCard.Trigger
		onclick={onSelect}
		onmouseenter={handleInteraction}
		onfocus={handleInteraction}
		onmouseleave={handleLeave}
		onblur={handleLeave}
		class="cursor-pointer transition-all duration-200 hover:scale-105"
		aria-label="Filter by {name}"
	>
		{@render children()}
	</HoverCard.Trigger>
	<HoverCard.Content class="border-border/60 shadow-primary/5 w-72 shadow-xl">
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
			<div class="flex flex-col justify-center gap-1.5">
				<div class="flex items-center gap-2">
					<p class="font-display text-foreground text-base tracking-tight">{name}</p>
					{#if badgeLabel}
						<Badge variant={badgeVariant}>{badgeLabel}</Badge>
					{/if}
				</div>
				<p class="text-muted-foreground text-xs tracking-tight">
					Click to filter by {type}
				</p>
				<a
					href={entityUrl}
					class="text-primary hover:text-primary/80 mt-1 flex items-center gap-1 text-xs font-medium transition-colors"
				>
					View all changes
					<ArrowRight class="size-3" />
				</a>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
