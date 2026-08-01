import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Content from './tooltip-content.svelte';

// Root/Trigger/Provider/Portal are bits-ui's own — the local wrappers only re-spread props.
const { Root, Trigger, Provider, Portal } = TooltipPrimitive;

export { Root, Trigger, Content, Provider, Portal };
