import { GradientColour } from '$types/Gradient';
import { SkewDirection } from '$types/Skew';
import { SvelteComponentTyped } from 'svelte';

export interface SkewProps {
  id: string;
  direction: SkewDirection;
  colour: GradientColour;
}

export default class Skew extends SvelteComponentTyped<SkewProps> {}
