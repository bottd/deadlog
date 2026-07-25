// Static content off a static DB, like the /hero/[slug] pages it links to. Left as
// SSR it paid a cold start and two full table reads per crawl for nothing.
export const prerender = true;
