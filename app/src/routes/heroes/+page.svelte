<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Search from '@lucide/svelte/icons/search';
	import Users from '@lucide/svelte/icons/users';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import { getHeroCardImage } from '$lib/utils/entityImages';
	import {
		absoluteUrl,
		breadcrumbList,
		DEFAULT_SOCIAL_IMAGE,
		SITE_NAME,
		SITE_URL
	} from '$lib/seo';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let directoryQuery = $state('');

	const title = 'Deadlock Heroes: Balance Change History | Deadlog';
	const description =
		'Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.';
	const canonical = absoluteUrl('/heroes');
	const heroes = $derived(
		[...(data.heroes ?? [])]
			.filter((hero) => hero.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
	);
	const filteredHeroes = $derived.by(() => {
		const query = directoryQuery.trim().toLowerCase();
		return query
			? heroes.filter((hero) => hero.name.toLowerCase().includes(query))
			: heroes;
	});
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
					numberOfItems: heroes.length,
					itemListElement: heroes.map((hero, index) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: hero.name,
						url: absoluteUrl(`/hero/${hero.slug}`)
					}))
				}
			},
			breadcrumbList([
				{ name: SITE_NAME, path: '/' },
				{ name: 'Heroes', path: '/heroes' }
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
		class="clip-corner bg-card border-primary/30 relative mb-10 overflow-hidden border-2 px-6 py-10 md:px-10"
	>
		<CornerAccents tlSize="3rem" brSize="2rem" tlColor="bg-primary/70" />
		<div
			class="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent"
		></div>
		<div class="relative max-w-3xl">
			<div class="text-primary mb-3 flex items-center gap-2">
				<Users class="size-4" />
				<span class="font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
					>Hero roster</span
				>
			</div>
			<h1
				class="text-foreground font-display heading-glow text-4xl leading-tight font-medium tracking-wide md:text-6xl"
			>
				Deadlock Heroes
			</h1>
			<p class="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
				Browse every released hero, then open a chronological record of their buffs,
				nerfs, and balance changes.
			</p>
		</div>
	</header>

	<section aria-labelledby="hero-directory-heading">
		<div class="mb-5 flex items-end justify-between gap-4">
			<div>
				<p class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
					Select a combatant
				</p>
				<h2
					id="hero-directory-heading"
					class="text-foreground font-display mt-1 text-2xl font-medium tracking-wide"
				>
					Hero Directory
				</h2>
			</div>
			<span id="hero-directory-count" class="text-primary font-mono text-xs font-bold">
				{filteredHeroes.length}{directoryQuery ? ` / ${heroes.length}` : ''} HEROES
			</span>
		</div>

		<label for="hero-directory-search" class="sr-only">Filter heroes by name</label>
		<div
			class="border-border bg-card focus-within:border-primary relative mb-5 max-w-md border"
		>
			<Search
				class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
			/>
			<input
				id="hero-directory-search"
				type="search"
				bind:value={directoryQuery}
				aria-describedby="hero-directory-count"
				placeholder="Filter heroes..."
				class="placeholder:text-muted-foreground w-full bg-transparent py-3 pr-3 pl-10 text-sm outline-none"
			/>
		</div>

		{#if filteredHeroes.length > 0}
			<ul
				class="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
			>
				{#each filteredHeroes as hero, index (hero.id)}
					<li>
						<a
							href="/hero/{hero.slug}"
							class="clip-corner-sm bg-card border-border hover:border-primary/50 group relative flex h-full items-center gap-3 overflow-hidden border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
						>
							<CornerAccents
								tlSize="1rem"
								tlColor="bg-primary/30"
								tlHover="group-hover:bg-primary"
							/>
							<img
								src={getHeroCardImage(hero)}
								alt=""
								width="56"
								height="56"
								loading={index < 10 ? 'eager' : 'lazy'}
								decoding="async"
								class="border-border bg-background size-14 shrink-0 rounded-md border object-cover"
							/>
							<div class="min-w-0 flex-1">
								<h3 class="text-foreground truncate text-sm font-semibold">
									{hero.name}
								</h3>
								{#if hero.heroType}
									<p
										class="text-muted-foreground mt-0.5 font-mono text-[9px] tracking-wider uppercase"
									>
										{hero.heroType}
									</p>
								{/if}
							</div>
							<ArrowRight
								class="text-primary size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
							/>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="border-border bg-card text-muted-foreground border p-8 text-center">
				No heroes match "{directoryQuery}".
			</p>
		{/if}
	</section>
</main>
