import { patchHeading, plural } from '@deadlog/utils';
import { searchParams } from '#lib/stores/searchParams.svelte.ts';
import { hasEntity } from '#lib/components/filter-bar/filterState.svelte.ts';
import { MAX_ENTITY_FILTERS } from '#lib/queries/keys.ts';
import type { PatchSummary, ChangelogEntityIcon } from '#lib/types.ts';
import { changePath } from '#lib/seo.ts';
import { authorInitials } from '#lib/author.ts';
import type { EntityKind } from '#lib/entityKinds.ts';

export type PatchCardProps = PatchSummary;

const NO_MATCHES: PatchCardMatches = {
	searching: false,
	changeCount: null,
	label: null,
	kind: 'hero'
};

export interface PatchCardMatches {
	searching: boolean;
	changeCount: number | null;
	/** null when nothing countable matched, which also suppresses the row. */
	label: string | null;
	kind: EntityKind;
}

/** Which of this patch's entities the active filters asked for. */
export function patchCardMatches(patch: PatchCardProps): PatchCardMatches {
	if (!searchParams.isSearching) return NO_MATCHES;

	const entities = patch.matches;
	const counted = entities.filter((entity) => entity.changeCount != null);
	const changeCount = counted.length
		? counted.reduce((total, entity) => total + (entity.changeCount ?? 0), 0)
		: null;

	return {
		searching: true,
		changeCount,
		label:
			changeCount === null
				? null
				: entities.length === 1
					? `${entities[0].name} ${plural(changeCount, 'change')}`
					: `matched ${plural(changeCount, 'change')}`,
		kind: entities.every((entity) => entity.type === 'item') ? 'item' : 'hero'
	};
}

/**
 * Reads the filter store, like `patchCardMatches` — both re-derive on every filter change.
 */
export function patchCardHrefs(patch: { slug: string }) {
	const params = searchParams.toURLSearchParams();
	const query = params.toString();
	const href = `${changePath(patch)}${query ? `?${query}` : ''}`;

	return {
		href,
		entityHref: (entity: ChangelogEntityIcon) => {
			const fragment = `#${entity.anchor}`;
			const key = entity.type;
			const selected = key === 'hero' ? searchParams.hero : searchParams.item;
			// No entity filter means the patch renders whole, so the fragment lands unaided
			// and adding one would only mint a crawlable duplicate per chip.
			if (searchParams.hero.length + searchParams.item.length === 0)
				return `${href}${fragment}`;

			const entityParams = new URLSearchParams(params);
			if (!hasEntity(selected, entity.alt)) {
				const retained = selected.slice(0, MAX_ENTITY_FILTERS - 1);
				entityParams.set(key, [...retained, entity.alt].join(','));
			}
			return `${changePath(patch)}?${entityParams.toString()}${fragment}`;
		}
	};
}

export function patchCardView(patch: PatchCardProps, featured = false) {
	const { heroes, items } = patch.icons;

	const rows = [
		{
			type: 'heroes',
			label: 'Heroes',
			kind: 'hero',
			list: heroes,
			extra: Math.max(0, patch.counts.heroes - heroes.length)
		},
		{
			type: 'items',
			label: 'Items',
			kind: 'item',
			list: items,
			extra: Math.max(0, patch.counts.items - items.length)
		}
	].filter((row) => row.list.length > 0);

	const counts = [
		{
			n: patch.counts.heroes,
			noun: plural(patch.counts.heroes, 'hero', 'heroes'),
			kind: 'hero'
		},
		{
			n: patch.counts.items,
			noun: plural(patch.counts.items, 'item'),
			kind: 'item'
		}
	].filter((count) => count.n > 0);

	const phrases = counts.map((count) => `${count.n} ${count.noun}`);
	const { named, date, heading } = patchHeading(patch);

	return {
		rows,
		counts,
		totals: phrases.join(' · '),
		initials: authorInitials(patch.author),
		heading,
		date,
		named,
		accessibleLabel:
			`${featured ? 'Latest patch, ' : ''}${named ? `${patch.title}, ${date}` : date}, by ${patch.author}` +
			`${phrases.length ? `, affecting ${phrases.join(' and ')}` : ''}. View full patch.`
	};
}
