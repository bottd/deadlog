const HIGHLIGHT_CLASS = 'bg-primary/30 text-foreground rounded px-0.5' as const;
const REGEX_SPECIAL_CHARS = /[.*+?^${}()|[\]\\]/g;

export function highlightText(text: string, searchQuery: string): string {
	const query = searchQuery.trim();
	if (!query) return text;

	const escapedQuery = query.replace(REGEX_SPECIAL_CHARS, '\\$&');
	const regex = new RegExp(`(${escapedQuery})`, 'gi');

	return text.replace(regex, `<mark class="${HIGHLIGHT_CLASS}">$1</mark>`);
}
