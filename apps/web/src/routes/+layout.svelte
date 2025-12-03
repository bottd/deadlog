<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { setSearchParams } from '$lib/stores/searchParams.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: Infinity,
				refetchOnWindowFocus: false
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
