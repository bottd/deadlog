/**
 * Author identity, shared by the scraper, the OG renderer and the site.
 *
 * Steam anonymizes announcement posters (both the news API and the events API report
 * `posterid: 0`), so there is no per-author picture to scrape for simonne, IceFrog or
 * anyone else who only ever appears in a Steam announcement. The forum does expose an
 * avatar, so scraping it bought a picture for exactly one author. The pictures are now
 * static files in `app/static/assets/authors/`, mapped by name below.
 */

/** Whitespace and camelCase both split a name: "IceFrog" → "IF", "JP Morgan" → "JM". */
function nameWords(author: string): string[] {
	return author
		.split(/\s+/)
		.flatMap((word) => word.split(/(?<=\p{Ll})(?=\p{Lu})/u))
		.filter((word) => /^[\p{L}\p{N}]/u.test(word));
}

export function authorInitials(author: string): string {
	const [first, second] = nameWords(author);
	if (!first) return '?';
	// Index code points, not UTF-16 units: Steam personas reach into astral planes.
	const chars = [...first];
	return (second ? chars[0] + [...second][0] : chars.slice(0, 2).join('')).toUpperCase();
}

/**
 * Authors we have a genuine picture for, keyed by {@link authorSlug}. Yoshi's is the
 * avatar that account actually uses on the official forum; IceFrog's is the frog image
 * he is known by. Add a slug here only alongside a real file in
 * `app/static/assets/authors/` — a name in this set with no file is a broken image.
 */
const AUTHORS_WITH_OWN_AVATAR = new Set(['yoshi', 'icefrog']);

/**
 * Everyone else. Steam credits these announcements to the Deadlock group rather than to
 * a person (`posterid: 0`), and the personal accounts that share a persona name are
 * demonstrably other people — `steamcommunity.com/id/simonne` belongs to no Valve group
 * — so the group's own avatar stands in rather than a stranger's photo.
 */
export const SHARED_AUTHOR_AVATAR = 'deadlock';

export function authorSlug(author: string): string {
	return author
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Root-relative so the site serves it straight out of `app/static`. */
export const AUTHOR_AVATAR_DIR = '/assets/authors';

export function authorAvatarPath(author: string): string {
	const slug = authorSlug(author);
	const name = AUTHORS_WITH_OWN_AVATAR.has(slug) ? slug : SHARED_AUTHOR_AVATAR;
	return `${AUTHOR_AVATAR_DIR}/${name}.webp`;
}
