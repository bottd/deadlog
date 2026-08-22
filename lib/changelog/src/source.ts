import type { ChangelogMetadata } from './schema';

const STEAM_EXTERNAL_POST =
	'https://store.steampowered.com/news/externalpost/steam_community_announcements';
const DEADLOCK_FORUM_THREADS = 'https://forums.playdeadlock.com/threads';

export function changelogSourceUrl(
	metadata: Pick<ChangelogMetadata, 'steam_gid' | 'thread_id'>
): string {
	if (metadata.steam_gid) {
		return `${STEAM_EXTERNAL_POST}/${encodeURIComponent(metadata.steam_gid)}`;
	}
	if (metadata.thread_id) {
		return `${DEADLOCK_FORUM_THREADS}/${encodeURIComponent(metadata.thread_id)}/`;
	}

	throw new Error('Changelog metadata has no forum or Steam source identifier');
}
