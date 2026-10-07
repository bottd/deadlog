<script lang="ts">
	import Crosshair from '@lucide/svelte/icons/crosshair';
</script>

<footer>
	<div class="editorial-divider"></div>
	<div class="page-container footer-content">
		<a href="/" class="footer-brand">
			<div class="brand-mark"><Crosshair class="icon-sm" /></div>
			<span class="brand-name">dead<span>log</span><small>.io</small></span>
		</a>
		<div class="credits">
			<a href="/archive" class="archive-link ui-focus-ring">Browse all patches</a>
			<p>
				Data provided by <a
					href="https://deadlock-api.com"
					target="_blank"
					rel="noopener noreferrer">Deadlock API</a
				>
			</p>
			<p>Deadlock is a trademark of Valve Corporation</p>
		</div>
		<!-- Full tone at 11px: 9px at 40% alpha under the flicker measured 2.24:1. -->
		<div class="transmission"><span>// end transmission</span></div>
	</div>
</footer>

<style>
	@layer components.features {
		footer {
			margin-top: 6rem;
			padding-bottom: 2rem;
		}
		.editorial-divider {
			margin-bottom: 2.5rem;
		}
		.footer-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
		}
		.footer-brand {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			transition: opacity var(--duration-normal);
			&:hover {
				opacity: 0.8;
			}
		}
		.brand-mark {
			display: flex;
			inline-size: 1.75rem;
			block-size: 1.75rem;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius-md);
			background: color-mix(in srgb, var(--signal) 10%, transparent);
			color: var(--signal);
			transition: background-color var(--duration-normal);
		}
		.footer-brand:hover .brand-mark {
			background: color-mix(in srgb, var(--signal) 15%, transparent);
		}
		.brand-name {
			color: var(--muted-foreground);
			font: 600 var(--text-sm)/var(--leading-sm) var(--font-display);
			letter-spacing: 0.025em;
			& span {
				color: var(--primary);
			}
			& small {
				font-family: var(--font-mono);
				font-size: 0.6875rem;
			}
		}
		.credits {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.375rem;
			text-align: center;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
			& a {
				color: var(--signal);
			}
			& p a {
				transition: opacity var(--duration-normal);
				&:hover {
					opacity: 0.8;
				}
			}
		}
		.archive-link {
			display: inline-flex;
			min-block-size: 2.75rem;
			align-items: center;
			margin-bottom: 0.5rem;
			border-radius: var(--radius-sm);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			text-underline-offset: 4px;
			&:hover {
				text-decoration: underline;
			}
		}
		.transmission {
			display: flex;
			align-items: center;
			gap: 1rem;
			color: var(--muted-foreground);
			font-family: var(--font-mono);
			font-size: 0.6875rem;
			text-transform: uppercase;
			letter-spacing: 0.25em;
			&::before,
			&::after {
				content: '';
				inline-size: 2.5rem;
				block-size: 1px;
				background: color-mix(in srgb, var(--signal) 20%, transparent);
			}
			& span {
				animation: terminal-flicker 4s ease-in-out infinite;
			}
		}
	}
</style>
