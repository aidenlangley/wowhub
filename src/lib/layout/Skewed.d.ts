export enum SkewColour {
  Default = 'bg-green-900 bg-opacity-80 from-green-700',
}

/**
 * Outer skews outer element, inner corrects it, e.g.
 * @outer `-skew-y-2`
 * @inner `skew-y-2`
 */
export interface Skew {
  outer: string;
  inner: string;
}
