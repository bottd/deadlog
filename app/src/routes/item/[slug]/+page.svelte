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
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const item = $derived(data.item);
	const categoryMeta = $derived(
		item.category ? ITEM_CATEGORY_META[item.category] : UNCLASSIFIED_ITEM_META
	);
	const entity = $derived({ type: 'item' as const, name: item.name, image: item.image });
</script>

<EntityChangelogPage
	{entity}
	changelogs={data.changelogs}
	accent={categoryMeta.accent}
	label={item.isReleased
		? categoryMeta.label
		: `Historical ${categoryMeta.label.toLowerCase()}`}
	seo={{
		path: `/item/${item.slug}`,
		title: data.title,
		description: data.description,
		image: data.image,
		indexable: item.isReleased
	}}
>
	{#snippet labelSuffix()}
		{#if item.tier}
			<span text="muted-foreground" kicker-xs>
				/ Tier {item.tier}
			</span>
		{/if}
	{/snippet}
</EntityChangelogPage>
