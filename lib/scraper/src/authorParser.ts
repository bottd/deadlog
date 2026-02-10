export function parseAuthorName(authorString: string | undefined | null): string {
	const str = authorString ?? 'Unknown';
	if (str === 'Unknown' || str.trim() === '') return 'Unknown';

	const match = str.match(/\(([^)]+)\)/);
	if (match?.[1]) return match[1].trim();
	return str.includes('@') ? 'Unknown' : str.trim();
}
