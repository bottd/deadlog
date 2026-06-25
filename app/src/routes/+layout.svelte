<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
				staleTime: 60 * 60 * 1000,
				gcTime: 30 * 60 * 1000,
				refetchOnWindowFocus: false,
				refetchOnReconnect: true,
				retry: 3,
				retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
			}
		}
	});

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<Tooltip.Provider>
		<div class="bg-background bg-wire-grid min-h-screen">
			<Toaster />

			<Header />

			<div class="animate-entrance-up">
				{@render children?.()}
			</div>

			<Footer />
		</div>
	</Tooltip.Provider>
</QueryClientProvider>
