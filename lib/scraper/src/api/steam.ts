import { z } from 'zod';

const STEAM_NEWS_API = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/';
const DEADLOCK_APP_ID = '1422450';

const SECTION_MARKER = '__SECTION__';
const SUBPATCH_MARKER = '__SUBPATCH__';
const SECTION_NAMES = new Set(['Items', 'Heroes', 'General']);

const steamNewsItemSchema = z.object({
	gid: z.string(),
	title: z.string(),
	url: z.string(),
	author: z.string(),
	contents: z.string(),
	feedlabel: z.string(),
	date: z.number(),
	feedname: z.string(),
	feed_type: z.number(),
	appid: z.number(),
	tags: z.array(z.string()).optional()
});

const steamNewsResponseSchema = z.object({
	appnews: z.object({
		appid: z.number(),
		newsitems: z.array(steamNewsItemSchema)
	})
});

export type SteamNewsItem = z.infer<typeof steamNewsItemSchema>;

export interface SteamPatchNote {
	gid: string;
	title: string;
	date: string; // ISO date string
	author: string;
	content: string; // BBCode content
}

/**
 * Extract a date string (MM-DD-YYYY) from a title like "Gameplay Update - 03-06-2026"
 * or "03-06-2026 Update"
 */
export function extractDateFromTitle(title: string): string | null {
	const match = title.match(/(\d{2}-\d{2}-\d{4})/);
	return match ? match[1] : null;
}

/**
 * Convert Steam BBCode to plain text with section markers.
 */
function bbcodeToText(bbcode: string): string {
	let text = bbcode;

	// Convert [p]...[/p] to lines ([/p][p] → single newline, standalone tags → newline or empty)
	text = text
		.replace(/\[\/p\]\[p\]/g, '\n')
		.replace(/\[\/?p\]/g, (m) => (m === '[p]' ? '' : '\n'));

	// Convert section headers: [u][b]\[ General ][/b][/u] -> section markers
	text = text.replace(
		/\[u\]\[b\]\\?\[\s*([^\]]+?)\s*\]?\[\/b\]\[\/u\]/g,
		`${SECTION_MARKER}$1`
	);
	text = text.replace(/\[b\]\\?\[\s*([^\]]+?)\s*\]?\[\/b\]/g, (_, name) => {
		const trimmed = name.trim();
		if (SECTION_NAMES.has(trimmed)) {
			return `${SECTION_MARKER}${trimmed}`;
		}
		// Sub-patch headers like "03-07-2026 Patch:"
		if (/^\d{2}-\d{2}-\d{4}\s+Patch/i.test(trimmed)) {
			return `${SUBPATCH_MARKER}${trimmed}`;
		}
		return trimmed;
	});

	// Strip remaining BBCode tags
	text = text.replace(/\[\/?\w+\]/g, '');

	// Clean up backslash escapes from BBCode
	text = text.replace(/\\(?=\[)/g, '');

	// Normalize whitespace
	text = text.replace(/\n{3,}/g, '\n\n');

	return text.trim();
}

/**
 * Parse Steam BBCode content into plain text lines
 * that can be fed directly into parseAndGroupContent.
 */
export function parseSteamContent(bbcode: string): string {
	const processed = bbcodeToText(bbcode);
	const lines = processed.split('\n');
	const output: string[] = [];

	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed) continue;

		if (trimmed.startsWith(SECTION_MARKER) || trimmed.startsWith(SUBPATCH_MARKER)) {
			continue;
		}

		output.push(trimmed);
	}

	return output.join('\n');
}

export async function fetchSteamPatchNotes(options: {
	count?: number;
	timeout?: number;
}): Promise<SteamPatchNote[]> {
	const { count = 100, timeout = 30000 } = options;

	const url = new URL(STEAM_NEWS_API);
	url.searchParams.set('appid', DEADLOCK_APP_ID);
	url.searchParams.set('count', String(count));
	url.searchParams.set('maxlength', '0'); // 0 = full content
	url.searchParams.set('feeds', 'steam_community_announcements');

	const response = await fetch(url.toString(), {
		signal: AbortSignal.timeout(timeout)
	});

	if (!response.ok) {
		throw new Error(`Steam API HTTP ${response.status}: ${response.statusText}`);
	}

	const data = steamNewsResponseSchema.parse(await response.json());

	// Filter to patch notes (titles with date patterns like "MM-DD-YYYY Update"
	// or major update titles)
	return data.appnews.newsitems
		.filter((item) => {
			const dateMatch = extractDateFromTitle(item.title);
			if (dateMatch) return true;
			// Also include major named updates that have patch-note-style content
			const hasChanges = item.contents.includes('- ');
			const hasSections =
				item.contents.includes('[ General ]') ||
				item.contents.includes('[ Heroes ]') ||
				item.contents.includes('[ Items ]');
			return hasChanges && hasSections;
		})
		.map((item) => ({
			gid: item.gid,
			title: item.title,
			date: new Date(item.date * 1000).toISOString(),
			author: item.author,
			content: item.contents
		}));
}

/**
 * Extract the Steam news URL from a forum post's unfurl/embed block.
 */
export function extractSteamUrlFromUnfurl(html: string): string | null {
	const match = html.match(
		/href="(https:\/\/store\.steampowered\.com\/news\/app\/\d+\/view\/\d+)"/
	);
	return match ? match[1] : null;
}

/**
 * Check if forum post content is primarily a Steam unfurl (link preview)
 * with no substantial patch note content.
 */
export function isSteamUnfurl(html: string): boolean {
	if (!extractSteamUrlFromUnfurl(html)) return false;
	if (!html.includes('bbCodeBlock--unfurl')) return false;

	// Strip the unfurl block and see if there's any real content left
	const stripped = html
		.replace(
			/<div class="bbCodeBlock bbCodeBlock--unfurl[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g,
			''
		)
		.replace(/<[^>]+>/g, '')
		.trim();

	return stripped.length < 50;
}
