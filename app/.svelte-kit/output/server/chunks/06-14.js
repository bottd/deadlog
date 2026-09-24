import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/06-14.mg
var metadata = {
	title: '06-14-2024 Update',
	thread_id: '6080',
	published: '2024-06-14T15:18:12-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"This update reverts the communication changes from yesterday. Thanks for sharing all your thoughts on the topic, we'll think about better ways to work on this in the future."
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _6_14_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>This update reverts the communication changes from yesterday. Thanks for sharing all your thoughts on the topic, we&#x27;ll think about better ways to work on this in the future.</li></ul>\n')}`
	);
}
//#endregion
export { _6_14_mg as default, metadata, toc };
