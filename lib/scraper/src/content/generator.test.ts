import { describe, expect, it } from 'vitest';
import { generateStructuredContent } from './generator';
import type { GroupedContent } from './parser';

function grouped(partial: Partial<GroupedContent> = {}): GroupedContent {
	return { general: [], heroes: new Map(), items: new Map(), ...partial };
}

describe('ability heading ids', () => {
	// The real 2024/07-11 Abrams block: "distance increased" is not wording
	// detectAbilityPrefix recognises, so it splits one run of Shoulder Charge notes
	// into two groups and the ability is headed twice.
	const abrams = [
		'Shoulder Charge speed increased by 25%',
		'Shoulder Charge distance increased by 15%',
		'Shoulder Charge now stuns enemies for 1s if it drags them into a wall'
	];

	it('gives a repeated ability heading a unique id', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', abrams]]) })
		);
		const headings = [...out.matchAll(/<AbilityHeading[^>]*\/>/g)].map((m) => m[0]);

		expect(headings).toHaveLength(2);
		expect(headings[0]).toBe('<AbilityHeading name="Shoulder Charge" />');
		expect(headings[1]).toBe(
			'<AbilityHeading name="Shoulder Charge" id="shoulder-charge-1" />'
		);
	});

	it('leaves a single heading without an id so existing anchors are unchanged', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', abrams.slice(0, 1)]]) })
		);
		expect(out).toContain('<AbilityHeading name="Shoulder Charge" />');
		expect(out).not.toContain('id=');
	});

	it('keeps ids unique across heroes, not just within one', () => {
		const out = generateStructuredContent(
			grouped({
				heroes: new Map([
					['Abrams', abrams],
					['Bebop', abrams]
				])
			})
		);
		const ids = [...out.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
		expect(ids).toEqual(['shoulder-charge-1', 'shoulder-charge-2', 'shoulder-charge-3']);
	});
});

describe('video blocks', () => {
	it('emits a VideoLink embed', () => {
		const out = generateStructuredContent(
			grouped({
				general: [
					[
						'@video',
						'src https://f.example/c-mp4.1/',
						'label View attachment c.mp4',
						'@end'
					].join('\n')
				]
			})
		);
		expect(out).toContain(
			'<VideoLink src="https://f.example/c-mp4.1/" label="View attachment c.mp4" />'
		);
		// a block, not a bullet — and never brace-escaped
		expect(out).not.toContain('- @video');
		expect(out).not.toContain('poster');
	});

	it('keeps an adjacent @image rendering as an image', () => {
		const out = generateStructuredContent(
			grouped({
				general: [
					'@image https://cdn.example/s.jpg\ncaption\n@end',
					['@video', 'src https://f.example/c-mp4.1/', 'label c.mp4', '@end'].join('\n')
				]
			})
		);
		expect(out).toContain('@image https://cdn.example/s.jpg');
		expect(out).toContain('<VideoLink src="https://f.example/c-mp4.1/" label="c.mp4" />');
	});
});

describe('bullet escaping', () => {
	it('escapes prose braces but leaves a carried-over link alone', () => {
		const out = generateStructuredContent(
			grouped({
				general: [
					'Added 3 Control Schemes: { Standard | Gyro }.',
					'{https://x.example/a}[View attachment clip.mp4]'
				]
			})
		);
		expect(out).toContain('- Added 3 Control Schemes: \\{ Standard | Gyro \\}.');
		expect(out).toContain('- {https://x.example/a}[View attachment clip.mp4]');
	});
});
