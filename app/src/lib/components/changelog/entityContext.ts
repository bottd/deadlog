import { getContext, setContext } from 'svelte';

export interface EntityMaps {
	heroMap: Record<number, { name: string; images: Record<string, string> }>;
	itemMap: Record<number, { name: string; image: string }>;
	abilityMap: Record<string, { name: string; image: string; heroName: string }>;
}

const ENTITY_MAPS_KEY = Symbol('entity-maps');

export function setEntityMaps(maps: EntityMaps): void {
	setContext(ENTITY_MAPS_KEY, maps);
}

export function getEntityMaps(): EntityMaps {
	return getContext<EntityMaps>(ENTITY_MAPS_KEY);
}
