/**
 * Escapes special regex characters in a string to make it safe for use in RegExp.
 * @param str - The string to escape
 * @returns The escaped string safe for regex use
 */
export function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
