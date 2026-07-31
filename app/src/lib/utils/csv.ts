export function parseCSV(value: string | null): string[] {
	if (!value) return [];
	return value.split(',').filter(Boolean);
}
