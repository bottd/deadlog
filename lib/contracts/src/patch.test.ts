import { describe, expect, it } from 'vitest';
import { isEvidenceUrl, PatchSelectorSchema } from './patch';

describe('patch boundary', () => {
	it('enforces exactly one selector and rejects hidden arguments', () => {
		for (const value of [
			{},
			{ latest: false },
			{ latest: true, patchId: '162572' },
			{ patchId: '' },
			{ patchId: '1', sql: 'select *' }
		]) {
			expect(PatchSelectorSchema.safeParse(value).success).toBe(false);
		}
		expect(PatchSelectorSchema.parse({ latest: true })).toEqual({ latest: true });
		expect(PatchSelectorSchema.parse({ patchId: '162572' })).toEqual({
			patchId: '162572'
		});
	});
	it('accepts actual evidence routes, not similar hosts or arbitrary paths', () => {
		expect(isEvidenceUrl('https://deadlog.io/change/2026/09-16')).toBe(true);
		expect(isEvidenceUrl('https://forums.playdeadlock.com/threads/162572/')).toBe(true);
		for (const url of [
			'javascript:alert(1)',
			'https://deadlog.io.evil.test/change/x',
			'https://deadlog.io/admin',
			'https://deadlog.io/change/x?redirect=evil',
			'https://user@deadlog.io/change/x'
		])
			expect(isEvidenceUrl(url)).toBe(false);
	});
});
