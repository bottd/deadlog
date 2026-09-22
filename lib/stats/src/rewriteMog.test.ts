import { describe, expect, it } from 'vitest';
import { parseStructure } from '@deadlog/changelog';
import type { EntityImpact } from '@deadlog/utils';
import { indexEntities, upsertImpactBlocks } from './rewriteMog';

const window = { win: 0.5, pick: 0.1, matches: 2800, days: 14 };
const impactWith = (win: number, closed = true): EntityImpact => ({
	closed,
	all: { before: window, after: { ...window, win } },
	high: { before: window, after: { win: null, pick: null, matches: 12, days: 2 } }
});

const index = indexEntities({
	hero: [
		{ id: 69, name: 'The Doorman' },
		{ id: 1, name: 'Infernus' }
	],
	item: [{ id: 500, name: "Diviner's Kevlar" }]
});

const source = [
	'``attr:',
	'title "Patch"',
	'content_text "Doorman Base damage increased"',
	'``',
	'',
	'# Hero Changes',
	'=hero:doorman:',
	'[[/hero/the-doorman]](([[!:https://cdn.example/d.webp]] Doorman patch history))',
	'## [[/hero/the-doorman]]((The Doorman))',
	'- Base damage increased',
	'==ability:call-bell:',
	'### Call Bell',
	'- Cooldown reduced',
	'==',
	'=',
	'=hero:infernus:',
	'## Infernus',
	'- Afterburn reduced',
	'=',
	'# Item Changes',
	'=item:diviner-s-kevlar:',
	"## Diviner's Kevlar",
	'- Now grants cooldown reduction',
	'=',
	''
].join('\n');

const doorman = { kind: 'hero' as const, id: 69, impact: impactWith(0.52) };
const kevlar = { kind: 'item' as const, id: 500, impact: impactWith(0.61, false) };

const impactsIn = async (text: string) =>
	Object.fromEntries((await parseStructure(text)).changes.map((c) => [c.name, c.impact]));

describe('upsertImpactBlocks', () => {
	it('inserts a block directly under the fence, found by heading name', async () => {
		const next = await upsertImpactBlocks(source, [doorman], index);
		const lines = next.split('\n');

		const fence = lines.indexOf('=hero:doorman:');
		expect(lines[fence + 1]).toBe('``attr:');
		expect(lines[fence + 2]).toBe('impact closed=#true {');
		expect(await impactsIn(next)).toEqual({
			'The Doorman': doorman.impact,
			Infernus: undefined,
			"Diviner's Kevlar": undefined
		});
	});

	it('writes several entities in one pass and leaves everything else byte-identical', async () => {
		const next = await upsertImpactBlocks(source, [kevlar, doorman], index);

		expect((await impactsIn(next))["Diviner's Kevlar"]).toEqual(kevlar.impact);
		expect((await impactsIn(next))['The Doorman']).toEqual(doorman.impact);
		const stripped = next
			.split('\n')
			.filter((_, i, all) => {
				const open = all.lastIndexOf('``attr:', i);
				const close = all.indexOf('``', open + 1);
				return !(open > 3 && i >= open && i <= close);
			})
			.join('\n');
		expect(stripped).toBe(source);
	});

	it('replaces an existing block instead of adding a second one', async () => {
		const first = await upsertImpactBlocks(source, [doorman], index);
		const second = await upsertImpactBlocks(
			first,
			[{ ...doorman, impact: impactWith(0.55) }],
			index
		);

		expect(second.split('\n').filter((line) => line === '``attr:')).toHaveLength(2);
		expect((await impactsIn(second))['The Doorman']).toEqual(impactWith(0.55));
		expect(second.split('\n')).toHaveLength(first.split('\n').length);
	});

	it('is idempotent', async () => {
		const once = await upsertImpactBlocks(source, [doorman, kevlar], index);

		expect(await upsertImpactBlocks(once, [doorman, kevlar], index)).toBe(once);
	});

	it('keeps the front matter untouched', async () => {
		const next = await upsertImpactBlocks(source, [doorman], index);

		expect(next.split('\n').slice(0, 4)).toEqual(source.split('\n').slice(0, 4));
	});

	it('fails when the patch has no block for a requested entity', async () => {
		const missing = { kind: 'hero' as const, id: 2, impact: impactWith(0.5) };

		await expect(upsertImpactBlocks(source, [missing], index)).rejects.toThrow(/hero:2/);
	});

	it('fails on a malformed existing block rather than writing beside it', async () => {
		const broken = source.replace(
			'=hero:infernus:',
			'=hero:infernus:\n``attr:\nimpact {\n``'
		);
		const infernus = { kind: 'hero' as const, id: 1, impact: impactWith(0.5) };

		await expect(upsertImpactBlocks(broken, [infernus], index)).rejects.toThrow(
			/Malformed/
		);
	});

	it('refuses CRLF input', async () => {
		await expect(
			upsertImpactBlocks(source.replace(/\n/g, '\r\n'), [doorman], index)
		).rejects.toThrow(/CRLF/);
	});
});
