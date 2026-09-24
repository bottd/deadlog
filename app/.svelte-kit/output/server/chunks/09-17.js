import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/09-17.mg
var metadata = {
	title: '09-17-2024 Update',
	thread_id: '30413',
	published: '2024-09-17T16:08:12-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Fixed players being able to exploit soul sharing across multiple lanes to earn more souls than intended. The way the fix is implemented is that each player can only be considered for an enemy trooper death event 4 times per wave number during the laning phase. Fixed troopers sometimes not dying after doing their death flash state Fixed Unstoppable state not preventing fire rate reductions Fixed Grey Talon's Charge Shot and Vindicta's Assassinate cameras not working properly"
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _9_17_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Fixed players being able to exploit soul sharing across multiple lanes to earn more souls than intended. The way the fix is implemented is that each player can only be considered for an enemy trooper death event 4 times per wave number during the laning phase.</li><li>Fixed troopers sometimes not dying after doing their death flash state</li><li>Fixed Unstoppable state not preventing fire rate reductions</li><li>Fixed Grey Talon&#x27;s Charge Shot and Vindicta&#x27;s Assassinate cameras not working properly</li></ul>\n')}`
	);
}
//#endregion
export { _9_17_mg as default, metadata, toc };
