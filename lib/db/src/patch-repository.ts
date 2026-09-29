import { asc, desc, eq, inArray } from 'drizzle-orm';
import { DatasetSchema, PatchRecordSchema } from '@deadlog/contracts';
import type { PatchRepository } from '@deadlog/core';
import type { DrizzleDB } from './client';
import { changelogs, metadata } from './schema';

export const DATASET_KEY = 'mcp:dataset';
export const patchMetadataKey = (id: string) => `mcp:patch:${id}`;

export function createPatchRepository(db: DrizzleDB): PatchRepository {
	async function readMetadata(key: string): Promise<unknown> {
		const row = await db
			.select({ value: metadata.value })
			.from(metadata)
			.where(eq(metadata.key, key))
			.get();
		return row?.value ? (JSON.parse(row.value) as unknown) : null;
	}
	async function getDataset() {
		const value = await readMetadata(DATASET_KEY);
		return value ? DatasetSchema.parse(value) : null;
	}
	async function readPatch(row: typeof changelogs.$inferSelect | undefined) {
		if (!row) return null;
		const extra = PatchRecordSchema.pick({ revision: true, aliases: true }).parse(
			await readMetadata(patchMetadataKey(row.id))
		);
		return PatchRecordSchema.parse({
			id: row.id,
			title: row.title,
			slug: row.slug,
			sourceUrl: row.sourceUrl,
			publishedAt: row.pubDate,
			author: row.author,
			text: row.contentText ?? '',
			...extra
		});
	}
	return {
		getDataset,
		async getPatch(id) {
			const dataset = await getDataset();
			if (!dataset || !dataset.patchIds.includes(id)) return null;
			return readPatch(
				await db.select().from(changelogs).where(eq(changelogs.id, id)).get()
			);
		},
		async getLatest() {
			const dataset = await getDataset();
			if (!dataset) return null;
			return readPatch(
				await db
					.select()
					.from(changelogs)
					.where(inArray(changelogs.id, dataset.patchIds))
					.orderBy(desc(changelogs.pubDate), asc(changelogs.id))
					.limit(1)
					.get()
			);
		}
	};
}
