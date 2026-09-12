<script lang="ts">
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';
	let patch: PatchCardProps = $props();
	const view = $derived(patchCardView(patch, true));
	const links = $derived(patchCardHrefs(patch));
</script>

<div class="mb-7">
	<article
		class="clip-corner-lg card-glow border-primary/40 bg-card group relative overflow-hidden border md:flex"
	>
		<CornerAccents
			tlSize="2rem"
			brSize="1.5rem"
			tlColor="bg-primary"
			brColor="bg-signal/60"
		/>
		<div class="min-w-0 flex-1 p-5 sm:p-6">
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
				<h2
					class="font-display text-foreground group-hover:text-primary text-3xl leading-tight font-medium tracking-wide transition-colors sm:text-4xl"
				>
					<a href={links.href} aria-label={view.accessibleLabel} class="stretched-link"
						>{view.heading}</a
					>
				</h2>
				<span class="bg-primary/10 text-primary rounded-sm px-2 py-1 font-mono text-xs"
					>Latest Patch</span
				>
			</div>
			<p class="text-muted-foreground mt-2 text-xs">
				By {patch.author}{#if view.named}
					· <time datetime={patch.date}>{view.date}</time>{/if}
			</p>
			{#if patch.summary}<p
					class="text-foreground/90 mt-4 max-w-[72ch] text-sm leading-relaxed"
				>
					{patch.summary}
				</p>{/if}
			{#if view.rows.length}
				<div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
					{#each view.rows as row (row.type)}
						<div class="flex items-center gap-3">
							<span class="w-12 shrink-0 text-xs {row.tone}">{row.label}</span>
							<div class="flex flex-wrap gap-1.5">
								{#each row.list as icon (icon.id)}
									<a
										href={links.entityHref(icon)}
										aria-label="Jump to {icon.alt} in this patch"
										class="ui-focus-outline relative z-10 flex size-11 items-center justify-center rounded-md hover:bg-signal/10"
									>
										<img
											src={icon.src}
											alt=""
											width="32"
											height="32"
											loading="lazy"
											decoding="async"
											class="border-subtle bg-background size-8 rounded border object-cover"
										/>
									</a>
								{/each}
							</div>
							{#if row.extra > 0}<span class="text-muted-foreground font-mono text-xs"
									>+{row.extra}</span
								>{/if}
						</div>
					{/each}
				</div>
			{/if}
			<div
				class="border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3"
			>
				<span class="text-muted-foreground text-xs">{view.totals}</span>
				<span class="text-signal inline-flex items-center gap-2 text-sm"
					>View full patch <ArrowRight class="size-4" /></span
				>
			</div>
		</div>
		{#if patch.previewImage}
			<div class="relative h-40 shrink-0 md:h-auto md:w-64">
				<img
					data-patch-preview
					src={patch.previewImage}
					alt=""
					width="640"
					height="360"
					decoding="async"
					fetchpriority="high"
					class="absolute inset-0 size-full object-cover"
				/>
			</div>
		{/if}
	</article>
	<p class="text-muted-foreground mt-6 text-sm">Previous patches</p>
</div>
