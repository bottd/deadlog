<script module lang="ts">
	import { toggleSet } from '$lib/utils/toggle';

	let expandedChangeIds = $state(new Set<string>());
	let showFullChangeIds = $state(new Set<string>());
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import type { EntityIcon } from '$lib/utils/types';
	import type { ChangelogContentJson } from '@deadlog/db';
	import * as Card from '$lib/components/ui/card';
	import { ChangelogContent, ExpandButton } from '.';
	import ChangeHeader from './ChangeHeader.svelte';

	const params = getSearchParams();

	onMount(() => {
		const change = params.change;
		if (change) {
			expandedChangeIds = new Set([change.toString()]);
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
		} else if (defaultOpen && expandedChangeIds.size === 0) {
			// Open the first item by default if no query param is set
			expandedChangeIds = new Set([id]);
		}
	});

	function toggleExpandedChange(id: string) {
		expandedChangeIds = toggleSet(expandedChangeIds, id);

		if (expandedChangeIds.has(id)) {
			params.update({ change: Number(id) });
		}
	}
	function toggleShowFullChange(id: string) {
		showFullChangeIds = toggleSet(showFullChangeIds, id);
	}

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
		isFiltered?: boolean;
		forceShowNotes?: boolean;
		defaultOpen?: boolean;
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
		isFiltered = false,
		forceShowNotes = false,
		defaultOpen = false
	}: Props = $props();

	const isExpanded = $derived(expandedChangeIds.has(id));
	const showFullChange = $derived(showFullChangeIds.has(id));

	function onToggle() {
		if (isFiltered) {
			toggleShowFullChange(id);
		} else {
			toggleExpandedChange(id);
		}
	}
</script>

<Card.Root {id} class="group/card py-6">
	<Card.Content class="px-8">
		<ChangeHeader {id} {date} {author} {authorImage} {icons} />

		<div
			class="relative mb-4 overflow-hidden break-words transition-all duration-500 ease-out"
			class:max-h-[140px]={!isExpanded && !isFiltered}
		>
			{#if browser}
				<ChangelogContent
					{contentJson}
					{heroMap}
					{itemMap}
					{showFullChange}
					{forceShowNotes}
				/>
			{/if}
			{#if !isExpanded && !isFiltered}
				<div
					class="from-card via-card pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent"
				></div>
			{/if}
		</div>

		<ExpandButton isExpanded={isExpanded || showFullChange} toggle={onToggle} />
	</Card.Content>
</Card.Root>
