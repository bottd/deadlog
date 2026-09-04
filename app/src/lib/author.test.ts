import { describe, expect, it } from 'vitest';
import { authorInitials } from './author';

describe('authorInitials', () => {
	it('takes one letter from each of the first two words', () => {
		expect(authorInitials('Daniel Jennings')).toBe('DJ');
	});

	it('splits camelCase, so a one-word handle still reads as two initials', () => {
		expect(authorInitials('IceFrog')).toBe('IF');
	});

	it('falls back to the first two letters of a single lowercase word', () => {
		expect(authorInitials('simonne')).toBe('SI');
		expect(authorInitials('Yoshi')).toBe('YO');
	});

	it('ignores punctuation-only words', () => {
		expect(authorInitials('mystery *******')).toBe('MY');
	});

	it('keeps astral characters whole instead of splitting a surrogate pair', () => {
		expect(authorInitials('\u{1D57D}eaper Fox')).toBe('\u{1D57D}F');
		expect(authorInitials('\u{1D57D}eaper')).toBe('\u{1D57D}E');
	});

	it('never renders an empty monogram', () => {
		expect(authorInitials('')).toBe('?');
		expect(authorInitials('***')).toBe('?');
	});
});
