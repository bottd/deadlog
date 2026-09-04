/**
 * Author display helpers live in `@deadlog/utils` because the scraper writes the avatar
 * path into every changelog and the OG renderer draws the pictures; this re-export keeps
 * the `$lib/author` import path components already use.
 */
export { authorAvatarPath, authorInitials } from '@deadlog/utils';
