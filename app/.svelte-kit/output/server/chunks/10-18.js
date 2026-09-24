import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/10-18.mg
var metadata = {
	title: '10-18-2024 Update',
	thread_id: '39630',
	published: '2024-10-18T12:48:11-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'We have adjusted the matchmaking schedule to not be split across many different hours throughout the day, primarily to help address queue times. There will now be a wider continuous, but more concentrated, set of hours that it is enabled in. The schedule is now more simplified as well, as there is no more user selection component.'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _0_18_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>We have adjusted the matchmaking schedule to not be split across many different hours throughout the day, primarily to help address queue times. There will now be a wider continuous, but more concentrated, set of hours that it is enabled in. The schedule is now more simplified as well, as there is no more user selection component.</li></ul>\n')}`
	);
}
//#endregion
export { _0_18_mg as default, metadata, toc };
