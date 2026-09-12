<script lang="ts">
	import EntityChangelogPage from '$lib/components/entity/EntityChangelogPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const ability = $derived(data.ability);
	const hero = $derived(data.hero);
	// The ability has no type of its own, so it inherits its hero's accent.
	const accent = $derived(
		hero.heroType ? `var(--type-${hero.heroType})` : 'var(--signal)'
	);
	const entity = $derived({
		type: 'ability' as const,
		name: ability.name,
		image: ability.image
	});
</script>

<EntityChangelogPage
	{entity}
	{accent}
	parent={{ name: hero.name, slug: hero.slug, image: hero.image }}
	changelogs={data.changelogs}
	abilities={data.abilities}
	currentAbilitySlug={ability.slug}
	label={`${hero.name} ability`}
	seo={{
		path: `/ability/${ability.slug}`,
		title: data.title,
		description: data.description,
		image: data.image,
		indexable: true
	}}
/>
