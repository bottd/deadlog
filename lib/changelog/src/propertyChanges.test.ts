import { describe, expect, it } from 'vitest';
import { linkPropertyChanges, readBullet, type ScopedBullet } from './propertyChanges';

const event = (bullet: string, scope: string | null = null) => {
	const reading = readBullet(bullet, scope);
	return reading.kind === 'event' ? reading.event : reading.kind;
};

describe('readBullet', () => {
	it('reads the explicit from-to forms found in the notes', () => {
		expect(event('Cooldown increased from 20s to 26s')).toEqual({
			property: 'cooldown',
			qualifier: '',
			old: { amount: 20, unit: 's', text: '20s' },
			new: { amount: 26, unit: 's', text: '26s' }
		});
		expect(event('Grapple cooldown decreased from 45s to 40s', 'Grapple')).toMatchObject({
			property: 'cooldown',
			old: { amount: 45 }
		});
		expect(
			event('Static Charge base radius reduced from 8m to 5m', 'Static Charge')
		).toMatchObject({ property: 'radius', qualifier: 'base' });
		expect(
			event('Sleep Dagger T2 cooldown changed from -15s to -13s', 'Sleep Dagger')
		).toMatchObject({ qualifier: 'T2', old: { amount: -15, text: '-15s' } });
		expect(event('Damage increased from 40% to 45%.')).toMatchObject({
			property: 'damage',
			new: { amount: 45, unit: '%' }
		});
	});

	it('takes a missing unit from the other side, and refuses two different units', () => {
		expect(event('Cooldown increased from 25 to 27s')).toMatchObject({
			old: { amount: 25, unit: 's', text: '25' }
		});
		expect(event('Radius changed from 5m to 20%')).toBe('barrier');
	});

	it('treats a property it can see but not read as a barrier, never as an event', () => {
		for (const bullet of [
			'Flying Cloak T3 reduced from -14s Cooldown to -13s',
			'Cooldown Reduction reduced from +20% to +12%',
			'Cooldown Reduction For Charged Abilities increased from +25% to 30%',
			'Bullet damage increased from 11.4 to 11.8',
			'Damage spirit scaling increased from 1.8 to 2.0',
			'Cooldown now scales with Spirit Power',
			'Radius increased by 2m',
			'Cooldown increased from 20s to 26s (was 18s before)'
		]) {
			expect(event(bullet), bullet).toBe('barrier');
		}
	});

	it('treats a rework as a barrier for everything in scope', () => {
		expect(readBullet('Screwjab Dagger has been reworked', 'Screwjab Dagger')).toEqual({
			kind: 'barrier',
			properties: 'all'
		});
		expect(readBullet('No longer grants +20% Ability Duration on proc', null)).toEqual({
			kind: 'barrier',
			properties: 'all'
		});
	});

	it('ignores bullets about something else, and a heading it was not given', () => {
		expect(event('Base health increased from 550 to 600')).toBe('unrelated');
		expect(event('Napalm cooldown increased from 25s to 27s', 'Afterburn')).toBe(
			'barrier'
		);
	});
});

const bullet = (
	patchId: string,
	publishedAt: string,
	text: string,
	overrides: Partial<ScopedBullet> = {}
): ScopedBullet => ({
	patchId,
	publishedAt,
	entityType: 'item',
	entityId: 7,
	ability: null,
	abilitySlug: null,
	groupIndex: 0,
	bulletIndex: 0,
	text,
	...overrides
});
const hero = (patchId: string, at: string, ability: string, slug: string, text: string) =>
	bullet(patchId, at, text, {
		entityType: 'hero',
		entityId: 1,
		ability,
		abilitySlug: slug
	});
const linksOf = (bullets: ScopedBullet[]) =>
	linkPropertyChanges(bullets).map((e) => [e.patchId, e.previous?.patchId ?? e.unlinked]);

describe('linkPropertyChanges', () => {
	it('links the immediately preceding change when the values meet', () => {
		const events = linkPropertyChanges([
			bullet('c', '2024-07-04', 'Cooldown increased from 30s to 45s'),
			bullet('a', '2024-05-10', 'Cooldown reduced from 55s to 50s'),
			bullet('b', '2024-06-20', 'Cooldown reduced from 50 to 30')
		]);

		expect(events.map((e) => [e.patchId, e.previous])).toEqual([
			['a', null],
			['b', { patchId: 'a', old: '55s', new: '50s' }],
			['c', { patchId: 'b', old: '50', new: '30' }]
		]);
	});

	it('refuses a link when the old value is not where the last change left it', () => {
		expect(
			linksOf([
				bullet('a', '2024-05-10', 'Cooldown reduced from 55s to 50s'),
				bullet('b', '2024-06-20', 'Cooldown reduced from 48s to 40s')
			])
		).toEqual([
			['a', 'first'],
			['b', 'value-mismatch']
		]);
	});

	it('does not link across an unreadable change to the same property, or a rework', () => {
		const chain = (middle: string) =>
			linksOf([
				bullet('a', '2024-05-10', 'Cooldown reduced from 55s to 50s'),
				bullet('m', '2024-06-01', middle),
				bullet('b', '2024-06-20', 'Cooldown reduced from 50s to 40s')
			]).at(-1);

		expect(chain('Cooldown now starts when the effect ends')).toEqual(['b', 'barrier']);
		expect(chain('Item reworked')).toEqual(['b', 'barrier']);
		expect(chain('Bonus health increased from 100 to 125')).toEqual(['b', 'a']);
	});

	it('keeps tiers, base values and abilities on separate chains', () => {
		expect(
			linksOf([
				hero(
					'a',
					'2024-08-01',
					'Static Charge',
					'static-charge',
					'Static Charge T2 radius increased from +5m to +7m'
				),
				hero(
					'b',
					'2024-08-15',
					'Static Charge',
					'static-charge',
					'Static Charge radius increased from 5m to 7m'
				),
				hero(
					'c',
					'2024-08-29',
					'Static Charge',
					'static-charge',
					'Static Charge T2 radius increased from +7m to +8m'
				),
				hero(
					'd',
					'2024-09-01',
					'Power Surge',
					'power-surge',
					'Power Surge radius increased from 7m to 8m'
				)
			])
		).toEqual([
			['a', 'first'],
			['b', 'first'],
			['c', 'a'],
			['d', 'first']
		]);
	});

	it('does not order two changes inside one patch, or across patches published together', () => {
		expect(
			linksOf([
				bullet('a', '2025-07-01', 'Cooldown reduced from 70s to 60s'),
				bullet('b', '2025-07-29', 'Cooldown reduced from 60s to 45s'),
				bullet('b', '2025-07-29', 'Cooldown reduced from 45s to 25s', { bulletIndex: 1 }),
				bullet('c', '2025-09-04', 'Cooldown reduced from 25s to 20s')
			]).map(([, link]) => link)
		).toEqual(['first', 'ambiguous-order', 'ambiguous-order', 'ambiguous-order']);

		expect(
			linksOf([
				bullet('a', '2025-07-01', 'Cooldown reduced from 70s to 60s'),
				bullet('b', '2025-07-29', 'Cooldown reduced from 60s to 45s'),
				bullet('x', '2025-07-29', 'Bonus health increased from 1 to 2', { entityId: 8 })
			]).at(-1)
		).toEqual(['b', 'ambiguous-order']);
	});

	it('lets a change filed under an alias heading break the chain instead of joining it', () => {
		expect(
			linksOf([
				hero(
					'a',
					'2024-09-26',
					'Life Drain',
					'life-drain',
					'Life Drain cooldown reduced from 42s to 30s'
				),
				hero(
					'm',
					'2025-01-01',
					'Drain',
					'life-drain',
					'Drain cooldown reduced from 30s to 25s'
				),
				hero(
					'b',
					'2026-03-06',
					'Life Drain',
					'life-drain',
					'Life Drain cooldown increased from 30s to 34s'
				)
			])
		).toEqual([
			['a', 'first'],
			['b', 'barrier']
		]);
	});

	it('gives the same result whatever order the bullets arrive in, with a digest per bullet', () => {
		const bullets = [
			bullet('a', '2024-05-10', 'Cooldown reduced from 55s to 50s'),
			bullet('b', '2024-06-20', 'Cooldown reduced from 50s to 40s')
		];
		const forward = linkPropertyChanges(bullets);

		expect(linkPropertyChanges([...bullets].reverse())).toEqual(forward);
		expect(forward[0].digest).toMatch(/^[0-9a-f]{16}$/);
		expect(forward[0].digest).not.toBe(forward[1].digest);
	});
});
