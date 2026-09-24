import { c as __exportAll, r as onDestroy } from '../../chunks/index-server.js';
import { i as createSubscriber, o as on } from '../../chunks/internal.js';
import {
	C as setContext,
	E as clsx,
	O as escape_html,
	S as hasContext,
	T as attr,
	Wt as run,
	a as derived,
	d as spread_props,
	f as stringify,
	i as bind_props,
	l as props_id,
	n as attr_style,
	r as attributes,
	s as ensure_array_like,
	t as attr_class,
	x as getContext
} from '../../chunks/server2.js';
import { n as page, t as Icon } from '../../chunks/Icon.js';
import {
	$ as Dismissible_layer,
	A as FilterInput,
	Ct as boxWith,
	E as skipToken,
	H as cn,
	J as Scroll_lock,
	Q as Escape_layer,
	S as partialMatchKey,
	St as cssToStyleObj,
	V as toastState,
	X as Text_selection_layer,
	Y as useId,
	Z as Focus_scope,
	_ as hashQueryKeyByOptions,
	_t as Context$1,
	at as isFocusVisible,
	b as matchQuery,
	bt as mergeProps,
	c as Removable,
	ct as createBitsAttrs,
	d as notifyManager,
	dt as DOMContext,
	et as Portal$1,
	f as focusManager,
	ft as getDocument,
	g as hashKey,
	gt as watch$1,
	h as functionalUpdate,
	ht as ElementSize,
	i as Query,
	it as isElement$1,
	l as createRetryer,
	lt as getDataTransitionAttrs,
	nt as noop$1,
	ot as isNotNull,
	p as Subscribable,
	pt as getWindow$1,
	r as setQueryClientContext,
	rt as PresenceManager,
	st as boolToEmptyStrOrUndef,
	tt as createId,
	u as onlineManager,
	ut as attachRef,
	w as resolveQueryValue,
	wt as simpleBox,
	x as noop$2,
	xt as styleToString,
	y as matchMutation,
	yt as createSubscriber$1,
	z as SonnerState
} from '../../chunks/context.js';
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
var sides = ['top', 'right', 'bottom', 'left'];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: 'right',
	right: 'left',
	bottom: 'top',
	top: 'bottom'
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === 'function' ? value(param) : value;
}
function getSide$1(placement) {
	return placement.split('-')[0];
}
function getAlignment(placement) {
	return placement.split('-')[1];
}
function getOppositeAxis(axis) {
	return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
	return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === 't' || firstChar === 'b' ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide =
		alignmentAxis === 'x'
			? alignment === (rtl ? 'end' : 'start')
				? 'right'
				: 'left'
			: alignment === 'start'
				? 'bottom'
				: 'top';
	if (rects.reference[length] > rects.floating[length])
		mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes('start')
		? placement.replace('start', 'end')
		: placement.replace('end', 'start');
}
var lrPlacement = ['left', 'right'];
var rlPlacement = ['right', 'left'];
var tbPlacement = ['top', 'bottom'];
var btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case 'top':
		case 'bottom':
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case 'left':
		case 'right':
			return isStart ? tbPlacement : btPlacement;
		default:
			return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide$1(placement), direction === 'start', rtl);
	if (alignment) {
		list = list.map((side) => side + '-' + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide$1(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== 'number'
		? expandPaddingObject(padding)
		: {
				top: padding,
				right: padding,
				bottom: padding,
				left: padding
			};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide$1(placement);
	const isVertical = sideAxis === 'y';
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case 'top':
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case 'bottom':
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case 'right':
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case 'left':
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default:
			coords = {
				x: reference.x,
				y: reference.y
			};
	}
	const alignment = getAlignment(placement);
	if (alignment)
		coords[alignmentAxis] +=
			commonAlign * (alignment === 'end' ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const {
		boundary = 'clippingAncestors',
		rootBoundary = 'viewport',
		elementContext = 'floating',
		altBoundary = false,
		padding = 0
	} = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element =
		elements[
			altBoundary
				? elementContext === 'floating'
					? 'reference'
					: 'floating'
				: elementContext
		];
	const clippingClientRect = rectToClientRect(
		await platform.getClippingRect({
			element: (
				(_await$platform$isEle = await (platform.isElement == null
					? void 0
					: platform.isElement(element))) != null
					? _await$platform$isEle
					: true
			)
				? element
				: element.contextElement ||
					(await (platform.getDocumentElement == null
						? void 0
						: platform.getDocumentElement(elements.floating))),
			boundary,
			rootBoundary,
			strategy
		})
	);
	const rect =
		elementContext === 'floating'
			? {
					x,
					y,
					width: rects.floating.width,
					height: rects.floating.height
				}
			: rects.reference;
	const offsetParent = await (platform.getOffsetParent == null
		? void 0
		: platform.getOffsetParent(elements.floating));
	const offsetScale = ((await (platform.isElement == null
		? void 0
		: platform.isElement(offsetParent))) &&
		(await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)))) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(
		platform.convertOffsetParentRelativeRectToViewportRelativeRect
			? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
					elements,
					rect,
					offsetParent,
					strategy
				})
			: rect
	);
	return {
		top:
			(clippingClientRect.top - elementClientRect.top + paddingObject.top) /
			offsetScale.y,
		bottom:
			(elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) /
			offsetScale.y,
		left:
			(clippingClientRect.left - elementClientRect.left + paddingObject.left) /
			offsetScale.x,
		right:
			(elementClientRect.right - clippingClientRect.right + paddingObject.right) /
			offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
var computePosition$1 = async (reference, floating, config) => {
	const {
		placement = 'bottom',
		strategy = 'absolute',
		middleware = [],
		platform
	} = config;
	const platformWithDetectOverflow = platform.detectOverflow
		? platform
		: {
				...platform,
				detectOverflow
			};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const {
			x: nextX,
			y: nextY,
			data,
			reset
		} = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === 'object') {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects)
					rects =
						reset.rects === true
							? await platform.getElementRects({
									reference,
									floating,
									strategy
								})
							: reset.rects;
				({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow$1 = (options) => ({
	name: 'arrow',
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === 'y';
		const minProp = isYAxis ? 'top' : 'left';
		const maxProp = isYAxis ? 'bottom' : 'right';
		const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
		const endDiff =
			rects.reference[length] +
			rects.reference[axis] -
			coords[axis] -
			rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null
			? void 0
			: platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (
			!clientSize ||
			!(await (platform.isElement == null
				? void 0
				: platform.isElement(arrowOffsetParent)))
		)
			clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(minPadding, center, max);
		const shouldAddOffset =
			!middlewareData.arrow &&
			getAlignment(placement) != null &&
			center !== offset &&
			rects.reference[length] / 2 -
				(center < minPadding ? minPadding : maxPadding) -
				arrowDimensions[length] / 2 <
				0;
		const alignmentOffset = shouldAddOffset
			? center < minPadding
				? center - minPadding
				: center - max
			: 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...(shouldAddOffset && { alignmentOffset })
			},
			reset: shouldAddOffset
		};
	}
});
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
var flip$1 = function (options) {
	if (options === void 0) options = {};
	return {
		name: 'flip',
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } =
				state;
			const {
				mainAxis: checkMainAxis = true,
				crossAxis: checkCrossAxis = true,
				fallbackPlacements: specifiedFallbackPlacements,
				fallbackStrategy = 'bestFit',
				fallbackAxisSideDirection = 'none',
				flipAlignment = true,
				...detectOverflowOptions
			} = evaluate(options, state);
			if (
				(_middlewareData$arrow = middlewareData.arrow) != null &&
				_middlewareData$arrow.alignmentOffset
			)
				return {};
			const side = getSide$1(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide$1(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null
				? void 0
				: platform.isRTL(elements.floating));
			const fallbackPlacements =
				specifiedFallbackPlacements ||
				(isBasePlacement || !flipAlignment
					? [getOppositePlacement(initialPlacement)]
					: getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection)
				fallbackPlacements.push(
					...getOppositeAxisPlacements(
						initialPlacement,
						flipAlignment,
						fallbackAxisSideDirection,
						rtl
					)
				);
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData =
				((_middlewareData$flip = middlewareData.flip) == null
					? void 0
					: _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [
				...overflowsData,
				{
					placement,
					overflows
				}
			];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex =
					(((_middlewareData$flip2 = middlewareData.flip) == null
						? void 0
						: _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (
						!(checkCrossAxis === 'alignment'
							? initialSideAxis !== getSideAxis(nextPlacement)
							: false) ||
						overflowsData.every((d) =>
							getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true
						)
					)
						return {
							data: {
								index: nextIndex,
								overflows: overflowsData
							},
							reset: { placement: nextPlacement }
						};
				}
				let resetPlacement =
					(_overflowsData$filter = overflowsData
						.filter((d) => d.overflows[0] <= 0)
						.sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null
						? void 0
						: _overflowsData$filter.placement;
				if (!resetPlacement)
					switch (fallbackStrategy) {
						case 'bestFit': {
							var _overflowsData$filter2;
							const placement =
								(_overflowsData$filter2 = overflowsData
									.filter((d) => {
										if (hasFallbackAxisSideDirection) {
											const currentSideAxis = getSideAxis(d.placement);
											return (
												currentSideAxis === initialSideAxis || currentSideAxis === 'y'
											);
										}
										return true;
									})
									.map((d) => [
										d.placement,
										d.overflows
											.filter((overflow) => overflow > 0)
											.reduce((acc, overflow) => acc + overflow, 0)
									])
									.sort((a, b) => a[1] - b[1])[0]) == null
									? void 0
									: _overflowsData$filter2[0];
							if (placement) resetPlacement = placement;
							break;
						}
						case 'initialPlacement':
							resetPlacement = initialPlacement;
					}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
var hide$1 = function (options) {
	if (options === void 0) options = {};
	return {
		name: 'hide',
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = 'referenceHidden', ...detectOverflowOptions } = evaluate(
				options,
				state
			);
			switch (strategy) {
				case 'referenceHidden': {
					const offsets = getSideOffsets(
						await platform.detectOverflow(state, {
							...detectOverflowOptions,
							elementContext: 'reference'
						}),
						rects.reference
					);
					return {
						data: {
							referenceHiddenOffsets: offsets,
							referenceHidden: isAnySideFullyClipped(offsets)
						}
					};
				}
				case 'escaped': {
					const offsets = getSideOffsets(
						await platform.detectOverflow(state, {
							...detectOverflowOptions,
							altBoundary: true
						}),
						rects.floating
					);
					return {
						data: {
							escapedOffsets: offsets,
							escaped: isAnySideFullyClipped(offsets)
						}
					};
				}
				default:
					return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(['left', 'top']);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide$1(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === 'y';
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } =
		typeof rawValue === 'number'
			? {
					mainAxis: rawValue,
					crossAxis: 0,
					alignmentAxis: null
				}
			: {
					mainAxis: rawValue.mainAxis || 0,
					crossAxis: rawValue.crossAxis || 0,
					alignmentAxis: rawValue.alignmentAxis
				};
	if (alignment && typeof alignmentAxis === 'number')
		crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
	return isVertical
		? {
				x: crossAxis * crossAxisMulti,
				y: mainAxis * mainAxisMulti
			}
		: {
				x: mainAxis * mainAxisMulti,
				y: crossAxis * crossAxisMulti
			};
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
var offset$1 = function (options) {
	if (options === void 0) options = 0;
	return {
		name: 'offset',
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (
				placement ===
					((_middlewareData$offse = middlewareData.offset) == null
						? void 0
						: _middlewareData$offse.placement) &&
				(_middlewareData$arrow = middlewareData.arrow) != null &&
				_middlewareData$arrow.alignmentOffset
			)
				return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var shift$1 = function (options) {
	if (options === void 0) options = {};
	return {
		name: 'shift',
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const {
				mainAxis: checkMainAxis = true,
				crossAxis: checkCrossAxis = false,
				limiter = {
					fn: (_ref) => {
						let { x, y } = _ref;
						return {
							x,
							y
						};
					}
				},
				...detectOverflowOptions
			} = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) =>
				clamp(
					coord + overflow[axis === 'y' ? 'top' : 'left'],
					coord,
					coord - overflow[axis === 'y' ? 'bottom' : 'right']
				);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var limitShift$1 = function (options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const {
				offset = 0,
				mainAxis: checkMainAxis = true,
				crossAxis: checkCrossAxis = true
			} = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset =
				typeof rawOffset === 'number'
					? {
							mainAxis: rawOffset,
							crossAxis: 0
						}
					: {
							mainAxis:
								(_rawOffset$mainAxis = rawOffset.mainAxis) != null
									? _rawOffset$mainAxis
									: 0,
							crossAxis:
								(_rawOffset$crossAxis = rawOffset.crossAxis) != null
									? _rawOffset$crossAxis
									: 0
						};
			if (checkMainAxis) {
				const len = mainAxis === 'y' ? 'height' : 'width';
				const limitMin =
					rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax =
					rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === 'y' ? 'width' : 'height';
				const isOriginSide = originSides.has(getSide$1(placement));
				const limitMin =
					rects.reference[crossAxis] -
					rects.floating[len] +
					(isOriginSide
						? ((_middlewareData$offse = middlewareData.offset) == null
								? void 0
								: _middlewareData$offse[crossAxis]) || 0
						: 0) +
					(isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax =
					rects.reference[crossAxis] +
					rects.reference[len] +
					(isOriginSide
						? 0
						: ((_middlewareData$offse2 = middlewareData.offset) == null
								? void 0
								: _middlewareData$offse2[crossAxis]) || 0) -
					(isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
var size$1 = function (options) {
	if (options === void 0) options = {};
	return {
		name: 'size',
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide$1(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === 'y';
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === 'top' || side === 'bottom') {
				heightSide = side;
				widthSide =
					alignment ===
					((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)))
						? 'start'
						: 'end')
						? 'left'
						: 'right';
			} else {
				widthSide = side;
				heightSide = alignment === 'end' ? 'top' : 'bottom';
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(
				height - overflow[heightSide],
				maximumClippingHeight
			);
			const overflowAvailableWidth = min(
				width - overflow[widthSide],
				maximumClippingWidth
			);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y)
				availableHeight = maximumClippingHeight;
			if (noShift && !alignment) {
				if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
				else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			}
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height)
				return { reset: { rects: true } };
			return {};
		}
	};
};
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== 'undefined';
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || '').toLowerCase();
	return '#document';
}
function getWindow(node) {
	var _node$ownerDocument;
	return (
		(node == null || (_node$ownerDocument = node.ownerDocument) == null
			? void 0
			: _node$ownerDocument.defaultView) || window
	);
}
function getDocumentElement(node) {
	var _ref;
	return (_ref =
		(isNode(node) ? node.ownerDocument : node.document) || window.document) == null
		? void 0
		: _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === 'undefined') return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return (
		/auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
		display !== 'inline' &&
		display !== 'contents'
	);
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(':popover-open')) return true;
	} catch (_e) {}
	try {
		return element.matches(':modal');
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== 'none';
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return (
		isNotNone(css.transform) ||
		isNotNone(css.translate) ||
		isNotNone(css.scale) ||
		isNotNone(css.rotate) ||
		isNotNone(css.perspective) ||
		(!isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter))) ||
		willChangeRe.test(css.willChange || '') ||
		containRe.test(css.contain || '')
	);
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null)
		isWebKitValue =
			typeof CSS !== 'undefined' &&
			CSS.supports &&
			CSS.supports('-webkit-backdrop-filter', 'none');
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element))
		return {
			scrollLeft: element.scrollLeft,
			scrollTop: element.scrollTop
		};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === 'html') return node;
	const result =
		node.assignedSlot ||
		node.parentNode ||
		(isShadowRoot(node) && node.host) ||
		getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody =
		scrollableAncestor ===
		((_node$ownerDocument2 = node.ownerDocument) == null
			? void 0
			: _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(
			win,
			win.visualViewport || [],
			isOverflowElement(scrollableAncestor) ? scrollableAncestor : [],
			frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []
		);
	} else
		return list.concat(
			scrollableAncestor,
			getOverflowAncestors(scrollableAncestor, [], traverseIframes)
		);
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) {
		if (offsetParent) {
			if (isElement(offsetParent)) scale = getScale(offsetParent);
		} else scale = getScale(element);
	}
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent)
		? getVisualOffsets(domElement)
		: createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left =
				iframeRect.left +
				(currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top =
				iframeRect.top +
				(currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === 'fixed';
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || (topLayer && isFixed)) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement))
			scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset =
		documentElement && !isOffsetParentAnElement && !isFixed
			? getHTMLOffset(documentElement, scroll)
			: createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(
		html.scrollWidth,
		html.clientWidth,
		body.scrollWidth,
		body.clientWidth
	);
	const height = max(
		html.scrollHeight,
		html.clientHeight,
		body.scrollHeight,
		body.clientHeight
	);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === 'rtl')
		x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = 'viewport';
	const isLayoutViewport = rootBoundary === 'layoutViewport';
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === 'fixed';
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline =
			doc.compatMode === 'CSS1Compat'
				? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0
				: 0;
		const reservedWidth = Math.abs(
			html.clientWidth - body.clientWidth - bodyMarginInline
		);
		const gutter =
			getComputedStyle(html).scrollbarGutter === 'stable both-edges'
				? reservedWidth / 2
				: reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === 'viewport' || clippingAncestor === 'layoutViewport')
		rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === 'document')
		rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor))
		rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter(
		(el) => isElement(el) && getNodeName(el) !== 'body'
	);
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle
			? lastKeptComputedStyle.position
			: elementIsFixed
				? 'fixed'
				: '';
		if (
			!currentNodeIsContaining &&
			(lastPosition === 'fixed' ||
				(lastPosition === 'absolute' && computedStyle.position === 'static'))
		)
			result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [
		...(boundary === 'clippingAncestors'
			? isTopLayer(element)
				? []
				: getClippingElementAncestors(element, this._c)
			: [].concat(boundary)),
		rootBoundary
	];
	const firstRect = getClientRectFromClippingAncestor(
		element,
		clippingAncestors[0],
		strategy
	);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(
			element,
			clippingAncestors[i],
			strategy
		);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === 'fixed';
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement))
			scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement)
		offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset =
		documentElement && !isOffsetParentAnElement && !isFixed
			? getHTMLOffset(documentElement, scroll)
			: createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed')
		return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent)
		rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent))
				return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent))
		offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (
		offsetParent &&
		isLastTraversableNode(offsetParent) &&
		isStaticPositioned(offsetParent) &&
		!isContainingBlock(offsetParent)
	)
		return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function (data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(
			data.reference,
			await getOffsetParentFn(data.floating),
			data.strategy
		),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === 'rtl';
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin:
				-insetTop +
				'px ' +
				-insetRight +
				'px ' +
				-insetBottom +
				'px ' +
				-insetLeft +
				'px',
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect()))
				return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio)
					timeoutId = setTimeout(() => {
						refresh(false, 1e-7);
					}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener('resize', handleResize);
	refresh(true);
	return () => {
		win.removeEventListener('resize', handleResize);
		cleanup();
	};
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const {
		ancestorScroll = true,
		ancestorResize = true,
		elementResize = typeof ResizeObserver === 'function',
		layoutShift = typeof IntersectionObserver === 'function',
		animationFrame = false
	} = options;
	const referenceEl = unwrapElement(reference);
	const ancestors =
		ancestorScroll || ancestorResize
			? [
					...(referenceEl ? getOverflowAncestors(referenceEl) : []),
					...(floating ? getOverflowAncestors(floating) : [])
				]
			: [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener('scroll', update);
		ancestorResize && ancestor.addEventListener('resize', update);
	});
	const cleanupIo =
		referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener('scroll', update);
			ancestorResize && ancestor.removeEventListener('resize', update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
var offset = offset$1;
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var shift = shift$1;
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
var flip = flip$1;
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
var size = size$1;
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
var hide = hide$1;
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow = arrow$1;
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var limitShift = limitShift$1;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function get(valueOrGetValue) {
	return typeof valueOrGetValue === 'function' ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
	if (typeof window === 'undefined') return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
	return {
		[`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
	};
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/floating-svelte/use-floating.svelte.js
function useFloating(options) {
	options.whileElementsMounted;
	const openOption = derived(() => get(options.open) ?? true);
	const middlewareOption = derived(() => get(options.middleware));
	const transformOption = derived(() => get(options.transform) ?? true);
	const placementOption = derived(() => get(options.placement) ?? 'bottom');
	const strategyOption = derived(() => get(options.strategy) ?? 'absolute');
	const sideOffsetOption = derived(() => get(options.sideOffset) ?? 0);
	const alignOffsetOption = derived(() => get(options.alignOffset) ?? 0);
	const reference = options.reference;
	/** State */
	let x = 0;
	let y = 0;
	const floating = simpleBox(null);
	let strategy = strategyOption();
	let placement = placementOption();
	let middlewareData = {};
	let isPositioned = false;
	let updateRequestId = 0;
	const floatingStyles = derived(() => {
		const xVal = floating.current ? roundByDPR(floating.current, x) : x;
		const yVal = floating.current ? roundByDPR(floating.current, y) : y;
		if (transformOption())
			return {
				position: strategy,
				left: '0',
				top: '0',
				transform: `translate(${xVal}px, ${yVal}px)`,
				...(floating.current &&
					getDPR(floating.current) >= 1.5 && { willChange: 'transform' })
			};
		return {
			position: strategy,
			left: `${xVal}px`,
			top: `${yVal}px`
		};
	});
	function update() {
		if (reference.current === null || floating.current === null) return;
		const referenceNode = reference.current;
		const floatingNode = floating.current;
		const requestId = ++updateRequestId;
		computePosition(referenceNode, floatingNode, {
			middleware: middlewareOption(),
			placement: placementOption(),
			strategy: strategyOption()
		}).then((position) => {
			if (requestId !== updateRequestId) return;
			if (reference.current !== referenceNode || floating.current !== floatingNode)
				return;
			if (isReferenceHidden(referenceNode)) {
				middlewareData = {
					...middlewareData,
					hide: {
						...middlewareData.hide,
						referenceHidden: true
					}
				};
				return;
			}
			if (!openOption() && x !== 0 && y !== 0) {
				const maxExpectedOffset = Math.max(
					Math.abs(sideOffsetOption()),
					Math.abs(alignOffsetOption()),
					15
				);
				if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
			}
			x = position.x;
			y = position.y;
			strategy = position.strategy;
			placement = position.placement;
			middlewareData = position.middlewareData;
			isPositioned = true;
		});
	}
	return {
		floating,
		reference,
		get strategy() {
			return strategy;
		},
		get placement() {
			return placement;
		},
		get middlewareData() {
			return middlewareData;
		},
		get isPositioned() {
			return isPositioned;
		},
		get floatingStyles() {
			return floatingStyles();
		},
		get update() {
			return update;
		}
	};
}
function isReferenceHidden(node) {
	if (!(node instanceof Element)) return false;
	if (!node.isConnected) return true;
	if (node instanceof HTMLElement && node.hidden) return true;
	return node.getClientRects().length === 0;
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var OPPOSITE_SIDE = {
	top: 'bottom',
	right: 'left',
	bottom: 'top',
	left: 'right'
};
var FloatingRootContext = new Context$1('Floating.Root');
var FloatingContentContext = new Context$1('Floating.Content');
var FloatingTooltipRootContext = new Context$1('Floating.Root');
var FloatingRootState = class FloatingRootState {
	static create(tooltip = false) {
		return tooltip
			? FloatingTooltipRootContext.set(new FloatingRootState())
			: FloatingRootContext.set(new FloatingRootState());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {}
};
var FloatingContentState = class FloatingContentState {
	static create(opts, tooltip = false) {
		return tooltip
			? FloatingContentContext.set(
					new FloatingContentState(opts, FloatingTooltipRootContext.get())
				)
			: FloatingContentContext.set(
					new FloatingContentState(opts, FloatingRootContext.get())
				);
	}
	opts;
	root;
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);
	arrowId = simpleBox(useId());
	#transformedStyle = derived(() => {
		if (typeof this.opts.style === 'string') return cssToStyleObj(this.opts.style);
		if (!this.opts.style) return {};
	});
	#updatePositionStrategy = void 0;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
	#arrowWidth = derived(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = derived(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = derived(
		() =>
			this.opts.side?.current +
			(this.opts.align.current !== 'center' ? `-${this.opts.align.current}` : '')
	);
	#boundary = derived(() =>
		Array.isArray(this.opts.collisionBoundary.current)
			? this.opts.collisionBoundary.current
			: [this.opts.collisionBoundary.current]
	);
	#hasExplicitBoundaries = derived(() => this.#boundary().length > 0);
	get hasExplicitBoundaries() {
		return this.#hasExplicitBoundaries();
	}
	set hasExplicitBoundaries($$value) {
		return this.#hasExplicitBoundaries($$value);
	}
	#detectOverflowOptions = derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: this.#boundary().filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return this.#detectOverflowOptions();
	}
	set detectOverflowOptions($$value) {
		return this.#detectOverflowOptions($$value);
	}
	#availableWidth = void 0;
	#availableHeight = void 0;
	#anchorWidth = void 0;
	#anchorHeight = void 0;
	#middleware = derived(() =>
		[
			offset({
				mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
				alignmentAxis: this.opts.alignOffset.current
			}),
			this.opts.avoidCollisions.current &&
				shift({
					mainAxis: true,
					crossAxis: false,
					limiter: this.opts.sticky.current === 'partial' ? limitShift() : void 0,
					...this.detectOverflowOptions
				}),
			this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
			size({
				...this.detectOverflowOptions,
				apply: ({ rects, availableWidth, availableHeight }) => {
					const { width: anchorWidth, height: anchorHeight } = rects.reference;
					this.#availableWidth = availableWidth;
					this.#availableHeight = availableHeight;
					this.#anchorWidth = anchorWidth;
					this.#anchorHeight = anchorHeight;
				}
			}),
			this.arrowRef.current &&
				arrow({
					element: this.arrowRef.current,
					padding: this.opts.arrowPadding.current
				}),
			transformOrigin({
				arrowWidth: this.#arrowWidth(),
				arrowHeight: this.#arrowHeight()
			}),
			this.opts.hideWhenDetached.current &&
				hide({
					strategy: 'referenceHidden',
					...this.detectOverflowOptions
				})
		].filter(Boolean)
	);
	get middleware() {
		return this.#middleware();
	}
	set middleware($$value) {
		return this.#middleware($$value);
	}
	floating;
	#placedSide = derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return this.#placedSide();
	}
	set placedSide($$value) {
		return this.#placedSide($$value);
	}
	#placedAlign = derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return this.#placedAlign();
	}
	set placedAlign($$value) {
		return this.#placedAlign($$value);
	}
	#arrowX = derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return this.#arrowX();
	}
	set arrowX($$value) {
		return this.#arrowX($$value);
	}
	#arrowY = derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return this.#arrowY();
	}
	set arrowY($$value) {
		return this.#arrowY($$value);
	}
	#cannotCenterArrow = derived(
		() => this.floating.middlewareData.arrow?.centerOffset !== 0
	);
	get cannotCenterArrow() {
		return this.#cannotCenterArrow();
	}
	set cannotCenterArrow($$value) {
		return this.#cannotCenterArrow($$value);
	}
	contentZIndex;
	#arrowBaseSide = derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return this.#arrowBaseSide();
	}
	set arrowBaseSide($$value) {
		return this.#arrowBaseSide($$value);
	}
	#wrapperProps = derived(() => ({
		id: this.opts.wrapperId.current,
		'data-bits-floating-content-wrapper': '',
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned
				? this.floating.floatingStyles.transform
				: 'translate(0, -200%)',
			minWidth: 'max-content',
			zIndex: this.contentZIndex,
			'--bits-floating-transform-origin': `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			'--bits-floating-available-width': `${this.#availableWidth}px`,
			'--bits-floating-available-height': `${this.#availableHeight}px`,
			'--bits-floating-anchor-width': `${this.#anchorWidth}px`,
			'--bits-floating-anchor-height': `${this.#anchorHeight}px`,
			...(this.floating.middlewareData.hide?.referenceHidden && {
				visibility: 'hidden',
				'pointer-events': 'none'
			}),
			...this.#transformedStyle()
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return this.#wrapperProps();
	}
	set wrapperProps($$value) {
		return this.#wrapperProps($$value);
	}
	#props = derived(() => ({
		'data-side': this.placedSide,
		'data-align': this.placedAlign,
		style: styleToString({ ...this.#transformedStyle() }),
		...this.contentAttachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	#arrowStyle = derived(() => ({
		position: 'absolute',
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		'transform-origin': {
			top: '',
			right: '0 0',
			bottom: 'center 0',
			left: '100% 0'
		}[this.placedSide],
		transform: {
			top: 'translateY(100%)',
			right: 'translateY(50%) rotate(90deg) translateX(-50%)',
			bottom: 'rotate(180deg)',
			left: 'translateY(50%) rotate(-90deg) translateX(50%)'
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? 'hidden' : void 0
	}));
	get arrowStyle() {
		return this.#arrowStyle();
	}
	set arrowStyle($$value) {
		return this.#arrowStyle($$value);
	}
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.#updatePositionStrategy = opts.updatePositionStrategy;
		if (opts.customAnchor) this.root.customAnchorNode.current = opts.customAnchor.current;
		watch$1(
			() => opts.customAnchor.current,
			(customAnchor) => {
				this.root.customAnchorNode.current = customAnchor;
			}
		);
		this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => this.#desiredPlacement(),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...args) => {
				return autoUpdate(...args, {
					animationFrame: this.#updatePositionStrategy?.current === 'always'
				});
			},
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		});
		watch$1(
			() => this.contentRef.current,
			(contentNode) => {
				if (!contentNode || !this.opts.enabled.current) return;
				const win = getWindow$1(contentNode);
				const rafId = win.requestAnimationFrame(() => {
					if (this.contentRef.current !== contentNode || !this.opts.enabled.current)
						return;
					const zIndex = win.getComputedStyle(contentNode).zIndex;
					if (zIndex !== this.contentZIndex) this.contentZIndex = zIndex;
				});
				return () => {
					win.cancelAnimationFrame(rafId);
				};
			}
		);
	}
};
var FloatingArrowState = class FloatingArrowState {
	static create(opts) {
		return new FloatingArrowState(opts, FloatingContentContext.get());
	}
	opts;
	content;
	constructor(opts, content) {
		this.opts = opts;
		this.content = content;
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: this.content.arrowStyle,
		'data-side': this.content.placedSide,
		...this.content.arrowAttachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function transformOrigin(options) {
	return {
		name: 'transformOrigin',
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = {
				start: '0%',
				center: '50%',
				end: '100%'
			}[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = '';
			let y = '';
			if (placedSide === 'bottom') {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === 'top') {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === 'right') {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === 'left') {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}
			return {
				data: {
					x,
					y
				}
			};
		}
	};
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = 'center'] = placement.split('-');
	return [side, align];
}
function getSideFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[1];
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Floating_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, tooltip = false } = $$props;
		FloatingRootState.create(tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/arrow/arrow.svelte
function Arrow($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			id = useId(),
			children,
			child,
			width = 10,
			height = 5,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const mergedProps = derived(() => mergeProps(restProps, { id }));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><span${attributes({ ...mergedProps() })}>`);
			if (children) {
				$$renderer.push('<!--[0-->');
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			} else
				$$renderer.push(
					`<!--[-1--><svg${attr('width', width)}${attr('height', height)} viewBox="0 0 30 10" preserveAspectRatio="none" data-arrow=""><polygon points="0,0 30,0 15,10" fill="currentColor"></polygon></svg>`
				);
			$$renderer.push(`<!--]--></span>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-arrow.svelte
function Floating_layer_arrow($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id = useId(), ref = null, $$slots, $$events, ...restProps } = $$props;
		const arrowState = FloatingArrowState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, arrowState.props));
		Arrow($$renderer, spread_props([mergedProps()]));
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function Floating_layer_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			content,
			side = 'bottom',
			sideOffset = 0,
			align = 'center',
			alignOffset = 0,
			id,
			arrowPadding = 0,
			avoidCollisions = true,
			collisionBoundary = [],
			collisionPadding = 0,
			hideWhenDetached = false,
			onPlaced = () => {},
			sticky = 'partial',
			updatePositionStrategy = 'optimized',
			strategy = 'fixed',
			dir = 'ltr',
			style = {},
			wrapperId = useId(),
			customAnchor = null,
			enabled,
			tooltip = false
		} = $$props;
		const contentState = FloatingContentState.create(
			{
				side: boxWith(() => side),
				sideOffset: boxWith(() => sideOffset),
				align: boxWith(() => align),
				alignOffset: boxWith(() => alignOffset),
				id: boxWith(() => id),
				arrowPadding: boxWith(() => arrowPadding),
				avoidCollisions: boxWith(() => avoidCollisions),
				collisionBoundary: boxWith(() => collisionBoundary),
				collisionPadding: boxWith(() => collisionPadding),
				hideWhenDetached: boxWith(() => hideWhenDetached),
				onPlaced: boxWith(() => onPlaced),
				sticky: boxWith(() => sticky),
				updatePositionStrategy: boxWith(() => updatePositionStrategy),
				strategy: boxWith(() => strategy),
				dir: boxWith(() => dir),
				style: boxWith(() => style),
				enabled: boxWith(() => enabled),
				wrapperId: boxWith(() => wrapperId),
				customAnchor: boxWith(() => customAnchor)
			},
			tooltip
		);
		const mergedProps = derived(() =>
			mergeProps(contentState.wrapperProps, { style: { pointerEvents: 'auto' } })
		);
		content?.($$renderer, {
			props: contentState.props,
			wrapperProps: mergedProps()
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Floating_layer_content_static($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { content, onPlaced } = $$props;
		content?.($$renderer, {
			props: {},
			wrapperProps: {}
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function Popper_content($$renderer, $$props) {
	let { content, isStatic = false, onPlaced, $$slots, $$events, ...restProps } = $$props;
	if (isStatic) {
		$$renderer.push('<!--[0-->');
		Floating_layer_content_static($$renderer, {
			content,
			onPlaced
		});
	} else {
		$$renderer.push('<!--[-1-->');
		Floating_layer_content(
			$$renderer,
			spread_props([
				{
					content,
					onPlaced
				},
				restProps
			])
		);
	}
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
function Popper_layer_inner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			popper,
			onEscapeKeydown,
			escapeKeydownBehavior,
			preventOverflowTextSelection,
			id,
			onPointerDown,
			onPointerUp,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			preventScroll,
			wrapperId,
			style,
			onPlaced,
			onInteractOutside,
			onCloseAutoFocus,
			onOpenAutoFocus,
			onFocusOutside,
			interactOutsideBehavior = 'close',
			loop,
			trapFocus = true,
			isValidEvent = () => false,
			customAnchor = null,
			isStatic = false,
			enabled,
			ref,
			tooltip = false,
			contentPointerEvents = 'auto',
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const resolvedPreventScroll = derived(() => preventScroll ?? true);
		const effectiveStrategy = derived(
			() => strategy ?? (resolvedPreventScroll() ? 'fixed' : 'absolute')
		);
		{
			function content($$renderer, { props: floatingProps, wrapperProps }) {
				if (restProps.forceMount && enabled) {
					$$renderer.push('<!--[0-->');
					Scroll_lock($$renderer, { preventScroll: resolvedPreventScroll() });
				} else if (!restProps.forceMount) {
					$$renderer.push('<!--[1-->');
					Scroll_lock($$renderer, { preventScroll: resolvedPreventScroll() });
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				{
					function focusScope($$renderer, { props: focusScopeProps }) {
						Escape_layer($$renderer, {
							onEscapeKeydown,
							escapeKeydownBehavior,
							enabled,
							ref,
							children: ($$renderer) => {
								{
									function children($$renderer, { props: dismissibleProps }) {
										Text_selection_layer($$renderer, {
											id,
											preventOverflowTextSelection,
											onPointerDown,
											onPointerUp,
											enabled,
											ref,
											children: ($$renderer) => {
												popper?.($$renderer, {
													props: mergeProps(
														restProps,
														floatingProps,
														dismissibleProps,
														focusScopeProps,
														{
															id,
															style: { pointerEvents: contentPointerEvents }
														}
													),
													wrapperProps
												});
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										});
									}
									Dismissible_layer($$renderer, {
										id,
										onInteractOutside,
										onFocusOutside,
										interactOutsideBehavior,
										isValidEvent,
										enabled,
										ref,
										children,
										$$slots: { default: true }
									});
								}
							},
							$$slots: { default: true }
						});
					}
					Focus_scope($$renderer, {
						onOpenAutoFocus,
						onCloseAutoFocus,
						loop,
						enabled,
						trapFocus,
						forceMount: restProps.forceMount,
						ref,
						focusScope,
						$$slots: { focusScope: true }
					});
				}
				$$renderer.push(`<!---->`);
			}
			Popper_content($$renderer, {
				isStatic,
				id,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				avoidCollisions,
				collisionBoundary,
				collisionPadding,
				sticky,
				hideWhenDetached,
				updatePositionStrategy,
				strategy: effectiveStrategy(),
				dir,
				wrapperId,
				style,
				onPlaced,
				customAnchor,
				enabled,
				tooltip,
				content,
				$$slots: { content: true }
			});
		}
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
function Popper_layer($$renderer, $$props) {
	let {
		popper,
		open,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = 'close',
		loop,
		trapFocus = true,
		isValidEvent = () => false,
		customAnchor = null,
		isStatic = false,
		ref,
		shouldRender,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	if (shouldRender) {
		$$renderer.push('<!--[0-->');
		Popper_layer_inner(
			$$renderer,
			spread_props([
				{
					popper,
					onEscapeKeydown,
					escapeKeydownBehavior,
					preventOverflowTextSelection,
					id,
					onPointerDown,
					onPointerUp,
					side,
					sideOffset,
					align,
					alignOffset,
					arrowPadding,
					avoidCollisions,
					collisionBoundary,
					collisionPadding,
					sticky,
					hideWhenDetached,
					updatePositionStrategy,
					strategy,
					dir,
					preventScroll,
					wrapperId,
					style,
					onPlaced,
					customAnchor,
					isStatic,
					enabled: open,
					onInteractOutside,
					onCloseAutoFocus,
					onOpenAutoFocus,
					interactOutsideBehavior,
					loop,
					trapFocus,
					isValidEvent,
					onFocusOutside,
					forceMount: false,
					ref
				},
				restProps
			])
		);
	} else $$renderer.push('<!--[-1-->');
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function Popper_layer_force_mount($$renderer, $$props) {
	let {
		popper,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = 'close',
		loop,
		trapFocus = true,
		isValidEvent = () => false,
		customAnchor = null,
		isStatic = false,
		enabled,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	Popper_layer_inner(
		$$renderer,
		spread_props([
			{
				popper,
				onEscapeKeydown,
				escapeKeydownBehavior,
				preventOverflowTextSelection,
				id,
				onPointerDown,
				onPointerUp,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				avoidCollisions,
				collisionBoundary,
				collisionPadding,
				sticky,
				hideWhenDetached,
				updatePositionStrategy,
				strategy,
				dir,
				preventScroll,
				wrapperId,
				style,
				onPlaced,
				customAnchor,
				isStatic,
				enabled,
				onInteractOutside,
				onCloseAutoFocus,
				onOpenAutoFocus,
				interactOutsideBehavior,
				loop,
				trapFocus,
				isValidEvent,
				onFocusOutside
			},
			restProps,
			{ forceMount: true }
		])
	);
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let isInside = false;
	const length = polygon.length;
	for (let i = 0, j = length - 1; i < length; j = i++) {
		const [xi, yi] = polygon[i] ?? [0, 0];
		const [xj, yj] = polygon[j] ?? [0, 0];
		if (yi >= y !== yj >= y && x <= ((xj - xi) * (y - yi)) / (yj - yi) + xi)
			isInside = !isInside;
	}
	return isInside;
}
function isInsideRect(point, rect) {
	return (
		point[0] >= rect.left &&
		point[0] <= rect.right &&
		point[1] >= rect.top &&
		point[1] <= rect.bottom
	);
}
function getSide(triggerRect, contentRect) {
	const triggerCenterX = triggerRect.left + triggerRect.width / 2;
	const triggerCenterY = triggerRect.top + triggerRect.height / 2;
	const contentCenterX = contentRect.left + contentRect.width / 2;
	const contentCenterY = contentRect.top + contentRect.height / 2;
	const deltaX = contentCenterX - triggerCenterX;
	const deltaY = contentCenterY - triggerCenterY;
	if (Math.abs(deltaX) > Math.abs(deltaY)) return deltaX > 0 ? 'right' : 'left';
	return deltaY > 0 ? 'bottom' : 'top';
}
/**
 * Creates a safe polygon area that allows users to move their cursor between
 * the trigger and floating content without closing it.
 */
var SafePolygon = class {
	#opts;
	#buffer;
	#transitIntentTimeout;
	#exitPoint = null;
	#exitTarget = null;
	#transitTargets = [];
	#trackedTriggerNode = null;
	#leaveFallbackRafId = null;
	#transitIntentTimeoutId = null;
	#cancelLeaveFallback() {
		if (this.#leaveFallbackRafId !== null) {
			cancelAnimationFrame(this.#leaveFallbackRafId);
			this.#leaveFallbackRafId = null;
		}
	}
	#scheduleLeaveFallback() {
		this.#cancelLeaveFallback();
		this.#leaveFallbackRafId = requestAnimationFrame(() => {
			this.#leaveFallbackRafId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		});
	}
	#cancelTransitIntentTimeout() {
		if (this.#transitIntentTimeoutId !== null) {
			clearTimeout(this.#transitIntentTimeoutId);
			this.#transitIntentTimeoutId = null;
		}
	}
	#scheduleTransitIntentTimeout() {
		if (this.#transitIntentTimeout === null) return;
		this.#cancelTransitIntentTimeout();
		this.#transitIntentTimeoutId = window.setTimeout(() => {
			this.#transitIntentTimeoutId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		}, this.#transitIntentTimeout);
	}
	constructor(opts) {
		this.#opts = opts;
		this.#buffer = opts.buffer ?? 1;
		const transitIntentTimeout = opts.transitIntentTimeout;
		this.#transitIntentTimeout =
			typeof transitIntentTimeout === 'number' && transitIntentTimeout > 0
				? transitIntentTimeout
				: null;
		watch$1(
			[opts.triggerNode, opts.contentNode, opts.enabled],
			([triggerNode, contentNode, enabled]) => {
				if (!triggerNode || !contentNode || !enabled) {
					this.#trackedTriggerNode = null;
					this.#clearTracking();
					return;
				}
				if (this.#trackedTriggerNode && this.#trackedTriggerNode !== triggerNode)
					this.#clearTracking();
				this.#trackedTriggerNode = triggerNode;
				const doc = getDocument(triggerNode);
				const handlePointerMove = (e) => {
					this.#onPointerMove([e.clientX, e.clientY], triggerNode, contentNode);
				};
				const handleTriggerLeave = (e) => {
					const target = e.relatedTarget;
					if (isElement$1(target) && contentNode.contains(target)) return;
					const ignoredTargets = this.#opts.ignoredTargets?.() ?? [];
					if (
						isElement$1(target) &&
						ignoredTargets.some((n) => n === target || n.contains(target))
					)
						return;
					this.#transitTargets =
						isElement$1(target) && ignoredTargets.length > 0
							? ignoredTargets.filter((n) => target.contains(n))
							: [];
					this.#exitPoint = [e.clientX, e.clientY];
					this.#exitTarget = 'content';
					this.#scheduleLeaveFallback();
				};
				const handleTriggerEnter = () => {
					this.#clearTracking();
				};
				const handleContentEnter = () => {
					this.#clearTracking();
				};
				const handleContentLeave = (e) => {
					const target = e.relatedTarget;
					if (isElement$1(target) && triggerNode.contains(target)) return;
					this.#exitPoint = [e.clientX, e.clientY];
					this.#exitTarget = 'trigger';
					this.#scheduleLeaveFallback();
				};
				return [
					on(doc, 'pointermove', handlePointerMove),
					on(triggerNode, 'pointerleave', handleTriggerLeave),
					on(triggerNode, 'pointerenter', handleTriggerEnter),
					on(contentNode, 'pointerenter', handleContentEnter),
					on(contentNode, 'pointerleave', handleContentLeave)
				].reduce(
					(acc, cleanup) => () => {
						acc();
						cleanup();
					},
					() => {}
				);
			}
		);
	}
	#onPointerMove(clientPoint, triggerNode, contentNode) {
		if (!this.#exitPoint || !this.#exitTarget) return;
		this.#cancelLeaveFallback();
		this.#scheduleTransitIntentTimeout();
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		if (this.#exitTarget === 'content' && isInsideRect(clientPoint, contentRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === 'trigger' && isInsideRect(clientPoint, triggerRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === 'content' && this.#transitTargets.length > 0)
			for (const transitTarget of this.#transitTargets) {
				const transitRect = transitTarget.getBoundingClientRect();
				if (isInsideRect(clientPoint, transitRect)) return;
				const transitSide = getSide(triggerRect, transitRect);
				const transitCorridor = this.#getCorridorPolygon(
					triggerRect,
					transitRect,
					transitSide
				);
				if (transitCorridor && isPointInPolygon(clientPoint, transitCorridor)) return;
			}
		const side = getSide(triggerRect, contentRect);
		const corridorPoly = this.#getCorridorPolygon(triggerRect, contentRect, side);
		if (corridorPoly && isPointInPolygon(clientPoint, corridorPoly)) return;
		const targetRect = this.#exitTarget === 'content' ? contentRect : triggerRect;
		if (
			isPointInPolygon(
				clientPoint,
				this.#getSafePolygon(this.#exitPoint, targetRect, side, this.#exitTarget)
			)
		)
			return;
		this.#clearTracking();
		this.#opts.onPointerExit();
	}
	#clearTracking() {
		this.#exitPoint = null;
		this.#exitTarget = null;
		this.#transitTargets = [];
		this.#cancelLeaveFallback();
		this.#cancelTransitIntentTimeout();
	}
	/**
	 * Creates a rectangular corridor between trigger and content
	 * This prevents closing when cursor is in the gap between them
	 */
	#getCorridorPolygon(triggerRect, contentRect, side) {
		const buffer = this.#buffer;
		switch (side) {
			case 'top':
				return [
					[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.top],
					[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.bottom],
					[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.bottom],
					[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.top]
				];
			case 'bottom':
				return [
					[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.bottom],
					[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.top],
					[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.top],
					[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.bottom]
				];
			case 'left':
				return [
					[triggerRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
					[contentRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
					[contentRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
					[triggerRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
				];
			case 'right':
				return [
					[triggerRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
					[contentRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
					[contentRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
					[triggerRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
				];
		}
	}
	/**
	 * Creates a triangular/trapezoidal safe zone from the exit point to the target
	 */
	#getSafePolygon(exitPoint, targetRect, side, exitTarget) {
		const buffer = this.#buffer * 4;
		const [x, y] = exitPoint;
		switch (exitTarget === 'trigger' ? this.#flipSide(side) : side) {
			case 'top':
				return [
					[x - buffer, y + buffer],
					[x + buffer, y + buffer],
					[targetRect.right + buffer, targetRect.bottom],
					[targetRect.right + buffer, targetRect.top],
					[targetRect.left - buffer, targetRect.top],
					[targetRect.left - buffer, targetRect.bottom]
				];
			case 'bottom':
				return [
					[x - buffer, y - buffer],
					[x + buffer, y - buffer],
					[targetRect.right + buffer, targetRect.top],
					[targetRect.right + buffer, targetRect.bottom],
					[targetRect.left - buffer, targetRect.bottom],
					[targetRect.left - buffer, targetRect.top]
				];
			case 'left':
				return [
					[x + buffer, y - buffer],
					[x + buffer, y + buffer],
					[targetRect.right, targetRect.bottom + buffer],
					[targetRect.left, targetRect.bottom + buffer],
					[targetRect.left, targetRect.top - buffer],
					[targetRect.right, targetRect.top - buffer]
				];
			case 'right':
				return [
					[x - buffer, y - buffer],
					[x - buffer, y + buffer],
					[targetRect.left, targetRect.bottom + buffer],
					[targetRect.right, targetRect.bottom + buffer],
					[targetRect.right, targetRect.top - buffer],
					[targetRect.left, targetRect.top - buffer]
				];
		}
	}
	#flipSide(side) {
		switch (side) {
			case 'top':
				return 'bottom';
			case 'bottom':
				return 'top';
			case 'left':
				return 'right';
			case 'right':
				return 'left';
		}
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/internal/timeout-fn.js
var TimeoutFn = class {
	#interval;
	#cb;
	#timer = null;
	constructor(cb, interval) {
		this.#cb = cb;
		this.#interval = interval;
		this.stop = this.stop.bind(this);
		this.start = this.start.bind(this);
		this.stop;
	}
	#clear() {
		if (this.#timer !== null) {
			window.clearTimeout(this.#timer);
			this.#timer = null;
		}
	}
	stop() {
		this.#clear();
	}
	start(...args) {
		this.#clear();
		this.#timer = window.setTimeout(() => {
			this.#timer = null;
			this.#cb(...args);
		}, this.#interval);
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/tooltip.svelte.js
var tooltipAttrs = createBitsAttrs({
	component: 'tooltip',
	parts: ['content', 'trigger']
});
var TooltipProviderContext = new Context$1('Tooltip.Provider');
var TooltipRootContext = new Context$1('Tooltip.Root');
var TooltipTriggerRegistryState = class {
	triggers = /* @__PURE__ */ new Map();
	activeTriggerId = null;
	#activeTriggerNode = derived(() => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return null;
		return this.triggers.get(activeTriggerId)?.node ?? null;
	});
	get activeTriggerNode() {
		return this.#activeTriggerNode();
	}
	set activeTriggerNode($$value) {
		return this.#activeTriggerNode($$value);
	}
	#activePayload = derived(() => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return null;
		return this.triggers.get(activeTriggerId)?.payload ?? null;
	});
	get activePayload() {
		return this.#activePayload();
	}
	set activePayload($$value) {
		return this.#activePayload($$value);
	}
	register = (record) => {
		const next = new Map(this.triggers);
		next.set(record.id, record);
		this.triggers = next;
		this.#coerceActiveTrigger();
	};
	update = (record) => {
		const next = new Map(this.triggers);
		next.set(record.id, record);
		this.triggers = next;
		this.#coerceActiveTrigger();
	};
	unregister = (id) => {
		if (!this.triggers.has(id)) return;
		const next = new Map(this.triggers);
		next.delete(id);
		this.triggers = next;
		if (this.activeTriggerId === id) this.activeTriggerId = null;
	};
	setActiveTrigger = (id) => {
		if (id === null) {
			this.activeTriggerId = null;
			return;
		}
		if (!this.triggers.has(id)) {
			this.activeTriggerId = null;
			return;
		}
		this.activeTriggerId = id;
	};
	get = (id) => {
		return this.triggers.get(id);
	};
	has = (id) => {
		return this.triggers.has(id);
	};
	getFirstTriggerId = () => {
		const firstEntry = this.triggers.entries().next();
		if (firstEntry.done) return null;
		return firstEntry.value[0];
	};
	#coerceActiveTrigger = () => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return;
		if (!this.triggers.has(activeTriggerId)) this.activeTriggerId = null;
	};
};
var TooltipTetherState = class {
	registry = new TooltipTriggerRegistryState();
	root = null;
};
var TooltipTether = class {
	#state = new TooltipTetherState();
	get state() {
		return this.#state;
	}
	open(triggerId) {
		if (!this.#state.registry.has(triggerId)) return;
		this.#state.registry.setActiveTrigger(triggerId);
		this.#state.root?.setActiveTrigger(triggerId);
		this.#state.root?.handleOpen();
	}
	close() {
		this.#state.root?.handleClose();
	}
	get isOpen() {
		return this.#state.root?.opts.open.current ?? false;
	}
};
function createTooltipTether() {
	return new TooltipTether();
}
var TooltipProviderState = class TooltipProviderState {
	static create(opts) {
		return TooltipProviderContext.set(new TooltipProviderState(opts));
	}
	opts;
	isOpenDelayed = true;
	isPointerInTransit = simpleBox(false);
	#timerFn;
	#openTooltip = null;
	constructor(opts) {
		this.opts = opts;
		this.#timerFn = new TimeoutFn(() => {
			this.isOpenDelayed = true;
		}, this.opts.skipDelayDuration.current);
	}
	#startTimer = () => {
		if (this.opts.skipDelayDuration.current === 0) {
			this.isOpenDelayed = true;
			return;
		} else this.#timerFn.start();
	};
	#clearTimer = () => {
		this.#timerFn.stop();
	};
	onOpen = (tooltip) => {
		if (this.#openTooltip && this.#openTooltip !== tooltip)
			this.#openTooltip.handleClose();
		this.#clearTimer();
		this.isOpenDelayed = false;
		this.#openTooltip = tooltip;
	};
	onClose = (tooltip) => {
		if (this.#openTooltip === tooltip) {
			this.#openTooltip = null;
			this.#startTimer();
		}
	};
	isTooltipOpen = (tooltip) => {
		return this.#openTooltip === tooltip;
	};
};
var TooltipRootState = class TooltipRootState {
	static create(opts) {
		return TooltipRootContext.set(
			new TooltipRootState(opts, TooltipProviderContext.get())
		);
	}
	opts;
	provider;
	#delayDuration = derived(
		() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current
	);
	get delayDuration() {
		return this.#delayDuration();
	}
	set delayDuration($$value) {
		return this.#delayDuration($$value);
	}
	#disableHoverableContent = derived(
		() =>
			this.opts.disableHoverableContent.current ??
			this.provider.opts.disableHoverableContent.current
	);
	get disableHoverableContent() {
		return this.#disableHoverableContent();
	}
	set disableHoverableContent($$value) {
		return this.#disableHoverableContent($$value);
	}
	#disableCloseOnTriggerClick = derived(
		() =>
			this.opts.disableCloseOnTriggerClick.current ??
			this.provider.opts.disableCloseOnTriggerClick.current
	);
	get disableCloseOnTriggerClick() {
		return this.#disableCloseOnTriggerClick();
	}
	set disableCloseOnTriggerClick($$value) {
		return this.#disableCloseOnTriggerClick($$value);
	}
	#disabled = derived(
		() => this.opts.disabled.current ?? this.provider.opts.disabled.current
	);
	get disabled() {
		return this.#disabled();
	}
	set disabled($$value) {
		return this.#disabled($$value);
	}
	#ignoreNonKeyboardFocus = derived(
		() =>
			this.opts.ignoreNonKeyboardFocus.current ??
			this.provider.opts.ignoreNonKeyboardFocus.current
	);
	get ignoreNonKeyboardFocus() {
		return this.#ignoreNonKeyboardFocus();
	}
	set ignoreNonKeyboardFocus($$value) {
		return this.#ignoreNonKeyboardFocus($$value);
	}
	registry;
	tether;
	contentNode = null;
	contentPresence;
	#wasOpenDelayed = false;
	#timerFn;
	#stateAttr = derived(() => {
		if (!this.opts.open.current) return 'closed';
		return this.#wasOpenDelayed ? 'delayed-open' : 'instant-open';
	});
	get stateAttr() {
		return this.#stateAttr();
	}
	set stateAttr($$value) {
		return this.#stateAttr($$value);
	}
	constructor(opts, provider) {
		this.opts = opts;
		this.provider = provider;
		this.tether = opts.tether.current?.state ?? null;
		this.registry = this.tether?.registry ?? new TooltipTriggerRegistryState();
		this.#timerFn = new TimeoutFn(() => {
			this.#wasOpenDelayed = true;
			this.opts.open.current = true;
		}, this.delayDuration ?? 0);
		if (this.tether) this.tether.root = this;
		this.contentPresence = new PresenceManager({
			open: this.opts.open,
			ref: boxWith(() => this.contentNode),
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		watch$1(
			() => this.delayDuration,
			() => {
				if (this.delayDuration === void 0) return;
				this.#timerFn = new TimeoutFn(() => {
					this.#wasOpenDelayed = true;
					this.opts.open.current = true;
				}, this.delayDuration);
			}
		);
		watch$1(
			() => this.opts.open.current,
			(isOpen) => {
				if (isOpen) {
					this.ensureActiveTrigger();
					this.provider.onOpen(this);
				} else this.provider.onClose(this);
			},
			{ lazy: true }
		);
		watch$1(
			() => this.opts.triggerId.current,
			(triggerId) => {
				if (triggerId === this.registry.activeTriggerId) return;
				this.registry.setActiveTrigger(triggerId);
			}
		);
		watch$1(
			() => this.registry.activeTriggerId,
			(activeTriggerId) => {
				if (this.opts.triggerId.current === activeTriggerId) return;
				this.opts.triggerId.current = activeTriggerId;
			}
		);
	}
	handleOpen = () => {
		this.#timerFn.stop();
		this.#wasOpenDelayed = false;
		this.ensureActiveTrigger();
		this.opts.open.current = true;
	};
	handleClose = () => {
		this.#timerFn.stop();
		this.opts.open.current = false;
	};
	/** Stops a pending delayed open without touching the open state. */
	cancelPendingOpen = () => {
		this.#timerFn.stop();
	};
	#handleDelayedOpen = () => {
		this.#timerFn.stop();
		const shouldSkipDelay = !this.provider.isOpenDelayed;
		const delayDuration = this.delayDuration ?? 0;
		if (shouldSkipDelay || delayDuration === 0) {
			this.#wasOpenDelayed = false;
			this.opts.open.current = true;
		} else this.#timerFn.start();
	};
	onTriggerEnter = (triggerId) => {
		this.setActiveTrigger(triggerId);
		this.#handleDelayedOpen();
	};
	onTriggerLeave = () => {
		if (this.disableHoverableContent) this.handleClose();
		else this.#timerFn.stop();
	};
	ensureActiveTrigger = () => {
		if (
			this.registry.activeTriggerId !== null &&
			this.registry.has(this.registry.activeTriggerId)
		)
			return;
		if (
			this.opts.triggerId.current !== null &&
			this.registry.has(this.opts.triggerId.current)
		) {
			this.registry.setActiveTrigger(this.opts.triggerId.current);
			return;
		}
		const firstTriggerId = this.registry.getFirstTriggerId();
		this.registry.setActiveTrigger(firstTriggerId);
	};
	setActiveTrigger = (triggerId) => {
		this.registry.setActiveTrigger(triggerId);
	};
	registerTrigger = (trigger) => {
		this.registry.register(trigger);
		if (
			trigger.disabled &&
			this.registry.activeTriggerId === trigger.id &&
			this.opts.open.current
		)
			this.handleClose();
	};
	updateTrigger = (trigger) => {
		this.registry.update(trigger);
		if (
			trigger.disabled &&
			this.registry.activeTriggerId === trigger.id &&
			this.opts.open.current
		)
			this.handleClose();
	};
	unregisterTrigger = (id) => {
		const isActive = this.registry.activeTriggerId === id;
		this.registry.unregister(id);
		if (isActive && this.opts.open.current) this.handleClose();
	};
	isActiveTrigger = (triggerId) => {
		return this.registry.activeTriggerId === triggerId;
	};
	get triggerNode() {
		return this.registry.activeTriggerNode;
	}
	get activePayload() {
		return this.registry.activePayload;
	}
	get activeTriggerId() {
		return this.registry.activeTriggerId;
	}
};
var TooltipTriggerState = class TooltipTriggerState {
	static create(opts) {
		if (opts.tether.current)
			return new TooltipTriggerState(opts, null, opts.tether.current.state);
		return new TooltipTriggerState(opts, TooltipRootContext.get(), null);
	}
	opts;
	root;
	tether;
	attachment;
	#isPointerDown = simpleBox(false);
	#hasPointerMoveOpened = false;
	domContext;
	#transitCheckTimeout = null;
	#mounted = false;
	#lastRegisteredId = null;
	constructor(opts, root, tether) {
		this.opts = opts;
		this.root = root;
		this.tether = tether;
		this.domContext = new DOMContext(opts.ref);
		this.attachment = attachRef(this.opts.ref, (v) => this.#register(v));
		watch$1(
			() => this.opts.id.current,
			() => {
				this.#register(this.opts.ref.current);
			}
		);
		watch$1(
			() => this.opts.payload.current,
			() => {
				this.#register(this.opts.ref.current);
			}
		);
		watch$1(
			() => this.opts.disabled.current,
			() => {
				this.#register(this.opts.ref.current);
			}
		);
	}
	#getRoot = () => {
		return this.tether?.root ?? this.root;
	};
	#isDisabled = () => {
		const root = this.#getRoot();
		return this.opts.disabled.current || Boolean(root?.disabled);
	};
	#register = (node) => {
		if (!this.#mounted) return;
		const id = this.opts.id.current;
		const payload = this.opts.payload.current;
		const disabled = this.opts.disabled.current;
		if (this.#lastRegisteredId && this.#lastRegisteredId !== id) {
			const root = this.#getRoot();
			if (this.tether) this.tether.registry.unregister(this.#lastRegisteredId);
			else root?.unregisterTrigger(this.#lastRegisteredId);
		}
		const triggerRecord = {
			id,
			node,
			payload,
			disabled
		};
		const root = this.#getRoot();
		if (this.tether) {
			if (this.tether.registry.has(id)) this.tether.registry.update(triggerRecord);
			else this.tether.registry.register(triggerRecord);
			if (
				disabled &&
				this.tether.registry.activeTriggerId === id &&
				root?.opts.open.current
			)
				root.handleClose();
		} else if (root?.registry.has(id)) root.updateTrigger(triggerRecord);
		else root?.registerTrigger(triggerRecord);
		this.#lastRegisteredId = id;
	};
	#clearTransitCheck = () => {
		if (this.#transitCheckTimeout !== null) {
			clearTimeout(this.#transitCheckTimeout);
			this.#transitCheckTimeout = null;
		}
	};
	handlePointerUp = () => {
		this.#isPointerDown.current = false;
	};
	#onpointerup = () => {
		if (this.#isDisabled()) return;
		this.#isPointerDown.current = false;
	};
	#onpointerdown = () => {
		if (this.#isDisabled()) return;
		const root = this.#getRoot();
		if (root && !root.disableCloseOnTriggerClick) {
			if (root.opts.open.current) root.handleClose();
			else root.cancelPendingOpen();
		}
		this.#isPointerDown.current = true;
		this.domContext.getDocument().addEventListener(
			'pointerup',
			() => {
				this.handlePointerUp();
			},
			{ once: true }
		);
	};
	#onpointerenter = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (e.pointerType === 'touch') return;
		if (root.provider.isPointerInTransit.current) {
			this.#clearTransitCheck();
			this.#transitCheckTimeout = window.setTimeout(() => {
				if (root.provider.isPointerInTransit.current) {
					root.provider.isPointerInTransit.current = false;
					root.onTriggerEnter(this.opts.id.current);
					this.#hasPointerMoveOpened = true;
				}
			}, 250);
			return;
		}
		root.onTriggerEnter(this.opts.id.current);
		this.#hasPointerMoveOpened = true;
	};
	#onpointermove = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (e.pointerType === 'touch') return;
		if (this.#hasPointerMoveOpened) return;
		this.#clearTransitCheck();
		root.provider.isPointerInTransit.current = false;
		root.onTriggerEnter(this.opts.id.current);
		this.#hasPointerMoveOpened = true;
	};
	#onpointerleave = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) return;
		this.#clearTransitCheck();
		if (!root.isActiveTrigger(this.opts.id.current)) {
			this.#hasPointerMoveOpened = false;
			return;
		}
		const relatedTarget = e.relatedTarget;
		if (isElement$1(relatedTarget))
			for (const record of root.registry.triggers.values()) {
				if (record.node !== relatedTarget) continue;
				if (root.provider.opts.skipDelayDuration.current > 0) {
					this.#hasPointerMoveOpened = false;
					return;
				}
				root.handleClose();
				this.#hasPointerMoveOpened = false;
				return;
			}
		root.onTriggerLeave();
		this.#hasPointerMoveOpened = false;
	};
	#onfocus = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isPointerDown.current) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget)) return;
		root.setActiveTrigger(this.opts.id.current);
		root.handleOpen();
	};
	#onblur = () => {
		const root = this.#getRoot();
		if (!root || this.#isDisabled()) return;
		root.handleClose();
	};
	#onclick = () => {
		const root = this.#getRoot();
		if (!root || root.disableCloseOnTriggerClick || this.#isDisabled()) return;
		root.handleClose();
	};
	#props = derived(() => {
		const root = this.#getRoot();
		const isOpenForTrigger = Boolean(
			root?.opts.open.current && root.isActiveTrigger(this.opts.id.current)
		);
		const isDisabled = this.#isDisabled();
		return {
			id: this.opts.id.current,
			'aria-describedby': isOpenForTrigger ? root?.contentNode?.id : void 0,
			'data-state': isOpenForTrigger ? root?.stateAttr : 'closed',
			'data-disabled': boolToEmptyStrOrUndef(isDisabled),
			'data-delay-duration': `${root?.delayDuration ?? 0}`,
			[tooltipAttrs.trigger]: '',
			tabindex: isDisabled ? void 0 : this.opts.tabindex.current,
			disabled: this.opts.disabled.current,
			onpointerup: this.#onpointerup,
			onpointerdown: this.#onpointerdown,
			onpointerenter: this.#onpointerenter,
			onpointermove: this.#onpointermove,
			onpointerleave: this.#onpointerleave,
			onfocus: this.#onfocus,
			onblur: this.#onblur,
			onclick: this.#onclick,
			...this.attachment
		};
	});
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TooltipContentState = class TooltipContentState {
	static create(opts) {
		return new TooltipContentState(opts, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => (this.root.contentNode = v));
		new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.root.contentNode,
			enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
			transitIntentTimeout: 180,
			ignoredTargets: () => {
				if (this.root.provider.opts.skipDelayDuration.current === 0) return [];
				const nodes = [];
				const activeTriggerNode = this.root.triggerNode;
				for (const record of this.root.registry.triggers.values())
					if (record.node && record.node !== activeTriggerNode) nodes.push(record.node);
				return nodes;
			},
			onPointerExit: () => {
				if (this.root.provider.isTooltipOpen(this.root)) this.root.handleClose();
			}
		});
	}
	onInteractOutside = (e) => {
		if (
			isElement$1(e.target) &&
			this.root.triggerNode?.contains(e.target) &&
			this.root.disableCloseOnTriggerClick
		) {
			e.preventDefault();
			return;
		}
		this.opts.onInteractOutside.current(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current?.(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		'data-state': this.root.stateAttr,
		'data-disabled': boolToEmptyStrOrUndef(this.root.disabled),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		style: { outline: 'none' },
		[tooltipAttrs.content]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip.svelte
function Tooltip($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			open = false,
			triggerId = null,
			onOpenChange = noop$1,
			onOpenChangeComplete = noop$1,
			disabled,
			delayDuration,
			disableCloseOnTriggerClick,
			disableHoverableContent,
			ignoreNonKeyboardFocus,
			tether,
			children
		} = $$props;
		const rootState = TooltipRootState.create({
			open: boxWith(
				() => open,
				(v) => {
					open = v;
					onOpenChange(v);
				}
			),
			triggerId: boxWith(
				() => triggerId,
				(v) => {
					triggerId = v;
				}
			),
			delayDuration: boxWith(() => delayDuration),
			disableCloseOnTriggerClick: boxWith(() => disableCloseOnTriggerClick),
			disableHoverableContent: boxWith(() => disableHoverableContent),
			ignoreNonKeyboardFocus: boxWith(() => ignoreNonKeyboardFocus),
			disabled: boxWith(() => disabled),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
			tether: boxWith(() => tether)
		});
		Floating_layer($$renderer, {
			tooltip: true,
			children: ($$renderer) => {
				children?.($$renderer, {
					open: rootState.opts.open.current,
					triggerId: rootState.activeTriggerId,
					payload: rootState.activePayload
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			open,
			triggerId
		});
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip-content.svelte
function Tooltip_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			children,
			child,
			id = createId(uid),
			ref = null,
			side = 'top',
			sideOffset = 0,
			align = 'center',
			avoidCollisions = true,
			arrowPadding = 0,
			sticky = 'partial',
			strategy,
			hideWhenDetached = false,
			customAnchor,
			collisionPadding = 0,
			onInteractOutside = noop$1,
			onEscapeKeydown = noop$1,
			forceMount = false,
			style,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const contentState = TooltipContentState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			onInteractOutside: boxWith(() => onInteractOutside),
			onEscapeKeydown: boxWith(() => onEscapeKeydown)
		});
		const floatingProps = derived(() => ({
			side,
			sideOffset,
			align,
			avoidCollisions,
			arrowPadding,
			sticky,
			hideWhenDetached,
			collisionPadding,
			strategy,
			customAnchor: customAnchor ?? contentState.root.triggerNode
		}));
		const mergedProps = derived(() =>
			mergeProps(restProps, floatingProps(), contentState.props)
		);
		if (forceMount) {
			$$renderer.push('<!--[0-->');
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalWrapperProps = mergeProps(wrapperProps, {
						style: {
							pointerEvents: contentState.root.disableHoverableContent ? 'none' : void 0
						}
					});
					const finalProps = mergeProps(
						props,
						{ style: getFloatingContentCSSVars('tooltip') },
						{ style }
					);
					if (child) {
						$$renderer.push('<!--[0-->');
						child($$renderer, {
							props: finalProps,
							wrapperProps: finalWrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push(
							`<!--[-1--><div${attributes({ ...finalWrapperProps })}><div${attributes({ ...finalProps })}>`
						);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer_force_mount(
					$$renderer,
					spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							enabled: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: true,
							ref: contentState.opts.ref,
							tooltip: true,
							shouldRender: contentState.shouldRender,
							contentPointerEvents: contentState.root.disableHoverableContent
								? 'none'
								: 'auto',
							popper,
							$$slots: { popper: true }
						}
					])
				);
			}
		} else if (!forceMount) {
			$$renderer.push('<!--[1-->');
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalWrapperProps = mergeProps(wrapperProps, {
						style: {
							pointerEvents: contentState.root.disableHoverableContent ? 'none' : void 0
						}
					});
					const finalProps = mergeProps(
						props,
						{ style: getFloatingContentCSSVars('tooltip') },
						{ style }
					);
					if (child) {
						$$renderer.push('<!--[0-->');
						child($$renderer, {
							props: finalProps,
							wrapperProps: finalWrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push(
							`<!--[-1--><div${attributes({ ...finalWrapperProps })}><div${attributes({ ...finalProps })}>`
						);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer(
					$$renderer,
					spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							open: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: false,
							ref: contentState.opts.ref,
							tooltip: true,
							shouldRender: contentState.shouldRender,
							contentPointerEvents: contentState.root.disableHoverableContent
								? 'none'
								: 'auto',
							popper,
							$$slots: { popper: true }
						}
					])
				);
			}
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip-content-static.svelte
function Tooltip_content_static($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			children,
			child,
			id = createId(uid),
			ref = null,
			onInteractOutside = noop$1,
			onEscapeKeydown = noop$1,
			forceMount = false,
			style,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const contentState = TooltipContentState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			onInteractOutside: boxWith(() => onInteractOutside),
			onEscapeKeydown: boxWith(() => onEscapeKeydown)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (forceMount) {
			$$renderer.push('<!--[0-->');
			{
				function popper($$renderer, { props }) {
					const finalProps = mergeProps(
						props,
						{ style: getFloatingContentCSSVars('tooltip') },
						{ style }
					);
					if (child) {
						$$renderer.push('<!--[0-->');
						child($$renderer, {
							props: finalProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push(`<!--[-1--><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer_force_mount(
					$$renderer,
					spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							isStatic: true,
							enabled: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: true,
							ref: contentState.opts.ref,
							tooltip: true,
							shouldRender: contentState.shouldRender,
							popper,
							$$slots: { popper: true }
						}
					])
				);
			}
		} else if (!forceMount) {
			$$renderer.push('<!--[1-->');
			{
				function popper($$renderer, { props }) {
					const finalProps = mergeProps(
						props,
						{ style: getFloatingContentCSSVars('tooltip') },
						{ style }
					);
					if (child) {
						$$renderer.push('<!--[0-->');
						child($$renderer, {
							props: finalProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push(`<!--[-1--><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer(
					$$renderer,
					spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							tooltip: true,
							isStatic: true,
							open: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: false,
							ref: contentState.opts.ref,
							shouldRender: contentState.shouldRender,
							popper,
							$$slots: { popper: true }
						}
					])
				);
			}
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip-trigger.svelte
function Tooltip_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			children,
			child,
			id = createId(uid),
			disabled = false,
			payload,
			tether,
			type = 'button',
			tabindex = 0,
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const triggerState = TooltipTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			tabindex: boxWith(() => tabindex ?? 0),
			payload: boxWith(() => payload),
			tether: boxWith(() => tether),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() =>
			mergeProps(restProps, triggerState.props, { type })
		);
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip-arrow.svelte
function Tooltip_arrow($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Floating_layer_arrow(
				$$renderer,
				spread_props([
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				])
			);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/components/tooltip-provider.svelte
function Tooltip_provider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			children,
			delayDuration = 700,
			disableCloseOnTriggerClick = false,
			disableHoverableContent = false,
			disabled = false,
			ignoreNonKeyboardFocus = false,
			skipDelayDuration = 300
		} = $$props;
		TooltipProviderState.create({
			delayDuration: boxWith(() => delayDuration),
			disableCloseOnTriggerClick: boxWith(() => disableCloseOnTriggerClick),
			disableHoverableContent: boxWith(() => disableHoverableContent),
			disabled: boxWith(() => disabled),
			ignoreNonKeyboardFocus: boxWith(() => ignoreNonKeyboardFocus),
			skipDelayDuration: boxWith(() => skipDelayDuration)
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/tooltip/exports.js
var exports_exports = /* @__PURE__ */ __exportAll({
	Arrow: () => Tooltip_arrow,
	Content: () => Tooltip_content,
	ContentStatic: () => Tooltip_content_static,
	Portal: () => Portal$1,
	Provider: () => Tooltip_provider,
	Root: () => Tooltip,
	Trigger: () => Tooltip_trigger,
	createTether: () => createTooltipTether
});
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/Loader.svelte
var bars = Array(12).fill(0);
function Loader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { visible, class: className } = $$props;
		$$renderer.push(
			`<div${attr_class(clsx(['sonner-loading-wrapper', className].filter(Boolean).join(' ')))}${attr('data-visible', visible)}><div class="sonner-spinner"><!--[-->`
		);
		const each_array = ensure_array_like(bars);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			each_array[i];
			$$renderer.push(`<div class="sonner-loading-bar"></div>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = void 0;
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/internal/utils/dom.js
/**
 * Handles getting the active element in a document or shadow root.
 * If the active element is within a shadow root, it will traverse the shadow root
 * to find the active element.
 * If not, it will return the active element in the document.
 *
 * @param document A document or shadow root to get the active element from.
 * @returns The active element in the document or shadow root.
 */
function getActiveElement(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/utilities/active-element/active-element.svelte.js
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber$1((update) => {
			const cleanupFocusIn = on(window, 'focusin', update);
			const cleanupFocusOut = on(window, 'focusout', update);
			return () => {
				cleanupFocusIn();
				cleanupFocusOut();
			};
		});
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement(this.#document);
	}
};
new ActiveElement();
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/utilities/context/context.js
var Context = class {
	#name;
	#key;
	/**
	 * @param name The name of the context.
	 * This is used for generating the context key and error messages.
	 */
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	 * The key used to get and set the context.
	 *
	 * It is not recommended to use this value directly.
	 * Instead, use the methods provided by this class.
	 */
	get key() {
		return this.#key;
	}
	/**
	 * Checks whether this has been set in the context of a parent component.
	 *
	 * Must be called during component initialisation.
	 */
	exists() {
		return hasContext(this.#key);
	}
	/**
	 * Retrieves the context that belongs to the closest parent component.
	 *
	 * Must be called during component initialisation.
	 *
	 * @throws An error if the context does not exist.
	 */
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	 * Retrieves the context that belongs to the closest parent component,
	 * or the given fallback value if the context does not exist.
	 *
	 * Must be called during component initialisation.
	 */
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	 * Associates the given value with the current component and returns it.
	 *
	 * Must be called during component initialisation.
	 */
	set(context) {
		return setContext(this.#key, context);
	}
};
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/utilities/watch/watch.svelte.js
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}
function watch(sources, effect, options) {
	runWatcher(sources, 'post', effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, 'pre', effect, options);
}
watch.pre = watchPre;
function watchOnce(source, effect) {}
function watchOncePre(source, effect) {}
watchOnce.pre = watchOncePre;
//#endregion
//#region ../node_modules/.pnpm/runed@0.28.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/runed/dist/utilities/resource/resource.svelte.js
function debounce(fn, delay) {
	let timeoutId;
	let lastResolve = null;
	return (...args) => {
		return new Promise((resolve) => {
			if (lastResolve) lastResolve(void 0);
			lastResolve = resolve;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(async () => {
				const result = await fn(...args);
				if (lastResolve) {
					lastResolve(result);
					lastResolve = null;
				}
			}, delay);
		});
	};
}
function throttle(fn, delay) {
	let lastRun = 0;
	let lastPromise = null;
	return (...args) => {
		const now = Date.now();
		if (lastRun && now - lastRun < delay) return lastPromise ?? Promise.resolve(void 0);
		lastRun = now;
		lastPromise = fn(...args);
		return lastPromise;
	};
}
function runResource(source, fetcher, options = {}, effectFn) {
	const {
		lazy = false,
		once = false,
		initialValue,
		debounce: debounceTime,
		throttle: throttleTime
	} = options;
	let current = initialValue;
	let loading = false;
	let error = void 0;
	let cleanupFns = [];
	const runCleanup = () => {
		cleanupFns.forEach((fn) => fn());
		cleanupFns = [];
	};
	const onCleanup = (fn) => {
		cleanupFns = [...cleanupFns, fn];
	};
	const baseFetcher = async (value, previousValue, refetching = false) => {
		try {
			loading = true;
			error = void 0;
			runCleanup();
			const controller = new AbortController();
			onCleanup(() => controller.abort());
			const result = await fetcher(value, previousValue, {
				data: current,
				refetching,
				onCleanup,
				signal: controller.signal
			});
			current = result;
			return result;
		} catch (e) {
			if (!(e instanceof DOMException && e.name === 'AbortError')) error = e;
			return;
		} finally {
			loading = false;
		}
	};
	const runFetcher = debounceTime
		? debounce(baseFetcher, debounceTime)
		: throttleTime
			? throttle(baseFetcher, throttleTime)
			: baseFetcher;
	const sources = Array.isArray(source) ? source : [source];
	let prevValues;
	effectFn(
		(values, previousValues) => {
			if (once && prevValues) return;
			prevValues = values;
			runFetcher(
				Array.isArray(source) ? values : values[0],
				Array.isArray(source) ? previousValues : previousValues?.[0]
			);
		},
		{ lazy }
	);
	return {
		get current() {
			return current;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		mutate: (value) => {
			current = value;
		},
		refetch: (info) => {
			const values = sources.map((s) => s());
			return runFetcher(
				Array.isArray(source) ? values : values[0],
				Array.isArray(source) ? values : values[0],
				info ?? true
			);
		}
	};
}
function resource(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getters = () => sources.map((s) => s());
		watch(
			getters,
			(values, previousValues) => {
				fn(values, previousValues ?? []);
			},
			options
		);
	});
}
function resourcePre(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getter = () => sources.map((s) => s());
		watch.pre(
			getter,
			(values, previousValues) => {
				fn(values, previousValues ?? []);
			},
			options
		);
	});
}
resource.pre = resourcePre;
new Context('richColorsContext');
var sonnerContext = new Context('<Toaster/>');
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/types.js
function isAction(action) {
	return action.label !== void 0;
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/internal/use-document-hidden.svelte.js
function useDocumentHidden() {
	let current = typeof document !== 'undefined' ? document.hidden : false;
	return {
		get current() {
			return current;
		}
	};
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/Toast.svelte
var TOAST_LIFETIME$1 = 4e3;
var GAP$1 = 14;
var TIME_BEFORE_UNMOUNT = 200;
var DEFAULT_TOAST_CLASSES = {
	toast: '',
	title: '',
	description: '',
	loader: '',
	closeButton: '',
	cancelButton: '',
	actionButton: '',
	action: '',
	warning: '',
	error: '',
	success: '',
	default: '',
	info: '',
	loading: ''
};
function getDefaultSwipeDirections(position) {
	const [y, x] = position.split('-');
	const directions = [];
	if (y) directions.push(y);
	if (x) directions.push(x);
	return directions;
}
function Toast($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			toast,
			index,
			expanded,
			invert: invertFromToaster,
			position,
			visibleToasts,
			expandByDefault,
			closeButton: closeButtonFromToaster,
			interacting,
			cancelButtonStyle = '',
			actionButtonStyle = '',
			duration: durationFromToaster,
			descriptionClass = '',
			classes: classesProp,
			unstyled = false,
			loadingIcon,
			successIcon,
			errorIcon,
			warningIcon,
			closeIcon,
			infoIcon,
			defaultRichColors = false,
			gap = GAP$1,
			swipeDirections: swipeDirectionsProp,
			closeButtonAriaLabel,
			pauseWhenPageIsHidden,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
		let mounted = false;
		let removed = false;
		let swiping = false;
		let swipeOut = false;
		let isSwiped = false;
		let offsetBeforeRemove = 0;
		let initialHeight = 0;
		toast.duration;
		let swipeOutDirection = null;
		const isFront = derived(() => index === 0);
		const isVisible = derived(() => index + 1 <= visibleToasts);
		const toastType = derived(() => toast.type);
		const dismissible = derived(() =>
			toast.dismissible !== void 0
				? toast.dismissible !== false
				: toast.dismissable !== false
		);
		const toastClass = derived(() => toast.class || '');
		const toastDescriptionClass = derived(() => toast.descriptionClass || '');
		const relevantHeights = derived(() =>
			toastState.heights.filter(
				(height) => height.toasterId === toast.toasterId && height.position === position
			)
		);
		const heightIndex = derived(() => {
			const idx = relevantHeights().findIndex((height) => height.toastId === toast.id);
			return idx === -1 ? 0 : idx;
		});
		const closeButton = derived(() => toast.closeButton ?? closeButtonFromToaster);
		derived(() => toast.duration ?? durationFromToaster ?? TOAST_LIFETIME$1);
		const coords = derived(() => position.split('-'));
		derived(() => swipeDirectionsProp ?? getDefaultSwipeDirections(position));
		const toastsHeightBefore = derived(() =>
			relevantHeights().reduce((prev, curr, reducerIndex) => {
				if (reducerIndex >= heightIndex()) return prev;
				return prev + curr.height;
			}, 0)
		);
		useDocumentHidden();
		const invert = derived(() => toast.invert || invertFromToaster);
		const disabled = derived(() => toastType() === 'loading');
		const classes = derived(() => ({
			...defaultClasses,
			...classesProp
		}));
		derived(() => toast.title);
		derived(() => toast.description);
		const offset = derived(() => Math.round(heightIndex() * gap + toastsHeightBefore()));
		function deleteToast() {
			removed = true;
			offsetBeforeRemove = offset();
			toastState.removeHeight(toast.id);
			toastState.markDismissed(toast.id);
			toastState.scheduleRemoval(toast.id, TIME_BEFORE_UNMOUNT);
		}
		derived(
			() =>
				(toast.promise && toastType() === 'loading') ||
				toast.duration === Number.POSITIVE_INFINITY
		);
		const icon = derived(() => {
			if (toast.icon) return toast.icon;
			if (toastType() === 'success') return successIcon;
			if (toastType() === 'error') return errorIcon;
			if (toastType() === 'warning') return warningIcon;
			if (toastType() === 'info') return infoIcon;
			if (toastType() === 'loading') return loadingIcon;
			return null;
		});
		function LoadingIcon($$renderer) {
			if (loadingIcon) {
				$$renderer.push(
					`<!--[0--><div${attr_class(clsx(cn(classes()?.loader, toast?.classes?.loader, 'sonner-loader')))}${attr('data-visible', toastType() === 'loading')}>`
				);
				loadingIcon($$renderer);
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push('<!--[-1-->');
				Loader($$renderer, {
					class: cn(classes()?.loader, toast.classes?.loader),
					visible: toastType() === 'loading'
				});
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(
			`<li${attr('tabindex', 0)}${attr_class(clsx(cn(restProps.class, toastClass(), classes()?.toast, toast?.classes?.toast, classes()?.[toastType()], toast?.classes?.[toastType()])))}${attr('aria-live', toast.important ? 'assertive' : 'polite')} aria-atomic="true" data-sonner-toast=""${attr('data-rich-colors', toast.richColors ?? defaultRichColors)}${attr('data-styled', !(toast.component || toast.unstyled || unstyled))}${attr('data-mounted', mounted)}${attr('data-promise', Boolean(toast.promise))}${attr('data-swiped', isSwiped)}${attr('data-removed', removed)}${attr('data-visible', isVisible())}${attr('data-y-position', coords()[0])}${attr('data-x-position', coords()[1])}${attr('data-index', index)}${attr('data-front', isFront())}${attr('data-swiping', swiping)}${attr('data-dismissible', dismissible())}${attr('data-type', toastType())}${attr('data-invert', invert())}${attr('data-swipe-out', swipeOut)}${attr('data-swipe-direction', swipeOutDirection)}${attr('data-expanded', Boolean(expanded || (expandByDefault && mounted)))}${attr_style(
				`${restProps.style} ${toast.style}`,
				{
					'--index': index,
					'--toasts-before': index,
					'--z-index': toastState.toasts.length - index,
					'--offset': `${removed ? offsetBeforeRemove : offset()}px`,
					'--initial-height': expandByDefault ? 'auto' : `${initialHeight}px`
				}
			)}>`
		);
		if (
			closeButton() &&
			!toast.component &&
			toastType() !== 'loading' &&
			closeIcon !== null
		) {
			$$renderer.push(
				`<!--[0--><button${attr('aria-label', closeButtonAriaLabel)}${attr('data-disabled', disabled())} data-close-button=""${attr_class(clsx(cn(classes()?.closeButton, toast?.classes?.closeButton)))}>`
			);
			closeIcon?.($$renderer);
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (toast.component) {
			$$renderer.push('<!--[0-->');
			const Component = toast.component;
			if (Component) {
				$$renderer.push('<!--[-->');
				Component(
					$$renderer,
					spread_props([toast.componentProps, { closeToast: deleteToast }])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		} else {
			$$renderer.push('<!--[-1-->');
			if (
				(toastType() || toast.icon || toast.promise) &&
				toast.icon !== null &&
				(icon() !== null || toast.icon)
			) {
				$$renderer.push(
					`<!--[0--><div data-icon=""${attr_class(clsx(cn(classes()?.icon, toast?.classes?.icon)))}>`
				);
				if (toastType() === 'loading') {
					$$renderer.push('<!--[0-->');
					if (toast.icon) {
						$$renderer.push('<!--[0-->');
						if (toast.icon) {
							$$renderer.push('<!--[-->');
							toast.icon($$renderer, {});
							$$renderer.push('<!--]-->');
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push('<!--]-->');
						}
					} else {
						$$renderer.push('<!--[-1-->');
						LoadingIcon($$renderer);
					}
					$$renderer.push(`<!--]-->`);
				} else if (toast.promise) {
					$$renderer.push('<!--[1-->');
					LoadingIcon($$renderer);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (toastType() !== 'loading') {
					$$renderer.push('<!--[0-->');
					if (toast.icon) {
						$$renderer.push('<!--[0-->');
						if (toast.icon) {
							$$renderer.push('<!--[-->');
							toast.icon($$renderer, {});
							$$renderer.push('<!--]-->');
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push('<!--]-->');
						}
					} else if (toastType() === 'success') {
						$$renderer.push('<!--[1-->');
						successIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === 'error') {
						$$renderer.push('<!--[2-->');
						errorIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === 'warning') {
						$$renderer.push('<!--[3-->');
						warningIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === 'info') {
						$$renderer.push('<!--[4-->');
						infoIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--> <div data-content=""${attr_class(clsx(cn(classes()?.content, toast?.classes?.content)))}><div data-title=""${attr_class(clsx(cn(classes()?.title, toast?.classes?.title)))}>`
			);
			if (toast.title) {
				$$renderer.push('<!--[0-->');
				if (typeof toast.title !== 'string') {
					$$renderer.push('<!--[0-->');
					const Title = toast.title;
					if (Title) {
						$$renderer.push('<!--[-->');
						Title($$renderer, spread_props([toast.componentProps]));
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
				} else $$renderer.push(`<!--[-1-->${escape_html(toast.title)}`);
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></div> `);
			if (toast.description) {
				$$renderer.push(
					`<!--[0--><div data-description=""${attr_class(clsx(cn(descriptionClass, toastDescriptionClass(), classes()?.description, toast.classes?.description)))}>`
				);
				if (typeof toast.description !== 'string') {
					$$renderer.push('<!--[0-->');
					const Description = toast.description;
					if (Description) {
						$$renderer.push('<!--[-->');
						Description($$renderer, spread_props([toast.componentProps]));
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
				} else $$renderer.push(`<!--[-1-->${escape_html(toast.description)}`);
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></div> `);
			if (toast.cancel) {
				$$renderer.push('<!--[0-->');
				if (typeof toast.cancel === 'function') {
					$$renderer.push('<!--[0-->');
					if (toast.cancel) {
						$$renderer.push('<!--[-->');
						toast.cancel($$renderer, {});
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
				} else if (isAction(toast.cancel))
					$$renderer.push(
						`<!--[1--><button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx(cn(classes()?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (toast.action) {
				$$renderer.push('<!--[0-->');
				if (typeof toast.action === 'function') {
					$$renderer.push('<!--[0-->');
					if (toast.action) {
						$$renderer.push('<!--[-->');
						toast.action($$renderer, {});
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
				} else if (isAction(toast.action))
					$$renderer.push(
						`<!--[1--><button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx(cn(classes()?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></li>`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/icons/SuccessIcon.svelte
function SuccessIcon($$renderer) {
	$$renderer.push(
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/icons/ErrorIcon.svelte
function ErrorIcon($$renderer) {
	$$renderer.push(
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/icons/WarningIcon.svelte
function WarningIcon($$renderer) {
	$$renderer.push(
		`<svg aria-hidden="true" viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/icons/InfoIcon.svelte
function InfoIcon($$renderer) {
	$$renderer.push(
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/icons/CloseIcon.svelte
function CloseIcon($$renderer) {
	$$renderer.push(
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte-sonner@1.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/svelte-sonner/dist/Toaster.svelte
var VISIBLE_TOASTS_AMOUNT = 3;
var VIEWPORT_OFFSET = '24px';
var MOBILE_VIEWPORT_OFFSET = '16px';
var TOAST_LIFETIME = 4e3;
var TOAST_WIDTH = 356;
var GAP = 14;
var DARK = 'dark';
var LIGHT = 'light';
function getOffsetObject(defaultOffset, mobileOffset) {
	const styles = {};
	[defaultOffset, mobileOffset].forEach((offset, index) => {
		const isMobile = index === 1;
		const prefix = isMobile ? '--mobile-offset' : '--offset';
		const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
		function assignAll(offset) {
			['top', 'right', 'bottom', 'left'].forEach((key) => {
				styles[`${prefix}-${key}`] = typeof offset === 'number' ? `${offset}px` : offset;
			});
		}
		if (typeof offset === 'number' || typeof offset === 'string') assignAll(offset);
		else if (typeof offset === 'object')
			['top', 'right', 'bottom', 'left'].forEach((key) => {
				const value = offset[key];
				if (value === void 0) styles[`${prefix}-${key}`] = defaultValue;
				else
					styles[`${prefix}-${key}`] = typeof value === 'number' ? `${value}px` : value;
			});
		else assignAll(defaultValue);
	});
	return styles;
}
function Toaster($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		function getInitialTheme(t) {
			if (t !== 'system') return t;
			if (typeof window !== 'undefined') {
				if (
					window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: dark)').matches
				)
					return DARK;
				return LIGHT;
			}
			return LIGHT;
		}
		let {
			id,
			invert = false,
			position = 'bottom-right',
			hotkey = ['altKey', 'KeyT'],
			expand = false,
			closeButton = false,
			offset = VIEWPORT_OFFSET,
			mobileOffset = MOBILE_VIEWPORT_OFFSET,
			theme = 'light',
			richColors = false,
			duration = TOAST_LIFETIME,
			visibleToasts = VISIBLE_TOASTS_AMOUNT,
			toastOptions = {},
			dir = 'auto',
			gap = GAP,
			swipeDirections,
			pauseWhenPageIsHidden = false,
			loadingIcon: loadingIconProp,
			successIcon: successIconProp,
			errorIcon: errorIconProp,
			warningIcon: warningIconProp,
			closeIcon: closeIconProp,
			infoIcon: infoIconProp,
			containerAriaLabel = 'Notifications',
			class: className,
			closeButtonAriaLabel = 'Close toast',
			onblur,
			onfocus,
			onmouseenter,
			onmousemove,
			onmouseleave,
			ondragend,
			onpointerdown,
			onpointerup,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		function getDocumentDirection() {
			if (dir !== 'auto') return dir;
			if (typeof window === 'undefined') return 'ltr';
			if (typeof document === 'undefined') return 'ltr';
			const dirAttribute = document.documentElement.getAttribute('dir');
			if (dirAttribute === 'auto' || !dirAttribute) {
				run(
					() =>
						(dir = window.getComputedStyle(document.documentElement).direction ?? 'ltr')
				);
				return dir;
			}
			run(() => (dir = dirAttribute));
			return dirAttribute;
		}
		const filteredToasts = derived(() =>
			id
				? toastState.toasts.filter((toast) => toast.toasterId === id)
				: toastState.toasts.filter((toast) => !toast.toasterId)
		);
		const possiblePositions = derived(() =>
			Array.from(
				new Set(
					[
						position,
						...filteredToasts()
							.filter((toast) => toast.position)
							.map((toast) => toast.position)
					].filter(Boolean)
				)
			)
		);
		let expanded = false;
		let interacting = false;
		let actualTheme = getInitialTheme(theme);
		const hotkeyLabel = derived(() =>
			hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '')
		);
		sonnerContext.set(new SonnerState());
		$$renderer.push(
			`<section${attr('aria-label', `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel())}`)}${attr('tabindex', -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false">`
		);
		if (filteredToasts().length > 0) {
			$$renderer.push(`<!--[0--><!--[-->`);
			const each_array = ensure_array_like(possiblePositions());
			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let position = each_array[index];
				const [y, x] = position.split('-');
				const offsetObject = getOffsetObject(offset, mobileOffset);
				const frontHeight =
					toastState.heights.find(
						(height) => height.toasterId === id && height.position === position
					)?.height ?? 0;
				$$renderer.push(
					`<ol${attributes(
						{
							tabindex: -1,
							dir: getDocumentDirection(),
							class: clsx(className),
							'data-sonner-toaster': true,
							'data-sonner-theme': actualTheme,
							'data-y-position': y,
							'data-x-position': x,
							style: restProps.style,
							...restProps
						},
						void 0,
						void 0,
						{
							'--front-toast-height': `${frontHeight}px`,
							'--width': `${TOAST_WIDTH}px`,
							'--gap': `${gap}px`,
							'--offset-top': offsetObject['--offset-top'],
							'--offset-right': offsetObject['--offset-right'],
							'--offset-bottom': offsetObject['--offset-bottom'],
							'--offset-left': offsetObject['--offset-left'],
							'--mobile-offset-top': offsetObject['--mobile-offset-top'],
							'--mobile-offset-right': offsetObject['--mobile-offset-right'],
							'--mobile-offset-bottom': offsetObject['--mobile-offset-bottom'],
							'--mobile-offset-left': offsetObject['--mobile-offset-left']
						}
					)}><!--[-->`
				);
				const each_array_1 = ensure_array_like(
					filteredToasts().filter(
						(toast) => (!toast.position && index === 0) || toast.position === position
					)
				);
				for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
					let toast = each_array_1[index];
					{
						function successIcon($$renderer) {
							if (successIconProp) {
								$$renderer.push('<!--[0-->');
								successIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (successIconProp !== null) {
								$$renderer.push('<!--[1-->');
								SuccessIcon($$renderer, {});
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						function errorIcon($$renderer) {
							if (errorIconProp) {
								$$renderer.push('<!--[0-->');
								errorIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (errorIconProp !== null) {
								$$renderer.push('<!--[1-->');
								ErrorIcon($$renderer, {});
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						function warningIcon($$renderer) {
							if (warningIconProp) {
								$$renderer.push('<!--[0-->');
								warningIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (warningIconProp !== null) {
								$$renderer.push('<!--[1-->');
								WarningIcon($$renderer, {});
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						function infoIcon($$renderer) {
							if (infoIconProp) {
								$$renderer.push('<!--[0-->');
								infoIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (infoIconProp !== null) {
								$$renderer.push('<!--[1-->');
								InfoIcon($$renderer, {});
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						function closeIcon($$renderer) {
							if (closeIconProp) {
								$$renderer.push('<!--[0-->');
								closeIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (closeIconProp !== null) {
								$$renderer.push('<!--[1-->');
								CloseIcon($$renderer, {});
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						Toast($$renderer, {
							index,
							toast,
							defaultRichColors: richColors,
							duration: toastOptions?.duration ?? duration,
							class: toastOptions?.class ?? '',
							descriptionClass: toastOptions?.descriptionClass || '',
							invert,
							visibleToasts,
							closeButton: toastOptions?.closeButton ?? closeButton,
							interacting,
							position,
							gap,
							style: toastOptions?.style ?? '',
							classes: toastOptions.classes || {},
							unstyled: toastOptions.unstyled ?? false,
							cancelButtonStyle: toastOptions?.cancelButtonStyle ?? '',
							actionButtonStyle: toastOptions?.actionButtonStyle ?? '',
							closeButtonAriaLabel:
								toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
							expandByDefault: expand,
							expanded,
							swipeDirections,
							pauseWhenPageIsHidden,
							loadingIcon: loadingIconProp,
							successIcon,
							errorIcon,
							warningIcon,
							infoIcon,
							closeIcon,
							$$slots: {
								successIcon: true,
								errorIcon: true,
								warningIcon: true,
								infoIcon: true,
								closeIcon: true
							}
						});
					}
				}
				$$renderer.push(`<!--]--></ol>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></section>`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/crosshair.svelte
function Crosshair($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'crosshair',
					size: 24,
					node: [
						[
							'circle',
							{
								cx: '12',
								cy: '12',
								r: '10'
							}
						],
						[
							'line',
							{
								x1: '22',
								x2: '18',
								y1: '12',
								y2: '12'
							}
						],
						[
							'line',
							{
								x1: '6',
								x2: '2',
								y1: '12',
								y2: '12'
							}
						],
						[
							'line',
							{
								x1: '12',
								x2: '12',
								y1: '6',
								y2: '2'
							}
						],
						[
							'line',
							{
								x1: '12',
								x2: '12',
								y1: '22',
								y2: '18'
							}
						]
					]
				}
			}
		])
	);
}
//#endregion
//#region src/lib/components/header/Header.svelte
function navLink($$renderer, href, section, label) {
	$$renderer.push(
		`<a${attr('href', href)}${attr('aria-current', page.url.pathname.startsWith(section) ? 'page' : void 0)} class="ui-focus-ring text-muted-foreground inline-flex min-h-11 items-center rounded px-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-signal/10 hover:text-signal selected:bg-signal/10 selected:text-signal">${escape_html(label)}</a>`
	);
}
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(
			`<header border="signal/15 b" bg="card/90" sticky="" z="50" p="b-3" class="animate-entrance-down backdrop-blur-xl svelte-1i43yzn"><div container="" m="x-auto" p="x-4"><nav aria-label="Primary navigation"><div flex="~" h="16" items="center" justify="between"><a flex="~" href="/" aria-label="deadlog.io - Home" items="center" gap="4" class="group transition-all duration-300"><div relative=""><div flex="~" bg="primary/10" items="center" justify="center" rounded="lg" class="group-hover:bg-primary/20 size-10 transition-all duration-300">`
		);
		Crosshair($$renderer, {
			class:
				'text-primary size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45'
		});
		$$renderer.push(
			`<!----></div> <div bg="primary" absolute="" op="60" class="-top-0.5 -left-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"></div> <div bg="signal" absolute="" op="70" class="-right-0.5 -bottom-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"></div></div> <div flex="~ col"><div flex="~" items="baseline" gap="2"><span font="display medium" text="foreground 2xl" class="tracking-wide transition-colors duration-300 md:text-3xl">dead<span text="primary">log</span></span> <span bg="primary/10" text="primary" p="x-1.5 y-0.5" font="mono medium" uppercase="" class="hidden rounded text-[11px] tracking-wider md:inline-block">.io</span></div> <span text="muted-foreground xs" font="medium" class="hidden tracking-wide md:block">Deadlock Changelog</span></div></a> <div flex="~" items="center" gap="1" class="sm:gap-2">`
		);
		navLink($$renderer, '/heroes', '/hero', 'Heroes');
		$$renderer.push(`<!----> `);
		navLink($$renderer, '/items', '/item', 'Items');
		$$renderer.push(`<!----></div></div></nav> `);
		FilterInput($$renderer, {});
		$$renderer.push(`<!----></div></header>`);
	});
}
//#endregion
//#region src/lib/components/ui/footer/footer.svelte
function Footer($$renderer) {
	$$renderer.push(
		`<footer m="t-24" p="b-8"><div m="b-10" class="editorial-divider"></div> <div container="" m="x-auto" flex="~ col" items="center" gap="6" p="x-4"><a flex="~" href="/" items="center" gap="3" class="group transition-opacity hover:opacity-80"><div flex="~" bg="signal/10" items="center" justify="center" rounded="md" class="group-hover:bg-signal/15 size-7 transition-colors">`
	);
	Crosshair($$renderer, { class: 'text-signal size-3.5' });
	$$renderer.push(
		`<!----></div> <span font="display semibold" text="muted-foreground sm" class="tracking-wide transition-colors">dead<span text="primary">log</span><span font="mono" class="text-[11px]">.io</span></span></a> <div flex="~ col" items="center" gap="1.5" text="center"><a href="/archive" class="ui-focus-ring text-signal mb-2 inline-flex min-h-11 items-center rounded-sm text-sm underline-offset-4 hover:underline">Browse all patches</a> <p text="muted-foreground" class="text-xs">Data provided by <a href="https://deadlock-api.com" text="signal" class="transition-colors hover:opacity-80" target="_blank" rel="noopener noreferrer">Deadlock API</a></p> <p text="muted-foreground" class="text-xs">Deadlock is a trademark of Valve Corporation</p></div> <div flex="~" items="center" gap="4"><div bg="signal/20" h="px" w="10"></div> <span text="muted-foreground" font="mono" uppercase="" class="terminal-flicker text-[11px] tracking-[0.25em]">// end transmission</span> <div bg="signal/20" h="px" w="10"></div></div></div></footer>`
	);
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/arrow-up.svelte
function Arrow_up($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'arrow-up',
					size: 24,
					node: [
						['path', { d: 'm5 12 7-7 7 7' }],
						['path', { d: 'M12 19V5' }]
					]
				}
			}
		])
	);
}
//#endregion
//#region ../node_modules/.pnpm/svelte@5.57.0_@typescript-eslint+types@8.70.0/node_modules/svelte/src/reactivity/reactive-value.js
/**
 * @template T
 */
var ReactiveValue = class {
	#fn;
	#subscribe;
	/**
	 *
	 * @param {() => T} fn
	 * @param {(update: () => void) => void} onsubscribe
	 */
	constructor(fn, onsubscribe) {
		this.#fn = fn;
		this.#subscribe = createSubscriber(onsubscribe);
	}
	get current() {
		this.#subscribe();
		return this.#fn();
	}
};
new ReactiveValue(
	() => void 0,
	(update) => on(window, 'scroll', update)
);
/**
 * `scrollY.current` is a reactive view of `window.scrollY`. On the server it is `undefined`.
 * @since 5.11.0
 */
var scrollY = new ReactiveValue(
	() => void 0,
	(update) => on(window, 'scroll', update)
);
new ReactiveValue(
	() => void 0,
	(update) => on(window, 'resize', update)
);
new ReactiveValue(
	() => void 0,
	(update) => on(window, 'resize', update)
);
new ReactiveValue(
	() => void 0,
	(update) => on(window, 'resize', update)
);
new ReactiveValue(
	() => void 0,
	(update) => on(window, 'resize', update)
);
new ReactiveValue(
	() => void 0,
	(update) => {
		let value = window.screenLeft;
		let frame = requestAnimationFrame(function check() {
			frame = requestAnimationFrame(check);
			if (value !== (value = window.screenLeft)) update();
		});
		return () => {
			cancelAnimationFrame(frame);
		};
	}
);
new ReactiveValue(
	() => void 0,
	(update) => {
		let value = window.screenTop;
		let frame = requestAnimationFrame(function check() {
			frame = requestAnimationFrame(check);
			if (value !== (value = window.screenTop)) update();
		});
		return () => {
			cancelAnimationFrame(frame);
		};
	}
);
new ReactiveValue(
	() => void 0,
	(update) => {
		const unsub_online = on(window, 'online', update);
		const unsub_offline = on(window, 'offline', update);
		return () => {
			unsub_online();
			unsub_offline();
		};
	}
);
//#endregion
//#region src/lib/components/scroll-to-top/ScrollToTop.svelte
function ScrollToTop($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		if (derived(() => (scrollY.current ?? 0) > 500)()) {
			$$renderer.push(
				`<!--[0--><button flex="~" type="button" bg="popover/90" text="signal" fixed="" z="50" items="center" justify="center" rounded="md" class="ui-focus-ring right-6 bottom-6 size-12 border backdrop-blur-xl transition-all hover:border-signal/60 hover:text-foreground hover:shadow-xl active:scale-[0.97]" aria-label="Scroll to top">`
			);
			Arrow_up($$renderer, { class: 'size-5' });
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/ui/tooltip/index.ts
var { Root, Trigger, Provider, Portal } = exports_exports;
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/mutation.js
/**
 * Represents a single mutation attempt. A `Mutation` holds the mutation's
 * options, state (data/error/status), and the `MutationObserver`s currently
 * subscribed to it.
 *
 * Instances are created and managed internally by `MutationCache`; application
 * code typically interacts with mutations indirectly through `QueryClient` or
 * a framework hook like `useMutation`. Direct access to a `Mutation` instance
 * is possible via `mutationCache.find()`/`getAll()` for inspecting cache state.
 *
 * @example
 * ```ts
 * const mutationCache = queryClient.getMutationCache()
 *
 * const mutation = mutationCache.find({ mutationKey: ['addPost'] })
 * ```
 */
var Mutation = class extends Removable {
	#client;
	#observers;
	#mutationCache;
	#retryer;
	constructor(config) {
		super();
		this.#client = config.client;
		this.mutationId = config.mutationId;
		this.#mutationCache = config.mutationCache;
		this.#observers = [];
		this.state = config.state || getDefaultState();
		this.setOptions(config.options);
		this.scheduleGc();
	}
	/** @internal */
	setOptions(options) {
		this.options = options;
		this.updateGcTime(this.options.gcTime);
	}
	/**
	 * The `meta` object passed in the mutation's options, if any.
	 */
	get meta() {
		return this.options.meta;
	}
	/** @internal */
	addObserver(observer) {
		if (!this.#observers.includes(observer)) {
			this.#observers.push(observer);
			this.clearGcTimeout();
			this.#mutationCache.notify({
				type: 'observerAdded',
				mutation: this,
				observer
			});
		}
	}
	/** @internal */
	removeObserver(observer) {
		this.#observers = this.#observers.filter((x) => x !== observer);
		this.scheduleGc();
		this.#mutationCache.notify({
			type: 'observerRemoved',
			mutation: this,
			observer
		});
	}
	optionalRemove() {
		if (!this.#observers.length) {
			if (this.state.status === 'pending') this.scheduleGc();
			else this.#mutationCache.remove(this);
		}
	}
	/**
	 * Resumes a mutation that is currently paused or was restored from a
	 * dehydrated, still-`pending` state.
	 *
	 * - If this mutation has an active retryer (it paused mid-attempt, e.g. due
	 *   to the network mode or scope-based queuing), its retryer is resumed.
	 * - Otherwise, if the mutation's status is still `pending` (e.g. it was
	 *   dehydrated while an attempt was in flight and never got a retryer in
	 *   this instance), `execute` is called again with the last known variables.
	 * - Otherwise the mutation has already settled and this resolves immediately
	 *   without running anything again.
	 *
	 * @example
	 * ```ts
	 * // typically driven by reconnect handling, e.g. queryClient.resumePausedMutations()
	 * const mutation = mutationCache.find({ mutationKey: ['addPost'] })
	 * await mutation?.continue()
	 * ```
	 *
	 * @see {@link Mutation#execute}
	 */
	continue() {
		return (
			this.#retryer?.continue() ??
			(this.state.status === 'pending'
				? this.execute(this.state.variables)
				: Promise.resolve())
		);
	}
	/**
	 * Runs the mutation function for the given variables through a retryer, and
	 * drives the mutation's state and lifecycle callbacks through to settlement.
	 *
	 * If this mutation's state is already `pending` when `execute` is called
	 * (i.e. it was restored, still in-flight, from a dehydrated state), the
	 * `onMutate` step is skipped and a `continue` action is dispatched to
	 * unpause it; otherwise a `pending` action is dispatched first, then the
	 * mutation cache's `onMutate` and the mutation's own `onMutate` option are
	 * awaited in that order, and the resulting context is stored.
	 *
	 * The mutation function is then run (subject to `retry`/`retryDelay`/
	 * `networkMode`, and to the mutation cache's scope-based serialization).
	 * On success, the cache's `onSuccess`/`onSettled` callbacks run before the
	 * mutation's own `onSuccess`/`onSettled` options, a `success` action is
	 * dispatched, and the resolved data is returned. On failure, the same
	 * cache-then-option ordering is used for `onError`/`onSettled`, but each of
	 * those four callbacks is individually caught so that a throwing callback
	 * cannot mask the original error; an `error` action is then dispatched and
	 * the original error is re-thrown.
	 *
	 * @example
	 * ```ts
	 * // Called internally by `MutationObserver.mutate` and `Mutation.continue` —
	 * // applications normally trigger mutations through those, not this method.
	 * const data = await mutation.execute(variables)
	 * ```
	 *
	 * @see {@link Mutation#continue}
	 */
	async execute(variables) {
		const onContinue = () => {
			this.#dispatch({ type: 'continue' });
		};
		const mutationFnContext = {
			client: this.#client,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		const retryer = (this.#retryer = createRetryer({
			fn: () => {
				if (!this.options.mutationFn)
					return Promise.reject(/* @__PURE__ */ new Error('No mutationFn found'));
				return this.options.mutationFn(variables, mutationFnContext);
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: 'failed',
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: 'pause' });
			},
			onContinue,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#mutationCache.canRun(this)
		}));
		const restored = this.state.status === 'pending';
		const isPaused = !retryer.canStart();
		try {
			if (restored) onContinue();
			else {
				this.#dispatch({
					type: 'pending',
					variables,
					isPaused
				});
				if (this.#mutationCache.config.onMutate)
					await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
				const context = await this.options.onMutate?.(variables, mutationFnContext);
				if (context !== this.state.context)
					this.#dispatch({
						type: 'pending',
						context,
						variables,
						isPaused
					});
			}
			const data = await retryer.start();
			await this.#mutationCache.config.onSuccess?.(
				data,
				variables,
				this.state.context,
				this,
				mutationFnContext
			);
			await this.options.onSuccess?.(
				data,
				variables,
				this.state.context,
				mutationFnContext
			);
			await this.#mutationCache.config.onSettled?.(
				data,
				null,
				this.state.variables,
				this.state.context,
				this,
				mutationFnContext
			);
			await this.options.onSettled?.(
				data,
				null,
				variables,
				this.state.context,
				mutationFnContext
			);
			this.#dispatch({
				type: 'success',
				data
			});
			return data;
		} catch (error) {
			try {
				await this.#mutationCache.config.onError?.(
					error,
					variables,
					this.state.context,
					this,
					mutationFnContext
				);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(
					error,
					variables,
					this.state.context,
					mutationFnContext
				);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#mutationCache.config.onSettled?.(
					void 0,
					error,
					this.state.variables,
					this.state.context,
					this,
					mutationFnContext
				);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(
					void 0,
					error,
					variables,
					this.state.context,
					mutationFnContext
				);
			} catch (e) {
				Promise.reject(e);
			}
			this.#dispatch({
				type: 'error',
				error
			});
			throw error;
		} finally {
			if (this.#retryer === retryer) this.#retryer = void 0;
			this.#mutationCache.runNext(this);
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case 'failed':
					return {
						...state,
						failureCount: action.failureCount,
						failureReason: action.error
					};
				case 'pause':
					return {
						...state,
						isPaused: true
					};
				case 'continue':
					return {
						...state,
						isPaused: false
					};
				case 'pending':
					return {
						...state,
						context: action.context,
						data: void 0,
						failureCount: 0,
						failureReason: null,
						error: null,
						isPaused: action.isPaused,
						status: 'pending',
						variables: action.variables,
						submittedAt: Date.now()
					};
				case 'success':
					return {
						...state,
						data: action.data,
						failureCount: 0,
						failureReason: null,
						error: null,
						status: 'success',
						isPaused: false
					};
				case 'error':
					return {
						...state,
						data: void 0,
						error: action.error,
						failureCount: state.failureCount + 1,
						failureReason: action.error,
						isPaused: false,
						status: 'error'
					};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.#observers.forEach((observer) => {
				observer.onMutationUpdate(action);
			});
			this.#mutationCache.notify({
				mutation: this,
				type: 'updated',
				action
			});
		});
	}
};
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: 'idle',
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/mutationCache.js
/**
 * The `MutationCache` is the storage for mutations.
 *
 * Normally, you will not interact with the `MutationCache` directly and instead use a
 * `QueryClient`. You can subscribe to it (inherited from `Subscribable`) to be informed of
 * safe/known updates to the cache, such as mutations being added, removed, or updated.
 *
 * @example
 * ```ts
 * const unsubscribe = mutationCache.subscribe((event) => {
 *   console.log(event.type, event.mutation)
 * })
 * ```
 */
var MutationCache = class extends Subscribable {
	#mutations;
	#scopes;
	#mutationId;
	constructor(config = {}) {
		super();
		this.config = config;
		this.#mutations = /* @__PURE__ */ new Set();
		this.#scopes = /* @__PURE__ */ new Map();
		this.#mutationId = 0;
	}
	/** @internal */
	build(client, options, state) {
		const mutation = new Mutation({
			client,
			mutationCache: this,
			mutationId: ++this.#mutationId,
			options: client.defaultMutationOptions(options),
			state
		});
		this.add(mutation);
		return mutation;
	}
	/** @internal */
	add(mutation) {
		this.#mutations.add(mutation);
		const scope = scopeFor(mutation);
		if (typeof scope === 'string') {
			const scopedMutations = this.#scopes.get(scope);
			if (scopedMutations) scopedMutations.push(mutation);
			else this.#scopes.set(scope, [mutation]);
		}
		this.notify({
			type: 'added',
			mutation
		});
	}
	/** @internal */
	remove(mutation) {
		if (this.#mutations.delete(mutation)) {
			const scope = scopeFor(mutation);
			if (typeof scope === 'string') {
				const scopedMutations = this.#scopes.get(scope);
				if (scopedMutations) {
					if (scopedMutations.length > 1) {
						const index = scopedMutations.indexOf(mutation);
						if (index !== -1) scopedMutations.splice(index, 1);
					} else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
				}
			}
		}
		this.notify({
			type: 'removed',
			mutation
		});
	}
	/** @internal */
	canRun(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === 'string') {
			const firstPendingMutation = this.#scopes
				.get(scope)
				?.find((m) => m.state.status === 'pending');
			return !firstPendingMutation || firstPendingMutation === mutation;
		} else return true;
	}
	/** @internal */
	runNext(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === 'string')
			return (
				this.#scopes
					.get(scope)
					?.find((m) => m !== mutation && m.state.isPaused)
					?.continue() ?? Promise.resolve()
			);
		else return Promise.resolve();
	}
	/**
	 * Removes all mutations from the cache.
	 *
	 * @example
	 * ```ts
	 * const mutationCache = queryClient.getMutationCache()
	 *
	 * mutationCache.clear()
	 * ```
	 */
	clear() {
		notifyManager.batch(() => {
			this.#mutations.forEach((mutation) => {
				this.notify({
					type: 'removed',
					mutation
				});
			});
			this.#mutations.clear();
			this.#scopes.clear();
		});
	}
	/**
	 * Returns all mutations within the cache.
	 *
	 * This is not typically needed for most applications, but can come in handy when needing more
	 * information about a mutation in rare scenarios.
	 *
	 * @example
	 * ```ts
	 * const mutationCache = queryClient.getMutationCache()
	 *
	 * const mutations = mutationCache.getAll()
	 * ```
	 */
	getAll() {
		return Array.from(this.#mutations);
	}
	/**
	 * A slightly more advanced method that can be used to get an existing mutation instance from
	 * the cache. If the mutation does not exist, `undefined` is returned.
	 *
	 * This is not typically needed for most applications, but can come in handy when needing more
	 * information about a mutation in rare scenarios.
	 *
	 * @see {@link MutationCache#findAll}
	 * @example
	 * ```ts
	 * const mutationCache = queryClient.getMutationCache()
	 *
	 * const mutation = mutationCache.find({ mutationKey: ['addPost'] })
	 * ```
	 */
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
	}
	/**
	 * An even more advanced method that can be used to get existing mutation instances from the
	 * cache that match the given filters. If no mutations match, an empty array is returned.
	 *
	 * This is not typically needed for most applications, but can come in handy when needing more
	 * information about mutations in rare scenarios.
	 *
	 * @see {@link MutationCache#find}
	 * @example
	 * ```ts
	 * const mutationCache = queryClient.getMutationCache()
	 *
	 * const mutations = mutationCache.findAll({ mutationKey: ['addPost'] })
	 * ```
	 */
	findAll(filters = {}) {
		return this.getAll().filter((mutation) => matchMutation(filters, mutation));
	}
	/** @internal */
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	/** @internal */
	resumePausedMutations() {
		const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
		return notifyManager.batch(() =>
			Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop$2)))
		);
	}
};
function scopeFor(mutation) {
	return mutation.options.scope?.id;
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/queryCache.js
/**
 * The `QueryCache` is the storage mechanism for TanStack Query. It stores all the data, meta
 * information, and state of the queries it contains.
 *
 * Normally, you will not interact with the `QueryCache` directly and instead use a `QueryClient`
 * for a specific cache. You can subscribe to it (inherited from `Subscribable`) to be informed of
 * safe/known updates to the cache, such as queries being added, removed, or updated — updates made
 * outside of the cache's own tracked mechanisms (e.g. mutating a query's state object directly) do
 * not notify subscribers.
 *
 * @example
 * ```ts
 * const unsubscribe = queryCache.subscribe((event) => {
 *   console.log(event.type, event.query)
 * })
 * ```
 */
var QueryCache = class extends Subscribable {
	#queries;
	constructor(config = {}) {
		super();
		this.config = config;
		this.#queries = /* @__PURE__ */ new Map();
	}
	/**
	 * Returns the existing `Query` instance for the given options' `queryKey`/`queryHash`, or
	 * builds and adds a new one to the cache if none exists yet. Used by framework adapters and
	 * plugins (e.g. broadcast/persistence) that need to get-or-create a `Query` directly, bypassing
	 * the reactive `QueryObserver` machinery.
	 *
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 *
	 * const query = queryCache.build(queryClient, {
	 *   queryKey: ['posts'],
	 *   queryFn: fetchPosts,
	 * })
	 * ```
	 */
	build(client, options, state) {
		const queryKey = options.queryKey;
		const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
		let query = this.get(queryHash);
		if (!query) {
			query = new Query({
				client,
				queryKey,
				queryHash,
				options: client.defaultQueryOptions(options),
				state,
				defaultOptions: client.getQueryDefaults(queryKey)
			});
			this.add(query);
		}
		return query;
	}
	/** @internal */
	add(query) {
		if (!this.#queries.has(query.queryHash)) {
			this.#queries.set(query.queryHash, query);
			this.notify({
				type: 'added',
				query
			});
		}
	}
	/**
	 * Destroys the given `Query` and removes it from the cache, notifying subscribers with a
	 * `'removed'` event. A no-op if the query is no longer the one currently stored under its hash
	 * (e.g. it was already replaced). Used by plugins (e.g. the broadcast client) that mirror
	 * removals across `QueryCache` instances.
	 *
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 * const query = queryCache.find({ queryKey: ['posts'] })
	 *
	 * if (query) {
	 *   queryCache.remove(query)
	 * }
	 * ```
	 */
	remove(query) {
		const queryInMap = this.#queries.get(query.queryHash);
		if (queryInMap) {
			query.destroy();
			if (queryInMap === query) this.#queries.delete(query.queryHash);
			this.notify({
				type: 'removed',
				query
			});
		}
	}
	/**
	 * Removes all queries from the cache.
	 *
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 *
	 * queryCache.clear()
	 * ```
	 */
	clear() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				this.remove(query);
			});
		});
	}
	/**
	 * Returns the `Query` instance stored under the given `queryHash`, or `undefined` if none
	 * exists. Unlike {@link QueryCache#find}, this looks up by the already-computed hash rather
	 * than by `QueryFilters`. Used by plugins (e.g. broadcast/hydration) that already have a hash
	 * to look up directly.
	 *
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 * const queryHash = hashKey(['posts'])
	 *
	 * const query = queryCache.get(queryHash)
	 * ```
	 */
	get(queryHash) {
		return this.#queries.get(queryHash);
	}
	/**
	 * Returns all queries within the cache.
	 *
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 *
	 * const queries = queryCache.getAll()
	 * ```
	 */
	getAll() {
		return [...this.#queries.values()];
	}
	/**
	 * A slightly more advanced method that can be used to get an existing query instance from the
	 * cache. This instance not only contains all the state for the query, but all of the instances,
	 * and underlying guts of the query as well. If the query does not exist, `undefined` is
	 * returned.
	 *
	 * This is not typically needed for most applications, but can come in handy when needing more
	 * information about a query in rare scenarios (e.g. looking at `query.state.dataUpdatedAt` to
	 * decide whether a query is fresh enough to be used as an initial value).
	 *
	 * @see {@link QueryCache#findAll}
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 *
	 * const query = queryCache.find({ queryKey: ['posts'] })
	 * ```
	 */
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((query) => matchQuery(defaultedFilters, query));
	}
	/**
	 * An even more advanced method that can be used to get existing query instances from the cache
	 * that partially match a query key. If no queries match, an empty array is returned.
	 *
	 * This is not typically needed for most applications, but can come in handy when needing more
	 * information about queries in rare scenarios.
	 *
	 * @see {@link QueryCache#find}
	 * @example
	 * ```ts
	 * const queryCache = queryClient.getQueryCache()
	 *
	 * const queries = queryCache.findAll({ queryKey: ['posts'] })
	 * ```
	 */
	findAll(filters = {}) {
		const queries = this.getAll();
		return Object.keys(filters).length > 0
			? queries.filter((query) => matchQuery(filters, query))
			: queries;
	}
	/** @internal */
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	/** @internal */
	onFocus() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onFocus();
			});
		});
	}
	/** @internal */
	onOnline() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onOnline();
			});
		});
	}
};
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/queryClient.js
/**
 * `QueryClient` is used to interact with a cache of queries and mutations. It owns a
 * `QueryCache` and a `MutationCache` (creating default ones if none are passed in) and holds
 * the default options that are applied to queries and mutations created through it.
 *
 * @example
 * ```ts
 * const queryClient = new QueryClient({
 *   defaultOptions: {
 *     queries: {
 *       staleTime: Infinity,
 *     },
 *   },
 * })
 *
 * await queryClient.query({ queryKey: ['posts'], queryFn: fetchPosts })
 * ```
 */
var QueryClient = class {
	#queryCache;
	#mutationCache;
	#defaultOptions;
	#queryDefaults;
	#mutationDefaults;
	#mountCount;
	#unsubscribeFocus;
	#unsubscribeOnline;
	constructor(config = {}) {
		this.#queryCache = config.queryCache || new QueryCache();
		this.#mutationCache = config.mutationCache || new MutationCache();
		this.#defaultOptions = config.defaultOptions || {};
		this.#queryDefaults = /* @__PURE__ */ new Map();
		this.#mutationDefaults = /* @__PURE__ */ new Map();
		this.#mountCount = 0;
	}
	/**
	 * Called by a framework adapter's `QueryClientProvider`-equivalent when it mounts, to start
	 * listening for focus/online events and resume paused mutations. Ref-counted via an internal
	 * mount count, so nested or multiple providers sharing the same `QueryClient` don't tear down
	 * the shared listeners until the last one unmounts.
	 */
	mount() {
		this.#mountCount++;
		if (this.#mountCount !== 1) return;
		this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
			if (focused) {
				await this.resumePausedMutations();
				this.#queryCache.onFocus();
			}
		});
		this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
			if (online) {
				await this.resumePausedMutations();
				this.#queryCache.onOnline();
			}
		});
	}
	/**
	 * The inverse of {@link QueryClient#mount} — called by a framework adapter's
	 * `QueryClientProvider`-equivalent when it unmounts. Only tears down the focus/online
	 * listeners once the mount count returns to `0`.
	 */
	unmount() {
		this.#mountCount--;
		if (this.#mountCount !== 0) return;
		this.#unsubscribeFocus?.();
		this.#unsubscribeFocus = void 0;
		this.#unsubscribeOnline?.();
		this.#unsubscribeOnline = void 0;
	}
	/**
	 * Returns the number of queries in the cache that are currently fetching, optionally
	 * matching a set of filters. This includes background-fetching, loading new pages, and
	 * loading more infinite query results.
	 *
	 * @example
	 * ```ts
	 * if (queryClient.isFetching()) {
	 *   console.log('At least one query is fetching!')
	 * }
	 * ```
	 */
	isFetching(filters) {
		return this.#queryCache.findAll({
			...filters,
			fetchStatus: 'fetching'
		}).length;
	}
	/**
	 * Returns the number of mutations in the cache that are currently pending, optionally
	 * matching a set of filters.
	 *
	 * @example
	 * ```ts
	 * if (queryClient.isMutating()) {
	 *   console.log('At least one mutation is pending!')
	 * }
	 * ```
	 */
	isMutating(filters) {
		return this.#mutationCache.findAll({
			...filters,
			status: 'pending'
		}).length;
	}
	/**
	 * Imperative (non-reactive) way to retrieve data for a QueryKey.
	 * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
	 *
	 * Hint: Do not use this function inside a component, because it won't receive updates.
	 * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
	 *
	 * @see {@link QueryClient#getQueriesData}
	 */
	getQueryData(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state.data;
	}
	/**
	 * @deprecated Use queryClient.query({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
	 */
	ensureQueryData(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		const query = this.#queryCache.build(this, defaultedOptions);
		const cachedData = query.state.data;
		if (cachedData === void 0) return this.fetchQuery(options);
		if (
			options.revalidateIfStale &&
			query.isStaleByTime(resolveQueryValue(defaultedOptions.staleTime, query))
		)
			this.prefetchQuery(defaultedOptions);
		return Promise.resolve(cachedData);
	}
	/**
	 * Imperative (non-reactive) way to retrieve the cached data of multiple queries at once.
	 * Only queries matching the given filters are returned; if none match, an empty array is
	 * returned.
	 *
	 * Because the matched queries can hold data of different shapes (e.g. a broad filter can match
	 * queries with unrelated data types), the `TQueryFnData` generic defaults to `unknown` rather
	 * than being inferred. Passing a more specific type is a convenience for call sites that know
	 * every matched query holds the same shape — it is not checked against the actual cache
	 * contents.
	 *
	 * @see {@link QueryClient#getQueryData}
	 * @example
	 * ```ts
	 * const data = queryClient.getQueriesData({ queryKey: ['posts'] })
	 * ```
	 */
	getQueriesData(filters) {
		return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
			return [queryKey, state.data];
		});
	}
	/**
	 * Synchronous way to immediately update a query's cached data. If the updater (or the value
	 * passed) resolves to `undefined`, the cache is left untouched and no query is created;
	 * otherwise, if the query does not exist yet, it will be created. To update multiple queries
	 * at once by partially matching query keys, use {@link QueryClient#setQueriesData} instead.
	 *
	 * Updates must be performed immutably: do not mutate `oldData`, or data previously retrieved
	 * via {@link QueryClient#getQueryData}, in place.
	 *
	 * @param queryKey - The query key to set data for.
	 * @param updater - Either the new data, or a function that receives the current data (which
	 * may be `undefined`) and returns the new data.
	 *
	 * @example
	 * ```ts
	 * queryClient.setQueryData(['posts'], newPosts)
	 *
	 * // Or, using an updater function that receives the current data:
	 * queryClient.setQueryData(['posts'], (oldPosts) => [...oldPosts, newPost])
	 * ```
	 */
	setQueryData(queryKey, updater, options) {
		const defaultedOptions = this.defaultQueryOptions({ queryKey });
		const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
		const data = functionalUpdate(updater, prevData);
		if (data === void 0) return;
		return this.#queryCache.build(this, defaultedOptions).setData(data, {
			...options,
			manual: true
		});
	}
	/**
	 * Synchronous way to immediately update the cached data of multiple queries at once, using
	 * filters or partial query key matching. Only queries that already exist and match the given
	 * filters are updated; no new cache entries are created. Internally this calls
	 * {@link QueryClient#setQueryData} for each matching query.
	 *
	 * @example
	 * ```ts
	 * queryClient.setQueriesData({ queryKey: ['posts'] }, (oldPosts) =>
	 *   oldPosts ? oldPosts.filter((post) => post.id !== deletedId) : oldPosts,
	 * )
	 * ```
	 */
	setQueriesData(filters, updater, options) {
		return notifyManager.batch(() =>
			this.#queryCache
				.findAll(filters)
				.map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)])
		);
	}
	/**
	 * Imperative (non-reactive) way to retrieve an existing query's state. If the query does not
	 * exist, `undefined` is returned.
	 *
	 * @example
	 * ```ts
	 * const state = queryClient.getQueryState(['posts'])
	 * console.log(state?.dataUpdatedAt)
	 * ```
	 */
	getQueryState(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state;
	}
	/**
	 * Removes queries from the cache that match the given filters. Unlike
	 * {@link QueryClient#invalidateQueries} or {@link QueryClient#refetchQueries}, this removes
	 * matching queries from the cache instead of refetching them. Without filters, every query in
	 * the cache is removed.
	 *
	 * @example
	 * ```ts
	 * queryClient.removeQueries({ queryKey: ['posts'], exact: true })
	 * ```
	 */
	removeQueries(filters) {
		const queryCache = this.#queryCache;
		notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				queryCache.remove(query);
			});
		});
	}
	/**
	 * Resets queries matching the given filters back to their initial state (e.g. any
	 * `initialData`), notifying subscribers rather than removing them. Active queries among the
	 * matched set are then refetched, and the returned promise resolves once that refetch settles.
	 *
	 * @example
	 * ```ts
	 * await queryClient.resetQueries({ queryKey: ['posts'], exact: true })
	 * ```
	 */
	resetQueries(filters, options) {
		const queryCache = this.#queryCache;
		return notifyManager.batch(() => {
			const matched = queryCache.findAll(filters);
			const queriesToRefetch = new Set(matched);
			matched.forEach((query) => {
				query.reset();
			});
			return this.refetchQueries(
				{
					type: 'active',
					predicate: (query) => queriesToRefetch.has(query)
				},
				options
			);
		});
	}
	/**
	 * Cancels outgoing fetches for queries matching the given filters. Most useful when performing
	 * optimistic updates, since any outgoing refetch that resolves afterwards would otherwise
	 * overwrite the optimistic update. By default (`revert: true`), a cancelled query's data is
	 * reverted to its state before the outgoing fetch started.
	 *
	 * The returned promise never rejects, even if individual cancellations fail.
	 *
	 * @example
	 * ```ts
	 * await queryClient.cancelQueries({ queryKey: ['posts'], exact: true })
	 * ```
	 */
	cancelQueries(filters, cancelOptions = {}) {
		const defaultedCancelOptions = {
			revert: true,
			...cancelOptions
		};
		const promises = notifyManager.batch(() =>
			this.#queryCache
				.findAll(filters)
				.map((query) => query.cancel(defaultedCancelOptions))
		);
		return Promise.all(promises).then(noop$2).catch(noop$2);
	}
	/**
	 * Marks queries matching the given filters as invalidated. Unlike
	 * {@link QueryClient#removeQueries}, invalidated queries stay in the cache.
	 *
	 * Unless `filters.refetchType` is `'none'`, matching queries are then refetched via
	 * {@link QueryClient#refetchQueries}, using `filters.refetchType` if set, otherwise
	 * `filters.type`, otherwise `'active'`.
	 *
	 * @example
	 * ```ts
	 * await queryClient.invalidateQueries({ queryKey: ['posts'], refetchType: 'active' })
	 * ```
	 */
	invalidateQueries(filters, options = {}) {
		return notifyManager.batch(() => {
			this.#queryCache.findAll(filters).forEach((query) => {
				query.invalidate();
			});
			if (filters?.refetchType === 'none') return Promise.resolve();
			return this.refetchQueries(
				{
					...filters,
					type: filters?.refetchType ?? filters?.type ?? 'active'
				},
				options
			);
		});
	}
	/**
	 * Refetches queries matching the given filters, regardless of whether they are stale. Without
	 * filters, every query in the cache is refetched. Queries that are disabled, or static (only
	 * have observers with a static `staleTime`), are never refetched.
	 *
	 * By default (`cancelRefetch: true`), a currently running fetch is cancelled before the new
	 * one starts. The returned promise resolves once all matching queries have settled; it does
	 * not reject on individual query failures unless `throwOnError` is set.
	 *
	 * @example
	 * ```ts
	 * // refetch all active queries partially matching a query key:
	 * await queryClient.refetchQueries({ queryKey: ['posts'], type: 'active' })
	 * ```
	 */
	refetchQueries(filters, options = {}) {
		const fetchOptions = {
			...options,
			cancelRefetch: options.cancelRefetch ?? true
		};
		const promises = notifyManager.batch(() =>
			this.#queryCache
				.findAll(filters)
				.filter((query) => !query.isDisabled() && !query.isStatic())
				.map((query) => {
					let promise = query.fetch(void 0, fetchOptions);
					if (!fetchOptions.throwOnError) promise = promise.catch(noop$2);
					return query.state.fetchStatus === 'paused' ? Promise.resolve() : promise;
				})
		);
		return Promise.all(promises).then(noop$2);
	}
	/**
	 * Asynchronous method to fetch and cache a query, resolving with the data or throwing with
	 * the error.
	 *
	 * If the query already exists in the cache and its data is not stale (per the given
	 * `staleTime`), the cached data is returned without fetching. Otherwise, the query is fetched
	 * and the promise resolves once the fetch settles. If a `select` function is provided, it is
	 * applied to the data in both cases (cached or freshly fetched) before it is returned.
	 *
	 * Unlike a reactive observer, retries are disabled by default here (`retry: false`) unless
	 * explicitly configured, since there is no component to catch a thrown error and retry through
	 * re-render.
	 *
	 * The accepted options are `QueryObserverOptions` minus the fields that only make sense for a
	 * reactive observer — `enabled`, `refetchInterval`, `refetchIntervalInBackground`,
	 * `refetchOnWindowFocus`, `refetchOnReconnect`, `refetchOnMount`, `retryOnMount`,
	 * `notifyOnChangeProps`, `throwOnError`, `suspense`, and `placeholderData` are not part of this
	 * method's options.
	 *
	 * This method replaces the deprecated `fetchQuery`, and — combined with
	 * `{ staleTime: 'static' }` — the deprecated `ensureQueryData`.
	 *
	 * @example
	 * ```ts
	 * try {
	 *   const data = await queryClient.query({ queryKey, queryFn, staleTime: 10000 })
	 * } catch (error) {
	 *   console.log(error)
	 * }
	 * ```
	 */
	async query(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
		const query = this.#queryCache.build(this, defaultedOptions);
		const queryData = query.isStaleByTime(
			resolveQueryValue(defaultedOptions.staleTime, query)
		)
			? await query.fetch(defaultedOptions)
			: query.state.data;
		const select = defaultedOptions.select;
		if (select) return select(queryData);
		return queryData;
	}
	/**
	 * @deprecated Use queryClient.query(options) instead. This method will be removed in the next major version.
	 */
	fetchQuery(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
		const query = this.#queryCache.build(this, defaultedOptions);
		return query.isStaleByTime(resolveQueryValue(defaultedOptions.staleTime, query))
			? query.fetch(defaultedOptions)
			: Promise.resolve(query.state.data);
	}
	/**
	 * @deprecated Use queryClient.query(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
	 */
	prefetchQuery(options) {
		return this.fetchQuery(options).then(noop$2).catch(noop$2);
	}
	/**
	 * Asynchronous method to fetch and cache an infinite query, resolving with an
	 * {@link InfiniteData} object or throwing with the error.
	 *
	 * Behaves like {@link QueryClient#query}, accepting the same options (minus
	 * `initialPageParam`), plus the required `initialPageParam`, and an optional `pages` /
	 * `getNextPageParam` pair used to refetch a fixed number of pages from the start.
	 *
	 * This method replaces the deprecated `fetchInfiniteQuery`, and — combined with
	 * `{ staleTime: 'static' }` — the deprecated `ensureInfiniteQueryData`.
	 *
	 * @example
	 * ```ts
	 * try {
	 *   const data = await queryClient.infiniteQuery({ queryKey, queryFn, initialPageParam: 0 })
	 *   console.log(data.pages)
	 * } catch (error) {
	 *   console.log(error)
	 * }
	 * ```
	 */
	infiniteQuery(options) {
		options._type = 'infinite';
		return this.query(options);
	}
	/**
	 * @deprecated Use queryClient.infiniteQuery(options) instead. This method will be removed in the next major version.
	 */
	fetchInfiniteQuery(options) {
		options._type = 'infinite';
		return this.fetchQuery(options);
	}
	/**
	 * @deprecated Use queryClient.infiniteQuery(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
	 */
	prefetchInfiniteQuery(options) {
		return this.fetchInfiniteQuery(options).then(noop$2).catch(noop$2);
	}
	/**
	 * @deprecated Use queryClient.infiniteQuery({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
	 */
	ensureInfiniteQueryData(options) {
		options._type = 'infinite';
		return this.ensureQueryData(options);
	}
	/**
	 * Resumes mutations that were paused because there was no network connection. Does nothing
	 * (resolving immediately) if the client is currently offline.
	 *
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * await queryClient.resumePausedMutations()
	 * ```
	 */
	resumePausedMutations() {
		if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
		return Promise.resolve();
	}
	/**
	 * Returns the query cache this client is connected to.
	 *
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * const queryCache = queryClient.getQueryCache()
	 * const queries = queryCache.findAll({ queryKey: ['posts'] })
	 * ```
	 */
	getQueryCache() {
		return this.#queryCache;
	}
	/**
	 * Returns the mutation cache this client is connected to.
	 *
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * const mutationCache = queryClient.getMutationCache()
	 * const mutations = mutationCache.findAll({ status: 'pending' })
	 * ```
	 */
	getMutationCache() {
		return this.#mutationCache;
	}
	/**
	 * Returns the default options that were set when creating the client, or via
	 * {@link QueryClient#setDefaultOptions}.
	 *
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * const defaultOptions = queryClient.getDefaultOptions()
	 * ```
	 */
	getDefaultOptions() {
		return this.#defaultOptions;
	}
	/**
	 * Dynamically sets the default options for this client, overwriting any previously defined
	 * default options.
	 *
	 * @see {@link QueryClient#getDefaultOptions}
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * queryClient.setDefaultOptions({
	 *   queries: {
	 *     staleTime: Infinity,
	 *   },
	 * })
	 * ```
	 */
	setDefaultOptions(options) {
		this.#defaultOptions = options;
	}
	/**
	 * Sets default options for queries whose query key partially matches the given `queryKey`.
	 *
	 * If several registered query defaults match a given query key, they are merged together in
	 * registration order by {@link QueryClient#getQueryDefaults}, so register defaults from the
	 * most generic key to the least generic one — more specific defaults should be registered
	 * after more generic ones so they take precedence.
	 *
	 * @example
	 * ```ts
	 * queryClient.setQueryDefaults(['posts'], { queryFn: fetchPosts })
	 *
	 * await queryClient.query({ queryKey: ['posts'] })
	 * ```
	 */
	setQueryDefaults(queryKey, options) {
		this.#queryDefaults.set(hashKey(queryKey), {
			queryKey,
			defaultOptions: options
		});
	}
	/**
	 * Returns the default options registered for queries whose query key partially matches the
	 * given `queryKey`, via {@link QueryClient#setQueryDefaults}. If multiple registered defaults
	 * match, they are merged together in registration order.
	 *
	 * @example
	 * ```ts
	 * const defaultOptions = queryClient.getQueryDefaults(['posts'])
	 * ```
	 */
	getQueryDefaults(queryKey) {
		const defaults = [...this.#queryDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(queryKey, queryDefault.queryKey))
				Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	/**
	 * Sets default options for mutations whose mutation key partially matches the given
	 * `mutationKey`. As with {@link QueryClient#setQueryDefaults}, the order of registration
	 * matters when several registered defaults match the same mutation key.
	 *
	 * @see {@link QueryClient#getMutationDefaults}
	 * @example
	 * ```ts
	 * queryClient.setMutationDefaults(['addPost'], { mutationFn: addPost })
	 * ```
	 */
	setMutationDefaults(mutationKey, options) {
		this.#mutationDefaults.set(hashKey(mutationKey), {
			mutationKey,
			defaultOptions: options
		});
	}
	/**
	 * Returns the default options registered for mutations whose mutation key partially matches
	 * the given `mutationKey`, via {@link QueryClient#setMutationDefaults}. If multiple registered
	 * defaults match, they are merged together in registration order.
	 *
	 * @example
	 * ```ts
	 * const defaultOptions = queryClient.getMutationDefaults(['addPost'])
	 * ```
	 */
	getMutationDefaults(mutationKey) {
		const defaults = [...this.#mutationDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(mutationKey, queryDefault.mutationKey))
				Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	/**
	 * Called by framework adapters (e.g. inside `useQuery`) to resolve the options passed by the
	 * caller into their final, defaulted form: merging `queryClient.setQueryDefaults` for the
	 * given `queryKey`, then the client's own `defaultOptions.queries`, then the caller's options
	 * on top. A no-op if the options are already defaulted (`_defaulted: true`).
	 */
	defaultQueryOptions(options) {
		if (options._defaulted) return options;
		const defaultedOptions = {
			...this.#defaultOptions.queries,
			...this.getQueryDefaults(options.queryKey),
			...options,
			_defaulted: true
		};
		if (!defaultedOptions.queryHash)
			defaultedOptions.queryHash = hashQueryKeyByOptions(
				defaultedOptions.queryKey,
				defaultedOptions
			);
		if (defaultedOptions.refetchOnReconnect === void 0)
			defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
		if (defaultedOptions.throwOnError === void 0)
			defaultedOptions.throwOnError = !!defaultedOptions.suspense;
		if (!defaultedOptions.networkMode && defaultedOptions.persister)
			defaultedOptions.networkMode = 'offlineFirst';
		if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
		return defaultedOptions;
	}
	/**
	 * The mutation counterpart of {@link QueryClient#defaultQueryOptions}. Called by framework
	 * adapters (e.g. inside `useMutation`) to merge `queryClient.setMutationDefaults` for the
	 * given `mutationKey`, then the client's `defaultOptions.mutations`, then the caller's options
	 * on top. A no-op if the options are already defaulted (`_defaulted: true`).
	 */
	defaultMutationOptions(options) {
		if (options?._defaulted) return options;
		return {
			...this.#defaultOptions.mutations,
			...(options?.mutationKey && this.getMutationDefaults(options.mutationKey)),
			...options,
			_defaulted: true
		};
	}
	/**
	 * Clears both the query cache and the mutation cache this client is connected to.
	 *
	 * @example
	 * ```ts
	 * import { QueryClient } from '@tanstack/query-core'
	 *
	 * const queryClient = new QueryClient()
	 * queryClient.clear()
	 * ```
	 */
	clear() {
		this.#queryCache.clear();
		this.#mutationCache.clear();
	}
};
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/QueryClientProvider.svelte
function QueryClientProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { client = new QueryClient(), children } = $$props;
		setQueryClientContext(client);
		onDestroy(() => {
			client.unmount();
		});
		children($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					enabled: false,
					staleTime: 36e5,
					gcTime: 18e5,
					refetchOnWindowFocus: false,
					refetchOnReconnect: true,
					retry: 3,
					retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4)
				}
			}
		});
		let { children } = $$props;
		QueryClientProvider($$renderer, {
			client: queryClient,
			children: ($$renderer) => {
				if (Provider) {
					$$renderer.push('<!--[-->');
					Provider($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(
								`<div bg="background" class="bg-wire-grid min-h-screen" data-app-ready="false"><a href="#main-content" class="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:tracking-wider focus:uppercase">Skip to content</a> `
							);
							Toaster($$renderer, {
								theme: 'dark',
								class: 'toaster group',
								style:
									'--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border);'
							});
							$$renderer.push(`<!----> `);
							Header($$renderer, {});
							$$renderer.push(
								`<!----> <div id="main-content" tabindex="-1" class="animate-entrance-up outline-none">`
							);
							children?.($$renderer);
							$$renderer.push(`<!----></div> `);
							Footer($$renderer, {});
							$$renderer.push(`<!----> `);
							ScrollToTop($$renderer, {});
							$$renderer.push(`<!----></div>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push('<!--]-->');
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push('<!--]-->');
				}
			},
			$$slots: { default: true }
		});
	});
}
//#endregion
export { _layout as default };
