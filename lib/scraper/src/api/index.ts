export { fetchHeroes, fetchItems } from './deadlock';
export {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	cachedPostSchema,
	POST_CACHE_DIR,
	type ChangelogPost,
	type PosterReply,
	type PostContentResult,
	type ScraperOptions
} from './forum';
export {
	fetchSteamPatchNotes,
	isSteamUnfurl,
	parseSteamContent,
	extractDateFromTitle,
	extractSteamUrlFromUnfurl,
	extractSteamGidFromUnfurl,
	type SteamNewsItem,
	type SteamPatchNote
} from './steam';
