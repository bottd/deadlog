import { describe, it, expect } from 'vitest';
import { resolveEntityIds, parseApiParams, makeSummary } from './changelog-utils';
import { parseCSV } from '$lib/utils/csv';

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

describe('parseCSV', () => {
	it('returns empty array for null', () => {
		expect(parseCSV(null)).toEqual([]);
	});

	it('returns empty array for empty string', () => {
		expect(parseCSV('')).toEqual([]);
	});

	it('parses a single value', () => {
		expect(parseCSV('Bebop')).toEqual(['Bebop']);
	});

	it('parses multiple comma-separated values', () => {
		expect(parseCSV('Bebop,Abrams,Warden')).toEqual(['Bebop', 'Abrams', 'Warden']);
	});

	it('filters out empty entries from trailing commas', () => {
		expect(parseCSV('Bebop,,Warden,')).toEqual(['Bebop', 'Warden']);
	});
});

describe('resolveEntityIds', () => {
	const entities = [
		{ id: 1, name: 'Bebop' },
		{ id: 2, name: 'Abrams' },
		{ id: 3, name: 'Warden' }
	];

	it('resolves matching names to ids', () => {
		expect(resolveEntityIds(['Bebop', 'Warden'], entities)).toEqual([1, 3]);
	});

	it('resolves names case-insensitively', () => {
		expect(resolveEntityIds(['bebop', 'ABRAMS'], entities)).toEqual([1, 2]);
	});

	it('maps unknown names to the impossible id so the filter matches nothing', () => {
		expect(resolveEntityIds(['Bebop', 'NonExistent'], entities)).toEqual([1, -1]);
	});

	it('returns empty array for empty input', () => {
		expect(resolveEntityIds([], entities)).toEqual([]);
	});

	it('maps all-unknown names to impossible ids', () => {
		expect(resolveEntityIds(['Foo', 'Bar'], entities)).toEqual([-1, -1]);
	});
});

describe('parseApiParams', () => {
	it('parses hero CSV from URL', () => {
		const url = new URL('http://localhost/api?hero=Bebop,Abrams');
		const params = parseApiParams(url);
		expect(params.hero).toEqual(['Bebop', 'Abrams']);
	});

	it('returns empty array for missing hero param', () => {
		const url = new URL('http://localhost/api');
		const params = parseApiParams(url);
		expect(params.hero).toEqual([]);
	});

	it('returns default limit and offset', () => {
		const url = new URL('http://localhost/api');
		const params = parseApiParams(url);
		expect(params.limit).toBe(8);
		expect(params.offset).toBe(0);
	});

	it('parses q param', () => {
		const url = new URL('http://localhost/api?q=General');
		const params = parseApiParams(url);
		expect(params.q).toBe('General');
	});
});
