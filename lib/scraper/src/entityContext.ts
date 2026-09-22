import type {
	AssetIdentity,
	ContextProperty,
	ContextSection,
	ContextSectionKind,
	EntityContext
} from '@deadlog/utils';

export interface SourceProperty {
	value?: number | string | null;
	label?: string | null;
	prefix?: string | null;
	postfix?: string | null;
	scales?: boolean;
}

const strings = (value: unknown): string[] =>
	Array.isArray(value)
		? value.filter((key): key is string => typeof key === 'string' && key !== '')
		: [];

const records = (value: unknown): Record<string, unknown>[] =>
	Array.isArray(value)
		? value.filter(
				(entry): entry is Record<string, unknown> =>
					typeof entry === 'object' && entry !== null
			)
		: [];

export function displayedPropertyKeys(asset: {
	tooltip_sections?: unknown;
	tooltip_details?: unknown;
}): string[] {
	const shop = records(asset.tooltip_sections).flatMap((section) =>
		records(section.section_attributes).flatMap((attribute) => [
			...strings(attribute.important_properties),
			...strings(attribute.elevated_properties),
			...strings(attribute.properties)
		])
	);
	const [details] = records([asset.tooltip_details]);
	const ability = records(details?.info_sections).flatMap((section) => [
		...records(section.properties_block).flatMap((block) =>
			records(block.properties).flatMap((entry) =>
				strings([entry.important_property, entry.status_effect_value])
			)
		),
		...strings(section.basic_properties)
	]);
	return [
		...new Set([...strings(details?.additional_header_properties), ...shop, ...ability])
	];
}

export type SourceDescription = Partial<Record<string, string | null>>;

const NAMED_ENTITIES: Readonly<Record<string, string>> = {
	amp: '&',
	lt: '<',
	gt: '>',
	quot: '"',
	apos: "'",
	nbsp: ' '
};

const UNRESOLVED_TOKEN_RE = /\{[a-z]:[^}]*\}|#[A-Za-z]+_[A-Za-z_]+|&[a-z#0-9]+;/i;

function decodeEntities(text: string): string {
	return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, body: string) => {
		if (body[0] !== '#') return NAMED_ENTITIES[body.toLowerCase()] ?? match;
		const code =
			body[1].toLowerCase() === 'x' ? parseInt(body.slice(2), 16) : Number(body.slice(1));
		return Number.isInteger(code) && code > 0 && code <= 0x10ffff
			? String.fromCodePoint(code)
			: match;
	});
}

export function stripInlineSvg(markup: string): string {
	return markup.replace(/<svg\b[\s\S]*?<\/svg\s*>/gi, '');
}

export function markupParagraphs(markup: string | null | undefined): string[] {
	if (!markup) return [];
	const paragraphs = stripInlineSvg(markup)
		.replace(/\s+/g, ' ')
		.replace(/(?:<br\s*\/?>\s*)+/gi, '\n')
		.replace(/<[^>]*>/g, '')
		.split('\n')
		.map((paragraph) => decodeEntities(paragraph).replace(/\s+/g, ' ').trim())
		.filter(Boolean);
	return paragraphs.some((paragraph) => UNRESOLVED_TOKEN_RE.test(paragraph))
		? []
		: paragraphs;
}

export function descriptionText(markup: string | null | undefined): string | null {
	return markupParagraphs(markup).join(' ') || null;
}

const SECTION_SOURCES: readonly [string, ContextSectionKind, string | null][] = [
	['desc', 'description', null],
	['active', 'active', 'Active'],
	['passive', 'passive', 'Passive'],
	['t1_desc', 'tier1', 'Tier 1'],
	['t2_desc', 'tier2', 'Tier 2'],
	['t3_desc', 'tier3', 'Tier 3']
];

export function contextSections(
	description: SourceDescription | null | undefined
): ContextSection[] {
	const sections: ContextSection[] = [];
	const seen = new Set<string>();
	for (const [field, kind, label] of SECTION_SOURCES) {
		const paragraphs = markupParagraphs(description?.[field]);
		const text = paragraphs.join('\n');
		if (!text || seen.has(text)) continue;
		seen.add(text);
		sections.push({ kind, label, paragraphs });
	}
	return sections;
}

const VALUE_RE = /^(-?)(\d*\.?\d+)(m|s)?$/;
const UNIT_RE = /^[^{}<>#&]{0,20}$/;

export function contextProperty(
	key: string,
	source: SourceProperty
): ContextProperty | null {
	const label = source.label?.trim();
	if (!label || /[{}<>#]/.test(label)) return null;

	const match = VALUE_RE.exec(String(source.value ?? '').trim());
	if (!match) return null;
	const magnitude = Number(match[2]);
	if (!Number.isFinite(magnitude) || magnitude === 0) return null;

	const postfix = source.postfix?.trim() ?? '';
	const unit = match[3] && !postfix.startsWith(match[3]) ? match[3] : postfix;
	if (!UNIT_RE.test(unit)) return null;

	const prefix = source.prefix ?? '';
	let sign: string;
	if (match[1] === '-' || prefix === '-') sign = '-';
	else if (prefix === '+' || prefix === '{s:sign}') sign = '+';
	else if (prefix === '') sign = '';
	else return null;

	return {
		key,
		label,
		display: `${sign}${magnitude}`,
		unit,
		scales: source.scales === true
	};
}

export function contextProperties(
	properties: Readonly<Record<string, SourceProperty>> | null | undefined
): ContextProperty[] {
	return Object.entries(properties ?? {}).flatMap(([key, source]) => {
		const property = contextProperty(key, source);
		return property ? [property] : [];
	});
}

export interface ContextSource {
	description?: SourceDescription | null;
	properties?: Readonly<Record<string, SourceProperty>> | null;
}

export interface ContextProvenance {
	clientVersion: number;
	language: string;
	collectedAt: string;
}

export function buildEntityContext(
	identity: AssetIdentity,
	source: ContextSource,
	provenance: ContextProvenance | undefined
): EntityContext | null {
	const sections = contextSections(source.description);
	const properties = contextProperties(source.properties);
	if (sections.length === 0 && properties.length === 0) return null;
	return {
		identity,
		clientVersion: provenance?.clientVersion ?? null,
		language: provenance?.language ?? null,
		collectedAt: provenance?.collectedAt ?? null,
		sections,
		properties
	};
}
