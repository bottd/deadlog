import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2026/graves-prefers-the-dead.mg
var metadata = {
	title: 'Graves Prefers The Dead',
	steam_gid: '1823191198603629',
	published: '2026-01-29T22:00:06.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"Today's bone-chilling addition to the Cursed Apple is none other than... Graves The dead have been making a whole lot of demands lately, and only Graves has the courage to oblige. That severed lich hand she found in the cemetery has proven itself a valuable ally, allowing her to latch onto her enemies and steal their power for herself. Her curiosities about the passage of life are further put to use with Jar of Dead, collecting the remains of the fallen, shaking them up, and throwing them back at her enemies to grant those remorseful spirits a final shot at revenge. With Grasping Hands she strikes a deep crack in the earth, allowing those down below to grab onto enemies' ankles and stop them from escaping her reach. And when all else fails, a Borrowed Decree will summon the dead to fight alongside her. - Death is coming. Graves is available in-game now! Keep your votes coming over the weekend, as the third hero from our Old Gods, New Blood update will be released on Monday February 2nd at 2pm PST."
};
var toc = [
	{
		level: 2,
		title: 'Graves',
		id: 'graves'
	}
];
function Graves_prefers_the_dead_mg($$renderer) {
	$$renderer.push(
		`${html('<p>Today&#x27;s bone-chilling addition to the Cursed Apple is none other than...</p>\n<h2 id="graves">Graves</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/c167b4a0c1c8e9df56e26fa7989e1b8d8c2e58e2.png" alt="Graves Prefers The Dead announcement art"  decoding="async" loading="eager"/></p>\n<p>The dead have been making a whole lot of demands lately, and only Graves has the courage to oblige. That severed lich hand she found in the cemetery has proven itself a valuable ally, allowing her to latch onto her enemies and <em>steal their power</em> for herself. Her curiosities about the passage of life are further put to use with <em>Jar of Dead</em>, collecting the remains of the fallen, shaking them up, and throwing them back at her enemies to grant those remorseful spirits a final shot at revenge. With <em>Grasping Hands</em> she strikes a deep crack in the earth, allowing those down below to grab onto enemies&#x27; ankles and stop them from escaping her reach. And when all else fails, a <em>Borrowed Decree</em> will summon the dead to fight alongside her. - <em>Death is coming.</em></p>\n<p>Graves is available in-game now! Keep your votes coming over the weekend, as the third hero from our <a href="https://www.playdeadlock.com/oldgods" target="_blank" rel="noopener noreferrer">Old Gods, New Blood</a> update will be released on Monday February 2nd at 2pm PST.</p>\n')}`
	);
}
//#endregion
export { Graves_prefers_the_dead_mg as default, metadata, toc };
