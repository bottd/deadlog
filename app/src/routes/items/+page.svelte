<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Package from '@lucide/svelte/icons/package';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import { getItemImage } from '$lib/utils/entityImages';
	import {
		absoluteUrl,
		breadcrumbList,
		DEFAULT_SOCIAL_IMAGE,
		SITE_NAME,
		SITE_URL
	} from '$lib/seo';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const title = 'Deadlock Items: Balance Change History | Deadlog';
	const description =
		'Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.';
	const canonical = absoluteUrl('/items');
	const items = $derived(
		[...(data.items ?? [])]
			.filter((item) => item.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
	);
	const structuredData = $derived.by(() => ({
		'@graph': [
			{
				'@type': 'CollectionPage',
				'@id': `${canonical}#webpage`,
				url: canonical,
				name: title,
				description,
				image: DEFAULT_SOCIAL_IMAGE,
				inLanguage: 'en-US',
				isPartOf: { '@id': `${SITE_URL}/#website` },
				about: { '@type': 'VideoGame', name: 'Deadlock' },
				mainEntity: {
					'@type': 'ItemList',
					numberOfItems: items.length,
					itemListElement: items.map((item, index) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: item.name,
						url: absoluteUrl(`/item/${item.slug}`)
					}))
				}
			},
			breadcrumbList([
				{ name: SITE_NAME, path: '/' },
				{ name: 'Items', path: '/items' }
			])
		]
	}));
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	additionalRobotsProps={{
		maxImagePreview: 'large',
		maxSnippet: -1,
		maxVideoPreview: -1
	}}
	openGraph={{
		type: 'website',
		url: canonical,
		title,
		description,
		siteName: SITE_NAME,
		locale: 'en_US',
		images: [
			{
				url: DEFAULT_SOCIAL_IMAGE,
				width: 1200,
				height: 630,
				type: 'image/png',
				alt: title
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image: DEFAULT_SOCIAL_IMAGE,
		imageAlt: title
	}}
/>

<JsonLd schema={structuredData} />

<main class="container mx-auto mt-8 mb-24 max-w-6xl px-4">
	<header
		class="clip-corner bg-card border-signal/30 relative mb-10 overflow-hidden border-2 px-6 py-10 md:px-10"
	>
		<CornerAccents
			tlSize="3rem"
			brSize="2rem"
			tlColor="bg-signal/80"
			brColor="bg-primary/40"
		/>
		<div
			class="from-signal/10 via-signal/5 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent"
		></div>
		<div class="relative max-w-3xl">
			<div class="text-signal mb-3 flex items-center gap-2">
				<Package class="size-4" />
				<span class="font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
					>Equipment archive</span
				>
			</div>
			<h1
				class="text-foreground font-display heading-glow text-4xl leading-tight font-medium tracking-wide md:text-6xl"
			>
				Deadlock Items
			</h1>
			<p class="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
				Browse every released item, then open a chronological record of its buffs, nerfs,
				and balance changes.
			</p>
		</div>
	</header>

	<section aria-labelledby="item-directory-heading">
		<div class="mb-5 flex items-end justify-between gap-4">
			<div>
				<p class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
					Select equipment
				</p>
				<h2
					id="item-directory-heading"
					class="text-foreground font-display mt-1 text-2xl font-medium tracking-wide"
				>
					Item Directory
				</h2>
			</div>
			<span class="text-signal font-mono text-xs font-bold">{items.length} ITEMS</span>
		</div>

		<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{#each items as item, index (item.id)}
				<li>
					<a
						href="/item/{item.slug}"
						class="clip-corner-sm bg-card border-border hover:border-signal/55 group relative flex h-full min-h-20 items-center gap-3 overflow-hidden border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
					>
						<CornerAccents
							tlSize="1rem"
							tlColor="bg-signal/35"
							tlHover="group-hover:bg-signal"
						/>
						<div
							class="border-border bg-background flex size-12 shrink-0 items-center justify-center rounded-md border p-1.5"
						>
							<img
								src={getItemImage(item)}
								alt="{item.name} Deadlock item"
								width="48"
								height="48"
								loading={index < 10 ? 'eager' : 'lazy'}
								decoding="async"
								class="max-h-full max-w-full object-contain"
							/>
						</div>
						<h3
							class="text-foreground min-w-0 flex-1 text-sm leading-tight font-semibold"
						>
							{item.name}
						</h3>
						<ArrowRight
							class="text-signal size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
						/>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
