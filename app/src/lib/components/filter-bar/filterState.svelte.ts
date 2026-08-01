import { searchParams } from '$lib/stores/searchParams.svelte';
import type { EnrichedHero, EnrichedItem } from '$lib/types';
import { entityNamesMatch } from '@deadlog/utils';

export type MergedEntity =
	| { type: 'hero'; data: EnrichedHero; isSelected: boolean }
	| { type: 'item'; data: EnrichedItem; isSelected: boolean };

export const hasEntity = (names: string[], name: string) =>
	names.some((candidate) => entityNamesMatch(candidate, name));

export const toggleEntity = (names: string[], name: string) =>
	hasEntity(names, name)
		? names.filter((candidate) => !entityNamesMatch(candidate, name))
		: [...names, name];

export class FilterState {
	inputValue = $state('');

	#params = searchParams;
	#getHeroes: () => EnrichedHero[];
	#getItems: () => EnrichedItem[];

	constructor(getHeroes: () => EnrichedHero[], getItems: () => EnrichedItem[]) {
		this.#getHeroes = getHeroes;
		this.#getItems = getItems;
		this.inputValue = this.#params.q;
	}

	#matchesInput(name: string): boolean {
		return !this.inputValue || name.toLowerCase().includes(this.inputValue.toLowerCase());
	}

	mergedList = $derived.by((): MergedEntity[] => {
		const heroes: MergedEntity[] = this.#getHeroes()
			.filter((hero) => hero.isReleased && this.#matchesInput(hero.name))
			.map((hero) => ({
				type: 'hero',
				data: hero,
				isSelected: hasEntity(this.#params.hero, hero.name)
			}));

		const items: MergedEntity[] = this.#getItems()
			.filter(
				(item) =>
					item.isReleased &&
					item.name.trim() !== '' &&
					!item.name.includes('_') &&
					this.#matchesInput(item.name)
			)
			.map((item) => ({
				type: 'item',
				data: item,
				isSelected: hasEntity(this.#params.item, item.name)
			}));

		return [...heroes, ...items].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});

	selectHero(heroId: number) {
		const hero = this.#getHeroes().find((h) => h.id === heroId);
		if (hero) this.toggleHero(hero.name);
	}

	selectItem(itemId: number) {
		const item = this.#getItems().find((i) => i.id === itemId);
		if (item) this.toggleItem(item.name);
	}

	toggleHero(name: string) {
		this.inputValue = '';
		this.#params.update({ hero: toggleEntity(this.#params.hero, name) });
	}

	toggleItem(name: string) {
		this.inputValue = '';
		this.#params.update({ item: toggleEntity(this.#params.item, name) });
	}

	clearAll() {
		this.inputValue = '';
		this.#params.reset();
	}

	syncSearch(value: string) {
		this.inputValue = value;
	}

	updateSearch() {
		this.#params.update({ q: this.inputValue.trim() });
	}
}
