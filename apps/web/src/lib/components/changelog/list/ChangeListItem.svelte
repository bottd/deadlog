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
	import { IconPreview, ChangelogContent, ExpandButton } from '..';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import type { ChangelogContentJson } from '@deadlog/db';
	import { Link, Check, Zap } from '@lucide/svelte';
	import { format } from 'date-fns';
	import { formatDateWithSuffix } from '$lib/utils/dateFormatters';
	import type { EntityType } from '$lib/utils/types';
	import { browser } from '$app/environment';

	interface EntityIcon {
		id: number;
		src: string;
		alt: string;
		type: EntityType;
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
		fullContent?: string;
		contentJson?: ChangelogContentJson | null;
		heroMap?: Record<number, { name: string; images: Record<string, string> }>;
		itemMap?: Record<
			number,
			{ name: string; images?: { png?: string; webp?: string } | null }
		>;
		isSubChange?: boolean;
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
		fullContent,
		contentJson,
		heroMap,
		itemMap,
		isSubChange = false,
		isFiltered = false,
		forceShowNotes = false,
		defaultOpen = false
	}: Props = $props();

	let copied = $state(false);

	async function copyLink(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		const url = `${window.location.origin}/?change=${id}`;
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

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

<Card.Root class="border-border bg-card/50 backdrop-blur-sm" {id}>
	<Card.Content class="relative p-6">
		<!-- Top row: Metadata on left, icons and copy button on right -->
		<div class="mb-4 flex w-full items-start justify-between gap-4">
			<!-- Left side: Date and metadata -->
			<div class="flex-1">
				<div class="flex flex-col gap-2">
					<div class="flex items-baseline gap-3">
						{#if isSubChange}
							<Zap class="text-primary size-5" />
						{/if}
						<div class="text-foreground text-lg font-medium">
							{formatDateWithSuffix(date)}
						</div>
					</div>
					<div class="flex items-center gap-3 text-sm">
						<div class="text-muted-foreground flex items-center gap-2">
							{#if authorImage}
								<img
									src={authorImage}
									alt={author}
									width="20"
									height="20"
									loading="lazy"
									decoding="async"
									class="border-primary/30 size-5 rounded-full border"
								/>
							{/if}
							<span>By {author}</span>
						</div>
						<div class="text-muted-foreground text-xs">
							{format(date, 'h:mm a')}
						</div>
					</div>
				</div>
			</div>

			<!-- Right side: Icons and copy button -->
			<div class="flex items-start gap-2">
				{#if icons}
					<div class="flex justify-end">
						<IconPreview heroes={icons.heroes} items={icons.items} />
					</div>
				{/if}
				<!-- Copy link button -->
				<Button
					variant="ghost"
					size="icon-sm"
					onclick={copyLink}
					class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
					title={copied ? 'Copied!' : 'Copy link'}
				>
					{#if copied}
						<Check class="size-5" />
					{:else}
						<Link class="size-5" />
					{/if}
				</Button>
			</div>
		</div>

		<!-- Content with overflow control -->
		<div
			class="mb-3 break-words {isExpanded || isFiltered
				? ''
				: 'relative max-h-[120px] overflow-hidden'}"
		>
			{#if browser}
				<ChangelogContent
					{contentJson}
					{fullContent}
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
