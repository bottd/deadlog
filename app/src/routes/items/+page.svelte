<script lang="ts">
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import EntityDirectory from '$lib/components/entity/EntityDirectory.svelte';
	import { getItemImage } from '$lib/utils/entityImages';
	import {
		absoluteUrl,
		collectionPageSchema,
		DEADLOCK_GAME,
		DEFAULT_SOCIAL_IMAGE,
		pageMeta,
		SITE_NAME
	} from '$lib/seo';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const title = 'Deadlock Items: Balance Change History | Deadlog';
	const description =
		'Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.';
	const canonical = absoluteUrl('/items');

	const entries = $derived(
		(data.items ?? [])
			.filter((item) => item.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((item) => ({
				id: item.id,
				name: item.name,
				href: `/item/${item.slug}`,
				image: getItemImage(item)
			}))
	);
</script>

<MetaTags {...pageMeta({ title, description, canonical })} />

<JsonLd
	schema={collectionPageSchema({
		canonical,
		title,
		description,
		image: DEFAULT_SOCIAL_IMAGE,
		about: [DEADLOCK_GAME],
		items: entries.map((entry) => ({ name: entry.name, url: absoluteUrl(entry.href) })),
		breadcrumbs: [
			{ name: SITE_NAME, path: '/' },
			{ name: 'Items', path: '/items' }
		]
	})}
/>

<EntityDirectory
	kind="item"
	eyebrow="Item catalog"
	heading="Items"
	lede="Browse every released item, then open a chronological record of its buffs, nerfs, and balance changes."
	listEyebrow="Select equipment"
	{entries}
/>
