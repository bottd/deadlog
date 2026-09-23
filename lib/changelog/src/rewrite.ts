import type { EntityImpact, PatchStats } from '@deadlog/utils';
import {
	applyUpdate,
	writeEnrichmentBlock,
	type EnrichmentUpdate,
	type EntityEnrichment
} from './entityEnrichment';
import { changeKey, parseStructure } from './extract';
import { writeStatsNode } from './impactBlock';
import type { EntityBlock } from './schema';

function spliceStats(
	lines: string[],
	metadataLines: [number, number] | null,
	stats: PatchStats
): void {
	if (!metadataLines) throw new Error('No root attr block to hold the stats node');
	const [start, end] = metadataLines;
	const first = lines.findIndex(
		(line, index) => index > start && index < end && /^stats\b/.test(line)
	);
	if (first === -1) {
		lines.splice(end, 0, ...writeStatsNode(stats));
		return;
	}
	const last = lines.findIndex((line, index) => index > first && line === '}');
	if (last === -1 || last >= end) throw new Error('Unterminated stats node');
	lines.splice(first, last - first + 1, ...writeStatsNode(stats));
}

export async function spliceEntityBlocks(
	source: string,
	pick: (block: EntityBlock) => EnrichmentUpdate | undefined,
	stats?: PatchStats
): Promise<string> {
	if (source.includes('\r')) throw new Error('CRLF line endings are not supported');

	const lines = source.split('\n');
	const { blocks, metadataLines } = await parseStructure(source);

	for (const block of [...blocks].sort((a, b) => b.fenceLine - a.fenceLine)) {
		const update = pick(block);
		if (!update) continue;
		const [start, end] = block.attributeLines ?? [block.fenceLine + 1, block.fenceLine];
		lines.splice(
			start,
			end - start + 1,
			...writeEnrichmentBlock(applyUpdate(block.enrichment, update))
		);
	}
	if (stats) spliceStats(lines, metadataLines, stats);
	return lines.join('\n');
}

export function spliceImpactBlocks(
	source: string,
	pick: (block: EntityBlock) => EntityImpact | null | undefined,
	stats?: PatchStats
): Promise<string> {
	return spliceEntityBlocks(
		source,
		(block) => {
			const impact = pick(block);
			return impact === undefined ? undefined : { impact };
		},
		stats
	);
}

export async function carryEnrichment(previous: string, next: string): Promise<string> {
	const recorded = new Map<string, EntityEnrichment>();
	const before = await parseStructure(previous);
	for (const block of before.blocks) {
		if (Object.keys(block.enrichment).length > 0) {
			recorded.set(changeKey(block.type, block.name), block.enrichment);
		}
	}
	if (recorded.size === 0) return next;

	const after = await parseStructure(next);
	return spliceEntityBlocks(
		next,
		(block) =>
			block.attributeLines ? undefined : recorded.get(changeKey(block.type, block.name)),
		after.stats ? undefined : (before.stats ?? undefined)
	);
}
