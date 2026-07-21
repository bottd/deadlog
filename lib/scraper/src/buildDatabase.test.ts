import { describe, expect, it } from 'vitest';
import { parseItemTaxonomy } from './buildDatabase';

describe('parseItemTaxonomy', () => {
	it('retains the upstream shop category and tier', () => {
		const taxonomy = parseItemTaxonomy([
			{
				id: 1,
				item_slot_type: 'vitality',
				item_tier: 3,
				shopable: true,
				disabled: false
			}
		]);

		expect(taxonomy.get(1)).toEqual({
			category: 'vitality',
			tier: 3,
			shopable: true,
			disabled: false
		});
	});

	it('uses a neutral category when upstream does not classify the record', () => {
		const taxonomy = parseItemTaxonomy([
			{ id: 2, item_slot_type: 'unknown', shopable: false, disabled: true }
		]);
		expect(taxonomy.get(2)?.category).toBeNull();
	});
});
