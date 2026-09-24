import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/05-19.mg
var metadata = {
	title: '05-19-2024 Update',
	thread_id: '1033',
	published: '2024-05-19T15:42:19-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Kinetic Dash passive now has a 14s cooldown Silence Glyph duration reduced from 5s to 3.5s'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _5_19_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Kinetic Dash passive now has a 14s cooldown</li><li>Silence Glyph duration reduced from 5s to 3.5s</li></ul>\n')}`
	);
}
//#endregion
export { _5_19_mg as default, metadata, toc };
