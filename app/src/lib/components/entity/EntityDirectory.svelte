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
	import { shallowParams } from '$lib/stores/shallowParams.svelte';
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
	} from '$lib/seo';
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

<main class="container mx-auto mt-8 mb-24 max-w-6xl px-4">
	<header class="mb-6">
		<div class="flex items-baseline gap-3">
			<h1
				class="font-display text-foreground text-4xl font-medium tracking-wide sm:text-5xl"
			>
				{heading}
			</h1>
			<span
				id="{kind}-directory-count"
				class="text-muted-foreground font-mono text-xs"
				role="status"
				>{filtered.length}{params.name || category ? ` / ${entries.length}` : ''}
				{listing.label.toLowerCase()}</span
			>
		</div>
		<p class="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">{lede}</p>
		<div class="js-only mt-5 flex flex-wrap items-center gap-3">
			<div
				class="border-border bg-card focus-within:border-signal relative w-full max-w-md rounded-md border"
			>
				<label for="{kind}-directory-search" class="sr-only"
					>Filter {listing.label.toLowerCase()} by name</label
				>
				<Search
					class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
				/>
				<input
					id="{kind}-directory-search"
					type="search"
					bind:value={params.name}
					aria-describedby="{kind}-directory-count"
					placeholder="Find {kind === 'hero' ? 'a hero' : 'an item'}…"
					class="placeholder:text-muted-foreground min-h-11 w-full bg-transparent py-2 pr-3 pl-10 text-base outline-none"
				/>
			</div>
			{#if kind === 'item'}
				<div class="flex flex-wrap gap-1" role="group" aria-label="Item category">
					{#each ['', ...ITEM_CATEGORIES] as value (value)}
						<button
							type="button"
							aria-pressed={category === value}
							onclick={() => (params.category = value)}
							class="ui-focus-ring text-muted-foreground min-h-11 rounded-md px-3 text-sm capitalize idle-hover:text-foreground selected:(bg-signal/10 text-signal)"
							>{value || 'All'}</button
						>
					{/each}
				</div>
			{/if}
		</div>
	</header>
	<section aria-label="{listing.label} directory">
		{#if filtered.length}
			<ul
				class="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			>
				{#each filtered as entry, index (entry.id)}
					<li>
						<a
							href={entry.href}
							class="clip-corner-sm border-subtle bg-card hover:border-signal/60 flex h-full min-h-24 flex-col items-start gap-3 border p-3 transition-colors sm:flex-row sm:items-center"
						>
							<img
								src={entry.image}
								alt=""
								width="48"
								height="48"
								loading={index < 10 ? 'eager' : 'lazy'}
								decoding="async"
								class="bg-background size-12 shrink-0 rounded-md {kind === 'item'
									? 'object-contain p-1'
									: 'object-cover'}"
							/>
							<div class="min-w-0">
								<h2
									class="text-foreground text-sm leading-snug font-semibold break-words"
								>
									{entry.name}
								</h2>
								{#if entry.subtitle}<p
										class="text-muted-foreground mt-1 font-mono text-xs capitalize"
									>
										{entry.subtitle}
									</p>{/if}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="border-subtle border-t py-8" role="status">
				<p class="text-muted-foreground text-sm">
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
					class="ui-focus-ring text-signal mt-2 min-h-11 rounded-sm text-sm hover:underline"
					>Clear directory filters</button
				>
			</div>
		{/if}
	</section>
</main>
