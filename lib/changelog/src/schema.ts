import { z } from 'zod';

export const ChangelogMetadataSchema = z.object({
	title: z.string(),
	thread_id: z.coerce.string(), // Forum thread ID (from URL)
	published: z.string(), // ISO 8601 timestamp
	author: z.string(),
	author_image: z.string().optional(),
	category: z.enum(['patch', 'hotfix', 'major']).default('patch'),
	major_update: z.coerce.boolean().default(false),
	parent_id: z.coerce.string().optional() // For reply posts
});

export type ChangelogMetadata = z.infer<typeof ChangelogMetadataSchema>;

export interface ChangelogEntities {
	heroes: string[];
	items: string[];
}

export interface ParsedChangelog {
	filepath: string;
	slug: string;
	metadata: ChangelogMetadata;
	entities: ChangelogEntities;
	plainText: string;
}
