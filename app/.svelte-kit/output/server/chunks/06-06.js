import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/06-06.mg?embed=0
function _6_06_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Haze',
			'Infernus',
			'Ivy',
			'Kelvin',
			'McGinnis',
			'Pocket',
			'Seven',
			'Vindicta',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2024/06-06.mg?embed=1
function _6_06_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Boundless Spirit',
			'Cold Front',
			'Enduring Spirit',
			'Extra Regen',
			'Intensifying Magazine',
			'Knockdown',
			'Leech',
			'Majestic Leap',
			'Mystic Reverb',
			'Reactive Barrier',
			'Refresher',
			'Sharpshooter',
			'Spirit Lifesteal',
			'Spiritual Overflow',
			'Torment Pulse'
		]
	});
}
//#endregion
//#region changelogs/2024/06-06.mg
var metadata = {
	title: '06-06-2024 Update',
	thread_id: '4096',
	published: '2024-06-06T14:56:14-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted. Replaced the neutral vaults with a new model, the Sinner's Sacrifice Added the ability to change builds while in-game Build descriptions can now be seen in-game via a tooltip Added neutrals to Hero Sandbox (the small room in the back on the right) Added new objective health bars for Guardians and Walkers Added Match History link to the top right You can now move active item slots on the HUD while holding alt/tab Improved visibility of the voice icon indicating who is talking Hero icons on the minimap are scaled up a little when holding alt Removed Pause cooldown in private bot matches and tutorial/sandbox Improved networking when there is packet loss or jitter Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside Improved Grey Talon's trap visibility Increased the speed of Guardian's melee attacks Changed Guardian's behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot Infernus's Afterburn now shows portraits of enemies that are burning for the full duration Improved menu UI sound feedback Player's icon is highlighted in the top bar Added UI sound effects for team and opponent deaths Added Kinetic Carbine charge audio loop Updated Vindicta Flight sound effects Added Vindicta Assassinate sound effect for targeted players Improved visuals for Kelvin's gun projectile Fixed some visual issues with Ice Path Added AoE effect to Pocket's Barrage Updated weapon buff effect in Pocket's Flying Cloak upgrade Visual effects updates for melee lifesteal items Fixed Power Slash sometimes getting stuck on nearby geometry Updated sound effects for the Sinner's Sacrifice Updated Pocket's Enchanted Satchel delay and explode sounds Updated Pocket's Barrage cast and impact sounds Updated Warden's Binding Word delay and impact sounds Fixed Dynamo's Quantum Entanglement going through ceilings sometimes Fixed an HTML exploit with chat Fixed not being able to place deployable abilities at certain angles Fixed moving active item slots causing the player to say \"[ITEM] is on cooldown\" Fixed training Ivy's True Form causing you to get healed Fixed a bug with Malice firing slightly upward Changed collision on barrel stand stacks to block bullets Added zapper on factory outpost building Removed roof duct on top of low building besides inner Walker Removed street lamp post that was causing heroes to get stuck near inner lane Guardian Added lights to outer lane Cosmic Veil tunnels More heroes will now compliment on good uses of ultimates instead of just saying \"good work\" Fixed more instances of heroes being called out by the wrong name Base hero kill value increased from 150 to 225 Rejuv duration reduced from 4 to 3 minutes Rejuv buff no longer increases your ammo Rejuv now causes all your candle troopers to have double health for 3 minutes Mid Boss can now only be damaged by enemies inside the bottom pit Mid Boss Rejuv claim time reduced from 2.5s to 1.5s Strong neutrals HP reduced by 20% Strong neutrals souls bounty reduced by 20% 4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals Vaults souls increased from 260 to 300 Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16 Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20% Bullet damage falloff now maxes out at ~65m instead of ~70m Walker bomb damage reduced from 300 to 200 Moved the middle lane Base Guardians further out slightly Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit. Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s Mid boss area has reduced destructibles Movement Speed powerup duration increased from 12s to 30s Movement Speed powerup movespeed reduced from 2 to 1 Movement Speed powerup sprint speed increased from 2 to 4 Fire Rate powerup reduced from +20% to +15% Fire Rate powerup duration increased from 25s to 35s Health Regen powerup regen reduced from 1.5% to 1% Health Regen powerup duration increased from 15s to 25s Cooldown Reduction powerup reduced from 25% to 20% Extra Clip powerup reduced from 4 clips to 3 Extra Stamina powerup duration increased from 60s to 80s Extra Stamina powerup amount reduced from 2 to 1 Crouch movespeed increased from 4 to 4.75 Bullet Shields now block damage from melee (similar to resistance) Increased the distance heroes slide when they come to the bottom of a ramp Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now) Healbane moved from Spirit tree to Vitality tree Healbane now gives +50 Health Soul Shredder Bullets: Spirit Amp reduced from +12% to +10% Improved Cooldown: HP Regen reduced from 2 to 1.5 Shifting Shroud: Cooldown reduced from 45s to 35s Shifting Shroud: Bonus spirit duration increased from 6s to 10s Metal Skin duration reduced from 4s to 3s Metal Skin cooldown increased from 25s to 30s Curse: No longer prevents stamina usage Curse: Now also prevents item usage Curse: Duration reduced from 3.75s to 3.5s Diviner's Kelvar: Bullet Shield increased from 700 to 1000 Abrams Base HP growth reduced from 36 to 32 Infernal Resilience T2 reduced from +200 Health to +150 Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s Bebop Hyper Beam slow now affects stamina dashes Dynamo Base HP growth reduced from 48 to 44 Quantum Entanglement fire rate bonus reduced from +30% to +25% Singularity base radius increased from 8m to 10m Haze Sleep Dagger T3 damage reduction on target improved from -30% to -40% Smoke Bomb sprint speed now instantly kicks in after casting it Bullet Dance cooldown reduced from 160s to 130s Bullet Dance T2 changed to -40s Cooldown Bullet Dance T3 changed to +1 Targets Hit Per Shot Infernus Flame Dash cooldown increased from 30s to 38s Ivy Watcher's Covenant heal sharing reduced from 65% to 55% Kelvin Ice Path sprint speed increased from +1 to +2 Ice Path trail duration increased from 12s to 15s Frozen Shelter T2 changed to -40s Cooldown Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit Frozen Shelter can now be dismissed early McGinnis Spectral Wall can now be dismissed early Pocket Barrage channel can now be interrupted by casting your other abilities Barrage radius increased from 6m to 6.5m Enchanted Satchel cast time reduced from 0.25s to 0.15s Seven Storm Cloud T1 increased from +30% to +35% Bullet Resist Vindicta Flight spirit bonus damage reduced from +12 to +10 Flight no longer has +10% bonus range to damage falloff Flight cooldown increased from 35s to 50s Flight T2 changed from +12 Spirit Damage to -15s Cooldown Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage Can no longer melee while flying for extra movement Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this) Fixed being unable to move while scoped in with Assassinate Warden Base ammo increased from 14 to 16 Alchemical Flask T3 increased from +25% Fire Rate Slow to +35% Willpower T3 increased from +150 Spirit Shield to +200 Extra Regen Regen increased from 1.75 to 2 Enduring Spirit Spirit Lifesteal reduced from +10% to +8% Reactive Barrier Cooldown reduced from 35s to 25s Spirit Lifesteal Reduced from +25% to +23% Cold Front cooldown reduced from 40s to 32s Knockdown No longer provides +2 Sprint Now provides +1 Stamina Sharpshooter Damage falloff bonus reduced from 20% to 15% Intensifying Magazine Time for Max Damage reduced from 4s to 3.5s Torment Pulse Interval improved from 2s to 1.5s Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6) HP bonus reduced from +150 to +125 Majestic Leap Velocity increased from 22.5 to 27 Leech Spirit Lifesteal reduced from +35% to +33% Refresher No longer has cast time (was 1s) Mystic Reverb Fixed the damage being reduced by armor twice Damage reduced from 35% to 30% Boundless Spirit Spirit increased from 45 to 50 Spiritual Overflow Spirit duration increased from 14s to 18s",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-06-02',
			to: '2024-06-06'
		},
		after: {
			from: null,
			to: null
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
		title: 'Abrams',
		id: 'abrams'
	},
	{
		level: 3,
		title: 'Infernal Resilience',
		id: 'infernal-resilience'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
	},
	{
		level: 3,
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: "Watcher's Covenant",
		id: 'watcher-s-covenant'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Barrage',
		id: 'barrage'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Can',
		id: 'can'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Alchemical Flask',
		id: 'alchemical-flask'
	},
	{
		level: 3,
		title: 'Willpower',
		id: 'willpower'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Enduring Spirit',
		id: 'enduring-spirit'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Intensifying Magazine',
		id: 'intensifying-magazine'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
	},
	{
		level: 2,
		title: 'Leech',
		id: 'leech'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Mystic Reverb',
		id: 'mystic-reverb'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Refresher',
		id: 'refresher'
	},
	{
		level: 2,
		title: 'Sharpshooter',
		id: 'sharpshooter'
	},
	{
		level: 2,
		title: 'Spirit Lifesteal',
		id: 'spirit-lifesteal'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Torment Pulse',
		id: 'torment-pulse'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-06-02',
			to: '2024-06-06'
		},
		after: null,
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Abrams',
			id: 'abrams'
		},
		{
			kind: 'hero',
			name: 'Bebop',
			id: 'bebop'
		},
		{
			kind: 'hero',
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
		},
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Enduring Spirit',
			id: 'enduring-spirit'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Intensifying Magazine',
			id: 'intensifying-magazine'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
		},
		{
			kind: 'item',
			name: 'Leech',
			id: 'leech'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Mystic Reverb',
			id: 'mystic-reverb'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Refresher',
			id: 'refresher'
		},
		{
			kind: 'item',
			name: 'Sharpshooter',
			id: 'sharpshooter'
		},
		{
			kind: 'item',
			name: 'Spirit Lifesteal',
			id: 'spirit-lifesteal'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Torment Pulse',
			id: 'torment-pulse'
		}
	],
	related: []
};
function _6_06_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted.</li><li>Replaced the neutral vaults with a new model, the Sinner&#x27;s Sacrifice</li><li>Added the ability to change builds while in-game</li><li>Build descriptions can now be seen in-game via a tooltip</li><li>Added neutrals to Hero Sandbox (the small room in the back on the right)</li><li>Added new objective health bars for Guardians and Walkers</li><li>Added Match History link to the top right</li><li>You can now move active item slots on the HUD while holding alt/tab</li><li>Improved visibility of the voice icon indicating who is talking</li><li>Hero icons on the minimap are scaled up a little when holding alt</li><li>Removed Pause cooldown in private bot matches and tutorial/sandbox</li><li>Improved networking when there is packet loss or jitter</li><li>Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside</li><li>Improved Grey Talon&#x27;s trap visibility</li><li>Increased the speed of Guardian&#x27;s melee attacks</li><li>Changed Guardian&#x27;s behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range</li><li>Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot</li><li>Infernus&#x27;s Afterburn now shows portraits of enemies that are burning for the full duration</li><li>Improved menu UI sound feedback</li><li>Player&#x27;s icon is highlighted in the top bar</li><li>Added UI sound effects for team and opponent deaths</li><li>Added Kinetic Carbine charge audio loop</li><li>Updated Vindicta Flight sound effects</li><li>Added Vindicta Assassinate sound effect for targeted players</li><li>Improved visuals for Kelvin&#x27;s gun projectile</li><li>Fixed some visual issues with Ice Path</li><li>Added AoE effect to Pocket&#x27;s Barrage</li><li>Updated weapon buff effect in Pocket&#x27;s Flying Cloak upgrade</li><li>Visual effects updates for melee lifesteal items</li><li>Fixed Power Slash sometimes getting stuck on nearby geometry</li><li>Updated sound effects for the Sinner&#x27;s Sacrifice</li><li>Updated Pocket&#x27;s Enchanted Satchel delay and explode sounds</li><li>Updated Pocket&#x27;s Barrage cast and impact sounds</li><li>Updated Warden&#x27;s Binding Word delay and impact sounds</li><li>Fixed Dynamo&#x27;s Quantum Entanglement going through ceilings sometimes</li><li>Fixed an HTML exploit with chat</li><li>Fixed not being able to place deployable abilities at certain angles</li><li>Fixed moving active item slots causing the player to say &quot;[ITEM] is on cooldown&quot;</li><li>Fixed training Ivy&#x27;s True Form causing you to get healed</li><li>Fixed a bug with Malice firing slightly upward</li><li>Changed collision on barrel stand stacks to block bullets</li><li>Added zapper on factory outpost building</li><li>Removed roof duct on top of low building besides inner Walker</li><li>Removed street lamp post that was causing heroes to get stuck near inner lane Guardian</li><li>Added lights to outer lane Cosmic Veil tunnels</li><li>More heroes will now compliment on good uses of ultimates instead of just saying &quot;good work&quot;</li><li>Fixed more instances of heroes being called out by the wrong name</li><li>Base hero kill value increased from 150 to 225</li><li>Rejuv duration reduced from 4 to 3 minutes</li><li>Rejuv buff no longer increases your ammo</li><li>Rejuv now causes all your candle troopers to have double health for 3 minutes</li><li>Mid Boss can now only be damaged by enemies inside the bottom pit</li><li>Mid Boss Rejuv claim time reduced from 2.5s to 1.5s</li><li>Strong neutrals HP reduced by 20%</li><li>Strong neutrals souls bounty reduced by 20%</li><li>4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals</li><li>Vaults souls increased from 260 to 300</li><li>Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16</li><li>Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20%</li><li>Bullet damage falloff now maxes out at ~65m instead of ~70m</li><li>Walker bomb damage reduced from 300 to 200</li><li>Moved the middle lane Base Guardians further out slightly</li><li>Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit.</li><li>Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s</li><li>Mid boss area has reduced destructibles</li><li>Movement Speed powerup duration increased from 12s to 30s</li><li>Movement Speed powerup movespeed reduced from 2 to 1</li><li>Movement Speed powerup sprint speed increased from 2 to 4</li><li>Fire Rate powerup reduced from +20% to +15%</li><li>Fire Rate powerup duration increased from 25s to 35s</li><li>Health Regen powerup regen reduced from 1.5% to 1%</li><li>Health Regen powerup duration increased from 15s to 25s</li><li>Cooldown Reduction powerup reduced from 25% to 20%</li><li>Extra Clip powerup reduced from 4 clips to 3</li><li>Extra Stamina powerup duration increased from 60s to 80s</li><li>Extra Stamina powerup amount reduced from 2 to 1</li><li>Crouch movespeed increased from 4 to 4.75</li><li>Bullet Shields now block damage from melee (similar to resistance)</li><li>Increased the distance heroes slide when they come to the bottom of a ramp</li><li>Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now)</li><li>Healbane moved from Spirit tree to Vitality tree</li><li>Healbane now gives +50 Health</li><li>Soul Shredder Bullets: Spirit Amp reduced from +12% to +10%</li><li>Improved Cooldown: HP Regen reduced from 2 to 1.5</li><li>Shifting Shroud: Cooldown reduced from 45s to 35s</li><li>Shifting Shroud: Bonus spirit duration increased from 6s to 10s</li><li>Metal Skin duration reduced from 4s to 3s</li><li>Metal Skin cooldown increased from 25s to 30s</li><li>Curse: No longer prevents stamina usage</li><li>Curse: Now also prevents item usage</li><li>Curse: Duration reduced from 3.75s to 3.5s</li><li>Diviner&#x27;s Kelvar: Bullet Shield increased from 700 to 1000</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_6_06_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Base HP growth reduced from 36 to 32</li></ul>\n')} <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T2 reduced from +200 Health to +150</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam slow now affects stamina dashes</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Base HP growth reduced from 48 to 44</li></ul>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement fire rate bonus reduced from +30% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n')} <ul><li>${html('Singularity base radius increased from 8m to 10m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Singularity base radius increased from 8m to 10m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T3 damage reduction on target improved from -30% to -40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb sprint speed now instantly kicks in after casting it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n')} <ul><li>${html('Bullet Dance cooldown reduced from 160s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Bullet Dance cooldown reduced from 160s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bullet Dance T2 changed to -40s Cooldown')}</li> <li>${html('Bullet Dance T3 changed to +1 Targets Hit Per Shot')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n')} <ul><li>${html('Flame Dash cooldown increased from 30s to 38s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Flame Dash cooldown increased from 30s to 38s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability watcher-s-covenant">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>\n<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>\n<ul><li>Watcher&#x27;s Covenant heal sharing reduced from 65% to 55%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path sprint speed increased from +1 to +2</li><li>Ice Path trail duration increased from 12s to 15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter T2 changed to -40s Cooldown</li><li>Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit</li><li>Frozen Shelter can now be dismissed early</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall can now be dismissed early</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n')} <ul><li>${html('Barrage channel can now be interrupted by casting your other abilities')}</li> <li>${html('Barrage radius increased from 6m to 6.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Barrage radius increased from 6m to 6.5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanted Satchel cast time reduced from 0.25s to 0.15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud T1 increased from +30% to +35% Bullet Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n')} <ul><li>${html('Flight spirit bonus damage reduced from +12 to +10')}</li> <li>${html('Flight no longer has +10% bonus range to damage falloff')}</li> <li>${html('Flight cooldown increased from 35s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Flight cooldown increased from 35s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flight T2 changed from +12 Spirit Damage to -15s Cooldown')}</li> <li>${html('Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability can">${html('\n<h4 id="can">Can</h4>\n<ul><li>Can no longer melee while flying for extra movement</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Can'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this)</li><li>Fixed being unable to move while scoped in with Assassinate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Base ammo increased from 14 to 16</li></ul>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n<ul><li>Alchemical Flask T3 increased from +25% Fire Rate Slow to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n<ul><li>Willpower T3 increased from +150 Spirit Shield to +200</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_6_06_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Spirit increased from 45 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('cooldown reduced from 40s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'cooldown reduced from 40s to 32s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-spirit">${html('\n<p><a href="/item/enduring-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_armor/resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Spirit patch history</a></p>\n<h3 id="enduring-spirit"><a href="/item/enduring-spirit">Enduring Spirit</a></h3>\n<ul><li>Spirit Lifesteal reduced from +10% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen increased from 1.75 to 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Time for Max Damage reduced from 4s to 3.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>No longer provides +2 Sprint</li><li>Now provides +1 Stamina</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Spirit Lifesteal reduced from +35% to +33%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Velocity increased from 22.5 to 27</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n')} <ul><li>${html('Fixed the damage being reduced by armor twice')}</li> <li>${html('Damage reduced from 35% to 30%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Damage reduced from 35% to 30%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown reduced from 35s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 35s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>No longer has cast time (was 1s)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Damage falloff bonus reduced from 20% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-lifesteal">${html('\n<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>\n<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>\n<ul><li>Reduced from +25% to +23%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Spirit duration increased from 14s to 18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Interval improved from 2s to 1.5s</li><li>Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6)</li><li>HP bonus reduced from +150 to +125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _6_06_mg as default, metadata, readingManifest, toc };
