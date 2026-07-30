import { describe, expect, it } from 'vitest';
import {
	deduplicateLines,
	extractContent,
	parseAndGroupContent,
	type EntityLists
} from './parser';

const wrap = (inner: string) => `<div class="bbWrapper">${inner}</div>`;

describe('extractContent links', () => {
	it('keeps an http link as mog markup instead of discarding it', () => {
		const html = wrap('<a href="https://x.example/a">View attachment clip.mp4</a>');
		expect(extractContent(html)).toBe(
			'[[https://x.example/a]]((View attachment clip.mp4))'
		);
	});

	it('falls back to the url when the anchor has no text', () => {
		expect(extractContent(wrap('<a href="https://x.example/a"></a>'))).toBe(
			'[[https://x.example/a]]((https://x.example/a))'
		);
	});

	it('unwraps anything that is not http(s) — the forum is user-editable', () => {
		for (const href of ['javascript:alert(1)', 'data:text/html,x', '/relative']) {
			expect(extractContent(wrap(`<a href="${href}">click</a>`))).toBe('click');
		}
	});

	it('holds an image to the same allowlist as a link', () => {
		expect(extractContent(wrap('<img src="javascript:alert(1)" alt="x.jpg">'))).toBe('x');
		// a delimiter in the src or alt would otherwise leave the transclusion unbalanced
		expect(
			extractContent(wrap('<img src="https://x.example/a(1).jpg" alt="s.jpg">'))
		).toBe('s');
		expect(
			extractContent(wrap('<img src="https://x.example/a.jpg" alt="a((b)).jpg">'))
		).toBe('[[!:https://x.example/a.jpg]]((ab))');
	});
});

const entities: EntityLists = {
	heroes: new Set(['abrams']),
	items: new Set(['tesla bullets'])
};

describe('parseAndGroupContent', () => {
	it('marks a clip as a video block and leaves the adjacent still alone', () => {
		const grouped = parseAndGroupContent(
			[
				'- Added Bounce Pads',
				'[[!:https://cdn.example/still.jpg]]((bounce pad locations))',
				'[[https://forum.example/attachments/bounce_update-mp4.10434/]]((View attachment bounce_update.mp4))'
			].join('\n'),
			entities
		);
		// the screenshot keeps rendering as an image; the clip stays a plain mog link
		// beside it, and the generator decides how to render it
		expect(grouped.general).toEqual([
			'Added Bounce Pads',
			'[[!:https://cdn.example/still.jpg]]((bounce pad locations))',
			'[[https://forum.example/attachments/bounce_update-mp4.10434/]]((View attachment bounce_update.mp4))'
		]);
	});

	it('never emits a poster — the forum serves no embeddable video', () => {
		const grouped = parseAndGroupContent(
			[
				'[[!:https://cdn.example/still.jpg]]((a caption))',
				'[[https://forum.example/attachments/clip-mp4.1/]]((View attachment clip.mp4))'
			].join('\n'),
			entities
		);
		expect(grouped.general.join('\n')).not.toContain('poster');
	});

	it('leaves a non-video link as an ordinary bullet', () => {
		const grouped = parseAndGroupContent(
			'[[https://store.example/news/1]]((Patch notes on Steam))',
			entities
		);
		expect(grouped.general).toEqual([
			'[[https://store.example/news/1]]((Patch notes on Steam))'
		]);
	});

	it('keeps a bare attachment link that carries no bullet marker', () => {
		const grouped = parseAndGroupContent(
			[
				'- Widened the street',
				'[[https://x.example/a]]((View attachment clip.mp4))'
			].join('\n'),
			entities
		);
		expect(grouped.general).toEqual([
			'Widened the street',
			'[[https://x.example/a]]((View attachment clip.mp4))'
		]);
	});

	it('accepts the bullet markers Valve actually posts with', () => {
		for (const marker of ['-', '*', '•']) {
			const grouped = parseAndGroupContent(
				`${marker} Weapon Investment bonus increased from 7% to 9%`,
				entities
			);
			expect(grouped.general).toEqual([
				'Weapon Investment bonus increased from 7% to 9%'
			]);
		}
	});

	it('routes entity-prefixed bullets regardless of marker', () => {
		const grouped = parseAndGroupContent(
			['* Abrams: Base health increased', '* Tesla Bullets: Proc chance increased'].join(
				'\n'
			),
			entities
		);
		expect(grouped.heroes.get('Abrams')).toEqual(['Base health increased']);
		expect(grouped.items.get('Tesla Bullets')).toEqual(['Proc chance increased']);
	});

	it('keeps prose from announcement posts that have no bullets', () => {
		const grouped = parseAndGroupContent(
			'This update reverts the communication changes from yesterday.',
			entities
		);
		expect(grouped.general).toEqual([
			'This update reverts the communication changes from yesterday.'
		]);
	});

	it('never lets surrounding prose outrank real bullets', () => {
		const grouped = parseAndGroupContent(
			['[ General ]', '* Mid Boss base HP increased from 12500 to 13000'].join('\n'),
			entities
		);
		expect(grouped.general).toEqual(['Mid Boss base HP increased from 12500 to 13000']);
	});

	it('does not treat a bare marker as a bullet', () => {
		expect(parseAndGroupContent('*', entities).general).toEqual(['*']);
	});
});

describe('deduplicateLines', () => {
	it('deduplicates repeated "-" bullets', () => {
		const text = ['- Same change', '- Same change', '- Other change'].join('\n');
		expect(deduplicateLines(text)).toBe(['- Same change', '- Other change'].join('\n'));
	});

	it('keeps repeated "*" bullets — the same stat legitimately recurs per entity', () => {
		const text = ['* 20% Reload Time', '* 20% Reload Time'].join('\n');
		expect(deduplicateLines(text)).toBe(text);
	});
});
