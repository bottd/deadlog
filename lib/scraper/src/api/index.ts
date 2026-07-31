export { fetchHeroes, fetchItems } from './deadlock';
export {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	POST_CACHE_DIR,
	type ChangelogPost,
	type PostContentResult
} from './forum';
export {
	fetchSteamPatchNotes,
	isSteamUnfurl,
	parseSteamContent,
	extractDateFromTitle,
	extractSteamGidFromUnfurl,
	type SteamNewsItem,
	type SteamPatchNote
} from './steam';
