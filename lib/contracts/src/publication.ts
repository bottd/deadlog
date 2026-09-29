import { z } from 'zod';
import { DatasetSchema, PatchRecordSchema } from './patch';

export const PublicationSchema = z
	.strictObject({
		dataset: DatasetSchema,
		patches: z.array(PatchRecordSchema).min(1).max(20)
	})
	.superRefine(({ dataset, patches }, ctx) => {
		const ids = patches.map((patch) => patch.id).sort();
		if (
			new Set(ids).size !== ids.length ||
			JSON.stringify(ids) !== JSON.stringify([...dataset.patchIds].sort())
		) {
			ctx.addIssue({
				code: 'custom',
				message: 'Publication IDs must exactly match dataset coverage'
			});
		}
	});
export type Publication = z.infer<typeof PublicationSchema>;
