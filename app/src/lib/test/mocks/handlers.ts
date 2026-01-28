import { http, HttpResponse } from 'msw';
import type { Patch } from 'deadlock-api-client';

const mockPatches = [
	{
		title: '10-02-2025 Update',
		pub_date: '2025-10-05T18:05:47Z',
		link: 'https://forums.playdeadlock.com/threads/10-02-2025-update.84332/',
		guid: {
			is_perma_link: false,
			text: '84332'
		},
		author: 'Yoshi',
		category: {
			domain: 'https://forums.playdeadlock.com/forums/changelog.10/',
			text: 'Changelog'
		},
		dc_creator: 'Yoshi',
		content_encoded:
			'<div class="bbWrapper"><b>[ General ]</b><br />Test content truncated...<br /><a href="https://forums.playdeadlock.com/threads/10-02-2025-update.84332/" class="link link--internal">Read more</a></div>',
		slash_comments: '2'
	},
	{
		title: '09-30-2025 Update',
		pub_date: '2025-09-30T20:15:30Z',
		link: 'https://forums.playdeadlock.com/threads/09-30-2025-update.84200/',
		guid: {
			is_perma_link: false,
			text: '84200'
		},
		author: 'Yoshi',
		category: {
			domain: 'https://forums.playdeadlock.com/forums/changelog.10/',
			text: 'Changelog'
		},
		dc_creator: 'Yoshi',
		content_encoded:
			'<div class="bbWrapper"><b>[ Heroes ]</b><br />Minor balance changes...<br /><a href="https://forums.playdeadlock.com/threads/09-30-2025-update.84200/" class="link link--internal">Read more</a></div>',
		slash_comments: '5'
	}
] satisfies Patch[];

const mockBigPatchDays: string[] = ['2025-10-05', '2025-09-25'];

// Mock changelog page HTML
const mockChangelogHTML = () => `
<!DOCTYPE html>
<html>
<head><title>Changelog - Deadlock Forums</title></head>
<body>
	<div class="structItemContainer">
		<div class="structItem-title">
			<a href="https://forums.playdeadlock.com/threads/update-10-02-2025.84332/">Update 10-02-2025</a>
		</div>
		<div class="structItem-startedBy">
			<a class="username">Yoshi</a>
		</div>
		<time datetime="2025-10-05T18:05:47Z">Oct 5, 2025</time>
	</div>
	<div class="structItemContainer">
		<div class="structItem-title">
			<a href="https://forums.playdeadlock.com/threads/update-09-30-2025.84200/">Update 09-30-2025</a>
		</div>
		<div class="structItem-startedBy">
			<a class="username">Yoshi</a>
		</div>
		<time datetime="2025-09-30T20:15:30Z">Sep 30, 2025</time>
	</div>
	<div class="structItemContainer">
		<div class="structItem-title">
			<a href="https://forums.playdeadlock.com/threads/not-an-update.12345/">Discussion Thread</a>
		</div>
		<div class="structItem-startedBy">
			<a class="username">User123</a>
		</div>
		<time datetime="2025-09-29T12:00:00Z">Sep 29, 2025</time>
	</div>
</body>
</html>
`;

// Mock forum post HTML for scraping
const mockForumPostHTML = (patchId: string, title: string) => `
<!DOCTYPE html>
<html>
<head><title>${title}</title></head>
<body>
	<h1 class="p-title-value">${title}</h1>
	<article class="cPost" id="post-${patchId}" data-content="${patchId}">
		<div class="cAuthorPane_author">
			<a class="username">Yoshi</a>
		</div>
		<div class="cAuthorPane_photo">
			<img src="https://example.com/avatar.jpg" alt="Yoshi" />
		</div>
		<time datetime="2025-10-05T18:05:47Z">Oct 5, 2025</time>
		<div data-role="commentContent">
			<div class="bbWrapper">
				<b>[ General ]</b><br />
				<br />
				* Weapon Investment bonus increased from 7/9/13/20/29/40/58/72/83/93% to 7/9/13/20/29/40/60/75/95/115<br />
				<br />
				<b>[ Heroes ]</b><br />
				<br />
				* Abrams: Base health increased from 550 to 600<br />
				* Bebop: Hook cooldown reduced from 20s to 18s<br />
				<br />
				<b>[ Items ]</b><br />
				<br />
				* Superior Stamina: Cost reduced from 6200 to 5800<br />
				* Mystic Burst: Damage increased from 80 to 90<br />
			</div>
		</div>
	</article>
	<article class="cPost" id="post-${patchId}-reply1">
		<div class="cAuthorPane_author">
			<a class="username">Yoshi</a>
		</div>
		<time datetime="2025-10-05T19:30:00Z">Oct 5, 2025</time>
		<div data-role="commentContent">
			<div class="bbWrapper">
				<b>Additional Update:</b><br />
				* Fixed a bug with hero abilities<br />
			</div>
		</div>
	</article>
	<article class="cPost" id="post-${patchId}-reply2">
		<div class="cAuthorPane_author">
			<a class="username">SomeUser</a>
		</div>
		<time datetime="2025-10-05T20:00:00Z">Oct 5, 2025</time>
		<div data-role="commentContent">
			<div class="bbWrapper">
				Thanks for the update!
			</div>
		</div>
	</article>
</body>
</html>
`;

// Mock assets data
const mockHeroes = [
	{
		id: 1,
		name: 'Abrams',
		class_name: 'hero_atlas',
		player_selectable: true,
		disabled: false,
		in_development: false,
		images: { icon: 'https://example.com/abrams.png' }
	},
	{
		id: 2,
		name: 'Bebop',
		class_name: 'hero_bebop',
		player_selectable: true,
		disabled: false,
		in_development: false,
		images: { icon: 'https://example.com/bebop.png' }
	}
];

const mockItems = [
	{
		id: 1,
		name: 'Superior Stamina',
		class_name: 'upgrade_stamina',
		type: 'ability',
		image: 'https://example.com/stamina.png',
		image_webp: 'https://example.com/stamina.webp'
	},
	{
		id: 2,
		name: 'Mystic Burst',
		class_name: 'upgrade_burst',
		type: 'ability',
		image: 'https://example.com/burst.png',
		image_webp: 'https://example.com/burst.webp'
	}
];

const mockRanks = [
	{
		tier: 0,
		name: 'Initiate',
		color: '#8C7853',
		images: { small: 'https://example.com/initiate.png' }
	},
	{
		tier: 1,
		name: 'Seeker',
		color: '#8C7853',
		images: { small: 'https://example.com/seeker.png' }
	}
];

export const handlers = [
	// Mock patches feed endpoint (both URLs for compatibility)
	http.get<never, never, Patch[]>('https://api.deadlock-api.com/v1/patches', () => {
		return HttpResponse.json<Patch[]>(mockPatches);
	}),
	http.get<never, never, Patch[]>('https://api.deadlock-api.com/v1/patches/feed', () => {
		return HttpResponse.json<Patch[]>(mockPatches);
	}),

	// Mock big patch days endpoint
	http.get('https://api.deadlock-api.com/v1/patches/bigdays', () => {
		return HttpResponse.json<typeof mockBigPatchDays>(mockBigPatchDays);
	}),

	// Mock big-days endpoint (alternative URL)
	http.get('https://api.deadlock-api.com/v1/patches/big-days', () => {
		return HttpResponse.json<typeof mockBigPatchDays>(mockBigPatchDays);
	}),

	// Mock assets endpoints
	http.get('https://assets.deadlock-api.com/v2/heroes', () => {
		return HttpResponse.json<typeof mockHeroes>(mockHeroes);
	}),

	http.get('https://assets.deadlock-api.com/v2/items', () => {
		return HttpResponse.json<typeof mockItems>(mockItems);
	}),

	http.get('https://assets.deadlock-api.com/v2/ranks', () => {
		return HttpResponse.json<typeof mockRanks>(mockRanks);
	}),

	// Mock changelog page
	http.get('https://forums.playdeadlock.com/forums/changelog.10/', () => {
		return HttpResponse.html(mockChangelogHTML());
	}),

	// Mock forum post pages for scraping
	http.get('https://forums.playdeadlock.com/threads/:slug.:id/', ({ params }) => {
		const { id, slug } = params;
		const title = (slug as string)
			.replace(/-/g, ' ')
			.replace(/^\w/, (c) => c.toUpperCase());

		return HttpResponse.html(mockForumPostHTML(id as string, title));
	})
];
