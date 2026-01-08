import { toast } from 'svelte-sonner';

/**
 * Copies the given text to clipboard and shows a success toast.
 */
export async function copyToClipboard(text: string, message = 'Copied to clipboard') {
	await navigator.clipboard.writeText(text);
	toast.success(message);
}

/**
 * Copies a changelog link to clipboard. Handles event propagation.
 */
export async function copyChangelogLink(e: MouseEvent, changeId: string) {
	e.preventDefault();
	e.stopPropagation();
	await copyToClipboard(`${window.location.origin}/change/${changeId}`);
}
