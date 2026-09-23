import {
	entityFragmentId,
	relatedShare,
	type PatchStats,
	type RelatedItems
} from '@deadlog/utils';
import type { EntityChangeGroup, PatchItemChange } from '@deadlog/db';
import { changePath } from '$lib/seo';
import type { ShareRow } from './shareRows';

export interface RelatedChange extends ShareRow {
	groups: EntityChangeGroup[];
}

export interface RelatedChanges {
	stats: Pick<PatchStats, 'before' | 'after'>;
	items: RelatedChange[];
}

export function relatedChanges(
	patch: {
		id: string;
		slug: string;
		stats: PatchStats | null;
		relatedItems?: RelatedItems | null;
	},
	changes: PatchItemChange[]
): RelatedChanges | null {
	const related = patch.relatedItems;
	const before = patch.stats?.before;
	if (!related || related.status !== 'complete' || !before) return null;

	const items = related.items.flatMap((item) => {
		const change = changes.find(
			(entry) => entry.changelogId === patch.id && entry.itemId === item.id
		);
		if (!change) {
			console.warn(
				`Related item ${item.id} has no change section in ${patch.slug}; omitted`
			);
			return [];
		}
		return [
			{
				name: change.name,
				image: change.image,
				...relatedShare(related, item),
				groups: change.changeGroups,
				href: `${changePath(patch)}#${entityFragmentId(change.name)}`
			}
		];
	});
	return items.length > 0
		? { stats: { before, after: patch.stats?.after ?? null }, items }
		: null;
}
