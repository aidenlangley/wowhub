import { SvelteComponentTyped } from 'svelte';

export interface LogoProps {
  white: boolean;
}

export default class Logo extends SvelteComponentTyped<LogoProps> {}
