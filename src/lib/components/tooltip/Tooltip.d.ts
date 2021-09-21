import { SvelteComponentTyped } from 'svelte';

export interface TooltipProps {
  text: string;

  /* Positional params */
  bottom: boolean;
  top: boolean;
  left: boolean;
  right: boolean;

  /*
  On mobile screens, a tooltip doesn't function quite right, so we allow
  toggling the tooltip via click
  */
  toggles: boolean;
}

export default class Tooltip extends SvelteComponentTyped<TooltipProps> {}
