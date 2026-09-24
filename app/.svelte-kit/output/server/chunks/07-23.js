import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/07-23.mg
var metadata = {
	title: '07-23-2024 Update',
	thread_id: '12505',
	published: '2024-07-23T14:53:43-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Fixed a recent issue with Bebop gun not using lag compensation correctly when hitting orbs Mid Boss starting health increased from 5000 to 6000 Mid Boss health gained per minute increased from 275 to 350 Mid Boss warning sound now plays at 50% HP Fixed bot behavior with the new Urn locations Fixed some bugs with Hero Demo options not working due to a recent update Fixed a rare case where you could abandon a match accidentally when accepting a friend invite Fixed some cases where the confirmation to abandon match wasn't showing up"
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _7_23_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Fixed a recent issue with Bebop gun not using lag compensation correctly when hitting orbs</li><li>Mid Boss starting health increased from 5000 to 6000</li><li>Mid Boss health gained per minute increased from 275 to 350</li><li>Mid Boss warning sound now plays at 50% HP</li><li>Fixed bot behavior with the new Urn locations</li><li>Fixed some bugs with Hero Demo options not working due to a recent update</li><li>Fixed a rare case where you could abandon a match accidentally when accepting a friend invite</li><li>Fixed some cases where the confirmation to abandon match wasn&#x27;t showing up</li></ul>\n')}`
	);
}
//#endregion
export { _7_23_mg as default, metadata, toc };
