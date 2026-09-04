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
			image: getItemImage(item)
		}))
	);
</script>

<EntityDirectory
	kind="item"
	eyebrow="Item catalog"
	heading="Items"
	lede="Browse every released item, then open a chronological record of its buffs, nerfs, and balance changes."
	listEyebrow="Select equipment"
	{entries}
	seo={{
		title: 'Deadlock Items: Balance Change History | Deadlog',
		description:
			'Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
	}}
/>
