import { BackgroundColour, TranslateDirection } from '$types/Translate';
import { SvelteComponentTyped } from 'svelte';

export interface TranslateProps {
  direction: TranslateDirection;
  colour: BackgroundColour;
}

export default class Translate extends SvelteComponentTyped<TranslateProps> {}
