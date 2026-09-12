import { describe, expect, it } from 'vitest';
import { changelogsListKey, filtersToSearchParams, parseFilters } from './keys';

describe('filter contract', () => {
	it('round-trips trimmed filters and deduplicates article/case aliases', () => {
		const filters = parseFilters(
			new URLSearchParams(
				'hero=The+Doorman,doorman,Abrams&item=Decay&q=+Parry+&major=true'
			)
		);
		expect(filters).toEqual({
			hero: ['The Doorman', 'Abrams'],
			item: ['Decay'],
			q: 'Parry',
			major: true
		});
		expect(parseFilters(filtersToSearchParams(filters))).toEqual(filters);
	});

	it('uses the same query cache entry for equivalent intersection filters', () => {
		expect(changelogsListKey({ hero: ['Abrams', 'The Doorman'] })).toEqual(
			changelogsListKey({ hero: ['doorman', 'abrams'] })
		);
	});
});
