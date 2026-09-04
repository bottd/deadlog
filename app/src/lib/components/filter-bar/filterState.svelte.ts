import { searchParams } from '$lib/stores/searchParams.svelte';
import type { EntityKind } from '$lib/entityTone';
import type { EnrichedHero, EnrichedItem } from '$lib/types';
import { entityNamesMatch } from '@deadlog/utils';

export type MergedEntity = {
	/** Doubles as the each-key and the combobox option value. */
	key: string;
	isSelected: boolean;
} & ({ type: 'hero'; data: EnrichedHero } | { type: 'item'; data: EnrichedItem });

export const hasEntity = (names: string[], name: string) =>
	names.some((candidate) => entityNamesMatch(candidate, name));

export const toggleEntity = (names: string[], name: string) =>
	hasEntity(names, name)
		? names.filter((candidate) => !entityNamesMatch(candidate, name))
		: [...names, name];

/**
 * Add or remove one entity in the URL filters. The hero rail and the filter dropdown
 * both toggle, so the read-modify-write lives here rather than at each call site.
 */
export function toggleEntityFilter(kind: EntityKind, name: string) {
	const next = toggleEntity(
		kind === 'hero' ? searchParams.hero : searchParams.item,
		name
	);
	searchParams.update(kind === 'hero' ? { hero: next } : { item: next });
}

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
				key: `hero-${hero.id}`,
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
				key: `item-${item.id}`,
				isSelected: hasEntity(this.#params.item, item.name)
			}));

		return [...heroes, ...items].sort((a, b) => {
			if (a.isSelected && !b.isSelected) return -1;
			if (!a.isSelected && b.isSelected) return 1;
			return a.data.name.localeCompare(b.data.name);
		});
	});

	/** Picking an option from the list clears the typed query — the choice replaces it. */
	toggle(kind: EntityKind, name: string) {
		this.inputValue = '';
		toggleEntityFilter(kind, name);
	}

	selectById(kind: EntityKind, id: number) {
		const entities = kind === 'hero' ? this.#getHeroes() : this.#getItems();
		const entity = entities.find((candidate) => candidate.id === id);
		if (entity) this.toggle(kind, entity.name);
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
