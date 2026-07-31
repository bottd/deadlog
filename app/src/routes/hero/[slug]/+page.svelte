<script lang="ts">
	import EntityChangelogPage from '$lib/components/entity/EntityChangelogPage.svelte';
	import { absoluteUrl, entityCollectionSchema, pageMeta } from '$lib/seo';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const hero = $derived(data.hero);
	const changelogs = $derived(data.changelogs);
	const path = $derived(`/hero/${hero.slug}`);
	const canonical = $derived(absoluteUrl(path));
	// Deliberately not gated on patch count: the sitemap lists every released hero, and
	// a newly released one has no patches yet — exactly when its page matters most.
	const isIndexable = $derived(hero.isReleased);
	const accent = $derived(
		hero.heroType ? `var(--type-${hero.heroType})` : 'var(--signal)'
	);
	const entity = $derived({ type: 'hero' as const, name: hero.name, image: hero.image });
</script>

<MetaTags
	{...pageMeta({
		title: data.title,
		description: data.description,
		canonical,
		image: data.image,
		indexable: isIndexable
	})}
/>

{#if isIndexable}
	<JsonLd
		schema={entityCollectionSchema({
			entity,
			path,
			title: data.title,
			description: data.description,
			image: data.image,
			changelogs
		})}
	/>
{/if}

<EntityChangelogPage
	{entity}
	{accent}
	{changelogs}
	streaks={data.streaks}
	label={hero.heroType ? `${hero.heroType} hero` : 'Hero profile'}
	lede="Canonical patch history for {hero.name}, with entity-specific changes separated from the rest of each update."
/>
