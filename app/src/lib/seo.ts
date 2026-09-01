import type { MetaTagsProps, OpenGraph } from 'svelte-meta-tags';

export const SITE_URL = 'https://deadlog.io';
export const SITE_NAME = 'Deadlog';
export const SITE_TITLE = 'Deadlock Patch Notes & Changelog | Deadlog';
export const SITE_DESCRIPTION =
	'Track every Deadlock update in one searchable changelog. Browse the latest patch notes, hero buffs and nerfs, item changes, and balance updates.';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/assets/meta/index.png`;

export function absoluteUrl(path = ''): string {
	if (!path || path === '/') return SITE_URL;
	return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Canonical patch URL — the slug's own `/` must survive, so encode per segment. */
export function changePath(changelog: { slug: string }): string {
	return '/change/' + changelog.slug.split('/').map(encodeURIComponent).join('/');
}

/**
 * Every page shares the same og/twitter/robots shape — only title, description, url,
 * image and indexability actually vary. Pass `openGraph` to override or extend
 * (e.g. `type: 'article'` plus its `article` block).
 */
export function pageMeta(meta: {
	title: string;
	description: string;
	canonical: string;
	image?: string;
	indexable?: boolean;
	openGraph?: Partial<OpenGraph>;
}): MetaTagsProps {
	const {
		title,
		description,
		canonical,
		image = DEFAULT_SOCIAL_IMAGE,
		indexable = true,
		openGraph
	} = meta;

	return {
		title,
		description,
		canonical,
		robots: indexable ? 'index,follow' : 'noindex,follow',
		additionalRobotsProps: {
			maxImagePreview: 'large',
			maxSnippet: -1,
			maxVideoPreview: -1
		},
		openGraph: {
			type: 'website',
			url: canonical,
			title,
			description,
			siteName: SITE_NAME,
			locale: 'en_US',
			images: [{ url: image, width: 1200, height: 630, type: 'image/png', alt: title }],
			...openGraph
		},
		twitter: {
			cardType: 'summary_large_image',
			title,
			description,
			image,
			imageAlt: title
		}
	};
}

/** The `@graph` shared by /heroes, /items and every entity page. */
export function collectionPageSchema(page: {
	canonical: string;
	title: string;
	description: string;
	image: string;
	about: Record<string, unknown>[];
	items: readonly { name: string; url: string }[];
	dateModified?: string;
	breadcrumbs: readonly { name: string; path: string }[];
}) {
	return {
		'@graph': [
			{
				'@type': 'CollectionPage',
				'@id': `${page.canonical}#webpage`,
				url: page.canonical,
				name: page.title,
				description: page.description,
				image: page.image,
				dateModified: page.dateModified,
				inLanguage: 'en-US',
				isPartOf: { '@id': `${SITE_URL}/#website` },
				about: page.about,
				mainEntity: {
					'@type': 'ItemList',
					numberOfItems: page.items.length,
					itemListElement: page.items.map((item, index) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: item.name,
						url: item.url
					}))
				}
			},
			breadcrumbList(page.breadcrumbs)
		]
	};
}

export const DEADLOCK_GAME = { '@type': 'VideoGame', name: 'Deadlock' };

/** One home for the entity-type → listing-page mapping, so back links and breadcrumbs can't drift. */
export const ENTITY_LISTING = {
	hero: { path: '/heroes', label: 'Heroes' },
	item: { path: '/items', label: 'Items' }
} as const;

/** The hero and item pages share this schema wiring exactly — only the entity varies. */
export function entityCollectionSchema(page: {
	entity: { type: keyof typeof ENTITY_LISTING; name: string; image?: string };
	/** Site-relative path of the entity page, e.g. `/hero/abrams`. */
	path: string;
	title: string;
	description: string;
	image: string;
	changelogs: readonly { slug: string; title: string; date: Date }[];
}) {
	const { entity, path, title, description, image, changelogs } = page;
	const listing = ENTITY_LISTING[entity.type];
	return collectionPageSchema({
		canonical: absoluteUrl(path),
		title,
		description,
		image,
		dateModified: changelogs[0]?.date.toISOString(),
		about: [DEADLOCK_GAME, { '@type': 'Thing', name: entity.name, image: entity.image }],
		items: changelogs.map((changelog) => ({
			name: changelog.title,
			url: absoluteUrl(changePath(changelog))
		})),
		breadcrumbs: [
			{ name: SITE_NAME, path: '/' },
			{ name: listing.label, path: listing.path },
			{ name: entity.name, path }
		]
	});
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
