/**
 * Parse author name from RSS feed author format
 * RSS feeds typically use format: "email@example.com (Author Name)"
 * This function extracts just the author name
 *
 * @param authorString - The raw author string from RSS feed
 * @returns The parsed author name, or the original string if no match found
 *
 * @example
 * parseAuthorName("invalid@example.com (Yoshi)") // returns "Yoshi"
 * parseAuthorName("Yoshi") // returns "Yoshi"
 */
export function parseAuthorName(authorString: string | undefined | null): string {
	const str = authorString ?? 'Unknown';
	if (str === 'Unknown' || str.trim() === '') return 'Unknown';

	// Match pattern: email (Name) or just (Name)
	const match = str.match(/\(([^)]+)\)/);

	if (match?.[1]) {
		return match[1].trim();
	}

	// If no parentheses found, check if it looks like an email
	// and return 'Unknown', otherwise return as-is
	return str.includes('@') ? 'Unknown' : str.trim();
}
