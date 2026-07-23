import { defineConfig, presetWind3, transformerDirectives } from 'unocss';
import type { Rule } from 'unocss';

/**
 * The shadcn components lean on tailwindcss-animate's `animate-in` / `animate-out`
 * vocabulary, which presetWind3 has no equivalent for. Rather than pull in another
 * preset for a handful of utilities, port the mechanism directly: two keyframes read
 * a set of custom properties, and each modifier sets one of them.
 */
const enterExitKeyframes = `
@keyframes enter {
	from {
		opacity: var(--un-enter-opacity, 1);
		transform: translate3d(var(--un-enter-translate-x, 0), var(--un-enter-translate-y, 0), 0)
			scale3d(var(--un-enter-scale, 1), var(--un-enter-scale, 1), var(--un-enter-scale, 1));
	}
}
@keyframes exit {
	to {
		opacity: var(--un-exit-opacity, 1);
		transform: translate3d(var(--un-exit-translate-x, 0), var(--un-exit-translate-y, 0), 0)
			scale3d(var(--un-exit-scale, 1), var(--un-exit-scale, 1), var(--un-exit-scale, 1));
	}
}
`;

/** `slide-in-from-top-2` counts in spacing units; a bare `slide-in-from-top` is a full side. */
const slideDistance = (raw?: string) =>
	raw === undefined ? '100%' : `${Number(raw) / 4}rem`;

/** `fade-in-0`, `zoom-in-95` — a percentage written without its sign or unit. */
const percent = (raw = '0') => String(Number(raw) / 100);

/** `start`/`end` are the logical directions; the app is LTR-only, so they map to x. */
const slideAxis = {
	top: ['y', '-'],
	bottom: ['y', ''],
	left: ['x', '-'],
	right: ['x', ''],
	start: ['x', '-'],
	end: ['x', '']
} as const;

const slideProperty = (
	phase: 'enter' | 'exit',
	side: keyof typeof slideAxis,
	distance: string
) => {
	const [axis, sign] = slideAxis[side];
	return { [`--un-${phase}-translate-${axis}`]: sign + distance };
};

/** The presetWind3 scales the rules below read; UnoCSS types `theme` as bare `object`. */
interface ThemeScales {
	duration?: Record<string, string>;
	easing?: Record<string, string>;
}

/** Look a value up in one of presetWind3's own scales, or take an arbitrary `[…]` value. */
const fromTheme = (raw: string, scale: keyof ThemeScales, theme: object) =>
	(theme as ThemeScales)[scale]?.[raw] ??
	(raw.startsWith('[') && raw.endsWith(']') ? raw.slice(1, -1) : undefined);

const animationRules: Rule[] = [
	[
		/^animate-in$/,
		() => ({
			'animation-name': 'enter',
			'animation-duration': 'var(--un-animate-duration, 150ms)',
			'--un-enter-opacity': 'initial',
			'--un-enter-scale': 'initial',
			'--un-enter-translate-x': 'initial',
			'--un-enter-translate-y': 'initial'
		})
	],
	[
		/^animate-out$/,
		() => ({
			'animation-name': 'exit',
			'animation-duration': 'var(--un-animate-duration, 150ms)',
			'--un-exit-opacity': 'initial',
			'--un-exit-scale': 'initial',
			'--un-exit-translate-x': 'initial',
			'--un-exit-translate-y': 'initial'
		})
	],
	[/^fade-in(?:-(\d+))?$/, ([, n]) => ({ '--un-enter-opacity': percent(n) })],
	[/^fade-out(?:-(\d+))?$/, ([, n]) => ({ '--un-exit-opacity': percent(n) })],
	[/^zoom-in(?:-(\d+))?$/, ([, n]) => ({ '--un-enter-scale': percent(n) })],
	[/^zoom-out(?:-(\d+))?$/, ([, n]) => ({ '--un-exit-scale': percent(n) })],
	[
		/^slide-in-from-(top|bottom|left|right|start|end)(?:-(\d+))?$/,
		([, side, n]) =>
			slideProperty('enter', side as keyof typeof slideAxis, slideDistance(n))
	],
	[
		/^slide-out-to-(top|bottom|left|right|start|end)(?:-(\d+))?$/,
		([, side, n]) =>
			slideProperty('exit', side as keyof typeof slideAxis, slideDistance(n))
	],
	// tailwindcss-animate widens `duration-*` and `ease-*` to drive animations as well as
	// transitions, so `animate-in duration-500` reads the way the component authors meant
	// it. Both shadow a presetWind3 rule, so they resolve through the same theme scales and
	// fall through to the original when the value isn't one this rule understands.
	[
		/^duration-(.+)$/,
		([, raw], { theme }) => {
			const value =
				fromTheme(raw, 'duration', theme) ?? (/^\d+$/.test(raw) ? `${raw}ms` : undefined);
			if (!value) return;
			return {
				'--un-animate-duration': value,
				'animation-duration': value,
				'transition-duration': value
			};
		}
	],
	[
		/^ease-(.+)$/,
		([, raw], { theme }) => {
			const value = fromTheme(raw, 'easing', theme);
			if (!value) return;
			return { 'animation-timing-function': value, 'transition-timing-function': value };
		}
	]
];

/**
 * Every palette entry is a `var()` indirection, which UnoCSS cannot decompose into
 * channels — so `bg-card/80` would quietly drop the /80 and paint the colour at full
 * strength. Spelling each one as a color-mix around an `%alpha` placeholder (the shape
 * Tailwind 4 emits) keeps the opacity modifiers working. `app.css` owns the values.
 */
const colors = Object.fromEntries(
	[
		'background',
		'foreground',
		'card',
		'card-foreground',
		'card-accent',
		'popover',
		'popover-foreground',
		'primary',
		'primary-foreground',
		'primary-subtle',
		'signal',
		'signal-foreground',
		'signal-subtle',
		'secondary',
		'secondary-foreground',
		'muted',
		'muted-foreground',
		'accent',
		'accent-foreground',
		'destructive',
		'border',
		'input',
		'ring'
	].map((name) => [
		name,
		`color-mix(in oklab, var(--${name}) calc(%alpha * 100%), transparent)`
	])
);

export default defineConfig({
	presets: [presetWind3()],
	transformers: [transformerDirectives()],
	preflights: [{ getCSS: () => enterExitKeyframes }],
	rules: animationRules,
	theme: {
		/**
		 * presetWind3 ships the nine `aria-*` states Tailwind 3 had. bits-ui sets
		 * `aria-invalid` on invalid controls and the shadcn base classes key off it, so
		 * add it to the same map the built-in variants read.
		 */
		aria: { invalid: 'invalid="true"' },
		colors,
		fontFamily: {
			sans: 'var(--font-sans)',
			display: 'var(--font-display)',
			mono: 'var(--font-mono)'
		},
		borderRadius: {
			xs: '0.125rem',
			sm: 'calc(var(--radius) - 4px)',
			md: 'calc(var(--radius) - 2px)',
			lg: 'var(--radius)',
			xl: 'calc(var(--radius) + 4px)'
		}
	}
});
