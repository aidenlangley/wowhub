import { SvelteComponentTyped } from 'svelte';
import { GradientColour } from '/Gradient';
import { BackgroundColour, TranslateDirection } from '/Translate';

export interface HeadingProps {
  direction: TranslateDirection;
  bg: BackgroundColour;
  fg: GradientColour;
}

export default class Heading extends SvelteComponentTyped<HeadingProps> {}
