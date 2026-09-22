import {
	countBullets,
	entityFragmentId,
	relatedShare,
	type PatchStats,
	type RelatedItems
} from '@deadlog/utils';
import type { EntityChangeGroup, PatchItemChange } from '@deadlog/db';
import { changePath } from '$lib/seo';

export interface RelatedChange {
	name: string;
	image: string;
	share: number;
	changeCount: number;
	groups: EntityChangeGroup[];
	href: string;
}

export interface RelatedChanges {
	before: NonNullable<PatchStats['before']>;
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
				share: relatedShare(related, item),
				changeCount: countBullets(change.changeGroups) ?? 0,
				groups: change.changeGroups,
				href: `${changePath(patch)}#${entityFragmentId(change.name)}`
			}
		];
	});
	return items.length > 0 ? { before, items } : null;
}

export function formatShare(share: number): string {
	const percent = Math.round(share * 100);
	return percent === 0 ? '<1%' : `${percent}%`;
}
