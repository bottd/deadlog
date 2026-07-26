<script lang="ts">
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import EntityDirectory from '$lib/components/entity/EntityDirectory.svelte';
	import { getHeroCardImage } from '$lib/utils/entityImages';
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

	const title = 'Deadlock Heroes: Balance Change History | Deadlog';
	const description =
		'Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.';
	const canonical = absoluteUrl('/heroes');

	const entries = $derived(
		(data.heroes ?? [])
			.filter((hero) => hero.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((hero) => ({
				id: hero.id,
				name: hero.name,
				href: `/hero/${hero.slug}`,
				image: getHeroCardImage(hero),
				subtitle: hero.heroType
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
			{ name: 'Heroes', path: '/heroes' }
		]
	})}
/>

<EntityDirectory
	kind="hero"
	eyebrow="Hero roster"
	heading="Heroes"
	lede="Browse every released hero, then open a chronological record of their buffs, nerfs, and balance changes."
	listEyebrow="Select a combatant"
	{entries}
/>
