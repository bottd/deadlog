<script module lang="ts">
	import type { ItemCategory } from '@deadlog/utils';

	export interface DirectoryEntry {
		id: number | string;
		name: string;
		href: string;
		image: string;
		subtitle?: string | null;
		category?: ItemCategory | null;
	}
	export function releasedByName<T extends { isReleased: boolean; name: string }>(
		entities: T[]
	): T[] {
		return entities
			.filter((entity) => entity.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name));
	}
</script>

<script lang="ts">
	import { shallowParams } from '#lib/stores/shallowParams.svelte.ts';
	import { ITEM_CATEGORIES, isItemCategory } from '@deadlog/utils';
	import Search from '@lucide/svelte/icons/search';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import {
		absoluteUrl,
		collectionPageSchema,
		DEADLOCK_GAME,
		DEFAULT_SOCIAL_IMAGE,
		ENTITY_LISTING,
		pageMeta,
		SITE_NAME
	} from '#lib/seo.ts';
	let {
		kind,
		heading,
		lede,
		entries,
		seo
	}: {
		kind: 'hero' | 'item';
		heading: string;
		lede: string;
		entries: DirectoryEntry[];
		seo: { title: string; description: string };
	} = $props();
	const listing = $derived(ENTITY_LISTING[kind]);
	const canonical = $derived(absoluteUrl(listing.path));
	// Safari throws past roughly 100 replaceState calls in 30 seconds.
	const params = shallowParams({ name: 250, category: 0 });
	const category = $derived(
		kind === 'item' && isItemCategory(params.category) ? params.category : ''
	);
	const needle = $derived(params.name.trim().toLowerCase());
	const searchable = $derived(
		entries.map((entry) => ({ ...entry, haystack: entry.name.toLowerCase() }))
	);
	const filtered = $derived(
		searchable.filter(
			(entry) =>
				entry.haystack.includes(needle) && (!category || entry.category === category)
		)
	);
</script>

<MetaTags {...pageMeta({ title: seo.title, description: seo.description, canonical })} />
<JsonLd
	schema={collectionPageSchema({
		canonical,
		title: seo.title,
		description: seo.description,
		image: DEFAULT_SOCIAL_IMAGE,
		about: [DEADLOCK_GAME],
		items: entries.map((entry) => ({ name: entry.name, url: absoluteUrl(entry.href) })),
		breadcrumbs: [
			{ name: SITE_NAME, path: '/' },
			{ name: listing.label, path: listing.path }
		]
	})}
/>

<main class="page-container directory-page">
	<header>
		<div class="heading-row">
			<h1 class="directory-title">
				{heading}
			</h1>
			<span id="{kind}-directory-count" class="directory-count metadata" role="status"
				>{filtered.length}{params.name || category ? ` / ${entries.length}` : ''}
				{listing.label.toLowerCase()}</span
			>
		</div>
		<p class="directory-lede">{lede}</p>
		<div class="js-only directory-filters">
			<div class="directory-search">
				<label for="{kind}-directory-search" class="sr-only"
					>Filter {listing.label.toLowerCase()} by name</label
				>
				<Search class="icon directory-search-icon" />
				<input
					id="{kind}-directory-search"
					type="search"
					bind:value={params.name}
					aria-describedby="{kind}-directory-count"
					placeholder="Find {kind === 'hero' ? 'a hero' : 'an item'}…"
					class="directory-search-input"
				/>
			</div>
			{#if kind === 'item'}
				<div class="category-filters" role="group" aria-label="Item category">
					{#each ['', ...ITEM_CATEGORIES] as value (value)}
						<button
							type="button"
							aria-pressed={category === value}
							onclick={() => (params.category = value)}
							class="ui-focus-ring category-button">{value || 'All'}</button
						>
					{/each}
				</div>
			{/if}
		</div>
	</header>
	<section aria-label="{listing.label} directory">
		{#if filtered.length}
			<ul class="directory-grid">
				{#each filtered as entry, index (entry.id)}
					<li>
						<a
							href={entry.href}
							class="clip-corner-sm directory-card"
							data-entity-kind={kind}
						>
							<img
								src={entry.image}
								alt=""
								width="48"
								height="48"
								loading={index < 10 ? 'eager' : 'lazy'}
								decoding="async"
							/>
							<div class="entry-text">
								<h2>
									{entry.name}
								</h2>
								{#if entry.subtitle}<p class="entry-subtitle metadata">
										{entry.subtitle}
									</p>{/if}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="directory-empty" role="status">
				<p>
					No {listing.label.toLowerCase()} match {params.name
						? `“${params.name}”`
						: 'this category'}{params.name && category ? ` in ${category}` : ''}.
				</p>
				<button
					type="button"
					onclick={() => {
						params.name = '';
						params.category = '';
					}}
					class="ui-focus-ring clear-directory">Clear directory filters</button
				>
			</div>
		{/if}
	</section>
</main>

<style>
	@layer components.features {
		.directory-page {
			max-inline-size: 72rem;
			margin-block: 2rem 6rem;
		}
		header {
			margin-bottom: 1.5rem;
		}
		.heading-row {
			display: flex;
			align-items: baseline;
			gap: 0.75rem;
		}
		.directory-title {
			color: var(--foreground);
			font: 500 var(--text-4xl)/var(--leading-4xl) var(--font-display);
			letter-spacing: 0.025em;
		}
		.directory-lede {
			max-inline-size: 42rem;
			margin-top: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
		}
		.directory-filters {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.75rem;
			margin-top: 1.25rem;
		}
		.directory-search {
			position: relative;
			inline-size: 100%;
			max-inline-size: 28rem;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			background: var(--card);
			&:focus-within {
				border-color: var(--signal);
			}
		}
		:global(.directory-search-icon) {
			position: absolute;
			top: 50%;
			left: 0.75rem;
			translate: 0 -50%;
			pointer-events: none;
			color: var(--muted-foreground);
		}
		.directory-search-input {
			min-block-size: 2.75rem;
			inline-size: 100%;
			padding: 0.5rem 0.75rem 0.5rem 2.5rem;
			font-size: var(--text-base);
			line-height: var(--leading-base);
			outline: none;
		}
		.category-filters {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
		.category-button {
			min-block-size: 2.75rem;
			border-radius: var(--radius-md);
			padding-inline: 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			text-transform: capitalize;
			&:hover:not([aria-pressed='true']) {
				color: var(--foreground);
			}
			&[aria-pressed='true'] {
				background: color-mix(in srgb, var(--signal) 10%, transparent);
				color: var(--signal);
			}
		}
		.directory-grid {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			gap: 0.75rem;
		}
		.directory-card {
			display: flex;
			block-size: 100%;
			min-block-size: 6rem;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
			border: 1px solid var(--border-subtle);
			padding: 0.75rem;
			background: var(--card);
			transition: border-color var(--duration-normal);
			&:hover {
				border-color: color-mix(in srgb, var(--signal) 60%, transparent);
			}
			& img {
				inline-size: 3rem;
				block-size: 3rem;
				flex-shrink: 0;
				border-radius: var(--radius-md);
				background: var(--background);
				object-fit: cover;
			}
			&[data-entity-kind='item'] img {
				padding: 0.25rem;
				object-fit: contain;
			}
			& h2 {
				color: var(--foreground);
				font-size: var(--text-sm);
				line-height: 1.375;
				font-weight: 600;
				overflow-wrap: break-word;
			}
		}
		.entry-text {
			min-inline-size: 0;
		}
		.entry-subtitle {
			margin-top: 0.25rem;
			text-transform: capitalize;
		}
		.directory-empty {
			border-top: 1px solid var(--border-subtle);
			padding-block: 2rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.clear-directory {
			min-block-size: 2.75rem;
			margin-top: 0.5rem;
			border-radius: var(--radius-sm);
			color: var(--signal);
			&:hover {
				text-decoration: underline;
			}
		}
		@media (min-width: 360px) {
			.directory-grid {
				grid-template-columns: repeat(2, minmax(0, 1fr));
			}
		}
		@media (min-width: 40rem) {
			.directory-title {
				font-size: var(--text-5xl);
				line-height: 1;
			}
			.directory-grid {
				grid-template-columns: repeat(3, minmax(0, 1fr));
			}
			.directory-card {
				flex-direction: row;
				align-items: center;
			}
		}
		@media (min-width: 64rem) {
			.directory-grid {
				grid-template-columns: repeat(4, minmax(0, 1fr));
			}
		}
		@media (min-width: 80rem) {
			.directory-grid {
				grid-template-columns: repeat(5, minmax(0, 1fr));
			}
		}
	}
</style>
