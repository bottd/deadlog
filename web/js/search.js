// The search island: the header combobox, the filtered feed on `/`, and entity
// filtering on patch pages. Filters live in the URL (`?hero=a,b&item=c&q=…&major=true`)
// and are matched client-side against the static index tiers the build emits.
// `feed.rs` assembles the unfiltered pages with the same rules; the predicate parity
// test runs this module's `queryFeed` against the Rust reference.

export const MAX_QUERY_LENGTH = 200;
export const MAX_ENTITY_FILTERS = 20;
export const INITIAL_LOAD_COUNT = 15;
export const PAGE_SIZE = 12;
export const NO_MATCH_ENTITY_ID = -1;
const MAX_PAGE_SIZE = 100;
const MAX_OFFSET = 100_000;

// Names --------------------------------------------------------------------------------

const ARTICLE_RE = /^(the|a|an)\s+/;

export function decodeEntityName(name) {
	return name
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&apos;|&#39;/g, "'");
}

export function normalizeEntityName(name) {
	return decodeEntityName(name).toLowerCase().trim().replace(/\s+/g, ' ');
}

export function entityNameAliases(name) {
	const normalized = normalizeEntityName(name);
	const withoutArticle = normalized.replace(ARTICLE_RE, '');
	return withoutArticle !== normalized ? [normalized, withoutArticle] : [normalized];
}

export function entityNamesMatch(left, right) {
	const rightAliases = new Set(entityNameAliases(right));
	return entityNameAliases(left).some((alias) => rightAliases.has(alias));
}

export function indexEntityNames(entities, name) {
	const index = new Map();
	for (const entity of entities) {
		for (const alias of entityNameAliases(name(entity))) {
			if (!index.has(alias)) index.set(alias, entity);
		}
	}
	return index;
}

export function findEntityName(index, name) {
	for (const alias of entityNameAliases(name)) {
		const entity = index?.get(alias);
		if (entity !== undefined) return entity;
	}
	return undefined;
}

export function abilityFragmentId(name) {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function entityFragmentId(name) {
	return abilityFragmentId(entityNameAliases(name).at(-1) ?? '');
}

export function changePath(slug) {
	return '/change/' + slug.split('/').map(encodeURIComponent).join('/');
}

const plural = (count, one, many = `${one}s`) => (count === 1 ? one : many);

export function makeSummary(text, max = 140) {
	if (!text) return '';
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const cut = clean.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

const MONTHS = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'
];
let dateParts;

export function formatDate(date) {
	dateParts ??= new Intl.DateTimeFormat('en-US', {
		timeZone: 'America/Los_Angeles',
		month: 'numeric',
		day: 'numeric',
		year: 'numeric'
	});
	const parts = dateParts.formatToParts(new Date(date));
	const value = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);
	const day = value('day');
	const suffix = day >= 11 && day <= 13 ? 'th' : (['th', 'st', 'nd', 'rd'][day % 10] ?? 'th');
	return `${MONTHS[value('month') - 1]} ${day}${suffix}, ${value('year')}`;
}

export function patchHeading(patch) {
	const date = formatDate(patch.date);
	const named = !/\d{2}-\d{2}-\d{4}/.test(patch.title);
	return { named, date, heading: named ? patch.title : date };
}

function authorInitials(author) {
	const words = author
		.split(/\s+/)
		.flatMap((word) => word.split(/(?<=\p{Ll})(?=\p{Lu})/u))
		.filter((word) => /^[\p{L}\p{N}]/u.test(word));
	const [first, second] = words;
	if (!first) return '?';
	const chars = [...first];
	return (second ? chars[0] + [...second][0] : chars.slice(0, 2).join('')).toUpperCase();
}

// Filters ------------------------------------------------------------------------------

function parseCSV(value) {
	if (!value) return [];
	return value
		.split(',')
		.map((entry) => entry.trim())
		.filter(Boolean);
}

function normalizeEntityFilters(names = []) {
	const seen = new Set();
	return names
		.map((name) => name.trim().replace(/\s+/g, ' '))
		.filter((name) => {
			const key = entityNameAliases(name).at(-1) ?? '';
			if (!key || seen.has(key)) return false;
			seen.add(key);
			return true;
		});
}

export function normalizeFilters(filters = {}) {
	return {
		hero: normalizeEntityFilters(filters.hero),
		item: normalizeEntityFilters(filters.item),
		q: filters.q?.trim() ?? '',
		major: filters.major === true
	};
}

export function parseFilters(params) {
	const filters = normalizeFilters({
		hero: parseCSV(params.get('hero')),
		item: parseCSV(params.get('item')),
		q: params.get('q') ?? '',
		major: params.get('major') === 'true'
	});
	filters.hero = filters.hero.slice(0, MAX_ENTITY_FILTERS);
	filters.item = filters.item.slice(0, MAX_ENTITY_FILTERS);
	return filters;
}

export function filtersToSearchParams(filters) {
	filters = normalizeFilters(filters);
	const params = new URLSearchParams();
	if (filters.hero.length) params.set('hero', filters.hero.join(','));
	if (filters.item.length) params.set('item', filters.item.join(','));
	if (filters.q) params.set('q', filters.q);
	if (filters.major) params.set('major', 'true');
	return params;
}

const currentFilters = () => parseFilters(new URLSearchParams(location.search));
const activeFilterCount = (filters) =>
	filters.hero.length + filters.item.length + (filters.q ? 1 : 0) + (filters.major ? 1 : 0);
/** `major` alone is not searching — it narrows the same feed. */
const isSearching = (filters) => filters.hero.length > 0 || filters.item.length > 0 || filters.q !== '';

// Feed assembly (a port of app/src/lib/feed/assemble.ts) -------------------------------

export function resolveEntityIds(names, entities) {
	const byName = indexEntityNames(entities, (entity) => entity.name);
	return [...new Set(names.map((name) => findEntityName(byName, name)?.id ?? NO_MATCH_ENTITY_ID))];
}

export function splitPage(rows, limit) {
	return { rows: rows.slice(0, limit), hasMore: rows.length > limit };
}

export function searchExcerpt(text, query, max = 240) {
	const clean = (text ?? '').replace(/\s+/g, ' ').trim();
	const match = clean.toLowerCase().indexOf(query.toLowerCase());
	if (match < 0) return makeSummary(clean, max);
	const context = Math.min(60, Math.max(0, Math.floor((max - query.length) / 2)));
	const start = Math.max(0, match - context);
	const wordBoundary = clean.indexOf(' ', start);
	const boundary = start > 0 && wordBoundary >= 0 && wordBoundary < match ? wordBoundary + 1 : start;
	return `${boundary > 0 ? '…' : ''}${makeSummary(clean.slice(boundary), max)}`;
}

function clamp(value, minimum, maximum) {
	if (!Number.isFinite(value)) return minimum;
	return Math.min(maximum, Math.max(minimum, Math.trunc(value)));
}

function matchesText(row, text, q) {
	const needle = q.toLowerCase();
	return row.title.toLowerCase().includes(needle) || (text[row.id] ?? '').toLowerCase().includes(needle);
}

function matchesEntities(refs, required) {
	if (required.length === 0) return true;
	const present = new Set(refs.map((ref) => ref.id));
	return required.every((id) => present.has(id));
}

export function queryFeed(index, text, filters, { limit = 5, offset = 0 } = {}) {
	const { heroIds, itemIds, q, majorOnly } = filters;
	if (q && !text) throw new Error('queryFeed needs the text tier when a search query is set');
	const size = clamp(limit, 1, MAX_PAGE_SIZE);
	const start = clamp(offset, 0, MAX_OFFSET);
	const matched = index.rows.filter(
		(row) =>
			(!q || matchesText(row, text ?? {}, q)) &&
			(!majorOnly || row.majorUpdate) &&
			matchesEntities(row.heroes, heroIds) &&
			matchesEntities(row.items, itemIds)
	);
	return splitPage(matched.slice(start, start + size + 1), size);
}

const byName = (left, right) => (left.alt < right.alt ? -1 : left.alt > right.alt ? 1 : 0);

function iconsFor(row, entities) {
	const heroes = [];
	for (const ref of row.heroes) {
		const hero = entities.heroes.get(ref.id);
		if (!hero) continue;
		heroes.push({ id: hero.id, src: hero.src, alt: hero.name, slug: hero.slug, heroType: hero.heroType, changeCount: ref.changeCount, type: 'hero' });
	}
	const items = [];
	for (const ref of row.items) {
		const item = entities.items.get(ref.id);
		if (!item) continue;
		items.push({ id: item.id, src: item.src, alt: item.name, slug: item.slug, changeCount: ref.changeCount, type: 'item', itemCategory: item.itemCategory });
	}
	return { heroes: heroes.sort(byName), items: items.sort(byName) };
}

function lookupFor(index) {
	return {
		heroes: new Map(index.heroes.map((entity) => [entity.id, entity])),
		items: new Map(index.items.map((entity) => [entity.id, entity]))
	};
}

export function assembleSummaries(rows, index, sources, { heroIds = [], itemIds = [], q = '', isFirstPage = false } = {}) {
	const { text, groups } = sources;
	if (heroIds.length + itemIds.length > 0 && !groups) {
		throw new Error('assembleSummaries needs the groups tier when entities are selected');
	}
	const entities = lookupFor(index);
	const selected = (icon) => (icon.type === 'hero' ? heroIds : itemIds).includes(icon.id);
	const searching = heroIds.length + itemIds.length > 0 || q !== '';
	const featureFirst = isFirstPage && !searching;

	return rows.map((entry, position) => {
		const all = iconsFor(entry, entities);
		const limit = featureFirst && position === 0 ? 14 : 6;
		let remainingExcerpts = 6;
		const matches = [...all.heroes, ...all.items].filter(selected).map((icon) => {
			const changes = (groups?.[`${entry.id}:${icon.type}:${icon.id}`] ?? [])
				.flatMap((group) => group.bullets.map((bullet) => ({ ability: group.ability, text: bullet })))
				.slice(0, Math.min(3, remainingExcerpts))
				.map((change) => ({ ...change, text: makeSummary(change.text, 320) }));
			remainingExcerpts -= changes.length;
			return { id: icon.id, type: icon.type, name: icon.alt, slug: icon.slug, changeCount: icon.changeCount, changes };
		});
		return {
			id: entry.id,
			slug: entry.slug,
			title: entry.title,
			date: entry.date,
			author: entry.author,
			authorImage: entry.authorImage,
			previewImage: entry.previewImage,
			majorUpdate: entry.majorUpdate,
			summary: q ? searchExcerpt(text?.[entry.id] ?? '', q) : matches.length ? '' : entry.summary,
			icons: { heroes: searching ? [] : all.heroes.slice(0, limit), items: searching ? [] : all.items.slice(0, limit) },
			counts: { heroes: all.heroes.length, items: all.items.length },
			matches
		};
	});
}

export function feedWindow(page) {
	return page === 0
		? { limit: INITIAL_LOAD_COUNT, offset: 0 }
		: { limit: PAGE_SIZE, offset: INITIAL_LOAD_COUNT + (page - 1) * PAGE_SIZE };
}

// Tiers --------------------------------------------------------------------------------

const cache = new Map();
function fetchJson(path) {
	let pending = cache.get(path);
	if (!pending) {
		pending = fetch(path).then((response) => {
			if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
			return response.json();
		});
		pending.catch(() => cache.delete(path));
		cache.set(path, pending);
	}
	return pending;
}
const loadIndex = () => fetchJson('/feed-index.json');
const loadText = () => fetchJson('/feed-text.json');
const loadGroups = () => fetchJson('/feed-groups.json');
const loadEntities = () => fetchJson('/search-entities.json');

// Markup -------------------------------------------------------------------------------

const escape = (value) =>
	String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const ICONS = {
	'arrow-right': '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
	search: '<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>',
	x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
	frown: '<path d="M15 10V9"></path><path d="M9 10V9"></path><path d="M9 16a5 5 0 016 0"></path><circle cx="12" cy="12" r="10"></circle>'
};
const icon = (name, classes) =>
	`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name} lucide-icon ${classes}" aria-hidden="true">${ICONS[name]}</svg>`;

function cornerAccents(tlSize, brSize, tlColor, brColor, tlHover, brHover, thickness) {
	const bar = (corner, tone, hover, height, width) =>
		`<div class="absolute ${corner} ${tone}${hover ? ` ${hover}` : ''} transition-colors duration-300" style="height: ${height}; width: ${width};" aria-hidden="true"></div>`;
	return (
		bar('top-0 left-0', tlColor, tlHover, tlSize, thickness) +
		bar('top-0 left-0', tlColor, tlHover, thickness, tlSize) +
		(brSize ? bar('right-0 bottom-0', brColor, brHover, brSize, thickness) + bar('right-0 bottom-0', brColor, brHover, thickness, brSize) : '')
	);
}

function highlight(text, query) {
	if (!query) return escape(text);
	const pattern = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
	return text
		.split(pattern)
		.map((part, index) =>
			index % 2 === 1 ? `<mark class="bg-primary/15 text-primary rounded-sm px-0.5">${escape(part)}</mark>` : escape(part)
		)
		.join('');
}

function cardHrefs(patch, filters) {
	const params = filtersToSearchParams(filters);
	const query = params.toString();
	const href = `${changePath(patch.slug)}${query ? `?${query}` : ''}`;
	return {
		href,
		entityHref(entity) {
			const fragment = `#${entityFragmentId(entity.alt)}`;
			const selected = entity.type === 'hero' ? filters.hero : filters.item;
			if (filters.hero.length + filters.item.length === 0) return `${href}${fragment}`;
			const entityParams = new URLSearchParams(params);
			if (!selected.some((name) => entityNamesMatch(name, entity.alt))) {
				const retained = selected.slice(0, MAX_ENTITY_FILTERS - 1);
				entityParams.set(entity.type, [...retained, entity.alt].join(','));
			}
			return `${changePath(patch.slug)}?${entityParams.toString()}${fragment}`;
		}
	};
}

function cardView(patch, featured = false) {
	const rows = [
		{ type: 'heroes', label: 'Heroes', tone: 'text-primary', list: patch.icons.heroes, extra: Math.max(0, patch.counts.heroes - patch.icons.heroes.length) },
		{ type: 'items', label: 'Items', tone: 'text-signal', list: patch.icons.items, extra: Math.max(0, patch.counts.items - patch.icons.items.length) }
	].filter((row) => row.list.length > 0);
	const counts = [
		{ n: patch.counts.heroes, noun: plural(patch.counts.heroes, 'hero', 'heroes'), tone: 'text-primary' },
		{ n: patch.counts.items, noun: plural(patch.counts.items, 'item'), tone: 'text-signal' }
	].filter((count) => count.n > 0);
	const phrases = counts.map((count) => `${count.n} ${count.noun}`);
	const { named, date, heading } = patchHeading(patch);
	return {
		rows,
		counts,
		totals: phrases.join(' · '),
		initials: authorInitials(patch.author),
		heading,
		date,
		named,
		accessibleLabel:
			`${featured ? 'Latest patch, ' : ''}${named ? `${patch.title}, ${date}` : date}, by ${patch.author}` +
			`${phrases.length ? `, affecting ${phrases.join(' and ')}` : ''}. View full patch.`
	};
}

function cardMatches(patch, filters) {
	if (!isSearching(filters)) return { searching: false, changeCount: null, label: null, tone: 'text-primary' };
	const entities = patch.matches;
	const counted = entities.filter((entity) => entity.changeCount != null);
	const changeCount = counted.length ? counted.reduce((total, entity) => total + (entity.changeCount ?? 0), 0) : null;
	return {
		searching: true,
		changeCount,
		label:
			changeCount === null
				? null
				: entities.length === 1
					? `${entities[0].name} ${plural(changeCount, 'change')}`
					: `matched ${plural(changeCount, 'change')}`,
		tone: entities.every((entity) => entity.type === 'item') ? 'text-signal' : 'text-primary'
	};
}

function avatar(patch, view, classes, fallbackClasses) {
	return `<div class="relative flex shrink-0 overflow-hidden rounded-full ${classes}" data-avatar><span class="flex size-full items-center justify-center rounded-full bg-muted ${fallbackClasses}" text="muted-foreground" font="mono">${escape(view.initials)}</span><img class="absolute inset-0 aspect-square size-full" alt="" src="${escape(patch.authorImage)}" loading="lazy" decoding="async" onerror="this.remove()"></div>`;
}

export function patchCard(patch, filters) {
	const matches = cardMatches(patch, filters);
	const view = cardView(patch);
	const links = cardHrefs(patch, filters);
	const major = !!patch.majorUpdate;
	const q = filters.q;
	let html = `<div class="clip-corner-sm group bg-card hover:bg-card-accent/30 relative flex h-full flex-col overflow-hidden border transition-colors duration-200 ${matches.searching ? '' : 'min-h-[200px]'} ${major ? 'border-primary/50 hover:border-primary/80' : 'border-border hover:border-signal/45'}">`;
	html += major
		? cornerAccents('1.5rem', '1rem', 'bg-primary', 'bg-primary/30', '', 'group-hover:bg-primary/60', '0.125rem')
		: cornerAccents('1.5rem', '1rem', 'bg-signal/45', 'bg-signal/20', 'group-hover:bg-signal', 'group-hover:bg-signal/60', '0.125rem');
	if (!matches.searching && patch.previewImage) {
		html += ` <div border="border/70 b" relative h="28" shrink="0" class="overflow-hidden"><img data-patch-preview src="${escape(patch.previewImage)}" alt="" width="640" height="360" loading="lazy" decoding="async" class="size-full object-cover transition-transform duration-500 group-hover:scale-105"> <div absolute bg="gradient-to-b" class="from-card/0 via-card/10 to-card/55 pointer-events-none inset-0" aria-hidden="true"></div></div>`;
	}
	html += ` <div absolute bg="gradient-to-br" class="from-primary/0 group-hover:from-primary/5 pointer-events-none inset-0 to-transparent transition-all duration-200"></div> <div z="10" flex="~ 1 col" gap="3" p="4"><div><div flex="~" m="b-1.5" items="center" gap="2"><h2 text="foreground base" font="semibold" class="group-hover:text-primary line-clamp-2 min-w-0 tracking-tight transition-colors duration-300"><a href="${escape(links.href)}" aria-label="${escape(view.accessibleLabel)}" class="${matches.searching ? 'ui-focus-ring rounded-sm' : 'stretched-link'}">${escape(view.heading)}</a></h2>`;
	if (major) html += ` <span border="primary/40 ~" bg="primary/15" text="primary" m="l-auto" shrink="0" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm">Major</span>`;
	html += `</div> <div flex="~" text="muted-foreground xs" items="center" gap="2">${avatar(patch, view, 'border-primary/20 group-hover:border-primary/50 size-6 border transition-all duration-300', 'text-[11px] tracking-wide')} <span truncate>${escape(patch.author)}</span>${view.named ? ` <span aria-hidden="true">&middot;</span> <time datetime="${escape(patch.date)}">${escape(view.date)}</time>` : ''}</div></div>`;
	if (patch.matches.length > 0) {
		html += ` <div class="space-y-4" data-matched-changes>`;
		for (const match of patch.matches) {
			html += `<section aria-label="${escape(match.name)} changes"><div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 class="text-sm font-semibold">${escape(match.name)}</h3> <a href="/${match.type}/${escape(match.slug)}" aria-label="${escape(match.name)} full history" class="ui-focus-ring text-signal relative z-10 inline-flex min-h-11 items-center gap-1 rounded-sm text-xs underline-offset-4 hover:underline">Full history ${icon('arrow-right', 'size-3.5')}</a></div>`;
			if (match.changes.length) {
				html += ` <ul class="max-w-[72ch] space-y-2 text-sm leading-relaxed">`;
				for (const change of match.changes) {
					const prefix =
						change.ability && !change.text.toLowerCase().startsWith(change.ability.toLowerCase())
							? `<span class="text-foreground font-medium">${escape(change.ability)}: </span>`
							: '';
					html += `<li>${prefix}${highlight(change.text, q)}</li>`;
				}
				html += `</ul>`;
				if (match.changeCount !== null && match.changeCount > match.changes.length) {
					html += ` <p class="text-muted-foreground mt-2 text-xs">${match.changeCount - match.changes.length} more changes in the full patch</p>`;
				}
			} else {
				html += ` <p class="text-muted-foreground text-sm">${match.changeCount === null ? 'Mentioned in this patch; see the full notes for context.' : 'See the full patch for these changes.'}</p>`;
			}
			html += `</section>`;
		}
		html += `</div>`;
	}
	if (patch.summary) {
		html += ` <p class="text-muted-foreground max-w-[72ch] leading-relaxed ${matches.searching ? 'text-sm' : 'line-clamp-2 text-xs'}">${highlight(patch.summary, q)}</p>`;
	}
	for (const row of view.rows) {
		const items = row.type === 'items';
		html += ` <div class="flex flex-wrap items-center gap-1 sm:flex-nowrap sm:gap-0 sm:[&amp;>a+a]:-ml-1.5">`;
		for (const entity of row.list) {
			html += `<a href="${escape(links.entityHref(entity))}" aria-label="Jump to ${escape(entity.alt)} in this patch" relative z="10" rounded="md" class="group/icon ui-focus-outline flex size-11 items-center justify-center transition-all duration-200 sm:size-7 hover:z-20 hover:-translate-y-0.5 hover:scale-110"><img src="${escape(entity.src)}" alt="" width="28" height="28" loading="lazy" decoding="async" class="border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-colors duration-200 ${items ? 'group-hover/icon:border-signal/60' : 'group-hover/icon:border-primary/50'}"></a>`;
		}
		if (row.extra > 0) {
			html += ` <span class="bg-muted/80 text-muted-foreground flex size-11 items-center justify-center rounded-md font-mono text-[11px] font-semibold transition-all duration-300 sm:ml-1.5 sm:size-7 ${items ? 'group-hover:bg-signal/15 group-hover:text-signal' : 'group-hover:bg-primary/15 group-hover:text-primary'}">+${row.extra}</span>`;
		}
		html += `</div>`;
	}
	html += ` <div flex="~" border="border/50 t" m="t-auto" items="center" gap="3" p="t-3" text="xs">`;
	if (matches.label) {
		html += `<span flex="~" items="baseline" gap="1"><span class="font-mono font-bold ${matches.tone}">${matches.changeCount}</span> <span text="foreground">${escape(matches.label)}</span></span> <span text="muted-foreground" class="ml-auto hidden text-xs sm:inline">${escape(view.totals)} in full patch</span>`;
	} else {
		for (const count of view.counts) {
			html += `<span flex="~" items="baseline" gap="1"><span class="font-mono font-bold ${count.tone}">${count.n}</span> <span text="muted-foreground">${count.noun}</span></span>`;
		}
	}
	html += matches.searching
		? ` <a href="${escape(links.href)}" class="ui-focus-ring text-signal ml-auto inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-sm text-xs">Full patch ${icon('arrow-right', 'size-3.5')}</a>`
		: ` ${icon('arrow-right', 'text-signal ml-auto size-3.5')}`;
	html += `</div></div></div>`;
	return html;
}

function featuredCard(patch, filters) {
	const view = cardView(patch, true);
	const links = cardHrefs(patch, filters);
	let html = `<div class="mb-7"><article class="clip-corner-lg card-glow border-primary/40 bg-card group relative overflow-hidden border md:flex">${cornerAccents('2rem', '1.5rem', 'bg-primary', 'bg-signal/60', '', '', '1px')} <div class="min-w-0 flex-1 p-5 sm:p-6"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><h2 class="font-display text-foreground group-hover:text-primary text-3xl leading-tight font-medium tracking-wide transition-colors sm:text-4xl"><a href="${escape(links.href)}" aria-label="${escape(view.accessibleLabel)}" class="stretched-link">${escape(view.heading)}</a></h2> <span class="bg-primary/10 text-primary rounded-sm px-2 py-1 font-mono text-xs">Latest Patch</span></div> <p class="text-muted-foreground mt-2 text-xs">By ${escape(patch.author)}${view.named ? ` · <time datetime="${escape(patch.date)}">${escape(view.date)}</time>` : ''}</p>`;
	if (patch.summary) html += ` <p class="text-foreground/90 mt-4 max-w-[72ch] text-sm leading-relaxed">${escape(patch.summary)}</p>`;
	if (view.rows.length) {
		html += ` <div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">`;
		for (const row of view.rows) {
			html += `<div class="flex items-center gap-3"><span class="w-12 shrink-0 text-xs ${row.tone}">${row.label}</span> <div class="flex flex-wrap gap-1.5">`;
			for (const entity of row.list) {
				html += `<a href="${escape(links.entityHref(entity))}" aria-label="Jump to ${escape(entity.alt)} in this patch" class="ui-focus-outline relative z-10 flex size-11 items-center justify-center rounded-md hover:bg-signal/10"><img src="${escape(entity.src)}" alt="" width="32" height="32" loading="lazy" decoding="async" class="border-subtle bg-background size-8 rounded border object-cover"></a>`;
			}
			html += `</div> ${row.extra > 0 ? `<span class="text-muted-foreground font-mono text-xs">+${row.extra}</span>` : ''}</div>`;
		}
		html += `</div>`;
	}
	html += ` <div class="border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3"><span class="text-muted-foreground text-xs">${escape(view.totals)}</span> <span class="text-signal inline-flex items-center gap-2 text-sm">View full patch ${icon('arrow-right', 'size-4')}</span></div></div>`;
	if (patch.previewImage) {
		html += ` <div class="relative h-40 shrink-0 md:h-auto md:w-64"><img data-patch-preview src="${escape(patch.previewImage)}" alt="" width="640" height="360" decoding="async" fetchpriority="high" class="absolute inset-0 size-full object-cover"></div>`;
	}
	return html + `</article> <p class="text-muted-foreground mt-6 text-sm">Previous patches</p></div>`;
}

// Page wiring ---------------------------------------------------------------------------

let helpers = { toast() {}, markNew() {}, commitVisit() {}, hasFilters: () => false };
let entities = null;
let renderFeed = null;

function navigate(filters) {
	const query = filtersToSearchParams(filters).toString();
	const target = query ? `/?${query}` : '/';
	if (location.pathname === '/' && renderFeed) {
		history.pushState(null, '', target);
		renderFeed();
		renderHeader();
	} else {
		location.assign(target);
	}
}

function update(values) {
	const next = normalizeFilters({ ...currentFilters(), ...values });
	const dropped =
		Math.max(0, next.hero.length - MAX_ENTITY_FILTERS) + Math.max(0, next.item.length - MAX_ENTITY_FILTERS);
	next.hero = next.hero.slice(0, MAX_ENTITY_FILTERS);
	next.item = next.item.slice(0, MAX_ENTITY_FILTERS);
	next.q = next.q.slice(0, MAX_QUERY_LENGTH);
	if (dropped > 0) {
		helpers.toast(
			`Filter limit reached — ${MAX_ENTITY_FILTERS} heroes and ${MAX_ENTITY_FILTERS} items max. ${dropped} ${plural(dropped, 'selection')} not applied.`,
			'error'
		);
	}
	navigate(next);
}

function toggleEntity(kind, name) {
	const filters = currentFilters();
	const names = kind === 'hero' ? filters.hero : filters.item;
	const next = names.some((candidate) => entityNamesMatch(candidate, name))
		? names.filter((candidate) => !entityNamesMatch(candidate, name))
		: [...names, name];
	update(kind === 'hero' ? { hero: next } : { item: next });
}

// Header: combobox, mobile sheet, active filter chips ----------------------------------

function mergedList(needleText) {
	const filters = currentFilters();
	const needle = needleText.toLowerCase();
	const matchesInput = (name) => !needle || name.toLowerCase().includes(needle);
	const selectedHeroes = indexEntityNames(filters.hero, (name) => name);
	const selectedItems = indexEntityNames(filters.item, (name) => name);
	const heroes = entities.heroes
		.filter((hero) => matchesInput(hero.name))
		.map((hero) => ({ type: 'hero', data: hero, key: `hero-${hero.id}`, isSelected: findEntityName(selectedHeroes, hero.name) !== undefined }));
	const items = entities.items
		.filter((item) => matchesInput(item.name))
		.map((item) => ({ type: 'item', data: item, key: `item-${item.id}`, isSelected: findEntityName(selectedItems, item.name) !== undefined }));
	return [...heroes, ...items].sort((a, b) => {
		if (a.isSelected && !b.isSelected) return -1;
		if (!a.isSelected && b.isSelected) return 1;
		return a.data.name.localeCompare(b.data.name);
	});
}

const TONE = {
	hero: { label: 'Hero', text: 'text-primary', dot: 'bg-primary', subtle: 'bg-primary/10', badge: 'badge-default' },
	item: { label: 'Item', text: 'text-signal', dot: 'bg-signal', subtle: 'bg-signal/10', badge: 'badge-signal' }
};

function optionMarkup(prefix, entity, active) {
	const tone = TONE[entity.type];
	const name = entity.data.name;
	return `<div role="option" id="${prefix}-option-${entity.key}" data-value="${entity.key}" aria-selected="${entity.isSelected}" aria-label="${escape(`${name}, ${tone.label}, ${entity.isSelected ? 'selected' : 'not selected'}`)}"${active ? ' data-selected=""' : ''} class="menu-item hover:bg-secondary data-[selected]:bg-secondary flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2 transition-colors ${entity.isSelected ? tone.subtle : ''}"><img src="${escape(entity.data.image)}" alt="" width="32" height="32" loading="lazy" decoding="async" border="border ~" bg="card" class="size-8 rounded object-cover"> <span flex="1" class="min-w-0"><span class="block truncate text-sm ${entity.isSelected ? `font-medium ${tone.text}` : 'text-foreground'}">${escape(name)}</span> <span text="muted-foreground" block font="mono" uppercase class="text-xs tracking-wide">${tone.label}</span></span>${entity.isSelected ? ` <span class="font-mono text-xs tracking-wide ${tone.text}">Selected</span> <span class="size-2 rounded-full ${tone.dot}" aria-hidden="true"></span>` : ''}</div>`;
}

function searchForm(root, { mobile, onclose }) {
	const prefix = mobile ? 'mobile' : 'desktop';
	const listId = `${prefix}-filter-options`;
	const form = root.querySelector('[data-search-form]');
	const input = root.querySelector('[data-search-input]');
	const panel = document.createElement('div');
	panel.className = mobile
		? 'mt-3 min-h-0 overflow-y-auto'
		: 'filter-dropdown bg-popover border-border absolute inset-x-0 top-full mt-2 max-h-[65vh] overflow-y-auto rounded-md border shadow-xl';
	panel.hidden = !mobile;
	root.append(panel);
	let backdrop = null;
	if (!mobile) {
		backdrop = document.createElement('button');
		backdrop.type = 'button';
		backdrop.className = 'fixed inset-0 z-40';
		backdrop.setAttribute('aria-label', 'Close filter options');
		backdrop.tabIndex = -1;
		backdrop.hidden = true;
		backdrop.addEventListener('click', () => close());
		root.parentElement.append(backdrop);
	}
	let options = [];
	let active = '';

	const shown = () => mobile || !panel.hidden;
	const setOpen = (open) => {
		if (mobile) return;
		panel.hidden = !open;
		backdrop.hidden = !open;
		render();
	};
	const close = () => {
		setOpen(false);
		onclose?.();
	};

	function render() {
		const merged = mergedList(input.value.trim() ? input.value : '');
		options = merged.slice(0, 60);
		if (!options.some((option) => option.key === active)) active = options[0]?.key ?? '';
		input.setAttribute('aria-expanded', String(shown()));
		if (shown()) input.setAttribute('aria-controls', listId);
		else input.removeAttribute('aria-controls');
		if (shown() && active) input.setAttribute('aria-activedescendant', `${prefix}-option-${active}`);
		else input.removeAttribute('aria-activedescendant');
		if (!shown()) return;
		const histories = input.value.trim() ? options.slice(0, 3) : [];
		let html = '';
		if (histories.length) {
			html += `<nav aria-label="Entity histories" class="border-subtle border-b p-3"><p class="text-muted-foreground mb-1 text-xs">Open full change history</p><div class="flex flex-wrap gap-x-4 gap-y-1">${histories
				.map(
					(entity) =>
						`<a href="/${entity.type}/${escape(entity.data.slug)}" class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 text-sm underline-offset-4 hover:underline">${escape(entity.data.name)} ${icon('arrow-right', 'size-3.5')}</a>`
				)
				.join('')}</div></nav>`;
		}
		html += `<div role="listbox" id="${listId}" aria-label="Available hero and item filters" aria-multiselectable="true" class="max-h-80 overflow-y-auto p-2">`;
		html += options.length
			? `<div role="group" aria-labelledby="${prefix}-group-heading" class="overflow-hidden p-1 text-foreground"><div id="${prefix}-group-heading" class="text-muted-foreground px-2 py-1.5 text-xs font-medium">Filter patches by hero or item</div>${options.map((option) => optionMarkup(prefix, option, option.key === active)).join('')}</div>`
			: `<div class="text-muted-foreground px-3 py-5 text-sm" role="presentation">No matching heroes or items. Press Enter to search patch text.</div>`;
		html += `</div><p class="text-muted-foreground border-subtle border-t px-3 py-2.5 text-xs leading-relaxed">Patches must match every selected hero, item, and keyword. ${merged.length > 60 ? `Type to narrow ${merged.length} matches.` : ''}</p>`;
		panel.innerHTML = html;
	}

	function choose(key) {
		const option = options.find((candidate) => candidate.key === key);
		if (!option) return;
		input.value = currentFilters().q;
		close();
		toggleEntity(option.type, option.data.name);
	}

	function move(step) {
		if (!options.length) return;
		const index = options.findIndex((option) => option.key === active);
		active = options[(index + step + options.length) % options.length].key;
		render();
		document.getElementById(`${prefix}-option-${active}`)?.scrollIntoView({ block: 'nearest' });
	}

	// The island loads on first focus, so the reader may already be typing.
	if (!input.value) input.value = currentFilters().q;
	input.addEventListener('focus', () => setOpen(true));
	input.addEventListener('input', () => {
		setOpen(true);
		render();
	});
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			event.stopPropagation();
			close();
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			setOpen(true);
			move(event.key === 'ArrowDown' ? 1 : -1);
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (options.length === 0 || !shown()) submit();
			else choose(active);
		}
	});
	panel.addEventListener('pointermove', (event) => {
		const option = event.target.closest('[role="option"]');
		if (option && option.dataset.value !== active) {
			active = option.dataset.value;
			for (const element of panel.querySelectorAll('[role="option"]')) {
				element.toggleAttribute('data-selected', element.dataset.value === active);
			}
			input.setAttribute('aria-activedescendant', option.id);
		}
	});
	panel.addEventListener('click', (event) => {
		const option = event.target.closest('[role="option"]');
		if (option) choose(option.dataset.value);
		else if (event.target.closest('a')) close();
	});
	function submit(event) {
		event?.preventDefault();
		close();
		update({ q: input.value.trim() });
	}
	form.addEventListener('submit', submit);
	if (document.activeElement === input) setOpen(true);
	else render();
	return { render, input };
}

function mobileSheet() {
	const trigger = document.querySelector('[data-search-open]');
	if (!trigger) return null;
	const dialog = document.createElement('dialog');
	dialog.className = 'sheet-dialog';
	dialog.setAttribute('aria-labelledby', 'mobile-search-title');
	dialog.setAttribute('aria-describedby', 'mobile-search-description');
	dialog.innerHTML = `<div class="sheet-bottom max-h-[85dvh] overflow-y-auto px-4 pb-6" data-state="open" style="padding-bottom: max(1.5rem, var(--safe-area-inset-bottom));"><button type="button" class="ui-focus-ring absolute end-2 top-2 z-10 flex size-11 items-center justify-center rounded-md op-70 transition-opacity hover:op-100" data-sheet-close>${icon('x', 'size-4')}<span class="sr-only">Close</span></button><div class="flex flex-col gap-1.5 p-4 pr-12"><h2 id="mobile-search-title" class="text-foreground font-semibold">Search all patch notes</h2><p id="mobile-search-description" class="text-muted-foreground text-sm">Find a hero's history or combine filters to narrow the archive.</p></div><div class="relative z-50" data-search-root="mobile"><form method="GET" action="/" class="border-border bg-card focus-within:border-signal flex min-h-11 items-center rounded-md border" data-search-form><label for="mobile-filter-input" class="sr-only">Hero, item, or keyword</label> <input id="mobile-filter-input" name="q" type="text" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded="true" autocomplete="off" maxlength="${MAX_QUERY_LENGTH}" placeholder="Search heroes, items, or patch text…" class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base outline-none" data-search-input> <button type="submit" aria-label="Search changelog" class="ui-focus-ring bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-r-md hover:opacity-90">${icon('search', 'size-5')}</button></form></div></div>`;
	document.body.append(dialog);
	const form = searchForm(dialog.querySelector('[data-search-root]'), {
		mobile: true,
		onclose: () => dialog.close()
	});
	openSheet = () => {
		form.input.value = currentFilters().q;
		form.render();
		dialog.showModal();
		trigger.setAttribute('aria-expanded', 'true');
	};
	dialog.addEventListener('close', () => trigger.setAttribute('aria-expanded', 'false'));
	dialog.querySelector('[data-sheet-close]').addEventListener('click', () => dialog.close());
	dialog.addEventListener('click', (event) => {
		if (event.target === dialog) dialog.close();
	});
	return form;
}

let forms = [];
let openSheet = () => {};

/** site.js owns the trigger, so a tap before the island loads still opens the sheet. */
export function openSearchSheet() {
	openSheet();
}
function renderHeader() {
	const filters = currentFilters();
	const count = activeFilterCount(filters);
	const badge = document.querySelector('[data-filter-count]');
	if (badge) {
		badge.hidden = count === 0;
		badge.textContent = count ? String(count) : '';
	}
	for (const form of forms) {
		if (document.activeElement !== form.input) form.input.value = filters.q;
		form.render();
	}
	const row = document.querySelector('[data-active-filters]');
	if (!row) return;
	row.hidden = count === 0;
	if (!count) {
		row.innerHTML = '';
		return;
	}
	const heroes = indexEntityNames(entities.heroes, (hero) => hero.name);
	const items = indexEntityNames(entities.items, (item) => item.name);
	const chips = [
		...filters.hero.map((name) => ({ kind: 'hero', name, entity: findEntityName(heroes, name) })),
		...filters.item.map((name) => ({ kind: 'item', name, entity: findEntityName(items, name) }))
	];
	let html = `<div class="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto" aria-label="Active filters">`;
	for (const chip of chips) {
		const tone = TONE[chip.kind];
		const name = chip.entity?.name ?? chip.name;
		html += `<button type="button" rounded="md" class="group/badge min-h-11 shrink-0 focus-visible:outline-none" aria-label="Remove ${tone.label} filter: ${escape(name)}" data-remove-kind="${chip.kind}" data-remove-name="${escape(chip.name)}"><span class="${tone.badge} group-focus-visible/badge:ring-signal/50 hover:shadow-primary/10 cursor-pointer transition-all duration-200 group-hover/badge:pr-2 group-hover/badge:shadow-md group-focus-visible/badge:ring-2">${chip.entity ? `<img src="${escape(chip.entity.image)}" alt="" width="18" height="18" loading="lazy" decoding="async" class="size-[18px] rounded object-cover transition-all duration-200 group-hover/badge:scale-110">` : ''}<span font="mono" uppercase class="text-[11px] tracking-wide">${tone.label}</span><span aria-hidden="true" op="50">/</span><span text="xs" font="medium" class="tracking-tight">${escape(name)}</span>${icon('x', 'size-3 opacity-60 transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:opacity-100')}</span></button>`;
	}
	if (filters.q) {
		html += `<button type="button" class="ui-focus-ring text-signal flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs" data-remove-q aria-label="Remove keyword filter: ${escape(filters.q)}">Keyword: “${escape(filters.q)}” ${icon('x', 'size-3.5')}</button>`;
	}
	if (filters.major) {
		html += `<button type="button" class="ui-focus-ring text-primary flex min-h-11 shrink-0 items-center gap-1 rounded px-2 text-xs" data-remove-major aria-label="Remove Major patches filter">Major patches ${icon('x', 'size-3.5')}</button>`;
	}
	html += `</div><button type="button" class="ui-focus-ring text-muted-foreground min-h-11 shrink-0 rounded px-2 text-xs hover:text-foreground" data-clear-all>Clear all</button>`;
	row.innerHTML = html;
}

function wireHeader() {
	const desktop = document.querySelector('[data-search-root="desktop"]');
	if (desktop) forms.push(searchForm(desktop, { mobile: false }));
	const mobile = mobileSheet();
	if (mobile) forms.push(mobile);
	const row = document.querySelector('[data-active-filters]');
	row?.addEventListener('click', (event) => {
		const chip = event.target.closest('button');
		if (!chip) return;
		if (chip.dataset.removeKind) toggleEntity(chip.dataset.removeKind, chip.dataset.removeName);
		else if (chip.hasAttribute('data-remove-q')) update({ q: '' });
		else if (chip.hasAttribute('data-remove-major')) update({ major: false });
		else if (chip.hasAttribute('data-clear-all')) navigate({});
	});
	row?.addEventListener('keydown', (event) => {
		const chip = event.target.closest('[data-remove-kind]');
		if (!chip || (event.key !== 'Enter' && event.key !== ' ')) return;
		event.preventDefault();
		event.stopPropagation();
		chip.click();
	});
	renderHeader();
}

// The filtered feed on `/` ------------------------------------------------------------

function wireFeed() {
	const feed = document.querySelector('[data-feed]');
	if (!feed || feed.dataset.page !== '0') return;
	const results = feed.querySelector('[data-feed-results]');
	const unfiltered = results.innerHTML;
	const title = feed.querySelector('[data-feed-title]');
	const lede = feed.querySelector('[data-feed-lede]');
	const progress = feed.querySelector('[data-filter-progress]');
	const status = feed.querySelector('[data-filter-status]');
	const rail = feed.querySelector('[data-hero-rail]');
	const railCap = feed.querySelector('[data-rail-cap]');
	const majorToggle = feed.querySelector('[data-major-toggle]');
	let generation = 0;

	rail?.addEventListener('click', (event) => {
		const button = event.target.closest('[data-hero]');
		if (button && !button.disabled) toggleEntity('hero', button.dataset.hero);
	});
	majorToggle?.addEventListener('click', () => update({ major: !currentFilters().major }));

	function renderRail(filters) {
		if (!rail) return;
		const buttons = [...rail.querySelectorAll('[data-hero]')];
		const atCap = filters.hero.length >= MAX_ENTITY_FILTERS;
		const selected = (button) => filters.hero.some((name) => entityNamesMatch(name, button.dataset.hero));
		buttons.sort(
			(a, b) => Number(selected(b)) - Number(selected(a)) || a.dataset.hero.localeCompare(b.dataset.hero)
		);
		for (const button of buttons) {
			const pressed = selected(button);
			const blocked = !pressed && atCap;
			button.setAttribute('aria-pressed', String(pressed));
			button.disabled = blocked;
			const label = blocked ? `${button.dataset.hero} — filter limit reached` : button.dataset.hero;
			button.title = label;
			button.setAttribute('aria-label', label);
			rail.append(button);
		}
		if (railCap) railCap.hidden = !atCap;
	}

	async function render() {
		const filters = currentFilters();
		const searching = isSearching(filters);
		const filterCount = activeFilterCount(filters);
		const current = ++generation;
		majorToggle?.setAttribute('aria-pressed', String(filters.major));
		renderRail(filters);
		title.textContent = searching ? 'Matching patch notes' : 'Deadlock Patch Notes & Changelog';
		lede.textContent = searching
			? 'Changes for your selected heroes, items, and keywords.'
			: 'Every gameplay update, hero adjustment, and item balance change.';
		if (filterCount === 0) {
			results.innerHTML = unfiltered;
			document.documentElement.removeAttribute('data-filtering');
			helpers.markNew(results.querySelector('[data-patch-grid]'), results.querySelector('[data-new-count]'));
			wireMore(results, null);
			return;
		}
		progress.hidden = false;
		status.textContent = 'Updating patches…';
		results.querySelector('[data-patch-grid]')?.setAttribute('aria-busy', 'true');
		try {
			const selects = filters.hero.length + filters.item.length > 0;
			const [index, text, groups] = await Promise.all([
				loadIndex(),
				filters.q ? loadText() : null,
				selects ? loadGroups() : null
			]);
			if (current !== generation) return;
			const scope = {
				heroIds: resolveEntityIds(filters.hero, index.heroes),
				itemIds: resolveEntityIds(filters.item, index.items),
				q: filters.q,
				majorOnly: filters.major
			};
			const load = (page) => {
				const window = feedWindow(page);
				const slice = queryFeed(index, text, scope, window);
				return {
					changelogs: assembleSummaries(slice.rows, index, { text, groups }, { ...scope, isFirstPage: window.offset === 0 }),
					hasMore: slice.hasMore
				};
			};
			const first = load(0);
			results.innerHTML = feedMarkup(first, filters, filterCount, searching);
			helpers.markNew(results.querySelector('[data-patch-grid]'), results.querySelector('[data-new-count]'));
			wireMore(results, { load, filters, searching, filterCount, pages: [first] });
		} catch (error) {
			if (current !== generation) return;
			results.innerHTML = `<div p="y-16"><div flex="~ col" items="center" gap="3" text="center" role="alert"><p text="destructive sm" font="medium">Failed to load patches.</p> <button type="button" border="destructive/30 ~" text="destructive xs" p="x-5 y-2" font="mono semibold" class="hover:bg-destructive/10" data-retry>Retry</button></div></div>`;
			results.querySelector('[data-retry]').addEventListener('click', render);
		} finally {
			if (current === generation) {
				progress.hidden = true;
				status.textContent = '';
				document.documentElement.removeAttribute('data-filtering');
			}
		}
	}

	function statusLine(changelogs, hasMore, filters, filterCount, searching) {
		if (filterCount === 0) return '';
		let html = `<p text="muted-foreground xs" m="b-4" font="mono" uppercase class="tracking-wider" role="status" aria-live="polite">${changelogs.length}${hasMore ? '+' : ''} matching ${hasMore ? 'patches' : plural(changelogs.length, 'patch', 'patches')}${filterCount > 1 ? ` · all ${filterCount} filters` : ''}`;
		if (searching && changelogs[0]) {
			html += ` <span class="mt-1 block normal-case">Latest matching patch: <time datetime="${escape(changelogs[0].date)}">${escape(formatDate(changelogs[0].date))}</time></span>`;
		}
		return html + `</p>`;
	}

	function feedMarkup(page, filters, filterCount, searching) {
		const changelogs = page.changelogs;
		if (!changelogs.length) {
			let message;
			if (filters.q) {
				const others = filterCount - 1;
				message = `Nothing matches <span text="foreground" font="mono">&ldquo;${escape(filters.q)}&rdquo;</span>${others > 0 ? ` and your other ${others} ${plural(others, 'filter')}` : ''}.`;
			} else {
				message = `No changelog entries match your ${filterCount === 1 ? 'filter' : `${filterCount} filters`}.`;
			}
			return `<div border="border/50 2" bg="card" relative p="12" text="center" class="clip-corner overflow-hidden" role="status">${cornerAccents('2rem', '', 'bg-muted-foreground/30', '', '', '', '1px')} <div flex="~" border="border ~" bg="muted/30" m="x-auto b-6" items="center" justify="center" class="clip-corner-sm size-20">${icon('frown', 'text-muted-foreground size-10')}</div> <p text="muted-foreground xs" m="b-2" font="mono" uppercase class="tracking-wide">No Results</p> <h2 font="display medium" text="foreground 2xl" m="b-3" class="tracking-wide">No changes found</h2> <p text="muted-foreground" m="x-auto b-8" class="max-w-md">${message}</p> <button type="button" border="primary/30 ~" bg="primary/10" text="primary sm" p="x-6 y-3" font="mono semibold" class="ui-focus-ring min-h-11 rounded-md transition-all hover:bg-primary/20 active:scale-[0.97]" data-clear-filters>Clear Filters</button></div>`;
		}
		const grid = searching ? changelogs : changelogs.slice(1);
		let html = statusLine(changelogs, page.hasMore, filters, filterCount, searching);
		if (!searching) html += featuredCard(changelogs[0], filters);
		html += `<p text="muted-foreground xs" m="b-4" items="center" gap="2" font="mono" class="tracking-wider uppercase" data-new-count hidden></p>`;
		html += `<div data-patch-grid gap="4" aria-busy="false" class="grid grid-cols-1 transition-opacity duration-200 ${searching ? 'max-w-3xl' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}">`;
		html += grid.map((patch) => cardWrapper(patch, filters)).join('');
		html += `</div><div flex="~ col" items="center" gap="4" p="y-12" aria-live="polite" aria-busy="false" data-feed-more></div>`;
		return html;
	}

	const cardWrapper = (patch, filters) =>
		`<div data-patch-card data-date="${escape(patch.date)}" h="full">${patchCard(patch, filters)}</div>`;

	const endOfLog = `<div flex="~" items="center" gap="4"><div bg="primary/30" h="px" w="16"></div> <p text="muted-foreground xs" font="mono" uppercase class="tracking-wider">End of Log</p> <div bg="primary/30" h="px" w="16"></div></div>`;

	function wireMore(container, state) {
		container.querySelector('[data-clear-filters]')?.addEventListener('click', () => navigate({}));
		if (!state) return;
		const more = container.querySelector('[data-feed-more]');
		const grid = container.querySelector('[data-patch-grid]');
		if (!more || !grid) return;
		let pageNumber = 0;
		let loading = false;
		const refresh = () => {
			const last = state.pages.at(-1);
			if (last.hasMore) {
				more.innerHTML = `<div data-load-more-sentinel h="px" w="full" aria-hidden="true"></div>`;
				observer.observe(more.firstElementChild);
			} else {
				more.innerHTML = endOfLog;
			}
		};
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting || loading) return;
				loading = true;
				observer.disconnect();
				pageNumber++;
				const page = state.load(pageNumber);
				state.pages.push(page);
				grid.insertAdjacentHTML('beforeend', page.changelogs.map((patch) => cardWrapper(patch, state.filters)).join(''));
				const all = state.pages.flatMap((entry) => entry.changelogs);
				const line = container.querySelector('[role="status"]');
				if (line) line.outerHTML = statusLine(all, page.hasMore, state.filters, state.filterCount, state.searching);
				helpers.markNew(grid, container.querySelector('[data-new-count]'));
				loading = false;
				refresh();
			},
			{ rootMargin: '0px 0px 200px 0px' }
		);
		refresh();
	}

	renderFeed = render;
	addEventListener('popstate', () => {
		render();
		renderHeader();
	});
	if (helpers.hasFilters()) render();
}

// Patch pages: `?hero=`/`?item=` narrows the notes to the selected entities -------------

function wirePatch() {
	const content = document.querySelector('[data-mog-content]');
	if (!content) return;
	const filters = currentFilters();
	if (filters.hero.length + filters.item.length === 0) return;
	const icons = JSON.parse(content.dataset.entities ?? '{"heroes":[],"items":[]}');
	const matchedHeroes = icons.heroes.filter((hero) => filters.hero.some((name) => entityNamesMatch(name, hero)));
	const matchedItems = icons.items.filter((item) => filters.item.some((name) => entityNamesMatch(name, item)));
	const banner = document.querySelector('[data-patch-filter]');
	const matched = [...matchedHeroes, ...matchedItems];
	if (banner) {
		banner.hidden = false;
		banner.querySelector('[data-filter-matched]').hidden = matched.length === 0;
		banner.querySelector('[data-filter-missing]').hidden = matched.length > 0;
		banner.querySelector('[data-filter-matched-label]').textContent = matched.join(', ');
		banner.querySelector('[data-filter-selected-label]').textContent = [...filters.hero, ...filters.item].join(', ');
	}
	const back = document.querySelector('[data-patch-back]');
	if (back) back.href = `/${location.search}`;
	if (!matched.length) return;
	const selected = new Set(matched.map(entityFragmentId));
	const isSelected = (element) =>
		(element.classList.contains('hero') || element.classList.contains('item')) &&
		[...element.classList].some((name) => selected.has(name));
	let section = null;
	const sections = [];
	for (const element of content.children) {
		if (element.matches('h2[data-mog-section]')) {
			section = { heading: element, members: [] };
			sections.push(section);
		} else section?.members.push(element);
	}
	for (const { heading, members } of sections) {
		const shown = members.filter(isSelected);
		heading.style.display = shown.length ? '' : 'none';
		for (const element of members) element.style.display = shown.includes(element) ? '' : 'none';
	}
	// The contents follow the notes: only the matched entities, and no General link.
	for (const link of document.querySelectorAll('[data-toc-general]')) link.hidden = true;
	for (const group of document.querySelectorAll('[data-toc-group]')) {
		const entries = [...group.querySelectorAll('[data-toc-entity]')];
		let count = 0;
		for (const entry of entries) {
			entry.hidden = !matched.includes(entry.dataset.tocEntity);
			if (!entry.hidden) count++;
		}
		group.hidden = count === 0;
		const counter = group.querySelector('[data-toc-count]');
		if (counter) counter.textContent = String(count);
	}
	const counts = document.querySelector('[data-patch-counts]');
	if (counts) {
		const parts = [
			[matchedHeroes.length, 'text-primary', matchedHeroes.length === 1 ? 'hero' : 'heroes'],
			[matchedItems.length, 'text-signal', matchedItems.length === 1 ? 'item' : 'items']
		].filter(([n]) => n > 0);
		counts.innerHTML = parts
			.map(([n, tone, noun]) => `<span flex="~" items="baseline" gap="1"><span class="font-mono font-bold ${tone}">${n}</span> <span text="muted-foreground">${noun}</span></span>`)
			.join(' ');
	}
}

export async function init(provided) {
	helpers = provided;
	wirePatch();
	try {
		entities = await loadEntities();
	} catch {
		entities = { heroes: [], items: [] };
	}
	wireHeader();
	wireFeed();
}
