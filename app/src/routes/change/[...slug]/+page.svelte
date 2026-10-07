<script lang="ts">
	import { page } from '$app/state';
	import { building } from '$app/env';
	import { ChangelogToc, MogContent } from '#lib/components/changelog/index.ts';
	import { searchParams } from '#lib/stores/searchParams.svelte.ts';
	import type { EntityIcon } from '#lib/types.ts';
	import * as Avatar from '#lib/components/ui/avatar/index.ts';
	import { authorInitials } from '#lib/author.ts';
	import * as Sheet from '#lib/components/ui/sheet/index.ts';
	import Button from '#lib/components/ui/button/button.svelte';
	import { formatDate, formatTime, patchHeading, plural } from '@deadlog/utils';
	import { hasEntity } from '#lib/components/filter-bar/filterState.svelte.ts';
	import { tocLinkCount } from '#lib/components/changelog/toc.ts';
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import Link from '@lucide/svelte/icons/link';
	import ListIcon from '@lucide/svelte/icons/list';
	import { toast } from 'svelte-sonner';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import {
		absoluteUrl,
		breadcrumbList,
		changePath,
		pageMeta,
		SITE_NAME,
		SITE_URL
	} from '#lib/seo.ts';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const {
		changelog,
		title,
		description,
		image,
		isIndexable,
		MogComponent,
		mogToc = []
	} = $derived(data);

	let tocOpen = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toast.success('Copied to clipboard');
		} catch {
			toast.error('Could not copy this link');
		}
	}

	// carry the list-view filter and show only the selected entities' notes
	const selHeroes = $derived(searchParams.hero);
	const selItems = $derived(searchParams.item);
	const allHeroes = $derived<EntityIcon[]>(changelog.icons?.heroes ?? []);
	const allItems = $derived<EntityIcon[]>(changelog.icons?.items ?? []);
	const abilityIcons = $derived(changelog.abilityIcons ?? []);
	const icons = $derived({ heroes: allHeroes, items: allItems });

	const matchedHeroes = $derived(allHeroes.filter((h) => hasEntity(selHeroes, h.alt)));
	const matchedItems = $derived(allItems.filter((i) => hasEntity(selItems, i.alt)));

	const filterActive = $derived(selHeroes.length + selItems.length > 0);
	// undefined unless at least one selected entity actually changed in this patch
	const mogFilter = $derived(
		matchedHeroes.length + matchedItems.length > 0
			? { heroes: matchedHeroes.map((h) => h.alt), items: matchedItems.map((i) => i.alt) }
			: undefined
	);

	const tocHeroes = $derived(mogFilter ? matchedHeroes : allHeroes);
	const tocItems = $derived(mogFilter ? matchedItems : allItems);
	const matchedLabel = $derived(
		[...matchedHeroes, ...matchedItems].map((e) => e.alt).join(', ')
	);
	const selectedLabel = $derived([...selHeroes, ...selItems].join(', '));
	const backHref = $derived(building ? '/' : '/' + page.url.search);

	const heroCount = $derived(tocHeroes.length);
	const itemCount = $derived(tocItems.length);
	const patchTitle = $derived(patchHeading(changelog));

	const hideGeneral = $derived(
		!!mogFilter || !mogToc.some((s) => s.id === 'general-changes')
	);
	// A single link is not a table of contents.
	const showToc = $derived(
		tocLinkCount({ toc: mogToc, heroes: tocHeroes, items: tocItems, hideGeneral }) > 1
	);
	const tocProps = $derived({
		heroes: tocHeroes,
		items: tocItems,
		abilityIcons,
		toc: mogToc,
		hideGeneral
	});
	const patchPath = $derived(changePath(changelog));
	const canonical = $derived(absoluteUrl(patchPath));
	const publishedTime = $derived(changelog.date.toISOString());
	const structuredData = $derived.by(() => {
		const entities = [...allHeroes, ...allItems].map((entity) => ({
			'@type': 'Thing',
			name: entity.alt
		}));

		return {
			'@graph': [
				{
					'@type': 'Article',
					'@id': `${canonical}#article`,
					headline: changelog.title,
					name: title,
					description,
					url: canonical,
					mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
					datePublished: publishedTime,
					dateModified: publishedTime,
					image: {
						'@type': 'ImageObject',
						url: image,
						width: 1200,
						height: 630
					},
					author: { '@type': 'Person', name: changelog.author },
					publisher: {
						'@type': 'Organization',
						name: SITE_NAME,
						url: SITE_URL,
						logo: {
							'@type': 'ImageObject',
							url: absoluteUrl('/android-chrome-512x512.png'),
							width: 512,
							height: 512
						}
					},
					articleSection: 'Deadlock Patch Notes',
					isAccessibleForFree: true,
					inLanguage: 'en-US',
					isBasedOn: {
						'@type': 'CreativeWork',
						url: changelog.sourceUrl
					},
					about: entities
				},
				// One entry per URL: "Deadlog" and "Patch Notes" both pointed at "/", which
				// Google's structured-data validator flags as a duplicate ListItem.
				breadcrumbList([
					{ name: SITE_NAME, path: '/' },
					{ name: changelog.title, path: patchPath }
				])
			]
		};
	});
</script>

{#snippet stat(count: number, label: string, kind: string)}
	<span class="patch-stat" data-entity-kind={kind}>
		<strong>{count}</strong>
		<span>{label}</span>
	</span>
{/snippet}

<MetaTags
	{...pageMeta({
		title,
		description,
		canonical,
		image,
		indexable: isIndexable,
		openGraph: {
			type: 'article',
			article: {
				publishedTime,
				modifiedTime: publishedTime,
				section: 'Deadlock Patch Notes',
				tags: [...allHeroes, ...allItems].map((entity) => entity.alt)
			}
		}
	})}
/>

{#if isIndexable}
	<JsonLd schema={structuredData} />
{/if}

<main class="page-container patch-page">
	<a href={backHref} class="back-link">
		<ArrowLeft class="icon" />
		Back to all changes
	</a>

	{#if filterActive}
		<div class="filter-notice clip-corner-sm">
			{#if mogFilter}
				<span class="kicker-sm"> Filtered to </span>
				<span class="filter-selection">{matchedLabel}</span>
			{:else}
				<span>
					No changes for <span class="filter-selection">{selectedLabel}</span> in this patch.
				</span>
			{/if}
			<a href={patchPath} class="clear-filter"> Show all changes </a>
		</div>
	{/if}

	{#if showToc}
		<button
			type="button"
			onclick={() => (tocOpen = true)}
			class="toc-trigger clip-corner-sm"
			aria-label="Open table of contents"
		>
			<ListIcon class="icon" />
			Contents
		</button>
	{/if}

	<div class="patch-layout">
		{#if showToc}
			<aside class="patch-toc">
				<div class="patch-toc-scroll" data-toc-scroll>
					<ChangelogToc {...tocProps} />
				</div>
			</aside>
		{/if}

		<article class="patch-article clip-corner">
			<CornerAccents tlSize="2rem" brSize="1.25rem" />
			<div class="patch-top-rule" aria-hidden="true"></div>

			<div class="patch-body">
				<header class="patch-header">
					<div class="patch-heading-row">
						<div class="patch-identity">
							<h1 class="patch-title heading-glow">
								{patchTitle.heading}
							</h1>

							<div class="patch-metadata">
								<div class="patch-byline">
									<Avatar.Root class="article-author-avatar">
										<Avatar.Image src={changelog.authorImage} alt={changelog.author} />
										<Avatar.Fallback class="article-author-initials">
											{authorInitials(changelog.author)}
										</Avatar.Fallback>
									</Avatar.Root>
									<span class="byline-text">
										By <span class="author-name">{changelog.author}</span>
										{#if patchTitle.named}
											on
											<time datetime={changelog.date.toISOString()}
												>{formatDate(changelog.date)}</time
											>
										{/if}
										at
										<time datetime={changelog.date.toISOString()}
											>{formatTime(changelog.date)}</time
										>
									</span>
								</div>

								{#if heroCount > 0 || itemCount > 0}
									<div class="metadata-divider" aria-hidden="true"></div>
									<div class="patch-stats">
										{#if heroCount > 0}
											{@render stat(
												heroCount,
												plural(heroCount, 'hero', 'heroes'),
												'hero'
											)}
										{/if}
										{#if itemCount > 0}
											{@render stat(itemCount, plural(itemCount, 'item'), 'item')}
										{/if}
									</div>
								{/if}
							</div>
						</div>

						<div class="patch-actions">
							<a
								href={changelog.sourceUrl}
								target="_blank"
								rel="external noopener noreferrer"
								class="ui-focus-ring original-link"
								aria-label="View original patch notes"
							>
								<ExternalLink class="icon" />
								<span class="original-label">Original</span>
							</a>
							<Button
								size="icon"
								onclick={copyLink}
								class="copy-patch-link"
								aria-label="Copy link to clipboard"
							>
								<Link class="icon" />
							</Button>
						</div>
					</div>

					<hr class="editorial-divider" />
				</header>

				<MogContent content={MogComponent} {icons} filter={mogFilter} />
			</div>
		</article>
	</div>
</main>

{#if showToc}
	<Sheet.Root bind:open={tocOpen}>
		<Sheet.Content class="toc-sheet">
			<Sheet.Header>
				<Sheet.Title>Contents</Sheet.Title>
				<Sheet.Description>Jump to a section or affected entity.</Sheet.Description>
			</Sheet.Header>
			<div class="toc-sheet-scroll">
				<ChangelogToc {...tocProps} onnavigate={() => (tocOpen = false)} size="lg" />
			</div>
		</Sheet.Content>
	</Sheet.Root>
{/if}

<style>
	@layer components.features {
		.patch-page {
			max-inline-size: 56rem;
			margin-block: 2rem 6rem;
		}
		.back-link {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 1rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			transition: color var(--duration-normal);
			&:hover {
				color: var(--signal);
			}
		}
		.filter-notice {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.25rem 0.75rem;
			margin-bottom: 1.5rem;
			border: 1px solid color-mix(in srgb, var(--signal) 30%, transparent);
			padding: 0.625rem 1rem;
			background: color-mix(in srgb, var(--signal) 5%, transparent);
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.filter-selection {
			color: var(--foreground);
			font-weight: 500;
		}
		.clear-filter {
			margin-left: auto;
			color: var(--signal);
			font: 600 var(--text-xs)/var(--leading-xs) var(--font-mono);
			&:hover {
				text-decoration: underline;
			}
		}
		.toc-trigger {
			display: flex;
			block-size: 2.5rem;
			align-items: center;
			gap: 0.5rem;
			margin: 0 0 1rem auto;
			border: 1px solid var(--border);
			padding-inline: 0.75rem;
			background: var(--card);
			color: var(--foreground);
			font: 600 var(--text-xs)/var(--leading-xs) var(--font-mono);
			text-transform: uppercase;
			letter-spacing: 0.05em;
			transition:
				color var(--duration-normal),
				border-color var(--duration-normal);
			&:hover {
				border-color: var(--signal);
				color: var(--signal);
			}
		}
		.patch-layout {
			display: flex;
			gap: 2rem;
		}
		.patch-toc {
			display: none;
			inline-size: 14rem;
			flex-shrink: 0;
		}
		.patch-toc-scroll {
			position: sticky;
			top: 12rem;
			max-block-size: calc(100dvh - 13rem);
			overflow-y: auto;
			overscroll-behavior: contain;
			padding-right: 0.25rem;
			scrollbar-gutter: stable;
		}
		.patch-article {
			position: relative;
			min-inline-size: 0;
			flex: 1;
			overflow: hidden;
			border: 1px solid var(--border);
			background: var(--card);
		}
		.patch-top-rule {
			position: absolute;
			inset-inline: 0;
			top: 0;
			block-size: 1px;
			background: linear-gradient(
				to right,
				color-mix(in srgb, var(--primary) 60%, transparent),
				color-mix(in srgb, var(--signal) 35%, transparent),
				transparent
			);
		}
		.patch-body {
			position: relative;
			padding: 1rem;
		}
		.patch-header {
			margin-bottom: 1rem;
		}
		.patch-heading-row {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1rem;
			margin-bottom: 1rem;
		}
		.patch-identity {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.patch-title {
			color: var(--foreground);
			font: 500 var(--text-3xl)/1.25 var(--font-display);
			letter-spacing: 0.025em;
		}
		.patch-metadata {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.75rem;
		}
		.patch-byline {
			display: flex;
			align-items: center;
			gap: 0.625rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		:global(.article-author-avatar) {
			inline-size: 1.75rem;
			block-size: 1.75rem;
			border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
			box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary) 10%, transparent);
		}
		:global(.article-author-initials) {
			color: var(--muted-foreground);
			font-family: var(--font-mono);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
			letter-spacing: 0.025em;
		}
		.byline-text {
			letter-spacing: -0.025em;
		}
		.author-name {
			color: var(--foreground);
			font-weight: 500;
		}
		.metadata-divider {
			inline-size: 1px;
			block-size: 1rem;
			background: var(--border);
		}
		.patch-stats {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.patch-stat {
			display: flex;
			align-items: baseline;
			gap: 0.25rem;
			color: var(--muted-foreground);
			& strong {
				color: var(--entity-accent);
				font-family: var(--font-mono);
				font-weight: 700;
			}
		}
		.patch-actions {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
		.original-link {
			display: flex;
			block-size: 2.5rem;
			align-items: center;
			gap: 0.5rem;
			border-radius: var(--radius-md);
			padding-inline: 0.75rem;
			color: var(--muted-foreground);
			font: 600 var(--text-xs)/var(--leading-xs) var(--font-mono);
			transition:
				background-color var(--duration-normal),
				color var(--duration-normal);
			&:hover {
				background: color-mix(in srgb, var(--primary) 10%, transparent);
				color: var(--primary);
			}
		}
		.original-label {
			display: none;
		}
		:global(.copy-patch-link) {
			color: var(--muted-foreground);
		}
		:global(.copy-patch-link:hover) {
			background: color-mix(in srgb, var(--signal) 10%, transparent);
			color: var(--signal);
		}
		:global(.toc-sheet) {
			max-block-size: 70dvh;
			padding-inline: 1rem;
		}
		:global(.toc-sheet [data-slot='sheet-title']) {
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			letter-spacing: -0.025em;
		}
		.toc-sheet-scroll {
			overflow-y: auto;
			padding: 0 0.5rem 1.5rem;
		}
		@media (min-width: 40rem) {
			.patch-body {
				padding: 1.5rem;
			}
			.original-label {
				display: inline;
			}
		}
		@media (min-width: 48rem) {
			.patch-body {
				padding: 2rem;
			}
		}
		@media (min-width: 80rem) {
			.patch-page {
				max-inline-size: 72rem;
			}
			.patch-toc {
				display: block;
			}
			.toc-trigger {
				display: none;
			}
		}
	}
</style>
