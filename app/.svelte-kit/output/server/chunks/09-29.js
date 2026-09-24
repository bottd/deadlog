import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/09-29.mg
var metadata = {
	title: '09-29-2024 Update',
	thread_id: '34541',
	published: '2024-09-29T12:38:55-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Outer ziplines hero speed increased by 20% relative to inner lanes (same as troopers on outer lanes zipline being faster) Initial respawn reduced from 12s to 8s Urn now drops when teleporting with Mirage's Traveler Fixed Wraith Cards, Shiv Rage and lifesteal from increasing by shooting the shop"
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _9_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Outer ziplines hero speed increased by 20% relative to inner lanes (same as troopers on outer lanes zipline being faster)</li><li>Initial respawn reduced from 12s to 8s</li><li>Urn now drops when teleporting with Mirage&#x27;s Traveler</li><li>Fixed Wraith Cards, Shiv Rage and lifesteal from increasing by shooting the shop</li></ul>\n')}`
	);
}
//#endregion
export { _9_29_mg as default, metadata, toc };
