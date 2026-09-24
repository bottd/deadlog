import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/06-16.mg
var metadata = {
	title: '06-16-2024 Update',
	thread_id: '6424',
	published: '2024-06-16T13:02:34-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Carrying the Soul Urn no longer causes your hero to be revealed to enemies'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _6_16_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Carrying the Soul Urn no longer causes your hero to be revealed to enemies</li></ul>\n')}`
	);
}
//#endregion
export { _6_16_mg as default, metadata, toc };
