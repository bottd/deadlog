import { describe, it, expect } from 'vitest';
import { parseAuthorName } from './authorParser';

describe('parseAuthorName', () => {
	it('should extract name from email (name) format', () => {
		expect(parseAuthorName('invalid@example.com (Yoshi)')).toBe('Yoshi');
	});

	it('should extract name from (name) format without email', () => {
		expect(parseAuthorName('(Yoshi)')).toBe('Yoshi');
	});

	it('should return name as-is if no parentheses', () => {
		expect(parseAuthorName('Yoshi')).toBe('Yoshi');
	});

	it('should return "Unknown" for email-only strings', () => {
		expect(parseAuthorName('invalid@example.com')).toBe('Unknown');
	});

	it('should return "Unknown" for null', () => {
		expect(parseAuthorName(null)).toBe('Unknown');
	});

	it('should return "Unknown" for undefined', () => {
		expect(parseAuthorName(undefined)).toBe('Unknown');
	});

	it('should return "Unknown" for empty string', () => {
		expect(parseAuthorName('')).toBe('Unknown');
	});

	it('should handle names with spaces', () => {
		expect(parseAuthorName('invalid@example.com (John Doe)')).toBe('John Doe');
	});

	it('should trim whitespace from extracted names', () => {
		expect(parseAuthorName('invalid@example.com (  Yoshi  )')).toBe('Yoshi');
	});
});
