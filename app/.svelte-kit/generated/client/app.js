// in dev, this makes Vite inject its client as this module's first dependency,
// so that global constant replacements are installed before any other module
// (including user hooks) evaluates. In build it's inert.
import.meta.hot;

import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [0];

export const dictionary = {
	'/': [~2],
	'/ability/[slug]': [~3],
	'/archive': [~4],
	'/change/[...slug]': [~5],
	'/heroes': [7],
	'/hero/[slug]': [~6],
	'/items': [9],
	'/item/[slug]': [~8]
};

export const hooks = {
	handleError:
		client_hooks.handleError ||
		(({ error }) => {
			console.error(error);
		}),
	init: client_hooks.init,
	reroute: () => {},
	transport: {}
};

export const decoders = Object.fromEntries(
	Object.entries(hooks.transport).map(([k, v]) => [k, v.decode])
);
export const encoders = Object.fromEntries(
	Object.entries(hooks.transport).map(([k, v]) => [k, v.encode])
);

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';

export const get_error_template = () =>
	import('../shared/error-template.js').then((m) => m.default);
