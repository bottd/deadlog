import {
	PUBLIC_COUNTERSCALE_SITE_ID as siteId,
	PUBLIC_COUNTERSCALE_REPORTER_URL as reporterUrl
} from '$app/env/public';

export async function init() {
	if (!siteId || !reporterUrl) return;

	const { init: counterscaleInit } = await import('@counterscale/tracker');
	counterscaleInit({
		siteId,
		reporterUrl
	});
}
