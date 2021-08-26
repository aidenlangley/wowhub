export enum SkewColour {
  Default = 'bg-green-800 bg-opacity-80 from-green-500 dark:from-green-600',
  Red = 'bg-red-800 bg-opacity-80 from-red-500 dark:from-red-600',
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
