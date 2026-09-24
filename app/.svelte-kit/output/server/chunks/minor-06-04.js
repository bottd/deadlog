import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2026/minor-06-04.mg
var metadata = {
	title: 'Minor Update - 06-04-2026',
	steam_gid: '1834602721188293',
	published: '2026-06-04T17:30:11.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Urn mechanics have been reworked. Delivering the urn now starts a king of the hill style capture point, rather than using melee to flip the urn back and forth. Both teams can progress at the same time, but the urn will only be fully claimed once there is only one team in the circle. The Urn runner now gets their normal 35% bonus bounty and stats immediately on initial deposit (rather than on deposit conclusion only if your team won it) Urn overall bounty reduced by 20% (unreduced for trailing team) Progress radius is 20m Progress rate is fixed regardless the number of allies in the area Progress duration for favored/neutral/unfavored is 6/12/18s If Urn has been in progress for over 75s, it will give up and throw all the souls as orbs into the sky (they will float for a long time) Increased time allowed to run the urn before taking damage by 10s Trailing team sprint speed bonus from +4m to +5m Urn comeback resistance now also grants +35% Debuff Resistance ontop of the 35% Bullet and Spirit Resistance Urn comeback resistance aura reduced from 60m to match the 20m progress radius Drop off location is above the bridges on the side lanes, rather than below.'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function Minor_06_04_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn mechanics have been reworked.</li><li>Delivering the urn now starts a king of the hill style capture point, rather than using melee to flip the urn back and forth.</li><li>Both teams can progress at the same time, but the urn will only be fully claimed once there is only one team in the circle.</li><li>The Urn runner now gets their normal 35% bonus bounty and stats immediately on initial deposit (rather than on deposit conclusion only if your team won it)</li><li>Urn overall bounty reduced by 20% (unreduced for trailing team)</li><li>Progress radius is 20m</li><li>Progress rate is fixed regardless the number of allies in the area</li><li>Progress duration for favored/neutral/unfavored is 6/12/18s</li><li>If Urn has been in progress for over 75s, it will give up and throw all the souls as orbs into the sky (they will float for a long time)</li><li>Increased time allowed to run the urn before taking damage by 10s</li><li>Trailing team sprint speed bonus from +4m to +5m</li><li>Urn comeback resistance now also grants +35% Debuff Resistance ontop of the 35% Bullet and Spirit Resistance</li><li>Urn comeback resistance aura reduced from 60m to match the 20m progress radius</li><li>Drop off location is above the bridges on the side lanes, rather than below.</li></ul>\n')}`
	);
}
//#endregion
export { Minor_06_04_mg as default, metadata, toc };
