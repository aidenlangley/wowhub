import { SvelteComponentTyped } from 'svelte';

export interface ParagraphProps {
  justify: boolean;
}

export default class Paragraph extends SvelteComponentTyped<ParagraphProps> {}
