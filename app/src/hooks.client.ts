import { env } from '$env/dynamic/public';

export async function init() {
	const siteId = env.PUBLIC_COUNTERSCALE_SITE_ID;
	const reporterUrl = env.PUBLIC_COUNTERSCALE_REPORTER_URL;
	if (!siteId || !reporterUrl) return;

	const { init: counterscaleInit } = await import('@counterscale/tracker');
	counterscaleInit({
		siteId,
		reporterUrl
	});
}
