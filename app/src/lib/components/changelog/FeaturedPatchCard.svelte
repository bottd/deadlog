<script lang="ts">
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';
	let patch: PatchCardProps = $props();
	const view = $derived(patchCardView(patch, true));
	const links = $derived(patchCardHrefs(patch));
</script>

<div class="featured-patch">
	<article class="featured-card clip-corner-lg card-glow">
		<CornerAccents tlSize="2rem" brSize="1.5rem" />
		<div class="featured-body">
			<div class="title-row">
				<h2 class="featured-title display-heading">
					<a href={links.href} aria-label={view.accessibleLabel} class="stretched-link"
						>{view.heading}</a
					>
				</h2>
				<span class="latest-label metadata">Latest Patch</span>
			</div>
			<p class="byline">
				By {patch.author}{#if view.named}
					· <time datetime={patch.date}>{view.date}</time>{/if}
			</p>
			{#if patch.summary}<p class="summary">
					{patch.summary}
				</p>{/if}
			{#if view.rows.length}
				<div class="entity-rows">
					{#each view.rows as row (row.type)}
						<div class="entity-row" data-entity-kind={row.kind}>
							<span class="entity-label">{row.label}</span>
							<div class="entity-links">
								{#each row.list as icon (icon.id)}
									<a
										href={links.entityHref(icon)}
										aria-label="Jump to {icon.alt} in this patch"
										class="entity-link"
									>
										<img
											src={icon.src}
											alt=""
											width="32"
											height="32"
											loading="lazy"
											decoding="async"
										/>
									</a>
								{/each}
							</div>
							{#if row.extra > 0}<span class="extra-count metadata">+{row.extra}</span
								>{/if}
						</div>
					{/each}
				</div>
			{/if}
			<div class="featured-footer">
				<span class="totals">{view.totals}</span>
				<span class="full-patch">View full patch <ArrowRight class="icon" /></span>
			</div>
		</div>
		{#if patch.previewImage}
			<div class="featured-media">
				<img
					data-patch-preview
					src={patch.previewImage}
					alt=""
					width="640"
					height="360"
					decoding="async"
					fetchpriority="high"
				/>
			</div>
		{/if}
	</article>
	<p class="previous-patches">Previous patches</p>
</div>

<style>
	@layer components.features {
		.featured-patch {
			margin-bottom: 1.75rem;
		}
		.featured-card {
			--corner-tl: var(--primary);
			--corner-br: color-mix(in srgb, var(--signal) 60%, transparent);
			position: relative;
			overflow: hidden;
			border: 1px solid color-mix(in srgb, var(--primary) 40%, transparent);
			background: var(--card);
		}
		.featured-body {
			min-inline-size: 0;
			flex: 1;
			padding: 1.25rem;
		}
		.title-row {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem 1rem;
		}
		.featured-title {
			font-size: var(--text-3xl);
			line-height: 1.25;
			transition: color var(--duration-normal);
		}
		.featured-card:hover .featured-title {
			color: var(--primary);
		}
		.latest-label {
			border-radius: var(--radius-sm);
			padding: 0.25rem 0.5rem;
			background: color-mix(in srgb, var(--primary) 10%, transparent);
			color: var(--primary);
		}
		.byline,
		.totals {
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.byline {
			margin-top: 0.5rem;
		}
		.summary {
			max-inline-size: 72ch;
			margin-top: 1rem;
			color: color-mix(in srgb, var(--foreground) 90%, transparent);
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
		}
		.entity-rows {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem 1.5rem;
			margin-top: 1rem;
		}
		.entity-row {
			display: flex;
			align-items: center;
			gap: 0.75rem;
		}
		.entity-label {
			inline-size: 3rem;
			flex-shrink: 0;
			color: var(--entity-accent);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.entity-links {
			display: flex;
			flex-wrap: wrap;
			gap: 0.375rem;
		}
		.entity-link {
			position: relative;
			z-index: 10;
			display: flex;
			inline-size: 2.75rem;
			block-size: 2.75rem;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius-md);
			&:hover {
				background: color-mix(in srgb, var(--signal) 10%, transparent);
			}
			& img {
				inline-size: 2rem;
				block-size: 2rem;
				border: 1px solid var(--border-subtle);
				border-radius: var(--radius-md);
				background: var(--background);
				object-fit: cover;
			}
		}
		.featured-footer {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem;
			margin-top: 1rem;
			border-top: 1px solid var(--border-subtle);
			padding-top: 0.75rem;
		}
		.full-patch {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			color: var(--signal);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.featured-media {
			position: relative;
			block-size: 10rem;
			flex-shrink: 0;
			& img {
				position: absolute;
				inset: 0;
				inline-size: 100%;
				block-size: 100%;
				object-fit: cover;
			}
		}
		.previous-patches {
			margin-top: 1.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		@media (min-width: 40rem) {
			.featured-body {
				padding: 1.5rem;
			}
			.featured-title {
				font-size: var(--text-4xl);
				line-height: var(--leading-4xl);
			}
		}
		@media (min-width: 48rem) {
			.featured-card {
				display: flex;
			}
			.featured-media {
				block-size: auto;
				inline-size: 16rem;
			}
		}
	}
</style>
