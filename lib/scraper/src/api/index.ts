export { fetchHeroes, fetchItems } from './deadlock';
export {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
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
