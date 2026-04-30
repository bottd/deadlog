import {
	PUBLIC_COUNTERSCALE_SITE_ID,
	PUBLIC_COUNTERSCALE_REPORTER_URL
} from '$env/static/public';

export async function init() {
	const { init: counterscaleInit } = await import('@counterscale/tracker');
	counterscaleInit({
		siteId: PUBLIC_COUNTERSCALE_SITE_ID,
		reporterUrl: PUBLIC_COUNTERSCALE_REPORTER_URL
	});
}
