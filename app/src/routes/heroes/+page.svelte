<script lang="ts">
	import EntityDirectory, {
		releasedByName
	} from '$lib/components/entity/EntityDirectory.svelte';
	import { getHeroCardImage } from '$lib/utils/entityImages';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const entries = $derived(
		releasedByName(data.heroes ?? []).map((hero) => ({
			id: hero.id,
			name: hero.name,
			href: `/hero/${hero.slug}`,
			image: getHeroCardImage(hero),
			subtitle: hero.heroType
		}))
	);
</script>

<EntityDirectory
	kind="hero"
	heading="Heroes"
	lede="Find a hero to read every recorded buff, nerf, and balance change."
	{entries}
	seo={{
		title: 'Deadlock Heroes: Balance Change History | Deadlog',
		description:
			'Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
	}}
/>
