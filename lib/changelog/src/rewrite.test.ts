import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { parseStructure } from './extract';
import { writeImpactBlock } from './impactBlock';
import { splitFrontMatter } from './load';
import { carryImpact, spliceImpactBlocks } from './rewrite';

const window = { win: 0.5, pick: 0.1, matches: 2800, days: 14 };
const impact: EntityImpact = {
	closed: true,
	all: { before: window, after: { ...window, win: 0.52 } },
	high: { before: window, after: { win: null, pick: null, matches: 12, days: 2 } }
};

const generated = [
	'``attr:',
	'title "Patch"',
	'``',
	'',
	'=hero:doorman:',
	'## The Doorman',
	'- Base damage increased',
	'=',
	'=item:tesla-bullets:',
	'## Tesla Bullets',
	'- Proc chance increased',
	'=',
	''
].join('\n');

const impactsIn = (text: string) =>
	parseStructure(splitFrontMatter(text).body).changes.map((change) => change.impact);

describe('spliceImpactBlocks', () => {
	it('writes under the fence of each block the callback answers for', () => {
		const next = spliceImpactBlocks(generated, (block) =>
			block.type === 'item' ? impact : undefined
		);

		expect(impactsIn(next)).toEqual([undefined, impact]);
		expect(next.split('\n')[9]).toBe('``attr:');
	});
});

describe('carryImpact', () => {
	const withStats = spliceImpactBlocks(generated, () => impact);

	it('restores recorded blocks onto a plain regeneration, byte for byte', () => {
		expect(carryImpact(withStats, generated)).toBe(withStats);
	});

	it('follows an entity whose fence slug or heading markup changed', () => {
		const regenerated = generated
			.replace('=hero:doorman:', '=hero:the-doorman:')
			.replace('## The Doorman', '## [[/hero/the-doorman]]((Doorman))');

		const [doorman] = impactsIn(carryImpact(withStats, regenerated));

		expect(doorman).toEqual(impact);
	});

	it('drops the block of an entity the regeneration no longer has', () => {
		const withoutItem = generated.split('\n').slice(0, 8).join('\n') + '\n';

		const next = carryImpact(withStats, withoutItem);

		expect(impactsIn(next)).toEqual([impact]);
		expect(next.match(/``attr:/g)).toHaveLength(2);
	});

	it('returns the new text untouched when nothing was recorded', () => {
		expect(carryImpact(generated, generated)).toBe(generated);
	});

	it('keeps a block the new text already carries', () => {
		const other = { ...impact, closed: false };
		const already = spliceImpactBlocks(generated, () => other);

		expect(impactsIn(carryImpact(withStats, already))).toEqual([other, other]);
	});

	it('writes exactly the lines of writeImpactBlock', () => {
		const lines = carryImpact(withStats, generated).split('\n');

		expect(lines.slice(5, 5 + 12)).toEqual(writeImpactBlock(impact));
	});
});
