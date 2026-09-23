import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { parseStructure } from './extract';
import { writeEnrichmentBlock } from './entityEnrichment';
import { parseImpact } from './impactBlock';

const closed: EntityImpact = {
	closed: true,
	all: {
		before: {
			win: 0.505,
			pick: 0.338,
			matches: 21734,
			days: 14,
			total: 260808,
			covered: 14,
			coverage: 'complete'
		},
		after: {
			win: 0.524,
			pick: 0.3381,
			matches: 21305,
			days: 14,
			total: 255660,
			covered: 14,
			coverage: 'complete'
		}
	},
	high: {
		before: {
			win: 0.497,
			pick: 0.377,
			matches: 1301,
			days: 14,
			total: 15612,
			covered: 14,
			coverage: 'complete'
		},
		after: {
			win: null,
			pick: null,
			matches: 926,
			days: 2,
			total: 11112,
			covered: 2,
			coverage: 'complete'
		}
	}
};

const open: EntityImpact = {
	closed: false,
	all: {
		before: {
			win: 0.5,
			pick: 1,
			matches: 2800,
			days: 14,
			total: 33600,
			covered: 14,
			coverage: 'complete'
		},
		after: {
			win: null,
			pick: null,
			matches: 0,
			days: 0,
			total: 0,
			covered: 0,
			coverage: 'complete'
		}
	},
	high: {
		before: {
			win: null,
			pick: null,
			matches: 0,
			days: 0,
			total: 0,
			covered: 0,
			coverage: 'complete'
		},
		after: {
			win: null,
			pick: null,
			matches: 0,
			days: 0,
			total: 0,
			covered: 0,
			coverage: 'complete'
		}
	}
};

const inBlock = (attr: string[]) =>
	['=hero:abrams:', ...attr, '## Abrams', '- Change', '=', ''].join('\n');

const recorded = async (attr: string[]) =>
	(await parseStructure(inBlock(attr))).changes[0].impact;

describe('writeImpactNode', () => {
	it('writes the fixed shape between verbatim fences', () => {
		expect(writeEnrichmentBlock({ impact: closed })).toEqual([
			'``attr:',
			'impact closed=#true {',
			'  all {',
			'    before win=0.505 pick=0.338 matches=21734 days=14 total=260808 covered=14 coverage="complete"',
			'    after win=0.524 pick=0.3381 matches=21305 days=14 total=255660 covered=14 coverage="complete"',
			'  }',
			'  high {',
			'    before win=0.497 pick=0.377 matches=1301 days=14 total=15612 covered=14 coverage="complete"',
			'    after win=#null pick=#null matches=926 days=2 total=11112 covered=2 coverage="complete"',
			'  }',
			'}',
			'``'
		]);
	});

	it('round-trips through the Mog parser, nulls and zeroes included', async () => {
		expect(await recorded(writeEnrichmentBlock({ impact: closed }))).toEqual(closed);
		expect(await recorded(writeEnrichmentBlock({ impact: open }))).toEqual(open);
	});
});

describe('reading a block back', () => {
	const corrupt = (edit: (lines: string[]) => string[]) =>
		edit(writeEnrichmentBlock({ impact: closed }));

	it.each([
		['an unknown key', (l: string[]) => l.map((x) => x.replace('days=', 'dayz='))],
		[
			'a missing window',
			(l: string[]) => l.filter((x) => !x.includes('after win=0.524'))
		],
		['an extra tier', (l: string[]) => [...l.slice(0, -2), '  low {', '  }', '}', '``']],
		[
			'a fractional match count',
			(l: string[]) => l.map((x) => x.replace('21734', '2.5'))
		],
		[
			'a null match count',
			(l: string[]) => l.map((x) => x.replace('matches=926', 'matches=#null'))
		],
		[
			'a non-numeric rate',
			(l: string[]) => l.map((x) => x.replace('win=0.505', 'win="x"'))
		],
		[
			'a missing closed flag',
			(l: string[]) => l.map((x) => x.replace(' closed=#true', ''))
		],
		['invalid KDL', (l: string[]) => l.filter((x) => x !== '}')],
		['a second key beside impact', (l: string[]) => [...l.slice(0, -1), 'note "x"', '``']]
	])('rejects %s', async (_, edit) => {
		await expect(parseStructure(inBlock(corrupt(edit)))).rejects.toThrow(
			/Malformed impact block|holds only impact and related/
		);
	});

	it('rejects two attr blocks on one entity', async () => {
		const twice = [
			...writeEnrichmentBlock({ impact: closed }),
			...writeEnrichmentBlock({ impact: open })
		];

		await expect(parseStructure(inBlock(twice))).rejects.toThrow(/one attr block/);
	});

	it('names what is wrong with a value', () => {
		expect(() => parseImpact({ closed: true })).toThrow(/Malformed impact block/);
	});
});
