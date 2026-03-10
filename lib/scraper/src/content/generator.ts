import {
	groupNotesByAbility,
	parseAndGroupContent,
	type EntityLists,
	type GroupedContent
} from './parser';

const EMPTY_CHANGELOG = `* Changelog\n\nNo structured changes were parsed for this update.`;

function escapeMetaValue(value: string): string {
	if (value.includes('\n') || value.includes(':') || value.includes('"')) {
		return `"${value.replace(/"/g, '\\"')}"`;
	}
	return value;
}

function escapeInlineAttr(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function entityHeadingBlock(name: string, type: 'hero' | 'item'): string {
	const escaped = escapeInlineAttr(name);
	return `\
@embed svelte
<EntityHeading name="${escaped}" type="${type}" />
@end`;
}

function sectionPreviewBlock(type: 'hero' | 'item', names: string[]): string {
	const escaped = names.map((n) => `"${escapeInlineAttr(n)}"`).join(', ');
	return `\
@embed svelte
<SectionPreview type="${type}" names={[${escaped}]} />
@end`;
}

function abilityHeadingBlock(name: string): string {
	const escaped = escapeInlineAttr(name);
	return `\
@embed svelte
<AbilityHeading name="${escaped}" />
@end`;
}

export function generateStructuredContent(grouped: GroupedContent): string {
	const out: string[] = [];

	if (grouped.general.length > 0) {
		out.push('* General Changes', '');
		for (const note of grouped.general) {
			out.push(note.startsWith('@image ') ? note : `- ${note}`);
		}
	}

	if (grouped.heroes.size > 0) {
		const sortedHeroes = [...grouped.heroes.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		out.push(
			'',
			'* Hero Changes',
			'',
			sectionPreviewBlock(
				'hero',
				sortedHeroes.map(([name]) => name)
			)
		);

		for (const [heroName, notes] of sortedHeroes) {
			out.push('', entityHeadingBlock(heroName, 'hero'), '');

			const abilityGroups = groupNotesByAbility(notes);
			for (let gi = 0; gi < abilityGroups.length; gi++) {
				const group = abilityGroups[gi];
				if (group.abilityName) {
					out.push(abilityHeadingBlock(group.abilityName), '');
				}
				for (const note of group.notes) {
					out.push(`- ${note}`);
				}
				if (gi < abilityGroups.length - 1) {
					out.push('');
				}
			}
		}
	}

	if (grouped.items.size > 0) {
		const sortedItems = [...grouped.items.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		out.push(
			'',
			'* Item Changes',
			'',
			sectionPreviewBlock(
				'item',
				sortedItems.map(([name]) => name)
			)
		);

		for (const [itemName, notes] of sortedItems) {
			out.push('', entityHeadingBlock(itemName, 'item'), '');
			for (const note of notes) {
				out.push(`- ${note}`);
			}
		}
	}

	return out.join('\n');
}

function collectPlainText(grouped: GroupedContent): string {
	const parts: string[] = [];

	for (const note of grouped.general) {
		if (!note.startsWith('@image ')) {
			parts.push(note);
		}
	}
	for (const [name, notes] of grouped.heroes) {
		parts.push(name);
		parts.push(...notes);
	}
	for (const [name, notes] of grouped.items) {
		parts.push(name);
		parts.push(...notes);
	}

	return parts.join(' ');
}

export interface ChangelogSource {
	title: string;
	published: string;
	author: string;
	authorImage?: string;
	threadId?: string;
	steamGid?: string;
	rawContent: string;
}

export function generateChangelog(
	source: ChangelogSource,
	entities: EntityLists
): string {
	const grouped = parseAndGroupContent(source.rawContent, entities);
	const structuredContent = generateStructuredContent(grouped);
	const contentText = collectPlainText(grouped);

	const out: string[] = ['@document.meta', `title: ${escapeMetaValue(source.title)}`];

	if (source.threadId) {
		out.push(`thread_id: ${source.threadId}`);
	}
	if (source.steamGid) {
		out.push(`steam_gid: ${source.steamGid}`);
	}

	out.push(`published: ${source.published}`, `author: ${escapeMetaValue(source.author)}`);

	if (source.authorImage) {
		out.push(`author_image: ${source.authorImage}`);
	}

	out.push(
		'category: patch',
		'major_update: false',
		'status: draft',
		`content_text: ${escapeMetaValue(contentText)}`,
		'@end',
		'',
		structuredContent || EMPTY_CHANGELOG
	);

	return out.join('\n');
}
