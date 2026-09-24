import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2024/11-29.mg
var metadata = {
	title: '11-29-2024 Update',
	thread_id: '49470',
	published: '2024-11-29T09:59:16-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Guardians now deal 25% more damage to troopers Guardians now take 25% more damage from troopers/players Range to be considered for souls reduced by 5m (The way it works now is there are two independent search ranges that gather nearby allied heroes to consider, the first is 50m from the orb itself, and the second is 35m from the hero that killed the trooper. The change reduces it by 5m on both. ) Respawn time at 40 minutes moved to 35 minutes'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function _1_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Guardians now deal 25% more damage to troopers</li><li>Guardians now take 25% more damage from troopers/players</li><li>Range to be considered for souls reduced by 5m (The way it works now is there are two independent search ranges that gather nearby allied heroes to consider, the first is 50m from the orb itself, and the second is 35m from the hero that killed the trooper. The change reduces it by 5m on both. )</li><li>Respawn time at 40 minutes moved to 35 minutes</li></ul>\n')}`
	);
}
//#endregion
export { _1_29_mg as default, metadata, toc };
