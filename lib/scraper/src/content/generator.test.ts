import { describe, expect, it } from 'vitest';
import { buildEntityIcons, generateStructuredContent } from './generator';
import type { GroupedContent } from './parser';

function grouped(partial: Partial<GroupedContent> = {}): GroupedContent {
	return { general: [], heroes: new Map(), items: new Map(), ...partial };
}

describe('entity and ability headings', () => {
	// The real 2024/07-11 Abrams block: "distance increased" is not wording
	// detectAbilityPrefix recognises, so it splits one run of Shoulder Charge notes
	// into two groups and the ability is headed twice.
	const abrams = [
		'Shoulder Charge speed increased by 25%',
		'Shoulder Charge distance increased by 15%',
		'Shoulder Charge now stuns enemies for 1s if it drags them into a wall'
	];

	const icons = buildEntityIcons(
		[
			{
				id: 1,
				name: 'Abrams',
				class_name: 'hero_abrams',
				images: { icon_image_small_webp: 'https://cdn.example/abrams.webp' }
			}
		],
		[
			{
				id: 2,
				class_name: 'ability_charge',
				name: 'Shoulder Charge',
				type: 'ability',
				image: 'https://cdn.example/charge.webp'
			}
		]
	);

	it('wraps an entity in a fenced block with its attribute chain', () => {
		// `= hero:` with a space renders the attributes as literal text.
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', abrams.slice(0, 1)]]) })
		);
		expect(out.split('\n').filter(Boolean).slice(-7)).toEqual([
			'=hero:abrams:',
			'## Abrams',
			'==ability:shoulder-charge:',
			'### Shoulder Charge',
			'- Shoulder Charge speed increased by 25%',
			'==',
			'='
		]);
		expect(out).not.toContain('= hero:');
	});

	it('bakes the portrait in as its own line inside the block', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', abrams.slice(0, 1)]]) }),
			icons
		);
		expect(out).toContain(
			'=hero:abrams:\n[[!:https://cdn.example/abrams.webp]]\n## Abrams'
		);
		expect(out).toContain(
			'==ability:shoulder-charge:\n[[!:https://cdn.example/charge.webp]]\n### Shoulder Charge'
		);
	});

	it('omits the portrait rather than emitting an empty transclusion', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Nobody', ['Base health increased']]]) }),
			icons
		);
		expect(out).toContain('=hero:nobody:\n## Nobody');
		expect(out).not.toContain('[[!:]]');
	});

	it('writes no anchor id — the renderer disambiguates repeats itself', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', abrams]]) })
		);
		const opens = out.split('\n').filter((l) => l.startsWith('==ability:'));
		expect(opens).toEqual(['==ability:shoulder-charge:', '==ability:shoulder-charge:']);
		expect(out).not.toContain('id=');
	});

	it('closes every block it opens', () => {
		const out = generateStructuredContent(
			grouped({
				heroes: new Map([['Abrams', abrams]]),
				items: new Map([['Metal Skin', ['Cooldown increased']]])
			})
		);
		const lines = out.split('\n');
		expect(lines.filter((l) => /^=[a-z]/.test(l)).length).toBe(
			lines.filter((l) => l === '=').length
		);
		expect(lines.filter((l) => /^==[a-z]/.test(l)).length).toBe(
			lines.filter((l) => l === '==').length
		);
	});
});

describe('video blocks', () => {
	// A clip is an ordinary mog link; the generator recognises the href and strips the
	// forum's "View attachment …mp4" chrome when it renders the card.
	const videoNote =
		'[[https://f.example/bounce_update-mp4.1/]]((View attachment bounce_update.mp4))';

	it('renders a video link as a VideoLink embed with a cleaned label', () => {
		const out = generateStructuredContent(grouped({ general: [videoNote] }));
		expect(out).toContain(
			'<VideoLink src="https://f.example/bounce_update-mp4.1/" label="bounce update" />'
		);
		// a block, not a bullet — and never delimiter-escaped
		expect(out).not.toContain('- [[https://');
		expect(out).not.toContain('poster');
	});

	it('leaves a non-video link as an ordinary bullet', () => {
		const out = generateStructuredContent(
			grouped({
				general: ['[[https://store.example/news/1]]((Patch notes on Steam))']
			})
		);
		expect(out).toContain('- [[https://store.example/news/1]]((Patch notes on Steam))');
		expect(out).not.toContain('VideoLink');
	});

	it('falls back to a generic label when nothing survives cleaning', () => {
		const out = generateStructuredContent(
			grouped({ general: ['[[https://f.example/a-mp4.1/]]((View attachment .mp4))'] })
		);
		expect(out).toContain('label="clip"');
	});

	it('keeps an adjacent image transclusion rendering as an image', () => {
		const out = generateStructuredContent(
			grouped({
				general: ['[[!:https://cdn.example/s.jpg]]((caption))', videoNote]
			})
		);
		expect(out).toContain('[[!:https://cdn.example/s.jpg]]((caption))');
		expect(out).toContain('<VideoLink src="https://f.example/bounce_update-mp4.1/"');
	});
});

describe('bullet escaping', () => {
	it('escapes prose delimiters but leaves a carried-over link alone', () => {
		const out = generateStructuredContent(
			grouped({
				general: [
					'Reload ~~2.5s~~ now 2.0s',
					'[[https://x.example/a]]((View attachment clip.mp4))'
				]
			})
		);
		expect(out).toContain('- Reload \\~~2.5s\\~~ now 2.0s');
		expect(out).toContain('- [[https://x.example/a]]((View attachment clip.mp4))');
	});
});
