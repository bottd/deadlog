import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/10-18-2.mg
var metadata = {
	title: '10-18-2024 Update 2',
	thread_id: '39693',
	published: '2024-10-18T16:30:16-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Ranked now has weekend specific hours (starts 5 hours earlier) Fixed some regions (South America, Oceania, Asia) that were off by 1-2 hours from their intended times'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _0_18_2_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Ranked now has weekend specific hours (starts 5 hours earlier)</li><li>Fixed some regions (South America, Oceania, Asia) that were off by 1-2 hours from their intended times</li></ul>\n')}`
	);
}
//#endregion
export { _0_18_2_mg as default, metadata, toc };
