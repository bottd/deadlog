import { describe, it, expect } from 'vitest';
import { highlightText } from './textHighlight';

describe('highlightText', () => {
	it('should return original text when search query is empty', () => {
		const text = 'This is a test';
		const result = highlightText(text, '');
		expect(result).toBe(text);
	});

	it('should return original text when search query is whitespace only', () => {
		const text = 'This is a test';
		const result = highlightText(text, '   ');
		expect(result).toBe(text);
	});

	it('should highlight a single match', () => {
		const text = 'This is a test';
		const result = highlightText(text, 'test');
		expect(result).toBe(
			'This is a <mark class="bg-primary/30 text-foreground rounded px-0.5">test</mark>'
		);
	});

	it('should highlight multiple matches', () => {
		const text = 'This test is a test';
		const result = highlightText(text, 'test');
		expect(result).toBe(
			'This <mark class="bg-primary/30 text-foreground rounded px-0.5">test</mark> is a <mark class="bg-primary/30 text-foreground rounded px-0.5">test</mark>'
		);
	});

	it('should be case insensitive', () => {
		const text = 'This TEST is a Test';
		const result = highlightText(text, 'test');
		expect(result).toBe(
			'This <mark class="bg-primary/30 text-foreground rounded px-0.5">TEST</mark> is a <mark class="bg-primary/30 text-foreground rounded px-0.5">Test</mark>'
		);
	});

	it('should preserve original case in matches', () => {
		const text = 'Infernus was buffed';
		const result = highlightText(text, 'INFERNUS');
		expect(result).toBe(
			'<mark class="bg-primary/30 text-foreground rounded px-0.5">Infernus</mark> was buffed'
		);
	});

	it('should handle partial word matches', () => {
		const text = 'Damage increased';
		const result = highlightText(text, 'Damage');
		expect(result).toBe(
			'<mark class="bg-primary/30 text-foreground rounded px-0.5">Damage</mark> increased'
		);
	});

	it('should escape special regex characters', () => {
		const text = 'Cost: $100 (reduced)';
		const result = highlightText(text, '$100');
		expect(result).toBe(
			'Cost: <mark class="bg-primary/30 text-foreground rounded px-0.5">$100</mark> (reduced)'
		);
	});

	it('should handle regex special characters in search query', () => {
		const text = 'Pattern [test] found';
		const result = highlightText(text, '[test]');
		expect(result).toBe(
			'Pattern <mark class="bg-primary/30 text-foreground rounded px-0.5">[test]</mark> found'
		);
	});

	it('should handle dots in search query', () => {
		const text = 'Version 1.2.3 released';
		const result = highlightText(text, '1.2');
		expect(result).toBe(
			'Version <mark class="bg-primary/30 text-foreground rounded px-0.5">1.2</mark>.3 released'
		);
	});

	it('should handle parentheses in search query', () => {
		const text = 'Fixed bug (issue #123)';
		const result = highlightText(text, '(issue #123)');
		expect(result).toBe(
			'Fixed bug <mark class="bg-primary/30 text-foreground rounded px-0.5">(issue #123)</mark>'
		);
	});

	it('should handle search at start of text', () => {
		const text = 'Infernus was buffed';
		const result = highlightText(text, 'Infernus');
		expect(result).toBe(
			'<mark class="bg-primary/30 text-foreground rounded px-0.5">Infernus</mark> was buffed'
		);
	});

	it('should handle search at end of text', () => {
		const text = 'Hero is Infernus';
		const result = highlightText(text, 'Infernus');
		expect(result).toBe(
			'Hero is <mark class="bg-primary/30 text-foreground rounded px-0.5">Infernus</mark>'
		);
	});

	it('should handle multi-word search queries', () => {
		const text = 'Metal Skin cost reduced significantly';
		const result = highlightText(text, 'Metal Skin');
		expect(result).toBe(
			'<mark class="bg-primary/30 text-foreground rounded px-0.5">Metal Skin</mark> cost reduced significantly'
		);
	});
});
