//#region ../lib/utils/src/entityNames.ts
var ARTICLE_RE = /^(the|a|an)\s+/;
function canonicalSlug(slug) {
	return slug.toLowerCase().trim();
}
function decodeEntityName(name) {
	return name
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&apos;|&#39;/g, "'");
}
function normalizeEntityName(name) {
	return decodeEntityName(name).toLowerCase().trim().replace(/\s+/g, ' ');
}
function entityNameAliases(name) {
	const normalized = normalizeEntityName(name);
	const withoutArticle = normalized.replace(ARTICLE_RE, '');
	return withoutArticle !== normalized ? [normalized, withoutArticle] : [normalized];
}
function entityNamesMatch(left, right) {
	const rightAliases = new Set(entityNameAliases(right));
	return entityNameAliases(left).some((alias) => rightAliases.has(alias));
}
function indexEntityNames(entities, name) {
	const index = /* @__PURE__ */ new Map();
	for (const entity of entities)
		for (const alias of entityNameAliases(name(entity)))
			if (!index.has(alias)) index.set(alias, entity);
	return index;
}
function findEntityName(index, name) {
	for (const alias of entityNameAliases(name)) {
		const entity = index?.get(alias);
		if (entity !== void 0) return entity;
	}
}
//#endregion
//#region ../lib/utils/src/index.ts
function toSlug(name) {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}
/** Null groups mean the count is unknown. */
function countBullets(groups) {
	return groups?.reduce((total, group) => total + group.bullets.length, 0) ?? null;
}
/** The shop's three columns, in shop order. */
var ITEM_CATEGORIES = ['weapon', 'vitality', 'spirit'];
function isItemCategory(value) {
	return ITEM_CATEGORIES.includes(value);
}
/** Shared so the generator hands out collision-free ids while every heading it
 * leaves alone keeps the one it already has. */
function abilityFragmentId(name) {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
/** {@link abilityFragmentId} over the article-stripped alias, so "The Doorman" and
 * "Doorman" land on the same id. */
function entityFragmentId(name) {
	return abilityFragmentId(entityNameAliases(name).at(-1) ?? '');
}
function singularizeSlug(slug) {
	return slug
		.split('-')
		.map((part) => (part.length > 3 && part.endsWith('s') ? part.slice(0, -1) : part))
		.join('-');
}
function matchesAbilitySlug(heading, ability) {
	const compact = ability.replaceAll('-', '');
	return (
		heading === ability ||
		heading.startsWith(`${ability}-`) ||
		heading === compact ||
		heading.startsWith(`${compact}-`) ||
		heading.replaceAll('-', '') === compact
	);
}
function resolveAbilitySlug(name, abilities) {
	const headingSlug = toSlug(name);
	const headings = [headingSlug, singularizeSlug(headingSlug)];
	let best = null;
	for (const { slug } of abilities)
		if (
			headings.some((heading) =>
				[slug, singularizeSlug(slug)].some((candidate) =>
					matchesAbilitySlug(heading, candidate)
				)
			) &&
			(!best || slug.length > best.length)
		)
			best = slug;
	return best;
}
var HERO_ABILITY_ALIASES = {
	'should-charge': 'shoulder-charge',
	siphon: 'siphon-life',
	hook: 'grapple-arm',
	uppercut: 'exploding-uppercut',
	'charge-shot': 'charged-shot',
	'immobilizing-trap': 'spirit-snare',
	'rain-of-fire': 'rain-of-arrows',
	catalyst: 'napalm',
	'kudzu-bomb': 'entangling-thorns',
	'watchers-covenant': 'kudzu-connection',
	'true-form': 'stone-form',
	'blood-bomb': 'essence-bomb',
	'ground-slam': 'ground-strike',
	ghouls: 'borrowed-decree',
	turret: 'mini-turret',
	'medicinal-spectre': 'medicinal-specter',
	'rocket-barrage': 'heavy-barrage',
	tornado: 'dust-devil',
	bookworm: 'bookwyrm',
	'conjure-dragon': 'bookwyrm',
	bararge: 'barrage',
	'tail-whack': 'boot-kick',
	'mauling-leap': 'entangling-bola',
	'go-for-the-throat': 'lycan-curse',
	assistant: 'spectral-assistant',
	crow: 'crow-familiar',
	'royal-flush': 'card-trick',
	'card-toss': 'card-trick',
	'flying-strike': 'flying-slash',
	'shadow-explosion': 'shadow-transformation'
};
var heroAbilityAliases = Object.keys(HERO_ABILITY_ALIASES).map((slug) => ({ slug }));
function resolveHeroAbilitySlug(name, abilities) {
	const current = resolveAbilitySlug(name, abilities);
	if (current) return current;
	const alias = resolveAbilitySlug(name, heroAbilityAliases);
	const slug = alias ? HERO_ABILITY_ALIASES[alias] : null;
	return slug && abilities.some((ability) => ability.slug === slug) ? slug : null;
}
/** Mog's inline link: `[[target]]((label))`. Written once — the three uses below had
 * already drifted on whether an empty target counts. */
var MOG_LINK_SOURCE = String.raw`\[\[([^\[\]]*)\]\]\(\(([^()]*)\)\)`;
new RegExp(MOG_LINK_SOURCE, 'g');
new RegExp(`^${MOG_LINK_SOURCE}$`);
/** Every paired delimiter Mog reads as markup, so prose that happens to contain one
 * can be handed back to the author untouched. */
var MOG_DELIMITERS = String.raw`\*\*|__|~~|\$\$|\[\[|\]\]|\(\(|\)\)|\{\{|\}\}|\|\|`;
new RegExp(`${MOG_LINK_SOURCE}|(?<!\\\\)(${MOG_DELIMITERS})`, 'g');
new RegExp(String.raw`\\(${MOG_DELIMITERS})`, 'g');
function makeSummary(text, max = 140) {
	if (!text) return '';
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const cut = clean.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}
function toDate(date) {
	return date instanceof Date ? date : new Date(date);
}
function getOrdinalSuffix(day) {
	if (day >= 11 && day <= 13) return 'th';
	return ['th', 'st', 'nd', 'rd'][day % 10] ?? 'th';
}
/** Word only, so callers keep control of the count's own markup. */
function plural(count, one, many = `${one}s`) {
	return count === 1 ? one : many;
}
var DISPLAY_TIME_ZONE = 'America/Los_Angeles';
var dateFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});
function formatDate(date) {
	const parts = dateFormatter.formatToParts(toDate(date));
	const value = (type) => parts.find((part) => part.type === type)?.value ?? '';
	const day = Number(value('day'));
	return `${value('month')} ${day}${getOrdinalSuffix(day)}, ${value('year')}`;
}
var shortDateFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	dateStyle: 'medium'
});
/** {@link formatDate}'s compact form ("Sep 1, 2026"), for chips and dense lists. */
function formatDateShort(date) {
	return shortDateFormatter.format(toDate(date));
}
var yearFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	year: 'numeric'
});
function formatYear(date) {
	return yearFormatter.format(toDate(date));
}
var timeFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});
function formatTime(date) {
	return timeFormatter.format(toDate(date));
}
function patchHeading(patch) {
	const date = formatDate(patch.date);
	const named = !/\d{2}-\d{2}-\d{4}/.test(patch.title);
	return {
		named,
		date,
		heading: named ? patch.title : date
	};
}
//#endregion
export {
	entityNamesMatch as _,
	formatDate as a,
	formatYear as c,
	patchHeading as d,
	plural as f,
	entityNameAliases as g,
	canonicalSlug as h,
	entityFragmentId as i,
	isItemCategory as l,
	toSlug as m,
	abilityFragmentId as n,
	formatDateShort as o,
	resolveHeroAbilitySlug as p,
	countBullets as r,
	formatTime as s,
	ITEM_CATEGORIES as t,
	makeSummary as u,
	findEntityName as v,
	indexEntityNames as y
};
