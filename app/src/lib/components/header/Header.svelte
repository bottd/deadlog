<script lang="ts">
	import { page } from '$app/state';
	import FilterInput from '#lib/components/filter-bar/FilterInput.svelte';
	import Crosshair from '@lucide/svelte/icons/crosshair';
</script>

{#snippet navLink(href: string, section: string, label: string)}
	<a
		{href}
		aria-current={page.url.pathname.startsWith(section) ? 'page' : undefined}
		class="nav-link control-label caps ui-focus-ring">{label}</a
	>
{/snippet}

<header class="site-header">
	<div class="page-container">
		<nav aria-label="Primary navigation">
			<div class="nav-row">
				<a href="/" aria-label="deadlog.io - Home" class="wordmark">
					<div class="mark">
						<div class="mark-tile"><Crosshair class="icon-lg" /></div>
						<div class="mark-pip primary" aria-hidden="true"></div>
						<div class="mark-pip signal" aria-hidden="true"></div>
					</div>
					<div>
						<div class="wordmark-line">
							<span class="wordmark-name display-heading">dead<span>log</span></span>
							<span class="wordmark-domain caps">.io</span>
						</div>
						<span class="wordmark-description">Deadlock Changelog</span>
					</div>
				</a>
				<div class="nav-links">
					{@render navLink('/heroes', '/hero', 'Heroes')}
					{@render navLink('/items', '/item', 'Items')}
				</div>
			</div>
		</nav>
		<FilterInput />
	</div>
</header>

<style>
	@layer components.features {
		.site-header {
			position: sticky;
			top: var(--safe-area-inset-top);
			z-index: 50;
			padding-bottom: 0.75rem;
			border-bottom: 1px solid color-mix(in srgb, var(--signal) 15%, transparent);
			background: color-mix(in srgb, var(--card) 90%, transparent);
			backdrop-filter: blur(24px);
			animation: entrance-slide-down 500ms var(--ease-out) both;
		}
		.nav-row {
			display: flex;
			block-size: 4rem;
			align-items: center;
			justify-content: space-between;
		}
		.nav-links {
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
		.nav-link {
			display: inline-flex;
			min-block-size: 2.75rem;
			align-items: center;
			border-radius: var(--radius-md);
			padding-inline: 0.75rem;
			color: var(--muted-foreground);
			transition:
				background-color var(--duration-normal),
				color var(--duration-normal);
			&:is(:hover, [aria-current='page']) {
				background: color-mix(in srgb, var(--signal) 10%, transparent);
				color: var(--signal);
			}
		}
		.wordmark {
			display: flex;
			min-block-size: 2.75rem;
			align-items: center;
			gap: 1rem;
		}
		.mark {
			position: relative;
		}
		.mark-tile {
			display: flex;
			inline-size: 2.5rem;
			block-size: 2.5rem;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius-lg);
			background: color-mix(in srgb, var(--primary) 10%, transparent);
			color: var(--primary);
			transition: background-color var(--duration-slow);
		}
		.mark-tile :global(svg) {
			transition:
				scale var(--duration-slow),
				rotate var(--duration-slow);
		}
		.wordmark:hover .mark-tile {
			background: color-mix(in srgb, var(--primary) 20%, transparent);
		}
		.wordmark:hover .mark-tile :global(svg) {
			scale: 1.1;
			rotate: 45deg;
		}
		.mark-pip {
			position: absolute;
			inline-size: 0.375rem;
			block-size: 0.375rem;
			transition: opacity var(--duration-slow);
		}
		.mark-pip.primary {
			top: -0.125rem;
			left: -0.125rem;
			background: var(--primary);
			opacity: 0.6;
		}
		.mark-pip.signal {
			bottom: -0.125rem;
			right: -0.125rem;
			background: var(--signal);
			opacity: 0.7;
		}
		.wordmark:hover .mark-pip {
			opacity: 1;
		}
		.wordmark-line {
			display: flex;
			align-items: baseline;
			gap: 0.5rem;
		}
		.wordmark-name {
			font-size: var(--text-2xl);
			line-height: var(--leading-2xl);
		}
		.wordmark-name span {
			color: var(--primary);
		}
		.wordmark-domain {
			display: none;
			padding: 0.125rem 0.375rem;
			border-radius: var(--radius-md);
			background: color-mix(in srgb, var(--primary) 10%, transparent);
			color: var(--primary);
			font: 500 var(--text-2xs)/1.5 var(--font-mono);
		}
		.wordmark-description {
			display: none;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
			font-weight: 500;
			letter-spacing: 0.025em;
		}
		@media (min-width: 40rem) {
			.nav-links {
				gap: 0.5rem;
			}
		}
		@media (min-width: 48rem) {
			.wordmark-name {
				font-size: var(--text-3xl);
				line-height: 1.2;
			}
			.wordmark-domain {
				display: inline-block;
			}
			.wordmark-description {
				display: block;
			}
		}
	}
</style>
