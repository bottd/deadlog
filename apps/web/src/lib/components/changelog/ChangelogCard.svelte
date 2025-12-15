<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
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
		isLatest?: boolean;
	}

	let { id, date, author, authorImage, icons, isLatest = false }: Props = $props();

	const heroCount = $derived(icons?.heroes?.length ?? 0);
	const itemCount = $derived(icons?.items?.length ?? 0);
	const maxPerRow = $derived(isLatest ? 12 : 6);
	const heroIcons = $derived(icons?.heroes?.slice(0, maxPerRow) ?? []);
	const itemIcons = $derived(icons?.items?.slice(0, maxPerRow) ?? []);
	const heroRemaining = $derived(heroCount - heroIcons.length);
	const itemRemaining = $derived(itemCount - itemIcons.length);
</script>

{#if isLatest}
	<a
		href="/change/{id}"
		class="bg-card hover:bg-card-accent/30 border-border hover:border-primary/50 group relative col-span-full flex flex-col overflow-hidden rounded-lg border p-6 transition-all duration-300 hover:shadow-lg md:flex-row md:items-center md:justify-between md:p-8"
	>
		<div class="bg-primary absolute top-0 left-0 h-1 w-full"></div>

		<div class="flex flex-col gap-3">
			<p class="text-muted-foreground text-xs font-medium tracking-wider uppercase">
				Latest Update
			</p>
			<h3
				class="text-foreground font-display group-hover:text-primary text-2xl tracking-tight transition-colors md:text-3xl"
			>
				{formatDate(date)}
			</h3>
			<div class="text-muted-foreground flex items-center gap-2 text-sm">
				<Avatar.Root class="size-6">
					<Avatar.Image src={authorImage} alt={author} />
					<Avatar.Fallback class="bg-muted text-xs">
						{author.slice(0, 2).toUpperCase()}
					</Avatar.Fallback>
				</Avatar.Root>
				<span>{author}</span>
			</div>

			{#if heroIcons.length > 0}
				<div class="mt-2 flex items-center gap-1">
					<div class="flex -space-x-2">
						{#each heroIcons as icon (icon.id)}
							<img
								src={icon.src}
								alt={icon.alt}
								width="36"
								height="36"
								loading="lazy"
								decoding="async"
								class="border-border bg-card size-9 rounded-full border-2 object-cover"
							/>
						{/each}
					</div>
					{#if heroRemaining > 0}
						<span class="text-muted-foreground ml-2 text-sm">+{heroRemaining}</span>
					{/if}
				</div>
			{/if}

			{#if itemIcons.length > 0}
				<div class="mt-2 flex items-center gap-1">
					<div class="flex -space-x-2">
						{#each itemIcons as icon (icon.id)}
							<img
								src={icon.src}
								alt={icon.alt}
								width="36"
								height="36"
								loading="lazy"
								decoding="async"
								class="border-border bg-card size-9 rounded-full border-2 object-cover"
							/>
						{/each}
					</div>
					{#if itemRemaining > 0}
						<span class="text-muted-foreground ml-2 text-sm">+{itemRemaining}</span>
					{/if}
				</div>
			{/if}

			<div class="text-muted-foreground mt-1 flex items-center gap-3 text-sm">
				{#if heroCount > 0}
					<span>{heroCount} hero{heroCount !== 1 ? 'es' : ''}</span>
				{/if}
				{#if itemCount > 0}
					<span>{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
				{/if}
			</div>
		</div>

		<div class="mt-4 md:mt-0">
			<span
				class="bg-primary text-primary-foreground group-hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all"
			>
				View full patch
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
			</span>
		</div>
	</a>
{:else}
	<a
		href="/change/{id}"
		class="bg-card hover:bg-card-accent/50 border-border hover:border-primary/30 group relative flex flex-col overflow-hidden rounded-lg border p-5 transition-all duration-300 hover:shadow-lg"
	>
		<div
			class="bg-primary absolute top-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
		></div>

		<div class="mb-4 flex items-start justify-between gap-3">
			<div>
				<h3
					class="text-foreground font-display group-hover:text-primary text-lg tracking-tight transition-colors"
				>
					{formatDate(date)}
				</h3>
				<div class="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
					<Avatar.Root class="size-5">
						<Avatar.Image src={authorImage} alt={author} />
						<Avatar.Fallback class="bg-muted text-[10px]">
							{author.slice(0, 2).toUpperCase()}
						</Avatar.Fallback>
					</Avatar.Root>
					<span>{author}</span>
				</div>
			</div>
		</div>

		{#if heroIcons.length > 0}
			<div class="mt-auto flex items-center gap-1">
				<div class="flex -space-x-2">
					{#each heroIcons as icon (icon.id)}
						<img
							src={icon.src}
							alt={icon.alt}
							width="28"
							height="28"
							loading="lazy"
							decoding="async"
							class="border-border bg-card size-7 rounded-full border-2 object-cover"
						/>
					{/each}
				</div>
				{#if heroRemaining > 0}
					<span class="text-muted-foreground ml-1 text-xs">+{heroRemaining}</span>
				{/if}
			</div>
		{/if}

		{#if itemIcons.length > 0}
			<div
				class="flex items-center gap-1"
				class:mt-2={heroIcons.length > 0}
				class:mt-auto={heroIcons.length === 0}
			>
				<div class="flex -space-x-2">
					{#each itemIcons as icon (icon.id)}
						<img
							src={icon.src}
							alt={icon.alt}
							width="28"
							height="28"
							loading="lazy"
							decoding="async"
							class="border-border bg-card size-7 rounded-full border-2 object-cover"
						/>
					{/each}
				</div>
				{#if itemRemaining > 0}
					<span class="text-muted-foreground ml-1 text-xs">+{itemRemaining}</span>
				{/if}
			</div>
		{/if}

		<div class="text-muted-foreground mt-3 flex items-center gap-3 text-xs">
			{#if heroCount > 0}
				<span>{heroCount} hero{heroCount !== 1 ? 'es' : ''}</span>
			{/if}
			{#if itemCount > 0}
				<span>{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
			{/if}
		</div>
	</a>
{/if}
