import { entityFragmentId, patchHeading, plural } from '@deadlog/utils';
import { searchParams } from '$lib/stores/searchParams.svelte';
import { hasEntity } from '$lib/components/filter-bar/filterState.svelte';
import { MAX_ENTITY_FILTERS } from '$lib/queries/keys';
import type { PatchSummary, EntityIcon } from '$lib/types';
import { changePath } from '$lib/seo';
import { authorInitials } from '$lib/author';
import { ENTITY_TONE } from '$lib/entityTone';

export type PatchCardProps = PatchSummary;

const NO_MATCHES: PatchCardMatches = {
	searching: false,
	changeCount: null,
	label: null,
	tone: ENTITY_TONE.hero.text
};

export interface PatchCardMatches {
	searching: boolean;
	changeCount: number | null;
	/** null when nothing countable matched, which also suppresses the row. */
	label: string | null;
	tone: string;
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
		tone: entities.every((entity) => entity.type === 'item')
			? ENTITY_TONE.item.text
			: ENTITY_TONE.hero.text
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
		entityHref: (entity: EntityIcon) => {
			const fragment = `#${entityFragmentId(entity.alt)}`;
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
			tone: ENTITY_TONE.hero.text,
			list: heroes,
			extra: Math.max(0, patch.counts.heroes - heroes.length)
		},
		{
			type: 'items',
			label: 'Items',
			tone: ENTITY_TONE.item.text,
			list: items,
			extra: Math.max(0, patch.counts.items - items.length)
		}
	].filter((row) => row.list.length > 0);

	const counts = [
		{
			n: patch.counts.heroes,
			noun: plural(patch.counts.heroes, 'hero', 'heroes'),
			tone: ENTITY_TONE.hero.text
		},
		{
			n: patch.counts.items,
			noun: plural(patch.counts.items, 'item'),
			tone: ENTITY_TONE.item.text
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
