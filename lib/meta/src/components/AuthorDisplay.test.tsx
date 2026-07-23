import { describe, expect, it } from 'vitest';
import { fromJsx } from '@takumi-rs/helpers/jsx';
import React from 'react';

import { AuthorDisplay } from './AuthorDisplay';

describe('AuthorDisplay', () => {
	it('converts with the current Takumi result shape when the avatar is missing', async () => {
		const result = await fromJsx(
			React.createElement(AuthorDisplay, { author: 'Yoshi', authorIcon: null })
		);

		expect(result.node).toBeDefined();
		expect(result.stylesheets).toEqual(expect.any(Array));
		expect(JSON.stringify(result.node)).not.toContain('"type":"image"');
	});
});
