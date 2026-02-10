export function toggleArray<T>(array: T[], item: T): T[] {
	return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
}
