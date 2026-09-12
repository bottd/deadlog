import { createContext } from 'svelte';
import {
	abilityFragmentId,
	entityFragmentId,
	entityNamesMatch,
	plural
} from '@deadlog/utils';
import { changePath } from '$lib/seo';
import type { EntityIcon } from '$lib/types';

export interface EntityIconsContext {
	heroes: EntityIcon[];
	items: EntityIcon[];
}

export interface EntityFilterContext {
	type: 'hero' | 'item' | 'ability';
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

/** Fragment only: a `?hero=`/`?item=` query would mint a crawlable duplicate of the
 * patch page for every entity that links to it.
 *
 * A hero or item heads its own section on the patch page, so its name is the anchor.
 * An ability does not: the notes head each group with the stat they changed
 * ("Affliction DPS", not "Affliction"), and the renderer derives the id from that
 * heading. So an ability anchors on the label of the group it matched, and falls back
 * to the patch itself when the patch mentions it without an attributed group. */
export function entityPatchHref(
	patch: { slug: string; changeGroups?: { ability: string | null }[] | null },
	entity: EntityFilterContext
): string {
	if (entity.type !== 'ability')
		return `${changePath(patch)}#${entityFragmentId(entity.name)}`;

	const label = patch.changeGroups?.find((group) => group.ability)?.ability ?? null;
	// `abilityFragmentId`, not `entityFragmentId`: the renderer derives a group's id
	// from the literal heading, so "The Cube" is `the-cube`. Article stripping is right
	// for entity names, which have aliases, and wrong for these raw labels.
	return label ? `${changePath(patch)}#${abilityFragmentId(label)}` : changePath(patch);
}

/** One wording for a patch's per-entity change count, shared by the card and the timeline. */
export function changeCountLabel(count: number | null): string {
	return count === null
		? 'change count unavailable'
		: `${count} ${plural(count, 'change')}`;
}
