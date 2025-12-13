<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';

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

	const maxOverlappingIcons = 12;

	const heroes = $derived(icons?.heroes ?? []);
	const items = $derived(icons?.items ?? []);

	const allEntities = $derived([...heroes, ...items]);
	const displayEntities = $derived(allEntities.slice(0, maxOverlappingIcons));
	const entityOverflow = $derived(Math.max(0, allEntities.length - maxOverlappingIcons));
</script>

<a href="/change/{id}" class="group block">
	<div
		class="from-primary/5 via-card to-card border-primary/20 hover:border-primary/40 hover:shadow-primary/5 relative overflow-hidden rounded-xl border-2 bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
	>
		<!-- Accent glow -->
		<div
			class="bg-primary/10 pointer-events-none absolute -top-20 -right-20 size-40 rounded-full blur-3xl"
		></div>

		<div
			class="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
		>
			<!-- Left: Label + Date + Author -->
			<div class="flex flex-col gap-3">
				<div class="flex items-center gap-2">
					<Badge variant="default" class="bg-primary/90 gap-1.5 px-2.5 py-1">
						<Sparkles class="size-3.5" />
						<span class="text-xs font-semibold tracking-wide uppercase"
							>Latest Update</span
						>
					</Badge>
				</div>

				<div class="flex items-center gap-4">
					<time
						class="text-foreground font-display text-2xl leading-tight tracking-tight"
					>
						{formatDate(date)}
					</time>
					<div class="text-muted-foreground flex items-center gap-2 text-sm">
						<Avatar.Root class="border-primary/30 size-7 border">
							<Avatar.Image src={authorImage} alt={author} />
							<Avatar.Fallback class="bg-muted text-xs">
								{author.slice(0, 2).toUpperCase()}
							</Avatar.Fallback>
						</Avatar.Root>
						<span class="tracking-tight">{author}</span>
					</div>
				</div>

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
			</div>

			<!-- Right: Entity Icons + CTA -->
			<div class="flex flex-col items-start gap-4 md:items-end">
				{#if displayEntities.length > 0}
					<div class="flex items-center">
						<div class="flex -space-x-2.5">
							{#each displayEntities as entity, i (entity.id)}
								<img
									src={entity.src}
									alt={entity.alt}
									width="44"
									height="44"
									loading="eager"
									decoding="async"
									class="ring-card size-11 rounded-full object-cover ring-2 transition-transform hover:z-10 hover:scale-110"
									style="z-index: {displayEntities.length - i}"
								/>
							{/each}
						</div>
						{#if entityOverflow > 0}
							<span
								class="bg-muted text-muted-foreground ring-card ml-1 flex size-11 items-center justify-center rounded-full text-sm font-semibold ring-2"
							>
								+{entityOverflow}
							</span>
						{/if}
					</div>
				{/if}

				<div
					class="text-primary flex items-center gap-2 text-sm font-semibold transition-colors"
				>
					<span>View full changelog</span>
					<ArrowRight
						class="size-4 transition-transform duration-200 group-hover:translate-x-1"
					/>
				</div>
			</div>
		</div>
	</div>
</a>
