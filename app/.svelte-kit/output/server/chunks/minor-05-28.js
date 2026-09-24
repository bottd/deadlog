import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2026/minor-05-28.mg
var metadata = {
	title: 'Minor Update - 05-28-2026',
	steam_gid: '1833968530888928',
	published: '2026-05-28T17:14:59.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		"Urn spawn time and interval changed from 10/15/20/25/etc to 12/18/24/30/etc Urn timer now gets frozen with Frozen Shelter Urn no longer provides the +35% Bullet and Spirit Resist aura for the behind team when it is being carried or dropped. The aura is now only active when it is being deposited. Urn runner when behind now gains +35% Bullet and Spirit Resist for themselves only Fixed the trailing team Urn runner's extra sprint bonus not working properly Urn will do damage to the runner after a team has held it for 30s (was 50s before), however, this timer will freeze while there are enemies within a 40m radius of the urn runner. Urn will now always add at least 2s to the team 30s held timer limit anytime it is picked up, even if it is instantly dropped You are no longer prevented from picking up the urn for 12s after it is dropped after the previous 50s team held timer The conditions for when the Urn decides to run back home have been reworked. The Urn will now stay in place on the ground as long as there are enemies in a 40m radius (enemies of the last person to have dropped or fumbled the Urn). If there are no enemies, then the Urn will wait up to 13s if there is a friendly player in a 40m radius. If the Urn held timer is over 45s (keeping in mind this timer is frozen if there are nearby enemies), the next time it is dropped it will immediately run back home if there are no nearby enemies. Parrying a trooper no longer resets your parry cooldown (however it won't end your parry early like a hero hit does) Parrying a trooper now stuns the trooper"
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function Minor_05_28_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn spawn time and interval changed from 10/15/20/25/etc to 12/18/24/30/etc</li><li>Urn timer now gets frozen with Frozen Shelter</li><li>Urn no longer provides the +35% Bullet and Spirit Resist aura for the behind team when it is being carried or dropped. The aura is now only active when it is being deposited.</li><li>Urn runner when behind now gains +35% Bullet and Spirit Resist for themselves only</li><li>Fixed the trailing team Urn runner&#x27;s extra sprint bonus not working properly</li><li>Urn will do damage to the runner after a team has held it for 30s (was 50s before), however, this timer will freeze while there are enemies within a 40m radius of the urn runner.</li><li>Urn will now always add at least 2s to the team 30s held timer limit anytime it is picked up, even if it is instantly dropped</li><li>You are no longer prevented from picking up the urn for 12s after it is dropped after the previous 50s team held timer</li><li>The conditions for when the Urn decides to run back home have been reworked. The Urn will now stay in place on the ground as long as there are enemies in a 40m radius (enemies of the last person to have dropped or fumbled the Urn). If there are no enemies, then the Urn will wait up to 13s if there is a friendly player in a 40m radius.</li><li>If the Urn held timer is over 45s (keeping in mind this timer is frozen if there are nearby enemies), the next time it is dropped it will immediately run back home if there are no nearby enemies.</li><li>Parrying a trooper no longer resets your parry cooldown (however it won&#x27;t end your parry early like a hero hit does)</li><li>Parrying a trooper now stuns the trooper</li></ul>\n')}`
	);
}
//#endregion
export { Minor_05_28_mg as default, metadata, toc };
