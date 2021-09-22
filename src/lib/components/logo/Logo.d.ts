import { SvelteComponentTyped } from 'svelte';

export interface LogoProps {
  /**
   * Large for 512x512, otherwise 64x64.
   */
  large: false;
  white: boolean;
}

export default class Logo extends SvelteComponentTyped<LogoProps> {}
