<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	import { setSearchParams } from '$lib/stores/searchParams.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// Note: We use SvelteKit load functions for SSR, so queries start in browser.
				// The initialData pattern hydrates the cache from SSR data.
				enabled: browser,
				// Changelog data is mostly static - 1 hour stale time is appropriate
				// Individual past changelogs could use Infinity, but this is a good default
				staleTime: 60 * 60 * 1000,
				// Keep unused data in cache for 30 minutes for smooth back-navigation
				gcTime: 30 * 60 * 1000,
				// Changelogs are static reading content - no need to refetch on focus
				refetchOnWindowFocus: false,
				// Refetch when reconnecting to network (useful for mobile)
				refetchOnReconnect: true,
				// Retry failed requests up to 3 times with exponential backoff
				retry: 3,
				retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
			}
		}
	});

	// Initialize search params context for all child components
	setSearchParams();

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<Tooltip.Provider>
		<div class="bg-background bg-wire-grid min-h-screen">
			<Toaster />

			<Header />

			{@render children?.()}

			<Footer />
		</div>
	</Tooltip.Provider>
</QueryClientProvider>
