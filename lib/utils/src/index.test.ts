import { describe, expect, it } from 'vitest';
import {
	DISPLAY_TIME_ZONE,
	abilityFragmentId,
	escapeNorgBraces,
	formatDate,
	formatTime,
	makeSummary,
	stripNorgLinks
} from './index';

describe('escapeNorgBraces', () => {
	it('escapes prose braces that would otherwise open a link', () => {
		expect(escapeNorgBraces('Schemes: { Standard | Gyro }.')).toBe(
			'Schemes: \\{ Standard | Gyro \\}.'
		);
	});

	it('leaves a real link untouched', () => {
		expect(escapeNorgBraces('see {https://a.example/b}[the FAQ] now')).toBe(
			'see {https://a.example/b}[the FAQ] now'
		);
	});

	it('escapes prose braces on both sides of a link', () => {
		expect(escapeNorgBraces('{a} {https://x.example}[y] {b}')).toBe(
			'\\{a\\} {https://x.example}[y] \\{b\\}'
		);
	});

	it('does not double-escape', () => {
		expect(escapeNorgBraces('already \\{ escaped')).toBe('already \\{ escaped');
	});
});

describe('stripNorgLinks', () => {
	it('reduces a link to its label', () => {
		expect(stripNorgLinks('see {https://a.example}[the FAQ] now')).toBe(
			'see the FAQ now'
		);
	});

	it('leaves link-free text alone', () => {
		expect(stripNorgLinks('Cooldown reduced from 8s to 6s')).toBe(
			'Cooldown reduced from 8s to 6s'
		);
	});
});

describe('abilityFragmentId', () => {
	it('slugifies punctuation into separators', () => {
		expect(abilityFragmentId("Djinn's Mark")).toBe('djinn-s-mark');
	});

	it('trims leading and trailing separators', () => {
		expect(abilityFragmentId('  Mo & Krill  ')).toBe('mo-krill');
	});
});

describe('makeSummary', () => {
	it('returns empty string for null/empty', () => {
		expect(makeSummary(null)).toBe('');
		expect(makeSummary('')).toBe('');
	});

	it('returns short text unchanged and collapses whitespace', () => {
		expect(makeSummary('Urn  bounty\n reduced')).toBe('Urn bounty reduced');
	});

	it('clamps long text at a word boundary with an ellipsis', () => {
		const text = 'Apollo Disengaging Sigil velocity increased and the cooldown lowered';
		const out = makeSummary(text, 20);
		expect(out.endsWith('…')).toBe(true);
		expect(out.length).toBeLessThanOrEqual(21); // <= max + ellipsis
		expect(out).not.toContain('  ');
		expect(text.startsWith(out.slice(0, -1))).toBe(true); // prefix of the source
	});
});

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
