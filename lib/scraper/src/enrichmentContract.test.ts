import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
	heroesApiResponseSchema,
	itemImage,
	itemsApiResponseSchema
} from './types/deadlockApi';

interface Property {
	value?: number | string | null;
	prefix?: string;
	postfix?: string;
	label?: string;
}

interface Asset {
	class_name: string;
	name: string;
	type: string;
	image?: string;
	description: Record<string, string | null>;
	properties: Record<string, Property>;
	tooltip_sections?: { section_attributes?: Record<string, unknown>[] }[];
	tooltip_details?: {
		info_sections?: {
			basic_properties?: string[];
			properties_block?: { properties?: Record<string, unknown>[] }[];
		}[];
	};
}

interface Fixture {
	heroes: { id: number; items: Record<string, string> }[];
	items: Asset[];
	byHeroId: Record<string, string[]>;
	secondVersion: { properties: Record<string, { pinned: string; second: string }> };
}

const fixture = JSON.parse(
	readFileSync(new URL('./fixtures/enrichment/assets-6698.json', import.meta.url), 'utf8')
) as Fixture;

const byName = (name: string) => {
	const asset = fixture.items.find((item) => item.name === name);
	if (!asset) throw new Error(`${name} is not in the fixture`);
	return asset;
};

function displayedKeys(asset: Asset): string[] {
	const strings = (value: unknown): string[] =>
		Array.isArray(value) ? value.filter((key) => typeof key === 'string') : [];
	const shop = (asset.tooltip_sections ?? []).flatMap((section) =>
		(section.section_attributes ?? []).flatMap((attribute) => [
			...strings(attribute.properties),
			...strings(attribute.important_properties),
			...strings(attribute.elevated_properties)
		])
	);
	const ability = (asset.tooltip_details?.info_sections ?? []).flatMap((section) => [
		...(section.basic_properties ?? []),
		...(section.properties_block ?? []).flatMap((block) =>
			(block.properties ?? []).flatMap((entry) =>
				strings([entry.important_property, entry.status_effect_value])
			)
		)
	]);
	return [...shop, ...ability];
}

describe('pinned asset evidence (client version 6698)', () => {
	it('still parses with the snapshot schemas', () => {
		expect(heroesApiResponseSchema.safeParse(fixture.heroes).success).toBe(true);
		expect(itemsApiResponseSchema.safeParse(fixture.items).success).toBe(true);
	});

	it('joins signature slots to item class names, as by-hero-id does', () => {
		const hero = fixture.heroes[0];
		const signatures = Object.entries(hero.items)
			.filter(([slot]) => slot.startsWith('signature'))
			.map(([, className]) => className);
		const bound = fixture.byHeroId[hero.id];

		expect(signatures).toHaveLength(4);
		for (const className of signatures) expect(bound).toContain(className);
		expect(bound).not.toContain(hero.items.ability_jump);
		expect(bound).not.toContain(hero.items.weapon_primary);
		expect(fixture.items.map((item) => item.class_name)).toContain(hero.items.signature1);
	});

	it('falls back to the shop image when an item has no image', () => {
		const item = byName('Mystic Conduit');
		const parsed = itemsApiResponseSchema.parse([item])[0];

		expect(item.image).toBeUndefined();
		expect(itemImage(parsed)).toMatch(/\.webp$/);
	});

	it('carries reading context outside desc', () => {
		expect(byName('Afterburn').description.t3_desc).toBeTruthy();
		expect(
			byName('Healing Rite').description.active ?? byName('Healing Rite').description.desc
		).toBeTruthy();
		expect(byName('Extended Magazine').description.desc ?? null).toBeNull();
	});

	it('serves markup that is not well formed', () => {
		const swap = byName('Paradoxical Swap').description.desc ?? '';
		const opened = swap.match(/<span\b/g)?.length ?? 0;
		const closed = swap.match(/<\/span>/g)?.length ?? 0;

		expect(opened).toBeGreaterThan(closed);
		expect(byName('Napalm').description.desc).toMatch(/<svg[\s\S]*<\/svg>/);
		expect(byName('Rabbit Hex').description.desc).toMatch(/<Panel\b/);
		expect(byName('Riposte').description.t3_desc).toContain('&amp;');
	});

	it('resolves displayed property keys, except status-effect names and blank keys', () => {
		for (const asset of fixture.items) {
			for (const key of displayedKeys(asset)) {
				if (key === '' || key.startsWith('StatusEffect')) continue;
				expect(asset.properties[key], `${asset.name}: ${key}`).toBeDefined();
			}
		}
	});

	it('represents displayed values as numbers or numeric strings, some with a unit', () => {
		for (const asset of fixture.items) {
			for (const key of displayedKeys(asset)) {
				const property = asset.properties[key];
				if (!property?.label) continue;

				expect(String(property.value), `${asset.name}: ${key}`).toMatch(
					/^-?\d*\.?\d+(m|s)?$/
				);
				expect(['+', '-', '', '{s:sign}', undefined]).toContain(property.prefix);
			}
		}
	});

	it('serves different values for a different client version', () => {
		for (const { pinned, second } of Object.values(fixture.secondVersion.properties)) {
			expect(pinned).not.toBe(second);
		}
	});
});
