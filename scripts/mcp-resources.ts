import { createHash } from 'node:crypto';
import { z } from 'zod';

export function resourceIdentity(html: string) {
	return `ui://deadlog/patch-v1-${createHash('sha256').update(html).digest('hex').slice(0, 16)}.html`;
}
export const ResourceArchiveSchema = z
	.array(
		z
			.strictObject({
				uri: z.string().regex(/^ui:\/\/deadlog\/patch-v1-[a-f0-9]{16}\.html$/),
				html: z.string().max(1024 * 1024)
			})
			.refine(
				(resource) => resource.uri === resourceIdentity(resource.html),
				'Resource content identity mismatch'
			)
	)
	.max(3);

export function retainResources(
	current: { uri: string; html: string },
	previous: unknown
) {
	const old = ResourceArchiveSchema.parse(previous);
	return ResourceArchiveSchema.parse(
		[current, ...old.filter((resource) => resource.uri !== current.uri)].slice(0, 3)
	);
}
