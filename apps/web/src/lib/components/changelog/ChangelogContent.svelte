<script lang="ts">
	import { ChangeCard } from './change-card';
	import { NoteWithPatterns } from '.';
	import * as Accordion from '$lib/components/ui/accordion';
	import type { ChangelogContentJson } from '@deadlog/db';
	import { getFilteredGeneralNotes } from '$lib/utils/filterChanges';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';

	const params = getSearchParams();

	const hasParams = $derived(
		params.hero.length > 0 || params.item.length > 0 || params.change || params.q
	);

	interface Props {
		contentJson?: ChangelogContentJson | null;
		heroMap?: Record<number, { name: string; images: Record<string, string> }>;
		itemMap?: Record<
			number,
			{ name: string; images?: { png?: string; webp?: string } | null }
		>;
		showFullChange?: boolean;
		forceShowNotes?: boolean;
	}

	let {
		contentJson,
		heroMap = {},
		itemMap = {},
		showFullChange = false,
		forceShowNotes = false
	}: Props = $props();

	let showAllNotes = $state(false);

	// Store the original filtered IDs for highlighting purposes when showing full patch
	// We need to track what the user originally filtered by, even when showing all content
	const originalFilteredHeroIds = $derived(
		showFullChange && !params.hero.length && !params.item.length ? null : params.hero
	);
	const originalFilteredItemIds = $derived(
		showFullChange && !params.item.length && !params.hero.length ? null : params.item
	);

	// Determine if we have an active hero or item filter (for cross-entity hiding)
	const hasHeroFilter = $derived(
		(originalFilteredHeroIds && originalFilteredHeroIds.length > 0) ||
			(params.hero && params.hero.length > 0)
	);
	const hasItemFilter = $derived(
		(originalFilteredItemIds && originalFilteredItemIds.length > 0) ||
			(params.item && params.item.length > 0)
	);

	// Filter heroes based on selectedHeroes
	const visibleHeroes = $derived.by(() => {
		if (!contentJson?.heroes) return [];

		const heroEntries = Object.entries(contentJson.heroes);

		// If no hero filter is active, show all heroes (unless item filter is active)
		if (!params.hero || params.hero.length === 0) {
			// If item filter is active, hide heroes
			return hasItemFilter ? [] : heroEntries;
		}

		// Only show heroes that are in the filter (check by name, which is the key)
		return heroEntries.filter(([heroName]) => {
			return params.hero.includes(heroName);
		});
	});

	// Filter items based on selectedItems
	const visibleItems = $derived.by(() => {
		if (!contentJson?.items) return [];

		const itemEntries = Object.entries(contentJson.items);

		// If no item filter is active, show all items (unless hero filter is active)
		if (!params.item || params.item.length === 0) {
			// If hero filter is active, hide items
			return hasHeroFilter ? [] : itemEntries;
		}

		// Only show items that are in the filter (check by name, which is the key)
		return itemEntries.filter(([itemName]) => {
			return params.item.includes(itemName);
		});
	});

	// Helper to check if a hero should be highlighted (by name, not ID)
	function isHeroHighlighted(heroName?: string): boolean {
		if (!showFullChange || !originalFilteredHeroIds || !heroName) return false;
		return originalFilteredHeroIds.includes(heroName);
	}

	// Helper to check if an item should be highlighted (by name, not ID)
	function isItemHighlighted(itemName?: string): boolean {
		if (!showFullChange || !originalFilteredItemIds || !itemName) return false;
		return originalFilteredItemIds.includes(itemName);
	}

	// Helper to get hero image from heroMap
	function getHeroImage(heroId?: number): string | undefined {
		if (!heroId || !heroMap[heroId]) return undefined;
		const hero = heroMap[heroId];
		return Object.values(hero.images)[0];
	}

	// Helper to get item image from itemMap
	function getItemImage(itemId?: number): string | undefined {
		if (!itemId || !itemMap[itemId]) return undefined;
		const item = itemMap[itemId];
		return item.images?.png || item.images?.webp;
	}

	// Get filtered general notes based on selected entities
	const filteredGeneralNotes = $derived.by(() => {
		if (!contentJson || !hasParams || showFullChange || showAllNotes) {
			return null; // Show all notes
		}

		// Create a minimal FilteredChangelog object with just the fields we need
		const minimalChangelog = {
			id: '',
			title: '',
			date: new Date(),
			author: '',
			contentJson
		};

		return getFilteredGeneralNotes(minimalChangelog, {
			selectedHeroNames: new Set(params.hero),
			selectedItemNames: new Set(params.item),
			searchQuery: params.q
		});
	});

	// Determine which notes to display
	const displayedNotes = $derived.by(() => {
		if (!contentJson?.notes) return [];
		if (filteredGeneralNotes === null) return contentJson.notes;
		return filteredGeneralNotes;
	});

	// Check if there are hidden notes
	const hasHiddenNotes = $derived.by(() => {
		if (!contentJson?.notes || filteredGeneralNotes === null) return false;
		return contentJson.notes.length > filteredGeneralNotes.length;
	});
</script>

<div
	class="prose prose-invert prose-sm [&_a]:text-primary [&_code]:bg-card [&_code]:text-primary [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-primary [&_pre]:border-border [&_pre]:bg-card [&_strong]:text-foreground [&>*]:text-foreground/90 max-w-none [&_a:hover]:opacity-80 [&_code]:rounded [&_code]:px-1 [&_ol]:list-decimal [&_pre]:border [&_ul]:list-disc"
>
	{#if contentJson}
		<!-- Render structured JSON content -->

		<Accordion.Root
			type="multiple"
			value={['general', 'heroes', 'items', 'abilities']}
			class="space-y-4"
		>
			<!-- General Notes - show if not filtered OR if showing full patch OR if forced to show -->
			{#if (!hasParams || showFullChange || forceShowNotes) && contentJson.notes.length > 0}
				<Accordion.Item value="general">
					<Accordion.Trigger>
						<h3 class="text-primary mb-0 text-lg font-semibold">
							General Changes ({displayedNotes.length})
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-4">
						<ul>
							{#each displayedNotes as note, i (i)}
								<li>
									<NoteWithPatterns {note} />
								</li>
							{/each}
						</ul>
						{#if hasHiddenNotes && !showAllNotes}
							<button
								type="button"
								onclick={() => (showAllNotes = true)}
								class="text-primary mt-3 text-sm transition-colors hover:opacity-80"
							>
								+ Show {contentJson.notes.length - displayedNotes.length} more note{contentJson
									.notes.length -
									displayedNotes.length !==
								1
									? 's'
									: ''}
							</button>
						{:else if hasHiddenNotes && showAllNotes}
							<button
								type="button"
								onclick={() => (showAllNotes = false)}
								class="text-primary mt-3 text-sm transition-colors hover:opacity-80"
							>
								- Show less
							</button>
						{/if}
					</Accordion.Content>
				</Accordion.Item>
			{/if}
			<!-- Hero Changes -->
			{#if visibleHeroes.length > 0}
				<Accordion.Item value="heroes">
					<Accordion.Trigger>
						<h3 class="text-primary mb-0 text-lg font-semibold">
							Hero Changes ({visibleHeroes.length})
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-4">
						<div class="grid gap-4">
							{#each visibleHeroes as [heroName, heroData] (heroName)}
								<ChangeCard
									title={heroName}
									image={getHeroImage(heroData.id)}
									notes={heroData.notes}
									abilities={heroData.abilities}
									isHighlighted={isHeroHighlighted(heroName)}
								/>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/if}

			<!-- Item Changes -->
			{#if visibleItems.length > 0}
				<Accordion.Item value="items">
					<Accordion.Trigger>
						<h3 class="text-primary mb-0 text-lg font-semibold">
							Item Changes ({visibleItems.length})
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-4">
						<div class="grid gap-4">
							{#each visibleItems as [itemName, itemData] (itemName)}
								<ChangeCard
									title={itemName}
									image={getItemImage(itemData.id)}
									notes={itemData.notes}
									isHighlighted={isItemHighlighted(itemName)}
								/>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/if}

			<!-- Ability Changes - show if not filtered OR if showing full patch -->
			{#if (!hasParams || showFullChange) && Object.keys(contentJson.abilities).length > 0}
				<Accordion.Item value="abilities">
					<Accordion.Trigger>
						<h3 class="text-primary mb-0 text-lg font-semibold">
							Ability Changes ({Object.keys(contentJson.abilities).length})
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-4">
						<div class="grid gap-4">
							{#each Object.entries(contentJson.abilities) as [abilityName, abilityData] (abilityName)}
								<ChangeCard title={abilityName} notes={abilityData.notes} />
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/if}
		</Accordion.Root>
	{/if}
</div>
