const ARTICLE_RE = /^(the|a|an)\s+/;

export function canonicalSlug(slug: string): string {
	return slug.toLowerCase().trim();
}

export function decodeEntityName(name: string): string {
	return name
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&apos;|&#39;/g, "'");
}

export function normalizeEntityName(name: string): string {
	return decodeEntityName(name).toLowerCase().trim().replace(/\s+/g, ' ');
}

export function entityNameAliases(name: string): string[] {
	const normalized = normalizeEntityName(name);
	const withoutArticle = normalized.replace(ARTICLE_RE, '');
	return withoutArticle !== normalized ? [normalized, withoutArticle] : [normalized];
}

export function entityNamesMatch(left: string, right: string): boolean {
	const rightAliases = new Set(entityNameAliases(right));
	return entityNameAliases(left).some((alias) => rightAliases.has(alias));
}

export function indexEntityNames<T>(
	entities: readonly T[],
	name: (entity: T) => string
): Map<string, T> {
	const index = new Map<string, T>();
	for (const entity of entities) {
		for (const alias of entityNameAliases(name(entity))) {
			if (!index.has(alias)) index.set(alias, entity);
		}
	}
	return index;
}

export function findEntityName<T>(
	index: ReadonlyMap<string, T> | undefined,
	name: string
): T | undefined {
	for (const alias of entityNameAliases(name)) {
		const entity = index?.get(alias);
		if (entity !== undefined) return entity;
	}
	return undefined;
}
