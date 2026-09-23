import { describe, expect, it } from 'vitest';
import { formatClock, formatInterval } from './windowFormat';

describe('formatInterval', () => {
	it('shows the last sampled day, not the exclusive end', () => {
		expect(formatInterval({ from: '2026-09-02', to: '2026-09-16' }, 2026)).toBe(
			'2–15 Sep'
		);
		expect(formatInterval({ from: '2026-09-17', to: '2026-09-18' }, 2026)).toBe('17 Sep');
	});

	it("names both months across a boundary and the year only when it is not the entry's", () => {
		expect(formatInterval({ from: '2025-12-28', to: '2026-01-11' }, 2026)).toBe(
			'28 Dec – 10 Jan 2026'
		);
		expect(formatInterval({ from: '2025-12-18', to: '2026-01-01' }, 2026)).toBe(
			'18–31 Dec 2025'
		);
		expect(formatInterval({ from: '2026-08-25', to: '2026-09-08' }, 2026)).toBe(
			'25 Aug – 7 Sep'
		);
	});

	it('shows a dash for an empty interval', () => {
		expect(formatInterval(null, 2026)).toBe('—');
	});
});

describe('formatClock', () => {
	it('reads seconds as minutes and seconds of game time', () => {
		expect(formatClock(1261.8)).toBe('21:02');
		expect(formatClock(59.6)).toBe('1:00');
		expect(formatClock(5)).toBe('0:05');
	});
});
