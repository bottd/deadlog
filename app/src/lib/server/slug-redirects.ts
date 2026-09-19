import { changePath } from '$lib/seo';
import type { RedirectSlugs } from '@deadlog/db';
import generated from '$lib/generated/slug-redirects.json';

const slugs = generated as RedirectSlugs;

const ENTITY_KINDS = {
	hero: new Set(slugs.hero),
	item: new Set(slugs.item),
	ability: new Set(slugs.ability)
} as const;

const CHANGELOGS = new Set(slugs.changelog);

const ENTITY_ROUTE = /^\/(hero|item|ability)\/([^/]+)\/?$/;
const CHANGE_ROUTE = /^\/change\/(.+?)\/?$/;

function decodeSlug(raw: string): string | null {
	try {
		return decodeURIComponent(raw);
	} catch {
		return null;
	}
}

export type SlugVerdict =
	| { kind: 'ok' }
	| { kind: 'redirect'; path: string }
	| { kind: 'unknown' }
	| { kind: 'malformed' };

export function resolveSlugRoute(pathname: string): SlugVerdict {
	const entity = ENTITY_ROUTE.exec(pathname);
	if (entity) {
		const [, kind, raw] = entity;
		const slug = decodeSlug(raw);
		if (slug === null) return { kind: 'malformed' };
		return ENTITY_KINDS[kind as keyof typeof ENTITY_KINDS].has(slug)
			? { kind: 'ok' }
			: { kind: 'unknown' };
	}

	const change = CHANGE_ROUTE.exec(pathname);
	if (change) {
		const slug = decodeSlug(change[1]);
		if (slug === null) return { kind: 'malformed' };
		if (CHANGELOGS.has(slug)) return { kind: 'ok' };
		const canonical = slugs.changelogAliases[slug];
		return canonical
			? { kind: 'redirect', path: changePath({ slug: canonical }) }
			: { kind: 'unknown' };
	}

	return { kind: 'ok' };
}
