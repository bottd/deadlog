<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Calendar from '@lucide/svelte/icons/calendar';

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
		class="hover:border-primary/40 hover:shadow-primary/5 relative h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
	>
		<!-- Subtle top accent line that reveals on hover -->
		<div
			class="bg-primary absolute top-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
		></div>

		<Card.Content class="relative z-10 flex h-full flex-col gap-4 p-5">
			<!-- Header: Date and Author -->
			<div class="flex items-center justify-between gap-3">
				<div class="flex items-center gap-2">
					<Calendar
						class="text-muted-foreground group-hover:text-primary size-3.5 transition-colors"
					/>
					<time
						class="text-foreground font-display group-hover:text-primary text-base leading-tight tracking-tight transition-colors"
					>
						{formatDate(date)}
					</time>
				</div>
				<div class="text-muted-foreground flex items-center gap-2 text-sm">
					<Avatar.Root
						class="border-primary/20 group-hover:border-primary/40 size-6 border transition-all"
					>
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
							<div
								class="transition-transform duration-200 hover:z-20 hover:scale-125"
								style="z-index: {displayEntities.length - i}"
							>
								<img
									src={entity.src}
									alt={entity.alt}
									width="36"
									height="36"
									loading="lazy"
									decoding="async"
									class="ring-card size-9 rounded-full object-cover shadow-sm ring-2"
								/>
							</div>
						{/each}
					</div>
					{#if entityOverflow > 0}
						<span
							class="bg-muted text-muted-foreground ring-card group-hover:bg-primary/10 group-hover:text-primary ml-1.5 flex size-9 items-center justify-center rounded-full text-xs font-semibold ring-2 transition-all"
						>
							+{entityOverflow}
						</span>
					{/if}
				</div>
			{/if}

			<!-- Summary badges -->
			<div class="flex flex-wrap gap-2">
				{#if heroes.length > 0}
					<Badge
						variant="secondary"
						class="group-hover:border-primary/30 text-xs transition-all"
					>
						{heroes.length} hero{heroes.length !== 1 ? 'es' : ''}
					</Badge>
				{/if}
				{#if items.length > 0}
					<Badge
						variant="secondary"
						class="group-hover:border-primary/30 text-xs transition-all"
					>
						{items.length} item{items.length !== 1 ? 's' : ''}
					</Badge>
				{/if}
			</div>

			<!-- CTA -->
			<div
				class="text-muted-foreground group-hover:text-primary mt-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
			>
				<span>View changes</span>
				<ArrowRight
					class="size-4 transition-transform duration-300 group-hover:translate-x-1"
				/>
			</div>
		</Card.Content>

		<!-- Subtle gradient overlay on hover -->
		<div
			class="from-primary/0 to-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br transition-opacity duration-300 group-hover:to-transparent"
		></div>
	</Card.Root>
</a>
