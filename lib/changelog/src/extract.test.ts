import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { extractEntities, extractEntityChanges, parseStructure } from './extract';
import { writeImpactBlock } from './impactBlock';

describe('extractEntityChanges', () => {
	it('groups bullets per ability section within an entity', async () => {
		const content = [
			'# Hero Changes',
			'=hero:doorman:',
			'[[/hero/doorman]](([[!:https://cdn.example/doorman.webp]] Doorman patch history))',
			'## [[/hero/doorman]]((Doorman))',
			'- Base damage increased',
			'==ability:call-bell:',
			'### [[/hero/doorman?ability=call-bell]]((Call Bell))',
			'- Cooldown reduced',
			'- Radius increased',
			'==',
			'=',
			'=item:tesla-bullets:',
			'## [[/item/tesla-bullets]]((Tesla Bullets))',
			'- Proc chance increased',
			'='
		].join('\n');

		expect(await extractEntityChanges(content)).toEqual([
			{
				name: 'Doorman',
				type: 'hero',
				groups: [
					{ ability: null, bullets: ['Base damage increased'] },
					{ ability: 'Call Bell', bullets: ['Cooldown reduced', 'Radius increased'] }
				]
			},
			{
				name: 'Tesla Bullets',
				type: 'item',
				groups: [{ ability: null, bullets: ['Proc chance increased'] }]
			}
		]);
		const parsed = await parseStructure(content);
		expect(
			parsed.bullets.map(({ name, ability, groupIndex, bulletIndex, startLine }) => [
				name,
				ability,
				groupIndex,
				bulletIndex,
				startLine
			])
		).toEqual([
			['Doorman', null, 0, 0, 4],
			['Doorman', 'Call Bell', 1, 0, 7],
			['Doorman', 'Call Bell', 1, 1, 8],
			['Tesla Bullets', null, 0, 0, 13]
		]);
		expect(parsed.readingBlocks).toEqual([
			{
				kind: 'hero',
				name: 'Doorman',
				ability: 'Call Bell',
				startLine: 5,
				endLine: 9,
				depth: 2
			},
			{
				kind: 'item',
				name: 'Tesla Bullets',
				ability: null,
				startLine: 11,
				endLine: 14,
				depth: 1
			}
		]);
	});

	it('merges repeated article aliases and decodes entity names', async () => {
		const content = `
=hero:doorman:
## The Doorman
- First change
=
=hero:doorman:
## Doorman
- Second change
=
=hero:mo-krill:
## Mo &amp; Krill
- Third change
=
`;

		expect(await extractEntityChanges(content)).toEqual([
			{
				name: 'The Doorman',
				type: 'hero',
				// Both alias sections' bullets sit at hero level, so they share one group.
				groups: [{ ability: null, bullets: ['First change', 'Second change'] }]
			},
			{
				name: 'Mo & Krill',
				type: 'hero',
				groups: [{ ability: null, bullets: ['Third change'] }]
			}
		]);
	});

	it('stops attributing bullets at a new top-level section', async () => {
		const content = `
=hero:abrams:
## Abrams
- Counted
- Also counted
=
# Item Changes
- Not counted, a new top-level section
`;

		expect(await extractEntityChanges(content)).toEqual([
			{
				name: 'Abrams',
				type: 'hero',
				groups: [{ ability: null, bullets: ['Counted', 'Also counted'] }]
			}
		]);
	});

	it('keeps an explicit empty list instead of inventing a change', async () => {
		expect(await extractEntityChanges('=hero:abrams:\n## Abrams\n=')).toEqual([
			{ name: 'Abrams', type: 'hero', groups: [] }
		]);
	});
});

describe('entity identity extraction', () => {
	it('reads entities off the toc by their heading attribute', async () => {
		const entities = extractEntities([
			{ level: 1, title: 'Hero Changes', attrs: [] },
			{ level: 2, title: 'Doorman', attrs: ['hero', 'doorman'] },
			{ level: 3, title: 'Call Bell', attrs: ['ability'] },
			{ level: 2, title: 'Tesla Bullets', attrs: ['item', 'tesla-bullets'] }
		]);
		expect(entities).toEqual({ heroes: ['Doorman'], items: ['Tesla Bullets'] });
	});
});

describe('impact blocks', () => {
	const window = { win: 0.5, pick: 0.1, matches: 2800, days: 14 };
	const impact: EntityImpact = {
		closed: true,
		all: { before: window, after: { ...window, win: 0.52 } },
		high: { before: window, after: { win: null, pick: null, matches: 12, days: 2 } }
	};
	const attr = writeImpactBlock(impact);

	const plain = [
		'# Hero Changes',
		'=hero:doorman:',
		'## [[/hero/the-doorman]]((The Doorman))',
		'- Base damage increased',
		'==ability:call-bell:',
		'### Call Bell',
		'- Cooldown reduced',
		'==',
		'=',
		'=item:tesla-bullets:',
		'## Tesla Bullets',
		'- Proc chance increased',
		'='
	];
	const withImpact = [
		...plain.slice(0, 2),
		...attr,
		...plain.slice(2, 10),
		...attr,
		...plain.slice(10)
	];

	it('captures a block onto its hero and item, leaving bullets and toc untouched', async () => {
		const bare = await parseStructure(plain.join('\n'));
		const parsed = await parseStructure(withImpact.join('\n'));

		expect(parsed.changes.map((change) => change.impact)).toEqual([impact, impact]);
		expect(parsed.changes.map((change) => ({ ...change, impact: undefined }))).toEqual(
			bare.changes
		);
		expect(parsed.toc).toEqual(bare.toc);
	});

	it('reports each block by heading name with its fence and attr line range', async () => {
		const { blocks } = await parseStructure(withImpact.join('\n'));

		expect(blocks).toMatchObject([
			{ name: 'The Doorman', type: 'hero', fenceLine: 1, attributeLines: [2, 13] },
			{ name: 'Tesla Bullets', type: 'item', fenceLine: 21, attributeLines: [22, 33] }
		]);
		expect(Object.keys(blocks[0].enrichment)).toEqual(['impact']);
		expect(withImpact[blocks[0].fenceLine]).toBe('=hero:doorman:');
		expect((await parseStructure(plain.join('\n'))).blocks[1]).toEqual({
			name: 'Tesla Bullets',
			type: 'item',
			fenceLine: 9,
			attributeLines: null,
			enrichment: {}
		});
	});

	it('merges a root-level block into metadata and leaves the entities alone', async () => {
		const parsed = await parseStructure([...attr, '', ...plain].join('\n'));

		expect(parsed.metadata).toHaveProperty('impact');
		expect(parsed.changes).toEqual((await parseStructure(plain.join('\n'))).changes);
	});

	it.each([
		['in an ability block', 5],
		['after the entity heading', 3],
		['under a bullet', 12]
	])(
		'rejects a block %s, where the renderer would not read it as the entity',
		async (_, at) => {
			const misplaced = [...plain.slice(0, at), ...attr, ...plain.slice(at)];

			await expect(parseStructure(misplaced.join('\n'))).rejects.toThrow(
				/not directly under a hero or item fence/
			);
		}
	);

	it('keeps the first block when an entity appears twice', async () => {
		const twice = [
			...withImpact,
			'=hero:doorman:',
			...attr,
			'## The Doorman',
			'- Again',
			'='
		];

		const { blocks, changes } = await parseStructure(twice.join('\n'));

		expect(blocks.filter((block) => block.name === 'The Doorman')).toHaveLength(1);
		expect(changes[0].groups.at(-1)?.bullets).toContain('Again');
	});

	it('propagates a malformed block', async () => {
		const broken = [plain[1], '``attr:', 'impact {', '``', ...plain.slice(2)];

		await expect(parseStructure(broken.join('\n'))).rejects.toThrow(
			/Malformed impact block/
		);
	});
});
