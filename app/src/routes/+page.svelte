<script lang="ts">
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { Changelog } from '$lib/components/changelog';
	import ScrollToTop from '$lib/components/scroll-to-top/ScrollToTop.svelte';
	import type { PageData } from './$types';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { DEFAULT_SOCIAL_IMAGE, pageMeta, SITE_NAME, SITE_URL } from '$lib/seo';

	let { data }: { data: PageData } = $props();
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);

	const queryString = $derived(params.toURLSearchParams().toString());
	const hasFilters = $derived(queryString !== '');
	// Also the canonical. Pairing noindex with a canonical pointing at a *different*
	// URL hands Google two contradictory instructions; noindex alone already keeps
	// filtered views out of the index.
	const shareUrl = $derived(queryString ? `${SITE_URL}/?${queryString}` : SITE_URL);
</script>

<MetaTags
	{...pageMeta({
		title,
		description,
		canonical: shareUrl,
		image,
		indexable: !hasFilters
	})}
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
