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
	class="video-link border-border/60 bg-card/60 text-muted-foreground hover:border-signal/50 hover:text-foreground focus-visible:ring-ring my-2 inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium no-underline transition-colors focus-visible:ring-2 focus-visible:outline-none"
	aria-label="{label} — video clip, opens on the Deadlock forums"
>
	<Clapperboard class="text-signal size-3.5 shrink-0" aria-hidden="true" />
	<span class="truncate">{label}</span>
	<ExternalLink class="size-3 shrink-0 opacity-60" aria-hidden="true" />
</a>
