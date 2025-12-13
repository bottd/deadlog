<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: {
			heroes: EntityIcon[];
			items: EntityIcon[];
		};
	}

	let { id, date, author, authorImage, icons }: Props = $props();

	const maxOverlappingIcons = 8;

	const heroes = $derived(icons?.heroes ?? []);
	const items = $derived(icons?.items ?? []);

	// Combine heroes and items for overlapping display
	const allEntities = $derived([...heroes, ...items]);
	const displayEntities = $derived(allEntities.slice(0, maxOverlappingIcons));
	const entityOverflow = $derived(Math.max(0, allEntities.length - maxOverlappingIcons));
</script>

<a href="/change/{id}" class="group block h-full">
	<Card.Root
		class="hover:border-primary/50 h-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
	>
		<Card.Content class="flex h-full flex-col gap-4 p-5">
			<!-- Header: Date and Author -->
			<div class="flex items-center justify-between gap-3">
				<time class="text-foreground font-display text-lg leading-tight tracking-tight">
					{formatDate(date)}
				</time>
				<div class="text-muted-foreground flex items-center gap-2 text-sm">
					<Avatar.Root class="border-primary/30 size-6 border">
						<Avatar.Image src={authorImage} alt={author} />
						<Avatar.Fallback class="bg-muted text-xs">
							{author.slice(0, 2).toUpperCase()}
						</Avatar.Fallback>
					</Avatar.Root>
					<span class="hidden tracking-tight sm:inline">{author}</span>
				</div>
			</div>

			<!-- Entity Icons - Overlapping style for visual density -->
			{#if displayEntities.length > 0}
				<div class="flex items-center">
					<div class="flex -space-x-2">
						{#each displayEntities as entity, i (entity.id)}
							<img
								src={entity.src}
								alt={entity.alt}
								width="36"
								height="36"
								loading="lazy"
								decoding="async"
								class="ring-card size-9 rounded-full object-cover ring-2 transition-transform hover:z-10 hover:scale-110"
								style="z-index: {displayEntities.length - i}"
							/>
						{/each}
					</div>
					{#if entityOverflow > 0}
						<span
							class="bg-muted text-muted-foreground ring-card ml-1 flex size-9 items-center justify-center rounded-full text-xs font-semibold ring-2"
						>
							+{entityOverflow}
						</span>
					{/if}
				</div>
			{/if}

			<!-- Summary badges -->
			<div class="flex flex-wrap gap-2">
				{#if heroes.length > 0}
					<Badge variant="secondary" class="text-xs">
						{heroes.length} hero{heroes.length !== 1 ? 'es' : ''}
					</Badge>
				{/if}
				{#if items.length > 0}
					<Badge variant="secondary" class="text-xs">
						{items.length} item{items.length !== 1 ? 's' : ''}
					</Badge>
				{/if}
			</div>

			<!-- CTA -->
			<div
				class="text-muted-foreground group-hover:text-primary mt-auto flex items-center gap-1.5 text-sm font-medium transition-colors"
			>
				<span>View changes</span>
				<ArrowRight
					class="size-4 transition-transform duration-200 group-hover:translate-x-1"
				/>
			</div>
		</Card.Content>
	</Card.Root>
</a>
