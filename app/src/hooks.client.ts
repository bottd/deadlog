import {
	PUBLIC_COUNTERSCALE_SITE_ID,
	PUBLIC_COUNTERSCALE_REPORTER_URL
} from '$app/env/public';

export async function init() {
	const siteId = PUBLIC_COUNTERSCALE_SITE_ID;
	const reporterUrl = PUBLIC_COUNTERSCALE_REPORTER_URL;
	if (!siteId || !reporterUrl) return;

	const { init: counterscaleInit } = await import('@counterscale/tracker');
	counterscaleInit({
		siteId,
		reporterUrl
	});
}
