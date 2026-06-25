import { page } from '$app/state';
import { searchParams as params } from '$lib/stores/searchParams.svelte';
import type { EnrichedHero, EnrichedItem } from '$lib/types';

export function getSelectedHeroObjects(): EnrichedHero[] {
	const { heroes } = page.data;
	if (!heroes) return [];
	return heroes.filter((hero: EnrichedHero) => params.hero.includes(hero.name));
}

export function getSelectedItemObjects(): EnrichedItem[] {
	const { items } = page.data;
	if (!items) return [];
	return items.filter((item: EnrichedItem) => params.item.includes(item.name));
}
