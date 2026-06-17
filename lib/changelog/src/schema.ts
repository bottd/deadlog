import { z } from 'zod';

export const ChangelogMetadataSchema = z.object({
	title: z.string(),
	thread_id: z.coerce.string().optional(), // Forum thread ID (from URL)
	steam_gid: z.string().optional(), // Steam news item ID
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

/** A single entity's section within a changelog, with the number of change bullets it contains. */
export interface EntityChange {
	name: string;
	type: 'hero' | 'item';
	count: number;
}

export interface ParsedChangelog {
	filepath: string;
	slug: string;
	metadata: ChangelogMetadata;
	entities: ChangelogEntities;
	/** Per-entity change-bullet counts derived from the entity sections. */
	entityChanges: EntityChange[];
	plainText: string;
}
