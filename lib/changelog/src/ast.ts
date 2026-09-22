import type { MogNode } from 'vite-plugin-mog/parser';

const INLINE_KINDS = new Set(['text', 'raw', 'link', 'delimiter']);

const isInline = (node: MogNode): boolean =>
	INLINE_KINDS.has(node.kind) &&
	!(node.kind === 'delimiter' && node.delimiter === 'verbatim');

export const isImage = (node: MogNode): node is MogNode & { kind: 'link' } =>
	node.kind === 'link' && chain(node)[0] === '!';

export function chain(node: MogNode): string[] {
	return (node.attributes?.entries ?? []).flatMap((entry) =>
		entry.name === undefined && entry.value.kind === 'string' ? [entry.value.value] : []
	);
}

export function plainText(nodes: MogNode[] = []): string {
	return nodes
		.filter(isInline)
		.map((node) => {
			if (node.kind === 'text' || node.kind === 'raw') return node.text;
			if (node.kind !== 'link') return plainText(node.children);
			const name = node.children?.find(
				(child) => child.kind === 'delimiter' && child.delimiter === 'link-name'
			);
			if (chain(node)[0] === '!') return '';
			return name ? plainText(name.children) : node.target;
		})
		.join('');
}
