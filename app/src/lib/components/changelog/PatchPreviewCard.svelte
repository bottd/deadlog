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
		/** Accent colour (a `var(--type-*)`/`var(--item-*)` token) of the entity this history belongs to. */
		accent?: string;
		/** Number of change bullets recorded for this entity in this patch. */
		changeCount?: number;
	}

	let {
		id,
		date,
		author,
		authorImage,
		icons,
		accent = 'var(--primary)',
		changeCount = 0
	}: Props = $props();

	const heroCount = $derived(icons?.heroes.length ?? 0);
	const itemCount = $derived(icons?.items.length ?? 0);
</script>

<a
	href="/change/{id}"
	class="clip-corner-sm bg-card hover:bg-card-accent/30 group relative block h-full overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
	style:border-color="color-mix(in oklab, {accent} 28%, var(--border))"
>
	<CornerAccents tlSize="1.25rem" brSize="0.75rem" color={accent} />

	<!-- Accent top rule -->
	<div
		class="absolute inset-x-0 top-0 h-0.5"
		style:background-color={accent}
		style:opacity="0.65"
		aria-hidden="true"
	></div>

	<!-- Hover wash -->
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style:background="linear-gradient(to bottom right, color-mix(in oklab, {accent} 8%, transparent),
		transparent)"
		aria-hidden="true"
	></div>

	<div class="relative z-10 flex h-full flex-col gap-3 p-4">
		<div class="flex items-start justify-between gap-2">
			<div class="flex items-center gap-2">
				<Calendar class="text-muted-foreground size-3.5 shrink-0" />
				<time
					class="text-foreground group-hover:text-foreground text-sm leading-tight font-semibold tracking-tight"
				>
					{formatDate(date)}
				</time>
			</div>
			<Avatar.Root class="border-border/60 size-5 border">
				<Avatar.Image src={authorImage} alt={author} />
				<Avatar.Fallback class="bg-muted text-[9px] font-medium"
					>{author.slice(0, 2).toUpperCase()}</Avatar.Fallback
				>
			</Avatar.Root>
		</div>

		<!-- Primary signal: how many changes this entity got in this patch. -->
		<div class="mt-1">
			{#if changeCount > 0}
				<div class="flex items-baseline gap-1.5">
					<span class="font-mono text-2xl leading-none font-bold" style:color={accent}
						>{changeCount}</span
					>
					<span class="text-muted-foreground text-sm"
						>change{changeCount !== 1 ? 's' : ''}</span
					>
				</div>
			{:else}
				<span class="text-muted-foreground text-sm font-medium">Listed in this patch</span
				>
			{/if}

			<!-- Secondary, honest context: the wider patch scope. -->
			<p class="text-muted-foreground/70 mt-1.5 font-mono text-[10px] tracking-wider">
				in a patch of {heroCount} hero{heroCount !== 1 ? 'es' : ''} · {itemCount} item{itemCount !==
				1
					? 's'
					: ''}
			</p>
		</div>

		<div
			class="text-muted-foreground group-hover:text-foreground mt-auto flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
		>
			<span>View changes</span>
			<ArrowRight
				class="size-3.5 -translate-x-1 transition-transform duration-300 group-hover:translate-x-0"
			/>
		</div>
	</div>
</a>
