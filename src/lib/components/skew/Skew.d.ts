import { GradientColour } from '$types/Gradient';
import { SkewDirection } from '$types/Skew';
import { SvelteComponentTyped } from 'svelte';

export interface TranslateProps {
  id: string;
  direction: SkewDirection;
  colour: GradientColour;
}

export default class Foo extends SvelteComponentTyped<TranslateProps> {}
