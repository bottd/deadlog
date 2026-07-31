import { formatDate, plural } from '@deadlog/utils';
import { searchParams } from '$lib/stores/searchParams.svelte';
import type { ChangelogEntry } from '$lib/types';
import { entityFragmentId } from './entityContext';
import { changePath } from '$lib/seo';

export type PatchCardProps = Omit<ChangelogEntry, 'title' | 'updates'>;

export const authorInitials = (author: string) => author.slice(0, 2).toUpperCase();

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
	const query = searchParams.toURLSearchParams().toString();
	const href = `${changePath(patch)}${query ? `?${query}` : ''}`;
	return { href, entityHref: (name: string) => `${href}#${entityFragmentId(name)}` };
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

	return {
		rows,
		counts,
		initials: authorInitials(patch.author),
		fallbackImage: patch.majorUpdate ? FALLBACK_PREVIEW.major : FALLBACK_PREVIEW.minor,
		accessibleLabel:
			`${featured ? 'Latest patch, ' : ''}${formatDate(patch.date)}, by ${patch.author}` +
			`${scope ? `, affecting ${scope}` : ''}. View full patch.`
	};
}
