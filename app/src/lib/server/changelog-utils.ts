import {
	getChangelogAbilityIcons,
	getChangelogIcons,
	type ScrapedChangelog
} from '@deadlog/db';
import type { DrizzleDB } from '@deadlog/db';
import { formatDate, makeSummary } from '@deadlog/utils';
import { absoluteUrl } from '$lib/seo';

export async function buildChangePageData(db: DrizzleDB, changelog: ScrapedChangelog) {
	const [iconsMap, abilityIcons] = await Promise.all([
		getChangelogIcons(db, [changelog.id]),
		getChangelogAbilityIcons(db, changelog.id)
	]);
	const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };
	const date = new Date(changelog.pubDate);
	const description =
		makeSummary(changelog.contentText, 155) ||
		`Read the ${formatDate(date)} Deadlock patch notes, including hero, item, and gameplay balance changes.`;

	// The body renders from the .mg component, so contentText is dead weight in the
	// payload — it only feeds the summary and indexability checks on the server.
	const { contentText, ...changelogFields } = changelog;

	return {
		changelog: {
			...changelogFields,
			date,
			icons,
			abilityIcons
		},
		title: `${changelog.title} | Deadlock Patch Notes`,
		description,
		// Meta previews are generated per changelog id — the filename is not the URL.
		image: absoluteUrl(`/assets/meta/change/${changelog.id}.png`),
		isIndexable: Boolean(contentText?.trim())
	};
}
