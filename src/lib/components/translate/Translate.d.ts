import { BackgroundColour, TranslateDirection } from 'src/lib/models/Translate';
import { SvelteComponentTyped } from 'svelte';

export interface TranslateProps {
  direction: TranslateDirection;
  colour: BackgroundColour;
}

export default class Translate extends SvelteComponentTyped<TranslateProps> {}
