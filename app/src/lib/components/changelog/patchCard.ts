import { entityFragmentId, entityNamesMatch, formatDate, plural } from '@deadlog/utils';
import { searchParams } from '$lib/stores/searchParams.svelte';
import { MAX_ENTITY_FILTERS } from '$lib/queries/keys';
import type { ChangelogEntry, EntityIcon } from '$lib/types';
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

/**
 * Reads the filter store — keep in its own `$derived`, separate from `patchCardView`,
 * so a filter change only rebuilds the hrefs, not every card's rows and counts.
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
			if (!selected.some((name) => entityNamesMatch(name, entity.alt))) {
				const retained = selected.slice(0, MAX_ENTITY_FILTERS - 1);
				entityParams.set(key, [...retained, entity.alt].join(','));
			}
			const entityQuery = entityParams.toString();
			return `${changePath(patch)}${entityQuery ? `?${entityQuery}` : ''}#${entityFragmentId(entity.alt)}`;
		}
	};
}

/** Everything both patch cards derive from the same props, independent of the filters. */
export function patchCardView(patch: PatchCardProps, featured = false) {
	const max = featured ? 14 : 6;
	const heroes = patch.icons?.heroes ?? [];
	const items = patch.icons?.items ?? [];

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
	const date = formatDate(patch.date);
	const named = !/\d{2}-\d{2}-\d{4}/.test(patch.title);

	return {
		rows,
		counts,
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
