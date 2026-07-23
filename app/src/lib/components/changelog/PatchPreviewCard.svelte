<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import { entityPatchHref, type EntityFilterContext } from './entityContext';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Calendar from '@lucide/svelte/icons/calendar';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		entity: EntityFilterContext & { image?: string };
		changeCount: number | null;
		accent?: string;
	}

	let {
		id,
		date,
		author,
		authorImage,
		entity,
		changeCount,
		accent = 'var(--signal)'
	}: Props = $props();

	const href = $derived(entityPatchHref(id, entity));
	const countSummary = $derived(
		changeCount === null
			? 'change count unavailable'
			: `${changeCount} change${changeCount === 1 ? '' : 's'}`
	);
</script>

<a
	{href}
	aria-label="View {entity.name} in the {formatDate(date)} patch, {countSummary}"
	class="clip-corner-sm bg-card hover:bg-card-accent/40 focus-visible:ring-ring group relative block h-full overflow-hidden border transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
	style:border-color="color-mix(in oklab, {accent} 32%, var(--border))"
>
	<CornerAccents
		tlSize="1.5rem"
		brSize="1rem"
		tlColor="bg-signal/50"
		brColor="bg-primary/30"
		tlHover="group-hover:bg-signal"
		brHover="group-hover:bg-primary/60"
	/>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-px"
		style:background="linear-gradient(to right, {accent}, transparent 75%)"
		aria-hidden="true"
	></div>

	<div class="relative z-10 flex h-full min-h-44 flex-col gap-4 p-4">
		<div class="flex items-start justify-between gap-3">
			<div class="flex min-w-0 items-center gap-2">
				<Calendar class="text-signal size-3.5 shrink-0" />
				<time
					datetime={date.toISOString()}
					class="text-foreground truncate text-sm leading-tight font-semibold"
				>
					{formatDate(date)}
				</time>
			</div>
			<Avatar.Root class="border-signal/25 size-6 shrink-0 border">
				<Avatar.Image src={authorImage} alt={author} />
				<Avatar.Fallback class="bg-muted text-[9px] font-medium">
					{author.slice(0, 2).toUpperCase()}
				</Avatar.Fallback>
			</Avatar.Root>
		</div>

		<div class="flex items-center gap-3">
			{#if entity.image}
				<img
					src={entity.image}
					alt=""
					width="44"
					height="44"
					loading="lazy"
					decoding="async"
					class="bg-muted/40 size-11 shrink-0 rounded-md border {entity.type === 'item'
						? 'object-contain p-1'
						: 'object-cover'}"
					style:border-color="color-mix(in oklab, {accent} 40%, var(--border))"
				/>
			{/if}
			<div class="min-w-0">
				{#if changeCount === null}
					<p
						class="text-muted-foreground font-mono text-xs font-semibold tracking-wide uppercase"
					>
						Count unavailable
					</p>
					<p class="text-muted-foreground mt-1 truncate text-xs">{entity.name}</p>
				{:else}
					<div class="flex items-baseline gap-1.5">
						<span class="font-mono text-3xl leading-none font-bold" style:color={accent}>
							{changeCount}
						</span>
						<span class="text-muted-foreground text-sm">
							change{changeCount === 1 ? '' : 's'}
						</span>
					</div>
					<p class="text-muted-foreground mt-1 truncate text-xs">to {entity.name}</p>
				{/if}
			</div>
		</div>

		<div
			class="text-muted-foreground group-hover:text-signal mt-auto flex items-center justify-between gap-3 text-xs font-medium transition-colors"
		>
			<span class="truncate">Posted by {author}</span>
			<span class="flex shrink-0 items-center gap-1">
				View patch
				<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-0.5" />
			</span>
		</div>
	</div>
</a>
