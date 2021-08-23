<script lang="ts" context="module">
  export enum SkewColour {
    Default = 'bg-green-800 bg-opacity-80 from-green-500 dark:from-green-600',
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
</script>

<script lang="ts">
  import Column from './Column.svelte';

  export let colour = SkewColour.Default;
  export let gradient: string;
  export let skew: Skew;
</script>

<div
  class="
    {colour} {gradient} {skew.outer}
    border-t border-b border-gray-300 dark:border-gray-800
    shadow-xl
  "
>
  <Column>
    <div
      class="
        {skew.inner}  
        pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24
        pb-12 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24
        p-2 
      "
    >
      <slot />
    </div>
  </Column>
</div>
