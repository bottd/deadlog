<script lang="ts">
	import EntityDirectory, {
		releasedByName
	} from '$lib/components/entity/EntityDirectory.svelte';
	import { getItemImage } from '$lib/utils/entityImages';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const entries = $derived(
		releasedByName(data.items ?? []).map((item) => ({
			id: item.id,
			name: item.name,
			href: `/item/${item.slug}`,
			image: getItemImage(item),
			subtitle: item.category,
			category: item.category
		}))
	);
</script>

<EntityDirectory
	kind="item"
	heading="Items"
	lede="Find an item to trace its balance changes across the patch archive."
	{entries}
	seo={{
		title: 'Deadlock Items: Balance Change History | Deadlog',
		description:
			'Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
	}}
/>
