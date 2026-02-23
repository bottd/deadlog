import { describe, it, expect } from 'vitest';
import { resolveEntityIds, parseApiParams } from './changelog-utils';
import { parseCSV } from '$lib/utils/csv';

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

	it('skips names that do not match any entity', () => {
		expect(resolveEntityIds(['Bebop', 'NonExistent'], entities)).toEqual([1]);
	});

	it('returns empty array for empty input', () => {
		expect(resolveEntityIds([], entities)).toEqual([]);
	});

	it('returns empty array when no names match', () => {
		expect(resolveEntityIds(['Foo', 'Bar'], entities)).toEqual([]);
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
