<script lang="ts">
	import { ChangeCard } from './change-card';
	import { NoteWithPatterns } from '.';
	import * as Accordion from '$lib/components/ui/accordion';
	import type { ChangelogContentJson } from '@deadlog/db';
	import { getFilteredGeneralNotes } from '$lib/utils/filterChanges';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';

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

	const params = getSearchParams();
	let showAllNotes = $state(false);

	const hasParams = $derived(
		params.hero.length > 0 || params.item.length > 0 || params.change || params.q
	);
	const hasHeroFilter = $derived(params.hero.length > 0);
	const hasItemFilter = $derived(params.item.length > 0);

	const visibleHeroes = $derived.by(() => {
		if (!contentJson?.heroes) return [];
		const heroEntries = Object.entries(contentJson.heroes);
		if (!params.hero || params.hero.length === 0) {
			return hasItemFilter ? [] : heroEntries;
		}
		return heroEntries.filter(([heroName]) => params.hero.includes(heroName));
	});

	const visibleItems = $derived.by(() => {
		if (!contentJson?.items) return [];
		const itemEntries = Object.entries(contentJson.items);
		if (!params.item || params.item.length === 0) {
			return hasHeroFilter ? [] : itemEntries;
		}
		return itemEntries.filter(([itemName]) => params.item.includes(itemName));
	});

	function getHeroImage(heroId?: number): string | undefined {
		if (!heroId || !heroMap[heroId]) return undefined;
		return Object.values(heroMap[heroId].images)[0];
	}

	function getItemImage(itemId?: number): string | undefined {
		if (!itemId || !itemMap[itemId]) return undefined;
		const item = itemMap[itemId];
		return item.images?.png || item.images?.webp;
	}

	const filteredGeneralNotes = $derived.by(() => {
		if (!contentJson || !hasParams || showFullChange || showAllNotes) {
			return null;
		}
		return getFilteredGeneralNotes(
			{ id: '', title: '', date: new Date(), author: '', contentJson },
			{
				selectedHeroNames: new Set(params.hero),
				selectedItemNames: new Set(params.item),
				searchQuery: params.q
			}
		);
	});

	const displayedNotes = $derived.by(() => {
		if (!contentJson?.notes) return [];
		if (filteredGeneralNotes === null) return contentJson.notes;
		return filteredGeneralNotes;
	});

	const hasHiddenNotes = $derived.by(() => {
		if (!contentJson?.notes || filteredGeneralNotes === null) return false;
		return contentJson.notes.length > filteredGeneralNotes.length;
	});
</script>

<div class="prose-content">
	{#if contentJson}
		<Accordion.Root
			type="multiple"
			value={['general', 'heroes', 'items', 'abilities']}
			class="space-y-2"
		>
			{#if (!hasParams || showFullChange || forceShowNotes) && contentJson.notes.length > 0}
				<Accordion.Item value="general">
					<Accordion.Trigger>
						<h3 class="text-primary font-display mb-0 text-lg">
							General Changes <span class="font-mono text-base"
								>({displayedNotes.length})</span
							>
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-1">
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
								class="show-more-btn"
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
								class="show-more-btn"
							>
								- Show less
							</button>
						{/if}
					</Accordion.Content>
				</Accordion.Item>
			{/if}

			{#if visibleHeroes.length > 0}
				<Accordion.Item value="heroes">
					<Accordion.Trigger>
						<h3 class="text-primary font-display mb-0 text-lg">
							Hero Changes <span class="font-mono text-base"
								>({visibleHeroes.length})</span
							>
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-1">
						<div>
							{#each visibleHeroes as [heroName, heroData] (heroName)}
								<ChangeCard
									title={heroName}
									image={getHeroImage(heroData.id)}
									notes={heroData.notes}
									abilities={heroData.abilities}
								/>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/if}

			{#if visibleItems.length > 0}
				<Accordion.Item value="items">
					<Accordion.Trigger>
						<h3 class="text-primary font-display mb-0 text-lg">
							Item Changes <span class="font-mono text-base">({visibleItems.length})</span
							>
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-1">
						<div>
							{#each visibleItems as [itemName, itemData] (itemName)}
								<ChangeCard
									title={itemName}
									image={getItemImage(itemData.id)}
									notes={itemData.notes}
								/>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/if}

			{#if (!hasParams || showFullChange) && Object.keys(contentJson.abilities).length > 0}
				<Accordion.Item value="abilities">
					<Accordion.Trigger>
						<h3 class="text-primary font-display mb-0 text-lg">
							Ability Changes <span class="font-mono text-base"
								>({Object.keys(contentJson.abilities).length})</span
							>
						</h3>
					</Accordion.Trigger>
					<Accordion.Content class="pt-1">
						<div>
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

<style lang="postcss">
	@reference "../../../app.css";

	.prose-content {
		@apply max-w-none text-sm;

		:global(> *) {
			@apply text-foreground/90;
		}

		:global(a) {
			@apply text-primary transition-colors hover:opacity-80;
		}

		:global(strong) {
			@apply text-foreground;
		}

		:global(h1),
		:global(h2) {
			@apply text-foreground;
		}

		:global(h3) {
			@apply font-display text-primary;
		}

		:global(code) {
			@apply bg-card text-primary rounded px-1 font-mono;
		}

		:global(pre) {
			@apply border-border bg-card border font-mono;
		}

		:global(ul) {
			@apply my-2 ml-4 list-disc;
		}

		:global(ol) {
			@apply my-2 ml-4 list-decimal;
		}

		:global(li) {
			@apply my-0.5;
		}
	}

	.show-more-btn {
		@apply text-primary mt-3 text-sm transition-colors hover:opacity-80;
	}
</style>
