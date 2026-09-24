import {
	a as formatDate,
	i as entityFragmentId,
	n as abilityFragmentId
} from './src2.js';
import { u as changePath } from './seo.js';
//#region src/lib/components/entity/pageContext.ts
function toPageContext(context) {
	return {
		clientVersion: context.clientVersion,
		sections: context.sections.map(({ label, paragraphs }) => ({
			label,
			paragraphs
		})),
		properties: context.properties.map(({ label, display, unit }) => ({
			label,
			display,
			unit
		}))
	};
}
//#endregion
//#region src/lib/components/entity/previousChanges.ts
var MONTHS = [
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
function shortDate(date, entryYear) {
	const day = `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`;
	return date.getUTCFullYear() === entryYear ? day : `${day} ${date.getUTCFullYear()}`;
}
function previousChangeLookup(links, entityName) {
	const byBullet = new Map(
		links.map((link) => [
			`${link.changelogId}:${link.groupIndex}:${link.bulletIndex}`,
			link
		])
	);
	return function previousFor(patch, group, groupIndex) {
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
		return previous.some(Boolean) ? previous : void 0;
	};
}
//#endregion
export { toPageContext as n, previousChangeLookup as t };
