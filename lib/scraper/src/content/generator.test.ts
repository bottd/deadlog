import { describe, expect, it } from 'vitest';
import { buildEntityAssets, generateStructuredContent } from './generator';
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

	const assets = buildEntityAssets(
		[
			{
				id: 1,
				name: 'Abrams',
				class_name: 'hero_abrams',
				images: { icon_image_small_webp: 'https://cdn.example/abrams.webp' },
				items: {
					signature1: 'ability_charge',
					signature2: 'missing_two',
					signature3: 'missing_three',
					signature4: 'missing_four'
				}
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
			assets
		);
		expect(out).toContain(
			'=hero:abrams:\n[[/hero/abrams]](([[!:https://cdn.example/abrams.webp]] Abrams patch history))\n## [[/hero/abrams]]((Abrams))'
		);
		expect(out).toContain(
			'==ability:shoulder-charge:\n[[/hero/abrams?ability=shoulder-charge]](([[!:https://cdn.example/charge.webp]] Shoulder Charge change history))\n### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge))'
		);
	});

	it('leaves an unresolved entity unlinked', () => {
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Nobody', ['Base health increased']]]) }),
			assets
		);
		expect(out).toContain('=hero:nobody:\n## Nobody');
		expect(out).not.toContain('/hero/nobody');
		expect(out).not.toContain('[[!:]]');
	});

	it('links a resolved entity even when it has no image', () => {
		const assetsWithoutImage = buildEntityAssets(
			[{ id: 4, name: 'Nobody', class_name: 'hero_nobody', images: {} }],
			[]
		);
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Nobody', ['Base health increased']]]) }),
			assetsWithoutImage
		);
		expect(out).toContain('=hero:nobody:\n## [[/hero/nobody]]((Nobody))');
		expect(out).not.toContain('[[!:]]');
	});

	it('uses the canonical API slug when a note names an alias', () => {
		const aliasedAssets = buildEntityAssets(
			[
				{
					id: 3,
					name: 'The Doorman',
					class_name: 'hero_doorman',
					images: { icon_image_small_webp: 'https://cdn.example/doorman.webp' }
				}
			],
			[]
		);
		const out = generateStructuredContent(
			grouped({ heroes: new Map([['Doorman', ['Base health increased']]]) }),
			aliasedAssets
		);
		expect(out).toContain('## [[/hero/the-doorman]]((Doorman))');
	});

	it('links derived headings only when they resolve to the hero ability rail', () => {
		const linked = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', ['Shoulder Charge Cooldown reduced']]]) }),
			assets
		);
		expect(linked).toContain(
			'### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge Cooldown))'
		);

		const unresolved = generateStructuredContent(
			grouped({ heroes: new Map([['Abrams', ['Can now be cast while airborne']]]) }),
			assets
		);
		expect(unresolved).toContain('### Can');
		expect(unresolved).not.toContain('ability=can');
	});

	it('does not turn an ability-classified top-level entity into an item route', () => {
		const assets = buildEntityAssets(
			[],
			[
				{
					id: 5,
					class_name: 'ability_golden_idol',
					name: 'Soul Urn',
					type: 'ability',
					image: '/soul-urn.png'
				}
			]
		);
		const out = generateStructuredContent(
			grouped({ items: new Map([['Soul Urn', ['Carrier resistance reduced']]]) }),
			assets
		);
		expect(out).toContain('=item:soul-urn:\n## Soul Urn');
		expect(out).not.toContain('/item/soul-urn');
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
