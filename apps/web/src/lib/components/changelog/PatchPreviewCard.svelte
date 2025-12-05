<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
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

	const maxIconsPerRow = 6;

	const heroes = $derived(icons?.heroes ?? []);
	const items = $derived(icons?.items ?? []);

	const displayHeroes = $derived(heroes.slice(0, maxIconsPerRow));
	const heroOverflow = $derived(Math.max(0, heroes.length - maxIconsPerRow));

	const displayItems = $derived(items.slice(0, maxIconsPerRow));
	const itemOverflow = $derived(Math.max(0, items.length - maxIconsPerRow));
</script>

{#snippet iconRow(entities: EntityIcon[], overflow: number)}
	<div class="flex items-center gap-1">
		{#each entities as entity (entity.id)}
			<img
				src={entity.src}
				alt={entity.alt}
				width="28"
				height="28"
				loading="lazy"
				decoding="async"
				class="border-border bg-card size-7 rounded-full border-2 object-cover"
			/>
		{/each}
		{#if overflow > 0}
			<span
				class="border-border bg-muted text-muted-foreground flex size-7 items-center justify-center rounded-full border-2 text-xs font-medium"
			>
				+{overflow}
			</span>
		{/if}
	</div>
{/snippet}

<a href="/change/{id}" class="group block">
	<Card.Root
		class="hover:border-primary/50 h-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
	>
		<Card.Content class="flex h-full flex-col gap-4 p-5">
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

			<div class="flex flex-1 flex-col gap-2">
				{#if displayHeroes.length > 0}
					{@render iconRow(displayHeroes, heroOverflow)}
				{/if}
				{#if displayItems.length > 0}
					{@render iconRow(displayItems, itemOverflow)}
				{/if}
			</div>

			<div
				class="text-muted-foreground group-hover:text-primary flex items-center gap-1.5 text-sm font-medium transition-colors"
			>
				<span>View changes</span>
				<ArrowRight
					class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
				/>
			</div>
		</Card.Content>
	</Card.Root>
</a>
