import { z } from 'zod';
import { escapeMogDelimiters, mogImage, mogLink } from '@deadlog/utils';

const STEAM_NEWS_API = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/';
const DEADLOCK_APP_ID = '1422450';

const SECTION_MARKER = '__SECTION__';
const SUBPATCH_MARKER = '__SUBPATCH__';
const SECTION_NAMES = new Set(['Items', 'Heroes', 'General']);
const STEAM_IMAGE_BASE = 'https://clan.fastly.steamstatic.com/images';
const STEAM_IMAGE_RE =
	/\[img(?:\s+src=(?:"([^"]+)"|'([^']+)'|([^\]\s]+)))?\]([\s\S]*?)\[\/img\]/gi;

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

export interface SteamAnnouncement {
	gid: string;
	title: string;
	date: string; // ISO date string
	author: string;
	content: string; // BBCode content
}

export interface RenderedSteamAnnouncement {
	mog: string;
	text: string;
}

/** MM-DD-YYYY out of "Gameplay Update - 03-06-2026" or "03-06-2026 Update". */
export function extractDateFromTitle(title: string): string | null {
	const match = title.match(/(\d{2}-\d{2}-\d{4})/);
	return match ? match[1] : null;
}

function bbcodeToText(bbcode: string): string {
	let text = bbcode;

	// Plain-text parsing omits presentation-only media.
	text = text
		.replace(/\[img(?:\s+[^\]]*)?\][\s\S]*?\[\/img\]/gi, '\n')
		.replace(/\{STEAM_CLAN_(?:LOC_)?IMAGE\}\/\S+/g, '');

	text = text
		.replace(/\[url=[^\]]+\]([\s\S]*?)\[\/url\]/gi, '$1')
		.replace(/\[url\]([\s\S]*?)\[\/url\]/gi, '$1')
		.replace(/\[video(?:\s+[^\]]*)?\][\s\S]*?\[\/video\]/gi, '\n')
		.replace(/\[\*\]\s*/g, '\n- ');

	// [/p][p] is a single newline; a standalone tag is a newline or nothing.
	text = text
		.replace(/\[\/p\]\[p\]/g, '\n')
		.replace(/\[\/?p\]/g, (m) => (m === '[p]' ? '' : '\n'));
	text = text.replace(/\[\/?(?:h[1-6]|list)\]/gi, '\n');

	// Section header shape: [u][b]\[ General ][/b][/u]
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

	text = text.replace(/\[\/?\w+(?:[=\s][^\]]*)?\]/g, '');

	text = text.replace(/\\(?=\[)/g, '');

	text = text.replace(/\n{3,}/g, '\n\n');

	return text.trim();
}

/** Plain-text lines, shaped to feed parseAndGroupContent directly. */
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

export function isSteamPatchContent(bbcode: string): boolean {
	const withoutBbcodeLists = bbcode.replace(/\[list\][\s\S]*?\[\/list\]/gi, '');
	return parseSteamContent(withoutBbcodeLists)
		.split('\n')
		.some((line) => /^(?:[-•]\s*\S|\*\s+\S)/.test(line.trim()));
}

function safeHttpUrl(value: string): string | null {
	try {
		const url = new URL(value.trim().replace(/^"|"$/g, ''));
		return ['http:', 'https:'].includes(url.protocol) && !/[[\]()]/.test(url.href)
			? url.href
			: null;
	} catch {
		return null;
	}
}

function steamImageUrl(value: string): string | null {
	return safeHttpUrl(
		value.trim().replace(/^\{STEAM_CLAN_(?:LOC_)?IMAGE\}/i, STEAM_IMAGE_BASE)
	);
}

function plainBbcode(value: string): string {
	return value
		.replace(/\[\/?\w+(?:[=\s][^\]]*)?\]/g, '')
		.replace(/\\(?=\[)/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

function safeMogLabel(value: string): string {
	return plainBbcode(value)
		.replace(/[[\]()]/g, '')
		.trim();
}

/** Convert prose-shaped Steam BBCode directly to readable Mog blocks. */
export function renderSteamAnnouncement(
	title: string,
	bbcode: string
): RenderedSteamAnnouncement {
	const tokens: string[] = [];
	const protect = (value: string) => {
		const index = tokens.push(value) - 1;
		return `\uE000${index}\uE001`;
	};
	const restore = (value: string) =>
		value.replace(/\uE000(\d+)\uE001/g, (_, index) => tokens[Number(index)] ?? '');
	const hasExplicitHeading = /\[h[1-6]\]/i.test(bbcode);

	let content = bbcode.replace(/\r\n?/g, '\n').replace(/\u00a0/g, ' ');

	content = content.replace(
		/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi,
		(_match, target: string, label: string) => {
			if (/\[img(?:\s|\])/i.test(label)) return label;
			const href = safeHttpUrl(target);
			const text = safeMogLabel(label);
			return href && text ? protect(mogLink(href, text)) : text;
		}
	);

	content = content.replace(
		STEAM_IMAGE_RE,
		(_match, doubleQuoted: string, singleQuoted: string, bare: string, body: string) => {
			const src = steamImageUrl(doubleQuoted || singleQuoted || bare || body);
			if (!src) return '\n';
			return `\n${protect(mogImage(src, `${safeMogLabel(title)} announcement art`))}\n`;
		}
	);

	content = content.replace(
		/\[video\s+[^\]]*\bmp4=(?:"([^"]+)"|'([^']+)'|([^\]\s]+))[^\]]*\][\s\S]*?\[\/video\]/gi,
		(_match, doubleQuoted: string, singleQuoted: string, bare: string) => {
			const href = safeHttpUrl(doubleQuoted || singleQuoted || bare);
			return href ? `\n${protect(mogLink(href, 'Video'))}\n` : '\n';
		}
	);

	content = content
		.replace(/\[h[1-6]\]([\s\S]*?)\[\/h[1-6]\]/gi, '\n\uE100$1\n')
		.replace(/\[\/?p\]/gi, '\n')
		.replace(/\[\/?list\]/gi, '\n')
		.replace(/\[\*\]\s*/gi, '\n\uE101')
		.replace(/\[br\s*\/?\]/gi, '\n');

	const formatInline = (value: string): string => {
		let text = value
			.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, (_match, label: string) =>
				protect(`__${escapeMogDelimiters(plainBbcode(label))}__`)
			)
			.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, (_match, label: string) =>
				protect(`**${escapeMogDelimiters(plainBbcode(label))}**`)
			)
			.replace(/\[\/?u\]/gi, '')
			.replace(/\[\/?\w+(?:[=\s][^\]]*)?\]/g, '')
			.replace(/\\(?=\[)/g, '')
			.replace(/\s+/g, ' ')
			.trim();
		text = escapeMogDelimiters(text);
		if (/^[#=.`>|+*~:$-]/.test(text)) text = `\\${text}`;
		return restore(text);
	};

	const blocks: { value: string; list: boolean }[] = [];
	const append = (value: string, list = false) => {
		if (!value) return;
		const previous = blocks.at(-1);
		if (list && previous?.list) previous.value += `\n${value}`;
		else blocks.push({ value, list });
	};

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();
		if (!line || line === '-') continue;

		if (line.startsWith('\uE100')) {
			append(`## ${formatInline(line.slice(1))}`);
			continue;
		}

		if (line.startsWith('\uE101')) {
			append(`- ${formatInline(line.slice(1))}`, true);
			continue;
		}

		const boldHeading = line.match(/^\[b\](.*?)\[\/b\]$/i);
		if (boldHeading) {
			append(`${hasExplicitHeading ? '###' : '#'} ${formatInline(boldHeading[1])}`);
			continue;
		}

		append(formatInline(line));
	}

	const text = parseSteamContent(bbcode)
		.split('\n')
		.map((line) => line.replace(/^(?:[-*•]+\s*)/, '').trim())
		.filter(Boolean)
		.join(' ');

	return { mog: blocks.map((block) => block.value).join('\n\n'), text };
}

export async function fetchSteamAnnouncements(options: {
	count?: number;
	timeout?: number;
}): Promise<SteamAnnouncement[]> {
	const { count = 1000, timeout = 30000 } = options;

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

	return data.appnews.newsitems.map((item) => ({
		gid: item.gid,
		title: item.title,
		date: new Date(item.date * 1000).toISOString(),
		author: item.author,
		content: item.contents
	}));
}

export function extractSteamUrlFromUnfurl(html: string): string | null {
	const match = html.match(
		/href="(https:\/\/store\.steampowered\.com\/news\/app\/\d+\/view\/\d+)"/
	);
	return match ? match[1] : null;
}

/** True when the post is a link preview with no patch notes of its own. */
export function isSteamUnfurl(html: string): boolean {
	if (!extractSteamUrlFromUnfurl(html)) return false;
	if (!html.includes('bbCodeBlock--unfurl')) return false;

	const stripped = html
		.replace(
			/<div class="bbCodeBlock bbCodeBlock--unfurl[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g,
			''
		)
		.replace(/<[^>]+>/g, '')
		.trim();

	return stripped.length < 50;
}
