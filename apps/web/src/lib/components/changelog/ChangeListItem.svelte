<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import type { EntityIcon } from '$lib/utils/types';
	import type { ChangelogContentJson } from '@deadlog/db';
	import * as Card from '$lib/components/ui/card';
	import { ChangelogContent } from '.';
	import { GutterNode } from '../gutter-line';
	import ChangeHeader from './ChangeHeader.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const params = getSearchParams();

	onMount(() => {
		const change = params.change;
		if (change) {
			setTimeout(() => {
				const element = document.getElementById(change.toString());
				if (element) {
					const offset = 64 + 80 + 16;
					const elementPosition = element.getBoundingClientRect().top + window.scrollY;
					const offsetPosition = elementPosition - offset;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'instant'
					});
				}
			}, 100);
		}
	});

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: {
			heroes: EntityIcon[];
			items: EntityIcon[];
		};
		contentJson?: ChangelogContentJson | null;
		heroMap?: Record<number, { name: string; images: Record<string, string> }>;
		itemMap?: Record<number, { name: string; image: string }>;
		isSubChange?: boolean;
		entryIndex?: number;
	}

	let {
		id,
		date,
		author,
		authorImage,
		icons,
		contentJson,
		heroMap,
		itemMap,
		isSubChange = false,
		entryIndex = 0
	}: Props = $props();
</script>

<div
	class="group/entry relative"
	transition:fly={{ y: 16, duration: 600, delay: entryIndex * 100, easing: cubicOut }}
>
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<GutterNode bigUpdate={!isSubChange} />
	</div>

	{#if entryIndex > 0}
		<div
			class="editorial-divider mb-10 opacity-0 transition-opacity duration-500 group-hover/entry:opacity-100"
		></div>
	{/if}

	<Card.Root {id} class="group/card py-6">
		<Card.Content class="px-8">
			<ChangeHeader {id} {date} {author} {authorImage} {icons} />

			<div class="break-words">
				{#if browser}
					<ChangelogContent {contentJson} {heroMap} {itemMap} />
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</div>
