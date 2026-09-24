import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2026/old-gods-new-blood.mg
var metadata = {
	title: 'Old Gods, New Blood',
	steam_gid: '1822556746160429',
	published: '2026-01-22T22:56:33.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"The ritual takes form... Overhauled Patrons and bases, six new heroes, a fast-paced game mode 'Street Brawl', HUD updates, many quality-of-life additions, revamped postgame with an MVP screen and more. View the Old Gods, New Blood update page."
};
var toc = [];
function Old_gods_new_blood_mg($$renderer) {
	$$renderer.push(
		`${html('<p><img src="https://clan.fastly.steamstatic.com/images/45164767/0bc50241318e52395ab70077faf8e1f0e3cf7c1d.png" alt="Old Gods, New Blood announcement art"  decoding="async" loading="eager"/></p>\n<p>The ritual takes form... Overhauled Patrons and bases, six new heroes, a fast-paced game mode &#x27;Street Brawl&#x27;, HUD updates, many quality-of-life additions, revamped postgame with an MVP screen and more.</p>\n<p>View the <a href="https://www.playdeadlock.com/oldgods" target="_blank" rel="noopener noreferrer">Old Gods, New Blood</a> update page.</p>\n')}`
	);
}
//#endregion
export { Old_gods_new_blood_mg as default, metadata, toc };
