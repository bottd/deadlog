<script lang="ts">
	import type { EntityIcon } from '$lib/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { formatDate } from '@deadlog/utils';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Calendar from '@lucide/svelte/icons/calendar';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: { heroes: EntityIcon[]; items: EntityIcon[] };
	}

	let { id, date, author, authorImage, icons }: Props = $props();

	const heroes = $derived(icons?.heroes ?? []);
	const items = $derived(icons?.items ?? []);
	const allEntities = $derived([...heroes, ...items]);
	const displayEntities = $derived(allEntities.slice(0, 6));
	const overflow = $derived(Math.max(0, allEntities.length - 6));
</script>

<a
	href="/change/{id}"
	class="clip-corner-sm bg-card hover:bg-card-accent/30 border-border hover:border-primary/40 group relative block h-full overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
	<CornerAccents
		tlSize="1.25rem"
		brSize="0.75rem"
		tlColor="bg-primary/30"
		brColor="bg-primary/15"
		tlHover="group-hover:bg-primary/70"
		brHover="group-hover:bg-primary/50"
	/>

	<!-- Hover gradient -->
	<div
		class="from-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent transition-all duration-500"
	></div>

	<div class="relative z-10 flex h-full flex-col gap-3 p-4">
		<div class="flex items-start justify-between gap-2">
			<div class="flex items-center gap-2">
				<Calendar
					class="text-muted-foreground group-hover:text-primary size-3.5 shrink-0 transition-colors duration-300"
				/>
				<time
					class="text-foreground font-display group-hover:text-primary text-sm leading-tight tracking-tight transition-colors duration-300"
				>
					{formatDate(date)}
				</time>
			</div>
			<Avatar.Root
				class="border-primary/20 group-hover:border-primary/50 size-5 border transition-all duration-300"
			>
				<Avatar.Image src={authorImage} alt={author} />
				<Avatar.Fallback class="bg-muted text-[9px] font-medium"
					>{author.slice(0, 2).toUpperCase()}</Avatar.Fallback
				>
			</Avatar.Root>
		</div>

		{#if displayEntities.length > 0}
			<div class="flex items-center">
				<div class="flex -space-x-1.5">
					{#each displayEntities as entity, i (entity.id)}
						<img
							src={entity.src}
							alt={entity.alt}
							width="32"
							height="32"
							loading="lazy"
							decoding="async"
							class="border-border/80 bg-card hover:border-primary/50 size-8 rounded-md border object-cover shadow-sm transition-all duration-200 hover:z-20 hover:-translate-y-0.5 hover:scale-110"
							style="z-index: {displayEntities.length - i}"
						/>
					{/each}
				</div>
				{#if overflow > 0}
					<span
						class="bg-muted/80 text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary ml-1.5 flex size-8 items-center justify-center rounded-md font-mono text-[10px] font-semibold transition-all duration-300"
					>
						+{overflow}
					</span>
				{/if}
			</div>
		{/if}

		<div class="flex items-center gap-3 text-xs">
			{#if heroes.length > 0}
				<span class="flex items-baseline gap-1">
					<span class="text-primary font-mono font-bold">{heroes.length}</span>
					<span class="text-muted-foreground">hero{heroes.length !== 1 ? 'es' : ''}</span>
				</span>
			{/if}
			{#if items.length > 0}
				<span class="flex items-baseline gap-1">
					<span class="text-primary font-mono font-bold">{items.length}</span>
					<span class="text-muted-foreground">item{items.length !== 1 ? 's' : ''}</span>
				</span>
			{/if}
		</div>

		<div
			class="text-muted-foreground group-hover:text-primary mt-auto flex items-center gap-1.5 text-xs font-medium transition-all duration-300"
		>
			<span class="opacity-0 transition-opacity group-hover:opacity-100">View</span>
			<ArrowRight
				class="size-3.5 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
			/>
		</div>
	</div>
</a>
