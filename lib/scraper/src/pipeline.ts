import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Window } from 'happy-dom';
import {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	type ChangelogPost,
	type PostContentResult
} from './forumFetcher';
import { parseAuthorName } from './authorParser';
import { fetchHeroes, fetchItems } from './deadlockApi';

const CHANGELOGS_DIR = process.env.CHANGELOGS_DIR || 'app/changelogs';

interface EntityLists {
	heroes: Set<string>;
	items: Set<string>;
}

interface ScrapeOptions {
	overwrite?: boolean;
}

function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function isCurated(filepath: string): boolean {
	if (!existsSync(filepath)) return false;
	const content = readFileSync(filepath, 'utf-8');
	// Only protect files explicitly marked as published
	return content.includes('status: published');
}

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
@inline svelte
<EntityHeading name="${escaped}" type="${type}" />
@end`;
}

function sectionPreviewBlock(type: 'hero' | 'item', names: string[]): string {
	const escaped = names.map((n) => `"${escapeInlineAttr(n)}"`).join(', ');
	return `\
@inline svelte
<SectionPreview type="${type}" names={[${escaped}]} />
@end`;
}

function abilityHeadingBlock(name: string): string {
	const escaped = escapeInlineAttr(name);
	return `\
@inline svelte
<AbilityHeading name="${escaped}" />
@end`;
}

const STAT_PREFIX_BLOCKLIST = new Set([
	'base',
	'bullet',
	'gun',
	'health',
	'regen',
	'dps',
	'movespeed',
	'move',
	'stamina',
	'weapon',
	'melee',
	'fire',
	'is',
	'fixed',
	'starting',
	'spirit',
	'max',
	'min',
	'bonus'
]);

const STAT_PHRASE_BLOCKLIST = new Set([
	'base health',
	'base bullet',
	'base regen',
	'base sprint',
	'base spirit',
	'base spirit resist',
	'base bullet resist',
	'base bullet damage',
	'base movement',
	'bullet velocity',
	'bullet resist',
	'bullet damage',
	'fire rate',
	'fire rate spirit power',
	'health regen',
	'gun falloff',
	'gun damage',
	'move speed',
	'starting health',
	'last stand resistance',
	'killing blow rage damage bonus'
]);

function detectAbilityPrefix(note: string, knownAbilities?: Set<string>): string | null {
	const match = note.match(
		/^([A-Z][a-zA-Z']*(?:\s+[A-Z][a-zA-Z']*)*)\s+(?:T[1-3]\b|[a-z])/
	);
	if (!match) return null;

	const candidate = match[1];
	const candidateLower = candidate.toLowerCase();

	// If we have known abilities, only accept exact matches
	if (knownAbilities && knownAbilities.size > 0) {
		if (knownAbilities.has(candidateLower)) {
			return candidate;
		}
		return null;
	}

	const firstWord = candidate.split(/\s+/)[0].toLowerCase();
	if (STAT_PREFIX_BLOCKLIST.has(firstWord)) {
		return null;
	}

	if (STAT_PHRASE_BLOCKLIST.has(candidateLower)) {
		return null;
	}

	const rest = note.slice(candidate.length).trimStart().toLowerCase();
	const keywords = [
		'cooldown',
		'damage',
		'duration',
		'radius',
		'range',
		'speed',
		'heal',
		'health',
		'stun',
		'slow',
		'silence',
		'lifesteal',
		'dps',
		'now ',
		'no longer',
		'is now',
		'bonus',
		'max ',
		'min ',
		'fire rate',
		'movement',
		'spirit',
		'bullet',
		'proc',
		'channel',
		'delay',
		'change',
		'projectile',
		'width',
		'height',
		'scaling',
		'reduced',
		'increased',
		'reworked',
		't1 ',
		't1:',
		't2 ',
		't2:',
		't3 ',
		't3:'
	];

	if (keywords.some((kw) => rest.startsWith(kw))) {
		return candidate;
	}

	return null;
}

function groupNotesByAbility(
	notes: string[],
	knownAbilities?: Set<string>
): { abilityName: string | null; notes: string[] }[] {
	const groups: { abilityName: string | null; notes: string[] }[] = [];
	let currentAbility: string | null = null;
	let currentNotes: string[] = [];

	for (const note of notes) {
		const ability = detectAbilityPrefix(note, knownAbilities);

		if (ability && ability !== currentAbility) {
			// Flush previous group
			if (currentNotes.length > 0) {
				groups.push({ abilityName: currentAbility, notes: currentNotes });
			}
			currentAbility = ability;
			currentNotes = [note];
		} else if (ability && ability === currentAbility) {
			currentNotes.push(note);
		} else {
			if (currentAbility !== null && currentNotes.length > 0) {
				groups.push({ abilityName: currentAbility, notes: currentNotes });
				currentAbility = null;
				currentNotes = [];
			}
			// Add to general (null ability) group
			if (groups.length > 0 && groups[groups.length - 1].abilityName === null) {
				groups[groups.length - 1].notes.push(note);
			} else {
				groups.push({ abilityName: null, notes: [note] });
			}
		}
	}

	if (currentNotes.length > 0) {
		groups.push({ abilityName: currentAbility, notes: currentNotes });
	}

	return groups;
}

function extractContent(html: string): string {
	const window = new Window();
	window.document.write(html);

	const bbWrapper = window.document.querySelector('.bbWrapper');
	if (bbWrapper) {
		let text = bbWrapper.innerHTML;
		text = text.replace(/<br\s*\/?>/gi, '\n');
		text = text.replace(/&amp;/g, '&');
		text = text.replace(/&lt;/g, '<');
		text = text.replace(/&gt;/g, '>');
		text = text.replace(/&nbsp;/g, ' ');
		// Convert <a> tags to plain URLs (won't match <a><img></a> since [^<]* can't match <img>)
		text = text.replace(/<a\s[^>]*href="([^"]*)"[^>]*>[^<]*<\/a>/gi, '$1');
		// Convert <img> tags to norg @image blocks (after <a> conversion, before final HTML strip)
		text = text.replace(
			/<img\s+[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi,
			(_, src, alt) => {
				// Decode proxy URLs to direct URLs
				const proxyMatch = src.match(/\/proxy\.php\?image=([^&]+)/);
				const url = proxyMatch ? decodeURIComponent(proxyMatch[1]) : src;
				const label = alt.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
				return `\n@image ${url}\n${label}\n@end\n`;
			}
		);
		// Strip any remaining HTML tags (norg parser crashes on < >)
		text = text.replace(/<[^>]+>/g, '');
		text = text.replace(/\n{2,}/g, '\n');
		window.close();
		return text.trim();
	}

	window.close();
	return html;
}

interface ParsedNote {
	entityName: string | null;
	entityType: 'hero' | 'item' | 'general';
	text: string;
}

function parseChangelogLine(line: string, entities: EntityLists): ParsedNote {
	const text = line.replace(/^[-•]\s*/, '').trim();
	if (!text) {
		return { entityName: null, entityType: 'general', text: line };
	}

	const colonMatch = text.match(/^([^:]+):\s*(.+)$/);
	if (colonMatch) {
		const entity = colonMatch[1].trim();
		const noteText = colonMatch[2].trim();

		if (entities.heroes.has(entity.toLowerCase())) {
			return { entityName: entity, entityType: 'hero', text: noteText };
		}

		if (entities.items.has(entity.toLowerCase())) {
			return { entityName: entity, entityType: 'item', text: noteText };
		}
	}

	return { entityName: null, entityType: 'general', text };
}

interface GroupedContent {
	general: string[];
	heroes: Map<string, string[]>;
	items: Map<string, string[]>;
}

function parseAndGroupContent(rawContent: string, entities: EntityLists): GroupedContent {
	const result: GroupedContent = {
		general: [],
		heroes: new Map(),
		items: new Map()
	};

	const lines = rawContent.split('\n');

	for (let i = 0; i < lines.length; i++) {
		const trimmed = lines[i].trim();

		// Collect @image blocks as-is
		if (trimmed.startsWith('@image ')) {
			const blockLines = [trimmed];
			while (i + 1 < lines.length && lines[i + 1].trim() !== '@end') {
				i++;
				blockLines.push(lines[i]);
			}
			if (i + 1 < lines.length) {
				i++;
				blockLines.push(lines[i]); // @end
			}
			result.general.push(blockLines.join('\n'));
			continue;
		}

		if (!trimmed || !trimmed.startsWith('-')) {
			continue;
		}

		// Skip stray lines that are just dashes/bullets with no content
		const stripped = trimmed.replace(/^[-•]+\s*/, '').trim();
		if (!stripped || stripped === '-') {
			continue;
		}

		const parsed = parseChangelogLine(trimmed, entities);

		if (parsed.entityType === 'hero' && parsed.entityName) {
			const existing = result.heroes.get(parsed.entityName) || [];
			existing.push(parsed.text);
			result.heroes.set(parsed.entityName, existing);
		} else if (parsed.entityType === 'item' && parsed.entityName) {
			const existing = result.items.get(parsed.entityName) || [];
			existing.push(parsed.text);
			result.items.set(parsed.entityName, existing);
		} else {
			result.general.push(parsed.text);
		}
	}

	return result;
}

function generateStructuredContent(grouped: GroupedContent): string {
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

function generateChangelog(
	content: PostContentResult,
	threadId: string,
	slug: string,
	entities: EntityLists
): string {
	const pubDate = content.pubDate || new Date().toISOString();
	const author = parseAuthorName(content.author);

	const rawContent = extractContent(content.content);
	const grouped = parseAndGroupContent(rawContent, entities);
	const structuredContent = generateStructuredContent(grouped);
	const contentText = collectPlainText(grouped);

	const out: string[] = [
		'@document.meta',
		`title: ${escapeMetaValue(content.title)}`,
		`thread_id: ${threadId}`,
		`published: ${pubDate}`,
		`author: ${escapeMetaValue(author)}`
	];

	if (content.authorImage) {
		out.push(`author_image: ${content.authorImage}`);
	}

	out.push(
		'category: patch',
		'major_update: false',
		'status: draft',
		`content_text: ${escapeMetaValue(contentText)}`,
		'@end',
		'',
		structuredContent ||
			`* Changelog\n\nNo structured changes were parsed for this update.`
	);

	if (content.posterReplies?.length) {
		for (let i = 0; i < content.posterReplies.length; i++) {
			const reply = content.posterReplies[i];
			const replyRaw = extractContent(reply.content);
			const replyGrouped = parseAndGroupContent(replyRaw, entities);
			const replyStructured = generateStructuredContent(replyGrouped);

			out.push(
				'',
				`@comment
Poster reply ${i + 1} (${reply.timestamp})
Consider creating a separate file: ${slug}-reply-${i + 1}.norg with parent_id in metadata
@end`,
				'',
				replyStructured
			);
		}
	}

	return out.join('\n');
}

export async function scrapeChangelogs(options: ScrapeOptions = {}): Promise<void> {
	const { overwrite = false } = options;

	console.log('🌐 Fetching hero and item lists...');
	const [heroes, items] = await Promise.all([fetchHeroes(), fetchItems()]);

	const entities: EntityLists = {
		heroes: new Set(heroes.map((h) => h.name.toLowerCase())),
		items: new Set(items.map((i) => i.name.toLowerCase()))
	};
	console.log(`   Found ${entities.heroes.size} heroes, ${entities.items.size} items`);

	console.log('🔍 Fetching changelog posts from forum...');
	const posts = await scrapeChangelogPage({
		timeout: 30000
	});

	console.log(`📋 Found ${posts.length} posts`);

	const newPosts: ChangelogPost[] = [];
	const skipped: { title: string; reason: string }[] = [];

	for (const post of posts) {
		const year = new Date(post.pubDate).getFullYear();
		const slug = slugify(post.title);
		const dir = join(CHANGELOGS_DIR, String(year));
		const filepath = join(dir, `${slug}.norg`);

		if (isCurated(filepath)) {
			skipped.push({ title: post.title, reason: 'curated' });
			continue;
		}

		if (existsSync(filepath) && !overwrite) {
			skipped.push({ title: post.title, reason: 'exists (use --overwrite)' });
			continue;
		}

		newPosts.push(post);
	}

	if (skipped.length > 0) {
		console.log(`\n⏭️  Skipping ${skipped.length} posts:`);
		for (const { title, reason } of skipped.slice(0, 10)) {
			console.log(`   - ${title}: ${reason}`);
		}
		if (skipped.length > 10) {
			console.log(`   ... and ${skipped.length - 10} more`);
		}
	}

	if (newPosts.length === 0) {
		console.log('\n✨ All changelogs up to date!');
		return;
	}

	console.log(`\n🕷️  Scraping ${newPosts.length} posts...`);

	const contents = await scrapeMultipleChangelogPosts(newPosts, {
		timeout: 30000,
		useCache: true,
		cacheDir: 'lib/scraper/src/cache/posts',
		concurrency: 5,
		delayMs: 500
	});

	const contentMap = new Map(contents.map((c) => [c.title, c]));

	console.log('\n📝 Writing changelogs...');
	let created = 0;
	let updated = 0;

	for (const post of newPosts) {
		const content = contentMap.get(post.title);
		if (!content) {
			console.warn(`   ⚠️  No content for: ${post.title}`);
			continue;
		}

		const year = new Date(post.pubDate).getFullYear();
		const slug = slugify(post.title);
		const dir = join(CHANGELOGS_DIR, String(year));
		const filepath = join(dir, `${slug}.norg`);

		if (!existsSync(dir)) {
			mkdirSync(dir, { recursive: true });
		}

		const changelog = generateChangelog(content, post.postId, slug, entities);
		const isUpdate = existsSync(filepath);

		writeFileSync(filepath, changelog, 'utf-8');

		if (isUpdate) {
			console.log(`   📄 Updated: ${filepath}`);
			updated++;
		} else {
			console.log(`   ✨ Created: ${filepath}`);
			created++;
		}
	}

	console.log(`\n✅ Done! Created ${created}, updated ${updated} changelogs.`);
}
