<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { Changelog } from '$lib/components/changelog';
	import { ScrollToTop } from '$lib/components/scroll-to-top';
	import type { PageData } from './$types';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';

	let { data }: { data: PageData } = $props();
	const { title, description, image } = data;

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

<div class="bg-background relative min-h-screen">
	<div class="relative container mx-auto px-4 py-12">
		<Changelog />
	</div>
</div>

<ScrollToTop />
