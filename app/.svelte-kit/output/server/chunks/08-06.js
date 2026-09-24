import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import { a as MogEntityContext, n as SectionPreview } from './VideoLink.js';
//#region changelogs/2024/08-06.mg?embed=0
function _8_06_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Viscous']
	});
}
//#endregion
//#region changelogs/2024/08-06.mg
var metadata = {
	title: '08-06-2024 Update',
	thread_id: '14283',
	published: '2024-08-06T16:19:49-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion) Server performance improvements New categories added to builds are now wider by default Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature Viscous Added a directional arrow particle effect to Goo Ball for Viscous Added additional particles while using Goo Ball Fixed hit detection on Puddle Punch and Goo Ball Fixed Puddle Punch having 2x the range of the tooltip. Fixed Puddle Punch being able to target behind puddle Fixed Puddle Punch using Guardians as a surface to punch from Puddle Punch Range reduced from 70m to 60m Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit. Splatter Cooldown from 18s to 20s Splatter Base Damage from 120 to 110',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-02',
			to: '2024-08-06'
		},
		after: {
			from: '2024-08-07',
			to: '2024-08-15'
		}
	}
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	},
	{
		level: 1,
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 3,
		title: 'Puddle Punch Range',
		id: 'puddle-punch-range'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-08-02',
			to: '2024-08-06'
		},
		after: {
			from: '2024-08-07',
			to: '2024-08-15'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		}
	],
	related: []
};
function _8_06_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion)</li><li>Server performance improvements</li><li>New categories added to builds are now wider by default</li><li>Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_06_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Added a directional arrow particle effect to Goo Ball for Viscous</li><li>Added additional particles while using Goo Ball</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Fixed hit detection on Puddle Punch and Goo Ball</li><li>Fixed Puddle Punch having 2x the range of the tooltip.</li><li>Fixed Puddle Punch being able to target behind puddle</li><li>Fixed Puddle Punch using Guardians as a surface to punch from</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch-range">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch Range change history</a></p>\n<h4 id="puddle-punch-range"><a href="/ability/puddle-punch">Puddle Punch Range</a></h4>\n<ul><li>Puddle Punch Range reduced from 70m to 60m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch Range'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit.</li><li>Splatter Cooldown from 18s to 20s</li><li>Splatter Base Damage from 120 to 110</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _8_06_mg as default, metadata, readingManifest, toc };
