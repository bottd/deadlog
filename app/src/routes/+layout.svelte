<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

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
	let appReady = $state(false);

	onMount(() => {
		appReady = true;
	});
</script>

<QueryClientProvider client={queryClient}>
	<Tooltip.Provider>
		<div class="bg-background bg-wire-grid min-h-screen" data-app-ready={appReady}>
			<a
				href="#main-content"
				class="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:tracking-wider focus:uppercase"
			>
				Skip to content
			</a>
			<Toaster />

			<Header />

			<div id="main-content" tabindex="-1" class="animate-entrance-up outline-none">
				{@render children?.()}
			</div>

			<Footer />
		</div>
	</Tooltip.Provider>
</QueryClientProvider>
