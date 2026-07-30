import { describe, expect, it } from 'vitest';
import {
	DISPLAY_TIME_ZONE,
	abilityFragmentId,
	escapeMogDelimiters,
	formatDate,
	formatTime,
	makeSummary,
	stripMogLinks,
	unescapeMogDelimiters
} from './index';

describe('escapeMogDelimiters', () => {
	it('escapes prose that would otherwise open a delimiter', () => {
		expect(escapeMogDelimiters('Approx ~~5s~~ and a || pipe.')).toBe(
			'Approx \\~~5s\\~~ and a \\|| pipe.'
		);
	});

	it('escapes both halves so the partner cannot pair with later text', () => {
		expect(escapeMogDelimiters('[[a]] and ((b)) and {{c}}')).toBe(
			'\\[[a\\]] and \\((b\\)) and \\{{c\\}}'
		);
	});

	it('leaves a real link untouched', () => {
		expect(escapeMogDelimiters('see [[https://a.example/b]]((the FAQ)) now')).toBe(
			'see [[https://a.example/b]]((the FAQ)) now'
		);
	});

	it('escapes prose delimiters on both sides of a link', () => {
		expect(escapeMogDelimiters('**a** [[https://x.example]]((y)) __b__')).toBe(
			'\\**a\\** [[https://x.example]]((y)) \\__b\\__'
		);
	});

	it('does not double-escape', () => {
		expect(escapeMogDelimiters('already \\** escaped')).toBe('already \\** escaped');
	});

	it('round-trips through unescapeMogDelimiters', () => {
		const prose = 'Approx ~~5s~~ and **stars** and a || pipe.';
		expect(unescapeMogDelimiters(escapeMogDelimiters(prose))).toBe(prose);
	});
});

describe('stripMogLinks', () => {
	it('reduces a link to its label', () => {
		expect(stripMogLinks('see [[https://a.example]]((the FAQ)) now')).toBe(
			'see the FAQ now'
		);
	});

	it('leaves link-free text alone', () => {
		expect(stripMogLinks('Cooldown reduced from 8s to 6s')).toBe(
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
