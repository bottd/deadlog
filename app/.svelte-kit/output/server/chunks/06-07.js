import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/06-07.mg
var metadata = {
	title: '06-07-2024 Update',
	thread_id: '4443',
	published: '2024-06-07T15:36:23-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Rejuv buff to candle troopers reduced from +100% HP to +50% Fixed rejuv buff applying to objectives Fixed various performance related issues from the previous update'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _6_07_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Rejuv buff to candle troopers reduced from +100% HP to +50%</li><li>Fixed rejuv buff applying to objectives</li><li>Fixed various performance related issues from the previous update</li></ul>\n')}`
	);
}
//#endregion
export { _6_07_mg as default, metadata, toc };
