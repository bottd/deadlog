import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/10-29.mg
var metadata = {
	title: '10-29-2024 Update',
	thread_id: '42985',
	published: '2024-10-29T11:20:09-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Added a notes system for Experimental Heroes in Hero Labs. Updates to those heroes will now be displayed in-game, rather than this subforum, whenever there are changes.'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _0_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a notes system for Experimental Heroes in Hero Labs. Updates to those heroes will now be displayed in-game, rather than this subforum, whenever there are changes.</li></ul>\n')}`
	);
}
//#endregion
export { _0_29_mg as default, metadata, toc };
