import { Dialog as SheetPrimitive } from 'bits-ui';
import Overlay from './sheet-overlay.svelte';
import Content from './sheet-content.svelte';
import Header from './sheet-header.svelte';
import Title from './sheet-title.svelte';
import Description from './sheet-description.svelte';

// Root/Trigger/Portal are bits-ui's own — the local wrappers only re-spread props.
const { Root, Trigger, Portal } = SheetPrimitive;

export { Root, Trigger, Portal, Overlay, Content, Header, Title, Description };
