import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2025/paige-writes-her-own-story.mg
var metadata = {
	title: 'Paige Writes Her Own Story',
	steam_gid: '1808601382586972',
	published: '2025-08-25T20:59:47.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"It's Monday, and today we're excited to announce the next hero joining us in the Cursed Apple is... Hero Spotlight: Paige Citizens of Manhattan will learn to appreciate the power of the written word when Paige joins the fight. With the mere toss of a book she can Conjure Dragons that sear enemies who get too close, or bind them to the ground with Captivating Read. Waning allies will find themselves emboldened by Defend and Fight, granting them the courage to fight another day. Fantasy becomes reality with Rallying Charge, summoning an entire cavalry to gallop across the city. - 'We can't wait to see how this story plays out.' Your votes will decide if Drifter or Victor will be joining us on Wednesday at 2pm PDT, we'll see you then!"
};
var toc = [
	{
		level: 2,
		title: 'Hero Spotlight: Paige',
		id: 'hero-spotlight-paige'
	}
];
function Paige_writes_her_own_story_mg($$renderer) {
	$$renderer.push(
		`${html('<p>It&#x27;s Monday, and today we&#x27;re excited to announce the next hero joining us in the Cursed Apple is...</p>\n<h2 id="hero-spotlight-paige">Hero Spotlight: Paige</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/32461f95d508f369b02dd703d0a9c254c037bb34.png" alt="Paige Writes Her Own Story announcement art"  decoding="async" loading="eager"/></p>\n<p>Citizens of Manhattan will learn to appreciate the power of the written word when Paige joins the fight. With the mere toss of a book she can <em>Conjure Dragons</em> that sear enemies who get too close, or bind them to the ground with <em>Captivating Read</em>. Waning allies will find themselves emboldened by <em>Defend and Fight</em>, granting them the courage to fight another day. Fantasy becomes reality with <em>Rallying Charge</em>, summoning an entire cavalry to gallop across the city. - <em>&#x27;We can&#x27;t wait to see how this story plays out.&#x27;</em></p>\n<p>Your votes will decide if Drifter or Victor will be joining us on Wednesday at 2pm PDT, we&#x27;ll see you then!</p>\n')}`
	);
}
//#endregion
export { Paige_writes_her_own_story_mg as default, metadata, toc };
