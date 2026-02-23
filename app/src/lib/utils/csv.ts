export function parseCSV(value: string | null): string[] {
	if (!value) return [];
	return value.split(',').filter(Boolean);
}

export function toCSV(arr: string[]): string {
	return arr.join(',');
}
