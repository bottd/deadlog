<script lang="ts">
	import Clapperboard from '@lucide/svelte/icons/clapperboard';
	import ExternalLink from '@lucide/svelte/icons/external-link';

	interface Props {
		src: string;
		label: string;
	}

	// The label arrives already cleaned by the scraper, so this stays a pure renderer.
	let { src, label }: Props = $props();
</script>

<a
	href={src}
	target="_blank"
	rel="noopener noreferrer"
	class="video-link ui-focus-ring"
	data-prose-ui
	aria-label="{label} — video clip, opens on the Deadlock forums"
>
	<Clapperboard class="icon-sm video-icon" aria-hidden="true" />
	<span>{label}</span>
	<ExternalLink class="icon-xs" aria-hidden="true" />
</a>

<style>
	@layer components.features {
		.video-link {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			margin-block: 0.5rem;
			padding: 0.375rem 0.625rem;
			border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
			border-radius: var(--radius-md);
			background: color-mix(in srgb, var(--card) 60%, transparent);
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			font-weight: 500;
			text-decoration: none;
			transition:
				border-color var(--duration-normal),
				color var(--duration-normal);
			&:hover {
				border-color: color-mix(in srgb, var(--signal) 50%, transparent);
				color: var(--foreground);
			}
			& span {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			& :global(.video-icon) {
				color: var(--signal);
			}
		}
	}
</style>
