export function parseCSV(value: string | null): string[] {
	if (!value) return [];
	return value
		.split(',')
		.map((entry) => entry.trim())
		.filter(Boolean);
}
