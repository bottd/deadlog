<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { searchParams } from '$lib/stores/searchParams.svelte';
	import HighlightedText from './HighlightedText.svelte';
	import {
		patchCardHrefs,
		patchCardMatches,
		patchCardView,
		type PatchCardProps
	} from './patchCard';

	let { isNew = false, ...patch }: PatchCardProps & { isNew?: boolean } = $props();

	const matches = $derived(patchCardMatches(patch));
	const view = $derived(patchCardView(patch));
	const links = $derived(patchCardHrefs(patch));
	// ponytail: MAJOR is the only reliable tier — `category` is uniformly "patch"
	// and entity count is a poor signal for "small patch", so no HOTFIX tier.
	const isMajor = $derived(!!patch.majorUpdate);
</script>

<div
	class="clip-corner-sm group bg-card hover:bg-card-accent/30 relative flex h-full flex-col overflow-hidden border transition-colors duration-200 {matches.searching
		? ''
		: 'min-h-[200px]'} {isMajor
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
			bg="primary"
			text="primary-foreground"
			absolute
			z="20"
			p="x-1.5 y-0.5"
			font="bold"
			class="kicker-xs clip-corner-sm top-2 right-2"
		>
			New
		</span>
	{/if}

	{#if !matches.searching && patch.previewImage}
		<div border="border/70 b" relative h="28" shrink="0" class="overflow-hidden">
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
					absolute
					bg="gradient-to-b"
					class="from-card/0 via-card/10 to-card/55 pointer-events-none inset-0"
					aria-hidden="true"
				></div>
			{/if}
		</div>
	{/if}
	<div
		absolute
		bg="gradient-to-br"
		class="from-primary/0 group-hover:from-primary/5 pointer-events-none inset-0 to-transparent transition-all duration-200"
	></div>

	<div z="10" flex="~ 1 col" gap="3" p="4">
		<div>
			<div flex="~" m="b-1.5" items="center" gap="2">
				<h2
					text="foreground base"
					font="semibold"
					class="group-hover:text-primary line-clamp-2 min-w-0 tracking-tight transition-colors duration-300"
				>
					<a
						href={links.href}
						aria-label={view.accessibleLabel}
						class={matches.searching ? 'ui-focus-ring rounded-sm' : 'stretched-link'}
					>
						{view.heading}
					</a>
				</h2>
				{#if isMajor}
					<span
						border="primary/40 ~"
						bg="primary/15"
						text="primary"
						m="l-auto"
						shrink="0"
						p="x-1.5 y-0.5"
						font="bold"
						class="kicker-xs clip-corner-sm"
					>
						Major
					</span>
				{/if}
			</div>
			<div flex="~" text="muted-foreground xs" items="center" gap="2">
				<Avatar.Root
					class="border-primary/20 group-hover:border-primary/50 size-6 border transition-all duration-300"
				>
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback
						text="muted-foreground"
						font="mono"
						class="text-[11px] tracking-wide">{view.initials}</Avatar.Fallback
					>
				</Avatar.Root>
				<span truncate>{patch.author}</span>
				{#if view.named}
					<span aria-hidden="true">&middot;</span>
					<time datetime={patch.date}>{view.date}</time>
				{/if}
			</div>
		</div>

		{#if patch.matches.length > 0}
			<div class="space-y-4" data-matched-changes>
				{#each patch.matches as match (`${match.type}:${match.id}`)}
					<section aria-label="{match.name} changes">
						<div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
							<h3 class="text-sm font-semibold">{match.name}</h3>
							<a
								href="/{match.type}/{match.slug}"
								aria-label="{match.name} full history"
								class="ui-focus-ring text-signal relative z-10 inline-flex min-h-11 items-center gap-1 rounded-sm text-xs underline-offset-4 hover:underline"
							>
								Full history <ArrowRight class="size-3.5" />
							</a>
						</div>
						{#if match.changes.length}
							<ul class="max-w-[72ch] space-y-2 text-sm leading-relaxed">
								{#each match.changes as change, index (index)}
									<li>
										{#if change.ability && !change.text
												.toLowerCase()
												.startsWith(change.ability.toLowerCase())}<span
												class="text-foreground font-medium"
												>{change.ability}:
											</span>{/if}
										<HighlightedText text={change.text} query={searchParams.q} />
									</li>
								{/each}
							</ul>
							{#if match.changeCount !== null && match.changeCount > match.changes.length}
								<p class="text-muted-foreground mt-2 text-xs">
									{match.changeCount - match.changes.length} more changes in the full patch
								</p>
							{/if}
						{:else}
							<p class="text-muted-foreground text-sm">
								{match.changeCount === null
									? 'Mentioned in this patch; see the full notes for context.'
									: 'See the full patch for these changes.'}
							</p>
						{/if}
					</section>
				{/each}
			</div>
		{/if}
		{#if patch.summary}
			<p
				class="text-muted-foreground max-w-[72ch] leading-relaxed {matches.searching
					? 'text-sm'
					: 'line-clamp-2 text-xs'}"
			>
				<HighlightedText text={patch.summary} query={searchParams.q} />
			</p>
		{/if}

		{#each view.rows as row (row.type)}
			{@const isItems = row.type === 'items'}
			<!-- Unfanned below `sm` so every icon keeps a full 44px touch target. -->
			<div
				class="flex flex-wrap items-center gap-1 sm:(flex-nowrap gap-0 [&>a+a]:-ml-1.5)"
			>
				{#each row.list as icon (icon.id)}
					<a
						href={links.entityHref(icon)}
						aria-label="Jump to {icon.alt} in this patch"
						relative
						z="10"
						rounded="md"
						class="group/icon ui-focus-outline flex size-11 items-center justify-center transition-all duration-200 sm:size-7 hover:(z-20 -translate-y-0.5 scale-110)"
					>
						<img
							src={icon.src}
							alt=""
							width="28"
							height="28"
							loading="lazy"
							decoding="async"
							class="border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-colors duration-200 {isItems
								? 'group-hover/icon:border-signal/60'
								: 'group-hover/icon:border-primary/50'}"
						/>
					</a>
				{/each}
				{#if row.extra > 0}
					<span
						class="bg-muted/80 text-muted-foreground flex size-11 items-center justify-center rounded-md font-mono text-[11px] font-semibold transition-all duration-300 sm:(ml-1.5 size-7) {isItems
							? 'group-hover:bg-signal/15 group-hover:text-signal'
							: 'group-hover:bg-primary/15 group-hover:text-primary'}">+{row.extra}</span
					>
				{/if}
			</div>
		{/each}

		<div
			flex="~"
			border="border/50 t"
			m="t-auto"
			items="center"
			gap="3"
			p="t-3"
			text="xs"
		>
			{#if matches.label}
				<span flex="~" items="baseline" gap="1">
					<span class="font-mono font-bold {matches.tone}">{matches.changeCount}</span>
					<span text="foreground">{matches.label}</span>
				</span>
				<span text="muted-foreground" class="ml-auto hidden text-xs sm:inline"
					>{view.totals} in full patch</span
				>
			{:else}
				{#each view.counts as count (count.noun)}
					<span flex="~" items="baseline" gap="1">
						<span class="font-mono font-bold {count.tone}">{count.n}</span>
						<span text="muted-foreground">{count.noun}</span>
					</span>
				{/each}
			{/if}
			{#if matches.searching}
				<a
					href={links.href}
					class="ui-focus-ring text-signal ml-auto inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-sm text-xs"
					>Full patch <ArrowRight class="size-3.5" /></a
				>
			{:else}
				<ArrowRight class="text-signal ml-auto size-3.5" />
			{/if}
		</div>
	</div>
</div>
