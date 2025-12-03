<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { Changelog } from '$lib/components/changelog';
	import { ScrollToTop } from '$lib/components/scroll-to-top';
	import type { PageData } from './$types';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';

	let { data }: { data: PageData } = $props();
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);

	const params = getSearchParams();
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
<Changelog />
<ScrollToTop />
