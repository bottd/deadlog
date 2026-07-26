<script lang="ts">
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import { ENTITY_LISTING } from '$lib/seo';
	import { formatDate, plural } from '@deadlog/utils';
	import Activity from '@lucide/svelte/icons/activity';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Package from '@lucide/svelte/icons/package';
	import type { Snippet } from 'svelte';

	interface EntityPatch {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		changeCount: number | null;
		changeSummary?: string | null;
	}

	interface Props {
		entity: { type: 'hero' | 'item'; name: string; image?: string };
		/** CSS colour driving every accent on the page. */
		accent: string;
		/** Eyebrow above the title, e.g. "Assault hero" or "Weapon item". */
		label: string;
		lede: string;
		changelogs: EntityPatch[];
		/** Extra eyebrow content after the label, e.g. an item's tier. */
		labelSuffix?: Snippet;
	}

	let { entity, accent, label, lede, changelogs, labelSuffix }: Props = $props();

	const isItem = $derived(entity.type === 'item');
	const listing = $derived(ENTITY_LISTING[entity.type]);
	const EmptyIcon = $derived(isItem ? Package : Activity);

	const countedPatches = $derived(
		changelogs.filter((c) => c.changeCount !== null).length
	);
	const unknownPatches = $derived(changelogs.length - countedPatches);
	const totalChanges = $derived(
		changelogs.reduce((total, c) => total + (c.changeCount ?? 0), 0)
	);
	// "N+" once any patch is missing a count, "N/A" when none of them have one.
	const changeValue = $derived(
		unknownPatches === 0
			? String(totalChanges)
			: countedPatches > 0
				? `${totalChanges}+`
				: 'N/A'
	);
	const oldestPatch = $derived(changelogs.at(-1));
</script>

{#snippet statLabel(text: string)}
	<dt class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
		{text}
	</dt>
{/snippet}

<main class="bg-wire-grid min-h-screen">
	<div class="container mx-auto mt-6 mb-24 max-w-6xl px-3 sm:mt-8 sm:px-4">
		<a
			href={listing.path}
			class="text-muted-foreground hover:text-signal mb-6 inline-flex min-h-6 items-center gap-2 text-sm transition-colors sm:mb-8"
		>
			<ArrowLeft class="size-4" />
			<span>Back to {listing.label.toLowerCase()}</span>
		</a>

		<header
			class="clip-corner-lg bg-card relative mb-10 overflow-hidden border-2 p-5 sm:p-8 lg:p-10"
			style:border-color="color-mix(in oklab, {accent} 42%, var(--border))"
		>
			<CornerAccents
				tlSize="4rem"
				brSize="3rem"
				thickness="2px"
				tlColor="bg-signal/60"
				brColor="bg-primary/35"
			/>
			<div
				class="pointer-events-none absolute inset-0"
				style:background="radial-gradient(circle at 12% 20%, color-mix(in oklab, {accent} 18%,
				transparent), transparent 42%)"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute inset-x-0 top-0 h-px"
				style:background="linear-gradient(to right, {accent}, var(--signal), transparent
				78%)"
				aria-hidden="true"
			></div>

			<div
				class="relative z-10 grid gap-7 md:grid-cols-[auto_minmax(0,1fr)] md:items-center"
			>
				{#if entity.image}
					<div class="relative mx-auto shrink-0 md:mx-0">
						<div
							class="absolute inset-2 -z-10 blur-2xl"
							style:background-color={accent}
							style:opacity={isItem ? '0.22' : '0.24'}
							aria-hidden="true"
						></div>
						{#if isItem}
							<div
								class="clip-corner-sm bg-muted/30 flex size-32 items-center justify-center border-2 p-3 sm:size-40 lg:size-44"
								style:border-color={accent}
							>
								<img
									src={entity.image}
									alt="{entity.name} in Deadlock"
									width="176"
									height="176"
									fetchpriority="high"
									class="max-h-full max-w-full object-contain drop-shadow-lg"
								/>
							</div>
						{:else}
							<div
								class="clip-corner-sm bg-muted/30 relative border-2 p-1.5"
								style:border-color={accent}
							>
								<img
									src={entity.image}
									alt="{entity.name} in Deadlock"
									width="160"
									height="160"
									fetchpriority="high"
									class="clip-corner-sm size-28 object-cover sm:size-36 lg:size-40"
								/>
							</div>
						{/if}
					</div>
				{/if}

				<div class="min-w-0 text-center md:text-left">
					<div
						class="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start"
					>
						<span class="h-px w-7" style:background-color={accent} aria-hidden="true"
						></span>
						<span
							class="font-mono text-[10px] font-bold tracking-[0.22em] uppercase"
							style:color={accent}
						>
							{label}
						</span>
						{@render labelSuffix?.()}
					</div>
					<h1
						class="text-foreground font-display heading-glow text-4xl leading-none font-medium tracking-wide break-words sm:text-5xl lg:text-6xl"
					>
						{entity.name}
					</h1>
					<p class="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
						{lede}
					</p>

					<dl class="mt-6 grid grid-cols-2 gap-px overflow-hidden border sm:grid-cols-3">
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Patches')}
							<dd class="text-foreground mt-1 font-mono text-xl font-bold">
								{changelogs.length}
							</dd>
						</div>
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Changes')}
							<dd class="mt-1 font-mono text-xl font-bold" style:color={accent}>
								{changeValue}
							</dd>
						</div>
						<div class="bg-muted/30 col-span-2 p-3 text-left sm:col-span-1">
							{@render statLabel('Tracked since')}
							<dd class="text-foreground mt-1 text-sm font-semibold">
								{oldestPatch ? formatDate(oldestPatch.date) : 'No patches yet'}
							</dd>
						</div>
					</dl>
					{#if unknownPatches > 0}
						<p
							class="text-muted-foreground mt-2 font-mono text-[9px] tracking-wide uppercase"
						>
							{unknownPatches}
							{plural(unknownPatches, 'patch', 'patches')} awaiting a reliable count
						</p>
					{/if}
				</div>
			</div>

			{#if changelogs.length > 1}
				<div class="border-border/60 relative z-10 mt-7 border-t pt-5">
					<div class="mb-2 flex items-center justify-between gap-3">
						<span
							class="text-muted-foreground font-mono text-[9px] font-bold tracking-widest uppercase"
						>
							Patch cadence
						</span>
						<span class="text-muted-foreground font-mono text-[9px]">
							{changelogs.length} points
						</span>
					</div>
					<PatchTimeline patches={changelogs} {entity} {accent} />
				</div>
			{/if}
		</header>

		<section aria-labelledby="history-heading">
			<div class="mb-6 flex items-end justify-between gap-4">
				<div>
					<p
						class="text-signal font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
					>
						Entity log
					</p>
					<h2
						id="history-heading"
						class="text-foreground font-display mt-1 text-2xl font-medium tracking-wide sm:text-3xl"
					>
						Change History
					</h2>
				</div>
				<span class="text-muted-foreground font-mono text-xs">
					{changelogs.length}
					{plural(changelogs.length, 'patch', 'patches')}
				</span>
			</div>

			{#if changelogs.length > 0}
				<ol class="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
					{#each changelogs as changelog (changelog.id)}
						<li>
							<PatchPreviewCard {...changelog} {entity} {accent} />
						</li>
					{/each}
				</ol>
			{:else}
				<div
					class="clip-corner bg-card border-border relative overflow-hidden border-2 p-8 text-center sm:p-12"
				>
					<CornerAccents tlSize="2rem" tlColor="bg-signal/50" />
					<EmptyIcon class="text-signal/60 mx-auto mb-4 size-8" />
					<p class="text-muted-foreground font-mono text-xs tracking-wide uppercase">
						No log entries
					</p>
					<p class="text-foreground mt-2 text-lg">
						No recorded changes for {entity.name}.
					</p>
				</div>
			{/if}
		</section>
	</div>
</main>
