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
	eyebrow="Hero roster"
	heading="Heroes"
	lede="Browse every released hero, then open a chronological record of their buffs, nerfs, and balance changes."
	listEyebrow="Select a combatant"
	{entries}
	seo={{
		title: 'Deadlock Heroes: Balance Change History | Deadlog',
		description:
			'Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
	}}
/>
