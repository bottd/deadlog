import { describe, expect, it } from 'vitest';
import {
	descriptionText,
	regroupAbilityChanges,
	resolveHeroAbilitySlug,
	resolveAbilitySlots
} from './heroAbilities';
import type { HeroesApiResponse, ItemsApiResponse } from './types/deadlockApi';

const hero = (
	partial: Partial<HeroesApiResponse[number]> = {}
): HeroesApiResponse[number] => ({
	id: 1,
	name: 'Test Hero',
	class_name: 'hero_test',
	images: {},
	items: {
		signature1: 'ability_one',
		signature2: 'ability_two',
		signature3: 'ability_three',
		signature4: 'ability_four'
	},
	player_selectable: true,
	...partial
});

const ability = (
	id: number,
	className: string,
	name: string,
	partial: Partial<ItemsApiResponse[number]> = {}
): ItemsApiResponse[number] => ({
	id,
	class_name: className,
	name,
	type: 'ability',
	image: `/${className}.png`,
	...partial
});

describe('resolveAbilitySlots', () => {
	it('uses hero signature order rather than item response order', () => {
		const items = [
			ability(4, 'ability_four', 'Four'),
			ability(2, 'ability_two', 'Two'),
			ability(1, 'ability_one', 'One'),
			ability(3, 'ability_three', 'Three')
		];
		expect(
			resolveAbilitySlots([hero()], items)
				.get(1)
				?.map((row) => row.name)
		).toEqual(['One', 'Two', 'Three', 'Four']);
	});

	it('resolves duplicate names by the hero slot class', () => {
		const items = [
			ability(10, 'ownerless_hex', 'Rabbit Hex'),
			ability(11, 'ability_one', 'Rabbit Hex'),
			ability(2, 'ability_two', 'Two'),
			ability(3, 'ability_three', 'Three'),
			ability(4, 'ability_four', 'Four')
		];
		const [resolved] = resolveAbilitySlots([hero()], items).get(1) ?? [];
		expect(resolved).toMatchObject({ image: '/ability_one.png', slug: 'rabbit-hex' });
	});

	it('allows one API ability row to occupy slots for multiple heroes', () => {
		const second = hero({ id: 2, name: 'Second Hero' });
		const items = [
			ability(1, 'ability_one', 'Shared One'),
			ability(2, 'ability_two', 'Two'),
			ability(3, 'ability_three', 'Three'),
			ability(4, 'ability_four', 'Four')
		];
		const map = resolveAbilitySlots([hero(), second], items);
		expect(map.get(1)?.[0].image).toBe('/ability_one.png');
		expect(map.get(2)?.[0].image).toBe('/ability_one.png');
	});

	it('fails when a released hero slot cannot be resolved', () => {
		expect(() => resolveAbilitySlots([hero()], [])).toThrow(/signature1/);
	});
});

describe('descriptionText', () => {
	it('preserves word boundaries at breaks without adding spaces before punctuation', () => {
		expect(descriptionText('Stun.<br><span>Cooldown reduced</span>.')).toBe(
			'Stun. Cooldown reduced.'
		);
	});
});

describe('resolveHeroAbilitySlug', () => {
	const abilities = [{ slug: 'grapple-arm' }, { slug: 'exploding-uppercut' }];

	it('maps historical names and their derived headings to current slots', () => {
		expect(resolveHeroAbilitySlug('Hook Return Speed', abilities)).toBe('grapple-arm');
		expect(resolveHeroAbilitySlug('Uppercut', abilities)).toBe('exploding-uppercut');
	});

	it('requires the mapped slot to belong to the current hero', () => {
		expect(resolveHeroAbilitySlug('Charge Shot', abilities)).toBeNull();
	});
});

describe('regroupAbilityChanges', () => {
	const abilities = [
		{ name: 'Gloom Bombs', slug: 'gloom-bombs' },
		{ name: 'Leaping Slash', slug: 'leaping-slash' },
		{ name: 'Ava', slug: 'ava' },
		{ name: 'Return to Shadows', slug: 'return-to-shadows' },
		{ name: 'Call Bell', slug: 'call-bell' },
		{ name: 'Frozen Shelter', slug: 'frozen-shelter' },
		{ name: 'Arctic Beam', slug: 'arctic-beam' },
		{ name: 'Doorway', slug: 'doorway' },
		{ name: 'Storm Cloud', slug: 'storm-cloud' },
		{ name: 'Power Surge', slug: 'power-surge' },
		{ name: 'Jar of Dead', slug: 'jar-of-dead' }
	];

	it('splits bullets that name a different known ability', () => {
		expect(
			regroupAbilityChanges(
				[
					{
						ability: 'Gloom Bombs',
						bullets: [
							'Gloom Bombs damage increased',
							'Leaping Slash only heals when hitting heroes',
							'Leaping Slash fixed its VFX'
						]
					}
				],
				abilities
			)
		).toEqual([
			{ ability: 'Gloom Bombs', bullets: ['Gloom Bombs damage increased'] },
			{
				ability: 'Leaping Slash',
				bullets: [
					'Leaping Slash only heals when hitting heroes',
					'Leaping Slash fixed its VFX'
				]
			}
		]);
	});

	it('recognizes plural and possessive ability mentions', () => {
		expect(
			regroupAbilityChanges(
				[
					{
						ability: 'Call Bell',
						bullets: ['Doorways close faster']
					},
					{
						ability: 'Power Surge',
						bullets: ["Storm Cloud's damage increased"]
					}
				],
				abilities
			)
		).toEqual([
			{ ability: 'Doorway', bullets: ['Doorways close faster'] },
			{ ability: 'Storm Cloud', bullets: ["Storm Cloud's damage increased"] }
		]);
	});

	it('moves base-stat bullets out of the preceding ability group', () => {
		expect(
			regroupAbilityChanges(
				[
					{
						ability: 'Leaping Slash',
						bullets: [
							'Leaping Slash damage increased',
							'Health growth per boon reduced',
							'Gloom Bombs damage increased'
						]
					}
				],
				abilities
			)
		).toEqual([
			{ ability: 'Leaping Slash', bullets: ['Leaping Slash damage increased'] },
			{ ability: null, bullets: ['Health growth per boon reduced'] },
			{ ability: 'Gloom Bombs', bullets: ['Gloom Bombs damage increased'] }
		]);
	});

	it('recognizes base changes introduced by a verb', () => {
		const bullets = [
			'Fixed her weapon not working with Close Quarters',
			'Fixed Fire Rate bonuses applying incorrectly',
			'Reduced gun range from 18m to 16m',
			'Increase base move speed from 6.6 to 7.0m',
			'HP per boon reduced from 41 to 37',
			'Reverted recent melee damage reduction',
			'No longer has -10% base bullet resist',
			'Headshot Crit value reduced from 80% to 70%',
			'Rage buildup rate reduced by 6%',
			'Float time with umbrella increased from 2.5s to 4s',
			'Alt fire knockback increased by 10%',
			'Restored health per boon back to 46',
			'No longer has -30% Lifesteal Effectiveness'
		];
		for (const bullet of bullets) {
			expect(
				regroupAbilityChanges([{ ability: 'Gloom Bombs', bullets: [bullet] }], abilities),
				bullet
			).toEqual([{ ability: null, bullets: [bullet] }]);
		}
	});

	it('stops carrying an inferred ability into base resistance changes', () => {
		expect(
			regroupAbilityChanges(
				[
					{
						ability: null,
						bullets: [
							'Fixed Return Fire working with Power Surge',
							'No longer has base +15% Spirit Resistance',
							'Now has base +20% Bullet Resistance',
							'Base health regen reduced from 2 to 1'
						]
					}
				],
				abilities
			)
		).toEqual([
			{
				ability: 'Power Surge',
				bullets: ['Fixed Return Fire working with Power Surge']
			},
			{
				ability: null,
				bullets: [
					'No longer has base +15% Spirit Resistance',
					'Now has base +20% Bullet Resistance',
					'Base health regen reduced from 2 to 1'
				]
			}
		]);
	});

	it('resolves persisted summon terminology before classifying base stats', () => {
		const bullets = [
			'Updated dash ranges for Deadheads',
			'Fixed Fire Rate buffs for Deadheads'
		];
		expect(
			regroupAbilityChanges([{ ability: 'Gloom Bombs', bullets }], abilities)
		).toEqual([{ ability: 'Jar of Dead', bullets }]);
	});

	it('resolves historical ability terminology before carrying a group forward', () => {
		const cases = [
			['Ice Path', 'ice-path', 'While Ice Pathing you no longer slow down'],
			[
				"Enchanter's Satchel",
				'enchanters-satchel',
				'Enchanted Satchel cast time reduced'
			],
			['Grapple Arm', 'grapple-arm', 'Fixed hooking through veils'],
			['Flying Cloak', 'flying-cloak', 'Fixed camera movement after using Cloak'],
			['Flight', 'flight', 'Shooting while flying now slows you'],
			['Air Drop', 'air-drop', 'Fixed clicking noise when flying while disarmed'],
			['Last Stand', 'last-stand', 'Gain bullet resistance during the ult channel'],
			['Flying Slash', 'flying-slash', 'Grapple post cast duration reduced'],
			['Assassinate', 'assassinate', 'Low HP indication now shows while unscoped'],
			[
				'Rejuvenating Aurora',
				'rejuvenating-aurora',
				'Fixed Magic Carpet + Dynamo heal interaction'
			],
			['Sleep Dagger', 'sleep-dagger', 'Sleep state no longer disables the target'],
			['Rabbit Hex', 'rabbit-hex', 'Rabbit can now use jump'],
			['Spirit Lasso', 'spirit-lasso', 'Fixed being able to melee while casting Lasso'],
			['Gutshot', 'gutshot', 'Gut Shot wall stun reduced'],
			['Petrifying Bola', 'petrifying-bola', 'Fixed damage going through Petrify']
		] as const;

		for (const [name, slug, bullet] of cases) {
			expect(
				regroupAbilityChanges(
					[{ ability: 'Other Ability', bullets: [bullet] }],
					[
						{ name: 'Other Ability', slug: 'other-ability' },
						{ name, slug }
					]
				),
				bullet
			).toEqual([{ ability: name, bullets: [bullet] }]);
		}
	});

	it('assigns interaction notes to the first ability mentioned', () => {
		const interactionAbilities = [
			{ name: 'Spirit Lasso', slug: 'spirit-lasso' },
			{ name: 'Bounce Pad', slug: 'bounce-pad' },
			{ name: "Enchanter's Satchel", slug: 'enchanters-satchel' },
			{ name: 'Flying Cloak', slug: 'flying-cloak' },
			{ name: 'Lethal Venom', slug: 'lethal-venom' },
			{ name: 'Petrifying Bola', slug: 'petrifying-bola' },
			{ name: 'Barrage', slug: 'barrage' }
		];
		const cases = [
			['Spirit Lasso', 'Lasso bonus Bounce Pad duration reduced'],
			['Bounce Pad', 'Fixed height on damage from Bounce Pad while using lasso'],
			[
				"Enchanter's Satchel",
				"Enchanter's Satchel failed when teleporting with Flying Cloak"
			],
			['Barrage', 'Barrage now lets you use Flying Cloak during the ability'],
			['Lethal Venom', 'Lethal Venom now deals damage through petrify']
		] as const;

		for (const [ability, bullet] of cases) {
			expect(
				regroupAbilityChanges(
					[{ ability: 'Other Ability', bullets: [bullet] }],
					[{ name: 'Other Ability', slug: 'other-ability' }, ...interactionAbilities]
				),
				bullet
			).toEqual([{ ability, bullets: [bullet] }]);
		}
	});

	it('finds ability names with internal lowercase words or after a leading verb', () => {
		expect(
			regroupAbilityChanges(
				[
					{
						ability: 'Ava',
						bullets: [
							'Return to Shadows cooldown increased',
							'Fixed Leaping Slash doing bonus damage'
						]
					},
					{
						ability: 'Can',
						bullets: [
							'Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam)'
						]
					}
				],
				abilities
			)
		).toEqual([
			{ ability: 'Return to Shadows', bullets: ['Return to Shadows cooldown increased'] },
			{ ability: 'Leaping Slash', bullets: ['Fixed Leaping Slash doing bonus damage'] },
			{
				ability: 'Frozen Shelter',
				bullets: [
					'Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam)'
				]
			}
		]);
	});

	it('preserves a derived heading when it identifies the same ability', () => {
		const groups = [
			{
				ability: 'Call Bell Charge Time',
				bullets: ['Call Bell Charge Time increased from 6s to 7s']
			}
		];
		expect(regroupAbilityChanges(groups, abilities)).toEqual(groups);
	});
});
