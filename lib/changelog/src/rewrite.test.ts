import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { parseStructure } from './extract';
import { writeEnrichmentBlock } from './entityEnrichment';
import { carryEnrichment, spliceImpactBlocks } from './rewrite';

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
	all: { before: window, after: { ...window, win: 0.52 } },
	high: {
		before: window,
		after: {
			win: null,
			pick: null,
			matches: 12,
			days: 2,
			total: 144,
			covered: 2,
			coverage: 'complete'
		}
	}
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

const impactsIn = async (text: string) =>
	(await parseStructure(text)).changes.map((change) => change.impact);

describe('spliceImpactBlocks', () => {
	it('writes under the fence of each block the callback answers for', async () => {
		const next = await spliceImpactBlocks(generated, (block) =>
			block.type === 'item' ? impact : undefined
		);

		expect(await impactsIn(next)).toEqual([undefined, impact]);
		expect(next.split('\n')[9]).toBe('``attr:');
	});
});

describe('carryEnrichment', () => {
	const withStats = spliceImpactBlocks(generated, () => impact);

	it('restores recorded blocks onto a plain regeneration, byte for byte', async () => {
		expect(await carryEnrichment(await withStats, generated)).toBe(await withStats);
	});

	it('follows an entity whose fence slug or heading markup changed', async () => {
		const regenerated = generated
			.replace('=hero:doorman:', '=hero:the-doorman:')
			.replace('## The Doorman', '## [[/hero/the-doorman]]((Doorman))');

		const [doorman] = await impactsIn(
			await carryEnrichment(await withStats, regenerated)
		);

		expect(doorman).toEqual(impact);
	});

	it('drops the block of an entity the regeneration no longer has', async () => {
		const withoutItem = generated.split('\n').slice(0, 8).join('\n') + '\n';

		const next = await carryEnrichment(await withStats, withoutItem);

		expect(await impactsIn(next)).toEqual([impact]);
		expect(next.match(/``attr:/g)).toHaveLength(2);
	});

	it('returns the new text untouched when nothing was recorded', async () => {
		expect(await carryEnrichment(generated, generated)).toBe(generated);
	});

	it('keeps a block the new text already carries', async () => {
		const other = { ...impact, closed: false };
		const already = await spliceImpactBlocks(generated, () => other);

		expect(await impactsIn(await carryEnrichment(await withStats, already))).toEqual([
			other,
			other
		]);
	});

	it('writes exactly the lines of writeImpactBlock', async () => {
		const lines = (await carryEnrichment(await withStats, generated)).split('\n');

		expect(lines.slice(5, 5 + 12)).toEqual(writeEnrichmentBlock({ impact: impact }));
	});
});
