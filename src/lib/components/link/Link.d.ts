import { SvelteComponentTyped } from 'svelte';

export interface LinkProps {
  href: string;
  internal: boolean;
  label: string;
  button: boolean;
  colour: string;
}

export default class Link extends SvelteComponentTyped<LinkProps> {}
