import { format, parseISO } from 'date-fns';

/**
 * Formats a date to a long format (e.g., "January 1, 2025")
 */
export function formatDate(date: Date | string): string {
	const d = date instanceof Date ? date : parseISO(date);
	return format(d, 'MMMM d, yyyy');
}

/**
 * Formats a date with ordinal suffix (e.g., "January 1st, 2025")
 */
export function formatDateWithSuffix(date: Date | string): string {
	const d = date instanceof Date ? date : parseISO(date);
	const day = d.getDate();
	const suffix = ['th', 'st', 'nd', 'rd'][
		day % 10 > 3 ? 0 : (day % 100) - (day % 10) != 10 ? day % 10 : 0
	];
	return format(d, 'MMMM') + ' ' + day + suffix + ', ' + format(d, 'yyyy');
}

/**
 * Formats time only (e.g., "2:30 PM")
 */
export function formatTime(date: Date | string): string {
	const d = date instanceof Date ? date : parseISO(date);
	return format(d, 'h:mm a');
}
