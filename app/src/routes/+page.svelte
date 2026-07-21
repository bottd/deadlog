<script lang="ts">
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { Changelog } from '$lib/components/changelog';
	import { ScrollToTop } from '$lib/components/scroll-to-top';
	import type { PageData } from './$types';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL } from '$lib/seo';

	let { data }: { data: PageData } = $props();
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);

	const queryString = $derived(params.toURLSearchParams().toString());
	const hasFilters = $derived(queryString !== '');
	const shareUrl = $derived(queryString ? `${SITE_URL}/?${queryString}` : SITE_URL);
</script>

<MetaTags
	{title}
	{description}
	canonical={SITE_URL}
	robots={hasFilters ? 'noindex,follow' : 'index,follow'}
	additionalRobotsProps={{
		maxImagePreview: 'large',
		maxSnippet: -1,
		maxVideoPreview: -1
	}}
	openGraph={{
		type: 'website',
		url: shareUrl,
		title,
		description,
		siteName: SITE_NAME,
		locale: 'en_US',
		images: [
			{
				url: image,
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
		image,
		imageAlt: title
	}}
/>

{#if !hasFilters}
	<JsonLd
		schema={{
			'@graph': [
				{
					'@type': 'WebSite',
					'@id': `${SITE_URL}/#website`,
					url: SITE_URL,
					name: SITE_NAME,
					alternateName: 'Deadlock Changelog',
					description,
					inLanguage: 'en-US'
				},
				{
					'@type': 'CollectionPage',
					'@id': `${SITE_URL}/#webpage`,
					url: SITE_URL,
					name: title,
					description,
					image: DEFAULT_SOCIAL_IMAGE,
					dateModified: data.lastUpdate,
					inLanguage: 'en-US',
					isPartOf: { '@id': `${SITE_URL}/#website` },
					about: { '@type': 'VideoGame', name: 'Deadlock' }
				}
			]
		}}
	/>
{/if}

<Changelog />
<ScrollToTop />
