import { z } from 'zod';

export const SCHEMA_VERSION = 1;
export const MODEL_RESULT_BYTES = 64 * 1024;

export function isEvidenceUrl(value: string): boolean {
	try {
		const url = new URL(value);
		if (
			url.protocol !== 'https:' ||
			url.username ||
			url.password ||
			url.port ||
			url.search ||
			url.hash
		)
			return false;
		if (url.origin === 'https://deadlog.io')
			return /^\/change\/[a-z0-9/-]+$/.test(url.pathname);
		if (url.origin === 'https://forums.playdeadlock.com')
			return /^\/threads\/\d+\/$/.test(url.pathname);
		return (
			url.origin === 'https://store.steampowered.com' &&
			/^\/news\/externalpost\/steam_community_announcements\/\d+$/.test(url.pathname)
		);
	} catch {
		return false;
	}
}

export const EvidenceUrlSchema = z
	.url()
	.max(2048)
	.refine(isEvidenceUrl, 'Unsupported evidence URL');
export const UtcTimestampSchema = z.iso.datetime({ offset: false });
export const PatchSelectorSchema = z.union([
	z.strictObject({ patchId: z.string().min(1).max(256) }),
	z.strictObject({ latest: z.literal(true) })
]);
export type PatchSelector = z.infer<typeof PatchSelectorSchema>;

export const RevisionSchema = z.strictObject({
	hash: z.string().regex(/^[a-f0-9]{64}$/),
	basis: z.literal('deadlog_archive_file'),
	upstreamRevision: z.null()
});

export const PatchRecordSchema = z.strictObject({
	id: z.string().min(1).max(256),
	title: z.string().min(1).max(512),
	slug: z
		.string()
		.regex(/^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/)
		.max(256),
	sourceUrl: EvidenceUrlSchema,
	publishedAt: UtcTimestampSchema,
	author: z.string().max(256),
	text: z.string().max(1024 * 1024),
	revision: RevisionSchema,
	aliases: z.array(z.string().max(256)).max(20)
});
export type PatchRecord = z.infer<typeof PatchRecordSchema>;

export const DatasetSchema = z.strictObject({
	schemaVersion: z.literal(SCHEMA_VERSION),
	revision: z.string().regex(/^[a-f0-9]{64}$/),
	ready: z.boolean(),
	publishedAt: UtcTimestampSchema,
	coverage: z.literal('fixture-only'),
	patchIds: z
		.array(z.string().min(1).max(256))
		.min(1)
		.max(20)
		.refine((ids) => new Set(ids).size === ids.length, 'Dataset IDs must be unique')
});
export type Dataset = z.infer<typeof DatasetSchema>;

export const PatchSuccessSchema = z.strictObject({
	schemaVersion: z.literal(SCHEMA_VERSION),
	status: z.literal('success'),
	selector: PatchSelectorSchema,
	patch: z.strictObject({
		id: z.string().min(1).max(256),
		title: z.string().min(1).max(512),
		canonicalUrl: EvidenceUrlSchema,
		sourceUrl: EvidenceUrlSchema,
		publishedAt: UtcTimestampSchema,
		effectiveAt: z.null(),
		revision: RevisionSchema
	}),
	dataset: DatasetSchema,
	retrievedAt: UtcTimestampSchema,
	sourceUpdatedAt: z.null(),
	coveredThrough: z.null(),
	sections: z
		.array(
			z.strictObject({ title: z.string().max(256), text: z.string().max(1024 * 1024) })
		)
		.max(50),
	completeness: z.enum(['complete-patch', 'partial-patch']),
	omittedSections: z.number().int().nonnegative(),
	limitations: z.array(z.string().max(1024)).max(20)
});
export type PatchSuccess = z.infer<typeof PatchSuccessSchema>;

export const PatchErrorSchema = z.strictObject({
	schemaVersion: z.literal(SCHEMA_VERSION),
	status: z.literal('error'),
	error: z.strictObject({
		code: z.enum([
			'patch_not_found',
			'dataset_unavailable',
			'storage_failure',
			'deadline_exceeded'
		]),
		message: z.string().max(1024),
		retryable: z.boolean()
	})
});
export type PatchError = z.infer<typeof PatchErrorSchema>;
export const PatchResultSchema = z.union([PatchSuccessSchema, PatchErrorSchema]);
export type PatchResult = z.infer<typeof PatchResultSchema>;
