import './index-server.js';
import { y as createContext } from './server2.js';
import { _ as entityNamesMatch, m as toSlug } from './src2.js';
import { r as relatedShare } from './relatedItems.js';
//#region ../lib/stats/src/constants.ts
var RELATED_MIN_APPEARANCES = 1e3;
//#endregion
//#region src/lib/components/changelog/readingContext.ts
var detailKey = (kind, id, ability) =>
	`${kind}:${id}${ability ? `:${toSlug(ability)}` : ''}`;
var previousKey = (kind, id, group, bullet) => `${kind}:${id}:${group}:${bullet}`;
var [getReadingContext, setReadingContext] = createContext();
/** Only real changed item sections qualify; a full patch URL clears entity filters. */
function resolveRelatedReading(manifest, icons, patchPath) {
	const before = manifest?.stats?.before;
	if (!manifest || !before) return {};
	const entries = manifest.related.flatMap(({ name, record }) => {
		const hero = icons.heroes.find((hero) => entityNamesMatch(hero.alt, name));
		if (!hero || record.status !== 'complete' || record.appearances < 1e3) return [];
		const items = record.items
			.flatMap((recorded) => {
				if (recorded.buyers < 100 || recorded.buyers > record.appearances) return [];
				const item = icons.items.find((item) => item.id === recorded.id);
				if (!item) return [];
				const sections = manifest.sections.filter(
					(section) => section.kind === 'item' && entityNamesMatch(section.name, item.alt)
				);
				if (sections.length !== 1) return [];
				return [
					{
						name: item.alt,
						image: item.src,
						...relatedShare(record, recorded),
						href: `${patchPath}#${sections[0].id}`
					}
				];
			})
			.slice(0, 3);
		return items.length
			? [
					[
						String(hero.id),
						{
							stats: {
								before,
								after: manifest.stats?.after ?? null
							},
							items
						}
					]
				]
			: [];
	});
	return Object.fromEntries(entries);
}
//#endregion
export {
	setReadingContext as a,
	resolveRelatedReading as i,
	getReadingContext as n,
	RELATED_MIN_APPEARANCES as o,
	previousKey as r,
	detailKey as t
};
