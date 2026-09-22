import { parseMogAst, type MogNode } from 'vite-plugin-mog/parser';
import { decodeEntityName, entityNameAliases, type PatchStats } from '@deadlog/utils';
import { chain, isImage, plainText } from './ast';
import { parseEnrichment, type EntityEnrichment } from './entityEnrichment';
import { parseStats, type ImpactSchemaVersion } from './impactBlock';
import type { ChangelogEntities, EntityBlock, EntityChange } from './schema';

/** Only what `extractEntities` needs. Heading anchors come from the renderer's own toc
 * (see the `.mg` module's `toc` export), so deriving ids here would be a second rule. */
export interface TocEntry {
	level: number;
	title: string;
	/** Attribute chain on the marker, e.g. `['hero', 'abrams']`. */
	attrs: string[];
}

type Kind = 'hero' | 'item' | 'ability';

export const changeKey = (kind: Kind, name: string) =>
	`${kind}:${entityNameAliases(name).at(-1)}`;

interface Frame {
	kind: Kind;
	name: string | null;
	node: MogNode;
}

export interface ParsedStructure {
	/** The document's root-level `attr` blocks, as plain values. */
	metadata: Record<string, unknown>;
	toc: TocEntry[];
	changes: EntityChange[];
	/** Only images outside every block — an entity's own portrait is chrome, not content. */
	images: string[];
	blocks: EntityBlock[];
	stats: PatchStats | null;
	metadataLines: [start: number, end: number] | null;
	/** Positions use the same group/bullet indices as `changes`, never a second walk. */
	bullets: ParsedBullet[];
	readingBlocks: {
		kind: 'hero' | 'item';
		name: string;
		ability: string | null;
		startLine: number;
		endLine: number;
		depth: number;
	}[];
}

export interface ParsedBullet {
	kind: 'hero' | 'item';
	name: string;
	ability: string | null;
	groupIndex: number;
	bulletIndex: number;
	text: string;
	startLine: number;
	endLine: number;
	depth: number;
}

function entityBlock(
	frame: Frame,
	name: string,
	type: 'hero' | 'item',
	version: ImpactSchemaVersion
): EntityBlock {
	const { node } = frame;
	const attrBlocks = node.attributes?.blocks ?? [];
	const keys = (node.attributes?.children ?? []).map((child) => child.name);
	if (attrBlocks.length > 1) {
		throw new Error(`${name}: an entity block takes one attr block`);
	}
	if (new Set(keys).size !== keys.length) {
		throw new Error(`${name}: an attr key is set more than once`);
	}
	let enrichment: EntityEnrichment;
	try {
		enrichment = parseEnrichment(node.attributes?.plain, type, version);
	} catch (error) {
		throw new Error(
			`${name}: ${error instanceof Error ? error.message : String(error)}`,
			{
				cause: error
			}
		);
	}
	const fence = node.fence ?? node.span;
	if (!fence) throw new Error(`${name}: block has no source position`);
	return {
		name,
		type,
		fenceLine: fence.startLine,
		attributeLines: attrBlocks[0]
			? [attrBlocks[0].startLine, attrBlocks[0].endLine]
			: null,
		enrichment
	};
}

/**
 * One pass over the document, yielding every output the build needs. Walking it twice
 * would mean two readings of the same tree, which is how the toc and the entity list
 * drift apart.
 */
export async function parseStructure(content: string): Promise<ParsedStructure> {
	const document = await parseMogAst(content, { plain: true });
	const metadata = document.attributes?.plain ?? {};
	const stats = metadata.stats === undefined ? null : parseStats(metadata.stats);
	const impactVersion = stats ? 2 : 1;
	const [rootBlock] = document.attributes?.blocks ?? [];
	const toc: TocEntry[] = [];
	const images: string[] = [];
	const changes = new Map<string, EntityChange>();
	const blocks: EntityBlock[] = [];
	const bullets: ParsedBullet[] = [];
	const readingBlocks: ParsedStructure['readingBlocks'] = [];
	const stack: Frame[] = [];

	const innermost = (kind: Kind) =>
		[...stack].reverse().find((f) => f.kind === kind && f.name);

	const heading = (node: MogNode & { kind: 'marker' }) => {
		// Entity headings can use native Mog links; their visible label remains the name.
		const title = decodeEntityName(plainText(node.children).trim());
		const open = stack.at(-1);
		// A heading names the block it sits in; anything outside one is a section.
		const attrs = open && !open.name ? [open.kind] : [];
		if (open && !open.name) open.name = title;
		toc.push({ level: node.depth, title, attrs });

		if (!open || !attrs[0] || open.kind === 'ability') return;
		const key = changeKey(open.kind, title);
		if (changes.has(key)) return;

		const block = entityBlock(open, title, open.kind, impactVersion);
		changes.set(key, { name: title, type: open.kind, groups: [], ...block.enrichment });
		blocks.push(block);
	};

	const bullet = (node: MogNode) => {
		const entity = innermost('hero') ?? innermost('item');
		if (!entity?.name) return;
		const current = changes.get(changeKey(entity.kind, entity.name));
		const text = decodeEntityName(plainText(node.children).trim());
		if (!current || !text) return;

		// Bullets group per ability section, so the renderer can show the ability
		// heading and icon instead of a text prefix.
		const ability = innermost('ability')?.name ?? null;
		let group = current.groups.at(-1);
		if (!group || group.ability !== ability) {
			group = { ability, bullets: [] };
			current.groups.push(group);
		}
		group.bullets.push(text);
		if (node.kind === 'marker' && node.span && entity.kind !== 'ability') {
			bullets.push({
				kind: entity.kind,
				name: entity.name,
				ability,
				groupIndex: current.groups.length - 1,
				bulletIndex: group.bullets.length - 1,
				text,
				startLine: node.span.startLine,
				endLine: node.span.endLine,
				depth: node.depth
			});
		}
	};

	const ownsImpact = (node: MogNode) =>
		node.kind === 'marker' &&
		node.marker === 'free' &&
		(chain(node)[0] === 'hero' || chain(node)[0] === 'item');

	const walk = (nodes: MogNode[] = []) => {
		for (const node of nodes) {
			if (node.attributes?.children?.length && !ownsImpact(node)) {
				const line = (node.attributes.blocks?.[0] ?? node.span)?.startLine ?? 0;
				throw new Error(
					`Malformed impact block: the attr block on line ${line + 1} is not directly under a hero or item fence`
				);
			}
			if (node.kind === 'paragraph') {
				const [first] = node.children ?? [];
				if (first && isImage(first) && !stack.length) images.push(first.target);
				continue;
			}
			if (node.kind === 'delimiter' && chain(node)[0] === 'attr') {
				throw new Error(
					`Malformed impact block: line ${(node.span?.startLine ?? 0) + 1} is not valid KDL`
				);
			}
			if (node.kind !== 'marker') continue;

			if (node.marker === 'heading') heading(node);
			else if (node.marker === 'unordered-list') bullet(node);

			if (node.marker !== 'free') {
				walk(node.children);
				continue;
			}
			const [kind] = chain(node);
			// A bare fence groups without naming anything.
			if (kind === undefined) {
				walk(node.children);
				continue;
			}
			const frame: Frame = {
				kind: kind === 'hero' || kind === 'item' ? kind : 'ability',
				name: null,
				node
			};
			stack.push(frame);
			walk(node.children);
			const hero = innermost('hero');
			const ownerName = frame.kind === 'item' ? frame.name : hero?.name;
			if (
				frame.name &&
				ownerName &&
				node.span &&
				(frame.kind === 'item' || (frame.kind === 'ability' && hero?.name))
			) {
				readingBlocks.push({
					kind: frame.kind === 'item' ? 'item' : 'hero',
					name: ownerName,
					ability: frame.kind === 'ability' ? frame.name : null,
					startLine: node.span.startLine,
					endLine: node.span.endLine,
					depth: node.depth
				});
			}
			stack.pop();
		}
	};
	walk(document.body);

	return {
		metadata,
		toc,
		images,
		changes: [...changes.values()],
		blocks,
		bullets,
		readingBlocks,
		stats,
		metadataLines: rootBlock ? [rootBlock.startLine, rootBlock.endLine] : null
	};
}

export async function extractEntityChanges(content: string): Promise<EntityChange[]> {
	return (await parseStructure(content)).changes;
}

export function extractEntities(toc: TocEntry[]): ChangelogEntities {
	const heroes = new Set<string>();
	const items = new Set<string>();

	// An entity is a heading that says it is one, so section order no longer has to be
	// inferred and stray headings cannot be mistaken for entities.
	for (const entry of toc) {
		const [kind] = entry.attrs;
		if (kind === 'hero') heroes.add(entry.title);
		else if (kind === 'item') items.add(entry.title);
	}

	return { heroes: [...heroes], items: [...items] };
}
