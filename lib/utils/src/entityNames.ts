const ARTICLE_RE = /^(the|a|an)\s+/;

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
