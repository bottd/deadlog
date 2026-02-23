import { describe, it, expect } from 'vitest';
import { toggleArray } from './toggle';

describe('toggleArray', () => {
	it('adds an item to an empty array', () => {
		expect(toggleArray([], 'a')).toEqual(['a']);
	});

	it('adds an item not present in the array', () => {
		expect(toggleArray(['a', 'b'], 'c')).toEqual(['a', 'b', 'c']);
	});

	it('removes an item present in the array', () => {
		expect(toggleArray(['a', 'b', 'c'], 'b')).toEqual(['a', 'c']);
	});

	it('removes the sole element leaving an empty array', () => {
		expect(toggleArray(['a'], 'a')).toEqual([]);
	});

	it('does not mutate the original array', () => {
		const original = ['a', 'b'];
		const result = toggleArray(original, 'c');
		expect(original).toEqual(['a', 'b']);
		expect(result).not.toBe(original);
	});

	it('does not mutate when removing', () => {
		const original = ['a', 'b'];
		const result = toggleArray(original, 'a');
		expect(original).toEqual(['a', 'b']);
		expect(result).not.toBe(original);
	});

	it('works with number types', () => {
		expect(toggleArray([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
		expect(toggleArray([1, 2, 3], 2)).toEqual([1, 3]);
	});
});
