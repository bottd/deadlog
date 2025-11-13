<script module lang="ts">
	let expandedChangeIds = $state(new Set<string>());
	let showFullChangeIds = $state(new Set<string>());

	function toggle(set: Set<string>, id: string) {
		return set.has(id)
			? new Set([...set].filter((i) => i !== id))
			: new Set([...set, id]);
	}
</script>

<script lang="ts">
	import ChangeHeader from './ChangeHeader.svelte';
	import { onMount } from 'svelte';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';

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
		expandedChangeIds = toggle(expandedChangeIds, id);

		if (expandedChangeIds.has(id)) {
			params.update({ change: Number(id) });
		}
	}
	function toggleShowFullChange(id: string) {
		showFullChangeIds = toggle(showFullChangeIds, id);
	}
	import { ChangelogContent, ExpandButton } from '.';
	import * as Card from '$lib/components/ui/card';
	import type { ChangelogContentJson } from '@deadlog/db';
	import type { EntityIcon } from '$lib/utils/types';
	import { browser } from '$app/environment';

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
		itemMap?: Record<
			number,
			{ name: string; images?: { png?: string; webp?: string } | null }
		>;
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

<Card.Root {id}>
	<Card.Content>
		<ChangeHeader {id} {date} {author} {authorImage} {icons} />

		<div
			class="mb-3 break-words {isExpanded || isFiltered
				? ''
				: 'relative max-h-[120px] overflow-hidden'}"
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
					class="from-card pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t"
				></div>
			{/if}
		</div>
		<ExpandButton isExpanded={isExpanded || showFullChange} toggle={onToggle} />
	</Card.Content>
</Card.Root>
