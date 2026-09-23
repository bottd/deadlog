import { describe, expect, it } from 'vitest';
import { selectAbilityOrder } from './abilityOrder';

describe('selectAbilityOrder', () => {
	it('credits each match to the first ability to reach its third upgrade', () => {
		const order = selectAbilityOrder({
			abilityIds: [1, 2, 3],
			before: [
				{ abilities: [1, 2, 1, 1, 2, 1, 2, 2], matches: 700 },
				{ abilities: [2, 1, 2, 2, 2, 1, 1, 1], matches: 300 },
				{ abilities: [3, 1, 2], matches: 50 }
			]
		});

		expect(order).toEqual({
			methodVersion: 1,
			matches: 1050,
			abilities: [
				{ id: 1, before: 700 },
				{ id: 2, before: 300 },
				{ id: 3, before: 0 }
			]
		});
	});

	it('records nothing under the sample floor, and no after side under it', () => {
		const small = [{ abilities: [1, 1, 1, 1], matches: 999 }];
		const large = [{ abilities: [1, 1, 1, 1], matches: 1000 }];

		expect(selectAbilityOrder({ abilityIds: [1], before: small })).toBeNull();
		expect(selectAbilityOrder({ abilityIds: [1], before: large, after: small })).toEqual({
			methodVersion: 1,
			matches: 1000,
			abilities: [{ id: 1, before: 1000 }]
		});
	});

	it('ignores an ability that is not the hero’s', () => {
		const order = selectAbilityOrder({
			abilityIds: [1],
			before: [
				{ abilities: [9, 9, 9, 9, 1, 1, 1, 1], matches: 1000 },
				{ abilities: [1, 1, 1, 1], matches: 500 }
			]
		});
		expect(order?.abilities).toEqual([{ id: 1, before: 500 }]);
	});
});
