import { SvelteComponentTyped } from 'svelte';

export interface BannerProps {
  white: boolean;
}

export default class Foo extends SvelteComponentTyped<BannerProps> {}
