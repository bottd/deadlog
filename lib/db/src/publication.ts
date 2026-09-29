import { eq } from 'drizzle-orm';
import { PublicationSchema } from '@deadlog/contracts';
import type { DrizzleDB } from './client';
import { changelogs, changelogAliases, metadata } from './schema';
import { createPatchRepository, DATASET_KEY, patchMetadataKey } from './patch-repository';

export async function publishFixture(db: DrizzleDB, input: unknown) {
	const publication = PublicationSchema.parse(input);
	const dataset = { ...publication.dataset, publishedAt: new Date().toISOString() };
	const setMetadata = async (key: string, value: unknown) => {
		const serialized = JSON.stringify(value);
		await db
			.insert(metadata)
			.values({ key, value: serialized })
			.onConflictDoUpdate({ target: metadata.key, set: { value: serialized } })
			.run();
	};
	await setMetadata(DATASET_KEY, { ...dataset, ready: false });
	for (const patch of publication.patches) {
		const row = {
			id: patch.id,
			title: patch.title,
			slug: patch.slug,
			sourceUrl: patch.sourceUrl,
			author: patch.author,
			authorImage: '',
			previewImage: null,
			pubDate: patch.publishedAt,
			majorUpdate: false,
			contentText: patch.text
		};
		await db
			.insert(changelogs)
			.values(row)
			.onConflictDoUpdate({ target: changelogs.id, set: row })
			.run();
		await db
			.delete(changelogAliases)
			.where(eq(changelogAliases.changelogId, patch.id))
			.run();
		for (const slug of patch.aliases.filter((alias) => alias !== patch.slug)) {
			await db
				.insert(changelogAliases)
				.values({ slug, changelogId: patch.id })
				.onConflictDoUpdate({
					target: changelogAliases.slug,
					set: { changelogId: patch.id }
				})
				.run();
		}
		await setMetadata(patchMetadataKey(patch.id), {
			revision: patch.revision,
			aliases: patch.aliases
		});
	}
	const repository = createPatchRepository(db);
	for (const expected of publication.patches) {
		const actual = await repository.getPatch(expected.id);
		if (JSON.stringify(actual) !== JSON.stringify(expected))
			throw new Error('Publication readback verification failed');
	}
	await setMetadata(DATASET_KEY, { ...dataset, ready: true });
	return dataset;
}
