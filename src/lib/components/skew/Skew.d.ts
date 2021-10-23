import { GradientColour } from 'src/lib/models/Gradient';
import { SkewDirection } from 'src/lib/models/Skew';
import { SvelteComponentTyped } from 'svelte';

export interface SkewProps {
  id: string;
  direction: SkewDirection;
  colour: GradientColour;
}

export default class Skew extends SvelteComponentTyped<SkewProps> {}
