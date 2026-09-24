import { E as clsx, n as attr_style, t as attr_class } from './server2.js';
//#region src/lib/components/ui/corner-accents/CornerAccents.svelte
function CornerAccents($$renderer, $$props) {
	let {
		tlSize,
		brSize,
		tlColor = 'bg-primary/40',
		brColor = 'bg-primary/20',
		tlHover = '',
		brHover = '',
		thickness = '1px',
		class: className = ''
	} = $$props;
	function bar($$renderer, corner, tone, hover, height, width) {
		$$renderer.push(
			`<div${attr_class(
				clsx([
					'absolute',
					corner,
					tone,
					hover,
					className,
					'transition-colors duration-300'
				])
			)} aria-hidden="true"${attr_style('', {
				height,
				width
			})}></div>`
		);
	}
	bar($$renderer, 'top-0 left-0', tlColor, tlHover, tlSize, thickness);
	$$renderer.push(`<!----> `);
	bar($$renderer, 'top-0 left-0', tlColor, tlHover, thickness, tlSize);
	$$renderer.push(`<!----> `);
	if (brSize) {
		$$renderer.push('<!--[0-->');
		bar($$renderer, 'right-0 bottom-0', brColor, brHover, brSize, thickness);
		$$renderer.push(`<!----> `);
		bar($$renderer, 'right-0 bottom-0', brColor, brHover, thickness, brSize);
		$$renderer.push(`<!---->`);
	} else $$renderer.push('<!--[-1-->');
	$$renderer.push(`<!--]-->`);
}
//#endregion
export { CornerAccents as t };
