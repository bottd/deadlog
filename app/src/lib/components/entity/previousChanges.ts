import { abilityFragmentId, entityFragmentId, formatDate } from '@deadlog/utils';
import type { PropertyLink } from '@deadlog/db';
import { changePath } from '$lib/seo';

export interface PreviousChange {
	text: string;
	label: string;
	href: string;
}

const MONTHS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

function shortDate(date: Date, entryYear: number): string {
	const day = `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`;
	return date.getUTCFullYear() === entryYear ? day : `${day} ${date.getUTCFullYear()}`;
}

export function previousChangeLookup(links: PropertyLink[], entityName: string) {
	const byBullet = new Map(
		links.map((link) => [
			`${link.changelogId}:${link.groupIndex}:${link.bulletIndex}`,
			link
		])
	);

	return function previousFor(
		patch: { id: string; pubDate: string },
		group: { ability: string | null; bullets: string[] },
		groupIndex: number
	): (PreviousChange | null)[] | undefined {
		const entryYear = new Date(patch.pubDate).getUTCFullYear();
		const previous = group.bullets.map((_, bulletIndex) => {
			const link = byBullet.get(`${patch.id}:${groupIndex}:${bulletIndex}`);
			if (!link) return null;
			const date = new Date(link.previousPubDate);
			const fragment = group.ability
				? abilityFragmentId(group.ability)
				: entityFragmentId(entityName);
			return {
				text: `prev. ${link.previousOld} → ${link.previousNew} · ${shortDate(date, entryYear)}`,
				label: `Previous recorded ${link.property} change: ${link.previousOld} to ${link.previousNew}, ${formatDate(date)}.`,
				href: `${changePath({ slug: link.previousSlug })}#${fragment}`
			};
		});
		return previous.some(Boolean) ? previous : undefined;
	};
}
