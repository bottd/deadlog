<script lang="ts">
	import ChangeCard from './ChangeCard.svelte';
	import { NoteWithPatterns } from '.';
	import * as Accordion from '$lib/components/ui/accordion';
	import type { ChangelogContentJson } from '@deadlog/db';
	import { getSearchParams } from '$lib/stores/searchParams.svelte';
	import { getHeroImageFromMap, getItemImageFromMap } from '$lib/utils/entityImages';
	import type { Snippet } from 'svelte';

	interface Props {
		contentJson?: ChangelogContentJson | null;
		heroMap?: Record<number, { name: string; images: Record<string, string> }>;
		itemMap?: Record<number, { name: string; image: string }>;
	}

	let { contentJson, heroMap = {}, itemMap = {} }: Props = $props();

	const params = getSearchParams();

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

	const getHeroImage = (heroId?: number) => getHeroImageFromMap(heroId, heroMap);
	const getItemImage = (itemId?: number) => getItemImageFromMap(itemId, itemMap);
</script>

{#snippet section(value: string, title: string, count: number, children: Snippet)}
	<Accordion.Item {value} class="relative">
		<Accordion.Trigger class="peer/trigger pl-4">
			<h3 class="text-primary font-display mb-0 text-xl tracking-tight">
				{title} <span class="font-mono text-base opacity-70">({count})</span>
			</h3>
		</Accordion.Trigger>
		<div
			class="bg-primary/0 peer-hover/trigger:bg-primary/40 absolute top-3 left-0 h-8 w-0.5 rounded-full transition-all duration-300 peer-hover/trigger:h-10"
		></div>
		<Accordion.Content class="pt-3 pl-4">
			{@render children()}
		</Accordion.Content>
	</Accordion.Item>
{/snippet}

{#snippet generalContent()}
	<ul class="marker:text-primary/40 list-disc space-y-2 pl-5">
		{#each contentJson?.notes ?? [] as note, i (i)}
			<li class="text-foreground/85 leading-relaxed">
				<NoteWithPatterns {note} />
			</li>
		{/each}
	</ul>
{/snippet}

{#snippet heroesContent()}
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
{/snippet}

{#snippet itemsContent()}
	<div>
		{#each visibleItems as [itemName, itemData] (itemName)}
			<ChangeCard
				title={itemName}
				image={getItemImage(itemData.id)}
				notes={itemData.notes}
			/>
		{/each}
	</div>
{/snippet}

{#snippet abilitiesContent()}
	<div>
		{#each Object.entries(contentJson?.abilities ?? {}) as [abilityName, abilityData] (abilityName)}
			<ChangeCard title={abilityName} notes={abilityData.notes} />
		{/each}
	</div>
{/snippet}

<div class="prose-content">
	{#if contentJson}
		<Accordion.Root
			type="multiple"
			value={['general', 'heroes', 'items', 'abilities']}
			class="space-y-4"
		>
			{#if contentJson.notes.length > 0}
				{@render section(
					'general',
					'General Changes',
					contentJson.notes.length,
					generalContent
				)}
			{/if}

			{#if visibleHeroes.length > 0}
				{@render section('heroes', 'Hero Changes', visibleHeroes.length, heroesContent)}
			{/if}

			{#if visibleItems.length > 0}
				{@render section('items', 'Item Changes', visibleItems.length, itemsContent)}
			{/if}

			{#if Object.keys(contentJson.abilities).length > 0}
				{@render section(
					'abilities',
					'Ability Changes',
					Object.keys(contentJson.abilities).length,
					abilitiesContent
				)}
			{/if}
		</Accordion.Root>
	{/if}
</div>

<style lang="postcss">
	@reference "../../../app.css";

	.prose-content {
		@apply max-w-none text-sm;

		:global(> *) {
			@apply text-foreground/85;
		}

		:global(a) {
			@apply text-primary font-medium underline-offset-2 transition-all duration-200 hover:underline hover:opacity-80;
		}

		:global(strong) {
			@apply text-foreground font-semibold;
		}

		:global(h1),
		:global(h2) {
			@apply text-foreground font-display tracking-tight;
		}

		:global(h3) {
			@apply font-display text-primary tracking-tight;
		}

		:global(code) {
			@apply bg-primary/5 text-primary border-primary/10 rounded border px-1.5 py-0.5 font-mono text-xs;
		}

		:global(pre) {
			@apply border-border bg-card/50 rounded-lg border p-4 font-mono text-xs;
		}

		:global(ul) {
			@apply my-3 ml-5 list-disc space-y-1.5;
		}

		:global(ol) {
			@apply my-3 ml-5 list-decimal space-y-1.5;
		}

		:global(li) {
			@apply leading-relaxed;
		}
	}
</style>
