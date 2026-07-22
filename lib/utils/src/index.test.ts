import { describe, expect, it } from 'vitest';
import { DISPLAY_TIME_ZONE, formatDate, formatTime } from './index';

describe('patch date formatting', () => {
	it('uses Valve local time near a UTC date boundary', () => {
		const date = '2026-06-12T00:59:18.000Z';
		expect(DISPLAY_TIME_ZONE).toBe('America/Los_Angeles');
		expect(formatDate(date)).toBe('June 11th, 2026');
		expect(formatTime(date)).toBe('5:59 PM');
	});

	it('formats ordinal suffixes after timezone conversion', () => {
		expect(formatDate('2026-03-02T20:00:00.000Z')).toBe('March 2nd, 2026');
		expect(formatDate('2026-03-13T20:00:00.000Z')).toBe('March 13th, 2026');
	});
});
