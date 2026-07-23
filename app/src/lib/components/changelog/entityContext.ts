import { getContext, setContext } from 'svelte';
import { entityNameAliases, entityNamesMatch } from '@deadlog/utils';

export interface EntityMaps {
	heroMap: Record<number, { name: string; slug: string; images: Record<string, string> }>;
	itemMap: Record<number, { name: string; slug: string; image: string }>;
	abilityMap: Record<string, { name: string; image: string; heroName: string }>;
}

export interface EntityFilterContext {
	type: 'hero' | 'item';
	name: string;
}

export interface ResolvedEntity extends EntityFilterContext {
	id: number;
	slug: string;
	image?: string;
}

const ENTITY_MAPS_KEY = Symbol('entity-maps');

export function setEntityMaps(maps: EntityMaps): void {
	setContext(ENTITY_MAPS_KEY, maps);
}

export function getEntityMaps(): EntityMaps {
	return getContext<EntityMaps>(ENTITY_MAPS_KEY);
}

export function entityFragmentId(name: string): string {
	return (entityNameAliases(name).at(-1) ?? '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function resolveEntity(
	maps: EntityMaps,
	type: 'hero' | 'item',
	name: string
): ResolvedEntity | undefined {
	const entries = type === 'hero' ? maps.heroMap : maps.itemMap;

	for (const [id, entity] of Object.entries(entries)) {
		if (!entityNamesMatch(entity.name, name)) continue;

		const image =
			type === 'hero'
				? 'images' in entity
					? entity.images.icon_image_small_webp ||
						entity.images.icon_image_small ||
						Object.values(entity.images)[0]
					: undefined
				: 'image' in entity
					? entity.image
					: undefined;

		return { id: Number(id), type, name: entity.name, slug: entity.slug, image };
	}

	return undefined;
}

export function entityPatchHref(patchId: string, entity: EntityFilterContext): string {
	const search = new URLSearchParams({ [entity.type]: entity.name });
	return `/change/${encodeURIComponent(patchId)}?${search.toString()}`;
}
