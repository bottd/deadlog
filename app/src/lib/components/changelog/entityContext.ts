import { createContext } from 'svelte';
import { entityFragmentId, entityNamesMatch, plural } from '@deadlog/utils';
import { changePath } from '$lib/seo';
import type { EntityIcon } from '$lib/types';

export interface EntityIconsContext {
	heroes: EntityIcon[];
	items: EntityIcon[];
}

export interface EntityFilterContext {
	type: 'hero' | 'item';
	name: string;
}

export const [getEntityIcons, setEntityIcons] = createContext<EntityIconsContext>();

export function resolveEntity(
	icons: EntityIconsContext,
	type: 'hero' | 'item',
	name: string
): EntityIcon | undefined {
	const entries = type === 'hero' ? icons.heroes : icons.items;
	return entries.find((entity) => entityNamesMatch(entity.alt, name));
}

export function entityPatchHref(
	patch: { slug: string },
	entity: EntityFilterContext
): string {
	const search = new URLSearchParams({ [entity.type]: entity.name });
	return `${changePath(patch)}?${search.toString()}#${entityFragmentId(entity.name)}`;
}

/** One wording for a patch's per-entity change count, shared by the card and the timeline. */
export function changeCountLabel(count: number | null): string {
	return count === null
		? 'change count unavailable'
		: `${count} ${plural(count, 'change')}`;
}
