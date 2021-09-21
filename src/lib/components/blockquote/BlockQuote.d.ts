import { SvelteComponentTyped } from 'svelte';

export interface BlockQuoteProps {
  right: boolean;
}

export default class BlockQuote extends SvelteComponentTyped<BlockQuoteProps> {}
