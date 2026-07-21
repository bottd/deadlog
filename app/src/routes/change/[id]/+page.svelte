<script lang="ts">
	import { page } from '$app/state';
	import { building } from '$app/environment';
	import { ChangelogToc, EntityPreview, NorgContent } from '$lib/components/changelog';
	import { searchParams } from '$lib/stores/searchParams.svelte';
	import type { EntityIcon } from '$lib/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { formatDate, formatTime } from '@deadlog/utils';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Link from '@lucide/svelte/icons/link';
	import ListIcon from '@lucide/svelte/icons/list';
	import { toast } from 'svelte-sonner';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { absoluteUrl, breadcrumbList, SITE_NAME, SITE_URL } from '$lib/seo';

	const {
		changelog,
		heroMap,
		itemMap,
		abilityMap,
		title,
		description,
		image,
		isIndexable,
		NorgComponent
	} = page.data;

	let tocOpen = $state(false);

	async function copyLink() {
		await navigator.clipboard.writeText(window.location.href);
		toast.success('Copied to clipboard');
	}

	// carry the list-view filter and show only the selected entities' notes
	const selHeroes = $derived(searchParams.hero);
	const selItems = $derived(searchParams.item);
	const allHeroes = $derived<EntityIcon[]>(changelog.icons?.heroes ?? []);
	const allItems = $derived<EntityIcon[]>(changelog.icons?.items ?? []);

	const has = (names: string[], name: string) =>
		names.some((n) => n.toLowerCase() === name.toLowerCase());
	const matchedHeroes = $derived(allHeroes.filter((h) => has(selHeroes, h.alt)));
	const matchedItems = $derived(allItems.filter((i) => has(selItems, i.alt)));

	const filterActive = $derived(selHeroes.length + selItems.length > 0);
	// undefined unless at least one selected entity actually changed in this patch
	const norgFilter = $derived(
		matchedHeroes.length + matchedItems.length > 0
			? { heroes: matchedHeroes.map((h) => h.alt), items: matchedItems.map((i) => i.alt) }
			: undefined
	);

	const tocHeroes = $derived(norgFilter ? matchedHeroes : allHeroes);
	const tocItems = $derived(norgFilter ? matchedItems : allItems);
	const matchedLabel = $derived(
		[...matchedHeroes, ...matchedItems].map((e) => e.alt).join(', ')
	);
	const selectedLabel = $derived([...selHeroes, ...selItems].join(', '));
	const backHref = $derived(building ? '/' : '/' + page.url.search);

	const heroCount = $derived(tocHeroes.length);
	const itemCount = $derived(tocItems.length);
	const canonical = absoluteUrl(`/change/${encodeURIComponent(changelog.id)}`);
	const publishedTime = changelog.date.toISOString();
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
					about: entities
				},
				breadcrumbList([
					{ name: 'Deadlog', path: '/' },
					{ name: 'Patch Notes', path: '/' },
					{ name: changelog.title, path: `/change/${changelog.id}` }
				])
			]
		};
	});
</script>

{#snippet stat(count: number, label: string, tone: string)}
	<span class="flex items-baseline gap-1">
		<span class="font-mono font-bold {tone}">{count}</span>
		<span class="text-muted-foreground">{label}</span>
	</span>
{/snippet}

<MetaTags
	{title}
	{description}
	{canonical}
	robots={isIndexable ? 'index,follow' : 'noindex,follow'}
	additionalRobotsProps={{
		maxImagePreview: 'large',
		maxSnippet: -1,
		maxVideoPreview: -1
	}}
	openGraph={{
		type: 'article',
		title,
		description,
		url: canonical,
		siteName: SITE_NAME,
		locale: 'en_US',
		article: {
			publishedTime,
			modifiedTime: publishedTime,
			section: 'Deadlock Patch Notes',
			tags: [...allHeroes, ...allItems].map((entity) => entity.alt)
		},
		images: [{ url: image, width: 1200, height: 630, type: 'image/png', alt: title }]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image,
		imageAlt: title
	}}
/>

{#if isIndexable}
	<JsonLd schema={structuredData} />
{/if}

<main class="container mx-auto mt-8 mb-24 max-w-4xl px-4 xl:max-w-6xl">
	<a
		href={backHref}
		data-sveltekit-reload
		class="text-muted-foreground hover:text-signal mb-8 inline-flex items-center gap-2 text-sm transition-colors"
	>
		<ArrowLeft class="size-4" />
		Back to all changes
	</a>

	{#if filterActive}
		<div
			class="clip-corner-sm border-signal/30 bg-signal/5 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 border px-4 py-2.5 text-sm"
		>
			{#if norgFilter}
				<span
					class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
				>
					Filtered to
				</span>
				<span class="text-foreground font-medium">{matchedLabel}</span>
			{:else}
				<span class="text-muted-foreground">
					No changes for <span class="text-foreground font-medium">{selectedLabel}</span> in
					this patch.
				</span>
			{/if}
			<a
				href="/change/{changelog.id}"
				class="text-signal ml-auto font-mono text-xs font-semibold hover:underline"
			>
				Show all changes
			</a>
		</div>
	{/if}

	<div class="flex gap-8">
		{#if NorgComponent && changelog.icons}
			<aside class="hidden w-56 shrink-0 xl:block">
				<div class="sticky top-[12rem]">
					<ChangelogToc heroes={tocHeroes} items={tocItems} hideGeneral={!!norgFilter} />
				</div>
			</aside>
		{/if}

		<article
			class="clip-corner bg-card border-border relative min-w-0 flex-1 overflow-hidden border"
		>
			<CornerAccents tlSize="2rem" brSize="1.25rem" />
			<div
				class="from-primary/60 via-signal/35 absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent"
				aria-hidden="true"
			></div>

			<div class="relative p-6 md:p-8">
				<header class="mb-8">
					<div class="mb-6 flex flex-wrap items-start justify-between gap-4">
						<div class="flex flex-col gap-4">
							<div class="flex items-center gap-3">
								<span
									class="bg-primary/10 text-primary border-primary/20 rounded border px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase"
								>
									{changelog.category ?? 'patch'}
								</span>
								<span class="text-muted-foreground font-mono text-[10px] tracking-wider">
									ID:{changelog.id}
								</span>
							</div>

							<h1
								class="text-foreground font-display heading-glow text-3xl leading-tight font-medium tracking-wide"
							>
								<time datetime={changelog.date.toISOString()}
									>{formatDate(changelog.date)}</time
								>
							</h1>

							<div class="flex items-center gap-4">
								<div class="text-muted-foreground flex items-center gap-2.5 text-sm">
									<Avatar.Root
										class="border-primary/30 ring-primary/10 size-7 border ring-2"
									>
										<Avatar.Image src={changelog.authorImage} alt={changelog.author} />
										<Avatar.Fallback class="bg-muted text-xs">
											{changelog.author.slice(0, 2).toUpperCase()}
										</Avatar.Fallback>
									</Avatar.Root>
									<span class="tracking-tight">
										By <span class="text-foreground font-medium">{changelog.author}</span>
										at
										<time datetime={changelog.date.toISOString()}
											>{formatTime(changelog.date)}</time
										>
									</span>
								</div>

								{#if heroCount > 0 || itemCount > 0}
									<div class="bg-border h-4 w-px" aria-hidden="true"></div>
									<div class="flex items-center gap-3 text-xs">
										{#if heroCount > 0}
											{@render stat(
												heroCount,
												heroCount !== 1 ? 'heroes' : 'hero',
												'text-primary'
											)}
										{/if}
										{#if itemCount > 0}
											{@render stat(
												itemCount,
												itemCount !== 1 ? 'items' : 'item',
												'text-signal'
											)}
										{/if}
									</div>
								{/if}
							</div>
						</div>

						<Button
							variant="ghost"
							size="icon"
							onclick={copyLink}
							class="text-muted-foreground hover:bg-signal/10 hover:text-signal"
							aria-label="Copy link to clipboard"
						>
							<Link class="size-4" />
						</Button>
					</div>

					<hr class="editorial-divider border-none" />

					{#if !NorgComponent && changelog.icons}
						<div class="mt-6 flex flex-wrap gap-3">
							{#if changelog.icons.heroes.length > 0}
								<EntityPreview entities={changelog.icons.heroes} />
							{/if}
							{#if changelog.icons.items.length > 0}
								<EntityPreview entities={changelog.icons.items} />
							{/if}
						</div>
					{/if}
				</header>

				{#if NorgComponent}
					<NorgContent
						content={NorgComponent}
						{heroMap}
						{itemMap}
						{abilityMap}
						filter={norgFilter}
					/>
				{/if}
			</div>
		</article>
	</div>
</main>

{#if NorgComponent && changelog.icons}
	<button
		onclick={() => (tocOpen = true)}
		class="bg-primary text-primary-foreground fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:opacity-80 xl:hidden"
		aria-label="Open table of contents"
	>
		<ListIcon class="size-5" />
	</button>

	<Sheet.Root bind:open={tocOpen}>
		<Sheet.Content side="bottom" class="max-h-[70vh]">
			<Sheet.Header>
				<Sheet.Title class="text-sm font-semibold tracking-tight">Contents</Sheet.Title>
			</Sheet.Header>
			<div class="overflow-y-auto px-2 pb-6">
				<ChangelogToc
					heroes={tocHeroes}
					items={tocItems}
					hideGeneral={!!norgFilter}
					onnavigate={() => (tocOpen = false)}
					size="lg"
				/>
			</div>
		</Sheet.Content>
	</Sheet.Root>
{/if}
