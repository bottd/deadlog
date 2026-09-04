/**
 * Steam exposes no per-author avatar — only forum posts carry one, and Yoshi is the
 * only person who posts there. For every other author this monogram is the avatar.
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
