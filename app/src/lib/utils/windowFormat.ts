import type { DayInterval } from '@deadlog/utils';

const MONTHS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export function formatInterval(interval: DayInterval | null, entryYear: number): string {
	if (!interval) return '—';
	const first = new Date(`${interval.from}T00:00:00Z`);
	const last = new Date(Date.parse(`${interval.to}T00:00:00Z`) - 86_400_000);
	const month = (date: Date) => MONTHS[date.getUTCMonth()];
	const year =
		last.getUTCFullYear() === entryYear && first.getUTCFullYear() === entryYear
			? ''
			: ` ${last.getUTCFullYear()}`;

	if (first.getTime() === last.getTime()) {
		return `${first.getUTCDate()} ${month(first)}${year}`;
	}
	if (first.getUTCMonth() === last.getUTCMonth()) {
		return `${first.getUTCDate()}–${last.getUTCDate()} ${month(last)}${year}`;
	}
	return `${first.getUTCDate()} ${month(first)} – ${last.getUTCDate()} ${month(last)}${year}`;
}

export function formatClock(seconds: number): string {
	const whole = Math.round(seconds);
	return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}
