import { SvelteComponentTyped } from 'svelte';

export interface FacebookProps {
  white: boolean;
  black: boolean;
}

export default class Foo extends SvelteComponentTyped<FacebookProps> {}
