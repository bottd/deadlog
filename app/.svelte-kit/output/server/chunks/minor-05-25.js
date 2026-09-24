import { m as html } from './server2.js';
/* empty css                      */
//#region changelogs/2026/minor-05-25.mg
var metadata = {
	title: 'Minor Update - 05-25-2026',
	steam_gid: '1833968530888746',
	published: '2026-05-28T16:28:44.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane Urn timer extension when contested increased from 1.25s to 3s Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s Urn comeback bullet and spirit resist auras reduced from 50% to 35% Urn pickup spot is now where the old comeback drop off spots were for when your team is behind Urn runner no longer has sprint disabled Urn runner now has max sprint acceleration Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen Urn runner for the team that is behind now gains an extra +4m Sprint Urn collision radius increased by 20% Various smaller urn holding timers and variables adjusted to account for the new location'
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	}
];
function Minor_05_25_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane</li><li>Urn timer extension when contested increased from 1.25s to 3s</li><li>Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s</li><li>Urn comeback bullet and spirit resist auras reduced from 50% to 35%</li><li>Urn pickup spot is now where the old comeback drop off spots were for when your team is behind</li><li>Urn runner no longer has sprint disabled</li><li>Urn runner now has max sprint acceleration</li><li>Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen</li><li>Urn runner for the team that is behind now gains an extra +4m Sprint</li><li>Urn collision radius increased by 20%</li><li>Various smaller urn holding timers and variables adjusted to account for the new location</li></ul>\n')}`
	);
}
//#endregion
export { Minor_05_25_mg as default, metadata, toc };
