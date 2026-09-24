import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/05-23.mg?embed=0
function _5_23_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Vindicta',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/05-23.mg?embed=1
function _5_23_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Decay',
			'Escalating Resilience',
			'Frenzy',
			'Glass Cannon',
			'Headshot Booster',
			'Knockdown',
			'Leech',
			'Lifestrike',
			'Majestic Leap',
			'Mystic Burst',
			'Mystic Shot',
			'Phantom Strike',
			'Reactive Barrier',
			'Refresher',
			'Restorative Locket',
			'Silencer',
			'Slowing Hex',
			'Spirit Strike',
			'Superior Cooldown'
		]
	});
}
//#endregion
//#region changelogs/2024/05-23.mg
var metadata = {
	title: '05-23-2024 Update',
	thread_id: '1245',
	published: '2024-05-23T14:39:49-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Playtesting times are now starting 1 hour earlier. Weekdays are 5PM PDT and weekends are 3PM PDT. Added in-game custom item builds support. Create your own builds or browse builds from the community in the heroes page. Added post game player reporting option Ally player glow-through-world silhouette now communicates their current health Added ambient music track Added unique Haze footstep sound effects Fixed various issues with mic audio input and lag it introduced Small adjustments to how the crosshair UI area looks Mic input device is now selected from in-game settings rather than the steam client Improved various networking and hit registration related issues (this was released a couple days ago) Updated Trooper and Neutral shooting sound effects Various improvements to damage audio clarity for victims and attackers Sped up select Amber Hand VO that related to game state (shrines being under attack, protecting the urn runner etc) Adding game audio muted indicator in top left if the game is muted Camera can now be moved while the game is paused in replays Fixed the Rejuvenator falling during pause Fixed the Idol falling during pause Fixed the bottom most shop items having part of their icon be unclickable Fixed a few unit target abilities that could sometimes select a target behind a nearby wall (e.g. Bebop Sticky Bomb) Added some additional visual tells for the receiving end of Lash’s Death Slam Updated Bullet Shredder debuff effects Mid-Boss is now invulnerable if there are no enemies it can actually attack Fixed your active items not hiding in the UI when you are dead and spectating a team mate Added support for binding mouse1 and mouse2 to any key (this was released a couple days ago) Fixed various movement stuck bugs with Ivy Added alt info to recent damage view to make it clearer that this can be brought up again after it disappears Improved Vindicta’s Stake effects to make it a little clearer when you are affected Fixed upgrading McGinnis’s Medicinal Specter to T3 while active causing it to heal everyone to full instantly Fixed a bug that could cause all of Paradox Pulse Grenade’s pulses to go off at once Fixed Kelvin’s Ice Beam sometimes not hitting Neutrals Fixed being able to see some things through the Veils in the map that you shouldn’t be able to see Removed stack of cardboard boxes inside connection hallway near bases to prevent cover from Neutrals Fixed getting stuck under stair at inner lanes near Guardian Fixed Abrams getting stuck on department store facade when using his ult Sapphire side materials tint color changed to white Sapphire side street materials changed to new asphalt blend Added new slide and reload animation for Wraith Out of combat run animation variants now only play during sprint state Fixed missing VO for Yamato ability use/upgrades Allies now compliment teammates when they see impressive use of channeled abilities (for instance, Gigawatt killing three people with Storm Cloud) Adjusted timing of select Abrams impact lines to time with either the rise of his leap or the descent accordingly Improved visibility of Seven’s bullet and travel path Improved visibility of Paradox’s bullet and travel path Improved visibility of Wraith’s bullet and travel path Improved visibility of Haze’s bullet and travel path Improved visibility of Lady Geist’s bullet and travel path Added custom tracer and muzzle flash for Seven’s gun Added custom tracer and muzzle flash for Paradox’s gun Added custom tracer and muzzle flash for Wraith’s gun Adjusted map around the middle lanes to have an area with Veils for laning Hero kill bounty ratio between Killer and Assister reduced from 2.75x to 2.55x (means slightly more to the Assister) Spirit scaling reduced by ~15% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst) Unclaimed souls now convert 10% slower Vaults base bounty increased from 220 to 260 Strong Neutrals Spirit Resist increased from 25% to 35% Medium Neutrals Spirit Resist increased from 25% to 30% Starting at 15 minutes, one melee Trooper per wave will spawn with 1.75x health Medic Trooper health increased from 240 to 260 Sidelane Veils near Guardians are now one-way visibility (used to be blocked visibility in both directions) Neutrals can now lean side to side to fire when obstructed by map geometry and being attacked Zipline Boost ability speed increased from 100% to 130% Zipline Boost ability ramp time to reach max speed reduced from 2s to 1s Zipline base speed boost after Base Guardians are killed increased from 100% to 120% Zipline base speed boost\'s ramp time after Base Guardians are killed reduced from 5s to 4s Being Disarmed no longer prevents you from reloading Withering Whip: Moved from T3 to T2 Withering Whip: Duration reduced 5s to 3.5s Withering Whip: Cooldown increased from 25s to 40s Withering Whip: Bullet Resist reduced from 25% to 20% Withering Whip: Cast range reduced from 20m to 15m Combat Barrier: Bullet Shield increased from 275 to 300 Combat Barrier: Weapon Damage while Shielded from 20% to 24% Silence Glyph: Moved from T2 to T3 Silence Glyph: Health increased from 50 to 75 Silence Glyph: Spirit Amp increased from 8% to 12% Shifting Shroud: Cooldown reduced from 70s to 55s Shifting Shroud: Duration 2.5s to 2.75s Improved Burst: Damage reduced from 11% Max HP to 10% Curse: Ammo increased from 15% to 20% Abrams Siphon Life T1 and T2 swapped Shoulder charge now allows for a bit more steering control Bebop Sticky Bomb T3 changed from Silence to Disarm Improved Hook hitbox detection to not grab targets that are behind cover Hyperbeam width increased from 2.5m to 2.7m Dynamo Base gun damage reduced from 18 to 15 Gun damage growth reduced from +1.1 to +0.8 Grey Talon Guided Owl Spirit scaling reduced from 2.2 to 1.2 Guided Owl T3 changed from +200 damage to "Kills enemy heroes below 20%". Low health enemies are highlighted while guiding the owl. Haze Sleep Dagger no longer breaks invisibility when cast (previously was part of the T3) Sleep Dagger Spirit scaling increased from 2.3 to 2.6 Sleep Dagger no longer gets +140 damage with the T3 Sleep Dagger T3 is now "-30% Damage Penalty On Victim for 4s after wakeup" Bullet Dance cast time increased from 0.7s to 0.8s Bullet Dance evasion from 70% to 50% Ivy Kudzu Bomb duration increased from 3.5s to 4s Kudzu Bomb T2 duration increased from +1.5s to +2s Watcher\'s Covenant Replicated Healing increased from 50% to 65% Watcher\'s Covenant Fire Rate reduced from 20% to 15% Watcher\'s Covenant T1 changed to +15% Rate Kelvin Frost Grenade cooldown reduced from 26s to 23s While Ice Pathing you no longer slow down when you shoot your gun Arctic Beam Channel move speed increased from 4 to 6 Arctic Beam T1 changed from "+2 Channel Move Speed" to -8s Cooldown Lady Geist Soul Exchange cast time reduced from 0.65s to 0.5s Fixed Malice clipping aggressively against map geometry edges Lash Base Stamina increased from 2 to 3 Ground Strike base Damage Per Meter reduced from 8 to 6 Fixed some cases with Ground Strike not hitting units positioned just below the impact zone Flog angle increased from 20 degrees to 30 degrees Flog cooldown reduced from 35s to 30s McGinnis Fixed certain rooftops allowing turrets to be built on them Mo & Krill Scorn healing against non-heroes reduced from 1x to 0.7x Sandblast no longer prevents enemies from reloading while disarmed Paradox Kinetic Carbine Max Damage Amp reduced from 125% to 100% Paradoxical Swap range reduced from 45m to 40m Pocket Barrage T3 added, now heals Pocket for 100% of its damage (33% vs non-heroes) Fixed some issues with Barrage projectiles getting caught on map geometry Flying Cloak pathing improved, it will no longer bounce erratically off map geometry Vindicta Flight T3 reduced from +4m/s to +3m/s Crow Familiar T3 improved from -30% Healing Suppression to -40% Warden Alchemical Flask travel speed increased from 800 to 1000 Wraith Royal Flush no longer has a cast delay Royal Flush time to spawn cards increased from 0.4s to 0.6s Telekinesis no longer allows the victim to shoot back Yamato Shadow Explosion renamed to Shadow Transformation and reworked into a new ability Shadow Transformation no longer has radius impact behavior Shadow Transformation now gives you 4.5s of invulnerability after the initial 2s invulnerable channel period. You transform and refresh your abilities, improving ability speeds by 60% and gaining unlimited ammo. "Ability Speeds" affects Power Slash cast time, Flying Strike flying time, and Crimson Slash cast time. Shadow Transformation cooldown increased from 90s to 100s Shadow Transformation T2 is now +4 m/s during Shadow Form Shadow Transformation T3 is now +1s duration Headshot Booster Cooldown reduced from 14s to 9s Spirit Strike No longer has +50 Health Now grants +75 Spirit Shield Now grants +0.7 HP regen Mystic Burst No longer has +1 HP Regen Now grants +1 Sprint Cooldown reduced from 8s to 6s Decay Cooldown increased from 22s to 27s Slowing Hex Range increased from 30 to 35 Reactive Barrier Cooldown reduced from 40s to 35s Mystic Shot Now requires that shotguns middle pellet hit the target Restorative Locket Now displays its current number of charges on its active icon Majestic Leap Duration of no damage taken requirement reduced from 5s to 4s Now gives +75 Health Lifestrike Flat portion of the lifesteal increased from 90 to 110 Knockdown Spirit bonus reduced from 6 to 5 Now grants +2 Sprint Stun duration starts after hitting the ground Superior Cooldown HP regen reduced from 6 to 4 Escalating Resilience Max Bullet Resist increased from 30% to 36% Frenzy When below 40% HP you now gain 25% Spirit Resist Refresher Now grants +10% Spirit Resist Glass Cannon Fire Rate reduced from 15% to 10% Silencer Now provides 15% Ammo Leech Spirit bonus reduced from 12 to 8 Phantom Strike Damage reduced from 200 to 150',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-20',
			to: '2024-05-23'
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
		title: 'Siphon Life',
		id: 'siphon-life'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 3,
		title: 'Hyperbeam',
		id: 'hyperbeam'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Guided Owl Spirit',
		id: 'guided-owl-spirit'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
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
		title: 'Sleep Dagger Spirit',
		id: 'sleep-dagger-spirit'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger-1'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Kudzu Bomb',
		id: 'kudzu-bomb'
	},
	{
		level: 3,
		title: "Watcher's Covenant Replicated Healing",
		id: 'watcher-s-covenant-replicated-healing'
	},
	{
		level: 3,
		title: "Watcher's Covenant Fire Rate",
		id: 'watcher-s-covenant-fire-rate'
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
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 3,
		title: 'Arctic Beam',
		id: 'arctic-beam'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Soul Exchange',
		id: 'soul-exchange'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
	},
	{
		level: 3,
		title: 'Sandblast',
		id: 'sandblast'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Kinetic Carbine Max Damage Amp',
		id: 'kinetic-carbine-max-damage-amp'
	},
	{
		level: 3,
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap'
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
		title: 'Flying Cloak',
		id: 'flying-cloak'
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
		title: 'Crow Familiar',
		id: 'crow-familiar'
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
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Royal Flush',
		id: 'royal-flush'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Escalating Resilience',
		id: 'escalating-resilience'
	},
	{
		level: 2,
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Glass Cannon',
		id: 'glass-cannon'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
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
		title: 'Lifestrike',
		id: 'lifestrike'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Mystic Burst',
		id: 'mystic-burst'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
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
		title: 'Restorative Locket',
		id: 'restorative-locket'
	},
	{
		level: 2,
		title: 'Silencer',
		id: 'silencer'
	},
	{
		level: 2,
		title: 'Slowing Hex',
		id: 'slowing-hex'
	},
	{
		level: 2,
		title: 'Spirit Strike',
		id: 'spirit-strike'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-05-20',
			to: '2024-05-23'
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
			name: 'Grey Talon',
			id: 'grey-talon'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
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
			name: 'Lady Geist',
			id: 'lady-geist'
		},
		{
			kind: 'hero',
			name: 'Lash',
			id: 'lash'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
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
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Escalating Resilience',
			id: 'escalating-resilience'
		},
		{
			kind: 'item',
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Glass Cannon',
			id: 'glass-cannon'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
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
			name: 'Lifestrike',
			id: 'lifestrike'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Mystic Burst',
			id: 'mystic-burst'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
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
			name: 'Restorative Locket',
			id: 'restorative-locket'
		},
		{
			kind: 'item',
			name: 'Silencer',
			id: 'silencer'
		},
		{
			kind: 'item',
			name: 'Slowing Hex',
			id: 'slowing-hex'
		},
		{
			kind: 'item',
			name: 'Spirit Strike',
			id: 'spirit-strike'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
		}
	],
	related: []
};
function _5_23_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Playtesting times are now starting 1 hour earlier. Weekdays are 5PM PDT and weekends are 3PM PDT.</li><li>Added in-game custom item builds support. Create your own builds or browse builds from the community in the heroes page.</li><li>Added post game player reporting option</li><li>Ally player glow-through-world silhouette now communicates their current health</li><li>Added ambient music track</li><li>Added unique Haze footstep sound effects</li><li>Fixed various issues with mic audio input and lag it introduced</li><li>Small adjustments to how the crosshair UI area looks</li><li>Mic input device is now selected from in-game settings rather than the steam client</li><li>Improved various networking and hit registration related issues (this was released a couple days ago)</li><li>Updated Trooper and Neutral shooting sound effects</li><li>Various improvements to damage audio clarity for victims and attackers</li><li>Sped up select Amber Hand VO that related to game state (shrines being under attack, protecting the urn runner etc)</li><li>Adding game audio muted indicator in top left if the game is muted</li><li>Camera can now be moved while the game is paused in replays</li><li>Fixed the Rejuvenator falling during pause</li><li>Fixed the Idol falling during pause</li><li>Fixed the bottom most shop items having part of their icon be unclickable</li><li>Fixed a few unit target abilities that could sometimes select a target behind a nearby wall (e.g. Bebop Sticky Bomb)</li><li>Added some additional visual tells for the receiving end of Lash’s Death Slam</li><li>Updated Bullet Shredder debuff effects</li><li>Mid-Boss is now invulnerable if there are no enemies it can actually attack</li><li>Fixed your active items not hiding in the UI when you are dead and spectating a team mate</li><li>Added support for binding mouse1 and mouse2 to any key (this was released a couple days ago)</li><li>Fixed various movement stuck bugs with Ivy</li><li>Added alt info to recent damage view to make it clearer that this can be brought up again after it disappears</li><li>Improved Vindicta’s Stake effects to make it a little clearer when you are affected</li><li>Fixed upgrading McGinnis’s Medicinal Specter to T3 while active causing it to heal everyone to full instantly</li><li>Fixed a bug that could cause all of Paradox Pulse Grenade’s pulses to go off at once</li><li>Fixed Kelvin’s Ice Beam sometimes not hitting Neutrals</li><li>Fixed being able to see some things through the Veils in the map that you shouldn’t be able to see</li><li>Removed stack of cardboard boxes inside connection hallway near bases to prevent cover from Neutrals</li><li>Fixed getting stuck under stair at inner lanes near Guardian</li><li>Fixed Abrams getting stuck on department store facade when using his ult</li><li>Sapphire side materials tint color changed to white</li><li>Sapphire side street materials changed to new asphalt blend</li><li>Added new slide and reload animation for Wraith</li><li>Out of combat run animation variants now only play during sprint state</li><li>Fixed missing VO for Yamato ability use/upgrades</li><li>Allies now compliment teammates when they see impressive use of channeled abilities (for instance, Gigawatt killing three people with Storm Cloud)</li><li>Adjusted timing of select Abrams impact lines to time with either the rise of his leap or the descent accordingly</li><li>Improved visibility of Seven’s bullet and travel path</li><li>Improved visibility of Paradox’s bullet and travel path</li><li>Improved visibility of Wraith’s bullet and travel path</li><li>Improved visibility of Haze’s bullet and travel path</li><li>Improved visibility of Lady Geist’s bullet and travel path</li><li>Added custom tracer and muzzle flash for Seven’s gun</li><li>Added custom tracer and muzzle flash for Paradox’s gun</li><li>Added custom tracer and muzzle flash for Wraith’s gun</li><li>Adjusted map around the middle lanes to have an area with Veils for laning</li><li>Hero kill bounty ratio between Killer and Assister reduced from 2.75x to 2.55x (means slightly more to the Assister)</li><li>Spirit scaling reduced by ~15% (the total effective Spirit damage is reduced by less than this, this is just the Spirit multiplier scaling portion and has largest impact on late game burst)</li><li>Unclaimed souls now convert 10% slower</li><li>Vaults base bounty increased from 220 to 260</li><li>Strong Neutrals Spirit Resist increased from 25% to 35%</li><li>Medium Neutrals Spirit Resist increased from 25% to 30%</li><li>Starting at 15 minutes, one melee Trooper per wave will spawn with 1.75x health</li><li>Medic Trooper health increased from 240 to 260</li><li>Sidelane Veils near Guardians are now one-way visibility (used to be blocked visibility in both directions)</li><li>Neutrals can now lean side to side to fire when obstructed by map geometry and being attacked</li><li>Zipline Boost ability speed increased from 100% to 130%</li><li>Zipline Boost ability ramp time to reach max speed reduced from 2s to 1s</li><li>Zipline base speed boost after Base Guardians are killed increased from 100% to 120%</li><li>Zipline base speed boost&#x27;s ramp time after Base Guardians are killed reduced from 5s to 4s</li><li>Being Disarmed no longer prevents you from reloading</li><li>Withering Whip: Moved from T3 to T2</li><li>Withering Whip: Duration reduced 5s to 3.5s</li><li>Withering Whip: Cooldown increased from 25s to 40s</li><li>Withering Whip: Bullet Resist reduced from 25% to 20%</li><li>Withering Whip: Cast range reduced from 20m to 15m</li><li>Combat Barrier: Bullet Shield increased from 275 to 300</li><li>Combat Barrier: Weapon Damage while Shielded from 20% to 24%</li><li>Silence Glyph: Moved from T2 to T3</li><li>Silence Glyph: Health increased from 50 to 75</li><li>Silence Glyph: Spirit Amp increased from 8% to 12%</li><li>Shifting Shroud: Cooldown reduced from 70s to 55s</li><li>Shifting Shroud: Duration 2.5s to 2.75s</li><li>Improved Burst: Damage reduced from 11% Max HP to 10%</li><li>Curse: Ammo increased from 15% to 20%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_23_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life T1 and T2 swapped</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder charge now allows for a bit more steering control</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb T3 changed from Silence to Disarm</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Improved Hook hitbox detection to not grab targets that are behind cover</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyperbeam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyperbeam change history</a></p>\n<h4 id="hyperbeam"><a href="/ability/hyper-beam">Hyperbeam</a></h4>\n<ul><li>Hyperbeam width increased from 2.5m to 2.7m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyperbeam'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero dynamo">\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Base gun damage reduced from 18 to 15</li><li>Gun damage growth reduced from +1.1 to +0.8</li></ul>\n</div>\n')} <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability guided-owl-spirit">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl Spirit change history</a></p>\n<h4 id="guided-owl-spirit"><a href="/ability/guided-owl">Guided Owl Spirit</a></h4>\n<ul><li>Guided Owl Spirit scaling reduced from 2.2 to 1.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl Spirit'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl T3 changed from +200 damage to &quot;Kills enemy heroes below 20%&quot;. Low health enemies are highlighted while guiding the owl.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger no longer breaks invisibility when cast (previously was part of the T3)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger-spirit">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Spirit change history</a></p>\n<h4 id="sleep-dagger-spirit"><a href="/ability/sleep-dagger">Sleep Dagger Spirit</a></h4>\n<ul><li>Sleep Dagger Spirit scaling increased from 2.3 to 2.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger Spirit'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger-1"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger no longer gets +140 damage with the T3</li><li>Sleep Dagger T3 is now &quot;-30% Damage Penalty On Victim for 4s after wakeup&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance cast time increased from 0.7s to 0.8s</li><li>Bullet Dance evasion from 70% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability kudzu-bomb">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>\n<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>\n<ul><li>Kudzu Bomb duration increased from 3.5s to 4s</li><li>Kudzu Bomb T2 duration increased from +1.5s to +2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant-replicated-healing">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant Replicated Healing change history</a></p>\n<h4 id="watcher-s-covenant-replicated-healing"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant Replicated Healing</a></h4>\n<ul><li>Watcher&#x27;s Covenant Replicated Healing increased from 50% to 65%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant Replicated Healing"
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant-fire-rate">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant Fire Rate change history</a></p>\n<h4 id="watcher-s-covenant-fire-rate"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant Fire Rate</a></h4>\n<ul><li>Watcher&#x27;s Covenant Fire Rate reduced from 20% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant Fire Rate"
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Watcher&#x27;s Covenant change history</a></p>\n<h4 id="watcher-s-covenant"><a href="/ability/kudzu-connection">Watcher&#x27;s Covenant</a></h4>\n<ul><li>Watcher&#x27;s Covenant T1 changed to +15% Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade cooldown reduced from 26s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Frost Grenade cooldown reduced from 26s to 23s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>While Ice Pathing you no longer slow down when you shoot your gun</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam Channel move speed increased from 4 to 6</li><li>Arctic Beam T1 changed from &quot;+2 Channel Move Speed&quot; to -8s Cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange cast time reduced from 0.65s to 0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Fixed Malice clipping aggressively against map geometry edges</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Base Stamina increased from 2 to 3</li></ul>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike base Damage Per Meter reduced from 8 to 6</li><li>Fixed some cases with Ground Strike not hitting units positioned just below the impact zone</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n')} <ul><li>${html('Flog angle increased from 20 degrees to 30 degrees')}</li> <li>${html('Flog cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Flog cooldown reduced from 35s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Fixed certain rooftops allowing turrets to be built on them</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>Scorn healing against non-heroes reduced from 1x to 0.7x</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sandblast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sandblast change history</a></p>\n<h4 id="sandblast"><a href="/ability/sand-blast">Sandblast</a></h4>\n<ul><li>Sandblast no longer prevents enemies from reloading while disarmed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sandblast'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine-max-damage-amp">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine Max Damage Amp change history</a></p>\n<h4 id="kinetic-carbine-max-damage-amp"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Damage Amp</a></h4>\n<ul><li>Kinetic Carbine Max Damage Amp reduced from 125% to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine Max Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Paradoxical Swap range reduced from 45m to 40m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage T3 added, now heals Pocket for 100% of its damage (33% vs non-heroes)</li><li>Fixed some issues with Barrage projectiles getting caught on map geometry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak pathing improved, it will no longer bounce erratically off map geometry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight T3 reduced from +4m/s to +3m/s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar T3 improved from -30% Healing Suppression to -40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n<ul><li>Alchemical Flask travel speed increased from 800 to 1000</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability royal-flush">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Royal Flush change history</a></p>\n<h4 id="royal-flush"><a href="/ability/card-trick">Royal Flush</a></h4>\n<ul><li>Royal Flush no longer has a cast delay</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Royal Flush'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Royal Flush time to spawn cards increased from 0.4s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis no longer allows the victim to shoot back</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n')} <ul><li>${html('Shadow Explosion renamed to Shadow Transformation and reworked into a new ability')}</li> <li>${html('Shadow Transformation no longer has radius impact behavior')}</li> <li>${html('Shadow Transformation now gives you 4.5s of invulnerability after the initial 2s invulnerable channel period. You transform and refresh your abilities, improving ability speeds by 60% and gaining unlimited ammo. &quot;Ability Speeds&quot; affects Power Slash cast time, Flying Strike flying time, and Crimson Slash cast time.')}</li> <li>${html('Shadow Transformation cooldown increased from 90s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Shadow Transformation cooldown increased from 90s to 100s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shadow Transformation T2 is now +4 m/s during Shadow Form')}</li> <li>${html('Shadow Transformation T3 is now +1s duration')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_23_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Cooldown increased from 22s to 27s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 22s to 27s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Max Bullet Resist increased from 30% to 36%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>When below 40% HP you now gain 25% Spirit Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Fire Rate reduced from 15% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown reduced from 14s to 9s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 14s to 9s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Spirit bonus reduced from 6 to 5</li><li>Now grants +2 Sprint</li><li>Stun duration starts after hitting the ground</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Spirit bonus reduced from 12 to 8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Flat portion of the lifesteal increased from 90 to 110</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Duration of no damage taken requirement reduced from 5s to 4s</li><li>Now gives +75 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-burst">${html('\n<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>\n<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>\n')} <ul><li>${html('No longer has +1 HP Regen')}</li> <li>${html('Now grants +1 Sprint')}</li> <li>${html('Cooldown reduced from 8s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 8s to 6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Now requires that shotguns middle pellet hit the target</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n')} <ul><li>${html('Damage reduced from 200 to 150')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 200 to 150'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 40s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Now grants +10% Spirit Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Now displays its current number of charges on its active icon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Now provides 15% Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Range increased from 30 to 35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>No longer has +50 Health</li><li>Now grants +75 Spirit Shield</li><li>Now grants +0.7 HP regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>HP regen reduced from 6 to 4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_23_mg as default, metadata, readingManifest, toc };
