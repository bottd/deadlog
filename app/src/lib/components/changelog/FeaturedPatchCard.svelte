<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Zap from '@lucide/svelte/icons/zap';
	import { backOut } from 'svelte/easing';
	import { fly, scale } from 'svelte/transition';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';

	let patch: PatchCardProps = $props();

	const view = $derived(patchCardView(patch, true));
	const links = $derived(patchCardHrefs(patch));
</script>

<div class="group relative col-span-full mb-8 block">
	<div
		class="clip-corner-lg border-primary/40 hover:border-primary/70 bg-card card-glow relative flex flex-col overflow-hidden border-2 transition-all duration-200 hover:shadow-2xl active:scale-[0.99] md:flex-row md:items-stretch"
	>
		<div
			class="from-primary/0 via-signal/5 to-signal/10 pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-200 group-hover:opacity-100"
		></div>
		<CornerAccents
			tlSize="4rem"
			brSize="3rem"
			tlColor="bg-primary"
			brColor="bg-signal/70"
			thickness="0.125rem"
			class="z-20"
		/>

		<div class="z-10 flex flex-1 flex-col gap-5 p-6 md:p-8">
			<div class="flex items-center gap-4">
				<div
					class="pulse-glow bg-primary/15 border-primary/30 clip-corner-sm inline-flex items-center gap-2 border px-4 py-1.5"
					in:fly={{ x: -20, duration: 500, easing: backOut }}
				>
					<Zap class="text-primary size-4" />
					<span class="text-primary font-mono text-xs font-bold tracking-widest uppercase"
						>Latest Patch</span
					>
				</div>
				<div class="bg-signal/30 h-px flex-1"></div>
			</div>

			<h2
				class="font-display text-foreground group-hover:text-primary heading-glow text-3xl font-medium tracking-wide transition-colors duration-300 md:text-4xl"
				in:fly={{ y: 20, duration: 400, delay: 100 }}
			>
				<!-- Stretched link: the whole card is clickable, but crawlers and
				     middle-click still get a real href. -->
				<a
					href={links.href}
					aria-label={view.accessibleLabel}
					class="focus-visible:outline-primary after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2"
				>
					{formatDate(patch.date)}
				</a>
			</h2>

			<div class="flex items-center gap-3">
				<Avatar.Root
					class="border-primary/30 group-hover:border-primary size-8 border-2 transition-all duration-300"
				>
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback class="bg-muted text-xs font-medium"
						>{view.initials}</Avatar.Fallback
					>
				</Avatar.Root>
				<span class="text-foreground text-sm font-medium">{patch.author}</span>
			</div>

			{#if patch.summary}
				<p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
					{patch.summary}
				</p>
			{/if}

			{#if view.rows.length > 0}
				<div class="mt-2 flex flex-col gap-3">
					{#each view.rows as row (row.type)}
						<div class="flex items-center gap-3">
							<span class="w-14 font-mono text-xs tracking-wider uppercase {row.tone}"
								>{row.label}</span
							>
							<div class="flex -space-x-2">
								{#each row.list as icon, i (icon.id)}
									<a
										href={links.entityHref(icon.alt)}
										aria-label="Jump to {icon.alt} in this patch"
										class="focus-visible:outline-primary relative z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
									>
										<img
											src={icon.src}
											alt=""
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
									</a>
								{/each}
							</div>
							{#if row.extra > 0}
								<span class="font-mono text-sm font-bold {row.tone}">+{row.extra}</span>
							{/if}
						</div>
					{/each}
				</div>
			{/if}

			<div class="border-border/50 mt-auto flex items-center gap-6 border-t pt-4">
				{#each view.counts as count (count.noun)}
					<span class="flex items-baseline gap-1.5">
						<span class="font-mono text-2xl font-bold {count.tone}">{count.n}</span>
						<span class="text-muted-foreground text-sm">{count.noun}</span>
					</span>
				{/each}
			</div>
		</div>

		<div
			class="from-signal/5 to-primary/5 group-hover:from-signal/10 group-hover:to-primary/10 border-signal/20 relative z-10 flex min-h-44 shrink-0 items-center justify-center overflow-hidden border-t bg-gradient-to-r p-6 transition-colors duration-300 md:min-h-0 md:border-t-0 md:border-l md:p-8 {patch.previewImage
				? 'md:w-80'
				: 'md:w-56'}"
		>
			{#if patch.previewImage}
				<img
					data-patch-preview
					src={patch.previewImage}
					alt=""
					width="640"
					height="360"
					decoding="async"
					class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div
					class="from-card/10 via-card/55 to-card/95 absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r"
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
					class="absolute inset-0 size-full object-cover opacity-25"
				/>
			{/if}
			<div class="relative z-10 flex flex-col items-center gap-3 text-center">
				<div
					class="bg-primary text-primary-foreground pulse-glow flex size-14 items-center justify-center rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
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
		<div class="bg-signal/35 h-px flex-1"></div>
		<span class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
			>Previous Updates</span
		>
		<div class="bg-primary/30 h-px flex-1"></div>
	</div>
</div>
