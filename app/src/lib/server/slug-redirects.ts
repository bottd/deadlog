import { canonicalSlug } from '@deadlog/utils';
import type { RedirectSlugs } from '@deadlog/db';
import generated from '$lib/generated/slug-redirects.json';

const slugs = generated as RedirectSlugs;

const ENTITY_KINDS = {
	hero: new Set(slugs.hero),
	item: new Set(slugs.item),
	ability: new Set(slugs.ability)
} as const;

const CHANGELOGS = new Set(slugs.changelog);

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

function verdictFor(known: ReadonlySet<string>, kind: string, slug: string): SlugVerdict {
	if (known.has(slug)) return { kind: 'ok' };
	const canonical = canonicalSlug(slug);
	return known.has(canonical)
		? { kind: 'redirect', path: `/${kind}/${canonical}` }
		: { kind: 'unknown' };
}

export function resolveSlugRoute(pathname: string): SlugVerdict {
	const entity = /^\/(hero|item|ability)\/([^/]+)\/?$/.exec(pathname);
	if (entity) {
		const [, kind, raw] = entity;
		const slug = decodeSlug(raw);
		if (slug === null) return { kind: 'malformed' };
		return verdictFor(ENTITY_KINDS[kind as keyof typeof ENTITY_KINDS], kind, slug);
	}

	const change = /^\/change\/(.+?)\/?$/.exec(pathname);
	if (change) {
		const slug = decodeSlug(change[1]);
		if (slug === null) return { kind: 'malformed' };
		if (CHANGELOGS.has(slug)) return { kind: 'ok' };
		const canonical = slugs.changelogAliases[slug];
		return canonical
			? { kind: 'redirect', path: `/change/${canonical}` }
			: { kind: 'unknown' };
	}

	return { kind: 'ok' };
}
