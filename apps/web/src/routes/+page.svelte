<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { Changelog } from '$lib/components/changelog';
	import { ScrollToTop } from '$lib/components/scroll-to-top';
	import { Badge } from '$lib/components/ui/badge';
	import { formatDate } from '@deadlog/utils';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import type { PageData } from './$types';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';

	let { data }: { data: PageData } = $props();
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);
	const latestPatch = $derived(data.latestPatchSummary);

	const params = getSearchParams();
	const isFiltered = $derived(
		params.hero.length > 0 || params.item.length > 0 || params.q.length > 0
	);
	const canonical = $derived.by(() =>
		params.toURLSearchParams().toString() === ''
			? 'https://deadlog.io'
			: `https://deadlog.io/?${params.toURLSearchParams().toString()}`
	);
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	openGraph={{
		type: 'website',
		url: canonical,
		title,
		description,
		images: [
			{
				url: image,
				width: 1200,
				height: 630
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image
	}}
/>

<!-- Hero Banner - only show when not filtering -->
{#if !isFiltered && latestPatch}
	<section class="container mx-auto mt-8 px-4">
		<div
			class="bg-card border-border relative overflow-hidden rounded-lg border p-6 md:p-8"
		>
			<!-- Subtle accent line -->
			<div class="bg-primary absolute top-0 left-0 h-1 w-full"></div>

			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<p
						class="text-muted-foreground mb-1 text-sm font-medium tracking-wider uppercase"
					>
						Latest Update
					</p>
					<h2 class="text-foreground font-display text-2xl tracking-tight md:text-3xl">
						{formatDate(latestPatch.date)}
					</h2>
					<div class="mt-3 flex flex-wrap items-center gap-2">
						{#if latestPatch.heroCount > 0}
							<Badge variant="secondary">
								{latestPatch.heroCount} hero{latestPatch.heroCount !== 1 ? 'es' : ''}
							</Badge>
						{/if}
						{#if latestPatch.itemCount > 0}
							<Badge variant="secondary">
								{latestPatch.itemCount} item{latestPatch.itemCount !== 1 ? 's' : ''}
							</Badge>
						{/if}
					</div>
				</div>

				<a
					href="/change/{latestPatch.id}"
					class="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all"
				>
					View full patch
					<ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
				</a>
			</div>
		</div>
	</section>
{/if}

<Changelog />
<ScrollToTop />
