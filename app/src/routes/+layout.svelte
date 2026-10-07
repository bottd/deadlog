<script lang="ts">
	import '../app.css';
	import Header from '#lib/components/header/Header.svelte';
	import { Toaster } from 'svelte-sonner';
	import Footer from '#lib/components/ui/footer/footer.svelte';
	import ScrollToTop from '#lib/components/scroll-to-top/ScrollToTop.svelte';
	import * as Tooltip from '#lib/components/ui/tooltip/index.ts';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/env';

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

	const markReady = (node: HTMLElement) => {
		node.dataset.appReady = 'true';
	};
</script>

<QueryClientProvider client={queryClient}>
	<Tooltip.Provider>
		<div class="app-shell" data-app-ready="false" {@attach markReady}>
			<a href="#main-content" class="skip-link caps"> Skip to content </a>
			<Toaster
				theme="dark"
				class="toaster"
				style="--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border);"
			/>

			<Header />

			<div id="main-content" tabindex="-1" class="main-content">
				{@render children?.()}
			</div>

			<Footer />

			<ScrollToTop />
		</div>
	</Tooltip.Provider>
</QueryClientProvider>

<style>
	@layer components.features {
		.app-shell {
			min-block-size: 100vh;
			background-image:
				radial-gradient(
					circle at 88% 0%,
					oklch(from var(--signal) l c h / 0.11),
					transparent 30rem
				),
				radial-gradient(
					circle at 8% 24%,
					oklch(from var(--primary) l c h / 0.045),
					transparent 24rem
				),
				linear-gradient(
					oklch(from var(--grid-color) l c h / var(--grid-opacity)) 1px,
					transparent 1px
				),
				linear-gradient(
					90deg,
					oklch(from var(--grid-color) l c h / var(--grid-opacity)) 1px,
					transparent 1px
				);
			background-size:
				auto,
				auto,
				var(--grid-size) var(--grid-size),
				var(--grid-size) var(--grid-size);
		}
		.main-content {
			outline: none;
			animation: fade-in 500ms var(--ease-out) 150ms backwards;
		}
		.skip-link {
			position: absolute;
			inline-size: 1px;
			block-size: 1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
			&:focus {
				position: fixed;
				top: 1rem;
				left: 1rem;
				z-index: 100;
				inline-size: auto;
				block-size: auto;
				overflow: visible;
				clip-path: none;
				padding: 0.5rem 1rem;
				background: var(--primary);
				color: var(--primary-foreground);
				font: 700 var(--text-xs)/var(--leading-xs) var(--font-mono);
			}
		}
	}
</style>
