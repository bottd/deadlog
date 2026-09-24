import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/08-18.mg?embed=0
function _8_18_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: ['Billy', 'Doorman', 'Drifter', 'Mina', 'Paige', 'Victor']
	});
}
//#endregion
//#region changelogs/2025/08-18.mg
var metadata = {
	title: 'Six New Heroes',
	thread_id: '75046',
	steam_gid: '1808061939479652',
	published: '2025-08-18T20:42:20.000Z',
	author: 'mystery *******',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"Six new heroes have been spotted on the streets of the Cursed Apple: Mina the vampire, Billy the demonic goat, Paige who can bring books to life, The Doorman who's always\xA0at your service, Victor the monster who can't be stopped, and Drifter who terrorizes the city. Rather than enabling all these new heroes at once, we're trying a new approach where we'll be staggering their release, unlocking one every other day with the first starting today. From there, you’ll help decide which hero unlocks next by casting votes in the new pre-game lobby called 'The Hideout'. Along with the new heroes and Hideout are various map visual updates as well as a new character select screen. The Hideout Welcome to the Hideout! The Hideout replaces the existing Dashboard UI and is your personal area to play around in while waiting for a match. You can invite friends to your hideout, or join them in theirs. We hope it will be a fun place to spend time as well as provide future opportunities for personalization, achievements, and events. Interact with the terminals located throughout the Hideout to access various functions like Play, Watch, and Learn. The Hideout features a practice range where you can quickly test movement and abilities without needing to load into the Sandbox. Don't worry, the legacy sandbox is still available via a teleporter in the practice range, or through the Play Menu. Map Update The map has been updated with various visual improvements and lighting changes. Stay tuned, we have a lot more map improvements planned in upcoming updates. Character Select Screen The character select screen has received a major visual overhaul. In addition, there have been numerous visual updates to existing heroes. This work is ongoing and you can expect more updated heroes in the future. Hero Voting Today we introduce the first of the six new heroes, Mina, with another new hero unlocking every two days. Heroes will be released on Monday, Wednesday and Friday both this week and next. We'll also release balance adjustments in the days following each hero's release. Every time you complete a game you will earn a vote which you can cast by visiting the voting booth in the Hideout. Who do you want to see unlocked next? As a note, while developing this new set of heroes, we paused work on hero labs. In the future, we may revisit some of the hero labs heroes as we understand there are some elements of them that players like. Mina: Hero Spotlight Killing enemies has never looked better. Mina is a glass cannon that delivers quick bursts of Spirit damage at range with her passive, Love Bites. She can transform into bats and escape when things get a bit too messy. Each time you trigger Love Bites, your vampiric powers grow stronger for the rest of the match. This builds toward your ultimate, Nox Nostra, which unleashes a massive swarm of bats that hunt down and silence nearby enemies. - ‘Who got blood on my brand new shirt?’ Billy Health regen increased from 2.5 to 3.0 Health per boon reduced from 44 to 43 Blasted bullet amp increased from 8% to 9% Blasted increased base health boost from 75 to 80 and reduced T3 health boost from +65 to +50 Blasted reduced health boost spirit scaling from 0.9x to 0.8x Blasted base duration reduced from 8.5s to 8.0s and duration on heavy melee reduced from 5.0s to 4.5s Blasted cooldown reduced from 30s to 27s Blasted no longer gives bonus health from objectives Chain Gang time to break LOS increased by 0.1s Bashdown melee scaling increased from 1x to 1.1x Bashdown spirit damage reduced from 40 to 35 and scaling reduced from 1.2x to 1.1x Bashdown impact center is now slightly closer to Billy Chain Gang will snap slightly faster when target is out of LOS Chain Gang pull consistency improved in complex terrain Doorman Call Bell cooldown increased from 16s to 18s Luggage Cart T3 stun reduced duration from 1.5s to 1.2s Drifter Weapon damage per boon reduced from 0.693 to 0.55 Weapon base fire rate slowed by 5% (partial base damage compensation, but primarily an overall nerf) Health per boon reduced from 43 to 41 Rend T3 Bullet Lifesteal reduced from 55% to 45% Bloodscent T3 Amplified damage reduced from +13% to +11% Rend spirit scaling reduced from 1.5 to 1.4 Rend T1 reduced from +40 Damage to +35 Weapon damage at max range reduced from 80% to 60% Eternal Night bonus spirit damage reduced from 9 to 7 Eternal Night bonus spirit damage scaling reduced from 0.25 to 0.2 Eternal Night T1 bonus spirit damage reduced from +11 to +7 Eternal Night attack damage no longer procs Lightning Scroll Mina Sanguine Retreat T3 increased from -7s cooldown to -12s Cooldown Love Bites cooldown reduced from 8s to 7s Love Bites T3 changed from -3s cooldown to 1 Stamina Drain and 30% Slow for 3s Nox Nostra cooldown reduced from 150s to 130s Nox Nostra silence duration increased from 1s to 1.25s Paige Fixed some pathfinding issues with Conjure Dragon Victor Base regen reduced from 3 to 1.5 Jumpstart regen spirit scaling reduced from 2 to 1.8 Jumpstart T3 reduced from -8s Cooldown to -4s Aura of Suffering self damage increased from 80% to 100% Shocking Reanimation rebirth health reduced from 100% to 60% Shocking Reanimation cooldown increased from 180s to 190s Shocking Reanimation T2 changed from \"-20s Cooldown\" to \"+40% Rebirth Health\" Shocking Reanimation attack damage no longer procs Lightning Scroll",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-08-04',
			to: '2025-08-18'
		},
		after: {
			from: '2025-08-19',
			to: '2025-08-20'
		}
	}
};
var toc = [
	{
		level: 2,
		title: 'The Hideout',
		id: 'the-hideout'
	},
	{
		level: 2,
		title: 'Map Update',
		id: 'map-update'
	},
	{
		level: 2,
		title: 'Character Select Screen',
		id: 'character-select-screen'
	},
	{
		level: 2,
		title: 'Hero Voting',
		id: 'hero-voting'
	},
	{
		level: 2,
		title: 'Mina: Hero Spotlight',
		id: 'mina-hero-spotlight'
	},
	{
		level: 1,
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Blasted',
		id: 'blasted'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang'
	},
	{
		level: 3,
		title: 'Bashdown',
		id: 'bashdown'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang-1'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Call Bell',
		id: 'call-bell'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend'
	},
	{
		level: 3,
		title: 'Bloodscent',
		id: 'bloodscent'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend-1'
	},
	{
		level: 3,
		title: 'Eternal Night',
		id: 'eternal-night'
	},
	{
		level: 2,
		title: 'Mina',
		id: 'mina'
	},
	{
		level: 3,
		title: 'Sanguine Retreat',
		id: 'sanguine-retreat'
	},
	{
		level: 3,
		title: 'Love Bites',
		id: 'love-bites'
	},
	{
		level: 3,
		title: 'Nox Nostra',
		id: 'nox-nostra'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
	},
	{
		level: 3,
		title: 'Bookwyrm',
		id: 'bookwyrm'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-08-04',
			to: '2025-08-18'
		},
		after: {
			from: '2025-08-19',
			to: '2025-08-20'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Billy',
			id: 'billy'
		},
		{
			kind: 'hero',
			name: 'Doorman',
			id: 'doorman'
		},
		{
			kind: 'hero',
			name: 'Drifter',
			id: 'drifter'
		},
		{
			kind: 'hero',
			name: 'Mina',
			id: 'mina'
		},
		{
			kind: 'hero',
			name: 'Paige',
			id: 'paige'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
		}
	],
	related: []
};
function _8_18_mg($$renderer) {
	$$renderer.push(
		`${html('<p><img src="https://clan.fastly.steamstatic.com/images/45164767/f67ecaff28204a3d8d9ab86f495a3e4465df3135.png" alt="Six New Heroes announcement art"  decoding="async" loading="eager"/></p>\n<p>Six new heroes have been spotted on the streets of the Cursed Apple: Mina the vampire, Billy the demonic goat, Paige who can bring books to life, The Doorman who&#x27;s always at your service, Victor the monster who can&#x27;t be stopped, and Drifter who terrorizes the city.</p>\n<p>Rather than enabling all these new heroes at once, we&#x27;re trying a new approach where we&#x27;ll be staggering their release, unlocking one every other day with the first starting today. From there, you’ll help decide which hero unlocks next by casting votes in the new pre-game lobby called &#x27;The Hideout&#x27;.</p>\n<p>Along with the new heroes and Hideout are various map visual updates as well as a new character select screen.</p>\n<h2 id="the-hideout">The Hideout</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/8da57587ca0ad65cf902f1207706694082164525.png" alt="Six New Heroes announcement art"  decoding="async" loading="lazy"/></p>\n<p>Welcome to the Hideout! The Hideout replaces the existing Dashboard UI and is your personal area to play around in while waiting for a match. You can invite friends to your hideout, or join them in theirs. We hope it will be a fun place to spend time as well as provide future opportunities for personalization, achievements, and events.</p>\n<p>Interact with the terminals located throughout the Hideout to access various functions like Play, Watch, and Learn. The Hideout features a practice range where you can quickly test movement and abilities without needing to load into the Sandbox. Don&#x27;t worry, the legacy sandbox is still available via a teleporter in the practice range, or through the Play Menu.</p>\n<h2 id="map-update">Map Update</h2>\n<p>The map has been updated with various visual improvements and lighting changes. Stay tuned, we have a lot more map improvements planned in upcoming updates.</p>\n<h2 id="character-select-screen">Character Select Screen</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/000bc5550a1c618b6724fd990fd554d59f64df00.png" alt="Six New Heroes announcement art"  decoding="async" loading="lazy"/></p>\n<p>The character select screen has received a major visual overhaul. In addition, there have been numerous visual updates to existing heroes. This work is ongoing and you can expect more updated heroes in the future.</p>\n<h2 id="hero-voting">Hero Voting</h2>\n<p>Today we introduce the first of the six new heroes, Mina, with another new hero unlocking every two days. Heroes will be released on Monday, Wednesday and Friday both this week and next. We&#x27;ll also release balance adjustments in the days following each hero&#x27;s release.</p>\n<p>Every time you complete a game you will earn a vote which you can cast by visiting the voting booth in the Hideout. Who do you want to see unlocked next?</p>\n<p>As a note, while developing this new set of heroes, we paused work on hero labs. In the future, we may revisit some of the hero labs heroes as we understand there are some elements of them that players like.</p>\n<h2 id="mina-hero-spotlight">Mina: Hero Spotlight</h2>\n<p><img src="https://clan.fastly.steamstatic.com/images/45164767/13d1ac53868b9396831235f78b9317d4d417a695.png" alt="Six New Heroes announcement art"  decoding="async" loading="lazy"/></p>\n<p>Killing enemies has never looked better. Mina is a glass cannon that delivers quick bursts of Spirit damage at range with her passive, Love Bites. She can transform into bats and escape when things get a bit too messy. Each time you trigger Love Bites, your vampiric powers grow stronger for the rest of the match. This builds toward your ultimate, Nox Nostra, which unleashes a massive swarm of bats that hunt down and silence nearby enemies. - ‘Who got blood on my brand new shirt?’</p>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_8_18_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Health regen increased from 2.5 to 3.0</li><li>Health per boon reduced from 44 to 43</li></ul>\n')} <div class="ability blasted">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted change history</a></p>\n<h4 id="blasted"><a href="/ability/blasted">Blasted</a></h4>\n')} <ul><li>${html('Blasted bullet amp increased from 8% to 9%')}</li> <li>${html('Blasted increased base health boost from 75 to 80 and reduced T3 health boost from +65 to +50')}</li> <li>${html('Blasted reduced health boost spirit scaling from 0.9x to 0.8x')}</li> <li>${html('Blasted base duration reduced from 8.5s to 8.0s and duration on heavy melee reduced from 5.0s to 4.5s')}</li> <li>${html('Blasted cooldown reduced from 30s to 27s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 1,
		bulletIndex: 4,
		text: 'Blasted cooldown reduced from 30s to 27s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Blasted no longer gives bonus health from objectives')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n<ul><li>Chain Gang time to break LOS increased by 0.1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bashdown">${html('\n<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>\n<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>\n<ul><li>Bashdown melee scaling increased from 1x to 1.1x</li><li>Bashdown spirit damage reduced from 40 to 35 and scaling reduced from 1.2x to 1.1x</li><li>Bashdown impact center is now slightly closer to Billy</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Bashdown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang-1"><a href="/ability/chain-gang">Chain Gang</a></h4>\n<ul><li>Chain Gang will snap slightly faster when target is out of LOS</li><li>Chain Gang pull consistency improved in complex terrain</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n')} <ul><li>${html('Call Bell cooldown increased from 16s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Call Bell cooldown increased from 16s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Luggage Cart T3 stun reduced duration from 1.5s to 1.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n<ul><li>Weapon damage per boon reduced from 0.693 to 0.55</li><li>Weapon base fire rate slowed by 5% (partial base damage compensation, but primarily an overall nerf)</li><li>Health per boon reduced from 43 to 41</li></ul>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend T3 Bullet Lifesteal reduced from 55% to 45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodscent">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>\n<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>\n<ul><li>Bloodscent T3 Amplified damage reduced from +13% to +11%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend-1"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend spirit scaling reduced from 1.5 to 1.4</li><li>Rend T1 reduced from +40 Damage to +35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Weapon damage at max range reduced from 80% to 60%</li></ul>\n')} <div class="ability eternal-night">${html('\n<p><a href="/ability/eternal-night"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Eternal Night change history</a></p>\n<h4 id="eternal-night"><a href="/ability/eternal-night">Eternal Night</a></h4>\n<ul><li>Eternal Night bonus spirit damage reduced from 9 to 7</li><li>Eternal Night bonus spirit damage scaling reduced from 0.25 to 0.2</li><li>Eternal Night T1 bonus spirit damage reduced from +11 to +7</li><li>Eternal Night attack damage no longer procs Lightning Scroll</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Eternal Night'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n')} <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n<ul><li>Sanguine Retreat T3 increased from -7s cooldown to -12s Cooldown</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>\n<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>\n')} <ul><li>${html('Love Bites cooldown reduced from 8s to 7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Love Bites cooldown reduced from 8s to 7s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Love Bites T3 changed from -3s cooldown to 1 Stamina Drain and 30% Slow for 3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n')} <ul><li>${html('Nox Nostra cooldown reduced from 150s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Nox Nostra cooldown reduced from 150s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Nox Nostra silence duration increased from 1s to 1.25s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability bookwyrm">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>\n<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>\n<ul><li>Fixed some pathfinding issues with Conjure Dragon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Bookwyrm'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Base regen reduced from 3 to 1.5</li></ul>\n')} <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart regen spirit scaling reduced from 2 to 1.8</li><li>Jumpstart T3 reduced from -8s Cooldown to -4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering self damage increased from 80% to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation rebirth health reduced from 100% to 60%')}</li> <li>${html('Shocking Reanimation cooldown increased from 180s to 190s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 3,
		bulletIndex: 1,
		text: 'Shocking Reanimation cooldown increased from 180s to 190s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation T2 changed from &quot;-20s Cooldown&quot; to &quot;+40% Rebirth Health&quot;')}</li> <li>${html('Shocking Reanimation attack damage no longer procs Lightning Scroll')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _8_18_mg as default, metadata, readingManifest, toc };
