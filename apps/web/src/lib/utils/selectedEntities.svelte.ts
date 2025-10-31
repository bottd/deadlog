import { page } from '$app/state';
import { getSearchParams } from './searchParams.svelte';
import type { EnrichedHero, EnrichedItem } from './types';

/**
 * Get the actual hero objects based on selected hero names in URL params
 */
export function getSelectedHeroObjects(): EnrichedHero[] {
	const params = getSearchParams();
	const { heroes } = page.data;
	if (!heroes) return [];
	return heroes.filter((hero: EnrichedHero) => params.hero.includes(hero.name));
}

/**
 * Get the actual item objects based on selected item names in URL params
 */
export function getSelectedItemObjects(): EnrichedItem[] {
	const params = getSearchParams();
	const { items } = page.data;
	if (!items) return [];
	return items.filter((item: EnrichedItem) => params.item.includes(item.name));
}
