import { describe, expect, it } from 'vitest';
import { ChangelogMetadataSchema, parseStructure } from '@deadlog/changelog';
import { withCapturedVersion } from './captureVersion';

const generated = [
	'``attr:',
	'title "Patch"',
	'published "2026-09-16T20:16:43.000Z"',
	'author "Yoshi"',
	'major_update #false',
	'``',
	'',
	'=hero:abrams:',
	'``attr:',
	'impact closed=#true {',
	'}',
	'``',
	'## Abrams',
	'- Change',
	'=',
	''
].join('\n');
const capture = { clientVersion: 6698, capturedAt: '2026-09-16T21:00:00.000Z' };

describe('withCapturedVersion', () => {
	it('records the version on the first write, inside the root attr block only', async () => {
		const written = withCapturedVersion(generated, null, capture);

		expect(written.split('\n').slice(4, 8)).toEqual([
			'major_update #false',
			'client_version_captured 6698',
			'client_version_captured_at "2026-09-16T21:00:00.000Z"',
			'``'
		]);
		expect(written.match(/client_version_captured /g)).toHaveLength(1);

		const entityFree = written.replace(/``attr:\nimpact[\s\S]*?``\n/, '');
		const metadata = ChangelogMetadataSchema.parse(
			(await parseStructure(entityFree)).metadata
		);
		expect(metadata.client_version_captured).toBe(6698);
		expect(metadata.client_version_captured_at).toBe(capture.capturedAt);
	});

	it('never backfills a file that already exists', () => {
		expect(withCapturedVersion(generated, generated, capture)).toBe(generated);
	});

	it('keeps the original capture through an overwrite, whatever the version is now', () => {
		const first = withCapturedVersion(generated, null, capture);
		const overwritten = withCapturedVersion(generated, first, {
			clientVersion: 6800,
			capturedAt: '2026-10-01T00:00:00.000Z'
		});

		expect(overwritten).toBe(first);
	});

	it('records nothing when no version could be resolved', () => {
		expect(withCapturedVersion(generated, null, undefined)).toBe(generated);
	});

	it('leaves content without a root attr block alone', () => {
		expect(withCapturedVersion('# Notes\n', null, capture)).toBe('# Notes\n');
	});
});
