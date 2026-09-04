import { entityFragmentId, formatDate, plural } from '@deadlog/utils';
import { searchParams } from '$lib/stores/searchParams.svelte';
import { hasEntity } from '$lib/components/filter-bar/filterState.svelte';
import { MAX_ENTITY_FILTERS } from '$lib/queries/keys';
import type { ChangelogEntityIcon, ChangelogEntry, EntityIcon } from '$lib/types';
import { changePath } from '$lib/seo';
import { authorInitials } from '$lib/author';

export type PatchCardProps = Omit<ChangelogEntry, 'updates'>;

/** Stand-in art when a patch has no scraped preview image. */
const FALLBACK_PREVIEW = {
	major:
		'https://clan.akamai.steamstatic.com/images/45164767/686d522ba79a25d36cf53ef92f7b0499501f7d2f.png',
	minor:
		'https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png'
};

export const entityKey = (entity: EntityIcon) => `${entity.type}:${entity.id}`;

const NO_MATCHES: PatchCardMatches = {
	searching: false,
	keys: new Set<string>(),
	changeCount: null,
	label: null,
	tone: 'text-primary'
};

export interface PatchCardMatches {
	searching: boolean;
	keys: ReadonlySet<string>;
	changeCount: number | null;
	/** null when nothing countable matched, which also suppresses the row. */
	label: string | null;
	tone: string;
}

/** Which of this patch's entities the active filters asked for. */
export function patchCardMatches(patch: PatchCardProps): PatchCardMatches {
	if (!searchParams.isSearching) return NO_MATCHES;

	const pick = (icons: ChangelogEntityIcon[], names: string[]) =>
		names.length === 0 ? [] : icons.filter((icon) => hasEntity(names, icon.alt));

	const entities = [
		...pick(patch.icons?.heroes ?? [], searchParams.hero),
		...pick(patch.icons?.items ?? [], searchParams.item)
	];
	const counted = entities.filter((entity) => entity.changeCount != null);
	const changeCount = counted.length
		? counted.reduce((total, entity) => total + (entity.changeCount ?? 0), 0)
		: null;

	return {
		searching: true,
		keys: new Set(entities.map(entityKey)),
		changeCount,
		label:
			changeCount === null
				? null
				: entities.length === 1
					? `${entities[0].alt} ${plural(changeCount, 'change')}`
					: `matched ${plural(changeCount, 'change')}`,
		tone: entities.every((entity) => entity.type === 'item')
			? 'text-signal'
			: 'text-primary'
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
			const entityParams = new URLSearchParams(params);
			const key = entity.type;
			const selected = key === 'hero' ? searchParams.hero : searchParams.item;
			if (!hasEntity(selected, entity.alt)) {
				const retained = selected.slice(0, MAX_ENTITY_FILTERS - 1);
				entityParams.set(key, [...retained, entity.alt].join(','));
			}
			const entityQuery = entityParams.toString();
			return `${changePath(patch)}${entityQuery ? `?${entityQuery}` : ''}#${entityFragmentId(entity.alt)}`;
		}
	};
}

/** `prioritize` floats filtered entities ahead of the `+N` slice. */
export function patchCardView(
	patch: PatchCardProps,
	featured = false,
	prioritize: ReadonlySet<string> = new Set()
) {
	const max = featured ? 14 : 6;
	const lead = (list: ChangelogEntityIcon[]) =>
		prioritize.size === 0
			? list
			: [
					...list.filter((entity) => prioritize.has(entityKey(entity))),
					...list.filter((entity) => !prioritize.has(entityKey(entity)))
				];
	const heroes = lead(patch.icons?.heroes ?? []);
	const items = lead(patch.icons?.items ?? []);

	const rows = [
		{
			type: 'heroes',
			label: 'Heroes',
			tone: 'text-primary',
			list: heroes.slice(0, max),
			extra: Math.max(0, heroes.length - max),
			offset: 0
		},
		{
			type: 'items',
			label: 'Items',
			tone: 'text-signal',
			list: items.slice(0, max),
			extra: Math.max(0, items.length - max),
			offset: Math.min(heroes.length, max)
		}
	].filter((row) => row.list.length > 0);

	const counts = [
		{
			n: heroes.length,
			noun: plural(heroes.length, 'hero', 'heroes'),
			tone: 'text-primary'
		},
		{ n: items.length, noun: plural(items.length, 'item'), tone: 'text-signal' }
	].filter((count) => count.n > 0);

	const scope = counts.map((count) => `${count.n} ${count.noun}`).join(' and ');
	const totals = counts.map((count) => `${count.n} ${count.noun}`).join(' · ');
	const date = formatDate(patch.date);
	const named = !/\d{2}-\d{2}-\d{4}/.test(patch.title);

	return {
		rows,
		counts,
		totals,
		initials: authorInitials(patch.author),
		heading: named ? patch.title : date,
		date,
		named,
		fallbackImage: patch.majorUpdate ? FALLBACK_PREVIEW.major : FALLBACK_PREVIEW.minor,
		accessibleLabel:
			`${featured ? 'Latest patch, ' : ''}${named ? `${patch.title}, ${date}` : date}, by ${patch.author}` +
			`${scope ? `, affecting ${scope}` : ''}. View full patch.`
	};
}
