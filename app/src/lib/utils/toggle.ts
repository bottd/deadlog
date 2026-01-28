/**
 * Toggle an item in a Set. Returns a new Set with the item added or removed.
 */
export function toggleSet<T>(set: Set<T>, item: T): Set<T> {
	const next = new Set(set);
	if (next.has(item)) {
		next.delete(item);
	} else {
		next.add(item);
	}
	return next;
}

/**
 * Toggle an item in an array. Returns a new array with the item added or removed.
 */
export function toggleArray<T>(array: T[], item: T): T[] {
	return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
}
