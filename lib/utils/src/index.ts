export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

export {
	decodeEntityName,
	entityNameAliases,
	entityNamesMatch,
	normalizeEntityName
} from './entityNames';

function toDate(date: Date | string): Date {
	return date instanceof Date ? date : new Date(date);
}

function getOrdinalSuffix(day: number): string {
	if (day >= 11 && day <= 13) return 'th';
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

export const DISPLAY_TIME_ZONE = 'America/Los_Angeles';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});

export function formatDate(date: Date | string): string {
	const parts = dateFormatter.formatToParts(toDate(date));
	const value = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((part) => part.type === type)?.value ?? '';
	const day = Number(value('day'));
	return `${value('month')} ${day}${getOrdinalSuffix(day)}, ${value('year')}`;
}

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});

export function formatTime(date: Date | string): string {
	return timeFormatter.format(toDate(date));
}
