import { parse } from 'svelte/compiler';
import { parseStructure, readBullet } from '@deadlog/changelog';
import {
	parseMog,
	parseMogAst,
	type DataAttributesMode,
	type MogNode
} from 'vite-plugin-mog/parser';
import { impactSummary } from '../utils/impactFormat';

/** Safe inside both a Svelte expression and a script element. */
export const serializeMogValue = (value: unknown): string =>
	JSON.stringify(value)
		.replace(/</g, '\\u003c')
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

/**
 * Mog loads from disk before Vite transforms run. Re-render only the template with
 * inserted embeds, retaining Mog's own metadata, TOC, CSS and original embed imports.
 * The added embeds become direct component calls, not new virtual Mog modules (which
 * would otherwise be read from the unmodified document by Mog's loader).
 */
export async function inlineMogStats(source: string, compiled: string): Promise<string> {
	const structure = await parseStructure(source);
	const blocks = structure.blocks.filter(
		(block) =>
			block.enrichment.impact &&
			impactSummary(block.enrichment.impact, block.type) !== null
	);
	const ast = await parseMogAst(source, { diagnostics: true });
	if (ast.diagnostics?.length) throw new Error(ast.diagnostics.join('\n'));
	const boundaries = new Map<number, MogNode>();
	function visit(nodes: MogNode[]) {
		for (const node of nodes) {
			if (node.kind === 'marker' && node.marker === 'free' && node.fence) {
				boundaries.set(node.fence.startLine, node);
			}
			visit(node.children ?? []);
		}
	}
	visit(ast.body);

	const lines = source.split(/\r?\n/);
	const embeds = new Set<string>();
	const insertions = new Map<number, string[]>();
	const add = (line: number, code: string) => {
		embeds.add(code);
		insertions.set(line, [
			...(insertions.get(line) ?? []),
			'``embed:svelte:',
			code,
			'``'
		]);
	};
	for (const block of structure.readingBlocks) {
		if (
			!structure.bullets.some(
				(bullet) => bullet.startLine > block.startLine && bullet.endLine < block.endLine
			)
		)
			continue;
		if (lines[block.endLine].trim() !== '='.repeat(block.depth))
			throw new Error(`Cannot locate closing fence for ${block.name}`);
		add(
			block.endLine,
			`<DeadlogReadingDetails kind={${serializeMogValue(block.kind)}} name={${serializeMogValue(block.name)}} ability={${serializeMogValue(block.ability)}} />`
		);
	}
	const related = structure.blocks.flatMap((block) =>
		block.type === 'hero' &&
		block.enrichment.related?.status === 'complete' &&
		structure.stats?.before
			? [{ name: block.name, record: block.enrichment.related }]
			: []
	);
	for (const entry of related) {
		const block = structure.blocks.find(
			(block) => block.type === 'hero' && block.name === entry.name
		);
		if (!block) continue;
		const end = boundaries.get(block.fenceLine)?.span?.endLine;
		if (end !== undefined)
			add(end, `<DeadlogRelatedItems name={${serializeMogValue(entry.name)}} />`);
	}
	for (const block of blocks) {
		const node = boundaries.get(block.fenceLine);
		const end = node?.span?.endLine;
		if (
			node?.kind !== 'marker' ||
			end === undefined ||
			lines[end].trim() !== '='.repeat(node.depth)
		) {
			throw new Error(`Cannot locate closing fence for ${block.type} ${block.name}`);
		}
		const code = `<DeadlogInlineImpact kind={${serializeMogValue(block.type)}} impact={${serializeMogValue(block.enrichment.impact)}} />`;
		add(end, code);
	}
	const edits = [...insertions].map(([start, content]) => ({
		start,
		remove: 0,
		content
	}));
	for (const bullet of structure.bullets) {
		if (
			bullet.startLine !== bullet.endLine ||
			(bullet.kind === 'hero' && !bullet.ability) ||
			readBullet(bullet.text, bullet.ability).kind !== 'event'
		)
			continue;
		const marker = lines[bullet.startLine].match(/^(\s*)(-+)\s+(.+)$/);
		if (!marker || marker[2].length !== bullet.depth) continue;
		const code = `<DeadlogPreviousChange kind={${serializeMogValue(bullet.kind)}} name={${serializeMogValue(bullet.name)}} groupIndex={${bullet.groupIndex}} bulletIndex={${bullet.bulletIndex}} text={${serializeMogValue(bullet.text)}} />`;
		embeds.add(code);
		edits.push({
			start: bullet.startLine,
			remove: 1,
			content: [marker[2], marker[3], '``embed:svelte:', code, '``', marker[2]].map(
				(line) => marker[1] + line
			)
		});
	}
	if (!edits.length) return compiled;
	for (const { start, remove, content } of edits.sort((a, b) => b.start - a.start)) {
		lines.splice(start, remove, ...content);
	}
	const rendered = await parseMog(lines.join('\n'), 'svelte', {
		mode: 'none' as DataAttributesMode
	});
	if (rendered.diagnostics?.length) throw new Error(rendered.diagnostics.join('\n'));
	const sections = structure.toc.flatMap((heading, index) => {
		const kind = heading.attrs[0];
		const renderedHeading = rendered.toc?.[index];
		return (kind === 'hero' || kind === 'item') &&
			renderedHeading &&
			renderedHeading.title === heading.title
			? [{ kind, name: heading.title, id: renderedHeading.id }]
			: [];
	});

	let originalIndex = 0;
	const components = (rendered.embedComponents ?? []).map((embed) =>
		embeds.has(embed.code) ? embed.code : `<Embed${originalIndex++} />`
	);
	const template = rendered.segments.map((segment) => {
		switch (segment.kind) {
			case 'html':
				return `{@html ${serializeMogValue(segment.html)}}`;
			case 'embed':
				return components[segment.index];
			case 'open': {
				const attrs = [
					...(segment.classes ? [['class', segment.classes]] : []),
					...segment.data.map(({ name, value }) => [name, value])
				].map(([name, value]) => ` ${name}={${serializeMogValue(value)}}`);
				return `<${segment.tag}${attrs.join('')}>`;
			}
			case 'close':
				return `</${segment.tag}>`;
		}
	});
	const svelte = parse(compiled, { modern: true });
	if (!svelte.module) throw new Error('Expected Mog document metadata module');
	// Script node spans include their tags; preserve the original opening tag and
	// contents, inserting additions immediately before the generated closing tag.
	const moduleCode = compiled.slice(
		svelte.module.start,
		svelte.module.end - '</script>'.length
	);
	const instanceCode = svelte.instance
		? compiled.slice(svelte.instance.start, svelte.instance.end - '</script>'.length)
		: '<script lang="ts">';
	return [
		moduleCode,
		`export const matchResults = ${serializeMogValue(blocks.length ? { stats: structure.stats, kinds: [...new Set(blocks.map((block) => block.type))] } : null)};`,
		`export const readingManifest = ${serializeMogValue({ stats: structure.stats, sections, related })};`,
		'</script>',
		instanceCode,
		'import DeadlogInlineImpact from "$lib/components/changelog/MogPatchImpact.svelte";',
		'import DeadlogReadingDetails from "$lib/components/changelog/MogEntityContext.svelte";',
		'import DeadlogPreviousChange from "$lib/components/changelog/MogPreviousChange.svelte";',
		'import DeadlogRelatedItems from "$lib/components/changelog/MogRelatedItems.svelte";',
		'</script>',
		...template
	].join('\n');
}
