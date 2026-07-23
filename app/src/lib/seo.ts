export const SITE_URL = 'https://deadlog.io';
export const SITE_NAME = 'Deadlog';
export const SITE_DESCRIPTION =
	'Track every Deadlock update in one searchable changelog. Browse the latest patch notes, hero buffs and nerfs, item changes, and balance updates.';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/assets/meta/index.png`;

export function absoluteUrl(path = ''): string {
	if (!path || path === '/') return SITE_URL;
	return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function breadcrumbList(items: readonly { name: string; path: string }[]) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	};
}
