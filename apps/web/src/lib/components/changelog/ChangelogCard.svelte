<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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

	// Stagger delay for icon animations
	const iconDelay = $derived((i: number) => i * 30);
</script>

{#if isLatest}
	<a
		href="/change/{id}"
		class="bg-card hover:bg-card-accent/20 border-primary/30 hover:border-primary/50 group relative col-span-full flex flex-col overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-xl md:flex-row md:items-center md:justify-between md:p-8"
	>
		<!-- Animated gradient background on hover -->
		<div
			class="from-primary/0 via-primary/5 to-primary/0 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			in:scale={{ duration: 500 }}
		></div>

		<!-- Top accent bar -->
		<div
			class="bg-primary via-primary absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent"
		></div>

		<div class="relative z-10 flex flex-col gap-4">
			<!-- Latest badge -->
			<div
				class="bg-primary/10 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1"
				in:scale={{ start: 0.8, duration: 400, easing: quintOut }}
			>
				<Sparkles class="text-primary size-3.5 animate-pulse" />
				<p class="text-primary text-xs font-bold tracking-wider uppercase">
					Latest Update
				</p>
			</div>

			<h3
				class="text-foreground font-display group-hover:text-primary text-2xl tracking-tight transition-colors md:text-3xl"
			>
				{formatDate(date)}
			</h3>

			<div class="text-muted-foreground flex items-center gap-2 text-sm">
				<Avatar.Root
					class="border-primary/20 group-hover:border-primary/40 size-7 border transition-all"
				>
					<Avatar.Image src={authorImage} alt={author} />
					<Avatar.Fallback class="bg-muted text-xs">
						{author.slice(0, 2).toUpperCase()}
					</Avatar.Fallback>
				</Avatar.Root>
				<span class="font-medium">{author}</span>
			</div>

			<!-- Entity icons -->
			{#if heroIcons.length > 0 || itemIcons.length > 0}
				<div class="flex flex-wrap items-center gap-3">
					{#if heroIcons.length > 0}
						<div class="flex items-center gap-2">
							<div class="flex -space-x-2">
								{#each heroIcons as icon, i (icon.id)}
									<img
										src={icon.src}
										alt={icon.alt}
										width="36"
										height="36"
										loading="lazy"
										decoding="async"
										class="border-border bg-card size-8 rounded-full border-2 object-cover shadow-sm transition-transform hover:z-20 hover:scale-110"
										in:scale={{
											start: 0,
											duration: 300,
											delay: iconDelay(i),
											easing: quintOut
										}}
									/>
								{/each}
							</div>
							{#if heroRemaining > 0}
								<span class="text-muted-foreground text-sm font-medium"
									>+{heroRemaining}</span
								>
							{/if}
						</div>
					{/if}

					{#if itemIcons.length > 0}
						<div class="flex items-center gap-2">
							<div class="flex -space-x-2">
								{#each itemIcons as icon, i (icon.id)}
									<img
										src={icon.src}
										alt={icon.alt}
										width="36"
										height="36"
										loading="lazy"
										decoding="async"
										class="border-border bg-card size-8 rounded-full border-2 object-cover shadow-sm transition-transform hover:z-20 hover:scale-110"
										in:scale={{
											start: 0,
											duration: 300,
											delay: iconDelay(i + heroIcons.length),
											easing: quintOut
										}}
									/>
								{/each}
							</div>
							{#if itemRemaining > 0}
								<span class="text-muted-foreground text-sm font-medium"
									>+{itemRemaining}</span
								>
							{/if}
						</div>
					{/if}
				</div>
			{/if}

			<!-- Summary counts -->
			<div class="text-muted-foreground flex items-center gap-4 text-sm">
				{#if heroCount > 0}
					<span class="flex items-center gap-1">
						<span class="text-foreground font-semibold">{heroCount}</span>
						hero{heroCount !== 1 ? 'es' : ''}
					</span>
				{/if}
				{#if itemCount > 0}
					<span class="flex items-center gap-1">
						<span class="text-foreground font-semibold">{itemCount}</span>
						item{itemCount !== 1 ? 's' : ''}
					</span>
				{/if}
			</div>
		</div>

		<div class="relative z-10 mt-4 shrink-0 md:mt-0">
			<span
				class="bg-primary text-primary-foreground group-hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
			>
				View full patch
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</span>
		</div>
	</a>
{:else}
	<a
		href="/change/{id}"
		class="bg-card hover:bg-card-accent/50 border-border hover:border-primary/30 group relative flex min-h-[220px] flex-col overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg"
	>
		<!-- Top accent line that fills on hover -->
		<div
			class="bg-primary absolute top-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
		></div>

		<!-- Hover gradient overlay -->
		<div
			class="from-primary/0 to-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br transition-opacity duration-300 group-hover:to-transparent"
		></div>

		<div class="relative z-10 flex flex-col gap-3 p-5">
			<div class="flex items-start justify-between gap-3">
				<div>
					<div class="mb-1 flex items-center gap-1.5">
						<Calendar
							class="text-muted-foreground group-hover:text-primary size-3 transition-colors"
						/>
						<h3
							class="text-foreground font-display group-hover:text-primary text-lg tracking-tight transition-colors"
						>
							{formatDate(date)}
						</h3>
					</div>
					<div class="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
						<Avatar.Root
							class="border-primary/20 group-hover:border-primary/40 size-5 border transition-all"
						>
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
				<div class="flex items-center gap-1">
					<div class="flex -space-x-2">
						{#each heroIcons as icon, i (icon.id)}
							<img
								src={icon.src}
								alt={icon.alt}
								width="28"
								height="28"
								loading="lazy"
								decoding="async"
								class="border-border bg-card size-7 rounded-full border-2 object-cover shadow-sm transition-transform hover:z-20 hover:scale-125"
								in:scale={{
									start: 0,
									duration: 200,
									delay: iconDelay(i),
									easing: quintOut
								}}
							/>
						{/each}
					</div>
					{#if heroRemaining > 0}
						<span
							class="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary ml-1.5 flex size-7 items-center justify-center rounded-full text-[10px] font-semibold transition-all"
							>+{heroRemaining}</span
						>
					{/if}
				</div>
			{/if}

			{#if itemIcons.length > 0}
				<div class="flex items-center gap-1" class:mt-2={heroIcons.length > 0}>
					<div class="flex -space-x-2">
						{#each itemIcons as icon, i (icon.id)}
							<img
								src={icon.src}
								alt={icon.alt}
								width="28"
								height="28"
								loading="lazy"
								decoding="async"
								class="border-border bg-card size-7 rounded-full border-2 object-cover shadow-sm transition-transform hover:z-20 hover:scale-125"
								in:scale={{
									start: 0,
									duration: 200,
									delay: iconDelay(i + heroIcons.length),
									easing: quintOut
								}}
							/>
						{/each}
					</div>
					{#if itemRemaining > 0}
						<span
							class="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary ml-1.5 flex size-7 items-center justify-center rounded-full text-[10px] font-semibold transition-all"
							>+{itemRemaining}</span
						>
					{/if}
				</div>
			{/if}

			<div class="text-muted-foreground mt-auto flex items-center gap-3 text-xs">
				{#if heroCount > 0}
					<span class="flex items-center gap-1">
						<span class="text-foreground font-semibold">{heroCount}</span>
						hero{heroCount !== 1 ? 'es' : ''}
					</span>
				{/if}
				{#if itemCount > 0}
					<span class="flex items-center gap-1">
						<span class="text-foreground font-semibold">{itemCount}</span>
						item{itemCount !== 1 ? 's' : ''}
					</span>
				{/if}
				<span
					class="text-primary ml-auto flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100"
				>
					View
					<ArrowRight class="size-3" />
				</span>
			</div>
		</div>
	</a>
{/if}
