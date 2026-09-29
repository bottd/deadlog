import {
	MODEL_RESULT_BYTES,
	PatchRecordSchema,
	PatchResultSchema,
	PatchSelectorSchema,
	DatasetSchema,
	type Dataset,
	type PatchRecord,
	type PatchSelector,
	type PatchResult,
	type PatchError,
	type PatchSuccess
} from '@deadlog/contracts';

export interface PatchRepository {
	getDataset(): Promise<Dataset | null>;
	getPatch(id: string): Promise<PatchRecord | null>;
	getLatest(): Promise<PatchRecord | null>;
}

export function patchFailure(code: PatchError['error']['code']): PatchError {
	const messages = {
		patch_not_found:
			'That patch is not in the published preview dataset. Open Deadlog for the complete archive.',
		dataset_unavailable:
			'The patch preview dataset is not ready. Retry after publication completes.',
		storage_failure: 'Patch retrieval failed. Retry explicitly or open Deadlog.',
		deadline_exceeded:
			'Patch retrieval exceeded the six-second deadline. Retry explicitly or open Deadlog.'
	};
	return {
		schemaVersion: 1,
		status: 'error',
		error: { code, message: messages[code], retryable: code !== 'patch_not_found' }
	};
}

export function patchFallback(result: PatchResult): string {
	if (result.status === 'error') return result.error.message;
	return [
		`${result.patch.title} (${result.patch.id}), published ${result.patch.publishedAt}.`,
		...result.sections.map((section) => `${section.title}: ${section.text}`),
		`Source: ${result.patch.sourceUrl}`,
		`Open in Deadlog: ${result.patch.canonicalUrl}`,
		`Coverage: ${result.dataset.coverage}; ${result.completeness}; ${result.omittedSections} sections omitted.`,
		`Archive revision: ${result.patch.revision.hash}. Dataset revision: ${result.dataset.revision}.`,
		`Dataset published: ${result.dataset.publishedAt}. Retrieved: ${result.retrievedAt}.`,
		...result.limitations
	].join('\n\n');
}

export function toolPayload(result: PatchResult) {
	return {
		content: [{ type: 'text' as const, text: patchFallback(result) }],
		structuredContent: result,
		...(result.status === 'error' ? { isError: true } : {})
	};
}

export function boundPatchResult(result: PatchSuccess): PatchSuccess {
	const bounded = {
		...result,
		sections: [...result.sections],
		limitations: [...result.limitations]
	};
	while (
		new TextEncoder().encode(JSON.stringify(toolPayload(bounded))).byteLength >
		MODEL_RESULT_BYTES
	) {
		if (!bounded.sections.length) throw new Error('Patch metadata exceeds payload bound');
		bounded.sections.pop();
		bounded.omittedSections++;
		bounded.completeness = 'partial-patch';
		if (
			!bounded.limitations.includes(
				'Some evidence sections were omitted to fit the result limit; open the canonical patch for the full text.'
			)
		) {
			bounded.limitations.push(
				'Some evidence sections were omitted to fit the result limit; open the canonical patch for the full text.'
			);
		}
	}
	return bounded;
}

export async function getPatch(
	repository: PatchRepository,
	input: PatchSelector,
	options: { now?: () => Date; deadlineMs?: number } = {}
): Promise<PatchResult> {
	const selector = PatchSelectorSchema.parse(input);
	let timer: ReturnType<typeof setTimeout> | undefined;
	const work = async (): Promise<PatchResult> => {
		try {
			const rawDataset = await repository.getDataset();
			if (!rawDataset) return patchFailure('dataset_unavailable');
			const dataset = DatasetSchema.parse(rawDataset);
			if (!dataset.ready) return patchFailure('dataset_unavailable');
			const rawPatch =
				'patchId' in selector
					? await repository.getPatch(selector.patchId)
					: await repository.getLatest();
			if (!rawPatch) return patchFailure('patch_not_found');
			const patch = PatchRecordSchema.parse(rawPatch);
			if (!dataset.patchIds.includes(patch.id)) return patchFailure('storage_failure');
			const after = await repository.getDataset();
			if (
				!after?.ready ||
				after.revision !== dataset.revision ||
				after.publishedAt !== dataset.publishedAt
			)
				return patchFailure('dataset_unavailable');
			const result: PatchSuccess = {
				schemaVersion: 1,
				status: 'success',
				selector,
				patch: {
					id: patch.id,
					title: patch.title,
					canonicalUrl: `https://deadlog.io/change/${patch.slug}`,
					sourceUrl: patch.sourceUrl,
					publishedAt: patch.publishedAt,
					effectiveAt: null,
					revision: patch.revision
				},
				dataset,
				retrievedAt: (options.now?.() ?? new Date()).toISOString(),
				sourceUpdatedAt: null,
				coveredThrough: null,
				sections: patch.text ? [{ title: 'Archived patch text', text: patch.text }] : [],
				completeness: patch.text ? 'complete-patch' : 'partial-patch',
				omittedSections: 0,
				limitations: [
					'Fixture-only developer preview: latest means latest in the published fixture dataset, not the complete archive.',
					'Flattened archive text; effective time and upstream freshness are unknown.',
					'Revision hashes identify captured Deadlog archive files, not upstream revision history.',
					...(patch.text ? [] : ['Archived patch text is unavailable.'])
				]
			};
			return PatchResultSchema.parse(boundPatchResult(result));
		} catch {
			return patchFailure('storage_failure');
		}
	};
	try {
		return await Promise.race([
			work(),
			new Promise<PatchError>((resolve) => {
				timer = setTimeout(
					() => resolve(patchFailure('deadline_exceeded')),
					options.deadlineMs ?? 6000
				);
			})
		]);
	} finally {
		clearTimeout(timer);
	}
}
