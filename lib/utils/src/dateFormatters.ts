const timeFormatter = new Intl.DateTimeFormat('en-US', {
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});

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

export function formatDate(date: Date | string): string {
	const d = toDate(date);
	const month = d.toLocaleDateString('en-US', { month: 'long' });
	const day = d.getDate();
	const year = d.getFullYear();
	return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
}

export function formatTime(date: Date | string): string {
	return timeFormatter.format(toDate(date));
}
