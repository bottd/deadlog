<script lang="ts">
	import type { EntityIcon } from '$lib/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Zap from '@lucide/svelte/icons/zap';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
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

	const max = $derived(isLatest ? 14 : 6);
	const heroes = $derived(icons?.heroes ?? []);
	const items = $derived(icons?.items ?? []);

	const rows = $derived(
		[
			{
				list: heroes.slice(0, max),
				label: 'Heroes',
				type: 'heroes',
				extra: heroes.length - Math.min(heroes.length, max),
				offset: 0
			},
			{
				list: items.slice(0, max),
				label: 'Items',
				type: 'items',
				extra: items.length - Math.min(items.length, max),
				offset: heroes.slice(0, max).length
			}
		].filter((r) => r.list.length > 0)
	);

	const counts = $derived(
		[
			{ n: heroes.length, s: 'hero', p: 'heroes' },
			{ n: items.length, s: 'item', p: 'items' }
		].filter((c) => c.n > 0)
	);

	const initials = $derived(author.slice(0, 2).toUpperCase());
</script>

{#if isLatest}
	<a href="/change/{id}" class="group relative col-span-full mb-8 block">
		<div
			class="clip-corner-lg border-primary/40 hover:border-primary/70 bg-card card-glow relative flex flex-col overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl md:flex-row md:items-stretch"
		>
			<div
				class="from-primary/0 via-primary/8 to-primary/0 pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-700 group-hover:opacity-100"
			></div>
			<CornerAccents
				tlSize="4rem"
				brSize="3rem"
				tlColor="bg-primary"
				brColor="bg-primary/60"
				thickness="0.125rem"
				class="z-20"
			/>

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
					class="font-display text-foreground group-hover:text-primary heading-glow text-3xl font-medium tracking-wide transition-colors duration-300 md:text-4xl"
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
							>{initials}</Avatar.Fallback
						>
					</Avatar.Root>
					<span class="text-foreground text-sm font-medium">{author}</span>
				</div>

				{#if rows.length > 0}
					<div class="mt-2 flex flex-col gap-3">
						{#each rows as row (row.type)}
							<div class="flex items-center gap-3">
								<span
									class="text-muted-foreground w-14 font-mono text-xs tracking-wider uppercase"
									>{row.label}</span
								>
								<div class="flex -space-x-2">
									{#each row.list as icon, i (icon.id)}
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
								{#if row.extra > 0}
									<span class="text-primary font-mono text-sm font-bold"
										>+{row.extra}</span
									>
								{/if}
							</div>
						{/each}
					</div>
				{/if}

				<div class="border-border/50 mt-auto flex items-center gap-6 border-t pt-4">
					{#each counts as c (c.s)}
						<span class="flex items-baseline gap-1.5">
							<span class="text-primary font-mono text-2xl font-bold">{c.n}</span>
							<span class="text-muted-foreground text-sm">{c.n === 1 ? c.s : c.p}</span>
						</span>
					{/each}
				</div>
			</div>

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
		<CornerAccents
			tlSize="1.5rem"
			brSize="1rem"
			tlHover="group-hover:bg-primary"
			brHover="group-hover:bg-primary/60"
			thickness="0.125rem"
		/>
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
						class="text-foreground group-hover:text-primary truncate text-base font-semibold tracking-tight transition-colors duration-300"
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
							>{initials}</Avatar.Fallback
						>
					</Avatar.Root>
					<span class="truncate">{author}</span>
				</div>
			</div>

			{#each rows as row (row.type)}
				<div class="flex items-center gap-1.5">
					<div class="flex -space-x-1.5">
						{#each row.list as icon, i (icon.id)}
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
					{#if row.extra > 0}
						<span
							class="bg-muted/80 text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary flex size-7 items-center justify-center rounded-md font-mono text-[10px] font-semibold transition-all duration-300"
							>+{row.extra}</span
						>
					{/if}
				</div>
			{/each}

			<div class="border-border/50 mt-auto flex items-center gap-3 border-t pt-3 text-xs">
				{#each counts as c (c.s)}
					<span class="flex items-baseline gap-1">
						<span class="text-primary font-mono font-bold">{c.n}</span>
						<span class="text-muted-foreground">{c.n === 1 ? c.s : c.p}</span>
					</span>
				{/each}
				<ArrowRight
					class="text-primary ml-auto size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
				/>
			</div>
		</div>
	</a>
{/if}
