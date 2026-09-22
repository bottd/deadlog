import type { EntityImpact, PatchStats, RelatedItems } from '@deadlog/utils';
import type { EntityEnrichment } from './entityEnrichment';
import { z } from 'zod';

export const ChangelogMetadataSchema = z.object({
	title: z.string(),
	alias: z.string().optional(), // Legacy changelog slug that resolves to this entry
	thread_id: z.coerce.string().optional(), // Forum thread ID (from URL)
	steam_gid: z.string().optional(), // Steam news item ID
	published: z.string(), // ISO 8601 timestamp
	author: z.string(),
	author_image: z.string().optional(),
	preview_image: z.string().url().optional(),
	major_update: z.coerce.boolean().default(false),
	client_version_captured: z.number().int().positive().optional(),
	client_version_captured_at: z.string().optional()
});

export type ChangelogMetadata = z.infer<typeof ChangelogMetadataSchema>;

export interface ChangelogEntities {
	heroes: string[];
	items: string[];
}

/** One run of bullets under an entity, split per ability section. */
export interface EntityBulletGroup {
	/** Ability heading the bullets sit under; null for the entity's own bullets. */
	ability: string | null;
	bullets: string[];
}

export interface EntityChange {
	name: string;
	type: 'hero' | 'item';
	groups: EntityBulletGroup[];
	impact?: EntityImpact;
	related?: RelatedItems;
}

/** Where an entity's block sits in the parsed text, as line indices. */
export interface EntityBlock {
	name: string;
	type: 'hero' | 'item';
	fenceLine: number;
	attributeLines: [start: number, end: number] | null;
	enrichment: EntityEnrichment;
}

export interface ParsedChangelog {
	filepath: string;
	slug: string;
	aliases: string[];
	metadata: ChangelogMetadata;
	entities: ChangelogEntities;
	entityChanges: EntityChange[];
	plainText: string;
	previewImage?: string;
	stats?: PatchStats;
}
