<script module lang="ts">
	const ITEM_CATEGORY_META = {
		weapon: { label: 'Weapon item', accent: 'var(--item-weapon)' },
		vitality: { label: 'Vitality item', accent: 'var(--item-vitality)' },
		spirit: { label: 'Spirit item', accent: 'var(--item-spirit)' }
	} as const;

	const UNCLASSIFIED_ITEM_META = {
		label: 'Item',
		accent: 'var(--signal)'
	} as const;
</script>

<script lang="ts">
	import EntityChangelogPage from '$lib/components/entity/EntityChangelogPage.svelte';
	import { absoluteUrl, entityCollectionSchema, pageMeta } from '$lib/seo';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const item = $derived(data.item);
	const changelogs = $derived(data.changelogs);
	const path = $derived(`/item/${item.slug}`);
	const canonical = $derived(absoluteUrl(path));
	// See the hero page: the sitemap lists every released item, so the page must not
	// exclude itself just because no patch has touched it yet.
	const isIndexable = $derived(item.isReleased);
	const categoryMeta = $derived(
		item.category ? ITEM_CATEGORY_META[item.category] : UNCLASSIFIED_ITEM_META
	);
	const entity = $derived({ type: 'item' as const, name: item.name, image: item.image });
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
	{changelogs}
	accent={categoryMeta.accent}
	label={categoryMeta.label}
	lede="{item.isReleased
		? 'Current catalog item.'
		: 'Historical item record.'} Entity-specific changes are separated from the rest of each update."
>
	{#snippet labelSuffix()}
		{#if item.tier}
			<span class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
				/ Tier {item.tier}
			</span>
		{/if}
	{/snippet}
</EntityChangelogPage>
