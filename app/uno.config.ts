import {
	defineConfig,
	presetAttributify,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

/**
 * `app.css` owns the palette: it defines the raw Melange ramp and the semantic tokens
 * (`--card`, `--signal`, …) that hand-written CSS like `.bg-wire-grid` also reads. The
 * theme below only names them, so there is one place to change a colour. presetWind4
 * re-exports each as `--colors-*` and applies opacity modifiers with `color-mix`, so
 * `bg-card/80` works even though the value is a `var()` indirection.
 */
const semanticColors = [
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
];

const colors = Object.fromEntries(semanticColors.map((name) => [name, `var(--${name})`]));

export default defineConfig({
	presets: [presetWind4(), presetAttributify()],
	transformers: [transformerDirectives(), transformerVariantGroup()],

	theme: {
		colors: { ...colors, subtle: 'var(--border-subtle)' },

		font: {
			sans: "'Archivo', ui-sans-serif, system-ui, sans-serif",
			display: "'Oswald', ui-sans-serif, sans-serif",
			mono: "'JetBrains Mono', ui-monospace, monospace"
		},

		/**
		 * Unitless leadings, as Tailwind 4 wrote them. `text-[10px]` sets font-size and
		 * nothing else, so its line box comes from whatever an ancestor established — and
		 * a ratio re-scales on inherit where presetWind4's absolute `1.25rem` would not.
		 * The small mono labels (41 `text-[Npx]` sites) sit inside `text-sm`/`text-xs`
		 * containers and depend on that. Each entry still computes to presetWind4's own
		 * value at its own size, so nothing else moves.
		 */
		text: {
			xs: { fontSize: '0.75rem', lineHeight: 'calc(1 / 0.75)' },
			sm: { fontSize: '0.875rem', lineHeight: 'calc(1.25 / 0.875)' },
			base: { fontSize: '1rem', lineHeight: 'calc(1.5 / 1)' },
			lg: { fontSize: '1.125rem', lineHeight: 'calc(1.75 / 1.125)' },
			xl: { fontSize: '1.25rem', lineHeight: 'calc(1.75 / 1.25)' },
			'2xl': { fontSize: '1.5rem', lineHeight: 'calc(2 / 1.5)' },
			'3xl': { fontSize: '1.875rem', lineHeight: 'calc(2.25 / 1.875)' },
			'4xl': { fontSize: '2.25rem', lineHeight: 'calc(2.5 / 2.25)' }
		},

		radius: {
			sm: 'calc(var(--radius) - 4px)',
			md: 'calc(var(--radius) - 2px)',
			lg: 'var(--radius)',
			xl: 'calc(var(--radius) + 4px)'
		},

		/**
		 * Overlay motion. bits-ui drives these through `data-[state]`, so each direction
		 * needs its own keyframe rather than one reversible pair. Emitted only when used.
		 */
		animation: {
			keyframes: {
				'fade-in': '{from{opacity:0}to{opacity:1}}',
				'fade-out': '{from{opacity:1}to{opacity:0}}',
				'slide-up-in': '{from{transform:translateY(100%)}to{transform:translateY(0)}}',
				'slide-down-out': '{from{transform:translateY(0)}to{transform:translateY(100%)}}',
				'pop-in':
					'{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}',
				'pop-out':
					'{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}'
			},
			durations: {
				'fade-in': '200ms',
				'fade-out': '200ms',
				'slide-up-in': '500ms',
				'slide-down-out': '300ms',
				'pop-in': '150ms',
				'pop-out': '150ms'
			},
			timingFns: {
				'fade-in': 'ease-out',
				'fade-out': 'ease-in',
				'slide-up-in': 'cubic-bezier(0.32, 0.72, 0, 1)',
				'slide-down-out': 'cubic-bezier(0.32, 0.72, 0, 1)',
				'pop-in': 'ease-out',
				'pop-out': 'ease-in'
			}
		}
	},

	shortcuts: {
		/** Every focusable surface shows the same ring, so it is defined once. */
		'ui-focus-ring': 'outline-none focus-visible:(border-ring ring-3 ring-ring/50)',

		btn: 'ui-focus-ring inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all active:scale-[0.97] disabled:(pointer-events-none op-50) aria-disabled:(pointer-events-none op-50) [&_svg]:(pointer-events-none shrink-0)',
		'btn-ghost': 'btn hover:(bg-accent text-accent-foreground)',
		'btn-sm': 'h-8 gap-1.5 px-3',
		'btn-icon': 'size-9',

		badge:
			'ui-focus-ring inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] [&>svg]:(pointer-events-none size-3)',
		'badge-default':
			'badge border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
		'badge-signal': 'badge border-signal/25 bg-signal/15 text-signal hover:bg-signal/25',

		/** Floating surfaces: one step above `--card` so they read as elevated. */
		overlay: 'fixed inset-0 z-50 bg-black/60',
		sheet: 'fixed z-50 flex flex-col gap-4 bg-background shadow-lg',
		'sheet-bottom': 'sheet inset-x-0 bottom-0 h-auto border-t',
		popover: 'z-50 rounded-md border bg-popover text-popover-foreground shadow-md',

		/** The small mono all-caps label used as a section kicker in 12 places. */
		kicker: 'font-mono uppercase tracking-widest',

		'menu-item':
			'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden aria-selected:(bg-accent text-accent-foreground) data-[disabled]:(pointer-events-none op-50) [&_svg]:(pointer-events-none shrink-0)'
	}
});
