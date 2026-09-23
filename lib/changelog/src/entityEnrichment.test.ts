import { describe, expect, it } from 'vitest';
import type { EntityImpact, RelatedItems } from '@deadlog/utils';
import { parseStructure } from './extract';
import { carryEnrichment, spliceEntityBlocks, spliceImpactBlocks } from './rewrite';

const window = {
	win: 0.5,
	pick: 0.1,
	matches: 2800,
	days: 14,
	total: 33600,
	covered: 14,
	coverage: 'complete' as const
};
const impact: EntityImpact = {
	closed: true,
	all: { before: window, after: window },
	high: { before: window, after: window }
};
const related: RelatedItems = {
	methodVersion: 1,
	status: 'complete',
	appearances: 205_924,
	candidates: [1710079648, 3696726732],
	items: [
		{ id: 3696726732, buyers: 61_000 },
		{ id: 1710079648, buyers: 2200 }
	]
};
const empty: RelatedItems = { ...related, status: 'insufficient-sample', items: [] };

const source = [
	'``attr:',
	'title "Patch"',
	'``',
	'',
	'=hero:doorman:',
	'## The Doorman',
	'- Base damage increased',
	'=',
	'=item:toxic-bullets:',
	'## Toxic Bullets',
	'- Bleed increased',
	'=',
	''
].join('\n');

const hero = async (text: string) => (await parseStructure(text)).blocks[0].enrichment;

describe('entity enrichment', () => {
	it('round-trips related items through the Mog parser, order and counts intact', async () => {
		const written = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { related } : undefined
		);

		expect(await hero(written)).toEqual({ related });
		expect((await parseStructure(written)).changes[0].related).toEqual(related);
	});

	it('stores an empty result explicitly, as one line', async () => {
		const written = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { related: empty } : undefined
		);

		expect(written).toContain(
			'related method=1 status="insufficient-sample" appearances=205924 candidates="1710079648,3696726732"\n``'
		);
		expect(await hero(written)).toEqual({ related: empty });
	});

	it('updates one field without touching the other', async () => {
		const both = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { impact, related } : undefined
		);
		const moved = { ...impact, closed: false };
		const next = await spliceImpactBlocks(both, (block) =>
			block.type === 'hero' ? moved : undefined
		);

		expect(await hero(next)).toEqual({ impact: moved, related });
		expect(next.match(/``attr:/g)).toHaveLength(2);
	});

	it('deletes only the field it is told to, and the block with the last field', async () => {
		const both = await spliceEntityBlocks(source, () => ({ impact }));
		const withRelated = await spliceEntityBlocks(both, (block) =>
			block.type === 'hero' ? { related } : undefined
		);

		const noImpact = await spliceEntityBlocks(withRelated, () => ({ impact: null }));
		expect(await hero(noImpact)).toEqual({ related });

		const bare = await spliceEntityBlocks(noImpact, () => ({ related: null }));
		expect(bare).toBe(source);
	});

	it('writes impact before related whatever order they arrive in', async () => {
		const first = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { related } : undefined
		);
		const second = await spliceEntityBlocks(first, (block) =>
			block.type === 'hero' ? { impact } : undefined
		);
		const together = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { impact, related } : undefined
		);

		expect(second).toBe(together);
		expect(second.indexOf('impact closed')).toBeLessThan(
			second.indexOf('related method')
		);
	});

	it('refuses related items on an item block, unknown keys and malformed values', async () => {
		await expect(
			spliceEntityBlocks(source, () => ({ related })).then(parseStructure)
		).rejects.toThrow(/Toxic Bullets: only a hero block takes related/);

		const written = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { related } : undefined
		);
		await expect(
			parseStructure(written.replace('buyers=61000', 'buyers=-1'))
		).rejects.toThrow(/Malformed related block/);
		await expect(
			parseStructure(written.replace('item-3696726732', 'thing-1'))
		).rejects.toThrow(/unknown key "thing-1"/);
		await expect(
			parseStructure(written.replace('status="complete"', 'status="unavailable"'))
		).rejects.toThrow(/Malformed related block/);
	});

	it('carries both fields through a scraper overwrite', async () => {
		const recorded = await spliceEntityBlocks(source, (block) =>
			block.type === 'hero' ? { impact, related } : { impact }
		);
		const carried = await carryEnrichment(recorded, source);

		expect(carried).toBe(recorded);
	});

	it('leaves bullets and metadata byte for byte', async () => {
		const written = await spliceEntityBlocks(source, () => ({ impact }));
		const kept = written.split('\n').filter((line) => source.split('\n').includes(line));

		expect(kept.join('\n')).toContain('- Base damage increased');
		expect(written.startsWith('``attr:\ntitle "Patch"\n``\n')).toBe(true);
	});
});

describe('reading enrichment beyond impact', () => {
	it('round-trips related after counts, ability order and bought-by', async () => {
		const { parseEnrichment, writeEnrichmentBlock } = await import('./entityEnrichment');
		const hero = {
			related: {
				methodVersion: 2,
				status: 'complete' as const,
				appearances: 206_094,
				afterAppearances: 52_850,
				candidates: [7, 8],
				items: [{ id: 7, buyers: 67_786, after: 25_796 }]
			},
			order: {
				methodVersion: 1,
				matches: 208_194,
				afterMatches: 52_850,
				abilities: [
					{ id: 11, before: 156_279, after: 41_000 },
					{ id: 12, before: 3427, after: 800 }
				]
			}
		};
		const item = {
			bought: {
				methodVersion: 1,
				heroes: [
					{
						id: 6,
						buyers: 68_587,
						appearances: 208_159,
						afterBuyers: 25_796,
						afterAppearances: 52_850
					},
					{ id: 7, buyers: 2000, appearances: 9000 }
				]
			}
		};
		const kdl = (lines: string[]) => lines.slice(1, -1).join('\n');

		expect(writeEnrichmentBlock(hero)).toContain(
			'order method=1 matches=208194 after-matches=52850 {'
		);
		expect(kdl(writeEnrichmentBlock(item))).toBe(
			[
				'bought method=1 {',
				'  hero-6 buyers=68587 appearances=208159 after-buyers=25796 after-appearances=52850',
				'  hero-7 buyers=2000 appearances=9000',
				'}'
			].join('\n')
		);
		expect(
			parseEnrichment(
				{
					order: {
						method: 1,
						matches: 208_194,
						'after-matches': 52_850,
						'ability-11': { before: 156_279, after: 41_000 },
						'ability-12': { before: 3427, after: 800 }
					}
				},
				'hero'
			)
		).toEqual({ order: hero.order });
		expect(() => parseEnrichment({ bought: { method: 1 } }, 'hero')).toThrow(
			/only an item block takes bought/
		);
		expect(() =>
			parseEnrichment(
				{ order: { method: 1, matches: 10, 'ability-1': { before: 2, after: 1 } } },
				'hero'
			)
		).toThrow(/after counts need an after total/);
	});
});
