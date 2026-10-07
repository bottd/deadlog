<script lang="ts">
	import * as Avatar from '#lib/components/ui/avatar/index.ts';
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { searchParams } from '#lib/stores/searchParams.svelte.ts';
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
	class="patch-card clip-corner-sm"
	data-major={isMajor}
	data-searching={matches.searching}
>
	<CornerAccents tlSize="1.5rem" brSize="1rem" thickness="0.125rem" />
	{#if isNew}<span class="new-flag kicker-xs clip-corner-sm">New</span>{/if}
	{#if !matches.searching && patch.previewImage}
		<div class="preview">
			<img
				data-patch-preview
				src={patch.previewImage}
				alt=""
				width="640"
				height="360"
				loading="lazy"
				decoding="async"
			/>
			<div class="preview-veil" aria-hidden="true"></div>
		</div>
	{/if}
	<div class="hover-veil" aria-hidden="true"></div>
	<div class="card-body">
		<div>
			<div class="title-row">
				<h2 class="card-title">
					<a
						href={links.href}
						aria-label={view.accessibleLabel}
						class={matches.searching ? 'reading-link ui-focus-ring' : 'stretched-link'}
						>{view.heading}</a
					>
				</h2>
				{#if isMajor}<span class="major-flag kicker-xs clip-corner-sm">Major</span>{/if}
			</div>
			<div class="author-row">
				<Avatar.Root class="patch-author-avatar">
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback class="patch-author-initials">{view.initials}</Avatar.Fallback>
				</Avatar.Root>
				<span class="author-name">{patch.author}</span>
				{#if view.named}<span aria-hidden="true">&middot;</span><time
						datetime={patch.date}>{view.date}</time
					>{/if}
			</div>
		</div>
		{#if patch.matches.length > 0}
			<div class="matched-changes" data-matched-changes>
				{#each patch.matches as match (`${match.type}:${match.id}`)}
					<section aria-label="{match.name} changes">
						<div class="match-heading">
							<h3>{match.name}</h3>
							<a
								href="/{match.type}/{match.slug}"
								aria-label="{match.name} full history"
								class="history-link reading-action"
								>Full history <ArrowRight class="icon-sm" /></a
							>
						</div>
						{#if match.changes.length}
							<ul class="change-list">
								{#each match.changes as change, index (index)}
									<li>
										{#if change.ability && !change.text
												.toLowerCase()
												.startsWith(change.ability.toLowerCase())}<span
												class="ability-label"
												>{change.ability}:
											</span>{/if}
										<HighlightedText text={change.text} query={searchParams.q} />
									</li>
								{/each}
							</ul>
							{#if match.changeCount !== null && match.changeCount > match.changes.length}<p
									class="more-changes"
								>
									{match.changeCount - match.changes.length} more changes in the full patch
								</p>{/if}
						{:else}
							<p class="match-context">
								{match.changeCount === null
									? 'Mentioned in this patch; see the full notes for context.'
									: 'See the full patch for these changes.'}
							</p>
						{/if}
					</section>
				{/each}
			</div>
		{/if}
		{#if patch.summary}<p class="summary">
				<HighlightedText text={patch.summary} query={searchParams.q} />
			</p>{/if}
		{#each view.rows as row (row.type)}
			<!-- Unfanned below `sm` so every icon keeps a full 44px touch target. -->
			<div class="entity-row" data-entity-kind={row.kind}>
				{#each row.list as icon (icon.id)}
					<a
						href={links.entityHref(icon)}
						aria-label="Jump to {icon.alt} in this patch"
						class="entity-link"
					>
						<img
							src={icon.src}
							alt=""
							width="28"
							height="28"
							loading="lazy"
							decoding="async"
						/>
					</a>
				{/each}
				{#if row.extra > 0}<span class="extra-count">+{row.extra}</span>{/if}
			</div>
		{/each}
		<div class="card-footer">
			{#if matches.label}
				<span class="stat" data-entity-kind={matches.kind}
					><strong>{matches.changeCount}</strong><span class="matched-label"
						>{matches.label}</span
					></span
				>
				<span class="full-totals">{view.totals} in full patch</span>
			{:else}
				{#each view.counts as count (count.noun)}<span
						class="stat"
						data-entity-kind={count.kind}
						><strong>{count.n}</strong><span>{count.noun}</span></span
					>{/each}
			{/if}
			{#if matches.searching}
				<a href={links.href} class="full-patch reading-action"
					>Full patch <ArrowRight class="icon-sm" /></a
				>
			{:else}<span class="card-arrow"><ArrowRight class="icon-sm" /></span>{/if}
		</div>
	</div>
</div>

<style>
	@layer components.features {
		.patch-card {
			--edge: var(--border);
			--edge-hover: color-mix(in srgb, var(--signal) 45%, transparent);
			--corner-tl: color-mix(in srgb, var(--signal) 45%, transparent);
			--corner-br: color-mix(in srgb, var(--signal) 20%, transparent);
			position: relative;
			display: flex;
			block-size: 100%;
			flex-direction: column;
			overflow: hidden;
			border: 1px solid var(--edge);
			background: var(--card);
			transition:
				border-color var(--duration-normal),
				background-color var(--duration-normal);
			&[data-searching='false'] {
				min-block-size: 200px;
			}
			&:hover {
				--corner-tl: var(--signal);
				--corner-br: color-mix(in srgb, var(--signal) 60%, transparent);
				border-color: var(--edge-hover);
				background: color-mix(in srgb, var(--card-accent) 30%, transparent);
			}
			&[data-major='true'] {
				--edge: color-mix(in srgb, var(--primary) 50%, transparent);
				--edge-hover: color-mix(in srgb, var(--primary) 80%, transparent);
				--corner-tl: var(--primary);
				--corner-br: color-mix(in srgb, var(--primary) 30%, transparent);
			}
			&[data-major='true']:hover {
				--corner-br: color-mix(in srgb, var(--primary) 60%, transparent);
			}
		}
		.new-flag {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			z-index: 20;
			background: var(--primary);
			color: var(--primary-foreground);
		}
		.new-flag,
		.major-flag {
			padding: 0.125rem 0.375rem;
			font-weight: 700;
		}
		.preview {
			position: relative;
			block-size: 7rem;
			flex-shrink: 0;
			overflow: hidden;
			border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
			& img {
				inline-size: 100%;
				block-size: 100%;
				object-fit: cover;
				transition: scale 500ms;
			}
		}
		.patch-card:hover .preview img {
			scale: 1.05;
		}
		.preview-veil,
		.hover-veil {
			position: absolute;
			inset: 0;
			pointer-events: none;
		}
		.preview-veil {
			background: linear-gradient(
				to bottom,
				transparent,
				color-mix(in srgb, var(--card) 10%, transparent),
				color-mix(in srgb, var(--card) 55%, transparent)
			);
		}
		.hover-veil {
			background: linear-gradient(
				to bottom right,
				color-mix(in srgb, var(--primary) 5%, transparent),
				transparent
			);
			opacity: 0;
			transition: opacity var(--duration-normal);
		}
		.patch-card:hover .hover-veil {
			opacity: 1;
		}
		.card-body {
			z-index: 10;
			display: flex;
			flex: 1;
			flex-direction: column;
			gap: 0.75rem;
			padding: 1rem;
		}
		.title-row {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 0.375rem;
		}
		.card-title,
		.summary {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		.card-title {
			min-inline-size: 0;
			font-weight: 600;
			letter-spacing: -0.025em;
			transition: color var(--duration-slow);
		}
		.patch-card:hover .card-title {
			color: var(--primary);
		}
		.reading-link {
			border-radius: var(--radius-sm);
		}
		.major-flag {
			margin-left: auto;
			flex-shrink: 0;
			border: 1px solid color-mix(in srgb, var(--primary) 40%, transparent);
			background: color-mix(in srgb, var(--primary) 15%, transparent);
			color: var(--primary);
		}
		.author-row {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.author-name {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		:global(.patch-author-avatar) {
			inline-size: 1.5rem;
			block-size: 1.5rem;
			border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
			transition: border-color var(--duration-slow);
		}
		.patch-card:hover :global(.patch-author-avatar) {
			border-color: color-mix(in srgb, var(--primary) 50%, transparent);
		}
		:global(.patch-author-initials) {
			font-family: var(--font-mono);
			font-size: var(--text-2xs);
			letter-spacing: 0.025em;
		}
		.matched-changes > * + * {
			margin-top: 1rem;
		}
		.match-heading {
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
			gap: 0.25rem 0.75rem;
			margin-bottom: 0.5rem;
			& h3 {
				font-size: var(--text-sm);
				line-height: var(--leading-sm);
				font-weight: 600;
			}
		}
		.history-link {
			position: relative;
			z-index: 10;
		}
		.change-list {
			max-inline-size: 72ch;
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
			& > li + li {
				margin-top: 0.5rem;
			}
		}
		.ability-label {
			color: var(--foreground);
			font-weight: 500;
		}
		.more-changes {
			margin-top: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.match-context {
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.summary {
			max-inline-size: 72ch;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-relaxed);
		}
		.patch-card[data-searching='true'] .summary {
			display: block;
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.entity-row {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.25rem;
		}
		.entity-link,
		.extra-count {
			display: flex;
			inline-size: 2.75rem;
			block-size: 2.75rem;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius-md);
		}
		.entity-link {
			position: relative;
			z-index: 10;
			transition:
				translate var(--duration-normal),
				scale var(--duration-normal);
			&:hover {
				z-index: 20;
				translate: 0 -0.125rem;
				scale: 1.1;
			}
			& img {
				inline-size: 1.75rem;
				block-size: 1.75rem;
				border: 1px solid color-mix(in srgb, var(--border) 80%, transparent);
				border-radius: var(--radius-md);
				background: var(--card);
				object-fit: cover;
				box-shadow: var(--shadow-sm);
				transition: border-color var(--duration-normal);
			}
			&:hover img {
				border-color: color-mix(in srgb, var(--entity-accent) 60%, transparent);
			}
		}
		.extra-count {
			background: color-mix(in srgb, var(--muted) 80%, transparent);
			color: var(--muted-foreground);
			font-weight: 600;
			font-family: var(--font-mono);
			font-size: var(--text-2xs);
		}
		.patch-card:hover .extra-count {
			background: color-mix(in srgb, var(--entity-accent) 15%, transparent);
			color: var(--entity-accent);
		}
		.card-footer {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			margin-top: auto;
			border-top: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
			padding-top: 0.75rem;
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.stat {
			display: flex;
			align-items: baseline;
			gap: 0.25rem;
			color: var(--muted-foreground);
			& strong {
				color: var(--entity-accent);
				font-family: var(--font-mono);
				font-weight: 700;
			}
			& .matched-label {
				color: var(--foreground);
			}
		}
		.full-totals {
			display: none;
			margin-left: auto;
			color: var(--muted-foreground);
		}
		.full-patch {
			margin-left: auto;
			flex-shrink: 0;
		}
		.card-arrow {
			margin-left: auto;
			color: var(--signal);
		}
		@media (min-width: 40rem) {
			.entity-row {
				flex-wrap: nowrap;
				gap: 0;
			}
			.entity-link,
			.extra-count {
				inline-size: 1.75rem;
				block-size: 1.75rem;
			}
			.entity-link + .entity-link {
				margin-left: -0.375rem;
			}
			.extra-count {
				margin-left: 0.375rem;
			}
			.full-totals {
				display: inline;
			}
		}
	}
</style>
