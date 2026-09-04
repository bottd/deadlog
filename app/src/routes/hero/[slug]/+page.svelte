<script lang="ts">
	import EntityChangelogPage from '$lib/components/entity/EntityChangelogPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const hero = $derived(data.hero);
	const accent = $derived(
		hero.heroType ? `var(--type-${hero.heroType})` : 'var(--signal)'
	);
	const entity = $derived({ type: 'hero' as const, name: hero.name, image: hero.image });
</script>

<EntityChangelogPage
	{entity}
	{accent}
	changelogs={data.changelogs}
	abilities={data.abilities}
	streaks={data.streaks}
	label={hero.heroType ? `${hero.heroType} hero` : 'Hero profile'}
	lede="Canonical patch history for {hero.name}, with entity-specific changes separated from the rest of each update."
	seo={{
		path: `/hero/${hero.slug}`,
		title: data.title,
		description: data.description,
		image: data.image,
		indexable: hero.isReleased
	}}
/>
