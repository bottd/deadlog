/**
 * Converts a name to a URL-safe slug.
 * Example: "Lady Geist" -> "lady-geist"
 */
export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}
