<script lang="ts">
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import { absoluteUrl, breadcrumbList, SITE_NAME, SITE_URL } from '$lib/seo';
	import { formatDate } from '@deadlog/utils';
	import Activity from '@lucide/svelte/icons/activity';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const hero = $derived(data.hero);
	const changelogs = $derived(data.changelogs);
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);
	const canonical = $derived(absoluteUrl(`/hero/${hero.slug}`));
	const isIndexable = $derived(hero.isReleased && changelogs.length > 0);
	const accent = $derived(
		hero.heroType ? `var(--type-${hero.heroType})` : 'var(--signal)'
	);
	const entity = $derived({ type: 'hero' as const, name: hero.name, image: hero.image });
	const countedPatches = $derived(
		changelogs.filter((changelog) => changelog.changeCount !== null).length
	);
	const unknownPatches = $derived(changelogs.length - countedPatches);
	const totalChanges = $derived(
		changelogs.reduce((total, changelog) => total + (changelog.changeCount ?? 0), 0)
	);
	const changeValue = $derived(
		unknownPatches === 0
			? String(totalChanges)
			: countedPatches > 0
				? `${totalChanges}+`
				: 'N/A'
	);
	const oldestPatch = $derived(changelogs.at(-1));
	const timelinePatches = $derived(
		changelogs.map((changelog) => ({
			id: changelog.id,
			date: changelog.date,
			changeCount: changelog.changeCount
		}))
	);
	const structuredData = $derived.by(() => ({
		'@graph': [
			{
				'@type': 'CollectionPage',
				'@id': `${canonical}#webpage`,
				url: canonical,
				name: title,
				description,
				image,
				dateModified: changelogs[0]?.date.toISOString(),
				inLanguage: 'en-US',
				isPartOf: { '@id': `${SITE_URL}/#website` },
				about: [
					{ '@type': 'VideoGame', name: 'Deadlock' },
					{ '@type': 'Thing', name: hero.name, image: hero.image }
				],
				mainEntity: {
					'@type': 'ItemList',
					numberOfItems: changelogs.length,
					itemListElement: changelogs.map((changelog, index) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: changelog.title,
						url: absoluteUrl(`/change/${encodeURIComponent(changelog.id)}`)
					}))
				}
			},
			breadcrumbList([
				{ name: SITE_NAME, path: '/' },
				{ name: 'Heroes', path: '/heroes' },
				{ name: hero.name, path: `/hero/${hero.slug}` }
			])
		]
	}));
</script>

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
		type: 'website',
		title,
		description,
		url: canonical,
		siteName: SITE_NAME,
		locale: 'en_US',
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

<main class="bg-wire-grid min-h-screen">
	<div class="container mx-auto mt-6 mb-24 max-w-6xl px-3 sm:mt-8 sm:px-4">
		<a
			href="/heroes"
			class="text-muted-foreground hover:text-signal mb-6 inline-flex min-h-6 items-center gap-2 text-sm transition-colors sm:mb-8"
		>
			<ArrowLeft class="size-4" />
			<span>Back to heroes</span>
		</a>

		<header
			class="clip-corner-lg bg-card relative mb-10 overflow-hidden border-2 p-5 sm:p-8 lg:p-10"
			style:border-color="color-mix(in oklab, {accent} 42%, var(--border))"
		>
			<CornerAccents
				tlSize="4rem"
				brSize="3rem"
				thickness="2px"
				tlColor="bg-signal/60"
				brColor="bg-primary/35"
			/>
			<div
				class="pointer-events-none absolute inset-0"
				style:background="radial-gradient(circle at 12% 20%, color-mix(in oklab, {accent} 18%,
				transparent), transparent 42%)"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute inset-x-0 top-0 h-px"
				style:background="linear-gradient(to right, {accent}, var(--signal), transparent
				78%)"
				aria-hidden="true"
			></div>

			<div
				class="relative z-10 grid gap-7 md:grid-cols-[auto_minmax(0,1fr)] md:items-center"
			>
				{#if hero.image}
					<div class="relative mx-auto shrink-0 md:mx-0">
						<div
							class="absolute inset-2 -z-10 blur-2xl"
							style:background-color={accent}
							style:opacity="0.24"
							aria-hidden="true"
						></div>
						<div
							class="clip-corner-sm bg-muted/30 relative border-2 p-1.5"
							style:border-color={accent}
						>
							<img
								src={hero.image}
								alt="{hero.name} in Deadlock"
								width="160"
								height="160"
								fetchpriority="high"
								class="clip-corner-sm size-28 object-cover sm:size-36 lg:size-40"
							/>
						</div>
					</div>
				{/if}

				<div class="min-w-0 text-center md:text-left">
					<div class="mb-3 flex items-center justify-center gap-2 md:justify-start">
						<span class="h-px w-7" style:background-color={accent} aria-hidden="true"
						></span>
						<span
							class="font-mono text-[10px] font-bold tracking-[0.22em] uppercase"
							style:color={accent}
						>
							{hero.heroType ? `${hero.heroType} hero` : 'Hero profile'}
						</span>
					</div>
					<h1
						class="text-foreground font-display heading-glow break-words text-4xl leading-none font-medium tracking-wide sm:text-5xl lg:text-6xl"
					>
						{hero.name}
					</h1>
					<p class="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
						Canonical patch history for {hero.name}, with entity-specific changes
						separated from the rest of each update.
					</p>

					<dl class="mt-6 grid grid-cols-2 gap-px overflow-hidden border sm:grid-cols-3">
						<div class="bg-muted/30 p-3 text-left">
							<dt
								class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase"
							>
								Patches
							</dt>
							<dd class="text-foreground mt-1 font-mono text-xl font-bold">
								{changelogs.length}
							</dd>
						</div>
						<div class="bg-muted/30 p-3 text-left">
							<dt
								class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase"
							>
								Changes
							</dt>
							<dd class="mt-1 font-mono text-xl font-bold" style:color={accent}>
								{changeValue}
							</dd>
						</div>
						<div class="bg-muted/30 col-span-2 p-3 text-left sm:col-span-1">
							<dt
								class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase"
							>
								Tracked since
							</dt>
							<dd class="text-foreground mt-1 text-sm font-semibold">
								{oldestPatch ? formatDate(oldestPatch.date) : 'No patches yet'}
							</dd>
						</div>
					</dl>
					{#if unknownPatches > 0}
						<p
							class="text-muted-foreground mt-2 font-mono text-[9px] tracking-wide uppercase"
						>
							{unknownPatches} patch{unknownPatches === 1 ? '' : 'es'} awaiting a reliable count
						</p>
					{/if}
				</div>
			</div>

			{#if timelinePatches.length > 1}
				<div class="border-border/60 relative z-10 mt-7 border-t pt-5">
					<div class="mb-2 flex items-center justify-between gap-3">
						<span
							class="text-muted-foreground font-mono text-[9px] font-bold tracking-widest uppercase"
						>
							Patch cadence
						</span>
						<span class="text-muted-foreground font-mono text-[9px]">
							{timelinePatches.length} points
						</span>
					</div>
					<PatchTimeline patches={timelinePatches} {entity} {accent} />
				</div>
			{/if}
		</header>

		<section aria-labelledby="history-heading">
			<div class="mb-6 flex items-end justify-between gap-4">
				<div>
					<p
						class="text-signal font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
					>
						Entity log
					</p>
					<h2
						id="history-heading"
						class="text-foreground font-display mt-1 text-2xl font-medium tracking-wide sm:text-3xl"
					>
						Change History
					</h2>
				</div>
				<span class="text-muted-foreground font-mono text-xs">
					{changelogs.length} patch{changelogs.length === 1 ? '' : 'es'}
				</span>
			</div>

			{#if changelogs.length > 0}
				<ol class="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
					{#each changelogs as changelog (changelog.id)}
						<li>
							<PatchPreviewCard
								id={changelog.id}
								date={changelog.date}
								author={changelog.author}
								authorImage={changelog.authorImage}
								changeCount={changelog.changeCount}
								{entity}
								{accent}
							/>
						</li>
					{/each}
				</ol>
			{:else}
				<div
					class="clip-corner bg-card border-border relative overflow-hidden border-2 p-8 text-center sm:p-12"
				>
					<CornerAccents tlSize="2rem" tlColor="bg-signal/50" />
					<Activity class="text-signal/60 mx-auto mb-4 size-8" />
					<p class="text-muted-foreground font-mono text-xs tracking-wide uppercase">
						No log entries
					</p>
					<p class="text-foreground mt-2 text-lg">No recorded changes for {hero.name}.</p>
				</div>
			{/if}
		</section>
	</div>
</main>
