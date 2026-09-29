import { expect, it } from 'vitest';
import { retainResources, resourceIdentity } from './mcp-resources';

it('retains compatible resource identities without mixing content or growing indefinitely', () => {
	const resource = (html: string) => ({ html, uri: resourceIdentity(html) });
	const a = resource('synthetic resource A');
	const b = resource('synthetic resource B');
	const c = resource('synthetic resource C');
	const d = resource('synthetic resource D');
	expect(retainResources(d, [c, b, a])).toEqual([d, c, b]);
	expect(retainResources(c, [c, b])).toEqual([c, b]);
	expect(() => retainResources(d, [{ ...c, html: 'tampered' }])).toThrow(
		'identity mismatch'
	);
});
