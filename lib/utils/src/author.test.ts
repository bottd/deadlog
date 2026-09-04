import { describe, expect, it } from 'vitest';
import { authorAvatarPath, authorInitials, authorSlug } from './author';

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

describe('authorSlug', () => {
	it('lowercases and hyphenates', () => {
		expect(authorSlug('Daniel Jennings')).toBe('daniel-jennings');
		expect(authorSlug('IceFrog')).toBe('icefrog');
	});

	it('drops the punctuation Steam redacts names with', () => {
		expect(authorSlug('mystery *******')).toBe('mystery');
	});

	it('is empty when nothing sluggable is left', () => {
		expect(authorSlug('*******')).toBe('');
		expect(authorSlug('')).toBe('');
	});
});

describe('authorAvatarPath', () => {
	it('gives the two authors we have a real picture for their own file', () => {
		expect(authorAvatarPath('Yoshi')).toBe('/assets/authors/yoshi.webp');
		expect(authorAvatarPath('IceFrog')).toBe('/assets/authors/icefrog.webp');
	});

	it('falls back to the Deadlock group avatar for authors with no picture', () => {
		// Steam anonymizes these posters, so there is no personal image to point at.
		expect(authorAvatarPath('simonne')).toBe('/assets/authors/deadlock.webp');
		expect(authorAvatarPath('Daniel Jennings')).toBe('/assets/authors/deadlock.webp');
		expect(authorAvatarPath('mystery *******')).toBe('/assets/authors/deadlock.webp');
	});

	it('never yields a pathless name for an unsluggable author', () => {
		expect(authorAvatarPath('*******')).toBe('/assets/authors/deadlock.webp');
		expect(authorAvatarPath('')).toBe('/assets/authors/deadlock.webp');
	});
});
