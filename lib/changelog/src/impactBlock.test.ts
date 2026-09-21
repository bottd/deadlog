import { describe, expect, it } from 'vitest';
import type { EntityImpact } from '@deadlog/utils';
import { readImpactBlock, writeImpactBlock } from './impactBlock';
import { parseMog } from '../../../node_modules/vite-plugin-mog/dist/napi/index.js';

const closed: EntityImpact = {
	closed: true,
	all: {
		before: { win: 0.505, pick: 0.338, matches: 21734, days: 14 },
		after: { win: 0.524, pick: 0.3381, matches: 21305, days: 14 }
	},
	high: {
		before: { win: 0.497, pick: 0.377, matches: 1301, days: 14 },
		after: { win: null, pick: null, matches: 926, days: 2 }
	}
};

const open: EntityImpact = {
	closed: false,
	all: {
		before: { win: 0.5, pick: 1, matches: 2800, days: 14 },
		after: { win: null, pick: null, matches: 0, days: 0 }
	},
	high: {
		before: { win: null, pick: null, matches: 0, days: 0 },
		after: { win: null, pick: null, matches: 0, days: 0 }
	}
};

const body = (impact: EntityImpact) => writeImpactBlock(impact).slice(1, -1);

describe('writeImpactBlock', () => {
	it('writes the fixed shape between verbatim fences', () => {
		expect(writeImpactBlock(closed)).toEqual([
			'``attr:',
			'impact closed=#true {',
			'  all {',
			'    before win=0.505 pick=0.338 matches=21734 days=14',
			'    after win=0.524 pick=0.3381 matches=21305 days=14',
			'  }',
			'  high {',
			'    before win=0.497 pick=0.377 matches=1301 days=14',
			'    after win=#null pick=#null matches=926 days=2',
			'  }',
			'}',
			'``'
		]);
	});
});

describe('readImpactBlock', () => {
	it('round-trips closed and open entities, nulls and zeroes included', () => {
		expect(readImpactBlock(body(closed))).toEqual(closed);
		expect(readImpactBlock(body(open))).toEqual(open);
	});

	it.each([
		['an unknown key', (l: string[]) => l.map((x) => x.replace('days=', 'dayz='))],
		[
			'a missing window',
			(l: string[]) => l.filter((x) => !x.includes('after win=0.524'))
		],
		['an extra tier', (l: string[]) => [...l.slice(0, -1), '  low {', '  }', '}']],
		['unbalanced braces', (l: string[]) => l.slice(0, -1)],
		[
			'tiers out of order',
			(l: string[]) => l.map((x) => x.replace('  all {', '  high {'))
		],
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
		['trailing content', (l: string[]) => [...l, 'note "x"']]
	])('throws on %s', (_, corrupt) => {
		expect(() => readImpactBlock(corrupt(body(closed)))).toThrow(
			/Malformed impact block/
		);
	});
});

describe('parity with the Mog parser', () => {
	const unescape = (value: string) =>
		value
			.replaceAll('&quot;', '"')
			.replaceAll('&#x27;', "'")
			.replaceAll('&lt;', '<')
			.replaceAll('&gt;', '>')
			.replaceAll('&amp;', '&');

	it.each([
		['closed', closed],
		['open', open]
	])('reads a %s block to the same value the renderer emits', async (_, impact) => {
		const source = [
			'=hero:abrams:',
			...writeImpactBlock(impact),
			'## Abrams',
			'- Change',
			'='
		];

		const result = await parseMog(source.join('\n') + '\n', 'svelte');

		expect(result.diagnostics).toEqual([]);
		const html = result.segments.map((s) => (s.kind === 'html' ? s.html : '')).join('');
		const attribute = html.match(/<div class="hero abrams" data-impact="([^"]*)">/);
		expect(JSON.parse(unescape(attribute?.[1] ?? ''))).toEqual(
			readImpactBlock(body(impact))
		);
		expect(html).not.toContain('<pre>');
	});
});
