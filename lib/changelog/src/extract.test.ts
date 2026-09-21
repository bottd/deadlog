import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { extractEntities, extractEntityChanges, parseStructure } from './extract';
import { writeImpactBlock } from './impactBlock';

describe('extractEntityChanges', () => {
	it('groups bullets per ability section within an entity', () => {
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

		expect(extractEntityChanges(content)).toEqual([
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
	});

	it('merges repeated article aliases and decodes entity names', () => {
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

		expect(extractEntityChanges(content)).toEqual([
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

	it('stops attributing bullets at a new top-level section', () => {
		const content = `
=hero:abrams:
## Abrams
- Counted
- Also counted
=
# Item Changes
- Not counted, a new top-level section
`;

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'Abrams',
				type: 'hero',
				groups: [{ ability: null, bullets: ['Counted', 'Also counted'] }]
			}
		]);
	});

	it('keeps an explicit empty list instead of inventing a change', () => {
		expect(extractEntityChanges('=hero:abrams:\n## Abrams\n=')).toEqual([
			{ name: 'Abrams', type: 'hero', groups: [] }
		]);
	});
});

describe('entity identity extraction', () => {
	it('reads entities off the toc by their heading attribute', () => {
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

	it('captures a block onto its hero and item, leaving bullets and toc untouched', () => {
		const bare = parseStructure(plain.join('\n'));
		const parsed = parseStructure(withImpact.join('\n'));

		expect(parsed.changes.map((change) => change.impact)).toEqual([impact, impact]);
		expect(parsed.changes.map((change) => ({ ...change, impact: undefined }))).toEqual(
			bare.changes
		);
		expect(parsed.toc).toEqual(bare.toc);
	});

	it('reports each block by heading name with its fence and attr line range', () => {
		const { blocks } = parseStructure(withImpact.join('\n'));

		expect(blocks).toEqual([
			{ name: 'The Doorman', type: 'hero', fenceLine: 1, impactLines: [2, 13] },
			{ name: 'Tesla Bullets', type: 'item', fenceLine: 21, impactLines: [22, 33] }
		]);
		expect(withImpact[blocks[0].fenceLine]).toBe('=hero:doorman:');
		expect(parseStructure(plain.join('\n')).blocks[1]).toEqual({
			name: 'Tesla Bullets',
			type: 'item',
			fenceLine: 9,
			impactLines: null
		});
	});

	it('skips a block at the root, in an ability block, or under a bullet', () => {
		const stray = [
			...attr,
			...plain.slice(0, 5),
			...attr,
			...plain.slice(5, 12),
			...attr,
			...plain.slice(12)
		];

		const parsed = parseStructure(stray.join('\n'));

		expect(parsed.changes[0].impact).toBeUndefined();
		expect(parsed.changes[0].groups).toEqual(
			parseStructure(plain.join('\n')).changes[0].groups
		);
		expect(parsed.changes[1].impact).toBeUndefined();
		expect(parsed.toc).toEqual(parseStructure(plain.join('\n')).toc);
	});

	it('keeps the first block when an entity appears twice', () => {
		const twice = [
			...withImpact,
			'=hero:doorman:',
			...attr,
			'## The Doorman',
			'- Again',
			'='
		];

		const { blocks, changes } = parseStructure(twice.join('\n'));

		expect(blocks.filter((block) => block.name === 'The Doorman')).toHaveLength(1);
		expect(changes[0].groups.at(-1)?.bullets).toContain('Again');
	});

	it('propagates a malformed block', () => {
		const broken = [plain[1], '``attr:', 'impact {', '``', ...plain.slice(2)];

		expect(() => parseStructure(broken.join('\n'))).toThrow(/Malformed impact block/);
	});
});
