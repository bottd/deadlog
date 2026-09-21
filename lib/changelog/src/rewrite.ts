import type { EntityImpact } from '@deadlog/utils';
import { changeKey, parseStructure } from './extract';
import { writeImpactBlock } from './impactBlock';
import { splitFrontMatter } from './load';
import type { EntityBlock } from './schema';

export function spliceImpactBlocks(
	source: string,
	pick: (block: EntityBlock) => EntityImpact | undefined
): string {
	if (source.includes('\r')) throw new Error('CRLF line endings are not supported');

	const { frontMatter, body } = splitFrontMatter(source);
	const lines = body.split('\n');
	const blocks = [...parseStructure(body).blocks].sort(
		(a, b) => b.fenceLine - a.fenceLine
	);

	for (const block of blocks) {
		const impact = pick(block);
		if (!impact) continue;
		const [start, end] = block.impactLines ?? [block.fenceLine + 1, block.fenceLine];
		lines.splice(start, end - start + 1, ...writeImpactBlock(impact));
	}
	return frontMatter + lines.join('\n');
}

export function carryImpact(previous: string, next: string): string {
	const recorded = new Map<string, EntityImpact>();
	for (const change of parseStructure(splitFrontMatter(previous).body).changes) {
		if (change.impact) recorded.set(changeKey(change.type, change.name), change.impact);
	}
	if (recorded.size === 0) return next;

	return spliceImpactBlocks(next, (block) =>
		block.impactLines ? undefined : recorded.get(changeKey(block.type, block.name))
	);
}
