import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2025/the-doorman-at-your-service.mg
var metadata = {
	title: 'The Doorman, at your Service',
	steam_gid: '1808601382489176',
	published: '2025-08-22T21:00:03.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"Hero Spotlight: The Doorman He's proper, he's polite, but the humble Doorman of The Baroness Hotel is more than meets the eye. A brisk ring of his Call Bell leaves nearby enemies disoriented, and his high-speed Luggage Cart knocks them right off their feet. Do you find yourself getting lost easily in the streets of Manhattan? Don't worry, The Doorman is here to provide a shortcut with his Doorway whenever the need arises. And only the most special of enemies get to experience the trip of a lifetime to The Baroness Hotel. - Please, stay as long as you'd like. You can check out The Doorman in game now. Keep your votes coming over the weekend as our next hero will be released on Monday August 25th at 2pm PST."
};
var toc = [
	{
		level: 2,
		title: 'Hero Spotlight: The Doorman',
		id: 'hero-spotlight-the-doorman'
	}
];
function The_doorman_at_your_service_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="hero-spotlight-the-doorman">Hero Spotlight: The Doorman</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/c92f11d8ea510f5eea50f229f2ad06a0e56ba708.png" alt="The Doorman, at your Service announcement art"  decoding="async" loading="eager"/></p>\n<p>He&#x27;s proper, he&#x27;s polite, but the humble Doorman of The Baroness Hotel is more than meets the eye. A brisk ring of his <em>Call Bell</em> leaves nearby enemies disoriented, and his high-speed <em>Luggage Cart</em> knocks them right off their feet. Do you find yourself getting lost easily in the streets of Manhattan? Don&#x27;t worry, The Doorman is here to provide a shortcut with his <em>Doorway</em> whenever the need arises. And only the most special of enemies get to experience the trip of a lifetime to <em>The Baroness Hotel</em>. - <em>Please, stay as long as you&#x27;d like.</em></p>\n<p>You can check out The Doorman in game now. Keep your votes coming over the weekend as our next hero will be released on Monday August 25th at 2pm PST.</p>\n')}`
	);
}
//#endregion
export { The_doorman_at_your_service_mg as default, metadata, toc };
