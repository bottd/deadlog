import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_COUNTERSCALE_SITE_ID: { public: true, schema: (input) => input },
	PUBLIC_COUNTERSCALE_REPORTER_URL: { public: true, schema: (input) => input }
});
