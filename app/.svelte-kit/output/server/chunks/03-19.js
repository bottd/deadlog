import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2025/03-19.mg
var metadata = {
	title: '03-19-2025 Update',
	thread_id: '59098',
	published: '2025-03-19T19:36:14-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text: 'Sprint increased by +0.5 for all heroes'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _3_19_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Sprint increased by +0.5 for all heroes</li></ul>\n')}`
	);
}
//#endregion
export { _3_19_mg as default, metadata, toc };
