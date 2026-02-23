import { getSearchParams } from '$lib/stores/searchParams.svelte';
import type { EnrichedHero, EnrichedItem } from '$lib/types';
import { toggleArray } from '$lib/utils/toggle';

export type FilterMode = 'all' | 'heroes' | 'items';

export type MergedEntity =
	| { type: 'hero'; data: EnrichedHero; isSelected: boolean }
	| { type: 'item'; data: EnrichedItem; isSelected: boolean };

export class FilterState {
	filterMode = $state<FilterMode>('all');
	inputValue = $state('');

	#params = getSearchParams();
	#getHeroes: () => EnrichedHero[];
	#getItems: () => EnrichedItem[];

	constructor(getHeroes: () => EnrichedHero[], getItems: () => EnrichedItem[]) {
		this.#getHeroes = getHeroes;
		this.#getItems = getItems;
		this.inputValue = this.#params.q;
	}

	filteredHeroes = $derived.by(() => {
		return this.#getHeroes()
			.filter((hero) => {
				if (!hero.isReleased) return false;
				if (this.filterMode === 'items') return false;
				if (!this.inputValue) return true;
				return hero.name.toLowerCase().includes(this.inputValue.toLowerCase());
			})
			.sort((a, b) => {
				const aSelected = this.#params.hero.includes(a.name);
				const bSelected = this.#params.hero.includes(b.name);
				if (aSelected && !bSelected) return -1;
				if (!aSelected && bSelected) return 1;
				return a.name.localeCompare(b.name);
			});
	});

	filteredItems = $derived.by(() => {
		return this.#getItems()
			.filter((item) => {
				if (this.filterMode === 'heroes') return false;
				if (!item.name || item.name.trim() === '' || item.name.includes('_'))
					return false;
				if (!item.isReleased) return false;
				if (!this.inputValue) return true;
				return item.name.toLowerCase().includes(this.inputValue.toLowerCase());
			})
			.sort((a, b) => {
				const aSelected = this.#params.item.includes(a.name);
				const bSelected = this.#params.item.includes(b.name);
				if (aSelected && !bSelected) return -1;
				if (!aSelected && bSelected) return 1;
				return a.name.localeCompare(b.name);
			});
	});

	mergedList = $derived.by((): MergedEntity[] => {
		if (this.filterMode !== 'all') return [];

		const heroes: MergedEntity[] = this.filteredHeroes.map((hero) => ({
			type: 'hero',
			data: hero,
			isSelected: this.#params.hero.includes(hero.name)
		}));

		const items: MergedEntity[] = this.filteredItems.map((item) => ({
			type: 'item',
			data: item,
			isSelected: this.#params.item.includes(item.name)
		}));

		return [...heroes, ...items].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});

	isHeroSelected(heroName: string): boolean {
		return this.#params.hero.includes(heroName);
	}

	isItemSelected(itemName: string): boolean {
		return this.#params.item.includes(itemName);
	}

	selectHero(heroId: number) {
		const hero = this.#getHeroes().find((h) => h.id === heroId);
		if (hero) {
			this.#params.hero = toggleArray(this.#params.hero, hero.name);
		}
	}

	selectItem(itemId: number) {
		const item = this.#getItems().find((i) => i.id === itemId);
		if (item) {
			this.#params.item = toggleArray(this.#params.item, item.name);
		}
	}

	clearAll() {
		this.inputValue = '';
		this.#params.reset();
	}

	updateSearch() {
		this.#params.update({ q: this.inputValue });
	}
}
