<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';

	let { isNew = false, ...patch }: PatchCardProps & { isNew?: boolean } = $props();

	const view = $derived(patchCardView(patch));
	const links = $derived(patchCardHrefs(patch));
	// ponytail: MAJOR is the only reliable tier — `category` is uniformly "patch"
	// and entity count is a poor signal for "small patch", so no HOTFIX tier.
	const isMajor = $derived(!!patch.majorUpdate);
</script>

<div
	class="clip-corner-sm bg-card hover:bg-card-accent/30 group relative flex h-full min-h-[200px] flex-col overflow-hidden border transition-all duration-200 hover:shadow-xl active:scale-[0.98] {isMajor
		? 'border-primary/50 hover:border-primary/80'
		: 'border-border hover:border-signal/45'}"
>
	<CornerAccents
		tlSize="1.5rem"
		brSize="1rem"
		tlColor={isMajor ? 'bg-primary' : 'bg-signal/45'}
		brColor={isMajor ? 'bg-primary/30' : 'bg-signal/20'}
		tlHover={isMajor ? '' : 'group-hover:bg-signal'}
		brHover={isMajor ? 'group-hover:bg-primary/60' : 'group-hover:bg-signal/60'}
		thickness="0.125rem"
	/>
	{#if isNew}
		<span
			class="bg-primary text-primary-foreground absolute top-0 right-0 z-20 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest uppercase"
		>
			New
		</span>
	{/if}

	<div class="border-border/70 relative h-28 shrink-0 overflow-hidden border-b">
		{#if patch.previewImage}
			<img
				data-patch-preview
				src={patch.previewImage}
				alt=""
				width="640"
				height="360"
				loading="lazy"
				decoding="async"
				class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div
				class="from-card/0 via-card/10 to-card/55 pointer-events-none absolute inset-0 bg-gradient-to-b"
				aria-hidden="true"
			></div>
		{:else}
			<img
				src={view.fallbackImage}
				alt=""
				width="640"
				height="360"
				loading="lazy"
				decoding="async"
				class="size-full object-cover opacity-25"
			/>
		{/if}
	</div>
	<div
		class="from-primary/0 group-hover:from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent transition-all duration-200"
	></div>

	<div class="z-10 flex flex-1 flex-col gap-3 p-4">
		<div>
			<div class="mb-1.5 flex items-center gap-2">
				<Calendar
					class="text-muted-foreground group-hover:text-primary size-3.5 shrink-0 transition-colors duration-300"
				/>
				<h2
					class="text-foreground group-hover:text-primary min-w-0 truncate text-base font-semibold tracking-tight transition-colors duration-300"
				>
					<!-- Stretched link — see FeaturedPatchCard. -->
					<a
						href={links.href}
						aria-label={view.accessibleLabel}
						class="focus-visible:outline-primary after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2"
					>
						{formatDate(patch.date)}
					</a>
				</h2>
				{#if isMajor}
					<span
						class="bg-primary/15 border-primary/40 text-primary clip-corner-sm ml-auto shrink-0 border px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest uppercase"
					>
						Major
					</span>
				{/if}
			</div>
			<div class="text-muted-foreground flex items-center gap-2 text-xs">
				<Avatar.Root
					class="border-primary/20 group-hover:border-primary/50 size-5 border transition-all duration-300"
				>
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback class="bg-muted text-[9px] font-medium"
						>{view.initials}</Avatar.Fallback
					>
				</Avatar.Root>
				<span class="truncate">{patch.author}</span>
			</div>
		</div>

		{#if patch.summary}
			<p class="text-muted-foreground line-clamp-2 text-xs leading-snug">
				{patch.summary}
			</p>
		{/if}

		{#each view.rows as row (row.type)}
			{@const isItems = row.type === 'items'}
			<div class="flex items-center gap-1.5">
				<div class="flex -space-x-1.5">
					{#each row.list as icon, i (icon.id)}
						<a
							href={links.entityHref(icon.alt)}
							aria-label="Jump to {icon.alt} in this patch"
							class="focus-visible:outline-primary relative z-10 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
						>
							<img
								src={icon.src}
								alt=""
								width="28"
								height="28"
								loading="lazy"
								decoding="async"
								class="border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-all duration-200 hover:z-20 hover:-translate-y-0.5 hover:scale-110 {isItems
									? 'hover:border-signal/60'
									: 'hover:border-primary/50'}"
								in:scale={{
									start: 0,
									duration: 250,
									delay: 100 + (row.offset + i) * 40,
									easing: quintOut
								}}
							/>
						</a>
					{/each}
				</div>
				{#if row.extra > 0}
					<span
						class="bg-muted/80 text-muted-foreground flex size-7 items-center justify-center rounded-md font-mono text-[10px] font-semibold transition-all duration-300 {isItems
							? 'group-hover:bg-signal/15 group-hover:text-signal'
							: 'group-hover:bg-primary/15 group-hover:text-primary'}">+{row.extra}</span
					>
				{/if}
			</div>
		{/each}

		<div class="border-border/50 mt-auto flex items-center gap-3 border-t pt-3 text-xs">
			{#each view.counts as count (count.noun)}
				<span class="flex items-baseline gap-1">
					<span class="font-mono font-bold {count.tone}">{count.n}</span>
					<span class="text-muted-foreground">{count.noun}</span>
				</span>
			{/each}
			<ArrowRight
				class="text-signal ml-auto size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
			/>
		</div>
	</div>
</div>
