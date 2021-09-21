import { SvelteComponentTyped } from 'svelte';

export interface BannerProps {
  white: boolean;
}

export default class Banner extends SvelteComponentTyped<BannerProps> {}
