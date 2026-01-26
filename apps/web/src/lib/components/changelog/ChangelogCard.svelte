<script lang="ts">
	import type { EntityIcon } from '$lib/utils/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Zap from '@lucide/svelte/icons/zap';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { scale, fly } from 'svelte/transition';
	import { quintOut, backOut } from 'svelte/easing';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: { heroes: EntityIcon[]; items: EntityIcon[] };
		isLatest?: boolean;
	}

	let { id, date, author, authorImage, icons, isLatest = false }: Props = $props();

	const heroCount = $derived(icons?.heroes?.length ?? 0);
	const itemCount = $derived(icons?.items?.length ?? 0);
	const maxIcons = $derived(isLatest ? 14 : 6);
	const heroIcons = $derived(icons?.heroes?.slice(0, maxIcons) ?? []);
	const itemIcons = $derived(icons?.items?.slice(0, maxIcons) ?? []);
	const heroRemaining = $derived(heroCount - heroIcons.length);
	const itemRemaining = $derived(itemCount - itemIcons.length);
</script>

{#if isLatest}
	<a href="/change/{id}" class="group relative col-span-full mb-8 block">
		<div
			class="clip-corner-lg border-primary/40 hover:border-primary/70 bg-card relative flex flex-col overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl md:flex-row md:items-stretch"
		>
			<!-- Hover gradient -->
			<div
				class="from-primary/0 via-primary/8 to-primary/0 pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-700 group-hover:opacity-100"
			></div>

			<!-- Corner accents -->
			<div class="bg-primary absolute top-0 left-0 z-20 h-16 w-1"></div>
			<div class="bg-primary absolute top-0 left-0 z-20 h-1 w-16"></div>
			<div class="bg-primary/60 absolute right-0 bottom-0 z-20 h-12 w-1"></div>
			<div class="bg-primary/60 absolute right-0 bottom-0 z-20 h-1 w-12"></div>

			<!-- Content -->
			<div class="relative z-10 flex flex-1 flex-col gap-5 p-6 md:p-8">
				<div class="flex items-center gap-4">
					<div
						class="pulse-glow bg-primary/15 border-primary/30 clip-corner-sm inline-flex items-center gap-2 border px-4 py-1.5"
						in:fly={{ x: -20, duration: 500, easing: backOut }}
					>
						<Zap class="text-primary size-4" />
						<span
							class="text-primary font-mono text-xs font-bold tracking-widest uppercase"
							>Latest Patch</span
						>
					</div>
					<div class="bg-primary/20 h-px flex-1"></div>
				</div>

				<h3
					class="font-display text-foreground group-hover:text-primary text-3xl tracking-tight transition-colors duration-300 md:text-4xl"
					in:fly={{ y: 20, duration: 400, delay: 100 }}
				>
					{formatDate(date)}
				</h3>

				<div class="flex items-center gap-3">
					<Avatar.Root
						class="border-primary/30 group-hover:border-primary size-8 border-2 transition-all duration-300"
					>
						<Avatar.Image src={authorImage} alt={author} />
						<Avatar.Fallback class="bg-muted text-xs font-medium"
							>{author.slice(0, 2).toUpperCase()}</Avatar.Fallback
						>
					</Avatar.Root>
					<span class="text-foreground text-sm font-medium">{author}</span>
				</div>

				{#if heroIcons.length > 0 || itemIcons.length > 0}
					<div class="mt-2 flex flex-col gap-3">
						{#each [{ icons: heroIcons, label: 'Heroes', remaining: heroRemaining, offset: 0 }, { icons: itemIcons, label: 'Items', remaining: itemRemaining, offset: heroIcons.length }] as row (row.label)}
							{#if row.icons.length > 0}
								<div class="flex items-center gap-3">
									<span
										class="text-muted-foreground w-14 font-mono text-[10px] tracking-wider uppercase"
										>{row.label}</span
									>
									<div class="flex -space-x-2">
										{#each row.icons as icon, i (icon.id)}
											<img
												src={icon.src}
												alt={icon.alt}
												width="40"
												height="40"
												loading="lazy"
												decoding="async"
												class="border-primary/20 bg-card hover:border-primary size-9 rounded-lg border-2 object-cover shadow-md transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:scale-110"
												in:scale={{
													start: 0,
													duration: 400,
													delay: 100 + (row.offset + i) * 40,
													easing: backOut
												}}
											/>
										{/each}
									</div>
									{#if row.remaining > 0}
										<span class="text-primary font-mono text-sm font-bold"
											>+{row.remaining}</span
										>
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				{/if}

				<div class="border-border/50 mt-auto flex items-center gap-6 border-t pt-4">
					{#if heroCount > 0}
						<span class="flex items-baseline gap-1.5">
							<span class="text-primary font-mono text-2xl font-bold">{heroCount}</span>
							<span class="text-muted-foreground text-sm"
								>hero{heroCount !== 1 ? 'es' : ''}</span
							>
						</span>
					{/if}
					{#if itemCount > 0}
						<span class="flex items-baseline gap-1.5">
							<span class="text-primary font-mono text-2xl font-bold">{itemCount}</span>
							<span class="text-muted-foreground text-sm"
								>item{itemCount !== 1 ? 's' : ''}</span
							>
						</span>
					{/if}
				</div>
			</div>

			<!-- CTA -->
			<div
				class="bg-primary/5 group-hover:bg-primary/10 border-primary/20 relative z-10 flex shrink-0 items-center justify-center border-t p-6 transition-colors duration-300 md:w-56 md:border-t-0 md:border-l md:p-8"
			>
				<div class="flex flex-col items-center gap-3 text-center">
					<div
						class="bg-primary text-primary-foreground pulse-glow flex size-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
					>
						<ArrowRight
							class="size-6 transition-transform duration-300 group-hover:translate-x-1"
						/>
					</div>
					<span class="text-foreground text-sm font-semibold">View Full Patch</span>
				</div>
			</div>
		</div>

		<div class="mt-2 flex items-center gap-4 px-4">
			<div class="bg-primary/30 h-px flex-1"></div>
			<span class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
				>Previous Updates</span
			>
			<div class="bg-primary/30 h-px flex-1"></div>
		</div>
	</a>
{:else}
	<a
		href="/change/{id}"
		class="clip-corner-sm bg-card hover:bg-card-accent/30 border-border hover:border-primary/40 group relative flex min-h-[200px] flex-col overflow-hidden border transition-all duration-300 hover:shadow-xl"
	>
		<!-- Corner accents -->
		<div
			class="bg-primary/40 group-hover:bg-primary absolute top-0 left-0 h-6 w-px transition-colors duration-300"
		></div>
		<div
			class="bg-primary/40 group-hover:bg-primary absolute top-0 left-0 h-px w-6 transition-colors duration-300"
		></div>
		<div
			class="bg-primary/20 group-hover:bg-primary/60 absolute right-0 bottom-0 h-4 w-px transition-colors duration-300"
		></div>
		<div
			class="bg-primary/20 group-hover:bg-primary/60 absolute right-0 bottom-0 h-px w-4 transition-colors duration-300"
		></div>

		<!-- Hover gradient -->
		<div
			class="from-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent transition-all duration-500"
		></div>

		<div class="relative z-10 flex flex-1 flex-col gap-3 p-4">
			<div>
				<div class="mb-1.5 flex items-center gap-2">
					<Calendar
						class="text-muted-foreground group-hover:text-primary size-3.5 shrink-0 transition-colors duration-300"
					/>
					<h3
						class="text-foreground font-display group-hover:text-primary truncate text-base tracking-tight transition-colors duration-300"
					>
						{formatDate(date)}
					</h3>
				</div>
				<div class="text-muted-foreground flex items-center gap-2 text-xs">
					<Avatar.Root
						class="border-primary/20 group-hover:border-primary/50 size-5 border transition-all duration-300"
					>
						<Avatar.Image src={authorImage} alt={author} />
						<Avatar.Fallback class="bg-muted text-[9px] font-medium"
							>{author.slice(0, 2).toUpperCase()}</Avatar.Fallback
						>
					</Avatar.Root>
					<span class="truncate">{author}</span>
				</div>
			</div>

			{#each [{ icons: heroIcons, remaining: heroRemaining, offset: 0, type: 'heroes' }, { icons: itemIcons, remaining: itemRemaining, offset: heroIcons.length, type: 'items' }] as row (row.type)}
				{#if row.icons.length > 0}
					<div class="flex items-center gap-1.5">
						<div class="flex -space-x-1.5">
							{#each row.icons as icon, i (icon.id)}
								<img
									src={icon.src}
									alt={icon.alt}
									width="28"
									height="28"
									loading="lazy"
									decoding="async"
									class="border-border/80 bg-card hover:border-primary/50 size-7 rounded-md border object-cover shadow-sm transition-all duration-200 hover:z-20 hover:-translate-y-0.5 hover:scale-110"
									in:scale={{
										start: 0,
										duration: 250,
										delay: 100 + (row.offset + i) * 40,
										easing: quintOut
									}}
								/>
							{/each}
						</div>
						{#if row.remaining > 0}
							<span
								class="bg-muted/80 text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary flex size-7 items-center justify-center rounded-md font-mono text-[10px] font-semibold transition-all duration-300"
								>+{row.remaining}</span
							>
						{/if}
					</div>
				{/if}
			{/each}

			<div class="border-border/50 mt-auto flex items-center gap-3 border-t pt-3 text-xs">
				{#if heroCount > 0}
					<span class="flex items-baseline gap-1">
						<span class="text-primary font-mono font-bold">{heroCount}</span>
						<span class="text-muted-foreground">hero{heroCount !== 1 ? 'es' : ''}</span>
					</span>
				{/if}
				{#if itemCount > 0}
					<span class="flex items-baseline gap-1">
						<span class="text-primary font-mono font-bold">{itemCount}</span>
						<span class="text-muted-foreground">item{itemCount !== 1 ? 's' : ''}</span>
					</span>
				{/if}
				<ArrowRight
					class="text-primary ml-auto size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
				/>
			</div>
		</div>
	</a>
{/if}
